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

/***/ "(app-pages-browser)/./components/header.tsx":
/*!*******************************!*\
  !*** ./components/header.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Header(param) {\n    let { darkTheme, setDarkTheme } = param;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Set the theme data attribute on the body tag for smooth transitions\n        document.body.setAttribute(\"data-theme\", darkTheme ? \"dark\" : \"light\");\n    }, [\n        darkTheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md transition-all flex items-center justify-between px-6 py-4\",\n        \"data-theme\": darkTheme ? \"dark\" : \"light\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-lg font-medium\",\n                children: \"My Website\"\n            }, void 0, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/components/header.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-2 left-1/2 transform -translate-x-1/2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    onClick: ()=>setDarkTheme(!darkTheme),\n                    className: \"peer inline-flex h-6 w-11 shrink-0 items-center rounded-full cursor-pointer transition-colors \".concat(darkTheme ? \"bg-gray-600\" : \"bg-gray-200\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-5 w-5 rounded-full bg-white transition-transform \".concat(darkTheme ? \"translate-x-5\" : \"translate-x-0\")\n                    }, void 0, false, {\n                        fileName: \"/home/seruji/code/sikhra/pot/components/header.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/seruji/code/sikhra/pot/components/header.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/seruji/code/sikhra/pot/components/header.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/seruji/code/sikhra/pot/components/header.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvaGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFa0M7QUFPbkIsU0FBU0MsT0FBTyxLQUF3QztRQUF4QyxFQUFFQyxTQUFTLEVBQUVDLFlBQVksRUFBZSxHQUF4Qzs7SUFDN0JILGdEQUFTQSxDQUFDO1FBQ1Isc0VBQXNFO1FBQ3RFSSxTQUFTQyxJQUFJLENBQUNDLFlBQVksQ0FBQyxjQUFjSixZQUFZLFNBQVM7SUFDaEUsR0FBRztRQUFDQTtLQUFVO0lBRWQscUJBQ0UsOERBQUNLO1FBQ0NDLFdBQVU7UUFDVkMsY0FBWVAsWUFBWSxTQUFTOzswQkFHakMsOERBQUNRO2dCQUFJRixXQUFVOzBCQUFzQjs7Ozs7OzBCQUdyQyw4REFBQ0U7Z0JBQUlGLFdBQVU7MEJBQ2IsNEVBQUNFO29CQUNDQyxTQUFTLElBQU1SLGFBQWEsQ0FBQ0Q7b0JBQzdCTSxXQUFXLGlHQUVWLE9BRENOLFlBQVksZ0JBQWdCOzhCQUc5Qiw0RUFBQ1E7d0JBQ0NGLFdBQVcsc0RBRVYsT0FEQ04sWUFBWSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPNUM7R0EvQndCRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci50c3g/ODcwYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcbiAgZGFya1RoZW1lOiBib29sZWFuO1xuICBzZXREYXJrVGhlbWU6IChjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyBkYXJrVGhlbWUsIHNldERhcmtUaGVtZSB9OiBIZWFkZXJQcm9wcykge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFNldCB0aGUgdGhlbWUgZGF0YSBhdHRyaWJ1dGUgb24gdGhlIGJvZHkgdGFnIGZvciBzbW9vdGggdHJhbnNpdGlvbnNcbiAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZScsIGRhcmtUaGVtZSA/ICdkYXJrJyA6ICdsaWdodCcpO1xuICB9LCBbZGFya1RoZW1lXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyXG4gICAgICBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIHotNTAgYmctdHJhbnNwYXJlbnQgYmFja2Ryb3AtYmx1ci1tZCB0cmFuc2l0aW9uLWFsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtNiBweS00XCJcbiAgICAgIGRhdGEtdGhlbWU9e2RhcmtUaGVtZSA/ICdkYXJrJyA6ICdsaWdodCd9XG4gICAgPlxuICAgICAgey8qIExvZ28gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW1cIj5NeSBXZWJzaXRlPC9kaXY+XG5cbiAgICAgIHsvKiBUaGVtZSBUb2dnbGUgU3dpdGNoICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMiBsZWZ0LTEvMiB0cmFuc2Zvcm0gLXRyYW5zbGF0ZS14LTEvMlwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGFya1RoZW1lKCFkYXJrVGhlbWUpfVxuICAgICAgICAgIGNsYXNzTmFtZT17YHBlZXIgaW5saW5lLWZsZXggaC02IHctMTEgc2hyaW5rLTAgaXRlbXMtY2VudGVyIHJvdW5kZWQtZnVsbCBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLWNvbG9ycyAke1xuICAgICAgICAgICAgZGFya1RoZW1lID8gJ2JnLWdyYXktNjAwJyA6ICdiZy1ncmF5LTIwMCdcbiAgICAgICAgICB9YH1cbiAgICAgICAgPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGgtNSB3LTUgcm91bmRlZC1mdWxsIGJnLXdoaXRlIHRyYW5zaXRpb24tdHJhbnNmb3JtICR7XG4gICAgICAgICAgICAgIGRhcmtUaGVtZSA/ICd0cmFuc2xhdGUteC01JyA6ICd0cmFuc2xhdGUteC0wJ1xuICAgICAgICAgICAgfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJIZWFkZXIiLCJkYXJrVGhlbWUiLCJzZXREYXJrVGhlbWUiLCJkb2N1bWVudCIsImJvZHkiLCJzZXRBdHRyaWJ1dGUiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJkYXRhLXRoZW1lIiwiZGl2Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/header.tsx\n"));

/***/ })

});