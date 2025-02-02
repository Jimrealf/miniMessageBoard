import express from 'express';
import { title } from 'process';
const router = express.Router();

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date(),
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date(),
    },
];

//Index route
router.get('/', (req, res) => {
    res.render('index', { title: 'Message Board', messages: messages });
});

//Form route
router.get('/new', (req, res) => {
    res.render('form', { title: 'Add a New Message' });
});

// Handle new message submission
router.post('/new', (req, res) => {
    const messageText = req.body.messageText;
    const messageUser = req.body.messageUser;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect('/');
});

// Message details route
router.get('/message/:id', (req, res) => {
    const message = messages[req.params.id];
    res.render('message', {
        title: `Message ${req.params.id}`,
        message: message,
    });
});

export default router;
