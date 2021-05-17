const mongoose = require('mongoose');

const Form= new mongoose.Schema(
   {
    address: {
         type: String,
      },
      landmark: {
         type: String,
      },
      pincode: {
         type: Number,
      },
      state: {
         type: String,
      },
      soiltest: {
        type: String,
     },
     infomaion: {
        type: String,
     },
     sizeofland: {
        type: String,
     },
     watersource: {
        type: String,
     },
   }
);

module.exports = mongoose.model('Form', Form);
