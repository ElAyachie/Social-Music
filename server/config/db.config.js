module.exports = {
    HOST: "34.67.66.235",
    USER: "zach",
    PASSWORD: '***REMOVED***',
    DB: "socialmusicdb",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};