"use weex:vue";
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 125);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!*************************************************************!*\
  !*** C:/Users/1/Desktop/dy-Dev/main.js?{"type":"appStyle"} ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),

/***/ 12:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    if(typeof renderjs.beforeCreate === 'function'){
			renderjs.beforeCreate = [renderjs.beforeCreate]
		}
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 125:
/*!********************************************************************!*\
  !*** C:/Users/1/Desktop/dy-Dev/main.js?{"page":"pages%2Fme%2Fme"} ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-polyfill */ 4);\n/* harmony import */ var uni_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_me_me_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/me/me.nvue?mpType=page */ 126);\n\n        \n        \n        \n        \n        _pages_me_me_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].mpType = 'page'\n        _pages_me_me_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].route = 'pages/me/me'\n        _pages_me_me_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"].el = '#root'\n        new Vue(_pages_me_me_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBRUEsUUFBOEI7QUFDOUIsUUFBNkI7QUFDN0IsUUFBd0Q7QUFDeEQsUUFBUSxxRUFBRztBQUNYLFFBQVEscUVBQUc7QUFDWCxRQUFRLHFFQUFHO0FBQ1gsZ0JBQWdCLHFFQUFHIiwiZmlsZSI6IjEyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgJ3VuaS1wb2x5ZmlsbCdcbiAgICAgICAgaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL21lL21lLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL21lL21lJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///125\n");

/***/ }),

/***/ 126:
/*!**************************************************************!*\
  !*** C:/Users/1/Desktop/dy-Dev/pages/me/me.nvue?mpType=page ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _me_nvue_vue_type_template_id_15330fe8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./me.nvue?vue&type=template&id=15330fe8&mpType=page */ 127);\n/* harmony import */ var _me_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./me.nvue?vue&type=script&lang=js&mpType=page */ 129);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _me_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _me_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./me.nvue?vue&type=style&index=0&lang=css&mpType=page */ 131).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./me.nvue?vue&type=style&index=0&lang=css&mpType=page */ 131).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _me_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _me_nvue_vue_type_template_id_15330fe8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _me_nvue_vue_type_template_id_15330fe8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  \"46d270bd\",\n  false,\n  _me_nvue_vue_type_template_id_15330fe8_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/me/me.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMkg7QUFDM0g7QUFDa0U7QUFDTDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLGdFQUF1RDtBQUMzRyxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsZ0VBQXVEO0FBQ2hIOztBQUVBOztBQUVBO0FBQzRLO0FBQzVLLGdCQUFnQixxTEFBVTtBQUMxQixFQUFFLG9GQUFNO0FBQ1IsRUFBRSx5RkFBTTtBQUNSLEVBQUUsa0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsNkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIxMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL21lLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTUzMzBmZTgmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21lLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgXG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgICAgICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vbWUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL21lLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhRDpcXFxcZHJlYW1cXFxcSEJ1aWxkZXJYXFxcXHBsdWdpbnNcXFxcdW5pYXBwLWNsaVxcXFxub2RlX21vZHVsZXNcXFxcQGRjbG91ZGlvXFxcXHZ1ZS1jbGktcGx1Z2luLXVuaVxcXFxwYWNrYWdlc1xcXFx2dWUtbG9hZGVyXFxcXGxpYlxcXFxydW50aW1lXFxcXGNvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjQ2ZDI3MGJkXCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL21lL21lLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///126\n");

/***/ }),

