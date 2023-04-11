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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\n/*\n    1 - Configurer OpenAI avec une clé API (https://platform.openai.com/account/api-keys)\n    2 - Définir un prompt \n    3 - Faire le choix du modèle \n    4 - Définir les paramètres de génération de contenu\n    5 - Définir la requête API\n  */ const configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.REACT_APP_OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: \"OpenAI API key missing, please follow instructions: https://platform.openai.com/account/api-keys\"\n        });\n        return;\n    }\n    const response = await openai.createCompletion({\n        model: \"text-davinci-003\",\n        prompt: 'I am a highly intelligent question answering bot. If you ask me a question that is rooted in truth, I will give you the answer. If you ask me a question that is nonsense, trickery, or has no clear answer, I will respond with \"Unknown\".\\n\\nQ: What is human life expectancy in the United States?\\nA: Human life expectancy in the United States is 78 years.\\n\\nQ: Who was president of the United States in 1955?\\nA: Dwight D. Eisenhower was president of the United States in 1955.\\n\\nQ: Which party did he belong to?\\nA: He belonged to the Republican Party.\\n\\nQ: What is the square root of banana?\\nA: Unknown\\n\\nQ: How does a telescope work?\\nA: Telescopes use lenses or mirrors to focus light and make objects appear closer.\\n\\nQ: Where were the 1992 Olympics held?\\nA: The 1992 Olympics were held in Barcelona, Spain.\\n\\nQ: How many squigs are in a bonk?\\nA: Unknown\\n\\nQ: Where is the Valley of Kings?\\nA:',\n        temperature: 0,\n        max_tokens: 100,\n        top_p: 1,\n        frequency_penalty: 0.0,\n        presence_penalty: 0.0,\n        stop: [\n            \"\\n\"\n        ]\n    });\n    console.log(response.data.choices[0].text);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWhEOzs7Ozs7RUFNQSxHQUVGLE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyx3QkFBd0I7QUFDOUM7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUU3Qiw2QkFBZSwwQ0FBZU0sR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDdEMsSUFBSSxDQUFDUCxjQUFjQyxNQUFNLEVBQUU7UUFDekJNLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUFtRztRQUNqSTtJQUNGLENBQUM7SUFFRCxNQUFNQyxXQUFXLE1BQU1OLE9BQU9PLGdCQUFnQixDQUFDO1FBQy9DQyxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsYUFBYTtRQUNiQyxZQUFZO1FBQ1pDLE9BQU87UUFDUEMsbUJBQW1CO1FBQ25CQyxrQkFBa0I7UUFDbEJDLE1BQU07WUFBQztTQUFLO0lBQ2Q7SUFDQUMsUUFBUUMsR0FBRyxDQUFDWCxTQUFTWSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUNDLElBQUk7QUFDM0MsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanM/NjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbiAgLypcbiAgICAxIC0gQ29uZmlndXJlciBPcGVuQUkgYXZlYyB1bmUgY2zDqSBBUEkgKGh0dHBzOi8vcGxhdGZvcm0ub3BlbmFpLmNvbS9hY2NvdW50L2FwaS1rZXlzKVxuICAgIDIgLSBEw6lmaW5pciB1biBwcm9tcHQgXG4gICAgMyAtIEZhaXJlIGxlIGNob2l4IGR1IG1vZMOobGUgXG4gICAgNCAtIETDqWZpbmlyIGxlcyBwYXJhbcOodHJlcyBkZSBnw6luw6lyYXRpb24gZGUgY29udGVudVxuICAgIDUgLSBEw6lmaW5pciBsYSByZXF1w6p0ZSBBUElcbiAgKi9cblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfT1BFTkFJX0FQSV9LRVlcbn0pXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uKHJlcSwgcmVzKSB7IFxuICBpZiAoIWNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJPcGVuQUkgQVBJIGtleSBtaXNzaW5nLCBwbGVhc2UgZm9sbG93IGluc3RydWN0aW9uczogaHR0cHM6Ly9wbGF0Zm9ybS5vcGVuYWkuY29tL2FjY291bnQvYXBpLWtleXNcIiB9KVxuICAgIHJldHVyblxuICB9XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gIG1vZGVsOiBcInRleHQtZGF2aW5jaS0wMDNcIixcbiAgICBwcm9tcHQ6IFwiSSBhbSBhIGhpZ2hseSBpbnRlbGxpZ2VudCBxdWVzdGlvbiBhbnN3ZXJpbmcgYm90LiBJZiB5b3UgYXNrIG1lIGEgcXVlc3Rpb24gdGhhdCBpcyByb290ZWQgaW4gdHJ1dGgsIEkgd2lsbCBnaXZlIHlvdSB0aGUgYW5zd2VyLiBJZiB5b3UgYXNrIG1lIGEgcXVlc3Rpb24gdGhhdCBpcyBub25zZW5zZSwgdHJpY2tlcnksIG9yIGhhcyBubyBjbGVhciBhbnN3ZXIsIEkgd2lsbCByZXNwb25kIHdpdGggXFxcIlVua25vd25cXFwiLlxcblxcblE6IFdoYXQgaXMgaHVtYW4gbGlmZSBleHBlY3RhbmN5IGluIHRoZSBVbml0ZWQgU3RhdGVzP1xcbkE6IEh1bWFuIGxpZmUgZXhwZWN0YW5jeSBpbiB0aGUgVW5pdGVkIFN0YXRlcyBpcyA3OCB5ZWFycy5cXG5cXG5ROiBXaG8gd2FzIHByZXNpZGVudCBvZiB0aGUgVW5pdGVkIFN0YXRlcyBpbiAxOTU1P1xcbkE6IER3aWdodCBELiBFaXNlbmhvd2VyIHdhcyBwcmVzaWRlbnQgb2YgdGhlIFVuaXRlZCBTdGF0ZXMgaW4gMTk1NS5cXG5cXG5ROiBXaGljaCBwYXJ0eSBkaWQgaGUgYmVsb25nIHRvP1xcbkE6IEhlIGJlbG9uZ2VkIHRvIHRoZSBSZXB1YmxpY2FuIFBhcnR5LlxcblxcblE6IFdoYXQgaXMgdGhlIHNxdWFyZSByb290IG9mIGJhbmFuYT9cXG5BOiBVbmtub3duXFxuXFxuUTogSG93IGRvZXMgYSB0ZWxlc2NvcGUgd29yaz9cXG5BOiBUZWxlc2NvcGVzIHVzZSBsZW5zZXMgb3IgbWlycm9ycyB0byBmb2N1cyBsaWdodCBhbmQgbWFrZSBvYmplY3RzIGFwcGVhciBjbG9zZXIuXFxuXFxuUTogV2hlcmUgd2VyZSB0aGUgMTk5MiBPbHltcGljcyBoZWxkP1xcbkE6IFRoZSAxOTkyIE9seW1waWNzIHdlcmUgaGVsZCBpbiBCYXJjZWxvbmEsIFNwYWluLlxcblxcblE6IEhvdyBtYW55IHNxdWlncyBhcmUgaW4gYSBib25rP1xcbkE6IFVua25vd25cXG5cXG5ROiBXaGVyZSBpcyB0aGUgVmFsbGV5IG9mIEtpbmdzP1xcbkE6XCIsXG4gICAgdGVtcGVyYXR1cmU6IDAsXG4gICAgbWF4X3Rva2VuczogMTAwLFxuICAgIHRvcF9wOiAxLFxuICAgIGZyZXF1ZW5jeV9wZW5hbHR5OiAwLjAsXG4gICAgcHJlc2VuY2VfcGVuYWx0eTogMC4wLFxuICAgIHN0b3A6IFtcIlxcblwiXSxcbiAgfSlcbiAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YS5jaG9pY2VzWzBdLnRleHQpXG59XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX09QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwicmVzcG9uc2UiLCJjcmVhdGVDb21wbGV0aW9uIiwibW9kZWwiLCJwcm9tcHQiLCJ0ZW1wZXJhdHVyZSIsIm1heF90b2tlbnMiLCJ0b3BfcCIsImZyZXF1ZW5jeV9wZW5hbHR5IiwicHJlc2VuY2VfcGVuYWx0eSIsInN0b3AiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

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