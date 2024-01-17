import { Request , Response } from "express"
import {Auth} from "../models/models"


// Create User (Create Method)

export const CreateUser = (req : Request,res : Response) => {
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

// Read Users (Get Users - READ Method)

   export const GetUsers = (req : Request , res : Response) => {
      const Users = Auth.find()
      try {
         if(Users)
         res.status(200).json({data : Users})
      } catch (error) {
         res.status(500).json({error : "Users not found"})
      }
   }

// Read User (Get User  by id - READ Method)

   export const GetUser = (req : Request , res : Response) => {
      const User = Auth.findById(req.query)
      try {
         if(User)
         res.status(200).json({data : User})
      } catch (error) {
         res.status(500).json({error : "User not found"})
      }
   }

// Update User (Update User by id - Update Method)
   
   export const UpdateUser = (req : Request , res : Response) => {
      const User = Auth.findByIdAndUpdate(req.query,req.body)
      try {
         if(User)  
         res.status(200).json({data : User})
      } catch (error) {
         res.status(500).json({error : "User not found"}) 
      }
   }

// Delete User (Delete User by id - DELETE Method)

   export const deleteUser = (req : Request , res : Response) => {
      const User = Auth.findByIdAndDelete(req.query)
      try {
         if(User)
         res.status(200).json({data : User})
      } catch (error) {
         res.status(500).json({error : "User not found"})
      }
   }

