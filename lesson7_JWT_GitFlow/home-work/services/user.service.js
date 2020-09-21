const connection = require('../database').getInstance();
const {Op} = require('sequelize');

module.exports = {
    createUser: async (userObject) => {
        const User = connection.getModels('User');
        return User.create(userObject, {new: true});
    },
    getUser: async () => {
        const User = connection.getModels('User');
        return User.findAll({});
    },
    getUserById: async (id) => {
        const User = connection.getModels('User');
        return User.findByPk(id);
    },
    updateUserNameById: (id, newName) => {
        const User = connection.getModels('User');
        return User.update({name: newName},{
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        });
    },
    delateUserById: (id) => {
        const User = connection.getModels('User');
        return User.destroy({
            where: {
                id: {
                    [Op.eq]: id
                }
            }
        });
    },
    findOneByParams: (findObject) => {
        const User = connection.getModels('User');
        return User.findOne({
            where: findObject
        })
    },

};
