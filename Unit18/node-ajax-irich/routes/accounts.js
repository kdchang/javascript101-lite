var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/create', function(req, res) {
  res.render('create_account');
});

router.post('/create', function(req, res) {
  models.Account.create({
    title: req.body.title,
    type: req.body.type,
    cost: req.body.cost
  }).then(function() {
    res.redirect('/');
  });
});

router.get('/', function(req, res) {
  models.Account.findAll().then(function(accounts) {
    res.json(accounts);
  });
});


router.get('/:account_id', function(req, res) {
  models.Account.find({
    id: req.params.account_id    
  }).then(function(account) {
    res.render('account', { account: account });
  });
});

router.get('/:account_id/update', function(req, res) {
  models.Account.find({
    id: req.params.account_id    
  }).then(function(account) {
    res.render('update_account', { account: account });
  });
});

router.post('/:account_id/update', function(req, res) {
  models.Account.find({
    id: req.params.account_id    
  }).then(function(account) {
    account.update({
      title: req.body.title,
      type: req.body.type,
      cost: req.body.cost      
    });
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/:account_id/delete', function(req, res) {
  models.Account.destroy({
    where: {
      id: req.params.account_id
    }
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;