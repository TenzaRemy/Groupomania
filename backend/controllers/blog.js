const Blog = require('../models/blog'); 

const fs = require('fs');

exports.getAllBlogs = (req, res, next) => {
    Blog.find()
    .then((Blogs) => {res.status(200).json(Blog);})

      .catch((error) => {res.status(400).json({error: error});
      });
  };

exports.getOneBlog = (req, res, next) => {
    Blog.findOne({_id: req.params.id})
    .then((Blog) => {res.status(200).json(Blog);})

      .catch((error) => {res.status(404).json({error: error});
      });
  };

exports.createBlog = (req, res, next) => {
    const blogObject = JSON.parse(req.body.blog);
    delete blogObject._id;
    const blog = new Blog({
        ...blogObject, 
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes: 0,  
        usersLiked: [],
    });
    blog.save() 
    .then(() => res.status(201).json({ message: 'Publication enregistré !' }))
    .catch(error => res.status(400).json({ error }))
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
    if (req.body.like === 1) { 
        Blog.updateOne({ _id: req.params.id }, { $inc: { likes: req.body.like++ }, $push: { usersLiked: req.body.userId } })
            .then((blog) => res.status(200).json({ message: 'Ajout Like' }))
            .catch(error => res.status(400).json({ error }));
    } else {
    Blog.findOne({ _id: req.params.id })
        .then(blog => {
    if (blog.usersLiked.includes(req.body.userId)) {
    Blog.updateOne({ _id: req.params.id }, { $pull: { usersLiked: req.body.userId }, $inc: { likes: -1 } })
        .then((blog) => { res.status(200).json({ message: 'Suppression Like' }) })
        .catch(error => res.status(400).json({ error }));
}
})}
}