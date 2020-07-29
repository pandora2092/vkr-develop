const mysql = require('@mysql/xdevapi');
const config = require('config');
const bcryptjs = require('bcryptjs');
const jwt = require("jsonwebtoken");
//test

exports.register = function (user, cb) {
  mysql.getSession({
    host: config.host,
    port: config.port,
    dbUser: config.userid,
    dbPassword: config.password
  }).then(function (session) {
    const schema = session.getSchema(config.schema);
    const coll = schema.getCollection(config.schemaUser);
    const docs = [];
    const candidate = coll
    .find(`email like :email`)
    .bind('email', user.email)
    .execute( candidate => {
      docs.push(candidate);
    })
    .then(function (result) {
      if (docs.length > 0) {
        cb('No user found', null, 409);
        session.close();
      } else {
        const salt = bcryptjs.genSaltSync(10);
        const createUser = {
          email: user.email,
          password: bcryptjs.hashSync(user.password, salt)
        }
        coll.add(createUser)
        .execute()
        .then()
        cb(null, createUser, 201)
        session.close();
      }
    })
    .catch(err => {
      console.log(err.message);
    });
  });
}

exports.login = function (user, cb) {
  mysql.getSession({
    host: config.host,
    port: config.port,
    dbUser: config.userid,
    dbPassword: config.password
  }).then(function (session) {
    const schema = session.getSchema(config.schema);
    const coll = schema.getCollection(config.schemaUser);
    const docs = [];
    coll
    .find(`email like :email`)
    .bind('email', user.email)
    .execute( candidate => {
      docs.push(candidate);
    })
    .then(function (result) {
      if (docs.length > 0) {
        const passwordResult = bcryptjs.compareSync(user.password, docs[0].password);
        if (passwordResult) {
          const token = jwt.sign({
            email: docs[0].email,
            userId: docs[0]._id,
          }, config.jwt, {expiresIn: 60 * 60});
          cb(null, token, 200);
        } else {
          cb('No user found', null, 401);
        }
        session.close();
      } else {
        cb('No user found', null, 404)
        session.close();
      }
    })
  });
}

exports.findUser = function (userId, cb) {
  mysql.getSession({
    host: config.host,
    port: config.port,
    dbUser: config.userid,
    dbPassword: config.password
  }).then(function (session) {
    const schema = session.getSchema(config.schema);
    const coll = schema.getCollection(config.schemaUser);
    const docs = [];
    coll
    .find(`_id = :_id`)
    .bind('_id', userId)
    .execute( candidate => {
      docs.push(candidate);
    })
    .then(function (result) {
      if (docs.length > 0) {
        cb(null, docs, 201)
        session.close();
      } else {
        cb('No user found', null, 404)
      }
    })
  });
}
