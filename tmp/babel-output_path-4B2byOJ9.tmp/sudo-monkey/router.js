define('sudo-monkey/router', ['exports', 'ember', 'sudo-monkey/config/environment'], function (exports, _ember, _sudoMonkeyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _sudoMonkeyConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('about');
    this.route('contact');
  });

  exports['default'] = Router;
});