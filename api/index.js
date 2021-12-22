const express = require('express')
const app = express();
const port = process.env.PORT || 3002


//make sure express is imported before other packages
const mongoose = require('mongoose')

//use CORS to enable Headers Access
const cors = require('cors');

app.use(cors({
    origin : "*"
}));

//IMPORT ROUTES
const users = require('./routers/users.js');



//!------------ROUTER
app.use('/api/users', users);

// -------------------------------USING MIDDLEWARE
//to parse JSON file requested
// app.use(express.json())
// app.use(require('connect').express());
// app.use(express.urlencoded({extended :true}));


// usually app.use(auth) -- to verify user credential
//another middleware
app.get('/', function (req, res) {
  res.send('hello world')
})


//connect to DB
mongoose.connect('mongodb://localhost:27017/trackSurat', { useNewUrlParser: true, useUnifiedTopology: true  }, ()=> console.log('konek to debe!'));

//LISTEN TO SERVER
app.listen(port, ()=> {
    console.log('server is running on http://localhost:3002/, connected my nigga')
})
