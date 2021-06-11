// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"style/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./..\\images\\desktop\\main-img.jpg":[["main-img.2ee80af6.jpg","images/desktop/main-img.jpg"],"images/desktop/main-img.jpg"],"./..\\images\\desktop\\covering-yellow.jpg":[["covering-yellow.546821dc.jpg","images/desktop/covering-yellow.jpg"],"images/desktop/covering-yellow.jpg"],"./..\\images\\desktop\\covering-orange.jpg":[["covering-orange.493e3b0d.jpg","images/desktop/covering-orange.jpg"],"images/desktop/covering-orange.jpg"],"./..\\images\\tablet-phone\\main-tablet-phone.jpg":[["main-tablet-phone.b800032f.jpg","images/tablet-phone/main-tablet-phone.jpg"],"images/tablet-phone/main-tablet-phone.jpg"],"./..\\images\\desktop\\rescuepet-axel.jpg":[["rescuepet-axel.bc953049.jpg","images/desktop/rescuepet-axel.jpg"],"images/desktop/rescuepet-axel.jpg"],"./..\\images\\desktop\\rescuepet-pepper.jpg":[["rescuepet-pepper.1883aaea.jpg","images/desktop/rescuepet-pepper.jpg"],"images/desktop/rescuepet-pepper.jpg"],"./..\\images\\desktop\\rescuepet-kit.jpg":[["rescuepet-kit.5b0d6b29.jpg","images/desktop/rescuepet-kit.jpg"],"images/desktop/rescuepet-kit.jpg"],"./..\\images\\desktop\\rescuepet-gunner-tank.jpg":[["rescuepet-gunner-tank.fdb62db0.jpg","images/desktop/rescuepet-gunner-tank.jpg"],"images/desktop/rescuepet-gunner-tank.jpg"],"./..\\images\\svg\\arrow-yellow.svg":[["arrow-yellow.352a34ce.svg","images/svg/arrow-yellow.svg"],"images/svg/arrow-yellow.svg"],"./..\\images\\svg\\arrow-orange.svg":[["arrow-orange.fdadd13b.svg","images/svg/arrow-orange.svg"],"images/svg/arrow-orange.svg"],"./..\\images\\svg\\arrow-forestgreen.svg":[["arrow-forestgreen.52305e7b.svg","images/svg/arrow-forestgreen.svg"],"images/svg/arrow-forestgreen.svg"],"./..\\images\\svg\\arrow-violet.svg":[["arrow-violet.6cad49ad.svg","images/svg/arrow-violet.svg"],"images/svg/arrow-violet.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"script/main.js":[function(require,module,exports) {
"use strict";

require("../style/main.scss");

var navbar = function navbar() {
  var burger = document.querySelector('.burger');
  var nav = document.querySelector('.nav-links');
  burger.addEventListener('click', function () {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
};

navbar();
var search = document.querySelector('.search');
var i = document.getElementById('search');
var input = document.querySelector('.input-search');
var paragraph = document.getElementById('paragraph');
var active = document.querySelector('active');
var spanTag = document.getElementsByTagName('span');
var yellowMark = document.querySelectorAll('yellowMark');
i.addEventListener('click', function () {
  // if(spanTag.className('yellowMark')) {
  //     search.classList.toggle('active');
  // }
  // if(search) {
  //     search.classList.add('active');
  //     input.focus();
  // } else {
  // }
  // if(input.value) {
  //     //search.classList.remove('active');
  //     let inputBox = document.getElementById('input-search').value;
  //     inputBox = inputBox.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");
  //     let pattern = new RegExp(`${inputBox}`,"gi");
  //     paragraph.innerHTML = paragraph.textContent.replace(pattern, match => `<span class="yellowMark">${match}</span>`)
  // }
  // if(state = !false) {
  //     search.classList.remove('active');
  // }
  if (input.value == "") {
    search.classList.toggle('active');
    input.focus();
  } else {
    var inputBox = document.getElementById('input-search').value;
    inputBox = inputBox.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    var pattern = new RegExp("".concat(inputBox), "gi");
    paragraph.innerHTML = paragraph.textContent.replace(pattern, function (match) {
      return "<span class=\"yellowMark\">".concat(match, "</span>");
    });
    input.value = '';
  } // if(spanTag) {
  //     spanTag.className.remove('yellowMark');
  // }
  //input.value = '';
  //paragraph.spanTag.classList.remove('yellowMark');
  //search.classList.remove('active');

});
var form = document.getElementById('form');
var name = document.getElementById('name');
var address = document.getElementById('address');
var email = document.getElementById('email');
var creditCard = document.getElementById('creditCard');
var cvv = document.getElementById('cvv');

function showError(input, message) {
  var formControl = input.parentElement;
  formControl.className = 'form-control error';
  var small = formControl.querySelector('small');
  small.innerText = message;
}

function showSuccess(input) {
  var formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkEmail(input) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

function checkRequired(inputArray) {
  inputArray.forEach(function (input) {
    //console.log(input.id);
    if (input.value.trim() === '') {
      showError(input, "".concat(getFieldName(input), " is required"));
    } else {
      showSuccess(input);
    }
  });
}

function checklength(input, min, max) {
  if (input.value.length < min) {
    showError(input, "".concat(getFieldName(input), " must be at least ").concat(min, " characters"));
  } else if (input.value.length > max) {
    showError(input, "".concat(getFieldName(input), " must be less than ").concat(max, " characters"));
  } else {
    showSuccess(input);
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkRequired([name, address, email, creditCard, cvv]);
  checklength(name, 3, 15);
  checklength(cvv, 3, 3);
  checkEmail(email);
});
},{"../style/main.scss":"style/main.scss"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63249" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","script/main.js"], null)
//# sourceMappingURL=/main.0ab05bb7.js.map