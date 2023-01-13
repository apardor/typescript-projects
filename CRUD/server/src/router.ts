import { Router, Request, Response } from 'express';
import { body, validationResult } from "express-validator";
import { createPet, deletePet, getOnePet, getPets, updatePet } from './handlers/pet';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/updates';
import { handleInputErrors } from './modules/middleware';


const router = Router()

/*Pet*/
router.get('/pets/', getPets)
router.get('/pets/:id',getOnePet)
router.post('/pets', body('name').isString(), handleInputErrors, createPet)
router.put('/pets/:id', body('name').isString(), handleInputErrors,  updatePet)
router.delete('/pets/:id', deletePet)


/*Update*/
router.get('/update/', getUpdates)
router.get('/update/:id', getOneUpdate)
router.put('/update/:id', 
    body('title').optional(),
    body('body').optional(), 
    body('status').isIn(['AT_HOME', 'AT_VET','VACCINATED','HOSPITALIZED','CHECKED']).optional(),
    updateUpdate
)
router.post('/update', 
    body('title').exists().isString(),
    body('body').exists().isString(), 
    body('petId').exists().isString(),
    createUpdate
)
router.delete('/update/:id', deleteUpdate)


/*Update Point*/
router.get('/updatepoint/', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id', 
    body('name').optional().isString(), 
    body('description').optional().isString(),
    () => {}
    )

router.post('/updatepoint', 
    body('name').isString(), 
    body('description').isString(),
    body('updateId').exists().isString(),
    () => {})

router.delete('/updatepoint/:id', () => {})

export default router
