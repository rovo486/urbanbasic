const express = require('express'); // express 모듈 추가하기

const app = express();
app.use(express.static('static'));
app.use(express.static('img'));
const port = 8080;
const path = require('path');

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, function(err) {
  console.log('Connected port - ' + port);
  if (err) {
    return console.log('Found error - ', err);
  }
});