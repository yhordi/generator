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
exports.generateEpicName = exports.generateFirstName = undefined;

var _dice = __webpack_require__(2);

var generateFirstName = function generateFirstName(library) {
  return library.first[(0, _dice.d20)()] + library.second[(0, _dice.d20)()] + library.third[(0, _dice.d20)()];
};
var generateEpicName = function generateEpicName(library) {
  return library.first[(0, _dice.d10)()] + library.second[(0, _dice.d10)()];
};

exports.generateFirstName = generateFirstName;
exports.generateEpicName = generateEpicName;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var syllables = {
  first: ['To', 'Be', 'Jo', 'Am', 'Da', 'Wo', 'El', 'Al', 'Pa', 'Ra', 'Xa', 'Re', 'Wa', 'Uk', 'Og', 'Po', 'Di', 'Fi', 'Iz', 'Zo'],
  second: ['re', 'orn', 'bi', 'shi', 'ru', 'ha', 'da', 'he', 'la', 'x', 'jo', '', 'han', 'ga', 'no', 'vi', 'le', 'qi', 'ex', 's'],
  third: ['lan', 'tar', 'rf', 'shi', 'ji', 'ro', 'en', 'an', 'do', 'ti', '', 'dyn', 'wyn', 'ia', 'sha', 'ko', 'ka', 'ki', 'ta', 'nil']
};

var epicName = {
  first: ['Storm', 'Flame', 'Ice', 'Wind', 'Wood', 'Shadow', 'Night', 'Day', 'Light', 'Mountain'],
  second: ['heart', 'hand', 'bringer', 'breaker', 'wrend', 'eye', 'crest', 'fist', 'child', 'spawn']
};

exports.syllables = syllables;
exports.epicName = epicName;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var die = function die(sides) {
  return Math.floor(Math.random() * sides);
};

var d4 = function d4() {
  return die(4);
};
var d6 = function d6() {
  return die(6);
};
var d10 = function d10() {
  return die(10);
};
var d12 = function d12() {
  return die(12);
};
var d20 = function d20() {
  return die(20);
};
var d100 = function d100() {
  return die(100);
};

exports.die = die;
exports.d4 = d4;
exports.d6 = d6;
exports.d10 = d10;
exports.d12 = d12;
exports.d20 = d20;
exports.d100 = d100;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _generator = __webpack_require__(0);

var _libraries = __webpack_require__(1);

var $firstName = $('#first-name');
$firstName.on("click", function () {
  $('#first-name-target').text((0, _generator.generateFirstName)(_libraries.syllables));
});
var $epic = $('#epic-name');
$epic.on("click", function () {
  $('#epic-name-target').text((0, _generator.generateEpicName)(_libraries.epicName));
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map