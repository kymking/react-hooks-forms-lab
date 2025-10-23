import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import itemData from "../data/items";

function ShoppingList() {
  const [items, setItems] = useState(itemData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleSearchChange(searchText) {
    setSearch(searchText);
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  const itemsToDisplay = items.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const itemElements = itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleAddItem} />
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">{itemElements}</ul>
    </div>
  );
}

export default ShoppingList;