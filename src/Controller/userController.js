const user = require('../Model/userSchema');

exports.createUser = async (req, res) => {
    try {
        let data = new user(req.body);
    let result = await data.save();
        res.status(200).json({
            message: "User Created Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "User Cannot Created"
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

exports.updateUser = async (req, res) => {
    try {
        let data =await user.updateOne(
            req.params,
            {
                $set:req.body
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