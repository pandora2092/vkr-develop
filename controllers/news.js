const mysql = require('@mysql/xdevapi');
const config = require('config');

exports.getAllNews = function (cb) {
  mysql.getSession({
    host: config.host,
    port: config.port,
    dbUser: config.userid,
    dbPassword: config.password
  }).then(function (session) {
    const schema = session.getSchema(config.schema);
    const coll = schema.getCollection(config.schemaNews);
    const docs = [];
    coll.find().execute( news => {
      docs.push(news);
    })
    .then(function (result) {
      if (docs.length > 0) {
        cb(null, docs)
        session.close();
      } else {
        cb('No data found', null);
        session.close();
      }
    });
  });
}
