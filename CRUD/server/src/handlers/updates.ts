import prisma from "../db";
import { Request, Response } from 'express';

export const getOneUpdate = async (req: Request, res: Response) => {
    const update = await prisma.update.findUnique({
        where:{
            id: req.params.id
        }
    })
    res.json({data: update})
}

export const getUpdates = async (req: Request, res: Response) => {
    const pet = await prisma.pet.findMany({
        where:{
            ownedById: req.user.id
        },
        include:{
            updates: true
        }
    })
    const updates = pet.reduce((allUpdates, pet) => {
        return [...allUpdates, ...pet.updates]
    }, [])

    res.json({data: updates})
}

export const createUpdate = async (req: Request, res: Response) => {
    const pet = await prisma.pet.findUnique({
        where:{
        id: req.body.petId
        }
    })
    if (!pet){
        return res.json({message: 'no correct id'})
    }
    const update = await prisma.update.create({
        data: req.body
    })
    res.json({data: update})
}

export const updateUpdate = async (req: Request, res: Response) => {
    const pets = await prisma.pet.findMany({
        where: {
            ownedById: req.user.id,
        } ,
        include:{
            updates: true
        }
    })
    const updates = pets.reduce((allUpdates, pet) => {
        return [...allUpdates, ...pet.updates]
    }, [])

    const match = updates.find(update => update.id === req.params.id)

    if(!match){
        return res.json({message: 'no match'})
    }

    const updatedUpdate = await prisma.update.update({
        where: {
            id: req.params.id
        },
        data: req.body
    })

    res.json({data: updateUpdate})
}

export const deleteUpdate = async (req: Request, res: Response) => {
    const pets = await prisma.pet.findMany({
        where: {
            ownedById: req.user.id,
        } ,
        include:{
            updates: true
        }
    })
    const updates = pets.reduce((allUpdates, pet) => {
        return [...allUpdates, ...pet.updates]
    }, [])

    const match = updates.find(update => update.id === req.params.id)

    if(!match){
        return res.json({message: 'no match'})
    }

    const deleted = await prisma.update.delete({
        where:{
            id: req.params.id
        }
    })

    res.json({data: deleted, message: 'deleted'})
}