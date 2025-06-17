import { useState, useCallback } from "react";
import { api } from "../api/itemsApi";

export const useItems = () => {
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchItems = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await api.get();
      setItems(data);
    } catch (error) {
      console.error("Error fetching items:", error);
      setItems([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteItem = async (id) => {
    try {
      await api.delete(id);
      if (items) {
        setItems(prevItems => prevItems.filter(item => item._id !== id));
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert(`Error deleting item: ${error.message}`);
    }
  };

  return { items, isLoading, setIsLoading, fetchItems, deleteItem, setItems };
};