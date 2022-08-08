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
    port: 6379, // default port for redis
    host: 'localhost'
});


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
