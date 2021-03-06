const express = require('express');
const router = require('./routes');
const port = process.ENV || 8000;
const app = express();

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
