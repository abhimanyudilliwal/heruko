
var express = require('express');
var bodyParser = require('body-parser');
const cors = require("cors")
var app = express();
const dbCon = require("./Db/Db")
const Signup =require("./Route/signup")
const Form =require("./Route/form")
const Ownland =require("./Route/ownland")
const Elseland=require("./Route/elseland")


var Port = process.env.PORT || 3001;





app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const whitelist = ['http://localhost:3000', 'http://localhost:3001']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}




app.use("/api", Signup)
app.use("/api", Ownland)
app.use("/api", Elseland)
app.use("/api", Form)

app.get('/', (req, res) => {
   return res.send('<h2>Welcome to Express App<h2>');
})

if (process.env.NODE_ENV === 'production') {
   // Serve any static files
   app.use(express.static(path.join(__dirname, 'client/build')));
 // Handle React routing, return all requests to React app
   app.get('*', function(req, res) {
     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
   });
 }


app.listen(Port, (err) => {
   if (err) {
      console.log(err)
   } else {
      // data base connection 
      dbCon
      console.log('Server is listening at ' + ':' + Port);
   }
});