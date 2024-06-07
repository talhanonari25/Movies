const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    message:{
        type:String,
        require: true
    }
});

module.exports = mongoose.model('reviews',reviewSchema)