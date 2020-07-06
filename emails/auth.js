const config = require("config");

module.exports = function() {
  return {
    to: config.email_to,
    from: config.email_from,
    subject: 'Письмо с сайта',
    html: `
      <p>Произошла авторизация на сайте</p>
      <a href="${config.base_url}">Перейти на сайт</a>
    `
  }
}
