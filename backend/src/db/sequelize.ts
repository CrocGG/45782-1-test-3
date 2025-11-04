import { Sequelize } from "sequelize-typescript";
import config from 'config'
import Group from "../models/Group";
import Meeting from "../models/Meeting";

const sequelize = new Sequelize({
    ...config.get('db'),
    dialect: 'mysql',
    models: [Meeting, Group],
    logging: console.log
})

export default sequelize