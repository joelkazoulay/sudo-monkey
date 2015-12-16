"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

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
define('sudo-monkey/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'sudo-monkey/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _sudoMonkeyConfigEnvironment) {

  var name = _sudoMonkeyConfigEnvironment['default'].APP.name;
  var version = _sudoMonkeyConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('sudo-monkey/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('sudo-monkey/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('sudo-monkey/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'sudo-monkey/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _sudoMonkeyConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_sudoMonkeyConfigEnvironment['default'].APP.name, _sudoMonkeyConfigEnvironment['default'].APP.version)
  };
});
define('sudo-monkey/initializers/export-application-global', ['exports', 'ember', 'sudo-monkey/config/environment'], function (exports, _ember, _sudoMonkeyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_sudoMonkeyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _sudoMonkeyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_sudoMonkeyConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
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
define('sudo-monkey/routes/about', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('sudo-monkey/routes/contact', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("sudo-monkey/templates/about", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 93
          }
        },
        "moduleName": "sudo-monkey/templates/about.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("About Sudo Monkey");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "src", "https://pbs.twimg.com/profile_images/1475200968/monkey_tongue-rounded_400x400.png");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("sudo-monkey/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "sudo-monkey/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("sudo-monkey/templates/contact", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 28
          }
        },
        "moduleName": "sudo-monkey/templates/contact.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Contact us");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("please don't");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */

/* jshint ignore:end */

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
//# sourceMappingURL=sudo-monkey.map