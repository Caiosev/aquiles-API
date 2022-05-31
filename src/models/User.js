import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'O Nome deve ter mais de 3 caracteres',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Email Invalido',
          },
        },
        unique: {
          msg: 'Email Já Existe',
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'A senha deve ter mais de 6 caracteres',
          },
        },
      },
    }, { sequelize });
    this.addHook('beforeSave', async (user) => {
      if (!user.password) return;
      user.password_hash = await bcryptjs.hash(user.password, 8);
    });
    return this;
  }
}
