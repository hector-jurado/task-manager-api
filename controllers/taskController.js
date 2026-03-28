const db = require("../db");

exports.getTasks =(req, res) => {
    db.query("SELECT * FROM tasks",(err,results)=>{
        if (err) return res.status(500).json(err);
        res.json(results);
    });
};
// POST
exports.createTask = (req, res) => {
    const {title} = req.body;
    db.query(
        "INSERT INTO tasks (title) VALUES (?)",
        [title],
        (err, result) => {
            if (err) return res.status(500).json(err);
            res.json({
                id: result.insertId,
                title
            });
        }
    );
};
//DELETE
exports.deleteTask = (req, res) => {
    const taskId = req.params.id;
    db.query(
        "DELETE FROM tasks Where id = ?",
        [taskId],
        (err) =>{
            if (err) return res.status(500).json(err)
            res.json({message: "Tarea eliminada"});
        }
    );
    
};
//UPDATE
exports.updateTask = (req, res) => {
    const taskId = req.params.id;
    const {title} = req.body;
    db.query(
        "UPDATE tasks SET title =? WHERE id = ?",
        [title, taskId],
         (err, result) =>{
            if (err) return res.status(500).json(err);

            if (result.affectedRows === 0){
                return res.status(404).json({message: "Tarea no encontrada"});
            }
            res.json({id: taskId, title});
        }
    );
};
