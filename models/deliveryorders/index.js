const {
        Schema,
        model,
      } = require('mongoose');

const deliveryOrderSchema = new Schema({
  date: Number,
  products: [{
    name: String,
    unit: Number,
    price: Number,
    iva: Number,
    taxBase: Number,
    total: Number,
    code: String,
  }],
  taxBase: Number,
  iva: Number,
  total: Number,
  nInvoice: String,
  client: String,
  nameClient: String,
}, { versionKey: false });

module.exports = model('DeliveryOrder', deliveryOrderSchema);
