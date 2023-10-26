import {Router} from "express";

import {studentModel} from "../models/students.model.js"

const router = Router();

router.get("/", async (req,res) => {
    try {
        const students = await studentModel.find();
        res.json({status: "succes", data: students})
    } catch (error) {
        console.log(error)
        res.json({status: "Error", error: error.message})
    }
})

const students = [
    {nombre:"Mario", apellido:"Gutierrez", edad:35,dni:12456,curso:"BackEnd", nota :10},
    {nombre:"Armando", apellido:"Pedevilla", edad:25,dni:123765,curso:"BackEnd", nota :10}
]

router.post("/", async (req,res) => {
    try {
        const studentsCreated = await studentModel.insertMany(students)
        res.json({status:"Succes", data: studentsCreated})
    } catch (error) {
        console.log(error)
        res.json({status: "Error", error: error.message})
    }
})

export {router as studentsRoutes}