import express from 'express';
import {Express,  Request , Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

  
const app : Express = express();

//middlewares
app.use(express.json())

// dotenv config for PORT and URL of DataBase
dotenv.config()

const PORT = process.env.PORT

// Connection Method

mongoose.connect(process.env.MONGO_URL  as string)
.then(()=>{
  console.log("connected to Database");
})
.catch((error) => {
  console.log("Error connecting to MongoDB:", error);
})

app.get('/', (req : Request , res : Response ) => {
  res.send('Hello, World!');
});

// listening to port in the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});