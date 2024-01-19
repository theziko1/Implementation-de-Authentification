import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'
import {Express,  Request , Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { AuthRoutes } from './routes/auth';
import { RecipeRoutes } from './routes/recipe';
import swaggerDocs from './docs/swagger';



  
const app : Express = express();

//middlewares
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors({
    credentials : true,
    origin : "http://localhost:5173",
}))
app.use("/auth",AuthRoutes)
app.use("/",RecipeRoutes)



// dotenv config for PORT and URL of DataBase
dotenv.config()

const PORT = process.env.PORT

swaggerDocs(app, PORT as string)
// Connection Method

mongoose.connect(process.env.MONGO_URL  as string)
.then(()=>{
  console.log("connected to Database");
})
.catch((error) => {
  console.log("Error connecting to MongoDB:", error);
})



// listening to port in the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});