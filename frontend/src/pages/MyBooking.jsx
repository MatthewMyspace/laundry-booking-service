import { useEffect, useState } from 'react';
import axiosInstance from '../axiosConfig';
import { useAuth } from '../context/AuthContext';

const MyBooking = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchMyBookings = async () => {
      try {
        const response = await axiosInstance.get('/api/bookings', {
          headers: { Authorization: `Bearer ${user.token}` },
        });
        setBookings(response.data);
      } catch (error) {
        console.error(error);
        alert('Failed to fetch bookings.');
      }
    };

    if (user?.token) fetchMyBookings();
  }, [user]);

  const handleCancelBooking = async (id) => {
    try {
      await axiosInstance.delete(`/api/bookings/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setBookings(bookings.filter((booking) => booking._id !== id));
      alert('Booking cancelled successfully');
    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Failed to cancel booking.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Bookings</h1>

      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking._id} className="bg-white border p-4 rounded mb-4 shadow">
            <p><strong>Service:</strong> {booking.serviceType}</p>
            <p><strong>Quantity:</strong> {booking.quantity}</p>
            <p><strong>Date:</strong> {new Date(booking.bookingDate).toLocaleDateString()}</p>
            <p><strong>Collection:</strong> {booking.collectionMethod}</p>
            <p><strong>Return:</strong> {booking.returnMethod}</p>
            <p><strong>Total Price:</strong> ${booking.totalPrice}</p>
            <p><strong>Status:</strong> {booking.status}</p>
            <div className="mt-3">
              <button
                onClick={() => handleCancelBooking(booking._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Cancel Booking
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBooking;