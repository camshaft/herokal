
exports.index = function() {
  return function(req, res){
    res.send([
      {
        "env": {
          "BUILDPACK_URL": "https://github.com/lynns/heroku-buildpack-ssh-keys.git",
          "S3_BUCKET_NAME": "fs-static-prod",
          "PATH": "bin:node_modules/.bin:/usr/local/bin:/usr/bin:/bin",
          "DO_DEPLOY": "1",
          "NODE_ENV": "production",
          "CDN_BASE_URL": "https://dkr0d30ggygt1.cloudfront.net"
        },
        "commit": "ce24c76",
        "user": "dl-fh-heroku@ldschurch.org",
        "created_at": "2012/07/13 15:42:40 -0700",
        "descr": "Add DO_DEPLOY config",
        "pstable": {
          "web": "node runner.js"
        },
        "name": "v6",
        "addons": []
      }
    ]);
  };
};

exports.get = function() {
  return function(req, res){
    res.send({
      "env": {
        "BUILDPACK_URL": "https://github.com/lynns/heroku-buildpack-ssh-keys.git",
        "S3_BUCKET_NAME": "fs-static-prod",
        "PATH": "bin:node_modules/.bin:/usr/local/bin:/usr/bin:/bin",
        "DO_DEPLOY": "1",
        "NODE_ENV": "production",
        "CDN_BASE_URL": "https://dkr0d30ggygt1.cloudfront.net"
      },
      "commit": "ce24c76",
      "user": "dl-fh-heroku@ldschurch.org",
      "created_at": "2012/07/13 15:42:40 -0700",
      "descr": "Add DO_DEPLOY config",
      "pstable": {
        "web": "node runner.js"
      },
      "name": "v6",
      "addons": []
    });
  };
};

exports.rollback = function() {
  return function(req, res){
    res.send("v1");
  };
};
