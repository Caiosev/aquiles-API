import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];

const connection = new Sequelize(dataBaseConfig);

models.forEach((element) => element.init(connection));
