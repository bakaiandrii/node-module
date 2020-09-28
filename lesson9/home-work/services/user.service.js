const connection = require('../database').getInstance();
const {Op} = require('sequelize');

module.exports = {
    createUser: async (userObject, transaction) => {
        const User = connection.getModels('User');
        return User.create(userObject, {new: true, transaction});
    },
    getUser: async () => {
        const User = connection.getModels('User');
        return User.findAll({});
    },
    getUserById: async (id) => {
        const User = connection.getModels('User');
        return User.findByPk(id);
    },
    update: (id, updeteObject, transaction) => {
        const User = connection.getModels('User');
        return User.update(
             updeteObject ,
            {
                where: { id },
                returning: true,
                plain: true,
                transaction
            }
        )
    },
    updateUserNameById: (id, newName, transaction) => {
        const User = connection.getModels('User');
        return User.update({name: newName}, {
            where: {
                id: {
                    [Op.eq]: id
                }
            },
            transaction
        });
    },
    delateUserById: (id, transaction) => {
        const User = connection.getModels('User');
        return User.destroy({
            where: {
                id: {
                    [Op.eq]: id
                }
            },
            transaction
        });
    },
    findOneByParams: (findObject) => {
        const User = connection.getModels('User');
        return User.findOne({
            where: findObject
        })
    },

};
