'use strict';

const express = require('express');
const cors = require('cors');
const multer = require('multer');

const upload = multer();

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {

  try {
    res.json({
      name: req.file.originalname,
      size: req.file.size
    });

  } catch (error) {
    res.status(500).json({ error: "Some error occured", statusCode: 500 })
  }


});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});