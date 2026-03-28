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

// //crear tarea
// app.post("/tasks",(req,res)=>{
//     const newTask ={
//         id: id++,
//         title: req.body.title
//     };
//     task.push(newTask);
//     res.json(newTask)
// });
// //obtener tareas
// app.get("/tasks",(req,res)=>{
//     res.json(task);
// })
// //eliminar tareas
// app.delete("/tasks/:id",(req,res)=>{
//     const taskId = parseInt(req.params.id);

//     task = task.filter(t => t.id !== taskId);

//     res.json({message: "Tarea eliminada"})
// });
// //editar tareas
// app.put("/tasks/:id",(req, res) => {
//     const taskId = parseInt(req.params.id);

//     const foundTask = task.find(t => t.id === taskId);

//     if (!foundTask){
//         return res.status(404).json({message: "Tarea no encontrada"});

//     }
//     foundTask.title = req.body.title;
    
//     res.json(foundTask);
// });