import React from 'react';
import './searchBox.css';

const searchBox = ({ placeholder, onChangeHandler }) => (
  <div>
    <input
      type="search" 
      className="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  </div>
);

export default searchBox;
