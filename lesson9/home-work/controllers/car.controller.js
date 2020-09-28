const {emailService, carServise} = require('../services');

const {NEW_CAR_CONGRATS, DELETE_CAR} = require('../config/email-action.enum');
const {transactionInstance} =require('../database').getInstance();


module.exports = {
    createCar: async (req, res) => {
        const transaction = await transactionInstance();
        try {
            const {body, user} = req;
            const car = await carServise.createCar({...body, user_id: user.id}, transaction);

            await emailService.sendMail(user.email, NEW_CAR_CONGRATS, {
                userName: user.email,
                carModel: body.model,
                carYear: body.year
            });
            await transaction.commit();
            res.status(201).json(car);
        } catch (e) {
            await transaction.rollback();
            res.json(e.message);
        }
    },
    getCars: async (req, res) => {
        try {
            const cars = await carServise.getCars();
            res.json(cars);
        } catch (e) {
            res.json(e.message);
        }
    },
    getCarById: async (req, res) => {
        const {carId} = req.params;
        try {
            const car = await carServise.getCarById(carId);
            res.json(car);
        } catch (e) {
            res.json(e.message);
        }
    },
    updateCarModelById: async (req, res) => {
        const transaction = await transactionInstance();
        const {carId} = req.params;

        const newModel = req.body.model;
        try {
            const car = await carServise.updateCarModelById(carId, newModel,transaction);
            await transaction.commit();
            res.json(car);
        } catch (e) {
            await transaction.rollback();
            res.json(e.message);
        }
    },
    delateCarById: async (req, res) => {
        const transaction = await transactionInstance();
        const {carId} = req.params;
        const {body, user} = req;
        try {
            const car = await carServise.delateCarById(carId,transaction);
            await emailService.sendMail(user.email, DELETE_CAR, {
                userName: user.email,
                carModel: body.model,
                carYear: body.year
            });
            await transaction.commit();
            res.end(`car with id:${carId} is deleted!`);
        } catch (e) {
            await  transaction.rollback();
            res.json(e.message);
        }
    },
}
