import mongoose from "mongoose";

interface AuthSchema  {
    email : string,
    password : string
}

const AuthSchema = new mongoose.Schema<AuthSchema>({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})


const RecipeSchema = new mongoose.Schema({

})

const Auth = mongoose.model('auth',AuthSchema);
const  Recipe = mongoose.model('recipe',RecipeSchema)


export default {Auth , Recipe}