// const mysql2 = require('mysql2');
//
// let connection = mysql2.createConnection({
//     user: 'root',
//     host: 'localhost',
//     password: 'root',
//     database: 'auto_shop',
// });
//
// module.exports = connection;



const {Sequelize, DataTypes} = require('sequelize');
const fs = require('fs');
const path = require('path');

const {DB_NAME, DB_USER, DB_PASS} = require('../config/config');


module.exports = (() => {
    let instance;

    function initConnection() {
        const client = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
            host: 'localhost',
            dialect: 'mysql'
        });

        let models = {};

        function getModels() {
            fs.readdir(path.join(process.cwd(), 'database', 'models'), (err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    const model = require(path.join(process.cwd(), 'database', 'models', modelName))(client, DataTypes);
                    models[modelName] = model;
                });
            });
        }

        return {
            setModels: () => getModels(),
            getModels: (modelName) => models[modelName],
            transactionInstance: () => client.transaction(),
        };
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }
            return instance;
        }
    }
})();
