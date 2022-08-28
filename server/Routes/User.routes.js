const {Router} = require("express");
const UserModel = require("../models/User");

const userRouter = Router();

userRouter.post("/login", async(req, res) => {
    console.log(req.body);
    const checkUser = await UserModel.find(req.body);
    if(checkUser.length >= 1){
        let {name, _id} = checkUser[0];
        let payload = {
            _id,
            name,
            token: 54321
        }
        res.send(payload)
    }
    else {
        res.status(500).send({message: 'something went wrong'});
    }
})

userRouter.post("/signup", async(req, res) => {
    console.log(req.body);
    const user = await new UserModel(req.body);
    user.save((err, success) => {
        if(err){
            return res.status(500).send({message: "Something went wrong"});
        }
        else {
            return res.status(201).send({message: "Success", token: 54321})
        }
    })
})


module.exports = userRouter;