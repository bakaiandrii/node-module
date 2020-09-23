'use strict';

const {DataTypes} = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {

        await queryInterface.createTable('users', {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                defaultValue: 'Dimas',
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            phoneNumber: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        });
    },

    down: async (queryInterface, Sequelize) => {

        await queryInterface.dropTable('users');
    }
};
