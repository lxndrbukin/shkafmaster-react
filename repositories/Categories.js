const Repository = require('./Repository');
const mongoose = require('mongoose');
const CategorySchema = mongoose.model('categories');

class CategoriesRepository extends Repository {}

module.exports = new CategoriesRepository(CategorySchema);
