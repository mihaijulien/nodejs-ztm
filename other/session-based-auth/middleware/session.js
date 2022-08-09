const session = require('express-session');
const connectRedis = require('connect-redis');
const redisClient = require('../db/redis');

const RedisStore = connectRedis(session);

module.exports = session({
    store: new RedisStore({client: redisClient}),
    secret: 'mySecret',
    saveUninitialized: false,
    resave: false, 
    name: 'sessionId',
    cookie: {
        secure: false, // if this is true, only transmit cookie through https
        httpOnly: true, // if true, it prevents clients like JS from reading the cookie
        maxAge: 1000 * 60 * 30 // session max age in milliseconds
    }
});
