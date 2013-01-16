
var backend = process.env.BACKEND || "herokal-backend-fs",
    backendModule = require(backend);

module.exports = {
  apps: require("./apps")(backendModule),
  config: require("./config")(backendModule)
}
