const BaseService = require('./BaseService');
const Notification = require('../models/Notification');

class NotificationService extends BaseService {
  constructor() {
    super(Notification);
  }

  async findByUser(userId) {
    return await this.model.find({ userId });
  }

  async markAsRead(id) {
    return await this.model.findByIdAndUpdate(
      id,
      { isRead: true },
      { new: true }
    );
  }
}

module.exports = new NotificationService();