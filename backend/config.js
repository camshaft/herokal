
var E = require("http-error");

module.exports = function(backend) {

  var config = {};

  config.list = function(app, user, cb) {
    backend.acl.isAllowed(user, app, 'config::read', function(err, result) {
      if(err) return err;
      if(!result) return cb(new E.Forbidden("You do not have permission to view '"+app+"'"));

      backend.config.get(app, cb);
    });
  };

  config.add = function(app, params, user, cb) {
    backend.acl.isAllowed(user, app, 'config::write', function(err, result) {
      if(err) return err;
      if(!result) return cb(new E.Forbidden("You do not have permission to change '"+app+"'"));

      backend.config.add(app, params, cb);
    });
  };

  config.remove = function(app, key, user, cb) {
    backend.acl.isAllowed(user, app, 'config::write', function(err, result) {
      if(err) return err;
      if(!result) return cb(new E.Forbidden("You do not have permission to change '"+app+"'"));

      backend.config.remove(app, key, cb);
    });
  };

  return config;

};
