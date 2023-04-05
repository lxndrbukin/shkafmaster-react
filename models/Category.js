const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    ru: { name: String },
    ro: { name: String },
    en: { name: String },
  },
  { versionKey: false }
);

module.exports = mongoose.model('categories', categorySchema);
