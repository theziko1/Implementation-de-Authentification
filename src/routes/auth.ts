import express from 'express'
import {registration , login} from '../controllers/auth'

export const AuthRoutes = express.Router()


AuthRoutes.post('/user',registration)
AuthRoutes.post('/users',login)



