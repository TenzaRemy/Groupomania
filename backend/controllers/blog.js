const Blog = require('../models/blog'); 

const fs = require('fs');

exports.getAllBlogs = (req, res, next) => {
    Blog.find()
    .then((Blogs) => {res.status(200).json(Blog);})

      .catch((error) => {res.status(400).json({error: error});
      });
  };

exports.createBlog = (req, res, next) => {
    const blogObject = req.body
    delete blogObject._id;
    const blog = new Blog({
        ...blogObject, 
        likes: 0,
        dislikes: 0, 
        usersLiked: [],
        usersDisliked: [],
    });
    blog.save() 
    .then(() => res.status(201).json({ message: 'Publication enregistré !' }))
    .catch(error => res.status(400).json({ error: 'Publication non enregistrée !' }))
};

exports.modifyBlog = (req, res, next) => {
    const blogObject = req.file ?
    {  ...JSON.parse(req.body.blog),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : {...req.body};
    if (req.file) { 
      Blog.findOne({ _id: req.params.id }) 
      .then(blog => {
          const filename = blog.imageUrl.split('/images/')[1];
          // fs.unlink pour supprimer le fichier
          fs.unlink(`images/${filename}`, () => { 
          });
      })
      .catch(error => res.status(500).json({ error }));
    }
    Blog.updateOne({_id: req.params.id}, {$set: blogObject})
    .then(() => {res.status(200).json({message: 'Publications modifiée !'});
    })
    .catch((error) => {res.status(400).json({ error: error});
    });
};

exports.deleteBlog = (req, res, next) => {
    Blog.findOne({ _id: req.params.id })
      .then(blog => {
        const filename = blog.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
          Blog.deleteOne({ _id: req.params.id })
            .then(() => res.status(200).json({ message: 'Publication supprimé !'}))
            .catch(error => res.status(400).json({ error }));
        });
      })
      .catch(error => res.status(500).json({ error }));
  }; 

exports.likeBlog = (req, res, next) => {
  // Si l'utilisateur like la sauce on l'ajoute à la liste des likes de la sauce
  if (req.body.like === 1) { 
      Sauce.updateOne({ _id: req.params.id }, { $inc: { likes: req.body.like++ }, $push: { usersLiked: req.body.userId } })
          .then((sauce) => res.status(200).json({ message: 'Ajout Like' }))
          .catch(error => res.status(400).json({ error }));

  // Si l'utilisateur dislike la sauce on l'ajoute à la liste des dislikes de la sauce
  } else if (req.body.like === -1) {
      Sauce.updateOne({ _id: req.params.id }, { $inc: { dislikes: (req.body.like++) * -1 }, $push: { usersDisliked: req.body.userId } })
          .then((sauce) => res.status(200).json({ message: 'Ajout Dislike' }))
          .catch(error => res.status(400).json({ error }));

  // Si l'utilisateur souhaite enlever son like ou son dislike on le supprime de la liste
  } else {
      Sauce.findOne({ _id: req.params.id })
          .then(sauce => {
  if (sauce.usersLiked.includes(req.body.userId)) {
      Sauce.updateOne({ _id: req.params.id }, { $pull: { usersLiked: req.body.userId }, $inc: { likes: -1 } })
          .then((sauce) => { res.status(200).json({ message: 'Suppression Like' }) })
          .catch(error => res.status(400).json({ error }));

  } else if (sauce.usersDisliked.includes(req.body.userId)) {
      Sauce.updateOne({ _id: req.params.id }, { $pull: { usersDisliked: req.body.userId }, $inc: { dislikes: -1 } })
          .then((sauce) => { res.status(200).json({ message: 'Suppression Dislike' }) })
          .catch(error => res.status(400).json({ error }));
      }})
          .catch(error => res.status(400).json({ error }));
  }
}