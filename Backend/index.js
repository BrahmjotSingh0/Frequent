require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const profileRoutes = require('./routes/ProfileRoute');

const app = express();

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    // Remove trailing slash for comparison
    const allowed = process.env.FRONTEND_URL && origin && origin.replace(/\/$/, '') === process.env.FRONTEND_URL.replace(/\/$/, '');
    callback(null, allowed ? origin : false);
  },
  credentials: true
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// test route
app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/api/profile', profileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
