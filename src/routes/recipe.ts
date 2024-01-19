import express  from 'express'
import { PostRecipe , GetRecipes , GetRecipe , DeleteRecipe , UpdateRecipe } from '../controllers/recipe'

export const RecipeRoutes  = express.Router()
/**
 * @swagger
 * tags:
 *   name: Recipes
 *   description: CRUD operations for managing recipes
 */

/**
 * @swagger
 * /recipes:
 *   post:
 *     summary: Create a new recipe
 *     tags: [Recipes]
 *     requestBody:
 *       description: Recipe data to be created
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               dishType:
 *                 type: string
 *               ingedients:
 *                 type: array
 *                 items:
 *                   type: string
 *               instruction:
 *                 type: string
 *     responses:
 *       201:
 *         description: Recipe created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Success message indicating the recipe creation
 *       401:
 *         description: Invalid recipe data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating the reason for invalid data
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating the internal server error
 */
RecipeRoutes.post('/recipe',PostRecipe);
/**
   * @swagger
   * /recipes:
   *   get:
   *     summary: Get all recipes
   *     tags: [Recipes]
   *     responses:
   *       200:
   *         description: List of recipes
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 data:
   *                   type: array
   *                   items:
   *                     $ref: '#/components/schemas/Recipe'
   *       500:
   *         description: Internal server error
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   description: Error message indicating the internal server error
   */
RecipeRoutes.get('/recipes',GetRecipes);
  /**
   * @swagger
   * /recipes/{id}:
   *   get:
   *     summary: Get a recipe by ID
   *     tags: [Recipes]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: ID of the recipe to retrieve
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Recipe details
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/Recipe'
   *       500:
   *         description: Internal server error
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   description: Error message indicating the internal server error
   */
RecipeRoutes.get('/recipe',GetRecipe);
 /**
   * @swagger
   * /recipes/{id}:
   *   put:
   *     summary: Update a recipe by ID
   *     tags: [Recipes]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: ID of the recipe to update
   *         required: true
   *         schema:
   *           type: string
   *     requestBody:
   *       description: Updated recipe data
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/Recipe'
   *     responses:
   *       200:
   *         description: Recipe updated successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   description: Success message indicating the recipe update
   *       500:
   *         description: Internal server error
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   description: Error message indicating the internal server error
   */
RecipeRoutes.put('/recipe',UpdateRecipe);
/**
   * @swagger
   * /recipes/{id}:
   *   delete:
   *     summary: Delete a recipe by ID
   *     tags: [Recipes]
   *     parameters:
   *       - in: path
   *         name: id
   *         description: ID of the recipe to delete
   *         required: true
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Recipe deleted successfully
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 message:
   *                   type: string
   *                   description: Success message indicating the recipe deletion
   *       500:
   *         description: Internal server error
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *                   description: Error message indicating the internal server error
   */
RecipeRoutes.delete('/recipe',DeleteRecipe);