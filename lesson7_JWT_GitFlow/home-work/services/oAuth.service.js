const db = require('../database').getInstance();

module.exports = {
    getByParams:(params) => {
        const oAuth = db.getModels('OAuth');
        const User = db.getModels('User');

        return oAuth.findOne({
            where: params,
            raw: true,
            nest:true,
            include:[User]
        })
    },
    create:(tokenObject) => {
        const oAuth = db.getModels('OAuth');

        return oAuth.create(tokenObject, {new: true})
    },
    deleteByParams:(params) => {
        const oAuth = db.getModels('OAuth');

        return oAuth.destroy({
            where: params
        })
    }
}
