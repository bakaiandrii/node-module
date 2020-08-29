let cars = require('../carArr');

module.exports = {
    createCar: (car) => {
        const carArr = {
            id: ++cars.length, ...car
        };
        cars.push(carArr)
        return carArr;
    },
    getCars: () => {
        return cars;
    },
    getCarById: (carId) => {
        const carById = cars.find(car => car.id == carId);
        if (!carById) return "Not find sach car";
        return carById;
    },
    updateCarModelById: (carId, newModel) => {
        for (const car of cars) {
            if (car.id == carId) {
                car.model = newModel;
            }
        }
        return cars;

    },
    delateCarById: (carId) => {
        const filterCarArr = cars.filter(car => car.id != carId);
        if (!filterCarArr) return "Can't delete, id not found!";
        cars = filterCarArr;
        return cars;
    },

};



