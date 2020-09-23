const {emailService, carServise} = require('../services');

const {NEW_CAR_CONGRATS, DELETE_CAR} = require('../config/email-action.enum');


module.exports = {
    createCar: async (req, res) => {
        try {
            const {body, user} = req;
            const car = await carServise.createCar({...body, user_id: user.id});

            await emailService.sendMail(user.email, NEW_CAR_CONGRATS, {
                userName: user.email,
                carModel: body.model,
                carYear: body.year
            });

            res.status(201).json(car);
        } catch (e) {
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
        const {carId} = req.params;

        const newModel = req.body.model;
        try {
            const car = await carServise.updateCarModelById(carId, newModel);

            res.json(car);
        } catch (e) {
            res.json(e.message);
        }
    },
    delateCarById: async (req, res) => {
        const {carId} = req.params;
        const {body, user} = req;
        try {
            const car = await carServise.delateCarById(carId);
            await emailService.sendMail(user.email, DELETE_CAR, {
                userName: user.email,
                carModel: body.model,
                carYear: body.year
            });

            res.end(`car with id:${carId} is deleted!`);
        } catch (e) {
            res.json(e.message);
        }
    },
}
