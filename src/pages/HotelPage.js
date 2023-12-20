import React from 'react';
import Hotel from '../components/Hotel/Hotel.js';
import '../style/HotelPage.css';

const HotelPage = ({hotelsData}) => {
  const handleBook = (hotelId) => {
    console.log(`Book hotel with ID: ${hotelId}`);
  };

  if(Array.isArray(hotelsData) && hotelsData.length > 0) {
    return (
      <div className="hotel-page">
        <h2 className="page-header">Hotels</h2>
    
        <div className="hotel-list">
          {hotelsData.map((hotel, index) => (
            <Hotel
              key={hotel.id}
              {...hotel}
              backgroundColor={index % 2 === 0 ? '#eaf7fd' : '#fdeaea'}
              onBook={() => handleBook(hotel.id)}
            />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="hotel-page">
        <h2 className="page-header">Hotels</h2>
    
        <div className="hotel-list">
          <span>No data</span>
        </div>
      </div>
    )
  }
}

export default HotelPage;
