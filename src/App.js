import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import Booking from './components/Booking';
import Confirmation from './components/Confirmation';
import HotelPage from './pages/HotelPage'; // Import the HotelPage component

import './App.css'; // Import the CSS file

function App() {
  const hotelsData = [
    { id: 1, name: 'Luxury Hotel', location: 'City Center', price: '$200/night' },
    { id: 2, name: 'Cozy Inn', location: 'Suburb Area', price: '$120/night' },
    { id: 3, name: 'Tray Hotel', location: 'Metropolis', price: '$150/night' },
    { id: 4, name: 'Love Hotel', location: 'HCM', price: '$220/night' },
    // Add more hotel data as needed
  ];

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
            <li>
              <Link to="/booking">Booking</Link>
            </li>
            <li>
              <Link to="/hotels">Hotels</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="/search" element={<Search />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/hotels" element={<HotelPage hotelsData={hotelsData}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
