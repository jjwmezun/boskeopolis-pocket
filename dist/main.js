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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/autumn.js":
/*!***********************!*\
  !*** ./src/autumn.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\n\n\nclass Autumn\n{\n\tconstructor( renderer )\n\t{\n\t\tthis.x = 0;\n\t\tthis.y = 0;\n\t\tthis.vx = 0;\n\t\tthis.vy = 0;\n\t\tthis.accx = 0;\n\t\tthis.accy = 0;\n\t\tthis.width = 16;\n\t\tthis.height = 25;\n\t\tthis.bounce = 0.14;\n\t\trenderer.addSprite( 'autumn', new _sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"]( 'img/autumn.png', 32, 32, this.width, this.height ) );\n\t}\n\n\tupdate( input, renderer, block )\n\t{\n\t\tthis.updateX( input, block );\n\t\tthis.updateY( input, block );\n\t\tthis.updateGraphics( renderer );\n\t}\n\n\tupdateX( input, block )\n\t{\n\t\tif ( input.pressed.right )\n\t\t{\n\t\t\tthis.accx = 0.25;\n\t\t}\n\t\telse if ( input.pressed.left )\n\t\t{\n\t\t\tthis.accx = -0.25;\n\t\t}\n\t\telse\n\t\t{\n\t\t\tthis.accx = 0;\n\t\t\tthis.vx /= 1.05;\n\t\t}\n\t\tthis.vx = Math.max( Math.min( this.vx + this.accx, 4 ), -4 );\n\n\t\tlet nextX = this.x + this.vx;\n\t\tconst xTest = ( this.vx < 0 ) ? nextX : nextX + this.width;\n\t\tif ( xTest < 0 || xTest >= _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WindowWidthPixels || block.xInSolid( xTest, this.y, this.height ) )\n\t\t{\n\t\t\tthis.vx *= -this.bounce;\n\t\t\tnextX = this.x + this.vx;\n\t\t}\n\t\tthis.x = nextX;\n\t}\n\n\tupdateY( input, block )\n\t{\n\t\tif ( input.pressed.down )\n\t\t{\n\t\t\tthis.accy = 0.25;\n\t\t}\n\t\telse if ( input.pressed.up )\n\t\t{\n\t\t\tthis.accy = -0.25;\n\t\t}\n\t\telse\n\t\t{\n\t\t\tthis.accy = 0;\n\t\t\tthis.vy /= 1.05;\n\t\t}\n\t\tthis.vy = Math.max( Math.min( this.vy + this.accy, 4 ), -4 );\n\n\t\tlet nextY = this.y + this.vy;\n\t\tif ( this.vy > 0 )\n\t\t{\n\t\t\tconst testY = nextY + this.height;\n\t\t\tif ( testY >= _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WindowHeightPixels )\n\t\t\t{\n\t\t\t\tthis.vy *= -this.bounce;\n\t\t\t\tnextY = this.y + this.vy;\n\t\t\t}\n\t\t\telse if ( block.yInSolid( testY, this.x, this.width ) )\n\t\t\t{\n\t\t\t\tthis.vy = 0;\n\t\t\t\tnextY = ( Math.ceil( nextY / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize ) + 1 ) * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize - this.height;\n\t\t\t}\n\t\t}\n\t\telse if ( this.vy < 0 )\n\t\t{\n\t\t\tif ( nextY < 0 )\n\t\t\t{\n\t\t\t\tthis.vy *= -this.bounce;\n\t\t\t\tnextY = this.y + this.vy;\n\t\t\t}\n\t\t\telse if ( block.yInSolid( nextY, this.x, this.width ) )\n\t\t\t{\n\t\t\t\tthis.vy *= -this.bounce;\n\t\t\t\tnextY = this.y + this.vy;\n\t\t\t}\n\t\t}\n\t\tthis.y = nextY;\n\t}\n\n\tupdateGraphics( renderer )\n\t{\n\t\tconst image = renderer.getSprite( 'autumn' );\n\t\tif ( image )\n\t\t{\n\t\t\timage.x = Math.floor( this.x );\n\t\t\timage.y = Math.floor( this.y );\n\t\t}\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Autumn);\n\n\n//# sourceURL=webpack:///./src/autumn.js?");

/***/ }),

