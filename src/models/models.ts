import mongoose from "mongoose";
import  uniqueValidator from "mongoose-unique-validator";
export interface AuthSchema  extends mongoose.Document {
    email : string,
    password : string    
}



export interface RecipeSchema extends mongoose.Document {
    name : String,
    dishType : string,
    ingedients : string[],
    instruction : string[],
    
}

const AuthSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
})


const RecipeSchema = new mongoose.Schema({
    name : {type : String, required: true},
    dishType : {type : String, required: true},
    ingedients : {type : [String],},
    instruction : {type : [String],},
   
})


AuthSchema.plugin(uniqueValidator)

export const Auth = mongoose.model<AuthSchema>('auth',AuthSchema);
export const  Recipe = mongoose.model<RecipeSchema>('recipe',RecipeSchema)


