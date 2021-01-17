const mysql = require('@mysql/xdevapi');
const config = require('config');

exports.getAllItems = function (cb) {
  mysql.getSession({
    host: config.host,
    port: config.port,
    dbUser: config.userid,
    dbPassword: config.password
  }).then(function (session) {
    const schema = session.getSchema(config.schema);
    const coll = schema.getCollection(config.collection);
    const docs = [];
    coll.find().execute( card => {
      docs.push(card);
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

exports.getAllItemByPage = function (pageNum, pageSize, cb) {
  mysql.getSession({
    host: config.host,
    port: config.port,
    dbUser: config.userid,
    dbPassword: config.password
  }).then(function (session) {
    const schema = session.getSchema(config.schema);
    const coll = schema.getCollection(config.collection);
    const docs = [];
    coll.find()
      .offset(pageNum)
      .limit(pageSize)
      .execute( card => {
      docs.push(card);
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

exports.getItemById = function (data, cb) {
  mysql.getSession({
    host: config.host,
    port: config.port,
    dbUser: config.userid,
    dbPassword: config.password
  }).then(function (session) {
    const schema = session.getSchema(config.schema);
    const coll = schema.getCollection(config.collection);
    const docs = [];
    coll.find(`_id like :_id`).bind('_id', data).execute(card => {
      docs.push(card);
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


exports.addPost = function (data, cb) {
  mysql.getSession({
    host: config.host,
    port: config.port,
    dbUser: config.userid,
    dbPassword: config.password
  }).then(function (session) {
    const schema = session.getSchema(config.schema);
    const coll = schema.getCollection(config.collection);
    coll.add(data)
        .execute()
        .then( updated => {
          //getAffectedRowsCount
          if (updated.getAffectedItemsCount() > 0) {
            cb(null, data);
          }
          else {
            cb('Comment not added', null);
          }
        });
  });
}

exports.deletePost = function (data, cb) {
  mysql.getSession({
    host: config.host,
    port: config.port,
    dbUser: config.userid,
    dbPassword: config.password
  }).then(function (session) {
    const schema = session.getSchema(config.schema);
    const coll = schema.getCollection(config.collection);
    coll.remove('_id = :_id')
        .bind('_id', data)
        .execute()
        .then( updated => {
          if (updated.getAffectedItemsCount() > 0) {
            cb(null, data);
          }
          else {
            cb('Comment not added', null);
          }
        });
  });
}

exports.editPost = function (data, id, cb) {
  mysql.getSession({
    host: config.host,
    port: config.port,
    dbUser: config.userid,
    dbPassword: config.password
  }).then(function (session) {
    var schema = session.getSchema(config.schema);
    var coll = schema.getCollection(config.collection);
    coll.modify('_id = :id')
        .bind('id', id)
        .set('name', data.name)
        .set('code', data.code)
        .set('manuscript', data.manuscript)
        .set('info', data.info)
        .set('bibliography', data.bibliography)
        .execute().then( updated => {
          if (updated.getAffectedItemsCount() > 0) {
            cb(null, data.comment);
          }
          else {
            cb('Comment not added', null);
          }
        });
  });
}

exports.getItemByFieldSearch = function (data, cb) {
  mysql.getSession({
    host: config.host,
    port: config.port,
    dbUser: config.userid,
    dbPassword: config.password
  }).then(function (session) {
    const schema = session.getSchema(config.schema);
    const coll = schema.getCollection(config.collection);
    const docs = [];
    coll
      .find(`name like :name AND code like :code AND manuscript like :manuscript AND info like :info AND bibliography like :bibliography`)
      .bind('name', `%${data.name}%`)
      .bind('code', `%${data.code}%`)
      .bind('manuscript', `%${data.manuscript}%`)
      .bind('info', `%${data.info}%`)
      .bind('bibliography', `%${data.bibliography}%`)
      .execute(card => {
      docs.push(card);
    })
    .then(function (result) {
      if (docs.length > 0) {
        cb(null, docs)
        session.close();
      } else {
        cb('No data found', null, 404);
        session.close();
      }
    });
  });
}

exports.getItemByFieldSearchSimple = function (data, cb) {
  mysql.getSession({
    host: config.host,
    port: config.port,
    dbUser: config.userid,
    dbPassword: config.password
  }).then(function (session) {
    const schema = session.getSchema(config.schema);
    const coll = schema.getCollection(config.collection);
    const docs = [];
    coll
      .find(`name like :name OR code like :code OR manuscript like :manuscript OR info like :info OR bibliography like :bibliography`)
      .bind('name', `%${data.world}%`)
      .bind('code', `%${data.world}%`)
      .bind('manuscript', `%${data.world}%`)
      .bind('info', `%${data.world}%`)
      .bind('bibliography', `%${data.world}%`)
      .execute(card => {
      docs.push(card);
    })
    .then(function (result) {
      if (docs.length > 0) {
        cb(null, docs)
        session.close();
      } else {
        cb('No data found', null, 404);
        session.close();
      }
    });
  });
}
