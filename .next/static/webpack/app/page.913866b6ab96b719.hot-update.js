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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/header */ \"(app-pages-browser)/./components/header.tsx\");\n/* harmony import */ var _components_SecondSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/SecondSection */ \"(app-pages-browser)/./components/SecondSection.tsx\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst SECTIONS = [\n    {\n        title: \"MAY\",\n        content: \"May is a creative developer\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.section, {\n            className: \"h-screen flex flex-col items-center justify-center relative\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-[20vw] font-bold leading-none sm:text-[15vw] md:text-[10vw]\",\n                    children: \"MAY\"\n                }, void 0, false, {\n                    fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mt-2 text-lg\",\n                    children: \"May is a creative developer\"\n                }, void 0, false, {\n                    fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n            lineNumber: 13,\n            columnNumber: 7\n        }, undefined)\n    },\n    {\n        title: \"Second Section\",\n        content: \"\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SecondSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            darkTheme: false\n        }, void 0, false, {\n            fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n            lineNumber: 22,\n            columnNumber: 16\n        }, undefined)\n    },\n    {\n        title: \"Third Section\",\n        content: \"Content for the third section\",\n        component: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"h-screen flex items-center justify-center bg-neutral-800 text-white\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-4xl\",\n                children: \"This is the third section\"\n            }, void 0, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n            lineNumber: 28,\n            columnNumber: 7\n        }, undefined)\n    }\n];\nconst SPRING_OPTIONS = {\n    type: \"spring\",\n    stiffness: 400,\n    damping: 50\n};\nfunction Page() {\n    _s();\n    const [darkTheme, setDarkTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [sectionIndex, setSectionIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isScrolling, setIsScrolling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = (event)=>{\n            if (isScrolling) return;\n            if (event.deltaY > 0) {\n                // Scroll down\n                setSectionIndex((prev)=>Math.min(prev + 1, SECTIONS.length - 1));\n            } else if (event.deltaY < 0) {\n                // Scroll up\n                setSectionIndex((prev)=>Math.max(prev - 1, 0));\n            }\n            setIsScrolling(true);\n            setTimeout(()=>setIsScrolling(false), 500); // Reduced scroll delay\n        };\n        window.addEventListener(\"wheel\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"wheel\", handleScroll);\n        };\n    }, [\n        isScrolling\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen transition-all duration-500 \".concat(darkTheme ? \"animate-dark-color-change text-white\" : \"animate-light-color-change text-black\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                darkTheme: darkTheme,\n                setDarkTheme: setDarkTheme\n            }, void 0, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                className: \"flex h-full w-[700vw]\",\n                animate: {\n                    translateX: \"-\".concat(sectionIndex * 100, \"vw\")\n                },\n                transition: SPRING_OPTIONS,\n                children: SECTIONS.map((section, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                        className: \"h-screen w-screen flex items-center justify-center\",\n                        initial: {\n                            opacity: 0\n                        },\n                        animate: {\n                            opacity: sectionIndex === idx ? 1 : 0\n                        },\n                        transition: {\n                            duration: 0.6,\n                            ease: \"easeInOut\"\n                        },\n                        children: idx === 1 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SecondSection__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            darkTheme: darkTheme\n                        }, void 0, false, {\n                            fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 26\n                        }, this) : section.component\n                    }, idx, false, {\n                        fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"ghPw9QZGBWN0+BixT2hTHv+rbLQ=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFNEM7QUFDRjtBQUNjO0FBQ2pCO0FBRXZDLE1BQU1LLFdBQVc7SUFDZjtRQUNFQyxPQUFPO1FBQ1BDLFNBQVM7UUFDVEMseUJBQ0UsOERBQUNKLGlEQUFNQSxDQUFDSyxPQUFPO1lBQUNDLFdBQVU7OzhCQUN4Qiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQW1FOzs7Ozs7OEJBQ2pGLDhEQUFDRTtvQkFBRUYsV0FBVTs4QkFBZTs7Ozs7Ozs7Ozs7O0lBR2xDO0lBQ0E7UUFDRUosT0FBTztRQUNQQyxTQUFTO1FBQ1RDLHlCQUFXLDhEQUFDTCxpRUFBYUE7WUFBQ1UsV0FBVzs7Ozs7O0lBQ3ZDO0lBQ0E7UUFDRVAsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLHlCQUNFLDhEQUFDTTtZQUFJSixXQUFVO3NCQUNiLDRFQUFDQztnQkFBR0QsV0FBVTswQkFBVzs7Ozs7Ozs7Ozs7SUFHL0I7Q0FDRDtBQUVELE1BQU1LLGlCQUFpQjtJQUNyQkMsTUFBTTtJQUNOQyxXQUFXO0lBQ1hDLFNBQVM7QUFDWDtBQUVlLFNBQVNDOztJQUN0QixNQUFNLENBQUNOLFdBQVdPLGFBQWEsR0FBR3BCLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ3FCLGNBQWNDLGdCQUFnQixHQUFHdEIsK0NBQVFBLENBQUM7SUFDakQsTUFBTSxDQUFDdUIsYUFBYUMsZUFBZSxHQUFHeEIsK0NBQVFBLENBQUM7SUFFL0NDLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXdCLGVBQWUsQ0FBQ0M7WUFDcEIsSUFBSUgsYUFBYTtZQUVqQixJQUFJRyxNQUFNQyxNQUFNLEdBQUcsR0FBRztnQkFDcEIsY0FBYztnQkFDZEwsZ0JBQWdCLENBQUNNLE9BQVNDLEtBQUtDLEdBQUcsQ0FBQ0YsT0FBTyxHQUFHdkIsU0FBUzBCLE1BQU0sR0FBRztZQUNqRSxPQUFPLElBQUlMLE1BQU1DLE1BQU0sR0FBRyxHQUFHO2dCQUMzQixZQUFZO2dCQUNaTCxnQkFBZ0IsQ0FBQ00sT0FBU0MsS0FBS0csR0FBRyxDQUFDSixPQUFPLEdBQUc7WUFDL0M7WUFFQUosZUFBZTtZQUNmUyxXQUFXLElBQU1ULGVBQWUsUUFBUSxNQUFNLHVCQUF1QjtRQUN2RTtRQUVBVSxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTVjtRQUVqQyxPQUFPO1lBQ0xTLE9BQU9FLG1CQUFtQixDQUFDLFNBQVNYO1FBQ3RDO0lBQ0YsR0FBRztRQUFDRjtLQUFZO0lBRWhCLHFCQUNFLDhEQUFDVDtRQUNDSixXQUFXLDRDQUVWLE9BRENHLFlBQVkseUNBQXlDOzswQkFJdkQsOERBQUNYLDBEQUFNQTtnQkFBQ1csV0FBV0E7Z0JBQVdPLGNBQWNBOzs7Ozs7MEJBRzVDLDhEQUFDaEIsaURBQU1BLENBQUNVLEdBQUc7Z0JBQ1RKLFdBQVU7Z0JBQ1YyQixTQUFTO29CQUNQQyxZQUFZLElBQXVCLE9BQW5CakIsZUFBZSxLQUFJO2dCQUNyQztnQkFDQWtCLFlBQVl4QjswQkFFWFYsU0FBU21DLEdBQUcsQ0FBQyxDQUFDL0IsU0FBU2dDLG9CQUN0Qiw4REFBQ3JDLGlEQUFNQSxDQUFDVSxHQUFHO3dCQUVUSixXQUFVO3dCQUNWZ0MsU0FBUzs0QkFBRUMsU0FBUzt3QkFBRTt3QkFDdEJOLFNBQVM7NEJBQ1BNLFNBQVN0QixpQkFBaUJvQixNQUFNLElBQUk7d0JBQ3RDO3dCQUNBRixZQUFZOzRCQUNWSyxVQUFVOzRCQUNWQyxNQUFNO3dCQUNSO2tDQUdDSixRQUFRLGtCQUFJLDhEQUFDdEMsaUVBQWFBOzRCQUFDVSxXQUFXQTs7Ozs7bUNBQWdCSixRQUFRRCxTQUFTO3VCQVpuRWlDOzs7Ozs7Ozs7Ozs7Ozs7O0FBa0JqQjtHQWpFd0J0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcGFnZS50c3g/NzYwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBTZWNvbmRTZWN0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvU2Vjb25kU2VjdGlvbic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuY29uc3QgU0VDVElPTlMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ01BWScsXG4gICAgY29udGVudDogJ01heSBpcyBhIGNyZWF0aXZlIGRldmVsb3BlcicsXG4gICAgY29tcG9uZW50OiAoXG4gICAgICA8bW90aW9uLnNlY3Rpb24gY2xhc3NOYW1lPVwiaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcmVsYXRpdmVcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtWzIwdnddIGZvbnQtYm9sZCBsZWFkaW5nLW5vbmUgc206dGV4dC1bMTV2d10gbWQ6dGV4dC1bMTB2d11cIj5NQVk8L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtbGdcIj5NYXkgaXMgYSBjcmVhdGl2ZSBkZXZlbG9wZXI8L3A+XG4gICAgICA8L21vdGlvbi5zZWN0aW9uPlxuICAgICksXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NlY29uZCBTZWN0aW9uJyxcbiAgICBjb250ZW50OiAnJyxcbiAgICBjb21wb25lbnQ6IDxTZWNvbmRTZWN0aW9uIGRhcmtUaGVtZT17ZmFsc2V9IC8+LCAvLyBXZSB3aWxsIGR5bmFtaWNhbGx5IHJlcGxhY2UgdGhpcyBsYXRlclxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdUaGlyZCBTZWN0aW9uJyxcbiAgICBjb250ZW50OiAnQ29udGVudCBmb3IgdGhlIHRoaXJkIHNlY3Rpb24nLFxuICAgIGNvbXBvbmVudDogKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1uZXV0cmFsLTgwMCB0ZXh0LXdoaXRlXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bFwiPlRoaXMgaXMgdGhlIHRoaXJkIHNlY3Rpb248L2gxPlxuICAgICAgPC9kaXY+XG4gICAgKSxcbiAgfSxcbl07XG5cbmNvbnN0IFNQUklOR19PUFRJT05TID0ge1xuICB0eXBlOiAnc3ByaW5nJyxcbiAgc3RpZmZuZXNzOiA0MDAsXG4gIGRhbXBpbmc6IDUwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZSgpIHtcbiAgY29uc3QgW2RhcmtUaGVtZSwgc2V0RGFya1RoZW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NlY3Rpb25JbmRleCwgc2V0U2VjdGlvbkluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbaXNTY3JvbGxpbmcsIHNldElzU2Nyb2xsaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9IChldmVudDogV2hlZWxFdmVudCkgPT4ge1xuICAgICAgaWYgKGlzU2Nyb2xsaW5nKSByZXR1cm47XG5cbiAgICAgIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XG4gICAgICAgIC8vIFNjcm9sbCBkb3duXG4gICAgICAgIHNldFNlY3Rpb25JbmRleCgocHJldikgPT4gTWF0aC5taW4ocHJldiArIDEsIFNFQ1RJT05TLmxlbmd0aCAtIDEpKTtcbiAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZGVsdGFZIDwgMCkge1xuICAgICAgICAvLyBTY3JvbGwgdXBcbiAgICAgICAgc2V0U2VjdGlvbkluZGV4KChwcmV2KSA9PiBNYXRoLm1heChwcmV2IC0gMSwgMCkpO1xuICAgICAgfVxuXG4gICAgICBzZXRJc1Njcm9sbGluZyh0cnVlKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2V0SXNTY3JvbGxpbmcoZmFsc2UpLCA1MDApOyAvLyBSZWR1Y2VkIHNjcm9sbCBkZWxheVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW2lzU2Nyb2xsaW5nXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BtaW4taC1zY3JlZW4gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwICR7XG4gICAgICAgIGRhcmtUaGVtZSA/ICdhbmltYXRlLWRhcmstY29sb3ItY2hhbmdlIHRleHQtd2hpdGUnIDogJ2FuaW1hdGUtbGlnaHQtY29sb3ItY2hhbmdlIHRleHQtYmxhY2snXG4gICAgICB9YH1cbiAgICA+XG4gICAgICB7LyogSGVhZGVyICovfVxuICAgICAgPEhlYWRlciBkYXJrVGhlbWU9e2RhcmtUaGVtZX0gc2V0RGFya1RoZW1lPXtzZXREYXJrVGhlbWV9IC8+XG5cbiAgICAgIHsvKiBIb3Jpem9udGFsIFNjcm9sbGFibGUgU2VjdGlvbnMgKi99XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCB3LVs3MDB2d11cIlxuICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgdHJhbnNsYXRlWDogYC0ke3NlY3Rpb25JbmRleCAqIDEwMH12d2AsXG4gICAgICAgIH19XG4gICAgICAgIHRyYW5zaXRpb249e1NQUklOR19PUFRJT05TfVxuICAgICAgPlxuICAgICAgICB7U0VDVElPTlMubWFwKChzZWN0aW9uLCBpZHgpID0+IChcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICAgICAgb3BhY2l0eTogc2VjdGlvbkluZGV4ID09PSBpZHggPyAxIDogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjYsXG4gICAgICAgICAgICAgIGVhc2U6ICdlYXNlSW5PdXQnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7LyogRHluYW1pY2FsbHkgaW5qZWN0IGBkYXJrVGhlbWVgICovfVxuICAgICAgICAgICAge2lkeCA9PT0gMSA/IDxTZWNvbmRTZWN0aW9uIGRhcmtUaGVtZT17ZGFya1RoZW1lfSAvPiA6IHNlY3Rpb24uY29tcG9uZW50fVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L21vdGlvbi5kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJTZWNvbmRTZWN0aW9uIiwibW90aW9uIiwiU0VDVElPTlMiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb21wb25lbnQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwiZGFya1RoZW1lIiwiZGl2IiwiU1BSSU5HX09QVElPTlMiLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsIlBhZ2UiLCJzZXREYXJrVGhlbWUiLCJzZWN0aW9uSW5kZXgiLCJzZXRTZWN0aW9uSW5kZXgiLCJpc1Njcm9sbGluZyIsInNldElzU2Nyb2xsaW5nIiwiaGFuZGxlU2Nyb2xsIiwiZXZlbnQiLCJkZWx0YVkiLCJwcmV2IiwiTWF0aCIsIm1pbiIsImxlbmd0aCIsIm1heCIsInNldFRpbWVvdXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFuaW1hdGUiLCJ0cmFuc2xhdGVYIiwidHJhbnNpdGlvbiIsIm1hcCIsImlkeCIsImluaXRpYWwiLCJvcGFjaXR5IiwiZHVyYXRpb24iLCJlYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});