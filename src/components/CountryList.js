import React from 'react';
import StateList from './StateList';

function CountryList({ countries, addCountry, editCountry, deleteCountry, addState, editState, deleteState, addCity, deleteCity }) {

  const handleAddCountry = () => {
    const name = prompt("Enter Country Name");
    if (name) {
      addCountry(name);
    }
  };

  const handleEditCountry = (countryId, currentName) => {
    const newName = prompt("Enter new Country Name", currentName);
    if (newName) {
      if (window.confirm("Are you sure you want to update?")) {
        editCountry(countryId, newName);
      }
    }
  };

  const handleDeleteCountry = (countryId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteCountry(countryId);
    }
  };

  return (
    <div className="country-list">
      <button className="add-button" onClick={handleAddCountry}>Add Country</button>
      <ul className="country-ul">
        {countries.map(country => (
          <li className="country-li" key={country.id}>
            <span className="country-name">{country.name}</span>
            <div className="country-actions">
              <button className="edit-button" onClick={() => handleEditCountry(country.id, country.name)}>Edit</button>
              <button className="delete-button" onClick={() => handleDeleteCountry(country.id)}>Delete</button>
            </div>
            <StateList
              countryId={country.id}
              states={country.states}
              addState={addState}
              editState={editState}
              deleteState={deleteState}
              addCity={addCity}
              deleteCity={deleteCity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryList;