const { Router } = require('express');
const goalsRouter = Router();
const goalsController = require ('../controllers/goalsController');

//handle addGoals post request
goalsRouter.post('/', goalsController.addGoal, (req, res) => {
    return res.status(201).json(res.locals.goal);
})

goalsRouter.get('/:user_id',goalsController.getGoals, (req, res) => {
    return res.status(200).json(res.locals.goals);
})

module.exports = goalsRouter;
