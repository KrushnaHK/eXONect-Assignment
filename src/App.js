import React, { useState } from 'react';
import CountryList from './components/CityList';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  const addCountry = (countryName) => {
    setCountries([...countries, { id: Date.now(), name: countryName, states: [] }]);
  };

  const editCountry = (countryId, newName) => {
    setCountries(countries.map(country =>
      country.id === countryId ? { ...country, name: newName } : country
    ));
  };

  const deleteCountry = (countryId) => {
    setCountries(countries.filter(country => country.id !== countryId));
  };

  const addState = (countryId, stateName) => {
    setCountries(countries.map(country =>
      country.id === countryId ? { ...country, states: [...country.states, { id: Date.now(), name: stateName, cities: [] }] } : country
    ));
  };

  const editState = (countryId, stateId, newStateName) => {
    setCountries(countries.map(country =>
      country.id === countryId ? {
        ...country,
        states: country.states.map(state =>
          state.id === stateId ? { ...state, name: newStateName } : state
        )
      } : country
    ));
  };

  const deleteState = (countryId, stateId) => {
    setCountries(countries.map(country =>
      country.id === countryId ? {
        ...country,
        states: country.states.filter(state => state.id !== stateId)
      } : country
    ));
  };

  const addCity = (countryId, stateId, cityName) => {
    setCountries(countries.map(country =>
      country.id === countryId ? {
        ...country,
        states: country.states.map(state =>
          state.id === stateId ? { ...state, cities: [...state.cities, { id: Date.now(), name: cityName }] } : state
        )
      } : country
    ));
  };

  const deleteCity = (countryId, stateId, cityId) => {
    setCountries(countries.map(country =>
      country.id === countryId ? {
        ...country,
        states: country.states.map(state =>
          state.id === stateId ? { ...state, cities: state.cities.filter(city => city.id !== cityId) } : state
        )
      } : country
    ));
  };

  return (
    <div className="app-container">
      <h1>Country, State, City Management</h1>
      <CountryList
        countries={countries}
        addCountry={addCountry}
        editCountry={editCountry}
        deleteCountry={deleteCountry}
        addState={addState}
        editState={editState}
        deleteState={deleteState}
        addCity={addCity}
        deleteCity={deleteCity}
      />
    </div>
  );
}

export default App;