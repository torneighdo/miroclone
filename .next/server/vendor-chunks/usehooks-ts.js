"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/usehooks-ts";
exports.ids = ["vendor-chunks/usehooks-ts"];
exports.modules = {

/***/ "(ssr)/./node_modules/usehooks-ts/dist/esm/useDebounce/useDebounce.js":
/*!**********************************************************************!*\
  !*** ./node_modules/usehooks-ts/dist/esm/useDebounce/useDebounce.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDebounce: () => (/* binding */ useDebounce)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useDebounce(value, delay) {\n    const [debouncedValue, setDebouncedValue] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const timer = setTimeout(()=>setDebouncedValue(value), delay || 500);\n        return ()=>{\n            clearTimeout(timer);\n        };\n    }, [\n        value,\n        delay\n    ]);\n    return debouncedValue;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlaG9va3MtdHMvZGlzdC9lc20vdXNlRGVib3VuY2UvdXNlRGVib3VuY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTRDO0FBQ3JDLFNBQVNFLFlBQVlDLEtBQUssRUFBRUMsS0FBSztJQUNwQyxNQUFNLENBQUNDLGdCQUFnQkMsa0JBQWtCLEdBQUdMLCtDQUFRQSxDQUFDRTtJQUNyREgsZ0RBQVNBLENBQUM7UUFDTixNQUFNTyxRQUFRQyxXQUFXLElBQU1GLGtCQUFrQkgsUUFBUUMsU0FBUztRQUNsRSxPQUFPO1lBQ0hLLGFBQWFGO1FBQ2pCO0lBQ0osR0FBRztRQUFDSjtRQUFPQztLQUFNO0lBQ2pCLE9BQU9DO0FBQ1giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib2FyZC12aWRlby10dXRvcmlhbC8uL25vZGVfbW9kdWxlcy91c2Vob29rcy10cy9kaXN0L2VzbS91c2VEZWJvdW5jZS91c2VEZWJvdW5jZS5qcz8wZjA0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlRGVib3VuY2UodmFsdWUsIGRlbGF5KSB7XG4gICAgY29uc3QgW2RlYm91bmNlZFZhbHVlLCBzZXREZWJvdW5jZWRWYWx1ZV0gPSB1c2VTdGF0ZSh2YWx1ZSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHNldERlYm91bmNlZFZhbHVlKHZhbHVlKSwgZGVsYXkgfHwgNTAwKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIH07XG4gICAgfSwgW3ZhbHVlLCBkZWxheV0pO1xuICAgIHJldHVybiBkZWJvdW5jZWRWYWx1ZTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZURlYm91bmNlIiwidmFsdWUiLCJkZWxheSIsImRlYm91bmNlZFZhbHVlIiwic2V0RGVib3VuY2VkVmFsdWUiLCJ0aW1lciIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/usehooks-ts/dist/esm/useDebounce/useDebounce.js\n");

/***/ })

};
;