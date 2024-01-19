import { NextFunction, Request , Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export interface CustomRequest extends Request {
    token: string | JwtPayload;
   }

export const verifyToken = (req : Request, res : Response, next : NextFunction) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({ error : "Acces denied"})
    }
    try {
        const decoded = jwt.verify(token, process.env.SECRET_KEY as string);
        (req as CustomRequest).token = decoded;
        
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
}