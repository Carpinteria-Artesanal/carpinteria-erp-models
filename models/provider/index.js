const {
        Schema,
        model,
      } = require('mongoose');

const providersSchema = new Schema({
  name: String,
  address: String,
  city: String,
  postalCode: String,
  province: String,
  phone: String,
  email: String,
  businessName: String,
  cif: String,
  note: String,
}, { versionKey: false });

module.exports = model('Provider', providersSchema, 'providers');

