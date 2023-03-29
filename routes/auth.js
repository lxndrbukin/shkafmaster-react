const usersRepo = require('../repositories/Users');
const { signUpErrors } = require('./helpers/middlewares');

module.exports = (app) => {
  app.post('/signup', signUpErrors, async (req, res) => {
    const checkedUser = await usersRepo.getOneBy({ email: req.body.email });
    const checkedPassword = await usersRepo.checkPassword(req.body.password);
    const { password, confirmPassword } = req.body;
    if (!checkedUser || !req.body.email.length === 0) {
      if (checkedPassword && password === confirmPassword) {
        const user = await usersRepo.create({
          userId: usersRepo.randomId(),
          email: req.body.email,
          password: await usersRepo.createPassword(req.body.password),
        });
        user.save();
        req.session.userId = user.userId;
      }
    }
    return res.send('Registered');
  });
};
