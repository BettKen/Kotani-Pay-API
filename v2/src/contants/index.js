// GLOBAL VARIABLES
const USD_TO_KES = '3128952f1782f60c1cf95c5c3d13b4dc739f1a0d';
const KES_TO_USD = '883736ecb6bd36d6411c77bdf1351052a1f23c00';
const GHS_TO_USD = '01fc5317bd43b9698600f2c411c17e92270d3771';
const USD_TO_GHS = 'd4379db945500fec8b6aa2a0b1027abbf625141a';

// GLOBAL ENV VARIABLES
// TODO : move to env file
const iv = 'as'; // functions.config().env.crypto_iv.key;
const escrowMSISDN = 'ss'; // functions.config().env.escrow.msisdn;
const signerMSISDN = 'ss';// functions.config().env.ubiManager.msisdn;
const phoneHashfn = '';

module.exports = {
  iv,
  phoneHashfn,
  escrowMSISDN,
  signerMSISDN,
  USD_TO_GHS,
  GHS_TO_USD,
  KES_TO_USD,
  USD_TO_KES,
};
