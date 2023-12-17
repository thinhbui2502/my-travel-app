import React from 'react';
import Hotel from './Hotel.js'; // Import the Hotel component
import '../style/HotelPage.css';

const hotelsData = [
  { id: 1, name: 'Luxury Hotel', location: 'City Center', price: '$200/night' },
  { id: 2, name: 'Cozy Inn', location: 'Suburb Area', price: '$120/night' },
  // Add more hotel data as needed
];

const HotelPage = () => (
  <div className="hotel-page">
    <h2 className="page-header">Hotels</h2>

    <div className="hotel-list">
      {hotelsData.map((hotel) => (
        <Hotel key={hotel.id} {...hotel} />
      ))}
    </div>
  </div>
);

export default HotelPage;
