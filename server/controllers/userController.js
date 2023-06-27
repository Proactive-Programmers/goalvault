const bcrypt = require('bcryptjs');
const db = require('../models/goalModel');
const userController = {};
const saltRound = 10;

// login middleware
userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return next({
      log: 'error with username or password in userController.verifyUser',
      status: 400,
      message: { err: 'An error occurred' },
    });
  }

  const queryString = `SELECT * FROM users WHERE username = $1`;
  res.locals.user = {};
  db.query(queryString, [username])
    .then((data) => {
      // console.log('data.rows in userController.userVarification', data.rows);
      //if user is not in the database
      if (data.rows[0] === undefined) {
        res.locals.user.status = 'UserNotFound';
        return next();
      }

      const pwInDb = data.rows[0].password;
      //if pw user provided is not matching to pw in DB
      if (!bcrypt.compareSync(password, pwInDb)) {
        //redirect to signup page
        res.status(404).json('Invalid Username or Password');
        return next();
      }
      res.locals.user.username = data.rows[0].username;
      return next();
    })
    .catch((err) => {
      return next({
        log: `userController.userVarification middleware error: ${err.message}`,
        status: 501,
        message: 'Failed to execute query to POST all activities',
      });
    });
};

// signup request middleware
userController.verifyAccount = (req, res, next) => {
  // console.log('req.body', JSON.stringify(req.body));
  const { username } = req.body;
  // console.log('signup vars',username, password, first_name)
  res.locals.user = {};

  const queryString = `SELECT * FROM users WHERE username = $1`;
  db.query(queryString, [username])
    .then((data) => {
      if (data.rows[0] !== undefined) {
        res.locals.user.status = 'UsernameExists';
        res.sendStatus(409);
      } else {
        return next();
      }
    })
    .catch((err) => {
      const errorObj = {
        log: `verifyAccount error ${err.message}`,
        status: 500,
        message: { err: 'error occurred in userController-verifyAccount' },
      };
      return next(errorObj);
    });
};

userController.createUser = async (req, res, next) => {
  const { username, password } = req.body;
//   console.log('res.locals is: ', res.locals);
const hashedPw = await bcrypt.hash(password, saltRound);
  // console.log('hashedPw', hashedPw, typeof hashedPw)
  const queryString = `INSERT INTO users (username, password) 
                        VALUES ( $1, $2)
                        RETURNING *`;
  db.query(queryString, [username, hashedPw])
    .then((data) => {
        console.log('data at row zero: ', data.rows[0]);
      res.locals.username = data.rows[0].username;
      const { newUser } = res.locals;
      return next();
    })
    .catch((err) => {
        console.log('the error is: ', err)
      return next({
        log: `createUser: ${err}`,
        status: 500,
        message: {err: 'error occurred in createUser-create'},
      });
    });
};

module.exports = userController;
