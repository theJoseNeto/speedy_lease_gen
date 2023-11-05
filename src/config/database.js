require("dotenv").config();

module.exports = {
    dialect: process.env.DATABASE_DIALECT,
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    logging: false,
    define: {
        underscored: true,
        timestamps: true,
        underscoredAll: true,
    }

};
