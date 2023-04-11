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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\n/*\n    1 - Configurer OpenAI avec une clé API (https://platform.openai.com/account/api-keys)\n    2 - Définir un prompt \n    3 - Faire le choix du modèle \n    4 - Définir les paramètres de génération de contenu\n    5 - Définir la requête API\n  */ const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.REACT_APP_OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: \"OpenAI API key missing, please follow instructions: https://platform.openai.com/account/api-keys\"\n        });\n        return;\n    }\n    if (!req.body.input) {\n        res.status(400).json({\n            error: \"Missing input\"\n        });\n        return;\n    }\n    try {\n        const response = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: `Q: ${req.body.input} \\nA:`,\n            temperature: 0,\n            max_tokens: 200\n        });\n        res.status(200).json({\n            result: response.data.choices[0].text\n        });\n    } catch (e) {\n        res.status(500).json({\n            error: e.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxEOzs7Ozs7RUFNRSxHQUVGLE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyx3QkFBd0I7QUFDOUM7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUU3Qiw2QkFBZSwwQ0FBZ0JNLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLElBQUksQ0FBQ1AsY0FBY0MsTUFBTSxFQUFFO1FBQ3pCTSxJQUNHQyxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO1lBQ0pDLE9BQ0U7UUFDSjtRQUNGO0lBQ0YsQ0FBQztJQUVELElBQUksQ0FBQ0osSUFBSUssSUFBSSxDQUFDQyxLQUFLLEVBQUU7UUFDbkJMLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFnQjtRQUM5QztJQUNGLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTUcsV0FBVyxNQUFNUixPQUFPUyxnQkFBZ0IsQ0FBQztZQUM3Q0MsT0FBTztZQUNQQyxRQUFRLENBQUMsR0FBRyxFQUFFVixJQUFJSyxJQUFJLENBQUNDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDbkNLLGFBQWE7WUFDYkMsWUFBWTtRQUNkO1FBQ0FYLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRVUsUUFBUU4sU0FBU08sSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJO1FBQUM7SUFDL0QsRUFBRSxPQUFPQyxHQUFHO1FBQ1ZoQixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU9hLEVBQUVDLE9BQU87UUFBQztJQUMxQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG4vKlxuICAgIDEgLSBDb25maWd1cmVyIE9wZW5BSSBhdmVjIHVuZSBjbMOpIEFQSSAoaHR0cHM6Ly9wbGF0Zm9ybS5vcGVuYWkuY29tL2FjY291bnQvYXBpLWtleXMpXG4gICAgMiAtIETDqWZpbmlyIHVuIHByb21wdCBcbiAgICAzIC0gRmFpcmUgbGUgY2hvaXggZHUgbW9kw6hsZSBcbiAgICA0IC0gRMOpZmluaXIgbGVzIHBhcmFtw6h0cmVzIGRlIGfDqW7DqXJhdGlvbiBkZSBjb250ZW51XG4gICAgNSAtIETDqWZpbmlyIGxhIHJlcXXDqnRlIEFQSVxuICAqL1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9PUEVOQUlfQVBJX0tFWSxcbn0pO1xuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGlmICghY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICByZXNcbiAgICAgIC5zdGF0dXMoNTAwKVxuICAgICAgLmpzb24oe1xuICAgICAgICBlcnJvcjpcbiAgICAgICAgICBcIk9wZW5BSSBBUEkga2V5IG1pc3NpbmcsIHBsZWFzZSBmb2xsb3cgaW5zdHJ1Y3Rpb25zOiBodHRwczovL3BsYXRmb3JtLm9wZW5haS5jb20vYWNjb3VudC9hcGkta2V5c1wiLFxuICAgICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFyZXEuYm9keS5pbnB1dCkgeyBcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7IGVycm9yOiBcIk1pc3NpbmcgaW5wdXRcIiB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNvbXBsZXRpb24oe1xuICAgICAgbW9kZWw6IFwidGV4dC1kYXZpbmNpLTAwM1wiLFxuICAgICAgcHJvbXB0OiBgUTogJHtyZXEuYm9keS5pbnB1dH0gXFxuQTpgLFxuICAgICAgdGVtcGVyYXR1cmU6IDAsXG4gICAgICBtYXhfdG9rZW5zOiAyMDAsXG4gICAgfSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IHJlc3BvbnNlLmRhdGEuY2hvaWNlc1swXS50ZXh0IH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogZS5tZXNzYWdlIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX09QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiYm9keSIsImlucHV0IiwicmVzcG9uc2UiLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJyZXN1bHQiLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiLCJlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

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