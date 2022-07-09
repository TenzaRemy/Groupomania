const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const path = require('path');

const userRoutes = require('./routes/user');
const blogRoutes = require('./routes/blog');

const MongoDB = process.env.MongoDB_Connection

mongoose.connect(MongoDB,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie ! Vous êtes à présent connecté à la base de données'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

// Contre sécurité CORS
app.use(cors());

app.use(express.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/auth', userRoutes); 
app.use('/api/blog', blogRoutes);

module.exports = app