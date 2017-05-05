'use strict';
module.exports = function(sequelize, DataTypes) {
  var Wife = sequelize.define('Wife', {
    nbaId: DataTypes.INTEGER,
    wifeName: DataTypes.STRING,
    nbaLN: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Wife.belongsTo(models.Nba,{
          foreignKey: 'nbaId',
          onDelete: 'CASCADE'
        })
      }
    }
  });
  return Wife;
};
