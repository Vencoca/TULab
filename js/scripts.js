/* Font Face Observer v2.1.0 - © Bram Stein. License: BSD-3-Clause */(function(){'use strict';var f,g=[];function l(a){g.push(a);1==g.length&&f()}function m(){for(;g.length;)g[0](),g.shift()}f=function(){setTimeout(m)};function n(a){this.a=p;this.b=void 0;this.f=[];var b=this;try{a(function(a){q(b,a)},function(a){r(b,a)})}catch(c){r(b,c)}}var p=2;function t(a){return new n(function(b,c){c(a)})}function u(a){return new n(function(b){b(a)})}function q(a,b){if(a.a==p){if(b==a)throw new TypeError;var c=!1;try{var d=b&&b.then;if(null!=b&&"object"==typeof b&&"function"==typeof d){d.call(b,function(b){c||q(a,b);c=!0},function(b){c||r(a,b);c=!0});return}}catch(e){c||r(a,e);return}a.a=0;a.b=b;v(a)}}
function r(a,b){if(a.a==p){if(b==a)throw new TypeError;a.a=1;a.b=b;v(a)}}function v(a){l(function(){if(a.a!=p)for(;a.f.length;){var b=a.f.shift(),c=b[0],d=b[1],e=b[2],b=b[3];try{0==a.a?"function"==typeof c?e(c.call(void 0,a.b)):e(a.b):1==a.a&&("function"==typeof d?e(d.call(void 0,a.b)):b(a.b))}catch(h){b(h)}}})}n.prototype.g=function(a){return this.c(void 0,a)};n.prototype.c=function(a,b){var c=this;return new n(function(d,e){c.f.push([a,b,d,e]);v(c)})};
function w(a){return new n(function(b,c){function d(c){return function(d){h[c]=d;e+=1;e==a.length&&b(h)}}var e=0,h=[];0==a.length&&b(h);for(var k=0;k<a.length;k+=1)u(a[k]).c(d(k),c)})}function x(a){return new n(function(b,c){for(var d=0;d<a.length;d+=1)u(a[d]).c(b,c)})};window.Promise||(window.Promise=n,window.Promise.resolve=u,window.Promise.reject=t,window.Promise.race=x,window.Promise.all=w,window.Promise.prototype.then=n.prototype.c,window.Promise.prototype["catch"]=n.prototype.g);}());

(function(){function l(a,b){document.addEventListener?a.addEventListener("scroll",b,!1):a.attachEvent("scroll",b)}function m(a){document.body?a():document.addEventListener?document.addEventListener("DOMContentLoaded",function c(){document.removeEventListener("DOMContentLoaded",c);a()}):document.attachEvent("onreadystatechange",function k(){if("interactive"==document.readyState||"complete"==document.readyState)document.detachEvent("onreadystatechange",k),a()})};function t(a){this.a=document.createElement("div");this.a.setAttribute("aria-hidden","true");this.a.appendChild(document.createTextNode(a));this.b=document.createElement("span");this.c=document.createElement("span");this.h=document.createElement("span");this.f=document.createElement("span");this.g=-1;this.b.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.c.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";
this.f.style.cssText="max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;";this.h.style.cssText="display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;";this.b.appendChild(this.h);this.c.appendChild(this.f);this.a.appendChild(this.b);this.a.appendChild(this.c)}
function u(a,b){a.a.style.cssText="max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:"+b+";"}function z(a){var b=a.a.offsetWidth,c=b+100;a.f.style.width=c+"px";a.c.scrollLeft=c;a.b.scrollLeft=a.b.scrollWidth+100;return a.g!==b?(a.g=b,!0):!1}function A(a,b){function c(){var a=k;z(a)&&a.a.parentNode&&b(a.g)}var k=a;l(a.b,c);l(a.c,c);z(a)};function B(a,b){var c=b||{};this.family=a;this.style=c.style||"normal";this.weight=c.weight||"normal";this.stretch=c.stretch||"normal"}var C=null,D=null,E=null,F=null;function G(){if(null===D)if(J()&&/Apple/.test(window.navigator.vendor)){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!a&&603>parseInt(a[1],10)}else D=!1;return D}function J(){null===F&&(F=!!document.fonts);return F}
function K(){if(null===E){var a=document.createElement("div");try{a.style.font="condensed 100px sans-serif"}catch(b){}E=""!==a.style.font}return E}function L(a,b){return[a.style,a.weight,K()?a.stretch:"","100px",b].join(" ")}
B.prototype.load=function(a,b){var c=this,k=a||"BESbswy",r=0,n=b||3E3,H=(new Date).getTime();return new Promise(function(a,b){if(J()&&!G()){var M=new Promise(function(a,b){function e(){(new Date).getTime()-H>=n?b(Error(""+n+"ms timeout exceeded")):document.fonts.load(L(c,'"'+c.family+'"'),k).then(function(c){1<=c.length?a():setTimeout(e,25)},b)}e()}),N=new Promise(function(a,c){r=setTimeout(function(){c(Error(""+n+"ms timeout exceeded"))},n)});Promise.race([N,M]).then(function(){clearTimeout(r);a(c)},
b)}else m(function(){function v(){var b;if(b=-1!=f&&-1!=g||-1!=f&&-1!=h||-1!=g&&-1!=h)(b=f!=g&&f!=h&&g!=h)||(null===C&&(b=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent),C=!!b&&(536>parseInt(b[1],10)||536===parseInt(b[1],10)&&11>=parseInt(b[2],10))),b=C&&(f==w&&g==w&&h==w||f==x&&g==x&&h==x||f==y&&g==y&&h==y)),b=!b;b&&(d.parentNode&&d.parentNode.removeChild(d),clearTimeout(r),a(c))}function I(){if((new Date).getTime()-H>=n)d.parentNode&&d.parentNode.removeChild(d),b(Error(""+
n+"ms timeout exceeded"));else{var a=document.hidden;if(!0===a||void 0===a)f=e.a.offsetWidth,g=p.a.offsetWidth,h=q.a.offsetWidth,v();r=setTimeout(I,50)}}var e=new t(k),p=new t(k),q=new t(k),f=-1,g=-1,h=-1,w=-1,x=-1,y=-1,d=document.createElement("div");d.dir="ltr";u(e,L(c,"sans-serif"));u(p,L(c,"serif"));u(q,L(c,"monospace"));d.appendChild(e.a);d.appendChild(p.a);d.appendChild(q.a);document.body.appendChild(d);w=e.a.offsetWidth;x=p.a.offsetWidth;y=q.a.offsetWidth;I();A(e,function(a){f=a;v()});u(e,
L(c,'"'+c.family+'",sans-serif'));A(p,function(a){g=a;v()});u(p,L(c,'"'+c.family+'",serif'));A(q,function(a){h=a;v()});u(q,L(c,'"'+c.family+'",monospace'))})})};"object"===typeof module?module.exports=B:(window.FontFaceObserver=B,window.FontFaceObserver.prototype.load=B.prototype.load);}());

/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages = (function () {
'use strict';

var OFI = 'bfred-it:object-fit-images';
var propRegex = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g;
var testImg = typeof Image === 'undefined' ? {style: {'object-position': 1}} : new Image();
var supportsObjectFit = 'object-fit' in testImg.style;
var supportsObjectPosition = 'object-position' in testImg.style;
var supportsOFI = 'background-size' in testImg.style;
var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
var nativeGetAttribute = testImg.getAttribute;
var nativeSetAttribute = testImg.setAttribute;
var autoModeEnabled = false;

function createPlaceholder(w, h) {
	return ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "'%3E%3C/svg%3E");
}

function polyfillCurrentSrc(el) {
	if (el.srcset && !supportsCurrentSrc && window.picturefill) {
		var pf = window.picturefill._;
		// parse srcset with picturefill where currentSrc isn't available
		if (!el[pf.ns] || !el[pf.ns].evaled) {
			// force synchronous srcset parsing
			pf.fillImg(el, {reselect: true});
		}

		if (!el[pf.ns].curSrc) {
			// force picturefill to parse srcset
			el[pf.ns].supported = false;
			pf.fillImg(el, {reselect: true});
		}

		// retrieve parsed currentSrc, if any
		el.currentSrc = el[pf.ns].curSrc || el.src;
	}
}

function getStyle(el) {
	var style = getComputedStyle(el).fontFamily;
	var parsed;
	var props = {};
	while ((parsed = propRegex.exec(style)) !== null) {
		props[parsed[1]] = parsed[2];
	}
	return props;
}

function setPlaceholder(img, width, height) {
	// Default: fill width, no height
	var placeholder = createPlaceholder(width || 1, height || 0);

	// Only set placeholder if it's different
	if (nativeGetAttribute.call(img, 'src') !== placeholder) {
		nativeSetAttribute.call(img, 'src', placeholder);
	}
}

function onImageReady(img, callback) {
	// naturalWidth is only available when the image headers are loaded,
	// this loop will poll it every 100ms.
	if (img.naturalWidth) {
		callback(img);
	} else {
		setTimeout(onImageReady, 100, img, callback);
	}
}

function fixOne(el) {
	var style = getStyle(el);
	var ofi = el[OFI];
	style['object-fit'] = style['object-fit'] || 'fill'; // default value

	// Avoid running where unnecessary, unless OFI had already done its deed
	if (!ofi.img) {
		// fill is the default behavior so no action is necessary
		if (style['object-fit'] === 'fill') {
			return;
		}

		// Where object-fit is supported and object-position isn't (Safari < 10)
		if (
			!ofi.skipTest && // unless user wants to apply regardless of browser support
			supportsObjectFit && // if browser already supports object-fit
			!style['object-position'] // unless object-position is used
		) {
			return;
		}
	}

	// keep a clone in memory while resetting the original to a blank
	if (!ofi.img) {
		ofi.img = new Image(el.width, el.height);
		ofi.img.srcset = nativeGetAttribute.call(el, "data-ofi-srcset") || el.srcset;
		ofi.img.src = nativeGetAttribute.call(el, "data-ofi-src") || el.src;

		// preserve for any future cloneNode calls
		// https://github.com/bfred-it/object-fit-images/issues/53
		nativeSetAttribute.call(el, "data-ofi-src", el.src);
		if (el.srcset) {
			nativeSetAttribute.call(el, "data-ofi-srcset", el.srcset);
		}

		setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height);

		// remove srcset because it overrides src
		if (el.srcset) {
			el.srcset = '';
		}
		try {
			keepSrcUsable(el);
		} catch (err) {
			if (window.console) {
				console.warn('https://bit.ly/ofi-old-browser');
			}
		}
	}

	polyfillCurrentSrc(ofi.img);

	el.style.backgroundImage = "url(\"" + ((ofi.img.currentSrc || ofi.img.src).replace(/"/g, '\\"')) + "\")";
	el.style.backgroundPosition = style['object-position'] || 'center';
	el.style.backgroundRepeat = 'no-repeat';
	el.style.backgroundOrigin = 'content-box';

	if (/scale-down/.test(style['object-fit'])) {
		onImageReady(ofi.img, function () {
			if (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {
				el.style.backgroundSize = 'contain';
			} else {
				el.style.backgroundSize = 'auto';
			}
		});
	} else {
		el.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');
	}

	onImageReady(ofi.img, function (img) {
		setPlaceholder(el, img.naturalWidth, img.naturalHeight);
	});
}

function keepSrcUsable(el) {
	var descriptors = {
		get: function get(prop) {
			return el[OFI].img[prop ? prop : 'src'];
		},
		set: function set(value, prop) {
			el[OFI].img[prop ? prop : 'src'] = value;
			nativeSetAttribute.call(el, ("data-ofi-" + prop), value); // preserve for any future cloneNode
			fixOne(el);
			return value;
		}
	};
	Object.defineProperty(el, 'src', descriptors);
	Object.defineProperty(el, 'currentSrc', {
		get: function () { return descriptors.get('currentSrc'); }
	});
	Object.defineProperty(el, 'srcset', {
		get: function () { return descriptors.get('srcset'); },
		set: function (ss) { return descriptors.set(ss, 'srcset'); }
	});
}

function hijackAttributes() {
	function getOfiImageMaybe(el, name) {
		return el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;
	}
	if (!supportsObjectPosition) {
		HTMLImageElement.prototype.getAttribute = function (name) {
			return nativeGetAttribute.call(getOfiImageMaybe(this, name), name);
		};

		HTMLImageElement.prototype.setAttribute = function (name, value) {
			return nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));
		};
	}
}

function fix(imgs, opts) {
	var startAutoMode = !autoModeEnabled && !imgs;
	opts = opts || {};
	imgs = imgs || 'img';

	if ((supportsObjectPosition && !opts.skipTest) || !supportsOFI) {
		return false;
	}

	// use imgs as a selector or just select all images
	if (imgs === 'img') {
		imgs = document.getElementsByTagName('img');
	} else if (typeof imgs === 'string') {
		imgs = document.querySelectorAll(imgs);
	} else if (!('length' in imgs)) {
		imgs = [imgs];
	}

	// apply fix to all
	for (var i = 0; i < imgs.length; i++) {
		imgs[i][OFI] = imgs[i][OFI] || {
			skipTest: opts.skipTest
		};
		fixOne(imgs[i]);
	}

	if (startAutoMode) {
		document.body.addEventListener('load', function (e) {
			if (e.target.tagName === 'IMG') {
				fix(e.target, {
					skipTest: opts.skipTest
				});
			}
		}, true);
		autoModeEnabled = true;
		imgs = 'img'; // reset to a generic selector for watchMQ
	}

	// if requested, watch media queries for object-fit change
	if (opts.watchMQ) {
		window.addEventListener('resize', fix.bind(null, imgs, {
			skipTest: opts.skipTest
		}));
	}
}

fix.supportsObjectFit = supportsObjectFit;
fix.supportsObjectPosition = supportsObjectPosition;

hijackAttributes();

return fix;

}());

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global = global || self, global.LazyLoad = factory());
})(this, function () {
  'use strict';

  var runningOnBrowser = typeof window !== "undefined";
  var isBot = runningOnBrowser && !("onscroll" in window) || typeof navigator !== "undefined" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent);
  var supportsIntersectionObserver = runningOnBrowser && "IntersectionObserver" in window;
  var supportsClassList = runningOnBrowser && "classList" in document.createElement("p");
  var defaultSettings = {
    elements_selector: "img",
    container: isBot || runningOnBrowser ? document : null,
    threshold: 300,
    thresholds: null,
    data_src: "src",
    data_srcset: "srcset",
    data_sizes: "sizes",
    data_bg: "bg",
    data_poster: "poster",
    class_loading: "loading",
    class_loaded: "loaded",
    class_error: "error",
    load_delay: 0,
    auto_unobserve: true,
    callback_enter: null,
    callback_exit: null,
    callback_reveal: null,
    callback_loaded: null,
    callback_error: null,
    callback_finish: null,
    use_native: false
  };

  var getInstanceSettings = function getInstanceSettings(customSettings) {
    return _extends({}, defaultSettings, customSettings);
  };
  /* Creates instance and notifies it through the window element */


  var createInstance = function createInstance(classObj, options) {
    var event;
    var eventString = "LazyLoad::Initialized";
    var instance = new classObj(options);

    try {
      // Works in modern browsers
      event = new CustomEvent(eventString, {
        detail: {
          instance: instance
        }
      });
    } catch (err) {
      // Works in Internet Explorer (all versions)
      event = document.createEvent("CustomEvent");
      event.initCustomEvent(eventString, false, false, {
        instance: instance
      });
    }

    window.dispatchEvent(event);
  };
  /* Auto initialization of one or more instances of lazyload, depending on the 
      options passed in (plain object or an array) */


  function autoInitialize(classObj, options) {
    if (!options) {
      return;
    }

    if (!options.length) {
      // Plain object
      createInstance(classObj, options);
    } else {
      // Array of objects
      for (var i = 0, optionsItem; optionsItem = options[i]; i += 1) {
        createInstance(classObj, optionsItem);
      }
    }
  }

  var dataPrefix = "data-";
  var processedDataName = "was-processed";
  var timeoutDataName = "ll-timeout";
  var trueString = "true";

  var getData = function getData(element, attribute) {
    return element.getAttribute(dataPrefix + attribute);
  };

  var setData = function setData(element, attribute, value) {
    var attrName = dataPrefix + attribute;

    if (value === null) {
      element.removeAttribute(attrName);
      return;
    }

    element.setAttribute(attrName, value);
  };

  var resetWasProcessedData = function resetWasProcessedData(element) {
    return setData(element, processedDataName, null);
  };

  var setWasProcessedData = function setWasProcessedData(element) {
    return setData(element, processedDataName, trueString);
  };

  var getWasProcessedData = function getWasProcessedData(element) {
    return getData(element, processedDataName) === trueString;
  };

  var setTimeoutData = function setTimeoutData(element, value) {
    return setData(element, timeoutDataName, value);
  };

  var getTimeoutData = function getTimeoutData(element) {
    return getData(element, timeoutDataName);
  };

  var purgeProcessedElements = function purgeProcessedElements(elements) {
    return elements.filter(function (element) {
      return !getWasProcessedData(element);
    });
  };

  var purgeOneElement = function purgeOneElement(elements, elementToPurge) {
    return elements.filter(function (element) {
      return element !== elementToPurge;
    });
  };

  var safeCallback = function safeCallback(callback, arg1, arg2, arg3) {
    if (!callback) {
      return;
    }

    if (arg3 !== undefined) {
      callback(arg1, arg2, arg3);
      return;
    }

    if (arg2 !== undefined) {
      callback(arg1, arg2);
      return;
    }

    callback(arg1);
  };

  var updateLoadingCount = function updateLoadingCount(instance, plusMinus) {
    instance.loadingCount += plusMinus;

    if (instance._elements.length === 0 && instance.loadingCount === 0) {
      safeCallback(instance._settings.callback_finish, instance);
    }
  };

  var getSourceTags = function getSourceTags(parentTag) {
    var sourceTags = [];

    for (var i = 0, childTag; childTag = parentTag.children[i]; i += 1) {
      if (childTag.tagName === "SOURCE") {
        sourceTags.push(childTag);
      }
    }

    return sourceTags;
  };

  var setAttributeIfValue = function setAttributeIfValue(element, attrName, value) {
    if (!value) {
      return;
    }

    element.setAttribute(attrName, value);
  };

  var setImageAttributes = function setImageAttributes(element, settings) {
    setAttributeIfValue(element, "sizes", getData(element, settings.data_sizes));
    setAttributeIfValue(element, "srcset", getData(element, settings.data_srcset));
    setAttributeIfValue(element, "src", getData(element, settings.data_src));
  };

  var setSourcesImg = function setSourcesImg(element, settings) {
    var parent = element.parentNode;

    if (parent && parent.tagName === "PICTURE") {
      var sourceTags = getSourceTags(parent);
      sourceTags.forEach(function (sourceTag) {
        setImageAttributes(sourceTag, settings);
      });
    }

    setImageAttributes(element, settings);
  };

  var setSourcesIframe = function setSourcesIframe(element, settings) {
    setAttributeIfValue(element, "src", getData(element, settings.data_src));
  };

  var setSourcesVideo = function setSourcesVideo(element, settings) {
    var sourceTags = getSourceTags(element);
    sourceTags.forEach(function (sourceTag) {
      setAttributeIfValue(sourceTag, "src", getData(sourceTag, settings.data_src));
    });
    setAttributeIfValue(element, "poster", getData(element, settings.data_poster));
    setAttributeIfValue(element, "src", getData(element, settings.data_src));
    element.load();
  };

  var setSourcesBgImage = function setSourcesBgImage(element, settings) {
    var srcDataValue = getData(element, settings.data_src);
    var bgDataValue = getData(element, settings.data_bg);

    if (srcDataValue) {
      element.style.backgroundImage = "url(\"".concat(srcDataValue, "\")");
    }

    if (bgDataValue) {
      element.style.backgroundImage = bgDataValue;
    }
  };

  var setSourcesFunctions = {
    IMG: setSourcesImg,
    IFRAME: setSourcesIframe,
    VIDEO: setSourcesVideo
  };

  var setSources = function setSources(element, instance) {
    var settings = instance._settings;
    var tagName = element.tagName;
    var setSourcesFunction = setSourcesFunctions[tagName];

    if (setSourcesFunction) {
      setSourcesFunction(element, settings);
      updateLoadingCount(instance, 1);
      instance._elements = purgeOneElement(instance._elements, element);
      return;
    }

    setSourcesBgImage(element, settings);
  };

  var addClass = function addClass(element, className) {
    if (supportsClassList) {
      element.classList.add(className);
      return;
    }

    element.className += (element.className ? " " : "") + className;
  };

  var removeClass = function removeClass(element, className) {
    if (supportsClassList) {
      element.classList.remove(className);
      return;
    }

    element.className = element.className.replace(new RegExp("(^|\\s+)" + className + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
  };

  var genericLoadEventName = "load";
  var mediaLoadEventName = "loadeddata";
  var errorEventName = "error";

  var addEventListener = function addEventListener(element, eventName, handler) {
    element.addEventListener(eventName, handler);
  };

  var removeEventListener = function removeEventListener(element, eventName, handler) {
    element.removeEventListener(eventName, handler);
  };

  var addEventListeners = function addEventListeners(element, loadHandler, errorHandler) {
    addEventListener(element, genericLoadEventName, loadHandler);
    addEventListener(element, mediaLoadEventName, loadHandler);
    addEventListener(element, errorEventName, errorHandler);
  };

  var removeEventListeners = function removeEventListeners(element, loadHandler, errorHandler) {
    removeEventListener(element, genericLoadEventName, loadHandler);
    removeEventListener(element, mediaLoadEventName, loadHandler);
    removeEventListener(element, errorEventName, errorHandler);
  };

  var eventHandler = function eventHandler(event, success, instance) {
    var settings = instance._settings;
    var className = success ? settings.class_loaded : settings.class_error;
    var callback = success ? settings.callback_loaded : settings.callback_error;
    var element = event.target;
    removeClass(element, settings.class_loading);
    addClass(element, className);
    safeCallback(callback, element, instance);
    updateLoadingCount(instance, -1);
  };

  var addOneShotEventListeners = function addOneShotEventListeners(element, instance) {
    var loadHandler = function loadHandler(event) {
      eventHandler(event, true, instance);
      removeEventListeners(element, loadHandler, errorHandler);
    };

    var errorHandler = function errorHandler(event) {
      eventHandler(event, false, instance);
      removeEventListeners(element, loadHandler, errorHandler);
    };

    addEventListeners(element, loadHandler, errorHandler);
  };

  var managedTags = ["IMG", "IFRAME", "VIDEO"];

  var onEnter = function onEnter(element, entry, instance) {
    var settings = instance._settings;
    safeCallback(settings.callback_enter, element, entry, instance);

    if (!settings.load_delay) {
      revealAndUnobserve(element, instance);
      return;
    }

    delayLoad(element, instance);
  };

  var revealAndUnobserve = function revealAndUnobserve(element, instance) {
    var observer = instance._observer;
    revealElement(element, instance);

    if (observer && instance._settings.auto_unobserve) {
      observer.unobserve(element);
    }
  };

  var onExit = function onExit(element, entry, instance) {
    var settings = instance._settings;
    safeCallback(settings.callback_exit, element, entry, instance);

    if (!settings.load_delay) {
      return;
    }

    cancelDelayLoad(element);
  };

  var cancelDelayLoad = function cancelDelayLoad(element) {
    var timeoutId = getTimeoutData(element);

    if (!timeoutId) {
      return; // do nothing if timeout doesn't exist
    }

    clearTimeout(timeoutId);
    setTimeoutData(element, null);
  };

  var delayLoad = function delayLoad(element, instance) {
    var loadDelay = instance._settings.load_delay;
    var timeoutId = getTimeoutData(element);

    if (timeoutId) {
      return; // do nothing if timeout already set
    }

    timeoutId = setTimeout(function () {
      revealAndUnobserve(element, instance);
      cancelDelayLoad(element);
    }, loadDelay);
    setTimeoutData(element, timeoutId);
  };

  var revealElement = function revealElement(element, instance, force) {
    var settings = instance._settings;

    if (!force && getWasProcessedData(element)) {
      return; // element has already been processed and force wasn't true
    }

    if (managedTags.indexOf(element.tagName) > -1) {
      addOneShotEventListeners(element, instance);
      addClass(element, settings.class_loading);
    }

    setSources(element, instance);
    setWasProcessedData(element);
    safeCallback(settings.callback_reveal, element, instance);
    safeCallback(settings.callback_set, element, instance);
  };

  var isIntersecting = function isIntersecting(entry) {
    return entry.isIntersecting || entry.intersectionRatio > 0;
  };

  var getObserverSettings = function getObserverSettings(settings) {
    return {
      root: settings.container === document ? null : settings.container,
      rootMargin: settings.thresholds || settings.threshold + "px"
    };
  };

  var setObserver = function setObserver(instance) {
    if (!supportsIntersectionObserver) {
      return false;
    }

    instance._observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        return isIntersecting(entry) ? onEnter(entry.target, entry, instance) : onExit(entry.target, entry, instance);
      });
    }, getObserverSettings(instance._settings));
    return true;
  };

  var nativeLazyTags = ["IMG", "IFRAME"];

  var shouldUseNative = function shouldUseNative(settings) {
    return settings.use_native && "loading" in HTMLImageElement.prototype;
  };

  var loadAllNative = function loadAllNative(instance) {
    instance._elements.forEach(function (element) {
      if (nativeLazyTags.indexOf(element.tagName) === -1) {
        return;
      }

      element.setAttribute("loading", "lazy");
      revealElement(element, instance);
    });
  };

  var nodeSetToArray = function nodeSetToArray(nodeSet) {
    return Array.prototype.slice.call(nodeSet);
  };

  var queryElements = function queryElements(settings) {
    return settings.container.querySelectorAll(settings.elements_selector);
  };

  var getElements = function getElements(elements, settings) {
    return purgeProcessedElements(nodeSetToArray(elements || queryElements(settings)));
  };

  var retryLazyLoad = function retryLazyLoad(instance) {
    var settings = instance._settings;
    var errorElements = settings.container.querySelectorAll("." + settings.class_error);
    errorElements.forEach(function (element) {
      removeClass(element, settings.class_error);
      resetWasProcessedData(element);
    });
    instance.update();
  };

  var setOnlineCheck = function setOnlineCheck(instance) {
    if (!runningOnBrowser) {
      return;
    }

    window.addEventListener("online", function (event) {
      retryLazyLoad(instance);
    });
  };

  var LazyLoad = function LazyLoad(customSettings, elements) {
    this._settings = getInstanceSettings(customSettings);
    this.loadingCount = 0;
    setObserver(this);
    this.update(elements);
    setOnlineCheck(this);
  };

  LazyLoad.prototype = {
    update: function update(elements) {
      var _this = this;

      var settings = this._settings;
      this._elements = getElements(elements, settings);

      if (isBot || !this._observer) {
        this.loadAll();
        return;
      }

      if (shouldUseNative(settings)) {
        loadAllNative(this);
        this._elements = getElements(elements, settings);
      }

      this._elements.forEach(function (element) {
        _this._observer.observe(element);
      });
    },
    destroy: function destroy() {
      var _this2 = this;

      if (this._observer) {
        this._elements.forEach(function (element) {
          _this2._observer.unobserve(element);
        });

        this._observer = null;
      }

      this._elements = null;
      this._settings = null;
    },
    load: function load(element, force) {
      revealElement(element, this, force);
    },
    loadAll: function loadAll() {
      var _this3 = this;

      this._elements.forEach(function (element) {
        revealAndUnobserve(element, _this3);
      });
    }
  };
  /* Automatic instances creation if required (useful for async script loading) */

  if (runningOnBrowser) {
    autoInitialize(LazyLoad, window.lazyLoadOptions);
  }

  return LazyLoad;
});
!function(root, factory) {
    "function" == typeof define && define.amd ? // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function() {
        return root.svg4everybody = factory();
    }) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});
/*! PhotoSwipe - v4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
(function (root, factory) { 
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.PhotoSwipe = factory();
	}
})(this, function () {

	'use strict';
	var PhotoSwipe = function(template, UiClass, items, options){

/*>>framework-bridge*/
/**
 *
 * Set of generic functions used by gallery.
 * 
 * You're free to modify anything here as long as functionality is kept.
 * 
 */
var framework = {
	features: null,
	bind: function(target, type, listener, unbind) {
		var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
		type = type.split(' ');
		for(var i = 0; i < type.length; i++) {
			if(type[i]) {
				target[methodName]( type[i], listener, false);
			}
		}
	},
	isArray: function(obj) {
		return (obj instanceof Array);
	},
	createEl: function(classes, tag) {
		var el = document.createElement(tag || 'div');
		if(classes) {
			el.className = classes;
		}
		return el;
	},
	getScrollY: function() {
		var yOffset = window.pageYOffset;
		return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
	},
	unbind: function(target, type, listener) {
		framework.bind(target,type,listener,true);
	},
	removeClass: function(el, className) {
		var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
		el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, ''); 
	},
	addClass: function(el, className) {
		if( !framework.hasClass(el,className) ) {
			el.className += (el.className ? ' ' : '') + className;
		}
	},
	hasClass: function(el, className) {
		return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
	},
	getChildByClass: function(parentEl, childClassName) {
		var node = parentEl.firstChild;
		while(node) {
			if( framework.hasClass(node, childClassName) ) {
				return node;
			}
			node = node.nextSibling;
		}
	},
	arraySearch: function(array, value, key) {
		var i = array.length;
		while(i--) {
			if(array[i][key] === value) {
				return i;
			} 
		}
		return -1;
	},
	extend: function(o1, o2, preventOverwrite) {
		for (var prop in o2) {
			if (o2.hasOwnProperty(prop)) {
				if(preventOverwrite && o1.hasOwnProperty(prop)) {
					continue;
				}
				o1[prop] = o2[prop];
			}
		}
	},
	easing: {
		sine: {
			out: function(k) {
				return Math.sin(k * (Math.PI / 2));
			},
			inOut: function(k) {
				return - (Math.cos(Math.PI * k) - 1) / 2;
			}
		},
		cubic: {
			out: function(k) {
				return --k * k * k + 1;
			}
		}
		/*
			elastic: {
				out: function ( k ) {

					var s, a = 0.1, p = 0.4;
					if ( k === 0 ) return 0;
					if ( k === 1 ) return 1;
					if ( !a || a < 1 ) { a = 1; s = p / 4; }
					else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
					return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

				},
			},
			back: {
				out: function ( k ) {
					var s = 1.70158;
					return --k * k * ( ( s + 1 ) * k + s ) + 1;
				}
			}
		*/
	},

	/**
	 * 
	 * @return {object}
	 * 
	 * {
	 *  raf : request animation frame function
	 *  caf : cancel animation frame function
	 *  transfrom : transform property key (with vendor), or null if not supported
	 *  oldIE : IE8 or below
	 * }
	 * 
	 */
	detectFeatures: function() {
		if(framework.features) {
			return framework.features;
		}
		var helperEl = framework.createEl(),
			helperStyle = helperEl.style,
			vendor = '',
			features = {};

		// IE8 and below
		features.oldIE = document.all && !document.addEventListener;

		features.touch = 'ontouchstart' in window;

		if(window.requestAnimationFrame) {
			features.raf = window.requestAnimationFrame;
			features.caf = window.cancelAnimationFrame;
		}

		features.pointerEvent = !!(window.PointerEvent) || navigator.msPointerEnabled;

		// fix false-positive detection of old Android in new IE
		// (IE11 ua string contains "Android 4.0")
		
		if(!features.pointerEvent) { 

			var ua = navigator.userAgent;

			// Detect if device is iPhone or iPod and if it's older than iOS 8
			// http://stackoverflow.com/a/14223920
			// 
			// This detection is made because of buggy top/bottom toolbars
			// that don't trigger window.resize event.
			// For more info refer to _isFixedPosition variable in core.js

			if (/iP(hone|od)/.test(navigator.platform)) {
				var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
				if(v && v.length > 0) {
					v = parseInt(v[1], 10);
					if(v >= 1 && v < 8 ) {
						features.isOldIOSPhone = true;
					}
				}
			}

			// Detect old Android (before KitKat)
			// due to bugs related to position:fixed
			// http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript
			
			var match = ua.match(/Android\s([0-9\.]*)/);
			var androidversion =  match ? match[1] : 0;
			androidversion = parseFloat(androidversion);
			if(androidversion >= 1 ) {
				if(androidversion < 4.4) {
					features.isOldAndroid = true; // for fixed position bug & performance
				}
				features.androidVersion = androidversion; // for touchend bug
			}	
			features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

			// p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
		}
		
		var styleChecks = ['transform', 'perspective', 'animationName'],
			vendors = ['', 'webkit','Moz','ms','O'],
			styleCheckItem,
			styleName;

		for(var i = 0; i < 4; i++) {
			vendor = vendors[i];

			for(var a = 0; a < 3; a++) {
				styleCheckItem = styleChecks[a];

				// uppercase first letter of property name, if vendor is present
				styleName = vendor + (vendor ? 
										styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) : 
										styleCheckItem);
			
				if(!features[styleCheckItem] && styleName in helperStyle ) {
					features[styleCheckItem] = styleName;
				}
			}

			if(vendor && !features.raf) {
				vendor = vendor.toLowerCase();
				features.raf = window[vendor+'RequestAnimationFrame'];
				if(features.raf) {
					features.caf = window[vendor+'CancelAnimationFrame'] || 
									window[vendor+'CancelRequestAnimationFrame'];
				}
			}
		}
			
		if(!features.raf) {
			var lastTime = 0;
			features.raf = function(fn) {
				var currTime = new Date().getTime();
				var timeToCall = Math.max(0, 16 - (currTime - lastTime));
				var id = window.setTimeout(function() { fn(currTime + timeToCall); }, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
			features.caf = function(id) { clearTimeout(id); };
		}

		// Detect SVG support
		features.svg = !!document.createElementNS && 
						!!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

		framework.features = features;

		return features;
	}
};

framework.detectFeatures();

// Override addEventListener for old versions of IE
if(framework.features.oldIE) {

	framework.bind = function(target, type, listener, unbind) {
		
		type = type.split(' ');

		var methodName = (unbind ? 'detach' : 'attach') + 'Event',
			evName,
			_handleEv = function() {
				listener.handleEvent.call(listener);
			};

		for(var i = 0; i < type.length; i++) {
			evName = type[i];
			if(evName) {

				if(typeof listener === 'object' && listener.handleEvent) {
					if(!unbind) {
						listener['oldIE' + evName] = _handleEv;
					} else {
						if(!listener['oldIE' + evName]) {
							return false;
						}
					}

					target[methodName]( 'on' + evName, listener['oldIE' + evName]);
				} else {
					target[methodName]( 'on' + evName, listener);
				}

			}
		}
	};
	
}

/*>>framework-bridge*/

/*>>core*/
//function(template, UiClass, items, options)

var self = this;

/**
 * Static vars, don't change unless you know what you're doing.
 */
var DOUBLE_TAP_RADIUS = 25, 
	NUM_HOLDERS = 3;

/**
 * Options
 */
var _options = {
	allowPanToNext:true,
	spacing: 0.12,
	bgOpacity: 1,
	mouseUsed: false,
	loop: true,
	pinchToClose: true,
	closeOnScroll: true,
	closeOnVerticalDrag: true,
	verticalDragRange: 0.75,
	hideAnimationDuration: 333,
	showAnimationDuration: 333,
	showHideOpacity: false,
	focus: true,
	escKey: true,
	arrowKeys: true,
	mainScrollEndFriction: 0.35,
	panEndFriction: 0.35,
	isClickableElement: function(el) {
        return el.tagName === 'A';
    },
    getDoubleTapZoom: function(isMouseClick, item) {
    	if(isMouseClick) {
    		return 1;
    	} else {
    		return item.initialZoomLevel < 0.7 ? 1 : 1.33;
    	}
    },
    maxSpreadZoom: 1.33,
	modal: true,

	// not fully implemented yet
	scaleMode: 'fit' // TODO
};
framework.extend(_options, options);


/**
 * Private helper variables & functions
 */

var _getEmptyPoint = function() { 
		return {x:0,y:0}; 
	};

