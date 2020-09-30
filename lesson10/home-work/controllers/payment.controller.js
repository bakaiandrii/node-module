const {paymentService} = require('../services');

class PaymentController {
    async getAll(req, res, next) {
        try {
            const allPayments = await paymentService.getAllPayment()

            res.json(allPayments);
        } catch (e) {
            next(e)
        }
    }

    async createPayment(req, res, next) {
        try {
            const allPayments = await paymentService.createPayment(req.body);

            res.json(allPayments);
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new PaymentController();