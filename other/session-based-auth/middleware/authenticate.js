function authenticate(req, res, next) {
    // plug in another middleware that will check if the user is authenticated or not
    // all requests that are plugged in after this middleware will only be accesible if the user is logged in
    if(!req.session || !req.session.clientId){
        const err = new Error('You are not logged in');
        err.statusCode = 401;
        next(err);
    }
    next();
}

module.exports = authenticate;
