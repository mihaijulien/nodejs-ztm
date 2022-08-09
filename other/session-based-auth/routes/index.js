const express = require('express');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

// create an unprotected login endpoint
router.post('/login', (req, res) => {
    const {email, password} = req;

    //check if the credentials are correct
    // ...

    // assume that the credentials are correct
    req.session.clientId = 'abc123';
    req.session.myNum = 5;

    res.json('you are now logged in');

});

// authentication function here, before other endpoints
router.use(authenticate);

// plug in all routes that the user can only access if logged in
router.get('/profile', 

    // add a middle for authorization
    (res, req, next) => { /* check if the user has suffiecient priviliges*/ next();},

    (req, res) => {
    res.json(req.session);
});

module.exports = router;
