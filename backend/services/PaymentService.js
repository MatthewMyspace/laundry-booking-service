const BaseService = require('./BaseService');
const PaymentMethod = require('../models/PaymentMethod');

class PaymentService extends BaseService {
  constructor() {
    super(PaymentMethod);
  }

  async findByUser(userId) {
    return await this.model.find({ userId });
  }
}

module.exports = new PaymentService();