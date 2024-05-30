
# TechHaven E-Commerce Website

![TechHaven Logo](TechHeaven/Frontend/src/assets/Tech.png)

Welcome to TechHaven, your one-stop shop for the latest and greatest in tech products. This README will guide you through the structure, installation, and usage of the TechHaven e-commerce platform.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Frontend](#frontend)
- [Backend](#backend)
- [Admin Panel](#admin-panel)
- [Contributing](#contributing)
- [License](#license)

## Introduction

TechHaven is a fully-featured e-commerce website where users can browse and purchase a wide range of tech products. The platform includes a user-friendly frontend, a robust backend, and an intuitive admin panel for managing the site.

## Features

- User authentication and authorization
- Product browsing and search functionality
- Shopping cart and checkout process
- Order management
- Admin dashboard for managing products, orders, and users

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript, React.js
- **Backend:** Node.js, Express.js, MongoDB
- **Admin Panel:** React+ vite

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/KasunUdayanga/TechHaven.git
   cd TechHaven
   ```

2. **Install dependencies for both frontend and backend:**
   ```sh
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of the backend directory and add the following:
   ```
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the development servers:**
   - **Backend:**
     ```sh
     cd backend
     npm run server
     ```
   - **Frontend:**
     ```sh
     cd frontend
     npm run dev
     ```
   - **Admin Panel:**
     ```sh
     cd admin
     npm run dev
     ```

## Usage

### Frontend

The frontend is built with React.js and provides a seamless user experience for browsing and purchasing products.

![Frontend Interface](path/to/frontend_screenshot.png)

### Backend

The backend is powered by Node.js and Express.js, handling all the business logic, database interactions, and API endpoints.

![Backend Architecture](path/to/backend_diagram.png)

### Admin Panel

The admin panel is a React.js application that allows administrators to manage products, orders, and users efficiently.

![Admin Panel Interface](path/to/admin_panel_screenshot.png)

## Contributing

We welcome contributions to enhance the TechHaven platform. Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

---
