import express from 'express';
import { Request , Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import   Auth  from './models/models'
import  Recipe  from './models/models'

  
const app = express();

//middlewares
app.use(express.json())

dotenv.config()

const PORT = process.env.PORT

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});