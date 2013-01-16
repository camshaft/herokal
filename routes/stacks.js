
exports.index = function() {
  return function(req, res){
    res.send([
      {
        "beta": false,
        "deprecated": false,
        "name": "bamboo-mri-1.9.2",
        "current": false,
        "requested": false
      },
      {
        "beta": false,
        "deprecated": false,
        "name": "bamboo-ree-1.8.7",
        "current": false,
        "requested": false
      },
      {
        "beta": false,
        "deprecated": false,
        "name": "cedar",
        "current": true,
        "requested": false
      }
    ]);
  };
};

exports.migrate = function() {
  return function(req, res){
    console.log(req.body.body)
    res.send(
"-----> Preparing to migrate example\n"+
"       oldstack -> newstack\n"+
"\n"+
"       NOTE: Additional details here\n"+
"\n"+
"-----> Migration prepared.\n"+
"       Run 'git push heroku master' to execute migration.\n");
  };
};