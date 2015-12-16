define('sudo-monkey/tests/routes/contact.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/contact.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/contact.js should pass jshint.\nroutes/contact.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/contact.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors');
  });
});