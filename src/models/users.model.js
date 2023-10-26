import mongoose  from "mongoose";

const usersCollection = "users" //Nombre de la coleccion

const userSchema = new mongoose.Schema({
    nombre : String,
    apellido : String,
    edad : Number,
    mail : {
        type : String,
        unique : true,
        required: true
    }
})

export const userModel = mongoose.model(usersCollection,userSchema);