const Task = require('../models/taskSchema.js');

//Create a new task
exports.createTask = async (req, res) => {
    if (!req.body.title) {
        return res.status(400).send({
            message: "content can not be empty"
        });
    }
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status || 'todo',

    });
    task.save(task)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the task."
            });
        });
}

//retrieve all tasks
exports.findAll = async (req, res) => {

    Task.find()
        .then(tasks => {
            res.send(tasks);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tasks."
            });
        });
}

//delete a task
exports.delete = (req, res) => {
    const id = req.params.id;
    Task.findByIdAndRemove(id)
        .then(task => {
            if (!task) {
                return res.status(404).send({
                    message: "Task not found with id "
                });
            }
            res.send({ message: "Task deleted successfully!" });
        }).catch(err => {
            res.status(500).send({
                message: "Could not delete task with id "
            });
        });
}

//update a task
exports.update = (req, res) => {
    const id = req.params.id;
    Task.findByIdAndUpdate(id, req.body)
        .then(task => {
            if (!task) {
                return res.status(404).send({
                    message: "Task not found with id "
                });
            }
            res.send(task);
        }
        ).catch(err => {
            res.status(500).send({
                message: "Could not update task with id "
            });
        });
}




