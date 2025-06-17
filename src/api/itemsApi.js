const API_BASE_URL = "http://localhost:5000/api/items";

const apiRequest = async (endpoint = "", method = "GET", data = null) => {
  const config = {
    method,
    headers: { "Content-Type": "application/json" },
  };
  if (data) {
    config.body = JSON.stringify(data);
  }
  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error(responseData.message || `HTTP error! status: ${response.status}`);
  }
  return responseData;
};

export const api = {
  get: (endpoint = "") => apiRequest(endpoint, "GET"),
  post: (data) => apiRequest("", "POST", data),
  put: (id, data) => apiRequest(`/${id}`, "PUT", data),
  delete: (id) => apiRequest(`/${id}`, "DELETE"),
  search: (query) => apiRequest(`/search?q=${query}`, "GET"),
};