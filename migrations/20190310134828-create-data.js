'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      oxyVal: {
        type: Sequelize.DOUBLE
      },
      mqState: {
        type: Sequelize.INTEGER
      },
      now: {
        allowNull: false,
        type: Sequelize.DATEONLY,

      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      // // dataId: {
      // //   type: Sequelize.INTEGER,
      // //   references: {
      // //     model: "Labs",
      // //     key: 'id',
      // //     as: 'dataId'
      // //   }

      // }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Data');
  }
};