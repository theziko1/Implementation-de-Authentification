import { NextFunction, Request , Response } from "express";
import { Auth } from "../models/models";



export const ExisteUser = async( req : Request , res : Response, next : NextFunction) => {
    try {
            const { email } = req.body
            const CheckEmail = await Auth.findOne({ email })
            
            
            if (CheckEmail) {
                res.status(401).json({
                    success : false,
                    message : "Email already Existe"
                })
            }
            next()
    } catch (error) {
        res.status(500).json({ error : "User not registered"})
    }
    
    


}