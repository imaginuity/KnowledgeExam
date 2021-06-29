/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateKnowledge_Exam"]("start",{

/***/ "./src/start.js":
/*!**********************!*\
  !*** ./src/start.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _src_partials_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/partials/loading */ \"./src/partials/loading/index.js\");\n/* harmony import */ var src_helmet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/helmet */ \"./src/helmet.js\");\n/* harmony import */ var src_partials_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/partials/header */ \"./src/partials/header/index.js\");\n/* harmony import */ var src_partials_footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/partials/footer */ \"./src/partials/footer/index.js\");\n/* harmony import */ var _scss_body_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scss/body.scss */ \"./src/scss/body.scss\");\n/* harmony import */ var _src_main_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/main.scss */ \"./src/main.scss\");\n\n\n\n\n\n\n\nvar Routing = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.lazy(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(\"vendors-node_modules_axios_index_js-node_modules_react-router-dom_esm_react-router-dom_js\"), __webpack_require__.e(\"src_routing_js\")]).then(__webpack_require__.bind(__webpack_require__, /*! ./routing */ \"./src/routing.js\"));\n});\n\n\n\nvar Start = function Start(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Prepare, null);\n};\n\nvar Prepare = function Prepare(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    setLoading(false);\n  }, []);\n\n  if (loading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_src_partials_loading__WEBPACK_IMPORTED_MODULE_3__.default, {\n      type: \"loading-start\"\n    });\n  } else {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Customizations, null);\n  }\n};\n\nvar Customizations = function Customizations(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"main\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(src_helmet__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(src_partials_header__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Routing, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(src_partials_footer__WEBPACK_IMPORTED_MODULE_6__.default, null)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Start);\ndocument.addEventListener(\"DOMContentLoaded\", function (e) {\n  var LoadScripts = function LoadScripts() {\n    return new Promise(function (resolve, reject) {\n      window.onload = function () {\n        return resolve(true);\n      };\n    });\n  };\n\n  LoadScripts().then(function (result) {\n    var node = document.createElement(\"react\");\n    node.setAttribute(\"id\", \"react\");\n    document.getElementsByTagName(\"body\")[0].appendChild(node);\n    react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Start, null), document.getElementById(\"react\"));\n  })[\"catch\"](function (error) {\n    return console.log(error);\n  });\n});\n\n//# sourceURL=webpack://Knowledge-Exam/./src/start.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("0cf35546146c6a85fbe5")
/******/ })();
/******/ 
/******/ }
);