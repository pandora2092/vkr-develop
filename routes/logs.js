const express = require('express');
const router = express.Router();
const mysql = require('../controllers/logs.js');
const jwt = require('jsonwebtoken');
const passport = require('passport');

router.get('/all', function (req, res, next) {
  mysql.getAllLogs(function (error, logs) {
    if (error) { return next(error); }
    res.json(logs);
  });
});

module.exports = router;
