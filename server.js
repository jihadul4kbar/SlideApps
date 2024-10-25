const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const userRoutes = require('./routes/userRoutes');
const slideRoutes = require('./routes/slideRoutes');
const { authenticateToken } = require('./middleware/auth');
require('dotenv').config({ path: '.env' });

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Could not connect to MongoDB', err);
});

// Routes
app.use('/api/users', userRoutes);
app.use('/api/slides', authenticateToken, slideRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Slide App!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
