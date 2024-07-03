const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { sequelize } = require('./models/sqlModels');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/techpanion', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Connect to SQL database
sequelize.authenticate()
  .then(() => console.log('SQL database connected'))
  .catch(err => console.error('SQL connection error:', err));

app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;
