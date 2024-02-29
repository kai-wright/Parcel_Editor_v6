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
})({"8X0OO":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "7ae1ccd4f0c80aeb";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"frsvN":[function(require,module,exports) {
var _properties = require("./properties");
var _editor = require("./editor");
var _parcels = require("./parcels");
// Start editor and attach to the dev console
const editor = new (0, _editor.editor)();
globalThis.editor = editor;
function addExampleResources() {
    let quintessence = new (0, _parcels.parcel_unique)("quintessence", "Quintessence");
    quintessence.owned = 1000;
    quintessence.unlocked = true;
    let ironOre = new (0, _parcels.parcel_resource)("ore_iron", "Iron Ore");
    let ironOreInteraction = new (0, _properties.interaction)();
    ironOreInteraction.result[0] = [
        "unique:quintessence",
        30
    ];
    ironOreInteraction.consume[0] = [
        "resource:ore_iron",
        1
    ];
    ironOre.interaction_sell[0] = ironOreInteraction;
    editor.parcel = quintessence;
    editor.save();
    editor.parcel = ironOre;
    editor.save();
    editor.checkStorage();
    editor.renderList();
}
editor.checkStorage();
editor.renderList();
if (editor.stored_parcel.length === 0) {
    console.info("Loading in example parcels!");
    addExampleResources();
}
console.table(editor.parcel);

},{"./editor":"5NVUR","./parcels":"9A8k2","./properties":"hPbq1"}],"5NVUR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// const editor = new editor_instance();
parcelHelpers.export(exports, "editor", ()=>editor);
var _type = require("./type");
var _parcels = require("./parcels");
var _properties = require("./properties");
var _util = require("./util");
var _utilDefault = parcelHelpers.interopDefault(_util);
const DOM_PARCEL_LIST = document.getElementById("parcel_list");
const DOM_PARCEL_EDIT = document.getElementById("parcel_edit");
const DOM_INTERACTION_LIST = document.getElementById("parcel_interaction_list");
const DOM_INTERACTION_EDIT = document.getElementById("parcel_interaction_edit");
const DOM_INTERACTION_SET = document.getElementById("parcel_interaction_set");
const DOM_PARCEL_ADD_TYPE = document.getElementById("parcel_add_type");
const DOM_PARCEL_ADD_ID = document.getElementById("parcel_add_id");
const DOM_PARCEL_ADD_BUTTON = document.getElementById("parcel_add_button");
function checkParcelAddIDEmpty() {
    // If empty add .empty class
    if (DOM_PARCEL_ADD_ID.value === "") DOM_PARCEL_ADD_ID.classList.add("empty");
    else DOM_PARCEL_ADD_ID.classList.remove("empty");
}
DOM_PARCEL_ADD_ID.addEventListener("input", checkParcelAddIDEmpty);
checkParcelAddIDEmpty();
const PROPERTY_IDREGEX = "[a-z]([a-z_]*[a-z])?";
const PROPERTY_NAMEREGEX = "[a-zA-Z](?:[a-zA-Z ]*[a-zA-Z])?";
class editor {
    constructor(default_start = true){
        this.version = "Parcel Editor - 6.0.0";
        this.stored_parcel = [];
        // Init
        if (default_start) {
            this.logVersion();
            this.checkStorage();
            // this.renderList();
            this.clear();
            console.log("Editor Ready!");
            this.renderEditor();
        } else console.warn("Editor started in uninitialised state.\n Did you want to do this?");
        DOM_PARCEL_ADD_BUTTON.addEventListener("click", ()=>{
            this.new_parcel();
            this.refreshList();
        });
    }
    logVersion() {
        console.log(this.version);
    }
    save() {
        if (this.parcel.id === "") console.warn("Blank ID given to save process. Not saving");
        else if ((0, _type.regexID).test(this.parcel.id)) {
            localStorage.setItem(`${this.parcel.type}:${this.parcel.id}`, JSON.stringify(this.parcel));
            console.log(`Saved ${this.parcel.type}:${this.parcel.id} to localStorage`);
        } else console.error(`ID '${this.parcel.id}' is invalid. Failed to save data.`);
    }
    load(full_id) {
        let data;
        if (data = localStorage.getItem(full_id)) {
            const parsed_data = JSON.parse(data);
            // Clear parcel
            this.parcel = null;
            // Assign to parcel
            this.parcel = parsed_data;
            // Set this parcels class to be of the correct class type
            switch(this.parcel.type){
                case "resource":
                    this.parcel = new (0, _parcels.parcel_resource)(this.parcel.id, this.parcel.name);
                    this.parcel.owned = parsed_data.owned || 0;
                    this.parcel.unlocked = parsed_data.unlocked || false;
                    this.parcel.interaction_buy = parsed_data.interaction_buy || [];
                    this.parcel.interaction_sell = parsed_data.interaction_sell || [];
                    this.parcel.interaction_craft = parsed_data.interaction_craft || [];
                    this.parcel.interaction_generate = parsed_data.interaction_generate || [];
                    break;
                case "structure":
                    this.parcel = new (0, _parcels.parcel_structure)(this.parcel.id, this.parcel.name);
                    this.parcel.owned = parsed_data.owned || 0;
                    this.parcel.unlocked = parsed_data.unlocked || false;
                    this.parcel.interaction_buy = parsed_data.interaction_buy || [];
                    this.parcel.interaction_sell = parsed_data.interaction_sell || [];
                    this.parcel.interaction_craft = parsed_data.interaction_craft || [];
                    this.parcel.interaction_generate = parsed_data.interaction_generate || [];
                    this.parcel.interaction_requirement = parsed_data.interaction_requirement || [];
                    break;
                case "research":
                    this.parcel = new (0, _parcels.parcel_research)(this.parcel.id, this.parcel.name);
                    this.parcel.unlocked = parsed_data.unlocked || false;
                    this.parcel.interaction_craft = parsed_data.interaction_craft || [];
                    break;
                case "unique":
                    this.parcel = new (0, _parcels.parcel_unique)(this.parcel.id, this.parcel.name);
                    this.parcel.unlocked = parsed_data.unlocked || false;
                    break;
            }
            // If the parcel contains any interactions, assign each of them to the class interaction without overwriting
            let interaction_types = [
                "interaction_buy",
                "interaction_sell",
                "interaction_craft",
                "interaction_generate"
            ];
            for(let i = 0; i < interaction_types.length; i++){
                let type = interaction_types[i];
                if (this.parcel[type]) for(let j = 0; j < this.parcel[type].length; j++){
                    // Convert to class
                    let new_interaction = new (0, _properties.interaction)();
                    // Add data
                    new_interaction.result = this.parcel[type][j].result;
                    new_interaction.consume = this.parcel[type][j].consume;
                    new_interaction.require = this.parcel[type][j].require;
                    new_interaction.unlocked = this.parcel[type][j].unlocked;
                    // Assign
                    this.parcel[type][j] = new_interaction;
                }
            }
            console.info(`Loaded ${parsed_data.type}:${parsed_data.id}`);
        } else console.error(`${full_id} does not exist. Failed to load data.`);
    }
    new_parcel() {
        const new_type = DOM_PARCEL_ADD_TYPE.value;
        const id = DOM_PARCEL_ADD_ID.value;
        if (!(0, _type.regexID).test(id)) {
            console.error(`${id} is not a valid ID, unable to create`);
            return;
        }
        this.save();
        const name = (0, _utilDefault.default).capitalise_all_words((0, _utilDefault.default).removeSymbols(id));
        switch(new_type){
            case "resource":
                this.parcel = new (0, _parcels.parcel_resource)(id, name);
                break;
            case "structure":
                this.parcel = new (0, _parcels.parcel_structure)(id, name);
                break;
            case "research":
                this.parcel = new (0, _parcels.parcel_research)(id, name);
                break;
            case "unique":
                this.parcel = new (0, _parcels.parcel_unique)(id, name);
                break;
        }
        this.save();
    }
    delete(full_id) {
        if (localStorage.getItem(full_id)) {
            localStorage.removeItem(full_id);
            console.info(`Deleted ${full_id}`);
        } else console.error(`${full_id} does not exist. Failed to delete data.`);
        // If the current parcel is deleted, clear it
        if (full_id == `${this.parcel.type}:${this.parcel.id}`) this.clear();
        this.refreshList();
    }
    clear(type = "resource", id = "") {
        if (type == "resource") this.parcel = new (0, _parcels.parcel_resource)(id, (0, _utilDefault.default).id_to_name(id));
        else if (type == "structure") this.parcel = new (0, _parcels.parcel_structure)(id, (0, _utilDefault.default).id_to_name(id));
        else if (type == "research") this.parcel = new (0, _parcels.parcel_research)(id, (0, _utilDefault.default).id_to_name(id));
        else if (type == "unique") this.parcel = new (0, _parcels.parcel_unique)(id, (0, _utilDefault.default).id_to_name(id));
        else console.error(`Invalid type '${type}' passed to clear()`);
    }
    checkStorage() {
        this.stored_parcel = [];
        for(let i = 0; i < localStorage.length; i++){
            if (!(0, _type.regexFullID).test(localStorage.key(i))) continue;
            const valid_id = localStorage.key(i);
            this.stored_parcel.push(valid_id);
        }
        this.stored_parcel.sort((a, b)=>a.localeCompare(b));
        console.table(this.stored_parcel);
    }
    refreshList() {
        this.checkStorage();
        this.renderList();
    }
    clearDOM() {
        DOM_PARCEL_LIST.innerHTML = "";
        DOM_PARCEL_EDIT.innerHTML = "";
        DOM_INTERACTION_LIST.innerHTML = "";
        DOM_INTERACTION_EDIT.innerHTML = "";
        DOM_INTERACTION_SET.innerHTML = "";
    }
    renderList() {
        this.clearDOM();
        // Render list
        if (this.stored_parcel.length === 0) {
            console.warn("No parcels found");
            return;
        }
        console.log("Rendering list of parcels");
        let lastParcelType = "";
        for(const i in this.stored_parcel){
            if (lastParcelType != this.stored_parcel[i].split(":")[0]) {
                const h3 = document.createElement("h3");
                h3.innerHTML = (0, _utilDefault.default).capitalise_first_word(this.stored_parcel[i].split(":")[0]);
                DOM_PARCEL_LIST.appendChild(h3);
                lastParcelType = this.stored_parcel[i].split(":")[0];
            }
            const button = document.createElement("button");
            button.innerHTML = this.stored_parcel[i];
            button.addEventListener("click", ()=>{
                this.clearDOM();
                this.load(this.stored_parcel[i]);
                this.renderEditor();
            });
            DOM_PARCEL_LIST.appendChild(button);
        }
    }
    renderEditor() {
        this.clearDOM();
        this.renderList();
        if (this.parcel === undefined) {
            console.warn("No parcel loaded. Failed to render editor.");
            return;
        }
        // Render id and name inputs with validation
        const id_input = document.createElement("input");
        id_input.type = "text";
        id_input.value = this.parcel.id;
        id_input.placeholder = "ID";
        id_input.pattern = PROPERTY_IDREGEX;
        id_input.addEventListener("change", ()=>{
            if (!(0, _type.regexID).test(id_input.value)) return;
            this.parcel.id = id_input.value;
        });
        DOM_PARCEL_EDIT.appendChild(id_input);
        const name_input = document.createElement("input");
        name_input.type = "text";
        name_input.value = this.parcel.name;
        name_input.placeholder = "Name";
        name_input.pattern = PROPERTY_NAMEREGEX;
        name_input.addEventListener("change", ()=>{
            if (!(0, _type.regexName).test(name_input.value)) return;
            this.parcel.name = name_input.value;
        });
        DOM_PARCEL_EDIT.appendChild(name_input);
        if (this.parcel.type == "resource" || this.parcel.type == "structure" || this.parcel.type == "unique") {
            // Render owned
            const owned_input = document.createElement("input");
            owned_input.type = "number";
            owned_input.value = this.parcel.owned.toString() || "0";
            owned_input.placeholder = "Owned";
            owned_input.min = "0";
            owned_input.addEventListener("change", ()=>{
                this.parcel.owned = Number(owned_input.value);
            });
            DOM_PARCEL_EDIT.appendChild(owned_input);
        }
        // Render unlocked (boolean checkbox)
        const checkbox_wrapper = document.createElement("div");
        const unlocked_checkbox = document.createElement("input");
        const checkbox_label = document.createElement("label");
        checkbox_label.innerHTML = "Unlocked";
        unlocked_checkbox.type = "checkbox";
        unlocked_checkbox.checked = this.parcel.unlocked;
        unlocked_checkbox.addEventListener("change", ()=>{
            this.parcel.unlocked = Boolean(unlocked_checkbox.checked);
        });
        checkbox_wrapper.appendChild(checkbox_label);
        checkbox_wrapper.appendChild(unlocked_checkbox);
        DOM_PARCEL_EDIT.appendChild(checkbox_wrapper);
        // Render interactions if type is suitable
        // Resource has buy,sell,craft,generate
        // Structure has buy,sell,craft + charges
        // Research has craft
        // Unique has nothing
        if (this.parcel.type == "resource" || this.parcel.type == "structure") {
            // Render buy,sell buttons that trigger renderInteractionList
            const buy_button = document.createElement("button");
            buy_button.innerHTML = "Buy";
            if (this.parcel.interaction_buy && this.parcel.interaction_buy.length > 0) buy_button.innerHTML += ` (${this.parcel.interaction_buy.length})`;
            buy_button.addEventListener("click", ()=>{
                this.renderInteractionList("interaction_buy");
            });
            const sell_button = document.createElement("button");
            sell_button.innerHTML = "Sell";
            if (this.parcel.interaction_sell && this.parcel.interaction_sell.length > 0) sell_button.innerHTML += ` (${this.parcel.interaction_sell.length})`;
            sell_button.addEventListener("click", ()=>{
                this.renderInteractionList("interaction_sell");
            });
            DOM_PARCEL_EDIT.appendChild(buy_button);
            DOM_PARCEL_EDIT.appendChild(sell_button);
        }
        if (this.parcel.type == "resource" || this.parcel.type == "structure" || this.parcel.type == "research") {
            // Render craft buttons that trigger renderInteractionList
            const craft_button = document.createElement("button");
            craft_button.innerHTML = "Craft";
            if (this.parcel.interaction_craft && this.parcel.interaction_craft.length > 0) craft_button.innerHTML += ` (${this.parcel.interaction_craft.length})`;
            craft_button.addEventListener("click", ()=>{
                this.renderInteractionList("interaction_craft");
            });
            DOM_PARCEL_EDIT.appendChild(craft_button);
        }
        if (this.parcel.type == "resource") {
            // Render generate buttons that trigger renderInteractionList
            const generate_button = document.createElement("button");
            generate_button.innerHTML = "Generate";
            if (this.parcel.interaction_generate && this.parcel.interaction_generate.length > 0) generate_button.innerHTML += ` (${this.parcel.interaction_generate.length})`;
            generate_button.addEventListener("click", ()=>{
                this.renderInteractionList("interaction_generate");
            });
            DOM_PARCEL_EDIT.appendChild(generate_button);
        }
        if (this.parcel.type == "structure") {
            // Render buttons for charges list
            const charge_button = document.createElement("button");
            charge_button.innerHTML = "Charges";
            if (this.parcel.interaction_requirement && this.parcel.interaction_requirement.length > 0) charge_button.innerHTML += ` (${this.parcel.interaction_requirement.length})`;
            charge_button.addEventListener("click", ()=>{
                this.renderChargeList();
            });
            DOM_PARCEL_EDIT.appendChild(charge_button);
        }
        // Render save button
        const save_button = document.createElement("button");
        save_button.innerHTML = "Save";
        save_button.addEventListener("click", ()=>{
            this.save();
        });
        DOM_PARCEL_EDIT.appendChild(save_button);
        // Render delete button
        // Warn if delete button is clicked before triggering delete
        const delete_button = document.createElement("button");
        delete_button.innerHTML = "Delete";
        delete_button.addEventListener("click", ()=>{
            if (!confirm("Are you sure you want to delete this parcel?\nThis action cannot be undone.")) return;
            console.log("Deleting " + this.parcel.id);
            this.delete(`${this.parcel.type}:${this.parcel.id}`);
        });
        DOM_PARCEL_EDIT.appendChild(delete_button);
    }
    renderInteractionList(interaction_type) {
        this.renderEditor();
        // List of interactions, used for interaction_buy, interaction_sell, interaction_craft, interaction_generate
        console.log("Rendering list of interactions for " + interaction_type);
        // Interaction name is buy,sell,craft,generate starting with a capital letter and without interaction_
        const interaction_name = (0, _utilDefault.default).capitalise_first_word(interaction_type.replace("interaction_", ""));
        DOM_INTERACTION_LIST.innerHTML = `<h2>${interaction_name} Interactions</h2>`;
        // Render interaction buttons that trigger renderInteraction
        if (this.parcel[interaction_type]) for(const i in this.parcel[interaction_type]){
            const button = document.createElement("button");
            button.innerHTML = i;
            button.classList.add((0, _utilDefault.default).validity_check(this.parcel[interaction_type][i].validate()));
            button.addEventListener("click", ()=>{
                this.renderInteraction(interaction_type, parseInt(i));
            });
            DOM_INTERACTION_LIST.appendChild(button);
        }
        // Button to add new interaction
        const button = document.createElement("button");
        button.innerHTML = "Add new " + interaction_name;
        button.addEventListener("click", ()=>{
            let newInteraction = new (0, _properties.interaction)();
            newInteraction.result = [
                [
                    `${this.parcel.type}:${this.parcel.id}`,
                    1
                ]
            ];
            this.parcel[interaction_type].push(newInteraction);
            this.renderInteractionList(interaction_type);
        });
        DOM_INTERACTION_LIST.appendChild(button);
    }
    renderChargeList() {
        this.renderEditor();
        // List of charges
        console.log("Rendering list of charges");
        // Render charge buttons that trigger renderCharge
        // Button to add new charge
        DOM_INTERACTION_LIST.innerHTML = `<h2>Charges</h2>`;
        if (this.parcel.interaction_requirement != undefined) {
            for(const i in this.parcel.interaction_requirement){
                const button = document.createElement("button");
                button.innerHTML = String(this.parcel.interaction_requirement[i]);
                button.addEventListener("click", ()=>{
                    this.renderCharge(parseInt(i));
                });
                DOM_INTERACTION_LIST.appendChild(button);
            }
            // Button to add new charge
            const button = document.createElement("button");
            button.innerHTML = "Add new charge";
            button.addEventListener("click", ()=>{
                this.parcel.interaction_requirement.push(new (0, _properties.charge)());
                this.renderChargeList();
            });
            DOM_INTERACTION_LIST.appendChild(button);
        }
        // List of charges used for interaction_require
        console.log("Rendering list of charges");
    }
    renderInteraction(interaction_type, interaction_id) {
        this.renderInteractionList(interaction_type);
        // Render interaction
        console.log("Rendering interaction");
        DOM_INTERACTION_EDIT.innerHTML = "<h2>" + (0, _utilDefault.default).capitalise_first_word(interaction_type) + ": " + interaction_id + "</h2>";
        const checkbox_wrapper = document.createElement("div");
        const checkbox_label = document.createElement("label");
        checkbox_label.innerHTML = "Unlocked";
        checkbox_wrapper.appendChild(checkbox_label);
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = this.parcel[interaction_type][interaction_id].unlocked;
        checkbox.addEventListener("change", ()=>{
            this.parcel[interaction_type][interaction_id].unlocked = checkbox.checked;
        });
        checkbox_wrapper.appendChild(checkbox);
        DOM_INTERACTION_EDIT.appendChild(checkbox_wrapper);
        // Render result / require / consume as buttons to renderSet
        const result_button = document.createElement("button");
        result_button.innerHTML = "Result (" + this.parcel[interaction_type][interaction_id].result.length + ")";
        result_button.addEventListener("click", ()=>{
            this.renderSet(interaction_type, interaction_id, "result");
        });
        result_button.classList.add((0, _utilDefault.default).validity_check(this.parcel[interaction_type][interaction_id].validateProperty("result", this.stored_parcel)));
        DOM_INTERACTION_EDIT.appendChild(result_button);
        const require_button = document.createElement("button");
        require_button.innerHTML = "Require (" + this.parcel[interaction_type][interaction_id].require.length + ")";
        require_button.addEventListener("click", ()=>{
            this.renderSet(interaction_type, interaction_id, "require");
        });
        require_button.classList.add((0, _utilDefault.default).validity_check(this.parcel[interaction_type][interaction_id].validateProperty("require", this.stored_parcel)));
        DOM_INTERACTION_EDIT.appendChild(require_button);
        const consume_button = document.createElement("button");
        consume_button.innerHTML = "Consume (" + this.parcel[interaction_type][interaction_id].consume.length + ")";
        consume_button.addEventListener("click", ()=>{
            this.renderSet(interaction_type, interaction_id, "consume");
        });
        consume_button.classList.add((0, _utilDefault.default).validity_check(this.parcel[interaction_type][interaction_id].validateProperty("consume", this.stored_parcel)));
        DOM_INTERACTION_EDIT.appendChild(consume_button);
    }
    renderCharge(charge_id) {
        this.renderChargeList();
        // Render charge
        console.log("Rendering charge");
    }
    renderSet(interaction_type, interaction_id, set_type) {
        this.renderInteraction(interaction_type, interaction_id);
        // Render set
        // for each item (a [parcel id, quantity pair]) render a wrapped select with options for each parcel in this.stored_parcel as well as a number input
        // set the option to the parcel id
        // set the number input to the quantity
        // generate select (for use in multiple of the set)
        const select = document.createElement("select");
        for(const i in this.stored_parcel){
            const option = document.createElement("option");
            option.value = this.stored_parcel[i];
            option.text = this.stored_parcel[i];
            select.appendChild(option);
        }
        const firstOption = this.stored_parcel[0];
        console.log(firstOption);
        DOM_INTERACTION_SET.innerHTML = "<h2>" + (0, _utilDefault.default).capitalise_first_word(set_type) + "</h2>";
        // render sets
        for(const i in this.parcel[interaction_type][interaction_id][set_type]){
            const wrapper = document.createElement("div");
            // Add select
            const new_select = select.cloneNode(true);
            new_select.value = this.parcel[interaction_type][interaction_id][set_type][i][0] || firstOption;
            new_select.addEventListener("change", ()=>{
                this.parcel[interaction_type][interaction_id][set_type][i][0] = new_select.value || firstOption;
                this.renderSet(interaction_type, interaction_id, set_type);
            });
            wrapper.appendChild(new_select);
            // Add number input
            const number_input = document.createElement("input");
            number_input.type = "number";
            number_input.min = "1";
            number_input.value = String(this.parcel[interaction_type][interaction_id][set_type][i][1]) || "1";
            number_input.addEventListener("change", ()=>{
                this.parcel[interaction_type][interaction_id][set_type][i][1] = parseInt(number_input.value) || 1;
                this.renderSet(interaction_type, interaction_id, set_type);
            });
            wrapper.appendChild(number_input);
            // Add delete button
            const delete_button = document.createElement("button");
            delete_button.innerHTML = "X";
            delete_button.addEventListener("click", ()=>{
                this.parcel[interaction_type][interaction_id][set_type].splice(i, 1);
                this.renderSet(interaction_type, interaction_id, set_type);
            });
            wrapper.appendChild(delete_button);
            DOM_INTERACTION_SET.appendChild(wrapper);
        }
        // button to create new sets
        const newSetButton = document.createElement("button");
        newSetButton.innerHTML = "Add Set";
        newSetButton.addEventListener("click", ()=>{
            this.parcel[interaction_type][interaction_id][set_type].push([
                firstOption,
                1
            ]);
            this.renderSet(interaction_type, interaction_id, set_type);
        });
        DOM_INTERACTION_SET.appendChild(newSetButton);
    }
}

},{"./type":"dvXpQ","./parcels":"9A8k2","./properties":"hPbq1","./util":"88OCH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dvXpQ":[function(require,module,exports) {
// ? Resource, Structure, Research, or Unique
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "regexID", ()=>regexID);
parcelHelpers.export(exports, "regexName", ()=>regexName);
parcelHelpers.export(exports, "regexFullID", ()=>regexFullID);
const regexID = new RegExp("^[a-z]([a-z_]*[a-z])?$");
const regexName = new RegExp("^[a-zA-Z](?:[a-zA-Z ]*[a-zA-Z])?$");
const regexFullID = new RegExp(`^(resource|structure|research|unique)\:(([a-z]([a-z_]*[a-z])?))$`);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"9A8k2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// ? Parcel variant for resources
// resources are always of type resource
// owned is the amount of the resource in the players possession
// interactions are methods to aquire the resource
parcelHelpers.export(exports, "parcel_resource", ()=>parcel_resource);
parcelHelpers.export(exports, "parcel_structure", ()=>parcel_structure);
parcelHelpers.export(exports, "parcel_research", ()=>parcel_research);
parcelHelpers.export(exports, "parcel_unique", ()=>parcel_unique);
var _type = require("./type");
// ? The base abstract parcel class
// save() loads all properties into localStorage
// load(full id) tries to load the provided id into itself
// validate_parcel() checks that all properties of the abstract parcel class are valid
class parcel {
    constructor(id, type, name){
        this.id = id;
        this.type = type;
        this.name = name;
        this.unlocked = false;
        this.interactions = [];
    }
    validate_parcel() {
        let report = [];
        if (!(0, _type.regexID).test(this.id)) report.push([
            "invalid",
            "ID is invalid."
        ]);
        if (!(0, _type.regexName).test(this.name)) report.push([
            "warning",
            "Name is invalid."
        ]);
        report = [
            ...report,
            ...this.validate_self()
        ];
        for(const i in this.interactions)report = [
            ...report,
            ...this.validate_interaction[this.interactions[i]]
        ];
        return report;
    }
    validate_interaction(target) {
        let report = [];
        console.log(target);
        for(const i in this[target]){
            const result = this[target][i].validate();
            report = [
                ...report,
                ...result
            ];
        }
        return report;
    }
}
class parcel_resource extends parcel {
    constructor(id, name){
        super(id, "resource", name);
        this.id = id;
        this.name = name;
        this.type = "resource";
        this.owned = 0;
        this.interactions = [
            "interaction_buy",
            "interaction_sell",
            "interaction_craft",
            "interaction_generate"
        ];
        this.interaction_buy = [];
        this.interaction_sell = [];
        this.interaction_craft = [];
        this.interaction_generate = [];
    }
    validate_self() {
        let report = [];
        report.push(validate_not_negative(this.owned, "Owned"));
        if (this.interaction_buy.length === 0 && this.interaction_craft.length === 0 && this.interaction_generate.length === 0) report.push([
            "warning",
            "Interaction is missing a aquisition interaction."
        ]);
        for(let i = 0; i < this.interaction_buy.length; i++)report = [
            ...report,
            ...this.interaction_buy[i].validate()
        ];
        for(let i = 0; i < this.interaction_sell.length; i++)report = [
            ...report,
            ...this.interaction_sell[i].validate()
        ];
        for(let i = 0; i < this.interaction_craft.length; i++)report = [
            ...report,
            ...this.interaction_craft[i].validate()
        ];
        for(let i = 0; i < this.interaction_generate.length; i++)report = [
            ...report,
            ...this.interaction_generate[i].validate()
        ];
        return report;
    }
}
class parcel_structure extends parcel {
    constructor(id, name){
        super(id, "structure", name);
        this.id = id;
        this.name = name;
        this.type = "structure";
        this.owned = 0;
        this.interactions = [
            "interaction_buy",
            "interaction_sell",
            "interaction_craft",
            "interaction_generate"
        ];
        this.interaction_buy = [];
        this.interaction_sell = [];
        this.interaction_craft = [];
        this.interaction_generate = [];
    }
    validate_self() {
        let report = [];
        report.push(validate_not_negative(this.owned, "Owned"));
        return report;
    }
}
class parcel_research extends parcel {
    constructor(id, name){
        super(id, "research", name);
        this.id = id;
        this.name = name;
        this.type = "research";
        this.interactions = [
            "interaction_craft"
        ];
        this.interaction_craft = [];
    }
    validate_self() {
        if (this.interaction_craft.length === 0) return [
            [
                "warning",
                "Interaction is missing a craft interaction."
            ]
        ];
        return [];
    }
}
class parcel_unique extends parcel {
    constructor(id, name){
        super(id, "unique", name);
        this.id = id;
        this.name = name;
        this.type = "unique";
        this.owned = 0;
    }
    validate_self() {
        return [];
    }
}
function validate_not_negative(property, property_name) {
    if (property < 0) return [
        "invalid",
        `${property_name} is negative or undefined.`
    ];
    return [
        "valid",
        `${property_name} is equal to or greater than zero.`
    ];
}

},{"./type":"dvXpQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hPbq1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// =? Interactions
// Interactions are the requirements for possible actions on the parcel.
// This entails the requirements to buy, sell, create and craft an existence of a parcel
parcelHelpers.export(exports, "interaction", ()=>interaction);
// =? Charges
// Charges are a property of structures
// When an interaction is applied, if a structure is needed then that structure will begin working on the interaction
// the total charge defines the speed at which
parcelHelpers.export(exports, "charge", ()=>charge);
class interaction {
    validate() {
        let report = [];
        if (this.result.length === 0) report.push([
            "warning",
            "Interaction is missing a result."
        ]);
        if (this.require.length === 0 && this.consume.length === 0) report.push([
            "warning",
            "Interaction is missing a requirement or consumption."
        ]);
        return report;
    }
    validateProperty(property, validIds) {
        let report = [];
        if (property == "result") {
            if (this.result.length === 0) report.push([
                "warning",
                "Interaction is missing a result."
            ]);
        } else if (this.require.length === 0 && this.consume.length === 0) report.push([
            "warning",
            "Interaction is missing a requirement or consumption."
        ]);
        report = [
            ...report,
            ...this.validateSubproperties(validIds)
        ];
        // console.table(report);
        return report;
    }
    validateSubproperties(validIds) {
        let report = [];
        let properties = [
            "result",
            "require",
            "consume"
        ];
        for (const property of properties){
            // if any of the ids are not valid, report an error
            for(const i in this[property])if (!validIds.includes(this[property][i][0])) report.push([
                "warning",
                "Invalid " + property + " ID: " + this[property][i][0]
            ]);
            // if any of the ids are 0 give invalid, if less than 0 give warning
            for(const i in this[property]){
                if (this[property][i][1] <= 0) report.push([
                    "invalid",
                    "Invalid " + property + " quantity: " + this[property][i][1]
                ]);
                else if (this[property][i][1] < 0) report.push([
                    "warning",
                    "Invalid " + property + " quantity: " + this[property][i][1]
                ]);
            }
        }
        return report;
    }
    constructor(){
        this.unlocked = false;
        this.result = [];
        this.require = [];
        this.consume = [];
    }
}
class charge {
    constructor(){
        this.unlocked = false;
        this.count = 0;
        this.effect_add = 0;
        this.effect_multiply = 0;
        this.require = [];
        this.consume = [];
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"88OCH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function id_to_name(id) {
    let name = id.replaceAll("_", " ");
    name = capitalise_all_words(name);
    return name;
}
function capitalise_all_words(source) {
    return source.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
    });
}
function capitalise_first_word(source) {
    return source.charAt(0).toUpperCase() + source.slice(1);
}
function removeSymbols(source) {
    // Replace underscores _ and dashes with spaces
    // replace all other characters with blank
    return source.replaceAll("_", " ").replaceAll("-", " ").replaceAll(/[^a-zA-Z0-9\s]/g, "");
}
function validity_check(reports) {
    let state = "valid";
    for(const i in reports){
        const report_state = reports[i][0];
        if (report_state == "valid") continue;
        else if (report_state == "invalid") state = "invalid";
        else if (report_state == "warning") return "warning";
    }
    return state;
}
exports.default = {
    id_to_name,
    capitalise_all_words,
    capitalise_first_word,
    validity_check,
    removeSymbols
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8X0OO","frsvN"], "frsvN", "parcelRequirea313")

//# sourceMappingURL=index.f0c80aeb.js.map
