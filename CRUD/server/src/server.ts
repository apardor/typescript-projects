import 'express-async-errors';
import  express, { Application, NextFunction, Request, Response} from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'
import { createNewUser, signin } from './handlers/user'
import { resolveTxt } from 'dns'

const app : Application = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.get("/", (req: Request, res: Response, next: NextFunction)=>{
    console.log('hello from express');
    res.status(200)
    res.json({message: 'hello from express'})
})

app.use('/api', protect , router)

app.post('/user', createNewUser)
app.post('/signin', signin)

app.use((err, req: Request, res: Response, next: NextFunction)=>{
    if(err.type === 'auth'){
        res.status(401).json({message: 'unauthorized'})
    } else if(err.type === 'input'){
        res.status(400).json({message: 'invalid input'})
    } else {
        res.status(500).json({message: 'oops, that is our fault'})
    }
})

export default app