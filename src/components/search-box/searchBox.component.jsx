import React from 'react';
import './searchBox.style.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="input-field"
    type="search"
    placeholder={placeholder}
    onChange={handleChange}
  />
);
