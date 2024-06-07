const user = require('../Model/userSchema');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.UserRegister = async (req, res) => {
    try {
        const hashed = bcrypt.hashSync(req.body.password, 10);
        const userData = new user({
            name: req.body.name,
            email: req.body.email,
            password: hashed
        });

        await userData.save();
        res.status(200).json({
            message: "User Register"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "User cannot be Register"
        });
    }
};

exports.UserLogin = async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        const userData = await user.findOne({ email: email });
        if (userData) {
            const comPass = await bcrypt.compare(password, userData.password);
            if (userData.email === email && comPass) {
                jwt.sign({ name: userData.email }, "seckey", (err, token) => {
                    if (token) {
                        res.status(200).json({
                            message: "user successfully login ",
                            token,
                            userData
                        });
                    } else {
                        res.status(400).json({
                            message: "token cannot be created"
                        });
                    }
                });
            } else {
                res.status(400).json({
                    message: "please enter your correct password"
                });
            }
        } else {
            res.status(400).json({
                message: "please enter your correct email"
            });
        }
    } else {
        res.status(400).json({
            message: "please enter all field"
        });
    }
};

exports.showUser = async (req, res) => {
    try {
        let data = await user.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(400).json({
            message: "no data found",
            error
        });
    }
};

exports.showOneUser = async (req, res) => {
    try {
        let data = await user.findOne(req.params);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).json({
            message: "No Data Found Against this user ID",
            error
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const hashed = bcrypt.hashSync(req.body.password, 10);
        let data =await user.updateOne(
            req.params,
            {
                $set:{
                    name: req.body.name,
                    email: req.body.email,
                    password: hashed
                }
            }
        );
        res.status(200).json({
            message: "User Update Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "we cannot find data against this User ID"
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        let data = await user.deleteOne(req.params);
        res.status(200).json({
            message: "Delete User Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "we cannot find data against this User ID"
        });
    }
};