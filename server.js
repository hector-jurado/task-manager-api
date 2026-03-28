//Creacion servidor
const express = require("express");
const app = express();

app.use(express.json());

const PORT = 3000;
//importar las rutas
const taskRoutes = require("./routes/tasks");
//usar rutas
app.use("/tasks",taskRoutes);
app.get("/", (req,res)=>{
    res.send("API funcionando")
});

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
