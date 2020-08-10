'use strict';

const express = require('express');
const cors = require('cors');
const fileUpload = require('express-fileupload');


// require and use "multer"...

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(fileUpload())

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/hello', function (req, res) {
  res.json({ greetings: "Hello, API" });
});


app.post('/api/fileanalyse', (req, res) => {
  if (req.files === null) {
    res.status(404).json({error : "File Required for upload",  status : 404});
  }
  console.log(req.files)
  res.json({name : req.files.upfile.name, size : req.files.upfile.size})

})


app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});


