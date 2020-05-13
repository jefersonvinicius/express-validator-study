const { check, param } = require('express-validator');
const BaseValidator = require('./BaseValidator');

const User = require('../database/models/User');

class UserValidator extends BaseValidator {
  async isEmailInUse(email) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      return Promise.reject('E-mail em uso');
    }
  }

  async isUsernameInUse(username) {
    const user = await User.findOne({ where: { username } });
    if (user) {
      return Promise.reject('username em uso');
    }
  }

  store = [
    check('username')
      .isLength({ min: 3, max: 10 })
      .withMessage('username precisa ter entre 3 a 10 caracteres')
      .custom(this.isUsernameInUse),
    check('email')
      .normalizeEmail()
      .isEmail()
      .withMessage('Email inválido')
      .custom(this.isEmailInUse),
    check('age')
      .isInt({ min: 12 })
      .withMessage('você precisa ter mais de 12 anos'),
    check('password')
      .isLength({ min: 10 })
      .withMessage('Sua senha deve ter mais de 10 caracteres'),
    this.validate,
  ];

  update = [
    param('id').isNumeric().withMessage('Id do usuário precisa ser um número'),
    check('username')
      .optional()
      .isLength({ min: 3, max: 10 })
      .withMessage('username precisa ter entre 3 a 10 caracteres')
      .custom(this.isUsernameInUse),
    check('email')
      .optional()
      .normalizeEmail()
      .isEmail()
      .withMessage('Email inválido'),
    check('age')
      .optional()
      .isInt({ min: 12 })
      .withMessage('você precisa ter mais de 12 anos'),
    check('password')
      .optional()
      .isLength({ min: 10 })
      .withMessage('Sua senha deve ter mais de 10 caracteres'),
    this.validate,
  ];

  destroy = [
    param('id').isNumeric().withMessage('Id do usuário precisa ser um número'),
    this.validate,
  ];
}

module.exports = new UserValidator();
