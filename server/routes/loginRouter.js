const { Router } = require('express');
const  userController  = require('../controllers/userController');

const loginRouter = Router();
// loginRouter to handle login request
loginRouter.post('/loginRequest', userController.verifyUser, (req, res) => {
    return res.status(201).json('Sucessfully logged in');
});

// loginRouter to handle sign up request
loginRouter.post('/signupRequest', userController.verifyAccount, userController.createUser,
  (req, res) => {
    return res.status(201).json('Account created successfully!');
  }
);

module.exports = loginRouter;