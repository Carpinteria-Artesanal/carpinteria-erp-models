const {
        Schema,
        model,
      } = require('mongoose');

const clientInvoiceSchema = new Schema({
  date: Number,
  products: [{
    name: String,
    unit: Number,
    price: Number,
    iva: Number,
    taxBase: Number,
    total: Number,
  }],
  taxBase: Number,
  iva: Number,
  total: Number,
  nInvoice: String,
  client: String,
  nameClient: String,
  paid: Boolean,
  remaining: Number,
  payments: [{
    amount: Number,
    date: Number,
    paymentType: String,
  }],
}, { versionKey: false });

module.exports = model('ClientInvoice', clientInvoiceSchema);
