const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
    res.send({express: 'Hello from server!' });
});

app.listen(port, () => console.log(`Listen on port ${port}`));