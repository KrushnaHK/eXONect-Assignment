import React from 'react';
import CityList from './CityList';

function StateList({ countryId, states, addState, editState, deleteState, addCity, deleteCity }) {

  const handleAddState = () => {
    const name = prompt("Enter State Name");
    if (name) {
      addState(countryId, name);
    }
  };

  const handleEditState = (stateId, currentStateName) => {
    const newStateName = prompt("Enter new State Name", currentStateName);
    if (newStateName) {
      if (window.confirm("Are you sure you want to update?")) {
        editState(countryId, stateId, newStateName);
      }
    }
  };

  const handleDeleteState = (stateId) => {
    if (window.confirm("Are you sure you want to delete?")) {
      deleteState(countryId, stateId);
    }
  };

  return (
    <div className="state-list">
      <h3>States</h3>
      <button className="add-button" onClick={handleAddState}>Add State</button>
      <ul className="state-ul">
        {states.map(state => (
          <li className="state-li" key={state.id}>
            <span className="state-name">{state.name}</span>
            <div className="state-actions">
              <button className="edit-button" onClick={() => handleEditState(state.id, state.name)}>Edit</button>
              <button className="delete-button" onClick={() => handleDeleteState(state.id)}>Delete</button>
            </div>
            <CityList
              countryId={countryId}
              stateId={state.id}
              cities={state.cities}
              addCity={addCity}
              deleteCity={deleteCity}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StateList;