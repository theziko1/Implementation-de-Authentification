import express, { Request, Response } from 'express'
import {registration , login} from '../controllers/auth'
import { verifyToken } from '../middlewares/authMiddleware'
import { ExisteUser } from '../middlewares/authExisteUser'

export const AuthRoutes = express.Router()


AuthRoutes.post('/register',ExisteUser,registration)
AuthRoutes.post('/login',login)  
// Protected route
AuthRoutes.get('/',verifyToken,(req : Request , res : Response) => {
    res.status(200).json({ message : "Protected route accessed"})
})



