const express = require('express');
const router = express.Router();
const mysql = require('../controllers/method.js');
const jwt = require('jsonwebtoken');
const passport = require('passport');

/* удалить запись */
router.post('/item/:id', passport.authenticate('jwt', {session: false}), function (req, res, next) {
  mysql.deletePost(req.params.id, function (error, deleteBody) {
    if (error) { return next(error); }
    res.json(deleteBody);
  });
});

/* редактировать запись */
router.post('/item/:id/edit', function (req, res, next) {
  mysql.editPost(req.body, req.params.id, function (error, editBody) {
    if (error) { return next(error); }
    res.json(editBody);
  });
});

/* вернуть все записи */
router.get('/all', function (req, res, next) {
  mysql.getAllItems(function (error, news) {
    if (error) { return next(error); }
    res.json(news);
  });
});

/* вернуть все записи пагинация*/
router.get('/page', function (req, res, next) {
  mysql.getAllItemByPage(+req.query.pageNum, +req.query.pageSize, function (error, news) {
    if (error) { return next(error); }
    res.json(news);
  });
});

/* вернуть запись по id*/
router.get('/:id', function (req, res, next) {
  mysql.getItemById(req.params.id, function (error, rows) {
    if (error) { return next(error); }
    res.json(rows);
  });
});

/* сохранить запись */
router.post('/save', function (req, res, next) {
  mysql.addPost(req.body, function (error, postBody) {
    if (error) { return next(error); }
    res.json(postBody);
  });
});

/* поиск по полям*/
router.post('/query', function (req, res, next) {
  mysql.getItemByFieldSearch(req.body, function (error, rows, resCode) {
    if (error) {
      res.status(resCode).json({message: 'Искомое значение не найдено'});
    } else {
      res.json(rows);
    }
  });
});

/* поиск по одному полям - простой поиск*/
router.post('/query-simple', function (req, res, next) {
  mysql.getItemByFieldSearchSimple(req.body, function (error, rows, resCode) {
    if (error) {
      res.status(resCode).json({message: 'Искомое значение не найдено'});
    } else {
      res.json(rows);
    }

  });
});


module.exports = router;
