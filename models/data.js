'use strict';


module.exports = (sequelize, DataTypes) => {
  const Data = sequelize.define('Data', {
    oxyVal: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    mqState: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    now: DataTypes.DATEONLY
  }, {});
  // Data.associate = (models) => {
  //   Data.belongsTo(models.Lab, {
  //     foreignKey: 'dataId',
  //     as: 'data'
  //   });

  //};
  return Data;
};