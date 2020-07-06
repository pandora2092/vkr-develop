const express = require('express');
const router = express.Router();
const sendgrid = require('nodemailer-sendgrid-transport');
const nodemailer = require('nodemailer');
const config = require('config');
const reqEmail = require("../emails/contacts");
const { check, validationResult } = require('express-validator');

const transporter = nodemailer.createTransport(sendgrid({
  auth: {api_key: config.sendGrid_api}
}));

router.post(
  '/',
  [
    check('email', 'Некорректный email').isEmail(),
    check('name', 'Минимальная длинна имени 3 символа').isLength({min: 3}),
    check('body', 'Минимальная длинна сообщения 3 символа').isLength({min: 3}),
  ],
  function (req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    //req.flash('contactError', errors.array()[0].msg);
    return res.status(422).json({
      errors: errors.array()[0],
      message: 'Ошибка валидации'
    });
  }

  res.status(200).json(req.body.body);
  transporter.sendMail(reqEmail(req.body.name, req.body.email, req.body.body));
});

module.exports = router;
