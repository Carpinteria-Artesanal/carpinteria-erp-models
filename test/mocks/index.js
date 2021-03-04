const account = require('./account');
const budget = require('./budget');
const clientInvoice = require('./clientinvoice');
const deliveryOrder = require('./deliveryorder');
const invoice = require('./invoice');
const product = require('./product');
const provider = require('./provider');

module.exports = {
  ...account,
  ...budget,
  ...clientInvoice,
  ...deliveryOrder,
  ...invoice,
  ...product,
  ...provider,
};
