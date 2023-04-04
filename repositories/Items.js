const Repository = require('./Repository');
const mongoose = require('mongoose');
const CatalogItemSchema = mongoose.model('catalogItems');

class CatalogItemsRepository extends Repository {}

module.exports = new CatalogItemsRepository(CatalogItemSchema);
