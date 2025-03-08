require("dotenv").config();  // Load environment variables
const path = require('path');  // Import the path module
console.log("MONGO_URI:", process.env.MONGO_URI);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 80;
const MONGO_URI = process.env.MONGO_URI;  // Get MongoDB URI from .env

app.use(express.json());

// CORS Middleware
app.use(cors({
    origin: "*"  // Allow requests from any origin (for now, you can change this for security later)
}));

// Serve static files from 'public' folder
app.use(express.static('public'));

// Connect to MongoDB Atlas
mongoose.connect(MONGO_URI)
    .then(() => console.log("✅ Connected to MongoDB Atlas!"))
    .catch(err => console.error("❌ MongoDB Connection Error:", err));

// Define Schema
const OrderSchema = new mongoose.Schema({
    username: { type: String, required: true },
    cart: [
        {
            name: { type: String, required: true },
            price: { type: Number, required: true }
        }
    ],
    total: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", OrderSchema);

// Serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API to save orders
app.post('/save-order', (req, res) => {
    const { username, cart, total } = req.body;

    if (!username || !cart || !total) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    const newOrder = new Order({
        username,
        cart,
        total
    });

    newOrder.save()
        .then(() => res.json({ message: "Order saved successfully!" }))
        .catch(err => res.status(500).json({ error: "Failed to save order", details: err }));
});

// Start the server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
