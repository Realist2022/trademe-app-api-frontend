import React, { useState } from "react";
import Button from "./Button";

export default function SearchBar({ onSearch, onShowAll }) {
  const [query, setQuery] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  const handleShowAllClick = () => {
    setQuery(""); 
    onShowAll(); 
  };

  return (
    <div style={{ margin: "10px 0" }}>
      <form onSubmit={handleFormSubmit} style={{ display: "inline-block" }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by keyword..."
          style={{ padding: "8px", marginRight: "5px", fontSize: '14px' }}
        />
        <Button type="submit" variant="secondary">
          Search
        </Button>
      </form>

      <Button
        onClick={handleShowAllClick}
        variant="secondary"
        style={{ backgroundColor: "#e5e7eb", color: "#1f2937" }}
      >
        Show All
      </Button>
    </div>
  );
}