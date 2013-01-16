exports.index = function() {
  return function(req, res){
    res.send([
      {
        "app_name": "fs-identity-prod",
        "upid": null,
        "command": "node_modules/.bin/startup start",
        "action": null,
        "process": "web.1",
        "rendezvous_url": null,
        "id": "da021525-9440-4acd-9802-0c543f5493a2",
        "elapsed": 591,
        "type": "Ps",
        "attached": null,
        "pretty_state": "up for 9m",
        "release": 55,
        "transitioned_at": "2013/01/15 16:18:46 -0800",
        "state": "up"
      }
    ]);
  };
};

exports.run = function() {
  return function(req, res){
    console.log(req.body.attach);
    console.log(req.body.command);
    res.send({
      "slug": "0000000_0000",
      "command": "ls",
      "upid": "00000000",
      "process": "run.1",
      "action": "complete",
      "rendezvous_url": "tcp://rendezvous.heroku.com:5000/0000000000000000000",
      "type": "Ps",
      "elapsed": 0,
      "attached": true,
      "transitioned_at": "2011/01/01 00:00:00 -0700",
      "state": "starting"
    });
  };
};

exports.restart = function() {
  return function(req, res){
    console.log(req.body.ps);
    console.log(req.body.type);
    res.send("ok");
  };
};

exports.stop = function() {
  return function(req, res){
    console.log(req.body.ps);
    console.log(req.body.type);
    res.send("ok");
  };
};

exports.scale = function() {
  return function(req, res){
    console.log(req.body.type);
    console.log(req.body.qty);
    res.send(2);
  };
};
