const db = require('../models/goalModel');
const tasksController = {};

tasksController.addTask = (req, res, next) => {
    const { goal_id, task, due_date, priority } = req.body;
    const queryString = `INSERT INTO subtasks (goal_id, task, due_date, priority) VALUES ($1, $2, $3, $4) RETURNING *`;
    db.query(queryString, [goal_id, task, due_date, priority])
    .then((data) => {   
        console.log('data is: ', )
        res.locals.task = data.rows[0];
        return next();
    })
    .catch((err) => {
        return next({
            log: `addTask error is: ${err}`,
            status: 500,
            message: { err: 'error occurred in subTasksController addTask' },
        });
    });
}  

tasksController.getTasks = (req, res, next) => {
    const { goal_id } = req.params
    const queryString = `SELECT * FROM subtasks WHERE goal_id = $1`;
    db.query(queryString, [goal_id])
    .then((data) => {
        res.locals.allTasks = data.rows;
        return next();
    })
    .catch((err) => {
        return next({
            log: `getTasks error is: ${err}`,
            status: 500,
            message: { err: 'error occurred in tasksController getTasks' },
        });
    });
}  

tasksController.updateTask = (req, res, next) => {
    const { task_id } = req.params
    const queryString = ``;

}  

module.exports = tasksController;

    // db.query(queryString, [goal_id])
    // .then((data) => {
    //     console.log('data from get all tasks', data);
    //     res.locals.allTasks = data.rows;
    //     return next();
    // })
    // .catch((err) => {
    //     return next({
    //         log: `getTasks error is: ${err}`,
    //         status: 500,
    //         message: { err: 'error occurred in tasksController getTasks' },
    //     });
    // });