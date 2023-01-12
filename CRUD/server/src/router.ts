import { Router, Request, Response } from 'express';
import { body, oneOf, validationResult } from "express-validator";
import { createPet, deletePet, getOnePet, getPets, updatePet } from './handlers/pet';
import { handleInputErrors } from './modules/middleware';


const router = Router()

/*Pet*/
router.get('/pets/', getPets)
router.get('/pets/:id',getOnePet)
router.post('/pets', body('name').isString(), handleInputErrors, createPet)
router.put('/pets/:id', body('name').isString(), handleInputErrors,  updatePet)
router.delete('/pets/:id', deletePet)


/*Update*/
router.get('/update/', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', 
    body('title').optional(),
    body('body').optional(), 
    body('status').isIn(['AT_HOME', 'AT_VET','VACCINATED','HOSPITALIZED','CHECKED']),
    (req: Request ,res: Response) => {}
)
router.post('/update', 
    body('title').exists().isString(),
    body('body').exists().isString(), 
    (req: Request ,res: Response) => {}
)
router.delete('/update/:id', () => {})


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
