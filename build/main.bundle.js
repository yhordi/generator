/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateName = undefined;

var _dice = __webpack_require__(1);

var _libraries = __webpack_require__(2);

var generateName = function generateName(libraryName) {
  var library = _libraries.libraries[libraryName];
  return getNameParts(library);
};

var getNameParts = function getNameParts(library) {
  var name = '';
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = library[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var section = _step.value;

      var roll = (0, _dice.die)(section.length);
      name += section[roll];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return name;
};

exports.generateName = generateName;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var die = function die(libraryLength) {
  return Math.floor(Math.random() * libraryLength);
};

exports.die = die;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var libraries = {
  name: [['To', 'Be', 'Jo', 'Am', 'Da', 'Wo', 'El', 'Al', 'Pa', 'Ra', 'Xa', 'Re', 'Wa', 'Uk', 'Og', 'Po', 'Di', 'Fi', 'Iz', 'Zo'], ['re', 'orn', 'bi', 'shi', 'ru', 'ha', 'da', 'he', 'la', 'x', 'jo', '', 'han', 'ga', 'no', 'vi', 'le', 'qi', 'ex', 's'], ['lan', 'tar', 'rf', 'shi', 'ji', 'ro', 'en', 'an', 'do', 'ti', '', 'dyn', 'wyn', 'ia', 'sha', 'ko', 'ka', 'ki', 'ta', 'nil']],
  epicName: [['Storm', 'Flame', 'Ice', 'Wind', 'Wood', 'Shadow', 'Night', 'Day', 'Light', 'Mountain'], ['heart', 'hand', 'bringer', 'breaker', 'wrend', 'eye', 'crest', 'fist', 'child', 'spawn']]
};
exports.libraries = libraries;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _generator = __webpack_require__(0);

var $firstName = $('#first-name');
$firstName.on("click", function () {
  $('#first-name-target').text((0, _generator.generateName)('name'));
});
var $epic = $('#epic-name');
$epic.on("click", function () {
  $('#epic-name-target').text((0, _generator.generateName)('epicName'));
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map