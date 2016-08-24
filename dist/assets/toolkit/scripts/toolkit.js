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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';
	
	// ================================
	// Slideout Navigation
	// ================================
	
	if (document.getElementById("nav-trigger")) {
	    (function () {
	        var checkNav = function checkNav() {
	            if (document.body.classList.contains('nav-container-active')) {
	                closeNav();
	            } else {
	                openNav();
	            }
	        };
	
	        var closeNav = function closeNav() {
	            document.body.classList.remove('nav-container-active');
	        };
	
	        var openNav = function openNav() {
	            document.body.classList.add('nav-container-active');
	        };
	
	        document.getElementById('nav-trigger').addEventListener('click', checkNav);
	        window.addEventListener("keyup", function (e) {
	            if (e.keyCode == 27) closeNav();
	        }, false);
	    })();
	}
	
	// ================================
	// Accordion list (faq)
	// ================================
	var action = 'click';
	var speed = 300;
	
	$(document).ready(function () {
	
	    // 	question handler
	    $('.question').on(action, function () {
	
	        // get next element
	        $(this).next().slideToggle(speed).siblings('.answer').slideUp(speed);
	
	        // rotate arrow
	        var icon = $(this).children('.petal-icon');
	
	        // remove rotate class
	        $('.petal-icon').not(icon).removeClass('rotate');
	
	        // toggle rotate class
	        icon.toggleClass('rotate');
	    });
	});

/***/ }
/******/ ]);
//# sourceMappingURL=toolkit.js.map