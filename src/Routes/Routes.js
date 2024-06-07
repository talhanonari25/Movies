const express = require('express');
const User = require('../Controller/userController');
const Review = require('../Controller/reviewController')
const token = require("../Middleware/tokenVerify");
const Route = express.Router();

Route.post("/signup", User.UserRegister)
Route.post("/login", User.UserLogin);

Route.get("/user",token.jwtVerifyToken, User.showUser);
Route.put("/user/update/:_id", token.jwtVerifyToken, User.updateUser);
Route.delete("/user/delete/:_id", token.jwtVerifyToken, User.deleteUser);

Route.post("/review/add", token.jwtVerifyToken, Review.addReview);
Route.get("/review", token.jwtVerifyToken, Review.showReviews);
Route.get("/review/:_id", token.jwtVerifyToken, Review.showOneReview)
Route.put("/review/update/:_id", token.jwtVerifyToken, Review.updateReview);
Route.delete("/review/delete/:_id", token.jwtVerifyToken, Review.deleteUser);

module.exports = Route;