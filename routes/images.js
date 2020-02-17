const express = require('express');
const router = express.Router();
const imagesController = require('../controllers/images');
const multer = require('multer');
const upload = multer({dest: 'public/images/uploads'});

/* GET home page. */
router.post('/', upload.single('image'),  imagesController.saveImage);

module.exports = router;
