const crypto = require('crypto');

class Repository {
  constructor(Schema) {
    this.Schema = Schema;
  }

  async create(attrs) {
    const { Schema } = this;
    return new Schema(attrs);
  }

  async getOneBy(filters) {
    const { Schema } = this;
    return Schema.findOne(filters).clone();
  }

  async getAll() {
    const { Schema } = this;
    return Schema.find().clone();
  }

  async deleteOneBy(filters) {
    const { Schema } = this;
    return Schema.deleteOne(filters).clone();
  }

  randomId() {
    return crypto.randomBytes(4).toString('hex');
  }
}

module.exports = Repository;
