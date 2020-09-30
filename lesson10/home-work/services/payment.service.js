const PaymentModel = require('../database/mongo-models/payment');

class PaymentService {
    getAllPayment(){
      return PaymentModel.find({}) ;
    }

    createPayment(objectToCreate){
        return new PaymentModel(objectToCreate).save();
    }

    deleteById(id){
        return PaymentModel.findByIdAndDelete(id);
    }
}

module.exports = new PaymentService();