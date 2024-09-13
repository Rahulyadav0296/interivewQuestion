import React, { useState } from "react";
const arr = ["ReactJs, NextJs", "TypeScript"];

function App() {
  const [inputItems, setInputItems] = useState([]);
  const [showItems, setShowItems] = useState(arr);
  const [isVisible, setIsVisible] = useState(false);

  const handleShowItems = () => {
    setIsVisible(!isVisible);
  };

  const handleClick = (id) => {
    const filterItem = showItems.filter((item, index) => index !== id);
    setShowItems(filterItem);
    const value = showItems[id];
    setInputItems((prev) => [...prev, value]);
  };

  const handleClear = () => {
    setInputItems([]);
    setShowItems(arr);
  };

  const handleDelete = (id) => {
    const filterItems = inputItems.filter((_, index) => index !== id);
    setInputItems(filterItems);
    const value = inputItems[id];
    setShowItems((prev) => [...prev, value]);
  };

  return (
    <div className="app-container">
      {inputItems.length > 0 ? (
        <div className="selected-items-container">
          {inputItems &&
            inputItems.map((item, index) => (
              <div key={index} className="selected-item">
                <p>{item}</p>
                <button
                  className="delete-button"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      ) : (
        <input
          type="text"
          placeholder="Filter By Tags.."
          className="input-filter"
        />
      )}

      {inputItems.length > 0 && (
        <button className="clear-button" onClick={handleClear}>
          Clear All
        </button>
      )}

      <p className="toggle-button" onClick={handleShowItems}>
        ^
      </p>

      {isVisible && (
        <div className="options-container">
          {showItems.length > 0 ? (
            showItems.map((item, index) => (
              <div
                key={index}
                className="option-item"
                onClick={() => handleClick(index)}
              >
                <p>{item}</p>
              </div>
            ))
          ) : (
            <p className="no-option">No Option</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
