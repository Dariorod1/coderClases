import express from "express"
import {usersRoutes} from "./routes/users.rotues.js"
import {studentsRoutes} from "./routes/students.routes.js"
import {connectDB} from "./config/dbConnection.js"

const port = 8080;
const app = express();

app.use(express.json());

app.listen(port, () => console.log(`Servidor escuchando en el puert ${port}`));

connectDB();
app.use("/api/users", usersRoutes)
app.use("/api/students",studentsRoutes)
