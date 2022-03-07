const express = require('express');

const friendsController = require('./controllers/friends.controller');
const messageController = require('./controllers/messages.controller');

const app = express();
const PORT = 3000;

setTimeout(() => console.log("blabla"), 2000);

// logging middleware
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello");
});

app.post('/friends', friendsController.postFriend);
app.get('/friends', friendsController.getFriends);
// GET /friends/22
app.get('/friends/:friendId', friendsController.getFriend);

app.get('/messages', messageController.getMessages);
app.post('/messages', messageController.postMessage)

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});