
var db = require("../backend").processes
  , E = require("http-error");

exports.index = function() {
  return function(req, res, next) {
    db.list(req.params.app, req.user, function(err, processes) {
      if(err) return next(err);
      res.send(processes);
    });
  };
};

exports.run = function() {
  return function(req, res){
    db.run(req.params.app, req.body.command, req.body.attach, req.user, function(err, process) {
      if(err) return next(err);
      res.send(process);
    });
  };
};

exports.restart = function() {
  return function(req, res){
    db.restart(req.params.app, req.body.ps, req.body.type, req.user, function(err, success) {
      if(err) return next(err);
      res.send(success?"ok":"error");
    });
  };
};

exports.stop = function() {
  return function(req, res){
    db.stop(req.params.app, req.body.ps, req.body.type, req.user, function(err, success) {
      if(err) return next(err);
      res.send(success?"ok":"error");
    });
  };
};

exports.scale = function() {
  return function(req, res){
    db.scale(req.params.app, req.body.qty, req.body.type, req.user, function(err, success) {
      if(err) return next(err);
      res.send(success?"ok":"error");
    });
  };
};
