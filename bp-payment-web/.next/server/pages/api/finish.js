"use strict";
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
exports.id = "pages/api/finish";
exports.ids = ["pages/api/finish"];
exports.modules = {

/***/ "(api)/./pages/api/finish.ts":
/*!*****************************!*\
  !*** ./pages/api/finish.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ finish)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nasync function finish(req, res) {\n    const response = await fetch(\"http://localhost:5164/Payment/FinishTransaction\", {\n        method: \"POST\",\n        headers: {\n            \"Accept\": \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            paymentId: req.body.paymentId\n        })\n    });\n    const data = await response.json();\n    res.status(200).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZmluaXNoLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2RUFBNkU7QUFJOUQsZUFBZUEsT0FDNUJDLEdBQW1CLEVBQ25CQyxHQUFvQyxFQUNwQztJQUVBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxtREFBbUQ7UUFDOUVDLFFBQVE7UUFDUkMsU0FBUztZQUNQLFVBQVU7WUFDVixnQkFBZ0I7UUFDbEI7UUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ25CQyxXQUFXVCxJQUFJTSxJQUFJLENBQUNHLFNBQVM7UUFDL0I7SUFDRjtJQUVBLE1BQU1DLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTtJQUVoQ1YsSUFBSVcsTUFBTSxDQUFDLEtBQUtELElBQUksQ0FBQ0Q7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JwLXBheW1lbnQtd2ViLy4vcGFnZXMvYXBpL2ZpbmlzaC50cz8yMGI4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgRmluaXNoUmVzcG9uc2UgfSBmcm9tICcuLi90eXBlcy9maW5pc2hSZXNwb25zZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZpbmlzaChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RmluaXNoUmVzcG9uc2U+XG4pIHtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUxNjQvUGF5bWVudC9GaW5pc2hUcmFuc2FjdGlvbicsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcGF5bWVudElkOiByZXEuYm9keS5wYXltZW50SWRcbiAgICB9KVxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIEZpbmlzaFJlc3BvbnNlO1xuICBcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZGF0YSk7XG59XG4iXSwibmFtZXMiOlsiZmluaXNoIiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBheW1lbnRJZCIsImRhdGEiLCJqc29uIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/finish.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/finish.ts"));
module.exports = __webpack_exports__;

})();