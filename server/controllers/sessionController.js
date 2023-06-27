const { Session } = require('../models/sessionModel');
const sessionController ={};

sessionController.isLoggedIn = (req, res, next) => {
    Session.findOne({ cookieId: req.cookies.ssid })
    .then((session) => {
      // if session is not found, send status code 303 to frond-end
      if (!session) {
        res.status(303).json('No active session exists');
      } else {
      // if session is found, save cookie ssid in res.locals and return next()
        res.locals.userId = req.cookies.ssid;
        return next();
      }
    })
    .catch((err) => {
      return next({
        log: `isLoggedIn: ${err}`,
        status: 500,
        message: { err: 'error occurred in sessionController.isLoggedIn' },
      });
    });
}


sessionController.startSession = (req, res, next) => {
   // check if session already exists for user
  Session.findOne({cookieId: res.locals.user})
  .then((session) => {
    if (session) {
      return next();
    } else {
       // creating a session with a cookieId equals to the user id saved in res.locals
      Session.create({ cookieId: res.locals.user })
      .then(() => {
        return next();
      })
      .catch((err) => {
        return next({
          log: `startSession: ${err}`,
          status: 500,
          message: { err: 'error occurred in sessionController.startSession' },
        });
      });
    }
  })
  .catch((err) => {
    return next({
      log: `startSession: ${err}`,
      status: 500,
      message: { err: 'error occurred in sessionController.startSession' },
    })
  })
}

sessionController.logout = (req, res, next) => {
    try {
        const { userId } = req.body;
        const loggedOutUser = await Session.findOneAndDelete({cookieId: userId});
        if (loggedOutUser) {
          // clear HttpOnly cookie
          res.clearCookie('ssid', { httpOnly: true });
          res.locals.loggedOut = loggedOutUser;
          return next();
        } else {
          res.send('User session not found. Unable to logout');
        }
      } catch (err) {
        return next({
          log: `logout: ${err}`,
          status: 500,
          message: { err: 'error occurred in sessionController.logout' },
        });
      }
 }

module.exports = sessionController;






