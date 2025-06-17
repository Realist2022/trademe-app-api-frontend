# Item Management Dashboard (Frontend)

A simple React frontend application for managing auction items. It provides a user-friendly interface to create, view, update, delete, and search for items by interacting with a backend API.

This project was built with Vite, React, and Axios, and focuses on modern React patterns like custom hooks and component-based architecture.

## Demo

*(Suggestion: Take a screenshot of your running application, add it to your repository, and update the path below!)*

![Item Management Dashboard Screenshot](./docs/screenshot.png)

## Features

-   **View Items:** Fetch and display a list of all items from the database.
-   **Create Items:** A dedicated form to add new items.
-   **Update Items:** Edit item details in a pop-up modal dialog.
-   **Delete Items:** Remove items from the database with a confirmation prompt.
-   **Live Search:** Dynamically search for items by keyword.
-   **On-Demand Loading:** Data is only fetched when the user clicks "Show All" or "Search" to improve initial load time.

## Tech Stack

-   **Framework:** [React](https://reactjs.org/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **HTTP Client:** [Axios](https://axios-http.com/)
-   **Language:** JavaScript (ES6+) & CSS3

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/) (which includes npm) installed on your machine.
-   A running instance of the corresponding backend server. This project expects the backend to be running at `http://localhost:5000`.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Realist2022/trademe-app-api-frontend.git](https://github.com/Realist2022/trademe-app-api-frontend.git)
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd trademe-app-api-frontend
    ```

3.  **Install NPM packages:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application should now be running and accessible at `http://localhost:5173` (or another port if 5173 is in use).

## Configuration

The base URL for the backend API is configured in a single location. If your backend is running on a different address, you can change it here:

**File:** `src/api/itemsApi.js`
```javascript
const apiClient = axios.create({
  baseURL: 'http://localhost:5000/api/items', // <-- Change this URL if needed
  // ...
});
```

## Available Scripts

In the project directory, you can run:

-   `npm run dev`: Runs the app in development mode.
-   `npm run build`: Builds the app for production to the `dist` folder.
-   `npm run preview`: Serves the production build locally to preview it.
