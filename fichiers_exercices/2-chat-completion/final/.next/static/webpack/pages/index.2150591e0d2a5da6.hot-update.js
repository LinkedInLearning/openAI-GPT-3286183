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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction generate(input) {\n    return new Promise(async (resolve)=>{\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    input\n                })\n            });\n            const data = await response.json();\n            resolve({\n                result: data.result\n            });\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n        } catch (e) {\n            console.error(e);\n        }\n    });\n}\nfunction Home() {\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [chats, setChats] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            \"role\": \"system\",\n            \"content\": \"You are a helpful assistant.\"\n        },\n        {\n            \"role\": \"user\",\n            \"content\": \"Who won the world series in 2020?\"\n        },\n        {\n            \"role\": \"assistant\",\n            \"content\": \"The Los Angeles Dodgers won the World Series in 2020.\"\n        },\n        {\n            \"role\": \"user\",\n            \"content\": \"Where was it played?\"\n        }\n    ]);\n    async function handleOnSubmit(event) {\n        event.preventDefault();\n        ref.current.value = null;\n        setChats([\n            ...chats,\n            {\n                role: \"user\",\n                content: input\n            }\n        ]);\n        try {\n        // generate\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    const messages = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        return chats.map((chat)=>{\n            const key = chat[\"role\"] === \"assistant\" ? \"Bot\" : \"You\";\n            return {\n                [key]: chat[\"content\"]\n            };\n        });\n    }, [\n        chats\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Chat Bot\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\",\n                        rel: \"stylesheet\",\n                        integrity: \"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-primary\",\n                        children: \"Chat Bot\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"80%\",\n                            height: \"70vh\",\n                            background: \"#eee\",\n                            overflow: \"scroll\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"messages p-4\",\n                            style: {\n                                listStyleType: \"none\"\n                            },\n                            children: messages.map((message, index)=>{\n                                return Object.entries(message).map((param)=>{\n                                    let [key, value] = param;\n                                    if (key === \"You\") {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"mb-1\",\n                                            children: \"\".concat(key, \": \").concat(value)\n                                        }, index, false, {\n                                            fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 26\n                                        }, this);\n                                    }\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"mb-1\",\n                                        style: {\n                                            fontStyle: \"italic\"\n                                        },\n                                        children: \"\".concat(key, \": \").concat(value)\n                                    }, index, false, {\n                                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 24\n                                    }, this);\n                                });\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleOnSubmit,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"d-flex justify-content-between mt-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    ref: ref,\n                                    className: \"form-control\",\n                                    style: {\n                                        height: \"fit-content\",\n                                        marginRight: \"0.5rem\"\n                                    },\n                                    height: \"fit-content\",\n                                    type: \"text\",\n                                    onChange: (e)=>setInput(e.target.value)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    className: \"btn btn-primary mb-3\",\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                        lineNumber: 93,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/2-chat-completion/final/pages/index.js\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"+07R4tRLFrydfMmCrlqy/aKLTu8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUI7Ozs7O29DQUNuQyxDQUFDO29DQUNELHFCQUFPLDhEQUFDRzt3Q0FBR2IsV0FBVTt3Q0FBT0UsT0FBTzs0Q0FBRVksV0FBVzt3Q0FBUTtrREFBZ0IsR0FBVzdCLE9BQVJNLEtBQUksTUFBVSxPQUFOTjt1Q0FBbkJ5Qjs7Ozs7Z0NBQ2xFOzRCQUNGOzs7Ozs7Ozs7OztrQ0FHSiw4REFBQ0s7d0JBQUtDLFVBQVVuQztrQ0FDZCw0RUFBQ1c7NEJBQUlRLFdBQVU7OzhDQUNiLDhEQUFDMUM7b0NBQ0NtQixLQUFLQTtvQ0FDTHVCLFdBQVU7b0NBQ1ZFLE9BQU87d0NBQUVFLFFBQVE7d0NBQWVhLGFBQWE7b0NBQVM7b0NBQ3REYixRQUFPO29DQUNQYyxNQUFLO29DQUNMQyxVQUFVLENBQUM3QyxJQUFNSSxTQUFTSixFQUFFOEMsTUFBTSxDQUFDbkMsS0FBSzs7Ozs7OzhDQUUxQyw4REFBQ29DO29DQUFPSCxNQUFLO29DQUFTbEIsV0FBVTs4Q0FBdUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5FLENBQUM7R0FqRnVCeEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZShpbnB1dCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGVcIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaW5wdXQgfSksXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIHJlc29sdmUoeyByZXN1bHQ6IGRhdGEucmVzdWx0IH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHRocm93IChcbiAgICAgICAgICBkYXRhLmVycm9yIHx8XG4gICAgICAgICAgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgcmVmID0gdXNlUmVmKCk7XG4gIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjaGF0cywgc2V0Q2hhdHNdID0gdXNlU3RhdGUoW1xuICAgICAgICB7XCJyb2xlXCI6IFwic3lzdGVtXCIsIFwiY29udGVudFwiOiBcIllvdSBhcmUgYSBoZWxwZnVsIGFzc2lzdGFudC5cIn0sXG4gICAgICAgIHtcInJvbGVcIjogXCJ1c2VyXCIsIFwiY29udGVudFwiOiBcIldobyB3b24gdGhlIHdvcmxkIHNlcmllcyBpbiAyMDIwP1wifSxcbiAgICAgICAge1wicm9sZVwiOiBcImFzc2lzdGFudFwiLCBcImNvbnRlbnRcIjogXCJUaGUgTG9zIEFuZ2VsZXMgRG9kZ2VycyB3b24gdGhlIFdvcmxkIFNlcmllcyBpbiAyMDIwLlwifSxcbiAgICAgICAge1wicm9sZVwiOiBcInVzZXJcIiwgXCJjb250ZW50XCI6IFwiV2hlcmUgd2FzIGl0IHBsYXllZD9cIn1cbiAgICBdKTtcblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmVmLmN1cnJlbnQudmFsdWUgPSBudWxsO1xuICAgIHNldENoYXRzKFsuLi5jaGF0cywgeyByb2xlOiBcInVzZXJcIiwgY29udGVudDogaW5wdXQgfV0pO1xuICAgIHRyeSB7XG4gICAgICAvLyBnZW5lcmF0ZVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBtZXNzYWdlcyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiBjaGF0cy5tYXAoY2hhdCA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBjaGF0W1wicm9sZVwiXSA9PT0gXCJhc3Npc3RhbnRcIiA/IFwiQm90XCIgOiBcIllvdVwiO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2tleV06IGNoYXRbXCJjb250ZW50XCJdXG4gICAgICB9XG4gICAgfSlcbiAgfSwgW2NoYXRzXSlcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNoYXQgQm90PC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4xLjMvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC0xQm1FNGtXQnE3OGlZaEZsZHZLdWhmVEFVNmF1VTh0VDk0V3JIZnRqRGJyQ0VYU1Uxb0JvcXlsMlF2WjZqSVczXCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+Q2hhdCBCb3Q8L2gxPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBcIjgwJVwiLFxuICAgICAgICAgICAgaGVpZ2h0OiBcIjcwdmhcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiI2VlZVwiLFxuICAgICAgICAgICAgb3ZlcmZsb3c6IFwic2Nyb2xsXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZXNzYWdlcyBwLTRcIiBzdHlsZT17eyBsaXN0U3R5bGVUeXBlOiBcIm5vbmVcIiB9fT5cbiAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyhtZXNzYWdlKS5tYXAoKFtrZXksIHZhbHVlXSkgPT4geyBcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcIllvdVwiKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGNsYXNzTmFtZT1cIm1iLTFcIiBrZXk9e2luZGV4fT57YCR7a2V5fTogJHt2YWx1ZX1gfTwvbGk+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPVwibWItMVwiIHN0eWxlPXt7IGZvbnRTdHlsZTogXCJpdGFsaWNcIn19IGtleT17aW5kZXh9PntgJHtrZXl9OiAke3ZhbHVlfWB9PC9saT5cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlT25TdWJtaXR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG10LTRcIj5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcImZpdC1jb250ZW50XCIsIG1hcmdpblJpZ2h0OiBcIjAuNXJlbVwiIH19XG4gICAgICAgICAgICAgIGhlaWdodD1cImZpdC1jb250ZW50XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbWItM1wiPlxuICAgICAgICAgICAgICBTZW5kXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJnZW5lcmF0ZSIsImlucHV0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJyZXN1bHQiLCJzdGF0dXMiLCJlcnJvciIsIkVycm9yIiwiZSIsImNvbnNvbGUiLCJIb21lIiwicmVmIiwic2V0SW5wdXQiLCJjaGF0cyIsInNldENoYXRzIiwiaGFuZGxlT25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwicm9sZSIsImNvbnRlbnQiLCJtZXNzYWdlcyIsIm1hcCIsImNoYXQiLCJrZXkiLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJocmVmIiwicmVsIiwiaW50ZWdyaXR5IiwiY3Jvc3NvcmlnaW4iLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsIm92ZXJmbG93IiwidWwiLCJsaXN0U3R5bGVUeXBlIiwibWVzc2FnZSIsImluZGV4IiwiT2JqZWN0IiwiZW50cmllcyIsImxpIiwiZm9udFN0eWxlIiwiZm9ybSIsIm9uU3VibWl0IiwibWFyZ2luUmlnaHQiLCJ0eXBlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});