const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html')
;
app.use(express.static(__dirname + '/'));
})


app.get('/pagina2', function (req, res) {
  res.sendFile(__dirname + '/pagina2.html');

app.use(express.static(__dirname + '/'));
})


app.get('/json', function (req, res) {
res.json({ username: "lucas"});
})



app.listen(3000)