var _isOpen,
	_isDestroying,
	_closedByScroll,
	_currentItemIndex,
	_containerStyle,
	_containerShiftIndex,
	_currPanDist = _getEmptyPoint(),
	_startPanOffset = _getEmptyPoint(),
	_panOffset = _getEmptyPoint(),
	_upMoveEvents, // drag move, drag end & drag cancel events array
	_downEvents, // drag start events array
	_globalEventHandlers,
	_viewportSize = {},
	_currZoomLevel,
	_startZoomLevel,
	_translatePrefix,
	_translateSufix,
	_updateSizeInterval,
	_itemsNeedUpdate,
	_currPositionIndex = 0,
	_offset = {},
	_slideSize = _getEmptyPoint(), // size of slide area, including spacing
	_itemHolders,
	_prevItemIndex,
	_indexDiff = 0, // difference of indexes since last content update
	_dragStartEvent,
	_dragMoveEvent,
	_dragEndEvent,
	_dragCancelEvent,
	_transformKey,
	_pointerEventEnabled,
	_isFixedPosition = true,
	_likelyTouchDevice,
	_modules = [],
	_requestAF,
	_cancelAF,
	_initalClassName,
	_initalWindowScrollY,
	_oldIE,
	_currentWindowScrollY,
	_features,
	_windowVisibleSize = {},
	_renderMaxResolution = false,
	_orientationChangeTimeout,


	// Registers PhotoSWipe module (History, Controller ...)
	_registerModule = function(name, module) {
		framework.extend(self, module.publicMethods);
		_modules.push(name);
	},

	_getLoopedId = function(index) {
		var numSlides = _getNumItems();
		if(index > numSlides - 1) {
			return index - numSlides;
		} else  if(index < 0) {
			return numSlides + index;
		}
		return index;
	},
	
	// Micro bind/trigger
	_listeners = {},
	_listen = function(name, fn) {
		if(!_listeners[name]) {
			_listeners[name] = [];
		}
		return _listeners[name].push(fn);
	},
	_shout = function(name) {
		var listeners = _listeners[name];

		if(listeners) {
			var args = Array.prototype.slice.call(arguments);
			args.shift();

			for(var i = 0; i < listeners.length; i++) {
				listeners[i].apply(self, args);
			}
		}
	},

	_getCurrentTime = function() {
		return new Date().getTime();
	},
	_applyBgOpacity = function(opacity) {
		_bgOpacity = opacity;
		self.bg.style.opacity = opacity * _options.bgOpacity;
	},

	_applyZoomTransform = function(styleObj,x,y,zoom,item) {
		if(!_renderMaxResolution || (item && item !== self.currItem) ) {
			zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);	
		}
			
		styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
	},
	_applyCurrentZoomPan = function( allowRenderResolution ) {
		if(_currZoomElementStyle) {

			if(allowRenderResolution) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					if(!_renderMaxResolution) {
						_setImageSize(self.currItem, false, true);
						_renderMaxResolution = true;
					}
				} else {
					if(_renderMaxResolution) {
						_setImageSize(self.currItem);
						_renderMaxResolution = false;
					}
				}
			}
			

			_applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
		}
	},
	_applyZoomPanToItem = function(item) {
		if(item.container) {

			_applyZoomTransform(item.container.style, 
								item.initialPosition.x, 
								item.initialPosition.y, 
								item.initialZoomLevel,
								item);
		}
	},
	_setTranslateX = function(x, elStyle) {
		elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
	},
	_moveMainScroll = function(x, dragging) {

		if(!_options.loop && dragging) {
			var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
				delta = Math.round(x - _mainScrollPos.x);

			if( (newSlideIndexOffset < 0 && delta > 0) || 
				(newSlideIndexOffset >= _getNumItems() - 1 && delta < 0) ) {
				x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
			} 
		}
		
		_mainScrollPos.x = x;
		_setTranslateX(x, _containerStyle);
	},
	_calculatePanOffset = function(axis, zoomLevel) {
		var m = _midZoomPoint[axis] - _offset[axis];
		return _startPanOffset[axis] + _currPanDist[axis] + m - m * ( zoomLevel / _startZoomLevel );
	},
	
	_equalizePoints = function(p1, p2) {
		p1.x = p2.x;
		p1.y = p2.y;
		if(p2.id) {
			p1.id = p2.id;
		}
	},
	_roundPoint = function(p) {
		p.x = Math.round(p.x);
		p.y = Math.round(p.y);
	},

	_mouseMoveTimeout = null,
	_onFirstMouseMove = function() {
		// Wait until mouse move event is fired at least twice during 100ms
		// We do this, because some mobile browsers trigger it on touchstart
		if(_mouseMoveTimeout ) { 
			framework.unbind(document, 'mousemove', _onFirstMouseMove);
			framework.addClass(template, 'pswp--has_mouse');
			_options.mouseUsed = true;
			_shout('mouseUsed');
		}
		_mouseMoveTimeout = setTimeout(function() {
			_mouseMoveTimeout = null;
		}, 100);
	},

	_bindEvents = function() {
		framework.bind(document, 'keydown', self);

		if(_features.transform) {
			// don't bind click event in browsers that don't support transform (mostly IE8)
			framework.bind(self.scrollWrap, 'click', self);
		}
		

		if(!_options.mouseUsed) {
			framework.bind(document, 'mousemove', _onFirstMouseMove);
		}

		framework.bind(window, 'resize scroll orientationchange', self);

		_shout('bindEvents');
	},

	_unbindEvents = function() {
		framework.unbind(window, 'resize scroll orientationchange', self);
		framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
		framework.unbind(document, 'keydown', self);
		framework.unbind(document, 'mousemove', _onFirstMouseMove);

		if(_features.transform) {
			framework.unbind(self.scrollWrap, 'click', self);
		}

		if(_isDragging) {
			framework.unbind(window, _upMoveEvents, self);
		}

		clearTimeout(_orientationChangeTimeout);

		_shout('unbindEvents');
	},
	
	_calculatePanBounds = function(zoomLevel, update) {
		var bounds = _calculateItemSize( self.currItem, _viewportSize, zoomLevel );
		if(update) {
			_currPanBounds = bounds;
		}
		return bounds;
	},
	
	_getMinZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.initialZoomLevel;
	},
	_getMaxZoomLevel = function(item) {
		if(!item) {
			item = self.currItem;
		}
		return item.w > 0 ? _options.maxSpreadZoom : 1;
	},

	// Return true if offset is out of the bounds
	_modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
		if(destZoomLevel === self.currItem.initialZoomLevel) {
			destPanOffset[axis] = self.currItem.initialPosition[axis];
			return true;
		} else {
			destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel); 

			if(destPanOffset[axis] > destPanBounds.min[axis]) {
				destPanOffset[axis] = destPanBounds.min[axis];
				return true;
			} else if(destPanOffset[axis] < destPanBounds.max[axis] ) {
				destPanOffset[axis] = destPanBounds.max[axis];
				return true;
			}
		}
		return false;
	},

	_setupTransforms = function() {

		if(_transformKey) {
			// setup 3d transforms
			var allow3dTransform = _features.perspective && !_likelyTouchDevice;
			_translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
			_translateSufix = _features.perspective ? ', 0px)' : ')';	
			return;
		}

		// Override zoom/pan/move functions in case old browser is used (most likely IE)
		// (so they use left/top/width/height, instead of CSS transform)
	
		_transformKey = 'left';
		framework.addClass(template, 'pswp--ie');

		_setTranslateX = function(x, elStyle) {
			elStyle.left = x + 'px';
		};
		_applyZoomPanToItem = function(item) {

			var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
				s = item.container.style,
				w = zoomRatio * item.w,
				h = zoomRatio * item.h;

			s.width = w + 'px';
			s.height = h + 'px';
			s.left = item.initialPosition.x + 'px';
			s.top = item.initialPosition.y + 'px';

		};
		_applyCurrentZoomPan = function() {
			if(_currZoomElementStyle) {

				var s = _currZoomElementStyle,
					item = self.currItem,
					zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
					w = zoomRatio * item.w,
					h = zoomRatio * item.h;

				s.width = w + 'px';
				s.height = h + 'px';


				s.left = _panOffset.x + 'px';
				s.top = _panOffset.y + 'px';
			}
			
		};
	},

	_onKeyDown = function(e) {
		var keydownAction = '';
		if(_options.escKey && e.keyCode === 27) { 
			keydownAction = 'close';
		} else if(_options.arrowKeys) {
			if(e.keyCode === 37) {
				keydownAction = 'prev';
			} else if(e.keyCode === 39) { 
				keydownAction = 'next';
			}
		}

		if(keydownAction) {
			// don't do anything if special key pressed to prevent from overriding default browser actions
			// e.g. in Chrome on Mac cmd+arrow-left returns to previous page
			if( !e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey ) {
				if(e.preventDefault) {
					e.preventDefault();
				} else {
					e.returnValue = false;
				} 
				self[keydownAction]();
			}
		}
	},

	_onGlobalClick = function(e) {
		if(!e) {
			return;
		}

		// don't allow click event to pass through when triggering after drag or some other gesture
		if(_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
			e.preventDefault();
			e.stopPropagation();
		}
	},

	_updatePageScrollOffset = function() {
		self.setScrollOffset(0, framework.getScrollY());		
	};
	


	



// Micro animation engine
var _animations = {},
	_numAnimations = 0,
	_stopAnimation = function(name) {
		if(_animations[name]) {
			if(_animations[name].raf) {
				_cancelAF( _animations[name].raf );
			}
			_numAnimations--;
			delete _animations[name];
		}
	},
	_registerStartAnimation = function(name) {
		if(_animations[name]) {
			_stopAnimation(name);
		}
		if(!_animations[name]) {
			_numAnimations++;
			_animations[name] = {};
		}
	},
	_stopAllAnimations = function() {
		for (var prop in _animations) {

			if( _animations.hasOwnProperty( prop ) ) {
				_stopAnimation(prop);
			} 
			
		}
	},
	_animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
		var startAnimTime = _getCurrentTime(), t;
		_registerStartAnimation(name);

		var animloop = function(){
			if ( _animations[name] ) {
				
				t = _getCurrentTime() - startAnimTime; // time diff
				//b - beginning (start prop)
				//d - anim duration

				if ( t >= d ) {
					_stopAnimation(name);
					onUpdate(endProp);
					if(onComplete) {
						onComplete();
					}
					return;
				}
				onUpdate( (endProp - b) * easingFn(t/d) + b );

				_animations[name].raf = _requestAF(animloop);
			}
		};
		animloop();
	};
	


var publicMethods = {

	// make a few local variables and functions public
	shout: _shout,
	listen: _listen,
	viewportSize: _viewportSize,
	options: _options,

	isMainScrollAnimating: function() {
		return _mainScrollAnimating;
	},
	getZoomLevel: function() {
		return _currZoomLevel;
	},
	getCurrentIndex: function() {
		return _currentItemIndex;
	},
	isDragging: function() {
		return _isDragging;
	},	
	isZooming: function() {
		return _isZooming;
	},
	setScrollOffset: function(x,y) {
		_offset.x = x;
		_currentWindowScrollY = _offset.y = y;
		_shout('updateScrollOffset', _offset);
	},
	applyZoomPan: function(zoomLevel,panX,panY,allowRenderResolution) {
		_panOffset.x = panX;
		_panOffset.y = panY;
		_currZoomLevel = zoomLevel;
		_applyCurrentZoomPan( allowRenderResolution );
	},

	init: function() {

		if(_isOpen || _isDestroying) {
			return;
		}

		var i;

		self.framework = framework; // basic functionality
		self.template = template; // root DOM element of PhotoSwipe
		self.bg = framework.getChildByClass(template, 'pswp__bg');

		_initalClassName = template.className;
		_isOpen = true;
				
		_features = framework.detectFeatures();
		_requestAF = _features.raf;
		_cancelAF = _features.caf;
		_transformKey = _features.transform;
		_oldIE = _features.oldIE;
		
		self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
		self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

		_containerStyle = self.container.style; // for fast access

		// Objects that hold slides (there are only 3 in DOM)
		self.itemHolders = _itemHolders = [
			{el:self.container.children[0] , wrap:0, index: -1},
			{el:self.container.children[1] , wrap:0, index: -1},
			{el:self.container.children[2] , wrap:0, index: -1}
		];

		// hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
		_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

		_setupTransforms();

		// Setup global events
		_globalEventHandlers = {
			resize: self.updateSize,

			// Fixes: iOS 10.3 resize event
			// does not update scrollWrap.clientWidth instantly after resize
			// https://github.com/dimsemenov/PhotoSwipe/issues/1315
			orientationchange: function() {
				clearTimeout(_orientationChangeTimeout);
				_orientationChangeTimeout = setTimeout(function() {
					if(_viewportSize.x !== self.scrollWrap.clientWidth) {
						self.updateSize();
					}
				}, 500);
			},
			scroll: _updatePageScrollOffset,
			keydown: _onKeyDown,
			click: _onGlobalClick
		};

		// disable show/hide effects on old browsers that don't support CSS animations or transforms, 
		// old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
		var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
		if(!_features.animationName || !_features.transform || oldPhone) {
			_options.showAnimationDuration = _options.hideAnimationDuration = 0;
		}

		// init modules
		for(i = 0; i < _modules.length; i++) {
			self['init' + _modules[i]]();
		}
		
		// init
		if(UiClass) {
			var ui = self.ui = new UiClass(self, framework);
			ui.init();
		}

		_shout('firstUpdate');
		_currentItemIndex = _currentItemIndex || _options.index || 0;
		// validate index
		if( isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems() ) {
			_currentItemIndex = 0;
		}
		self.currItem = _getItemAt( _currentItemIndex );

		
		if(_features.isOldIOSPhone || _features.isOldAndroid) {
			_isFixedPosition = false;
		}
		
		template.setAttribute('aria-hidden', 'false');
		if(_options.modal) {
			if(!_isFixedPosition) {
				template.style.position = 'absolute';
				template.style.top = framework.getScrollY() + 'px';
			} else {
				template.style.position = 'fixed';
			}
		}

		if(_currentWindowScrollY === undefined) {
			_shout('initialLayout');
			_currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
		}
		
		// add classes to root element of PhotoSwipe
		var rootClasses = 'pswp--open ';
		if(_options.mainClass) {
			rootClasses += _options.mainClass + ' ';
		}
		if(_options.showHideOpacity) {
			rootClasses += 'pswp--animate_opacity ';
		}
		rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
		rootClasses += _features.animationName ? ' pswp--css_animation' : '';
		rootClasses += _features.svg ? ' pswp--svg' : '';
		framework.addClass(template, rootClasses);

		self.updateSize();

		// initial update
		_containerShiftIndex = -1;
		_indexDiff = null;
		for(i = 0; i < NUM_HOLDERS; i++) {
			_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
		}

		if(!_oldIE) {
			framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
		}	

		_listen('initialZoomInEnd', function() {
			self.setContent(_itemHolders[0], _currentItemIndex-1);
			self.setContent(_itemHolders[2], _currentItemIndex+1);

			_itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

			if(_options.focus) {
				// focus causes layout, 
				// which causes lag during the animation, 
				// that's why we delay it untill the initial zoom transition ends
				template.focus();
			}
			 

			_bindEvents();
		});

		// set content for center slide (first time)
		self.setContent(_itemHolders[1], _currentItemIndex);
		
		self.updateCurrItem();

		_shout('afterInit');

		if(!_isFixedPosition) {

			// On all versions of iOS lower than 8.0, we check size of viewport every second.
			// 
			// This is done to detect when Safari top & bottom bars appear, 
			// as this action doesn't trigger any events (like resize). 
			// 
			// On iOS8 they fixed this.
			// 
			// 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.
			
			_updateSizeInterval = setInterval(function() {
				if(!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)  ) {
					self.updateSize();
				}
			}, 1000);
		}

		framework.addClass(template, 'pswp--visible');
	},

	// Close the gallery, then destroy it
	close: function() {
		if(!_isOpen) {
			return;
		}

		_isOpen = false;
		_isDestroying = true;
		_shout('close');
		_unbindEvents();

		_showOrHide(self.currItem, null, true, self.destroy);
	},

	// destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
	destroy: function() {
		_shout('destroy');

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}
		
		template.setAttribute('aria-hidden', 'true');
		template.className = _initalClassName;

		if(_updateSizeInterval) {
			clearInterval(_updateSizeInterval);
		}

		framework.unbind(self.scrollWrap, _downEvents, self);

		// we unbind scroll event at the end, as closing animation may depend on it
		framework.unbind(window, 'scroll', self);

		_stopDragUpdateLoop();

		_stopAllAnimations();

		_listeners = null;
	},

	/**
	 * Pan image to position
	 * @param {Number} x     
	 * @param {Number} y     
	 * @param {Boolean} force Will ignore bounds if set to true.
	 */
	panTo: function(x,y,force) {
		if(!force) {
			if(x > _currPanBounds.min.x) {
				x = _currPanBounds.min.x;
			} else if(x < _currPanBounds.max.x) {
				x = _currPanBounds.max.x;
			}

			if(y > _currPanBounds.min.y) {
				y = _currPanBounds.min.y;
			} else if(y < _currPanBounds.max.y) {
				y = _currPanBounds.max.y;
			}
		}
		
		_panOffset.x = x;
		_panOffset.y = y;
		_applyCurrentZoomPan();
	},
	
	handleEvent: function (e) {
		e = e || window.event;
		if(_globalEventHandlers[e.type]) {
			_globalEventHandlers[e.type](e);
		}
	},


	goTo: function(index) {

		index = _getLoopedId(index);

		var diff = index - _currentItemIndex;
		_indexDiff = diff;

		_currentItemIndex = index;
		self.currItem = _getItemAt( _currentItemIndex );
		_currPositionIndex -= diff;
		
		_moveMainScroll(_slideSize.x * _currPositionIndex);
		

		_stopAllAnimations();
		_mainScrollAnimating = false;

		self.updateCurrItem();
	},
	next: function() {
		self.goTo( _currentItemIndex + 1);
	},
	prev: function() {
		self.goTo( _currentItemIndex - 1);
	},

	// update current zoom/pan objects
	updateCurrZoomItem: function(emulateSetContent) {
		if(emulateSetContent) {
			_shout('beforeChange', 0);
		}

		// itemHolder[1] is middle (current) item
		if(_itemHolders[1].el.children.length) {
			var zoomElement = _itemHolders[1].el.children[0];
			if( framework.hasClass(zoomElement, 'pswp__zoom-wrap') ) {
				_currZoomElementStyle = zoomElement.style;
			} else {
				_currZoomElementStyle = null;
			}
		} else {
			_currZoomElementStyle = null;
		}
		
		_currPanBounds = self.currItem.bounds;	
		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

		_panOffset.x = _currPanBounds.center.x;
		_panOffset.y = _currPanBounds.center.y;

		if(emulateSetContent) {
			_shout('afterChange');
		}
	},


	invalidateCurrItems: function() {
		_itemsNeedUpdate = true;
		for(var i = 0; i < NUM_HOLDERS; i++) {
			if( _itemHolders[i].item ) {
				_itemHolders[i].item.needsUpdate = true;
			}
		}
	},

	updateCurrItem: function(beforeAnimation) {

		if(_indexDiff === 0) {
			return;
		}

		var diffAbs = Math.abs(_indexDiff),
			tempHolder;

		if(beforeAnimation && diffAbs < 2) {
			return;
		}


		self.currItem = _getItemAt( _currentItemIndex );
		_renderMaxResolution = false;
		
		_shout('beforeChange', _indexDiff);

		if(diffAbs >= NUM_HOLDERS) {
			_containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
			diffAbs = NUM_HOLDERS;
		}
		for(var i = 0; i < diffAbs; i++) {
			if(_indexDiff > 0) {
				tempHolder = _itemHolders.shift();
				_itemHolders[NUM_HOLDERS-1] = tempHolder; // move first to last

				_containerShiftIndex++;
				_setTranslateX( (_containerShiftIndex+2) * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
			} else {
				tempHolder = _itemHolders.pop();
				_itemHolders.unshift( tempHolder ); // move last to first

				_containerShiftIndex--;
				_setTranslateX( _containerShiftIndex * _slideSize.x, tempHolder.el.style);
				self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
			}
			
		}

		// reset zoom/pan on previous item
		if(_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

			var prevItem = _getItemAt(_prevItemIndex);
			if(prevItem.initialZoomLevel !== _currZoomLevel) {
				_calculateItemSize(prevItem , _viewportSize );
				_setImageSize(prevItem);
				_applyZoomPanToItem( prevItem ); 				
			}

		}

		// reset diff after update
		_indexDiff = 0;

		self.updateCurrZoomItem();

		_prevItemIndex = _currentItemIndex;

		_shout('afterChange');
		
	},



	updateSize: function(force) {
		
		if(!_isFixedPosition && _options.modal) {
			var windowScrollY = framework.getScrollY();
			if(_currentWindowScrollY !== windowScrollY) {
				template.style.top = windowScrollY + 'px';
				_currentWindowScrollY = windowScrollY;
			}
			if(!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
				return;
			}
			_windowVisibleSize.x = window.innerWidth;
			_windowVisibleSize.y = window.innerHeight;

			//template.style.width = _windowVisibleSize.x + 'px';
			template.style.height = _windowVisibleSize.y + 'px';
		}



		_viewportSize.x = self.scrollWrap.clientWidth;
		_viewportSize.y = self.scrollWrap.clientHeight;

		_updatePageScrollOffset();

		_slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
		_slideSize.y = _viewportSize.y;

		_moveMainScroll(_slideSize.x * _currPositionIndex);

		_shout('beforeResize'); // even may be used for example to switch image sources


		// don't re-calculate size on inital size update
		if(_containerShiftIndex !== undefined) {

			var holder,
				item,
				hIndex;

			for(var i = 0; i < NUM_HOLDERS; i++) {
				holder = _itemHolders[i];
				_setTranslateX( (i+_containerShiftIndex) * _slideSize.x, holder.el.style);

				hIndex = _currentItemIndex+i-1;

				if(_options.loop && _getNumItems() > 2) {
					hIndex = _getLoopedId(hIndex);
				}

				// update zoom level on items and refresh source (if needsUpdate)
				item = _getItemAt( hIndex );

				// re-render gallery item if `needsUpdate`,
				// or doesn't have `bounds` (entirely new slide object)
				if( item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds) ) {

					self.cleanSlide( item );
					
					self.setContent( holder, hIndex );

					// if "center" slide
					if(i === 1) {
						self.currItem = item;
						self.updateCurrZoomItem(true);
					}

					item.needsUpdate = false;

				} else if(holder.index === -1 && hIndex >= 0) {
					// add content first time
					self.setContent( holder, hIndex );
				}
				if(item && item.container) {
					_calculateItemSize(item, _viewportSize);
					_setImageSize(item);
					_applyZoomPanToItem( item );
				}
				
			}
			_itemsNeedUpdate = false;
		}	

		_startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
		_currPanBounds = self.currItem.bounds;

		if(_currPanBounds) {
			_panOffset.x = _currPanBounds.center.x;
			_panOffset.y = _currPanBounds.center.y;
			_applyCurrentZoomPan( true );
		}
		
		_shout('resize');
	},
	
	// Zoom current item to
	zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
		/*
			if(destZoomLevel === 'fit') {
				destZoomLevel = self.currItem.fitRatio;
			} else if(destZoomLevel === 'fill') {
				destZoomLevel = self.currItem.fillRatio;
			}
		*/

		if(centerPoint) {
			_startZoomLevel = _currZoomLevel;
			_midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x ;
			_midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y ;
			_equalizePoints(_startPanOffset, _panOffset);
		}

		var destPanBounds = _calculatePanBounds(destZoomLevel, false),
			destPanOffset = {};

		_modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
		_modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

		var initialZoomLevel = _currZoomLevel;
		var initialPanOffset = {
			x: _panOffset.x,
			y: _panOffset.y
		};

		_roundPoint(destPanOffset);

		var onUpdate = function(now) {
			if(now === 1) {
				_currZoomLevel = destZoomLevel;
				_panOffset.x = destPanOffset.x;
				_panOffset.y = destPanOffset.y;
			} else {
				_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
				_panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
				_panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
			}

			if(updateFn) {
				updateFn(now);
			}

			_applyCurrentZoomPan( now === 1 );
		};

		if(speed) {
			_animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
		} else {
			onUpdate(1);
		}
	}


};


/*>>core*/

/*>>gestures*/
/**
 * Mouse/touch/pointer event handlers.
 * 
 * separated from @core.js for readability
 */

var MIN_SWIPE_DISTANCE = 30,
	DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

