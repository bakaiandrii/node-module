const {DataTypes} = require('sequelize');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('o_auth', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      access_token: {
        type: DataTypes.STRING,
      },
      refresh_token: {
        type: DataTypes.STRING,
      },
      user_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,

      },
      created_at: {
        type: DataTypes.STRING,
        default: new Date().toISOString(),
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('o_auth');
  }
};
