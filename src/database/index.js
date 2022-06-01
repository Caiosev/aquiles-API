import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

const connection = new Sequelize(dataBaseConfig);

models.forEach((element) => element.init(connection));
models.forEach((element) => element.associate && element.associate(connection.models));
