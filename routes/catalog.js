const multer = require('multer');

const catalogItemsRepo = require('../repositories/Items');
const categoriesRepo = require('../repositories/Categories');
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
      catalogItem.save();
      return res.redirect('/');
    }
  );

  app.post('/api/catalog/:id', async (req, res) => {
    await catalogItemsRepo.deleteOneBy({ _id: req.body.id });
    const items = await catalogItemsRepo.getAll();
    res.send(items);
  });

  app.get('/api/categories', async (req, res) => {
    return res.send('Hi');
  });

  app.get('/api/catalog/categories', async (req, res) => {
    const categories = await categoriesRepo.getAll();
    return res.send(categories);
  });

  app.post('/api/catalog/categories', async (req, res) => {
    const category = await categoriesRepo.create({
      ru: { name: req.body.nameRU },
      ro: { name: req.body.nameRO },
      en: { name: req.body.nameEN },
    });
    category.save();
    return res.send(category);
  });
};
