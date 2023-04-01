const usersRepo = require('../repositories/Users');
const { signUpErrors, signInErrors } = require('./helpers/middlewares');

module.exports = (app) => {
  app.post('/api/signup', signUpErrors, async (req, res) => {
    const checkedUser = await usersRepo.getOneBy({ email: req.body.email });
    const checkedPassword = await usersRepo.checkPassword(req.body.password);
    const { password, confirmPassword } = req.body;
    if (Object.keys(req.errors).length) {
      return res.send({ errors: { ...req.errors } });
    }
    if (!checkedUser || !req.body.email.length === 0) {
      if (checkedPassword && password === confirmPassword) {
        const user = await usersRepo.create({
          userId: usersRepo.randomId(),
          email: req.body.email,
          password: await usersRepo.createPassword(req.body.password),
        });
        user.save();
        req.session = { userId: user.userId, email: user.email };
        return res.send(req.session);
      }
    }
  });

  app.post('/api/signin', signInErrors, async (req, res) => {
    if (Object.keys(req.errors).length) {
      return res.send({ errors: { ...req.errors } });
    }
    const user = await usersRepo.getOneBy({ email: req.body.email });
    req.session = { userId: user.userId, email: user.email };
    return res.send(req.session);
  });

  app.get('/api/current_user', (req, res) => {
    return res.send(req.session);
  });

  app.get('/api/signout', (req, res) => {
    req.session = null;
    res.redirect('/');
  });
};
