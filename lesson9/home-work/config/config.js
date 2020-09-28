module.exports = {
    DB_NAME: process.env.DB_NAME || 'auto_shop',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASS: process.env.DB_PASS || 'root',

    ROOT_EMAIL: process.env.ROOT_EMAIL,
    ROOT_EMAIL_PASSWORD: process.env.ROOT_EMAIL_PASSWORD,

    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET || 'helloToken',
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET || 'ultraSecret',
}
