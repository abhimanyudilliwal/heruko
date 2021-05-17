var mongoose = require('mongoose');
/* const { MessageStreamsFilteringParameters } = require('postmark/dist/client/models'); */
var Schema = mongoose.Schema;

const usersignup = new Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    fullname:{
        type:String,
        
    },
    phone:{
        type:Number,
        
    },
    email: {
        type: String,
       
    },
    password: {
        type: String,
      

    },
   

}, 
),

    User = mongoose.model('usersignup', usersignup);

module.exports = User;
