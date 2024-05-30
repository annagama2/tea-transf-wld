const axios = require('axios');
const config = require('../config/config.json');

exports.purchasePackage = async (userId, packageId) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/packages', {
      userId,
      packageId
    }, {
      headers: {
        'Authorization': `Bearer ${config.openaiApiKey}`
      }
    });

    return response.data;
  } catch (error) {
    return { success: false, details: error.message };
  }
};
