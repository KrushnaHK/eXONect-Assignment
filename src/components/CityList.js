import React from 'react';

function CityList({ countryId, stateId, cities, addCity, deleteCity }) {

  const handleAddCity = () => {
    const name = prompt("Enter City Name");
    if (name) {
      addCity(countryId, stateId, name);
    }
  };

  const handleDeleteCity = (cityId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteCity(countryId, stateId, cityId);
    }
  };

  return (
    <div className="city-list">
      <h4>Cities</h4>
      <button className="add-button" onClick={handleAddCity}>Add City</button>
      <ul className="city-ul">
        {cities.map(city => (
          <li className="city-li" key={city.id}>
            <span className="city-name">{city.name}</span>
            <div className="city-actions">
              <button className="delete-button" onClick={() => handleDeleteCity(city.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CityList;