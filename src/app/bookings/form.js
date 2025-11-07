"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const BookingForm = () => {
  const router = useRouter();
  const [workerType, setWorkerType] = useState('unskilled');
  const [workDescription, setWorkDescription] = useState('');
  const [quantity, setQuantity] = useState('');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage('');

    const formData = {
      workerType,
      workDescription,
      quantity,
      selectedSkill,
      location,
      phone,
    };

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage(`Booking successfully submitted! Booking ID: ${data.bookingId}`);
        
        // Redirect to the booking status page
        router.push(`/bookings/${data.bookingId}`);
      } else {
        setResponseMessage('Error: ' + data.message);
      }
    } catch (error) {
      setResponseMessage('Error: Unable to submit booking');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-lg font-medium text-gray-700">Choose Worker Type</label>
        <select
          onChange={(e) => setWorkerType(e.target.value)}
          value={workerType}
          className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="unskilled">Unskilled</option>
          <option value="skilled">Skilled</option>
        </select>
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700">Work Description</label>
        <input
          type="text"
          value={workDescription}
          onChange={(e) => setWorkDescription(e.target.value)}
          placeholder="Describe the work"
          className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700">Quantity of Labor</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Number of workers"
          className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location of work"
          className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-lg font-medium text-gray-700">Phone Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Your phone number"
          className="mt-2 w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:bg-blue-300"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Booking'}
      </button>

      {responseMessage && (
        <p className="mt-4 text-center text-red-500">{responseMessage}</p>
      )}
    </form>
  );
};

export default BookingForm;
