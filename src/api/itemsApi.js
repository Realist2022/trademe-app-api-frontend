import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api/items',
  headers: {
    'Content-Type': 'application/json',
  }
});

const handleApiError = (error) => {
  const message = error.response?.data?.message || error.message;
  console.error("API Error:", message);
  throw new Error(message);
};

// 
export const api = {
  get: async (endpoint = "") => {
    try {
      const response = await apiClient.get(endpoint);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  post: async (data, endpoint = "") => {
    try {
      const response = await apiClient.post(endpoint, data);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  put: async (id, data) => {
    try {
      const response = await apiClient.put(`/${id}`, data);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  delete: async (id) => {
    try {
      const response = await apiClient.delete(`/${id}`);
      return response.data;
    } catch (error) {
      handleApiError(error);
    }
  },

  search: async (query) => {
    return api.get(`/search?q=${query}`);
  },
};