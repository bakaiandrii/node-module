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
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');



module.exports = (() => {
    let instance;
    function initConnection() {
        const client = new Sequelize('auto_shop','root','root', {
            host: 'localhost',
            dialect: 'mysql'
        });

        let models = {};
        
        function getModels() {
            fs.readdir(path.join(process.cwd(),'database','models'),(err, files) => {
                files.forEach(file => {
                    const [modelName] = file.split('.');
                    models[modelName] = (require(path.join(process.cwd(),'database','models', modelName)))(client, DataTypes);
                })
            });
        }
        return {
            setModels: () => getModels(),
            getModels: (modelName) => models[modelName]
        };
    }
    return {
        getInstance: () => {
            if (!instance){
                instance = initConnection();
            }
            return instance;
        }
    }
})();
