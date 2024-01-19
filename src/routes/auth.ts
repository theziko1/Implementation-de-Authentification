import express, { Request, Response } from 'express'
import {registration , login, logout} from '../controllers/auth'
import { verifyToken } from '../middlewares/authMiddleware'
import { ExisteUser } from '../middlewares/authExisteUser'

export const AuthRoutes = express.Router()

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User registration and login
 */

/**
 * @swagger
 * /registration:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       description: User registration data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       401:
 *         description: Invalid registration data
 *       500:
 *         description: Internal server error
 */
AuthRoutes.post('/register',ExisteUser,registration)

 /**
   * @swagger
   * /login:
   *   post:
   *     summary: Log in a user
   *     tags: [Authentication]
   *     requestBody:
   *       description: User login data
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               email:
   *                 type: string
   *               password:
   *                 type: string
   *     responses:
   *       200:
   *         description: User logged in successfully
   *       401:
   *         description: Invalid login data or authentication failed
   *       500:
   *         description: Internal server error
   */
 AuthRoutes.post('/login',login)   
 /**
 * @swagger
 * /logout:
 *   get:
 *     summary: Logout user and clear authentication token
 *     tags: [Authentication]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: User logged out successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the operation was successful
 *                 message:
 *                   type: string
 *                   description: Message indicating the result of the operation
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   description: Indicates if the operation was successful
 *                 message:
 *                   type: string
 *                   description: Error message indicating the failure
 */ 
 AuthRoutes.get('/logout',logout)
// Protected route

/**
 * @swagger
 * /protected:
 *   get:
 *     summary: Access a protected route
 *     tags: [Authentication]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Protected route accessed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Message indicating successful access to the protected route
 *       401:
 *         description: Unauthorized, missing or invalid authentication token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message indicating the reason for unauthorized access
 */

AuthRoutes.get('/',verifyToken,(req : Request , res : Response) => {
    res.status(200).json({ message : "Protected route accessed"})
})



