const BaseService = require('./BaseService');
const Booking = require('../models/Booking');

class BookingService extends BaseService {
  constructor() {
    super(Booking);
  }

  async findByUser(userId) {
    return await this.model.find({ userId });
  }

  async updateStatus(id, status) {
    return await this.model.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
  }
}

module.exports = new BookingService();