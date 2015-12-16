define('sudo-monkey/tests/helpers/resolver', ['exports', 'ember/resolver', 'sudo-monkey/config/environment'], function (exports, _emberResolver, _sudoMonkeyConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _sudoMonkeyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _sudoMonkeyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});