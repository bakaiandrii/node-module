const uuid = require('uuid').v4();
const fs = require('fs-extra').promises;
const path = require('path');

const {emailService, userServise} = require('../services');
const {WELCOME} = require('../config/email-action.enum');
const {hashPassword} = require('../helpers');
const { transactionInstance } = require('../database').getInstance();


module.exports = {
    createUser: async (req, res) => {
        const transaction = await transactionInstance();
        try {
            const {body: user, avatar} = req;
            user.password = await hashPassword(user.password);
            const newUser = await userServise.createUser(user, transaction);

            if (avatar){
                const photoDir = `users/${newUser.id}/photos`;
                const fileExtension = avatar.name.split('.').pop();
                const photoName = `${uuid}.${fileExtension}`;

                await fs.mkdir(path.resolve(process.cwd(),'public', photoDir),{recursive: true});
                await avatar.mv(path.resolve(process.cwd(),'public', photoDir, photoName));
                await userServise.update(newUser.id, {avatar: `/${photoDir}/${photoName}`}, transaction);
            }

            await emailService.sendMail(user.email, WELCOME, {userName: user.email});

            await transaction.commit();
            res.status(201).json(newUser);
        } catch (e) {

            await transaction.rollback();
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
        const transaction = await transactionInstance();
        const {userId} = req.params;
        const newName = req.body.model;
        try {
            const user = await userServise.updateUserNameById(userId, newName, transaction);
            await transaction.commit();
            res.json(user);
        } catch (e) {
            await transaction.rollback();
            res.json(e.message);
        }
    },
    delateUserById: async (req, res) => {
        const transaction = await transactionInstance();
        const {userId} = req.params;
        try {
            const user = await userServise.delateUserById(userId, transaction);
            await transaction.commit();
            res.end(`car with id:${userId} is deleted!`);
        } catch (e) {
            await transaction.rollback();
            res.json(e.message);
        }
    },
}
