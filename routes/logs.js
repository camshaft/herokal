
var db = require("../backend").logs
  , E = require("http-error");

exports.get = function() {
  return function(req, res, next) {
    db.get(req.params.name, req.body, function(err, logger) {
      if(err) return next(err);
      
      logger.on("data", res.send);
      logger.on("end", res.end);
    });
  };
};
