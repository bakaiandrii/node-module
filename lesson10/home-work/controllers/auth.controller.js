const {passwordComparator, tokinizer} = require('../helpers');
const {oAuthService} = require('../services');


module.exports = {
    login: async (req, res, next) => {
        try {
            const user = req.user;
            const {password} = req.body;

            await passwordComparator(password, user.password);

            const tokens = tokinizer();
            await oAuthService.create({
                ...tokens,
                user_id: user.id
            });

            res.json(tokens)

        } catch (e) {
            next(e);
        }
    },
    refreshToken: async (req, res, next) => {
        try {
            const user = req.user;
            const token = req.get('Authorization');
            const newTokensPair = tokinizer();

            await oAuthService.deleteByParams({refresh_token: token});

            await oAuthService.create({
                ...newTokensPair,
                user_id: user.id
            });

            res.json(newTokensPair);

        } catch (e) {
            next(e)
        }
    },
    logout: async (req, res, next) => {
        try {
            const token = req.get('Authorization');

            await oAuthService.deleteByParams({access_token: token});

            res.end('logout success');

        } catch (e) {
            next(e)
        }
    },
}
