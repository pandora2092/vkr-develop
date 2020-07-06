const config = require("config");

module.exports = function(name, email, body) {
  return {
    to: config.email_to,
    from: config.email_from,
    subject: 'Письмо с сайта',
    html: `
      <p>На сайтe оставили вопрос пользователь ${name} с email ${email}</p>
      <p>Текст сообщения: ${body}</p>
      <a href="${config.base_url}">Перейти на сайт</a>
    `
  }
}
