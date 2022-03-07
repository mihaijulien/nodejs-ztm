const express = require('express');

const friendRouter = require('./routes/friends.router');
const messageRouter = require('./routes/messages.router');

const app = express();
const PORT = 3000;

setTimeout(() => console.log("test log"), 2000);

// logging middleware
app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

// serve website with express by passing the dir of the files
app.use('/site', express.static(path.join(__dirname, 'public'))); // http://localhost:3000/site/index.html
app.use(express.json());

app.use('/friends', friendRouter);
app.use('/messages', messageRouter);


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
