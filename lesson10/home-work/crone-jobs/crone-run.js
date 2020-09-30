const cron = require('node-cron');

module.exports = () => {
    try {

        cron.schedule('*/10 * * * * *', async () => {
            console.log('------------start-----------------');
            console.log(22);
            console.log('------------finish-----------------');
        });


    } catch (e) {
        console.log()
    }
};