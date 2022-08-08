const express = require('express');
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');

const app = express();

// if you run behind a proxy (eg nginx, kubernetes cluster)
//app.set('trust proxy', 1);

const RedisStore = connectRedis(session);

// configure redis
const redisClient = redis.createClient({
    legacyMode: true,
    socket: {
        port: 6379, // default port for redis
        host: 'localhost'
    }
});

redisClient.connect().catch(console.error);

// express middleware - any request that comes to the server goes through the middleware functions before any response is sent to the client
app.use(session({
    store: new RedisStore({client: redisClient}),
    secret: 'mySecret',
    saveUninitialized: false,
    resave: false, 
    cookie: {
        secure: false, // if this is true, only transmit cookie through https
        httpOnly: true, // if true, it prevents clients like JS from reading the cookie
        maxAge: 1000 * 60 * 30 // session max age in milliseconds
    }
}));


// create an unprotected login endpoint
app.post('/login', (req, res) => {
    const {email, password} = req;

    //check if the credentials are correct
    // ...

    // assume that the credentials are correct
    req.session.clientId = 'abc123';
    req.session.myNum = 5;

    res.json('you are now logged in');

});

// plug in another middleware that will check if the user is authenticated or not
// all requests that are plugged in after this middleware will only be accesible if the user is logged in
app.use((req, res, next) => {
    if(!req.session || req.session.clientId){
        const err = new Error('You are not logged in');
        err.statusCode = 401;
        next(err);
    }
    next();
});

// plug in all routes that the user can only access if logged in
app.get('/profile', 

    // add a middle for authorization
    (res, req, next) => { /* check if the user has suffiecient priviliges*/ next();},

    (req, res) => {
    res.json(req.session);
});

app.listen(8080, () => console.log('server is running on port 8080'));
