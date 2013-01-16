
var db = require("../backend").apps
  , E = require("http-error");

// https://api-docs.heroku.com/apps#GET/apps
exports.index = function() {
  return function(req, res, next) {
    db.list(req.user, function(err, apps) {
      if (err) return next(err);
      res.send(apps);
    });
  };
};

exports.get = function() {
  return function(req, res, next) {
    db.get(req.params.name, req.user, function(err, app) {
      if (err) return next(err);
      res.send(app);
    });
  };
};

// https://api-docs.heroku.com/apps#POST/apps
exports.create = function() {
  return function(req, res, next) {
    var appParams = req.query.app || {};
    db.create(appParams, req.user, function(err, app) {
      if (err) return next(err);
      res.send(202, app);
    });
  };
};

// https://api-docs.heroku.com/apps#PUT/apps
exports.rename = function() {
  return function(req, res, next) {
    // Transfer
    if(req.body.app && req.body.app.transfer_owner) {
      return db.transfer(req.params.name, req.body.app.transfer_owner, req.user, function(err, app) {
        if (err) return next(err);
        res.send(app);
      });
    }
    // Rename
    if(req.body.app && req.body.app.name) {
      return db.rename(req.params.name, req.body.app.name, req.user, function(err, app) {
        if (err) return next(err);
        res.send(202, app);
      });
    }

    next(E.BadRequest("app[name] is required"));
  };
};

exports.maintenance = function() {
  return function(req, res, next) {
    if(!req.body.maintenance_mode) return next(E.BadRequest("maintenance_mode is required"));

    db.maintenance(req.params.name, req.body.maintenance_mode, req.user, function(err) {
      if (err) return next(err);
      res.send(200);
    });
  };
};

// https://api-docs.heroku.com/apps#DELETE/apps
exports.destroy = function() {
  return function(req, res, next) {

    db.destroy(req.params.name, req.user, function(err) {
      if (err) return next(err);
      res.send({});
    });
  };
};
