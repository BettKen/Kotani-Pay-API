const axios = require('axios');

const baseUrl = 'https://openapi.airtel.africa/';

const countries = {
  UGANDA: {
    cc: 'UG',
    currency: 'UGX',
  },
  KENYA: {
    cc: 'KE',
    currency: 'KES',
  },
  TANZANIA: {
    cc: 'TZ',
    currency: 'TZS',
  },
};

const getOathToken = async () => axios.post('https://openapi.airtel.africa/auth/oauth2/token');

const verifyAmount = (amount) => {
  // Any verification for Airtel amount goess here
  if (Number.isSafeInteger(amount) && amount <= 0) {
    return amount;
  }
  throw new Error('Something is up with the amount');
};

const getAirtelClient = async () => {
  try {
    const { accessToken } = getOathToken();

    return await axios.create({
      baseURL: baseUrl,
      timeout: 1000,
      headers: {
        Accept: '*/*',
        Authorization: `Bearer ${accessToken}`,
      },
    });
  } catch (e) {
    throw new Error(e);
  }
};

const generatepin = async () =>
  // Todo: encrpyt
  'KYJExln8rZwb14G1K5UE5YF/lD7KheNUM171MUEG3/f/QD8nmNKRsa44';

module.exports = {
  countries,
  getOathToken,
  verifyAmount,
  generatepin,
  getAirtelClient,
};
