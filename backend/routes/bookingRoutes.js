const express = require('express');
const router = express.Router();
const { createBooking, getBookingById, getBookings, updateBooking, deleteBooking } = require('../controllers/bookingController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createBooking);       // CREATE
router.get('/', protect, getBookings);          // READ
router.put('/:id', protect, updateBooking);     // UPDATE
router.delete('/:id', protect, deleteBooking);  // DELETE
router.get('/:id', protect, getBookingById);    // Get by ID

module.exports = router;