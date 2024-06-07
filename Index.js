const express=require('express');
const Router = require('./src/Routes/Routes');
require('./Config');

// const { auth } = require('express-openid-connect');
// require('dotenv').config();

// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: process.env.SECRET,
//     baseURL: process.env.BASE_URL,
//     clientID: process.env.CLIENT_ID,
//     issuerBaseURL: process.env.ISSUER_BASE_URL
//   };

const app = express();

// app.use(auth(config));
// app.get('/', (req, res) => {
//     res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
//   });
app.use(express.json());
app.use("/",Router);

app.listen(4000, ()=>{
    console.log("Server is Running on Port 4000")
});