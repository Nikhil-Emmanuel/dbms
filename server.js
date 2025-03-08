require("dotenv").config();  // Load environment variables
console.log("MONGO_URI:", process.env.MONGO_URI);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;  // Get MongoDB URI from .env
app.use(express.json())
// Middleware
app.use(cors({
    origin: "",  // Allow requests from this IP
    // Allow only specific headers
}));

//app.use(express.static('public'));

// Connect to MongoDB Atlas
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
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
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
const PORT = 80;
app.listen(PORT, () => {
    console.log(`Server is running on http://<public-ip>:${PORT}`);
// API to save orders
app.post('/save-order', (req, res) => {
    const { username, cart, total } = req.body;

    if (!username || !cart || !total) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    // Process the order here (e.g., save to the database)
    res.json({ message: "Order saved successfully!" });
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
