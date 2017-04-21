"use strict";

module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define('Account', {
    title: DataTypes.STRING,
    type: DataTypes.STRING,
    cost: DataTypes.STRING
  });

  return Account;
};
