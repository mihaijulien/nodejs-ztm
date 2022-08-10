const redis = require('redis');

// configure redis
const redisClient = redis.createClient({
    legacyMode: true,
    socket: {
        port: 6379, // default port for redis
        host: 'localhost'
    }
});

redisClient.connect().catch(console.error);

module.exports = redisClient;
