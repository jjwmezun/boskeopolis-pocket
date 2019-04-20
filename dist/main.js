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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n\n\n\nconst JumpState =\n{\n\tnull: 0,\n\tstartJump: 1,\n\tisJumping: 2,\n\tendJump: 3\n}\n\nclass Autumn\n{\n\tconstructor( renderer )\n\t{\n\t\tthis.x = 0;\n\t\tthis.y = 0;\n\t\tthis.vx = 0;\n\t\tthis.vy = 0;\n\t\tthis.accx = 0;\n\t\tthis.accy = 0;\n\t\tthis.width = 16;\n\t\tthis.height = 25;\n\t\tthis.bounce = 0.14;\n\t\tthis.jumpState = JumpState.null;\n\t\tthis.startSpeed = 0.16;\n\t\tthis.topSpeed = 2;\n\t\trenderer.addSprite( 'autumn', new _sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"]( 'img/autumn.png', 32, 32, this.width, this.height ) );\n\t}\n\n\tupdate( input, renderer, block )\n\t{\n\t\tthis.updateX( input, block );\n\t\tthis.updateY( input, block );\n\t\tthis.updateGraphics( renderer );\n\t}\n\n\tupdateX( input, block )\n\t{\n\t\tif ( this.testOnGround( block ) )\n\t\t{\n\t\t\tthis.startSpeed = ( input.held.run ) ? 0.32 : 0.16;\n\t\t\tthis.topSpeed = ( input.held.run ) ? 4 : 2;\n\t\t}\n\n\t\tif ( input.held.right )\n\t\t{\n\t\t\tthis.accx = this.startSpeed;\n\t\t}\n\t\telse if ( input.held.left )\n\t\t{\n\t\t\tthis.accx = -this.startSpeed;\n\t\t}\n\t\telse\n\t\t{\n\t\t\tthis.accx = 0;\n\t\t\tthis.vx /= 1.05;\n\t\t}\n\t\tthis.vx = Math.max( Math.min( this.vx + this.accx, this.topSpeed ), -this.topSpeed );\n\n\t\tlet nextX = this.x + this.vx;\n\t\tconst xTest = ( this.vx < 0 ) ? nextX : nextX + this.width;\n\t\tif ( xTest < 0 || xTest >= _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WindowWidthPixels || block.xInSolid( xTest, this.y, this.height ) )\n\t\t{\n\t\t\tthis.vx *= -this.bounce;\n\t\t\tnextX = this.x + this.vx;\n\t\t}\n\t\tthis.x = nextX;\n\t}\n\n\tupdateY( input, block )\n\t{\n\t\tswitch ( this.jumpState )\n\t\t{\n\t\t\tcase ( JumpState.null ):\n\t\t\t{\n\t\t\t\tif ( input.pressed.jump && this.testOnGround( block ) )\n\t\t\t\t{\n\t\t\t\t\tthis.jumpState = JumpState.startJump;\n\t\t\t\t\tthis.accy = -1;\n\t\t\t\t}\n\t\t\t\telse\n\t\t\t\t{\n\t\t\t\t\tthis.accy = 0.5;\n\t\t\t\t}\n\t\t\t}\n\t\t\tbreak;\n\t\t\tcase ( JumpState.startJump ):\n\t\t\t{\n\t\t\t\tif ( block.yInSolid( this.y - 1, this.x, this.width ) )\n\t\t\t\t{\n\t\t\t\t\tthis.jumpState = JumpState.null;\n\t\t\t\t\tthis.accy = 0;\n\t\t\t\t\tthis.vy = 0;\n\t\t\t\t}\n\t\t\t\telse if ( !input.held.jump || this.vy <= -6.5 )\n\t\t\t\t{\n\t\t\t\t\tthis.jumpState = JumpState.null;\n\t\t\t\t}\n\t\t\t\telse\n\t\t\t\t{\n\t\t\t\t\tthis.accy = -1;\n\t\t\t\t}\n\t\t\t}\n\t\t\tbreak;\n\t\t}\n\n\t\tthis.vy = Math.max( Math.min( this.vy + this.accy, 4 ), -6.5 );\n\n\t\tthis.handleYCollision( block );\n\t}\n\n\ttestOnGround( block )\n\t{\n\t\treturn block.yInSolid( this.y + this.height, this.x, this.width );\n\t}\n\n\thandleYCollision( block )\n\t{\n\t\tlet nextY = this.y + this.vy;\n\t\tif ( this.vy > 0 )\n\t\t{\n\t\t\tconst testY = nextY + this.height;\n\t\t\tif ( testY < _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WindowHeightPixels && block.yInSolid( testY, this.x, this.width ) )\n\t\t\t{\n\t\t\t\tthis.vy = 0;\n\t\t\t\tnextY = ( Math.ceil( nextY / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize ) + 1 ) * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize - this.height;\n\t\t\t}\n\t\t}\n\t\telse if ( this.vy < 0 )\n\t\t{\n\t\t\tif ( nextY >= 0 && block.yInSolid( nextY, this.x, this.width ) )\n\t\t\t{\n\t\t\t\tthis.vy *= -this.bounce;\n\t\t\t\tnextY = this.y + this.vy;\n\t\t\t}\n\t\t}\n\t\tthis.y = nextY;\n\t}\n\n\tupdateGraphics( renderer )\n\t{\n\t\tconst image = renderer.getSprite( 'autumn' );\n\t\tif ( image )\n\t\t{\n\t\t\timage.x = Math.floor( this.x );\n\t\t\timage.y = Math.floor( this.y );\n\t\t}\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Autumn);\n\n\n//# sourceURL=webpack:///./src/autumn.js?");

/***/ }),

