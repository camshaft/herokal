
var procfile = require("lib/procfile");

describe("Procfile", function() {

  it("should parse a procfile", function() {
    procfile.parse("web: node app").should.eql({web: "node app"});
  });

  it("should export a procfile", function() {
    procfile.stringify({web: "node app"}).should.eql("web: node app\n");
  });

});