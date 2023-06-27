const bcrypt = require('bcryptjs');
const User = require('../models/userModel')
const userController = {};

userController.verifyUser = (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return next({
            log: 'error with username or password in userController.verifyUser',
            status: 400,
            message: { err: 'An error occurred' },
        });
    }
  //search user in database
    User.findOne({ username })
    .then((user) => {
      // redirect to signup page if user does not exist
        if (!user) {
            res.status(404).json('Invalid Username or Password');
        } else {
        // compare password from request body to password of the user found in database
            bcrypt.compare(password, user.password).then((result) => {
          // if password doesn't match redirect to signup page
            if (!result) {
                res.status(404).json('Invalid Username or Password');
            } else {
            // if password matches then save the user's id to res.locals
                res.locals.user = user.id;
                return next();
            }
        });
        }
    })
    .catch((err) => {
        return next({
            log: `verifyUser erro occurred: ${err}`,
            status: 500,
            message: { err: 'error occurred in userController.verifyUser' },
        });
    });
};

module.exports = userController;
