'use strict';
module.exports = (sequelize, DataTypes) => {
  const Labs = sequelize.define('Labs', {
    department: DataTypes.STRING
  }, {});
  // Labs.associate = (models) => {
  //   Labs.hasMany(models.Data, {
  //     foreignKey: 'dataId'
  //   });
  // };
  return Labs;
};