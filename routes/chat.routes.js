const express = require('express');
const router = express.Router();
// model being used
const chatModel = require('../models/chat');

router.post('create-chat-room', (req, res) => {
    const incomingData = req.body;
    const newChat = new chatModel(incomingData);

    newChat.save((err, doc) => {
        if(err) {
            if(err.code) {
                res.status(400).send({
                    status: 400,
                    message: 'chat already exists. Please rename it.'
                })
            } else {
                res.status(400).send({
                    status: 400,
                    message: 'Validation error.'
                })
            }
        } else {
            res.status(200).send({
                status: 200,
                messsage: 'Chat Created.',
                data: doc
            });
        }
    });
});

module.exports = router;