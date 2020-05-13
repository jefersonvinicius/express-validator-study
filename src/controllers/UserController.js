const User = require('../database/models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },
  async store(req, res) {
    const user = await User.create(req.body);
    return res.json(user);
  },
  async update(req, res) {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado' });
    }

    const {
      username = user.username,
      password = user.password,
      age = user.age,
      email = user.email,
    } = req.body;

    await user.update({
      username,
      password,
      age,
      email,
    });

    return res.json(user);
  },
  async destroy(req, res) {
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      return res.status(400).json({ message: 'Usuário não encontrado' });
    }
    await user.destroy();
    return res.status(204).json({});
  },
};
