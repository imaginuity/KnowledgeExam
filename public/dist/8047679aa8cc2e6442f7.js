/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkKnowledge_Exam"] = self["webpackChunkKnowledge_Exam"] || []).push([["src_routing_js"],{

/***/ "./src/components/Blog/Post.js":
/*!*************************************!*\
  !*** ./src/components/Blog/Post.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var src_components_UI_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/UI/Card */ \"./src/components/UI/Card.js\");\n\n\n\n\n\n\nvar Post = function Post(_ref) {\n  var match = _ref.match;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      post = _useState2[0],\n      setPost = _useState2[1];\n\n  var blogImage = \"http://placeimg.com/640/360/any\";\n\n  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useParams)(),\n      id = _useParams.id;\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    fetchPost();\n  }, []);\n\n  var fetchPost = function fetchPost() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/posts/?id=\".concat(id)).then(function (res) {\n      setPost(res.data);\n    })[\"catch\"](function (err) {\n      return console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"container py-4\"\n  }, post.map(function (post) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"col\",\n      key: post.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(src_components_UI_Card__WEBPACK_IMPORTED_MODULE_3__.default, {\n      className: \"card-body\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n      src: blogImage,\n      className: \"card-img-top\",\n      alt: post.title\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h5\", {\n      className: \"card-title pt-3 text-capitalize\"\n    }, post.title, \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n      className: \"card-text text-secondary\"\n    }, post.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link, {\n      className: \"btn btn-dark\",\n      to: \"/posts\"\n    }, \"Back to Posts\")));\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/components/Blog/Post.js?");

/***/ }),

/***/ "./src/components/Blog/Posts.js":
/*!**************************************!*\
  !*** ./src/components/Blog/Posts.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _UI_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Card */ \"./src/components/UI/Card.js\");\n\n\n\n\n\n\nvar Posts = function Posts(props) {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),\n      posts = _useState2[0],\n      setPosts = _useState2[1];\n\n  var blogImage = \"http://placeimg.com/640/360/any\";\n  var MAX_LENGTH = 40;\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    fetchPosts();\n  }, []);\n\n  var fetchPosts = function fetchPosts() {\n    axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://jsonplaceholder.typicode.com/posts\").then(function (res) {\n      setPosts(res.data);\n    })[\"catch\"](function (err) {\n      console.log(err);\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"row row-cols-1 row-cols-md-3 g-4\"\n  }, posts.map(function (post) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n      className: \"col\",\n      key: post.id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_UI_Card__WEBPACK_IMPORTED_MODULE_3__.default, {\n      className: \"card-body\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"img\", {\n      src: blogImage,\n      className: \"card-img-top\",\n      alt: post.title\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h5\", {\n      className: \"card-title pt-3 text-capitalize\"\n    }, post.title, \" \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n      className: \"card-text text-secondary\"\n    }, \"\".concat(post.body.substring(0, MAX_LENGTH), \"...\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n      className: \"btn btn-dark\",\n      to: \"/posts/\".concat(post.id)\n    }, \"Read More\")));\n  })));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Posts);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/components/Blog/Posts.js?");

/***/ }),

/***/ "./src/components/UI/Card.js":
/*!***********************************!*\
  !*** ./src/components/UI/Card.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar Card = function Card(props) {\n  var classes = \"card h-100 \" + props.className;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"card-group\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: classes\n  }, props.children)));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/components/UI/Card.js?");

/***/ }),

/***/ "./src/components/UI/Nav.js":
/*!**********************************!*\
  !*** ./src/components/UI/Nav.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n\n\n\nvar Nav = function Nav() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", {\n    className: \"navbar navbar-expand-lg navbar-dark bg-dark\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    className: \"navbar-brand\",\n    href: \"/\"\n  }, \"Pylot\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"ul\", {\n    className: \"navbar-nav\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    className: \"nav-link\",\n    to: \"/\"\n  }, \"Home\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    className: \"nav-link\",\n    to: \"/about\"\n  }, \"About\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    className: \"nav-link\",\n    to: \"/posts\"\n  }, \"Posts\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"li\", {\n    className: \"nav-item\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {\n    className: \"nav-link\",\n    to: \"/contact\"\n  }, \"Contact\"))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/components/UI/Nav.js?");

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar About = function About() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    className: \"py-4\"\n  }, \"About Page\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/pages/about.js?");

/***/ }),

