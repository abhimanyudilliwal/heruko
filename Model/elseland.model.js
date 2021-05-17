const mongoose = require('mongoose');

const ElseLand= new mongoose.Schema(
   {
    name: {
         type: String,
      },
      address: {
         type: String,
      },
      phone: {
         type: Number,
      },
      sizeofland: {
        type: String,
     },
     
   }
);

module.exports = mongoose.model('ElseLand', ElseLand);
