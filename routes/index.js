const express = require('express');
const articles = require('../controllers/articles');

const router = express.Router();

/* GET home page. */
router.get('/:page', articles.get);
router.get('/:id/posts', articles.getById);
router.delete('/:id/delete', articles.delete);

module.exports = router;
