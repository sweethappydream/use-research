const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');
const mongo = require('./utils/mongo')
// const https = require('https');
// const fs = require('fs')
require('dotenv'). config();

const app = express();
let corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

mongo.connect();
app.use('/api', router);

// var privateKey = fs.readFileSync('../../certs/war.key', 'utf8');
// var certificate = fs.readFileSync('../../certs/war.crt', 'utf8');
// var credentials = { key: privateKey, cert: certificate };

// const httpsServer = https.createServer(credentials, app);
// httpsServer.listen(5000, console.log("https: Server has started at port " + 5000))

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