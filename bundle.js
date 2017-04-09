/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// JavaScript Document
var context;
var words;
var len;
var n = 0;
$(document).ready(function(){
	start();
})
function start(){
	var tmp = n;
	while(tmp==n){
		tmp = Math.floor(madlibs.length*Math.random());
	}
	n = tmp;
	context = madlibs[n];
	words = getItems(context.content||context.original);
	var container = $("<div></div>").attr("id","container");
	var head = $("<h1></h1>").text(context.title);
	head.css("color","white");
	var orderlist = $("<ol></ol>");
	var button = $("<input type=\"button\" class=\"button\" id=\"submit\" value=\"Submit!\" onclick=\"showResult()\">");
	$("#container").empty();
	$("#container").append(head,orderlist,button);
	for(var i=0;i<words.length;i++){
		$("ol").append("<li>"+words[i]+" <input type=\"text\" class=\"item\" id=\"idx"+i+"\">"+"</li><br>");
	}
	len = 0.5*$(".item").width();
	$("input").focus(function(){
		$(this).animate({width:"+="+len+"px"});
		$(this).css("background","pink");
	})
	$("input").blur(function(){
		$(this).animate({width:"-="+len+"px"});
		$(this).css("background","white");
	})
	$("input").keyup(function(event){
		if(event.keyCode==13){
			$(this).parent().next().next().children("input").focus();
			//next().children("input").focus();
		}
	})
}

function showResult(){
	$("#container").fadeOut("fast");
	var content = [];
	for(var i=0;i<words.length;i++){
		var word = ($("#idx"+i).val()||"___").fontcolor("aqua");
		content.push(word);
	}
	var result = $("<p>"+replaceItems(context.content||context.original,content)+"</p>");
	var button = $("<input type=\"button\" class=\"button\" value=\"Retry\" onclick=\"redo()\">");
	$("#resultRegion").empty();
	$("#resultRegion").append(result,button);
	$("#resultRegion").fadeIn("fast");
	$("input").focus(function(){
		$(this).animate({width:"+="+len+"px"});
		$(this).css("background","pink");
	})
	$("input").blur(function(){
		$(this).animate({width:"-="+len+"px"});
		$(this).css("background","white");
	})
}

function redo(){
	$("#resultRegion").fadeOut("fast");
	start();
	$("#container").fadeIn("fast");
//	$("#submit").fadeToggle("fast");
}



/***/ })
/******/ ]);