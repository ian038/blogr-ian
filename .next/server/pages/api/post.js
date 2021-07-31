/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/api/post";
exports.ids = ["pages/api/post"];
exports.modules = {

/***/ "./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nci1pYW4vLi9zcmMvbGliL3ByaXNtYS50cz9iNDE2Il0sIm5hbWVzIjpbInByaXNtYSIsImdsb2JhbCIsIlByaXNtYUNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxJQUFJQSxNQUFKOztBQUVBLFdBQTBDLEVBQTFDLE1BRU87QUFDSCxNQUFHLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWCxFQUFtQjtBQUNmQyxVQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUUsd0RBQUosRUFBaEI7QUFDSDs7QUFDREYsUUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0g7O0FBRUQsK0RBQWVBLE1BQWYiLCJmaWxlIjoiLi9zcmMvbGliL3ByaXNtYS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnRcblxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxufSBlbHNlIHtcbiAgICBpZighZ2xvYmFsLnByaXNtYSkge1xuICAgICAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG4gICAgfVxuICAgIHByaXNtYSA9IGdsb2JhbC5wcmlzbWFcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/prisma.ts\n");

/***/ }),

/***/ "./src/pages/api/post/index.ts":
/*!*************************************!*\
  !*** ./src/pages/api/post/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handle; }\n/* harmony export */ });\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/prisma */ \"./src/lib/prisma.ts\");\n\n\nasync function handle(req, res) {\n  var _session$user;\n\n  const {\n    title,\n    content\n  } = req.body;\n  const session = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n    req\n  });\n  const result = await _lib_prisma__WEBPACK_IMPORTED_MODULE_1__.default.post.create({\n    data: {\n      title: title,\n      content: content,\n      author: {\n        connect: {\n          email: (session === null || session === void 0 ? void 0 : (_session$user = session.user) === null || _session$user === void 0 ? void 0 : _session$user.email) || undefined\n        }\n      }\n    }\n  });\n  res.json(result);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nci1pYW4vLi9zcmMvcGFnZXMvYXBpL3Bvc3QvaW5kZXgudHM/NTk2NCJdLCJuYW1lcyI6WyJoYW5kbGUiLCJyZXEiLCJyZXMiLCJ0aXRsZSIsImNvbnRlbnQiLCJib2R5Iiwic2Vzc2lvbiIsImdldFNlc3Npb24iLCJyZXN1bHQiLCJwcmlzbWEiLCJkYXRhIiwiYXV0aG9yIiwiY29ubmVjdCIsImVtYWlsIiwidXNlciIsInVuZGVmaW5lZCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsZUFBZUEsTUFBZixDQUFzQkMsR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQUE7O0FBQzNDLFFBQU07QUFBRUMsU0FBRjtBQUFTQztBQUFULE1BQXFCSCxHQUFHLENBQUNJLElBQS9CO0FBQ0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1DLDREQUFVLENBQUM7QUFBRU47QUFBRixHQUFELENBQWhDO0FBQ0EsUUFBTU8sTUFBTSxHQUFHLE1BQU1DLDREQUFBLENBQW1CO0FBQ3BDQyxRQUFJLEVBQUU7QUFDRlAsV0FBSyxFQUFFQSxLQURMO0FBRUZDLGFBQU8sRUFBRUEsT0FGUDtBQUdGTyxZQUFNLEVBQUU7QUFBRUMsZUFBTyxFQUFFO0FBQUVDLGVBQUssRUFBRSxDQUFBUCxPQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLDZCQUFBQSxPQUFPLENBQUVRLElBQVQsZ0VBQWVELEtBQWYsS0FBd0JFO0FBQWpDO0FBQVg7QUFITjtBQUQ4QixHQUFuQixDQUFyQjtBQU9BYixLQUFHLENBQUNjLElBQUosQ0FBU1IsTUFBVDtBQUNIIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9wb3N0L2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XG5pbXBvcnQgcHJpc21hIGZyb20gXCIuLi8uLi8uLi9saWIvcHJpc21hXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXEsIHJlcykge1xuICAgIGNvbnN0IHsgdGl0bGUsIGNvbnRlbnQgfSA9IHJlcS5ib2R5XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oeyByZXEgfSlcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcmlzbWEucG9zdC5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgYXV0aG9yOiB7IGNvbm5lY3Q6IHsgZW1haWw6IHNlc3Npb24/LnVzZXI/LmVtYWlsIHx8IHVuZGVmaW5lZCB9IH1cbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmVzLmpzb24ocmVzdWx0KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/post/index.ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/post/index.ts"));
module.exports = __webpack_exports__;

})();