var _gestureStartTime,
	_gestureCheckSpeedTime,

	// pool of objects that are used during dragging of zooming
	p = {}, // first point
	p2 = {}, // second point (for zoom gesture)
	delta = {},
	_currPoint = {},
	_startPoint = {},
	_currPointers = [],
	_startMainScrollPos = {},
	_releaseAnimData,
	_posPoints = [], // array of points during dragging, used to determine type of gesture
	_tempPoint = {},

	_isZoomingIn,
	_verticalDragInitiated,
	_oldAndroidTouchEndTimeout,
	_currZoomedItemIndex = 0,
	_centerPoint = _getEmptyPoint(),
	_lastReleaseTime = 0,
	_isDragging, // at least one pointer is down
	_isMultitouch, // at least two _pointers are down
	_zoomStarted, // zoom level changed during zoom gesture
	_moved,
	_dragAnimFrame,
	_mainScrollShifted,
	_currentPoints, // array of current touch points
	_isZooming,
	_currPointsDistance,
	_startPointsDistance,
	_currPanBounds,
	_mainScrollPos = _getEmptyPoint(),
	_currZoomElementStyle,
	_mainScrollAnimating, // true, if animation after swipe gesture is running
	_midZoomPoint = _getEmptyPoint(),
	_currCenterPoint = _getEmptyPoint(),
	_direction,
	_isFirstMove,
	_opacityChanged,
	_bgOpacity,
	_wasOverInitialZoom,

	_isEqualPoints = function(p1, p2) {
		return p1.x === p2.x && p1.y === p2.y;
	},
	_isNearbyPoints = function(touch0, touch1) {
		return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
	},
	_calculatePointsDistance = function(p1, p2) {
		_tempPoint.x = Math.abs( p1.x - p2.x );
		_tempPoint.y = Math.abs( p1.y - p2.y );
		return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
	},
	_stopDragUpdateLoop = function() {
		if(_dragAnimFrame) {
			_cancelAF(_dragAnimFrame);
			_dragAnimFrame = null;
		}
	},
	_dragUpdateLoop = function() {
		if(_isDragging) {
			_dragAnimFrame = _requestAF(_dragUpdateLoop);
			_renderMovement();
		}
	},
	_canPan = function() {
		return !(_options.scaleMode === 'fit' && _currZoomLevel ===  self.currItem.initialZoomLevel);
	},
	
	// find the closest parent DOM element
	_closestElement = function(el, fn) {
	  	if(!el || el === document) {
	  		return false;
	  	}

	  	// don't search elements above pswp__scroll-wrap
	  	if(el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1 ) {
	  		return false;
	  	}

	  	if( fn(el) ) {
	  		return el;
	  	}

	  	return _closestElement(el.parentNode, fn);
	},

	_preventObj = {},
	_preventDefaultEventBehaviour = function(e, isDown) {
	    _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

		_shout('preventDragEvent', e, isDown, _preventObj);
		return _preventObj.prevent;

	},
	_convertTouchToPoint = function(touch, p) {
		p.x = touch.pageX;
		p.y = touch.pageY;
		p.id = touch.identifier;
		return p;
	},
	_findCenterOfPoints = function(p1, p2, pCenter) {
		pCenter.x = (p1.x + p2.x) * 0.5;
		pCenter.y = (p1.y + p2.y) * 0.5;
	},
	_pushPosPoint = function(time, x, y) {
		if(time - _gestureCheckSpeedTime > 50) {
			var o = _posPoints.length > 2 ? _posPoints.shift() : {};
			o.x = x;
			o.y = y; 
			_posPoints.push(o);
			_gestureCheckSpeedTime = time;
		}
	},

	_calculateVerticalDragOpacityRatio = function() {
		var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
		return 1 -  Math.abs( yOffset / (_viewportSize.y / 2)  );
	},

	
	// points pool, reused during touch events
	_ePoint1 = {},
	_ePoint2 = {},
	_tempPointsArr = [],
	_tempCounter,
	_getTouchPoints = function(e) {
		// clean up previous points, without recreating array
		while(_tempPointsArr.length > 0) {
			_tempPointsArr.pop();
		}

		if(!_pointerEventEnabled) {
			if(e.type.indexOf('touch') > -1) {

				if(e.touches && e.touches.length > 0) {
					_tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
					if(e.touches.length > 1) {
						_tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
					}
				}
				
			} else {
				_ePoint1.x = e.pageX;
				_ePoint1.y = e.pageY;
				_ePoint1.id = '';
				_tempPointsArr[0] = _ePoint1;//_ePoint1;
			}
		} else {
			_tempCounter = 0;
			// we can use forEach, as pointer events are supported only in modern browsers
			_currPointers.forEach(function(p) {
				if(_tempCounter === 0) {
					_tempPointsArr[0] = p;
				} else if(_tempCounter === 1) {
					_tempPointsArr[1] = p;
				}
				_tempCounter++;

			});
		}
		return _tempPointsArr;
	},

	_panOrMoveMainScroll = function(axis, delta) {

		var panFriction,
			overDiff = 0,
			newOffset = _panOffset[axis] + delta[axis],
			startOverDiff,
			dir = delta[axis] > 0,
			newMainScrollPosition = _mainScrollPos.x + delta.x,
			mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
			newPanPos,
			newMainScrollPos;

		// calculate fdistance over the bounds and friction
		if(newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
			panFriction = _options.panEndFriction;
			// Linear increasing of friction, so at 1/4 of viewport it's at max value. 
			// Looks not as nice as was expected. Left for history.
			// panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
		} else {
			panFriction = 1;
		}
		
		newOffset = _panOffset[axis] + delta[axis] * panFriction;

		// move main scroll or start panning
		if(_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


			if(!_currZoomElementStyle) {
				
				newMainScrollPos = newMainScrollPosition;

			} else if(_direction === 'h' && axis === 'x' && !_zoomStarted ) {
				
				if(dir) {
					if(newOffset > _currPanBounds.min[axis]) {
						panFriction = _options.panEndFriction;
						overDiff = _currPanBounds.min[axis] - newOffset;
						startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
					}
					
					// drag right
					if( (startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;
						if(mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}
					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
						
					}

				} else {

					if(newOffset < _currPanBounds.max[axis] ) {
						panFriction =_options.panEndFriction;
						overDiff = newOffset - _currPanBounds.max[axis];
						startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
					}

					if( (startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1 ) {
						newMainScrollPos = newMainScrollPosition;

						if(mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
							newMainScrollPos = _startMainScrollPos.x;
						}

					} else {
						if(_currPanBounds.min.x !== _currPanBounds.max.x) {
							newPanPos = newOffset;
						}
					}

				}


				//
			}

			if(axis === 'x') {

				if(newMainScrollPos !== undefined) {
					_moveMainScroll(newMainScrollPos, true);
					if(newMainScrollPos === _startMainScrollPos.x) {
						_mainScrollShifted = false;
					} else {
						_mainScrollShifted = true;
					}
				}

				if(_currPanBounds.min.x !== _currPanBounds.max.x) {
					if(newPanPos !== undefined) {
						_panOffset.x = newPanPos;
					} else if(!_mainScrollShifted) {
						_panOffset.x += delta.x * panFriction;
					}
				}

				return newMainScrollPos !== undefined;
			}

		}

		if(!_mainScrollAnimating) {
			
			if(!_mainScrollShifted) {
				if(_currZoomLevel > self.currItem.fitRatio) {
					_panOffset[axis] += delta[axis] * panFriction;
				
				}
			}

			
		}
		
	},

	// Pointerdown/touchstart/mousedown handler
	_onDragStart = function(e) {

		// Allow dragging only via left mouse button.
		// As this handler is not added in IE8 - we ignore e.which
		// 
		// http://www.quirksmode.org/js/events_properties.html
		// https://developer.mozilla.org/en-US/docs/Web/API/event.button
		if(e.type === 'mousedown' && e.button > 0  ) {
			return;
		}

		if(_initialZoomRunning) {
			e.preventDefault();
			return;
		}

		if(_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
			return;
		}

		if(_preventDefaultEventBehaviour(e, true)) {
			e.preventDefault();
		}



		_shout('pointerDown');

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex < 0) {
				pointerIndex = _currPointers.length;
			}
			_currPointers[pointerIndex] = {x:e.pageX, y:e.pageY, id: e.pointerId};
		}
		


		var startPointsList = _getTouchPoints(e),
			numPoints = startPointsList.length;

		_currentPoints = null;

		_stopAllAnimations();

		// init drag
		if(!_isDragging || numPoints === 1) {

			

			_isDragging = _isFirstMove = true;
			framework.bind(window, _upMoveEvents, self);

			_isZoomingIn = 
				_wasOverInitialZoom = 
				_opacityChanged = 
				_verticalDragInitiated = 
				_mainScrollShifted = 
				_moved = 
				_isMultitouch = 
				_zoomStarted = false;

			_direction = null;

			_shout('firstTouchStart', startPointsList);

			_equalizePoints(_startPanOffset, _panOffset);

			_currPanDist.x = _currPanDist.y = 0;
			_equalizePoints(_currPoint, startPointsList[0]);
			_equalizePoints(_startPoint, _currPoint);

			//_equalizePoints(_startMainScrollPos, _mainScrollPos);
			_startMainScrollPos.x = _slideSize.x * _currPositionIndex;

			_posPoints = [{
				x: _currPoint.x,
				y: _currPoint.y
			}];

			_gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

			//_mainScrollAnimationEnd(true);
			_calculatePanBounds( _currZoomLevel, true );
			
			// Start rendering
			_stopDragUpdateLoop();
			_dragUpdateLoop();
			
		}

		// init zoom
		if(!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
			_startZoomLevel = _currZoomLevel;
			_zoomStarted = false; // true if zoom changed at least once

			_isZooming = _isMultitouch = true;
			_currPanDist.y = _currPanDist.x = 0;

			_equalizePoints(_startPanOffset, _panOffset);

			_equalizePoints(p, startPointsList[0]);
			_equalizePoints(p2, startPointsList[1]);

			_findCenterOfPoints(p, p2, _currCenterPoint);

			_midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
			_midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
			_currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
		}


	},

	// Pointermove/touchmove/mousemove handler
	_onDragMove = function(e) {

		e.preventDefault();

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			if(pointerIndex > -1) {
				var p = _currPointers[pointerIndex];
				p.x = e.pageX;
				p.y = e.pageY; 
			}
		}

		if(_isDragging) {
			var touchesList = _getTouchPoints(e);
			if(!_direction && !_moved && !_isZooming) {

				if(_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
					// if main scroll position is shifted – direction is always horizontal
					_direction = 'h';
				} else {
					var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
					// check the direction of movement
					if(Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
						_direction = diff > 0 ? 'h' : 'v';
						_currentPoints = touchesList;
					}
				}
				
			} else {
				_currentPoints = touchesList;
			}
		}	
	},
	// 
	_renderMovement =  function() {

		if(!_currentPoints) {
			return;
		}

		var numPoints = _currentPoints.length;

		if(numPoints === 0) {
			return;
		}

		_equalizePoints(p, _currentPoints[0]);

		delta.x = p.x - _currPoint.x;
		delta.y = p.y - _currPoint.y;

		if(_isZooming && numPoints > 1) {
			// Handle behaviour for more than 1 point

			_currPoint.x = p.x;
			_currPoint.y = p.y;
		
			// check if one of two points changed
			if( !delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2) ) {
				return;
			}

			_equalizePoints(p2, _currentPoints[1]);


			if(!_zoomStarted) {
				_zoomStarted = true;
				_shout('zoomGestureStarted');
			}
			
			// Distance between two points
			var pointsDistance = _calculatePointsDistance(p,p2);

			var zoomLevel = _calculateZoomLevel(pointsDistance);

			// slightly over the of initial zoom level
			if(zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
				_wasOverInitialZoom = true;
			}

			// Apply the friction if zoom level is out of the bounds
			var zoomFriction = 1,
				minZoomLevel = _getMinZoomLevel(),
				maxZoomLevel = _getMaxZoomLevel();

			if ( zoomLevel < minZoomLevel ) {
				
				if(_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
					// fade out background if zooming out
					var minusDiff = minZoomLevel - zoomLevel;
					var percent = 1 - minusDiff / (minZoomLevel / 1.2);

					_applyBgOpacity(percent);
					_shout('onPinchClose', percent);
					_opacityChanged = true;
				} else {
					zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
					if(zoomFriction > 1) {
						zoomFriction = 1;
					}
					zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
				}
				
			} else if ( zoomLevel > maxZoomLevel ) {
				// 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
				zoomFriction = (zoomLevel - maxZoomLevel) / ( minZoomLevel * 6 );
				if(zoomFriction > 1) {
					zoomFriction = 1;
				}
				zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
			}

			if(zoomFriction < 0) {
				zoomFriction = 0;
			}

			// distance between touch points after friction is applied
			_currPointsDistance = pointsDistance;

			// _centerPoint - The point in the middle of two pointers
			_findCenterOfPoints(p, p2, _centerPoint);
		
			// paning with two pointers pressed
			_currPanDist.x += _centerPoint.x - _currCenterPoint.x;
			_currPanDist.y += _centerPoint.y - _currCenterPoint.y;
			_equalizePoints(_currCenterPoint, _centerPoint);

			_panOffset.x = _calculatePanOffset('x', zoomLevel);
			_panOffset.y = _calculatePanOffset('y', zoomLevel);

			_isZoomingIn = zoomLevel > _currZoomLevel;
			_currZoomLevel = zoomLevel;
			_applyCurrentZoomPan();

		} else {

			// handle behaviour for one point (dragging or panning)

			if(!_direction) {
				return;
			}

			if(_isFirstMove) {
				_isFirstMove = false;

				// subtract drag distance that was used during the detection direction  

				if( Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
					delta.x -= _currentPoints[0].x - _startPoint.x;
				}
				
				if( Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
					delta.y -= _currentPoints[0].y - _startPoint.y;
				}
			}

			_currPoint.x = p.x;
			_currPoint.y = p.y;

			// do nothing if pointers position hasn't changed
			if(delta.x === 0 && delta.y === 0) {
				return;
			}

			if(_direction === 'v' && _options.closeOnVerticalDrag) {
				if(!_canPan()) {
					_currPanDist.y += delta.y;
					_panOffset.y += delta.y;

					var opacityRatio = _calculateVerticalDragOpacityRatio();

					_verticalDragInitiated = true;
					_shout('onVerticalDrag', opacityRatio);

					_applyBgOpacity(opacityRatio);
					_applyCurrentZoomPan();
					return ;
				}
			}

			_pushPosPoint(_getCurrentTime(), p.x, p.y);

			_moved = true;
			_currPanBounds = self.currItem.bounds;
			
			var mainScrollChanged = _panOrMoveMainScroll('x', delta);
			if(!mainScrollChanged) {
				_panOrMoveMainScroll('y', delta);

				_roundPoint(_panOffset);
				_applyCurrentZoomPan();
			}

		}

	},
	
	// Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
	_onDragRelease = function(e) {

		if(_features.isOldAndroid ) {

			if(_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
				return;
			}

			// on Android (v4.1, 4.2, 4.3 & possibly older) 
			// ghost mousedown/up event isn't preventable via e.preventDefault,
			// which causes fake mousedown event
			// so we block mousedown/up for 600ms
			if( e.type.indexOf('touch') > -1 ) {
				clearTimeout(_oldAndroidTouchEndTimeout);
				_oldAndroidTouchEndTimeout = setTimeout(function() {
					_oldAndroidTouchEndTimeout = 0;
				}, 600);
			}
			
		}

		_shout('pointerUp');

		if(_preventDefaultEventBehaviour(e, false)) {
			e.preventDefault();
		}

		var releasePoint;

		if(_pointerEventEnabled) {
			var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
			
			if(pointerIndex > -1) {
				releasePoint = _currPointers.splice(pointerIndex, 1)[0];

				if(navigator.msPointerEnabled) {
					var MSPOINTER_TYPES = {
						4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
						2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
						3: 'pen' // event.MSPOINTER_TYPE_PEN
					};
					releasePoint.type = MSPOINTER_TYPES[e.pointerType];

					if(!releasePoint.type) {
						releasePoint.type = e.pointerType || 'mouse';
					}
				} else {
					releasePoint.type = e.pointerType || 'mouse';
				}

			}
		}

		var touchList = _getTouchPoints(e),
			gestureType,
			numPoints = touchList.length;

		if(e.type === 'mouseup') {
			numPoints = 0;
		}

		// Do nothing if there were 3 touch points or more
		if(numPoints === 2) {
			_currentPoints = null;
			return true;
		}

		// if second pointer released
		if(numPoints === 1) {
			_equalizePoints(_startPoint, touchList[0]);
		}				


		// pointer hasn't moved, send "tap release" point
		if(numPoints === 0 && !_direction && !_mainScrollAnimating) {
			if(!releasePoint) {
				if(e.type === 'mouseup') {
					releasePoint = {x: e.pageX, y: e.pageY, type:'mouse'};
				} else if(e.changedTouches && e.changedTouches[0]) {
					releasePoint = {x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY, type:'touch'};
				}		
			}

			_shout('touchRelease', e, releasePoint);
		}

		// Difference in time between releasing of two last touch points (zoom gesture)
		var releaseTimeDiff = -1;

		// Gesture completed, no pointers left
		if(numPoints === 0) {
			_isDragging = false;
			framework.unbind(window, _upMoveEvents, self);

			_stopDragUpdateLoop();

			if(_isZooming) {
				// Two points released at the same time
				releaseTimeDiff = 0;
			} else if(_lastReleaseTime !== -1) {
				releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
			}
		}
		_lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;
		
		if(releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
			gestureType = 'zoom';
		} else {
			gestureType = 'swipe';
		}

		if(_isZooming && numPoints < 2) {
			_isZooming = false;

			// Only second point released
			if(numPoints === 1) {
				gestureType = 'zoomPointerUp';
			}
			_shout('zoomGestureEnded');
		}

		_currentPoints = null;
		if(!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
			// nothing to animate
			return;
		}
	
		_stopAllAnimations();

		
		if(!_releaseAnimData) {
			_releaseAnimData = _initDragReleaseAnimationData();
		}
		
		_releaseAnimData.calculateSwipeSpeed('x');


		if(_verticalDragInitiated) {

			var opacityRatio = _calculateVerticalDragOpacityRatio();

			if(opacityRatio < _options.verticalDragRange) {
				self.close();
			} else {
				var initalPanY = _panOffset.y,
					initialBgOpacity = _bgOpacity;

				_animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {
					
					_panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

					_applyBgOpacity(  (1 - initialBgOpacity) * now + initialBgOpacity );
					_applyCurrentZoomPan();
				});

				_shout('onVerticalDrag', 1);
			}

			return;
		}


		// main scroll 
		if(  (_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
			var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
			if(itemChanged) {
				return;
			}
			gestureType = 'zoomPointerUp';
		}

		// prevent zoom/pan animation when main scroll animation runs
		if(_mainScrollAnimating) {
			return;
		}
		
		// Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
		if(gestureType !== 'swipe') {
			_completeZoomGesture();
			return;
		}
	
		// Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
		if(!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
			_completePanGesture(_releaseAnimData);
		}
	},


	// Returns object with data about gesture
	// It's created only once and then reused
	_initDragReleaseAnimationData  = function() {
		// temp local vars
		var lastFlickDuration,
			tempReleasePos;

		// s = this
		var s = {
			lastFlickOffset: {},
			lastFlickDist: {},
			lastFlickSpeed: {},
			slowDownRatio:  {},
			slowDownRatioReverse:  {},
			speedDecelerationRatio:  {},
			speedDecelerationRatioAbs:  {},
			distanceOffset:  {},
			backAnimDestination: {},
			backAnimStarted: {},
			calculateSwipeSpeed: function(axis) {
				

				if( _posPoints.length > 1) {
					lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
					tempReleasePos = _posPoints[_posPoints.length-2][axis];
				} else {
					lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
					tempReleasePos = _startPoint[axis];
				}
				s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
				s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
				if(s.lastFlickDist[axis] > 20) {
					s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
				} else {
					s.lastFlickSpeed[axis] = 0;
				}
				if( Math.abs(s.lastFlickSpeed[axis]) < 0.1 ) {
					s.lastFlickSpeed[axis] = 0;
				}
				
				s.slowDownRatio[axis] = 0.95;
				s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
				s.speedDecelerationRatio[axis] = 1;
			},

			calculateOverBoundsAnimOffset: function(axis, speed) {
				if(!s.backAnimStarted[axis]) {

					if(_panOffset[axis] > _currPanBounds.min[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.min[axis];
						
					} else if(_panOffset[axis] < _currPanBounds.max[axis]) {
						s.backAnimDestination[axis] = _currPanBounds.max[axis];
					}

					if(s.backAnimDestination[axis] !== undefined) {
						s.slowDownRatio[axis] = 0.7;
						s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
						if(s.speedDecelerationRatioAbs[axis] < 0.05) {

							s.lastFlickSpeed[axis] = 0;
							s.backAnimStarted[axis] = true;

							_animateProp('bounceZoomPan'+axis,_panOffset[axis], 
								s.backAnimDestination[axis], 
								speed || 300, 
								framework.easing.sine.out, 
								function(pos) {
									_panOffset[axis] = pos;
									_applyCurrentZoomPan();
								}
							);

						}
					}
				}
			},

			// Reduces the speed by slowDownRatio (per 10ms)
			calculateAnimOffset: function(axis) {
				if(!s.backAnimStarted[axis]) {
					s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] + 
												s.slowDownRatioReverse[axis] - 
												s.slowDownRatioReverse[axis] * s.timeDiff / 10);

					s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
					s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
					_panOffset[axis] += s.distanceOffset[axis];

				}
			},

			panAnimLoop: function() {
				if ( _animations.zoomPan ) {
					_animations.zoomPan.raf = _requestAF(s.panAnimLoop);

					s.now = _getCurrentTime();
					s.timeDiff = s.now - s.lastNow;
					s.lastNow = s.now;
					
					s.calculateAnimOffset('x');
					s.calculateAnimOffset('y');

					_applyCurrentZoomPan();
					
					s.calculateOverBoundsAnimOffset('x');
					s.calculateOverBoundsAnimOffset('y');


					if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

						// round pan position
						_panOffset.x = Math.round(_panOffset.x);
						_panOffset.y = Math.round(_panOffset.y);
						_applyCurrentZoomPan();
						
						_stopAnimation('zoomPan');
						return;
					}
				}

			}
		};
		return s;
	},

	_completePanGesture = function(animData) {
		// calculate swipe speed for Y axis (paanning)
		animData.calculateSwipeSpeed('y');

		_currPanBounds = self.currItem.bounds;
		
		animData.backAnimDestination = {};
		animData.backAnimStarted = {};

		// Avoid acceleration animation if speed is too low
		if(Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05 ) {
			animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

			// Run pan drag release animation. E.g. if you drag image and release finger without momentum.
			animData.calculateOverBoundsAnimOffset('x');
			animData.calculateOverBoundsAnimOffset('y');
			return true;
		}

		// Animation loop that controls the acceleration after pan gesture ends
		_registerStartAnimation('zoomPan');
		animData.lastNow = _getCurrentTime();
		animData.panAnimLoop();
	},


	_finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
		var itemChanged;
		if(!_mainScrollAnimating) {
			_currZoomedItemIndex = _currentItemIndex;
		}


		
		var itemsDiff;

		if(gestureType === 'swipe') {
			var totalShiftDist = _currPoint.x - _startPoint.x,
				isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

			// if container is shifted for more than MIN_SWIPE_DISTANCE, 
			// and last flick gesture was in right direction
			if(totalShiftDist > MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20) ) {
				// go to prev item
				itemsDiff = -1;
			} else if(totalShiftDist < -MIN_SWIPE_DISTANCE && 
				(isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20) ) {
				// go to next item
				itemsDiff = 1;
			}
		}

		var nextCircle;

		if(itemsDiff) {
			
			_currentItemIndex += itemsDiff;

			if(_currentItemIndex < 0) {
				_currentItemIndex = _options.loop ? _getNumItems()-1 : 0;
				nextCircle = true;
			} else if(_currentItemIndex >= _getNumItems()) {
				_currentItemIndex = _options.loop ? 0 : _getNumItems()-1;
				nextCircle = true;
			}

			if(!nextCircle || _options.loop) {
				_indexDiff += itemsDiff;
				_currPositionIndex -= itemsDiff;
				itemChanged = true;
			}
			

			
		}

		var animateToX = _slideSize.x * _currPositionIndex;
		var animateToDist = Math.abs( animateToX - _mainScrollPos.x );
		var finishAnimDuration;


		if(!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
			// "return to current" duration, e.g. when dragging from slide 0 to -1
			finishAnimDuration = 333; 
		} else {
			finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ? 
									animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) : 
									333;

			finishAnimDuration = Math.min(finishAnimDuration, 400);
			finishAnimDuration = Math.max(finishAnimDuration, 250);
		}

		if(_currZoomedItemIndex === _currentItemIndex) {
			itemChanged = false;
		}
		
		_mainScrollAnimating = true;
		
		_shout('mainScrollAnimStart');

		_animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out, 
			_moveMainScroll,
			function() {
				_stopAllAnimations();
				_mainScrollAnimating = false;
				_currZoomedItemIndex = -1;
				
				if(itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
					self.updateCurrItem();
				}
				
				_shout('mainScrollAnimComplete');
			}
		);

		if(itemChanged) {
			self.updateCurrItem(true);
		}

		return itemChanged;
	},

	_calculateZoomLevel = function(touchesDistance) {
		return  1 / _startPointsDistance * touchesDistance * _startZoomLevel;
	},

	// Resets zoom if it's out of bounds
	_completeZoomGesture = function() {
		var destZoomLevel = _currZoomLevel,
			minZoomLevel = _getMinZoomLevel(),
			maxZoomLevel = _getMaxZoomLevel();

		if ( _currZoomLevel < minZoomLevel ) {
			destZoomLevel = minZoomLevel;
		} else if ( _currZoomLevel > maxZoomLevel ) {
			destZoomLevel = maxZoomLevel;
		}

		var destOpacity = 1,
			onUpdate,
			initialOpacity = _bgOpacity;

		if(_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
			//_closedByScroll = true;
			self.close();
			return true;
		}

		if(_opacityChanged) {
			onUpdate = function(now) {
				_applyBgOpacity(  (destOpacity - initialOpacity) * now + initialOpacity );
			};
		}

		self.zoomTo(destZoomLevel, 0, 200,  framework.easing.cubic.out, onUpdate);
		return true;
	};


_registerModule('Gestures', {
	publicMethods: {

		initGestures: function() {

			// helper function that builds touch/pointer/mouse events
			var addEventNames = function(pref, down, move, up, cancel) {
				_dragStartEvent = pref + down;
				_dragMoveEvent = pref + move;
				_dragEndEvent = pref + up;
				if(cancel) {
					_dragCancelEvent = pref + cancel;
				} else {
					_dragCancelEvent = '';
				}
			};

			_pointerEventEnabled = _features.pointerEvent;
			if(_pointerEventEnabled && _features.touch) {
				// we don't need touch events, if browser supports pointer events
				_features.touch = false;
			}

			if(_pointerEventEnabled) {
				if(navigator.msPointerEnabled) {
					// IE10 pointer events are case-sensitive
					addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
				} else {
					addEventNames('pointer', 'down', 'move', 'up', 'cancel');
				}
			} else if(_features.touch) {
				addEventNames('touch', 'start', 'move', 'end', 'cancel');
				_likelyTouchDevice = true;
			} else {
				addEventNames('mouse', 'down', 'move', 'up');	
			}

			_upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent  + ' ' +  _dragCancelEvent;
			_downEvents = _dragStartEvent;

			if(_pointerEventEnabled && !_likelyTouchDevice) {
				_likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
			}
			// make variable public
			self.likelyTouchDevice = _likelyTouchDevice; 
			
			_globalEventHandlers[_dragStartEvent] = _onDragStart;
			_globalEventHandlers[_dragMoveEvent] = _onDragMove;
			_globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

			if(_dragCancelEvent) {
				_globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
			}

			// Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
			if(_features.touch) {
				_downEvents += ' mousedown';
				_upMoveEvents += ' mousemove mouseup';
				_globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
				_globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
				_globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
			}

			if(!_likelyTouchDevice) {
				// don't allow pan to next slide from zoomed state on Desktop
				_options.allowPanToNext = false;
			}
		}

	}
});


/*>>gestures*/

/*>>show-hide-transition*/
/**
 * show-hide-transition.js:
 *
 * Manages initial opening or closing transition.
 *
 * If you're not planning to use transition for gallery at all,
 * you may set options hideAnimationDuration and showAnimationDuration to 0,
 * and just delete startAnimation function.
 * 
 */


var _showOrHideTimeout,
	_showOrHide = function(item, img, out, completeFn) {

		if(_showOrHideTimeout) {
			clearTimeout(_showOrHideTimeout);
		}

		_initialZoomRunning = true;
		_initialContentSet = true;
		
		// dimensions of small thumbnail {x:,y:,w:}.
		// Height is optional, as calculated based on large image.
		var thumbBounds; 
		if(item.initialLayout) {
			thumbBounds = item.initialLayout;
			item.initialLayout = null;
		} else {
			thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
		}

		var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

		var onComplete = function() {
			_stopAnimation('initialZoom');
			if(!out) {
				_applyBgOpacity(1);
				if(img) {
					img.style.display = 'block';
				}
				framework.addClass(template, 'pswp--animated-in');
				_shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
			} else {
				self.template.removeAttribute('style');
				self.bg.removeAttribute('style');
			}

			if(completeFn) {
				completeFn();
			}
			_initialZoomRunning = false;
		};

		// if bounds aren't provided, just open gallery without animation
		if(!duration || !thumbBounds || thumbBounds.x === undefined) {

			_shout('initialZoom' + (out ? 'Out' : 'In') );

			_currZoomLevel = item.initialZoomLevel;
			_equalizePoints(_panOffset,  item.initialPosition );
			_applyCurrentZoomPan();

			template.style.opacity = out ? 0 : 1;
			_applyBgOpacity(1);

			if(duration) {
				setTimeout(function() {
					onComplete();
				}, duration);
			} else {
				onComplete();
			}

			return;
		}

		var startAnimation = function() {
			var closeWithRaf = _closedByScroll,
				fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;
			
			// apply hw-acceleration to image
			if(item.miniImg) {
				item.miniImg.style.webkitBackfaceVisibility = 'hidden';
			}

			if(!out) {
				_currZoomLevel = thumbBounds.w / item.w;
				_panOffset.x = thumbBounds.x;
				_panOffset.y = thumbBounds.y - _initalWindowScrollY;

				self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
				_applyCurrentZoomPan();
			}

			_registerStartAnimation('initialZoom');
			
			if(out && !closeWithRaf) {
				framework.removeClass(template, 'pswp--animated-in');
			}

			if(fadeEverything) {
				if(out) {
					framework[ (closeWithRaf ? 'remove' : 'add') + 'Class' ](template, 'pswp--animate_opacity');
				} else {
					setTimeout(function() {
						framework.addClass(template, 'pswp--animate_opacity');
					}, 30);
				}
			}

			_showOrHideTimeout = setTimeout(function() {

				_shout('initialZoom' + (out ? 'Out' : 'In') );
				

				if(!out) {

					// "in" animation always uses CSS transitions (instead of rAF).
					// CSS transition work faster here, 
					// as developer may also want to animate other things, 
					// like ui on top of sliding area, which can be animated just via CSS
					
					_currZoomLevel = item.initialZoomLevel;
					_equalizePoints(_panOffset,  item.initialPosition );
					_applyCurrentZoomPan();
					_applyBgOpacity(1);

					if(fadeEverything) {
						template.style.opacity = 1;
					} else {
						_applyBgOpacity(1);
					}

					_showOrHideTimeout = setTimeout(onComplete, duration + 20);
				} else {

					// "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
					var destZoomLevel = thumbBounds.w / item.w,
						initialPanOffset = {
							x: _panOffset.x,
							y: _panOffset.y
						},
						initialZoomLevel = _currZoomLevel,
						initalBgOpacity = _bgOpacity,
						onUpdate = function(now) {
							
							if(now === 1) {
								_currZoomLevel = destZoomLevel;
								_panOffset.x = thumbBounds.x;
								_panOffset.y = thumbBounds.y  - _currentWindowScrollY;
							} else {
								_currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
								_panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
								_panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
							}
							
							_applyCurrentZoomPan();
							if(fadeEverything) {
								template.style.opacity = 1 - now;
							} else {
								_applyBgOpacity( initalBgOpacity - now * initalBgOpacity );
							}
						};

					if(closeWithRaf) {
						_animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
					} else {
						onUpdate(1);
						_showOrHideTimeout = setTimeout(onComplete, duration + 20);
					}
				}
			
			}, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
					// create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
					// Which avoids lag at the beginning of scale transition.
		};
		startAnimation();

		
	};

/*>>show-hide-transition*/

/*>>items-controller*/
/**
*
* Controller manages gallery items, their dimensions, and their content.
* 
*/

var _items,
	_tempPanAreaSize = {},
	_imagesToAppendPool = [],
	_initialContentSet,
	_initialZoomRunning,
	_controllerDefaultOptions = {
		index: 0,
		errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
		forceProgressiveLoading: false, // TODO
		preload: [1,1],
		getNumItemsFn: function() {
			return _items.length;
		}
	};


var _getItemAt,
	_getNumItems,
	_initialIsLoop,
	_getZeroBounds = function() {
		return {
			center:{x:0,y:0}, 
			max:{x:0,y:0}, 
			min:{x:0,y:0}
		};
	},
	_calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH ) {
		var bounds = item.bounds;

		// position of element when it's centered
		bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
		bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

		// maximum pan position
		bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ? 
							Math.round(_tempPanAreaSize.x - realPanElementW) : 
							bounds.center.x;
		
		bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ? 
							Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top : 
							bounds.center.y;
		
		// minimum pan position
		bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
		bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
	},
	_calculateItemSize = function(item, viewportSize, zoomLevel) {

		if (item.src && !item.loadError) {
			var isInitial = !zoomLevel;
			
			if(isInitial) {
				if(!item.vGap) {
					item.vGap = {top:0,bottom:0};
				}
				// allows overriding vertical margin for individual items
				_shout('parseVerticalMargin', item);
			}


			_tempPanAreaSize.x = viewportSize.x;
			_tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

			if (isInitial) {
				var hRatio = _tempPanAreaSize.x / item.w;
				var vRatio = _tempPanAreaSize.y / item.h;

				item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
				//item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

				var scaleMode = _options.scaleMode;

				if (scaleMode === 'orig') {
					zoomLevel = 1;
				} else if (scaleMode === 'fit') {
					zoomLevel = item.fitRatio;
				}

				if (zoomLevel > 1) {
					zoomLevel = 1;
				}

				item.initialZoomLevel = zoomLevel;
				
				if(!item.bounds) {
					// reuse bounds object
					item.bounds = _getZeroBounds(); 
				}
			}

			if(!zoomLevel) {
				return;
			}

			_calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

			if (isInitial && zoomLevel === item.initialZoomLevel) {
				item.initialPosition = item.bounds.center;
			}

			return item.bounds;
		} else {
			item.w = item.h = 0;
			item.initialZoomLevel = item.fitRatio = 1;
			item.bounds = _getZeroBounds();
			item.initialPosition = item.bounds.center;

			// if it's not image, we return zero bounds (content is not zoomable)
			return item.bounds;
		}
		
	},

	


	_appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {
		

		if(item.loadError) {
			return;
		}

		if(img) {

			item.imageAppended = true;
			_setImageSize(item, img, (item === self.currItem && _renderMaxResolution) );
			
			baseDiv.appendChild(img);

			if(keepPlaceholder) {
				setTimeout(function() {
					if(item && item.loaded && item.placeholder) {
						item.placeholder.style.display = 'none';
						item.placeholder = null;
					}
				}, 500);
			}
		}
	},
	


	_preloadImage = function(item) {
		item.loading = true;
		item.loaded = false;
		var img = item.img = framework.createEl('pswp__img', 'img');
		var onComplete = function() {
			item.loading = false;
			item.loaded = true;

			if(item.loadComplete) {
				item.loadComplete(item);
			} else {
				item.img = null; // no need to store image object
			}
			img.onload = img.onerror = null;
			img = null;
		};
		img.onload = onComplete;
		img.onerror = function() {
			item.loadError = true;
			onComplete();
		};		

		img.src = item.src;// + '?a=' + Math.random();

		return img;
	},
	_checkForError = function(item, cleanUp) {
		if(item.src && item.loadError && item.container) {

			if(cleanUp) {
				item.container.innerHTML = '';
			}

			item.container.innerHTML = _options.errorMsg.replace('%url%',  item.src );
			return true;
			
		}
	},
	_setImageSize = function(item, img, maxRes) {
		if(!item.src) {
			return;
		}

		if(!img) {
			img = item.container.lastChild;
		}

		var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
			h = maxRes ? item.h : Math.round(item.h * item.fitRatio);
		
		if(item.placeholder && !item.loaded) {
			item.placeholder.style.width = w + 'px';
			item.placeholder.style.height = h + 'px';
		}

		img.style.width = w + 'px';
		img.style.height = h + 'px';
	},
	_appendImagesPool = function() {

		if(_imagesToAppendPool.length) {
			var poolItem;

			for(var i = 0; i < _imagesToAppendPool.length; i++) {
				poolItem = _imagesToAppendPool[i];
				if( poolItem.holder.index === poolItem.index ) {
					_appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
				}
			}
			_imagesToAppendPool = [];
		}
	};
	


_registerModule('Controller', {

	publicMethods: {

		lazyLoadItem: function(index) {
			index = _getLoopedId(index);
			var item = _getItemAt(index);

			if(!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
				return;
			}

			_shout('gettingData', index, item);

			if (!item.src) {
				return;
			}

			_preloadImage(item);
		},
		initController: function() {
			framework.extend(_options, _controllerDefaultOptions, true);
			self.items = _items = items;
			_getItemAt = self.getItemAt;
			_getNumItems = _options.getNumItemsFn; //self.getNumItems;



			_initialIsLoop = _options.loop;
			if(_getNumItems() < 3) {
				_options.loop = false; // disable loop if less then 3 items
			}

			_listen('beforeChange', function(diff) {

				var p = _options.preload,
					isNext = diff === null ? true : (diff >= 0),
					preloadBefore = Math.min(p[0], _getNumItems() ),
					preloadAfter = Math.min(p[1], _getNumItems() ),
					i;


				for(i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
					self.lazyLoadItem(_currentItemIndex+i);
				}
				for(i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
					self.lazyLoadItem(_currentItemIndex-i);
				}
			});

			_listen('initialLayout', function() {
				self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
			});

			_listen('mainScrollAnimComplete', _appendImagesPool);
			_listen('initialZoomInEnd', _appendImagesPool);



			_listen('destroy', function() {
				var item;
				for(var i = 0; i < _items.length; i++) {
					item = _items[i];
					// remove reference to DOM elements, for GC
					if(item.container) {
						item.container = null; 
					}
					if(item.placeholder) {
						item.placeholder = null;
					}
					if(item.img) {
						item.img = null;
					}
					if(item.preloader) {
						item.preloader = null;
					}
					if(item.loadError) {
						item.loaded = item.loadError = false;
					}
				}
				_imagesToAppendPool = null;
			});
		},


		getItemAt: function(index) {
			if (index >= 0) {
				return _items[index] !== undefined ? _items[index] : false;
			}
			return false;
		},

		allowProgressiveImg: function() {
			// 1. Progressive image loading isn't working on webkit/blink 
			//    when hw-acceleration (e.g. translateZ) is applied to IMG element.
			//    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
			//    
			// 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
			//    That's why it's disabled on touch devices (mainly because of swipe transition)
			//    
			// 3. Progressive image loading sometimes doesn't work in IE (up to 11).

			// Don't allow progressive loading on non-large touch devices
			return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200; 
			// 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
		},

		setContent: function(holder, index) {

			if(_options.loop) {
				index = _getLoopedId(index);
			}

			var prevItem = self.getItemAt(holder.index);
			if(prevItem) {
				prevItem.container = null;
			}
	
			var item = self.getItemAt(index),
				img;
			
			if(!item) {
				holder.el.innerHTML = '';
				return;
			}

			// allow to override data
			_shout('gettingData', index, item);

			holder.index = index;
			holder.item = item;

			// base container DIV is created only once for each of 3 holders
			var baseDiv = item.container = framework.createEl('pswp__zoom-wrap'); 

			

			if(!item.src && item.html) {
				if(item.html.tagName) {
					baseDiv.appendChild(item.html);
				} else {
					baseDiv.innerHTML = item.html;
				}
			}

			_checkForError(item);

			_calculateItemSize(item, _viewportSize);
			
			if(item.src && !item.loadError && !item.loaded) {

				item.loadComplete = function(item) {

					// gallery closed before image finished loading
					if(!_isOpen) {
						return;
					}

					// check if holder hasn't changed while image was loading
					if(holder && holder.index === index ) {
						if( _checkForError(item, true) ) {
							item.loadComplete = item.img = null;
							_calculateItemSize(item, _viewportSize);
							_applyZoomPanToItem(item);

							if(holder.index === _currentItemIndex) {
								// recalculate dimensions
								self.updateCurrZoomItem();
							}
							return;
						}
						if( !item.imageAppended ) {
							if(_features.transform && (_mainScrollAnimating || _initialZoomRunning) ) {
								_imagesToAppendPool.push({
									item:item,
									baseDiv:baseDiv,
									img:item.img,
									index:index,
									holder:holder,
									clearPlaceholder:true
								});
							} else {
								_appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
							}
						} else {
							// remove preloader & mini-img
							if(!_initialZoomRunning && item.placeholder) {
								item.placeholder.style.display = 'none';
								item.placeholder = null;
							}
						}
					}

					item.loadComplete = null;
					item.img = null; // no need to store image element after it's added

					_shout('imageLoadComplete', index, item);
				};

				if(framework.features.transform) {
					
					var placeholderClassName = 'pswp__img pswp__img--placeholder'; 
					placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

					var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
					if(item.msrc) {
						placeholder.src = item.msrc;
					}
					
					_setImageSize(item, placeholder);

					baseDiv.appendChild(placeholder);
					item.placeholder = placeholder;

				}
				

				

				if(!item.loading) {
					_preloadImage(item);
				}


				if( self.allowProgressiveImg() ) {
					// just append image
					if(!_initialContentSet && _features.transform) {
						_imagesToAppendPool.push({
							item:item, 
							baseDiv:baseDiv, 
							img:item.img, 
							index:index, 
							holder:holder
						});
					} else {
						_appendImage(index, item, baseDiv, item.img, true, true);
					}
				}
				
			} else if(item.src && !item.loadError) {
				// image object is created every time, due to bugs of image loading & delay when switching images
				img = framework.createEl('pswp__img', 'img');
				img.style.opacity = 1;
				img.src = item.src;
				_setImageSize(item, img);
				_appendImage(index, item, baseDiv, img, true);
			}
			

			if(!_initialContentSet && index === _currentItemIndex) {
				_currZoomElementStyle = baseDiv.style;
				_showOrHide(item, (img ||item.img) );
			} else {
				_applyZoomPanToItem(item);
			}

			holder.el.innerHTML = '';
			holder.el.appendChild(baseDiv);
		},

		cleanSlide: function( item ) {
			if(item.img ) {
				item.img.onload = item.img.onerror = null;
			}
			item.loaded = item.loading = item.img = item.imageAppended = false;
		}

	}
});

/*>>items-controller*/

/*>>tap*/
/**
 * tap.js:
 *
 * Displatches tap and double-tap events.
 * 
 */

var tapTimer,
	tapReleasePoint = {},
	_dispatchTapEvent = function(origEvent, releasePoint, pointerType) {		
		var e = document.createEvent( 'CustomEvent' ),
			eDetail = {
				origEvent:origEvent, 
				target:origEvent.target, 
				releasePoint: releasePoint, 
				pointerType:pointerType || 'touch'
			};

		e.initCustomEvent( 'pswpTap', true, true, eDetail );
		origEvent.target.dispatchEvent(e);
	};

_registerModule('Tap', {
	publicMethods: {
		initTap: function() {
			_listen('firstTouchStart', self.onTapStart);
			_listen('touchRelease', self.onTapRelease);
			_listen('destroy', function() {
				tapReleasePoint = {};
				tapTimer = null;
			});
		},
		onTapStart: function(touchList) {
			if(touchList.length > 1) {
				clearTimeout(tapTimer);
				tapTimer = null;
			}
		},
		onTapRelease: function(e, releasePoint) {
			if(!releasePoint) {
				return;
			}

			if(!_moved && !_isMultitouch && !_numAnimations) {
				var p0 = releasePoint;
				if(tapTimer) {
					clearTimeout(tapTimer);
					tapTimer = null;

					// Check if taped on the same place
					if ( _isNearbyPoints(p0, tapReleasePoint) ) {
						_shout('doubleTap', p0);
						return;
					}
				}

				if(releasePoint.type === 'mouse') {
					_dispatchTapEvent(e, releasePoint, 'mouse');
					return;
				}

				var clickedTagName = e.target.tagName.toUpperCase();
				// avoid double tap delay on buttons and elements that have class pswp__single-tap
				if(clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap') ) {
					_dispatchTapEvent(e, releasePoint);
					return;
				}

				_equalizePoints(tapReleasePoint, p0);

				tapTimer = setTimeout(function() {
					_dispatchTapEvent(e, releasePoint);
					tapTimer = null;
				}, 300);
			}
		}
	}
});

/*>>tap*/

/*>>desktop-zoom*/
/**
 *
 * desktop-zoom.js:
 *
 * - Binds mousewheel event for paning zoomed image.
 * - Manages "dragging", "zoomed-in", "zoom-out" classes.
 *   (which are used for cursors and zoom icon)
 * - Adds toggleDesktopZoom function.
 * 
 */

var _wheelDelta;
	
