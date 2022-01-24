const taskController = require('../controllers/task.controller.js');
const router = require('express').Router();

// Create a new task
router.route('/').post(taskController.createTask);

//Retrieve all tasks
router.route('/').get(taskController.findAll);


module.exports = router;