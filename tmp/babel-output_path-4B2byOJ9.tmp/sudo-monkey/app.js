define('sudo-monkey/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'sudo-monkey/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _sudoMonkeyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _sudoMonkeyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _sudoMonkeyConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _sudoMonkeyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});