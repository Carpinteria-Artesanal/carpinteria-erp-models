const { Schema, model } = require('mongoose');

const invoiceSchema = new Schema({
  dateInvoice: Number,
  dateRegister: Number,
  total: Number,
  iva: Number,
  nOrder: Number,
  nInvoice: String,
  concept: String,
  taxBase: Number,
  provider: String,
  nameProvider: String,
  payments: [
    {paymentDate: { type: Number }, amount: { type: Number }}
  ],
  paymentType: { type: String },
  paid: { type: Boolean },
  bookColumn: String, // Name column in book
  businessName: String,
  cif: String,
  mailSend: Boolean, // Ha sido enviada por correo eléctronico
}, { versionKey: false });

module.exports = model('Invoice', invoiceSchema);