/***/ "./src/block-types.js":
/*!****************************!*\
  !*** ./src/block-types.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n\nconst BlockTypes = Object.freeze\n({\n\tground: function( context, image, w, h )\n\t{\n\t\tfor ( let y = 0; y < h; y += _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize )\n\t\t{\n\t\t\tconst frameX = ( y === 0 ) ? 0 : _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize;\n\t\t\tfor ( let x = 0; x < w; x += _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize )\n\t\t\t{\n\t\t\t\tcontext.drawImage\n\t\t\t\t(\n\t\t\t\t\timage,\n\t\t\t\t\tframeX, 0, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize,\n\t\t\t\t\tx, y, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\t},\n\tblock: function( context, image, w, h )\n\t{\n\t\tfor ( let y = 0; y < h; y += _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize )\n\t\t{\n\t\t\tfor ( let x = 0; x < w; x += _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize )\n\t\t\t{\n\t\t\t\tcontext.drawImage\n\t\t\t\t(\n\t\t\t\t\timage,\n\t\t\t\t\t32, 0, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize,\n\t\t\t\t\tx, y, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\t},\n\tbrick1: function( context, image, w, h )\n\t{\n\t\tfor ( let y = 0; y < h; y += _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize )\n\t\t{\n\t\t\tconst frameX = ( ( y === 0 ) ? 4 : ( ( y === h - _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize ) ? 5 : 3 ) ) * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize;\n\t\t\tfor ( let x = 0; x < w; x += _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize )\n\t\t\t{\n\t\t\t\tcontext.drawImage\n\t\t\t\t(\n\t\t\t\t\timage,\n\t\t\t\t\tframeX, 0, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize,\n\t\t\t\t\tx, y, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\t}\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlockTypes);\n\n\n//# sourceURL=webpack:///./src/block-types.js?");

/***/ }),

