import React from "react";
import { api } from "../api/itemsApi";
import Button from "./Button";

export default function UpdateModal({ item, onClose, onUpdate }) {
  if (!item) return null; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    data.start_price = parseFloat(data.start_price);
    data.reserve_price = parseFloat(data.reserve_price);

    try {
      await api.put(item._id, data);
      alert("Item updated successfully!");
      onUpdate();
    } catch (error) {
      alert(`Error updating item: ${error.message}`);
    }
  };

  const modalOverlayStyle = {
    position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)", display: "flex",
    alignItems: "center", justifyContent: "center",
  };
  const modalContentStyle = {
    backgroundColor: "white", padding: "25px", border: "1px solid black",
    borderRadius: "8px", color: "black",
  };

  return (
    <div style={modalOverlayStyle} onClick={onClose}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2>Update Item</h2>
          <button onClick={onClose} style={{ background: "transparent", border: "none", fontSize: "1.5rem", cursor: "pointer" }}>
            &times;
          </button>
        </div>
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <div>
            <label htmlFor="update-title">Title</label><br />
            <input type="text" id="update-title" name="title" defaultValue={item.title} required />
          </div>
          <div>
            <label htmlFor="update-description">Description</label><br />
            <textarea id="update-description" name="description" defaultValue={item.description} rows="3"></textarea>
          </div>
          <div>
            <label htmlFor="update-start_price">Start Price</label><br />
            <input type="number" id="update-start_price" name="start_price" defaultValue={item.start_price} required min="0" step="0.01" />
          </div>
          <div>
            <label htmlFor="update-reserve_price">Reserve Price</label><br />
            <input type="number" id="update-reserve_price" name="reserve_price" defaultValue={item.reserve_price} required min="0" step="0.01" />
          </div>
          <br />
          <Button type="submit" variant="success" style={{ width: "100%" }}>
            Save Changes
          </Button>
        </form>
      </div>
    </div>
  );
}