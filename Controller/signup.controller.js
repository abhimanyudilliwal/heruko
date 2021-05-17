const User = require("../Model/signup.model")
const EncryptPassword=require("../Util/Password.handler")
const PasswordHandler=require("../Util/Password.handler")
const JWTHandler = require('../Util/jwt.handler');

const mongoose = require('mongoose');




module.exports = {
/* ############################signup#############################3 */
    signup: async (userInfo) => {
        return new Promise(async (resolve) => {
            try {
                let encryptedPassword = await EncryptPassword.encryptPassword(userInfo.password)
                if (!encryptedPassword) {
                    resolve({
                        status: false,
                        message: 'Please try after some time'
                    })
                }
                User.findOne({
                    email: userInfo.email
                }, async (error, data) => {
                    if (error) resolve({
                        status: false,
                        message: 'Please try after some time'
                    })
                    if (data) resolve({
                        status: false,
                        message: 'Email is already used'
                    })
                    var newUser = new User({
                        userId: new mongoose.Types.ObjectId(),
                        fullname: userInfo.fullname,
                        phone: userInfo.phone,
                        email: userInfo.email,
                        password: encryptedPassword,
                      
                    });
                    newUser.save(async (error, user) => {
                        if (error) resolve({
                            status: false,
                            error:error,
                            message: 'Please try after some time'
                        })
                        resolve({
                            status: true,
                            data: user,
                            message: 'You are registered',

                        })

                    });
                });
            } catch (error) {

                resolve({
                    status: false,
                    message: 'Please try after some time'
                });
            }
        })
    },

/* ##################################login ####################################### */

login: async (email, password) => {
    return new Promise(async (resolve) => {
        try {
            User.findOne({
                email: email
            }, async (err, data) => {
                console.log(err)
                console.log(data)
                if (err) resolve({
                    status: false,
                    message: 'Please try after some time'
                });
                if (!data) resolve({
                    status: false,
                    message: 'You are not registered!',
                })
                let isValidPassword = await PasswordHandler.checkPassword(password, data.password);
                if (!isValidPassword) resolve({
                    status: false,
                    message: 'Wrong password!'
                })
                let token = await JWTHandler.signToken(data);
                resolve({
                    status: true,
                    message: 'Success!',
                    data: data,
                    token: token
                })
            });
        } catch (error) {
            resolve({
                status: false,
                message: 'Please try after some time'
            });
        }
    })
},

/* ##############################get particular user details############################### */
getProfile: async (input) => {
    return new Promise(async (resolve) => {
        try {
            User.findOne({
                userId:input.userId
            }, async (err, data) => {
                if (err) resolve({
                    status: false,
                    message: 'Please try after some time'
                });

                if (!data) resolve({
                    status: true,
                    message: 'You are not regestered!',
                    data: user
                })

                resolve({
                    status: true,
                    message: 'Success!',
                    data: data
                })
            });
        } catch (error) {
            resolve({
                status: false,
                message: 'Please try after some time'
            });
        }
    })
},

getUserbyid: async (input) => {
    return new Promise(async (resolve) => {
        try {
            User.find({_id:input._id}, async (err, resulte) => {
                if (err) resolve({
                    status: false,
                    message: 'Please try again'
                })
                resolve({
                    status: true,
                    message: 'Vendor fetched successfully',
                    data: resulte
                })
            }).sort('-createdAt')
        } catch (error) {
         
            resolve({
                status: false,
                message: 'Please try after some time'
            });
        }
    })
},

updateUserAccount: async(input) => {
    console.log('[==== updateAccount ====]', input);
    return new Promise(async(resolve) => {
        try {
            User.findOne({
                _id: input._id
            }, async(err, data) => {
                data.fullname = input.fullname
                data.phone = input.phone
                data.save(async(error, vendor) => {
                    if (error) {
                       
                        resolve({
                            status: false,
                            message: 'Failed to update profile'
                        })
                    }
                    resolve({
                        status: true,
                        data: vendor,
                        message: 'Profile updated'
                    })
                })
            })
        } catch (error) {
            resolve({
                status: false,
                message: 'Internal Server Error'
            })
        }
    })
},

}


 