
var db = require("../backend").config
  , E = require("http-error");

exports.index = function() {
  return function(req, res, next) {
    db.list(req.params.name, req.user, function(err, config_vars) {
      if (err) return next(err);
      res.send(config_vars);
    });
  };
};

exports.add = function() {
  return function(req, res, next) {
    var newVars = req.body || {};
    db.add(req.params.name, newVars, req.user, function(err, vars) {
      if (err) return next(err);
      res.send(vars);
    });
  };
};

exports.remove = function() {
  return function(req, res, next) {
    db.remove(req.params.name, req.params.key, req.user, function(err, vars) {
      if (err) return next(err);
      res.send(vars);
    });
  };
};