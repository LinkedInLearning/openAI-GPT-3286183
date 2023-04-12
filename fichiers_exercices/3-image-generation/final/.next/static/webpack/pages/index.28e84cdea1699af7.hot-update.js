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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nfunction generateRecipe(input) {\n    return new Promise(async (resolve)=>{\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    input\n                })\n            });\n            const data = await response.json();\n            resolve({\n                recipe: data.result,\n                input\n            });\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n        } catch (e) {\n            console.error(e);\n        }\n    });\n}\nasync function generateImage(param) {\n    let { recipe  } = param;\n    return new Promise(async (resolve)=>{\n        try {\n            const response = await fetch(\"/api/generate-image\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    input: recipe\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(\"Request failed with status \".concat(response.status));\n            }\n            resolve({\n                recipe,\n                image: data.image_url\n            });\n        } catch (e) {\n            console.error(e);\n        }\n    });\n}\nconst Loading = (param)=>{\n    let { isVisible  } = param;\n    return isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Loading ...\"\n    }, void 0, false, {\n        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n        lineNumber: 54,\n        columnNumber: 49\n    }, undefined);\n};\n_c = Loading;\nconst Recipe = (param)=>{\n    let { recipe , image , isVisible  } = param;\n    _s();\n    const textFormatted = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        const recipearray = recipe === null || recipe === void 0 ? void 0 : recipe.split(\"\\n\").slice(4, -1).join(\"\\n\");\n        return {\n            title: recipe === null || recipe === void 0 ? void 0 : recipe.split(\"\\n\")[2],\n            recipe: recipearray\n        };\n    }, [\n        recipe\n    ]);\n    return isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: textFormatted.title\n            }, void 0, false, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    width: \"80%\",\n                    padding: \"2rem\"\n                },\n                children: [\n                    image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        width: \"350\",\n                        height: \"350\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, undefined),\n                    recipe && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\",\n                            padding: \"0 2.4rem\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    margin: 0,\n                                    fontSize: \"1rem\",\n                                    fontStyle: \"italic\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                    style: {\n                                        margin: 0\n                                    },\n                                    children: textFormatted.recipe\n                                }, void 0, false, {\n                                    fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                            lineNumber: 79,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Recipe, \"KhIZ6FZNjVPZw14iFZSZydDrwKg=\");\n_c1 = Recipe;\nfunction Home() {\n    _s1();\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [isPending, loading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function onSubmit(event) {\n        event.preventDefault();\n        loading(true);\n        ref.current.value = null;\n        setInput(\"\");\n        try {\n            //generate\n            generate(input).then(console.log);\n        } catch (error) {\n            // Consider implementing your own error handling logic here\n            console.error(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create a recipe\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/dog.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                lineNumber: 113,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Create a recipe\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 119,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ref: ref,\n                                style: {\n                                    marginBottom: \"1.3rem\"\n                                },\n                                type: \"text\",\n                                placeholder: \"ingredients ...\",\n                                onChange: (e)=>setInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                                lineNumber: 121,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Check\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                                lineNumber: 128,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this),\n                    \"s\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {\n                        isVisible: isPending\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Recipe, {\n                        ...result,\n                        isVisible: !isPending\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n        lineNumber: 112,\n        columnNumber: 5\n    }, this);\n}\n_s1(Home, \"+xbY/vseIZ+l6cnKq7lotLO40ls=\");\n_c2 = Home;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Loading\");\n$RefreshReg$(_c1, \"Recipe\");\n$RefreshReg$(_c2, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLOzs7Ozs7MENBRTFDLDhEQUFDekQ7Z0NBQU1xRSxNQUFLO2dDQUFTWixPQUFNOzs7Ozs7Ozs7Ozs7b0JBQ3RCO2tDQUNQLDhEQUFDbkM7d0JBQVFDLFdBQVcwQjs7Ozs7O2tDQUNwQiw4REFBQ3hCO3dCQUFRLEdBQUdaLE1BQU07d0JBQUVVLFdBQVcsQ0FBQzBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEMsQ0FBQztJQTNDdUJGO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmVjaXBlKGlucHV0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpbnB1dCB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmVzb2x2ZSh7IHJlY2lwZTogZGF0YS5yZXN1bHQsIGlucHV0IH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHRocm93IChcbiAgICAgICAgICBkYXRhLmVycm9yIHx8XG4gICAgICAgICAgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbWFnZSh7IHJlY2lwZSB9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZS1pbWFnZVwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpbnB1dDogcmVjaXBlIH0pLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHRocm93IChcbiAgICAgICAgICBkYXRhLmVycm9yIHx8XG4gICAgICAgICAgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZSh7IHJlY2lwZSwgaW1hZ2U6IGRhdGEuaW1hZ2VfdXJsIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgTG9hZGluZyA9ICh7IGlzVmlzaWJsZSB9KSA9PiBpc1Zpc2libGUgJiYgPGgyPkxvYWRpbmcgLi4uPC9oMj47XG5cbmNvbnN0IFJlY2lwZSA9ICh7IHJlY2lwZSwgaW1hZ2UsIGlzVmlzaWJsZSB9KSA9PiB7XG4gIGNvbnN0IHRleHRGb3JtYXR0ZWQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZWNpcGVhcnJheSA9IHJlY2lwZT8uc3BsaXQoXCJcXG5cIikuc2xpY2UoNCwgLTEpLmpvaW4oXCJcXG5cIik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiByZWNpcGU/LnNwbGl0KFwiXFxuXCIpWzJdLFxuICAgICAgcmVjaXBlOiByZWNpcGVhcnJheSxcbiAgICB9O1xuICB9LCBbcmVjaXBlXSk7XG4gIHJldHVybiAoXG4gICAgaXNWaXNpYmxlICYmIChcbiAgICAgIDw+XG4gICAgICAgIDxoMj57dGV4dEZvcm1hdHRlZC50aXRsZX08L2gyPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB3aWR0aDogXCI4MCVcIiwgcGFkZGluZzogXCIycmVtXCIgfX0+XG4gICAgICAgICAge2ltYWdlICYmIDxpbWcgc3JjPXtpbWFnZX0gd2lkdGg9XCIzNTBcIiBoZWlnaHQ9XCIzNTBcIiAvPn1cbiAgICAgICAgICB7cmVjaXBlICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAyLjRyZW1cIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IDAsIGZvbnRTaXplOiBcIjFyZW1cIiwgZm9udFN0eWxlOiBcIml0YWxpY1wiIH19PlxuICAgICAgICAgICAgICAgICAgPHByZSBzdHlsZT17eyBtYXJnaW46IDAgfX0+e3RleHRGb3JtYXR0ZWQucmVjaXBlfTwvcHJlPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgIClcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpXG4gIGNvbnN0IFtpc1BlbmRpbmcsIGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbG9hZGluZyh0cnVlKTtcbiAgICByZWYuY3VycmVudC52YWx1ZSA9IG51bGw7XG4gICAgc2V0SW5wdXQoXCJcIik7XG4gICAgdHJ5IHtcbiAgICAgIC8vZ2VuZXJhdGVcbiAgICAgIGdlbmVyYXRlKGlucHV0KS50aGVuKGNvbnNvbGUubG9nKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBDb25zaWRlciBpbXBsZW1lbnRpbmcgeW91ciBvd24gZXJyb3IgaGFuZGxpbmcgbG9naWMgaGVyZVxuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIGEgcmVjaXBlPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZG9nLnBuZ1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDM+Q3JlYXRlIGEgcmVjaXBlPC9oMz5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjEuM3JlbVwiIH19XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImluZ3JlZGllbnRzIC4uLlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElucHV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJDaGVja1wiIC8+XG4gICAgICAgIDwvZm9ybT5zXG4gICAgICAgIDxMb2FkaW5nIGlzVmlzaWJsZT17aXNQZW5kaW5nfS8+XG4gICAgICAgIDxSZWNpcGUgey4uLnJlc3VsdH0gaXNWaXNpYmxlPXshaXNQZW5kaW5nfS8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInN0eWxlcyIsImdlbmVyYXRlUmVjaXBlIiwiaW5wdXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInJlY2lwZSIsInJlc3VsdCIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImdlbmVyYXRlSW1hZ2UiLCJpbWFnZSIsImltYWdlX3VybCIsIkxvYWRpbmciLCJpc1Zpc2libGUiLCJoMiIsIlJlY2lwZSIsInRleHRGb3JtYXR0ZWQiLCJyZWNpcGVhcnJheSIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwidGl0bGUiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aWR0aCIsInBhZGRpbmciLCJpbWciLCJzcmMiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwIiwibWFyZ2luIiwiZm9udFNpemUiLCJmb250U3R5bGUiLCJwcmUiLCJIb21lIiwicmVmIiwiaXNQZW5kaW5nIiwibG9hZGluZyIsInNldElucHV0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwiZ2VuZXJhdGUiLCJ0aGVuIiwibG9nIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDMiLCJmb3JtIiwibWFyZ2luQm90dG9tIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0YXJnZXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});