const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const nock = require('nock');
const { getBalanceUrl, airtelCheckBalance } = require('./checkBalance');
const { baseUrl } = require('../util');

describe('Airtel Check Balance', () => {
  it('should work with no error ', () => {});

  it('should throw an Error if Airtel API is down ', () => {
    nock(baseUrl).post(getBalanceUrl).query().reply(200, {});
    const { body } = airtelCheckBalance('KENYA');

    expect(body).toMatch({});
  });

  it('should return an wrong country error', () => {
    expect(airtelCheckBalance('SOMALIA')).toThrow('You must provide a number');
  });
});
