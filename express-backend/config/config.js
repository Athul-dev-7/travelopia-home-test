require('dotenv').config();
const { DATABASE_URL } = process.env;

module.export = {
    development: {
        url: DATABASE_URL,
        dialect: 'postgres',
        logging: false,
    },
};
