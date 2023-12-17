import React, { useState } from 'react';
import '../style/Search.css';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulated search results for demonstration purposes
    const results = [
      { id: 1, name: 'Flight 1', price: '$200' },
      { id: 2, name: 'Flight 2', price: '$250' },
      // Add more results as needed
    ];

    setSearchResults(results);
  };

  return (
    <div className="search-container">
      <h2 className="page-header">Search Flights</h2>

      <div>
        <input
          type="text"
          className="search-input"
          placeholder="Enter your destination..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>

      {searchResults.length > 0 && (
        <div className="search-results">
          <h3>Search Results:</h3>
          {searchResults.map((result) => (
            <div key={result.id} className="result-item">
              <h3>{result.name}</h3>
              <p>Price: {result.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