/***/ "./src/block.js":
/*!**********************!*\
  !*** ./src/block.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sprite */ \"./src/sprite.js\");\n/* harmony import */ var _block_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block-types */ \"./src/block-types.js\");\n\n\n\n\nclass Block\n{\n\tconstructor( map, renderer )\n\t{\n\t\tthis.width = renderer.canvas.width;\n\t\tthis.height = renderer.canvas.height;\n\t\tthis.initializeBlockGrid( renderer.canvas.width, renderer.canvas.height );\n\t\tlet image = new Image();\n\t\timage.src = 'img/tileset.png';\n\t\timage.onload = function()\n\t\t{\n\t\t\tlet i = 0;\n\t\t\tfor ( const block of map.blocks )\n\t\t\t{\n\t\t\t\tthis.initializeImage( block, renderer, image, i );\n\t\t\t\tthis.addToBlockGrid( block );\n\t\t\t\ti++;\n\t\t\t}\n\t\t}.bind( this );\n\t}\n\n\tinitializeBlockGrid( width, height )\n\t{\n\t\tthis.blockGrid = [];\n\t\tfor ( let y = 0; y < height; y++ )\n\t\t{\n\t\t\tthis.blockGrid.push( [] );\n\t\t\tfor ( let x = 0; x < width; x++ )\n\t\t\t{\n\t\t\t\tthis.blockGrid[ y ].push( 0 );\n\t\t\t}\n\t\t}\n\t}\n\n\taddToBlockGrid( block )\n\t{\n\t\tif ( 'solid' in block && block.solid )\n\t\t{\n\t\t\tconst w = ( 'w' in block ) ? block.w : 1;\n\t\t\tconst h = ( 'h' in block ) ? block.h : 1;\n\t\t\tconst startX = Math.max( 0, block.x );\n\t\t\tconst startY = Math.max( 0, block.y );\n\t\t\tconst endX = Math.min( this.width, block.x + w );\n\t\t\tconst endY = Math.min( this.height, block.y + h );\n\t\t\tfor ( let y = startY; y < endY; y++ )\n\t\t\t{\n\t\t\t\tfor ( let x = startX; x < endX; x++ )\n\t\t\t\t{\n\t\t\t\t\tthis.blockGrid[ y ][ x ] = 1;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\tinitializeImage( block, renderer, image, i )\n\t{\n\t\tconst wBlocks = ( 'w' in block ) ? block.w : 1;\n\t\tconst hBlocks = ( 'h' in block ) ? block.h : 1;\n\t\tconst xOrigin = block.x;\n\t\tconst yOrigin = block.y;\n\t\tconst width = wBlocks * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize;\n\t\tconst height = hBlocks * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize;\n\t\tconst tempCanvas = document.getElementById( 'tempCanvas' );\n\t\tconst tempContext = tempCanvas.getContext( '2d' );\n\t\ttempCanvas.height = height;\n\t\ttempCanvas.width = width;\n\t\t_block_types__WEBPACK_IMPORTED_MODULE_2__[\"default\"][ block.type ]( tempContext, image, width, height );\n\t\tconst data = tempCanvas.toDataURL();\n\t\trenderer.addSprite( 'block' + i, new _sprite__WEBPACK_IMPORTED_MODULE_1__[\"default\"]( data, xOrigin * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, yOrigin * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, width, height ) );\n\t}\n\n\txInSolid( x, y, height )\n\t{\n\t\theight -= 1;\n\t\tconst xBlocks = Math.floor( x / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize );\n\t\tconst yStartBlocks = Math.floor( y / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize );\n\t\tconst yEndBlocks = Math.floor( ( y + height ) / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize );\n\t\tfor ( let y = yStartBlocks; y <= yEndBlocks; y++ )\n\t\t{\n\t\t\tif ( this.blockGrid[ y ][ xBlocks ] === 1 )\n\t\t\t{\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n\n\tyInSolid( y, x, width )\n\t{\n\t\tconst yBlocks = Math.floor( y / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize );\n\t\tconst xStartBlocks = Math.floor( x / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize );\n\t\tconst xEndBlocks = Math.ceil( ( x + width ) / _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize );\n\t\tfor ( let x = xStartBlocks; x < xEndBlocks; x++ )\n\t\t{\n\t\t\tif ( this.blockGrid[ yBlocks ][ x ] === 1 )\n\t\t\t{\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Block);\n\n\n//# sourceURL=webpack:///./src/block.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input */ \"./src/input.js\");\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer */ \"./src/renderer.js\");\n/* harmony import */ var _autumn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autumn */ \"./src/autumn.js\");\n/* harmony import */ var _block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block */ \"./src/block.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n\n\n\n\n\n\n\nconst input = new _input__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nconst renderer = new _renderer__WEBPACK_IMPORTED_MODULE_2__[\"default\"]( _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WindowWidthPixels, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].WindowHeightPixels );\nconst autumn = new _autumn__WEBPACK_IMPORTED_MODULE_3__[\"default\"]( renderer );\nconst map = new _map__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\nconst blocks = new _block__WEBPACK_IMPORTED_MODULE_4__[\"default\"]( map, renderer );\n\nwindow.requestAnimationFrame( execute );\nfunction execute()\n{\n\tupdate();\n\trender();\n\twindow.requestAnimationFrame( execute );\n}\n\nfunction update()\n{\n\tinput.update();\n\trenderer.bringSpriteToFront( 'autumn' );\n\tautumn.update( input, renderer, blocks );\n}\n\nfunction render()\n{\n\trenderer.render();\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/input.js":
