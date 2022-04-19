const express = require('express');

const friendsRouter = express.Router();
const friendsController = require('../controllers/friends.controller');

friendsRouter.use((req, res, next) => {
    console.log('ip address', req.ip);
    next();
});

friendsRouter.post('/', friendsController.postFriend);
friendsRouter.get('/', friendsController.getFriends);
// GET /friends/22
friendsRouter.get('/:friendId', friendsController.getFriend);

module.exports = friendsRouter;
