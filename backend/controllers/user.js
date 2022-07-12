const bcrypt = require('bcrypt'); // Crypter les données
const jwt = require('jsonwebtoken');

const User = require('../models/user');// Importation du modele User

// Créer un compte
exports.signup = (req, res, next) => {
  
// Plus la valeur est élevée plus l'exécution de la fonction sera longue, plus ce sera sécurisé
    bcrypt.hash(req.body.password, 10) 
      .then(hash => {
        const user = new User({ // Creation de l'user 
          pseudo: req.body.pseudo,
          email: req.body.email,
          password: hash, 
          isAdmin: false,
        });
        user.save() // User enregistré dans la base de donnée
          .then(() => res.status(201).json({ message: 'Utilisateur crée !' }))
          .catch(error => res.status(400).json({ error: 'Adresse Email déjà utilisée' }));
      })
      .catch(error => res.status(500).json({ error }));
  };

// Se connecter en disposant d'un TOKEN valide  
  exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email }) // renvoie une Promise
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password) // renvoie une Promise
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              userId: user._id,
              token: jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET', // Création du TOKEN d'authentification pour sécurité
                { expiresIn: '24h' }
              ),
              pseudo: user.pseudo,
              email: user.email,
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };


exports.logout = (req, res, next) => {
  res.clearCookie("jwt");
  window.localStorage.clear()
  res.redirect("/");
  res.status(200).send('Utilisateur déconnecté');
}

exports.getOneUser = (req, res, next) => {
  User.find()
  .then((Users) => {res.status(200).json(user);})

    .catch((error) => {res.status(400).json({error: error});
    });
};

exports.getAllUsers = (req, res, next) => {
  User.find()
  .then((Users) => {res.status(200).json(User);})

    .catch((error) => {res.status(400).json({error: error});
    });
};