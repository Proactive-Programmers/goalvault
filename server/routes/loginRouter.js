const { Router } = require('express');
const { verifyUser } = require('../controllers/userController');

const loginRouter = Router();
// loginRouter to handle login request
loginRouter.post('/', verifyUser, (req, res) => {
    return res.status(201).json('You are logged in');
});


module.exports = loginRouter;