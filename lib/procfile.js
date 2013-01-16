
/**
 * Parse procfile contents
 *
 * @param contents {String}
 * @return {Object}
 */
module.exports.parse = function(contents) {
  var processes = {};
  for (var line in contents.split("\n")) {
    var m = line.match(/^([A-Za-z0-9_]+):\s*(.+)$/)
    if (m) {
      procfile[m[1]] = m[2];
    };
  }
  return processes;
};

/**
 * Export processes to string
 *
 * @param processes {Object}
 * @return {String}
 */
module.exports.stringify = function(processes) {
  var output = "";
  for(var ps in processes) {
    output+=ps+": "+processes[ps]+"\n";
  }
  return output;
};