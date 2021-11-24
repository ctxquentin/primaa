const express = require('express');
const app = express();
var cors = require('cors')

app.get('/data', cors(), function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    const data = 'With the aim of optimizing pathologists workflow, Primaa brings together medical and technical expertise to shape the most relevant solutions and contribute to the adoption of AI application in the pathology field.'
    res.send(JSON.stringify({text : data}))
});

app.listen(process.env.PORT || 8080);