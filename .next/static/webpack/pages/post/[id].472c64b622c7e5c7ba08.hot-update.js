/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[id]",{

/***/ "./src/pages/post/[id].tsx":
/*!*********************************!*\
  !*** ./src/pages/post/[id].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _home_ian_Public_ian038_PersonalWorkspace_blogr_ian_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _home_ian_Public_ian038_PersonalWorkspace_blogr_ian_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_ian_Public_ian038_PersonalWorkspace_blogr_ian_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _home_ian_Public_ian038_PersonalWorkspace_blogr_ian_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _home_ian_Public_ian038_PersonalWorkspace_blogr_ian_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/src/react-markdown.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next-auth/client */ \"./node_modules/next-auth/dist/client/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _jsxFileName = \"/home/ian/Public/ian038/PersonalWorkspace/blogr-ian/src/pages/post/[id].tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction publishPost(_x) {\n  return _publishPost.apply(this, arguments);\n}\n\nfunction _publishPost() {\n  _publishPost = (0,_home_ian_Public_ian038_PersonalWorkspace_blogr_ian_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/_home_ian_Public_ian038_PersonalWorkspace_blogr_ian_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n    return _home_ian_Public_ian038_PersonalWorkspace_blogr_ian_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return axios__WEBPACK_IMPORTED_MODULE_8___default()({\n              method: 'PUT',\n              url: \"http://localhost:3000/api/publish/\".concat(id)\n            });\n\n          case 2:\n            _context.next = 4;\n            return next_router__WEBPACK_IMPORTED_MODULE_9___default().push('/');\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _publishPost.apply(this, arguments);\n}\n\nvar Post = function Post(props) {\n  _s();\n\n  var _session$user, _props$author, _props$author2;\n\n  var _useSession = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_10__.useSession)(),\n      _useSession2 = (0,_home_ian_Public_ian038_PersonalWorkspace_blogr_ian_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__.default)(_useSession, 2),\n      session = _useSession2[0],\n      loading = _useSession2[1];\n\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      children: \"Authenticating...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 12\n    }, _this);\n  }\n\n  var userHasValidSession = Boolean(session);\n  var postBelongsToUser = (session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.email) === ((_props$author = props.author) === null || _props$author === void 0 ? void 0 : _props$author.email);\n  var title = props.title;\n\n  if (!props.published) {\n    title = \"\".concat(title, \" (Draft)\");\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_7__.default, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"jsx-1249326083\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n        className: \"jsx-1249326083\",\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        className: \"jsx-1249326083\",\n        children: [\"By \", (props === null || props === void 0 ? void 0 : (_props$author2 = props.author) === null || _props$author2 === void 0 ? void 0 : _props$author2.name) || \"Unknown author\"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react_markdown__WEBPACK_IMPORTED_MODULE_6___default()), {\n        children: props.content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, _this), !props.published && userHasValidSession && postBelongsToUser && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return publishPost(props.id);\n        },\n        className: \"jsx-1249326083\",\n        children: \"Publish\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default()), {\n      id: \"1249326083\",\n      children: \".page.jsx-1249326083{background:white;padding:2rem;}.actions.jsx-1249326083{margin-top:2rem;}button.jsx-1249326083{background:#ececec;border:0;border-radius:0.125rem;padding:1rem 2rem;}button.jsx-1249326083+button.jsx-1249326083{margin-left:1rem;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lhbi9QdWJsaWMvaWFuMDM4L1BlcnNvbmFsV29ya3NwYWNlL2Jsb2dyLWlhbi9zcmMvcGFnZXMvcG9zdC9baWRdLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RGtCLEFBRzRCLEFBSUQsQUFHRyxBQU1GLGdCQVJuQixDQUplLEFBYWYsRUFOVyxTQUNjLEVBUHpCLHFCQVFvQixrQkFDcEIiLCJmaWxlIjoiL2hvbWUvaWFuL1B1YmxpYy9pYW4wMzgvUGVyc29uYWxXb3Jrc3BhY2UvYmxvZ3ItaWFuL3NyYy9wYWdlcy9wb3N0L1tpZF0udHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IHsgUG9zdFByb3BzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdFwiXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL2xpYi9wcmlzbWEnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6IE51bWJlcihwYXJhbXM/LmlkKSB8fCAtMVxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIHNlbGVjdDogeyBuYW1lOiB0cnVlLCBlbWFpbDogdHJ1ZSB9XG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiBwb3N0LFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2hQb3N0KGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgYXhpb3Moe1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wdWJsaXNoLyR7aWR9YFxuICB9KVxuICBhd2FpdCBSb3V0ZXIucHVzaCgnLycpXG59XG5cbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPFBvc3RQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpXG4gIGlmKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5BdXRoZW50aWNhdGluZy4uLjwvZGl2PlxuICB9XG4gIGNvbnN0IHVzZXJIYXNWYWxpZFNlc3Npb24gPSBCb29sZWFuKHNlc3Npb24pXG4gIGNvbnN0IHBvc3RCZWxvbmdzVG9Vc2VyID0gc2Vzc2lvbj8udXNlcj8uZW1haWwgPT09IHByb3BzLmF1dGhvcj8uZW1haWxcbiAgbGV0IHRpdGxlID0gcHJvcHMudGl0bGVcbiAgaWYgKCFwcm9wcy5wdWJsaXNoZWQpIHtcbiAgICB0aXRsZSA9IGAke3RpdGxlfSAoRHJhZnQpYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8cD5CeSB7cHJvcHM/LmF1dGhvcj8ubmFtZSB8fCBcIlVua25vd24gYXV0aG9yXCJ9PC9wPlxuICAgICAgICA8UmVhY3RNYXJrZG93bj57cHJvcHMuY29udGVudH08L1JlYWN0TWFya2Rvd24+XG4gICAgICAgIHshcHJvcHMucHVibGlzaGVkICYmIHVzZXJIYXNWYWxpZFNlc3Npb24gJiYgcG9zdEJlbG9uZ3NUb1VzZXIgJiYgKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHVibGlzaFBvc3QocHJvcHMuaWQpfT5QdWJsaXNoPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uICsgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXX0= */\\n/*@ sourceURL=/home/ian/Public/ian038/PersonalWorkspace/blogr-ian/src/pages/post/[id].tsx */\"\n    }, void 0, false, void 0, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 48,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Post, \"btnbnkOsPYI0mLfZro/2DT47AuA=\", false, function () {\n  return [next_auth_client__WEBPACK_IMPORTED_MODULE_10__.useSession];\n});\n\n_c = Post;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\n\nvar _c;\n\n$RefreshReg$(_c, \"Post\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Bvc3QvW2lkXS50c3g/ZWQzMyJdLCJuYW1lcyI6WyJwdWJsaXNoUG9zdCIsImlkIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJSb3V0ZXIiLCJQb3N0IiwicHJvcHMiLCJ1c2VTZXNzaW9uIiwic2Vzc2lvbiIsImxvYWRpbmciLCJ1c2VySGFzVmFsaWRTZXNzaW9uIiwiQm9vbGVhbiIsInBvc3RCZWxvbmdzVG9Vc2VyIiwidXNlciIsImVtYWlsIiwiYXV0aG9yIiwidGl0bGUiLCJwdWJsaXNoZWQiLCJuYW1lIiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztTQWtCZUEsVzs7Ozs7MlRBQWYsaUJBQTJCQyxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDUUMsNENBQUssQ0FBQztBQUNWQyxvQkFBTSxFQUFFLEtBREU7QUFFVkMsaUJBQUcsOENBQXVDSCxFQUF2QztBQUZPLGFBQUQsQ0FEYjs7QUFBQTtBQUFBO0FBQUEsbUJBS1FJLHVEQUFBLENBQVksR0FBWixDQUxSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFRQSxJQUFNQyxJQUF5QixHQUFHLFNBQTVCQSxJQUE0QixDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQTs7QUFBQSxvQkFDaEJDLDZEQUFVLEVBRE07QUFBQTtBQUFBLE1BQ3BDQyxPQURvQztBQUFBLE1BQzNCQyxPQUQyQjs7QUFFM0MsTUFBR0EsT0FBSCxFQUFZO0FBQ1Ysd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUNELE1BQU1DLG1CQUFtQixHQUFHQyxPQUFPLENBQUNILE9BQUQsQ0FBbkM7QUFDQSxNQUFNSSxpQkFBaUIsR0FBRyxDQUFBSixPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLDZCQUFBQSxPQUFPLENBQUVLLElBQVQsZ0VBQWVDLEtBQWYsd0JBQXlCUixLQUFLLENBQUNTLE1BQS9CLGtEQUF5QixjQUFjRCxLQUF2QyxDQUExQjtBQUNBLE1BQUlFLEtBQUssR0FBR1YsS0FBSyxDQUFDVSxLQUFsQjs7QUFDQSxNQUFJLENBQUNWLEtBQUssQ0FBQ1csU0FBWCxFQUFzQjtBQUNwQkQsU0FBSyxhQUFNQSxLQUFOLGFBQUw7QUFDRDs7QUFFRCxzQkFDRSw4REFBQyx1REFBRDtBQUFBLDRCQUNFO0FBQUE7QUFBQSw4QkFDRTtBQUFBO0FBQUEsa0JBQUtBO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBQTtBQUFBLDBCQUFPLENBQUFWLEtBQUssU0FBTCxJQUFBQSxLQUFLLFdBQUwsOEJBQUFBLEtBQUssQ0FBRVMsTUFBUCxrRUFBZUcsSUFBZixLQUF1QixnQkFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSw4REFBQyx1REFBRDtBQUFBLGtCQUFnQlosS0FBSyxDQUFDYTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEYsRUFJRyxDQUFDYixLQUFLLENBQUNXLFNBQVAsSUFBb0JQLG1CQUFwQixJQUEyQ0UsaUJBQTNDLGlCQUNDO0FBQVEsZUFBTyxFQUFFO0FBQUEsaUJBQU1iLFdBQVcsQ0FBQ08sS0FBSyxDQUFDTixFQUFQLENBQWpCO0FBQUEsU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBMUNEOztHQUFNSyxJO1VBQ3VCRSx5RDs7O0tBRHZCRixJOztBQTRDTiwrREFBZUEsSUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy9wb3N0L1tpZF0udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tIFwibmV4dFwiXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tIFwicmVhY3QtbWFya2Rvd25cIlxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIlxuaW1wb3J0IHsgUG9zdFByb3BzIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUG9zdFwiXG5pbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL2xpYi9wcmlzbWEnXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL2NsaWVudFwiXG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHBhcmFtcyB9KSA9PiB7XG4gIGNvbnN0IHBvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC5maW5kVW5pcXVlKHtcbiAgICB3aGVyZToge1xuICAgICAgaWQ6IE51bWJlcihwYXJhbXM/LmlkKSB8fCAtMVxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgYXV0aG9yOiB7XG4gICAgICAgIHNlbGVjdDogeyBuYW1lOiB0cnVlLCBlbWFpbDogdHJ1ZSB9XG4gICAgICB9XG4gICAgfVxuICB9KVxuICByZXR1cm4ge1xuICAgIHByb3BzOiBwb3N0LFxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2hQb3N0KGlkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgYXdhaXQgYXhpb3Moe1xuICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9wdWJsaXNoLyR7aWR9YFxuICB9KVxuICBhd2FpdCBSb3V0ZXIucHVzaCgnLycpXG59XG5cbmNvbnN0IFBvc3Q6IFJlYWN0LkZDPFBvc3RQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3Nlc3Npb24sIGxvYWRpbmddID0gdXNlU2Vzc2lvbigpXG4gIGlmKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPGRpdj5BdXRoZW50aWNhdGluZy4uLjwvZGl2PlxuICB9XG4gIGNvbnN0IHVzZXJIYXNWYWxpZFNlc3Npb24gPSBCb29sZWFuKHNlc3Npb24pXG4gIGNvbnN0IHBvc3RCZWxvbmdzVG9Vc2VyID0gc2Vzc2lvbj8udXNlcj8uZW1haWwgPT09IHByb3BzLmF1dGhvcj8uZW1haWxcbiAgbGV0IHRpdGxlID0gcHJvcHMudGl0bGVcbiAgaWYgKCFwcm9wcy5wdWJsaXNoZWQpIHtcbiAgICB0aXRsZSA9IGAke3RpdGxlfSAoRHJhZnQpYFxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxuICAgICAgICA8cD5CeSB7cHJvcHM/LmF1dGhvcj8ubmFtZSB8fCBcIlVua25vd24gYXV0aG9yXCJ9PC9wPlxuICAgICAgICA8UmVhY3RNYXJrZG93bj57cHJvcHMuY29udGVudH08L1JlYWN0TWFya2Rvd24+XG4gICAgICAgIHshcHJvcHMucHVibGlzaGVkICYmIHVzZXJIYXNWYWxpZFNlc3Npb24gJiYgcG9zdEJlbG9uZ3NUb1VzZXIgJiYgKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gcHVibGlzaFBvc3QocHJvcHMuaWQpfT5QdWJsaXNoPC9idXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBhZ2Uge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uICsgYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/post/[id].tsx\n");

/***/ })

});