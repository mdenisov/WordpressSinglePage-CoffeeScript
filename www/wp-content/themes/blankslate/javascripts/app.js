(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle) {
    for (var key in bundle) {
      if (has(bundle, key)) {
        modules[key] = bundle[key];
      }
    }
  }

  globals.require = require;
  globals.require.define = define;
  globals.require.brunch = true;
})();

window.require.define({"Application": function(exports, require, module) {
  
  /*//CoffeeScript///////////////////////////////////////////////////////////////////
  // 
  // Copyright 2012 
  // 
  /////////////////////////////////////////////////////////////////////////////////
  */

  /*
   * Application Bootstrapper
   * 
   * @langversion CoffeeScript
   * 
   * @author 
   * @since
  */

  (function() {
    var Application;

    Application = {
      /*//--------------------------------------
      //+ PUBLIC PROPERTIES / CONSTANTS
      //--------------------------------------
      */
      /*//--------------------------------------
      //+ INHERITED / OVERRIDES
      //--------------------------------------
      */
      initialize: function() {
        var HomeView, Router;
        HomeView = require('views/HomeView');
        Router = require('routers/Router');
        this.homeView = new HomeView();
        this.router = new Router();
        return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
      }
    };

    module.exports = Application;

  }).call(this);
  
}});

window.require.define({"config/ApplicationConfig": function(exports, require, module) {
  
  /*
   * Application Configuration
   * 
   * @langversion CoffeeScript
   * 
   * @author 
   * @since
  */

  (function() {
    var ApplicationConfig;

    ApplicationConfig = (function() {

      function ApplicationConfig() {}

      ApplicationConfig.BASE_URL = "http://localhost:8888/CN/WPSinglePage/www/";

      ApplicationConfig.WP_TEMPLATE_URL = ApplicationConfig.BASE_URL + "wp-content/themes/blankslate/";

      ApplicationConfig.API = ApplicationConfig.BASE_URL + "api/";

      ApplicationConfig.API_METHODS = {
        byCategory: ApplicationConfig.API + "get_category_posts/?slug=",
        byPost: ApplicationConfig.API + "get_post/?slug=",
        byPage: ApplicationConfig.API + "get_page/?slug=",
        bySearch: ApplicationConfig.API + "get_search_results/?search="
      };

      ApplicationConfig.BROWSER = {
        name: "",
        version: -1
      };

      ApplicationConfig.GOOGLE_CHROMEFRAME_ENABLED = false;

      return ApplicationConfig;

    })();

    module.exports = ApplicationConfig;

  }).call(this);
  
}});

window.require.define({"events/ApplicationEvents": function(exports, require, module) {
  
  /*
   * Application Events
   * 
   * @langversion CoffeeScript
   * 
   * @author 
   * @since
  */

  (function() {
    var ApplicationEvents;

    ApplicationEvents = (function() {

      function ApplicationEvents() {}

      ApplicationEvents.APPLICATION_INITIALIZED = "onApplicationInitialized";

      return ApplicationEvents;

    })();

    module.exports = ApplicationConfig;

  }).call(this);
  
}});

window.require.define({"helpers/ViewHelper": function(exports, require, module) {
  
  /*
   * Handlebars Template Helpers
   * 
   * @langversion CoffeeScript
   * 
   * @author 
   * @since
  */

  /*//--------------------------------------
  //+ PUBLIC PROPERTIES / CONSTANTS
  //--------------------------------------
  */

  /*//--------------------------------------
  //+ PUBLIC METHODS / GETTERS / SETTERS
  //--------------------------------------
  */

  (function() {

    Handlebars.registerHelper('link', function(text, url) {
      var result;
      text = Handlebars.Utils.escapeExpression(text);
      url = Handlebars.Utils.escapeExpression(url);
      result = '<a href="' + url + '">' + text + '</a>';
      return new Handlebars.SafeString(result);
    });

  }).call(this);
  
}});

window.require.define({"initialize": function(exports, require, module) {
  
  /*
   * Application Initializer
   * 
   * @langversion CoffeeScript
   * 
   * @author 
   * @since
  */

  (function() {
    var application;

    application = require('Application');

    $(function() {
      application.initialize();
      return Backbone.history.start();
    });

  }).call(this);
  
}});

