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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([openai__WEBPACK_IMPORTED_MODULE_0__]);\nopenai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    apiKey: process.env.REACT_APP_OPENAI_API_KEY\n});\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!openai.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const input = req.body.input || \"\";\n    if (input.trim().length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"Please enter a valid input\"\n            }\n        });\n        return;\n    }\n    try {\n        const completion = await openai.chat.completions.create({\n            model: \"gpt-3.5-turbo\",\n            messages: [\n                {\n                    role: \"system\",\n                    content: \"You are a helpful assistant.\"\n                },\n                {\n                    role: \"user\",\n                    content: \"write a recipe based on the instructions and ingredients:\" + input\n                }\n            ]\n        });\n        res.status(200).json({\n            result: completion.choices[0].message.content\n        });\n    } catch (error) {\n        // Consider adjusting the error handling logic for your use case\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFFNUIsTUFBTUMsU0FBUyxJQUFJRCw4Q0FBTUEsQ0FBQztJQUN4QkUsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyx3QkFBd0I7QUFDOUM7QUFFQSw2QkFBZSwwQ0FBZ0JDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLElBQUksQ0FBQ04sT0FBT0MsTUFBTSxFQUFFO1FBQ2xCSyxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUNFO1lBQ0o7UUFDRjtRQUNBO0lBQ0YsQ0FBQztJQUVELE1BQU1DLFFBQVFOLElBQUlPLElBQUksQ0FBQ0QsS0FBSyxJQUFJO0lBQ2hDLElBQUlBLE1BQU1FLElBQUksR0FBR0MsTUFBTSxLQUFLLEdBQUc7UUFDN0JSLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDbkJDLE9BQU87Z0JBQ0xDLFNBQVM7WUFDWDtRQUNGO1FBQ0E7SUFDRixDQUFDO0lBRUQsSUFBSTtRQUNGLE1BQU1LLGFBQWEsTUFBTWYsT0FBT2dCLElBQUksQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNLENBQUM7WUFDdERDLE9BQU87WUFDUEMsVUFBVTtnQkFDUjtvQkFBRUMsTUFBTTtvQkFBVUMsU0FBUztnQkFBK0I7Z0JBQzFEO29CQUNFRCxNQUFNO29CQUNOQyxTQUNFLDhEQUE4RFg7Z0JBQ2xFO2FBQ0Q7UUFDSDtRQUVBTCxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVlLFFBQVFSLFdBQVdTLE9BQU8sQ0FBQyxFQUFFLENBQUNkLE9BQU8sQ0FBQ1ksT0FBTztRQUFDO0lBQ3ZFLEVBQUUsT0FBT2IsT0FBTztRQUNkLGdFQUFnRTtRQUNoRSxJQUFJQSxNQUFNZ0IsUUFBUSxFQUFFO1lBQ2xCQyxRQUFRakIsS0FBSyxDQUFDQSxNQUFNZ0IsUUFBUSxDQUFDbEIsTUFBTSxFQUFFRSxNQUFNZ0IsUUFBUSxDQUFDRSxJQUFJO1lBQ3hEckIsSUFBSUMsTUFBTSxDQUFDRSxNQUFNZ0IsUUFBUSxDQUFDbEIsTUFBTSxFQUFFQyxJQUFJLENBQUNDLE1BQU1nQixRQUFRLENBQUNFLElBQUk7UUFDNUQsT0FBTztZQUNMRCxRQUFRakIsS0FBSyxDQUFDLENBQUMsK0JBQStCLEVBQUVBLE1BQU1DLE9BQU8sQ0FBQyxDQUFDO1lBQy9ESixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUNuQkMsT0FBTztvQkFDTEMsU0FBUztnQkFDWDtZQUNGO1FBQ0YsQ0FBQztJQUNIO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9hcGkvZ2VuZXJhdGUuanM/NjI3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT3BlbkFJIGZyb20gXCJvcGVuYWlcIjtcblxuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSSh7XG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX09QRU5BSV9BUElfS0VZLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBpZiAoIW9wZW5haS5hcGlLZXkpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBlcnJvcjoge1xuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgIFwiT3BlbkFJIEFQSSBrZXkgbm90IGNvbmZpZ3VyZWQsIHBsZWFzZSBmb2xsb3cgaW5zdHJ1Y3Rpb25zIGluIFJFQURNRS5tZFwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBpbnB1dCA9IHJlcS5ib2R5LmlucHV0IHx8IFwiXCI7XG4gIGlmIChpbnB1dC50cmltKCkubGVuZ3RoID09PSAwKSB7XG4gICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgZXJyb3I6IHtcbiAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBpbnB1dFwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm47XG4gIH1cblxuICB0cnkge1xuICAgIGNvbnN0IGNvbXBsZXRpb24gPSBhd2FpdCBvcGVuYWkuY2hhdC5jb21wbGV0aW9ucy5jcmVhdGUoe1xuICAgICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgeyByb2xlOiBcInN5c3RlbVwiLCBjb250ZW50OiBcIllvdSBhcmUgYSBoZWxwZnVsIGFzc2lzdGFudC5cIiB9LFxuICAgICAgICB7XG4gICAgICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgIFwid3JpdGUgYSByZWNpcGUgYmFzZWQgb24gdGhlIGluc3RydWN0aW9ucyBhbmQgaW5ncmVkaWVudHM6XCIgKyBpbnB1dCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHJlc3VsdDogY29tcGxldGlvbi5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBDb25zaWRlciBhZGp1c3RpbmcgdGhlIGVycm9yIGhhbmRsaW5nIGxvZ2ljIGZvciB5b3VyIHVzZSBjYXNlXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yLnJlc3BvbnNlLnN0YXR1cywgZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICByZXMuc3RhdHVzKGVycm9yLnJlc3BvbnNlLnN0YXR1cykuanNvbihlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2l0aCBPcGVuQUkgQVBJIHJlcXVlc3Q6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIGR1cmluZyB5b3VyIHJlcXVlc3QuXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPcGVuQUkiLCJvcGVuYWkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX09QRU5BSV9BUElfS0VZIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsImlucHV0IiwiYm9keSIsInRyaW0iLCJsZW5ndGgiLCJjb21wbGV0aW9uIiwiY2hhdCIsImNvbXBsZXRpb25zIiwiY3JlYXRlIiwibW9kZWwiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50IiwicmVzdWx0IiwiY2hvaWNlcyIsInJlc3BvbnNlIiwiY29uc29sZSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate.js\n");

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