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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Loading = ({ isVisible  })=>isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        className: \"mt-4 text-center\",\n        children: \"Loading ...\"\n    }, void 0, false, {\n        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n        lineNumber: 5,\n        columnNumber: 49\n    }, undefined);\nconst Result = ({ result , isVisible  })=>{\n    return isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        className: \"mt-5 text-center\",\n        style: {\n            width: \"60%\"\n        },\n        children: result\n    }, void 0, false, {\n        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n        lineNumber: 10,\n        columnNumber: 7\n    }, undefined);\n};\nfunction Home() {\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [isPending, loading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    async function generate() {\n        const response = await fetch(\"/api/generate\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                input\n            })\n        });\n        const data = await response.json();\n        if (response.status !== 200) {\n            throw data.error || new Error(`Request failed with status ${response.status}`);\n        }\n        return {\n            result: data.result\n        };\n    }\n    async function handleOnSubmit(event) {\n        event.preventDefault();\n        loading(true);\n        try {\n            // generate\n            generate().then((data)=>{\n                console.log(data);\n                loading(false);\n            });\n        } catch (error) {\n            console.error(error);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" \\uD83D\\uDD0D - OpenAI-Facts Search\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\",\n                        rel: \"stylesheet\",\n                        integrity: \"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\",\n                        crossorigin: \"anonymous\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"#1abc9c\"\n                                },\n                                children: \"Facts\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                style: {\n                                    color: \"#e74c3c\"\n                                },\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleOnSubmit,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                ref: ref,\n                                type: \"text\",\n                                name: \"title\",\n                                placeholder: \"search ...\",\n                                onChange: (e)=>setInput(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                children: \"Search\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Loading, {\n                        isVisible: isPending,\n                        input: input\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Result, {\n                        isVisible: !isPending,\n                        result: result\n                    }, void 0, false, {\n                        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sandyinstructor/Desktop/openAI-GPT-3286183/fichiers_exercices/1-text-completion/final/pages/index.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ1k7QUFDRDtBQUV4QyxNQUFNSSxVQUFVLENBQUMsRUFBRUMsVUFBUyxFQUFFLEdBQUtBLDJCQUFhLDhEQUFDQztRQUFHQyxXQUFVO2tCQUFtQjs7Ozs7O0FBRWpGLE1BQU1DLFNBQVMsQ0FBQyxFQUFFQyxPQUFNLEVBQUVKLFVBQVMsRUFBRSxHQUFLO0lBQ3hDLE9BQ0VBLDJCQUNFLDhEQUFDSztRQUFFSCxXQUFVO1FBQW1CSSxPQUFPO1lBQUVDLE9BQU87UUFBTTtrQkFDbkRIOzs7Ozs7QUFJVDtBQUVlLFNBQVNJLE9BQU87SUFDN0IsTUFBTUMsTUFBTVosNkNBQU1BLENBQUMsSUFBSTtJQUN2QixNQUFNLENBQUNhLFdBQVdDLFFBQVEsR0FBR2YsK0NBQVFBLENBQUMsS0FBSztJQUMzQyxNQUFNLENBQUNRLFFBQVFRLFVBQVUsR0FBR2hCLCtDQUFRQSxDQUFDLElBQUk7SUFDekMsTUFBTSxDQUFDaUIsT0FBT0MsU0FBUyxHQUFHbEIsK0NBQVFBLENBQUM7SUFFbkMsZUFBZW1CLFdBQVc7UUFDeEIsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLGlCQUFpQjtZQUM1Q0MsUUFBUTtZQUNSQyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtZQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVUO1lBQU07UUFDL0I7UUFDQSxNQUFNVSxPQUFPLE1BQU1QLFNBQVNRLElBQUk7UUFDaEMsSUFBSVIsU0FBU1MsTUFBTSxLQUFLLEtBQUs7WUFDM0IsTUFDRUYsS0FBS0csS0FBSyxJQUFJLElBQUlDLE1BQU0sQ0FBQywyQkFBMkIsRUFBRVgsU0FBU1MsTUFBTSxDQUFDLENBQUMsRUFDdkU7UUFDSixDQUFDO1FBQ0QsT0FBTztZQUFFckIsUUFBUW1CLEtBQUtuQixNQUFNO1FBQUM7SUFDL0I7SUFFQSxlQUFld0IsZUFBZUMsS0FBSyxFQUFFO1FBQ25DQSxNQUFNQyxjQUFjO1FBQ3BCbkIsUUFBUSxJQUFJO1FBQ1osSUFBSTtZQUNGLFdBQVc7WUFDWEksV0FDQ2dCLElBQUksQ0FBQ1IsQ0FBQUEsT0FBUTtnQkFDWlMsUUFBUUMsR0FBRyxDQUFDVjtnQkFDWlosUUFBUSxLQUFLO1lBQ2Y7UUFDRixFQUFFLE9BQU9lLE9BQU87WUFDZE0sUUFBUU4sS0FBSyxDQUFDQTtRQUNoQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNROzswQkFDQyw4REFBQ3ZDLGtEQUFJQTs7a0NBQ0gsOERBQUN3QztrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFDQ0MsTUFBSzt3QkFDTEMsS0FBSTt3QkFDSkMsV0FBVTt3QkFDVkMsYUFBWTs7Ozs7Ozs7Ozs7OzBCQUloQiw4REFBQ0M7Z0JBQUt2QyxXQUFXSiwrREFBVzs7a0NBQzFCLDhEQUFDNEM7OzBDQUNDLDhEQUFDQztnQ0FBS3JDLE9BQU87b0NBQUVzQyxPQUFPO2dDQUFVOzBDQUFHOzs7Ozs7NEJBQWE7MENBQ2hELDhEQUFDRDtnQ0FBS3JDLE9BQU87b0NBQUVzQyxPQUFPO2dDQUFVOzBDQUFHOzs7Ozs7Ozs7Ozs7a0NBRXJDLDhEQUFDQzt3QkFBS0MsVUFBVWxCOzswQ0FDZCw4REFBQ2Y7Z0NBQ0NKLEtBQUtBO2dDQUNMc0MsTUFBSztnQ0FDTEMsTUFBSztnQ0FDTEMsYUFBWTtnQ0FDWkMsVUFBVSxDQUFDQyxJQUFNckMsU0FBU3FDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7OzBDQUUxQyw4REFBQ0M7Z0NBQU9QLE1BQUs7MENBQVM7Ozs7Ozs7Ozs7OztrQ0FFeEIsOERBQUNoRDt3QkFBUUMsV0FBV1U7d0JBQVdHLE9BQU9BOzs7Ozs7a0NBQ3RDLDhEQUFDVjt3QkFBT0gsV0FBVyxDQUFDVTt3QkFBV04sUUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUkvQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb3BlbmFpLXF1aWNrc3RhcnQtbm9kZS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IExvYWRpbmcgPSAoeyBpc1Zpc2libGUgfSkgPT4gaXNWaXNpYmxlICYmIDxoMiBjbGFzc05hbWU9XCJtdC00IHRleHQtY2VudGVyXCI+TG9hZGluZyAuLi48L2gyPjtcblxuY29uc3QgUmVzdWx0ID0gKHsgcmVzdWx0LCBpc1Zpc2libGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIGlzVmlzaWJsZSAmJiAoXG4gICAgICA8cCBjbGFzc05hbWU9XCJtdC01IHRleHQtY2VudGVyXCIgc3R5bGU9e3sgd2lkdGg6IFwiNjAlXCIgfX0+XG4gICAgICAgIHtyZXN1bHR9XG4gICAgICA8L3A+XG4gICAgKVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgcmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zdCBbaXNQZW5kaW5nLCBsb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCIvYXBpL2dlbmVyYXRlXCIsIHtcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgaW5wdXQgfSksXG4gICAgfSk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcbiAgICAgIHRocm93IChcbiAgICAgICAgZGF0YS5lcnJvciB8fCBuZXcgRXJyb3IoYFJlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzICR7cmVzcG9uc2Uuc3RhdHVzfWApXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4geyByZXN1bHQ6IGRhdGEucmVzdWx0IH07XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBoYW5kbGVPblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgLy8gZ2VuZXJhdGVcbiAgICAgIGdlbmVyYXRlKClcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBsb2FkaW5nKGZhbHNlKVxuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT4g8J+UjSAtIE9wZW5BSS1GYWN0cyBTZWFyY2g8L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2Jvb3RzdHJhcEA1LjEuMy9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTFCbUU0a1dCcTc4aVloRmxkdkt1aGZUQVU2YXVVOHRUOTRXckhmdGpEYnJDRVhTVTFvQm9xeWwyUXZaNmpJVzNcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogXCIjMWFiYzljXCIgfX0+RmFjdHM8L3NwYW4+e1wiIFwifVxuICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIiNlNzRjM2NcIiB9fT5TZWFyY2g8L3NwYW4+XG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCAuLi5cIlxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnB1dChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8TG9hZGluZyBpc1Zpc2libGU9e2lzUGVuZGluZ30gaW5wdXQ9e2lucHV0fSAvPlxuICAgICAgICA8UmVzdWx0IGlzVmlzaWJsZT17IWlzUGVuZGluZ30gcmVzdWx0PXtyZXN1bHR9IC8+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZVN0YXRlIiwidXNlUmVmIiwic3R5bGVzIiwiTG9hZGluZyIsImlzVmlzaWJsZSIsImgyIiwiY2xhc3NOYW1lIiwiUmVzdWx0IiwicmVzdWx0IiwicCIsInN0eWxlIiwid2lkdGgiLCJIb21lIiwicmVmIiwiaXNQZW5kaW5nIiwibG9hZGluZyIsInNldFJlc3VsdCIsImlucHV0Iiwic2V0SW5wdXQiLCJnZW5lcmF0ZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsInN0YXR1cyIsImVycm9yIiwiRXJyb3IiLCJoYW5kbGVPblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImRpdiIsInRpdGxlIiwibGluayIsImhyZWYiLCJyZWwiLCJpbnRlZ3JpdHkiLCJjcm9zc29yaWdpbiIsIm1haW4iLCJoMyIsInNwYW4iLCJjb2xvciIsImZvcm0iLCJvblN1Ym1pdCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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