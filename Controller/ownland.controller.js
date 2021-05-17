const OwnLand = require("../Model/ownland.model")
module.exports = {
    land(req, res) {
      const {land1,land2,land3} = req.body

         const newData = new OwnLand({
            land1:land1,
            land2:land2,
            land3:land3
            
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