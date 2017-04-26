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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
	div : function(a,b){
		return a/b;
	}
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = {
	mul : function(a,b){
		return a*b;
	}
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
	sub : function(a,b){
		return a - b;
	}
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {
	sum : function(a,b){
		return a + b;
	}
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var sum = __webpack_require__(3);
var sub = __webpack_require__(2);
var mul = __webpack_require__(1);
var div = __webpack_require__(0);

var total = sum.sum(30,10);
var total1 = sub.sub(50,20);
var total2 = mul.mul(30,40);
var total3 = div.div(50,10);

var sumdiv,subdiv,muldiv,ddiv;


sumdiv = document.createElement('div');
subdiv = document.createElement('div');
muldiv = document.createElement('div');
ddiv = document.createElement('div');

sumdiv.innerHTML = "SUMATION : " + total;
subdiv.innerHTML = "SUBTRATION : " + total1;
muldiv.innerHTML = "MULTIPLICATION : " + total2;
ddiv.innerHTML = "DIVISION : " + total3;


document.body.appendChild(sumdiv);
document.body.appendChild(subdiv);
document.body.appendChild(muldiv);
document.body.appendChild(ddiv);


/***/ })
/******/ ]);