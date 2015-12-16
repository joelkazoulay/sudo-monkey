/* jshint ignore:start */

define('sudo-monkey/config/environment', ['ember'], function(Ember) {
  var prefix = 'sudo-monkey';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("sudo-monkey/app")["default"].create({"name":"sudo-monkey","version":"0.0.0+"});
}

/* jshint ignore:end */