_registerModule('DesktopZoom', {

	publicMethods: {

		initDesktopZoom: function() {

			if(_oldIE) {
				// no zoom for old IE (<=8)
				return;
			}

			if(_likelyTouchDevice) {
				// if detected hardware touch support, we wait until mouse is used,
				// and only then apply desktop-zoom features
				_listen('mouseUsed', function() {
					self.setupDesktopZoom();
				});
			} else {
				self.setupDesktopZoom(true);
			}

		},

		setupDesktopZoom: function(onInit) {

			_wheelDelta = {};

			var events = 'wheel mousewheel DOMMouseScroll';
			
			_listen('bindEvents', function() {
				framework.bind(template, events,  self.handleMouseWheel);
			});

			_listen('unbindEvents', function() {
				if(_wheelDelta) {
					framework.unbind(template, events, self.handleMouseWheel);
				}
			});

			self.mouseZoomedIn = false;

			var hasDraggingClass,
				updateZoomable = function() {
					if(self.mouseZoomedIn) {
						framework.removeClass(template, 'pswp--zoomed-in');
						self.mouseZoomedIn = false;
					}
					if(_currZoomLevel < 1) {
						framework.addClass(template, 'pswp--zoom-allowed');
					} else {
						framework.removeClass(template, 'pswp--zoom-allowed');
					}
					removeDraggingClass();
				},
				removeDraggingClass = function() {
					if(hasDraggingClass) {
						framework.removeClass(template, 'pswp--dragging');
						hasDraggingClass = false;
					}
				};

			_listen('resize' , updateZoomable);
			_listen('afterChange' , updateZoomable);
			_listen('pointerDown', function() {
				if(self.mouseZoomedIn) {
					hasDraggingClass = true;
					framework.addClass(template, 'pswp--dragging');
				}
			});
			_listen('pointerUp', removeDraggingClass);

			if(!onInit) {
				updateZoomable();
			}
			
		},

		handleMouseWheel: function(e) {

			if(_currZoomLevel <= self.currItem.fitRatio) {
				if( _options.modal ) {

					if (!_options.closeOnScroll || _numAnimations || _isDragging) {
						e.preventDefault();
					} else if(_transformKey && Math.abs(e.deltaY) > 2) {
						// close PhotoSwipe
						// if browser supports transforms & scroll changed enough
						_closedByScroll = true;
						self.close();
					}

				}
				return true;
			}

			// allow just one event to fire
			e.stopPropagation();

			// https://developer.mozilla.org/en-US/docs/Web/Events/wheel
			_wheelDelta.x = 0;

			if('deltaX' in e) {
				if(e.deltaMode === 1 /* DOM_DELTA_LINE */) {
					// 18 - average line height
					_wheelDelta.x = e.deltaX * 18;
					_wheelDelta.y = e.deltaY * 18;
				} else {
					_wheelDelta.x = e.deltaX;
					_wheelDelta.y = e.deltaY;
				}
			} else if('wheelDelta' in e) {
				if(e.wheelDeltaX) {
					_wheelDelta.x = -0.16 * e.wheelDeltaX;
				}
				if(e.wheelDeltaY) {
					_wheelDelta.y = -0.16 * e.wheelDeltaY;
				} else {
					_wheelDelta.y = -0.16 * e.wheelDelta;
				}
			} else if('detail' in e) {
				_wheelDelta.y = e.detail;
			} else {
				return;
			}

			_calculatePanBounds(_currZoomLevel, true);

			var newPanX = _panOffset.x - _wheelDelta.x,
				newPanY = _panOffset.y - _wheelDelta.y;

			// only prevent scrolling in nonmodal mode when not at edges
			if (_options.modal ||
				(
				newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
				newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
				) ) {
				e.preventDefault();
			}

			// TODO: use rAF instead of mousewheel?
			self.panTo(newPanX, newPanY);
		},

		toggleDesktopZoom: function(centerPoint) {
			centerPoint = centerPoint || {x:_viewportSize.x/2 + _offset.x, y:_viewportSize.y/2 + _offset.y };

			var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
			var zoomOut = _currZoomLevel === doubleTapZoomLevel;
			
			self.mouseZoomedIn = !zoomOut;

			self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
			framework[ (!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
		}

	}
});


/*>>desktop-zoom*/

/*>>history*/
/**
 *
 * history.js:
 *
 * - Back button to close gallery.
 * 
 * - Unique URL for each slide: example.com/&pid=1&gid=3
 *   (where PID is picture index, and GID and gallery index)
 *   
 * - Switch URL when slides change.
 * 
 */


var _historyDefaultOptions = {
	history: true,
	galleryUID: 1
};

var _historyUpdateTimeout,
	_hashChangeTimeout,
	_hashAnimCheckTimeout,
	_hashChangedByScript,
	_hashChangedByHistory,
	_hashReseted,
	_initialHash,
	_historyChanged,
	_closedFromURL,
	_urlChangedOnce,
	_windowLoc,

	_supportsPushState,

	_getHash = function() {
		return _windowLoc.hash.substring(1);
	},
	_cleanHistoryTimeouts = function() {

		if(_historyUpdateTimeout) {
			clearTimeout(_historyUpdateTimeout);
		}

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}
	},

	// pid - Picture index
	// gid - Gallery index
	_parseItemIndexFromURL = function() {
		var hash = _getHash(),
			params = {};

		if(hash.length < 5) { // pid=1
			return params;
		}

		var i, vars = hash.split('&');
		for (i = 0; i < vars.length; i++) {
			if(!vars[i]) {
				continue;
			}
			var pair = vars[i].split('=');	
			if(pair.length < 2) {
				continue;
			}
			params[pair[0]] = pair[1];
		}
		if(_options.galleryPIDs) {
			// detect custom pid in hash and search for it among the items collection
			var searchfor = params.pid;
			params.pid = 0; // if custom pid cannot be found, fallback to the first item
			for(i = 0; i < _items.length; i++) {
				if(_items[i].pid === searchfor) {
					params.pid = i;
					break;
				}
			}
		} else {
			params.pid = parseInt(params.pid,10)-1;
		}
		if( params.pid < 0 ) {
			params.pid = 0;
		}
		return params;
	},
	_updateHash = function() {

		if(_hashAnimCheckTimeout) {
			clearTimeout(_hashAnimCheckTimeout);
		}


		if(_numAnimations || _isDragging) {
			// changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
			// that's why we update hash only when no animations running
			_hashAnimCheckTimeout = setTimeout(_updateHash, 500);
			return;
		}
		
		if(_hashChangedByScript) {
			clearTimeout(_hashChangeTimeout);
		} else {
			_hashChangedByScript = true;
		}


		var pid = (_currentItemIndex + 1);
		var item = _getItemAt( _currentItemIndex );
		if(item.hasOwnProperty('pid')) {
			// carry forward any custom pid assigned to the item
			pid = item.pid;
		}
		var newHash = _initialHash + '&'  +  'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

		if(!_historyChanged) {
			if(_windowLoc.hash.indexOf(newHash) === -1) {
				_urlChangedOnce = true;
			}
			// first time - add new hisory record, then just replace
		}

		var newURL = _windowLoc.href.split('#')[0] + '#' +  newHash;

		if( _supportsPushState ) {

			if('#' + newHash !== window.location.hash) {
				history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
			}

		} else {
			if(_historyChanged) {
				_windowLoc.replace( newURL );
			} else {
				_windowLoc.hash = newHash;
			}
		}
		
		

		_historyChanged = true;
		_hashChangeTimeout = setTimeout(function() {
			_hashChangedByScript = false;
		}, 60);
	};



	

_registerModule('History', {

	

	publicMethods: {
		initHistory: function() {

			framework.extend(_options, _historyDefaultOptions, true);

			if( !_options.history ) {
				return;
			}


			_windowLoc = window.location;
			_urlChangedOnce = false;
			_closedFromURL = false;
			_historyChanged = false;
			_initialHash = _getHash();
			_supportsPushState = ('pushState' in history);


			if(_initialHash.indexOf('gid=') > -1) {
				_initialHash = _initialHash.split('&gid=')[0];
				_initialHash = _initialHash.split('?gid=')[0];
			}
			

			_listen('afterChange', self.updateURL);
			_listen('unbindEvents', function() {
				framework.unbind(window, 'hashchange', self.onHashChange);
			});


			var returnToOriginal = function() {
				_hashReseted = true;
				if(!_closedFromURL) {

					if(_urlChangedOnce) {
						history.back();
					} else {

						if(_initialHash) {
							_windowLoc.hash = _initialHash;
						} else {
							if (_supportsPushState) {

								// remove hash from url without refreshing it or scrolling to top
								history.pushState('', document.title,  _windowLoc.pathname + _windowLoc.search );
							} else {
								_windowLoc.hash = '';
							}
						}
					}
					
				}

				_cleanHistoryTimeouts();
			};


			_listen('unbindEvents', function() {
				if(_closedByScroll) {
					// if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
					// this is done to keep the scroll position
					returnToOriginal();
				}
			});
			_listen('destroy', function() {
				if(!_hashReseted) {
					returnToOriginal();
				}
			});
			_listen('firstUpdate', function() {
				_currentItemIndex = _parseItemIndexFromURL().pid;
			});

			

			
			var index = _initialHash.indexOf('pid=');
			if(index > -1) {
				_initialHash = _initialHash.substring(0, index);
				if(_initialHash.slice(-1) === '&') {
					_initialHash = _initialHash.slice(0, -1);
				}
			}
			

			setTimeout(function() {
				if(_isOpen) { // hasn't destroyed yet
					framework.bind(window, 'hashchange', self.onHashChange);
				}
			}, 40);
			
		},
		onHashChange: function() {

			if(_getHash() === _initialHash) {

				_closedFromURL = true;
				self.close();
				return;
			}
			if(!_hashChangedByScript) {

				_hashChangedByHistory = true;
				self.goTo( _parseItemIndexFromURL().pid );
				_hashChangedByHistory = false;
			}
			
		},
		updateURL: function() {

			// Delay the update of URL, to avoid lag during transition, 
			// and to not to trigger actions like "refresh page sound" or "blinking favicon" to often
			
			_cleanHistoryTimeouts();
			

			if(_hashChangedByHistory) {
				return;
			}

			if(!_historyChanged) {
				_updateHash(); // first time
			} else {
				_historyUpdateTimeout = setTimeout(_updateHash, 800);
			}
		}
	
	}
});


/*>>history*/
	framework.extend(self, publicMethods); };
	return PhotoSwipe;
});
/*! PhotoSwipe Default UI - 4.1.3 - 2019-01-08
* http://photoswipe.com
* Copyright (c) 2019 Dmitry Semenov; */
/**
*
* UI on top of main sliding area (caption, arrows, close button, etc.).
* Built just using public methods/properties of PhotoSwipe.
* 
*/
(function (root, factory) { 
	if (typeof define === 'function' && define.amd) {
		define(factory);
	} else if (typeof exports === 'object') {
		module.exports = factory();
	} else {
		root.PhotoSwipeUI_Default = factory();
	}
})(this, function () {

	'use strict';



var PhotoSwipeUI_Default =
 function(pswp, framework) {

	var ui = this;
	var _overlayUIUpdated = false,
		_controlsVisible = true,
		_fullscrenAPI,
		_controls,
		_captionContainer,
		_fakeCaptionContainer,
		_indexIndicator,
		_shareButton,
		_shareModal,
		_shareModalHidden = true,
		_initalCloseOnScrollValue,
		_isIdle,
		_listen,

		_loadingIndicator,
		_loadingIndicatorHidden,
		_loadingIndicatorTimeout,

		_galleryHasOneSlide,

		_options,
		_defaultUIOptions = {
			barsSize: {top:44, bottom:'auto'},
			closeElClasses: ['item', 'caption', 'zoom-wrap', 'ui', 'top-bar'], 
			timeToIdle: 4000, 
			timeToIdleOutside: 1000,
			loadingIndicatorDelay: 1000, // 2s
			
			addCaptionHTMLFn: function(item, captionEl /*, isFake */) {
				if(!item.title) {
					captionEl.children[0].innerHTML = '';
					return false;
				}
				captionEl.children[0].innerHTML = item.title;
				return true;
			},

			closeEl:true,
			captionEl: true,
			fullscreenEl: true,
			zoomEl: true,
			shareEl: true,
			counterEl: true,
			arrowEl: true,
			preloaderEl: true,

			tapToClose: false,
			tapToToggleControls: true,

			clickToCloseNonZoomable: true,

			shareButtons: [
				{id:'facebook', label:'Share on Facebook', url:'https://www.facebook.com/sharer/sharer.php?u={{url}}'},
				{id:'twitter', label:'Tweet', url:'https://twitter.com/intent/tweet?text={{text}}&url={{url}}'},
				{id:'pinterest', label:'Pin it', url:'http://www.pinterest.com/pin/create/button/'+
													'?url={{url}}&media={{image_url}}&description={{text}}'},
				{id:'download', label:'Download image', url:'{{raw_image_url}}', download:true}
			],
			getImageURLForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.src || '';
			},
			getPageURLForShare: function( /* shareButtonData */ ) {
				return window.location.href;
			},
			getTextForShare: function( /* shareButtonData */ ) {
				return pswp.currItem.title || '';
			},
				
			indexIndicatorSep: ' / ',
			fitControlsWidth: 1200

		},
		_blockControlsTap,
		_blockControlsTapTimeout;



	var _onControlsTap = function(e) {
			if(_blockControlsTap) {
				return true;
			}


			e = e || window.event;

			if(_options.timeToIdle && _options.mouseUsed && !_isIdle) {
				// reset idle timer
				_onIdleMouseMove();
			}


			var target = e.target || e.srcElement,
				uiElement,
				clickedClass = target.getAttribute('class') || '',
				found;

			for(var i = 0; i < _uiElements.length; i++) {
				uiElement = _uiElements[i];
				if(uiElement.onTap && clickedClass.indexOf('pswp__' + uiElement.name ) > -1 ) {
					uiElement.onTap();
					found = true;

				}
			}

			if(found) {
				if(e.stopPropagation) {
					e.stopPropagation();
				}
				_blockControlsTap = true;

				// Some versions of Android don't prevent ghost click event 
				// when preventDefault() was called on touchstart and/or touchend.
				// 
				// This happens on v4.3, 4.2, 4.1, 
				// older versions strangely work correctly, 
				// but just in case we add delay on all of them)	
				var tapDelay = framework.features.isOldAndroid ? 600 : 30;
				_blockControlsTapTimeout = setTimeout(function() {
					_blockControlsTap = false;
				}, tapDelay);
			}

		},
		_fitControlsInViewport = function() {
			return !pswp.likelyTouchDevice || _options.mouseUsed || screen.width > _options.fitControlsWidth;
		},
		_togglePswpClass = function(el, cName, add) {
			framework[ (add ? 'add' : 'remove') + 'Class' ](el, 'pswp__' + cName);
		},

		// add class when there is just one item in the gallery
		// (by default it hides left/right arrows and 1ofX counter)
		_countNumItems = function() {
			var hasOneSlide = (_options.getNumItemsFn() === 1);

			if(hasOneSlide !== _galleryHasOneSlide) {
				_togglePswpClass(_controls, 'ui--one-slide', hasOneSlide);
				_galleryHasOneSlide = hasOneSlide;
			}
		},
		_toggleShareModalClass = function() {
			_togglePswpClass(_shareModal, 'share-modal--hidden', _shareModalHidden);
		},
		_toggleShareModal = function() {

			_shareModalHidden = !_shareModalHidden;
			
			
			if(!_shareModalHidden) {
				_toggleShareModalClass();
				setTimeout(function() {
					if(!_shareModalHidden) {
						framework.addClass(_shareModal, 'pswp__share-modal--fade-in');
					}
				}, 30);
			} else {
				framework.removeClass(_shareModal, 'pswp__share-modal--fade-in');
				setTimeout(function() {
					if(_shareModalHidden) {
						_toggleShareModalClass();
					}
				}, 300);
			}
			
			if(!_shareModalHidden) {
				_updateShareURLs();
			}
			return false;
		},

		_openWindowPopup = function(e) {
			e = e || window.event;
			var target = e.target || e.srcElement;

			pswp.shout('shareLinkClick', e, target);

			if(!target.href) {
				return false;
			}

			if( target.hasAttribute('download') ) {
				return true;
			}

			window.open(target.href, 'pswp_share', 'scrollbars=yes,resizable=yes,toolbar=no,'+
										'location=yes,width=550,height=420,top=100,left=' + 
										(window.screen ? Math.round(screen.width / 2 - 275) : 100)  );

			if(!_shareModalHidden) {
				_toggleShareModal();
			}
			
			return false;
		},
		_updateShareURLs = function() {
			var shareButtonOut = '',
				shareButtonData,
				shareURL,
				image_url,
				page_url,
				share_text;

			for(var i = 0; i < _options.shareButtons.length; i++) {
				shareButtonData = _options.shareButtons[i];

				image_url = _options.getImageURLForShare(shareButtonData);
				page_url = _options.getPageURLForShare(shareButtonData);
				share_text = _options.getTextForShare(shareButtonData);

				shareURL = shareButtonData.url.replace('{{url}}', encodeURIComponent(page_url) )
									.replace('{{image_url}}', encodeURIComponent(image_url) )
									.replace('{{raw_image_url}}', image_url )
									.replace('{{text}}', encodeURIComponent(share_text) );

				shareButtonOut += '<a href="' + shareURL + '" target="_blank" '+
									'class="pswp__share--' + shareButtonData.id + '"' +
									(shareButtonData.download ? 'download' : '') + '>' + 
									shareButtonData.label + '</a>';

				if(_options.parseShareButtonOut) {
					shareButtonOut = _options.parseShareButtonOut(shareButtonData, shareButtonOut);
				}
			}
			_shareModal.children[0].innerHTML = shareButtonOut;
			_shareModal.children[0].onclick = _openWindowPopup;

		},
		_hasCloseClass = function(target) {
			for(var  i = 0; i < _options.closeElClasses.length; i++) {
				if( framework.hasClass(target, 'pswp__' + _options.closeElClasses[i]) ) {
					return true;
				}
			}
		},
		_idleInterval,
		_idleTimer,
		_idleIncrement = 0,
		_onIdleMouseMove = function() {
			clearTimeout(_idleTimer);
			_idleIncrement = 0;
			if(_isIdle) {
				ui.setIdle(false);
			}
		},
		_onMouseLeaveWindow = function(e) {
			e = e ? e : window.event;
			var from = e.relatedTarget || e.toElement;
			if (!from || from.nodeName === 'HTML') {
				clearTimeout(_idleTimer);
				_idleTimer = setTimeout(function() {
					ui.setIdle(true);
				}, _options.timeToIdleOutside);
			}
		},
		_setupFullscreenAPI = function() {
			if(_options.fullscreenEl && !framework.features.isOldAndroid) {
				if(!_fullscrenAPI) {
					_fullscrenAPI = ui.getFullscreenAPI();
				}
				if(_fullscrenAPI) {
					framework.bind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
					ui.updateFullscreen();
					framework.addClass(pswp.template, 'pswp--supports-fs');
				} else {
					framework.removeClass(pswp.template, 'pswp--supports-fs');
				}
			}
		},
		_setupLoadingIndicator = function() {
			// Setup loading indicator
			if(_options.preloaderEl) {
			
				_toggleLoadingIndicator(true);

				_listen('beforeChange', function() {

					clearTimeout(_loadingIndicatorTimeout);

					// display loading indicator with delay
					_loadingIndicatorTimeout = setTimeout(function() {

						if(pswp.currItem && pswp.currItem.loading) {

							if( !pswp.allowProgressiveImg() || (pswp.currItem.img && !pswp.currItem.img.naturalWidth)  ) {
								// show preloader if progressive loading is not enabled, 
								// or image width is not defined yet (because of slow connection)
								_toggleLoadingIndicator(false); 
								// items-controller.js function allowProgressiveImg
							}
							
						} else {
							_toggleLoadingIndicator(true); // hide preloader
						}

					}, _options.loadingIndicatorDelay);
					
				});
				_listen('imageLoadComplete', function(index, item) {
					if(pswp.currItem === item) {
						_toggleLoadingIndicator(true);
					}
				});

			}
		},
		_toggleLoadingIndicator = function(hide) {
			if( _loadingIndicatorHidden !== hide ) {
				_togglePswpClass(_loadingIndicator, 'preloader--active', !hide);
				_loadingIndicatorHidden = hide;
			}
		},
		_applyNavBarGaps = function(item) {
			var gap = item.vGap;

			if( _fitControlsInViewport() ) {
				
				var bars = _options.barsSize; 
				if(_options.captionEl && bars.bottom === 'auto') {
					if(!_fakeCaptionContainer) {
						_fakeCaptionContainer = framework.createEl('pswp__caption pswp__caption--fake');
						_fakeCaptionContainer.appendChild( framework.createEl('pswp__caption__center') );
						_controls.insertBefore(_fakeCaptionContainer, _captionContainer);
						framework.addClass(_controls, 'pswp__ui--fit');
					}
					if( _options.addCaptionHTMLFn(item, _fakeCaptionContainer, true) ) {

						var captionSize = _fakeCaptionContainer.clientHeight;
						gap.bottom = parseInt(captionSize,10) || 44;
					} else {
						gap.bottom = bars.top; // if no caption, set size of bottom gap to size of top
					}
				} else {
					gap.bottom = bars.bottom === 'auto' ? 0 : bars.bottom;
				}
				
				// height of top bar is static, no need to calculate it
				gap.top = bars.top;
			} else {
				gap.top = gap.bottom = 0;
			}
		},
		_setupIdle = function() {
			// Hide controls when mouse is used
			if(_options.timeToIdle) {
				_listen('mouseUsed', function() {
					
					framework.bind(document, 'mousemove', _onIdleMouseMove);
					framework.bind(document, 'mouseout', _onMouseLeaveWindow);

					_idleInterval = setInterval(function() {
						_idleIncrement++;
						if(_idleIncrement === 2) {
							ui.setIdle(true);
						}
					}, _options.timeToIdle / 2);
				});
			}
		},
		_setupHidingControlsDuringGestures = function() {

			// Hide controls on vertical drag
			_listen('onVerticalDrag', function(now) {
				if(_controlsVisible && now < 0.95) {
					ui.hideControls();
				} else if(!_controlsVisible && now >= 0.95) {
					ui.showControls();
				}
			});

			// Hide controls when pinching to close
			var pinchControlsHidden;
			_listen('onPinchClose' , function(now) {
				if(_controlsVisible && now < 0.9) {
					ui.hideControls();
					pinchControlsHidden = true;
				} else if(pinchControlsHidden && !_controlsVisible && now > 0.9) {
					ui.showControls();
				}
			});

			_listen('zoomGestureEnded', function() {
				pinchControlsHidden = false;
				if(pinchControlsHidden && !_controlsVisible) {
					ui.showControls();
				}
			});

		};



	var _uiElements = [
		{ 
			name: 'caption', 
			option: 'captionEl',
			onInit: function(el) {  
				_captionContainer = el; 
			} 
		},
		{ 
			name: 'share-modal', 
			option: 'shareEl',
			onInit: function(el) {  
				_shareModal = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--share', 
			option: 'shareEl',
			onInit: function(el) { 
				_shareButton = el;
			},
			onTap: function() {
				_toggleShareModal();
			} 
		},
		{ 
			name: 'button--zoom', 
			option: 'zoomEl',
			onTap: pswp.toggleDesktopZoom
		},
		{ 
			name: 'counter', 
			option: 'counterEl',
			onInit: function(el) {  
				_indexIndicator = el;
			} 
		},
		{ 
			name: 'button--close', 
			option: 'closeEl',
			onTap: pswp.close
		},
		{ 
			name: 'button--arrow--left', 
			option: 'arrowEl',
			onTap: pswp.prev
		},
		{ 
			name: 'button--arrow--right', 
			option: 'arrowEl',
			onTap: pswp.next
		},
		{ 
			name: 'button--fs', 
			option: 'fullscreenEl',
			onTap: function() {  
				if(_fullscrenAPI.isFullscreen()) {
					_fullscrenAPI.exit();
				} else {
					_fullscrenAPI.enter();
				}
			} 
		},
		{ 
			name: 'preloader', 
			option: 'preloaderEl',
			onInit: function(el) {  
				_loadingIndicator = el;
			} 
		}

	];

	var _setupUIElements = function() {
		var item,
			classAttr,
			uiElement;

		var loopThroughChildElements = function(sChildren) {
			if(!sChildren) {
				return;
			}

			var l = sChildren.length;
			for(var i = 0; i < l; i++) {
				item = sChildren[i];
				classAttr = item.className;

				for(var a = 0; a < _uiElements.length; a++) {
					uiElement = _uiElements[a];

					if(classAttr.indexOf('pswp__' + uiElement.name) > -1  ) {

						if( _options[uiElement.option] ) { // if element is not disabled from options
							
							framework.removeClass(item, 'pswp__element--disabled');
							if(uiElement.onInit) {
								uiElement.onInit(item);
							}
							
							//item.style.display = 'block';
						} else {
							framework.addClass(item, 'pswp__element--disabled');
							//item.style.display = 'none';
						}
					}
				}
			}
		};
		loopThroughChildElements(_controls.children);

		var topBar =  framework.getChildByClass(_controls, 'pswp__top-bar');
		if(topBar) {
			loopThroughChildElements( topBar.children );
		}
	};


	

	ui.init = function() {

		// extend options
		framework.extend(pswp.options, _defaultUIOptions, true);

		// create local link for fast access
		_options = pswp.options;

		// find pswp__ui element
		_controls = framework.getChildByClass(pswp.scrollWrap, 'pswp__ui');

		// create local link
		_listen = pswp.listen;


		_setupHidingControlsDuringGestures();

		// update controls when slides change
		_listen('beforeChange', ui.update);

		// toggle zoom on double-tap
		_listen('doubleTap', function(point) {
			var initialZoomLevel = pswp.currItem.initialZoomLevel;
			if(pswp.getZoomLevel() !== initialZoomLevel) {
				pswp.zoomTo(initialZoomLevel, point, 333);
			} else {
				pswp.zoomTo(_options.getDoubleTapZoom(false, pswp.currItem), point, 333);
			}
		});

		// Allow text selection in caption
		_listen('preventDragEvent', function(e, isDown, preventObj) {
			var t = e.target || e.srcElement;
			if(
				t && 
				t.getAttribute('class') && e.type.indexOf('mouse') > -1 && 
				( t.getAttribute('class').indexOf('__caption') > 0 || (/(SMALL|STRONG|EM)/i).test(t.tagName) ) 
			) {
				preventObj.prevent = false;
			}
		});

		// bind events for UI
		_listen('bindEvents', function() {
			framework.bind(_controls, 'pswpTap click', _onControlsTap);
			framework.bind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);

			if(!pswp.likelyTouchDevice) {
				framework.bind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);
			}
		});

		// unbind events for UI
		_listen('unbindEvents', function() {
			if(!_shareModalHidden) {
				_toggleShareModal();
			}

			if(_idleInterval) {
				clearInterval(_idleInterval);
			}
			framework.unbind(document, 'mouseout', _onMouseLeaveWindow);
			framework.unbind(document, 'mousemove', _onIdleMouseMove);
			framework.unbind(_controls, 'pswpTap click', _onControlsTap);
			framework.unbind(pswp.scrollWrap, 'pswpTap', ui.onGlobalTap);
			framework.unbind(pswp.scrollWrap, 'mouseover', ui.onMouseOver);

			if(_fullscrenAPI) {
				framework.unbind(document, _fullscrenAPI.eventK, ui.updateFullscreen);
				if(_fullscrenAPI.isFullscreen()) {
					_options.hideAnimationDuration = 0;
					_fullscrenAPI.exit();
				}
				_fullscrenAPI = null;
			}
		});


		// clean up things when gallery is destroyed
		_listen('destroy', function() {
			if(_options.captionEl) {
				if(_fakeCaptionContainer) {
					_controls.removeChild(_fakeCaptionContainer);
				}
				framework.removeClass(_captionContainer, 'pswp__caption--empty');
			}

			if(_shareModal) {
				_shareModal.children[0].onclick = null;
			}
			framework.removeClass(_controls, 'pswp__ui--over-close');
			framework.addClass( _controls, 'pswp__ui--hidden');
			ui.setIdle(false);
		});
		

		if(!_options.showAnimationDuration) {
			framework.removeClass( _controls, 'pswp__ui--hidden');
		}
		_listen('initialZoomIn', function() {
			if(_options.showAnimationDuration) {
				framework.removeClass( _controls, 'pswp__ui--hidden');
			}
		});
		_listen('initialZoomOut', function() {
			framework.addClass( _controls, 'pswp__ui--hidden');
		});

		_listen('parseVerticalMargin', _applyNavBarGaps);
		
		_setupUIElements();

		if(_options.shareEl && _shareButton && _shareModal) {
			_shareModalHidden = true;
		}

		_countNumItems();

		_setupIdle();

		_setupFullscreenAPI();

		_setupLoadingIndicator();
	};

	ui.setIdle = function(isIdle) {
		_isIdle = isIdle;
		_togglePswpClass(_controls, 'ui--idle', isIdle);
	};

	ui.update = function() {
		// Don't update UI if it's hidden
		if(_controlsVisible && pswp.currItem) {
			
			ui.updateIndexIndicator();

			if(_options.captionEl) {
				_options.addCaptionHTMLFn(pswp.currItem, _captionContainer);

				_togglePswpClass(_captionContainer, 'caption--empty', !pswp.currItem.title);
			}

			_overlayUIUpdated = true;

		} else {
			_overlayUIUpdated = false;
		}

		if(!_shareModalHidden) {
			_toggleShareModal();
		}

		_countNumItems();
	};

	ui.updateFullscreen = function(e) {

		if(e) {
			// some browsers change window scroll position during the fullscreen
			// so PhotoSwipe updates it just in case
			setTimeout(function() {
				pswp.setScrollOffset( 0, framework.getScrollY() );
			}, 50);
		}
		
		// toogle pswp--fs class on root element
		framework[ (_fullscrenAPI.isFullscreen() ? 'add' : 'remove') + 'Class' ](pswp.template, 'pswp--fs');
	};

	ui.updateIndexIndicator = function() {
		if(_options.counterEl) {
			_indexIndicator.innerHTML = (pswp.getCurrentIndex()+1) + 
										_options.indexIndicatorSep + 
										_options.getNumItemsFn();
		}
	};
	
	ui.onGlobalTap = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		if(_blockControlsTap) {
			return;
		}

		if(e.detail && e.detail.pointerType === 'mouse') {

			// close gallery if clicked outside of the image
			if(_hasCloseClass(target)) {
				pswp.close();
				return;
			}

			if(framework.hasClass(target, 'pswp__img')) {
				if(pswp.getZoomLevel() === 1 && pswp.getZoomLevel() <= pswp.currItem.fitRatio) {
					if(_options.clickToCloseNonZoomable) {
						pswp.close();
					}
				} else {
					pswp.toggleDesktopZoom(e.detail.releasePoint);
				}
			}
			
		} else {

			// tap anywhere (except buttons) to toggle visibility of controls
			if(_options.tapToToggleControls) {
				if(_controlsVisible) {
					ui.hideControls();
				} else {
					ui.showControls();
				}
			}

			// tap to close gallery
			if(_options.tapToClose && (framework.hasClass(target, 'pswp__img') || _hasCloseClass(target)) ) {
				pswp.close();
				return;
			}
			
		}
	};
	ui.onMouseOver = function(e) {
		e = e || window.event;
		var target = e.target || e.srcElement;

		// add class when mouse is over an element that should close the gallery
		_togglePswpClass(_controls, 'ui--over-close', _hasCloseClass(target));
	};

	ui.hideControls = function() {
		framework.addClass(_controls,'pswp__ui--hidden');
		_controlsVisible = false;
	};

	ui.showControls = function() {
		_controlsVisible = true;
		if(!_overlayUIUpdated) {
			ui.update();
		}
		framework.removeClass(_controls,'pswp__ui--hidden');
	};

	ui.supportsFullscreen = function() {
		var d = document;
		return !!(d.exitFullscreen || d.mozCancelFullScreen || d.webkitExitFullscreen || d.msExitFullscreen);
	};

	ui.getFullscreenAPI = function() {
		var dE = document.documentElement,
			api,
			tF = 'fullscreenchange';

		if (dE.requestFullscreen) {
			api = {
				enterK: 'requestFullscreen',
				exitK: 'exitFullscreen',
				elementK: 'fullscreenElement',
				eventK: tF
			};

		} else if(dE.mozRequestFullScreen ) {
			api = {
				enterK: 'mozRequestFullScreen',
				exitK: 'mozCancelFullScreen',
				elementK: 'mozFullScreenElement',
				eventK: 'moz' + tF
			};

			

		} else if(dE.webkitRequestFullscreen) {
			api = {
				enterK: 'webkitRequestFullscreen',
				exitK: 'webkitExitFullscreen',
				elementK: 'webkitFullscreenElement',
				eventK: 'webkit' + tF
			};

		} else if(dE.msRequestFullscreen) {
			api = {
				enterK: 'msRequestFullscreen',
				exitK: 'msExitFullscreen',
				elementK: 'msFullscreenElement',
				eventK: 'MSFullscreenChange'
			};
		}

		if(api) {
			api.enter = function() { 
				// disable close-on-scroll in fullscreen
				_initalCloseOnScrollValue = _options.closeOnScroll; 
				_options.closeOnScroll = false; 

				if(this.enterK === 'webkitRequestFullscreen') {
					pswp.template[this.enterK]( Element.ALLOW_KEYBOARD_INPUT );
				} else {
					return pswp.template[this.enterK](); 
				}
			};
			api.exit = function() { 
				_options.closeOnScroll = _initalCloseOnScrollValue;

				return document[this.exitK](); 

			};
			api.isFullscreen = function() { return document[this.elementK]; };
		}

		return api;
	};



};
return PhotoSwipeUI_Default;


});


/*!

 * DrawSVGPlugin 3.10.4

 * https://greensock.com

 * 

 * @license Copyright 2022, GreenSock. All rights reserved.

 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club

 * @author: Jack Doyle, jack@greensock.com

 */



