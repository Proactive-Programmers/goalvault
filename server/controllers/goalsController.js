const db = require('../models/goalModel');
const goalsController = {};

goalsController.addGoal = (req, res, next) => {
    // user_id 
    // goal_name
    const { user_id, goal_name } = req.body;
    //define the query string for inserting the goal into goals table
    const queryString = `INSERT INTO goals (user_id, goal_name) VALUES ( $1, $2) RETURNING *`;
    db.query(queryString, [user_id, goal_name])
    .then((data) => {
       const goal = {};
       goal['goal_id'] = data.rows[0].id;
       goal['goal_name'] = data.rows[0]['goal_name'];
       res.locals.goal = goal;
       return next();
    })
    .catch((err) => {
        return next({
            log: `addGoal: ${err}`,
            status: 500,
            message: { err: 'error occurred in goalController addGoal' },
        });
    });
};

goalsController.getGoals = (req, res, next) => {
    const { user_id} = req.params
    //define the query string for inserting the goal into goals table
    const queryString = `SELECT * FROM goals WHERE user_id = $1`;
    db.query(queryString, [user_id])
    .then((data) => {
        res.locals.goals = data.rows
       return next();
    })
    .catch((err) => {
        return next({
            log: `addGoal: ${err}`,
            status: 500,
            message: { err: 'error occurred in goalController addGoal' },
        });
    });
};

module.exports = goalsController;