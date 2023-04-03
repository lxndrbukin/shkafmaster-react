const usersRepo = require('../../repositories/Users');

module.exports = {
  async signUpErrors(req, res, next) {
    req.errors = {};
    Object.keys(req.body).forEach(async (key, index) => {
      if (!req.body[key] || req.body[key] === null) {
        req.errors[key] = true;
      }
    });
    const checkedUser = await usersRepo.getOneBy({ email: req.body.email });
    const checkedPassword = await usersRepo.checkPassword(req.body.password);
    const { password, confirmPassword } = req.body;
    if (checkedUser || req.body.email === null) {
      req.errors['email'] = true;
      if (!checkedPassword) {
        req.errors['password'] = true;
      }
      if (password !== confirmPassword || confirmPassword.length) {
        req.errors['confirmPassword'] = true;
      }
    }
    if (!checkedPassword) {
      req.errors['password'] = true;
      if (confirmPassword !== password) {
        req.errors['confirmPassword'] = true;
      }
    }
    next();
  },
  async signInErrors(req, res, next) {
    req.errors = {};
    Object.keys(req.body).forEach(async (key, index) => {
      if (!req.body[key] || req.body[key] === '') {
        req.errors[key] = true;
      }
    });
    const user = await usersRepo.getOneBy({ email: req.body.email });
    const checkedPassword = await usersRepo.checkPassword(req.body.password);

    if (user) {
      const compare = await usersRepo.comparePasswords(
        user.password,
        req.body.password
      );
      if (!compare || !checkedPassword) {
        req.errors['password'] = true;
      }
    }
    if (!user) {
      req.errors['email'] = true;
      if (!checkedPassword) {
        req.errors['password'] = true;
      }
    }
    next();
  },
};
