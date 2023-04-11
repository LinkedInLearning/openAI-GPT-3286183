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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Loading = (param)=>{\n    let { isVisible  } = param;\n    return isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"mt-4 text-center\",\n        children: \"Loading ...\"\n    }, void 0, false, {\n        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 49\n    }, undefined);\n};\n_c = Loading;\nconst Result = (param)=>{\n    let { result , isVisible  } = param;\n    return isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"mt-5 text-center\",\n        style: {\n            width: \"60%\"\n        },\n        children: result\n    }, void 0, false, {\n        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n        lineNumber: 10,\n        columnNumber: 7\n    }, undefined);\n};\n_c1 = Result;\nfunction Home() {\n    _s();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [isPending, loading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function generate() {\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                input\n            })\n        });\n        const data = await response.json();\n        if (response.status !== 200) {\n            throw data.error || new Error(\"Request failed with status \".concat(response.status));\n        }\n        return {\n            result: {}\n        };\n    }\n    async function handleOnSubmit(event) {\n        event.preventDefault();\n        loading(true);\n        try {\n            // generate\n            generate().then((data)=>{\n                console.log(data);\n                setResult(data.result);\n                loading(false);\n            });\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" \\uD83D\\uDD0D - OpenAI-Facts Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\",\n                        rel: \"stylesheet\",\n                        integrity: \"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"#1abc9c\"\n                                },\n                                children: \"Facts\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"#e74c3c\"\n                                },\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleOnSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ref: ref,\n                                type: \"text\",\n                                name: \"title\",\n                                placeholder: \"search ...\",\n                                onChange: (e)=>setInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                                lineNumber: 81,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {\n                        isVisible: isPending,\n                        input: input\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Result, {\n                        isVisible: !isPending,\n                        result: result\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"S4HW/NaDwSJ0kempuLjLqGqf2AE=\");\n_c2 = Home;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Loading\");\n$RefreshReg$(_c1, \"Result\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNZO0FBQ0Q7QUFFeEMsTUFBTUksVUFBVSxTQUFtQkM7UUFBbEIsRUFBRUEsVUFBUyxFQUFFO1dBQUtBLDJCQUFhLDhEQUFDQztRQUFHQyxXQUFVO2tCQUFtQjs7Ozs7O0FBQWU7S0FBMUZIO0FBRU4sTUFBTUksU0FBUyxTQUEyQjtRQUExQixFQUFFQyxPQUFNLEVBQUVKLFVBQVMsRUFBRTtJQUNuQyxPQUNFQSwyQkFDRSw4REFBQ0s7UUFBRUgsV0FBVTtRQUFtQkksT0FBTztZQUFFQyxPQUFPO1FBQU07a0JBQ25ESDs7Ozs7O0FBSVQ7TUFSTUQ7QUFVUyxTQUFTSyxPQUFPOztJQUM3QixNQUFNQyxNQUFNWiw2Q0FBTUEsQ0FBQyxJQUFJO0lBQ3ZCLE1BQU0sQ0FBQ2EsV0FBV0MsUUFBUSxHQUFHZiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzNDLE1BQU0sQ0FBQ1EsUUFBUVEsVUFBVSxHQUFHaEIsK0NBQVFBLENBQUMsSUFBSTtJQUN6QyxNQUFNLENBQUNpQixPQUFPQyxTQUFTLEdBQUdsQiwrQ0FBUUEsQ0FBQztJQUVuQyxlQUFlbUIsV0FBVztRQUN4QixNQUFNQyxXQUFXLE1BQU1DLE1BQU0saUJBQWlCO1lBQzVDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQ1AsZ0JBQWdCO1lBQ2xCO1lBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRVQ7WUFBTTtRQUMvQjtRQUNBLE1BQU1VLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtRQUNoQyxJQUFJUixTQUFTUyxNQUFNLEtBQUssS0FBSztZQUMzQixNQUNFRixLQUFLRyxLQUFLLElBQUksSUFBSUMsTUFBTSw4QkFBOEMsT0FBaEJYLFNBQVNTLE1BQU0sR0FDckU7UUFDSixDQUFDO1FBQ0QsT0FBTztZQUFFckIsUUFBUSxDQUFDO1FBQUU7SUFDdEI7SUFFQSxlQUFld0IsZUFBZUMsS0FBSyxFQUFFO1FBQ25DQSxNQUFNQyxjQUFjO1FBQ3BCbkIsUUFBUSxJQUFJO1FBQ1osSUFBSTtZQUNGLFdBQVc7WUFDWEksV0FDQ2dCLElBQUksQ0FBQ1IsQ0FBQUEsT0FBUTtnQkFDWlMsUUFBUUMsR0FBRyxDQUFDVjtnQkFDWlgsVUFBVVcsS0FBS25CLE1BQU07Z0JBQ3JCTyxRQUFRLEtBQUs7WUFDZjtRQUNGLEVBQUUsT0FBT2UsT0FBTztZQUNkTSxRQUFRTixLQUFLLENBQUNBO1FBQ2hCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ1E7OzBCQUNDLDhEQUFDdkMsa0RBQUlBOztrQ0FDSCw4REFBQ3dDO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUNDQyxNQUFLO3dCQUNMQyxLQUFJO3dCQUNKQyxXQUFVO3dCQUNWQyxhQUFZOzs7Ozs7Ozs7Ozs7MEJBSWhCLDhEQUFDQztnQkFBS3ZDLFdBQVdKLCtEQUFXOztrQ0FDMUIsOERBQUM0Qzs7MENBQ0MsOERBQUNDO2dDQUFLckMsT0FBTztvQ0FBRXNDLE9BQU87Z0NBQVU7MENBQUc7Ozs7Ozs0QkFBYTswQ0FDaEQsOERBQUNEO2dDQUFLckMsT0FBTztvQ0FBRXNDLE9BQU87Z0NBQVU7MENBQUc7Ozs7Ozs7Ozs7OztrQ0FFckMsOERBQUNDO3dCQUFLQyxVQUFVbEI7OzBDQUNkLDhEQUFDZjtnQ0FDQ0osS0FBS0E7Z0NBQ0xzQyxNQUFLO2dDQUNMQyxNQUFLO2dDQUNMQyxhQUFZO2dDQUNaQyxVQUFVLENBQUNDLElBQU1yQyxTQUFTcUMsRUFBRUMsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7MENBRTFDLDhEQUFDQztnQ0FBT1AsTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7O2tDQUV4Qiw4REFBQ2hEO3dCQUFRQyxXQUFXVTt3QkFBV0csT0FBT0E7Ozs7OztrQ0FDdEMsOERBQUNWO3dCQUFPSCxXQUFXLENBQUNVO3dCQUFXTixRQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSS9DLENBQUM7R0F2RXVCSTtNQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBMb2FkaW5nID0gKHsgaXNWaXNpYmxlIH0pID0+IGlzVmlzaWJsZSAmJiA8aDIgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWNlbnRlclwiPkxvYWRpbmcgLi4uPC9oMj47XG5cbmNvbnN0IFJlc3VsdCA9ICh7IHJlc3VsdCwgaXNWaXNpYmxlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICBpc1Zpc2libGUgJiYgKFxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LWNlbnRlclwiIHN0eWxlPXt7IHdpZHRoOiBcIjYwJVwiIH19PlxuICAgICAgICB7cmVzdWx0fVxuICAgICAgPC9wPlxuICAgIClcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgW2lzUGVuZGluZywgbG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBhc3luYyBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGlucHV0IH0pLFxuICAgIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICB0aHJvdyAoXG4gICAgICAgIGRhdGEuZXJyb3IgfHwgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHsgcmVzdWx0OiB7fSB9O1xuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlT25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIC8vIGdlbmVyYXRlXG4gICAgICBnZW5lcmF0ZSgpXG4gICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgc2V0UmVzdWx0KGRhdGEucmVzdWx0KVxuICAgICAgICBsb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4g8J+UjSAtIE9wZW5BSS1GYWN0cyBTZWFyY2g8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTFCbUU0a1dCcTc4aVloRmxkdkt1aGZUQVU2YXVVOHRUOTRXckhmdGpEYnJDRVhTVTFvQm9xeWwyUXZaNmpJVzNcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjMWFiYzljXCIgfX0+RmFjdHM8L3NwYW4+e1wiIFwifVxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNlNzRjM2NcIiB9fT5TZWFyY2g8L3NwYW4+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCAuLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8TG9hZGluZyBpc1Zpc2libGU9e2lzUGVuZGluZ30gaW5wdXQ9e2lucHV0fSAvPlxuICAgICAgICA8UmVzdWx0IGlzVmlzaWJsZT17IWlzUGVuZGluZ30gcmVzdWx0PXtyZXN1bHR9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwidXNlUmVmIiwic3R5bGVzIiwiTG9hZGluZyIsImlzVmlzaWJsZSIsImgyIiwiY2xhc3NOYW1lIiwiUmVzdWx0IiwicmVzdWx0IiwicCIsInN0eWxlIiwid2lkdGgiLCJIb21lIiwicmVmIiwiaXNQZW5kaW5nIiwibG9hZGluZyIsInNldFJlc3VsdCIsImlucHV0Iiwic2V0SW5wdXQiLCJnZW5lcmF0ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJoYW5kbGVPblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImRpdiIsInRpdGxlIiwibGluayIsImhyZWYiLCJyZWwiLCJpbnRlZ3JpdHkiLCJjcm9zc29yaWdpbiIsIm1haW4iLCJoMyIsInNwYW4iLCJjb2xvciIsImZvcm0iLCJvblN1Ym1pdCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});