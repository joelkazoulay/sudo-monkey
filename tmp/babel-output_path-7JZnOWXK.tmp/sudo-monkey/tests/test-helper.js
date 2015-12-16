define('sudo-monkey/tests/test-helper', ['exports', 'sudo-monkey/tests/helpers/resolver', 'ember-qunit'], function (exports, _sudoMonkeyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_sudoMonkeyTestsHelpersResolver['default']);
});