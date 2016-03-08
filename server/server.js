var express = require('express');

var app = express();

app.publicRoot = __dirname + '/../public';

// app.get('/', function (req, res) {
//   res.sendFile('index.html', {root: app.publicRoot})
// });

app.use('/', express.static('public'));
app.use('/node_modules', express.static('node_modules'));
// app.use('/css', express.static('publicnode_modules'));

app.listen(8000);
