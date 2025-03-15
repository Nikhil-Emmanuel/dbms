🍔 Simple Food Order Management System with MongoDB 🍕
This is a simple food order webpage built using HTML, JavaScript, and Node.js. The project allows users to browse a predefined menu 🍽️, place an order 📝, and store their orders in a MongoDB database 🗄️. The application is deployed on an AWS EC2 instance ☁️, and the backend is powered by a simple server.js.

✨ Features
Predefined Menu: Users can select food items from a predefined list of available food 🍕🍔.
Order Submission: After selecting items, users can submit their orders 🛒.
MongoDB Integration: Orders are stored in a MongoDB database 🗄️.
Deployment on AWS EC2: The whole project is cloned and deployed on an AWS EC2 instance ☁️ for live access.
🛠️ Technologies Used
Frontend:
HTML
CSS
JavaScript

Backend:
Node.js
Express.js (for routing)
Database:

MongoDB (to store food orders)

Hosting:
AWS EC2 Instance

📦 Setup Instructions
Prerequisites
Before you begin, ensure you have the following installed:
  Node.js 🖥️
  MongoDB 🗄️ (or use a cloud database like MongoDB Atlas)
  AWS Account ☁️ to host your EC2 instance.
Steps to Run the Project Locally
Clone the Repository:
bash
Copy
git clone https://github.com/Nikhil-Emmanuel/dbms.git
cd dbms
Install Dependencies: Navigate to the project directory and install the required dependencies:

bash
Copy
npm install

Configure MongoDB:
Create a MongoDB database either locally or through a service like MongoDB Atlas.
Add your MongoDB connection URI to the server.js file under the connection string.

Example:
js
Copy
mongoose.connect('mongodb://yourMongoDBURI', { useNewUrlParser: true, useUnifiedTopology: true });

Start the Server: Run the following command to start the server:
bash
Copy
node server.js
Open the Application: Navigate to http://localhost:{PORT} in your browser 🌐 to view the food order webpage.

🚀 Deployment on AWS EC2
Launch an EC2 Instance:

Go to your AWS Console, navigate to EC2, and launch a new instance 🎉.
Install Node.js and MongoDB or connect to a cloud MongoDB service.
SSH into your EC2 instance 🔐.
Clone the Repository on EC2:

bash
Copy
git clone https://github.com/Nikhil-Emmanuel/dbms.git
cd dbms
Install Dependencies:

bash
Copy
npm install
Run the Server on EC2: Start the server on your EC2 instance:

bash
Copy
node server.js
Access the Application: Visit the public IP address of your EC2 instance on port 5000 🌍 to access the webpage.

Project Structure
graphql
Copy
├── index.html          # Main HTML page for the food order webpage
├── style.css           # Styling for the webpage
├── script.js           # JavaScript for handling frontend logic
├── server.js           # Node.js backend server
├── package.json        # NPM dependencies and project details
├── .idx
      └── dev.nix       #NIX file to build the environment and configure packages
└── README.md           # Project documentation

MongoDB Data
The orders are stored in MongoDB in a collection called orders -> test. 

Each order consists of the following fields:
customerName: The name of the customer placing the order.
foodItems: An array of ordered food items.
totalPrice: The total price of the order.
timeStamp: The date and time when the order was placed.

Contributions
Feel free to fork this project and submit pull requests. If you encounter any issues, please open an issue on the GitHub repository.

License
This project is licensed under the MIT License - see the LICENSE file for details.
