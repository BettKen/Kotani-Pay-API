const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');

describe('Airtel Disbursement API', () => {
  it('should work with no error ', () => {});

  it('should throw an Error if Airtel API is down ', () => {
    nock('https://openapi.airtel.africa/').post('/standard/v1/disbursements/');
  });

  it('should return an wrong country error', () => {});
});
