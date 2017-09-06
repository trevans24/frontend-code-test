'use strict'

// requirements
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Catch all routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});
