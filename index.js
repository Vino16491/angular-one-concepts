// express package is used to host project-for more information- https://www.npmjs.com/package/express
const express = require('express');
const app = express();
// path package to define paths -for more information- https://www.npmjs.com/package/path
var path = require ('path');

app.use(express.static(path.join(__dirname)));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})