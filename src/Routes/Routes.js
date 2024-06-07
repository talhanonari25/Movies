const express = require('express');
const User = require('../Controller/userController');
const Review = require('../Controller/reviewController')
const Route = express.Router();

Route.post("/create", User.createUser);
Route.get("/show", User.showUser);
Route.put("/update/:_id", User.updateUser);
Route.delete("/delete/:_id", User.deleteUser);

Route.post("/addreview", Review.addReview);
Route.get("/showreviews", Review.showReviews);
Route.get("/showreviews/:_id", Review.showOneReview)
Route.put("/updatereview/:_id", Review.updateReview);
Route.delete("/deletereview/:_id", Review.deleteUser);

module.exports = Route;