const multer = require('multer');

const catalogItemsRepo = require('../repositories/Items');
const { formErrors } = require('./helpers/middlewares');

const upload = multer({});

module.exports = (app) => {
  app.get('/api/catalog', async (req, res) => {
    const items = await catalogItemsRepo.getAll();
    return res.send(items);
  });

  app.post(
    '/api/catalog',
    upload.single('image'),
    formErrors,
    async (req, res) => {
      const encodedImage = req.file.buffer.toString('base64');
      const catalogItem = await catalogItemsRepo.create({
        ru: {
          name: req.body.nameRU,
          desc: req.body.descRU,
        },
        ro: {
          name: req.body.nameRO,
          desc: req.body.descRO,
        },
        category: req.body.category,
        image: encodedImage,
      });
      console.log(catalogItem);
      catalogItem.save();
      return res.redirect('/');
    }
  );
};
