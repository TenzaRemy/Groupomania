const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

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

module.exports = app