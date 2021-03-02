const {
        providerData,
        twoProviders,
      } = require('../mocks/provider');
const models = require('../..');

const fakeDatabase = require('../test-db')(models.mongoose);

const { ProviderModel } = models;

/**
 * Test collection
 * @param {Object} document
 * @param {Object} mock
 * @private
 */
const _checkCreated = (document, mock) => {
  expect(document._id.toString()).toBe(mock._id);
  expect(document.address).toBe(mock.address);
  expect(document.city).toBe(mock.city);
  expect(document.postalCode).toBe(mock.postalCode);
  expect(document.province).toBe(mock.province);
  expect(document.email).toBe(mock.email);
  expect(document.name).toBe(mock.name);
  expect(document.phone).toBe(mock.phone);
  expect(document.businessName).toBe(mock.businessName);
  expect(document.cif).toBe(mock.cif);
  expect(document.note).toBe(mock.note);
};


describe('provider', () => {
  beforeAll(() => fakeDatabase.connect());

  afterAll(() => fakeDatabase.disconnect());

  describe('Create a new provider', () => {
    beforeAll(() => ProviderModel.create(providerData));

    afterAll(() => fakeDatabase.clean());

    test('It should contain 1 document', async () => {
      const counter = await ProviderModel.countDocuments();
      expect(counter).toBe(1);
    });

    test('It should contain all the properties specified in the model', async () => {
      const document = await ProviderModel.findOne();

      _checkCreated(document, providerData);
    });
  });

  describe('Create multiple accounts', () => {
    beforeAll(async () => {
      await ProviderModel.create(twoProviders.providers[0]);
      await ProviderModel.create(twoProviders.providers[1]);
    });

    afterAll(() => fakeDatabase.clean());

    test('It should contain 2 documents', async () => {
      const counter = await ProviderModel.countDocuments();
      expect(counter).toBe(2);
    });

    test('Check accounts created', async () => {
      const documentList = await ProviderModel.find({});

      _checkCreated(documentList[0], twoProviders.providers[0]);
      _checkCreated(documentList[1], twoProviders.providers[1]);
    });
  });

});