window.require.define({"models/supers/Collection": function(exports, require, module) {
  
  /*
   * Base Class for all Backbone Collections
   * 
   * @langversion CoffeeScript
   * 
   * @author 
   * @since
  */

  (function() {
    var Collection,
      __hasProp = Object.prototype.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

    module.exports = Collection = (function(_super) {

      __extends(Collection, _super);

      function Collection() {
        Collection.__super__.constructor.apply(this, arguments);
      }

      /*//--------------------------------------
      	//+ PUBLIC PROPERTIES / CONSTANTS
      	//--------------------------------------
      */

      /*//--------------------------------------
      	//+ INHERITED / OVERRIDES
      	//--------------------------------------
      */

      /*//--------------------------------------
      	//+ PUBLIC METHODS / GETTERS / SETTERS
      	//--------------------------------------
      */

      /*//--------------------------------------
      	//+ EVENT HANDLERS
      	//--------------------------------------
      */

      /*//--------------------------------------
      	//+ PRIVATE AND PROTECTED METHODS
      	//--------------------------------------
      */

      return Collection;

    })(Backbone.Collection);

  }).call(this);
  
}});

window.require.define({"models/supers/Model": function(exports, require, module) {
  
  /*
   * Base Class for all Backbone Models
   * 
   * @langversion CoffeeScript
   * 
   * @author 
   * @since
  */

  (function() {
    var Model,
      __hasProp = Object.prototype.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

    module.exports = Model = (function(_super) {

      __extends(Model, _super);

      function Model() {
        Model.__super__.constructor.apply(this, arguments);
      }

      /*//--------------------------------------
      	//+ PUBLIC PROPERTIES / CONSTANTS
      	//--------------------------------------
      */

      /*//--------------------------------------
      	//+ INHERITED / OVERRIDES
      	//--------------------------------------
      */

      /*//--------------------------------------
      	//+ PUBLIC METHODS / GETTERS / SETTERS
      	//--------------------------------------
      */

      /*//--------------------------------------
      	//+ EVENT HANDLERS
      	//--------------------------------------
      */

      /*//--------------------------------------
      	//+ PRIVATE AND PROTECTED METHODS
      	//--------------------------------------
      */

      return Model;

    })(Backbone.Model);

  }).call(this);
  
}});

window.require.define({"routers/Router": function(exports, require, module) {
  
  /*
   * Backbone Primary Router
   * 
   * @langversion CoffeeScript
   * 
   * @author 
   * @since
  */

  (function() {
    var Router, application,
      __hasProp = Object.prototype.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

    application = require('Application');

    module.exports = Router = (function(_super) {

      __extends(Router, _super);

      function Router() {
        Router.__super__.constructor.apply(this, arguments);
      }

      /*//--------------------------------------
       	//+ Routes
       	//--------------------------------------
      */

      Router.prototype.routes = {
        '': 'home'
      };

      /*//--------------------------------------
      	//+ Route Handlers
      	//--------------------------------------
      */

      Router.prototype.home = function() {
        return $('body').html(application.homeView.render().el);
      };

      return Router;

    })(Backbone.Router);

  }).call(this);
  
}});

window.require.define({"utils/BackboneView": function(exports, require, module) {
  
  /*
   * View Description
   * 
   * @langversion CoffeeScript
   * 
   * @author 
   * @since
  */

  (function() {
    var BackboneView, View, template,
      __hasProp = Object.prototype.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

    View = require('./supers/View');

    template = require('templates/HomeViewTemplate');

    module.exports = BackboneView = (function(_super) {

      __extends(BackboneView, _super);

      function BackboneView() {
        BackboneView.__super__.constructor.apply(this, arguments);
      }

      /*//--------------------------------------
      	//+ PUBLIC PROPERTIES / CONSTANTS
      	//--------------------------------------
      */

      BackboneView.prototype.id = 'view';

      BackboneView.prototype.template = template;

      /*//--------------------------------------
       	//+ INHERITED / OVERRIDES
       	//--------------------------------------
      */

      BackboneView.prototype.initialize = function() {
        return this.render = _.bind(this.render, this);
      };

      BackboneView.prototype.render = function() {
        this.$el.html(this.template(this.getRenderData()));
        return this;
      };

      BackboneView.prototype.getRenderData = function() {
        return {
          content: "View Content"
        };
      };

      /*//--------------------------------------
      	//+ PUBLIC METHODS / GETTERS / SETTERS
      	//--------------------------------------
      */

      /*//--------------------------------------
      	//+ EVENT HANDLERS
      	//--------------------------------------
      */

      /*//--------------------------------------
      	//+ PRIVATE AND PROTECTED METHODS
      	//--------------------------------------
      */

      return BackboneView;

    })(View);

  }).call(this);
  
}});

