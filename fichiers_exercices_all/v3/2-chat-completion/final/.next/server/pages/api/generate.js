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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.REACT_APP_OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const input = req.body.input || \"\";\n    if (!input) {\n        res.status(400).json({\n            error: {\n                message: \"Please enter a valid input\"\n            }\n        });\n        return;\n    }\n    try {\n        // definir prompt\n        const completion = await openai.createChatCompletion({\n            model: \"gpt-3.5-turbo\",\n            messages: input\n        });\n        res.status(200).json({\n            result: completion.data.choices[0].message\n        });\n    } catch (error) {\n        // Consider adjusting the error handling logic for your use case\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyx3QkFBd0I7QUFDOUM7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUU3Qiw2QkFBZSwwQ0FBZ0JNLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLElBQUksQ0FBQ1AsY0FBY0MsTUFBTSxFQUFFO1FBQ3pCTSxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUNFO1lBQ0o7UUFDRjtRQUNBO0lBQ0YsQ0FBQztJQUVELE1BQU1DLFFBQVFOLElBQUlPLElBQUksQ0FBQ0QsS0FBSyxJQUFJO0lBQ2hDLElBQUksQ0FBQ0EsT0FBTztRQUNWTCxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUFTO1lBQ1g7UUFDRjtRQUNBO0lBQ0YsQ0FBQztJQUVELElBQUk7UUFDRixpQkFBaUI7UUFDakIsTUFBTUcsYUFBYSxNQUFNVCxPQUFPVSxvQkFBb0IsQ0FBQztZQUNuREMsT0FBTztZQUNQQyxVQUFVTDtRQUNaO1FBQ0FMLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ1MsUUFBUUosV0FBV0ssSUFBSSxDQUFDQyxPQUFPLENBQUMsRUFBRSxDQUFDVCxPQUFPO1FBQUM7SUFDbkUsRUFBRSxPQUFPRCxPQUFPO1FBQ2QsZ0VBQWdFO1FBQ2hFLElBQUlBLE1BQU1XLFFBQVEsRUFBRTtZQUNsQkMsUUFBUVosS0FBSyxDQUFDQSxNQUFNVyxRQUFRLENBQUNiLE1BQU0sRUFBRUUsTUFBTVcsUUFBUSxDQUFDRixJQUFJO1lBQ3hEWixJQUFJQyxNQUFNLENBQUNFLE1BQU1XLFFBQVEsQ0FBQ2IsTUFBTSxFQUFFQyxJQUFJLENBQUNDLE1BQU1XLFFBQVEsQ0FBQ0YsSUFBSTtRQUM1RCxPQUFPO1lBQ0xHLFFBQVFaLEtBQUssQ0FBQyxDQUFDLCtCQUErQixFQUFFQSxNQUFNQyxPQUFPLENBQUMsQ0FBQztZQUMvREosSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDbkJDLE9BQU87b0JBQ0xDLFNBQVM7Z0JBQ1g7WUFDRjtRQUNGLENBQUM7SUFDSDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvYXBpL2dlbmVyYXRlLmpzPzYyN2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSBcIm9wZW5haVwiO1xuXG5jb25zdCBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24oe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9PUEVOQUlfQVBJX0tFWSxcbn0pO1xuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIGlmICghY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBlcnJvcjoge1xuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgIFwiT3BlbkFJIEFQSSBrZXkgbm90IGNvbmZpZ3VyZWQsIHBsZWFzZSBmb2xsb3cgaW5zdHJ1Y3Rpb25zIGluIFJFQURNRS5tZFwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpbnB1dCA9IHJlcS5ib2R5LmlucHV0IHx8IFwiXCI7XG4gIGlmICghaW5wdXQpIHtcbiAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7XG4gICAgICBlcnJvcjoge1xuICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGlucHV0XCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gZGVmaW5pciBwcm9tcHRcbiAgICBjb25zdCBjb21wbGV0aW9uID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUNoYXRDb21wbGV0aW9uKHsgXG4gICAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvXCIsXG4gICAgICBtZXNzYWdlczogaW5wdXRcbiAgICB9KVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtyZXN1bHQ6IGNvbXBsZXRpb24uZGF0YS5jaG9pY2VzWzBdLm1lc3NhZ2UgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gQ29uc2lkZXIgYWRqdXN0aW5nIHRoZSBlcnJvciBoYW5kbGluZyBsb2dpYyBmb3IgeW91ciB1c2UgY2FzZVxuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvci5yZXNwb25zZS5zdGF0dXMsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgICAgcmVzLnN0YXR1cyhlcnJvci5yZXNwb25zZS5zdGF0dXMpLmpzb24oZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdpdGggT3BlbkFJIEFQSSByZXF1ZXN0OiAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgbWVzc2FnZTogXCJBbiBlcnJvciBvY2N1cnJlZCBkdXJpbmcgeW91ciByZXF1ZXN0LlwiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX09QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsImlucHV0IiwiYm9keSIsImNvbXBsZXRpb24iLCJjcmVhdGVDaGF0Q29tcGxldGlvbiIsIm1vZGVsIiwibWVzc2FnZXMiLCJyZXN1bHQiLCJkYXRhIiwiY2hvaWNlcyIsInJlc3BvbnNlIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

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