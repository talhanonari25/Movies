const review = require('../Model/reviewSchema');

exports.addReview = async (req, res) => {
    try {
        let data = new review(req.body);
    let result = await data.save();
        res.status(200).json({
            message: "Review Added Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Review not Added"
        });
    }
};

exports.showReviews = async (req, res) => {
    try {
        let data = await review.find();
        res.status(200).send(data);
    } catch (error) {
        res.status(400).json({
            message: "No Data Found",
            error
        });
    }
};

exports.showOneReview = async (req, res) => {
    try {
        let data = await review.findOne(req.params);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).json({
            message: "No Data Found Against this Review ID",
            error
        });
    }
};

exports.updateReview = async (req, res) => {
    try {
        let data =await review.updateOne(
            req.params,
            {
                $set:req.body
            }
        );
        res.status(200).json({
            message: "Review Update Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "we cannot find data against this Review ID"
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        let data = await review.deleteOne(req.params);
        res.status(200).json({
            message: "Delete Review Successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "we cannot find data against this Review ID"
        });
    }
};