const {
        invoiceData,
        twoInvoicesData,
      } = require('../mocks');

const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const {InvoiceModel} = models;

/**
 * Test collection
 * @param {Object} document
 * @param {Object} mock
 * @private
 */
const _checkCreated = (document, mock) => {
  expect(document.deliveryOrders.toString()).toBe(mock.deliveryOrders.toString());
  expect(document.dateInvoice).toBe(mock.dateInvoice);
  expect(document.dateRegister).toBe(mock.dateRegister);
  expect(document.total).toBe(mock.total);
  expect(document.iva).toBe(mock.iva);
  expect(document.re).toBe(mock.re);
  expect(document.nInvoice).toBe(mock.nInvoice);
  expect(document.taxBase).toBe(mock.taxBase);
  expect(document.concept).toBe(mock.concept);
  expect(document.mailSend).toBe(mock.mailSend);
  expect(document.payment.type).toBe(mock.payment.type);
  expect(document.payment.paymentDate).toBe(mock.payment.paymentDate);
  expect(document.payment.numCheque).toBe(mock.payment.numCheque);
  expect(document.payment.paid).toBe(mock.payment.paid);
  expect(document.payment.invoicesOrder).toBe(mock.payment.invoicesOrder);
  expect(document.bookColumn).toBe(mock.bookColumn);
  expect(document.businessName).toBe(mock.businessName);
  expect(document.cif).toBe(mock.cif);
  expect(document.nameProvider).toBe(mock.nameProvider);
  expect(document.provider).toBe(mock.provider);
}

describe('invoce', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new invoice', () => {
    beforeAll(() => Promise.all([
      InvoiceModel.create(invoiceData)
    ]));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await InvoiceModel.countDocuments();
      expect(counter).toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await InvoiceModel.findOne();

      _checkCreated(document, invoiceData);
    });

  });

  describe('Create multiple accounts', () => {
    beforeAll(async () => {
      await InvoiceModel.create(twoInvoicesData.invoices[0]);
      await InvoiceModel.create(twoInvoicesData.invoices[1]);
    });

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await InvoiceModel.countDocuments();
      expect(counter).toBe(2);
    });

    test('Check delivery orders created', async () => {
      const documentList = await InvoiceModel.find({});

      _checkCreated(documentList[0], twoInvoicesData.invoices[0]);
      _checkCreated(documentList[1], twoInvoicesData.invoices[1]);
    });

  });

});
