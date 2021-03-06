(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.ExtendedImageDescriptions = factory());
}(this, function () { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(source, true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(source).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */

  var FUNC_ERROR_TEXT = 'Expected a function';
  /** Used as references for various `Number` constants. */

  var NAN = 0 / 0;
  /** `Object#toString` result references. */

  var symbolTag = '[object Symbol]';
  /** Used to match leading and trailing whitespace. */

  var reTrim = /^\s+|\s+$/g;
  /** Used to detect bad signed hexadecimal string values. */

  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
  /** Used to detect binary string values. */

  var reIsBinary = /^0b[01]+$/i;
  /** Used to detect octal string values. */

  var reIsOctal = /^0o[0-7]+$/i;
  /** Built-in method references without a dependency on `root`. */

  var freeParseInt = parseInt;
  /** Detect free variable `global` from Node.js. */

  var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
  /** Detect free variable `self`. */

  var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self && self.Object === Object && self;
  /** Used as a reference to the global object. */

  var root = freeGlobal || freeSelf || Function('return this')();
  /** Used for built-in method references. */

  var objectProto = Object.prototype;
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */

  var objectToString = objectProto.toString;
  /* Built-in method references for those with the same name as other `lodash` methods. */

  var nativeMax = Math.max,
      nativeMin = Math.min;
  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */

  var now = function now() {
    return root.Date.now();
  };
  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */


  function debounce(func, wait, options) {
    var lastArgs,
        lastThis,
        maxWait,
        result,
        timerId,
        lastCallTime,
        lastInvokeTime = 0,
        leading = false,
        maxing = false,
        trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }

    wait = toNumber(wait) || 0;

    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
          thisArg = lastThis;
      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time; // Start the timer for the trailing edge.

      timerId = setTimeout(timerExpired, wait); // Invoke the leading edge.

      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime,
          result = wait - timeSinceLastCall;
      return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
          timeSinceLastInvoke = time - lastInvokeTime; // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.

      return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }

    function timerExpired() {
      var time = now();

      if (shouldInvoke(time)) {
        return trailingEdge(time);
      } // Restart the timer.


      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined; // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.

      if (trailing && lastArgs) {
        return invokeFunc(time);
      }

      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }

      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
          isInvoking = shouldInvoke(time);
      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }

        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }

      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }

      return result;
    }

    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }
  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */


  function isObject(value) {
    var type = _typeof(value);

    return !!value && (type == 'object' || type == 'function');
  }
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */


  function isObjectLike(value) {
    return !!value && _typeof(value) == 'object';
  }
  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */


  function isSymbol(value) {
    return _typeof(value) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
  }
  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */


  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }

    if (isSymbol(value)) {
      return NAN;
    }

    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? other + '' : other;
    }

    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }

    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
  }

  var lodash_debounce = debounce;

  /**
   * helper function that will get the height of an element even if it's not visible
   */

  var getHeight = function getHeight(el) {
    var _window$getComputedSt = window.getComputedStyle(el),
        display = _window$getComputedSt.display,
        maxHeight = _window$getComputedSt.maxHeight;

    if (display !== 'none' && parseInt(maxHeight, 10)) {
      return el.clientHeight;
    }
    /* eslint-disable no-param-reassign */


    el.style.visibility = 'hidden';
    el.style.display = 'block';
    var clientHeight = el.clientHeight;
    el.removeAttribute('style');
    return clientHeight;
  };

  var classToggler = function classToggler(el, className) {
    return function () {
      el.classList.toggle(className);
    };
  }; // PRIVATE methods stored externally from the class


  function emitEvent(eventName, eventDetail) {
    var eventInit = eventDetail ? {
      detail: eventDetail
    } : null;
    this.details.dispatchEvent(new CustomEvent(eventName, eventInit));
  }
  /**
   * <summary> click handler
   * As soon as a <details> element no longer has the [open] attribute,
   * its inner contents disappear.
   * To prevent this, we transition the height of the contents, delaying the
   * removal of the [open] attribute until the 'transitionend' event triggers
   */


  function summaryClickHandler(e) {
    if (window.getComputedStyle(this.panel)['transition-property'] === 'none') {
      return;
    }

    if (this.open) {
      e.preventDefault();

      if (this.opening) {
        this.opening = false;
        emitEvent.call(this, 'opencancel');
        if (this.onopencancel) this.onopencancel();
      }

      if (this.closing) {
        this.closing = false;
        this.panel.style.height = "".concat(this.panelHeight, "px");
        emitEvent.call(this, 'closecancel');
        if (this.onclosecancel) this.onclosecancel();
      } else {
        this.closing = true;
        this.panel.style.height = 0;
        emitEvent.call(this, 'closestart');
        if (this.onclosestart) this.onclosestart();
      }
    } else {
      this.opening = true;
      emitEvent.call(this, 'openstart');
      if (this.onopenstart) this.onopenstart();
    }
  }

  function updatePanelStyle() {
    if (this.open) {
      this.panel.style.height = "".concat(this.panelHeight, "px");
    } else {
      this.panel.style.height = 0;
    }
  }

  function panelTransitionendHandler() {
    if (this.closing) {
      this.closing = false;
      this.details.removeAttribute('open');
      emitEvent.call(this, 'closeend');
      if (this.oncloseend) this.oncloseend();
    }

    if (this.opening) {
      this.opening = false;
      emitEvent.call(this, 'openend');
      if (this.onopenend) this.onopenend();
    }
  }

  function getDetailsPanelHeight() {
    var height = getHeight(this.panel);

    if (!this.open) {
      this.details.setAttribute('open', 'open');
      height = getHeight(this.panel);
      this.details.removeAttribute('open');
    }

    return height;
  }

  var instances = new Set();

  var noop = function noop() {};

  var DetailsTransition =
  /*#__PURE__*/
  function () {
    function DetailsTransition(details) {
      var _this = this;

      _classCallCheck(this, DetailsTransition);

      this.details = details;
      this.enabled = false;
      this.closing = false;
      this.opening = false;
      this.bindings = [];
      this.onclick = summaryClickHandler.bind(this);
      this.ontoggle = updatePanelStyle.bind(this);
      this.ontransitionend = panelTransitionendHandler.bind(this);
      this.onwindowresize = lodash_debounce(this.updatePanelHeight.bind(this), 150);
      DetailsTransition.customEvents.forEach(function (eventName) {
        _this["on".concat(eventName)] = noop;
      });
      instances.add(this);
    }

    _createClass(DetailsTransition, [{
      key: "enable",

      /**
       * Enable
       */
      value: function enable() {
        if (this.enabled) return this;
        /* eslint-disable no-console */

        if (!this.summary) {
          console.warn('No <summary> button found in', this.details);
          return this;
        }

        if (!this.panel) {
          console.warn('No contents found in', this.details);
          return this;
        }

        this.updatePanelHeight();
        this.summary.addEventListener('click', this.onclick);
        this.details.addEventListener('toggle', this.ontoggle);
        this.panel.addEventListener('transitionend', this.ontransitionend);
        window.addEventListener('resize', this.onwindowresize);
        this.enabled = true;
        return this;
      }
      /**
       * Disable
       */

    }, {
      key: "disable",
      value: function disable() {
        if (this.enabled) {
          this.summary.removeEventListener('click', this.onclick);
          this.details.removeEventListener('toggle', this.ontoggle);
          this.panel.removeEventListener('transitionend', this.ontransitionend);
          window.removeEventListener('resize', this.onwindowresize);
          this.unbind();
          this.enabled = false;
        }

        return this;
      }
      /**
       * Destroy
       */

    }, {
      key: "destroy",
      value: function destroy() {
        this.disable();
        instances["delete"](this);
        return this;
      }
      /**
       * Bind opening/closing states to another element via class toggling
       * Toggles the opening/closing classes on that element when appropriate
       */

    }, {
      key: "bindTo",
      value: function bindTo(element) {
        var _this2 = this;

        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          closing: 'closing',
          opening: 'opening'
        },
            closing = _ref.closing,
            opening = _ref.opening;

        var el = typeof element === 'string' ? this.details.querySelector(element) : element;

        if (el) {
          var closeToggler = classToggler(el, closing);
          var openToggler = classToggler(el, opening);
          DetailsTransition.customEvents.forEach(function (eventName) {
            var listener = eventName.startsWith('close') ? closeToggler : openToggler;

            _this2.details.addEventListener(eventName, listener);

            _this2.bindings.push([eventName, listener]);
          });
        }

        return this;
      }
      /**
       * Unbind
       */

    }, {
      key: "unbind",
      value: function unbind() {
        var _this3 = this;

        this.bindings.reduceRight(function (acc, _ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
              eventName = _ref3[0],
              listener = _ref3[1];

          _this3.details.removeEventListener(eventName, listener);

          return acc;
        }, []);
        return this;
      }
      /**
       * Update the height of the panel element
       */

    }, {
      key: "updatePanelHeight",
      value: function updatePanelHeight() {
        this.panel.removeAttribute('style');
        this.panelHeight = getDetailsPanelHeight.call(this);
        updatePanelStyle.call(this);
        return this;
      }
    }, {
      key: "open",
      get: function get() {
        return this.details.open;
      }
    }, {
      key: "summary",
      get: function get() {
        return this.details.querySelector('summary');
      }
    }, {
      key: "panel",
      get: function get() {
        return this.summary.nextElementSibling;
      }
    }], [{
      key: "enhance",
      value: function enhance(details) {
        var instance = new DetailsTransition(details);
        instance.enable();
        return instance;
      }
    }, {
      key: "enhanceAll",
      value: function enhanceAll() {
        var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'details';
        var bindToDetailsMarker = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.details-marker';
        document.querySelectorAll(selector).forEach(function (el) {
          var d = DetailsTransition.enhance(el);

          if (bindToDetailsMarker) {
            d.bindTo(bindToDetailsMarker);
          }
        });
        return DetailsTransition.instances;
      }
    }, {
      key: "customEvents",
      get: function get() {
        return ['closestart', 'closecancel', 'closeend', 'openstart', 'opencancel', 'openend'];
      }
    }, {
      key: "instances",
      get: function get() {
        return instances;
      }
    }]);

    return DetailsTransition;
  }();

  function dragstart(e) {
    this.details.classList.add('detailed-dragging');

    var _ref = 'touches' in e ? e.touches[0] : e,
        screenY = _ref.screenY,
        screenX = _ref.screenX;

    this.prevPos = {
      screenY: screenY,
      screenX: screenX
    };
  }
  function drag(e) {
    if (this.dragging) {
      var _ref2 = 'touches' in e ? e.touches[0] : e,
          screenY = _ref2.screenY,
          screenX = _ref2.screenX;

      this.pos = {
        top: this.pos.top + (screenY - this.prevPos.screenY),
        left: this.pos.left + (screenX - this.prevPos.screenX)
      };
      this.prevPos = {
        screenY: screenY,
        screenX: screenX
      };
    }
  }
  function dragend() {
    this.details.classList.remove('detailed-dragging');
  }
  function click() {
    if (!this.open) {
      this.summary.classList.toggle('detailed-active');
    }
  }
  function toggle() {
    if (!this.open) {
      this.resetPosition();
    }
  }
  var stepBase = 5;
  function keydown(e) {
    if (this.open) {
      var mod = e.altKey ? 10 : 1;
      var step = stepBase * mod; // TODO: Add check to ensure element doesn't go beyond right border

      if (e.key.startsWith('Arrow')) e.preventDefault();

      if (e.key === 'ArrowRight') {
        var change = parseInt(this.details.style.left || 0, 10) + step;
        this.details.style.left = "".concat(change, "px");
      }

      if (e.key === 'ArrowLeft') {
        var _change = parseInt(this.details.style.left || 0, 10) - step;

        this.details.style.left = "".concat(_change, "px");
      }

      if (e.key === 'ArrowUp') {
        var _change2 = parseInt(this.details.style.top || 0, 10) - step;

        this.details.style.top = "".concat(_change2, "px");
      } // TODO: Add check to ensure element doesn't go beyond bottom border


      if (e.key === 'ArrowDown') {
        var _change3 = parseInt(this.details.style.top || 0, 10) + step;

        this.details.style.top = "".concat(_change3, "px");
      }
    }
  }

  var templateTag = function templateTag(strings) {
    var template = document.createElement('template');
    template.innerHTML = strings.trim();
    return document.importNode(template.content, true);
  };

  var openIcon = "\n<svg class=\"detailed-marker closed\" aria-hidden=\"true\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\">\n  <!-- fontawesome's info-circle icon: https://fontawesome.com/license-->\n  <path fill=\"currentColor\" d=\"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z\"/>\n</svg>\n";
  var closeIcon = "\n<svg class=\"detailed-marker opened\" aria-hidden=\"true\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewbox=\"0 0 512 512\">\n  <!-- fontawesome's fa-times-circle icon: https://fontawesome.com/license-->\n  <path fill=\"currentColor\" d=\"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z\"/>\n</svg>\n";
  function addAltText() {
    var altTextEl = document.createElement('p');
    altTextEl.textContent = this.alt;
    altTextEl.setAttribute('aria-hidden', true);
    this.contents.insertBefore(altTextEl, this.contents.firstChild);
    return this;
  }
  function addDefaultSummary() {
    var summary = document.createElement('summary');
    summary.appendChild(templateTag(openIcon));
    summary.appendChild(templateTag(closeIcon));
    this.details.insertBefore(summary, this.details.firstChild);
    return this;
  }
  function describeSummary() {
    if (!this.img.id) {
      this.img.setAttribute('id', "detailed-img-".concat(this.id));
    }

    this.summary.setAttribute('aria-describedby', this.img.id);
    var title = 'More information';
    var label = this.hasContents ? title : "".concat(title, " (no long description available)");
    this.summary.setAttribute('title', title);
    this.summary.setAttribute('aria-label', label);
    return this;
  }
  function createContents() {
    this.contents = this.contents || document.createElement('div');
    this.contents.classList.add('detailed-contents');

    while (this.summary.nextSibling) {
      this.contents.appendChild(this.summary.nextSibling);
    }

    this.details.appendChild(this.contents);
    return this;
  }

  var Defaults = {
    selector: 'figure>details',
    noalt: false
  };
  var instances$1 = new Set();

  var Detailed =
  /*#__PURE__*/
  function () {
    function Detailed(details) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, Detailed);

      this.details = details;
      this.options = _objectSpread2({}, Detailed.Defaults, {}, options);
      this.enabled = false;
      this.transitionHandler = new DetailsTransition(this.details);
      this.dragstartHandler = dragstart.bind(this);
      this.dragendHandler = dragend.bind(this);
      this.dragHandler = drag.bind(this);
      this.clickHandler = click.bind(this);
      this.keydownHandler = keydown.bind(this);
      this.closeendHandler = this.resetPosition.bind(this);
      this.toggleHandler = toggle.bind(this);
      instances$1.add(this);
    } // INSTANCE METHODS


    _createClass(Detailed, [{
      key: "enable",
      value: function enable() {
        if (!this.img) {
          // eslint-disable-next-line no-console
          console.warn('No related image found.\n' + 'Associate an <img> with your <details> via aria-details.', this.details);
          return this;
        }

        if (!this.enabled) {
          if (!this.summary) {
            addDefaultSummary.call(this);
          }

          this.hasContents = this.details.lastChild !== this.summary;
          describeSummary.call(this);
          createContents.call(this);

          if (this.copyAlt) {
            addAltText.call(this);
          }

          this.transitionHandler.enable().bindTo('.detailed-marker');
          this.contents.addEventListener('mousedown', this.dragstartHandler);
          document.addEventListener('mouseup', this.dragendHandler);
          document.addEventListener('mousemove', this.dragHandler);
          this.details.addEventListener('toggle', this.toggleHandler);
          this.details.addEventListener('closeend', this.closeendHandler);
          this.summary.addEventListener('keydown', this.keydownHandler);
          this.img.addEventListener('click', this.clickHandler);
          this.enabled = true;
        }

        return this;
      }
    }, {
      key: "disable",
      value: function disable() {
        if (this.enabled) {
          this.transitionHandler.disable();
          this.enabled = false;
        }

        return this;
      }
    }, {
      key: "destroy",
      value: function destroy() {
        if (this.enabled) this.disable();
        this.transitionHandler.destroy();
        instances$1["delete"](this);
        return this;
      }
    }, {
      key: "resetPosition",
      value: function resetPosition() {
        this.pos = {
          top: 0,
          left: 0
        };
      } // PROPERTIES

    }, {
      key: "copyAlt",
      get: function get() {
        return !(this.details.getAttribute('data-noalt') !== null || this.options.noalt);
      }
    }, {
      key: "open",
      get: function get() {
        return this.details.open;
      }
    }, {
      key: "dragging",
      get: function get() {
        return this.details.classList.contains('detailed-dragging');
      }
    }, {
      key: "isValid",
      get: function get() {
        return Boolean(this.img);
      }
    }, {
      key: "id",
      get: function get() {
        return this.details.id;
      }
    }, {
      key: "img",
      get: function get() {
        return document.querySelector("img[aria-details=\"".concat(this.id, "\"]"));
      }
    }, {
      key: "alt",
      get: function get() {
        return this.img.getAttribute('alt');
      }
    }, {
      key: "summary",
      get: function get() {
        return this.details.querySelector('summary');
      }
    }, {
      key: "pos",
      get: function get() {
        var style = getComputedStyle(this.details);
        var top = parseInt(style.top, 10);
        var left = parseInt(style.left, 10);
        return {
          top: top,
          left: left
        };
      },
      set: function set(_ref) {
        var top = _ref.top,
            left = _ref.left;
        this.details.style.top = "".concat(top, "px");
        this.details.style.left = "".concat(left, "px");
      } // STATIC METHODS (PRIMARY API)

    }], [{
      key: "enhance",
      value: function enhance(detailsElement) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var d = new Detailed(detailsElement, options);
        d.enable();
        return d;
      }
    }, {
      key: "enhanceAll",
      value: function enhanceAll(selector) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var sel;
        var opts;

        if (typeof selector === 'string') {
          sel = selector;
          opts = options;
        } else {
          sel = Detailed.Defaults.selector;
          opts = selector;
        }

        document.querySelectorAll(sel).forEach(function (el) {
          Detailed.enhance(el, opts);
        });
        return Detailed.instances;
      }
    }, {
      key: "instances",
      get: function get() {
        return instances$1;
      }
    }, {
      key: "Defaults",
      get: function get() {
        return Defaults;
      }
    }]);

    return Detailed;
  }();

  return Detailed;

}));