/***/ "./src/pages/blog.js":
/*!***************************!*\
  !*** ./src/pages/blog.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _components_Blog_Posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Blog/Posts */ \"./src/components/Blog/Posts.js\");\n\n\n\nvar Blog = function Blog() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    className: \"py-4\"\n  }, \"Posts\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"blog\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Blog_Posts__WEBPACK_IMPORTED_MODULE_1__.default, null))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/pages/blog.js?");

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nvar Contact = function Contact() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    className: \"py-4\"\n  }, \"Contact Page\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/pages/contact.js?");

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ (() => {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/macbookpro/Documents/GitHub/KnowledgeExam/src/pages/home.js: Expected corresponding JSX closing tag for <div>. (39:16)\\n\\n\\u001b[0m \\u001b[90m 37 |\\u001b[39m                     \\u001b[33mThumbnail\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 38 |\\u001b[39m                   \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33mtext\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 39 |\\u001b[39m                 \\u001b[33m<\\u001b[39m\\u001b[33m/\\u001b[39m\\u001b[33msvg\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m                 \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 40 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 41 |\\u001b[39m                 \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"card-body\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 42 |\\u001b[39m                   \\u001b[33m<\\u001b[39m\\u001b[33mp\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"card-text\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n    at Object._raise (/Users/macbookpro/Documents/GitHub/KnowledgeExam/node_modules/@babel/parser/lib/index.js:816:17)\\n    at Object.raiseWithData (/Users/macbookpro/Documents/GitHub/KnowledgeExam/node_modules/@babel/parser/lib/index.js:809:17)\\n    at Object.raise (/Users/macbookpro/Documents/GitHub/KnowledgeExam/node_modules/@babel/parser/lib/index.js:770:17)\\n    at Object.jsxParseElementAt (/Users/macbookpro/Documents/GitHub/KnowledgeExam/node_modules/@babel/parser/lib/index.js:5203:16)\\n    at Object.jsxParseElementAt (/Users/macbookpro/Documents/GitHub/KnowledgeExam/node_modules/@babel/parser/lib/index.js:5171:32)\\n    at Object.jsxParseElementAt (/Users/macbookpro/Documents/GitHub/KnowledgeExam/node_modules/@babel/parser/lib/index.js:5171:32)\\n    at Object.jsxParseElementAt (/Users/macbookpro/Documents/GitHub/KnowledgeExam/node_modules/@babel/parser/lib/index.js:5171:32)\\n    at Object.jsxParseElementAt (/Users/macbookpro/Documents/GitHub/KnowledgeExam/node_modules/@babel/parser/lib/index.js:5171:32)\\n    at Object.jsxParseElementAt (/Users/macbookpro/Documents/GitHub/KnowledgeExam/node_modules/@babel/parser/lib/index.js:5171:32)\\n    at Object.jsxParseElement (/Users/macbookpro/Documents/GitHub/KnowledgeExam/node_modules/@babel/parser/lib/index.js:5229:17)\");\n\n//# sourceURL=webpack://Knowledge-Exam/./src/pages/home.js?");

/***/ }),

/***/ "./src/routing.js":
/*!************************!*\
  !*** ./src/routing.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home */ \"./src/pages/home.js\");\n/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/about */ \"./src/pages/about.js\");\n/* harmony import */ var _pages_blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/blog */ \"./src/pages/blog.js\");\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact */ \"./src/pages/contact.js\");\n/* harmony import */ var _components_UI_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/UI/Nav */ \"./src/components/UI/Nav.js\");\n/* harmony import */ var _components_Blog_Post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Blog/Post */ \"./src/components/Blog/Post.js\");\n\n\n\n\n\n\n\n\n\nvar Start = function Start(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null)\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_UI_Nav__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    path: \"/posts/:id\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Blog_Post__WEBPACK_IMPORTED_MODULE_6__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    path: \"/posts\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_blog__WEBPACK_IMPORTED_MODULE_3__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    path: \"/about\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_about__WEBPACK_IMPORTED_MODULE_2__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    path: \"/contact\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_contact__WEBPACK_IMPORTED_MODULE_4__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {\n    exact: true,\n    path: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_pages_home__WEBPACK_IMPORTED_MODULE_1__.default, null))))));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Start);\n\n//# sourceURL=webpack://Knowledge-Exam/./src/routing.js?");

/***/ })

}]);