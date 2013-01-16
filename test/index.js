
var fs = require("fs")
  , should = require("should");

function loadTests(dir) {
  fs.readdirSync(__dirname + '/'+dir).forEach(function(test) {
    require('./'+dir+'/'+test);
  });
};

var suites = [
  "lib",
  "routes"
]

suites.forEach(function(suite) {
  describe(suite, function() {
    loadTests(suite);
  });
});

