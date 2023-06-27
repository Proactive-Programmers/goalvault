const userController = {};

userController.verifyUser = (req, res, next) => {
    console.log('inside verifyuser');
    next();
}

module.exports = userController;