const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.auth0_sec_key,
  baseURL: 'http://localhost:4000',
  clientID: 'KGPRcQE9vqemt15FHR7wMBU41w92DXie',
  issuerBaseURL: 'https://dev-jkmaut0a5reukqcr.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});
