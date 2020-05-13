const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        age: DataTypes.INTEGER,
        password: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