!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function j(){return"undefined"!=typeof window}function k(){return r||j()&&(r=window.gsap)&&r.registerPlugin&&r}function n(e){return Math.round(1e4*e)/1e4}function o(e){return parseFloat(e)||0}function p(e,t){var n=o(e);return~e.indexOf("%")?n/100*t:n}function q(e,t){return o(e.getAttribute(t))}function s(e,t,n,r,i,s){return M(Math.pow((o(n)-o(e))*i,2)+Math.pow((o(r)-o(t))*s,2))}function t(e){return console.warn(e)}function u(e){return"non-scaling-stroke"===e.getAttribute("vector-effect")}function x(e){if(!(e=v(e)[0]))return 0;var r,i,o,a,f,h,d,l=e.tagName.toLowerCase(),c=e.style,g=1,p=1;u(e)&&(p=e.getScreenCTM(),g=M(p.a*p.a+p.b*p.b),p=M(p.d*p.d+p.c*p.c));try{i=e.getBBox()}catch(e){t("Some browsers won't measure invisible elements (like display:none or masks inside defs).")}var _=i||{x:0,y:0,width:0,height:0},y=_.x,x=_.y,w=_.width,k=_.height;if(i&&(w||k)||!P[l]||(w=q(e,P[l][0]),k=q(e,P[l][1]),"rect"!==l&&"line"!==l&&(w*=2,k*=2),"line"===l&&(y=q(e,"x1"),x=q(e,"y1"),w=Math.abs(w-y),k=Math.abs(k-x))),"path"===l)a=c.strokeDasharray,c.strokeDasharray="none",r=e.getTotalLength()||0,n(g)!==n(p)&&!b&&(b=1)&&t("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),r*=(g+p)/2,c.strokeDasharray=a;else if("rect"===l)r=2*w*g+2*k*p;else if("line"===l)r=s(y,x,y+w,x+k,g,p);else if("polyline"===l||"polygon"===l)for(o=e.getAttribute("points").match(m)||[],"polygon"===l&&o.push(o[0],o[1]),r=0,f=2;f<o.length;f+=2)r+=s(o[f-2],o[f-1],o[f],o[f+1],g,p)||0;else"circle"!==l&&"ellipse"!==l||(h=w/2*g,d=k/2*p,r=Math.PI*(3*(h+d)-M((3*h+d)*(h+3*d))));return r||0}function y(e,t){if(!(e=v(e)[0]))return[0,0];t=t||x(e)+1;var n=f.getComputedStyle(e),r=n.strokeDasharray||"",i=o(n.strokeDashoffset),s=r.indexOf(",");return s<0&&(s=r.indexOf(" ")),t<(r=s<0?t:o(r.substr(0,s)))&&(r=t),[-i||0,r-i||0]}function z(){j()&&(f=window,d=r=k(),v=r.utils.toArray,h=-1!==((f.navigator||{}).userAgent||"").indexOf("Edge"))}var r,v,f,h,d,b,m=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,P={rect:["width","height"],circle:["r","r"],ellipse:["rx","ry"],line:["x2","y2"]},M=Math.sqrt,i={version:"3.10.4",name:"drawSVG",register:function register(e){r=e,z()},init:function init(e,t){if(!e.getBBox)return!1;d||z();var r,i,s,a=x(e);return this._style=e.style,this._target=e,t+""=="true"?t="0 100%":t?-1===(t+"").indexOf(" ")&&(t="0 "+t):t="0 0",i=function _parse(e,t,n){var r,i,s=e.indexOf(" ");return i=s<0?(r=void 0!==n?n+"":e,e):(r=e.substr(0,s),e.substr(s+1)),r=p(r,t),(i=p(i,t))<r?[i,r]:[r,i]}(t,a,(r=y(e,a))[0]),this._length=n(a),this._dash=n(r[1]-r[0]),this._offset=n(-r[0]),this._dashPT=this.add(this,"_dash",this._dash,n(i[1]-i[0])),this._offsetPT=this.add(this,"_offset",this._offset,n(-i[0])),h&&(s=f.getComputedStyle(e)).strokeLinecap!==s.strokeLinejoin&&(i=o(s.strokeMiterlimit),this.add(e.style,"strokeMiterlimit",i,i+.01)),this._live=u(e)||~(t+"").indexOf("live"),this._nowrap=~(t+"").indexOf("nowrap"),this._props.push("drawSVG"),1},render:function render(e,t){var n,r,i,s,o=t._pt,a=t._style;if(o){for(t._live&&(n=x(t._target))!==t._length&&(r=n/t._length,t._length=n,t._offsetPT&&(t._offsetPT.s*=r,t._offsetPT.c*=r),t._dashPT?(t._dashPT.s*=r,t._dashPT.c*=r):t._dash*=r);o;)o.r(e,o.d),o=o._next;i=t._dash||e&&1!==e&&1e-4||0,n=t._length-i+.1,s=t._offset,i&&s&&i+Math.abs(s%t._length)>t._length-.2&&(s+=s<0?.1:-.1)&&(n+=.1),a.strokeDashoffset=i?s:s+.001,a.strokeDasharray=n<.2?"none":i?i+"px,"+(t._nowrap?999999:n)+"px":"0px, 999999px"}},getLength:x,getPosition:y};k()&&r.registerPlugin(i),e.DrawSVGPlugin=i,e.default=i;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});


/*!

 * GSAP 3.10.4

 * https://greensock.com

 * 

 * @license Copyright 2022, GreenSock. All rights reserved.

 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.

 * @author: Jack Doyle, jack@greensock.com

 */



!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t){return"string"==typeof t}function p(t){return"function"==typeof t}function q(t){return"number"==typeof t}function r(t){return void 0===t}function s(t){return"object"==typeof t}function t(t){return!1!==t}function u(){return"undefined"!=typeof window}function v(t){return p(t)||o(t)}function M(t){return(h=mt(t,ot))&&he}function N(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function O(t,e){return!e&&console.warn(t)}function P(t,e){return t&&(ot[t]=e)&&h&&(h[t]=e)||ot}function Q(){return 0}function $(t){var e,r,i=t[0];if(s(i)||p(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=pt.length;r--&&!pt[r].targetTest(i););e=pt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Lt(t[r],e)))||t.splice(r,1);return t}function _(t){return t._gsap||$(xt(t))[0]._gsap}function aa(t,e,i){return(i=t[e])&&p(i)?t[e]():r(i)&&t.getAttribute&&t.getAttribute(e)||i}function ba(t,e){return(t=t.split(",")).forEach(e)||t}function ca(t){return Math.round(1e5*t)/1e5||0}function da(t){return Math.round(1e7*t)/1e7||0}function ea(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function fa(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ga(){var t,e,r=ht.length,i=ht.slice(0);for(lt={},t=ht.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ha(t,e,r,i){ht.length&&ga(),t.render(e,r,i),ht.length&&ga()}function ia(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:o(t)?t.trim():t}function ja(t){return t}function ka(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function na(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=s(e[r])?na(t[r]||(t[r]={}),e[r]):e[r]);return t}function oa(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function pa(e){var r=e.parent||I,i=e.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}(J(e.keyframes)):ka;if(t(e.inherit))for(;r;)i(e,r.vars.defaults),r=r.parent||r._dp;return e}function ra(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function sa(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function ta(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ua(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function xa(t){return t._repeat?gt(t._tTime,t=t.duration()+t._rDelay)*t:0}function za(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Aa(t){return t._end=da(t._start+(t._tDur/Math.abs(t._ts||t._rts||V)||0))}function Ba(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=da(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Aa(t),r._dirty||ua(r,t)),t}function Ca(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=za(t.rawTime(),e),(!e._dur||bt(0,e.totalDuration(),r)-e._tTime>V)&&e.render(r,!0)),ua(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-V}}function Da(t,e,r,i){return e.parent&&ta(e),e._start=da((q(r)?r:r||t!==I?Tt(t,r,e):t._time)+e._delay),e._end=da(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),ra(t,e,"_first","_last",t._sort?"_start":0),vt(e)||(t._recent=e),i||Ca(t,e),t}function Ea(t,e){return(ot.ScrollTrigger||N("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Fa(t,e,r,i){return Xt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Dt.frame?(ht.push(t),t._lazy=[e,i],1):void 0:1}function Ka(t,e,r,i){var n=t._repeat,a=da(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:da(a*(n+1)+t._rDelay*n):a,0<s&&!i?Ba(t,t._tTime=t._tDur*s):t.parent&&Aa(t),r||ua(t.parent,t),t}function La(t){return t instanceof Ut?ua(t):Ka(t,t._dur)}function Oa(e,r,i){var n,a,s=q(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=t(a.vars.inherit)&&a.parent;u.immediateRender=t(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new $t(r[0],u,r[1+o])}function Pa(t,e){return t||0===t?e(t):e}function Ra(t,e){return o(t)&&(e=st.exec(t))?e[1]:""}function Ua(t,e){return t&&s(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&s(t[0]))&&!t.nodeType&&t!==i}function Ya(t){return t.sort(function(){return.5-Math.random()})}function Za(t){if(p(t))return t;var c=s(t)?t:{each:t},m=Bt(c.ease),g=c.from||0,v=parseFloat(c.base)||0,y={},e=0<g&&g<1,T=isNaN(g)||e,b=c.axis,w=g,x=g;return o(g)?w=x={center:.5,edges:.5,end:1}[g]||0:!e&&T&&(w=g[0],x=g[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||c).length,_=y[d];if(!_){if(!(f="auto"===c.grid?0:(c.grid||[1,Y])[1])){for(h=-Y;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(_=y[d]=[],i=T?Math.min(f,d)*w-.5:g%f,n=f===Y?0:T?d*x/f-.5:g/f|0,l=Y,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),_[u]=o=b?Math.abs("y"===b?s:a):G(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===g&&Ya(_),_.max=h-l,_.min=l,_.v=d=(parseFloat(c.amount)||parseFloat(c.each)*(d<f?d-1:b?"y"===b?d/f:f:Math.max(f,d/f))||0)*("edges"===g?-1:1),_.b=d<0?v-d:v,_.u=Ra(c.amount||c.each)||0,m=m&&d<0?Ft(m):m}return d=(_[t]-_.min)/_.max||0,da(_.b+(m?m(d):d)*_.v)+_.u}}function $a(r){var i=Math.pow(10,((r+"").split(".")[1]||"").length);return function(t){var e=Math.round(parseFloat(t)/r)*r*i;return(e-e%1)/i+(q(t)?0:Ra(t))}}function _a(u,t){var h,l,e=J(u);return!e&&s(u)&&(h=e=u.radius||Y,u.values?(u=xt(u.values),(l=!q(u[0]))&&(h*=h)):u=$a(u.increment)),Pa(t,e?p(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=Y,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||q(t)?s:s+Ra(t)}:$a(u))}function ab(t,e,r,i){return Pa(J(t)?!e:!0===r?!!(r=0):!i,function(){return J(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function eb(e,r,t){return Pa(t,function(t){return e[~~r(t)]})}function hb(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+ab(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function kb(t,e,r){var i,n,a,s=t.labels,o=Y;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function mb(t){return ta(t),t.scrollTrigger&&t.scrollTrigger.kill(!1),t.progress()<1&&Ot(t,"onInterrupt"),t}function rb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*Pt+.5|0}function sb(t,e,r){var i,n,a,s,o,u,h,l,f,d,_=t?q(t)?[t>>16,t>>8&Pt,t&Pt]:0:Mt.black;if(!_){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Mt[t])_=Mt[t];else if("#"===t.charAt(0)){if(t.length<6&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return[(_=parseInt(t.substr(1,6),16))>>16,_>>8&Pt,_&Pt,parseInt(t.substr(7),16)/255];_=[(t=parseInt(t.substr(1),16))>>16,t>>8&Pt,t&Pt]}else if("hsl"===t.substr(0,3))if(_=d=t.match(tt),e){if(~t.indexOf("="))return _=t.match(et),r&&_.length<4&&(_[3]=1),_}else s=+_[0]%360/360,o=_[1]/100,i=2*(u=_[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<_.length&&(_[3]*=1),_[0]=rb(s+1/3,i,n),_[1]=rb(s,i,n),_[2]=rb(s-1/3,i,n);else _=t.match(tt)||Mt.transparent;_=_.map(Number)}return e&&!d&&(i=_[0]/Pt,n=_[1]/Pt,a=_[2]/Pt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),_[0]=~~(s+.5),_[1]=~~(100*o+.5),_[2]=~~(100*u+.5)),r&&_.length<4&&(_[3]=1),_}function tb(t){var r=[],i=[],n=-1;return t.split(Ct).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function ub(t,e,r){var i,n,a,s,o="",u=(t+o).match(Ct),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=sb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=tb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Ct,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Ct)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function xb(t){var e,r=t.join(" ");if(Ct.lastIndex=0,Ct.test(r))return e=At.test(r),t[1]=ub(t[1],e),t[0]=ub(t[0],e,tb(t[1])),!0}function Gb(t){var e=(t+"").split("("),r=zt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(Et,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(ia)):zt._CE&&Rt.test(t)?zt._CE("",t):r}function Ib(t,e){for(var r,i=t._first;i;)i instanceof Ut?Ib(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Ib(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Kb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ba(t,function(t){for(var e in zt[t]=ot[t]=a,zt[n=t.toLowerCase()]=r,a)zt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=zt[t+"."+e]=a[e]}),a}function Lb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Mb(r,t,e){function em(t){return 1===t?1:i*Math.pow(2,-10*t)*Z((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/X*(Math.asin(1/i)||0),s="out"===r?em:"in"===r?function(t){return 1-em(1-t)}:Lb(em);return n=X/n,s.config=function(t,e){return Mb(r,t,e)},s}function Nb(e,r){function mm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?mm:"in"===e?function(t){return 1-mm(1-t)}:Lb(mm);return t.config=function(t){return Nb(e,t)},t}var B,I,i,n,a,h,l,f,d,c,m,g,y,T,b,w,x,k,C,A,D,S,z,R,E,F,U={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},L={duration:.5,overwrite:!1,delay:0},Y=1e8,V=1/Y,X=2*Math.PI,j=X/4,K=0,G=Math.sqrt,W=Math.cos,Z=Math.sin,H="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},J=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot={},ut={},ht=[],lt={},ft={},dt={},_t=30,pt=[],ct="",mt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},gt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},vt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},yt={_start:0,endTime:Q,totalDuration:Q},Tt=function _parsePosition(t,e,r){var i,n,a,s=t.labels,u=t._recent||yt,h=t.duration()>=Y?u.endTime(!1):t._dur;return o(e)&&(isNaN(e)||e in s)?(n=e.charAt(0),a="%"===e.substr(-1),i=e.indexOf("="),"<"===n||">"===n?(0<=i&&(e=e.replace(/=/,"")),("<"===n?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(a?(i<0?u:r).totalDuration()/100:1)):i<0?(e in s||(s[e]=h),s[e]):(n=parseFloat(e.charAt(i-1)+e.substr(i+1)),a&&r&&(n=n/100*(J(r)?r[0]:r).totalDuration()),1<i?_parsePosition(t,e.substr(0,i-1),r)+n:h+n)):null==e?h:+e},bt=function _clamp(t,e,r){return r<t?t:e<r?e:r},wt=[].slice,xt=function toArray(t,e,r){return!o(t)||r||!n&&St()?J(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return o(t)&&!e||Ua(t,1)?r.push.apply(r,xt(t)):r.push(t)})||r}(t,r):Ua(t)?wt.call(t,0):t?[t]:[]:wt.call((e||a).querySelectorAll(t),0)},kt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Pa(n,function(t){return r+((t-e)/a*s||0)})},Ot=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ht.length&&ga(),i?s.apply(n,i):s.call(n)},Pt=255,Mt={aqua:[0,Pt,Pt],lime:[0,Pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pt],navy:[0,0,128],white:[Pt,Pt,Pt],olive:[128,128,0],yellow:[Pt,Pt,0],orange:[Pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pt,0,0],pink:[Pt,192,203],cyan:[0,Pt,Pt],transparent:[Pt,Pt,Pt,0]},Ct=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Mt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),At=/hsl[a]?\(/,Dt=(x=Date.now,k=500,C=33,A=x(),D=A,z=S=1e3/240,T={time:0,frame:0,tick:function tick(){Vk(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){l&&(!n&&u()&&(i=n=window,a=i.document||{},ot.gsap=he,(i.gsapVersions||(i.gsapVersions=[])).push(he.version),M(h||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),m&&T.sleep(),g=y||function(t){return setTimeout(t,z-1e3*T.time+1|0)},c=1,Vk(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=Q},lagSmoothing:function lagSmoothing(t,e){k=t||1e8,C=Math.min(e,k,0)},fps:function fps(t){S=1e3/(t||240),z=1e3*T.time+S},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),T.remove(a)}:n;return T.remove(n),R[e?"unshift":"push"](a),St(),a},remove:function remove(t,e){~(e=R.indexOf(t))&&R.splice(e,1)&&e<=w&&w--},_listeners:R=[]}),St=function _wake(){return!c&&Dt.wake()},zt={},Rt=/^[\d.\-M][\d.\-,\s]/,Et=/["']/g,Ft=function _invertEase(e){return function(t){return 1-e(1-t)}},Bt=function _parseEase(t,e){return t&&(p(t)?t:zt[t]||Gb(t))||e};function Vk(t){var e,r,i,n,a=x()-D,s=!0===t;if(k<a&&(A+=a-C),(0<(e=(i=(D+=a)-A)-z)||s)&&(n=++T.frame,b=i-1e3*T.time,T.time=i/=1e3,z+=e+(S<=e?4:S-e),r=1),s||(m=g(Vk)),r)for(w=0;w<R.length;w++)R[w](i,b,n,t)}function Dm(t){return t<F?E*t*t:t<.7272727272727273?E*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?E*(t-=2.25/2.75)*t+.9375:E*Math.pow(t-2.625/2.75,2)+.984375}ba("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Kb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),zt.Linear.easeNone=zt.none=zt.Linear.easeIn,Kb("Elastic",Mb("in"),Mb("out"),Mb()),E=7.5625,F=1/2.75,Kb("Bounce",function(t){return 1-Dm(1-t)},Dm),Kb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Kb("Circ",function(t){return-(G(1-t*t)-1)}),Kb("Sine",function(t){return 1===t?1:1-W(t*j)}),Kb("Back",Nb("in"),Nb("out"),Nb()),zt.SteppedEase=zt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*bt(0,.99999999,t)|0)+n)*r}}},L.ease=zt["quad.out"],ba("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return ct+=t+","+t+"Params,"});var It,Lt=function GSCache(t,e){this.id=K++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:aa,this.set=e?e.getSetter:Ht},Nt=((It=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},It.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},It.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ka(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},It.totalTime=function totalTime(t,e){if(St(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ba(this,t),!r._dp||r.parent||Ca(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Da(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===V||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),ha(this,t,e)),this},It.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+xa(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},It.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},It.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+xa(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},It.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?gt(this._tTime,r)+1:1},It.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-V?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?za(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-V?0:this._rts,this.totalTime(bt(-this._delay,this._tDur,e),!0),Aa(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},It.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(St(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==V&&(this._tTime-=V)))),this):this._ps},It.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Da(e,this,t-this._delay),this}return this._start},It.endTime=function endTime(e){return this._start+(t(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},It.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?za(e.rawTime(t),this):this._tTime:this._tTime},It.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return r},It.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,La(this)):-2===this._repeat?1/0:this._repeat},It.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,La(this),e?this.time(e):this}return this._rDelay},It.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},It.seek=function seek(e,r){return this.totalTime(Tt(this,e),t(r))},It.restart=function restart(e,r){return this.play().totalTime(e?-this._delay:0,t(r))},It.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},It.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},It.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},It.resume=function resume(){return this.paused(!1)},It.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-V:0)),this):this._rts<0},It.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-V,this},It.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-V))},It.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},It.then=function then(t){var i=this;return new Promise(function(e){function Un(){var t=i.then;i.then=null,p(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=p(t)?t:ja;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Un():i._prom=Un})},It.kill=function kill(){mb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ka(this,+t.duration,1,1),this.data=t.data,c||Dt.wake()}ka(Nt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-V,_prom:0,_ps:!1,_rts:1});var Ut=function(n){function Timeline(e,r){var i;return void 0===e&&(e={}),(i=n.call(this,e)||this).labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=t(e.sortChildren),I&&Da(e.parent||I,_assertThisInitialized(i),r),e.reversed&&i.reverse(),e.paused&&i.paused(!0),e.scrollTrigger&&Ea(_assertThisInitialized(i),e.scrollTrigger),i}_inheritsLoose(Timeline,n);var e=Timeline.prototype;return e.to=function to(t,e,r){return Oa(0,arguments,this),this},e.from=function from(t,e,r){return Oa(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Oa(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,pa(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new $t(t,e,Tt(this,r),1),this},e.call=function call(t,e,r){return Da(this,$t.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new $t(t,r,Tt(this,n)),this},e.staggerFrom=function staggerFrom(e,r,i,n,a,s,o){return i.runBackwards=1,pa(i).immediateRender=t(i.immediateRender),this.staggerTo(e,r,i,n,a,s,o)},e.staggerFromTo=function staggerFromTo(e,r,i,n,a,s,o,u){return n.startAt=i,pa(n).immediateRender=t(n.immediateRender),this.staggerTo(e,r,n,a,s,o,u)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,_,p,c=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:da(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==I&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(c!==this._time&&g&&(v+=this._time-c,t+=this._time-c),i=v,f=this._start,u=!(l=this._ts),y&&(g||(c=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(_=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=da(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),d=gt(this._tTime,o),!c&&this._tTime&&d!==s&&(d=s),_&&1&s&&(i=g-i,p=1),s!==d&&!this._lock){var T=_&&1&d,b=T===(_&&1&s);if(s<d&&(T=!T),c=T?0:g,this._lock=1,this.render(c||(p?0:da(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&Ot(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),c&&c!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,c=T?g:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Ib(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,da(c),da(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,c=0),!c&&i&&!e&&(Ot(this,"onStart"),this._tTime!==v))return this;if(c<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-V);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-V:V);break}}n=a}}if(h&&!e&&(this.pause(),h.render(c<=i?0:-V)._zTime=c<=i?1:-1,this._ts))return this._start=f,Aa(this),this.render(t,e,r);this._onUpdate&&!e&&Ot(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&c)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||ta(this,1),e||t<0&&!c||!v&&!c&&m||(Ot(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(t,e){var r=this;if(q(e)||(e=Tt(this,e,t)),!(t instanceof Nt)){if(J(t))return t.forEach(function(t){return r.add(t,e)}),this;if(o(t))return this.addLabel(t,e);if(!p(t))return this;t=$t.delayedCall(0,t)}return this!==t?Da(this,t,e):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-Y);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof $t?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return o(t)?this.removeLabel(t):p(t)?this.killTweensOf(t):(sa(this,t),t===this._recent&&(this._recent=this._last),ua(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=da(Dt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),n.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=Tt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=$t.delayedCall(0,e||Q,r);return i.data="isPause",this._hasPause=1,Da(this,i,Tt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=Tt(this,t);e;)e._start===t&&"isPause"===e.data&&ta(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Yt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=xt(t),a=this._first,s=q(e);a;)a instanceof $t?fa(a._targets,n)&&(s?(!Yt||a._initted&&a._ts)&&a.globalTime(0)<=e&&a.globalTime(a.totalDuration())>e:!e||a.isActive())&&i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=Tt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=$t.to(i,ka({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||V,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ka(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ka({startAt:{time:Tt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),kb(this,Tt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),kb(this,Tt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+V)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ua(this)},e.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return n.prototype.invalidate.call(this)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),ua(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=Y;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Da(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ka(a,a===I&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(I._ts&&(ha(I,za(t,I)),f=Dt.frame),Dt.frame>=_t){_t+=U.autoSleep||120;var e=I._first;if((!e||!e._ts)&&U.autoSleep&&Dt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Dt.sleep()}}},Timeline}(Nt);ka(Ut.prototype,{_lock:0,_hasPause:0,_forcing:0});function Ub(t,e,r,i,n,a){var u,h,l,f;if(ft[t]&&!1!==(u=new ft[t]).init(n,u.rawVars?e[t]:function _processVars(t,e,r,i,n){if(p(t)&&(t=Qt(t,n,e,r,i)),!s(t)||t.style&&t.nodeType||J(t)||H(t))return o(t)?Qt(t,n,e,r,i):t;var a,u={};for(a in t)u[a]=Qt(t[a],n,e,r,i);return u}(e[t],i,n,a,r),r,i,a)&&(r._pt=h=new oe(r._pt,n,t,0,1,u.render,u,0,u.priority),r!==d))for(l=r._ptLookup[r._targets.indexOf(n)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function $b(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if(J(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Yt,qt,Vt=function _addPropTween(t,e,r,i,n,a,s,u,h){p(i)&&(i=i(n||0,t,a));var l,f=t[e],d="get"!==r?r:p(f)?h?t[e.indexOf("set")||!p(t["get"+e.substr(3)])?e:"get"+e.substr(3)](h):t[e]():f,_=p(f)?h?Zt:Wt:Gt;if(o(i)&&(~i.indexOf("random(")&&(i=hb(i)),"="===i.charAt(1)&&(!(l=ea(d,i)+(Ra(d)||0))&&0!==l||(i=l))),d!==i||qt)return isNaN(d*i)||""===i?(f||e in t||N(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,_,p,c=new oe(this._pt,t,e,0,1,ee,null,n),m=0,g=0;for(c.b=r,c.e=i,r+="",(_=~(i+="").indexOf("random("))&&(i=hb(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,c._pt={_next:c._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?ea(d,l)-d:parseFloat(l)-d,m:h&&h<4?Math.round:0},m=it.lastIndex);return c.c=m<i.length?i.substring(m,i.length):"",c.fp=s,(nt.test(i)||_)&&(c.e=0),this._pt=c}.call(this,t,e,d,i,_,u||U.stringFilter,h)):(l=new oe(this._pt,t,e,+d||0,i-(d||0),"boolean"==typeof f?te:Jt,0,_),h&&(l.fp=h),s&&l.modifier(s,this,t),this._pt=l)},Xt=function _initTween(e,r){var i,n,a,s,o,u,h,l,f,d,p,c,m,g=e.vars,v=g.ease,y=g.startAt,T=g.immediateRender,b=g.lazy,w=g.onUpdate,x=g.onUpdateParams,k=g.callbackScope,O=g.runBackwards,P=g.yoyoEase,M=g.keyframes,C=g.autoRevert,A=e._dur,D=e._startAt,S=e._targets,z=e.parent,R=z&&"nested"===z.data?z.parent._targets:S,E="auto"===e._overwrite&&!B,F=e.timeline;if(!F||M&&v||(v="none"),e._ease=Bt(v,L.ease),e._yEase=P?Ft(Bt(!0===P?v:P,L.ease)):0,P&&e._yoyo&&!e._repeat&&(P=e._yEase,e._yEase=e._ease,e._ease=P),e._from=!F&&!!g.runBackwards,!F||M&&!g.stagger){if(c=(l=S[0]?_(S[0]).harness:0)&&g[l.prop],i=oa(g,ut),D&&(ta(D.render(-1,!0)),D._lazy=0),y)if(ta(e._startAt=$t.set(S,ka({data:"isStart",overwrite:!1,parent:z,immediateRender:!0,lazy:t(b),startAt:null,delay:0,onUpdate:w,onUpdateParams:x,callbackScope:k,stagger:0},y))),r<0&&!T&&!C&&e._startAt.render(-1,!0),T){if(0<r&&!C&&(e._startAt=0),A&&r<=0)return void(r&&(e._zTime=r))}else!1===C&&(e._startAt=0);else if(O&&A)if(D)C||(e._startAt=0);else if(r&&(T=!1),a=ka({overwrite:!1,data:"isFromStart",lazy:T&&t(b),immediateRender:T,stagger:0,parent:z},i),c&&(a[l.prop]=c),ta(e._startAt=$t.set(S,a)),r<0&&e._startAt.render(-1,!0),e._zTime=r,T){if(!r)return}else _initTween(e._startAt,V);for(e._pt=e._ptCache=0,b=A&&t(b)||b&&!A,n=0;n<S.length;n++){if(h=(o=S[n])._gsap||$(S)[n]._gsap,e._ptLookup[n]=d={},lt[h.id]&&ht.length&&ga(),p=R===S?n:R.indexOf(o),l&&!1!==(f=new l).init(o,c||i,e,p,R)&&(e._pt=s=new oe(e._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=s}),f.priority&&(u=1)),!l||c)for(a in i)ft[a]&&(f=Ub(a,i,e,p,o,R))?f.priority&&(u=1):d[a]=s=Vt.call(e,o,a,"get",i[a],p,R,0,g.stringFilter);e._op&&e._op[n]&&e.kill(o,e._op[n]),E&&e._pt&&(Yt=e,I.killTweensOf(o,d,e.globalTime(r)),m=!e.parent,Yt=0),e._pt&&b&&(lt[h.id]=1)}u&&se(e),e._onInit&&e._onInit(e)}e._onUpdate=w,e._initted=(!e._op||e._pt)&&!m,M&&r<=0&&F.render(Y,!0,!0)},Qt=function _parseFuncOrString(t,e,r,i,n){return p(t)?t.call(e,r,i,n):o(t)&&~t.indexOf("random(")?hb(t):t},jt=ct+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Kt={};ba(jt+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Kt[t]=1});var $t=function(R){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var o,u,h,l,f,d,_,p,c=(a=R.call(this,n?r:pa(r))||this).vars,m=c.duration,g=c.delay,y=c.immediateRender,T=c.stagger,b=c.overwrite,w=c.keyframes,x=c.defaults,k=c.scrollTrigger,P=c.yoyoEase,M=r.parent||I,C=(J(e)||H(e)?q(e[0]):"length"in r)?[e]:xt(e);if(a._targets=C.length?$(C):O("GSAP target "+e+" not found. https://greensock.com",!U.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,w||T||v(m)||v(g)){if(r=a.vars,(o=a.timeline=new Ut({data:"nested",defaults:x||{}})).kill(),o.parent=o._dp=_assertThisInitialized(a),o._start=0,T||v(m)||v(g)){if(l=C.length,_=T&&Za(T),s(T))for(f in T)~jt.indexOf(f)&&((p=p||{})[f]=T[f]);for(u=0;u<l;u++)(h=oa(r,Kt)).stagger=0,P&&(h.yoyoEase=P),p&&mt(h,p),d=C[u],h.duration=+Qt(m,_assertThisInitialized(a),u,d,C),h.delay=(+Qt(g,_assertThisInitialized(a),u,d,C)||0)-a._delay,!T&&1===l&&h.delay&&(a._delay=g=h.delay,a._start+=g,h.delay=0),o.to(d,h,_?_(u,d,C):0),o._ease=zt.none;o.duration()?m=g=0:a.timeline=0}else if(w){pa(ka(o.vars.defaults,{ease:"none"})),o._ease=Bt(w.ease||r.ease||"none");var A,D,S,z=0;if(J(w))w.forEach(function(t){return o.to(C,t,">")});else{for(f in h={},w)"ease"===f||"easeEach"===f||$b(f,w[f],h,w.easeEach);for(f in h)for(A=h[f].sort(function(t,e){return t.t-e.t}),u=z=0;u<A.length;u++)(S={ease:(D=A[u]).e,duration:(D.t-(u?A[u-1].t:0))/100*m})[f]=D.v,o.to(C,S,z),z+=S.duration;o.duration()<m&&o.to({},{duration:m-o.duration()})}}m||a.duration(m=o.duration())}else a.timeline=0;return!0!==b||B||(Yt=_assertThisInitialized(a),I.killTweensOf(C),Yt=0),Da(M,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(y||!m&&!w&&a._start===da(M._time)&&t(y)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==M.data)&&(a._tTime=-V,a.render(Math.max(0,-g))),k&&Ea(_assertThisInitialized(a),k),a}_inheritsLoose(Tween,R);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,_=this._tDur,p=this._dur,c=_-V<t&&0<=t?_:t<V?0:t;if(p){if(c!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=t<0){if(i=c,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*s+t,e,r);if(i=da(c%s),c===_?(a=this._repeat,i=p):((a=~~(c/s))&&a===c/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=gt(this._tTime,s),i===d&&!r&&this._initted)return this._tTime=c,this;a!==o&&(l&&this._yEase&&Ib(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(da(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Fa(this,t<0?t:i,r,e))return this._tTime=0,this;if(d!==this._time)return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=c,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!d&&!e&&(Ot(this,"onStart"),this._tTime!==c))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-V:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),Ot(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&Ot(this,"onRepeat"),c!==this._tDur&&c||this._tTime!==c||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,!0),!t&&p||!(c===this._tDur&&0<this._ts||!c&&this._ts<0)||ta(this,1),e||t<0&&!d||!c&&!d||(Ot(this,c===_?"onComplete":"onReverseComplete",!0),!this._prom||c<_&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!vt(t))||(t._ts<0||t._dp._ts<0)&&!vt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=bt(0,t._tDur,e),a=gt(l,h),t._yoyo&&1&a&&(u=1-u),a!==gt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||i||t._zTime===V||!e&&t._zTime){if(!t._initted&&Fa(t,e,i,r))return;for(s=t._zTime,t._zTime=e||(r?V:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;t._startAt&&e<0&&t._startAt.render(e,!0,!0),t._onUpdate&&!r&&Ot(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&Ot(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&ta(t,1),r||(Ot(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),R.prototype.invalidate.call(this)},e.resetTo=function resetTo(t,e,r,i){c||Dt.wake(),this._ts||this.play();var n,a=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Xt(this,a),n=this._ease(a/this._dur),function _updatePropTweens(t,e,r,i,n,a,s){var o,u,h,l=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!l)for(l=t._ptCache[e]=[],u=t._ptLookup,h=t._targets.length;h--;){if((o=u[h][e])&&o.d&&o.d._pt)for(o=o.d._pt;o&&o.p!==e;)o=o._next;if(!o)return qt=1,t.vars[e]="+=0",Xt(t,s),qt=0,1;l.push(o)}for(h=l.length;h--;)(o=l[h]).s=!i&&0!==i||n?o.s+(i||0)+a*o.c:i,o.c=r-o.s,o.e&&(o.e=ca(r)+Ra(o.e)),o.b&&(o.b=o.s+Ra(o.b))}(this,t,e,r,i,n,a)?this.resetTo(t,e,r,i):(Ba(this,0),this.parent||ra(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?mb(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Yt&&!0!==Yt.vars.overwrite)._first||mb(this),this.parent&&r!==this.timeline.totalDuration()&&Ka(this,this._dur*this.timeline._tDur/r,0,1),this}var i,n,a,s,u,h,l,f=this._targets,d=t?xt(t):f,p=this._ptLookup,c=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,d))return"all"===e&&(this._pt=0),mb(this);for(i=this._op=this._op||[],"all"!==e&&(o(e)&&(u={},ba(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?_(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=mt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~d.indexOf(f[l]))for(u in n=p[l],"all"===e?(i[l]=e,s=n,a={}):(a=i[l]=i[l]||{},s=e),s)(h=n&&n[u])&&("kill"in h.d&&!0!==h.d.kill(u)||sa(this,h,"_pt"),delete n[u]),"all"!==a&&(a[u]=1);return this._initted&&!this._pt&&c&&mb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Oa(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Oa(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return I.killTweensOf(t,e,r)},Tween}(Nt);ka($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ba("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var t=new Ut,e=wt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function gc(t,e,r){return t.setAttribute(e,r)}function oc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Gt=function _setterPlain(t,e,r){return t[e]=r},Wt=function _setterFunc(t,e,r){return t[e](r)},Zt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Ht=function _getSetter(t,e){return p(t[e])?Wt:r(t[e])&&t.setAttribute?gc:Gt},Jt=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},te=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ee=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},re=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},ie=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ne=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?sa(this,i,"_pt"):i.dep||(e=1),i=r;return!e},se=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},oe=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=oc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Jt,this.d=s||this,this.set=o||Gt,this.pr=u||0,(this._next=t)&&(t._prev=this)}ba(ct+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ut[t]=1}),ot.TweenMax=ot.TweenLite=$t,ot.TimelineLite=ot.TimelineMax=Ut,I=new Ut({sortChildren:!1,defaults:L,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),U.stringFilter=xb;var ue={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=p(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:Q,render:re,add:Vt,kill:ne,modifier:ie,rawVars:0},a={targetTest:0,get:0,getSetter:Ht,aliases:{},register:0};if(St(),t!==i){if(ft[e])return;ka(i,ka(oa(t,n),a)),mt(i.prototype,mt(n,oa(t,a))),ft[i.prop=e]=i,t.targetTest&&(pt.push(i),ut[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}P(e,i),t.register&&t.register(he,i,oe)}(t)})},timeline:function timeline(t){return new Ut(t)},getTweensOf:function getTweensOf(t,e){return I.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){o(i)&&(i=xt(i)[0]);var n=_(i||{}).get,a=e?ja:ia;return"native"===e&&(e=""),i?t?a((ft[t]&&ft[t].get||n)(i,t,e,r)):function(t,e,r){return a((ft[t]&&ft[t].get||n)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=xt(r)).length){var n=r.map(function(t){return he.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ft[e],o=_(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;d._pt=0,e.init(r,i?t+i:t,d,0,[r]),e.render(1,e),d._pt&&re(1,d)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function iw(t,e,r){return n.resetTo(i,t,e,r)}var r,n=he.to(t,mt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return iw.tween=n,iw},isTweening:function isTweening(t){return 0<I.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Bt(t.ease,L.ease)),na(L,t||{})},config:function config(t){return na(U,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ft[t]&&!ot[t]&&O(i+" effect requires "+t+" plugin.")}),dt[i]=function(t,e,r){return n(xt(t),ka(e||{},a),r)},r&&(Ut.prototype[i]=function(t,e,r){return this.add(dt[i](t,s(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){zt[t]=Bt(e)},parseEase:function parseEase(t,e){return arguments.length?Bt(t,e):zt},getById:function getById(t){return I.getById(t)},exportRoot:function exportRoot(e,r){void 0===e&&(e={});var i,n,a=new Ut(e);for(a.smoothChildTiming=t(e.smoothChildTiming),I.remove(a),a._dp=0,a._time=a._tTime=I._time,i=I._first;i;)n=i._next,!r&&!i._dur&&i instanceof $t&&i.vars.onComplete===i._targets[0]||Da(a,i,i._start-i._delay),i=n;return Da(I,a,0),a},utils:{wrap:function wrap(e,t,r){var i=t-e;return J(e)?eb(e,wrap(0,e.length),t):Pa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return J(e)?eb(e,wrapYoyo(0,e.length-1),t):Pa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:Za,random:ab,snap:_a,normalize:function normalize(t,e,r){return kt(t,e,0,1,r)},getUnit:Ra,clamp:function clamp(e,r,t){return Pa(t,function(t){return bt(e,r,t)})},splitColor:sb,toArray:xt,selector:function selector(r){return r=xt(r)[0]||O("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return xt(t,e.querySelectorAll?e:e===r?O("Invalid scope")||a.createElement("div"):r)}},mapRange:kt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ra(t))}},interpolate:function interpolate(e,r,t,i){var n=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!n){var a,s,u,h,l,f=o(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(J(e)&&!J(r)){for(u=[],h=e.length,l=h-2,s=1;s<h;s++)u.push(interpolate(e[s-1],e[s]));h--,n=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=mt(J(e)?[]:{},e));if(!u){for(a in r)Vt.call(d,e,a,"get",r[a]);n=function func(t){return re(t,d)||(f?e.p:e)}}}return Pa(t,n)},shuffle:Ya},install:M,effects:dt,ticker:Dt,updateRoot:Ut.updateRoot,plugins:ft,globalTimeline:I,core:{PropTween:oe,globals:P,Tween:$t,Timeline:Ut,Animation:Nt,getCache:_,_removeLinkedListItem:sa,suppressOverwrites:function suppressOverwrites(t){return B=t}}};ba("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ue[t]=$t[t]}),Dt.add(Ut.updateRoot),d=ue.to({},{duration:0});function sc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function uc(t,n){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(o(i)&&(e={},ba(i,function(t){return e[t]=1}),i=e),n){for(r in e={},i)e[r]=n(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=sc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var he=ue.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s;for(a in e)(s=this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a))&&(s.op=a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},uc("roundProps",$a),uc("modifiers"),uc("snap",_a))||ue;$t.version=Ut.version=he.version="3.10.4",l=1,u()&&St();function dd(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function ed(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function fd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function gd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function hd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function id(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function jd(t,e,r){return t.style[e]=r}function kd(t,e,r){return t.style.setProperty(e,r)}function ld(t,e,r){return t._gsap[e]=r}function md(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function nd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function od(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function sd(t,e){var r=fe.createElementNS?fe.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):fe.createElement(t);return r.style?r:fe.createElement(t)}function td(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Ne,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&td(t,je(e)||e,1)||""}function wd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(le=window,fe=le.document,de=fe.documentElement,pe=sd("div")||{style:{}},sd("div"),Ve=je(Ve),Xe=Ve+"Origin",pe.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",me=!!je("perspective"),_e=1)}function xd(t){var e,r=sd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(de.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=xd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),de.removeChild(r),this.style.cssText=a,e}function yd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function zd(e){var r;try{r=e.getBBox()}catch(t){r=xd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===xd||(r=xd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+yd(e,["x","cx","x1"])||0,y:+yd(e,["y","cy","y1"])||0,width:0,height:0}}function Ad(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!zd(t))}function Bd(t,e){if(e){var r=t.style;e in Fe&&e!==Xe&&(e=Ve),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Ne,"-$1").toLowerCase())):r.removeAttribute(e)}}function Cd(t,e,r,i,n,a){var s=new oe(t._pt,e,r,0,1,a?id:hd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function Ed(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=pe.style,f=Ue.test(e),d="svg"===t.tagName.toLowerCase(),p=(d?"client":"offset")+(f?"Width":"Height"),c="px"===i,m="%"===i;return i===h||!u||Ke[i]||Ke[h]?u:("px"===h||c||(u=Ed(t,e,r,"px")),o=t.getCTM&&Ad(t),!m&&"%"!==h||!Fe[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(c?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==fe&&a.appendChild||(a=fe.body),(s=a._gsap)&&m&&s.width&&f&&s.time===Dt.time?ca(u/s.width*100):(!m&&"%"!==h||(l.position=td(t,"position")),a===t&&(l.position="static"),a.appendChild(pe),n=pe[p],a.removeChild(pe),l.position="absolute",f&&m&&((s=_(a)).time=Dt.time,s.width=a[p]),ca(c?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[p],ca(m?u/n*100:u/100*n)))}function Fd(t,e,r,i){var n;return _e||wd(),e in qe&&"transform"!==e&&~(e=qe[e]).indexOf(",")&&(e=e.split(",")[0]),Fe[e]&&"transform"!==e?(n=He(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:Je(td(t,Xe))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Ge[e]&&Ge[e](t,e,r)||td(t,e)||aa(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?Ed(t,e,n,r)+r:n}function Gd(t,e,r,i){if(!r||"none"===r){var n=je(e,t,1),a=n&&td(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=td(t,"borderTopColor"))}var s,o,u,h,l,f,d,_,p,c,m,g=new oe(this._pt,t.style,e,0,1,ee),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=td(t,e)||i,t.style[e]=r),xb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)d=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===d.charAt(1)&&(d=ea(h,d)+m),_=parseFloat(d),c=d.substr((_+"").length),v=rt.lastIndex-c.length,c||(c=c||U.units[e]||m,v===i.length&&(i+=c,g.e+=c)),m!==c&&(h=Ed(t,e,f,c)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:_-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?id:hd;return nt.test(i)&&(g.e=0),this._pt=g}function Id(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=$e[r]||r,e[1]=$e[i]||i,e.join(" ")}function Jd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],Fe[r]&&(i=1,r="transformOrigin"===r?Xe:Ve),Bd(a,r);i&&(Bd(a,Ve),u&&(u.svg&&a.removeAttribute("transform"),He(a,1),u.uncache=1))}}function Nd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Od(t){var e=td(t,Ve);return Nd(e)?We:e.substr(7).match(et).map(ca)}function Pd(t,e){var r,i,n,a,s=t._gsap||_(t),o=t.style,u=Od(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?We:u:(u!==We||t.offsetParent||t===de||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,de.appendChild(t)),u=Od(t),n?o.display=n:Bd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):de.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Qd(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Pd(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,_=h.xOffset||0,p=h.yOffset||0,c=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==We&&(o=c*v-m*g)&&(u=w*(-m/o)+x*(c/o)-(c*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=zd(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=_+(y*c+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[Xe]="0px 0px",a&&(Cd(a,h,"xOrigin",f,w),Cd(a,h,"yOrigin",d,x),Cd(a,h,"xOffset",_,h.xOffset),Cd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Td(t,e,r){var i=Ra(e);return ca(parseFloat(e)+parseFloat(Ed(t,"x",r+"px",i)))+i}function $d(t,e,r,i,n){var a,s,u=360,h=o(n),l=parseFloat(n)*(h&&~n.indexOf("rad")?Be:1)-i,f=i+l+"deg";return h&&("short"===(a=n.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===a&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===a&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=s=new oe(t._pt,e,r,i,l,ed),s.e=f,s.u="deg",t._props.push(r),s}function _d(t,e){for(var r in e)t[r]=e[r];return t}function ae(t,e,r){var i,n,a,s,o,u,h,l=_d({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[Ve]=e,i=He(r,1),Bd(r,Ve),r.setAttribute("transform",a)):(a=getComputedStyle(r)[Ve],f[Ve]=e,i=He(r,1),f[Ve]=a),Fe)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ra(a)!==(h=Ra(s))?Ed(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new oe(t._pt,i,n,o,u-o,dd),t._pt.u=h||0,t._props.push(n));_d(i,l)}var le,fe,de,_e,pe,ce,me,ge=zt.Power0,ve=zt.Power1,ye=zt.Power2,Te=zt.Power3,be=zt.Power4,we=zt.Linear,xe=zt.Quad,ke=zt.Cubic,Oe=zt.Quart,Pe=zt.Quint,Me=zt.Strong,Ce=zt.Elastic,Ae=zt.Back,De=zt.SteppedEase,Se=zt.Bounce,ze=zt.Sine,Re=zt.Expo,Ee=zt.Circ,Fe={},Be=180/Math.PI,Ie=Math.PI/180,Le=Math.atan2,Ne=/([A-Z])/g,Ue=/(left|right|width|margin|padding|x)/i,Ye=/[\s,\(]\S/,qe={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ve="transform",Xe=Ve+"Origin",Qe="O,Moz,ms,Ms,Webkit".split(","),je=function _checkPropPrefix(t,e,r){var i=(e||pe).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Qe[n]+t in i););return n<0?null:(3===n?"ms":0<=n?Qe[n]:"")+t},Ke={deg:1,rad:1,turn:1},$e={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ge={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new oe(t._pt,e,r,0,0,Jd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},We=[1,0,0,1,0,0],Ze={},He=function _parseTransform(t,e){var r=t._gsap||new Lt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,_,p,c,m,g,v,y,T,b,w,x,k,O,P,M,C,A,D,S,z,R,E,F=t.style,B=r.scaleX<0,I="deg",L=td(t,Xe)||"0";return i=n=a=u=h=l=f=d=_=0,s=o=1,r.svg=!(!t.getCTM||!Ad(t)),m=Pd(t,r.svg),r.svg&&(P=(!r.uncache||"0px 0px"===L)&&!e&&t.getAttribute("data-svg-origin"),Qd(t,P||L,!!P||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,c=r.yOrigin||0,m!==We&&(T=m[0],b=m[1],w=m[2],x=m[3],i=k=m[4],n=O=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?Le(b,T)*Be:0,(f=w||x?Le(w,x)*Be+u:0)&&(o*=Math.abs(Math.cos(f*Ie))),r.svg&&(i-=p-(p*T+c*w),n-=c-(p*b+c*x))):(E=m[6],z=m[7],A=m[8],D=m[9],S=m[10],R=m[11],i=m[12],n=m[13],a=m[14],h=(g=Le(E,S))*Be,g&&(P=k*(v=Math.cos(-g))+A*(y=Math.sin(-g)),M=O*v+D*y,C=E*v+S*y,A=k*-y+A*v,D=O*-y+D*v,S=E*-y+S*v,R=z*-y+R*v,k=P,O=M,E=C),l=(g=Le(-w,S))*Be,g&&(v=Math.cos(-g),R=x*(y=Math.sin(-g))+R*v,T=P=T*v-A*y,b=M=b*v-D*y,w=C=w*v-S*y),u=(g=Le(b,T))*Be,g&&(P=T*(v=Math.cos(g))+b*(y=Math.sin(g)),M=k*v+O*y,b=b*v-T*y,O=O*v-k*y,T=P,k=M),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ca(Math.sqrt(T*T+b*b+w*w)),o=ca(Math.sqrt(O*O+E*E)),g=Le(k,O),f=2e-4<Math.abs(g)?g*Be:0,_=R?1/(R<0?-R:R):0),r.svg&&(P=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!Nd(td(t,Ve)),P&&t.setAttribute("transform",P))),90<Math.abs(f)&&Math.abs(f)<270&&(B?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ca(s),r.scaleY=ca(o),r.rotation=ca(u)+I,r.rotationX=ca(h)+I,r.rotationY=ca(l)+I,r.skewX=f+I,r.skewY=d+I,r.transformPerspective=_+"px",(r.zOrigin=parseFloat(L.split(" ")[2])||0)&&(F[Xe]=Je(L)),r.xOffset=r.yOffset=0,r.force3D=U.force3D,r.renderTransform=r.svg?ar:me?nr:tr,r.uncache=0,r},Je=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},tr=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,nr(t,e)},er="0deg",rr="0px",ir=") ",nr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,_=r.scaleX,p=r.scaleY,c=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==er||h!==er)){var b,w=parseFloat(h)*Ie,x=Math.sin(w),k=Math.cos(w);w=parseFloat(l)*Ie,b=Math.cos(w),a=Td(g,a,x*b*-v),s=Td(g,s,-Math.sin(w)*-v),o=Td(g,o,k*b*-v+v)}c!==rr&&(y+="perspective("+c+ir),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===rr&&s===rr&&o===rr||(y+=o!==rr||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+ir),u!==er&&(y+="rotate("+u+ir),h!==er&&(y+="rotateY("+h+ir),l!==er&&(y+="rotateX("+l+ir),f===er&&d===er||(y+="skew("+f+", "+d+ir),1===_&&1===p||(y+="scale("+_+", "+p+ir),g.style[Ve]=y||"translate(0, 0)"},ar=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,_=o.skewX,p=o.skewY,c=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),k=parseFloat(f);d=parseFloat(d),_=parseFloat(_),(p=parseFloat(p))&&(_+=p=parseFloat(p),d+=p),d||_?(d*=Ie,_*=Ie,r=Math.cos(d)*c,i=Math.sin(d)*c,n=Math.sin(d-_)*-m,a=Math.cos(d-_)*m,_&&(p*=Ie,s=Math.tan(_-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ca(r),i=ca(i),n=ca(n),a=ca(a)):(r=c,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=Ed(g,"x",l,"px"),k=Ed(g,"y",f,"px")),(v||y||T||b)&&(x=ca(x+v-(v*r+y*n)+T),k=ca(k+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ca(x+u/100*s.width),k=ca(k+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+k+")",g.setAttribute("transform",s),w&&(g.style[Ve]=s)};ba("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Ge[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return Fd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var sr,or,ur,hr={name:"css",register:wd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,u,h,l,f,d,_,p,c,m,g,v,y,T,b=this._props,w=t.style,x=r.vars.startAt;for(d in _e||wd(),e)if("autoRound"!==d&&(s=e[d],!ft[d]||!Ub(d,e,r,i,t,n)))if(l=typeof s,f=Ge[d],"function"===l&&(l=typeof(s=s.call(r,i,t,n))),"string"===l&&~s.indexOf("random(")&&(s=hb(s)),f)f(this,t,d,s,r)&&(T=1);else if("--"===d.substr(0,2))a=(getComputedStyle(t).getPropertyValue(d)+"").trim(),s+="",Ct.lastIndex=0,Ct.test(a)||(_=Ra(a),p=Ra(s)),p?_!==p&&(a=Ed(t,d,a,p)+p):_&&(s+=_),this.add(w,"setProperty",a,s,i,n,0,0,d),b.push(d);else if("undefined"!==l){if(x&&d in x?(a="function"==typeof x[d]?x[d].call(r,i,t,n):x[d],o(a)&&~a.indexOf("random(")&&(a=hb(a)),Ra(a+"")||(a+=U.units[d]||Ra(Fd(t,d))||""),"="===(a+"").charAt(1)&&(a=Fd(t,d))):a=Fd(t,d),h=parseFloat(a),(c="string"===l&&"="===s.charAt(1)&&s.substr(0,2))&&(s=s.substr(2)),u=parseFloat(s),d in qe&&("autoAlpha"===d&&(1===h&&"hidden"===Fd(t,"visibility")&&u&&(h=0),Cd(this,w,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==d&&"transform"!==d&&~(d=qe[d]).indexOf(",")&&(d=d.split(",")[0])),m=d in Fe)if(g||((v=t._gsap).renderTransform&&!e.parseTransform||He(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new oe(this._pt,w,Ve,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===d)this._pt=new oe(this._pt,v,"scaleY",v.scaleY,(c?ea(v.scaleY,c+u):u)-v.scaleY||0),b.push("scaleY",d),d+="X";else{if("transformOrigin"===d){s=Id(s),v.svg?Qd(t,s,0,y,0,this):((p=parseFloat(s.split(" ")[2])||0)!==v.zOrigin&&Cd(this,v,"zOrigin",v.zOrigin,p),Cd(this,w,d,Je(a),Je(s)));continue}if("svgOrigin"===d){Qd(t,s,1,y,0,this);continue}if(d in Ze){$d(this,v,d,h,c?ea(h,c+s):s);continue}if("smoothOrigin"===d){Cd(this,v,"smooth",v.smooth,s);continue}if("force3D"===d){v[d]=s;continue}if("transform"===d){ae(this,s,t);continue}}else d in w||(d=je(d)||d);if(m||(u||0===u)&&(h||0===h)&&!Ye.test(s)&&d in w)u=u||0,(_=(a+"").substr((h+"").length))!==(p=Ra(s)||(d in U.units?U.units[d]:_))&&(h=Ed(t,d,a,p)),this._pt=new oe(this._pt,m?v:w,d,h,(c?ea(h,c+u):u)-h,m||"px"!==p&&"zIndex"!==d||!1===e.autoRound?dd:gd),this._pt.u=p||0,_!==p&&"%"!==p&&(this._pt.b=a,this._pt.r=fd);else if(d in w)Gd.call(this,t,d,a,c?c+s:s);else{if(!(d in t)){N(d,s);continue}this.add(t,d,a||t[d],c?c+s:s,i,n)}b.push(d)}T&&se(this)},get:Fd,aliases:qe,getSetter:function getSetter(t,e,i){var n=qe[e];return n&&n.indexOf(",")<0&&(e=n),e in Fe&&e!==Xe&&(t._gsap.x||Fd(t,"x"))?i&&ce===i?"scale"===e?md:ld:(ce=i||{})&&("scale"===e?nd:od):t.style&&!r(t.style[e])?jd:~e.indexOf("-")?kd:Ht(t,e)},core:{_removeProperty:Bd,_getMatrix:Pd}};he.utils.checkPrefix=je,ur=ba((sr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(or="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){Fe[t]=1}),ba(or,function(t){U.units[t]="deg",Ze[t]=1}),qe[ur[13]]=sr+","+or,ba("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");qe[e[1]]=ur[e[0]]}),ba("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){U.units[t]="px"}),he.registerPlugin(hr);var lr=he.registerPlugin(hr)||he,fr=lr.core.Tween;e.Back=Ae,e.Bounce=Se,e.CSSPlugin=hr,e.Circ=Ee,e.Cubic=ke,e.Elastic=Ce,e.Expo=Re,e.Linear=we,e.Power0=ge,e.Power1=ve,e.Power2=ye,e.Power3=Te,e.Power4=be,e.Quad=xe,e.Quart=Oe,e.Quint=Pe,e.Sine=ze,e.SteppedEase=De,e.Strong=Me,e.TimelineLite=Ut,e.TimelineMax=Ut,e.TweenLite=$t,e.TweenMax=fr,e.default=lr,e.gsap=lr;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});






/*!

 * MotionPathPlugin 3.10.4

 * https://greensock.com

 * 

 * @license Copyright 2022, GreenSock. All rights reserved.

 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.

 * @author: Jack Doyle, jack@greensock.com

 */



!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(t){"use strict";function p(t){return"string"==typeof t}function x(t){return Math.round(1e10*t)/1e10||0}function y(t,e,n,r){var a=t[e],o=1===r?6:subdivideSegment(a,n,r);if(o&&o+n+2<a.length)return t.splice(e,0,a.slice(0,n+o+2)),a.splice(0,n+o),1}function C(t,e){var n=t.length,r=t[n-1]||[],a=r.length;n&&e[0]===r[a-2]&&e[1]===r[a-1]&&(e=r.concat(e.slice(2)),n--),t[n]=e}var M=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,T=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,r=/(^[#\.][a-z]|[a-y][a-z])/i,q=Math.PI/180,s=180/Math.PI,F=Math.sin,U=Math.cos,H=Math.abs,$=Math.sqrt,l=Math.atan2,A=1e8,h=function _isNumber(t){return"number"==typeof t},S={},_={},e=1e5,d=function _wrapProgress(t){return Math.round((t+A)%1*e)/e||(t<0?0:1)},N=function _round(t){return Math.round(t*e)/e||0},m=function _getSampleIndex(t,e,n){var r=t.length,a=~~(n*r);if(t[a]>e){for(;--a&&t[a]>e;);a<0&&(a=0)}else for(;t[++a]<e&&a<r;);return a<r?a:r-1},B=function _copyMetaData(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):t.totalPoints&&(e.totalPoints=t.totalPoints),e};function getRawPath(t){var e,n=(t=p(t)&&r.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=stringToRawPath(t)):t?p(t)?stringToRawPath(t):h(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}function reverseSegment(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var O={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function convertToPath(t,e){var n,r,a,o,i,s,l,h,u,g,f,p,c,d,m,v,x,y,w,P,b,M,R=t.tagName.toLowerCase(),L=.552284749831;return"path"!==R&&t.getBBox?(s=function _createPath(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=[].slice.call(t.attributes),o=a.length;for(e=","+e+",";-1<--o;)n=a[o].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,a[o].nodeValue);return r}(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),M=function _attrToObj(t,e){for(var n=e?e.split(","):[],r={},a=n.length;-1<--a;)r[n[a]]=+t.getAttribute(n[a])||0;return r}(t,O[R]),"rect"===R?(o=M.rx,i=M.ry||o,r=M.x,a=M.y,g=M.width-2*o,f=M.height-2*i,n=o||i?"M"+(v=(d=(c=r+o)+g)+o)+","+(y=a+i)+" V"+(w=y+f)+" C"+[v,P=w+i*L,m=d+o*L,b=w+i,d,b,d-(d-c)/3,b,c+(d-c)/3,b,c,b,p=r+o*(1-L),b,r,P,r,w,r,w-(w-y)/3,r,y+(w-y)/3,r,y,r,x=a+i*(1-L),p,a,c,a,c+(d-c)/3,a,d-(d-c)/3,a,d,a,m,a,v,x,v,y].join(",")+"z":"M"+(r+g)+","+a+" v"+f+" h"+-g+" v"+-f+" h"+g+"z"):"circle"===R||"ellipse"===R?(h="circle"===R?(o=i=M.r)*L:(o=M.rx,(i=M.ry)*L),n="M"+((r=M.cx)+o)+","+(a=M.cy)+" C"+[r+o,a+h,r+(l=o*L),a+i,r,a+i,r-l,a+i,r-o,a+h,r-o,a,r-o,a-h,r-l,a-i,r,a-i,r+l,a-i,r+o,a-h,r+o,a].join(",")+"z"):"line"===R?n="M"+M.x1+","+M.y1+" L"+M.x2+","+M.y2:"polyline"!==R&&"polygon"!==R||(n="M"+(r=(u=(t.getAttribute("points")+"").match(T)||[]).shift())+","+(a=u.shift())+" L"+u.join(","),"polygon"===R&&(n+=","+r+","+a+"z")),s.setAttribute("d",rawPathToString(s._gsRawPath=stringToRawPath(n))),e&&t.parentNode&&(t.parentNode.insertBefore(s,t),t.parentNode.removeChild(t)),s):t}function getRotationAtBezierT(t,e,n){var r,a=t[e],o=t[e+2],i=t[e+4];return a+=(o-a)*n,a+=((o+=(i-o)*n)-a)*n,r=o+(i+(t[e+6]-i)*n-o)*n-a,a=t[e+1],a+=((o=t[e+3])-a)*n,a+=((o+=((i=t[e+5])-o)*n)-a)*n,N(l(o+(i+(t[e+7]-i)*n-o)*n-a,r)*s)}function sliceRawPath(t,e,n){n=function _isUndefined(t){return void 0===t}(n)?1:x(n)||0,e=x(e)||0;var r=Math.max(0,~~(H(n-e)-1e-8)),a=function copyRawPath(t){for(var e=[],n=0;n<t.length;n++)e[n]=B(t[n],t[n].slice(0));return B(t,e)}(t);if(n<e&&(e=1-e,n=1-n,function _reverseRawPath(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||reverseSegment(t[n])}(a),a.totalLength=0),e<0||n<0){var o=Math.abs(~~Math.min(e,n))+1;e+=o,n+=o}a.totalLength||cacheRawPathMeasurements(a);var i,s,l,h,u,g,f,p,c=1<n,d=getProgressData(a,e,S,!0),m=getProgressData(a,n,_),v=m.segment,w=d.segment,P=m.segIndex,b=d.segIndex,M=m.i,R=d.i,L=b===P,T=M===R&&L;if(c||r){for(i=P<b||L&&M<R||T&&m.t<d.t,y(a,b,R,d.t)&&(b++,i||(P++,T?(m.t=(m.t-d.t)/(1-d.t),M=0):L&&(M-=R))),Math.abs(1-(n-e))<1e-5?P=b-1:!m.t&&P?P--:y(a,P,M,m.t)&&i&&b++,1===d.t&&(b=(b+1)%a.length),u=[],f=1+(g=a.length)*r,f+=(g-(p=b)+P)%g,h=0;h<f;h++)C(u,a[p++%g]);a=u}else if(l=1===m.t?6:subdivideSegment(v,M,m.t),e!==n)for(s=subdivideSegment(w,R,T?d.t/m.t:d.t),L&&(l+=s),v.splice(M+l+2),(s||R)&&w.splice(0,R+s),h=a.length;h--;)(h<b||P<h)&&a.splice(h,1);else v.angle=getRotationAtBezierT(v,M+l,0),d=v[M+=l],m=v[M+1],v.length=v.totalLength=0,v.totalPoints=a.totalPoints=8,v.push(d,m,d,m,d,m,d,m);return a.totalLength=0,a}function measureSegment(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var r,a,o,i,s,l,h,u,g,f,p,c,d,m,v,x,y,w=~~t.resolution||12,P=1/w,b=n?e+6*n+1:t.length,M=t[e],R=t[e+1],L=e?e/6*w:0,T=t.samples,S=t.lookup,_=(e?t.minLength:A)||A,C=T[L+n*w-1],N=e?T[L-1]:0;for(T.length=S.length=0,a=e+2;a<b;a+=6){if(o=t[a+4]-M,i=t[a+2]-M,s=t[a]-M,u=t[a+5]-R,g=t[a+3]-R,f=t[a+1]-R,l=h=p=c=0,H(o)<.01&&H(u)<.01&&H(s)+H(f)<.01)8<t.length&&(t.splice(a,6),a-=6,b-=6);else for(r=1;r<=w;r++)l=h-(h=((m=P*r)*m*o+3*(d=1-m)*(m*i+d*s))*m),p=c-(c=(m*m*u+3*d*(m*g+d*f))*m),(x=$(p*p+l*l))<_&&(_=x),N+=x,T[L++]=N;M+=o,R+=u}if(C)for(C-=N;L<T.length;L++)T[L]+=C;if(T.length&&_){if(t.totalLength=y=T[T.length-1]||0,y/(t.minLength=_)<9999)for(x=v=0,r=0;r<y;r+=_)S[x++]=T[v]<r?++v:v}else t.totalLength=T[0]=0;return e?N-T[e/2-1]:N}function cacheRawPathMeasurements(t,e){var n,r,a;for(a=n=r=0;a<t.length;a++)t[a].resolution=~~e||12,r+=t[a].length,n+=measureSegment(t[a]);return t.totalPoints=r,t.totalLength=n,t}function subdivideSegment(t,e,n){if(n<=0||1<=n)return 0;var r=t[e],a=t[e+1],o=t[e+2],i=t[e+3],s=t[e+4],l=t[e+5],h=r+(o-r)*n,u=o+(s-o)*n,g=a+(i-a)*n,f=i+(l-i)*n,p=h+(u-h)*n,c=g+(f-g)*n,d=s+(t[e+6]-s)*n,m=l+(t[e+7]-l)*n;return u+=(d-u)*n,f+=(m-f)*n,t.splice(e+2,4,N(h),N(g),N(p),N(c),N(p+(u-p)*n),N(c+(f-c)*n),N(u),N(f),N(d),N(m)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function getProgressData(t,e,n,r){n=n||{},t.totalLength||cacheRawPathMeasurements(t),(e<0||1<e)&&(e=d(e));var a,o,i,s,l,h,u,g=0,f=t[0];if(e)if(1===e)u=1,h=(f=t[g=t.length-1]).length-8;else{if(1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)g=h;e=(i-(s=l-(f=t[g]).totalLength))/(l-s)||0}a=f.samples,o=f.resolution,i=f.totalLength*e,s=(h=f.lookup.length?f.lookup[~~(i/f.minLength)]||0:m(a,i,e))?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),u=1/o*((i-s)/(l-s)+h%o),h=6*~~(h/o),r&&1===u&&(h+6<f.length?(h+=6,u=0):g+1<t.length&&(h=u=0,f=t[++g]))}else u=h=g=0,f=t[0];return n.t=u,n.i=h,n.path=t,n.segment=f,n.segIndex=g,n}function getPositionOnPath(t,e,n,r){var a,o,i,s,l,h,u,g,f,p=t[0],c=r||{};if((e<0||1<e)&&(e=d(e)),1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)p=t[h];e=(i-(s=l-p.totalLength))/(l-s)||0}return a=p.samples,o=p.resolution,i=p.totalLength*e,s=(h=p.lookup.length?p.lookup[e<1?~~(i/p.minLength):p.lookup.length-1]||0:m(a,i,e))?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),f=1-(u=1/o*((i-s)/(l-s)+h%o)||0),g=p[h=6*~~(h/o)],c.x=N((u*u*(p[h+6]-g)+3*f*(u*(p[h+4]-g)+f*(p[h+2]-g)))*u+g),c.y=N((u*u*(p[h+7]-(g=p[h+1]))+3*f*(u*(p[h+5]-g)+f*(p[h+3]-g)))*u+g),n&&(c.angle=p.totalLength?getRotationAtBezierT(p,h,1<=u?1-1e-9:u||1e-9):p.angle||0),c}function transformRawPath(t,e,n,r,a,o,i){for(var s,l,h,u,g,f=t.length;-1<--f;)for(l=(s=t[f]).length,h=0;h<l;h+=2)u=s[h],g=s[h+1],s[h]=u*e+g*r+o,s[h+1]=u*n+g*a+i;return t._dirty=1,t}function arcToSegment(t,e,n,r,a,o,i,s,l){if(t!==s||e!==l){n=H(n),r=H(r);var h=a%360*q,u=U(h),g=F(h),f=Math.PI,p=2*f,c=(t-s)/2,d=(e-l)/2,m=u*c+g*d,v=-g*c+u*d,x=m*m,y=v*v,w=x/(n*n)+y/(r*r);1<w&&(n=$(w)*n,r=$(w)*r);var P=n*n,b=r*r,M=(P*b-P*y-b*x)/(P*y+b*x);M<0&&(M=0);var R=(o===i?-1:1)*$(M),L=n*v/r*R,T=-r*m/n*R,S=u*L-g*T+(t+s)/2,_=g*L+u*T+(e+l)/2,C=(m-L)/n,N=(v-T)/r,A=(-m-L)/n,B=(-v-T)/r,O=C*C+N*N,E=(N<0?-1:1)*Math.acos(C/$(O)),G=(C*B-N*A<0?-1:1)*Math.acos((C*A+N*B)/$(O*(A*A+B*B)));isNaN(G)&&(G=f),!i&&0<G?G-=p:i&&G<0&&(G+=p),E%=p,G%=p;var I,D=Math.ceil(H(G)/(p/4)),X=[],z=G/D,k=4/3*F(z/2)/(1+U(z/2)),Z=u*n,V=g*n,Y=g*-r,j=u*r;for(I=0;I<D;I++)m=U(a=E+I*z),v=F(a),C=U(a+=z),N=F(a),X.push(m-k*v,v+k*m,C+k*N,N-k*C,C,N);for(I=0;I<X.length;I+=2)m=X[I],v=X[I+1],X[I]=m*Z+v*Y+S,X[I+1]=m*V+v*j+_;return X[I-2]=s,X[I-1]=l,X}}function stringToRawPath(t){function Af(t,e,n,r){u=(n-t)/3,g=(r-e)/3,s.push(t+u,e+g,n-u,r-g,n,r)}var e,n,r,a,o,i,s,l,h,u,g,f,p,c,d,m=(t+"").replace(L,function(t){var e=+t;return e<1e-4&&-1e-4<e?0:e}).match(M)||[],v=[],x=0,y=0,w=m.length,P=0,b="ERROR: malformed path: "+t;if(!t||!isNaN(m[0])||isNaN(m[1]))return console.log(b),v;for(e=0;e<w;e++)if(p=o,isNaN(m[e])?i=(o=m[e].toUpperCase())!==m[e]:e--,r=+m[e+1],a=+m[e+2],i&&(r+=x,a+=y),e||(l=r,h=a),"M"===o)s&&(s.length<8?--v.length:P+=s.length),x=l=r,y=h=a,s=[r,a],v.push(s),e+=2,o="L";else if("C"===o)i||(x=y=0),(s=s||[0,0]).push(r,a,x+1*m[e+3],y+1*m[e+4],x+=1*m[e+5],y+=1*m[e+6]),e+=6;else if("S"===o)u=x,g=y,"C"!==p&&"S"!==p||(u+=x-s[s.length-4],g+=y-s[s.length-3]),i||(x=y=0),s.push(u,g,r,a,x+=1*m[e+3],y+=1*m[e+4]),e+=4;else if("Q"===o)u=x+2/3*(r-x),g=y+2/3*(a-y),i||(x=y=0),x+=1*m[e+3],y+=1*m[e+4],s.push(u,g,x+2/3*(r-x),y+2/3*(a-y),x,y),e+=4;else if("T"===o)u=x-s[s.length-4],g=y-s[s.length-3],s.push(x+u,y+g,r+2/3*(x+1.5*u-r),a+2/3*(y+1.5*g-a),x=r,y=a),e+=2;else if("H"===o)Af(x,y,x=r,y),e+=1;else if("V"===o)Af(x,y,x,y=r+(i?y-x:0)),e+=1;else if("L"===o||"Z"===o)"Z"===o&&(r=l,a=h,s.closed=!0),("L"===o||.5<H(x-r)||.5<H(y-a))&&(Af(x,y,r,a),"L"===o&&(e+=2)),x=r,y=a;else if("A"===o){if(c=m[e+4],d=m[e+5],u=m[e+6],g=m[e+7],n=7,1<c.length&&(c.length<3?(g=u,u=d,n--):(g=d,u=c.substr(2),n-=2),d=c.charAt(1),c=c.charAt(0)),f=arcToSegment(x,y,+m[e+1],+m[e+2],+m[e+3],+c,+d,(i?x:0)+1*u,(i?y:0)+1*g),e+=n,f)for(n=0;n<f.length;n++)s.push(f[n]);x=s[s.length-2],y=s[s.length-1]}else console.log(b);return(e=s.length)<6?(v.pop(),e=0):s[0]===s[e-2]&&s[1]===s[e-1]&&(s.closed=!0),v.totalPoints=P+e,v}function flatPointsToSegment(t,e){void 0===e&&(e=1);for(var n=t[0],r=0,a=[n,r],o=2;o<t.length;o+=2)a.push(n,r,t[o],r=(t[o]-n)*e/2,n=t[o],-r);return a}function pointsToSegment(t,e){H(t[0]-t[2])<1e-4&&H(t[1]-t[3])<1e-4&&(t=t.slice(2));var n,r,a,o,i,s,l,h,u,g,f,p,c,d,m=t.length-2,v=+t[0],x=+t[1],y=+t[2],w=+t[3],P=[v,x,v,x],b=y-v,M=w-x,R=Math.abs(t[m]-v)<.001&&Math.abs(t[m+1]-x)<.001;for(R&&(t.push(y,w),y=v,w=x,v=t[m-2],x=t[m-1],t.unshift(v,x),m+=4),e=e||0===e?+e:1,a=2;a<m;a+=2)n=v,r=x,v=y,x=w,y=+t[a+2],w=+t[a+3],v===y&&x===w||(o=b,i=M,b=y-v,M=w-x,h=((s=$(o*o+i*i))+(l=$(b*b+M*M)))*e*.25/$(Math.pow(b/l+o/s,2)+Math.pow(M/l+i/s,2)),f=v-((u=v-(v-n)*(s?h/s:0))+(((g=v+(y-v)*(l?h/l:0))-u)*(3*s/(s+l)+.5)/4||0)),d=x-((p=x-(x-r)*(s?h/s:0))+(((c=x+(w-x)*(l?h/l:0))-p)*(3*s/(s+l)+.5)/4||0)),v===n&&x===r||P.push(N(u+f),N(p+d),N(v),N(x),N(g+f),N(c+d)));return v!==y||x!==w||P.length<4?P.push(N(y),N(w),N(y),N(w)):P.length-=2,2===P.length?P.push(v,x,v,x,v,x):R&&(P.splice(0,6),P.length=P.length-6),P}function rawPathToString(t){h(t[0])&&(t=[t]);var e,n,r,a,o="",i=t.length;for(n=0;n<i;n++){for(a=t[n],o+="M"+N(a[0])+","+N(a[1])+" C",e=a.length,r=2;r<e;r++)o+=N(a[r++])+","+N(a[r++])+" "+N(a[r++])+","+N(a[r++])+" "+N(a[r++])+","+N(a[r])+" ";a.closed&&(o+="z")}return o}function R(t){var e=t.ownerDocument||t;!(D in t.style)&&"msTransform"in t.style&&(z=(D="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(v=window,E=new Y,e){w=(c=e).documentElement,P=e.body,(G=c.createElementNS("http://www.w3.org/2000/svg","g")).style.transform="none";var n=e.createElement("div"),r=e.createElement("div");P.appendChild(n),n.appendChild(r),n.style.position="static",n.style[D]="translate3d(0,0,1px)",I=r.offsetParent!==n,P.removeChild(n)}return e}function X(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)}function Z(t,e){if(t.parentNode&&(c||R(t))){var n=X(t),r=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a=n?e?"rect":"g":"div",o=2!==e?0:100,i=3===e?100:0,s="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",l=c.createElementNS?c.createElementNS(r.replace(/^https/,"http"),a):c.createElement(a);return e&&(n?(b=b||Z(t),l.setAttribute("width",.01),l.setAttribute("height",.01),l.setAttribute("transform","translate("+o+","+i+")"),b.appendChild(l)):(f||((f=Z(t)).style.cssText=s),l.style.cssText=s+"width:0.1px;height:0.1px;top:"+i+"px;left:"+o+"px",f.appendChild(l))),l}throw"Need document and parent."}function aa(t,e){var n,r,a,o,i,s,l=X(t),h=t===l,u=l?k:V,g=t.parentNode;if(t===v)return t;if(u.length||u.push(Z(t,1),Z(t,2),Z(t,3)),n=l?b:f,l)h?(o=-(a=function _getCTM(t){var e,n=t.getCTM();return n||(e=t.style[D],t.style[D]="none",t.appendChild(G),n=G.getCTM(),t.removeChild(G),e?t.style[D]=e:t.style.removeProperty(D.replace(/([A-Z])/g,"-$1").toLowerCase())),n||E.clone()}(t)).e/a.a,i=-a.f/a.d,r=E):t.getBBox?(a=t.getBBox(),o=(r=(r=t.transform?t.transform.baseVal:{}).numberOfItems?1<r.numberOfItems?function _consolidate(t){for(var e=new Y,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(r):r.getItem(0).matrix:E).a*a.x+r.c*a.y,i=r.b*a.x+r.d*a.y):(r=new Y,o=i=0),e&&"g"===t.tagName.toLowerCase()&&(o=i=0),(h?l:g).appendChild(n),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+o)+","+(r.f+i)+")");else{if(o=i=0,I)for(r=t.offsetParent,a=t;(a=a&&a.parentNode)&&a!==r&&a.parentNode;)4<(v.getComputedStyle(a)[D]+"").length&&(o=a.offsetLeft,i=a.offsetTop,a=0);if("absolute"!==(s=v.getComputedStyle(t)).position&&"fixed"!==s.position)for(r=t.offsetParent;g&&g!==r;)o+=g.scrollLeft||0,i+=g.scrollTop||0,g=g.parentNode;(a=n.style).top=t.offsetTop-i+"px",a.left=t.offsetLeft-o+"px",a[D]=s[D],a[z]=s[z],a.position="fixed"===s.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n}function ba(t,e,n,r,a,o,i){return t.a=e,t.b=n,t.c=r,t.d=a,t.e=o,t.f=i,t}var c,v,w,P,f,b,E,G,I,n,D="transform",z=D+"Origin",k=[],V=[],Y=((n=Matrix2D.prototype).inverse=function inverse(){var t=this.a,e=this.b,n=this.c,r=this.d,a=this.e,o=this.f,i=t*r-e*n||1e-10;return ba(this,r/i,-e/i,-n/i,t/i,(n*o-r*a)/i,-(t*o-e*a)/i)},n.multiply=function multiply(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f,s=t.a,l=t.c,h=t.b,u=t.d,g=t.e,f=t.f;return ba(this,s*e+h*r,s*n+h*a,l*e+u*r,l*n+u*a,o+g*e+f*r,i+g*n+f*a)},n.clone=function clone(){return new Matrix2D(this.a,this.b,this.c,this.d,this.e,this.f)},n.equals=function equals(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f;return e===t.a&&n===t.b&&r===t.c&&a===t.d&&o===t.e&&i===t.f},n.apply=function apply(t,e){void 0===e&&(e={});var n=t.x,r=t.y,a=this.a,o=this.b,i=this.c,s=this.d,l=this.e,h=this.f;return e.x=n*a+r*i+l||0,e.y=n*o+r*s+h||0,e},Matrix2D);function Matrix2D(t,e,n,r,a,o){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===a&&(a=0),void 0===o&&(o=0),ba(this,t,e,n,r,a,o)}function getGlobalMatrix(t,e,n,r){if(!t||!t.parentNode||(c||R(t)).documentElement===t)return new Y;var a=function _forceNonZeroScale(t){for(var e,n;t&&t!==P;)(n=t._gsap)&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e}(t),o=X(t)?k:V,i=aa(t,n),s=o[0].getBoundingClientRect(),l=o[1].getBoundingClientRect(),h=o[2].getBoundingClientRect(),u=i.parentNode,g=!r&&function _isFixed(t){return"fixed"===v.getComputedStyle(t).position||((t=t.parentNode)&&1===t.nodeType?_isFixed(t):void 0)}(t),f=new Y((l.left-s.left)/100,(l.top-s.top)/100,(h.left-s.left)/100,(h.top-s.top)/100,s.left+(g?0:function _getDocScrollLeft(){return v.pageXOffset||c.scrollLeft||w.scrollLeft||P.scrollLeft||0}()),s.top+(g?0:function _getDocScrollTop(){return v.pageYOffset||c.scrollTop||w.scrollTop||P.scrollTop||0}()));if(u.removeChild(i),a)for(s=a.length;s--;)(l=a[s]).scaleX=l.scaleY=0,l.renderTransform(1,l);return e?f.inverse():f}function la(t,e,n,r){for(var a=e.length,o=2===r?0:r,i=0;i<a;i++)t[o]=parseFloat(e[i][n]),2===r&&(t[o+1]=0),o+=2;return t}function ma(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0}function na(t){var e,n=t[0],r=t[1];for(e=2;e<t.length;e+=2)n=t[e]+=n,r=t[e+1]+=r}function oa(t,e,n,r,a,o,i,s,l){return e="cubic"===i.type?[e]:(!1!==i.fromCurrent&&e.unshift(ma(n,r,s),a?ma(n,a,l):0),i.relative&&na(e),[(a?pointsToSegment:flatPointsToSegment)(e,i.curviness)]),e=o(et(e,n,i)),nt(t,n,r,e,"x",s),a&&nt(t,n,a,e,"y",l),cacheRawPathMeasurements(e,i.resolution||(0===i.curviness?20:12))}function pa(t){return t}function ra(t,e,n){var r,a=getGlobalMatrix(t),o=0,i=0;return"svg"===(t.tagName+"").toLowerCase()?(r=t.viewBox.baseVal).width||(r={width:+t.getAttribute("width"),height:+t.getAttribute("height")}):r=e&&t.getBBox&&t.getBBox(),e&&"auto"!==e&&(o=e.push?e[0]*(r?r.width:t.offsetWidth||0):e.x,i=e.push?e[1]*(r?r.height:t.offsetHeight||0):e.y),n.apply(o||i?a.apply({x:o,y:i}):{x:a.e,y:a.f})}function sa(t,e,n,r){var a,o=getGlobalMatrix(t.parentNode,!0,!0),i=o.clone().multiply(getGlobalMatrix(e)),s=ra(t,n,o),l=ra(e,r,o),h=l.x,u=l.y;return i.e=i.f=0,"auto"===r&&e.getTotalLength&&"path"===e.tagName.toLowerCase()&&(a=e.getAttribute("d").match(tt)||[],h+=(a=i.apply({x:+a[0],y:+a[1]})).x,u+=a.y),(a||e.getBBox&&t.getBBox&&e.ownerSVGElement===t.ownerSVGElement)&&(h-=(a=i.apply(e.getBBox())).x,u-=a.y),i.e=h-s.x,i.f=u-s.y,i}var j,g,Q,W,J="x,translateX,left,marginLeft,xPercent".split(","),K="y,translateY,top,marginTop,yPercent".split(","),o=Math.PI/180,tt=/[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,et=function _align(t,e,n){var r,a,o,i=n.align,s=n.matrix,l=n.offsetX,h=n.offsetY,u=n.alignOrigin,g=t[0][0],f=t[0][1],p=ma(e,"x"),c=ma(e,"y");return t&&t.length?(i&&("self"===i||(r=W(i)[0]||e)===e?transformRawPath(t,1,0,0,1,p-g,c-f):(u&&!1!==u[2]?j.set(e,{transformOrigin:100*u[0]+"% "+100*u[1]+"%"}):u=[ma(e,"xPercent")/-100,ma(e,"yPercent")/-100],o=(a=sa(e,r,u,"auto")).apply({x:g,y:f}),transformRawPath(t,a.a,a.b,a.c,a.d,p+a.e-(o.x-a.e),c+a.f-(o.y-a.f)))),s?transformRawPath(t,s.a,s.b,s.c,s.d,s.e,s.f):(l||h)&&transformRawPath(t,1,0,0,1,l||0,h||0),t):getRawPath("M0,0L0,0")},nt=function _addDimensionalPropTween(t,e,n,r,a,o){var i=e._gsap,s=i.harness,l=s&&s.aliases&&s.aliases[n],h=l&&l.indexOf(",")<0?l:n,u=t._pt=new g(t._pt,e,h,0,0,pa,0,i.set(e,h,t));u.u=Q(i.get(e,h,o))||0,u.path=r,u.pp=a,t._props.push(h)},a={version:"3.10.4",name:"motionPath",register:function register(t,e,n){Q=(j=t).utils.getUnit,W=j.utils.toArray,g=n},init:function init(t,e){if(!j)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof e&&!e.style&&e.path||(e={path:e});var n,r,a=[],o=e.path,i=e.autoRotate,s=e.unitX,l=e.unitY,h=e.x,u=e.y,g=o[0],f=function _sliceModifier(e,n){return function(t){return e||1!==n?sliceRawPath(t,e,n):t}}(e.start,"end"in e?e.end:1);if(this.rawPaths=a,this.target=t,(this.rotate=i||0===i)&&(this.rOffset=parseFloat(i)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=Q(t._gsap.get(t,this.rProp))||0),!Array.isArray(o)||"closed"in o||"number"==typeof g)cacheRawPathMeasurements(n=f(et(getRawPath(e.path),t,e)),e.resolution),a.push(n),nt(this,t,e.x||"x",n,"x",e.unitX||"px"),nt(this,t,e.y||"y",n,"y",e.unitY||"px");else{for(r in g)!h&&~J.indexOf(r)?h=r:!u&&~K.indexOf(r)&&(u=r);for(r in h&&u?a.push(oa(this,la(la([],o,h,0),o,u,1),t,h,u,f,e,s||Q(o[0][h]),l||Q(o[0][u]))):h=u=0,g)r!==h&&r!==u&&a.push(oa(this,la([],o,r,2),t,r,0,f,e,Q(o[0][r])))}},render:function render(t,e){var n=e.rawPaths,r=n.length,a=e._pt;for(1<t?t=1:t<0&&(t=0);r--;)getPositionOnPath(n[r],t,!r&&e.rotate,n[r]);for(;a;)a.set(a.t,a.p,a.path[a.pp]+a.u,a.d,t),a=a._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?o:1)+e.rOffset+e.ru,e,t)},getLength:function getLength(t){return cacheRawPathMeasurements(getRawPath(t)).totalLength},sliceRawPath:sliceRawPath,getRawPath:getRawPath,pointsToSegment:pointsToSegment,stringToRawPath:stringToRawPath,rawPathToString:rawPathToString,transformRawPath:transformRawPath,getGlobalMatrix:getGlobalMatrix,getPositionOnPath:getPositionOnPath,cacheRawPathMeasurements:cacheRawPathMeasurements,convertToPath:function convertToPath$1(t,e){return W(t).map(function(t){return convertToPath(t,!1!==e)})},convertCoordinates:function convertCoordinates(t,e,n){var r=getGlobalMatrix(e,!0,!0).multiply(getGlobalMatrix(t));return n?r.apply(n):r},getAlignMatrix:sa,getRelativePosition:function getRelativePosition(t,e,n,r){var a=sa(t,e,n,r);return{x:a.e,y:a.f}},arrayToRawPath:function arrayToRawPath(t,e){var n=la(la([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&na(n),["cubic"===e.type?n:pointsToSegment(n,e.curviness)]}};!function _getGSAP(){return j||"undefined"!=typeof window&&(j=window.gsap)&&j.registerPlugin&&j}()||j.registerPlugin(a),t.MotionPathPlugin=a,t.default=a;if (typeof(window)==="undefined"||window!==t){Object.defineProperty(t,"__esModule",{value:!0})} else {delete t.default}});






/*!

 * ScrollToPlugin 3.10.4

 * https://greensock.com

 * 

 * @license Copyright 2022, GreenSock. All rights reserved.

 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.

 * @author: Jack Doyle, jack@greensock.com

 */



!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function k(){return"undefined"!=typeof window}function l(){return u||k()&&(u=window.gsap)&&u.registerPlugin&&u}function m(e){return"string"==typeof e}function n(e){return"function"==typeof e}function o(e,t){var o="x"===t?"Width":"Height",n="scroll"+o,r="client"+o;return e===T||e===i||e===c?Math.max(i[n],c[n])-(T["inner"+o]||i[r]||c[r]):e[n]-e["offset"+o]}function p(e,t){var o="scroll"+("x"===t?"Left":"Top");return e===T&&(null!=e.pageXOffset?o="page"+t.toUpperCase()+"Offset":e=null!=i[o]?i:c),function(){return e[o]}}function r(e,t){if(!(e=f(e)[0])||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var o=e.getBoundingClientRect(),n=!t||t===T||t===c,r=n?{top:i.clientTop-(T.pageYOffset||i.scrollTop||c.scrollTop||0),left:i.clientLeft-(T.pageXOffset||i.scrollLeft||c.scrollLeft||0)}:t.getBoundingClientRect(),l={x:o.left-r.left,y:o.top-r.top};return!n&&t&&(l.x+=p(t,"x")(),l.y+=p(t,"y")()),l}function s(e,t,n,l,i){return isNaN(e)||"object"==typeof e?m(e)&&"="===e.charAt(1)?parseFloat(e.substr(2))*("-"===e.charAt(0)?-1:1)+l-i:"max"===e?o(t,n)-i:Math.min(o(t,n),r(e,t)[n]-i):parseFloat(e)-i}function t(){u=l(),k()&&u&&document.body&&(T=window,c=document.body,i=document.documentElement,f=u.utils.toArray,u.config({autoKillThreshold:7}),v=u.config(),a=1)}var u,a,T,i,c,f,v,y={version:"3.10.4",name:"scrollTo",rawVars:1,register:function register(e){u=e,t()},init:function init(e,o,r,l,i){a||t();var c=this,f=u.getProperty(e,"scrollSnapType");c.isWin=e===T,c.target=e,c.tween=r,o=function _clean(e,t,o,r){if(n(e)&&(e=e(t,o,r)),"object"!=typeof e)return m(e)&&"max"!==e&&"="!==e.charAt(1)?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var l,i={};for(l in e)i[l]="onAutoKill"!==l&&n(e[l])?e[l](t,o,r):e[l];return i}(o,l,e,i),c.vars=o,c.autoKill=!!o.autoKill,c.getX=p(e,"x"),c.getY=p(e,"y"),c.x=c.xPrev=c.getX(),c.y=c.yPrev=c.getY(),f&&"none"!==f&&(c.snap=1,c.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),null!=o.x?(c.add(c,"x",c.x,s(o.x,e,"x",c.x,o.offsetX||0),l,i),c._props.push("scrollTo_x")):c.skipX=1,null!=o.y?(c.add(c,"y",c.y,s(o.y,e,"y",c.y,o.offsetY||0),l,i),c._props.push("scrollTo_y")):c.skipY=1},render:function render(e,t){for(var n,r,l,i,s,p=t._pt,c=t.target,f=t.tween,u=t.autoKill,a=t.xPrev,y=t.yPrev,d=t.isWin,x=t.snap,g=t.snapInline;p;)p.r(e,p.d),p=p._next;n=d||!t.skipX?t.getX():a,l=(r=d||!t.skipY?t.getY():y)-y,i=n-a,s=v.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),u&&(!t.skipX&&(s<i||i<-s)&&n<o(c,"x")&&(t.skipX=1),!t.skipY&&(s<l||l<-s)&&r<o(c,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(f.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(f,t.vars.onAutoKillParams||[]))),d?T.scrollTo(t.skipX?n:t.x,t.skipY?r:t.y):(t.skipY||(c.scrollTop=t.y),t.skipX||(c.scrollLeft=t.x)),!x||1!==e&&0!==e||(r=c.scrollTop,n=c.scrollLeft,g?c.style.scrollSnapType=g:c.style.removeProperty("scroll-snap-type"),c.scrollTop=r+1,c.scrollLeft=n+1,c.scrollTop=r,c.scrollLeft=n),t.xPrev=t.x,t.yPrev=t.y},kill:function kill(e){var t="scrollTo"===e;!t&&"scrollTo_x"!==e||(this.skipX=1),!t&&"scrollTo_y"!==e||(this.skipY=1)}};y.max=o,y.getOffset=r,y.buildGetter=p,l()&&u.registerPlugin(y),e.ScrollToPlugin=y,e.default=y;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});






/*!

 * ScrollTrigger 3.10.4

 * https://greensock.com

 * 

 * @license Copyright 2022, GreenSock. All rights reserved.

 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.

 * @author: Jack Doyle, jack@greensock.com

 */



!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function _defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(){return we||"undefined"!=typeof window&&(we=window.gsap)&&we.registerPlugin&&we}function y(e,t){return~Le.indexOf(e)&&Le[Le.indexOf(e)+1][t]}function z(e){return!!~t.indexOf(e)}function A(e,t,r,n,i){return e.addEventListener(t,r,{passive:!n,capture:!!i})}function B(e,t,r,n){return e.removeEventListener(t,r,!!n)}function E(){return De&&De.isPressed||T.cache++}function F(r,n){function Uc(e){if(e||0===e){i&&(Me.history.scrollRestoration="manual");var t=De&&De.isPressed;e=Uc.v=Math.round(e)||(De&&De.iOS?1:0),r(e),Uc.cacheID=T.cache,t&&o("ss",e)}else(n||T.cache!==Uc.cacheID||o("ref"))&&(Uc.cacheID=T.cache,Uc.v=r());return Uc.v+Uc.offset}return Uc.offset=0,r&&Uc}function I(e){return we.utils.toArray(e)[0]||("string"==typeof e&&!1!==we.config().nullTargetWarn?console.warn("Element not found:",e):null)}function J(t,e){var r=e.s,n=e.sc,i=T.indexOf(t),o=n===Ne.sc?1:2;return~i||(i=T.push(t)-1),T[i+o]||(T[i+o]=F(y(t,r),!0)||(z(t)?n:F(function(e){return arguments.length?t[r]=e:t[r]})))}function K(e,t,i){function od(e,t){var r=He();t||n<r-s?(a=o,o=e,l=s,s=r):i?o+=e:o=a+(e-a)/(r-l)*(s-l)}var o=e,a=e,s=He(),l=s,n=t||50,c=Math.max(500,3*n);return{update:od,reset:function reset(){a=o=i?0:o,l=s=0},getVelocity:function getVelocity(e){var t=l,r=a,n=He();return!e&&0!==e||e===o||od(e),s===l||c<n-l?0:(o+(i?r:-r))/((i?n:s)-t)*1e3}}}function L(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e}function M(e){var t=Math.max.apply(Math,e),r=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(r)?t:r}function N(){(Be=we.core.globals().ScrollTrigger)&&Be.core&&function _integrate(){var e=Be.core,r=e.bridge||{},t=e._scrollers,n=e._proxies;t.push.apply(t,T),n.push.apply(n,Le),T=t,Le=n,o=function _bridge(e,t){return r[e](t)}}()}function O(e){return(we=e||q())&&"undefined"!=typeof document&&document.body&&(Me=window,Ce=(Ae=document).documentElement,Oe=Ae.body,t=[Me,Ae,Ce,Oe],we.utils.clamp,Ie="onpointerenter"in Oe?"pointer":"mouse",Ee=k.isTouch=Me.matchMedia&&Me.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Me||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints?2:0,ze=k.eventTypes=("ontouchstart"in Ce?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ce?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return i=0},500),N(),ke=1),ke}var we,ke,Me,Ae,Ce,Oe,Ee,Ie,Be,t,De,ze,i=1,Fe=[],T=[],Le=[],He=Date.now,o=function _bridge(e,t){return t},r="scrollLeft",n="scrollTop",Re={s:r,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:F(function(e){return arguments.length?Me.scrollTo(e,Ne.sc()):Me.pageXOffset||Ae[r]||Ce[r]||Oe[r]||0})},Ne={s:n,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Re,sc:F(function(e){return arguments.length?Me.scrollTo(Re.sc(),e):Me.pageYOffset||Ae[n]||Ce[n]||Oe[n]||0})};Re.op=Ne,T.cache=0;var k=(Observer.prototype.init=function init(e){ke||O(we)||console.warn("Please gsap.registerPlugin(Observer)"),Be||N();var i=e.tolerance,a=e.dragMinimum,t=e.type,n=e.target,r=e.lineHeight,o=e.debounce,s=e.preventDefault,l=e.onStop,c=e.onStopDelay,u=e.ignore,f=e.wheelSpeed,d=e.event,p=e.onDragStart,g=e.onDragEnd,h=e.onDrag,v=e.onPress,b=e.onRelease,m=e.onRight,y=e.onLeft,x=e.onUp,w=e.onDown,S=e.onChangeX,_=e.onChangeY,T=e.onChange,k=e.onToggleX,C=e.onToggleY,P=e.onHover,D=e.onHoverEnd,Y=e.onMove,X=e.ignoreCheck,F=e.isNormalizer,H=e.onGestureStart,R=e.onGestureEnd,U=e.onWheel,V=e.onEnable,W=e.onDisable,j=e.onClick,Q=e.scrollSpeed,q=e.capture,G=e.allowClicks,Z=e.lockAxis,$=e.onLockAxis;function Pe(){return ye=He()}function Qe(e,t){return(se.event=e)&&u&&~u.indexOf(e.target)||t&&ge&&"touch"!==e.pointerType||X&&X(e,t)}function Se(){var e=se.deltaX=M(be),t=se.deltaY=M(me),r=Math.abs(e)>=i,n=Math.abs(t)>=i;T&&(r||n)&&T(se,e,t,be,me),r&&(m&&0<se.deltaX&&m(se),y&&se.deltaX<0&&y(se),S&&S(se),k&&se.deltaX<0!=le<0&&k(se),le=se.deltaX,be[0]=be[1]=be[2]=0),n&&(w&&0<se.deltaY&&w(se),x&&se.deltaY<0&&x(se),_&&_(se),C&&se.deltaY<0!=ce<0&&C(se),ce=se.deltaY,me[0]=me[1]=me[2]=0),(ne||re)&&(Y&&Y(se),$&&oe&&$(se),re&&(h(se),re=!1),ne=oe=!1),ie&&(U(se),ie=!1),ee=0}function Te(e,t,r){be[r]+=e,me[r]+=t,se._vx.update(e),se._vy.update(t),o?ee=ee||requestAnimationFrame(Se):Se()}function Ue(e,t){"y"!==ae&&(be[2]+=e,se._vx.update(e,!0)),"x"!==ae&&(me[2]+=t,se._vy.update(t,!0)),Z&&!ae&&(se.axis=ae=Math.abs(e)>Math.abs(t)?"x":"y",oe=!0),o?ee=ee||requestAnimationFrame(Se):Se()}function Ve(e){if(!Qe(e,1)){var t=(e=L(e,s)).clientX,r=e.clientY,n=t-se.x,i=r-se.y,o=se.isDragging;se.x=t,se.y=r,(o||Math.abs(se.startX-t)>=a||Math.abs(se.startY-r)>=a)&&(h&&(re=!0),o||(se.isDragging=!0),Ue(n,i),o||p&&p(se))}}function Xe(t){if(!Qe(t,1)){B(F?n:ve,ze[1],Ve,!0);var e=se.isDragging&&(3<Math.abs(se.x-se.startX)||3<Math.abs(se.y-se.startY)),r=L(t);e||(se._vx.reset(),se._vy.reset(),s&&G&&we.delayedCall(.08,function(){if(300<He()-ye&&!t.defaultPrevented)if(t.target.click)t.target.click();else if(ve.createEvent){var e=ve.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,Me,1,r.screenX,r.screenY,r.clientX,r.clientY,!1,!1,!1,!1,0,null),t.target.dispatchEvent(e)}})),se.isDragging=se.isGesturing=se.isPressed=!1,l&&!F&&te.restart(!0),g&&e&&g(se),b&&b(se,e)}}function Ye(e){return e.touches&&1<e.touches.length&&(se.isGesturing=!0)&&H(e,se.isDragging)}function Ze(){return(se.isGesturing=!1)||R(se)}function $e(e){if(!Qe(e)){var t=ue(),r=fe();Te((t-de)*Q,(r-pe)*Q,1),de=t,pe=r,l&&te.restart(!0)}}function _e(e){if(!Qe(e)){e=L(e,s),U&&(ie=!0);var t=(1===e.deltaMode?r:2===e.deltaMode?Me.innerHeight:1)*f;Te(e.deltaX*t,e.deltaY*t,0),l&&!F&&te.restart(!0)}}function af(e){if(!Qe(e)){var t=e.clientX,r=e.clientY,n=t-se.x,i=r-se.y;se.x=t,se.y=r,ne=!0,(n||i)&&Ue(n,i)}}function bf(e){se.event=e,P(se)}function cf(e){se.event=e,D(se)}function df(e){return Qe(e)||L(e,s)&&j(se)}this.target=n=I(n)||Ce,this.vars=e,u=u&&we.utils.toArray(u),i=i||0,a=a||0,f=f||1,Q=Q||1,t=t||"wheel,touch,pointer",o=!1!==o,r=r||parseFloat(Me.getComputedStyle(Oe).lineHeight)||22;var ee,te,re,ne,ie,oe,ae,se=this,le=0,ce=0,ue=J(n,Re),fe=J(n,Ne),de=ue(),pe=fe(),ge=~t.indexOf("touch")&&!~t.indexOf("pointer")&&"pointerdown"===ze[0],he=z(n),ve=n.ownerDocument||Ae,be=[0,0,0],me=[0,0,0],ye=0,xe=se.onPress=function(e){Qe(e,1)||(se.axis=ae=null,te.pause(),se.isPressed=!0,e=L(e),le=ce=0,se.startX=se.x=e.clientX,se.startY=se.y=e.clientY,se._vx.reset(),se._vy.reset(),A(F?n:ve,ze[1],Ve,s,!0),se.deltaX=se.deltaY=0,v&&v(se))};te=se._dc=we.delayedCall(c||.25,function onStopFunc(){se._vx.reset(),se._vy.reset(),te.pause(),l&&l(se)}).pause(),se.deltaX=se.deltaY=0,se._vx=K(0,50,!0),se._vy=K(0,50,!0),se.scrollX=ue,se.scrollY=fe,se.isDragging=se.isGesturing=se.isPressed=!1,se.enable=function(e){return se.isEnabled||(A(he?ve:n,"scroll",E),0<=t.indexOf("scroll")&&A(he?ve:n,"scroll",$e,s,q),0<=t.indexOf("wheel")&&A(n,"wheel",_e,s,q),(0<=t.indexOf("touch")&&Ee||0<=t.indexOf("pointer"))&&(A(n,ze[0],xe,s,q),A(ve,ze[2],Xe),A(ve,ze[3],Xe),G&&A(n,"click",Pe,!1,!0),j&&A(n,"click",df),H&&A(ve,"gesturestart",Ye),R&&A(ve,"gestureend",Ze),P&&A(n,Ie+"enter",bf),D&&A(n,Ie+"leave",cf),Y&&A(n,Ie+"move",af)),se.isEnabled=!0,e&&e.type&&xe(e),V&&V(se)),se},se.disable=function(){se.isEnabled&&(Fe.filter(function(e){return e!==se&&z(e.target)}).length||B(he?ve:n,"scroll",E),se.isPressed&&(se._vx.reset(),se._vy.reset(),B(F?n:ve,ze[1],Ve,!0)),B(he?ve:n,"scroll",$e,q),B(n,"wheel",_e,q),B(n,ze[0],xe,q),B(ve,ze[2],Xe),B(ve,ze[3],Xe),B(n,"click",Pe,!0),B(n,"click",df),B(ve,"gesturestart",Ye),B(ve,"gestureend",Ze),B(n,Ie+"enter",bf),B(n,Ie+"leave",cf),B(n,Ie+"move",af),se.isEnabled=se.isPressed=se.isDragging=!1,W&&W(se))},se.kill=function(){se.disable();var e=Fe.indexOf(se);0<=e&&Fe.splice(e,1),De===se&&(De=0)},Fe.push(se),F&&z(n)&&(De=se),se.enable(d)},function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(Observer,[{key:"velocityX",get:function get(){return this._vx.getVelocity()}},{key:"velocityY",get:function get(){return this._vy.getVelocity()}}]),Observer);function Observer(e){this.init(e)}k.version="3.10.4",k.create=function(e){return new k(e)},k.register=O,k.getAll=function(){return Fe.slice()},k.getById=function(t){return Fe.filter(function(e){return e.vars.id===t})[0]},q()&&we.registerPlugin(k);function va(){return nt=1}function wa(){return nt=0}function xa(e){return e}function ya(e){return Math.round(1e5*e)/1e5||0}function za(){return"undefined"!=typeof window}function Aa(){return We||za()&&(We=window.gsap)&&We.registerPlugin&&We}function Ba(e){return!!~s.indexOf(e)}function Ca(e){return y(e,"getBoundingClientRect")||(Ba(e)?function(){return Bt.width=je.innerWidth,Bt.height=je.innerHeight,Bt}:function(){return Mt(e)})}function Fa(e,t){var r=t.s,n=t.d2,i=t.d,o=t.a;return(r="scroll"+n)&&(o=y(e,r))?o()-Ca(e)()[i]:Ba(e)?(qe[r]||Ge[r])-(je["inner"+n]||qe["client"+n]||Ge["client"+n]):e[r]-e["offset"+n]}function Ga(e,t){for(var r=0;r<p.length;r+=3)t&&!~t.indexOf(p[r+1])||e(p[r],p[r+1],p[r+2])}function Ha(e){return"string"==typeof e}function Ia(e){return"function"==typeof e}function Ja(e){return"number"==typeof e}function Ka(e){return"object"==typeof e}function La(e){return Ia(e)&&e()}function Ma(r,n){return function(){var e=La(r),t=La(n);return function(){La(e),La(t)}}}function Na(e,t,r){return e&&e.progress(t?0:1)&&r&&e.pause()}function Oa(e,t){if(e.enabled){var r=t(e);r&&r.totalTime&&(e.callbackAnimation=r)}}function db(e){return je.getComputedStyle(e)}function fb(e,t){for(var r in t)r in e||(e[r]=t[r]);return e}function hb(e,t){var r=t.d2;return e["offset"+r]||e["client"+r]||0}function ib(e){var t,r=[],n=e.labels,i=e.duration();for(t in n)r.push(n[t]/i);return r}function kb(i){var o=We.utils.snap(i),a=Array.isArray(i)&&i.slice(0).sort(function(e,t){return e-t});return a?function(e,t,r){var n;if(void 0===r&&(r=.001),!t)return o(e);if(0<t){for(e-=r,n=0;n<a.length;n++)if(a[n]>=e)return a[n];return a[n-1]}for(n=a.length,e+=r;n--;)if(a[n]<=e)return a[n];return a[0]}:function(e,t,r){void 0===r&&(r=.001);var n=o(e);return!t||Math.abs(n-e)<r||n-e<0==t<0?n:o(t<0?e-i:e+i)}}function mb(t,r,e,n){return e.split(",").forEach(function(e){return t(r,e,n)})}function nb(e,t,r,n,i){return e.addEventListener(t,r,{passive:!n,capture:!!i})}function ob(e,t,r,n){return e.removeEventListener(t,r,!!n)}function pb(e,t,r){return r&&r.wheelHandler&&e(t,"wheel",r)}function tb(e,t){if(Ha(e)){var r=e.indexOf("="),n=~r?(e.charAt(r-1)+1)*parseFloat(e.substr(r+1)):0;~r&&(e.indexOf("%")>r&&(n*=t/100),e=e.substr(0,r-1)),e=n+(e in Y?Y[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e}function ub(e,t,r,n,i,o,a,s){var l=i.startColor,c=i.endColor,u=i.fontSize,f=i.indent,d=i.fontWeight,p=Je.createElement("div"),g=Ba(r)||"fixed"===y(r,"pinType"),h=-1!==e.indexOf("scroller"),v=g?Ge:r,b=-1!==e.indexOf("start"),m=b?l:c,x="border-color:"+m+";font-size:"+u+";color:"+m+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((h||s)&&g?"fixed;":"absolute;"),!h&&!s&&g||(x+=(n===Ne?_:P)+":"+(o+parseFloat(f))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=b,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=x,p.innerText=t||0===t?e+"-"+t:e,v.children[0]?v.insertBefore(p,v.children[0]):v.appendChild(p),p._offset=p["offset"+n.op.d2],X(p,0,n,b),p}function zb(){return 34<dt()-pt&&ee()}function Ab(){h&&h.isPressed&&!(h.startX>Ge.clientWidth)||(T.cache++,x=x||requestAnimationFrame(ee),pt||V("scrollStart"),pt=dt())}function Bb(){m=je.innerWidth,b=je.innerHeight}function Cb(){T.cache++,rt||g||Je.fullscreenElement||Je.webkitFullscreenElement||v&&m===je.innerWidth&&!(Math.abs(je.innerHeight-b)>.25*je.innerHeight)||l.restart(!0)}function Ib(e){var t,r=We.ticker.frame,n=[],i=0;if(w!==r||ft){for(Q();i<U.length;i+=4)(t=je.matchMedia(U[i]).matches)!==U[i+3]&&((U[i+3]=t)?n.push(i):Q(1,U[i])||Ia(U[i+2])&&U[i+2]());for(j(),i=0;i<n.length;i++)t=n[i],lt=U[t],U[t+2]=U[t+1](e);lt=0,a&&Z(0,1),w=r,V("matchMedia")}}function Jb(){return ob(oe,"scrollEnd",Jb)||Z(!0)}function Ob(){return T.cache++&&T.forEach(function(e){return"function"==typeof e&&(e.rec=0)})}function Zb(e,t,r,n){if(e.parentNode!==t){for(var i,o=te.length,a=t.style,s=e.style;o--;)a[i=te[o]]=r[i];a.position="absolute"===r.position?"absolute":"relative","inline"===r.display&&(a.display="inline-block"),s[P]=s[_]=a.flexBasis="auto",a.overflow="visible",a.boxSizing="border-box",a[vt]=hb(e,Re)+kt,a[bt]=hb(e,Ne)+kt,a[St]=s[_t]=s.top=s.left="0",It(n),s[vt]=s.maxWidth=r[vt],s[bt]=s.maxHeight=r[bt],s[St]=r[St],e.parentNode.insertBefore(t,e),t.appendChild(e)}}function ac(e){for(var t=re.length,r=e.style,n=[],i=0;i<t;i++)n.push(re[i],r[re[i]]);return n.t=e,n}function dc(e,t,r,n,i,o,a,s,l,c,u,f,d){Ia(e)&&(e=e(s)),Ha(e)&&"max"===e.substr(0,3)&&(e=f+("="===e.charAt(4)?tb("0"+e.substr(3),r):0));var p,g,h,v=d?d.time():0;if(d&&d.seek(0),Ja(e))a&&X(a,r,n,!0);else{Ia(t)&&(t=t(s));var b,m,y,x,w=e.split(" ");h=I(t)||Ge,(b=Mt(h)||{})&&(b.left||b.top)||"none"!==db(h).display||(x=h.style.display,h.style.display="block",b=Mt(h),x?h.style.display=x:h.style.removeProperty("display")),m=tb(w[0],b[n.d]),y=tb(w[1]||"0",r),e=b[n.p]-l[n.p]-c+m+i-y,a&&X(a,y,n,r-y<20||a._isStart&&20<y),r-=r-y}if(o){var S=e+r,_=o._isStart;p="scroll"+n.d2,X(o,S,n,_&&20<S||!_&&(u?Math.max(Ge[p],qe[p]):o.parentNode[p])<=S+1),u&&(l=Mt(a),u&&(o.style[n.op.p]=l[n.op.p]-n.op.m-o._offset+kt))}return d&&h&&(p=Mt(h),d.seek(f),g=Mt(h),d._caScrollDist=p[n.p]-g[n.p],e=e/d._caScrollDist*f),d&&d.seek(v),d?e:Math.round(e)}function fc(e,t,r,n){if(e.parentNode!==t){var i,o,a=e.style;if(t===Ge){for(i in e._stOrig=a.cssText,o=db(e))+i||ie.test(i)||!o[i]||"string"!=typeof a[i]||"0"===i||(a[i]=o[i]);a.top=r,a.left=n}else a.cssText=e._stOrig;We.core.getCache(e).uncache=1,t.appendChild(e)}}function gc(l,e){function Qj(e,t,r,n,i){var o=Qj.tween,a=t.onComplete,s={};return r=r||f(),i=n&&i||0,n=n||e-r,o&&o.kill(),c=Math.round(r),t[d]=e,(t.modifiers=s)[d]=function(e){return(e=ya(f()))!==c&&e!==u&&2<Math.abs(e-c)&&2<Math.abs(e-u)?(o.kill(),Qj.tween=0):e=r+n*o.ratio+i*o.ratio*o.ratio,u=c,c=ya(e)},t.onComplete=function(){Qj.tween=0,a&&a.call(o)},o=Qj.tween=We.to(l,t)}var c,u,f=J(l,e),d="_scroll"+e.p2;return(l[d]=f).wheelHandler=function(){return Qj.tween&&Qj.tween.kill()&&(Qj.tween=0)},nb(l,"wheel",f.wheelHandler),Qj}var We,a,je,Je,qe,Ge,s,l,Ke,et,tt,c,rt,nt,u,it,f,d,p,ot,at,g,h,v,b,m,C,st,x,lt,w,ct,ut,ft=1,dt=Date.now,S=dt(),pt=0,gt=0,ht=Math.abs,_="right",P="bottom",vt="width",bt="height",mt="Right",yt="Left",xt="Top",wt="Bottom",St="padding",_t="margin",Tt="Width",D="Height",kt="px",Mt=function _getBounds(e,t){var r=t&&"matrix(1, 0, 0, 1, 0, 0)"!==db(e)[u]&&We.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),n=e.getBoundingClientRect();return r&&r.progress(0).kill(),n},At={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ct={toggleActions:"play",anticipatePin:0},Y={top:0,left:0,center:.5,bottom:1,right:1},X=function _positionMarker(e,t,r,n){var i={display:"block"},o=r[n?"os2":"p2"],a=r[n?"p2":"os2"];e._isFlipped=n,i[r.a+"Percent"]=n?-100:0,i[r.a]=n?"1px":0,i["border"+o+Tt]=1,i["border"+a+Tt]=0,i[r.p]=t+"px",We.set(e,i)},Ot=[],Pt={},H={},R=[],U=[],V=function _dispatch(e){return H[e]&&H[e].map(function(e){return e()})||R},W=[],j=function _revertRecorded(e){for(var t=0;t<W.length;t+=5)e&&W[t+4]!==e||(W[t].style.cssText=W[t+1],W[t].getBBox&&W[t].setAttribute("transform",W[t+2]||""),W[t+3].uncache=1)},Q=function _revertAll(e,t){var r;for(it=0;it<Ot.length;it++)r=Ot[it],t&&r.media!==t||(e?r.kill(1):r.revert());t&&j(t),t||V("revert")},G=0,Z=function _refreshAll(e,t){if(!pt||e){ct=!0;var r=V("refreshInit");ot&&oe.sort(),t||Q(),Ot.slice(0).forEach(function(e){return e.refresh()}),Ot.forEach(function(e){return"max"===e.vars.end&&e.setPositions(e.start,Fa(e.scroller,e._dir))}),r.forEach(function(e){return e&&e.render&&e.render(-1)}),Ob(),l.pause(),G++,ct=!1,V("refresh")}else nb(oe,"scrollEnd",Jb)},$=0,Et=1,ee=function _updateAll(){if(!ct){oe.isUpdating=!0,ut&&ut.update(0);var e=Ot.length,t=dt(),r=50<=t-S,n=e&&Ot[0].scroll();if(Et=n<$?-1:1,$=n,r&&(pt&&!nt&&200<t-pt&&(pt=0,V("scrollEnd")),tt=S,S=t),Et<0){for(it=e;0<it--;)Ot[it]&&Ot[it].update(0,r);Et=1}else for(it=0;it<e;it++)Ot[it]&&Ot[it].update(0,r);oe.isUpdating=!1}x=0},te=["left","top",P,_,_t+wt,_t+mt,_t+xt,_t+yt,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],re=te.concat([vt,bt,"boxSizing","max"+Tt,"max"+D,"position",_t,St,St+xt,St+mt,St+wt,St+yt]),ne=/([A-Z])/g,It=function _setState(e){if(e){var t,r,n=e.t.style,i=e.length,o=0;for((e.t._gsap||We.core.getCache(e.t)).uncache=1;o<i;o+=2)r=e[o+1],t=e[o],r?n[t]=r:n[t]&&n.removeProperty(t.replace(ne,"-$1").toLowerCase())}},Bt={left:0,top:0},ie=/(webkit|moz|length|cssText|inset)/i,oe=(ScrollTrigger.prototype.init=function init(_,T){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),gt){var k,n,p,M,A,C,O,P,E,B,D,e,z,Y,X,F,L,t,H,b,R,N,m,U,x,w,r,S,V,W,i,g,j,Q,q,G,K,o,Z=(_=fb(Ha(_)||Ja(_)||_.nodeType?{trigger:_}:_,Ct)).onUpdate,$=_.toggleClass,a=_.id,ee=_.onToggle,te=_.onRefresh,re=_.scrub,ne=_.trigger,ie=_.pin,oe=_.pinSpacing,ae=_.invalidateOnRefresh,se=_.anticipatePin,s=_.onScrubComplete,h=_.onSnapComplete,le=_.once,ce=_.snap,ue=_.pinReparent,l=_.pinSpacer,fe=_.containerAnimation,de=_.fastScrollEnd,pe=_.preventOverlaps,ge=_.horizontal||_.containerAnimation&&!1!==_.horizontal?Re:Ne,he=!re&&0!==re,ve=I(_.scroller||je),c=We.core.getCache(ve),be=Ba(ve),me="fixed"===("pinType"in _?_.pinType:y(ve,"pinType")||be&&"fixed"),ye=[_.onEnter,_.onLeave,_.onEnterBack,_.onLeaveBack],xe=he&&_.toggleActions.split(" "),u="markers"in _?_.markers:Ct.markers,we=be?0:parseFloat(db(ve)["border"+ge.p2+Tt])||0,Se=this,_e=_.onRefreshInit&&function(){return _.onRefreshInit(Se)},Te=function _getSizeFunc(e,t,r){var n=r.d,i=r.d2,o=r.a;return(o=y(e,"getBoundingClientRect"))?function(){return o()[n]}:function(){return(t?je["inner"+i]:e["client"+i])||0}}(ve,be,ge),ke=function _getOffsetsFunc(e,t){return!t||~Le.indexOf(e)?Ca(e):function(){return Bt}}(ve,be),Me=0,Ae=0,Ce=J(ve,ge);if(Se.media=lt,Se._dir=ge,se*=45,Se.scroller=ve,Se.scroll=fe?fe.time.bind(fe):Ce,M=Ce(),Se.vars=_,T=T||_.animation,"refreshPriority"in _&&(ot=1,-9999===_.refreshPriority&&(ut=Se)),c.tweenScroll=c.tweenScroll||{top:gc(ve,Ne),left:gc(ve,Re)},Se.tweenTo=k=c.tweenScroll[ge.p],Se.scrubDuration=function(e){(i=Ja(e)&&e)?W?W.duration(e):W=We.to(T,{ease:"expo",totalProgress:"+=0.001",duration:i,paused:!0,onComplete:function onComplete(){return s&&s(Se)}}):(W&&W.progress(1).kill(),W=0)},T&&(T.vars.lazy=!1,T._initted||!1!==T.vars.immediateRender&&!1!==_.immediateRender&&T.render(0,!0,!0),Se.animation=T.pause(),(T.scrollTrigger=Se).scrubDuration(re),S=0,a=a||T.vars.id),Ot.push(Se),ce&&(Ka(ce)&&!ce.push||(ce={snapTo:ce}),"scrollBehavior"in Ge.style&&We.set(be?[Ge,qe]:ve,{scrollBehavior:"auto"}),p=Ia(ce.snapTo)?ce.snapTo:"labels"===ce.snapTo?function _getClosestLabel(t){return function(e){return We.utils.snap(ib(t),e)}}(T):"labelsDirectional"===ce.snapTo?function _getLabelAtDirection(r){return function(e,t){return kb(ib(r))(e,t.direction)}}(T):!1!==ce.directional?function(e,t){return kb(ce.snapTo)(e,dt()-Ae<500?0:t.direction)}:We.utils.snap(ce.snapTo),g=ce.duration||{min:.1,max:2},g=Ka(g)?et(g.min,g.max):et(g,g),j=We.delayedCall(ce.delay||i/2||.1,function(){var e=Ce(),t=dt()-Ae<500,r=k.tween;if(!(t||Math.abs(Se.getVelocity())<10)||r||nt||Me===e)Se.isActive&&Me!==e&&j.restart(!0);else{var n=(e-C)/z,i=T&&!he?T.totalProgress():n,o=t?0:(i-V)/(dt()-tt)*1e3||0,a=We.utils.clamp(-n,1-n,ht(o/2)*o/.185),s=n+(!1===ce.inertia?0:a),l=et(0,1,p(s,Se)),c=Math.round(C+l*z),u=ce.onStart,f=ce.onInterrupt,d=ce.onComplete;if(e<=O&&C<=e&&c!==e){if(r&&!r._initted&&r.data<=ht(c-e))return;!1===ce.inertia&&(a=l-n),k(c,{duration:g(ht(.185*Math.max(ht(s-i),ht(l-i))/o/.05||0)),ease:ce.ease||"power3",data:ht(c-e),onInterrupt:function onInterrupt(){return j.restart(!0)&&f&&f(Se)},onComplete:function onComplete(){Se.update(),Me=Ce(),S=V=T&&!he?T.totalProgress():Se.progress,h&&h(Se),d&&d(Se)}},e,a*z,c-e-a*z),u&&u(Se,k.tween)}}}).pause()),a&&(Pt[a]=Se),o=(o=(ne=Se.trigger=I(ne||ie))&&ne._gsap&&ne._gsap.stRevert)&&o(Se),ie=!0===ie?ne:I(ie),Ha($)&&($={targets:ne,className:$}),ie&&(!1===oe||oe===_t||(oe=!(!oe&&"flex"===db(ie.parentNode).display)&&St),Se.pin=ie,!1!==_.force3D&&We.set(ie,{force3D:!0}),(n=We.core.getCache(ie)).spacer?Y=n.pinState:(l&&((l=I(l))&&!l.nodeType&&(l=l.current||l.nativeElement),n.spacerIsNative=!!l,l&&(n.spacerState=ac(l))),n.spacer=L=l||Je.createElement("div"),L.classList.add("pin-spacer"),a&&L.classList.add("pin-spacer-"+a),n.pinState=Y=ac(ie)),Se.spacer=L=n.spacer,r=db(ie),m=r[oe+ge.os2],H=We.getProperty(ie),b=We.quickSetter(ie,ge.a,kt),Zb(ie,L,r),F=ac(ie)),u){e=Ka(u)?fb(u,At):At,B=ub("scroller-start",a,ve,ge,e,0),D=ub("scroller-end",a,ve,ge,e,0,B),t=B["offset"+ge.op.d2];var f=I(y(ve,"content")||ve);P=this.markerStart=ub("start",a,f,ge,e,t,0,fe),E=this.markerEnd=ub("end",a,f,ge,e,t,0,fe),fe&&(K=We.quickSetter([P,E],ge.a,kt)),me||Le.length&&!0===y(ve,"fixedMarkers")||(function _makePositionable(e){var t=db(e).position;e.style.position="absolute"===t||"fixed"===t?t:"relative"}(be?Ge:ve),We.set([B,D],{force3D:!0}),x=We.quickSetter(B,ge.a,kt),w=We.quickSetter(D,ge.a,kt))}if(fe){var d=fe.vars.onUpdate,v=fe.vars.onUpdateParams;fe.eventCallback("onUpdate",function(){Se.update(0,0,1),d&&d.apply(v||[])})}Se.previous=function(){return Ot[Ot.indexOf(Se)-1]},Se.next=function(){return Ot[Ot.indexOf(Se)+1]},Se.revert=function(e){var t=!1!==e||!Se.enabled,r=rt;t!==Se.isReverted&&(t&&(!Se.scroll.rec&&rt&&ct&&(Se.scroll.rec=Ce()),q=Math.max(Ce(),Se.scroll.rec||0),Q=Se.progress,G=T&&T.progress()),P&&[P,E,B,D].forEach(function(e){return e.style.display=t?"none":"block"}),t&&(rt=1),Se.update(t),rt=r,ie&&(t?function _swapPinOut(e,t,r){It(r);var n=e._gsap;if(n.spacerIsNative)It(n.spacerState);else if(e.parentNode===t){var i=t.parentNode;i&&(i.insertBefore(e,t),i.removeChild(t))}}(ie,L,Y):ue&&Se.isActive||Zb(ie,L,db(ie),U)),Se.isReverted=t)},Se.refresh=function(e,t){if(!rt&&Se.enabled||t)if(ie&&e&&pt)nb(ScrollTrigger,"scrollEnd",Jb);else{!ct&&_e&&_e(Se),rt=1,Ae=dt(),k.tween&&(k.tween.kill(),k.tween=0),W&&W.pause(),ae&&T&&T.time(-.01,!0).invalidate(),Se.isReverted||Se.revert();for(var r,n,i,o,a,s,l,c,u,f,d=Te(),p=ke(),g=fe?fe.duration():Fa(ve,ge),h=0,v=0,b=_.end,m=_.endTrigger||ne,y=_.start||(0!==_.start&&ne?ie?"0 0":"0 100%":0),x=Se.pinnedContainer=_.pinnedContainer&&I(_.pinnedContainer),w=ne&&Math.max(0,Ot.indexOf(Se))||0,S=w;S--;)(s=Ot[S]).end||s.refresh(0,1)||(rt=1),!(l=s.pin)||l!==ne&&l!==ie||s.isReverted||((f=f||[]).unshift(s),s.revert()),s!==Ot[S]&&(w--,S--);for(Ia(y)&&(y=y(Se)),C=dc(y,ne,d,ge,Ce(),P,B,Se,p,we,me,g,fe)||(ie?-.001:0),Ia(b)&&(b=b(Se)),Ha(b)&&!b.indexOf("+=")&&(~b.indexOf(" ")?b=(Ha(y)?y.split(" ")[0]:"")+b:(h=tb(b.substr(2),d),b=Ha(y)?y:C+h,m=ne)),O=Math.max(C,dc(b||(m?"100% 0":g),m,d,ge,Ce()+h,E,D,Se,p,we,me,g,fe))||-.001,z=O-C||(C-=.01)&&.001,h=0,S=w;S--;)(l=(s=Ot[S]).pin)&&s.start-s._pinPush<C&&!fe&&0<s.end&&(r=s.end-s.start,l!==ne&&l!==x||Ja(y)||(h+=r*(1-s.progress)),l===ie&&(v+=r));if(C+=h,O+=h,Se._pinPush=v,P&&h&&((r={})[ge.a]="+="+h,x&&(r[ge.p]="-="+Ce()),We.set([P,E],r)),ie)r=db(ie),o=ge===Ne,i=Ce(),R=parseFloat(H(ge.a))+v,!g&&1<O&&((be?Ge:ve).style["overflow-"+ge.a]="scroll"),Zb(ie,L,r),F=ac(ie),n=Mt(ie,!0),c=me&&J(ve,o?Re:Ne)(),oe&&((U=[oe+ge.os2,z+v+kt]).t=L,(S=oe===St?hb(ie,ge)+z+v:0)&&U.push(ge.d,S+kt),It(U),me&&Ce(q)),me&&((a={top:n.top+(o?i-C:c)+kt,left:n.left+(o?c:i-C)+kt,boxSizing:"border-box",position:"fixed"})[vt]=a.maxWidth=Math.ceil(n.width)+kt,a[bt]=a.maxHeight=Math.ceil(n.height)+kt,a[_t]=a[_t+xt]=a[_t+mt]=a[_t+wt]=a[_t+yt]="0",a[St]=r[St],a[St+xt]=r[St+xt],a[St+mt]=r[St+mt],a[St+wt]=r[St+wt],a[St+yt]=r[St+yt],X=function _copyState(e,t,r){for(var n,i=[],o=e.length,a=r?8:0;a<o;a+=2)n=e[a],i.push(n,n in t?t[n]:e[a+1]);return i.t=e.t,i}(Y,a,ue)),T?(u=T._initted,at(1),T.render(T.duration(),!0,!0),N=H(ge.a)-R+z+v,z!==N&&me&&X.splice(X.length-2,2),T.render(0,!0,!0),u||T.invalidate(),at(0)):N=z;else if(ne&&Ce()&&!fe)for(n=ne.parentNode;n&&n!==Ge;)n._pinOffset&&(C-=n._pinOffset,O-=n._pinOffset),n=n.parentNode;f&&f.forEach(function(e){return e.revert(!1)}),Se.start=C,Se.end=O,M=A=Ce(),fe||(M<q&&Ce(q),Se.scroll.rec=0),Se.revert(!1),j&&(Me=-1,Se.isActive&&Ce(C+z*Q),j.restart(!0)),rt=0,T&&he&&(T._initted||G)&&T.progress()!==G&&T.progress(G,!0).render(T.time(),!0,!0),Q===Se.progress&&!fe||(T&&!he&&T.totalProgress(Q,!0),Se.progress=Q,Se.update(0,0,1)),ie&&oe&&(L._pinOffset=Math.round(Se.progress*N)),te&&te(Se)}},Se.getVelocity=function(){return(Ce()-A)/(dt()-tt)*1e3||0},Se.endAnimation=function(){Na(Se.callbackAnimation),T&&(W?W.progress(1):T.paused()?he||Na(T,Se.direction<0,1):Na(T,T.reversed()))},Se.labelToScroll=function(e){return T&&T.labels&&(C||Se.refresh()||C)+T.labels[e]/T.duration()*z||0},Se.getTrailing=function(t){var e=Ot.indexOf(Se),r=0<Se.direction?Ot.slice(0,e).reverse():Ot.slice(e+1);return(Ha(t)?r.filter(function(e){return e.vars.preventOverlaps===t}):r).filter(function(e){return 0<Se.direction?e.end<=C:e.start>=O})},Se.update=function(e,t,r){if(!fe||r||e){var n,i,o,a,s,l,c,u=Se.scroll(),f=e?0:(u-C)/z,d=f<0?0:1<f?1:f||0,p=Se.progress;if(t&&(A=M,M=fe?Ce():u,ce&&(V=S,S=T&&!he?T.totalProgress():d)),se&&!d&&ie&&!rt&&!ft&&pt&&C<u+(u-A)/(dt()-tt)*se&&(d=1e-4),d!==p&&Se.enabled){if(a=(s=(n=Se.isActive=!!d&&d<1)!=(!!p&&p<1))||!!d!=!!p,Se.direction=p<d?1:-1,Se.progress=d,a&&!rt&&(i=d&&!p?0:1===d?1:1===p?2:3,he&&(o=!s&&"none"!==xe[i+1]&&xe[i+1]||xe[i],c=T&&("complete"===o||"reset"===o||o in T))),pe&&(s||c)&&(c||re||!T)&&(Ia(pe)?pe(Se):Se.getTrailing(pe).forEach(function(e){return e.endAnimation()})),he||(!W||rt||ft?T&&T.totalProgress(d,!!rt):((fe||ut&&ut!==Se)&&W.render(W._dp._time-W._start),W.resetTo?W.resetTo("totalProgress",d,T._tTime/T._tDur):(W.vars.totalProgress=d,W.invalidate().restart()))),ie)if(e&&oe&&(L.style[oe+ge.os2]=m),me){if(a){if(l=!e&&p<d&&u<O+1&&u+1>=Fa(ve,ge),ue)if(e||!n&&!l)fc(ie,L);else{var g=Mt(ie,!0),h=u-C;fc(ie,Ge,g.top+(ge===Ne?h:0)+kt,g.left+(ge===Ne?0:h)+kt)}It(n||l?X:F),N!==z&&d<1&&n||b(R+(1!==d||l?0:N))}}else b(ya(R+N*d));!ce||k.tween||rt||ft||j.restart(!0),$&&(s||le&&d&&(d<1||!st))&&Ke($.targets).forEach(function(e){return e.classList[n||le?"add":"remove"]($.className)}),!Z||he||e||Z(Se),a&&!rt?(he&&(c&&("complete"===o?T.pause().totalProgress(1):"reset"===o?T.restart(!0).pause():"restart"===o?T.restart(!0):T[o]()),Z&&Z(Se)),!s&&st||(ee&&s&&Oa(Se,ee),ye[i]&&Oa(Se,ye[i]),le&&(1===d?Se.kill(!1,1):ye[i]=0),s||ye[i=1===d?1:3]&&Oa(Se,ye[i])),de&&!n&&Math.abs(Se.getVelocity())>(Ja(de)?de:2500)&&(Na(Se.callbackAnimation),W?W.progress(1):Na(T,!d,1))):he&&Z&&!rt&&Z(Se)}if(w){var v=fe?u/fe.duration()*(fe._caScrollDist||0):u;x(v+(B._isFlipped?1:0)),w(v)}K&&K(-u/fe.duration()*(fe._caScrollDist||0))}},Se.enable=function(e,t){Se.enabled||(Se.enabled=!0,nb(ve,"resize",Cb),nb(be?Je:ve,"scroll",Ab),_e&&nb(ScrollTrigger,"refreshInit",_e),!1!==e&&(Se.progress=Q=0,M=A=Me=Ce()),!1!==t&&Se.refresh())},Se.getTween=function(e){return e&&k?k.tween:W},Se.setPositions=function(e,t){ie&&(R+=e-C,N+=t-e-z),Se.start=C=e,Se.end=O=t,z=t-e,Se.update()},Se.disable=function(e,t){if(Se.enabled&&(!1!==e&&Se.revert(),Se.enabled=Se.isActive=!1,t||W&&W.pause(),q=0,n&&(n.uncache=1),_e&&ob(ScrollTrigger,"refreshInit",_e),j&&(j.pause(),k.tween&&k.tween.kill()&&(k.tween=0)),!be)){for(var r=Ot.length;r--;)if(Ot[r].scroller===ve&&Ot[r]!==Se)return;ob(ve,"resize",Cb),ob(ve,"scroll",Ab)}},Se.kill=function(e,t){Se.disable(e,t),W&&!t&&W.kill(),a&&delete Pt[a];var r=Ot.indexOf(Se);0<=r&&Ot.splice(r,1),r===it&&0<Et&&it--,r=0,Ot.forEach(function(e){return e.scroller===Se.scroller&&(r=1)}),r||(Se.scroll.rec=0),T&&(T.scrollTrigger=null,e&&T.render(-1),t||T.kill()),P&&[P,E,B,D].forEach(function(e){return e.parentNode&&e.parentNode.removeChild(e)}),ut===Se&&(ut=0),ie&&(n&&(n.uncache=1),r=0,Ot.forEach(function(e){return e.pin===ie&&r++}),r||(n.spacer=0)),_.onKill&&_.onKill(Se)},Se.enable(!1,!1),o&&o(Se),T&&T.add&&!z?We.delayedCall(.01,function(){return C||O||Se.refresh()})&&(z=.01)&&(C=O=0):Se.refresh()}else this.update=this.refresh=this.kill=xa},ScrollTrigger.register=function register(e){return a||(We=e||Aa(),za()&&window.document&&ScrollTrigger.enable(),a=gt),a},ScrollTrigger.defaults=function defaults(e){if(e)for(var t in e)Ct[t]=e[t];return Ct},ScrollTrigger.disable=function disable(t,r){gt=0,Ot.forEach(function(e){return e[r?"kill":"disable"](t)}),ob(je,"wheel",Ab),ob(Je,"scroll",Ab),clearInterval(c),ob(Je,"touchcancel",xa),ob(Ge,"touchstart",xa),mb(ob,Je,"pointerdown,touchstart,mousedown",va),mb(ob,Je,"pointerup,touchend,mouseup",wa),l.kill(),Ga(ob);for(var e=0;e<T.length;e+=3)pb(ob,T[e],T[e+1]),pb(ob,T[e],T[e+2])},ScrollTrigger.enable=function enable(){if(je=window,Je=document,qe=Je.documentElement,Ge=Je.body,We&&(Ke=We.utils.toArray,et=We.utils.clamp,at=We.core.suppressOverwrites||xa,We.core.globals("ScrollTrigger",ScrollTrigger),Ge)){gt=1,k.register(We),ScrollTrigger.isTouch=k.isTouch,C=k.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),nb(je,"wheel",Ab),s=[je,Je,qe,Ge],ScrollTrigger.matchMedia({"(orientation: portrait)":function orientationPortrait(){return Bb(),Bb}}),nb(Je,"scroll",Ab);var e,t,r=Ge.style,n=r.borderTopStyle;for(r.borderTopStyle="solid",e=Mt(Ge),Ne.m=Math.round(e.top+Ne.sc())||0,Re.m=Math.round(e.left+Re.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),c=setInterval(zb,250),We.delayedCall(.5,function(){return ft=0}),nb(Je,"touchcancel",xa),nb(Ge,"touchstart",xa),mb(nb,Je,"pointerdown,touchstart,mousedown",va),mb(nb,Je,"pointerup,touchend,mouseup",wa),u=We.utils.checkPrefix("transform"),re.push(u),a=dt(),l=We.delayedCall(.2,Z).pause(),p=[Je,"visibilitychange",function(){var e=je.innerWidth,t=je.innerHeight;Je.hidden?(f=e,d=t):f===e&&d===t||Cb()},Je,"DOMContentLoaded",Z,je,"load",Z,je,"resize",Cb],Ga(nb),Ot.forEach(function(e){return e.enable(0,1)}),t=0;t<T.length;t+=3)pb(ob,T[t],T[t+1]),pb(ob,T[t],T[t+2])}},ScrollTrigger.config=function config(e){"limitCallbacks"in e&&(st=!!e.limitCallbacks);var t=e.syncInterval;t&&clearInterval(c)||(c=t)&&setInterval(zb,t),"ignoreMobileResize"in e&&(v=1===ScrollTrigger.isTouch&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(Ga(ob)||Ga(nb,e.autoRefreshEvents||"none"),g=-1===(e.autoRefreshEvents+"").indexOf("resize"))},ScrollTrigger.scrollerProxy=function scrollerProxy(e,t){var r=I(e),n=T.indexOf(r),i=Ba(r);~n&&T.splice(n,i?6:2),t&&(i?Le.unshift(je,t,Ge,t,qe,t):Le.unshift(r,t))},ScrollTrigger.matchMedia=function matchMedia(e){var t,r,n,i,o;for(r in e)n=U.indexOf(r),i=e[r],"all"===(lt=r)?i():(t=je.matchMedia(r))&&(t.matches&&(o=i()),~n?(U[n+1]=Ma(U[n+1],i),U[n+2]=Ma(U[n+2],o)):(n=U.length,U.push(r,i,o),t.addListener?t.addListener(Ib):t.addEventListener("change",Ib)),U[n+3]=t.matches),lt=0;return U},ScrollTrigger.clearMatchMedia=function clearMatchMedia(e){e||(U.length=0),0<=(e=U.indexOf(e))&&U.splice(e,4)},ScrollTrigger.isInViewport=function isInViewport(e,t,r){var n=(Ha(e)?I(e):e).getBoundingClientRect(),i=n[r?vt:bt]*t||0;return r?0<n.right-i&&n.left+i<je.innerWidth:0<n.bottom-i&&n.top+i<je.innerHeight},ScrollTrigger.positionInViewport=function positionInViewport(e,t,r){Ha(e)&&(e=I(e));var n=e.getBoundingClientRect(),i=n[r?vt:bt],o=null==t?i/2:t in Y?Y[t]*i:~t.indexOf("%")?parseFloat(t)*i/100:parseFloat(t)||0;return r?(n.left+o)/je.innerWidth:(n.top+o)/je.innerHeight},ScrollTrigger);function ScrollTrigger(e,t){a||ScrollTrigger.register(We)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(e,t)}oe.version="3.10.4",oe.saveStyles=function(e){return e?Ke(e).forEach(function(e){if(e&&e.style){var t=W.indexOf(e);0<=t&&W.splice(t,5),W.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),We.core.getCache(e),lt)}}):W},oe.revert=function(e,t){return Q(!e,t)},oe.create=function(e,t){return new oe(e,t)},oe.refresh=function(e){return e?Cb():(a||oe.register())&&Z(!0)},oe.update=ee,oe.clearScrollMemory=Ob,oe.maxScroll=function(e,t){return Fa(e,t?Re:Ne)},oe.getScrollFunc=function(e,t){return J(I(e),t?Re:Ne)},oe.getById=function(e){return Pt[e]},oe.getAll=function(){return Ot.filter(function(e){return"ScrollSmoother"!==e.vars.id})},oe.isScrolling=function(){return!!pt},oe.snapDirectional=kb,oe.addEventListener=function(e,t){var r=H[e]||(H[e]=[]);~r.indexOf(t)||r.push(t)},oe.removeEventListener=function(e,t){var r=H[e],n=r&&r.indexOf(t);0<=n&&r.splice(n,1)},oe.batch=function(e,t){function to(e,t){var r=[],n=[],i=We.delayedCall(o,function(){t(r,n),r=[],n=[]}).pause();return function(e){r.length||i.restart(!0),r.push(e.trigger),n.push(e),a<=r.length&&i.progress(1)}}var r,n=[],i={},o=t.interval||.016,a=t.batchMax||1e9;for(r in t)i[r]="on"===r.substr(0,2)&&Ia(t[r])&&"onRefreshInit"!==r?to(0,t[r]):t[r];return Ia(a)&&(a=a(),nb(oe,"refresh",function(){return a=t.batchMax()})),Ke(e).forEach(function(e){var t={};for(r in i)t[r]=i[r];t.trigger=e,n.push(oe.create(t))}),n};function ic(e,t,r,n){return n<t?e(n):t<0&&e(0),n<r?(n-t)/(r-t):r<0?t/(t-r):1}function jc(e,t){!0===t?e.style.removeProperty("touch-action"):e.style.touchAction=!0===t?"auto":t?"pan-"+t+(k.isTouch?" pinch-zoom":""):"none",e===qe&&jc(Ge,t)}function lc(e){var t,r=e.event,n=e.target,i=e.axis,o=(r.changedTouches?r.changedTouches[0]:r).target,a=o._gsap||We.core.getCache(o),s=dt();if(!a._isScrollT||2e3<s-a._isScrollT){for(;o&&o.scrollHeight<=o.clientHeight;)o=o.parentNode;a._isScroll=o&&!Ba(o)&&o!==n&&(se[(t=db(o)).overflowY]||se[t.overflowX]),a._isScrollT=s}!a._isScroll&&"x"!==i||(r._gsapAllow=!0)}function mc(e,t,r,n){return k.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:n=n&&lc,onPress:n,onDrag:n,onScroll:n,onEnable:function onEnable(){return r&&nb(Je,k.eventTypes[0],ce,!1,!0)},onDisable:function onDisable(){return ob(Je,k.eventTypes[0],ce,!0)}})}function qc(e){function op(){return n=!1}function rp(){o=Fa(d,Ne),_=et(C?1:0,o),f&&(S=et(0,Fa(d,Re))),a=G}function xp(){rp(),s.isActive()&&s.vars.scrollY>o&&(h()>o?s.progress(1)&&h(o):s.resetTo("scrollY",o))}Ka(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r,o,n,a,s,l,c,u,f=e.normalizeScrollX,t=e.momentum,i=e.allowNestedScroll,d=I(e.target)||qe,p=We.core.globals().ScrollSmoother,g=C&&(e.content&&I(e.content)||p&&p.get()&&p.get().content()),h=J(d,Ne),v=J(d,Re),b=1,m=(k.isTouch&&je.visualViewport?je.visualViewport.scale*je.visualViewport.width:je.outerWidth)/je.innerWidth,y=0,x=Ia(t)?function(){return t(r)}:function(){return t||2.8},w=mc(d,e.type,!0,i),S=xa,_=xa;return e.ignoreCheck=function(e){return C&&"touchmove"===e.type&&function ignoreDrag(){if(n){requestAnimationFrame(op);var e=ya(r.deltaY/2),t=_(h.v-e);return g&&t!==h.v+h.offset&&(h.offset=t-h.v,g.style.transform="translateY("+-h.offset+"px)",g._gsap&&(g._gsap.y=-h.offset+"px"),h.cacheID=T.cache,ee()),!0}g&&(g.style.transform="translateY(0px)",h.offset=h.cacheID=0,g._gsap&&(g._gsap.y="0px")),n=!0}()||1.05<b&&"touchstart"!==e.type||r.isGesturing||e.touches&&1<e.touches.length},e.onPress=function(){var e=b;b=ya((je.visualViewport&&je.visualViewport.scale||1)/m),s.pause(),e!==b&&jc(d,1.01<b||!f&&"x"),n=!1,l=v(),c=h(),rp(),a=G},e.onRelease=e.onGestureStart=function(e,t){if(g&&(g.style.transform="translateY(0px)",h.offset=h.cacheID=0,g._gsap&&(g._gsap.y="0px")),t){T.cache++;var r,n,i=x();f&&(n=(r=v())+.05*i*-e.velocityX/.227,i*=ic(v,r,n,Fa(d,Re)),s.vars.scrollX=S(n)),n=(r=h())+.05*i*-e.velocityY/.227,i*=ic(h,r,n,Fa(d,Ne)),s.vars.scrollY=_(n),s.invalidate().duration(i).play(.01),(C&&s.vars.scrollY>=o||o-1<=r)&&We.to({},{onUpdate:xp,duration:i})}else u.restart(!0)},e.onWheel=function(){s._ts&&s.pause(),1e3<dt()-y&&(a=0,y=dt())},e.onChange=function(e,t,r,n,i){G!==a&&rp(),t&&f&&v(S(n[2]===t?l+(e.startX-e.x):v()+t-n[1])),r&&h(_(i[2]===r?c+(e.startY-e.y):h()+r-i[1])),ee()},e.onEnable=function(){jc(d,!f&&"x"),nb(je,"resize",xp),w.enable()},e.onDisable=function(){jc(d,!0),ob(je,"resize",xp),w.kill()},((r=new k(e)).iOS=C)&&!h()&&h(1),u=r._dc,s=We.to(r,{ease:"power4",paused:!0,scrollX:f?"+=0.1":"+=0",scrollY:"+=0.1",onComplete:u.vars.onComplete}),r}var ae,se={auto:1,scroll:1},le=/(input|label|select|textarea)/i,ce=function _captureInputs(e){var t=le.test(e.target.tagName);(t||ae)&&(e._gsapAllow=!0,ae=t)};oe.sort=function(e){return Ot.sort(e||function(e,t){return-1e6*(e.vars.refreshPriority||0)+e.start-(t.start+-1e6*(t.vars.refreshPriority||0))})},oe.observe=function(e){return new k(e)},oe.normalizeScroll=function(e){if(void 0===e)return h;if(!0===e&&h)return h.enable();if(!1===e)return h&&h.kill();var t=e instanceof k?e:qc(e);return h&&h.target===t.target&&h.kill(),Ba(t.target)&&(h=t),t},oe.core={_getVelocityProp:K,_inputObserver:mc,_scrollers:T,_proxies:Le,bridge:{ss:function ss(){pt||V("scrollStart"),pt=dt()},ref:function ref(){return rt}}},Aa()&&We.registerPlugin(oe),e.ScrollTrigger=oe,e.default=oe;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});




a = document.getElementById("arrow")
if (a !== null) {
  a.addEventListener("click", e => {
      let element = document.querySelector(a.getAttribute("href"));
      let linkST = ScrollTrigger.create({
                      trigger: element,
                      start: "top 81px"
                    });
      e.preventDefault();
      gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});
    });
}
  //tween the svg path + circle
  gsap.timeline(
    {scrollTrigger:{
      trigger:'#scrollDist',
      scrub: true,
      pin: '#map',
      start:'top 80px', 
      end:"+=200%", 
      ease: 'none',
      }
    }) 
    .to('#c', {motionPath:'#p', immediateRender:true, ease:'none'}, 0)
    .from('#p', {drawSVG:'0 0', ease:'none',}, 0)

  //move container's x/y to follow the red circle
  gsap.ticker.add( ()=> gsap.to('#map_container', {duration:0.7, x:-gsap.getProperty('#c', 'x'), y:-gsap.getProperty('#c', 'y')}) );

  //center the container's left/top position
  window.onload = window.onresize = ()=> { gsap.set('#map_container', {left:innerWidth/2, top:innerHeight/2}); }
function sla_calculate(){
    const electricity_price = 6;
    const map_sla_resin = new Map();
        map_sla_resin.set('Clear', 4.61);
        map_sla_resin.set('Black', 4.61);
        map_sla_resin.set('White', 4.61);
        map_sla_resin.set('Gray', 4.61);
        map_sla_resin.set('Tough', 5.68);
        map_sla_resin.set('Durable', 5.68);
        map_sla_resin.set('High Temp', 5.68);
        map_sla_resin.set('Grey Pro', 5.68);
        map_sla_resin.set('ESD', 5.68);
        map_sla_resin.set('Rigid', 6.40);
        map_sla_resin.set('Elastic', 6.40);
        map_sla_resin.set('Flexible', 6.40);
        map_sla_resin.set('BioMed', 7.99);
        map_sla_resin.set('Castable', 8.10);
    const power_consumption = 0.0060;
    const hourly_rate = 40;
    const handling_fee = 100;
    const hours = document.getElementById("sla_h");
    const minutes = document.getElementById("sla_m");
    const resin = document.getElementById("sla_resin");
    const volume = document.getElementById("sla_volume");
    const output = document.getElementById("sla_price");
    let time_hours = parseInt(hours.value, 10) + parseInt(minutes.value, 10)/60 
    output.textContent = Math.round(map_sla_resin.get(resin.value)*volume.value + time_hours*hourly_rate+handling_fee + time_hours*power_consumption*electricity_price) + " Kč";
}

function fdm_calculate(){
    const map_fdm_fillament = new Map();
    map_fdm_fillament.set('ASA_spectrum', 0.700);
    map_fdm_fillament.set('PETG_generic', 0.600);
    map_fdm_fillament.set('PETG_pm', 0.660);
    map_fdm_fillament.set('PETG_prusa', 0.600);
    map_fdm_fillament.set('PETG_spectrum', 0.450);
    map_fdm_fillament.set('PLA_ekoMB', 0.450);
    map_fdm_fillament.set('PLA_extrafill', 0.600);
    map_fdm_fillament.set('PLA_generic', 0.600);
    map_fdm_fillament.set('PLA_pm', 0.660);
    map_fdm_fillament.set('PLA_prusa', 0.600);
    map_fdm_fillament.set('PLA+PM', 0.600);
    const handling_fee = 30;
    const weight = document.getElementById("fdm_weight");
    const hourly_rate = 30;
    const fillament = document.getElementById("fdm_fillament");
    const hours = document.getElementById("fdm_h");
    const minutes = document.getElementById("fdm_m");
    const output = document.getElementById("fdm_price");
    let time_hours = parseInt(hours.value, 10) + parseInt(minutes.value, 10)/60 
    output.textContent = Math.round(time_hours*hourly_rate + map_fdm_fillament.get(fillament.value)*weight.value+handling_fee) + " Kč"
}

function laser_calculate(){
    const handling_fee = 50;
    const material = document.getElementById("laser_material");
    const hourly_rate = 360;
    const hours = document.getElementById("laser_h");
    const minutes = document.getElementById("laser_m");
    const output = document.getElementById("laser_price");
    let time_hours = parseInt(hours.value, 10) + parseInt(minutes.value, 10)/60 
    output.textContent = Math.round(time_hours*hourly_rate + parseInt(material.value,10) + handling_fee) + " Kč"
}

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, DrawSVGPlugin);


let links = gsap.utils.toArray("nav a");



links.forEach(a => {

    let element = document.querySelector(a.getAttribute("href"));

    let linkST = ScrollTrigger.create({

                    trigger: element,

                    start: "top 81px"

                  });

    ScrollTrigger.create({

        trigger: element,

        start: "top bottom",

        end: "bottom bottom",

        onToggle: self => self.isActive && setActive(a)

    });

    a.addEventListener("click", e => {

      e.preventDefault();

      if (document.getElementById("menu-btn").checked){

        document.getElementById("menu-btn").click();

      }

      gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});

    });

});

/*

let links = gsap.utils.toArray("nav a");

links.forEach(a => {

  let element = document.querySelector(a.getAttribute("href")),

      linkST = ScrollTrigger.create({

            trigger: element,

            start: "top top"

          });

  ScrollTrigger.create({

    trigger: element,

    start: "top center",

    end: "bottom center",

    onToggle: self => self.isActive && setActive(a)

  });

  a.addEventListener("click", e => {

    e.preventDefault();

    gsap.to(window, {duration: 1, scrollTo: linkST.start, overwrite: "auto"});

  });

});

*/

function setActive(link) {

    links.forEach(el => el.classList.remove("active"));

    link.classList.add("active");

}



//# sourceMappingURL=scripts.js.map