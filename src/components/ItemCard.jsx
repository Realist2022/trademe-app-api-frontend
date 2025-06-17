import React from "react";
import Button from "./Button.jsx"; 

export default function ItemCard({ item, onEdit, onDelete }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", margin: "10px 0" }}>
      <h3>
        <strong>{item.title}</strong>
      </h3>
      <p>{item.description || "No description provided."}</p>
      <div>
        <p>Start Price: ${item.start_price}</p>
        <p>Reserve Price: ${item.reserve_price}</p>
      </div>
      <div style={{ marginTop: "10px" }}>
        <Button variant="warning" onClick={() => onEdit(item)}>
          Update
        </Button>
        <Button variant="danger" onClick={() => onDelete(item._id)}>
          Delete
        </Button>
      </div>
    </div>
  );
}