/***/ 127:
/*!********************************************************************************************!*\
  !*** C:/Users/1/Desktop/dy-Dev/pages/me/me.nvue?vue&type=template&id=15330fe8&mpType=page ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_template_id_15330fe8_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./me.nvue?vue&type=template&id=15330fe8&mpType=page */ 128);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_template_id_15330fe8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_template_id_15330fe8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_template_id_15330fe8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_template_id_15330fe8_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 128:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/1/Desktop/dy-Dev/pages/me/me.nvue?vue&type=template&id=15330fe8&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true",
      },
    },
    [
      _c(
        "view",
        { staticClass: ["page"] },
        [
          !_vm.userIsLogin
            ? _c(
                "view",
                {
                  staticClass: ["login-info-wrapper"],
                  style: { height: _vm.screenHeightUnLogin + "px" },
                  on: {
                    click: function ($event) {
                      _vm.goLogin()
                    },
                  },
                },
                [
                  _c(
                    "u-text",
                    {
                      staticClass: ["login-info"],
                      staticStyle: { alignSelf: "center" },
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v(_vm._s(_vm.loginWords))]
                  ),
                ]
              )
            : _vm._e(),
          _vm.userIsLogin
            ? _c(
                "scroll-view",
                {
                  style: { height: _vm.screenHeight + "px" },
                  attrs: { scrollY: "true" },
                  on: { scrolltolower: _vm.loadMore },
                },
                [
                  _c("u-image", {
                    staticStyle: {
                      width: "750rpx",
                      height: "750rpx",
                      boxShadow: "inset 0 -150px 180px #313030",
                    },
                    attrs: {
                      id: "mybg",
                      src: _vm.userBgImg,
                      mode: "aspectFill",
                    },
                  }),
                  _vm.isAndroid
                    ? _c("u-image", {
                        staticClass: ["page"],
                        staticStyle: {
                          width: "750rpx",
                          height: "750rpx",
                          opacity: "0.5",
                        },
                        attrs: {
                          src: "../../static/images/bg.png",
                          mode: "aspectFill",
                        },
                        on: {
                          click: function ($event) {
                            _vm.changeMyBg()
                          },
                        },
                      })
                    : _vm._e(),
                  _c(
                    "view",
                    {
                      staticStyle: {
                        position: "relative",
                        left: "30rpx",
                        top: "-560rpx",
                        display: "flex",
                        flexDirection: "column",
                        width: "500rpx",
                      },
                    },
                    [
                      _c(
                        "view",
                        {
                          staticStyle: {
                            display: "flex",
                            flexDirection: "row",
                          },
                        },
                        [
                          _c("u-image", {
                            staticStyle: {
                              width: "200rpx",
                              height: "200rpx",
                              borderRadius: "100rpx",
                              borderWidth: "1px",
                              borderColor: "#F1F1F1",
                            },
                            attrs: {
                              src: _vm.pageUserInfo.face,
                              mode: "scaleToFill",
                            },
                            on: {
                              click: function ($event) {
                                _vm.changeMyFace()
                              },
                            },
                          }),
                          _c(
                            "view",
                            {
                              staticStyle: {
                                marginLeft: "30rpx",
                                paddingTop: "20rpx",
                              },
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticStyle: {
                                    fontSize: "20px",
                                    color: "#FFFFFF",
                                    fontWeight: "600",
                                  },
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v(_vm._s(_vm.pageUserInfo.nickname))]
                              ),
                              _c(
                                "view",
                                {
                                  staticStyle: {
                                    display: "flex",
                                    flexDirection: "row",
                                  },
                                },
                                [
                                  _c(
                                    "u-text",
                                    {
                                      staticStyle: {
                                        fontSize: "16",
                                        color: "#FFFFFF",
                                        fontWeight: "300",
                                      },
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v("抖音号：")]
                                  ),
                                  _c(
                                    "u-text",
                                    {
                                      staticStyle: {
                                        fontSize: "16px",
                                        color: "#FFFFFF",
                                        fontWeight: "300",
                                      },
                                      appendAsTree: true,
                                      attrs: { append: "tree" },
                                    },
                                    [_vm._v(_vm._s(_vm.pageUserInfo.num))]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ]
                  ),
                  _c(
                    "u-text",
                    {
                      staticStyle: {
                        position: "relative",
                        top: "-520rpx",
                        color: "#ffffff",
                        fontSize: "14px",
                        margin: "0 30rpx",
                      },
                      appendAsTree: true,
                      attrs: { append: "tree" },
                    },
                    [_vm._v(_vm._s(_vm.pageUserInfo.description))]
                  ),
                  _c(
                    "view",
                    {
                      staticStyle: {
                        position: "relative",
                        top: "-510rpx",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      },
                    },
                    [
                      _c(
                        "view",
                        {
                          staticStyle: {
                            display: "flex",
                            flexDirection: "row",
                          },
                        },
                        [
                          _c(
                            "view",
                            {
                              staticStyle: {
                                marginLeft: "30rpx",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              },
                              on: {
                                click: function ($event) {
                                  _vm.goMyFollows()
                                },
                              },
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticStyle: {
                                    color: "#ffffff",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    alignSelf: "center",
                                  },
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.getGraceNumber(
                                        _vm.pageUserInfo.myFollowsCounts
                                      )
                                    )
                                  ),
                                ]
                              ),
                              _c(
                                "u-text",
                                {
                                  staticStyle: {
                                    color: "#ffffff",
                                    fontSize: "12px",
                                    fontWeight: "300",
                                    alignSelf: "center",
                                  },
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v("关注")]
                              ),
                            ]
                          ),
                          _c(
                            "view",
                            {
                              staticStyle: {
                                marginLeft: "50rpx",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              },
                              on: {
                                click: function ($event) {
                                  _vm.goMyFans()
                                },
                              },
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticStyle: {
                                    color: "#ffffff",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    alignSelf: "center",
                                  },
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.getGraceNumber(
                                        _vm.pageUserInfo.myFansCounts
                                      )
                                    )
                                  ),
                                ]
                              ),
                              _c(
                                "u-text",
                                {
                                  staticStyle: {
                                    color: "#ffffff",
                                    fontSize: "12px",
                                    fontWeight: "300",
                                    alignSelf: "center",
                                  },
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v("粉丝")]
                              ),
                            ]
                          ),
                          _c(
                            "view",
                            {
                              staticStyle: {
                                marginLeft: "50rpx",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                              },
                            },
                            [
                              _c(
                                "u-text",
                                {
                                  staticStyle: {
                                    color: "#ffffff",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    alignSelf: "center",
                                  },
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.getGraceNumber(
                                        _vm.pageUserInfo.totalLikeMeCounts
                                      )
                                    )
                                  ),
                                ]
                              ),
                              _c(
                                "u-text",
                                {
                                  staticStyle: {
                                    color: "#ffffff",
                                    fontSize: "12px",
                                    fontWeight: "300",
                                    alignSelf: "center",
                                  },
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v("获赞")]
                              ),
                            ]
                          ),
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticStyle: {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            marginRight: "30rpx",
                          },
                        },
                        [
                          _c(
                            "view",
                            {
                              staticStyle: {
                                marginLeft: "20rpx",
                                borderWidth: "1px",
                                borderColor: "#FFFFFF",
                                width: "200rpx",
                                height: "66rpx",
                                backgroundColor: "#545456",
                                opacity: "0.8",
                                borderRadius: "40rpx",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                                alignSelf: "center",
                              },
                              on: {
                                click: function ($event) {
                                  _vm.goMyInfo()
                                },
                              },
                            },
                            [
                              _c("u-image", {
                                staticStyle: {
                                  width: "32rpx",
                                  height: "32rpx",
                                  alignSelf: "center",
                                  marginRight: "8px",
                                },
                                attrs: {
                                  src: "../../static/images/icon-settings.png",
                                },
                              }),
                              _c(
                                "u-text",
                                {
                                  staticStyle: {
                                    fontSize: "13px",
                                    color: "#FFFFFF",
                                    fontWeight: "500",
                                    alignSelf: "center",
                                  },
                                  appendAsTree: true,
                                  attrs: { append: "tree" },
                                },
                                [_vm._v("设置")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
                    ]
                  ),
                  _c("view", { staticClass: ["tab-wrapper"] }, [
                    _c(
                      "view",
                      {
                        staticStyle: { width: "250rpx", alignSelf: "center" },
                        on: {
                          click: function ($event) {
                            _vm.switchTab(0)
                          },
                        },
                      },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["tab-normal"],
                            class: { "tab-selected": _vm.currentTab == 0 },
                            staticStyle: { alignSelf: "center" },
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v("作品")]
                        ),
                        _vm.currentTab == 0
                          ? _c("view", {
                              staticStyle: {
                                marginTop: "5px",
                                height: "5rpx",
                                width: "250rpx",
                                borderRadius: "6rpx",
                                backgroundColor: "#ef274d",
                              },
                            })
                          : _vm._e(),
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticStyle: { width: "250rpx", alignSelf: "center" },
                        on: {
                          click: function ($event) {
                            _vm.switchTab(1)
                          },
                        },
                      },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["tab-normal"],
                            class: { "tab-selected": _vm.currentTab == 1 },
                            staticStyle: { alignSelf: "center" },
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v("私密")]
                        ),
                        _vm.currentTab == 1
                          ? _c("view", {
                              staticStyle: {
                                marginTop: "5px",
                                height: "5rpx",
                                width: "250rpx",
                                borderRadius: "6rpx",
                                backgroundColor: "#ef274d",
                              },
                            })
                          : _vm._e(),
                      ]
                    ),
                    _c(
                      "view",
                      {
                        staticStyle: { width: "250rpx", alignSelf: "center" },
                        on: {
                          click: function ($event) {
                            _vm.switchTab(2)
                          },
                        },
                      },
                      [
                        _c(
                          "u-text",
                          {
                            staticClass: ["tab-normal"],
                            class: { "tab-selected": _vm.currentTab == 2 },
                            staticStyle: { alignSelf: "center" },
                            appendAsTree: true,
                            attrs: { append: "tree" },
                          },
                          [_vm._v("赞过")]
                        ),
                        _vm.currentTab == 2
                          ? _c("view", {
                              staticStyle: {
                                marginTop: "5px",
                                height: "5rpx",
                                width: "250rpx",
                                borderRadius: "6rpx",
                                backgroundColor: "#ef274d",
                              },
                            })
                          : _vm._e(),
                      ]
                    ),
                  ]),
                  _c(
                    "view",
                    { staticClass: ["vlog-list"] },
                    _vm._l(_vm.publicVlogList, function (vlog, index) {
                      return _c(
                        "block",
                        { key: index },
                        [
                          _c("u-image", {
                            staticClass: ["vlog-cover"],
                            staticStyle: { alignSelf: "center" },
                            attrs: { src: vlog.cover, mode: "aspectFill" },
                            on: {
                              click: function ($event) {
                                _vm.goToVlog(vlog)
                              },
                            },
                          }),
                        ],
                        1
                      )
                    }),
                    1
                  ),
                  _vm.publicVlogList.length == 0
                    ? _c(
                        "view",
                        {
                          staticStyle: {
                            backgroundColor: "#000000",
                            width: "750rpx",
                            height: "300rpx",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            position: "relative",
                            top: "-480rpx",
                          },
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticStyle: {
                                color: "#FFFFFF",
                                fontSize: "14px",
                                marginTop: "200rpx",
                              },
                              appendAsTree: true,
                              attrs: { append: "tree" },
                            },
                            [_vm._v("~ 空空如也 ~")]
                          ),
                        ]
                      )
                    : _vm._e(),
                  _vm.publicVlogList.length > 0
                    ? _c(
                        "view",
                        {
                          staticStyle: {
                            width: "750rpx",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            position: "relative",
                            top: "-260rpx",
                          },
                        },
                        [
                          _c(
                            "u-text",
                            {
                              staticStyle: {
                                color: "#FFFFFF",
                                fontSize: "14px",
                              },
                              appendAsTree: true,
                              attrs: { append: "tree" },
                            },
                            [_vm._v("- 已经到底 -")]
                          ),
                        ]
                      )
                    : _vm._e(),
                ],
                1
              )
            : _vm._e(),
        ],
        1
      ),
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 129:
/*!**************************************************************************************!*\
  !*** C:/Users/1/Desktop/dy-Dev/pages/me/me.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./me.nvue?vue&type=script&lang=js&mpType=page */ 130);\n/* harmony import */ var _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if([\"default\"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_5_0_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_5_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWljLENBQWdCLDBlQUFHLEVBQUMiLCJmaWxlIjoiMTI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSFEOlxcXFxkcmVhbVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxkcmVhbVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXGRyZWFtXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSFEOlxcXFxkcmVhbVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxiYWJlbC1sb2FkZXJcXFxcbGliXFxcXGluZGV4LmpzPz9yZWYtLTUtMCFEOlxcXFxkcmVhbVxcXFxIQnVpbGRlclhcXFxccGx1Z2luc1xcXFx1bmlhcHAtY2xpXFxcXG5vZGVfbW9kdWxlc1xcXFxAZGNsb3VkaW9cXFxcdnVlLWNsaS1wbHVnaW4tdW5pXFxcXHBhY2thZ2VzXFxcXHdlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXJcXFxcaW5kZXguanM/P3JlZi0tNS0xIUQ6XFxcXGRyZWFtXFxcXEhCdWlsZGVyWFxcXFxwbHVnaW5zXFxcXHVuaWFwcC1jbGlcXFxcbm9kZV9tb2R1bGVzXFxcXEBkY2xvdWRpb1xcXFx2dWUtY2xpLXBsdWdpbi11bmlcXFxccGFja2FnZXNcXFxcdnVlLWxvYWRlclxcXFxsaWJcXFxcaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///129\n");

/***/ }),

