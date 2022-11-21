// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lBgj1":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7dd44675b7a05eb9";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jeorp":[function(require,module,exports) {
var _player = require("./models/player/Player");
var _levelHelper = require("./helpers/LevelHelper");
var _constants = require("./models/Constants");
var _initHelper = require("./helpers/InitHelper");
const WIDTH = 1800;
const HEIGHT = 800;
let secondsPassed = 0;
let oldTimeStamp = 0;
let fps;
let canvas;
let context;
let player;
let enemies;
let levelHelper;
window.onload = ()=>{
    document.getElementById("loadingScreen").style.display = 'none';
    startScreen();
};
function startScreen() {
    document.getElementById("startScreen").style.display = 'block';
    document.getElementById("startButton").addEventListener("click", ()=>{
        document.getElementById("canvasContainer").style.display = 'block';
        document.getElementById("startScreen").style.display = 'none';
        init();
    });
}
function init() {
    canvas = document.getElementById('gridCanvas');
    context = canvas.getContext('2d');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    player = new _player.Player(context, 20, 450, _constants.Constants.playerMoveSpeed, _constants.Constants.playerJumpSpeed, _constants.Constants.playerWidth, _constants.Constants.playerHeight);
    enemies = _initHelper.InitHelper.spawnEnemies(0, context, player);
    levelHelper = new _levelHelper.LevelHelper(context, player, enemies);
    window.requestAnimationFrame(update);
}
function update(timeStamp) {
    secondsPassed = (timeStamp - oldTimeStamp) / 1000;
    oldTimeStamp = timeStamp;
    secondsPassed = Math.min(secondsPassed, 0.1);
    context.clearRect(0, 0, canvas.width, canvas.height);
    levelHelper.update(secondsPassed);
    // drawFps()
    window.requestAnimationFrame(update);
}
function drawFps() {
    fps = Math.round(1 / secondsPassed);
    context.font = '15px Arial';
    context.fillStyle = 'black';
    context.fillText("FPS: " + fps, 5, 15);
}

},{"./helpers/LevelHelper":"6s23o","./models/Constants":"5a049","./helpers/InitHelper":"7179v","./models/player/Player":"8G1in"}],"6s23o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LevelHelper", ()=>LevelHelper
);
var _top = require("../models/levelmodels/Top");
var _level1 = require("../models/levels/Level1");
var _playerUI = require("../UI/PlayerUI");
var _mapPng = require("../assets/level/map.png");
var _mapPngDefault = parcelHelpers.interopDefault(_mapPng);
class LevelHelper {
    levels = [];
    constructor(context, player, enemies){
        this.levels.push(new _level1.Level1(context, // new StaticMapObject(1300, 650, 500, 200, context).getStaticMapObject().concat(
        [
            new _top.Top(0, 700, 1800, 10, context),
            new _top.Top(0, 600, 300, 10, context)
        ], player, enemies, [
            20,
            1750
        ], _mapPngDefault.default));
        this.playerUI = new _playerUI.PlayerUI(player, context);
    }
    update(secondsPassed) {
        this.levels[0].update(secondsPassed);
        this.playerUI.drawUI();
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../models/levelmodels/Top":"bePnR","../models/levels/Level1":"jbON1","../UI/PlayerUI":"2YqzG","../assets/level/map.png":"2KYs4"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bePnR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// can be used as ground. Collusion on bottomside of gameobject
parcelHelpers.export(exports, "Top", ()=>Top
);
var _rect = require("../Rect");
class Top extends _rect.Rect {
}

},{"../Rect":"tOdDw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"tOdDw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Rect", ()=>Rect
);
class Rect {
    collides = false;
    constructor(x, y, width, height, context){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.context = context;
    }
    draw() {
        this.context.fillStyle = this.collides ? '#a66c6c' : '#94c781';
        this.context.strokeStyle = '#000000';
        // v--- this is with no colors ---v
        // this.context.fillStyle = this.collides ? 'rgba(255,255,255,0)':'rgba(121,211,75,0)'
        // this.context.strokeStyle = 'rgba(0,0,0,0)'
        this.context.lineWidth = 2;
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.strokeRect(this.x, this.y, this.width, this.height);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jbON1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Level1", ()=>Level1
);
var _level = require("../levelmodels/Level");
class Level1 extends _level.Level {
}

},{"../levelmodels/Level":"iVUcu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iVUcu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Level", ()=>Level
);
var _collusion = require("../../helpers/Collusion");
var _logicHelper = require("../../helpers/LogicHelper");
class Level {
    constructor(context, mapElements, player, enemies, mapBoundaries, imgSrc){
        this.context = context;
        this.mapElements = mapElements;
        this.player = player;
        this.enemies = enemies;
        this.collusion = new _collusion.Collusion(this.enemies.concat(this.player), this.mapElements, mapBoundaries);
        this.context.strokeStyle = '#000000';
        this.context.lineWidth = 5;
        this.levelImage = new Image();
        this.levelImage.src = imgSrc;
    }
    update(secondsPassed) {
        this.draw();
        this.enemies.forEach((enemy)=>enemy.update(secondsPassed)
        );
        this.player.update(secondsPassed);
        this.collusion.applyTopCollusion();
        this.collusion.applyWallCollisions();
        this.collusion.applyBottomCollusion();
        this.collusion.applyMapBoundaries();
        // character collusion detection with other characters
        // LogicHelper.detectCharacterCollusions((this.enemies as GameOobject[]).concat(this.player))
        if (this.enemies.length > 0) _logicHelper.LogicHelper.skeletonAttackCollusion(this.enemies[0], this.player);
        _logicHelper.LogicHelper.playerAttackCollusion(this.player, this.enemies);
        this.enemies = _logicHelper.LogicHelper.deleteDeadEnemies(this.enemies);
    }
    draw() {
        this.context.drawImage(this.levelImage, 0, 0);
    // draw map elements
    // this.mapElements.forEach(element => element.draw())
    }
}

},{"../../helpers/Collusion":"g97Or","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../helpers/LogicHelper":"gh1ez"}],"g97Or":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Collusion", ()=>Collusion
);
var _top = require("../models/levelmodels/Top");
var _wall = require("../models/levelmodels/Wall");
var _wallCollusionpoints = require("../models/levelmodels/WallCollusionpoints");
var _bottom = require("../models/levelmodels/Bottom");
class Collusion {
    constructor(gameObjects, mapElements, mapBoundaries){
        this.gameObjects = gameObjects;
        this.mapElements = mapElements;
        this.mapBoundaries = mapBoundaries;
    }
    applyTopCollusion() {
        this.mapElements.forEach((mapElement)=>{
            if (mapElement instanceof _top.Top) this.gameObjects.forEach((gameObject)=>{
                if (gameObject.velocityY > 0 && collusionCheckTop(gameObject, mapElement)) {
                    gameObject.posY = mapElement.y - gameObject.height;
                    gameObject.velocityY = gameObject.fallSpeed;
                    gameObject.inAir = false;
                }
            });
        });
        function collusionCheckTop(object, mapElement) {
            return !(object.posX > mapElement.width + mapElement.x || object.posY + object.height > mapElement.height + mapElement.y || mapElement.x > object.width + object.posX || mapElement.y > object.height + object.posY);
        }
    }
    applyWallCollisions() {
        this.mapElements.forEach((mapElement)=>{
            if (mapElement instanceof _wall.Wall) this.gameObjects.forEach((gameObject)=>{
                switch(this.checkLeftOrRightCollusion(gameObject, mapElement)){
                    case _wallCollusionpoints.WallCollusionpoints.LEFT:
                        // mapElement.collides = true
                        if (this.mapElements.filter((it)=>it.playerCollides
                        ).length > 0) gameObject.collides = true;
                        gameObject.posX = mapElement.x - gameObject.width;
                        break;
                    case _wallCollusionpoints.WallCollusionpoints.RIGHT:
                        // mapElement.collides = true
                        if (this.mapElements.filter((it)=>it.playerCollides
                        ).length > 0) gameObject.collides = true;
                        gameObject.posX = mapElement.x + mapElement.width;
                        break;
                    default:
                        if (this.mapElements.filter((it)=>it.playerCollides
                        ).length == 0) gameObject.collides = false;
                        mapElement.collides = false;
                }
            });
        });
    }
    checkLeftOrRightCollusion(object, mapElement) {
        // check if gamobject collides with wall
        if (!(object.posX > mapElement.width + mapElement.x || object.posY > mapElement.height + mapElement.y || mapElement.x > object.width + object.posX || mapElement.y > object.height + object.posY)) {
            // console.log(object.posX + object.width + " " + object.posX + "\n" + mapElement.x + " " + mapElement.x + mapElement.width)
            // check if rect the right or left side and return the side where rect hits wall
            if (mapElement.width <= 5) {
                if (object.posX + object.width <= mapElement.x + mapElement.width * 2) {
                    // console.log("left collusion")
                    mapElement.playerCollides = true;
                    return _wallCollusionpoints.WallCollusionpoints.LEFT;
                }
                if (object.posX >= mapElement.x - mapElement.width) {
                    // console.log("right collusion")
                    mapElement.playerCollides = true;
                    return _wallCollusionpoints.WallCollusionpoints.RIGHT;
                }
            } else {
                if (object.posX + object.width <= mapElement.x + mapElement.width) {
                    // console.log("left collusion")
                    mapElement.playerCollides = true;
                    return _wallCollusionpoints.WallCollusionpoints.LEFT;
                }
                if (object.posX >= mapElement.x - mapElement.width) {
                    // console.log("right collusion")
                    mapElement.playerCollides = true;
                    return _wallCollusionpoints.WallCollusionpoints.RIGHT;
                }
            }
        }
        mapElement.playerCollides = false;
        return _wallCollusionpoints.WallCollusionpoints.NONE;
    }
    applyBottomCollusion() {
        this.mapElements.forEach((mapElement)=>{
            if (mapElement instanceof _bottom.Bottom) this.gameObjects.forEach((gameObject)=>{
                if (gameObject.velocityY < 0 && collusionCheckBot(gameObject, mapElement) && this.checkLeftOrRightCollusion(gameObject, mapElement) !== _wallCollusionpoints.WallCollusionpoints.LEFT && this.checkLeftOrRightCollusion(gameObject, mapElement) !== _wallCollusionpoints.WallCollusionpoints.RIGHT) {
                    mapElement.collides = true;
                    gameObject.posY = mapElement.y + mapElement.height;
                    gameObject.velocityY = gameObject.fallSpeed;
                } else mapElement.collides = false;
            });
        });
        function collusionCheckBot(object, mapElement) {
            return !(object.posX > mapElement.width + mapElement.x || object.posY > mapElement.height + mapElement.y || mapElement.x > object.width + object.posX || mapElement.y > object.height + object.posY);
        }
    }
    applyMapBoundaries() {
        this.gameObjects.forEach((gameObject)=>{
            if (gameObject.posX < this.mapBoundaries[0]) gameObject.posX = this.mapBoundaries[0];
            else if (gameObject.posX > this.mapBoundaries[1]) gameObject.posX = this.mapBoundaries[1];
        });
    }
}

},{"../models/levelmodels/Top":"bePnR","../models/levelmodels/Wall":"kuS8Z","../models/levelmodels/WallCollusionpoints":"bndsU","../models/levelmodels/Bottom":"hTVqu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kuS8Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Wall", ()=>Wall
);
var _rect = require("../Rect");
class Wall extends _rect.Rect {
}

},{"../Rect":"tOdDw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bndsU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WallCollusionpoints", ()=>WallCollusionpoints
);
let WallCollusionpoints;
(function(WallCollusionpoints1) {
    WallCollusionpoints1[WallCollusionpoints1["LEFT"] = 0] = "LEFT";
    WallCollusionpoints1[WallCollusionpoints1["RIGHT"] = 1] = "RIGHT";
    WallCollusionpoints1[WallCollusionpoints1["TOP"] = 2] = "TOP";
    WallCollusionpoints1[WallCollusionpoints1["BOTTOM"] = 3] = "BOTTOM";
    WallCollusionpoints1[WallCollusionpoints1["NONE"] = 4] = "NONE";
})(WallCollusionpoints || (WallCollusionpoints = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hTVqu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// can be used as bottomside of an staticgameobject. Collusion on topside of gameobject
parcelHelpers.export(exports, "Bottom", ()=>Bottom
);
var _rect = require("../Rect");
class Bottom extends _rect.Rect {
    draw() {
        this.context.fillStyle = this.collides ? '#181818' : '#c7819a';
        this.context.strokeStyle = '#000000';
        this.context.lineWidth = 2;
        this.context.fillRect(this.x, this.y, this.width, this.height);
        this.context.strokeRect(this.x, this.y, this.width, this.height);
    }
}

},{"../Rect":"tOdDw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gh1ez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogicHelper", ()=>LogicHelper
);
var _skeleton = require("../models/enemies/Skeleton");
var _constants = require("../models/Constants");
class LogicHelper {
    static detectCharacterCollusions(gameObjects) {
        let obj1;
        let obj2;
        // Reset collision state of all objects
        for (const element of gameObjects)element.collides = false;
        // Start checking for collisions
        for(let i = 0; i < gameObjects.length; i++){
            obj1 = gameObjects[i];
            for(let j = i + 1; j < gameObjects.length; j++){
                obj2 = gameObjects[j];
                // compare obj1 with rest of objects
                if (this.rectangularHitBoxIntersect(obj1, obj2)) {
                    obj1.collides = true;
                    obj2.collides = true;
                }
            }
        }
    }
    static playerAttackCollusion(player, gameObjects) {
        for (const element of gameObjects){
            if (element instanceof _skeleton.Skeleton) {
                if (player.attackIndicator && this.rectangularHitBoxIntersect(element, player.attackHitbox)) {
                    if (player.activateDamage) element.health -= player.attackDamage;
                    player.activateDamage = false;
                    element.hit = true;
                    element.hitCooldown = _constants.Constants.skeletonHitCooldown;
                }
            }
        }
    }
    static skeletonAttackCollusion(skeleton, player) {
        if (skeleton.activateDamage && this.rectangularHitBoxIntersect(player, skeleton.attackHitbox)) {
            player.health -= skeleton.attackDamage;
            player.hit = true;
            if (skeleton.attackRight) player.hitLeft = true;
            else if (skeleton.attackLeft) player.hitRight = true;
            player.hitCooldown = _constants.Constants.playerHitCooldown;
        }
        skeleton.resetAttack();
    }
    // returns true if given two objects intersect on rectangular hitbox
    static rectangularHitBoxIntersect(object1, object2) {
        return !(object1.posX > object2.width + object2.posX || object2.posX > object1.width + object1.posX || object1.posY > object2.height + object2.posY || object2.posY > object1.height + object1.posY);
    }
    static deleteDeadEnemies(elements1) {
        return elements1.filter((elements)=>!elements.dead
        );
    }
    static gameOver(player) {}
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../models/enemies/Skeleton":"bmxkA","../models/Constants":"5a049"}],"bmxkA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Skeleton", ()=>Skeleton
);
var _gameObject = require("../GameObject");
var _character = require("../Character");
var _skeletonSprites = require("./SkeletonSprites");
var _constants = require("../Constants");
var _rectHitbox = require("../RectHitbox");
var _logicHelper = require("../../helpers/LogicHelper");
class Skeleton extends _gameObject.GameObject {
    faceDirection = _character.FaceDirection.RIGHT;
    health = 100;
    attackDamage = 25;
    attackIndicator = false;
    width = _constants.Constants.skeletonWidth;
    height = _constants.Constants.skeletonHeight;
    attackHitbox = new _rectHitbox.RectHitbox(this.posX, this.posY, this.width * 2 + 10, this.height);
    timePassedAttack = 0;
    timePassedDying = 0;
    sprites = new _skeletonSprites.SkeletonSprites(this.context);
    hitCooldown = 0;
    attackCooldown = 0;
    activateDamage = false;
    outerBarWidth = this.health;
    constructor(context, x, y, movementSpeed, jumpSpeed, width, height, player){
        super(context, x, y, movementSpeed, jumpSpeed, width, height);
        this.referenceGameObject = player;
    }
    update(secondsPassed) {
        this.draw(false, false);
        this.drawHealthBar();
        if (this.referenceGameObject.dead) {
            this.resetAttack();
            this.attackIndicator = false;
        } else this.updateMovement(secondsPassed);
        this.animate(secondsPassed);
        this.applyVelocity(secondsPassed);
    }
    applyVelocity(secondsPassed) {
        this.posX += this.velocityX * secondsPassed;
        this.fall(secondsPassed);
        if (this.hitCooldown > 0) this.hitCooldown -= secondsPassed;
        if (this.attackCooldown > 0) this.attackCooldown -= secondsPassed;
    }
    draw(visible, visibleOutlines) {
        this.context.fillStyle = this.collides ? '#a66c6c' : '#ba81c7';
        if (this.hit) this.context.fillStyle = '#ff0000';
        this.context.strokeStyle = '#000000';
        this.context.lineWidth = 2;
        if (visible) {
            this.context.fillRect(this.posX, this.posY, this.width, this.height);
            this.context.strokeRect(this.posX, this.posY, this.width, this.height);
        }
        if (visibleOutlines) this.context.strokeRect(this.posX, this.posY, this.width, this.height);
    }
    updateMovement(secondsPassed) {
        if (this.referenceGameObject.posX + this.referenceGameObject.width < this.posX - this.width / 2 && !this.attackIndicator) {
            this.moveLeft();
            this.faceDirection = _character.FaceDirection.LEFT;
        } else if (this.referenceGameObject.posX > this.posX + this.width + this.width / 2 && !this.attackIndicator) {
            this.moveRight();
            this.faceDirection = _character.FaceDirection.RIGHT;
        } else this.stopMovingXAxis();
        // apply attacks
        if (_logicHelper.LogicHelper.rectangularHitBoxIntersect(this.referenceGameObject, {
            posX: this.posX,
            posY: this.posY,
            width: this.width * 2,
            height: this.height
        }) && this.attackCooldown <= 0 || _logicHelper.LogicHelper.rectangularHitBoxIntersect(this.referenceGameObject, {
            posX: this.posX - this.width,
            posY: this.posY,
            width: this.width * 2,
            height: this.height
        }) && this.attackCooldown <= 0) this.attackIndicator = true;
        if (this.attackIndicator && this.hitCooldown <= 0) this.applyAttack(secondsPassed);
    }
    // TODO: pls REF THIS
    animate(secondsPassed) {
        if (!this.hit && this.faceDirection == _character.FaceDirection.RIGHT && this.velocityX == 0 && !this.attackIndicator && this.health > 0) this.sprites.spriteSheetIdleRight.animate(12, this.posX - 65, this.posY + 34, 180, 100, this.width, this.height);
        else if (!this.hit && this.faceDirection == _character.FaceDirection.LEFT && this.velocityX == 0 && !this.attackIndicator && this.health > 0) this.sprites.spriteSheetIdleLeft.animate(12, this.posX - 56, this.posY + 34, 180, 100, this.width, this.height);
        else if (this.hit && this.faceDirection == _character.FaceDirection.RIGHT && this.health > 0) {
            this.stopMovingXAxis();
            this.sprites.spriteSheetTakeHitRight.animate(7, this.posX - 65, this.posY - 48, 180, 270, this.width, this.height);
            if (this.sprites.spriteSheetTakeHitRight.animationFinished()) this.hit = false;
        } else if (this.hit && this.faceDirection == _character.FaceDirection.LEFT && this.health > 0) {
            this.stopMovingXAxis();
            this.sprites.spriteSheetTakeHitLeft.animate(7, this.posX - 65, this.posY - 48, 180, 270, this.width, this.height);
            if (this.sprites.spriteSheetTakeHitLeft.animationFinished()) this.hit = false;
        } else if (this.velocityX < 0 && this.faceDirection == _character.FaceDirection.LEFT && !this.attackIndicator && this.health > 0) this.sprites.spriteSheetWalkLeft.animate(12, this.posX - 72, this.posY - 48, 180, 270, this.width, this.height);
        else if (this.velocityX > 0 && this.faceDirection == _character.FaceDirection.RIGHT && !this.attackIndicator && this.health > 0) this.sprites.spriteSheetWalkRight.animate(12, this.posX - 65, this.posY - 48, 180, 270, this.width, this.height);
        if (this.attackIndicator && this.faceDirection == _character.FaceDirection.RIGHT && !this.hit && this.health > 0) {
            this.stopMovingXAxis();
            this.sprites.spriteSheetAttackRight.animate(4, this.posX - 60, this.posY + 35, 180, 100, this.width, this.height);
        } else this.sprites.spriteSheetAttackRight.resetActualsprite();
        if (this.attackIndicator && this.faceDirection == _character.FaceDirection.LEFT && !this.hit && this.health > 0) {
            this.stopMovingXAxis();
            this.sprites.spriteSheetAttackLeft.animate(4, this.posX - 40, this.posY + 35, 100, 105, this.width, this.height);
        } else this.sprites.spriteSheetAttackLeft.resetActualsprite();
        if (this.health <= 0 && this.faceDirection == _character.FaceDirection.RIGHT) {
            this.sprites.spriteSheetDieRight.animate(8, this.posX, this.posY + 34, 60, 100, this.width, this.height);
            this.timePassedDying += secondsPassed;
            if (this.timePassedDying >= _constants.Constants.skeletonDieAnimationtime) this.dead = true;
        }
        if (this.health <= 0 && this.faceDirection == _character.FaceDirection.LEFT) {
            this.sprites.spriteSheetDieLeft.animate(8, this.posX, this.posY + 34, 60, 100, this.width, this.height);
            this.timePassedDying += secondsPassed;
            if (this.timePassedDying >= _constants.Constants.skeletonDieAnimationtime) this.dead = true;
        }
    }
    setRollPosition(secondsPast) {}
    jump() {}
    resetAttack() {
        this.attackRight = false;
        this.attackLeft = false;
        this.activateDamage = false;
    }
    applyAttack(secondsPassed) {
        this.timePassedAttack += secondsPassed;
        if (this.faceDirection === _character.FaceDirection.RIGHT && this.timePassedAttack > _constants.Constants.skeletonActivateHitbox) {
            this.context.strokeStyle = '#000000';
            this.attackHitbox = {
                posX: this.posX,
                posY: this.posY,
                width: this.width * 3,
                height: this.height
            };
            // show hitbox-----
            // this.context.fillRect(this.attackHitbox.posX, this.attackHitbox.posY, this.attackHitbox.width, this.attackHitbox.height)
            if (this.timePassedAttack >= _constants.Constants.skeletonAttackSpeed) {
                this.attackIndicator = false;
                this.attackRight = true;
                this.timePassedAttack = 0;
                this.attackCooldown = _constants.Constants.skeletonAttackCooldown;
                this.activateDamage = true;
            }
        }
        if (this.faceDirection === _character.FaceDirection.LEFT && this.timePassedAttack > _constants.Constants.activateAttackHitbox) {
            this.context.strokeStyle = '#000000';
            this.attackHitbox = {
                posX: this.posX - this.width - 30,
                posY: this.posY,
                width: this.width * 3,
                height: this.height
            };
            // show hitbox ----
            // this.context.fillRect(this.attackHitbox.posX, this.attackHitbox.posY, this.attackHitbox.width, this.attackHitbox.height)
            if (this.timePassedAttack >= _constants.Constants.skeletonAttackSpeed) {
                this.attackIndicator = false;
                this.attackLeft = true;
                this.timePassedAttack = 0;
                this.attackCooldown = _constants.Constants.skeletonAttackCooldown;
                this.activateDamage = true;
            }
        }
    }
    drawHealthBar() {
        this.context.fillStyle = '#757474';
        this.context.fillRect(this.posX - this.width / 4, this.posY - this.height / 3, this.outerBarWidth / 2, 8);
        this.context.fillStyle = '#f36f6f';
        this.context.fillRect(this.posX - this.width / 4, this.posY - this.height / 3, this.health / 2, 8);
    }
}

},{"../GameObject":"33CCj","../Character":"6soW0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./SkeletonSprites":"e91x4","../Constants":"5a049","../RectHitbox":"gBeAa","../../helpers/LogicHelper":"gh1ez"}],"33CCj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GameObject", ()=>GameObject
);
class GameObject {
    gravity = 10;
    velocityX = 0;
    velocityY = 100;
    startVelocity = 100 // this must be same es velocityY, it is for calculating inair without a jump
    ;
    inAir = true;
    movementSpeed = 0;
    fallSpeed = 0;
    collides = false;
    moveLeftIndicator = false;
    moveRightIndicator = false;
    jumpIndicator = false;
    hit = false;
    hitLeft = false;
    hitRight = false;
    attackRight = false;
    attackLeft = false;
    dead = false;
    constructor(context, x, y, movementSpeed, jumpSpeed, width, height){
        this.context = context;
        this.posX = x;
        this.posY = y;
        this.movementSpeed = movementSpeed;
        this.jumpSpeed = jumpSpeed;
        this.width = width;
        this.height = height;
        this.fallSpeed = this.velocityY;
    }
    /**
     * @param visible show hitbox
     * @param visibleOutlines show outline of hitbox
     */ draw(visible, visibleOutlines) {
        this.context.imageSmoothingEnabled = false;
        this.context.fillStyle = this.collides ? '#a66c6c' : '#94c781';
        this.context.strokeStyle = '#ff2929';
        this.context.lineWidth = 2;
        if (visible) {
            this.context.fillRect(this.posX, this.posY, this.width, this.height);
            this.context.strokeRect(this.posX, this.posY, this.width, this.height);
        }
        if (visibleOutlines) this.context.strokeRect(this.posX, this.posY, this.width, this.height);
    }
    moveLeft() {
        this.velocityX = -this.movementSpeed;
    }
    moveRight() {
        this.velocityX = this.movementSpeed;
    }
    stopMovingXAxis() {
        this.velocityX = 0;
    }
    fall(secondsPassed) {
        secondsPassed = Math.min(secondsPassed, 0.012) // this piece of shit prevents falling when changing tabs
        ;
        this.velocityY += this.gravity;
        this.posY += Math.floor(this.velocityY * secondsPassed);
        if (this.velocityY > this.startVelocity + this.gravity) this.inAir = true;
    }
    update(secondsPassed) {}
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6soW0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FaceDirection", ()=>FaceDirection
);
let FaceDirection;
(function(FaceDirection1) {
    FaceDirection1[FaceDirection1["LEFT"] = 0] = "LEFT";
    FaceDirection1[FaceDirection1["RIGHT"] = 1] = "RIGHT";
})(FaceDirection || (FaceDirection = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e91x4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SkeletonSprites", ()=>SkeletonSprites
);
var _spriteSheet = require("../SpriteSheet");
var _skeletonIdleRightPng = require("../../assets/skeleton/skeleton_idle_right.png");
var _skeletonIdleRightPngDefault = parcelHelpers.interopDefault(_skeletonIdleRightPng);
var _skeletonIdleLeftPng = require("../../assets/skeleton/skeleton_idle_left.png");
var _skeletonIdleLeftPngDefault = parcelHelpers.interopDefault(_skeletonIdleLeftPng);
var _takeHitRightPng = require("../../assets/skeleton/take_hit_right.png");
var _takeHitRightPngDefault = parcelHelpers.interopDefault(_takeHitRightPng);
var _takeHitLeftPng = require("../../assets/skeleton/take_hit_left.png");
var _takeHitLeftPngDefault = parcelHelpers.interopDefault(_takeHitLeftPng);
var _walkRightPng = require("../../assets/skeleton/walk_right.png");
var _walkRightPngDefault = parcelHelpers.interopDefault(_walkRightPng);
var _walkLeftPng = require("../../assets/skeleton/walk_left.png");
var _walkLeftPngDefault = parcelHelpers.interopDefault(_walkLeftPng);
var _skeletonAttackRightPng = require("../../assets/skeleton/skeleton_attack_right.png");
var _skeletonAttackRightPngDefault = parcelHelpers.interopDefault(_skeletonAttackRightPng);
var _skeletonAttackLeftPng = require("../../assets/skeleton/skeleton_attack_left.png");
var _skeletonAttackLeftPngDefault = parcelHelpers.interopDefault(_skeletonAttackLeftPng);
var _skeletonDieRightPng = require("../../assets/skeleton/skeleton_die_right.png");
var _skeletonDieRightPngDefault = parcelHelpers.interopDefault(_skeletonDieRightPng);
var _skeletonDieLeftPng = require("../../assets/skeleton/skeleton_die_left.png");
var _skeletonDieLeftPngDefault = parcelHelpers.interopDefault(_skeletonDieLeftPng);
class SkeletonSprites {
    constructor(context){
        this.context = context;
        this.spriteSheetIdleRight = new _spriteSheet.SpriteSheet(150, 54, 4, _skeletonIdleRightPngDefault.default, this.context);
        this.spriteSheetIdleLeft = new _spriteSheet.SpriteSheet(150, 54, 4, _skeletonIdleLeftPngDefault.default, this.context);
        this.spriteSheetTakeHitRight = new _spriteSheet.SpriteSheet(150, 150, 4, _takeHitRightPngDefault.default, this.context);
        this.spriteSheetTakeHitLeft = new _spriteSheet.SpriteSheet(150, 150, 4, _takeHitLeftPngDefault.default, this.context);
        this.spriteSheetWalkRight = new _spriteSheet.SpriteSheet(150, 150, 4, _walkRightPngDefault.default, this.context);
        this.spriteSheetWalkLeft = new _spriteSheet.SpriteSheet(150, 150, 4, _walkLeftPngDefault.default, this.context);
        this.spriteSheetAttackRight = new _spriteSheet.SpriteSheet(150, 58, 7, _skeletonAttackRightPngDefault.default, this.context);
        this.spriteSheetAttackLeft = new _spriteSheet.SpriteSheet(80, 58, 7, _skeletonAttackLeftPngDefault.default, this.context);
        this.spriteSheetDieRight = new _spriteSheet.SpriteSheet(56, 54, 4, _skeletonDieRightPngDefault.default, this.context);
        this.spriteSheetDieLeft = new _spriteSheet.SpriteSheet(56, 54, 4, _skeletonDieLeftPngDefault.default, this.context);
    }
}

},{"../SpriteSheet":"bIXvO","../../assets/skeleton/skeleton_idle_right.png":"gQi1z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../assets/skeleton/take_hit_right.png":"6hbqM","../../assets/skeleton/skeleton_idle_left.png":"02Dlw","../../assets/skeleton/walk_left.png":"cPtHo","../../assets/skeleton/walk_right.png":"5toYm","../../assets/skeleton/take_hit_left.png":"a5Dru","../../assets/skeleton/skeleton_attack_right.png":"avqbw","../../assets/skeleton/skeleton_attack_left.png":"dDE8v","../../assets/skeleton/skeleton_die_right.png":"a9mA4","../../assets/skeleton/skeleton_die_left.png":"d7igz"}],"bIXvO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SpriteSheet", ()=>SpriteSheet
);
class SpriteSheet {
    image = new Image();
    frame = 0;
    startingPoint = 0;
    constructor(singleSpriteWidth, singleSpriteHeight, singleSpriteCount, imgSource, context){
        this.singleSpriteWidth = singleSpriteWidth;
        this.singleSpriteHeight = singleSpriteHeight;
        this.context = context;
        this.image.src = imgSource;
        this.singleSpriteCount = singleSpriteCount;
    }
    drawIndividualSprite(column, row, width, height, posX, posY) {
        this.context.drawImage(this.image, column * this.singleSpriteWidth, row * this.singleSpriteHeight, this.singleSpriteWidth, this.singleSpriteHeight, posX, posY, width, height);
    }
    /**
     *
     * @param speed speed of animation calculated by framerate 60
     * @param posX
     * @param posY
     * @param width
     * @param height
     * @param playerWidth
     * @param playerHeight
     */ animate(speed, posX, posY, width, height, playerWidth, playerHeight) {
        if (this.frame % speed == 0) {
            this.startingPoint++;
            if (this.startingPoint >= this.singleSpriteCount) this.startingPoint = 0;
        }
        this.drawIndividualSprite(this.startingPoint, 0, width, height, posX - playerWidth / 2, posY - playerHeight / 2);
        this.frame++;
        if (this.frame >= 60) this.frame = 0;
    }
    animationFinished() {
        return this.startingPoint === this.singleSpriteCount || this.startingPoint == 0;
    }
    resetActualsprite() {
        this.startingPoint = 0;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gQi1z":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "skeleton_idle_right.fdf47450.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"6hbqM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "take_hit_right.0ddf0e4e.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"02Dlw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "skeleton_idle_left.40267876.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cPtHo":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "walk_left.07bc62c7.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5toYm":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "walk_right.4afc771f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"a5Dru":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "take_hit_left.fbe8cf67.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"avqbw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "skeleton_attack_right.b7d0fdc9.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"dDE8v":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "skeleton_attack_left.b787e839.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"a9mA4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "skeleton_die_right.942389c1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"d7igz":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "skeleton_die_left.0c197343.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5a049":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Constants", ()=>Constants
);
class Constants {
    static playerRollCooldown = 0.8 // in seconds
    ;
    static playerAttackSpeed = 0.5;
    static activateAttackHitbox = 0.3;
    static playerHeight = 68 // if you change this, change playerheightcrouch aswell to half of this value
    ;
    static playerHeightCrouch = 34;
    static playerMoveSpeed = 300;
    static playerWidth = 20;
    static playerJumpSpeed = 300;
    static playerAttackCooldown = 0.5;
    static playerHitCooldown = 1;
    static playerDieAnimationTime = 0.4;
    static skeletonHeight = 90;
    static skeletonWidth = 30;
    static skeletonMovementSpeed = 150;
    static skeletonAttackSpeed = 0.5;
    static skeletonHitCooldown = 0.5;
    static skeletonActivateHitbox = 0.4;
    static skeletonAttackCooldown = 0.3;
    static skeletonDieAnimationtime = 0.4;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gBeAa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RectHitbox", ()=>RectHitbox
);
class RectHitbox {
    constructor(posX, posY, width, height){
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2YqzG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlayerUI", ()=>PlayerUI
);
class PlayerUI {
    constructor(player, context){
        this.player = player;
        this.context = context;
        this.outerBarAddConst = 4;
        this.outerBarWidth = player.health + this.outerBarAddConst;
    }
    drawUI() {
        this.drawHealthBar();
    }
    drawHealthBar() {
        this.context.fillStyle = '#757474';
        this.context.fillRect(10, 10, this.outerBarWidth * 3, 24);
        this.context.fillStyle = '#f36f6f';
        this.context.fillRect(10 + this.outerBarAddConst * 3 / 2, 12, this.player.health * 3, 20);
        this.context.font = 'bold 15px Arial';
        this.context.fillStyle = 'black';
        this.context.fillText(`${this.player.health}`, 20, 27);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2KYs4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "map.6dac7334.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7179v":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InitHelper", ()=>InitHelper
);
var _skeleton = require("../models/enemies/Skeleton");
var _constants = require("../models/Constants");
class InitHelper {
    static spawnEnemies(amount, context, player) {
        let enemies = [];
        for(let i = 0; i <= amount; i++)enemies.push(new _skeleton.Skeleton(context, Math.floor(Math.random() * 500 + 700), 550, _constants.Constants.skeletonMovementSpeed, 300, _constants.Constants.skeletonWidth, _constants.Constants.skeletonHeight, player));
        return enemies;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../models/enemies/Skeleton":"bmxkA","../models/Constants":"5a049"}],"8G1in":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Player", ()=>Player
);
var _gameObject = require("../GameObject");
var _character = require("../Character");
var _easingFunctions = require("../../helpers/EasingFunctions");
var _constants = require("../Constants");
var _rectHitbox = require("../RectHitbox");
var _playerSprites = require("./PlayerSprites");
class Player extends _gameObject.GameObject {
    faceDirection = _character.FaceDirection.RIGHT;
    attackHitbox = new _rectHitbox.RectHitbox(this.posX, this.posY, this.width * 2, this.height);
    dashIndicator = false;
    attackIndicator = false;
    crouchIndicator = false;
    isCrouching = false;
    dashRange = 25;
    timePassedRoll = 0;
    timePassedAttack = 0;
    rollCooldown = 0;
    health = 100;
    attackDamage = 10;
    activateDamage = false;
    attackCooldown = 0;
    hitCooldown = 0;
    timePassedDying = 0;
    constructor(context, x, y, movementSpeed, jumpSpeed, width, height){
        super(context, x, y, movementSpeed, jumpSpeed, width, height);
        this.rollPosition = this.posX;
        this.initMovement();
        this.sprites = new _playerSprites.PlayerSprites(context);
    }
    update(secondsPassed) {
        this.draw(false, false);
        if (!this.dead) this.updateMovement(secondsPassed);
        this.animate(secondsPassed);
        this.applyVelocity(secondsPassed);
        console.log(this.dead);
    }
    updateMovement(secondsPassed) {
        if (this.moveLeftIndicator && !this.crouchIndicator) this.moveLeft();
        else if (this.moveRightIndicator && !this.crouchIndicator) this.moveRight();
        else if (!(this.moveRightIndicator && this.moveLeftIndicator)) this.stopMovingXAxis();
        // jumping
        if (this.jumpIndicator) this.jump();
        // rolling
        if (this.dashIndicator) {
            this.setRollPosition();
            this.applyRoll(secondsPassed);
        }
        // attacking
        if (this.attackIndicator) this.applyAttack(secondsPassed);
        // crouch
        if (this.crouchIndicator) {
            this.applyCrouch();
            if (this.moveLeftIndicator) this.faceDirection = _character.FaceDirection.LEFT;
            if (this.moveRightIndicator) this.faceDirection = _character.FaceDirection.RIGHT;
        }
    }
    applyVelocity(secondsPassed) {
        if (!this.dashIndicator && !this.attackIndicator) {
            if (this.velocityX < 0 && !this.hit) this.faceDirection = _character.FaceDirection.LEFT;
            else if (this.velocityX > 0 && !this.hit) this.faceDirection = _character.FaceDirection.RIGHT;
            this.posX += this.velocityX * secondsPassed;
            if (this.rollCooldown > 0) this.rollCooldown -= secondsPassed;
            if (this.attackCooldown > 0) this.attackCooldown -= secondsPassed;
            if (this.hitCooldown > 0) this.hitCooldown -= secondsPassed;
        }
        this.fall(secondsPassed);
    }
    initMovement() {
        window.addEventListener('click', ()=>{
            if (!this.dashIndicator && this.timePassedAttack <= 0 && !this.inAir && !this.crouchIndicator && this.attackCooldown <= 0 && this.hitCooldown <= 0) {
                this.attackIndicator = true;
                this.activateDamage = true;
                this.attackHitbox = {
                    posX: 0,
                    posY: 0,
                    width: 0,
                    height: 0
                };
            }
        });
        window.addEventListener('keypress', (ev)=>{
            if (ev.key === 'w' && !this.inAir && !this.isCrouching && !this.hit) this.jumpIndicator = true;
            if (ev.key === ' ' && !this.inAir && this.rollCooldown <= 0 && !this.attackIndicator && !this.collides && !this.hit) {
                this.dashIndicator = true;
                this.crouchIndicator = false;
                this.resetCrouch();
            }
        });
        window.addEventListener('keydown', (e)=>{
            if (!this.hit) switch(e.key){
                case 'a':
                    this.moveLeftIndicator = true;
                    break;
                case 'd':
                    this.moveRightIndicator = true;
                    break;
            }
        });
        window.addEventListener('keyup', (e)=>{
            switch(e.key){
                case 'a':
                    this.moveLeftIndicator = false;
                    break;
                case 'd':
                    this.moveRightIndicator = false;
                    break;
            }
        });
    }
    // sets rollrange
    setRollPosition() {
        if (this.faceDirection == _character.FaceDirection.RIGHT) this.rollPosition = this.posX + this.dashRange;
        if (this.faceDirection == _character.FaceDirection.LEFT) this.rollPosition = this.posX - this.dashRange;
    }
    applyRoll(secondsPassed) {
        this.timePassedRoll += secondsPassed;
        if (this.faceDirection === _character.FaceDirection.RIGHT) {
            this.posX = _easingFunctions.easeInOutQuint(this.timePassedRoll, this.posX, this.dashRange, 0.2);
            if (!this.collides) this.sprites.spritePlayerDashRight.drawSprite(this.posX - this.width * 2, this.posY - 23, 120, 88);
            else this.sprites.spriteSheetPlayerIdleRight.animate(10, this.posX, this.posY + 21, 40, 80, this.width, this.height);
            if (this.posX >= this.rollPosition) {
                this.timePassedRoll = 0;
                this.dashIndicator = false;
                this.posX = this.rollPosition;
                this.rollCooldown = _constants.Constants.playerRollCooldown;
            }
        }
        if (this.faceDirection === _character.FaceDirection.LEFT) {
            this.posX = _easingFunctions.easeInOutQuint(this.timePassedRoll, this.posX, -this.dashRange, 0.2);
            if (!this.collides) this.sprites.spritePlayerDashLeft.drawSprite(this.posX - this.width * 2 - 10, this.posY - 23, 120, 88);
            else this.sprites.spriteSheetPlayerIdleLeft.animate(10, this.posX, this.posY + 21, 40, 80, this.width, this.height);
            if (this.posX <= this.rollPosition) {
                this.timePassedRoll = 0;
                this.dashIndicator = false;
                this.posX = this.rollPosition;
                this.rollCooldown = _constants.Constants.playerRollCooldown;
            }
        }
    }
    applyAttack(secondsPassed) {
        this.timePassedAttack += secondsPassed;
        if (this.faceDirection === _character.FaceDirection.RIGHT && this.timePassedAttack > _constants.Constants.activateAttackHitbox) {
            this.context.strokeStyle = '#000000';
            this.attackHitbox = {
                posX: this.posX + this.width,
                posY: this.posY,
                width: this.width * 2,
                height: this.height
            };
            // show hitbox-----
            // this.context.fillRect(this.attackHitbox.posX, this.attackHitbox.posY, this.attackHitbox.width, this.attackHitbox.height)
            if (this.timePassedAttack >= _constants.Constants.playerAttackSpeed) {
                this.attackIndicator = false;
                this.timePassedAttack = 0;
                this.attackCooldown = _constants.Constants.playerAttackCooldown;
            }
        }
        if (this.faceDirection === _character.FaceDirection.LEFT && this.timePassedAttack > _constants.Constants.activateAttackHitbox) {
            this.context.strokeStyle = '#000000';
            this.attackHitbox = {
                posX: this.posX - this.width * 2,
                posY: this.posY,
                width: this.width * 2,
                height: this.height
            };
            // show hitbox ----
            // this.context.fillRect(this.attackHitbox.posX, this.attackHitbox.posY, this.attackHitbox.width, this.attackHitbox.height)
            if (this.timePassedAttack >= _constants.Constants.playerAttackSpeed) {
                this.attackIndicator = false;
                this.timePassedAttack = 0;
                this.attackCooldown = _constants.Constants.playerAttackCooldown;
            }
        }
    }
    jump() {
        this.velocityY = -this.jumpSpeed;
        this.jumpIndicator = false;
        this.inAir = true;
    }
    applyCrouch() {
        if (!this.inAir) {
            this.height = _constants.Constants.playerHeightCrouch;
            if (!this.isCrouching) {
                this.posY += _constants.Constants.playerHeightCrouch;
                this.isCrouching = true;
            }
        } else this.resetCrouch();
    }
    resetCrouch() {
        if (this.isCrouching) {
            this.movementSpeed = _constants.Constants.playerMoveSpeed;
            this.height = _constants.Constants.playerHeight;
            this.posY -= _constants.Constants.playerHeightCrouch;
            this.isCrouching = false;
        }
    }
    // TODO: REF DIIIIS
    animate(secondsPassed) {
        if (!this.dead && !this.hit && this.velocityX > 0 && !this.inAir && !this.dashIndicator && !this.crouchIndicator && !this.attackIndicator) this.sprites.spriteSheetPlayerRunRight.animate(5, this.posX, this.posY + 23, 50, 80, this.width + 20, this.height);
        else if (!this.dead && !this.hit && this.velocityX < 0 && !this.inAir && !this.dashIndicator && !this.crouchIndicator && !this.attackIndicator) this.sprites.spriteSheetPlayerRunLeft.animate(5, this.posX, this.posY + 23, 50, 80, this.width - 10, this.height);
        else if (!this.dead && !this.hit && this.faceDirection == _character.FaceDirection.RIGHT && !this.inAir && !this.crouchIndicator && !this.dashIndicator && !this.attackIndicator) this.sprites.spriteSheetPlayerIdleRight.animate(10, this.posX, this.posY + 21, 40, 80, this.width, this.height);
        else if (!this.dead && !this.hit && this.faceDirection == _character.FaceDirection.LEFT && !this.inAir && !this.crouchIndicator && !this.dashIndicator && !this.attackIndicator) this.sprites.spriteSheetPlayerIdleLeft.animate(10, this.posX, this.posY + 21, 40, 80, this.width, this.height);
        else if (!this.dead && !this.hit && this.inAir && this.faceDirection == _character.FaceDirection.RIGHT && this.velocityY <= 0 && !this.dashIndicator) this.sprites.spriteSheetPlayerJumpRight.animate(10, this.posX, this.posY + 23, 40, 80, this.width, this.height);
        else if (!this.dead && !this.hit && this.inAir && this.faceDirection == _character.FaceDirection.LEFT && this.velocityY <= 0 && !this.dashIndicator) this.sprites.spriteSheetPlayerJumpLeft.animate(10, this.posX, this.posY + 23, 40, 80, this.width, this.height);
        else if (!this.dead && !this.hit && this.inAir && this.faceDirection == _character.FaceDirection.RIGHT && this.velocityY >= 0 && !this.dashIndicator) this.sprites.spriteSheetPlayerFallRight.animate(10, this.posX, this.posY + 23, 40, 80, this.width, this.height);
        else if (!this.dead && !this.hit && this.inAir && this.faceDirection == _character.FaceDirection.LEFT && this.velocityY >= 0 && !this.dashIndicator) this.sprites.spriteSheetPlayerFallLeft.animate(10, this.posX, this.posY + 23, 40, 80, this.width, this.height);
        else if (!this.dead && !this.hit && this.crouchIndicator && this.faceDirection == _character.FaceDirection.RIGHT && !this.inAir && !this.dashIndicator && !this.attackIndicator) this.sprites.spriteSheetPlayerCrouchRight.animate(13, this.posX, this.posY - 28, 40, 80, this.width, this.height);
        else if (!this.dead && !this.hit && this.crouchIndicator && this.faceDirection == _character.FaceDirection.LEFT && !this.inAir && !this.dashIndicator && !this.attackIndicator) this.sprites.spriteSheetPlayerCrouchLeft.animate(13, this.posX, this.posY - 28, 40, 80, this.width, this.height);
        if (!this.dead && !this.hit && this.attackIndicator && this.faceDirection == _character.FaceDirection.RIGHT) this.sprites.spriteSheetPlayerAttack1Right.animate(4, this.posX - 15, this.posY + 13, 100, 90, this.width, this.height);
        else this.sprites.spriteSheetPlayerAttack1Right.resetActualsprite();
        if (!this.dead && !this.hit && this.attackIndicator && this.faceDirection == _character.FaceDirection.LEFT) this.sprites.spriteSheetPlayerAttack1Left.animate(4, this.posX - 45, this.posY + 13, 100, 90, this.width, this.height);
        else this.sprites.spriteSheetPlayerAttack1Left.resetActualsprite();
        if (!this.dead && this.hit && this.hitRight && this.health > 0 && this.hitCooldown > 0) {
            this.sprites.spriteSheetPlayerHurtRight.animate(7, this.posX - 25, this.posY + 8, 100, 100, this.width, this.height);
            this.velocityX = -200;
            this.hitCooldown -= secondsPassed;
        }
        if (!this.dead && this.hit && this.hitLeft && this.health > 0 && this.hitCooldown > 0) {
            this.sprites.spriteSheetPlayerHurtLeft.animate(7, this.posX - 25, this.posY + 8, 100, 100, this.width, this.height);
            this.velocityX = 200;
            this.hitCooldown -= secondsPassed;
        }
        if (this.hitCooldown <= 0 && this.hit) {
            this.hit = false;
            this.hitLeft = false;
            this.hitRight = false;
            this.stopMovingXAxis();
        }
        if (this.health <= 0 && this.faceDirection == _character.FaceDirection.RIGHT) {
            if (!this.dead) this.sprites.spriteSheetPlayerDieRight.animate(8, this.posX - 50, this.posY + 5, 100, 100, this.width, this.height);
            else this.sprites.spritePlayerDeadRight.drawSprite(this.posX - 60, this.posY - 30, 100, 100);
            this.timePassedDying += secondsPassed;
            if (this.timePassedDying >= _constants.Constants.playerDieAnimationTime) this.dead = true;
        }
        if (this.health <= 0 && this.faceDirection == _character.FaceDirection.LEFT) {
            if (!this.dead) this.sprites.spriteSheetPlayerDieLeft.animate(8, this.posX + 20, this.posY + 5, 100, 100, this.width, this.height);
            else this.sprites.spritePlayerDeadLeft.drawSprite(this.posX - 20, this.posY - 30, 100, 100);
            this.timePassedDying += secondsPassed;
            if (this.timePassedDying >= _constants.Constants.playerDieAnimationTime) this.dead = true;
        }
    }
}

},{"../GameObject":"33CCj","../Character":"6soW0","../../helpers/EasingFunctions":"9V7aM","../Constants":"5a049","../RectHitbox":"gBeAa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./PlayerSprites":"gEKaj"}],"9V7aM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easeInOutQuint", ()=>easeInOutQuint
);
function easeInOutQuint(t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gEKaj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PlayerSprites", ()=>PlayerSprites
);
var _playerIdlePng = require("../../assets/player/player_idle.png");
var _playerIdlePngDefault = parcelHelpers.interopDefault(_playerIdlePng);
var _playerIdleLeftPng = require("../../assets/player/player_idle_left.png");
var _playerIdleLeftPngDefault = parcelHelpers.interopDefault(_playerIdleLeftPng);
var _playerRunRightPng = require("../../assets/player/player_run_right.png");
var _playerRunRightPngDefault = parcelHelpers.interopDefault(_playerRunRightPng);
var _playerRunLeftPng = require("../../assets/player/player_run_left.png");
var _playerRunLeftPngDefault = parcelHelpers.interopDefault(_playerRunLeftPng);
var _playerJumpRightPng = require("../../assets/player/player_jump_right.png");
var _playerJumpRightPngDefault = parcelHelpers.interopDefault(_playerJumpRightPng);
var _playerJumpLeftPng = require("../../assets/player/player_jump_left.png");
var _playerJumpLeftPngDefault = parcelHelpers.interopDefault(_playerJumpLeftPng);
var _playerFallRightPng = require("../../assets/player/player_fall_right.png");
var _playerFallRightPngDefault = parcelHelpers.interopDefault(_playerFallRightPng);
var _playerFallLeftPng = require("../../assets/player/player_fall_left.png");
var _playerFallLeftPngDefault = parcelHelpers.interopDefault(_playerFallLeftPng);
var _playerCrouchRightPng = require("../../assets/player/player_crouch_right.png");
var _playerCrouchRightPngDefault = parcelHelpers.interopDefault(_playerCrouchRightPng);
var _playerCrouchLeftPng = require("../../assets/player/player_crouch_left.png");
var _playerCrouchLeftPngDefault = parcelHelpers.interopDefault(_playerCrouchLeftPng);
var _playerDashRightPng = require("../../assets/player/player_dash_right.png");
var _playerDashRightPngDefault = parcelHelpers.interopDefault(_playerDashRightPng);
var _playerDashLeftPng = require("../../assets/player/player_dash_left.png");
var _playerDashLeftPngDefault = parcelHelpers.interopDefault(_playerDashLeftPng);
var _playerAttack1RightPng = require("../../assets/player/player_attack_1_right.png");
var _playerAttack1RightPngDefault = parcelHelpers.interopDefault(_playerAttack1RightPng);
var _playerAttack1LeftPng = require("../../assets/player/player_attack_1_left.png");
var _playerAttack1LeftPngDefault = parcelHelpers.interopDefault(_playerAttack1LeftPng);
var _playerHurtRightPng = require("../../assets/player/player_hurt_right.png");
var _playerHurtRightPngDefault = parcelHelpers.interopDefault(_playerHurtRightPng);
var _playerHurtLeftPng = require("../../assets/player/player_hurt_left.png");
var _playerHurtLeftPngDefault = parcelHelpers.interopDefault(_playerHurtLeftPng);
var _playerDieRightPng = require("../../assets/player/player_die_right.png");
var _playerDieRightPngDefault = parcelHelpers.interopDefault(_playerDieRightPng);
var _playerDeadRightPng = require("../../assets/player/player_dead_right.png");
var _playerDeadRightPngDefault = parcelHelpers.interopDefault(_playerDeadRightPng);
var _playerDieLeftPng = require("../../assets/player/player_die_left.png");
var _playerDieLeftPngDefault = parcelHelpers.interopDefault(_playerDieLeftPng);
var _playerDeadLeftPng = require("../../assets/player/player_dead_left.png");
var _playerDeadLeftPngDefault = parcelHelpers.interopDefault(_playerDeadLeftPng);
var _spriteSheet = require("../SpriteSheet");
var _sprite = require("../Sprite");
class PlayerSprites {
    constructor(context){
        this.context = context;
        this.spriteSheetPlayerIdleRight = new _spriteSheet.SpriteSheet(24, 37, 5, _playerIdlePngDefault.default, context);
        this.spriteSheetPlayerIdleLeft = new _spriteSheet.SpriteSheet(24, 37, 5, _playerIdleLeftPngDefault.default, context);
        this.spriteSheetPlayerRunRight = new _spriteSheet.SpriteSheet(30, 36, 8, _playerRunRightPngDefault.default, context);
        this.spriteSheetPlayerRunLeft = new _spriteSheet.SpriteSheet(30, 36, 8, _playerRunLeftPngDefault.default, context);
        this.spriteSheetPlayerJumpRight = new _spriteSheet.SpriteSheet(24, 37, 3, _playerJumpRightPngDefault.default, context);
        this.spriteSheetPlayerJumpLeft = new _spriteSheet.SpriteSheet(24, 37, 3, _playerJumpLeftPngDefault.default, context);
        this.spriteSheetPlayerFallRight = new _spriteSheet.SpriteSheet(24, 37, 3, _playerFallRightPngDefault.default, context);
        this.spriteSheetPlayerFallLeft = new _spriteSheet.SpriteSheet(24, 37, 3, _playerFallLeftPngDefault.default, context);
        this.spriteSheetPlayerCrouchRight = new _spriteSheet.SpriteSheet(24, 37, 4, _playerCrouchRightPngDefault.default, context);
        this.spriteSheetPlayerCrouchLeft = new _spriteSheet.SpriteSheet(24, 37, 4, _playerCrouchLeftPngDefault.default, context);
        this.spriteSheetPlayerAttack1Right = new _spriteSheet.SpriteSheet(56, 44, 8, _playerAttack1RightPngDefault.default, context);
        this.spriteSheetPlayerAttack1Left = new _spriteSheet.SpriteSheet(56, 44, 8, _playerAttack1LeftPngDefault.default, context);
        this.spriteSheetPlayerHurtRight = new _spriteSheet.SpriteSheet(64, 44, 4, _playerHurtRightPngDefault.default, context);
        this.spriteSheetPlayerHurtLeft = new _spriteSheet.SpriteSheet(64, 44, 4, _playerHurtLeftPngDefault.default, context);
        this.spriteSheetPlayerDieRight = new _spriteSheet.SpriteSheet(64, 44, 11, _playerDieRightPngDefault.default, context);
        this.spriteSheetPlayerDieLeft = new _spriteSheet.SpriteSheet(64, 44, 11, _playerDieLeftPngDefault.default, context);
        this.spritePlayerDeadRight = new _sprite.Sprite(_playerDeadRightPngDefault.default, context);
        this.spritePlayerDeadLeft = new _sprite.Sprite(_playerDeadLeftPngDefault.default, context);
        this.spritePlayerDashRight = new _sprite.Sprite(_playerDashRightPngDefault.default, context);
        this.spritePlayerDashLeft = new _sprite.Sprite(_playerDashLeftPngDefault.default, context);
    }
}

},{"../SpriteSheet":"bIXvO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../assets/player/player_idle.png":"1aDcT","../../assets/player/player_idle_left.png":"e4kt2","../../assets/player/player_run_right.png":"4gdd2","../../assets/player/player_run_left.png":"c29RO","../../assets/player/player_jump_right.png":"lvR01","../../assets/player/player_jump_left.png":"kScKz","../../assets/player/player_fall_right.png":"aXA7R","../../assets/player/player_fall_left.png":"6k2Af","../../assets/player/player_crouch_right.png":"cU4YL","../../assets/player/player_crouch_left.png":"lXduq","../../assets/player/player_dash_right.png":"bm0LM","../Sprite":"6ClpZ","../../assets/player/player_dash_left.png":"9OWzW","../../assets/player/player_attack_1_right.png":"7qUkc","../../assets/player/player_attack_1_left.png":"iKhCy","../../assets/player/player_hurt_right.png":"7UkPv","../../assets/player/player_hurt_left.png":"4zWKl","../../assets/player/player_die_right.png":"eghzy","../../assets/player/player_dead_right.png":"k8G7I","../../assets/player/player_die_left.png":"g69mb","../../assets/player/player_dead_left.png":"5zosC"}],"1aDcT":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_idle.e9b2b127.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"e4kt2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_idle_left.f20335b3.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4gdd2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_run_right.e73f210a.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"c29RO":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_run_left.d5439ae9.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lvR01":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_jump_right.d8e2c435.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"kScKz":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_jump_left.ffebe0af.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"aXA7R":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_fall_right.dc6daba5.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6k2Af":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_fall_left.6d68676f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"cU4YL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_crouch_right.bacc75d9.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lXduq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_crouch_left.656027f8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"bm0LM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_dash_right.3a0d7100.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6ClpZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sprite", ()=>Sprite
);
class Sprite {
    image = new Image();
    constructor(imgSource, context){
        this.image.src = imgSource;
        this.context = context;
    }
    drawSprite(posX, posY, width, height) {
        this.context.drawImage(this.image, posX, posY, width, height);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9OWzW":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_dash_left.ba240409.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7qUkc":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_attack_1_right.c21d7e45.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"iKhCy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_attack_1_left.1249a3a8.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"7UkPv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_hurt_right.4dfce36f.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4zWKl":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_hurt_left.9cb02a90.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"eghzy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_die_right.7160685c.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"k8G7I":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_dead_right.bac29ea1.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"g69mb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_die_left.cb43e8bb.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"5zosC":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('aNMIV') + "player_dead_left.8a17e287.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}]},["lBgj1","jeorp"], "jeorp", "parcelRequire8033")

//# sourceMappingURL=index.b7a05eb9.js.map
