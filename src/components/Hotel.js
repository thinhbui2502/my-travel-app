// Hotel.js
import React from 'react';
import '../style/Hotel.css';

const Hotel = ({ name, location, price }) => (
  <div className="hotel-card">
    <h3>{name}</h3>
    <p>Location: {location}</p>
    <p>Price: {price}</p>
  </div>
);

export default Hotel;
