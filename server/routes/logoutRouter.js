const { Router } = require('express');

const logoutRouter = Router();
//route to log user out
logoutRouter.post('/', (req, res) => {
    return res.status(202).send(`Successfully logged out`)
})

module.exports = logoutRouter;