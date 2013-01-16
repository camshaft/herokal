
var E = require("http-error");

module.exports = function(backend) {

  var config = {};

  config.list = function(app, user, cb) {
    backend.acl.isAllowed(user, app, 'process::list', function(err, result) {
      if(err) return err;
      if(!result) return cb(new E.Forbidden("You do not have permission to view processes '"+app+"'"));

      backend.processes.list(app, cb);
    });
  };

  config.run = function(app, command, attach, user, cb) {
    backend.acl.isAllowed(user, app, 'process::run', function(err, result) {
      if(err) return err;
      if(!result) return cb(new E.Forbidden("You do not have permission to run processes '"+app+"'"));

      backend.processes.run(app, command, attach, cb);
    });
  };

  config.restart = function(app, ps, type, user, cb) {
    backend.acl.isAllowed(user, app, 'process::restart', function(err, result) {
      if(err) return err;
      if(!result) return cb(new E.Forbidden("You do not have permission to restart '"+app+"'"));

      backend.config.restart(app, ps, type, cb);
    });
  };

  config.stop = function(app, ps, type, user, cb) {
    backend.acl.isAllowed(user, app, 'process::restart', function(err, result) {
      if(err) return err;
      if(!result) return cb(new E.Forbidden("You do not have permission to restart '"+app+"'"));

      backend.config.stop(app, ps, type, cb);
    });
  };

  config.scale = function(app, qty, type, user, cb) {
    backend.acl.isAllowed(user, app, 'process::scale', function(err, result) {
      if(err) return err;
      if(!result) return cb(new E.Forbidden("You do not have permission to scale '"+app+"'"));

      backend.config.scale(app, qty, type, cb);
    });
  };

  return config;

};
