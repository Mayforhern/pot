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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SECTIONS = [\n    {\n        title: \"Section 1\",\n        content: \"Content for Section 1\"\n    },\n    {\n        title: \"Section 2\",\n        content: \"Content for Section 2\"\n    },\n    {\n        title: \"Section 3\",\n        content: \"Content for Section 3\"\n    },\n    {\n        title: \"Section 4\",\n        content: \"Content for Section 4\"\n    },\n    {\n        title: \"Section 5\",\n        content: \"Content for Section 5\"\n    },\n    {\n        title: \"Section 6\",\n        content: \"Content for Section 6\"\n    },\n    {\n        title: \"Section 7\",\n        content: \"Content for Section 7\"\n    }\n];\nconst SPRING_OPTIONS = {\n    type: \"spring\",\n    mass: 3,\n    stiffness: 400,\n    damping: 50\n};\nfunction Page() {\n    _s();\n    const [sectionIndex, setSectionIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Detect scroll event to change section horizontally\n        const handleScroll = (event)=>{\n            if (event.deltaY > 0) {\n                // Scroll down: Move to the next section\n                setSectionIndex((prevIndex)=>Math.min(prevIndex + 1, SECTIONS.length - 1));\n            } else {\n                // Scroll up: Move to the previous section\n                setSectionIndex((prevIndex)=>Math.max(prevIndex - 1, 0));\n            }\n        };\n        // Add scroll event listener\n        window.addEventListener(\"wheel\", handleScroll);\n        // Clean up the event listener on component unmount\n        return ()=>{\n            window.removeEventListener(\"wheel\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen overflow-hidden py-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row w-full snap-x snap-mandatory\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sections, {\n                    sectionIndex: sectionIndex\n                }, void 0, false, {\n                    fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dots, {\n                sectionIndex: sectionIndex,\n                setSectionIndex: setSectionIndex\n            }, void 0, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"vXwszgI+TvjppzOSD/yH6OOM2r4=\");\n_c = Page;\nconst Sections = (param)=>{\n    let { sectionIndex } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-row w-full snap-x\",\n        children: SECTIONS.map((section, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"w-screen flex items-center justify-center bg-neutral-800 rounded-xl p-10 snap-center\",\n                animate: {\n                    scale: sectionIndex === idx ? 1 : 0.95,\n                    opacity: sectionIndex === idx ? 1 : 0.5\n                },\n                transition: SPRING_OPTIONS,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center text-white\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-bold\",\n                            children: section.title\n                        }, void 0, false, {\n                            fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"mt-4\",\n                            children: section.content\n                        }, void 0, false, {\n                            fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, undefined)\n            }, idx, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, undefined);\n};\n_c1 = Sections;\nconst Dots = (param)=>{\n    let { sectionIndex, setSectionIndex } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-4 flex w-full justify-center gap-2\",\n        children: SECTIONS.map((_, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>setSectionIndex(idx),\n                className: \"h-3 w-3 rounded-full transition-colors \".concat(idx === sectionIndex ? \"bg-neutral-50\" : \"bg-neutral-500\")\n            }, idx, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, undefined);\n};\n_c2 = Dots;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Page\");\n$RefreshReg$(_c1, \"Sections\");\n$RefreshReg$(_c2, \"Dots\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ1o7QUFFdkMsTUFBTUksV0FBVztJQUNmO1FBQUVDLE9BQU87UUFBYUMsU0FBUztJQUF3QjtJQUN2RDtRQUFFRCxPQUFPO1FBQWFDLFNBQVM7SUFBd0I7SUFDdkQ7UUFBRUQsT0FBTztRQUFhQyxTQUFTO0lBQXdCO0lBQ3ZEO1FBQUVELE9BQU87UUFBYUMsU0FBUztJQUF3QjtJQUN2RDtRQUFFRCxPQUFPO1FBQWFDLFNBQVM7SUFBd0I7SUFDdkQ7UUFBRUQsT0FBTztRQUFhQyxTQUFTO0lBQXdCO0lBQ3ZEO1FBQUVELE9BQU87UUFBYUMsU0FBUztJQUF3QjtDQUN4RDtBQUVELE1BQU1DLGlCQUFpQjtJQUNyQkMsTUFBTTtJQUNOQyxNQUFNO0lBQ05DLFdBQVc7SUFDWEMsU0FBUztBQUNYO0FBRWUsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDO0lBRWpERCxnREFBU0EsQ0FBQztRQUNSLHFEQUFxRDtRQUNyRCxNQUFNYyxlQUFlLENBQUNDO1lBQ3BCLElBQUlBLE1BQU1DLE1BQU0sR0FBRyxHQUFHO2dCQUNwQix3Q0FBd0M7Z0JBQ3hDSCxnQkFBZ0IsQ0FBQ0ksWUFBY0MsS0FBS0MsR0FBRyxDQUFDRixZQUFZLEdBQUdkLFNBQVNpQixNQUFNLEdBQUc7WUFDM0UsT0FBTztnQkFDTCwwQ0FBMEM7Z0JBQzFDUCxnQkFBZ0IsQ0FBQ0ksWUFBY0MsS0FBS0csR0FBRyxDQUFDSixZQUFZLEdBQUc7WUFDekQ7UUFDRjtRQUVBLDRCQUE0QjtRQUM1QkssT0FBT0MsZ0JBQWdCLENBQUMsU0FBU1Q7UUFFakMsbURBQW1EO1FBQ25ELE9BQU87WUFDTFEsT0FBT0UsbUJBQW1CLENBQUMsU0FBU1Y7UUFDdEM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDQztvQkFBU2YsY0FBY0E7Ozs7Ozs7Ozs7OzBCQUkxQiw4REFBQ2dCO2dCQUFLaEIsY0FBY0E7Z0JBQWNDLGlCQUFpQkE7Ozs7Ozs7Ozs7OztBQUd6RDtHQW5Dd0JGO0tBQUFBO0FBcUN4QixNQUFNZ0IsV0FBVztRQUFDLEVBQUVmLFlBQVksRUFBNEI7SUFDMUQscUJBQ0UsOERBQUNhO1FBQUlDLFdBQVU7a0JBQ1p2QixTQUFTMEIsR0FBRyxDQUFDLENBQUNDLFNBQVNDLG9CQUN0Qiw4REFBQzdCLGlEQUFNQSxDQUFDdUIsR0FBRztnQkFFVEMsV0FBVTtnQkFDVk0sU0FBUztvQkFDUEMsT0FBT3JCLGlCQUFpQm1CLE1BQU0sSUFBSTtvQkFDbENHLFNBQVN0QixpQkFBaUJtQixNQUFNLElBQUk7Z0JBQ3RDO2dCQUNBSSxZQUFZN0I7MEJBRVosNEVBQUNtQjtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNVOzRCQUFHVixXQUFVO3NDQUFzQkksUUFBUTFCLEtBQUs7Ozs7OztzQ0FDakQsOERBQUNpQzs0QkFBRVgsV0FBVTtzQ0FBUUksUUFBUXpCLE9BQU87Ozs7Ozs7Ozs7OztlQVZqQzBCOzs7Ozs7Ozs7O0FBZ0JmO01BckJNSjtBQXVCTixNQUFNQyxPQUFPO1FBQUMsRUFDWmhCLFlBQVksRUFDWkMsZUFBZSxFQUloQjtJQUNDLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVO2tCQUNadkIsU0FBUzBCLEdBQUcsQ0FBQyxDQUFDUyxHQUFHUCxvQkFDaEIsOERBQUNRO2dCQUVDQyxTQUFTLElBQU0zQixnQkFBZ0JrQjtnQkFDL0JMLFdBQVcsMENBRVYsT0FEQ0ssUUFBUW5CLGVBQWUsa0JBQWtCO2VBSHRDbUI7Ozs7Ozs7Ozs7QUFTZjtNQXBCTUgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgU0VDVElPTlMgPSBbXG4gIHsgdGl0bGU6IFwiU2VjdGlvbiAxXCIsIGNvbnRlbnQ6IFwiQ29udGVudCBmb3IgU2VjdGlvbiAxXCIgfSxcbiAgeyB0aXRsZTogXCJTZWN0aW9uIDJcIiwgY29udGVudDogXCJDb250ZW50IGZvciBTZWN0aW9uIDJcIiB9LFxuICB7IHRpdGxlOiBcIlNlY3Rpb24gM1wiLCBjb250ZW50OiBcIkNvbnRlbnQgZm9yIFNlY3Rpb24gM1wiIH0sXG4gIHsgdGl0bGU6IFwiU2VjdGlvbiA0XCIsIGNvbnRlbnQ6IFwiQ29udGVudCBmb3IgU2VjdGlvbiA0XCIgfSxcbiAgeyB0aXRsZTogXCJTZWN0aW9uIDVcIiwgY29udGVudDogXCJDb250ZW50IGZvciBTZWN0aW9uIDVcIiB9LFxuICB7IHRpdGxlOiBcIlNlY3Rpb24gNlwiLCBjb250ZW50OiBcIkNvbnRlbnQgZm9yIFNlY3Rpb24gNlwiIH0sXG4gIHsgdGl0bGU6IFwiU2VjdGlvbiA3XCIsIGNvbnRlbnQ6IFwiQ29udGVudCBmb3IgU2VjdGlvbiA3XCIgfSxcbl07XG5cbmNvbnN0IFNQUklOR19PUFRJT05TID0ge1xuICB0eXBlOiBcInNwcmluZ1wiLFxuICBtYXNzOiAzLFxuICBzdGlmZm5lc3M6IDQwMCxcbiAgZGFtcGluZzogNTAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbc2VjdGlvbkluZGV4LCBzZXRTZWN0aW9uSW5kZXhdID0gdXNlU3RhdGUoMCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBEZXRlY3Qgc2Nyb2xsIGV2ZW50IHRvIGNoYW5nZSBzZWN0aW9uIGhvcml6b250YWxseVxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChldmVudDogV2hlZWxFdmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmRlbHRhWSA+IDApIHtcbiAgICAgICAgLy8gU2Nyb2xsIGRvd246IE1vdmUgdG8gdGhlIG5leHQgc2VjdGlvblxuICAgICAgICBzZXRTZWN0aW9uSW5kZXgoKHByZXZJbmRleCkgPT4gTWF0aC5taW4ocHJldkluZGV4ICsgMSwgU0VDVElPTlMubGVuZ3RoIC0gMSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2Nyb2xsIHVwOiBNb3ZlIHRvIHRoZSBwcmV2aW91cyBzZWN0aW9uXG4gICAgICAgIHNldFNlY3Rpb25JbmRleCgocHJldkluZGV4KSA9PiBNYXRoLm1heChwcmV2SW5kZXggLSAxLCAwKSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIC8vIEFkZCBzY3JvbGwgZXZlbnQgbGlzdGVuZXJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gY29tcG9uZW50IHVubW91bnRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIG92ZXJmbG93LWhpZGRlbiBweS04XCI+XG4gICAgICB7LyogSG9yaXpvbnRhbCBTY3JvbGxhYmxlIFNlY3Rpb25zICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHctZnVsbCBzbmFwLXggc25hcC1tYW5kYXRvcnlcIj5cbiAgICAgICAgPFNlY3Rpb25zIHNlY3Rpb25JbmRleD17c2VjdGlvbkluZGV4fSAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBEb3RzIGZvciBOYXZpZ2F0aW9uICovfVxuICAgICAgPERvdHMgc2VjdGlvbkluZGV4PXtzZWN0aW9uSW5kZXh9IHNldFNlY3Rpb25JbmRleD17c2V0U2VjdGlvbkluZGV4fSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBTZWN0aW9ucyA9ICh7IHNlY3Rpb25JbmRleCB9OiB7IHNlY3Rpb25JbmRleDogbnVtYmVyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgdy1mdWxsIHNuYXAteFwiPlxuICAgICAge1NFQ1RJT05TLm1hcCgoc2VjdGlvbiwgaWR4KSA9PiAoXG4gICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1zY3JlZW4gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYmctbmV1dHJhbC04MDAgcm91bmRlZC14bCBwLTEwIHNuYXAtY2VudGVyXCJcbiAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICBzY2FsZTogc2VjdGlvbkluZGV4ID09PSBpZHggPyAxIDogMC45NSxcbiAgICAgICAgICAgIG9wYWNpdHk6IHNlY3Rpb25JbmRleCA9PT0gaWR4ID8gMSA6IDAuNSxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e1NQUklOR19PUFRJT05TfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+e3NlY3Rpb24udGl0bGV9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTRcIj57c2VjdGlvbi5jb250ZW50fTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBEb3RzID0gKHtcbiAgc2VjdGlvbkluZGV4LFxuICBzZXRTZWN0aW9uSW5kZXgsXG59OiB7XG4gIHNlY3Rpb25JbmRleDogbnVtYmVyO1xuICBzZXRTZWN0aW9uSW5kZXg6IFJlYWN0LkRpc3BhdGNoPFJlYWN0LlNldFN0YXRlQWN0aW9uPG51bWJlcj4+O1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiPlxuICAgICAge1NFQ1RJT05TLm1hcCgoXywgaWR4KSA9PiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWN0aW9uSW5kZXgoaWR4KX1cbiAgICAgICAgICBjbGFzc05hbWU9e2BoLTMgdy0zIHJvdW5kZWQtZnVsbCB0cmFuc2l0aW9uLWNvbG9ycyAke1xuICAgICAgICAgICAgaWR4ID09PSBzZWN0aW9uSW5kZXggPyBcImJnLW5ldXRyYWwtNTBcIiA6IFwiYmctbmV1dHJhbC01MDBcIlxuICAgICAgICAgIH1gfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJtb3Rpb24iLCJTRUNUSU9OUyIsInRpdGxlIiwiY29udGVudCIsIlNQUklOR19PUFRJT05TIiwidHlwZSIsIm1hc3MiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiUGFnZSIsInNlY3Rpb25JbmRleCIsInNldFNlY3Rpb25JbmRleCIsImhhbmRsZVNjcm9sbCIsImV2ZW50IiwiZGVsdGFZIiwicHJldkluZGV4IiwiTWF0aCIsIm1pbiIsImxlbmd0aCIsIm1heCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiU2VjdGlvbnMiLCJEb3RzIiwibWFwIiwic2VjdGlvbiIsImlkeCIsImFuaW1hdGUiLCJzY2FsZSIsIm9wYWNpdHkiLCJ0cmFuc2l0aW9uIiwiaDIiLCJwIiwiXyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});