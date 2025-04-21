const authRoute = require('express').Router();
const findUserMiddleware = require('../middlewars/findUser');
const {
    logIn,
    signUp,
    getAccessToken,
    logout
} = require('../controllers/auth.controller');

authRoute.post('/login',findUserMiddleware, logIn);
authRoute.post('/signup',findUserMiddleware, signUp);

authRoute.get('/logout',logout);

authRoute.get('/access-token',getAccessToken);

module.exports = authRoute;