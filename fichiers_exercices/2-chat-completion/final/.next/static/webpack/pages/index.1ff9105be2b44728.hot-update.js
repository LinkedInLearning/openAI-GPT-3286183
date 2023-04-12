"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction generate(input) {\n    return new Promise(async (resolve)=>{\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    input\n                })\n            });\n            const data = await response.json();\n            resolve({\n                result: data.result\n            });\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n        } catch (e) {\n            console.error(e);\n        }\n    });\n}\nfunction Home() {\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [chats, setChats] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            \"role\": \"system\",\n            \"content\": \"You are a helpful assistant.\"\n        },\n        {\n            \"role\": \"user\",\n            \"content\": \"Who won the world series in 2020?\"\n        },\n        {\n            \"role\": \"assistant\",\n            \"content\": \"The Los Angeles Dodgers won the World Series in 2020.\"\n        },\n        {\n            \"role\": \"user\",\n            \"content\": \"Where was it played?\"\n        }\n    ]);\n    ç;\n    async function handleOnSubmit(event) {\n        event.preventDefault();\n        ref.current.value = null;\n        setChats([\n            ...chats,\n            {\n                role: \"user\",\n                content: input\n            }\n        ]);\n        try {\n        // generate\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    const messages = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return chats.map((chat)=>{\n            const key = chat[\"role\"] === \"assistant\" ? \"Bot\" : \"You\";\n            return {\n                [key]: chat[\"content\"]\n            };\n        });\n    }, [\n        chats\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Chat Bot\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\",\n                        rel: \"stylesheet\",\n                        integrity: \"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-primary\",\n                        children: \"Chat Bot\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"80%\",\n                            height: \"70vh\",\n                            background: \"#eee\",\n                            overflow: \"scroll\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"messages p-4\",\n                            style: {\n                                listStyleType: \"none\"\n                            },\n                            children: messages.map((message, index)=>{\n                                return Object.entries(message).map((param)=>{\n                                    let [key, value] = param;\n                                    if (key === \"You\") {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"mb-1\",\n                                            children: \"\".concat(key, \": \").concat(value)\n                                        }, index, false, {\n                                            fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 26\n                                        }, this);\n                                    }\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"mb-1\",\n                                        style: {\n                                            fontStyle: \"italic\"\n                                        },\n                                        children: \"\".concat(key, \": \").concat(value)\n                                    }, index, false, {\n                                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 24\n                                    }, this);\n                                });\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleOnSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex justify-content-between mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    ref: ref,\n                                    className: \"form-control\",\n                                    style: {\n                                        height: \"fit-content\",\n                                        marginRight: \"0.5rem\"\n                                    },\n                                    height: \"fit-content\",\n                                    type: \"text\",\n                                    onChange: (e)=>setInput(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"btn btn-primary mb-3\",\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"+07R4tRLFrydfMmCrlqy/aKLTu8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MkNBQW5CeUI7Ozs7O29DQUNuQyxDQUFDO29DQUNELHFCQUFPLDhEQUFDRzt3Q0FBR2IsV0FBVTt3Q0FBT0UsT0FBTzs0Q0FBRVksV0FBVzt3Q0FBUTtrREFBZ0IsR0FBVzdCLE9BQVJNLEtBQUksTUFBVSxPQUFOTjt1Q0FBbkJ5Qjs7Ozs7Z0NBQ2xFOzRCQUNGOzs7Ozs7Ozs7OztrQ0FHSiw4REFBQ0s7d0JBQUtDLFVBQVVuQztrQ0FDZCw0RUFBQ1c7NEJBQUlRLFdBQVU7OzhDQUNiLDhEQUFDM0M7b0NBQ0NtQixLQUFLQTtvQ0FDTHdCLFdBQVU7b0NBQ1ZFLE9BQU87d0NBQUVFLFFBQVE7d0NBQWVhLGFBQWE7b0NBQVM7b0NBQ3REYixRQUFPO29DQUNQYyxNQUFLO29DQUNMQyxVQUFVLENBQUM5QyxJQUFNSSxTQUFTSixFQUFFK0MsTUFBTSxDQUFDbkMsS0FBSzs7Ozs7OzhDQUUxQyw4REFBQ29DO29DQUFPSCxNQUFLO29DQUFTbEIsV0FBVTs4Q0FBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5FLENBQUM7R0FqRnVCekI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZShpbnB1dCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGVcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaW5wdXQgfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJlc29sdmUoeyByZXN1bHQ6IGRhdGEucmVzdWx0IH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHRocm93IChcbiAgICAgICAgICBkYXRhLmVycm9yIHx8XG4gICAgICAgICAgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGF0cywgc2V0Q2hhdHNdID0gdXNlU3RhdGUoW1xuICAgICAgICB7XCJyb2xlXCI6IFwic3lzdGVtXCIsIFwiY29udGVudFwiOiBcIllvdSBhcmUgYSBoZWxwZnVsIGFzc2lzdGFudC5cIn0sXG4gICAgICAgIHtcInJvbGVcIjogXCJ1c2VyXCIsIFwiY29udGVudFwiOiBcIldobyB3b24gdGhlIHdvcmxkIHNlcmllcyBpbiAyMDIwP1wifSxcbiAgICAgICAge1wicm9sZVwiOiBcImFzc2lzdGFudFwiLCBcImNvbnRlbnRcIjogXCJUaGUgTG9zIEFuZ2VsZXMgRG9kZ2VycyB3b24gdGhlIFdvcmxkIFNlcmllcyBpbiAyMDIwLlwifSxcbiAgICAgICAge1wicm9sZVwiOiBcInVzZXJcIiwgXCJjb250ZW50XCI6IFwiV2hlcmUgd2FzIGl0IHBsYXllZD9cIn1cbiAgICBdKTtcbsOnXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZU9uU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICByZWYuY3VycmVudC52YWx1ZSA9IG51bGw7XG4gICAgc2V0Q2hhdHMoWy4uLmNoYXRzLCB7IHJvbGU6IFwidXNlclwiLCBjb250ZW50OiBpbnB1dCB9XSk7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGdlbmVyYXRlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG1lc3NhZ2VzID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGNoYXRzLm1hcChjaGF0ID0+IHtcbiAgICAgIGNvbnN0IGtleSA9IGNoYXRbXCJyb2xlXCJdID09PSBcImFzc2lzdGFudFwiID8gXCJCb3RcIiA6IFwiWW91XCI7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBba2V5XTogY2hhdFtcImNvbnRlbnRcIl1cbiAgICAgIH1cbiAgICB9KVxuICB9LCBbY2hhdHNdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q2hhdCBCb3Q8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTFCbUU0a1dCcTc4aVloRmxkdkt1aGZUQVU2YXVVOHRUOTRXckhmdGpEYnJDRVhTVTFvQm9xeWwyUXZaNmpJVzNcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnlcIj5DaGF0IEJvdDwvaDE+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgd2lkdGg6IFwiODAlXCIsXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNzB2aFwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjZWVlXCIsXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJzY3JvbGxcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lc3NhZ2VzIHAtNFwiIHN0eWxlPXt7IGxpc3RTdHlsZVR5cGU6IFwibm9uZVwiIH19PlxuICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKG1lc3NhZ2UpLm1hcCgoW2tleSwgdmFsdWVdKSA9PiB7IFxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwiWW91XCIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPVwibWItMVwiIGtleT17aW5kZXh9PntgJHtrZXl9OiAke3ZhbHVlfWB9PC9saT5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaSBjbGFzc05hbWU9XCJtYi0xXCIgc3R5bGU9e3sgZm9udFN0eWxlOiBcIml0YWxpY1wifX0ga2V5PXtpbmRleH0+e2Ake2tleX06ICR7dmFsdWV9YH08L2xpPlxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbXQtNFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiZml0LWNvbnRlbnRcIiwgbWFyZ2luUmlnaHQ6IFwiMC41cmVtXCIgfX1cbiAgICAgICAgICAgICAgaGVpZ2h0PVwiZml0LWNvbnRlbnRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBtYi0zXCI+XG4gICAgICAgICAgICAgIFNlbmRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZU1lbW8iLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImdlbmVyYXRlIiwiaW5wdXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInJlc3VsdCIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsIkhvbWUiLCJyZWYiLCJzZXRJbnB1dCIsImNoYXRzIiwic2V0Q2hhdHMiLCLDpyIsImhhbmRsZU9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInJvbGUiLCJjb250ZW50IiwibWVzc2FnZXMiLCJtYXAiLCJjaGF0Iiwia2V5IiwiZGl2IiwidGl0bGUiLCJsaW5rIiwiaHJlZiIsInJlbCIsImludGVncml0eSIsImNyb3Nzb3JpZ2luIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmQiLCJvdmVyZmxvdyIsInVsIiwibGlzdFN0eWxlVHlwZSIsIm1lc3NhZ2UiLCJpbmRleCIsIk9iamVjdCIsImVudHJpZXMiLCJsaSIsImZvbnRTdHlsZSIsImZvcm0iLCJvblN1Ym1pdCIsIm1hcmdpblJpZ2h0IiwidHlwZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});