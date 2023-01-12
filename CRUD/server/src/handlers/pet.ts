import prisma from "../db";
import { Request, Response } from 'express';


//Get all
export const getPets = async (req: Request, res: Response) => {
    const user = await prisma.user.findUnique({
        where: {
            id: req.user.id
        },
        include: {
            pets: true  
        }
    })
    res.json({data: user.pets})
}


//Get one
export const getOnePet = async (req: Request, res: Response ) => {
    const id = req.params.id;
    const pet = await prisma.pet.findFirst({
        where: {
            id,
            ownedById: req.user.id
        }
    });
    res.json({data: pet})
}

//Create one
export const createPet = async (req: Request, res: Response) => {
    const pet = await prisma.pet.create({
        data:{
            name: req.body.name,
            breed: req.body.breed,
            birthDate: req.body.birthDate,
            ownedById: req.user.id
        }
    })
    res.json({data: pet})
}

//Update puppy
export const updatePet = async (req: Request, res: Response) => {
    const updated = await prisma.pet.update({
        where: {
            id_ownedById: {
                id: req.params.id,
                ownedById: req.user.id
              }        
            },
        data:{
            name: req.body.name,
            breed: req.body.breed,
            birthDate: req.body.birthDate,
        }
    })
    res.json({ data: updated})
}

//Delete puppy
export const deletePet = async (req: Request, res: Response) => {
    const deleted = await prisma.pet.delete({
        where: {
          id_ownedById: {
            id: req.params.id,
            ownedById: req.user.id
          }

        }
    })
    res.json({data: deleted, message: 'has been deleted'} )
}