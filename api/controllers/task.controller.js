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
        status: req.body.status,

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



