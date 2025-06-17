import React, { useState } from "react";
import { useItems } from "./hooks/useItems";
import { api } from "./api/itemsApi";
import ItemCard from "./components/ItemCard";
import CreateItemForm from "./components/CreateItemForm";
import UpdateModal from "./components/UpdateModal";
import SearchBar from "./components/SearchBar";
import "./App.css";

export default function App() {
  const { items, isLoading, setIsLoading, fetchItems, deleteItem, setItems } =
    useItems();
  const [editingItem, setEditingItem] = useState(null);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      fetchItems();
      return;
    }

    setIsLoading(true);
    try {
      const data = await api.search(query);
      setItems(data);
    } catch (error) {
      setItems([]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }
    if (items === null) {
      return (
        <p style={{ color: "#6b7280", marginTop: "20px" }}>
          Click "Show All" or use the search bar to load items.
        </p>
      );
    }
    if (items.length === 0) {
      return <p>No items found.</p>;
    }
    return items.map((item) => (
      <ItemCard
        key={item._id}
        item={item}
        onEdit={setEditingItem}
        onDelete={deleteItem}
      />
    ));
  };

  return (
    <div style={{ padding: "20px" }}>
      <header>
        <h1>Item Management Dashboard</h1>
        <p>A simple interface to test the Items API.</p>
      </header>

      <main style={{ marginTop: "20px" }}>
        <section>
          <h2>All Items</h2>
          <SearchBar onSearch={handleSearch} onShowAll={fetchItems} />
          {renderContent()}
        </section>

        <aside style={{ marginTop: "30px" }}>
          <CreateItemForm onCreation={fetchItems} />
        </aside>
      </main>

      <UpdateModal
        item={editingItem}
        onClose={() => setEditingItem(null)}
        onUpdate={() => {
          setEditingItem(null);
          fetchItems();
        }}
      />
    </div>
  );
}
