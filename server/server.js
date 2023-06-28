const express = require('express');
const path = require('path');
// const cors = require('cors');
const cookieParser = require('cookie-parser');
const loginRouter = require('./routes/loginRouter');
const goalsRouter = require('./routes/goalsRouter');
const tasksRouter = require('./routes/tasksRouter');
const port = 8080;

const app = express();
// app.use(cors());
//parse incoming requests
app.use(express.json());
//parse url-encoded data sent in req.body to handle form submission
app.use(express.urlencoded({ extended: true }));
//parse cookie data read from the request headers
app.use(cookieParser());
// console.log('testing before routes')
//serve static files
// app.use(express.static(path.join(__dirname, './src')));
//define route handlers
app.use('/login', loginRouter);
app.use('/goals', goalsRouter);
app.use('/tasks', tasksRouter);
//catch-all route handler for any requests to an unkkown route
app.use((req, res) => res.status(404).send('Page does not exist'));
//global error handler
// console.log('before global handler')
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

//start the server
app.listen(port, () => {
  console.log(`Listening on port: ${port}...`);
});

module.exports = app;
