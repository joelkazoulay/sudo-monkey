define('sudo-monkey/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'sudo-monkey/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _sudoMonkeyConfigEnvironment) {

  var name = _sudoMonkeyConfigEnvironment['default'].APP.name;
  var version = _sudoMonkeyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});