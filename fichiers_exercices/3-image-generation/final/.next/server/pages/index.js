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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"index_main__3wZvj\",\n\t\"icon\": \"index_icon__CgRrC\",\n\t\"result\": \"index_result__66e57\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29wZW5haS1xdWlja3N0YXJ0LW5vZGUvLi9wYWdlcy9pbmRleC5tb2R1bGUuY3NzP2Q5ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcImluZGV4X21haW5fXzN3WnZqXCIsXG5cdFwiaWNvblwiOiBcImluZGV4X2ljb25fX0NnUnJDXCIsXG5cdFwicmVzdWx0XCI6IFwiaW5kZXhfcmVzdWx0X182NmU1N1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction generateRecipe(input) {\n    return new Promise(async (resolve)=>{\n        try {\n            const response = await fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    input\n                })\n            });\n            const data = await response.json();\n            resolve({\n                recipe: data.result,\n                input\n            });\n            if (response.status !== 200) {\n                throw data.error || new Error(`Request failed with status ${response.status}`);\n            }\n        } catch (e) {\n            console.error(e);\n        }\n    });\n}\nasync function generateImage({ recipe  }) {\n    return new Promise(async (resolve)=>{\n        try {\n            const response = await fetch(\"/api/generate-image\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    input: recipe\n                })\n            });\n            const data = await response.json();\n            if (response.status !== 200) {\n                throw data.error || new Error(`Request failed with status ${response.status}`);\n            }\n            resolve({\n                recipe,\n                image: data.image_url\n            });\n        } catch (e) {\n            console.error(e);\n        }\n    });\n}\nconst Loading = ({ isVisible  })=>isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Loading ...\"\n    }, void 0, false, {\n        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n        lineNumber: 54,\n        columnNumber: 49\n    }, undefined);\nconst Recipe = ({ recipe , image , isVisible  })=>{\n    const textFormatted = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{\n        const recipearray = recipe?.split(\"\\n\").slice(4, -1).join(\"\\n\");\n        return {\n            title: recipe?.split(\"\\n\")[2],\n            recipe: recipearray\n        };\n    }, [\n        recipe\n    ]);\n    return isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: textFormatted.title\n            }, void 0, false, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    width: \"80%\",\n                    padding: \"2rem\"\n                },\n                children: [\n                    image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        width: \"350\",\n                        height: \"350\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 69,\n                        columnNumber: 21\n                    }, undefined),\n                    recipe && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            justifyContent: \"center\",\n                            alignItems: \"center\",\n                            padding: \"0 2.4rem\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                style: {\n                                    margin: 0,\n                                    fontSize: \"1rem\",\n                                    fontStyle: \"italic\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                    style: {\n                                        margin: 0\n                                    },\n                                    children: textFormatted.recipe\n                                }, void 0, false, {\n                                    fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                            lineNumber: 79,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true);\n};\nfunction Home() {\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();\n    const [isPending, loading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    async function onSubmit(event) {\n        event.preventDefault();\n        loading(true);\n        ref.current.value = null;\n        setInput(\"\");\n        try {\n            //generate\n            generateRecipe(input).then(({ recipe , input  })=>{\n                setResult({\n                    recipe\n                });\n                loading(false);\n            });\n        } catch (error) {\n            // Consider implementing your own error handling logic here\n            console.error(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create a recipe\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/dog.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 118,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Create a recipe\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: onSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ref: ref,\n                                style: {\n                                    marginBottom: \"1.3rem\"\n                                },\n                                type: \"text\",\n                                placeholder: \"ingredients ...\",\n                                onChange: (e)=>setInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                                lineNumber: 124,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"submit\",\n                                value: \"Check\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                                lineNumber: 131,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {\n                        isVisible: isPending\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Recipe, {\n                        ...result,\n                        isVisible: !isPending\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                        lineNumber: 134,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/3-image-generation/final/pages/index.js\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDtnQ0FBTW1FLE1BQUs7Z0NBQVNWLE9BQU07Ozs7Ozs7Ozs7OztrQ0FFN0IsOERBQUNuQzt3QkFBUUMsV0FBVzBCOzs7Ozs7a0NBQ3BCLDhEQUFDeEI7d0JBQVEsR0FBR1osTUFBTTt3QkFBRVUsV0FBVyxDQUFDMEI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlTWVtbywgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUmVjaXBlKGlucHV0KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZVwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpbnB1dCB9KSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgcmVzb2x2ZSh7IHJlY2lwZTogZGF0YS5yZXN1bHQsIGlucHV0IH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHRocm93IChcbiAgICAgICAgICBkYXRhLmVycm9yIHx8XG4gICAgICAgICAgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVJbWFnZSh7IHJlY2lwZSB9KSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9nZW5lcmF0ZS1pbWFnZVwiLCB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpbnB1dDogcmVjaXBlIH0pLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIHRocm93IChcbiAgICAgICAgICBkYXRhLmVycm9yIHx8XG4gICAgICAgICAgbmV3IEVycm9yKGBSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyAke3Jlc3BvbnNlLnN0YXR1c31gKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmVzb2x2ZSh7IHJlY2lwZSwgaW1hZ2U6IGRhdGEuaW1hZ2VfdXJsIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9KTtcbn1cblxuY29uc3QgTG9hZGluZyA9ICh7IGlzVmlzaWJsZSB9KSA9PiBpc1Zpc2libGUgJiYgPGgyPkxvYWRpbmcgLi4uPC9oMj47XG5cbmNvbnN0IFJlY2lwZSA9ICh7IHJlY2lwZSwgaW1hZ2UsIGlzVmlzaWJsZSB9KSA9PiB7XG4gIGNvbnN0IHRleHRGb3JtYXR0ZWQgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCByZWNpcGVhcnJheSA9IHJlY2lwZT8uc3BsaXQoXCJcXG5cIikuc2xpY2UoNCwgLTEpLmpvaW4oXCJcXG5cIik7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiByZWNpcGU/LnNwbGl0KFwiXFxuXCIpWzJdLFxuICAgICAgcmVjaXBlOiByZWNpcGVhcnJheSxcbiAgICB9O1xuICB9LCBbcmVjaXBlXSk7XG4gIHJldHVybiAoXG4gICAgaXNWaXNpYmxlICYmIChcbiAgICAgIDw+XG4gICAgICAgIDxoMj57dGV4dEZvcm1hdHRlZC50aXRsZX08L2gyPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCB3aWR0aDogXCI4MCVcIiwgcGFkZGluZzogXCIycmVtXCIgfX0+XG4gICAgICAgICAge2ltYWdlICYmIDxpbWcgc3JjPXtpbWFnZX0gd2lkdGg9XCIzNTBcIiBoZWlnaHQ9XCIzNTBcIiAvPn1cbiAgICAgICAgICB7cmVjaXBlICYmIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMCAyLjRyZW1cIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBtYXJnaW46IDAsIGZvbnRTaXplOiBcIjFyZW1cIiwgZm9udFN0eWxlOiBcIml0YWxpY1wiIH19PlxuICAgICAgICAgICAgICAgICAgPHByZSBzdHlsZT17eyBtYXJnaW46IDAgfX0+e3RleHRGb3JtYXR0ZWQucmVjaXBlfTwvcHJlPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvPlxuICAgIClcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpXG4gIGNvbnN0IFtpc1BlbmRpbmcsIGxvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcmVzdWx0LCBzZXRSZXN1bHRdID0gdXNlU3RhdGUoKTtcblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbG9hZGluZyh0cnVlKTtcbiAgICByZWYuY3VycmVudC52YWx1ZSA9IG51bGw7XG4gICAgc2V0SW5wdXQoXCJcIik7XG4gICAgdHJ5IHtcbiAgICAgIC8vZ2VuZXJhdGVcbiAgICAgIGdlbmVyYXRlUmVjaXBlKGlucHV0KS50aGVuKCh7IHJlY2lwZSwgaW5wdXQgfSk9PiB7XG4gICAgICAgIHNldFJlc3VsdCh7IHJlY2lwZSB9KVxuICAgICAgICBsb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gQ29uc2lkZXIgaW1wbGVtZW50aW5nIHlvdXIgb3duIGVycm9yIGhhbmRsaW5nIGxvZ2ljIGhlcmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBhIHJlY2lwZTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2RvZy5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGgzPkNyZWF0ZSBhIHJlY2lwZTwvaDM+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxLjNyZW1cIiB9fVxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJpbmdyZWRpZW50cyAuLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiQ2hlY2tcIiAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxMb2FkaW5nIGlzVmlzaWJsZT17aXNQZW5kaW5nfS8+XG4gICAgICAgIDxSZWNpcGUgey4uLnJlc3VsdH0gaXNWaXNpYmxlPXshaXNQZW5kaW5nfS8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZU1lbW8iLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInN0eWxlcyIsImdlbmVyYXRlUmVjaXBlIiwiaW5wdXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInJlY2lwZSIsInJlc3VsdCIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJlIiwiY29uc29sZSIsImdlbmVyYXRlSW1hZ2UiLCJpbWFnZSIsImltYWdlX3VybCIsIkxvYWRpbmciLCJpc1Zpc2libGUiLCJoMiIsIlJlY2lwZSIsInRleHRGb3JtYXR0ZWQiLCJyZWNpcGVhcnJheSIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwidGl0bGUiLCJkaXYiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aWR0aCIsInBhZGRpbmciLCJpbWciLCJzcmMiLCJoZWlnaHQiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJwIiwibWFyZ2luIiwiZm9udFNpemUiLCJmb250U3R5bGUiLCJwcmUiLCJIb21lIiwicmVmIiwiaXNQZW5kaW5nIiwibG9hZGluZyIsInNldElucHV0Iiwic2V0UmVzdWx0Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInZhbHVlIiwidGhlbiIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsImgzIiwiZm9ybSIsIm1hcmdpbkJvdHRvbSIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();