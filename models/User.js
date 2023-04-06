const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  userId: String,
  email: String,
  role: { type: String, default: 'user' },
  password: String,
});

mongoose.model('users', userSchema);
