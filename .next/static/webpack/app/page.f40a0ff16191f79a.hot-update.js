"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SECTIONS = [\n    {\n        title: \"Section 1\",\n        content: \"Content for Section 1\"\n    },\n    {\n        title: \"Section 2\",\n        content: \"Content for Section 2\"\n    },\n    {\n        title: \"Section 3\",\n        content: \"Content for Section 3\"\n    },\n    {\n        title: \"Section 4\",\n        content: \"Content for Section 4\"\n    },\n    {\n        title: \"Section 5\",\n        content: \"Content for Section 5\"\n    },\n    {\n        title: \"Section 6\",\n        content: \"Content for Section 6\"\n    },\n    {\n        title: \"Section 7\",\n        content: \"Content for Section 7\"\n    }\n];\nconst SPRING_OPTIONS = {\n    type: \"spring\",\n    mass: 3,\n    stiffness: 400,\n    damping: 50\n};\nfunction Page() {\n    _s();\n    const [sectionIndex, setSectionIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Handle scrolling to change sections\n        const handleScroll = ()=>{\n            const sectionHeight = window.innerHeight;\n            const newSectionIndex = Math.floor(window.scrollY / sectionHeight);\n            if (newSectionIndex < SECTIONS.length && newSectionIndex !== sectionIndex) {\n                setSectionIndex(newSectionIndex);\n            }\n        };\n        // Add scroll event listener\n        window.addEventListener(\"scroll\", handleScroll);\n        // Clean up the event listener on component unmount\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, [\n        sectionIndex\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen relative overflow-hidden py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sections, {\n                    sectionIndex: sectionIndex\n                }, void 0, false, {\n                    fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dots, {\n                sectionIndex: sectionIndex,\n                setSectionIndex: setSectionIndex\n            }, void 0, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GradientEdges, {}, void 0, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"vXwszgI+TvjppzOSD/yH6OOM2r4=\");\n_c = Page;\nconst Sections = (param)=>{\n    let { sectionIndex } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: SECTIONS.map((section, idx)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"w-full flex items-center justify-center bg-neutral-800 rounded-xl p-10\",\n                style: {\n                    minHeight: \"100vh\"\n                },\n                animate: {\n                    scale: sectionIndex === idx ? 0.95 : 0.85\n                },\n                transition: SPRING_OPTIONS,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold\",\n                            children: section.title\n                        }, void 0, false, {\n                            fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 15\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4\",\n                            children: section.content\n                        }, void 0, false, {\n                            fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 13\n                }, undefined)\n            }, idx, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                lineNumber: 66,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false);\n};\n_c1 = Sections;\nconst Dots = (param)=>{\n    let { sectionIndex, setSectionIndex } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-4 flex w-full justify-center gap-2\",\n        children: SECTIONS.map((_, idx)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setSectionIndex(idx),\n                className: \"h-3 w-3 rounded-full transition-colors \".concat(idx === sectionIndex ? \"bg-neutral-50\" : \"bg-neutral-500\")\n            }, idx, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                lineNumber: 99,\n                columnNumber: 11\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = Dots;\nconst GradientEdges = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0\"\n            }, void 0, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0\"\n            }, void 0, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c3 = GradientEdges;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"Page\");\n$RefreshReg$(_c1, \"Sections\");\n$RefreshReg$(_c2, \"Dots\");\n$RefreshReg$(_c3, \"GradientEdges\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgRGlzcGF0Y2gsIFNldFN0YXRlQWN0aW9uLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBTRUNUSU9OUyA9IFtcbiAgeyB0aXRsZTogXCJTZWN0aW9uIDFcIiwgY29udGVudDogXCJDb250ZW50IGZvciBTZWN0aW9uIDFcIiB9LFxuICB7IHRpdGxlOiBcIlNlY3Rpb24gMlwiLCBjb250ZW50OiBcIkNvbnRlbnQgZm9yIFNlY3Rpb24gMlwiIH0sXG4gIHsgdGl0bGU6IFwiU2VjdGlvbiAzXCIsIGNvbnRlbnQ6IFwiQ29udGVudCBmb3IgU2VjdGlvbiAzXCIgfSxcbiAgeyB0aXRsZTogXCJTZWN0aW9uIDRcIiwgY29udGVudDogXCJDb250ZW50IGZvciBTZWN0aW9uIDRcIiB9LFxuICB7IHRpdGxlOiBcIlNlY3Rpb24gNVwiLCBjb250ZW50OiBcIkNvbnRlbnQgZm9yIFNlY3Rpb24gNVwiIH0sXG4gIHsgdGl0bGU6IFwiU2VjdGlvbiA2XCIsIGNvbnRlbnQ6IFwiQ29udGVudCBmb3IgU2VjdGlvbiA2XCIgfSxcbiAgeyB0aXRsZTogXCJTZWN0aW9uIDdcIiwgY29udGVudDogXCJDb250ZW50IGZvciBTZWN0aW9uIDdcIiB9LFxuXTtcblxuY29uc3QgU1BSSU5HX09QVElPTlMgPSB7XG4gIHR5cGU6IFwic3ByaW5nXCIsXG4gIG1hc3M6IDMsXG4gIHN0aWZmbmVzczogNDAwLFxuICBkYW1waW5nOiA1MCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2UoKSB7XG4gIGNvbnN0IFtzZWN0aW9uSW5kZXgsIHNldFNlY3Rpb25JbmRleF0gPSB1c2VTdGF0ZSgwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIEhhbmRsZSBzY3JvbGxpbmcgdG8gY2hhbmdlIHNlY3Rpb25zXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc3Qgc2VjdGlvbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGNvbnN0IG5ld1NlY3Rpb25JbmRleCA9IE1hdGguZmxvb3Iod2luZG93LnNjcm9sbFkgLyBzZWN0aW9uSGVpZ2h0KTtcbiAgICAgIGlmIChuZXdTZWN0aW9uSW5kZXggPCBTRUNUSU9OUy5sZW5ndGggJiYgbmV3U2VjdGlvbkluZGV4ICE9PSBzZWN0aW9uSW5kZXgpIHtcbiAgICAgICAgc2V0U2VjdGlvbkluZGV4KG5ld1NlY3Rpb25JbmRleCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEFkZCBzY3JvbGwgZXZlbnQgbGlzdGVuZXJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgLy8gQ2xlYW4gdXAgdGhlIGV2ZW50IGxpc3RlbmVyIG9uIGNvbXBvbmVudCB1bm1vdW50XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW3NlY3Rpb25JbmRleF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtaW4taC1zY3JlZW4gcmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHB5LThcIj5cbiAgICAgIHsvKiBTY3JvbGxhYmxlIFNlY3Rpb25zICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHctZnVsbFwiPlxuICAgICAgICA8U2VjdGlvbnMgc2VjdGlvbkluZGV4PXtzZWN0aW9uSW5kZXh9IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIERvdHMgZm9yIE5hdmlnYXRpb24gKi99XG4gICAgICA8RG90cyBzZWN0aW9uSW5kZXg9e3NlY3Rpb25JbmRleH0gc2V0U2VjdGlvbkluZGV4PXtzZXRTZWN0aW9uSW5kZXh9IC8+XG5cbiAgICAgIHsvKiBHcmFkaWVudCBFZGdlcyAqL31cbiAgICAgIDxHcmFkaWVudEVkZ2VzIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IFNlY3Rpb25zID0gKHsgc2VjdGlvbkluZGV4IH06IHsgc2VjdGlvbkluZGV4OiBudW1iZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7U0VDVElPTlMubWFwKChzZWN0aW9uLCBpZHgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctbmV1dHJhbC04MDAgcm91bmRlZC14bCBwLTEwXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLCAvLyBFbnN1cmUgZWFjaCBzZWN0aW9uIHRha2VzIGZ1bGwgdmlld3BvcnQgaGVpZ2h0XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgICAgICBzY2FsZTogc2VjdGlvbkluZGV4ID09PSBpZHggPyAwLjk1IDogMC44NSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXtTUFJJTkdfT1BUSU9OU31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGVcIj5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPntzZWN0aW9uLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTRcIj57c2VjdGlvbi5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pfVxuICAgIDwvPlxuICApO1xufTtcblxuY29uc3QgRG90cyA9ICh7XG4gIHNlY3Rpb25JbmRleCxcbiAgc2V0U2VjdGlvbkluZGV4LFxufToge1xuICBzZWN0aW9uSW5kZXg6IG51bWJlcjtcbiAgc2V0U2VjdGlvbkluZGV4OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxudW1iZXI+Pjtcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgIHtTRUNUSU9OUy5tYXAoKF8sIGlkeCkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2VjdGlvbkluZGV4KGlkeCl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e2BoLTMgdy0zIHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWNvbG9ycyAke1xuICAgICAgICAgICAgICBpZHggPT09IHNlY3Rpb25JbmRleCA/IFwiYmctbmV1dHJhbC01MFwiIDogXCJiZy1uZXV0cmFsLTUwMFwiXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBHcmFkaWVudEVkZ2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvaW50ZXItZXZlbnRzLW5vbmUgYWJzb2x1dGUgYm90dG9tLTAgbGVmdC0wIHRvcC0wIHctWzEwdnddIG1heC13LVsxMDBweF0gYmctZ3JhZGllbnQtdG8tciBmcm9tLW5ldXRyYWwtOTUwLzUwIHRvLW5ldXRyYWwtOTUwLzBcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2ludGVyLWV2ZW50cy1ub25lIGFic29sdXRlIGJvdHRvbS0wIHJpZ2h0LTAgdG9wLTAgdy1bMTB2d10gbWF4LXctWzEwMHB4XSBiZy1ncmFkaWVudC10by1sIGZyb20tbmV1dHJhbC05NTAvNTAgdG8tbmV1dHJhbC05NTAvMFwiIC8+XG4gICAgPC8+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJTRUNUSU9OUyIsInRpdGxlIiwiY29udGVudCIsIlNQUklOR19PUFRJT05TIiwidHlwZSIsIm1hc3MiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiUGFnZSIsInNlY3Rpb25JbmRleCIsInNldFNlY3Rpb25JbmRleCIsImhhbmRsZVNjcm9sbCIsInNlY3Rpb25IZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIm5ld1NlY3Rpb25JbmRleCIsIk1hdGgiLCJmbG9vciIsInNjcm9sbFkiLCJsZW5ndGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsIlNlY3Rpb25zIiwiRG90cyIsIkdyYWRpZW50RWRnZXMiLCJtYXAiLCJzZWN0aW9uIiwiaWR4Iiwic3R5bGUiLCJtaW5IZWlnaHQiLCJhbmltYXRlIiwic2NhbGUiLCJ0cmFuc2l0aW9uIiwiaDIiLCJwIiwiXyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});