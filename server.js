const express = require('express');
const users = require('./data/users');

const app = express();
const router = express.Router();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res, next) => {
    res.send({express: 'Hello from server!' });
});

app.get('/users', (req, res, next) => {
    res.json();
});



app.listen(port, () => console.log(`Listen on port ${port}`));