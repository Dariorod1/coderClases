import {Router} from "express";

import {userModel} from "../models/users.model.js"

const router = Router();

router.get("/", async(req,res) => {
    try {
       const users = await userModel.find(); 
       res.json({status: "Succes", data : users})
    } catch (error) {
        console.log(error.message);
        res.json({status: "Error", message: "No se pudo obtener la lista de usuarios"});
    }
});
router.get("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await userModel.findById(userId);
        if (user) {
            res.json({ status: "Success", data: user });
        } else {
            res.status(404).json({ status: "Error", message: "User not found" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ status: "Error", message: "Internal server error" });
    }
});
router.post("/", async(req,res) => {
    try {
        const userInfo = req.body;
        const userCreated = await userModel.create(userInfo)
        res.json({status:"Succes", data: userCreated});
    } catch (error) {
        console.log(error.message);
        res.json({status: "Error", message: "No se pudo crear el usuario"});
    }
})
router.put("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        console.log("Este es el id:", userId);
        const userReplace = req.body;
        console.log("Este es el body", userReplace);

        const userUpdated = await userModel.updateOne({ _id: userId }, userReplace)
        res.json({ status: "Success", message:"Usuario actualizado correctamente" });

    } catch (error) {
        console.error("Error:", error);
        res.json({ status: "Error", message: "Error al intentar actualizar el usuario" });
    }
});
router.delete("/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userModel.findByIdAndRemove(userId);
        if (deletedUser) {
            res.json({ status: "Success", useDelete: deletedUser,message: "Usuario borrado correctamente" });
        } else {
            res.json({ status: "Error", message: "Usuario no encontrado" });
        }
    } catch (error) {
        console.error("Error:", error);
        res.json({ status: "Error", message: "Error al intentar eliminar el usuario" });
    }
});

export {router as usersRoutes};