import express  from 'express'
import { PostRecipe , GetRecipes , GetRecipe , DeleteRecipe , UpdateRecipe } from '../controllers/recipe'

export const RecipeRoutes  = express.Router()

RecipeRoutes.post('/recipe',PostRecipe);
RecipeRoutes.get('/recipes',GetRecipes);
RecipeRoutes.get('/recipe',GetRecipe);
RecipeRoutes.put('/recipe',UpdateRecipe);
RecipeRoutes.delete('/recipe',DeleteRecipe) 