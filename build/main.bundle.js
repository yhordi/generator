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
  first: [['To', 'Be', 'Jo', 'Am', 'Da', 'Wo', 'El', 'Al', 'Pa', 'Ra', 'Xa', 'Re', 'Wa', 'Uk', 'Og', 'Po', 'Di', 'Fi', 'Iz', 'Zo'], ['re', 'orn', 'bi', 'shi', 'ru', 'ha', 'da', 'he', 'la', 'x', 'jo', '', 'han', 'ga', 'no', 'vi', 'le', 'qi', 'ex', 's', 'sh', 'cc', 'k', 'ck', 'ia', 'a', 'e', 'i', 'o', 'u'], ['lan', 'tar', 'rf', 'shi', 'ji', 'ro', 'en', 'an', 'do', 'ti', '', 'dyn', 'wyn', 'ia', 'sha', 'kon', 'con', 'ko', 'ka', 'ki', 'ta', 'nil', 'lil', 'yn', 'ugh', 'gh', 'ach', 'et', 'ar', 'lin', 'lyn', 'on', 'am', 's', 'han', 'had', 'has']],
  epic: [['Storm', 'Flame', 'Ice', 'Wind', 'Wood', 'Shadow', 'Night', 'Day', 'Light', 'Mountain', 'Rock', 'Sea', 'Snow', 'Cave'], ['heart', 'hand', 'bringer', 'breaker', 'wrend', 'eye', 'crest', 'fist', 'child', 'born', 'hawk', 'wolf', 'tread']],
  nick: [['The Wicked', 'The Observant', 'The Bold', 'The Brave', 'The Mighty', 'The Alacritous', 'The Buffoon', 'The Wise', 'The Unwise', 'The All-Seeing', 'The Mad', 'The Unruly', 'The Swift', 'The Wretched', 'The Glutton', 'The Hard', 'The Dubious']]
};
exports.libraries = libraries;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _generator = __webpack_require__(0);

var $firstName = $('#first-name');
var $epic = $('#epic-name');
var $nick = $('#nickname');
var $tab = $('#tab');
var keys = [];

$('.menu-item').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('pressed');
  toggleKey($(this));
});

var bindGenerate = function bindGenerate() {
  $('#generate').on('click', function (e) {
    e.preventDefault();
    getKeys('.menu .item-container a').forEach(function (key) {
      $('#' + key + '-name-target').html((0, _generator.generateName)(key));
      $('#' + key + '-name-target').attr('data-toggle', 'true');
      checkName(key);
    });
  });
};

var bindTrashClick = function bindTrashClick() {
  $('.fa-trash').on('click', function (e) {
    e.preventDefault();
    var key = $(e.target).siblings('a')[0].dataset.key;
    removeName(key);
    checkName(key);
  });
};

var removeName = function removeName(key) {
  $('#' + key + '-name-target').html('');
};

var addTrash = function addTrash(listItem) {
  listItem.siblings('span').removeClass('hidden');
};

var removeTrash = function removeTrash(listItem) {
  listItem.siblings('span').addClass('hidden');
};

var checkName = function checkName(key) {
  var $target = $('.sidebar #' + key);
  if ($('#' + key + '-name-target')[0].textContent.length > 0) {
    addTrash($target);
  } else {
    removeTrash($target);
  }
};

$tab.on("click", function () {
  toggleSidebar();
});

$('body').on('click', function (e) {
  if (!$(e.target).closest('.sidebar')) {
    hideSidebar();
  }
});

var toggleKey = function toggleKey($this) {
  if ($this.attr('data-toggle') == 'true') {
    $this.removeAttr('data-toggle');
  } else {
    $this.attr('data-toggle', 'true');
  }
};

var getKeys = function getKeys(parent) {
  var keys = [];
  var $links = $(parent);
  $.each($links, function (index, link) {
    if ($(link).attr('data-toggle') == 'true') {
      keys.push(link.dataset["key"]);
    }
  });
  return keys;
};

var sidebarClick = function sidebarClick() {
  if ($('.offscreen').length == 0) {
    $('#generate').removeAttr('disabled');
  } else {
    $('#generate').prop('disabled', 'true');
  }
};

var hideSidebar = function hideSidebar() {
  $('.sidebar').addClass('offscreen');
};

var toggleSidebar = function toggleSidebar() {
  sidebarClick();
  $('.sidebar').toggleClass('offscreen');
  toggleIcon();
};

var toggleIcon = function toggleIcon() {
  $('#tab').toggleClass('fa-close');
  $('#tab').toggleClass('fa-bars');
};

bindGenerate();
bindTrashClick();
$('#first').click();

/***/ })
/******/ ]);
//# sourceMappingURL=main.bundle.js.map