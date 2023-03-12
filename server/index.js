const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');
const mongo = require('./utils/mongo')

const app = express();
let corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongo.connect();
app.use('/api', router);

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
})