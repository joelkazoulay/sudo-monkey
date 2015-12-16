define('sudo-monkey/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'sudo-monkey/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _sudoMonkeyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_sudoMonkeyConfigEnvironment['default'].APP.name, _sudoMonkeyConfigEnvironment['default'].APP.version)
  };
});