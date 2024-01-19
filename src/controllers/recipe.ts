import  { Request , Response } from 'express'
import {Recipe} from '../models/models'  

// Create Recipe (Create Method)

export const PostRecipe = (req : Request, res : Response) => {
    const {name , dishType , ingedients , instruction} = req.body
    const NewRecipe = new Recipe({
        name,
        dishType,
        ingedients,
        instruction,
    })
    NewRecipe.save()
    try {
        res.status(201).json({message : "Recipe Created succesfully"})
    } catch (error) {
        res.status(500).json({error : "Recipe not Created"})
    }    
}

// Read Recipes (Get Recipes - READ Method)

export const GetRecipes = (req : Request , res : Response) => {
    const GetRecipes = Recipe.find()
      try {
         if(GetRecipes)
         res.status(200).json({data : GetRecipes})
      } catch (error) {
         res.status(500).json({error : "Recipes not found"})
      }
}

// Read Recipe (Get Recipe  by id - READ Method)

export const GetRecipe = (req : Request , res : Response) => {
    const GetRecipe = Recipe.findById(req.query)
    try {
       if(GetRecipe)
       res.status(200).json({data : GetRecipe})
    } catch (error) {
       res.status(500).json({error : "Recipes not found"})
    }
}

// Update Recipe (Update Recipe by id - Update Method)

export const UpdateRecipe = (req : Request , res : Response) => {
    Recipe.findByIdAndUpdate(req.query,req.body)
    try {
       res.status(200).json({message : "Recipe is Updated"})
    } catch (error) {
       res.status(500).json({error : "Recipes not found"})
    }
}

// Delete Recipe (Delete Recipe by id - Delete Method)

export const DeleteRecipe = (req : Request , res : Response) => {
    Recipe.findByIdAndDelete(req.query)
    try {
       res.status(200).json({message : "Recipe is Deleted "})
    } catch (error) {
       res.status(500).json({error : "Recipes not found"})
    }
}