const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
    console.log('inside setSSIDCookie');
    next();
}

module.exports = cookieController;