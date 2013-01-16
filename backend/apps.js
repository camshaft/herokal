
var E = require("http-error");

module.exports = function(backend) {

  var apps = {};

  apps.list = function(user, cb) {
    backend.apps.list(user, cb);
  };

  apps.get = function(name, user, cb) {
    backend.acl.isAllowed(user, name, 'read', function(err, result) {
      if(err) return err;
      if(!result) return cb(new E.Forbidden("You do not have permission to view '"+name+"'"));

      backend.apps.get(name, function(err, app) {
        if(err) return err;
        app.name = name;
        // TODO get number of dynos
        // TODO get number of workers
        // TODO get repo_size
        // TODO get slug_size
        // TODO get create_status
        // TODO get repo_migrate_status
        // TODO get owner_email
        // TODO get owner_name
        // TODO get domain_name
        // TODO get web_url
        // TODO get git_url
        // TODO get buildpack_provided_description
        // TODO get released_at
      });
    });
  };

  apps.create = function(params, user, cb) {
    var newApp = {
      name: params.name,
      stack: params.stack,
      owner_email: user,
      owner_name: user
    };
    backend.apps.create(newApp, user, cb);
  };

  apps.transfer = function(name, transfer_owner, user, cb) {
    cb(null, {
      name: name
    });
  };

  apps.rename = function(name, newName, user, cb) {
    apps[0].name = newName;
    cb(null, {
      name: newName
    });
  };

  apps.maintenance = function(name, mode, user, cb) {
    cb(null);
  };

  apps.destroy = function(name, user, cb) {
    cb(null);
  };

  return apps;

};
