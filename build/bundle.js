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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by gpl on 15/11/30.
	 */
	__webpack_require__(1);
	__webpack_require__(5);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n    background-color: lightgray;\n}\n\n#canvas-con {\n    float: left;\n    margin-right: 5px;\n\n    width: 500px;\n    height: 630px;\n}\n\n#canvas-con > .tool-bar {\n    width: 100%;\n    height: 130px;\n}\n\n#canvas-con > canvas {\n    width: 500px;\n    height: 500px;\n\n    border: 1px solid #aaa;\n    background-color: #535353;\n}\n\n#obj-manager-con {\n    float: left;\n    margin-right: 5px;\n\n    width: 300px;\n    height: 630px;\n    padding: 5px;\n\n    overflow: auto;\n\n    color: lightgray;\n    background-color: #1B6D88;\n}\n\n#obj-manager-con > .object-detail {\n\n}\n\n#obj-manager-con > .object-list {\n    padding: 5px;\n}\n\n#obj-manager-con > .object-list tr.active {\n    background-color: #153e53;\n}\n\n#debug-con {\n    float: left;\n    margin-right: 5px;\n\n    width: 300px;\n    height: 630px;\n\n    padding: 5px;\n\n    overflow: auto;\n\n    color: #cfcfcf;\n    background-color: #071f27;\n}\n\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Created by gpl on 15/12/1.
	 */
	var Cad;
	(function (Cad) {
	    var Meta = (function () {
	        function Meta() {
	        }
	        Meta.prototype.setName = function (name) {
	            this._cad_name = name;
	        };
	        return Meta;
	    })();
	    Cad.Meta = Meta;
	})(Cad || (Cad = {}));
	/**
	 * Created by gpl on 15/11/30.
	 */
	var Cad;
	(function (Cad) {
	    var Point = (function () {
	        function Point(x, y) {
	            this.x = x;
	            this.y = y;
	        }
	        return Point;
	    })();
	    Cad.Point = Point;
	})(Cad || (Cad = {}));
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * Created by gpl on 15/11/30.
	 */
	var Cad;
	(function (Cad) {
	    var Line = (function (_super) {
	        __extends(Line, _super);
	        function Line(start, end) {
	            this.start = start;
	            this.end = end;
	            this._cad_type = 'line';
	        }
	        Line.prototype.setUI = function (line) {
	            this.ui = line;
	        };
	        Line.prototype.getUI = function () {
	            return this.ui;
	        };
	        return Line;
	    })(Cad.Meta);
	    Cad.Line = Line;
	})(Cad || (Cad = {}));
	/**
	 * Created by gpl on 15/11/30.
	 */
	var Cad;
	(function (Cad) {
	    var Polygon = (function () {
	        function Polygon(canvas) {
	            this.points = [];
	            this.start = null;
	            this.canvas = canvas;
	        }
	        Polygon.prototype.isEmpty = function () {
	            return this.start === null;
	        };
	        Polygon.prototype.addPoint = function (point) {
	            if (this.isEmpty()) {
	                this.start = point;
	            }
	            this.points.push(point);
	            // draw the lines
	            // TODO: store the lines or the points for further dev
	            var previousPoint = this.getPreviousPoint();
	            if (previousPoint == null) {
	                return;
	            }
	            else {
	                // TODO: put make line to a function, since close also use it
	                this.canvas.makeLine(previousPoint, point);
	            }
	        };
	        // TODO: get the returned line
	        Polygon.prototype.close = function () {
	            this.canvas.makeLine(this.getLastPoint(), this.getFirstPoint());
	        };
	        Polygon.prototype.getPreviousPoint = function () {
	            if (this.points.length < 2) {
	                return null;
	            }
	            return this.points[this.points.length - 2];
	        };
	        Polygon.prototype.getFirstPoint = function () {
	            return this.points[0];
	        };
	        Polygon.prototype.getLastPoint = function () {
	            return this.points[this.points.length - 1];
	        };
	        return Polygon;
	    })();
	    Cad.Polygon = Polygon;
	})(Cad || (Cad = {}));
	/**
	 * Created by gpl on 15/11/30.
	 */
	var App;
	(function (App) {
	    var Services;
	    (function (Services) {
	        var Logger = (function () {
	            function Logger($rootScope) {
	                this.data = [];
	                this.pingCount = 0;
	                this.$rootScope = $rootScope;
	            }
	            Logger.prototype.ping = function () {
	                this.pingCount++;
	                this.log('[ping]' + this.pingCount.toString());
	                return "pong " + this.pingCount.toString();
	            };
	            Logger.prototype.log = function (msg) {
	                var _this = this;
	                this.$rootScope.safeApply(function () {
	                    _this.data.push(msg);
	                });
	            };
	            Logger.prototype.info = function (msg) {
	                this.log('[info] ' + msg);
	                console.info(msg);
	            };
	            Logger.prototype.debug = function (msg) {
	                this.log('[debug] ' + msg);
	                console.debug(msg);
	            };
	            Logger.prototype.clear = function () {
	                this.data.length = 0;
	                // NOTE: this.data = []; won't work, because controller using this will lost reference
	            };
	            Logger.$inject = ['$rootScope'];
	            return Logger;
	        })();
	        Services.Logger = Logger;
	    })(Services = App.Services || (App.Services = {}));
	})(App || (App = {}));
	var App;
	(function (App) {
	    var Services;
	    (function (Services) {
	        var Polygon = Cad.Polygon;
	        var Point = Cad.Point;
	        var Canvas = (function () {
	            function Canvas(logger, manager) {
	                var _this = this;
	                this.canvasId = "canvas";
	                this.canvasWidth = 500;
	                this.canvasHeight = 500;
	                // flags
	                this.drawing = false;
	                this.drawingPolygon = false;
	                this.logger = logger;
	                this.logger.info('canvas service initializing ... ');
	                this.manager = manager;
	                console.log(manager);
	                this.canvas = new fabric.Canvas(this.canvasId, { width: this.canvasWidth, height: this.canvasHeight });
	                this.logger.info('canvas created ');
	                // bind all the even handle here, need have a wrapper to allow use real this
	                this.canvas.on('mouse:down', function (options) {
	                    _this.mouseDownHandler(options);
	                });
	                // handle object select, show detail in object manager
	                this.canvas.on('object:selected', function (e) {
	                    _this.objectSelectHandler(e);
	                });
	            }
	            Canvas.prototype.isDrawing = function () {
	                return this.drawing;
	            };
	            Canvas.prototype.startDrawing = function () {
	                this.drawing = true;
	            };
	            Canvas.prototype.stopDrawing = function () {
	                this.drawing = false;
	            };
	            Canvas.prototype.isDrawingPolygon = function () {
	                return this.isDrawing() && this.drawingPolygon;
	            };
	            Canvas.prototype.startPolygon = function () {
	                this.startDrawing();
	                this.drawingPolygon = true;
	                this.currentPolygon = new Polygon(this);
	                this.cleanTempPoints();
	            };
	            Canvas.prototype.stopPolygon = function () {
	                // draw last point
	                // TODO: should through error when it is not a polygon
	                this.currentPolygon.close();
	                // do the clean up
	                this.stopDrawing();
	                this.drawingPolygon = false;
	                this.cleanTempPoints();
	            };
	            Canvas.prototype.drawTempPoint = function (point) {
	                var c = this.manager.createTempCircle(point);
	                this.canvas.add(c);
	            };
	            Canvas.prototype.cleanTempPoints = function () {
	                this.manager.cleanTemp();
	            };
	            Canvas.prototype.makeLine = function (start, end) {
	                var line = this.manager.createLine(start, end);
	                this.canvas.add(line.getUI());
	                this.logger.debug('line add to canvas');
	                return line;
	            };
	            Canvas.prototype.mouseDownHandler = function (options) {
	                // skip if we are not in drawing mode
	                if (!this.isDrawing()) {
	                    return;
	                }
	                var target = options.e;
	                var x = target.x;
	                var y = target.y;
	                // target.x, target.y
	                this.logger.debug('x:' + x + ' y:' + y);
	                // determine we are drawing polygon or adding restriction
	                if (this.isDrawingPolygon()) {
	                    this.logger.debug('drawing polygon');
	                    var currentPoint = new Point(x, y);
	                    // draw a temp point to indicate
	                    this.drawTempPoint(currentPoint);
	                    // add this point to polygon, polygon itself will handle draw line
	                    this.currentPolygon.addPoint(currentPoint);
	                }
	            };
	            Canvas.prototype.objectSelectHandler = function (e) {
	                if (this.isDrawing()) {
	                    return;
	                }
	                var object = e.target;
	                var metaObject = object._cad_meta;
	                console.log(object);
	                this.logger.debug('[select]' + metaObject._cad_name);
	                this.manager.activateObject(metaObject, this);
	            };
	            Canvas.$inject = ['Logger', 'ObjectManager'];
	            return Canvas;
	        })();
	        Services.Canvas = Canvas;
	    })(Services = App.Services || (App.Services = {}));
	})(App || (App = {}));
	/**
	 * Created by gpl on 15/11/30.
	 */
	var App;
	(function (App) {
	    var Services;
	    (function (Services) {
	        var Line = Cad.Line;
	        var ObjectManager = (function () {
	            function ObjectManager(logger, $rootScope) {
	                this.objects = [];
	                // counter for generate id
	                this.counter = 0;
	                // cursor
	                this.currentObject = null;
	                // temp vars
	                this.tempPoints = [];
	                this.logger = logger;
	                this.$rootScope = $rootScope;
	                this.logger.info('object manager service init');
	            }
	            // give the obj a name
	            ObjectManager.prototype.add = function (obj) {
	                var _this = this;
	                this.$rootScope.safeApply(function () {
	                    obj.setName(_this.generateName());
	                    // TODO: a hack to get the meta object
	                    obj.getUI()._cad_meta = obj;
	                    _this.objects.push(obj);
	                });
	            };
	            ObjectManager.prototype.generateName = function () {
	                this.counter++;
	                return 'id-' + this.counter.toString();
	            };
	            ObjectManager.prototype.createLine = function (start, end) {
	                var ui = new fabric.Line([
	                    start.x,
	                    start.y,
	                    end.x,
	                    end.y
	                ], {
	                    fill: 'red',
	                    stroke: 'red',
	                    strokeWidth: 5
	                });
	                var line = new Line(start, end);
	                line.setUI(ui);
	                this.add(line);
	                this.logger.debug('[create][line]');
	                return line;
	            };
	            ObjectManager.prototype.createTempCircle = function (point) {
	                // TODO: set the color for the previous temp point
	                var c = new fabric.Circle({
	                    left: point.x - 5,
	                    top: point.y - 5,
	                    strokeWidth: 2,
	                    radius: 5,
	                    fill: '#fff',
	                    stroke: '#666',
	                    selectable: false
	                });
	                this.logger.debug('[create][circle][tmp]');
	                this.tempPoints.push(c);
	                return c;
	            };
	            ObjectManager.prototype.cleanTemp = function () {
	                var points = this.tempPoints;
	                for (var i = 0; i < points.length; i++) {
	                    points[i].remove();
	                }
	                this.logger.info('clean up all the temp points');
	            };
	            ObjectManager.prototype.activateObject = function (obj, canvas) {
	                this.logger.debug('[manager][activate] ' + obj._cad_name);
	                this.currentObject = obj;
	                this.$rootScope.$broadcast('object.activate', obj);
	            };
	            ObjectManager.$inject = ['Logger', '$rootScope'];
	            return ObjectManager;
	        })();
	        Services.ObjectManager = ObjectManager;
	    })(Services = App.Services || (App.Services = {}));
	})(App || (App = {}));
	/**
	 * Created by gpl on 15/11/30.
	 */
	var App;
	(function (App) {
	    var Controllers;
	    (function (Controllers) {
	        var DebugCtrl = (function () {
	            function DebugCtrl(logger) {
	                this.title = 'debug';
	                this.filterWord = '';
	                this.logs = [];
	                console.log(logger.ping());
	                this.logger = logger;
	                this.logs = logger.data;
	                this.logger.info('debug ctrl init');
	            }
	            DebugCtrl.prototype.clear = function () {
	                this.logger.clear();
	            };
	            DebugCtrl.$inject = ['Logger'];
	            return DebugCtrl;
	        })();
	        Controllers.DebugCtrl = DebugCtrl;
	    })(Controllers = App.Controllers || (App.Controllers = {}));
	})(App || (App = {}));
	/**
	 * Created by gpl on 15/11/30.
	 */
	var App;
	(function (App) {
	    var Controllers;
	    (function (Controllers) {
	        var ObjectManagerCtrl = (function () {
	            function ObjectManagerCtrl(logger, manager, $scope) {
	                var _this = this;
	                this.title = 'object manager';
	                console.log(logger.ping());
	                this.logger = logger;
	                this.manager = manager;
	                this.$scope = $scope;
	                this.objects = this.manager.objects;
	                this.$scope.$on('object.activate', function (event, obj) {
	                    _this.objectActivateHandler(obj);
	                });
	                this.logger.info('object manager ctrl init ');
	            }
	            ObjectManagerCtrl.prototype.objectActivateHandler = function (obj) {
	                this.active = obj;
	            };
	            ObjectManagerCtrl.$inject = ['Logger', 'ObjectManager', '$scope'];
	            return ObjectManagerCtrl;
	        })();
	        Controllers.ObjectManagerCtrl = ObjectManagerCtrl;
	    })(Controllers = App.Controllers || (App.Controllers = {}));
	})(App || (App = {}));
	/**
	 * Created by gpl on 15/11/30.
	 */
	var App;
	(function (App) {
	    var Controllers;
	    (function (Controllers) {
	        var CanvasCtrl = (function () {
	            function CanvasCtrl(logger, canvas) {
	                this.canvas = canvas;
	                this.logger = logger;
	                this.logger.info('canvas ctrl init');
	            }
	            CanvasCtrl.prototype.startDraw = function () {
	                this.canvas.startDrawing();
	            };
	            CanvasCtrl.prototype.stopDraw = function () {
	                this.canvas.stopDrawing();
	            };
	            CanvasCtrl.prototype.startPolygon = function () {
	                this.logger.info('start drawing polygon, click first point');
	                this.canvas.startPolygon();
	            };
	            CanvasCtrl.prototype.stopPolygon = function () {
	                this.logger.info('stop drawing polygon');
	                this.canvas.stopPolygon();
	            };
	            CanvasCtrl.$inject = ['Logger', 'Canvas'];
	            return CanvasCtrl;
	        })();
	        Controllers.CanvasCtrl = CanvasCtrl;
	    })(Controllers = App.Controllers || (App.Controllers = {}));
	})(App || (App = {}));
	/**
	 * Created by gpl on 15/11/30.
	 */
	angular.module('cad', [])
	    .service('Logger', App.Services.Logger)
	    .service('ObjectManager', App.Services.ObjectManager)
	    .service('Canvas', App.Services.Canvas)
	    .controller('DebugCtrl', App.Controllers.DebugCtrl)
	    .controller('ObjectManagerCtrl', App.Controllers.ObjectManagerCtrl)
	    .controller('CanvasCtrl', App.Controllers.CanvasCtrl)
	    .run(['$rootScope', function ($rootScope) {
	        $rootScope.safeApply = function (fn) {
	            var phase = this.$root.$$phase;
	            if (phase == '$apply' || phase == '$digest') {
	                if (fn && (typeof (fn) === 'function')) {
	                    fn();
	                }
	            }
	            else {
	                this.$apply(fn);
	            }
	        };
	    }]);


/***/ }
/******/ ]);