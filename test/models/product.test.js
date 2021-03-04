const {
  productData,
  twoProducts,
} = require('../mocks/product');
const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const { ProductModel } = models;

/**
 * Test collection
 * @param {Object} document
 * @param {Object} mock
 * @private
 */
const _checkCreated = (document, mock) => {
  expect(document.code)
    .toBe(mock.code);
  expect(document.name)
    .toBe(mock.name);
  expect(document.rate)
    .toBe(mock.rate);
  expect(document.iva)
    .toBe(mock.iva);
  expect(document.re)
    .toBe(mock.re);
  expect(document.profit)
    .toBe(mock.profit);
  expect(document.price)
    .toBe(mock.price);
  expect(document.cost)
    .toBe(mock.cost);
  expect(document.sale)
    .toBe(mock.sale);
};

describe('product', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new product', () => {
    beforeAll(() => ProductModel.create(productData));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await ProductModel.countDocuments();
      expect(counter)
        .toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await ProductModel.findOne();

      _checkCreated(document, productData);
    });
  });

  describe('Create multiple accounts', () => {
    beforeAll(async () => {
      await ProductModel.create(twoProducts.products[0]);
      await ProductModel.create(twoProducts.products[1]);
    });

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await ProductModel.countDocuments();
      expect(counter)
        .toBe(2);
    });

    test('Check accounts created', async () => {
      const documentList = await ProductModel.find({});

      _checkCreated(documentList[0], twoProducts.products[0]);
      _checkCreated(documentList[1], twoProducts.products[1]);
    });
  });

});
