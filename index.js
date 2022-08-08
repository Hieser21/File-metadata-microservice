var express = require('express');
var cors = require('cors');
require('dotenv').config()
 var multer = require('multer');
const upload = multer({ dest: './views/' })
var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/stats', upload.single('upFile'), function (req, res) {
  res.json(
    {
      "name" : req.file.originalname,
      "type" : req.file.mimetype,
      "size" : req.file.size
    }
  )
  
   console.log(req.file, req.body)
});


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
