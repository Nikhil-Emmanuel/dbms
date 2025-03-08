require("dotenv").config();  // Load environment variables
console.log("MONGO_URI:", process.env.MONGO_URI);
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;  // Get MongoDB URI from .env

// Middleware
app.use(cors({
    origin: "",  // Allow requests from this IP
    // Allow only specific headers
}));

app.use(express.static('public'));

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

// API to save orders
app.get("/save-order", async (req, res) => {
    try {
        console.log(req.body);  // Log the data to verify the request
        const { username, cart, total } = req.body;
        const newOrder = new Order({ username, cart, total });
        await newOrder.save();
        res.json({ message: "✅ Order saved successfully!" });
    } catch (error) {
        console.error("❌ Error saving order:", error);  // Log the error
        res.status(500).json({ error: error.message });
    }
});


app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
