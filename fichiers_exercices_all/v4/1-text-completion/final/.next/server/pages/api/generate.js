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

module.exports = import("openai");;

/***/ }),

/***/ "(api)/./pages/api/generate.js":
/*!*******************************!*\
  !*** ./pages/api/generate.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([openai__WEBPACK_IMPORTED_MODULE_0__]);\nopenai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/*\n    1 - Configurer OpenAI avec une clé API (https://platform.openai.com/account/api-keys)\n    2 - Définir un prompt \n    3 - Faire le choix du modèle \n    4 - Définir les paramètres de génération de contenu\n    5 - Définir la requête API\n  */ const openai = new openai__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    apiKey: process.env.REACT_APP_OPENAI_API_KEY\n});\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!openai.apiKey) {\n        res.status(500).json({\n            error: \"OpenAI API key missing, please follow instructions: https://platform.openai.com/account/api-keys\"\n        });\n        return;\n    }\n    if (!req.body.input) {\n        res.status(400).json({\n            error: \"Missing input\"\n        });\n        return;\n    }\n    try {\n        const completion = await openai.chat.completions.create({\n            messages: [\n                {\n                    role: \"system\",\n                    content: \"You are a knowledgeable assistant\"\n                },\n                {\n                    role: \"user\",\n                    content: \"Q: \" + req.body.input\n                }\n            ],\n            model: \"gpt-3.5-turbo\"\n        });\n        res.status(200).json({\n            result: completion.choices[0].message.content\n        });\n    } catch (e) {\n        res.status(500).json({\n            error: e.message\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFFNUI7Ozs7OztFQU1FLEdBRUYsTUFBTUMsU0FBUyxJQUFJRCw4Q0FBTUEsQ0FBQztJQUN4QkUsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyx3QkFBd0I7QUFDOUM7QUFFQSw2QkFBZSwwQ0FBZ0JDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLElBQUksQ0FBQ04sT0FBT0MsTUFBTSxFQUFFO1FBQ2xCSyxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxPQUNFO1FBQ0o7UUFDQTtJQUNGLENBQUM7SUFFRCxJQUFJLENBQUNKLElBQUlLLElBQUksQ0FBQ0MsS0FBSyxFQUFFO1FBQ25CTCxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBZ0I7UUFDOUM7SUFDRixDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU1HLGFBQWEsTUFBTVosT0FBT2EsSUFBSSxDQUFDQyxXQUFXLENBQUNDLE1BQU0sQ0FBQztZQUN0REMsVUFBVTtnQkFDUjtvQkFBRUMsTUFBTTtvQkFBVUMsU0FBUztnQkFBb0M7Z0JBQy9EO29CQUFFRCxNQUFNO29CQUFRQyxTQUFTLFFBQVFiLElBQUlLLElBQUksQ0FBQ0MsS0FBSztnQkFBQzthQUNqRDtZQUNEUSxPQUFPO1FBQ1Q7UUFDQWIsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFWSxRQUFRUixXQUFXUyxPQUFPLENBQUMsRUFBRSxDQUFDQyxPQUFPLENBQUNKLE9BQU87UUFBQztJQUN2RSxFQUFFLE9BQU9LLEdBQUc7UUFDVmpCLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBT2MsRUFBRUQsT0FBTztRQUFDO0lBQzFDO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanM/NjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3BlbkFJIGZyb20gXCJvcGVuYWlcIjtcblxuLypcbiAgICAxIC0gQ29uZmlndXJlciBPcGVuQUkgYXZlYyB1bmUgY2zDqSBBUEkgKGh0dHBzOi8vcGxhdGZvcm0ub3BlbmFpLmNvbS9hY2NvdW50L2FwaS1rZXlzKVxuICAgIDIgLSBEw6lmaW5pciB1biBwcm9tcHQgXG4gICAgMyAtIEZhaXJlIGxlIGNob2l4IGR1IG1vZMOobGUgXG4gICAgNCAtIETDqWZpbmlyIGxlcyBwYXJhbcOodHJlcyBkZSBnw6luw6lyYXRpb24gZGUgY29udGVudVxuICAgIDUgLSBEw6lmaW5pciBsYSByZXF1w6p0ZSBBUElcbiAgKi9cblxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSSh7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX09QRU5BSV9BUElfS0VZLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBpZiAoIW9wZW5haS5hcGlLZXkpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBlcnJvcjpcbiAgICAgICAgXCJPcGVuQUkgQVBJIGtleSBtaXNzaW5nLCBwbGVhc2UgZm9sbG93IGluc3RydWN0aW9uczogaHR0cHM6Ly9wbGF0Zm9ybS5vcGVuYWkuY29tL2FjY291bnQvYXBpLWtleXNcIixcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXJlcS5ib2R5LmlucHV0KSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBlcnJvcjogXCJNaXNzaW5nIGlucHV0XCIgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNoYXQuY29tcGxldGlvbnMuY3JlYXRlKHtcbiAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgIHsgcm9sZTogXCJzeXN0ZW1cIiwgY29udGVudDogXCJZb3UgYXJlIGEga25vd2xlZGdlYWJsZSBhc3Npc3RhbnRcIiB9LFxuICAgICAgICB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiBcIlE6IFwiICsgcmVxLmJvZHkuaW5wdXQgfSxcbiAgICAgIF0sXG4gICAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvXCIsXG4gICAgfSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IGNvbXBsZXRpb24uY2hvaWNlc1swXS5tZXNzYWdlLmNvbnRlbnQgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlLm1lc3NhZ2UgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPcGVuQUkiLCJvcGVuYWkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX09QRU5BSV9BUElfS0VZIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiYm9keSIsImlucHV0IiwiY29tcGxldGlvbiIsImNoYXQiLCJjb21wbGV0aW9ucyIsImNyZWF0ZSIsIm1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJtb2RlbCIsInJlc3VsdCIsImNob2ljZXMiLCJtZXNzYWdlIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

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