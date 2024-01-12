const routes= require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.jaredRoute);
routes.get('/lilian', lesson1Controller.lilianRoute);
routes.get('/wanga', lesson1Controller.wangaRoute);

module.exports = routes;