var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
  models.Account.findAll().then(function(accounts) {
    res.render('index', {
      title: 'iRich 愛記帳',
      accounts: accounts
    });
  });
});

module.exports = router;