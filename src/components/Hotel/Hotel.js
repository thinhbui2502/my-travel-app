import React from 'react';

const Hotel = ({ name, location, price, backgroundColor, onBook }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', borderRadius: '5px', backgroundColor }}>
      <h3>{name}</h3>
      <p>Location: {location}</p>
      <p>Price: {price}</p>
      <button onClick={onBook} style={{ background: '#3498db', color: '#fff', padding: '5px 10px', cursor: 'pointer' }}>
        Book Now
      </button>
    </div>
  );
};

export default Hotel;
