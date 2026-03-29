import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosConfig';
import { useAuth } from '../context/AuthContext';

const Bookings = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    serviceType: '',
    quantity: '',
    bookingDate: '',
    collectionMethod: '',
    returnMethod: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateBooking = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post('/api/bookings', formData, {
        headers: { Authorization: `Bearer ${user.token}` },
      });

      alert('Booking created successfully');

      // 🔥 เด้งไปหน้าใหม่
      navigate('/my-bookings');

    } catch (error) {
      console.error(error);
      alert(error.response?.data?.message || 'Failed to create booking.');
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Home Service</h1>

      <form onSubmit={handleCreateBooking} className="bg-white p-6 shadow-md rounded">
        <h2 className="text-xl font-semibold mb-4">Create Booking</h2>

        <select name="serviceType" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required>
          <option value="">Select Service Type</option>
          <option value="Wash & Fold">Wash & Fold</option>
          <option value="Wash & Ironing">Wash & Ironing</option>
          <option value="Dry Cleaning">Dry Cleaning</option>
          <option value="Ironing">Ironing</option>
        </select>

        <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

        <input type="date" name="bookingDate" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required />

        <select name="collectionMethod" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required>
          <option value="">Select Collection Method</option>
          <option value="Drop off at store">Drop off at store</option>
          <option value="Pickup from home">Pickup from home</option>
        </select>

        <select name="returnMethod" onChange={handleChange} className="w-full mb-4 p-2 border rounded" required>
          <option value="">Select Return Method</option>
          <option value="Pick up at store">Pick up at store</option>
          <option value="Home delivery">Home delivery</option>
        </select>

        <button type="submit" className="w-full bg-gray-600 text-white p-2 rounded">
          Create Booking
        </button>
      </form>
    </div>
  );
};

export default Bookings;