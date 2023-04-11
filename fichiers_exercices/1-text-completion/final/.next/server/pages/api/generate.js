"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/generate";
exports.ids = ["pages/api/generate"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\n/*\n    1 - Configurer OpenAI avec une clé API (https://platform.openai.com/account/api-keys)\n    2 - Définir un prompt \n    3 - Faire le choix du modèle \n    4 - Définir les paramètres de génération de contenu\n    5 - Définir la requête API\n  */ const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.REACT_APP_OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: \"OpenAI API key missing, please follow instructions: https://platform.openai.com/account/api-keys\"\n        });\n        return;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWhEOzs7Ozs7RUFNQSxHQUVGLE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyx3QkFBd0I7QUFDOUM7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUU3Qiw2QkFBZSwwQ0FBZ0JNLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLElBQUksQ0FBQ1AsY0FBY0MsTUFBTSxFQUFFO1FBQ3pCTSxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBbUc7UUFDakk7SUFDRixDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanM/NjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbiAgLypcbiAgICAxIC0gQ29uZmlndXJlciBPcGVuQUkgYXZlYyB1bmUgY2zDqSBBUEkgKGh0dHBzOi8vcGxhdGZvcm0ub3BlbmFpLmNvbS9hY2NvdW50L2FwaS1rZXlzKVxuICAgIDIgLSBEw6lmaW5pciB1biBwcm9tcHQgXG4gICAgMyAtIEZhaXJlIGxlIGNob2l4IGR1IG1vZMOobGUgXG4gICAgNCAtIETDqWZpbmlyIGxlcyBwYXJhbcOodHJlcyBkZSBnw6luw6lyYXRpb24gZGUgY29udGVudVxuICAgIDUgLSBEw6lmaW5pciBsYSByZXF1w6p0ZSBBUElcbiAgKi9cblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfT1BFTkFJX0FQSV9LRVlcbn0pXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykgeyBcbiAgaWYgKCFjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiT3BlbkFJIEFQSSBrZXkgbWlzc2luZywgcGxlYXNlIGZvbGxvdyBpbnN0cnVjdGlvbnM6IGh0dHBzOi8vcGxhdGZvcm0ub3BlbmFpLmNvbS9hY2NvdW50L2FwaS1rZXlzXCIgfSlcbiAgICByZXR1cm5cbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9PUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate.js"));
module.exports = __webpack_exports__;

})();