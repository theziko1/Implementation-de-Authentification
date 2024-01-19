import { Request , Response } from "express"
import {Auth} from "../models/models"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { validateLogin, validateRegister } from "../middlewares/validate"

dotenv.config()



// User registration

export const registration = async (req : Request,res : Response) => {
   try { 
      const valid = validateRegister(req.body)
      if (valid.error) {
         return res.status(401).json({error : valid.error.message})
      }
      const {email , password} = req.body
   const passHash = await bcrypt.hash(password,10)
     const newUser = new Auth({
        email,
        password : passHash,
     })
    await newUser.save()
    
        res.status(201).json({ message : "User registered successfully"})
     } catch (error) {
        res.status(500).json({ error : "User not registered"})
     }


}  

// User login

   export const login = async (req : Request , res : Response) => {
      try { 
         const valid = validateLogin(req.body)
         if (valid.error) {
            return res.status(401).json({error : valid.error.message})
         }
         const { email , password} = req.body
         const User = await Auth.findOne({ email })  
     
         if(!User) {
           return res.status(401).json({error : "Authentication failed"})
         }
         const MatchedPass = bcrypt.compare(password,User.password)
         if (!MatchedPass) {
            return res.status(401).json({error : "Authentication failed"})
         }
         const token = jwt.sign({ userId: User._id }, process.env.SECRET_KEY as string, {
            expiresIn: '6h',
            });
         res.status(200).json({token}) 
         
      } catch (error) {
         res.status(500).json({error : "login failed"})
      }
   }



