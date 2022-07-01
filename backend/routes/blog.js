const express = require('express');
const router = express.Router();
const BlogsCtrl = require('../controllers/blog')
const auth = require('../middleware/auth'); 
const multer = require('../middleware/multer-config'); 

router.get("/", auth, blogsCtrl.getAllBlogs);
router.get("/:id", auth, blogsCtrl.getOneBlog);
router.post("/", auth, multerConfiguration, blogsCtrl.createBlog);
router.put("/:id", auth, multerConfiguration, blogsCtrl.modifyOneBlog);
router.delete("/:id", auth, blogsCtrl.deleteOneBlog);
router.post("/like", auth, blogsCtrl.likeBlog);

module.exports = router;