/*!**********************!*\
  !*** ./src/input.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Input\n{\n\tconstructor()\n\t{\n\t\tthis.registerPress = function( e )\n\t\t{\n\t\t\tfor ( const key in this.keys )\n\t\t\t{\n\t\t\t\tconst keyCode = this.keys[ key ];\n\t\t\t\tif ( e.keyCode === keyCode )\n\t\t\t\t{\n\t\t\t\t\tif ( !this.held[ key ] )\n\t\t\t\t\t{\n\t\t\t\t\t\tthis.setHeld[ key ] = true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\tthis.registerRelease = function( e )\n\t\t{\n\t\t\tfor ( const key in this.keys )\n\t\t\t{\n\t\t\t\tconst keyCode = this.keys[ key ];\n\t\t\t\tif ( e.keyCode === keyCode )\n\t\t\t\t{\n\t\t\t\t\tif ( !this.setReleased[ key ] )\n\t\t\t\t\t{\n\t\t\t\t\t\tthis.setReleased[ key ] = true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\n\t\tthis.keys =\n\t\t{\n\t\t\tleft: 37,\n\t\t\tup: 38,\n\t\t\tright: 39,\n\t\t\tdown: 40,\n\t\t\tjump: 90,\n\t\t\trun: 88\n\t\t};\n\n\t\tthis.held =\n\t\t{\n\t\t\tleft: false,\n\t\t\tup: false,\n\t\t\tright: false,\n\t\t\tdown: false,\n\t\t\tjump: false,\n\t\t\trun: false\n\t\t};\n\n\t\tthis.pressed =\n\t\t{\n\t\t\tleft: false,\n\t\t\tup: false,\n\t\t\tright: false,\n\t\t\tdown: false,\n\t\t\tjump: false,\n\t\t\trun: false\n\t\t};\n\n\t\tthis.setHeld =\n\t\t{\n\t\t\tleft: false,\n\t\t\tup: false,\n\t\t\tright: false,\n\t\t\tdown: false,\n\t\t\tjump: false,\n\t\t\trun: false\n\t\t};\n\n\t\tthis.setReleased =\n\t\t{\n\t\t\tleft: false,\n\t\t\tup: false,\n\t\t\tright: false,\n\t\t\tdown: false,\n\t\t\tjump: false,\n\t\t\trun: false\n\t\t};\n\n\t\twindow.addEventListener\n\t\t(\n\t\t\t'keydown',\n\t\t\tthis.registerPress.bind( this )\n\t\t);\n\t\twindow.addEventListener\n\t\t(\n\t\t\t'keyup',\n\t\t\tthis.registerRelease.bind( this )\n\t\t);\n\t}\n\n\tupdate()\n\t{\n\t\tfor ( const key in this.keys )\n\t\t{\n\t\t\tif ( this.setHeld[ key ] )\n\t\t\t{\n\t\t\t\tthis.held[ key ] = true;\n\t\t\t}\n\t\t\telse if ( this.setReleased[ key ] )\n\t\t\t{\n\t\t\t\tthis.held[ key ] = false;\n\t\t\t}\n\t\t\tthis.pressed[ key ] = this.setHeld[ key ] && !this.pressed[ key ] && !this.setReleased[ key ];\n\t\t\tthis.setHeld[ key ] = false;\n\t\t\tthis.setReleased[ key ] = false;\n\t\t}\n\t}\n\n\treset()\n\t{\n\t\tfor ( const key in this.keys )\n\t\t{\n\t\t\tthis.pressed[ key ] = false;\n\t\t\tthis.held[ key ] = false;\n\t\t\tthis.setHeld[ key ] = false;\n\t\t}\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Input);\n\n\n//# sourceURL=webpack:///./src/input.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Map\n{\n\tconstructor()\n\t{\n\t\tthis.blocks =\n\t\t[\n\t\t\t{\n\t\t\t\ttype: \"ground\",\n\t\t\t\tsolid: true,\n\t\t\t\tx: 0,\n\t\t\t\ty: 11,\n\t\t\t\tw: 25,\n\t\t\t\th: 3\n\t\t\t},\n\t\t\t{\n\t\t\t\ttype: \"block\",\n\t\t\t\tsolid: true,\n\t\t\t\tx: 10,\n\t\t\t\ty: 7,\n\t\t\t\tw: 2,\n\t\t\t\th: 2\n\t\t\t},\n\t\t\t{\n\t\t\t\ttype: \"brick1\",\n\t\t\t\tx: 1,\n\t\t\t\ty: 5,\n\t\t\t\tw: 7,\n\t\t\t\th: 6\n\t\t\t}\n\t\t]\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\n\n//# sourceURL=webpack:///./src/map.js?");

/***/ }),

