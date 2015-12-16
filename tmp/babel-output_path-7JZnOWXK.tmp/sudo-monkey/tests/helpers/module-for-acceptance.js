define('sudo-monkey/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'sudo-monkey/tests/helpers/start-app', 'sudo-monkey/tests/helpers/destroy-app'], function (exports, _qunit, _sudoMonkeyTestsHelpersStartApp, _sudoMonkeyTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _sudoMonkeyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _sudoMonkeyTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});