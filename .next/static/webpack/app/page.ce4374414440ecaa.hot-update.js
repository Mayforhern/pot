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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst SECTIONS = [\n    {\n        title: \"Section 1\",\n        content: \"Content for Section 1\"\n    },\n    {\n        title: \"Section 2\",\n        content: \"Content for Section 2\"\n    },\n    {\n        title: \"Section 3\",\n        content: \"Content for Section 3\"\n    },\n    {\n        title: \"Section 4\",\n        content: \"Content for Section 4\"\n    },\n    {\n        title: \"Section 5\",\n        content: \"Content for Section 5\"\n    },\n    {\n        title: \"Section 6\",\n        content: \"Content for Section 6\"\n    },\n    {\n        title: \"Section 7\",\n        content: \"Content for Section 7\"\n    }\n];\nconst SPRING_OPTIONS = {\n    type: \"spring\",\n    stiffness: 400,\n    damping: 50\n};\nfunction Page() {\n    _s();\n    const [sectionIndex, setSectionIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [isScrolling, setIsScrolling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = (event)=>{\n            if (isScrolling) return; // Prevent rapid scrolling\n            if (event.deltaY > 0) {\n                // Scroll down\n                setSectionIndex((prev)=>Math.min(prev + 1, SECTIONS.length - 1));\n            } else if (event.deltaY < 0) {\n                // Scroll up\n                setSectionIndex((prev)=>Math.max(prev - 1, 0));\n            }\n            // Prevent continuous scrolling\n            setIsScrolling(true);\n            setTimeout(()=>setIsScrolling(false), 500); // Reduced timeout for faster response\n        };\n        window.addEventListener(\"wheel\", handleScroll, {\n            passive: false\n        });\n        return ()=>{\n            window.removeEventListener(\"wheel\", handleScroll);\n        };\n    }, [\n        isScrolling\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen w-screen overflow-hidden relative\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"flex h-full w-[700vw]\",\n            animate: {\n                translateX: \"-\".concat(sectionIndex * 100, \"vw\")\n            },\n            transition: SPRING_OPTIONS,\n            children: SECTIONS.map((section, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-screen w-screen flex items-center justify-center bg-neutral-800 text-white\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-5xl font-bold\",\n                                children: section.title\n                            }, void 0, false, {\n                                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-4 text-xl\",\n                                children: section.content\n                            }, void 0, false, {\n                                fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, this)\n                }, idx, false, {\n                    fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n                    lineNumber: 61,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/seruji/code/sikhra/pot/app/page.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(Page, \"/VpYERGQpAJWH6lDPb6pWkzr7TM=\");\n_c = Page;\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRW1EO0FBQ1o7QUFFdkMsTUFBTUksV0FBVztJQUNmO1FBQUVDLE9BQU87UUFBYUMsU0FBUztJQUF3QjtJQUN2RDtRQUFFRCxPQUFPO1FBQWFDLFNBQVM7SUFBd0I7SUFDdkQ7UUFBRUQsT0FBTztRQUFhQyxTQUFTO0lBQXdCO0lBQ3ZEO1FBQUVELE9BQU87UUFBYUMsU0FBUztJQUF3QjtJQUN2RDtRQUFFRCxPQUFPO1FBQWFDLFNBQVM7SUFBd0I7SUFDdkQ7UUFBRUQsT0FBTztRQUFhQyxTQUFTO0lBQXdCO0lBQ3ZEO1FBQUVELE9BQU87UUFBYUMsU0FBUztJQUF3QjtDQUN4RDtBQUVELE1BQU1DLGlCQUFpQjtJQUNyQkMsTUFBTTtJQUNOQyxXQUFXO0lBQ1hDLFNBQVM7QUFDWDtBQUVlLFNBQVNDOztJQUN0QixNQUFNLENBQUNDLGNBQWNDLGdCQUFnQixHQUFHWCwrQ0FBUUEsQ0FBQztJQUNqRCxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFFL0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWUsZUFBZSxDQUFDQztZQUNwQixJQUFJSCxhQUFhLFFBQVEsMEJBQTBCO1lBRW5ELElBQUlHLE1BQU1DLE1BQU0sR0FBRyxHQUFHO2dCQUNwQixjQUFjO2dCQUNkTCxnQkFBZ0IsQ0FBQ00sT0FBU0MsS0FBS0MsR0FBRyxDQUFDRixPQUFPLEdBQUdmLFNBQVNrQixNQUFNLEdBQUc7WUFDakUsT0FBTyxJQUFJTCxNQUFNQyxNQUFNLEdBQUcsR0FBRztnQkFDM0IsWUFBWTtnQkFDWkwsZ0JBQWdCLENBQUNNLE9BQVNDLEtBQUtHLEdBQUcsQ0FBQ0osT0FBTyxHQUFHO1lBQy9DO1lBRUEsK0JBQStCO1lBQy9CSixlQUFlO1lBQ2ZTLFdBQVcsSUFBTVQsZUFBZSxRQUFRLE1BQU0sc0NBQXNDO1FBQ3RGO1FBRUFVLE9BQU9DLGdCQUFnQixDQUFDLFNBQVNWLGNBQWM7WUFBRVcsU0FBUztRQUFNO1FBRWhFLE9BQU87WUFDTEYsT0FBT0csbUJBQW1CLENBQUMsU0FBU1o7UUFDdEM7SUFDRixHQUFHO1FBQUNGO0tBQVk7SUFFaEIscUJBQ0UsOERBQUNlO1FBQUlDLFdBQVU7a0JBRWIsNEVBQUMzQixpREFBTUEsQ0FBQzBCLEdBQUc7WUFDVEMsV0FBVTtZQUNWQyxTQUFTO2dCQUNQQyxZQUFZLElBQXVCLE9BQW5CcEIsZUFBZSxLQUFJO1lBQ3JDO1lBQ0FxQixZQUFZMUI7c0JBRVhILFNBQVM4QixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msb0JBQ3RCLDhEQUFDUDtvQkFFQ0MsV0FBVTs4QkFFViw0RUFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDTztnQ0FBR1AsV0FBVTswQ0FBc0JLLFFBQVE5QixLQUFLOzs7Ozs7MENBQ2pELDhEQUFDaUM7Z0NBQUVSLFdBQVU7MENBQWdCSyxRQUFRN0IsT0FBTzs7Ozs7Ozs7Ozs7O21CQUx6QzhCOzs7Ozs7Ozs7Ozs7Ozs7QUFZakI7R0FwRHdCekI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuY29uc3QgU0VDVElPTlMgPSBbXG4gIHsgdGl0bGU6IFwiU2VjdGlvbiAxXCIsIGNvbnRlbnQ6IFwiQ29udGVudCBmb3IgU2VjdGlvbiAxXCIgfSxcbiAgeyB0aXRsZTogXCJTZWN0aW9uIDJcIiwgY29udGVudDogXCJDb250ZW50IGZvciBTZWN0aW9uIDJcIiB9LFxuICB7IHRpdGxlOiBcIlNlY3Rpb24gM1wiLCBjb250ZW50OiBcIkNvbnRlbnQgZm9yIFNlY3Rpb24gM1wiIH0sXG4gIHsgdGl0bGU6IFwiU2VjdGlvbiA0XCIsIGNvbnRlbnQ6IFwiQ29udGVudCBmb3IgU2VjdGlvbiA0XCIgfSxcbiAgeyB0aXRsZTogXCJTZWN0aW9uIDVcIiwgY29udGVudDogXCJDb250ZW50IGZvciBTZWN0aW9uIDVcIiB9LFxuICB7IHRpdGxlOiBcIlNlY3Rpb24gNlwiLCBjb250ZW50OiBcIkNvbnRlbnQgZm9yIFNlY3Rpb24gNlwiIH0sXG4gIHsgdGl0bGU6IFwiU2VjdGlvbiA3XCIsIGNvbnRlbnQ6IFwiQ29udGVudCBmb3IgU2VjdGlvbiA3XCIgfSxcbl07XG5cbmNvbnN0IFNQUklOR19PUFRJT05TID0ge1xuICB0eXBlOiBcInNwcmluZ1wiLFxuICBzdGlmZm5lc3M6IDQwMCxcbiAgZGFtcGluZzogNTAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKCkge1xuICBjb25zdCBbc2VjdGlvbkluZGV4LCBzZXRTZWN0aW9uSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtpc1Njcm9sbGluZywgc2V0SXNTY3JvbGxpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICBpZiAoaXNTY3JvbGxpbmcpIHJldHVybjsgLy8gUHJldmVudCByYXBpZCBzY3JvbGxpbmdcblxuICAgICAgaWYgKGV2ZW50LmRlbHRhWSA+IDApIHtcbiAgICAgICAgLy8gU2Nyb2xsIGRvd25cbiAgICAgICAgc2V0U2VjdGlvbkluZGV4KChwcmV2KSA9PiBNYXRoLm1pbihwcmV2ICsgMSwgU0VDVElPTlMubGVuZ3RoIC0gMSkpO1xuICAgICAgfSBlbHNlIGlmIChldmVudC5kZWx0YVkgPCAwKSB7XG4gICAgICAgIC8vIFNjcm9sbCB1cFxuICAgICAgICBzZXRTZWN0aW9uSW5kZXgoKHByZXYpID0+IE1hdGgubWF4KHByZXYgLSAxLCAwKSk7XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXZlbnQgY29udGludW91cyBzY3JvbGxpbmdcbiAgICAgIHNldElzU2Nyb2xsaW5nKHRydWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRJc1Njcm9sbGluZyhmYWxzZSksIDUwMCk7IC8vIFJlZHVjZWQgdGltZW91dCBmb3IgZmFzdGVyIHJlc3BvbnNlXG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlU2Nyb2xsLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9LCBbaXNTY3JvbGxpbmddKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gdy1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuIHJlbGF0aXZlXCI+XG4gICAgICB7LyogU2VjdGlvbnMgQ29udGFpbmVyICovfVxuICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBoLWZ1bGwgdy1bNzAwdnddXCJcbiAgICAgICAgYW5pbWF0ZT17e1xuICAgICAgICAgIHRyYW5zbGF0ZVg6IGAtJHtzZWN0aW9uSW5kZXggKiAxMDB9dndgLFxuICAgICAgICB9fVxuICAgICAgICB0cmFuc2l0aW9uPXtTUFJJTkdfT1BUSU9OU31cbiAgICAgID5cbiAgICAgICAge1NFQ1RJT05TLm1hcCgoc2VjdGlvbiwgaWR4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoLXNjcmVlbiB3LXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1uZXV0cmFsLTgwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWJvbGRcIj57c2VjdGlvbi50aXRsZX08L2gxPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC00IHRleHQteGxcIj57c2VjdGlvbi5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibW90aW9uIiwiU0VDVElPTlMiLCJ0aXRsZSIsImNvbnRlbnQiLCJTUFJJTkdfT1BUSU9OUyIsInR5cGUiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwiUGFnZSIsInNlY3Rpb25JbmRleCIsInNldFNlY3Rpb25JbmRleCIsImlzU2Nyb2xsaW5nIiwic2V0SXNTY3JvbGxpbmciLCJoYW5kbGVTY3JvbGwiLCJldmVudCIsImRlbHRhWSIsInByZXYiLCJNYXRoIiwibWluIiwibGVuZ3RoIiwibWF4Iiwic2V0VGltZW91dCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJwYXNzaXZlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImNsYXNzTmFtZSIsImFuaW1hdGUiLCJ0cmFuc2xhdGVYIiwidHJhbnNpdGlvbiIsIm1hcCIsInNlY3Rpb24iLCJpZHgiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});