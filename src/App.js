import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Search from './components/Search';
import Booking from './components/Booking';
import Confirmation from './components/Confirmation';
import HotelPage from './components/HotelPage'; // Import the HotelPage component

import './App.css'; // Import the CSS file

function App() {
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
          <Route path="/hotels" element={<HotelPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
