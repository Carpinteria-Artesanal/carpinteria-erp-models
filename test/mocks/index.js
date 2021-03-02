const provider = require('./provider');
const account = require('./account');
const clientInvoice = require('./clientinvoice');
const product = require('./product');
const invoice = require('./invoice');

module.exports = {
  ...provider,
  ...account,
  ...clientInvoice,
  ...product,
  ...invoice,
};
