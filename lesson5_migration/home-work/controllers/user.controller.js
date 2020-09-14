const {userServise} = require('../services');


module.exports = {
    createUser: async (req, res) => {
        try {
            const user = await userServise.createUser(req.body);
            res.status(201).json(user);
        } catch (e) {
            res.json(e.message);
        }
    },
    getUsers: async (req, res) => {
        try {
            const user = await userServise.getUser();
            res.json(cars);
        } catch (e) {
            res.json(e.message);
        }
    },
    getUserById: async (req, res) => {
        const {userId} = req.params;
        try {
            const user = await userServise.getUserById(userId);
            res.json(user);
        } catch (e) {
            res.json(e.message);
        }
    },
    updateUserNameById: async (req, res) => {
        const {userId} = req.params;
        const newName= req.body.model;
        try {
            const user = await userServise.updateUserNameById(userId, newName);
            res.json(user);
        } catch (e) {
            res.json(e.message);
        }
    },
    delateUserById: async (req, res) => {
        const {userId} = req.params;
        try {
            const user = await userServise.delateUserById(userId);
            res.end(`car with id:${userId} is deleted!`);
        } catch (e) {
            res.json(e.message);
        }
    },
}
