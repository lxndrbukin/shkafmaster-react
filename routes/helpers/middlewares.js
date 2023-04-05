const usersRepo = require('../../repositories/Users');

module.exports = {
  async signUpErrors(req, res, next) {
    let errors = {};
    Object.keys(req.body).forEach(async (key, index) => {
      if (!req.body[key]) {
        errors[key] = true;
      }
    });
    const checkedUser = await usersRepo.getOneBy({ email: req.body.email });
    const checkedPassword = await usersRepo.checkPassword(req.body.password);
    const { password, confirmPassword } = req.body;
    if (checkedUser || !req.body.email) {
      errors['email'] = true;
      if (!checkedPassword) {
        errors['password'] = true;
      }
      if (password !== confirmPassword || confirmPassword.length) {
        errors['confirmPassword'] = true;
      }
    }
    if (!checkedPassword) {
      errors['password'] = true;
      if (confirmPassword !== password) {
        errors['confirmPassword'] = true;
      }
    }
    if (Object.keys(errors).length) {
      return res.send({ errors });
    }
    next();
  },
  async signInErrors(req, res, next) {
    let errors = {};
    Object.keys(req.body).forEach(async (key, index) => {
      if (!req.body[key]) {
        errors[key] = true;
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
        errors['password'] = true;
      }
    }
    if (!user) {
      errors['email'] = true;
      if (!checkedPassword) {
        errors['password'] = true;
      }
    }
    if (Object.keys(errors).length) {
      return res.send({ errors });
    }
    next();
  },
  async formErrors(req, res, next) {
    let errors = {};
    Object.keys(req.body).forEach(async (key, index) => {
      if (!req.body[key] || req.body[key] === '') {
        errors[key] = true;
      }
    });
    if (Object.keys(errors).length) {
      return res.send({ errors });
    }
    next();
  },
};
