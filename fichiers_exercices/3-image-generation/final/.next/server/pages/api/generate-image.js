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

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/generate-image.js":
/*!*************************************!*\
  !*** ./pages/api/generate-image.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.REACT_APP_OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const input = req.body.input || \"\";\n    if (input.trim().length === 0) {\n        res.status(400).json({\n            error: {\n                message: \"Please enter a valid input\"\n            }\n        });\n        return;\n    }\n    try {\n        const response = await openai.createImage({\n            prompt: input,\n            n: 1,\n            size: \"1024x1024\"\n        });\n        res.status(200).json({\n            image_url: response.data.data[0].url\n        });\n    } catch (error) {\n        // Consider adjusting the error handling logic for your use case\n        if (error.response) {\n            console.error(error.response.status, error.response.data);\n            res.status(error.response.status).json(error.response.data);\n        } else {\n            console.error(`Error with OpenAI API request: ${error.message}`);\n            res.status(500).json({\n                error: {\n                    message: \"An error occurred during your request.\"\n                }\n            });\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2VuZXJhdGUtaW1hZ2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxELE1BQU1FLGdCQUFnQixJQUFJRixpREFBYUEsQ0FBQztJQUN0Q0csUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyx3QkFBd0I7QUFDOUM7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUU3Qiw2QkFBZSwwQ0FBZ0JNLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLElBQUksQ0FBQ1AsY0FBY0MsTUFBTSxFQUFFO1FBQ3pCTSxJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUNFO1lBQ0o7UUFDRjtRQUNBO0lBQ0YsQ0FBQztJQUVELE1BQU1DLFFBQVFOLElBQUlPLElBQUksQ0FBQ0QsS0FBSyxJQUFJO0lBQ2hDLElBQUlBLE1BQU1FLElBQUksR0FBR0MsTUFBTSxLQUFLLEdBQUc7UUFDN0JSLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDbkJDLE9BQU87Z0JBQ0xDLFNBQVM7WUFDWDtRQUNGO1FBQ0E7SUFDRixDQUFDO0lBRUQsSUFBSTtRQUVGLE1BQU1LLFdBQVcsTUFBTVgsT0FBT1ksV0FBVyxDQUFDO1lBQ3hDQyxRQUFRTjtZQUNSTyxHQUFHO1lBQ0hDLE1BQU07UUFDUjtRQUVBYixJQUFJQyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVZLFdBQVdMLFNBQVNNLElBQUksQ0FBQ0EsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsR0FBRztRQUFDO0lBQzlELEVBQUUsT0FBT2IsT0FBTztRQUNkLGdFQUFnRTtRQUNoRSxJQUFJQSxNQUFNTSxRQUFRLEVBQUU7WUFDbEJRLFFBQVFkLEtBQUssQ0FBQ0EsTUFBTU0sUUFBUSxDQUFDUixNQUFNLEVBQUVFLE1BQU1NLFFBQVEsQ0FBQ00sSUFBSTtZQUN4RGYsSUFBSUMsTUFBTSxDQUFDRSxNQUFNTSxRQUFRLENBQUNSLE1BQU0sRUFBRUMsSUFBSSxDQUFDQyxNQUFNTSxRQUFRLENBQUNNLElBQUk7UUFDNUQsT0FBTztZQUNMRSxRQUFRZCxLQUFLLENBQUMsQ0FBQywrQkFBK0IsRUFBRUEsTUFBTUMsT0FBTyxDQUFDLENBQUM7WUFDL0RKLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQ25CQyxPQUFPO29CQUNMQyxTQUFTO2dCQUNYO1lBQ0Y7UUFDRixDQUFDO0lBQ0g7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2FwaS9nZW5lcmF0ZS1pbWFnZS5qcz8xMGNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbmZpZ3VyYXRpb24sIE9wZW5BSUFwaSB9IGZyb20gXCJvcGVuYWlcIjtcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfT1BFTkFJX0FQSV9LRVksXG59KTtcbmNvbnN0IG9wZW5haSA9IG5ldyBPcGVuQUlBcGkoY29uZmlndXJhdGlvbik7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICBpZiAoIWNvbmZpZ3VyYXRpb24uYXBpS2V5KSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgZXJyb3I6IHtcbiAgICAgICAgbWVzc2FnZTpcbiAgICAgICAgICBcIk9wZW5BSSBBUEkga2V5IG5vdCBjb25maWd1cmVkLCBwbGVhc2UgZm9sbG93IGluc3RydWN0aW9ucyBpbiBSRUFETUUubWRcIixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW5wdXQgPSByZXEuYm9keS5pbnB1dCB8fCBcIlwiO1xuICBpZiAoaW5wdXQudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgIGVycm9yOiB7XG4gICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGVudGVyIGEgdmFsaWQgaW5wdXRcIixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdHJ5IHtcbiAgIFxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgb3BlbmFpLmNyZWF0ZUltYWdlKHtcbiAgICAgIHByb21wdDogaW5wdXQsXG4gICAgICBuOiAxLFxuICAgICAgc2l6ZTogXCIxMDI0eDEwMjRcIixcbiAgICB9KTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgaW1hZ2VfdXJsOiByZXNwb25zZS5kYXRhLmRhdGFbMF0udXJsIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIENvbnNpZGVyIGFkanVzdGluZyB0aGUgZXJyb3IgaGFuZGxpbmcgbG9naWMgZm9yIHlvdXIgdXNlIGNhc2VcbiAgICBpZiAoZXJyb3IucmVzcG9uc2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IucmVzcG9uc2Uuc3RhdHVzLCBlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgIHJlcy5zdGF0dXMoZXJyb3IucmVzcG9uc2Uuc3RhdHVzKS5qc29uKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aXRoIE9wZW5BSSBBUEkgcmVxdWVzdDogJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgIG1lc3NhZ2U6IFwiQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHlvdXIgcmVxdWVzdC5cIixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIkNvbmZpZ3VyYXRpb24iLCJPcGVuQUlBcGkiLCJjb25maWd1cmF0aW9uIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIlJFQUNUX0FQUF9PUEVOQUlfQVBJX0tFWSIsIm9wZW5haSIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm1lc3NhZ2UiLCJpbnB1dCIsImJvZHkiLCJ0cmltIiwibGVuZ3RoIiwicmVzcG9uc2UiLCJjcmVhdGVJbWFnZSIsInByb21wdCIsIm4iLCJzaXplIiwiaW1hZ2VfdXJsIiwiZGF0YSIsInVybCIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/generate-image.js\n");

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