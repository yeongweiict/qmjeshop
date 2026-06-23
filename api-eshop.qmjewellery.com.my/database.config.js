"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseConfig = void 0;
const entities_1 = require("./src/entities");
const dotenv = require("dotenv");
dotenv.config();
exports.databaseConfig = (() => {
    const config = {
        type: 'mysql',
        host: process.env.DB_HOST,
        port: 3306,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: false,
        logging: false,
        entities: entities_1.default
    };
    return config;
})();
//# sourceMappingURL=database.config.js.map