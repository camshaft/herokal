
/**
 * Module dependencies.
 */

var stack = require('simple-stack')
  , root = require('./routes')
  , user = require('./routes/user')
  , apps = require('./routes/apps')
  , config = require('./routes/config')
  , logs = require('./routes/logs')
  , processes = require('./routes/processes')
  , releases = require('./routes/releases')
  , stacks = require('./routes/stacks');

var app = module.exports = stack();

app.get('/', root.index());

// User
app.post('/login', user.login());
app.get('/user', user.get());
app.get('/user/keys', user.keys());

// [Apps](https://api-docs.heroku.com/apps)
app.get('/apps', apps.index());
app.get('/apps/:name', apps.get());
app.post('/apps', apps.create());
app.put('/apps/:name', apps.rename());
app.del('/apps/:name', apps.destroy());

// [Config](https://api-docs.heroku.com/config)
app.get('/apps/:app/config_vars', config.index());
app.put('/apps/:app/config_vars', config.add());
app.del('/apps/:app/config_vars/:key', config.remove());

// [Logs](https://api-docs.heroku.com/logs)
app.get('/apps/:app/logs', logs.get());

// [Processes](https://api-docs.heroku.com/ps)
app.get('/apps/:app/ps', processes.index());
app.post('/apps/:app/ps', processes.run());
app.post('/apps/:app/ps/restart', processes.restart());
app.post('/apps/:app/ps/stop', processes.stop());
app.post('/apps/:app/ps/scale', processes.scale());

// [Releases](https://api-docs.heroku.com/releases)
app.get('/apps/:app/releases', releases.index());
app.get('/apps/:app/releases/:release', releases.get());
app.post('/apps/:app/releases', releases.rollback());

// [Stacks](https://api-docs.heroku.com/stacks)
app.get('/apps/:app/stack', stacks.index());
app.post('/apps/:app/stack', stacks.migrate());