/***/ "./src/block.js":
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\n\n\nclass Block\n{\n\tconstructor( x, y, w, h, renderer )\n\t{\n\t\tthis.initializeImage( x, y, w, h, renderer );\n\t\tthis.x = x;\n\t\tthis.y = y;\n\t\tthis.width = w;\n\t\tthis.height = h;\n\t\tthis.initializeBlockGrid( renderer.canvas.width, renderer.canvas.height );\n\t}\n\n\tinitializeBlockGrid( width, height )\n\t{\n\t\tthis.blockGrid = [];\n\t\tfor ( let y = 0; y < height; y++ )\n\t\t{\n\t\t\tthis.blockGrid.push( [] );\n\t\t\tfor ( let x = 0; x < width; x++ )\n\t\t\t{\n\t\t\t\tlet value = ( y >= this.y && y < this.y + this.height && x >= this.x && x < this.x + this.width ) ? 1 : 0;\n\t\t\t\tthis.blockGrid[ y ].push( value );\n\t\t\t}\n\t\t}\n\t}\n\n\tinitializeImage( xOrigin, yOrigin, wBlocks, hBlocks, renderer )\n\t{\n\t\tconst width = wBlocks * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize;\n\t\tconst height = hBlocks * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize;\n\t\tconst tempCanvas = document.getElementById( 'tempCanvas' );\n\t\tconst tempContext = tempCanvas.getContext( '2d' );\n\t\ttempCanvas.height = height;\n\t\ttempCanvas.width = width;\n\t\tconst blockSprite = new _sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"]( 'img/urban.png', 0, 0, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, 0, 0 );\n\t\tblockSprite.image.onload = function()\n\t\t{\n\t\t\tfor ( let y = 0; y < tempCanvas.height; y += _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize )\n\t\t\t{\n\t\t\t\tblockSprite.current_frame_x = ( y === 0 ) ? 0 : _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize;\n\t\t\t\tfor ( let i = 0; i < tempCanvas.width; i += _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize )\n\t\t\t\t{\n\t\t\t\t\tblockSprite.x = i;\n\t\t\t\t\tblockSprite.y = y;\n\t\t\t\t\ttempContext.drawImage\n\t\t\t\t\t(\n\t\t\t\t\t\tblockSprite.image,\n\t\t\t\t\t\tblockSprite.current_frame_x, blockSprite.current_frame_y, blockSprite.width, blockSprite.height,\n\t\t\t\t\t\tblockSprite.x, blockSprite.y, blockSprite.width, blockSprite.height\n\t\t\t\t\t);\n\t\t\t\t}\n\t\t\t}\n\t\t\tconst data = tempCanvas.toDataURL();\n\t\t\trenderer.addSprite( 'block0', new _sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"]( data, xOrigin * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, yOrigin * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, width, height ) );\n\t\t}\n\t}\n\n\txInSolid( x, y, height )\n\t{\n\t\theight -= 1;\n\t\tconst xBlocks = Math.floor( x / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize );\n\t\tconst yStartBlocks = Math.floor( y / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize );\n\t\tconst yEndBlocks = Math.floor( ( y + height ) / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize );\n\t\tfor ( let y = yStartBlocks; y <= yEndBlocks; y++ )\n\t\t{\n\t\t\tif ( this.blockGrid[ y ][ xBlocks ] === 1 )\n\t\t\t{\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\n\tyInSolid( y, x, width )\n\t{\n\t\tconst yBlocks = Math.floor( y / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize );\n\t\tconst xStartBlocks = Math.floor( x / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize );\n\t\tconst xEndBlocks = Math.ceil( ( x + width ) / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize );\n\t\tfor ( let x = xStartBlocks; x < xEndBlocks; x++ )\n\t\t{\n\t\t\tif ( this.blockGrid[ yBlocks ][ x ] === 1 )\n\t\t\t{\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Block);\n\n\n//# sourceURL=webpack:///./src/block.js?");

/***/ }),

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Config = ( function()\n{\n\tconst BlockSize = 16;\n\tconst WindowWidthBlocks = 25;\n\tconst WindowHeightBlocks = 14;\n\n\treturn Object.freeze\n\t({\n\t\tBlockSize: BlockSize,\n\t\tWindowWidthBlocks: WindowWidthBlocks,\n\t\tWindowHeightBlocks: WindowHeightBlocks,\n\t\tWindowWidthPixels: WindowWidthBlocks * BlockSize,\n\t\tWindowHeightPixels: WindowHeightBlocks * BlockSize\n\t});\n}\n)();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Config);\n\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer */ \"./src/renderer.js\");\n/* harmony import */ var _autumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autumn */ \"./src/autumn.js\");\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block */ \"./src/block.js\");\n\n\n\n\n\n\nconst input = new _input__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst renderer = new _renderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]( _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WindowWidthPixels, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WindowHeightPixels );\nconst autumn = new _autumn__WEBPACK_IMPORTED_MODULE_3__[\"default\"]( renderer );\nconst block = new _block__WEBPACK_IMPORTED_MODULE_4__[\"default\"]( 8, 4, 4, 4, renderer );\n\nwindow.requestAnimationFrame( execute );\nfunction execute()\n{\n\tupdate();\n\trender();\n\twindow.requestAnimationFrame( execute );\n}\n\nfunction update()\n{\n\trenderer.bringSpriteToFront( 'autumn' );\n\tautumn.update( input, renderer, block );\n}\n\nfunction render()\n{\n\trenderer.render();\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst generateRegistrar = function( value )\n{\n\treturn function( e )\n\t{\n\t\tfor ( const key in this.keys )\n\t\t{\n\t\t\tconst keyCode = this.keys[ key ];\n\t\t\tif ( e.keyCode === keyCode )\n\t\t\t{\n\t\t\t\tthis.pressed[ key ] = value;\n\t\t\t}\n\t\t}\n\t}\n};\n\nclass Input\n{\n\tconstructor()\n\t{\n\t\tthis.registerPress = generateRegistrar( true );\n\t\tthis.registerRelease = generateRegistrar( false );\n\n\t\tthis.keys =\n\t\t{\n\t\t\tleft: 37,\n\t\t\tup: 38,\n\t\t\tright: 39,\n\t\t\tdown: 40\n\t\t};\n\n\t\tthis.pressed =\n\t\t{\n\t\t\tleft: false,\n\t\t\tup: false,\n\t\t\tright: false,\n\t\t\tdown: false\n\t\t};\n\n\t\twindow.addEventListener\n\t\t(\n\t\t\t'keydown',\n\t\t\tthis.registerPress.bind( this )\n\t\t);\n\t\twindow.addEventListener\n\t\t(\n\t\t\t'keyup',\n\t\t\tthis.registerRelease.bind( this )\n\t\t);\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n\nclass Renderer\n{\n\tconstructor( width, height )\n\t{\n\t\tthis.canvas = document.getElementById( 'canvas' );\n\t\tthis.context = this.canvas.getContext( '2d' );\n\t\tthis.canvas.setAttribute( 'width', width );\n\t\tthis.canvas.setAttribute( 'height', height );\n\t\tthis.spriteList = [];\n\t\tthis.spriteMap = {};\n\t}\n\n\taddSprite( name, sprite )\n\t{\n\t\tsprite.image.onload = function()\n\t\t{\n\t\t\tthis.spriteList.push( sprite );\n\t\t\tthis.spriteMap[ name ] = this.spriteList.length - 1;\n\t\t}.bind( this );\n\t}\n\n\tgetSprite( name )\n\t{\n\t\treturn this.spriteList[ this.spriteMap[ name ] ];\n\t}\n\n\tgetSpriteNameByIndex( index )\n\t{\n\t\tfor ( const name in this.spriteMap )\n\t\t{\n\t\t\tif ( this.spriteMap[ name ] === index )\n\t\t\t{\n\t\t\t\treturn name;\n\t\t\t}\n\t\t}\n\t\treturn null;\n\t}\n\n\tbringSpriteToFront( name )\n\t{\n\t\tif ( name in this.spriteMap )\n\t\t{\n\t\t\tconst spriteIndex = this.spriteMap[ name ];\n\t\t\tconst sprite = this.spriteList[ spriteIndex ];\n\t\t\tfor ( let i = spriteIndex; i < this.spriteList.length - 1; i++ )\n\t\t\t{\n\t\t\t\tthis.spriteList[ i ] = this.spriteList[ i + 1 ];\n\t\t\t\tthis.spriteMap[ this.getSpriteNameByIndex[ i + 1 ] ] = i;\n\t\t\t}\n\t\t\tthis.spriteList[ this.spriteList.length - 1 ] = sprite;\n\t\t\tthis.spriteMap[ name ] = this.spriteList.length - 1;\n\t\t}\n\t}\n\n\trender()\n\t{\n\t\tthis.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );\n\t\tthis.context.fillStyle = '#ccbbff';\n\t\tthis.context.fillRect( 0, 0, this.canvas.width, this.canvas.height );\n\t\tfor ( const sprite of this.spriteList )\n\t\t{\n\t\t\tthis.context.drawImage\n\t\t\t(\n\t\t\t\tsprite.image,\n\t\t\t\tsprite.current_frame_x, sprite.current_frame_y, sprite.width, sprite.height,\n\t\t\t\tsprite.x, sprite.y, sprite.width, sprite.height\n\t\t\t);\n\t\t}\n\t}\n\n\tshowGrid( block )\n\t{\n\t\tthis.context.fillStyle = 'rgba( 0, 255, 0, 0.5 )';\n\t\tfor ( let y = 0; y < block.blockGrid.length; y++ )\n\t\t{\n\t\t\tfor ( let x = 0; x < block.blockGrid[ y ].length; x++ )\n\t\t\t{\n\t\t\t\tconst blockValue = block.blockGrid[ y ][ x ];\n\t\t\t\tif ( blockValue > 0 )\n\t\t\t\t{\n\t\t\t\t\tthis.context.fillRect( x * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, y  * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Renderer);\n\n\n//# sourceURL=webpack:///./src/renderer.js?");

/***/ }),

/***/ "./src/sprite.js":
/*!***********************!*\
  !*** ./src/sprite.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Sprite\n{\n\tconstructor( name, x, y, width, height, current_frame_x = 0, current_frame_y = 0 )\n\t{\n\t\tthis.x = x;\n\t\tthis.y = y;\n\t\tthis.width = width;\n\t\tthis.height = height;\n\t\tthis.current_frame_x = current_frame_x;\n\t\tthis.current_frame_y = current_frame_y;\n\t\tthis.draw = function( context ) {};\n\t\tthis.image = new Image();\n\t\tthis.image.src = name;\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sprite);\n\n\n//# sourceURL=webpack:///./src/sprite.js?");

/***/ })

/******/ });