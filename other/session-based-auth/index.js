const express = require('express');
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');
const router = require('./routes');

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
    name: 'sessionId',
    cookie: {
        secure: false, // if this is true, only transmit cookie through https
        httpOnly: true, // if true, it prevents clients like JS from reading the cookie
        maxAge: 1000 * 60 * 30 // session max age in milliseconds
    }
}));


app.use(router);

app.listen(8080, () => console.log('server is running on port 8080'));
