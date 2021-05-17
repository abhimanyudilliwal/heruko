const express = require("express")
const Router = express.Router()
const UserHandler = require("../Controller/signup.controller")

Router.post('/register', async (req, res, next) => {
    let Userregister = await UserHandler.signup(req.body);

    if (!Userregister.status) return res.status(400).json(Userregister);

    res.status(200).json(Userregister)
});

Router.post('/login', async (req, res, next) => {
    let isLogin = await UserHandler.login(req.body.email, req.body.password);

    if (!isLogin.status) return res.status(400).json(isLogin);

    res.status(200).json(isLogin)
});

Router.post('/profile', async (req, res, next) => {
	let myProfile = await UserHandler.getProfile(req.body);

	if (!myProfile.status) return res.status(400).json(myProfile);

	res.status(200).json(myProfile)
});

Router.post('/userId', async (req, res, next) => {
    let getVendors = await UserHandler.getUserbyid(req.body)
    if(!getVendors) return res.status(400).json(getVendors);
    res.status(200).json(getVendors)
})

Router.post('/update', async (req, res, next) => {
    let updateAccount = await UserHandler.updateUserAccount(req.body)
    if(!updateAccount) return res.status(400).json(updateAccount);
    res.status(200).json(updateAccount)
})


module.exports = Router