const Form = require("../Model/form.model")
module.exports = {
    form(req, res) {
      const { address,landmark,pincode,state,soiltest,information,sizeofland,watersource} = req.body

         const newData = new Form({
            address: address,
            landmark: landmark,
            pincode:pincode,
            state: state,
            soiltest: soiltest,
            information:information,
            sizeofland:sizeofland,
            watersource:watersource
            
         })
         const saveData = newData.save().then((result) => {
            res.status(201).json({
               messag: "Thank you for submitted form",
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