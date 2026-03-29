const mongoose = require('mongoose');

// Price rules
const PRICES = {
  'Wash & Fold': 4,       // per kg
  'Wash & Ironing': 6,    // per item
  'Dry Cleaning': 8,      // per item
  'Ironing': 3            // per item
};

const COLLECTION_FEE = {
  'Drop off at store': 0,
  'Pickup from home': 10
};

const RETURN_FEE = {
  'Pick up at store': 0,
  'Home delivery': 10
};

const bookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  serviceType: {
    type: String,
    enum: ['Wash & Fold', 'Wash & Ironing', 'Dry Cleaning', 'Ironing'],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number
  },
  bookingDate: {
    type: Date,
    required: true
  },
  collectionMethod: {
    type: String,
    enum: ['Drop off at store', 'Pickup from home'],
    required: true
  },
  returnMethod: {
    type: String,
    enum: ['Pick up at store', 'Home delivery'],
    required: true
  },
  status: {
    type: String,
    enum: [
      'booked',
      'waiting_pickup',
      'waiting_dropoff',
      'laundry_received',
      'processing',
      'ready',
      'out_for_delivery',
      'completed'
    ],
    default: 'booked'
  }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
module.exports.PRICES = PRICES;
module.exports.COLLECTION_FEE = COLLECTION_FEE;
module.exports.RETURN_FEE = RETURN_FEE;