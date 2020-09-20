const {DataTypes} = require('sequelize');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
      await queryInterface.createTable('users', {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement:true,
          allowNull:false,
          primaryKey:true
        },
        name: {
          type: DataTypes.STRING,
          allowNull:false,
          defaultValue:'Dimas',
        },
        password: {
          type: DataTypes.STRING,
          allowNull:false,
        },
        email: {
          type: DataTypes.STRING,
          allowNull:false,
        },
        phoneNumber: {
          type: DataTypes.STRING,
          allowNull:false,
        },
      });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};
