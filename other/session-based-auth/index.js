const express = require('express');
const redis = require('redis');
const router = require('./routes');
const session = require('./middleware/session');

const app = express();

// if you run behind a proxy (eg nginx, kubernetes cluster)
//app.set('trust proxy', 1);

app.use(session);
app.use(router);
app.listen(8080, () => console.log('server is running on port 8080'));
