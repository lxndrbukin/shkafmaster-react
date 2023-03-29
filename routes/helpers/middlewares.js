const usersRepo = require('../../repositories/Users');

module.exports = {
  async signUpErrors(req, res, next) {
    req.errors = {};
    Object.keys(req.body).forEach(async (key, index) => {
      if (!req.body[key] || req.body[key] === '') {
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
      if (password !== confirmPassword || confirmPassword.length === 0) {
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
};
