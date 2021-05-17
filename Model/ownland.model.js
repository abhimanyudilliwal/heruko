const mongoose = require('mongoose');

const OwnLand= new mongoose.Schema(
   {
    land1: {
         type: String,
      },
      land2: {
         type: String,
      },
      land3: {
         type: String,
      },
     
   }
);

module.exports = mongoose.model('OwnLand', OwnLand);
