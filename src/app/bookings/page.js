"use client"
import React, { useState } from 'react';

import BookingForm from './form';

const BookingPage = () => {
 

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold text-center text-blue-600">Book a Worker</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700">Make a Booking</h2>
        <BookingForm />
      </div>
    </div>
  );
};

export default BookingPage;