window.require.define({"views/HomeView": function(exports, require, module) {
  
  /*
   * View Description
   * 
   * @langversion CoffeeScript
   * 
   * @author 
   * @since
  */

  (function() {
    var ApplicationConfig, HomeView, View, template,
      __hasProp = Object.prototype.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

    ApplicationConfig = require('config/ApplicationConfig');

    View = require('./supers/View');

    template = require('./templates/HomeViewTemplate');

    module.exports = HomeView = (function(_super) {

      __extends(HomeView, _super);

      function HomeView() {
        HomeView.__super__.constructor.apply(this, arguments);
      }

      /*//--------------------------------------
      	//+ PUBLIC PROPERTIES / CONSTANTS
      	//--------------------------------------
      */

      HomeView.prototype.id = 'content-page';

      HomeView.prototype.template = template;

      /*//--------------------------------------
       	//+ INHERITED / OVERRIDES
       	//--------------------------------------
      */

      HomeView.prototype.initialize = function() {
        return this.render = _.bind(this.render, this);
      };

      HomeView.prototype.render = function() {
        var _this = this;
        $.ajax({
          url: ApplicationConfig.API + "get_recent_posts/",
          success: function(e) {
            console.log(e);
            return _this.$el.html(_this.template({
              content: "Successfully received recent posts; view browser console for output."
            }));
          },
          error: function(e) {
            console.log(e);
            return _this.$el.html(_this.template({
              content: "Error: " + e
            }));
          }
        });
        return this;
      };

      /*//--------------------------------------
      	//+ PUBLIC METHODS / GETTERS / SETTERS
      	//--------------------------------------
      */

      /*//--------------------------------------
      	//+ EVENT HANDLERS
      	//--------------------------------------
      */

      /*//--------------------------------------
      	//+ PRIVATE AND PROTECTED METHODS
      	//--------------------------------------
      */

      return HomeView;

    })(View);

  }).call(this);
  
}});

window.require.define({"views/supers/View": function(exports, require, module) {
  
  /*
   * View Base Class
   * 
   * @langversion CoffeeScript
   * 
   * @author 
   * @since
  */

  (function() {
    var View,
      __hasProp = Object.prototype.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

    require('helpers/ViewHelper');

    module.exports = View = (function(_super) {

      __extends(View, _super);

      function View() {
        View.__super__.constructor.apply(this, arguments);
      }

      /*//--------------------------------------
      //+ PUBLIC PROPERTIES / CONSTANTS
      //--------------------------------------
      */

      View.prototype.template = function() {};

      View.prototype.getRenderData = function() {};

      /*//--------------------------------------
      //+ INHERITED / OVERRIDES
      //--------------------------------------
      */

      View.prototype.initialize = function() {
        return this.render = _.bind(this.render, this);
      };

      View.prototype.render = function() {
        this.$el.html(this.template(this.getRenderData()));
        this.afterRender();
        return this;
      };

      View.prototype.afterRender = function() {};

      /*//--------------------------------------
      //+ PUBLIC METHODS / GETTERS / SETTERS
      //--------------------------------------
      */

      /*//--------------------------------------
      //+ EVENT HANDLERS
      //--------------------------------------
      */

      /*//--------------------------------------
      //+ PRIVATE AND PROTECTED METHODS
      //--------------------------------------
      */

      return View;

    })(Backbone.View);

  }).call(this);
  
}});

