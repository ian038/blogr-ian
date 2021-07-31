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
exports.id = "pages/api/post/[id]";
exports.ids = ["pages/api/post/[id]"];
exports.modules = {

/***/ "./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nci1pYW4vLi9zcmMvbGliL3ByaXNtYS50cz9iNDE2Il0sIm5hbWVzIjpbInByaXNtYSIsImdsb2JhbCIsIlByaXNtYUNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxJQUFJQSxNQUFKOztBQUVBLFdBQTBDLEVBQTFDLE1BRU87QUFDSCxNQUFHLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWCxFQUFtQjtBQUNmQyxVQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUUsd0RBQUosRUFBaEI7QUFDSDs7QUFDREYsUUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0g7O0FBRUQsK0RBQWVBLE1BQWYiLCJmaWxlIjoiLi9zcmMvbGliL3ByaXNtYS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnRcblxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxufSBlbHNlIHtcbiAgICBpZighZ2xvYmFsLnByaXNtYSkge1xuICAgICAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG4gICAgfVxuICAgIHByaXNtYSA9IGdsb2JhbC5wcmlzbWFcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/prisma.ts\n");

/***/ }),

/***/ "./src/pages/api/post/[id].ts":
/*!************************************!*\
  !*** ./src/pages/api/post/[id].ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./src/lib/prisma.ts\");\n\nasync function handler(req, res) {\n  const postId = req.query.id;\n\n  if (req.method === 'DELETE') {\n    const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.post.delete({\n      where: {\n        id: Number(postId)\n      }\n    });\n    res.json(post);\n  } else {\n    throw new Error(`The HTTP ${req.method} method is not supported at this route.`);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nci1pYW4vLi9zcmMvcGFnZXMvYXBpL3Bvc3QvW2lkXS50cz83M2E1Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwb3N0SWQiLCJxdWVyeSIsImlkIiwibWV0aG9kIiwicG9zdCIsInByaXNtYSIsIndoZXJlIiwiTnVtYmVyIiwianNvbiIsIkVycm9yIl0sIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBRWUsZUFBZUEsT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzVDLFFBQU1DLE1BQU0sR0FBR0YsR0FBRyxDQUFDRyxLQUFKLENBQVVDLEVBQXpCOztBQUNBLE1BQUdKLEdBQUcsQ0FBQ0ssTUFBSixLQUFlLFFBQWxCLEVBQTRCO0FBQ3hCLFVBQU1DLElBQUksR0FBRyxNQUFNQyw0REFBQSxDQUFtQjtBQUNsQ0MsV0FBSyxFQUFFO0FBQUVKLFVBQUUsRUFBRUssTUFBTSxDQUFDUCxNQUFEO0FBQVo7QUFEMkIsS0FBbkIsQ0FBbkI7QUFHQUQsT0FBRyxDQUFDUyxJQUFKLENBQVNKLElBQVQ7QUFDSCxHQUxELE1BS087QUFDSCxVQUFNLElBQUlLLEtBQUosQ0FBVyxZQUFXWCxHQUFHLENBQUNLLE1BQU8seUNBQWpDLENBQU47QUFDSDtBQUNKIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9wb3N0L1tpZF0udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcbmltcG9ydCBwcmlzbWEgZnJvbSBcIi4uLy4uLy4uL2xpYi9wcmlzbWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGNvbnN0IHBvc3RJZCA9IHJlcS5xdWVyeS5pZFxuICAgIGlmKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgICAgIGNvbnN0IHBvc3QgPSBhd2FpdCBwcmlzbWEucG9zdC5kZWxldGUoe1xuICAgICAgICAgICAgd2hlcmU6IHsgaWQ6IE51bWJlcihwb3N0SWQpIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmVzLmpzb24ocG9zdClcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBIVFRQICR7cmVxLm1ldGhvZH0gbWV0aG9kIGlzIG5vdCBzdXBwb3J0ZWQgYXQgdGhpcyByb3V0ZS5gKVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/post/[id].ts\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@prisma/client");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/post/[id].ts"));
module.exports = __webpack_exports__;

})();