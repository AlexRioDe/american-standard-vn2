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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./scss/style.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n// scss files\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2luZGV4LmpzPzQxZjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc2NzcyBmaWxlc1xuaW1wb3J0ICcuL3Njc3Mvc3R5bGUuc2Nzcyc7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ../node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleNotFoundError: Module not found: Error: Can't resolve '../images/icons/phone_mob.svg' in '/Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/src/scss'\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/webpack/lib/Compilation.js:925:10\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/webpack/lib/NormalModuleFactory.js:401:22\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/webpack/lib/NormalModuleFactory.js:130:21\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/webpack/lib/NormalModuleFactory.js:224:22\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/neo-async/async.js:2830:7\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/neo-async/async.js:6877:13\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/webpack/lib/NormalModuleFactory.js:214:25\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/enhanced-resolve/lib/Resolver.js:213:14\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/enhanced-resolve/lib/Resolver.js:285:5\\n    at eval (eval at create (/Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:13:1)\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:44:7\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/enhanced-resolve/lib/Resolver.js:285:5\\n    at eval (eval at create (/Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:13:1)\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/enhanced-resolve/lib/Resolver.js:285:5\\n    at eval (eval at create (/Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:25:1)\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:67:43\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/enhanced-resolve/lib/Resolver.js:285:5\\n    at eval (eval at create (/Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:14:1)\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/enhanced-resolve/lib/Resolver.js:285:5\\n    at eval (eval at create (/Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:25:1)\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:67:43\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/enhanced-resolve/lib/Resolver.js:285:5\\n    at eval (eval at create (/Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:14:1)\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/enhanced-resolve/lib/Resolver.js:285:5\\n    at eval (eval at create (/Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/tapable/lib/HookCodeFactory.js:33:10), <anonymous>:13:1)\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/enhanced-resolve/lib/DirectoryExistsPlugin.js:27:15\\n    at /Users/evgenij/PhpstormProjects/CenterField/american-standard-vn2/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:85:15\\n    at processTicksAndRejections (internal/process/task_queues.js:79:11)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3NzL3N0eWxlLnNjc3MuanMiLCJzb3VyY2VzIjpbXSwibWFwcGluZ3MiOiIiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./scss/style.scss\n");

/***/ })

/******/ });