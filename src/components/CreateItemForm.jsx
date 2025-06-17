import React from "react";
import { api } from "../api/itemsApi";
import Button from "./Button";

export default function CreateItemForm({ onCreation }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    data.start_price = parseFloat(data.start_price);
    data.reserve_price = parseFloat(data.reserve_price);

    try {
      await api.post(data);
      alert("Item created successfully!");
      e.target.reset();
      onCreation(); 
    } catch (error) {
      alert(`Error creating item: ${error.message}`);
    }
  };

  return (
    <div style={{ border: "1px solid black", padding: "15px" }}>
      <h2>Create New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label><br />
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="description">Description</label><br />
          <textarea id="description" name="description" rows="3"></textarea>
        </div>
        <div>
          <label htmlFor="start_price">Start Price</label><br />
          <input type="number" id="start_price" name="start_price" required min="0" step="0.01" />
        </div>
        <div>
          <label htmlFor="reserve_price">Reserve Price</label><br />
          <input type="number" id="reserve_price" name="reserve_price" required min="0" step="0.01" />
        </div>
        <br />
        <Button type="submit" variant="primary" style={{ width: "100%" }}>
          Create Item
        </Button>
      </form>
    </div>
  );
}