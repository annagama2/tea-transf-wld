const axios = require('axios');
const config = require('../config/config.json');

exports.makePayment = async (userId, amount) => {
  try {
    const response = await axios.post(config.teaPaymentApiUrl, {
      userId,
      amount
    }, {
      headers: {
        'Authorization': `Bearer ${config.teaPaymentApiKey}`
      }
    });

    return response.data;
  } catch (error) {
    return { success: false, details: error.message };
  }
};
