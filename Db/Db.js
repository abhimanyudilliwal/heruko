const mongoose = require('mongoose');


const databaseURL = process.env.MONODB_URL ||"mongodb+srv://Abhi_Dilli123:Abhidilli123@@cluster0.itrsu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(databaseURL, {
   useNewUrlParser: true,
   useCreateIndex: true,
   useFindAndModify: true,
   useUnifiedTopology: true,
}, (err) => {
   if (!err) {
      console.log('MongoDB Connection Succeeded.....')
   } else {
      console.log('Error in DB connection: ' + err)
   }
});