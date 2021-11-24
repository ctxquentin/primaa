const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

// L'API
const app = express();
app.get('/primaa', (req, res) => {
  res.send('Hello World primaaa');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);