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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\n/*\n    1 - Configurer OpenAI avec une clé API (https://platform.openai.com/account/api-keys)\n    2 - Définir un prompt \n    3 - Faire le choix du modèle \n    4 - Définir les paramètres de génération de contenu\n    5 - Définir la requête API\n  */ const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.REACT_APP_OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: \"OpenAI API key missing, please follow instructions: https://platform.openai.com/account/api-keys\"\n        });\n        return;\n    }\n    if (!req.body.input) {\n        res.status(400).json({\n            error: \"Missing input\"\n        });\n        return;\n    }\n    try {\n        const response = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: `Q: ${req.body.input} \\nA:`,\n            temperature: 0,\n            max_tokens: 200\n        });\n        console.log(response.data.choices[0].text);\n        res.status(200).json({\n            result: response.data.choices[0].text\n        });\n    } catch (e) {\n        res.status(500).json({\n            error: e.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxEOzs7Ozs7RUFNRSxHQUVGLE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyx3QkFBd0I7QUFDOUM7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUU3Qiw2QkFBZSwwQ0FBZ0JNLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLElBQUksQ0FBQ1AsY0FBY0MsTUFBTSxFQUFFO1FBQ3pCTSxJQUNHQyxNQUFNLENBQUMsS0FDUEMsSUFBSSxDQUFDO1lBQ0pDLE9BQ0U7UUFDSjtRQUNGO0lBQ0YsQ0FBQztJQUVELElBQUksQ0FBQ0osSUFBSUssSUFBSSxDQUFDQyxLQUFLLEVBQUU7UUFDbkJMLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFnQjtRQUM5QztJQUNGLENBQUM7SUFFRCxJQUFJO1FBQ0YsTUFBTUcsV0FBVyxNQUFNUixPQUFPUyxnQkFBZ0IsQ0FBQztZQUM3Q0MsT0FBTztZQUNQQyxRQUFRLENBQUMsR0FBRyxFQUFFVixJQUFJSyxJQUFJLENBQUNDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDbkNLLGFBQWE7WUFDYkMsWUFBWTtRQUNkO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQ1AsU0FBU1EsSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDQyxJQUFJO1FBQ3pDaEIsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFZSxRQUFRWCxTQUFTUSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7UUFBQztJQUMvRCxFQUFFLE9BQU9FLEdBQUc7UUFDVmxCLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBT2UsRUFBRUMsT0FBTztRQUFDO0lBQzFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanM/NjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbi8qXG4gICAgMSAtIENvbmZpZ3VyZXIgT3BlbkFJIGF2ZWMgdW5lIGNsw6kgQVBJIChodHRwczovL3BsYXRmb3JtLm9wZW5haS5jb20vYWNjb3VudC9hcGkta2V5cylcbiAgICAyIC0gRMOpZmluaXIgdW4gcHJvbXB0IFxuICAgIDMgLSBGYWlyZSBsZSBjaG9peCBkdSBtb2TDqGxlIFxuICAgIDQgLSBEw6lmaW5pciBsZXMgcGFyYW3DqHRyZXMgZGUgZ8OpbsOpcmF0aW9uIGRlIGNvbnRlbnVcbiAgICA1IC0gRMOpZmluaXIgbGEgcmVxdcOqdGUgQVBJXG4gICovXG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX09QRU5BSV9BUElfS0VZLFxufSk7XG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgaWYgKCFjb25maWd1cmF0aW9uLmFwaUtleSkge1xuICAgIHJlc1xuICAgICAgLnN0YXR1cyg1MDApXG4gICAgICAuanNvbih7XG4gICAgICAgIGVycm9yOlxuICAgICAgICAgIFwiT3BlbkFJIEFQSSBrZXkgbWlzc2luZywgcGxlYXNlIGZvbGxvdyBpbnN0cnVjdGlvbnM6IGh0dHBzOi8vcGxhdGZvcm0ub3BlbmFpLmNvbS9hY2NvdW50L2FwaS1rZXlzXCIsXG4gICAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXJlcS5ib2R5LmlucHV0KSB7IFxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZXJyb3I6IFwiTWlzc2luZyBpbnB1dFwiIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgICBtb2RlbDogXCJ0ZXh0LWRhdmluY2ktMDAzXCIsXG4gICAgICBwcm9tcHQ6IGBROiAke3JlcS5ib2R5LmlucHV0fSBcXG5BOmAsXG4gICAgICB0ZW1wZXJhdHVyZTogMCxcbiAgICAgIG1heF90b2tlbnM6IDIwMCxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmNob2ljZXNbMF0udGV4dClcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdDogcmVzcG9uc2UuZGF0YS5jaG9pY2VzWzBdLnRleHQgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlLm1lc3NhZ2UgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJDb25maWd1cmF0aW9uIiwiT3BlbkFJQXBpIiwiY29uZmlndXJhdGlvbiIsImFwaUtleSIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJib2R5IiwiaW5wdXQiLCJyZXNwb25zZSIsImNyZWF0ZUNvbXBsZXRpb24iLCJtb2RlbCIsInByb21wdCIsInRlbXBlcmF0dXJlIiwibWF4X3Rva2VucyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiY2hvaWNlcyIsInRleHQiLCJyZXN1bHQiLCJlIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

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