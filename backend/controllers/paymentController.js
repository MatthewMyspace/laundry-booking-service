const PaymentFacade = require('../services/PaymentFacade');
const Payment = require('../models/Payment');

// ----- Controllers -----

// CREATE - process a payment for a booking
const createPayment = async (req, res) => {
  try {
    const result = await PaymentFacade.createPayment(req.user.id, req.body);
    return res.status(result.statusCode).json(result.body);
  } catch (error) {
    res.status(500).json({
      message: 'Payment processing error',
      error: error.message
    });
  }
};

// GET single payment by id (owner or admin only)
const getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ message: 'Payment not found' });
    }
    if (
      req.user.role !== 'admin' &&
      payment.userId.toString() !== req.user.id
    ) {
      return res.status(403).json({ message: 'Not authorized' });
    }
    res.status(200).json(payment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// GET all payments of current user (or all if admin)
const getPayments = async (req, res) => {
  try {
    let payments;
    if (req.user.role === 'admin') {
      payments = await Payment.find().sort({ createdAt: -1 });
    } else {
      payments = await Payment.find({ userId: req.user.id }).sort({ createdAt: -1 });
    }
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createPayment, getPaymentById, getPayments };
