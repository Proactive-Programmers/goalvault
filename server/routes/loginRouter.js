const { Router } = require('express');
const  userController  = require('../controllers/userController');
const  sessionController  = require('../controllers/sessionController');
const  cookieController  = require('../controllers/cookieController');

const loginRouter = Router();
// loginRouter to handle login request
loginRouter.post('/loginRequest', userController.verifyUser,  sessionController.startSession, cookieController.setSSIDCookie, (req, res) => {
    return res.status(201).json('Sucessfully logged in');
});


module.exports = loginRouter;