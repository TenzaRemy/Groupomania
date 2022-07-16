const express = require('express');
const router = express.Router();
const blogsCtrl = require('../controllers/blog')
const auth = require('../middleware/auth'); 
const multer = require('../middleware/multer-config'); 

router.get("/", blogsCtrl.getAllBlogs);
router.get("/:id", blogsCtrl.getOneBlog);
router.post("/",  multer, blogsCtrl.createBlog);
router.put("/:id", auth, multer, blogsCtrl.modifyBlog);
router.delete("/:id", auth, blogsCtrl.deleteBlog);

router.post("/like", auth, blogsCtrl.likeBlog);

module.exports = router;