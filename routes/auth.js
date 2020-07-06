const express = require('express');
const router = express.Router();
const mysql = require('../controllers/auth');
const sendgrid = require('nodemailer-sendgrid-transport');
const nodemailer = require('nodemailer');
const config = require("config");
const reqEmail = require("../emails/auth");
const { check, validationResult } = require('express-validator');

const transporter = nodemailer.createTransport(sendgrid({
  auth: {api_key: config.sendGrid_api}
}));

router.post('/register', function (req, res, next) {
  mysql.register(req.body, function (error, user, resCode) {
    if (error) {
      res.status(resCode).json({message: "Такой email уже занят"});
    } else {
      res.status(resCode).json(user);
    }

  });
});

router.post('/login', function (req, res) {
  mysql.login(req.body, function (error, token, resCode) {
    if (error) {
      if (resCode === 404) {
        res.status(resCode).json({message: "Пользователя с таким email нет"});
      } else if (resCode === 401) {
        res.status(resCode).json({message: "Пользователь не авторизован"});
      }
    } else {
      res.status(resCode).json({token: `Bearer ${token}`});
      transporter.sendMail(reqEmail());
    }

  });
});

module.exports = router;
