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
exports.id = "pages/api/generate-image";
exports.ids = ["pages/api/generate-image"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("openai");;

/***/ }),

/***/ "(api)/./pages/api/generate-image.js":
/*!*************************************!*\
  !*** ./pages/api/generate-image.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([openai__WEBPACK_IMPORTED_MODULE_0__]);\nopenai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    apiKey: process.env.REACT_APP_OPENAI_API_KEY\n});\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!openai.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const input = req.body.input || \"\";\n    if (input.trim().length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"Please enter a valid input\"\n            }\n        });\n        return;\n    }\n    try {\n        const response = await openai.images.generate({\n            prompt: input,\n            n: 1,\n            size: \"1024x1024\"\n        });\n        res.status(200).json({\n            image_url: response.data[0].url\n        });\n    } catch (error) {\n        // Consider adjusting the error handling logic for your use case\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUtaW1hZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFFNUIsTUFBTUMsU0FBUyxJQUFJRCw4Q0FBTUEsQ0FBQztJQUN4QkUsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyx3QkFBd0I7QUFDOUM7QUFFQSw2QkFBZSwwQ0FBZ0JDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLElBQUksQ0FBQ04sT0FBT0MsTUFBTSxFQUFFO1FBQ2xCSyxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUNFO1lBQ0o7UUFDRjtRQUNBO0lBQ0YsQ0FBQztJQUVELE1BQU1DLFFBQVFOLElBQUlPLElBQUksQ0FBQ0QsS0FBSyxJQUFJO0lBQ2hDLElBQUlBLE1BQU1FLElBQUksR0FBR0MsTUFBTSxLQUFLLEdBQUc7UUFDN0JSLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDbkJDLE9BQU87Z0JBQ0xDLFNBQVM7WUFDWDtRQUNGO1FBQ0E7SUFDRixDQUFDO0lBQ0QsSUFBSTtRQUNGLE1BQU1LLFdBQVcsTUFBTWYsT0FBT2dCLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO1lBQzVDQyxRQUFRUDtZQUNSUSxHQUFHO1lBQ0hDLE1BQU07UUFDUjtRQUVBZCxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVhLFdBQVdOLFNBQVNPLElBQUksQ0FBQyxFQUFFLENBQUNDLEdBQUc7UUFBQztJQUN6RCxFQUFFLE9BQU9kLE9BQU87UUFDZCxnRUFBZ0U7UUFDaEUsSUFBSUEsTUFBTU0sUUFBUSxFQUFFO1lBQ2xCUyxRQUFRZixLQUFLLENBQUNBLE1BQU1NLFFBQVEsQ0FBQ1IsTUFBTSxFQUFFRSxNQUFNTSxRQUFRLENBQUNPLElBQUk7WUFDeERoQixJQUFJQyxNQUFNLENBQUNFLE1BQU1NLFFBQVEsQ0FBQ1IsTUFBTSxFQUFFQyxJQUFJLENBQUNDLE1BQU1NLFFBQVEsQ0FBQ08sSUFBSTtRQUM1RCxPQUFPO1lBQ0xFLFFBQVFmLEtBQUssQ0FBQyxDQUFDLCtCQUErQixFQUFFQSxNQUFNQyxPQUFPLENBQUMsQ0FBQztZQUMvREosSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFDbkJDLE9BQU87b0JBQ0xDLFNBQVM7Z0JBQ1g7WUFDRjtRQUNGLENBQUM7SUFDSDtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvYXBpL2dlbmVyYXRlLWltYWdlLmpzPzEwY2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9wZW5BSSBmcm9tIFwib3BlbmFpXCI7XG5cbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUkoe1xuICBhcGlLZXk6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9PUEVOQUlfQVBJX0tFWSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgaWYgKCFvcGVuYWkuYXBpS2V5KSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgZXJyb3I6IHtcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICBcIk9wZW5BSSBBUEkga2V5IG5vdCBjb25maWd1cmVkLCBwbGVhc2UgZm9sbG93IGluc3RydWN0aW9ucyBpbiBSRUFETUUubWRcIixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW5wdXQgPSByZXEuYm9keS5pbnB1dCB8fCBcIlwiO1xuICBpZiAoaW5wdXQudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgIGVycm9yOiB7XG4gICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgaW5wdXRcIixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuaW1hZ2VzLmdlbmVyYXRlKHtcbiAgICAgIHByb21wdDogaW5wdXQsXG4gICAgICBuOiAxLFxuICAgICAgc2l6ZTogXCIxMDI0eDEwMjRcIixcbiAgICB9KTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaW1hZ2VfdXJsOiByZXNwb25zZS5kYXRhWzBdLnVybCB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyBDb25zaWRlciBhZGp1c3RpbmcgdGhlIGVycm9yIGhhbmRsaW5nIGxvZ2ljIGZvciB5b3VyIHVzZSBjYXNlXG4gICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yLnJlc3BvbnNlLnN0YXR1cywgZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4gICAgICByZXMuc3RhdHVzKGVycm9yLnJlc3BvbnNlLnN0YXR1cykuanNvbihlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2l0aCBPcGVuQUkgQVBJIHJlcXVlc3Q6ICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHtcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICBtZXNzYWdlOiBcIkFuIGVycm9yIG9jY3VycmVkIGR1cmluZyB5b3VyIHJlcXVlc3QuXCIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJPcGVuQUkiLCJvcGVuYWkiLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX09QRU5BSV9BUElfS0VZIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsImlucHV0IiwiYm9keSIsInRyaW0iLCJsZW5ndGgiLCJyZXNwb25zZSIsImltYWdlcyIsImdlbmVyYXRlIiwicHJvbXB0IiwibiIsInNpemUiLCJpbWFnZV91cmwiLCJkYXRhIiwidXJsIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate-image.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/generate-image.js"));
module.exports = __webpack_exports__;

})();