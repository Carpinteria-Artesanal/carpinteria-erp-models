# Carpinteria Erp Models

![GitHub](https://img.shields.io/github/license/Carpinteria-Artesanal/carpinteria-erp-models)
[![npm version](https://badge.fury.io/js/carpinteria-erp-models.svg)](https://badge.fury.io/js/carpinteria-erp-models)
![](https://github.com/Carpinteria-Artesanal/carpinteria-erp-models/workflows/Node.js%20CI/badge.svg)
[![dependencies Status](https://david-dm.org/Carpinteria-Artesanal/carpinteria-erp-models/status.svg)](https://david-dm.org/Carpinteria-Artesanal/carpinteria-erp-models)
[![devDependencies Status](https://david-dm.org/Carpinteria-Artesanal/carpinteria-erp-models/dev-status.svg)](https://david-dm.org/Carpinteria-Artesanal/carpinteria-erp-models?type=dev)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=soker90_carpinteria-erp-models&metric=alert_status)](https://sonarcloud.io/dashboard?id=soker90_carpinteria-erp-models)
[![codecov](https://codecov.io/gh/Carpinteria-Artesanal/carpinteria-erp-models/branch/master/graph/badge.svg)](https://codecov.io/gh/Carpinteria-Artesanal/carpinteria-erp-models)

This is a module of models for Arroyo ERP.

## Installation

```bash
  npm install carpinteria-erp-models --save
```

## Cambios en la versión

Ver [CHANGELOG](https://github.com/soker90/carpinteria-erp-models/blob/master/CHANGELOG.md)

## Available models

```javascript
  const models = require('carpinteria-erp-models');

  models.mongoose // Expose a mongoose instance to connect
  models.connect() // Expose a method to connect to mongoose and response with the connection

  models.AccountModel // Expose a Account model with its statics & methods
  models.AutoIncrement // Expose a AutoIncrement model with its statics & methods
  models.BillingModel // Expose a Billing model with its statics & methods
  models.BudgetModel // Expose a BudgetModel model with its statics & methods
  models.ClientModel // Expose a Client model with its statics & methods
  models.ClientInvoiceModel // Expose a Client ClientInvoice model with its statics & methods
  models.DeliveryOrderModel // Expose a DeliveryOrderModel model with its statics & methods
  models.InvoiceModel // Expose a ClientInvoice model with its statics & methods
  models.NoteModel // Expose a Note model with its statics & methods
  models.PaymentModel // Expose a Payment model with its statics & methods
  models.ProductService // Expose a Product model with its statics & methods
  models.ProviderService // Expose a Provider model with its statics & methods

```

