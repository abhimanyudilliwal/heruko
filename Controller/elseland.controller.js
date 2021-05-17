const ElseLand = require("../Model/ownland.model")
module.exports = {
    elseland(req, res) {
      const {name,address,phone,sizeofland} = req.body

         const newData = new ElseLand({
            name:name,
            address:address,
            phone:phone,
            sizeofland:sizeofland
            
         })
         const saveData = newData.save().then((result) => {
            res.status(201).json({
               messag: "Successfully Submitted",
               result:result,
               status: 201,
            })
         }).catch((err) => {
            res.json({
               messag: err,
               status: 501,
            })
         })
      
   }
}