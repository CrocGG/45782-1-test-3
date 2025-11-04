import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Cinema from "../models/Cinema";
import Movie from "../models/Movie";

const sequelize = new Sequelize({
    ...config.get('db'),
    dialect: 'mysql',
    models: [Movie, Cinema],
    logging: console.log
})

export default sequelize