const mongoose = require('mongoose');
const { Schema } = mongoose;

const catalogItemSchema = new Schema(
  {
    ru: {
      name: String,
      desc: String,
    },
    ro: {
      name: String,
      desc: String,
    },
    image: String,
    category: String,
  },
  { versionKey: false }
);

module.exports = mongoose.model('catalogItems', catalogItemSchema);
