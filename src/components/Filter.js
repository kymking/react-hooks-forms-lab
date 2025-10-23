import React from "react";

function Filter({ search, onSearchChange, onCategoryChange }) {
  function handleSearchChange(event) {
    onSearchChange(event.target.value);
  }

  function handleCategoryChange(event) {
    onCategoryChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search"
        value={search}                 // ✅ show search term from props
        onChange={handleSearchChange}  // ✅ call parent callback when changed
      />

      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;