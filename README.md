
# TechHaven E-Commerce Website

![TechHaven Logo](TechHeaven/Frontend/src/assets/Tech.png)

Welcome to TechHaven, your one-stop shop for the latest and greatest in tech products. This README will guide you through the structure, installation, and usage of the TechHaven e-commerce platform.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Document In Project](#document-in-project)
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

- Product browsing 
- Shopping cart and checkout process
- Order management
- Admin dashboard for managing products, orders, and users

## Document In Project
[SRS Document](TechHeaven/assets/SRSTechHeaven.pdf)
[Project Proposal](TechHeaven/assets/ProjectProposal.pdf)


## Technologies Used

- **Frontend:** HTML, CSS, JavaScript, React.js+Vite
- **Backend:** Node.js, Express.js, MongoDB

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
   JWT_SECRET="random#secret"
   STRIPE_SECRET_KEY="your key"
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

![Frontend Interface](TechHeaven/assets/Screenshot2024-05-30212558.png)

### Backend

The backend is powered by Node.js and Express.js, handling all the business logic, database interactions, and API endpoints.



### Admin Panel

The admin panel is a React.js application that allows administrators to manage products, orders, and users efficiently
![Admin Panel](TechHeaven/assets/Screenshot2024-05-30212611.png)

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
