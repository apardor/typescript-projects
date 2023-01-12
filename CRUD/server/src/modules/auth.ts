import jwt from 'jsonwebtoken'
import  express, { Application, Request, Response, NextFunction} from 'express'
import { userInfo } from 'os'


export const createJWT = (user) => {
    const token = jwt.sign({
        id: user.id, 
        username: user.username
    },
    process.env.JWT_SECRET )

    return token
}

export const protect = (req: Request, res: Response, next: NextFunction ) => {
    const bearer = req.headers.authorization;
    if(!bearer){
        res.status(401)
        res.json({message: 'user not authorized'})
        return
    }

    const [, token] = bearer.split(' ')

    if(!token){
        res.status(401)
        res.json({message: 'not valid token'})
        return
    }

    try{
        const user = jwt.verify(token, process.env.JWT_SECRET)
        req.user = user
        next()
    } catch (e) {
        console.log(e);
        res.status(401)
        res.json({message: 'not valid/true token '})
        return
    }

 
}