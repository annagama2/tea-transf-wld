const teaPaymentService = require('../services/teaPaymentService');
const openaiService = require('../services/openaiService');

exports.purchaseOpenAIPackage = async (req, res) => {
  const { userId, packageId, teaAmount } = req.body;

  try {
    // Step 1: Make payment with TEA coins
    const paymentResult = await teaPaymentService.makePayment(userId, teaAmount);

    if (!paymentResult.success) {
      return res.status(400).json({ error: 'Payment failed', details: paymentResult.details });
    }

    // Step 2: Purchase OpenAI package
    const openAIResult = await openaiService.purchasePackage(userId, packageId);

    if (!openAIResult.success) {
      return res.status(500).json({ error: 'OpenAI package purchase failed', details: openAIResult.details });
    }

    res.status(200).json({ message: 'Package purchased successfully', data: openAIResult.data });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred', details: error.message });
  }
};
