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
exports.id = "pages/api/publish/[id]";
exports.ids = ["pages/api/publish/[id]"];
exports.modules = {

/***/ "./src/lib/prisma.ts":
/*!***************************!*\
  !*** ./src/lib/prisma.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nci1pYW4vLi9zcmMvbGliL3ByaXNtYS50cz9iNDE2Il0sIm5hbWVzIjpbInByaXNtYSIsImdsb2JhbCIsIlByaXNtYUNsaWVudCJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFFQSxJQUFJQSxNQUFKOztBQUVBLFdBQTBDLEVBQTFDLE1BRU87QUFDSCxNQUFHLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWCxFQUFtQjtBQUNmQyxVQUFNLENBQUNELE1BQVAsR0FBZ0IsSUFBSUUsd0RBQUosRUFBaEI7QUFDSDs7QUFDREYsUUFBTSxHQUFHQyxNQUFNLENBQUNELE1BQWhCO0FBQ0g7O0FBRUQsK0RBQWVBLE1BQWYiLCJmaWxlIjoiLi9zcmMvbGliL3ByaXNtYS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50J1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnRcblxuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxufSBlbHNlIHtcbiAgICBpZighZ2xvYmFsLnByaXNtYSkge1xuICAgICAgICBnbG9iYWwucHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpXG4gICAgfVxuICAgIHByaXNtYSA9IGdsb2JhbC5wcmlzbWFcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/lib/prisma.ts\n");

/***/ }),

/***/ "./src/pages/api/publish/[id].ts":
/*!***************************************!*\
  !*** ./src/pages/api/publish/[id].ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ handler; }\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/prisma */ \"./src/lib/prisma.ts\");\n\nasync function handler(req, res) {\n  const postId = req.query.id;\n  const post = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default.post.update({\n    where: {\n      id: Number(postId)\n    },\n    data: {\n      published: true\n    }\n  });\n  res.json(post);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9nci1pYW4vLi9zcmMvcGFnZXMvYXBpL3B1Ymxpc2gvW2lkXS50cz8yZWVmIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJwb3N0SWQiLCJxdWVyeSIsImlkIiwicG9zdCIsInByaXNtYSIsIndoZXJlIiwiTnVtYmVyIiwiZGF0YSIsInB1Ymxpc2hlZCIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFFZSxlQUFlQSxPQUFmLENBQXVCQyxHQUF2QixFQUE0QkMsR0FBNUIsRUFBaUM7QUFDNUMsUUFBTUMsTUFBTSxHQUFHRixHQUFHLENBQUNHLEtBQUosQ0FBVUMsRUFBekI7QUFDQSxRQUFNQyxJQUFJLEdBQUcsTUFBTUMsNERBQUEsQ0FBbUI7QUFDbENDLFNBQUssRUFBRTtBQUFFSCxRQUFFLEVBQUVJLE1BQU0sQ0FBQ04sTUFBRDtBQUFaLEtBRDJCO0FBRWxDTyxRQUFJLEVBQUU7QUFBRUMsZUFBUyxFQUFFO0FBQWI7QUFGNEIsR0FBbkIsQ0FBbkI7QUFJQVQsS0FBRyxDQUFDVSxJQUFKLENBQVNOLElBQVQ7QUFDSCIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvcHVibGlzaC9baWRdLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vLi4vLi4vbGliL3ByaXNtYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgcG9zdElkID0gcmVxLnF1ZXJ5LmlkXG4gICAgY29uc3QgcG9zdCA9IGF3YWl0IHByaXNtYS5wb3N0LnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiBOdW1iZXIocG9zdElkKSB9LFxuICAgICAgICBkYXRhOiB7IHB1Ymxpc2hlZDogdHJ1ZSB9XG4gICAgfSlcbiAgICByZXMuanNvbihwb3N0KVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/api/publish/[id].ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/publish/[id].ts"));
module.exports = __webpack_exports__;

})();