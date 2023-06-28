const { Router } = require('express');
const tasksController = require('../controllers/tasksController');
const tasksRouter = Router();
//handle add subtasks post request
tasksRouter.post('/:goal_id', tasksController.addTask, (req, res) => {
    return res.status(201).json(res.locals.task);
})
//handle all tasks get request
tasksRouter.get('/:goal_id', tasksController.getTasks, (req, res) => {
    return res.status(200).json(res.locals.allTasks);
})
//handle task update
tasksRouter.patch('/:task_id', tasksController.updateTask, (req, res) => {
    return res.status(202).json(res.locals.updatedTask); 
})
// //handle task delete request
// subTasksRouter.delete('/allTasks/:task_id', subtasksController.deleteTask, (req, res) => {
//     return res.status(204).json(); 
// })

module.exports = tasksRouter;