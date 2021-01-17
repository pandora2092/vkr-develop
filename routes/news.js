const express = require('express');
const router = express.Router();
const mysql = require('../controllers/news.js');
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.get('/all', function (req, res, next) {
  mysql.getAllNews(function (error, news) {
    if (error) { return next(error); }
    res.json(news);
  });
});

module.exports = router;
