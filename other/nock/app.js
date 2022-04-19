const express = require('express');
const fetch = require('cross-fetch');
const app = express();
const port = 3000;

app.get('/', async (req, res) => {
    const response = await fetch('http://api.icndb.com/jokes/random')
    const json = await response.json();
    res.json(json);
});
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});

module.exports = app;
