import  { Request , Response } from 'express'
import {Recipe} from '../models/models'
import { validateRecipe } from '../middlewares/validate'

// Create Recipe (Create Method)

export const PostRecipe = (req : Request, res : Response) => {
   const valid = validateRecipe(req.body)
   if (valid.error) {
      return res.status(401).send({error : valid.error.message})
   }
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
   Recipe.find()
   .then((Recipes)=>{
    res.status(200).json(Recipes)
   })
   .catch((error)=>{
    res.status(500).json({ error : "Failed to retrieve recipes "})
    console.log(error)
   })
}

// Read Recipe (Get Recipe  by id - READ Method)

export const GetRecipe = (req : Request , res : Response) => {
   Recipe.findById(req.query.id)
    
    
   .then((Recipe)=>{
       if (Recipe) {
           res.status(200).json(Recipe)
       } else {
           res.status(404).json({ error: 'Recipe not found' });
       }
    
   })
   .catch((error)=>{
    res.status(500).json({ error : "Failed to retrieve recipes "})
   })
}

// Update Recipe (Update Recipe by id - Update Method)

export const UpdateRecipe = async (req : Request , res : Response) => {
   try {
   const { query: { id } } = req;
   const updatedRecipe = await Recipe.findByIdAndUpdate(id,req.body,{ new: true })
      if (!updatedRecipe) {
         return res.status(404).json({ message: 'Recipe not found' });
       }
       res.status(200).json({data: updatedRecipe ,message : "Recipe is Updated"})
    } catch (error) {
       res.status(500).json({error : "Recipes not found"})
    }
}

// Delete Recipe (Delete Recipe by id - Delete Method)

export const DeleteRecipe = async (req : Request , res : Response) => {
    await Recipe.findByIdAndDelete(req.query.id)
    try {
       res.status(200).json({message : "Recipe is Deleted"})
    } catch (error) {
       res.status(500).json({error : "Recipes not found"})
    }
}