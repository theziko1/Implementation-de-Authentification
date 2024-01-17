import mongoose from "mongoose";
import  uniqueValidator from "mongoose-unique-validator";
interface AuthSchema  {
    email : string,
    password : string
}

interface RecipeSchema {
    name : String,
    dishType : string,
    ingedients : string[],
    instruction : string[]
}

const AuthSchema = new mongoose.Schema<AuthSchema>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})


const RecipeSchema = new mongoose.Schema<RecipeSchema>({
    name : {type : String, required: true},
    dishType : {type : String, required: true},
    ingedients : {type : [String],},
    instruction : {type : [String],}
})


AuthSchema.plugin(uniqueValidator)

export const Auth = mongoose.model('auth',AuthSchema);
export const  Recipe = mongoose.model('recipe',RecipeSchema)


