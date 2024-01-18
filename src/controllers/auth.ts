import { Request , Response } from "express"
import {Auth} from "../models/models"



// User registration

export const registration = (req : Request,res : Response) => {
     const {email , password} = req.body
     const newUser = new Auth({
        email,
        password,
     })
     newUser.save()
     try {
        res.status(201).json({ message : "User Created successfully"})
     } catch (error) {
        res.status(500).json({ error : "User not Created"+error})
     }


}  

// User login

   export const login = (req : Request , res : Response) => {
      const Users = Auth.find()
      try {
         if(Users)
         res.status(200).json({data : Users})
      } catch (error) {
         res.status(500).json({error : "Users not found"})
      }
   }



