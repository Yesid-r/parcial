import React, { useState } from 'react';

const DishForm = () => {
  const [searchData, setSearchData] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api-dishes.vercel.app/${searchData}`);
      const data = await response.json();
      setSearchResult(data);
    } catch (error) {
      console.error('Error searching for data:', error);
    }
  };

  return (
    <div>
      
      <form onSubmit={handleSearch}>
        <div className="mb-3">
          <label htmlFor="searchData" className="form-label">Search Dish by id</label>
          <input type="text" className="form-control" id="searchData" value={searchData} onChange={(e) => setSearchData(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {searchResult && (
        <div className="card mt-4">
          <div className="card-body">
            <h5 className="card-title">{searchResult.data.name}</h5>
            <p className="card-text">Calories: {searchResult.data.calories}</p>
            <p className="card-text">Is Vegetarian: {searchResult.data.isVegetarian ? 'Yes' : 'No'}</p>
            <p className="card-text">Value: {searchResult.data.value}</p>
            <p className="card-text">Comments: {searchResult.data.comments}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DishForm;