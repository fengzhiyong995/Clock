/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_css-loader@3.5.2@css-loader/dist/cjs.js!./src/css/main.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/_css-loader@3.5.2@css-loader/dist/cjs.js!./src/css/main.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/_css-loader@3.5.2@css-loader/dist/runtime/api.js */ \"./node_modules/_css-loader@3.5.2@css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"*{\\r\\n    margin: 0;padding: 0;\\r\\n}\\r\\nbody{\\r\\n    background-color: rgb(39, 39, 39);\\r\\n}\\r\\nul{\\r\\n    list-style: none;\\r\\n}\\r\\n.clockUnder{\\r\\n    margin: 200px auto 10px;width: 250px;height: 250px;background-color: rgb(223, 223, 223);\\r\\n    box-sizing: border-box;position: relative;border-radius: 57px;box-shadow: 0 0 2px rgb(228, 228, 228);\\r\\n    overflow: hidden;\\r\\n}\\r\\n.clockUnder .bgc{\\r\\n    width: 300px;height: 300px;background-color: rgba(177, 177, 177, 0.11);position: absolute;\\r\\n    bottom: -120px;right:-100px;border-top-left-radius: 50%;\\r\\n}\\r\\n.clockUnder .clockMid{\\r\\n    width: 206px;height: 206px;box-sizing: border-box;\\r\\n    position: absolute;top: 22px;left: 22px;border-radius: 50%;box-shadow:  0 0 10px rgba(187, 187, 187, 0.527);\\r\\n    background-image: radial-gradient(rgba(255, 255, 255, 0.726) 30%,rgb(223, 223, 223));\\r\\n}\\r\\n.clockUnder .clockUp{\\r\\n    width: 186px;height: 186px;background-color: rgb(221, 221, 221);box-sizing: border-box;\\r\\n    position: absolute;top: 10px;left: 10px;border-radius: 50%;border: 3px solid rgb(255, 255, 255);\\r\\n    box-shadow: inset 0 0 10px rgb(148, 148, 148);\\r\\n}\\r\\n.clockUnder .clockScale{\\r\\n    width: 156px;height:156px;background-color: rgba(255, 0, 0, 0);position: absolute;box-sizing: border-box;\\r\\n    border-radius: 50%;top:12px;left: 12px;\\r\\n}\\r\\n.clockUnder .clockScale li{\\r\\n    height: 6px;width:100%;display: flex;align-items: center;justify-content: space-between;\\r\\n    position: absolute;top:75px;background-color: rgba(155, 65, 65, 0);\\r\\n}\\r\\n.clockUnder .clockScale li span{\\r\\n    display: inline-block;width: 4px;height: 1px;background-color: rgb(165, 165, 165);\\r\\n}\\r\\n.clockUnder .clockScale li:nth-child(5n+1) span{\\r\\n    width: 6px;height: 2px;background-color: rgb(133, 133, 133);\\r\\n}\\r\\n.clockUnder .clockPointer{\\r\\n    width: inherit;height: inherit;\\r\\n}\\r\\n.clockUnder .clockPointer .clockAlarm{\\r\\n    height: 4px;width: 26%;position: absolute;background-color: rgb(124, 124, 124);\\r\\n    border-radius: 2px;top:88px;left: 50%;box-shadow: 0 0 2px rgba(122, 122, 122, 0.568);\\r\\n    transform: rotate(-90deg);transform-origin: 0 center;\\r\\n}\\r\\n .clockUnder .clockPointer .clockHouer{\\r\\n    height: 6px;width: 31%;position: absolute;background-color: rgb(51, 51, 51);\\r\\n    border-radius: 3px;top:87px;left: 50%;box-shadow: 0 0 2px rgba(46, 46, 46, 0.308);\\r\\n    transform: rotate(-90deg);transform-origin : 0 center;\\r\\n}\\r\\n.clockUnder .clockPointer .clockMinute{\\r\\n    height: 4px;width: 38%;position: absolute;background-color: rgb(51, 51, 51);\\r\\n    border-radius: 2px;top:88px;left: 50%;box-shadow: 0 0 4px rgba(46, 46, 46, 0.308);\\r\\n    transform: rotate(-90deg);transform-origin : 0 center;\\r\\n} \\r\\n.clockUnder .clockPointer .clockAxis{\\r\\n    position: absolute;width: 22px;height:22px;background-image: radial-gradient(white 40%,rgba(167, 167, 167, 0.664));\\r\\n    border-radius: 50%;top:79px;left: 79px;box-shadow: 0 0 5px rgba(173, 173, 173, 0.644);\\r\\n }\\r\\n.clockUnder .clockPointer .clockSecond{\\r\\n    width: inherit;height: inherit;display: flex;position: absolute;align-items: center;\\r\\n    transform: rotate(-90deg);transform-origin: 90px 90px;\\r\\n}\\r\\n.clockUnder .clockPointer .clockSecond .one{\\r\\n    width: 18px;height: 10px;background-color: red;border-radius: 5px;position:absolute;\\r\\n    right: 50%;top: 85px;box-shadow: 0 0 2px rgba(192, 192, 192, 0.521);\\r\\n}\\r\\n.clockUnder .clockPointer .clockSecond .two{\\r\\n    width: 16px;height: 16px;background-color: red;border-radius: 50%;position: absolute;\\r\\n    top: 82px;left: 82px;box-shadow: 0 0 2px rgba(192, 192, 192, 0.521);\\r\\n}\\r\\n.clockUnder .clockPointer .clockSecond .three{\\r\\n    width: 40%;height: 1px;background-color: red;position: absolute;\\r\\n    top: 89.5px;left: 50%;box-shadow: 0 0 2px rgba(192, 192, 192, 0.521);\\r\\n}\\r\\n.alarm{\\r\\n    width:200px;margin: 0 auto;display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n.alarm input[type = 'text']{\\r\\n    display:block;width: 100px;text-align: right;border: none;\\r\\n    border-radius: 2px;padding: 1px 2px;\\r\\n}\\r\\n.alarm .select{\\r\\n    display: flex;width: 80px;justify-content: space-between;\\r\\n}\\r\\n.alarm input[type = 'button']{\\r\\n    width: 45%;background-color: rgb(223, 223, 223) ;border: none;\\r\\n    border-radius: 4px;padding: 2px 4px;\\r\\n}\\r\\n@media screen and (max-width : 768px){\\r\\n    .clockUnder{\\r\\n        margin: 20px auto 10px;\\r\\n    }    \\r\\n}\\r\\n@media screen and (max-width : 992px) and (min-width : 769px){\\r\\n    .clockUnder{\\r\\n        margin: 50px auto 10px;\\r\\n    }    \\r\\n}\\r\\n@media screen and (max-width : 1200px) and (min-width : 993px){\\r\\n    .clockUnder{\\r\\n        margin: 100px auto 10px;\\r\\n    }    \\r\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/main.css?./node_modules/_css-loader@3.5.2@css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/_css-loader@3.5.2@css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/_css-loader@3.5.2@css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/_css-loader@3.5.2@css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/_style-loader@1.1.3@style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/_css-loader@3.5.2@css-loader/dist/cjs.js!./main.css */ \"./node_modules/_css-loader@3.5.2@css-loader/dist/cjs.js!./src/css/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/main.css?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_0__);\n\r\nclass buJu{\r\n    construtor(){\r\n\r\n    }\r\n    static liRotate(){\r\n        let li = document.querySelectorAll('.clockUnder .clockScale li');\r\n        let initDeg = 6;\r\n        for(let y = 1;y<li.length;y++){\r\n            li[y].style.setProperty('transform','rotate(' + initDeg + 'deg)');\r\n            initDeg += 6;\r\n        }\r\n    }\r\n\r\n}\r\nclass clockGn{\r\n    constructor(){\r\n\r\n    }\r\n    getTime(d){\r\n        let time = [];\r\n        time.push(d.getHours(),d.getMinutes(),d.getSeconds());\r\n        return time;\r\n    }\r\n    houerDeg(d){\r\n        let time = this.getTime(d);\r\n        let houer = time[0];\r\n        let minute = time[1];\r\n        let add = 0;\r\n        add = Number(~~(minute / 2));\r\n        let deg = [0,30,60,90,120,150,180,210,240,270,300,330,360,30,60,90,120,150,180,210,240,270,300,330,360];\r\n        deg[houer] = initDeg + deg[houer] + add;\r\n        return deg[houer];\r\n    }\r\n    minuteDegAndsecondDeg(d){\r\n        let time = this.getTime(d);\r\n        let minute = time[1];\r\n        let second = time[2];\r\n        let deg = [];\r\n        deg.push(initDeg + minute*6,initDeg + second*6);\r\n        return deg;\r\n    }\r\n    secondDeg(){\r\n\r\n    }\r\n    alarmDeg(d){\r\n        clockAlarm.style.setProperty('transform','rotate(' + this.houerDeg(date) + 'deg)');\r\n    }\r\n    alarm(){\r\n        let a = getComputedStyle(clockAlarm,null).transform;\r\n        let b = getComputedStyle(clockHouer,null).transform;\r\n        a === b?window.close():'';\r\n    }\r\n    setDeg(){\r\n        clockHouer.style.setProperty('transform','rotate(' + this.houerDeg(date) + 'deg)');\r\n        clockMinute.style.setProperty('transform','rotate(' + this.minuteDegAndsecondDeg(date)[0] + 'deg)');\r\n        clockSecond.style.setProperty('transform','rotate(' + this.minuteDegAndsecondDeg(date)[1] + 'deg)');\r\n    }\r\n}\r\n\r\nbuJu.liRotate();\r\n\r\n\r\nvar date = new Date();\r\nvar gN = new clockGn();\r\nvar initDeg = -90;\r\nvar clockHouer = document.querySelector('.clockUnder .clockHouer');\r\nvar clockMinute = document.querySelector('.clockUnder .clockMinute');\r\nvar clockSecond = document.querySelector('.clockUnder .clockSecond');\r\nvar clockAlarm = document.querySelector('.clockUnder .clockAlarm');\r\nvar alarm = document.querySelector('.alarm');\r\ngN.setDeg();\r\nvar timer;\r\ntimer = setInterval(() => {\r\n    date = new Date();\r\n    gN.setDeg();\r\n    gN.alarm();\r\n}, 1000);\r\nalarm.addEventListener('click',function(e){\r\n    let ele = e.target.className;\r\n    switch(ele){\r\n        case 'yes': \r\n            let val = document.querySelector('.alarm .text');\r\n            let reg = /^(?:(?:0?[\\d]{1})||(?:1{1}[\\d]{1})||(?:2{1}[0-4]{1})):(?:(?:[0-5]*[\\d]{1})||(?:60))$/g;\r\n            let ss;\r\n            let d = reg.exec(val.value);\r\n            d !== null?(ss = d[0].split(':'),\r\n                    date.setHours(ss[0],ss[1]),\r\n                    gN.alarmDeg(date)):alert('你要设置成“小时:分钟”');\r\n            break;\r\n        case 'no' : \r\n            let text = document.querySelector('.alarm .text');\r\n            text.value = '';\r\n            break;\r\n        default: ;\r\n    }\r\n},false)\r\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ })

/******/ });