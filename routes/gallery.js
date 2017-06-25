const express = require('express');
const router = express.Router();

/* GET gallery page. */
router.get('/', function(req, res, next) {
    res.render('gallery');
});

module.exports = router;