/***/ 130:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--5-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--5-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/1/Desktop/dy-Dev/pages/me/me.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar system = uni.getSystemInfoSync();\nvar app = getApp();\nvar _default = {\n  data: function data() {\n    return {\n      userIsLogin: false,\n      pageUserInfo: {},\n      userPageId: \"\",\n      loginWords: \"请登录\",\n      // changeBig: false,\n      screenHeight: 0,\n      statusBarHeight: 0,\n      screenHeightUnLogin: 0,\n      currentTab: 0,\n      vlogList: getApp().getDefaultVlogList(),\n      isFollow: false,\n      isAndroid: uni.getSystemInfoSync().platform == \"android\",\n      publicPage: 0,\n      publicTotalPage: 0,\n      publicVlogList: [],\n      privatePage: 0,\n      privateTotalPage: 0,\n      privateVlogList: [],\n      likedPage: 0,\n      likedTotalPage: 0,\n      likedVlogList: [],\n      listRouteType: \"myPublicList\"\n    };\n  },\n  onLoad: function onLoad() {\n    this.statusBarHeight = system.statusBarHeight;\n    var screenHeight = system.safeArea.bottom + 50;\n    this.screenHeight = screenHeight;\n    var screenHeightUnLogin = system.safeArea.bottom;\n    this.screenHeightUnLogin = screenHeightUnLogin;\n  },\n  onShow: function onShow() {\n    var me = this;\n    this.userIsLogin = app.userIsLogin();\n\n    // 判断我有没有登录\n    var myUserInfo = getApp().getUserInfoSession();\n    if (myUserInfo == null) {\n      return;\n    }\n    this.pageUserInfo = myUserInfo;\n    var myUserId = myUserInfo.id;\n    var serverUrl = app.globalData.serverUrl;\n    // 查询用户信息\n    uni.request({\n      method: \"GET\",\n      url: serverUrl + \"/userInfo/query?userId=\" + myUserId,\n      success: function success(result) {\n        if (result.data.status == 200) {\n          me.pageUserInfo = result.data.data;\n          me.setBasicUserInfo(me.pageUserInfo);\n        }\n      }\n    });\n    this.switchTab(0);\n  },\n  onTabItemTap: function onTabItemTap(e) {\n    var me = this;\n    // 判断当前用户有没有登录，有没有token，如果有，则展示当前页，如果没有表示未登录，展示登录注册页\n    if (!app.userIsLogin()) {\n      // 为空，弹出页面\n      uni.navigateTo({\n        url: \"../loginRegist/loginRegist\",\n        animationType: \"slide-in-bottom\",\n        success: function success() {\n          me.loginWords = \"请登录\";\n        }\n      });\n    }\n  },\n  methods: {\n    setBasicUserInfo: function setBasicUserInfo(myUserInfo) {\n      var userBgImg = myUserInfo.bgImg;\n      if (app.isStrEmpty(myUserInfo.bgImg)) {\n        // userBgImg = \"../../static/face/face-arrow-1.png\";\n        userBgImg = \"../../static/images/defaultBgImg.png\";\n      }\n      this.userBgImg = userBgImg;\n    },\n    switchTab: function switchTab(index) {\n      this.currentTab = index;\n      if (index == 0) {\n        this.publicPage = 0;\n        this.publicTotalPage = 0;\n        this.listRouteType = \"myPublicList\";\n        this.myPublicList(0);\n      } else if (index == 1) {\n        this.publicPage = 0;\n        this.publicTotalPage = 0;\n        this.listRouteType = \"myPrivateList\";\n        this.myPublicList(0);\n      } else if (index == 2) {\n        this.publicPage = 0;\n        this.publicTotalPage = 0;\n        this.listRouteType = \"myLikedList\";\n        this.myPublicList(0);\n      }\n    },\n    loadMore: function loadMore() {\n      // var currentTab = this.currentTab;\n      // if (currentTab == 0) {\n      if (this.publicPage >= this.publicTotalPage) {\n        return;\n      } else {\n        this.myPublicList(this.publicPage);\n      }\n\n      // }\n    },\n    myPublicList: function myPublicList(publicPage) {\n      var me = this;\n      if (publicPage == 0) {\n        me.publicVlogList = [];\n      }\n      publicPage = publicPage + 1;\n      me.publicPage = publicPage;\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      var listRouteType = me.listRouteType;\n      uni.request({\n        method: \"GET\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/vlog/\" + listRouteType + \"?userId=\" + userId + \"&page=\" + publicPage + \"&pageSize=10\",\n        success: function success(result) {\n          if (result.data.status == 200) {\n            var vlogList = result.data.data.rows;\n            var publicTotalPage = result.data.data.total;\n            me.publicVlogList = me.publicVlogList.concat(vlogList);\n            me.publicPage = publicPage;\n            me.publicTotalPage = publicTotalPage;\n          }\n        }\n      });\n    },\n    cancelFollow: function cancelFollow(vlogerId) {\n      var me = this;\n      var vlogerId = me.userPageId;\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/fans/cancel?myId=\" + userId + \"&vlogerId=\" + vlogerId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            me.isFollow = false;\n            uni.setStorageSync(\"justCancelVlogerId\", vlogerId);\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        }\n      });\n    },\n    followMe: function followMe() {\n      var me = this;\n      var vlogerId = me.userPageId;\n      var userId = getApp().getUserInfoSession().id;\n      var serverUrl = app.globalData.serverUrl;\n      uni.request({\n        method: \"POST\",\n        header: {\n          headerUserId: userId,\n          headerUserToken: app.getUserSessionToken()\n        },\n        url: serverUrl + \"/fans/follow?myId=\" + userId + \"&vlogerId=\" + vlogerId,\n        success: function success(result) {\n          if (result.data.status == 200) {\n            me.isFollow = true;\n            uni.setStorageSync(\"justFollowVlogerId\", vlogerId);\n          } else {\n            uni.showToast({\n              title: result.data.msg,\n              icon: \"none\",\n              duration: 3000\n            });\n          }\n        }\n      });\n    },\n    goLogin: function goLogin() {\n      uni.navigateTo({\n        url: \"../loginRegist/loginRegist\",\n        animationType: \"slide-in-bottom\"\n      });\n    },\n    // 把超过1000或10000的数字调整，比如1.3k/6.8w\n    getGraceNumber: function getGraceNumber(num) {\n      return getApp().graceNumber(num);\n    },\n    goToVlog: function goToVlog(vlog) {\n      var vlogId = vlog.vlogId ? vlog.vlogId : vlog.id;\n      uni.navigateTo({\n        url: \"../vlog/vlog?vlogId=\" + vlogId\n      });\n    },\n    changeMyBg: function changeMyBg() {\n      uni.navigateTo({\n        animationType: \"fade-in\",\n        url: \"myBackImg\"\n      });\n    },\n    changeMyFace: function changeMyFace() {\n      uni.navigateTo({\n        animationType: \"fade-in\",\n        url: \"myFace\"\n      });\n    },\n    goMyInfo: function goMyInfo() {\n      uni.navigateTo({\n        animationType: \"fade-in\",\n        url: \"myInfo\"\n      });\n    },\n    goMyFans: function goMyFans() {\n      uni.navigateTo({\n        animationType: \"fade-in\",\n        url: \"myFans\"\n      });\n    },\n    goMyFollows: function goMyFollows() {\n      uni.navigateTo({\n        animationType: \"fade-in\",\n        url: \"myFollows\"\n      });\n    }\n  }\n};\nexports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvbWUvbWUubnZ1ZSJdLCJuYW1lcyI6WyJkYXRhIiwidXNlcklzTG9naW4iLCJwYWdlVXNlckluZm8iLCJ1c2VyUGFnZUlkIiwibG9naW5Xb3JkcyIsInNjcmVlbkhlaWdodCIsInN0YXR1c0JhckhlaWdodCIsInNjcmVlbkhlaWdodFVuTG9naW4iLCJjdXJyZW50VGFiIiwidmxvZ0xpc3QiLCJpc0ZvbGxvdyIsImlzQW5kcm9pZCIsInB1YmxpY1BhZ2UiLCJwdWJsaWNUb3RhbFBhZ2UiLCJwdWJsaWNWbG9nTGlzdCIsInByaXZhdGVQYWdlIiwicHJpdmF0ZVRvdGFsUGFnZSIsInByaXZhdGVWbG9nTGlzdCIsImxpa2VkUGFnZSIsImxpa2VkVG90YWxQYWdlIiwibGlrZWRWbG9nTGlzdCIsImxpc3RSb3V0ZVR5cGUiLCJvbkxvYWQiLCJvblNob3ciLCJ1bmkiLCJtZXRob2QiLCJ1cmwiLCJzdWNjZXNzIiwibWUiLCJvblRhYkl0ZW1UYXAiLCJhbmltYXRpb25UeXBlIiwibWV0aG9kcyIsInNldEJhc2ljVXNlckluZm8iLCJ1c2VyQmdJbWciLCJzd2l0Y2hUYWIiLCJsb2FkTW9yZSIsIm15UHVibGljTGlzdCIsImhlYWRlciIsImhlYWRlclVzZXJJZCIsImhlYWRlclVzZXJUb2tlbiIsImNhbmNlbEZvbGxvdyIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiZm9sbG93TWUiLCJnb0xvZ2luIiwiZ2V0R3JhY2VOdW1iZXIiLCJnb1RvVmxvZyIsImNoYW5nZU15QmciLCJjaGFuZ2VNeUZhY2UiLCJnb015SW5mbyIsImdvTXlGYW5zIiwiZ29NeUZvbGxvd3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtOQTtBQUNBO0FBQUEsZUFDQTtFQUNBQTtJQUNBO01BQ0FDO01BQ0FDO01BQ0FDO01BQ0FDO01BRUE7TUFDQUM7TUFDQUM7TUFDQUM7TUFFQUM7TUFDQUM7TUFDQUM7TUFFQUM7TUFFQUM7TUFDQUM7TUFDQUM7TUFFQUM7TUFDQUM7TUFDQUM7TUFFQUM7TUFDQUM7TUFDQUM7TUFDQUM7SUFDQTtFQUNBO0VBQ0FDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtFQUVBO0VBQ0FDO0lBQ0E7SUFDQTs7SUFFQTtJQUNBO0lBQ0E7TUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQUM7TUFDQUM7TUFDQUM7TUFDQUM7UUFDQTtVQUNBQztVQUNBQTtRQUNBO01BQ0E7SUFDQTtJQUVBO0VBQ0E7RUFDQUM7SUFDQTtJQUNBO0lBQ0E7TUFDQTtNQUNBTDtRQUNBRTtRQUNBSTtRQUNBSDtVQUNBQztRQUNBO01BQ0E7SUFDQTtFQUNBO0VBQ0FHO0lBQ0FDO01BQ0E7TUFDQTtRQUNBO1FBQ0FDO01BQ0E7TUFDQTtJQUtBO0lBQ0FDO01BQ0E7TUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO01BQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtNQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7TUFDQTtJQUNBO0lBQ0FDO01BRUE7TUFDQTtNQUNBO1FBQ0E7TUFDQTtRQUNBO01BQ0E7O01BRUE7SUFDQTtJQUNBQztNQUNBO01BQ0E7UUFDQVI7TUFDQTtNQUNBaEI7TUFDQWdCO01BQ0E7TUFDQTtNQUNBO01BQ0FKO1FBQ0FDO1FBQ0FZO1VBQ0FDO1VBQ0FDO1FBQ0E7UUFDQWI7UUFDQUM7VUFDQTtZQUVBO1lBQ0E7WUFDQUM7WUFDQUE7WUFDQUE7VUFDQTtRQUNBO01BQ0E7SUFDQTtJQUNBWTtNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0FoQjtRQUNBQztRQUNBWTtVQUNBQztVQUNBQztRQUNBO1FBQ0FiO1FBQ0FDO1VBRUE7WUFDQUM7WUFDQUo7VUFDQTtZQUNBQTtjQUNBaUI7Y0FDQUM7Y0FDQUM7WUFDQTtVQUNBO1FBRUE7TUFDQTtJQUNBO0lBQ0FDO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQXBCO1FBQ0FDO1FBQ0FZO1VBQ0FDO1VBQ0FDO1FBQ0E7UUFDQWI7UUFDQUM7VUFFQTtZQUNBQztZQUNBSjtVQUNBO1lBQ0FBO2NBQ0FpQjtjQUNBQztjQUNBQztZQUNBO1VBQ0E7UUFFQTtNQUNBO0lBRUE7SUFFQUU7TUFDQXJCO1FBQ0FFO1FBQ0FJO01BQ0E7SUFDQTtJQUNBO0lBQ0FnQjtNQUNBO0lBQ0E7SUFFQUM7TUFDQTtNQUNBdkI7UUFDQUU7TUFDQTtJQUNBO0lBRUFzQjtNQUNBeEI7UUFDQU07UUFDQUo7TUFDQTtJQUNBO0lBRUF1QjtNQUNBekI7UUFDQU07UUFDQUo7TUFDQTtJQUNBO0lBRUF3QjtNQUNBMUI7UUFDQU07UUFDQUo7TUFDQTtJQUNBO0lBR0F5QjtNQUNBM0I7UUFDQU07UUFDQUo7TUFDQTtJQUNBO0lBRUEwQjtNQUNBNUI7UUFDQU07UUFDQUo7TUFDQTtJQUNBO0VBQ0E7QUFDQTtBQUFBIiwiZmlsZSI6IjEzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjxzdHlsZT5cbi5wYWdlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG5cbi5wYWdlLXdyaXRlIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRsZWZ0OiAwO1xuXHRyaWdodDogMDtcblx0dG9wOiAwO1xuXHRib3R0b206IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cblxuXG4udGFiLXdyYXBwZXIge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7IFxuXHR0b3A6IC00ODBycHg7XG5cdGhlaWdodDogNDBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzE3MTgyNTtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRwYWRkaW5nLXRvcDogM3B4O1xuXHRib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuXHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbn1cbi50YWItbm9ybWFsIHtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRmb250LXdlaWdodDogNTAwO1xuXHQvKiBhbGlnbi1zZWxmOiBjZW50ZXI7ICovXG5cdGNvbG9yOiAjODA4MDgwO1xufVxuLnRhYi11bnNlbGVjdGVkIHtcblx0Y29sb3I6ICM4MDgwODA7XG59XG4udGFiLXNlbGVjdGVkIHtcblx0Y29sb3I6ICNGRkZGRkY7XG59XG5cbi52bG9nLWxpc3Qge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHRvcDogLTQ4MHJweDtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0ZmxleC13cmFwOiB3cmFwO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cdGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG59XG4udmxvZy1jb3ZlciB7XG5cdHdpZHRoOiAyNDhycHg7XG5cdGhlaWdodDogMzYwcnB4O1xuXHRib3JkZXItd2lkdGg6IDFycHg7XG59XG4vKiDop6PlhrNmbGV45biD5bGAIHNwYWNlLWJldHdlZW7mnIDlkI7kuIDooYzkuKTovrnliIbluIPnmoTpl67popggKi9cbi8qIC52bG9nLWxpc3Q6YWZ0ZXIgeyBcbiAgICBjb250ZW50OiAnJzsgXG4gICAgd2lkdGg6IDI0OXJweDsgICBcbn1cbi5ibGFuay10ZW1wIHtcbiAgICB3aWR0aDogMjQ5cHg7XG5cdGhlaWdodDogMDtcblx0Ym9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cdG92ZXJmbG93OiBoaWRkZW47XG59ICovXG4ubG9naW4taW5mby13cmFwcGVyIHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ubG9naW4taW5mbyB7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRmb250LXNpemU6IDM2cnB4O1xuXHRmb250LXdlaWdodDogNjAwO1xufVxuPC9zdHlsZT5cblxuPHRlbXBsYXRlPlxuXHQ8dmlldyBjbGFzcz1cInBhZ2VcIj5cblx0XHQ8IS0tIOacqueZu+W9lSAtLT5cblx0XHQ8dmlldyB2LWlmPVwiIXVzZXJJc0xvZ2luXCIgY2xhc3M9XCJsb2dpbi1pbmZvLXdyYXBwZXJcIiA6c3R5bGU9XCJ7aGVpZ2h0OiBzY3JlZW5IZWlnaHRVbkxvZ2luICsgJ3B4J31cIiBAY2xpY2s9XCJnb0xvZ2luKClcIj5cblx0XHRcdDx0ZXh0IGNsYXNzPVwibG9naW4taW5mb1wiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyO1wiID57e2xvZ2luV29yZHN9fTwvdGV4dD5cblx0XHQ8L3ZpZXc+XG5cdFx0XG5cdFx0PCEtLSDlt7LnmbvlvZUgLS0+XG5cdFx0PHNjcm9sbC12aWV3IHYtaWY9XCJ1c2VySXNMb2dpblwiIDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCArICdweCd9XCIgc2Nyb2xsLXk9XCJ0cnVlXCIgQHNjcm9sbHRvbG93ZXI9XCJsb2FkTW9yZVwiPiBcblx0XHQ8IS0tIDx2aWV3IDpzdHlsZT1cIntoZWlnaHQ6IHNjcmVlbkhlaWdodCArICdweCd9XCI+IC0tPlxyXG5cdFx0PCEtLSBAY2xpY2s9XCJjaGFuZ2VNeUJnKClcIiAtLT5cblx0XHRcdDxpbWFnZSBpZD1cIm15YmdcIiBcblx0XHRcdFx0OnNyYz1cInVzZXJCZ0ltZ1wiIFxuXHRcdFx0XHRtb2RlPVwiYXNwZWN0RmlsbFwiIFxuXHRcdFx0XHRzdHlsZT1cIndpZHRoOiA3NTBycHg7aGVpZ2h0OiA3NTBycHg7IGJveC1zaGFkb3c6IGluc2V0IDAgLTE1MHB4IDE4MHB4ICMzMTMwMzA7XCI+PC9pbWFnZT5cblx0XHRcdFxuXHRcdFx0PCEtLSDlronljZPkuIvkvb/nlKjkuIDkuKrngbDoibLlm77niYfmnaXmm7/ku6PpmLTlvbHmlYjmnpzvvIxpb3PmlK/mjIHpmLTlvbHvvIzlronljZPliJnkuI3mlK/mjIEgLV8tISEhIC0tPlxuXHRcdFx0PGltYWdlIHYtaWY9XCJpc0FuZHJvaWRcIiBjbGFzcz1cInBhZ2VcIiBAY2xpY2suc2VsZj1cImNoYW5nZU15QmcoKVwiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvYmcucG5nXCIgbW9kZT1cImFzcGVjdEZpbGxcIiBzdHlsZT1cIndpZHRoOiA3NTBycHg7aGVpZ2h0OiA3NTBycHg7b3BhY2l0eTogMC41O1wiPjwvaW1hZ2U+XG5cdFx0XHRcblx0XHRcdDx2aWV3IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyBsZWZ0OiAzMHJweDt0b3A6IC01NjBycHg7ZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogY29sdW1uO3dpZHRoOiA1MDBycHg7XCI+XG5cdFx0XHRcdDx2aWV3IHN0eWxlPVwiZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogcm93O1wiPlxuXHRcdFx0XHRcdDxpbWFnZSBcblx0XHRcdFx0XHRcdDpzcmM9XCJwYWdlVXNlckluZm8uZmFjZVwiIFxuXHRcdFx0XHRcdFx0bW9kZT1cInNjYWxlVG9GaWxsXCIgXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJjaGFuZ2VNeUZhY2UoKVwiXG5cdFx0XHRcdFx0XHRzdHlsZT1cIndpZHRoOiAyMDBycHg7aGVpZ2h0OiAyMDBycHg7Ym9yZGVyLXJhZGl1czogMTAwcnB4O2JvcmRlci13aWR0aDogMXB4O2JvcmRlci1jb2xvcjogI0YxRjFGMTtcIj48L2ltYWdlPlxuXHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwibWFyZ2luLWxlZnQ6IDMwcnB4O3BhZGRpbmctdG9wOiAyMHJweDtcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAyMHB4O2NvbG9yOiAjRkZGRkZGO2ZvbnQtd2VpZ2h0OiA2MDA7XCI+e3twYWdlVXNlckluZm8ubmlja25hbWV9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwiZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogcm93O1wiPlxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImZvbnQtc2l6ZTogMTY7Y29sb3I6ICNGRkZGRkY7Zm9udC13ZWlnaHQ6IDMwMDtcIj7mipbpn7Plj7fvvJo8L3RleHQ+XG5cdFx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxNnB4O2NvbG9yOiAjRkZGRkZGO2ZvbnQtd2VpZ2h0OiAzMDA7XCI+e3twYWdlVXNlckluZm8ubnVtfX08L3RleHQ+XG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XG5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0PHRleHQgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogLTUyMHJweDtjb2xvcjogI2ZmZmZmZjtmb250LXNpemU6IDE0cHg7bWFyZ2luOiAwIDMwcnB4O1wiPnt7cGFnZVVzZXJJbmZvLmRlc2NyaXB0aW9ufX08L3RleHQ+XG5cdFx0XHQ8IS0tIDx0ZXh0IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IC01MjBycHg7Y29sb3I6ICNmZmZmZmY7Zm9udC1zaXplOiAxNHB4O21hcmdpbjogMCAzMHJweDtcIj4xMOW5tO+8i0lU5LqS6IGU572R6ICB5Y+45py644CCNeW5tOWcqOe6v+aVmeiCsue7j+mqjOOAguabvuS7u+aKgOacr+e7j+eQhuOAgemhueebrue7j+eQhuOAgeaKgOacr+aAu+ebkeOAgemDqOmXqOe7j+eQhuOAguemj+eRnuWNmuivvuWIm+Wni+S6uiZDVE/jgII8L3RleHQ+IC0tPlxuXHRcdFx0XG5cdFx0XHQ8dmlldyBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZTsgdG9wOiAtNTEwcnB4O2Rpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdztqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XCI+XG5cdFx0XHRcdDx2aWV3IHN0eWxlPVwiZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogcm93O1wiPlxuXHRcdFx0XHRcdDx2aWV3IHN0eWxlPVwibWFyZ2luLWxlZnQ6IDMwcnB4O2Rpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIiBAY2xpY2s9XCJnb015Rm9sbG93cygpXCI+XG5cdFx0XHRcdFx0XHQ8dGV4dCBzdHlsZT1cImNvbG9yOiAjZmZmZmZmO2ZvbnQtc2l6ZTogMTRweDtmb250LXdlaWdodDogYm9sZDthbGlnbi1zZWxmOiBjZW50ZXI7XCI+e3tnZXRHcmFjZU51bWJlcihwYWdlVXNlckluZm8ubXlGb2xsb3dzQ291bnRzKX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI2ZmZmZmZjtmb250LXNpemU6IDEycHg7Zm9udC13ZWlnaHQ6IDMwMDthbGlnbi1zZWxmOiBjZW50ZXI7XCI+5YWz5rOoPC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0XHQ8dmlldyBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA1MHJweDtkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCIgQGNsaWNrPVwiZ29NeUZhbnMoKVwiPlxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI2ZmZmZmZjtmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7YWxpZ24tc2VsZjogY2VudGVyO1wiPnt7Z2V0R3JhY2VOdW1iZXIocGFnZVVzZXJJbmZvLm15RmFuc0NvdW50cyl9fTwvdGV4dD5cblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiY29sb3I6ICNmZmZmZmY7Zm9udC1zaXplOiAxMnB4O2ZvbnQtd2VpZ2h0OiAzMDA7YWxpZ24tc2VsZjogY2VudGVyO1wiPueyieS4nTwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgc3R5bGU9XCJtYXJnaW4tbGVmdDogNTBycHg7ZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogY29sdW1uO2p1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI2ZmZmZmZjtmb250LXNpemU6IDE0cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7YWxpZ24tc2VsZjogY2VudGVyO1wiPnt7Z2V0R3JhY2VOdW1iZXIocGFnZVVzZXJJbmZvLnRvdGFsTGlrZU1lQ291bnRzKX19PC90ZXh0PlxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI2ZmZmZmZjtmb250LXNpemU6IDEycHg7Zm9udC13ZWlnaHQ6IDMwMDthbGlnbi1zZWxmOiBjZW50ZXI7XCI+6I636LWePC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdFx0PHZpZXcgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7bWFyZ2luLXJpZ2h0OiAzMHJweDtcIj5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8IS0tIOWIpOaWreW9k+WJjemhteaYr+WQpuaYr+iHquW3se+8jOWmguaenOaYr+iHquW3seWImeaYvuekuue8lui+kei1hOaWmeWSjOiuvue9ru+8jOWmguaenOS4jeaYr++8jOWImeaYvuekuuWFs+azqOaIluWPluWFsyAtLT5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8dmlldyBcblx0XHRcdFx0XHRcdEBjbGljaz1cImdvTXlJbmZvKClcIlxuXHRcdFx0XHRcdFx0c3R5bGU9XCJtYXJnaW4tbGVmdDogMjBycHg7Ym9yZGVyLXdpZHRoOiAxcHg7Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO3dpZHRoOiAyMDBycHg7aGVpZ2h0OiA2NnJweDtiYWNrZ3JvdW5kLWNvbG9yOiAjNTQ1NDU2O29wYWNpdHk6IDAuODtib3JkZXItcmFkaXVzOiA0MHJweDtkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24tc2VsZjogY2VudGVyO1wiPlxuXHRcdFx0XHRcdFx0PGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaWNvbi1zZXR0aW5ncy5wbmdcIiBzdHlsZT1cIndpZHRoOiAzMnJweDtoZWlnaHQ6IDMycnB4O2FsaWduLXNlbGY6IGNlbnRlcjttYXJnaW4tcmlnaHQ6OHB4O1wiPjwvaW1hZ2U+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxM3B4O2NvbG9yOiAjRkZGRkZGO2ZvbnQtd2VpZ2h0OiA1MDA7YWxpZ24tc2VsZjogY2VudGVyO1wiPuiuvue9rjwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cblx0XHRcdFx0XHRcblx0XHRcdFx0XHQ8IS0tIDx2aWV3IHYtaWY9XCIhaXNNZSAmJiBpc0ZvbGxvd1wiIFxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiY2FuY2VsRm9sbG93KClcIlxuXHRcdFx0XHRcdFx0c3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDIwcnB4O2JvcmRlci13aWR0aDogMXB4O2JvcmRlci1jb2xvcjogI0ZGRkZGRjt3aWR0aDogMjAwcnB4O2hlaWdodDogNjZycHg7YmFja2dyb3VuZC1jb2xvcjogIzU0NTQ1NjtvcGFjaXR5OiAwLjg7Ym9yZGVyLXJhZGl1czogNDBycHg7ZGlzcGxheTogZmxleDtmbGV4LWRpcmVjdGlvbjogcm93O2p1c3RpZnktY29udGVudDogY2VudGVyO2FsaWduLXNlbGY6IGNlbnRlcjtcIj5cblx0XHRcdFx0XHRcdDx0ZXh0IHN0eWxlPVwiZm9udC1zaXplOiAxM3B4O2NvbG9yOiAjRkZGRkZGO2ZvbnQtd2VpZ2h0OiA1MDA7YWxpZ24tc2VsZjogY2VudGVyO1wiPuW3suWFs+azqDwvdGV4dD5cblx0XHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdFx0PHZpZXcgdi1pZj1cIiFpc01lICYmICFpc0ZvbGxvd1wiIFxuXHRcdFx0XHRcdFx0QGNsaWNrPVwiZm9sbG93TWUoKVwiXG5cdFx0XHRcdFx0XHRzdHlsZT1cIm1hcmdpbi1yaWdodDogMjBycHg7Ym9yZGVyLXdpZHRoOiAxcHg7Ym9yZGVyLWNvbG9yOiAjRkZGRkZGO3dpZHRoOiAyMDBycHg7aGVpZ2h0OiA2NnJweDtiYWNrZ3JvdW5kLWNvbG9yOiAjZWYyNzRkO29wYWNpdHk6IDAuODtib3JkZXItcmFkaXVzOiA0MHJweDtkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7YWxpZ24tc2VsZjogY2VudGVyO1wiPlxuXHRcdFx0XHRcdFx0PHRleHQgc3R5bGU9XCJmb250LXNpemU6IDEzcHg7Y29sb3I6ICNGRkZGRkY7Zm9udC13ZWlnaHQ6IDUwMDthbGlnbi1zZWxmOiBjZW50ZXI7XCI+5YWz5rOo5oiRPC90ZXh0PlxuXHRcdFx0XHRcdDwvdmlldz4gLS0+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdDwvdmlldz5cblxuXHRcdFx0PHZpZXcgY2xhc3M9XCJ0YWItd3JhcHBlclwiPlxuXHRcdFx0XHQ8dmlldyBzdHlsZT1cIndpZHRoOiAyNTBycHg7YWxpZ24tc2VsZjogY2VudGVyO1wiIEBjbGljaz1cInN3aXRjaFRhYigwKVwiPlxuXHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwidGFiLW5vcm1hbFwiIHN0eWxlPVwiYWxpZ24tc2VsZjogY2VudGVyO1wiIDpjbGFzcz1cInsndGFiLXNlbGVjdGVkJzogY3VycmVudFRhYiA9PSAwfVwiPuS9nOWTgTwvdGV4dD5cblx0XHRcdFx0XHQ8dmlldyB2LWlmPVwiY3VycmVudFRhYiA9PSAwXCJcblx0XHRcdFx0XHRcdHN0eWxlPVwibWFyZ2luLXRvcDogNXB4O2hlaWdodDogNXJweDt3aWR0aDogMjUwcnB4O2JvcmRlci1yYWRpdXM6IDZycHg7YmFja2dyb3VuZC1jb2xvcjogI2VmMjc0ZDtcIj48L3ZpZXc+XG5cdFx0XHRcdDwvdmlldz5cblx0XHRcdFx0PHZpZXcgc3R5bGU9XCJ3aWR0aDogMjUwcnB4O2FsaWduLXNlbGY6IGNlbnRlcjtcIiBAY2xpY2s9XCJzd2l0Y2hUYWIoMSlcIj5cblx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cInRhYi1ub3JtYWxcIiBzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIiA6Y2xhc3M9XCJ7J3RhYi1zZWxlY3RlZCc6IGN1cnJlbnRUYWIgPT0gMX1cIj7np4Hlr4Y8L3RleHQ+XG5cdFx0XHRcdFx0PHZpZXcgdi1pZj1cImN1cnJlbnRUYWIgPT0gMVwiXG5cdFx0XHRcdFx0XHRzdHlsZT1cIm1hcmdpbi10b3A6IDVweDtoZWlnaHQ6IDVycHg7d2lkdGg6IDI1MHJweDtib3JkZXItcmFkaXVzOiA2cnB4O2JhY2tncm91bmQtY29sb3I6ICNlZjI3NGQ7XCI+PC92aWV3PlxuXHRcdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcdDx2aWV3IHN0eWxlPVwid2lkdGg6IDI1MHJweDthbGlnbi1zZWxmOiBjZW50ZXI7XCIgQGNsaWNrPVwic3dpdGNoVGFiKDIpXCI+XG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ0YWItbm9ybWFsXCIgc3R5bGU9XCJhbGlnbi1zZWxmOiBjZW50ZXI7XCIgOmNsYXNzPVwieyd0YWItc2VsZWN0ZWQnOiBjdXJyZW50VGFiID09IDJ9XCI+6LWe6L+HPC90ZXh0PlxuXHRcdFx0XHRcdDx2aWV3IHYtaWY9XCJjdXJyZW50VGFiID09IDJcIlxuXHRcdFx0XHRcdFx0c3R5bGU9XCJtYXJnaW4tdG9wOiA1cHg7aGVpZ2h0OiA1cnB4O3dpZHRoOiAyNTBycHg7Ym9yZGVyLXJhZGl1czogNnJweDtiYWNrZ3JvdW5kLWNvbG9yOiAjZWYyNzRkO1wiPjwvdmlldz5cblx0XHRcdFx0PC92aWV3PlxuXHRcdFx0XHRcblx0XHRcdDwvdmlldz5cblx0XHRcdFxuXHRcdFx0XHRcblx0XHRcdDx2aWV3IGNsYXNzPVwidmxvZy1saXN0XCI+XG5cdFx0XHRcdDxibG9jayB2LWZvcj1cIih2bG9nLGluZGV4KSBpbiBwdWJsaWNWbG9nTGlzdFwiIDprZXk9XCJpbmRleFwiID5cblx0XHRcdFx0XHQ8aW1hZ2UgY2xhc3M9XCJ2bG9nLWNvdmVyXCIgXG5cdFx0XHRcdFx0XHRzdHlsZT1cImFsaWduLXNlbGY6IGNlbnRlcjtcIiBcblx0XHRcdFx0XHRcdDpzcmM9XCJ2bG9nLmNvdmVyXCIgXG5cdFx0XHRcdFx0XHRAY2xpY2s9XCJnb1RvVmxvZyh2bG9nKVwiXG5cdFx0XHRcdFx0XHRtb2RlPVwiYXNwZWN0RmlsbFwiPjwvaW1hZ2U+XG5cdFx0XHRcdDwvYmxvY2s+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHRcblx0XHRcdDx2aWV3IHYtaWY9XCJwdWJsaWNWbG9nTGlzdC5sZW5ndGggPT0gMFwiIFxuXHRcdFx0XHRzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7d2lkdGg6IDc1MHJweDtoZWlnaHQ6IDMwMHJweDtkaXNwbGF5OiBmbGV4O2ZsZXgtZGlyZWN0aW9uOiByb3c7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7cG9zaXRpb246IHJlbGF0aXZlOyB0b3A6IC00ODBycHg7XCI+XG5cdFx0XHRcdDx0ZXh0IHN0eWxlPVwiY29sb3I6ICNGRkZGRkY7Zm9udC1zaXplOiAxNHB4O21hcmdpbi10b3A6IDIwMHJweDtcIj5+IOepuuepuuWmguS5nyB+PC90ZXh0PlxuXHRcdFx0PC92aWV3PlxuXHRcdFxuXHRcdFx0PHZpZXcgdi1pZj1cInB1YmxpY1Zsb2dMaXN0Lmxlbmd0aCA+IDBcIiBcblx0XHRcdFx0c3R5bGU9XCJ3aWR0aDogNzUwcnB4O2Rpc3BsYXk6IGZsZXg7ZmxleC1kaXJlY3Rpb246IHJvdztqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtwb3NpdGlvbjogcmVsYXRpdmU7IHRvcDogLTI2MHJweDtcIj5cblx0XHRcdFx0PHRleHQgc3R5bGU9XCJjb2xvcjogI0ZGRkZGRjtmb250LXNpemU6IDE0cHg7XCI+LSDlt7Lnu4/liLDlupUgLTwvdGV4dD5cblx0XHRcdDwvdmlldz5cblx0XHQ8L3Njcm9sbC12aWV3PlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHR2YXIgc3lzdGVtID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCk7XG5cdHZhciBhcHAgPSBnZXRBcHAoKTtcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR1c2VySXNMb2dpbjogZmFsc2UsXG5cdFx0XHRcdHBhZ2VVc2VySW5mbzoge30sXG5cdFx0XHRcdHVzZXJQYWdlSWQ6IFwiXCIsXG5cdFx0XHRcdGxvZ2luV29yZHM6IFwi6K+355m75b2VXCIsXG5cdFx0XHRcdFxuXHRcdFx0XHQvLyBjaGFuZ2VCaWc6IGZhbHNlLFxuXHRcdFx0XHRzY3JlZW5IZWlnaHQ6IDAsXG5cdFx0XHRcdHN0YXR1c0JhckhlaWdodDogMCxcblx0XHRcdFx0c2NyZWVuSGVpZ2h0VW5Mb2dpbjogMCxcblx0XHRcdFx0XG5cdFx0XHRcdGN1cnJlbnRUYWI6IDAsXG5cdFx0XHRcdHZsb2dMaXN0OiBnZXRBcHAoKS5nZXREZWZhdWx0VmxvZ0xpc3QoKSxcblx0XHRcdFx0aXNGb2xsb3c6IGZhbHNlLFxuXHRcdFx0XHRcblx0XHRcdFx0aXNBbmRyb2lkOiB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PSBcImFuZHJvaWRcIixcblx0XHRcdFx0XG5cdFx0XHRcdHB1YmxpY1BhZ2U6IDAsXG5cdFx0XHRcdHB1YmxpY1RvdGFsUGFnZTogMCxcblx0XHRcdFx0cHVibGljVmxvZ0xpc3Q6IFtdLFxuXHRcdFx0XHRcblx0XHRcdFx0cHJpdmF0ZVBhZ2U6IDAsXG5cdFx0XHRcdHByaXZhdGVUb3RhbFBhZ2U6IDAsXG5cdFx0XHRcdHByaXZhdGVWbG9nTGlzdDogW10sXG5cdFx0XHRcdFxuXHRcdFx0XHRsaWtlZFBhZ2U6IDAsXG5cdFx0XHRcdGxpa2VkVG90YWxQYWdlOiAwLFxuXHRcdFx0XHRsaWtlZFZsb2dMaXN0OiBbXSxcblx0XHRcdFx0bGlzdFJvdXRlVHlwZTogXCJteVB1YmxpY0xpc3RcIixcblx0XHRcdH1cblx0XHR9LFxuXHRcdG9uTG9hZCgpIHtcblx0XHRcdHRoaXMuc3RhdHVzQmFySGVpZ2h0ID0gc3lzdGVtLnN0YXR1c0JhckhlaWdodDtcblx0XHRcdHZhciBzY3JlZW5IZWlnaHQgPSBzeXN0ZW0uc2FmZUFyZWEuYm90dG9tICsgNTA7XG5cdFx0XHR0aGlzLnNjcmVlbkhlaWdodCA9IHNjcmVlbkhlaWdodDtcblx0XHRcdHZhciBzY3JlZW5IZWlnaHRVbkxvZ2luID0gc3lzdGVtLnNhZmVBcmVhLmJvdHRvbTtcblx0XHRcdHRoaXMuc2NyZWVuSGVpZ2h0VW5Mb2dpbiA9IHNjcmVlbkhlaWdodFVuTG9naW47XG5cblx0XHR9LFxuXHRcdG9uU2hvdygpIHtcblx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHR0aGlzLnVzZXJJc0xvZ2luID0gYXBwLnVzZXJJc0xvZ2luKCk7XG5cdFx0XHRcblx0XHRcdC8vIOWIpOaWreaIkeacieayoeacieeZu+W9lVxuXHRcdFx0dmFyIG15VXNlckluZm8gPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKTtcblx0XHRcdGlmIChteVVzZXJJbmZvID09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5wYWdlVXNlckluZm8gPSBteVVzZXJJbmZvO1xuXHRcdFx0dmFyIG15VXNlcklkID0gbXlVc2VySW5mby5pZDtcblx0XHRcdHZhciBzZXJ2ZXJVcmwgPSBhcHAuZ2xvYmFsRGF0YS5zZXJ2ZXJVcmw7XG5cdFx0XHQvLyDmn6Xor6LnlKjmiLfkv6Hmga9cblx0XHRcdHVuaS5yZXF1ZXN0KHtcblx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL3VzZXJJbmZvL3F1ZXJ5P3VzZXJJZD1cIiArIG15VXNlcklkLFxuXHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xuXHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRtZS5wYWdlVXNlckluZm8gPSByZXN1bHQuZGF0YS5kYXRhO1xuXHRcdFx0XHRcdFx0bWUuc2V0QmFzaWNVc2VySW5mbyhtZS5wYWdlVXNlckluZm8pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRcblx0XHRcdHRoaXMuc3dpdGNoVGFiKDApO1xuXHRcdH0sIFxuXHRcdG9uVGFiSXRlbVRhcCA6IGZ1bmN0aW9uKGUpIHtcblx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHQvLyDliKTmlq3lvZPliY3nlKjmiLfmnInmsqHmnInnmbvlvZXvvIzmnInmsqHmnIl0b2tlbu+8jOWmguaenOacie+8jOWImeWxleekuuW9k+WJjemhte+8jOWmguaenOayoeacieihqOekuuacqueZu+W9le+8jOWxleekuueZu+W9leazqOWGjOmhtVxuXHRcdFx0aWYgKCFhcHAudXNlcklzTG9naW4oKSkge1xuXHRcdFx0XHQvLyDkuLrnqbrvvIzlvLnlh7rpobXpnaJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdHVybDogXCIuLi9sb2dpblJlZ2lzdC9sb2dpblJlZ2lzdFwiLFxuXHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6IFwic2xpZGUtaW4tYm90dG9tXCIsXG5cdFx0XHRcdFx0c3VjY2VzcygpIHtcblx0XHRcdFx0XHRcdG1lLmxvZ2luV29yZHMgPSBcIuivt+eZu+W9lVwiXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0c2V0QmFzaWNVc2VySW5mbyhteVVzZXJJbmZvKSB7XG5cdFx0XHRcdHZhciB1c2VyQmdJbWcgPSBteVVzZXJJbmZvLmJnSW1nO1xuXHRcdFx0XHRpZiAoYXBwLmlzU3RyRW1wdHkobXlVc2VySW5mby5iZ0ltZykpIHtcblx0XHRcdFx0XHQvLyB1c2VyQmdJbWcgPSBcIi4uLy4uL3N0YXRpYy9mYWNlL2ZhY2UtYXJyb3ctMS5wbmdcIjtcblx0XHRcdFx0XHR1c2VyQmdJbWcgPSBcIi4uLy4uL3N0YXRpYy9pbWFnZXMvZGVmYXVsdEJnSW1nLnBuZ1wiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHRoaXMudXNlckJnSW1nID0gdXNlckJnSW1nO1xuXHRcdFx0XHRcblx0XHRcdFxuXHRcdFx0XG5cblx0XHRcdH0sXG5cdFx0XHRzd2l0Y2hUYWIoaW5kZXgpIHtcblx0XHRcdFx0dGhpcy5jdXJyZW50VGFiID0gaW5kZXg7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZihpbmRleCA9PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5wdWJsaWNQYWdlID0gMDtcblx0XHRcdFx0XHR0aGlzLnB1YmxpY1RvdGFsUGFnZSA9IDA7XG5cdFx0XHRcdFx0dGhpcy5saXN0Um91dGVUeXBlID0gXCJteVB1YmxpY0xpc3RcIjtcblx0XHRcdFx0XHR0aGlzLm15UHVibGljTGlzdCgwKTtcblx0XHRcdFx0fSBlbHNlIGlmKGluZGV4ID09IDEpIHtcblx0XHRcdFx0XHR0aGlzLnB1YmxpY1BhZ2UgPSAwO1xuXHRcdFx0XHRcdHRoaXMucHVibGljVG90YWxQYWdlID0gMDtcblx0XHRcdFx0XHR0aGlzLmxpc3RSb3V0ZVR5cGUgPSBcIm15UHJpdmF0ZUxpc3RcIjtcblx0XHRcdFx0XHR0aGlzLm15UHVibGljTGlzdCgwKTtcblx0XHRcdFx0fSBlbHNlIGlmKGluZGV4ID09IDIpIHtcblx0XHRcdFx0XHR0aGlzLnB1YmxpY1BhZ2UgPSAwO1xuXHRcdFx0XHRcdHRoaXMucHVibGljVG90YWxQYWdlID0gMDtcblx0XHRcdFx0XHR0aGlzLmxpc3RSb3V0ZVR5cGUgPSBcIm15TGlrZWRMaXN0XCI7XG5cdFx0XHRcdFx0dGhpcy5teVB1YmxpY0xpc3QoMCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRsb2FkTW9yZSgpIHtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIHZhciBjdXJyZW50VGFiID0gdGhpcy5jdXJyZW50VGFiO1xuXHRcdFx0XHQvLyBpZiAoY3VycmVudFRhYiA9PSAwKSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMucHVibGljUGFnZSA+PSB0aGlzLnB1YmxpY1RvdGFsUGFnZSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLm15UHVibGljTGlzdCh0aGlzLnB1YmxpY1BhZ2UpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcblx0XHRcdFx0Ly8gfVxuXHRcdFx0fSxcblx0XHRcdG15UHVibGljTGlzdChwdWJsaWNQYWdlKSB7XG5cdFx0XHRcdHZhciBtZSA9IHRoaXM7XG5cdFx0XHRcdGlmIChwdWJsaWNQYWdlID09IDApIHtcblx0XHRcdFx0XHRtZS5wdWJsaWNWbG9nTGlzdCA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHB1YmxpY1BhZ2UgPSBwdWJsaWNQYWdlICsgMTtcblx0XHRcdFx0bWUucHVibGljUGFnZSA9IHB1YmxpY1BhZ2U7XG5cdFx0XHRcdHZhciB1c2VySWQgPSBnZXRBcHAoKS5nZXRVc2VySW5mb1Nlc3Npb24oKS5pZDtcblx0XHRcdFx0dmFyIHNlcnZlclVybCA9IGFwcC5nbG9iYWxEYXRhLnNlcnZlclVybDtcblx0XHRcdFx0dmFyIGxpc3RSb3V0ZVR5cGUgPSBtZS5saXN0Um91dGVUeXBlO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxuXHRcdFx0XHRcdGhlYWRlcjoge1xuXHRcdFx0XHRcdFx0aGVhZGVyVXNlcklkOiB1c2VySWQsXG5cdFx0XHRcdFx0XHRoZWFkZXJVc2VyVG9rZW46IGFwcC5nZXRVc2VyU2Vzc2lvblRva2VuKClcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHVybDogc2VydmVyVXJsICsgXCIvdmxvZy9cIiArIGxpc3RSb3V0ZVR5cGUgKyBcIj91c2VySWQ9XCIgKyB1c2VySWQgKyBcIiZwYWdlPVwiICsgcHVibGljUGFnZSArIFwiJnBhZ2VTaXplPTEwXCIsXG5cdFx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR2YXIgdmxvZ0xpc3QgPSByZXN1bHQuZGF0YS5kYXRhLnJvd3M7XG5cdFx0XHRcdFx0XHRcdHZhciBwdWJsaWNUb3RhbFBhZ2UgPSByZXN1bHQuZGF0YS5kYXRhLnRvdGFsO1xuXHRcdFx0XHRcdFx0XHRtZS5wdWJsaWNWbG9nTGlzdCA9IG1lLnB1YmxpY1Zsb2dMaXN0LmNvbmNhdCh2bG9nTGlzdCk7XG5cdFx0XHRcdFx0XHRcdG1lLnB1YmxpY1BhZ2UgPSBwdWJsaWNQYWdlO1xuXHRcdFx0XHRcdFx0XHRtZS5wdWJsaWNUb3RhbFBhZ2UgPSBwdWJsaWNUb3RhbFBhZ2U7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRjYW5jZWxGb2xsb3codmxvZ2VySWQpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHZsb2dlcklkID0gbWUudXNlclBhZ2VJZDtcblx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL2ZhbnMvY2FuY2VsP215SWQ9XCIgKyB1c2VySWQgKyBcIiZ2bG9nZXJJZD1cIiArIHZsb2dlcklkLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdG1lLmlzRm9sbG93ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdHVuaS5zZXRTdG9yYWdlU3luYyhcImp1c3RDYW5jZWxWbG9nZXJJZFwiLCB2bG9nZXJJZCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogcmVzdWx0LmRhdGEubXNnLFxuXHRcdFx0XHRcdFx0XHRcdGljb246IFwibm9uZVwiLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAzMDAwXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0sXG5cdFx0XHRmb2xsb3dNZSgpIHtcblx0XHRcdFx0dmFyIG1lID0gdGhpcztcblx0XHRcdFx0dmFyIHZsb2dlcklkID0gbWUudXNlclBhZ2VJZDtcblx0XHRcdFx0dmFyIHVzZXJJZCA9IGdldEFwcCgpLmdldFVzZXJJbmZvU2Vzc2lvbigpLmlkO1xuXHRcdFx0XHR2YXIgc2VydmVyVXJsID0gYXBwLmdsb2JhbERhdGEuc2VydmVyVXJsO1xuXHRcdFx0XHR1bmkucmVxdWVzdCh7XG5cdFx0XHRcdFx0bWV0aG9kOiBcIlBPU1RcIixcblx0XHRcdFx0XHRoZWFkZXI6IHtcblx0XHRcdFx0XHRcdGhlYWRlclVzZXJJZDogdXNlcklkLFxuXHRcdFx0XHRcdFx0aGVhZGVyVXNlclRva2VuOiBhcHAuZ2V0VXNlclNlc3Npb25Ub2tlbigpXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR1cmw6IHNlcnZlclVybCArIFwiL2ZhbnMvZm9sbG93P215SWQ9XCIgKyB1c2VySWQgKyBcIiZ2bG9nZXJJZD1cIiArIHZsb2dlcklkLFxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdGlmIChyZXN1bHQuZGF0YS5zdGF0dXMgPT0gMjAwKSB7XG5cdFx0XHRcdFx0XHRcdG1lLmlzRm9sbG93ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0dW5pLnNldFN0b3JhZ2VTeW5jKFwianVzdEZvbGxvd1Zsb2dlcklkXCIsIHZsb2dlcklkKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiByZXN1bHQuZGF0YS5tc2csXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJub25lXCIsXG5cdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDMwMDBcblx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRcblx0XHRcdH0sXG5cdFx0XHRcblx0XHRcdGdvTG9naW4oKSB7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6IFwiLi4vbG9naW5SZWdpc3QvbG9naW5SZWdpc3RcIixcblx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcInNsaWRlLWluLWJvdHRvbVwiXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0Ly8g5oqK6LaF6L+HMTAwMOaIljEwMDAw55qE5pWw5a2X6LCD5pW077yM5q+U5aaCMS4zay82Ljh3XG5cdFx0XHRnZXRHcmFjZU51bWJlcihudW0pIHtcblx0XHRcdFx0cmV0dXJuIGdldEFwcCgpLmdyYWNlTnVtYmVyKG51bSk7XG5cdFx0XHR9LFxuXHRcdFx0XHRcdFx0XG5cdFx0XHRnb1RvVmxvZyh2bG9nKSB7XHJcblx0XHRcdFx0bGV0IHZsb2dJZD12bG9nLnZsb2dJZD92bG9nLnZsb2dJZDp2bG9nLmlkXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHR1cmw6IFwiLi4vdmxvZy92bG9nP3Zsb2dJZD1cIiArIHZsb2dJZFxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Y2hhbmdlTXlCZygpIHtcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6IFwiZmFkZS1pblwiLFxuXHRcdFx0XHRcdHVybDogXCJteUJhY2tJbWdcIlxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Y2hhbmdlTXlGYWNlKCkge1xuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XG5cdFx0XHRcdFx0YW5pbWF0aW9uVHlwZTogXCJmYWRlLWluXCIsXG5cdFx0XHRcdFx0dXJsOiBcIm15RmFjZVwiXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0XG5cdFx0XHRnb015SW5mbygpIHtcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6IFwiZmFkZS1pblwiLFxuXHRcdFx0XHRcdHVybDogXCJteUluZm9cIlxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0XG5cdFx0XHRnb015RmFucygpIHtcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xuXHRcdFx0XHRcdGFuaW1hdGlvblR5cGU6IFwiZmFkZS1pblwiLFxuXHRcdFx0XHRcdHVybDogXCJteUZhbnNcIlxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdFxuXHRcdFx0Z29NeUZvbGxvd3MoKSB7XG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0XHRhbmltYXRpb25UeXBlOiBcImZhZGUtaW5cIixcblx0XHRcdFx0XHR1cmw6IFwibXlGb2xsb3dzXCJcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///130\n");

/***/ }),

