import mongoose from "mongoose";

const studentCollection = "students";

const studentSchema = new mongoose.Schema({
    nombre: {
        type: String,
        requerid : true
    },
    apellido: {
        type: String,
        requerid : true
    },
    edad: {
        type: Number,
        requerid : true
    },
    dni: {
        type : String,
        requerid: true,
        unique : true
    },
    curso: {
        type : String,
        requerid : true
    },
    nota :{
        type : Number,
        requerid: true
    }
})

export const studentModel = mongoose.model(studentCollection,studentSchema);