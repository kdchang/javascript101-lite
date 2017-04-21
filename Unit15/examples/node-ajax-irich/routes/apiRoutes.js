var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/account/create', function(req, res) {
  models.Account.create({
    title: req.body.title,
    type: req.body.type,
    cost: req.body.cost
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/accounts', function(req, res) {
  models.Account.findAll().then(function(accounts) {
    res.json(accounts);
  });
});


router.get('/accounts/:account_id', function(req, res) {
  models.Account.find({
    id: req.params.account_id    
  }).then(function(account) {
    res.render('account', { account: account });
  });
});

module.exports = router;