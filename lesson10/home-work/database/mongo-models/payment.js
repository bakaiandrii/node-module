const {Schema, model} = require('mongoose');

const logsSubSchema = {
    username:{
        type: String,
        defaultValue: 'dimas_karabas',
    },
    email:{
        type: String,
    }
}

const PaymentShema = new Schema({
    currency:{
        type: String,
        required: true,
    },
    value:{
        type: Number,
        required: true,
        defaultValue: 777
    },
    logs:[logsSubSchema]
});

module.exports = model('payment', PaymentShema)