Deployed Link:https://charging-stations-frontend.vercel.app/

⚡ ChargingStations

ChargingStations is a full-stack web application that helps users locate, add, and manage electric vehicle (EV) charging stations. It provides a streamlined interface for managing station details while supporting real-time station listings and an admin dashboard for operational control.

📌 Project Overview

As the demand for electric vehicles rises, the need for accessible and organized charging infrastructure is critical. ChargingStations addresses this by offering a dedicated platform for viewing active charging stations, adding new stations, and managing station records in one centralized application.

⚙️ Tech Stack

Vue.js (Vue 3 + Vite) – Modern, reactive frontend framework.

Tailwind CSS – Utility-first CSS for clean, responsive UI.

Node.js + Express – RESTful API server.

MongoDB – NoSQL database for persisting station data.

Axios – For frontend-backend communication.

✨ Key Features
⚡ Active Stations List – View all active charging stations in a grid view.

➕ Add New Station – Input station name, location, capacity, and image.

📝 Edit & Delete Stations – Manage station details with update and delete functionality.

🗺️ Map Integration (Planned) – Visual map-based station locator.

🖥️ Admin Dashboard (Optional Extension) – Manage users and station analytics.

📱 Fully Responsive – Optimized for desktop, tablet, and mobile devices.

🚀 Getting Started
📦 Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/ShvetGhareWork/ChargingStations.git
cd ChargingStations
Setup frontend dependencies:

bash
Copy
Edit
cd client
npm install
Setup backend dependencies:

bash
Copy
Edit
cd ../server
npm install
Configure environment variables:

In the server directory, create a .env file:

ini
Copy
Edit
MONGO_URI=your_mongodb_connection_string
Run the app:

bash
Copy
Edit
# Start backend server
cd server
npm run dev

# Start frontend app
cd ../client
npm run dev