/***/ "./src/renderer.js":
/*!*************************!*\
  !*** ./src/renderer.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n\nclass Renderer\n{\n\tconstructor( width, height )\n\t{\n\t\tthis.canvas = document.getElementById( 'canvas' );\n\t\tthis.context = this.canvas.getContext( '2d' );\n\t\tthis.canvas.setAttribute( 'width', width );\n\t\tthis.canvas.setAttribute( 'height', height );\n\t\tthis.spriteList = [];\n\t\tthis.spriteMap = {};\n\t}\n\n\taddSprite( name, sprite )\n\t{\n\t\tthis.spriteList.push( sprite );\n\t\tthis.spriteMap[ name ] = this.spriteList.length - 1;\n\t}\n\n\tgetSprite( name )\n\t{\n\t\treturn this.spriteList[ this.spriteMap[ name ] ];\n\t}\n\n\tgetSpriteNameByIndex( index )\n\t{\n\t\tfor ( const name in this.spriteMap )\n\t\t{\n\t\t\tif ( this.spriteMap[ name ] === index )\n\t\t\t{\n\t\t\t\treturn name;\n\t\t\t}\n\t\t}\n\t\treturn null;\n\t}\n\n\tbringSpriteToFront( name )\n\t{\n\t\tif ( name in this.spriteMap )\n\t\t{\n\t\t\tconst spriteIndex = this.spriteMap[ name ];\n\t\t\tconst sprite = this.spriteList[ spriteIndex ];\n\t\t\tfor ( let i = spriteIndex; i < this.spriteList.length - 1; i++ )\n\t\t\t{\n\t\t\t\tthis.spriteList[ i ] = this.spriteList[ i + 1 ];\n\t\t\t\tthis.spriteMap[ this.getSpriteNameByIndex[ i + 1 ] ] = i;\n\t\t\t}\n\t\t\tthis.spriteList[ this.spriteList.length - 1 ] = sprite;\n\t\t\tthis.spriteMap[ name ] = this.spriteList.length - 1;\n\t\t}\n\t}\n\n\trender()\n\t{\n\t\tthis.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );\n\t\tthis.context.fillStyle = '#ccbbff';\n\t\tthis.context.fillRect( 0, 0, this.canvas.width, this.canvas.height );\n\t\tfor ( const sprite of this.spriteList )\n\t\t{\n\t\t\tthis.context.drawImage\n\t\t\t(\n\t\t\t\tsprite.image,\n\t\t\t\tsprite.current_frame_x, sprite.current_frame_y, sprite.width, sprite.height,\n\t\t\t\tsprite.x, sprite.y, sprite.width, sprite.height\n\t\t\t);\n\t\t}\n\t}\n\n\tshowGrid( block )\n\t{\n\t\tthis.context.fillStyle = 'rgba( 0, 255, 0, 0.5 )';\n\t\tfor ( let y = 0; y < block.blockGrid.length; y++ )\n\t\t{\n\t\t\tfor ( let x = 0; x < block.blockGrid[ y ].length; x++ )\n\t\t\t{\n\t\t\t\tconst blockValue = block.blockGrid[ y ][ x ];\n\t\t\t\tif ( blockValue > 0 )\n\t\t\t\t{\n\t\t\t\t\tthis.context.fillRect( x * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, y  * _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize, _config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].BlockSize );\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Renderer);\n\n\n//# sourceURL=webpack:///./src/renderer.js?");

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