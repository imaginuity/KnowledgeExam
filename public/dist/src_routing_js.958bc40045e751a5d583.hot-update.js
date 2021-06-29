/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateKnowledge_Exam"]("src_routing_js",{

/***/ "./src/components/Blog/Post.js":
/*!*************************************!*\
  !*** ./src/components/Blog/Post.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_components_UI_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/UI/Card */ \"./src/components/UI/Card.js\");\n\n\n\n\n\n\nvar Post = function Post(_ref) {\n  var match = _ref.match;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      post = _useState2[0],\n      setPost = _useState2[1];\n\n  var blogImage = \"http://placeimg.com/640/360/any\";\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    fetchPost();\n  }, []);\n\n  var fetchPost = function fetchPost() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/posts/?id=1\").then(function (res) {\n      console.log(res.data);\n      setPost(res.data);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, post.map(function (post) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"col\",\n      key: post.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(src_components_UI_Card__WEBPACK_IMPORTED_MODULE_3__.default, {\n      className: \"card-body\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n      src: blogImage,\n      className: \"card-img-top\",\n      alt: post.title\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h5\", {\n      className: \"card-title pt-3 text-capitalize\"\n    }, post.title, \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n      className: \"card-text text-secondary\"\n    }, post.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n      className: \"btn btn-dark\",\n      to: \"/posts\"\n    }, \"Back to Posts\")));\n  }));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/components/Blog/Post.js?");

/***/ })

});