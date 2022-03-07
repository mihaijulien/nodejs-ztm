function getMessages (req, res) {
    res.render('messages', {
        title: 'Messages to my Friends Julien',
        friend: 'Elon Musk'
    });
};

function postMessage (req, res) {
    console.log('Updating messages...');
}

module.exports= {
    getMessages,
    postMessage
}