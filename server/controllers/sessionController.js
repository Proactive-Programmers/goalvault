const sessionController ={};

sessionController.startSession = (req, res, next) => {
    console.log('session has started');
    next();
}

module.exports = sessionController;