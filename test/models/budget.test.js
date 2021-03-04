const {
        budgetData,
        twoBudgetData,
      } = require('../mocks');

const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const { BudgetModel } = models;

/**
 * Test collection
 * @param {Object} document
 * @param {Object} mock
 * @private
 */
const _checkCreated = (document, mock) => {
  expect(document.date)
    .toBe(mock.date);
  expect(document.taxBase)
    .toBe(mock.taxBase);
  expect(document.total)
    .toBe(mock.total);
  expect(document.iva)
    .toBe(mock.iva);
  expect(document.nInvoice)
    .toBe(mock.nInvoice);
  expect(document.client)
    .toBe(mock.client);
  document.products.forEach((product, index) => {
    expect(product.name)
      .toBe(mock.products[index].name);
    expect(product.unit)
      .toBe(mock.products[index].unit);
    expect(product.iva)
      .toBe(mock.products[index].iva);
    expect(product.price)
      .toBe(mock.products[index].price);
    expect(product.taxBase)
      .toBe(mock.products[index].taxBase);
    expect(product.total)
      .toBe(mock.products[index].total);
  });
};

describe('budget', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new invoice', () => {
    beforeAll(() => Promise.all([
      BudgetModel.create(budgetData),
    ]));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await BudgetModel.countDocuments();
      expect(counter)
        .toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await BudgetModel.findOne();

      _checkCreated(document, budgetData);
    });

  });

  describe('Create multiple accounts', () => {
    beforeAll(async () => {
      await BudgetModel.create(twoBudgetData.budgets[0]);
      await BudgetModel.create(twoBudgetData.budgets[1]);
    });

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await BudgetModel.countDocuments();
      expect(counter)
        .toBe(2);
    });

    test('Check delivery orders created', async () => {
      const documentList = await BudgetModel.find({});

      _checkCreated(documentList[0], twoBudgetData.budgets[0]);
      _checkCreated(documentList[1], twoBudgetData.budgets[1]);
    });

  });

});
