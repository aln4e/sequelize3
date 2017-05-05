'use strict';
module.exports = function(sequelize, DataTypes) {
  var Nba = sequelize.define('Nba', {
    playerFN: DataTypes.STRING,
    playerLN: DataTypes.STRING,
    position: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Nba.hasMany(models.Wife,{
          foreignKey: 'nbaId',
          //confirm that this is plural form
          as: 'wives'
        })
      }
    }
  });
  return Nba;
};
