import Joi from "joi";
import { AuthSchema, RecipeSchema } from "../models/models";


// login for a User

export const validateLogin = (login : {email : string , password : string}) => {
   const loginSchema = Joi.object({
      email : Joi.string().email().required(),
      password : Joi.string().min(8).max(18).required()
   });

   return loginSchema.validate(login)
}


// Registrer for a User

export const validateRegister = (User : AuthSchema) => {
    const userSchema = Joi.object<AuthSchema>({
       email : Joi.string().email().required(),
       password : Joi.string().min(8).max(18).required()
    });
 
    return userSchema.validate(User)
 }



// for a post the recipe
export const validateRecipe = (recipe : RecipeSchema) =>{
    const recipeSchema = Joi.object<RecipeSchema>({
    name : Joi.string().min(5).max(30).required(),
    dishType :Joi.string().min(4).max(10).required() ,
    ingedients : Joi.array().items(Joi.string()),
    instruction : Joi.array().items(Joi.string()),
    })

    return recipeSchema.validate(recipe)
}