/***/ 131:
/*!**********************************************************************************************!*\
  !*** C:/Users/1/Desktop/dy-Dev/pages/me/me.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./me.nvue?vue&type=style&index=0&lang=css&mpType=page */ 132);
/* harmony import */ var _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_me_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 132:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/1/Desktop/dy-Dev/pages/me/me.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".page": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        0
      ],
      "left": [
        0,
        0,
        0,
        0
      ],
      "right": [
        0,
        0,
        0,
        0
      ],
      "top": [
        0,
        0,
        0,
        0
      ],
      "bottom": [
        0,
        0,
        0,
        0
      ],
      "backgroundColor": [
        "#000000",
        0,
        0,
        0
      ]
    }
  },
  ".page-write": {
    "": {
      "position": [
        "absolute",
        0,
        0,
        1
      ],
      "left": [
        0,
        0,
        0,
        1
      ],
      "right": [
        0,
        0,
        0,
        1
      ],
      "top": [
        0,
        0,
        0,
        1
      ],
      "bottom": [
        0,
        0,
        0,
        1
      ],
      "backgroundColor": [
        "#FFFFFF",
        0,
        0,
        1
      ]
    }
  },
  ".tab-wrapper": {
    "": {
      "position": [
        "relative",
        0,
        0,
        2
      ],
      "top": [
        "-480rpx",
        0,
        0,
        2
      ],
      "height": [
        "40",
        0,
        0,
        2
      ],
      "backgroundColor": [
        "#171825",
        0,
        0,
        2
      ],
      "display": [
        "flex",
        0,
        0,
        2
      ],
      "flexDirection": [
        "row",
        0,
        0,
        2
      ],
      "justifyContent": [
        "space-between",
        0,
        0,
        2
      ],
      "paddingTop": [
        "3",
        0,
        0,
        2
      ],
      "borderTopLeftRadius": [
        "12",
        0,
        0,
        2
      ],
      "borderTopRightRadius": [
        "12",
        0,
        0,
        2
      ]
    }
  },
  ".tab-normal": {
    "": {
      "fontSize": [
        "18",
        0,
        0,
        3
      ],
      "fontWeight": [
        "500",
        0,
        0,
        3
      ],
      "color": [
        "#808080",
        0,
        0,
        3
      ]
    }
  },
  ".tab-unselected": {
    "": {
      "color": [
        "#808080",
        0,
        0,
        4
      ]
    }
  },
  ".tab-selected": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        5
      ]
    }
  },
  ".vlog-list": {
    "": {
      "position": [
        "relative",
        0,
        0,
        6
      ],
      "top": [
        "-480rpx",
        0,
        0,
        6
      ],
      "display": [
        "flex",
        0,
        0,
        6
      ],
      "flexDirection": [
        "row",
        0,
        0,
        6
      ],
      "flexWrap": [
        "wrap",
        0,
        0,
        6
      ],
      "justifyContent": [
        "flex-start",
        0,
        0,
        6
      ],
      "backgroundColor": [
        "#000000",
        0,
        0,
        6
      ]
    }
  },
  ".vlog-cover": {
    "": {
      "width": [
        "248rpx",
        0,
        0,
        7
      ],
      "height": [
        "360rpx",
        0,
        0,
        7
      ],
      "borderWidth": [
        "1rpx",
        0,
        0,
        7
      ]
    }
  },
  ".login-info-wrapper": {
    "": {
      "display": [
        "flex",
        0,
        0,
        10
      ],
      "flexDirection": [
        "column",
        0,
        0,
        10
      ],
      "justifyContent": [
        "center",
        0,
        0,
        10
      ]
    }
  },
  ".login-info": {
    "": {
      "color": [
        "#FFFFFF",
        0,
        0,
        11
      ],
      "fontSize": [
        "36rpx",
        0,
        0,
        11
      ],
      "fontWeight": [
        "600",
        0,
        0,
        11
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),

/***/ 2:
/*!*************************************************************************!*\
  !*** C:/Users/1/Desktop/dy-Dev/App.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_1_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_0_2_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_0_3_D_dream_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 3:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-1!./node_modules/postcss-loader/src??ref--10-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/1/Desktop/dy-Dev/App.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".activate-line": {
    "": {
      "backgroundColor": [
        "#FFFFFF",
        0,
        0,
        1
      ]
    }
  },
  "@VERSION": 2
}

/***/ }),

/***/ 4:
/*!*******************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/lib/uni-polyfill.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(function (value) {
      return promise.resolve(callback()).then(function () {
        return value;
      });
    }, function (reason) {
      return promise.resolve(callback()).then(function () {
        throw reason;
      });
    });
  };
}
if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  var global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}

/***/ })

/******/ });