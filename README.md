# 🍔 Simple Food Order Management System with MongoDB 🍕

This is a simple food order webpage built using **HTML**, **JavaScript**, and **Node.js**. The project allows users to browse a predefined menu 🍽️, place an order 📝, and store their orders in a **MongoDB** database 🗄️. The application is deployed on an **AWS EC2 instance** ☁️, and the backend is powered by a simple **server.js**.

## ✨ Features

- **Predefined Menu**: Users can select food items from a predefined list of available food 🍕🍔.
- **Order Submission**: After selecting items, users can submit their orders 🛒.
- **MongoDB Integration**: Orders are stored in a **MongoDB database** 🗄️.
- **Deployment on AWS EC2**: The whole project is cloned and deployed on an **AWS EC2 instance** ☁️ for live access.

## 🛠️ Technologies Used

- **Frontend**:
  - HTML
  - CSS
  - JavaScript

- **Backend**:
  - Node.js
  - Express.js (for routing)

- **Database**:
  - MongoDB (to store food orders)

- **Hosting**:
  - AWS EC2 Instance ☁️

## 📦 Setup Instructions

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) 🖥️
- [MongoDB](https://www.mongodb.com/) 🗄️ (or use a cloud database like MongoDB Atlas)
- [AWS Account](https://aws.amazon.com/) ☁️ to host your EC2 instance.

### Steps to Run the Project Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Nikhil-Emmanuel/dbms.git
   cd dbms

2. **Install Dependencies: Navigate to the project directory and install the required dependencies:**
```bash
npm install
```
Configure MongoDB:

Create a MongoDB database either locally or through a service like MongoDB Atlas.
Add your MongoDB connection URI to the server.js file under the connection string.
Example:
```js
mongoose.connect('mongodb://yourMongoDBURI', { useNewUrlParser: true, useUnifiedTopology: true });
```
Start the Server: Run the following command to start the server:
```bash
node server.js
```
Open the Application: Navigate to http://localhost:5000 in your browser 🌐 to view the food order webpage.
