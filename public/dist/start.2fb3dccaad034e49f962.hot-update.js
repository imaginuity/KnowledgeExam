/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateKnowledge_Exam"](
  "start",
  {
    /***/ "./src/partials/footer/index.js":
      /*!**************************************!*\
  !*** ./src/partials/footer/index.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\n\nvar Start = function Start(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadFooter, null);\n};\n\nvar LoadFooter = function LoadFooter(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {\n    className: "text-muted py-5"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "container"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {\n    className: "float-end mb-1"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n    href: "#"\n  }, "Back to top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {\n    className: "mb-1"\n  }, "Copyright \\xA9 ", new Date().getFullYear(), " Pylot. All Rights Reserved."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {\n    className: "mb-0"\n  }, "New to Pylot? ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n    href: "/"\n  }, "Visit the homepage"), " or read our", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {\n    href: "#"\n  }, "getting started guide"), "."))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Start);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/partials/footer/index.js?'
        );

        /***/
      },

    /***/ "./src/partials/header/index.js":
      /*!**************************************!*\
  !*** ./src/partials/header/index.js ***!
  \**************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\n\nvar Start = function Start(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadHeader, null);\n};\n\nvar LoadHeader = function LoadHeader(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Start);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/partials/header/index.js?'
        );

        /***/
      },

    /***/ "./src/partials/loading/index.js":
      /*!***************************************!*\
  !*** ./src/partials/loading/index.js ***!
  \***************************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var cssonly_loaders_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cssonly-loaders-react */ "./node_modules/cssonly-loaders-react/build/index.js");\n/* harmony import */ var cssonly_loaders_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cssonly_loaders_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_partials_loading_index_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/partials/loading/index.scss */ "./src/partials/loading/index.scss");\n\n // SCSS, CSS.\n\n\n\nvar Start = function Start(props) {\n  switch (props.type) {\n    case "loading-start":\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingStart, null);\n\n    case "loading-text":\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingText, {\n        text: props.text\n      });\n\n    case "loading-page":\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingPage, null);\n\n    case "loading-module-page":\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingModule, null);\n\n    case "gradient":\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Gradient, {\n        props: props\n      });\n\n    case "loading-block":\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadingBlock, {\n        props: props\n      });\n\n    case "redirect":\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(LoadRedirect, {\n        props: props\n      });\n\n    case "nothing":\n    default:\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Nothing, null);\n  }\n};\n\nvar LoadingStart = function LoadingStart() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    id: "loading",\n    className: "loading-start"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "loader quantum-spinner"\n  }));\n};\n\nvar LoadingPage = function LoadingPage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    id: "loading",\n    className: "loading-page"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "title"\n  }, "PYLOT"));\n};\n\nvar LoadingText = function LoadingText(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    id: "loading",\n    className: "loading-text"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    className: "title"\n  }, props.text));\n};\n\nvar LoadingModule = function LoadingModule() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    id: "loading",\n    className: "loading-module-page"\n  }, "LOADING...");\n};\n\nvar Gradient = function Gradient(props) {\n  var styles = {\n    padding: props.height ? "".concat(props.height / 2, "px 0px") : "100px 0px"\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    id: "loading",\n    className: "gradient",\n    style: styles\n  }, "LOADING");\n};\n\nvar LoadingBlock = function LoadingBlock(props) {\n  var styles = {\n    height: props.height ? props.height : "200px"\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    id: "loading",\n    className: "loading-block"\n  }, "LOADING");\n};\n\nvar LoadRedirect = function LoadRedirect() {\n  var styles = {\n    padding: "100px 50px",\n    textAlign: "center"\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n    id: "loading",\n    style: styles\n  }, "Redirecting...");\n};\n\nvar Nothing = function Nothing() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Start);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/partials/loading/index.js?'
        );

        /***/
      },

    /***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/source-map-loader/dist/cjs.js!./src/partials/loading/index.scss":
      /*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/source-map-loader/dist/cjs.js!./src/partials/loading/index.scss ***!
  \*******************************************************************************************************************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, "#loading {\\n  text-align: center; }\\n  #loading.loading-start {\\n    margin: 200px auto;\\n    width: 70px; }\\n  #loading.loading-circle {\\n    border: 16px solid #f3f3f3;\\n    border-radius: 50%;\\n    border-top: 16px solid #3498db;\\n    width: 100px;\\n    height: 100px;\\n    -webkit-animation: spin 2s linear infinite;\\n    /* Safari */\\n    animation: spin 2s linear infinite; }\\n  #loading.loading-page {\\n    margin: 200px auto;\\n    -webkit-animation: lines 2s linear infinite;\\n    animation: lines 1s linear infinite;\\n    opacity: 0.5; }\\n    #loading.loading-page.beat-white {\\n      animation: beat-white 2s linear infinite; }\\n    #loading.loading-page .title {\\n      font-family: \\"Oswald\\", sans-serif;\\n      font-size: 60px;\\n      text-align: center;\\n      text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);\\n      letter-spacing: 3px; }\\n  #loading.loading-text {\\n    margin: 200px auto;\\n    -webkit-animation: lines 2s linear infinite;\\n    animation: lines 1s linear infinite;\\n    opacity: 0.5; }\\n    #loading.loading-text .title {\\n      font-size: 40px;\\n      text-align: center;\\n      text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);\\n      letter-spacing: 3px; }\\n  #loading.loading-block {\\n    margin: 0px auto 30px;\\n    padding: 40px 20px;\\n    -webkit-animation: waves 2s linear infinite;\\n    animation: waves 2s linear infinite;\\n    opacity: 0.2;\\n    font-family: \\"Verdana\\" !important;\\n    font-size: 30px;\\n    text-align: center;\\n    color: white; }\\n  #loading.gradient {\\n    background: linear-gradient(270deg, rgba(200, 200, 150, 0.1), rgba(100, 100, 100, 0.1), rgba(200, 200, 200, 0.1), rgba(100, 100, 100, 0.1), rgba(200, 200, 150, 0.1));\\n    background-size: 400% 400%;\\n    animation: GradientBackground 2s ease infinite;\\n    border-radius: 10px;\\n    font-family: \\"Verdana\\" !important;\\n    font-size: 30px;\\n    text-align: center;\\n    color: white;\\n    opacity: 0.2; }\\n\\n/* Safari */\\n@-webkit-keyframes spin {\\n  0% {\\n    -webkit-transform: rotate(0deg); }\\n  100% {\\n    -webkit-transform: rotate(360deg); } }\\n\\n@keyframes spin {\\n  0% {\\n    transform: rotate(0deg); }\\n  100% {\\n    transform: rotate(360deg); } }\\n\\n/* Safari */\\n@-webkit-keyframes lines {\\n  0% {\\n    color: red; }\\n  50% {\\n    color: blue; }\\n  100% {\\n    color: red; } }\\n\\n@keyframes lines {\\n  0% {\\n    color: red; }\\n  50% {\\n    color: blue; }\\n  100% {\\n    color: red; } }\\n\\n@-webkit-keyframes beat-white {\\n  0% {\\n    color: white; }\\n  50% {\\n    color: red; }\\n  100% {\\n    color: white; } }\\n\\n@keyframes beat-white {\\n  0% {\\n    color: white; }\\n  50% {\\n    color: red; }\\n  100% {\\n    color: white; } }\\n\\n/* Safari */\\n@-webkit-keyframes waves {\\n  0% {\\n    background-color: transparent; }\\n  50% {\\n    background-color: DodgerBlue; }\\n  100% {\\n    background-color: transparent; } }\\n\\n@keyframes waves {\\n  0% {\\n    background-color: transparent; }\\n  50% {\\n    background-color: DodgerBlue; }\\n  100% {\\n    background-color: transparent; } }\\n\\n@-webkit-keyframes GradientBackground {\\n  0% {\\n    background-position: 0% 50%; }\\n  50% {\\n    background-position: 100% 50%; }\\n  100% {\\n    background-position: 0% 50%; } }\\n\\n@-moz-keyframes GradientBackground {\\n  0% {\\n    background-position: 0% 50%; }\\n  50% {\\n    background-position: 100% 50%; }\\n  100% {\\n    background-position: 0% 50%; } }\\n\\n@keyframes GradientBackground {\\n  0% {\\n    background-position: 0% 50%; }\\n  50% {\\n    background-position: 100% 50%; }\\n  100% {\\n    background-position: 0% 50%; } }\\n", ""]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://Knowledge-Exam/./src/partials/loading/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/source-map-loader/dist/cjs.js'
        );

        /***/
      },
  },
  /******/ function (__webpack_require__) {
    // webpackRuntimeModules
    /******/ "use strict";
    /******/
    /******/ /* webpack/runtime/get javascript chunk filename */
    /******/ (() => {
      /******/ // This function allow to reference async chunks
      /******/ __webpack_require__.u = (chunkId) => {
        /******/ // return url for filenames based on template
        /******/ return (
          "" +
          {
            "vendors-node_modules_react-router-dom_esm_react-router-dom_js":
              "a2165c04e6ba9f801fe0",
            src_routing_js: "64d6d686aa0a52190c7e",
          }[chunkId] +
          ".js"
        );
        /******/
      };
      /******/
    })();
    /******/
    /******/ /* webpack/runtime/getFullHash */
    /******/ (() => {
      /******/ __webpack_require__.h = () => "870f2fe061e1d6e1af2f";
      /******/
    })();
    /******/
    /******/
  }
);
