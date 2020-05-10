const { Schema, model } = require('mongoose');

const providersSchema = new Schema({
  name: String,
  address: String,
  phone: String,
  email: String,
}, { versionKey: false });

module.exports = model('Provider', providersSchema, 'providers');
