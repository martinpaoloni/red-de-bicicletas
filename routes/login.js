var express = require('express');
var router = express.Router();
var loginController = require('../controllers/login');

router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.post('/', loginController.login);

module.exports = router;
