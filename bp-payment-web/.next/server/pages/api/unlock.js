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
exports.id = "pages/api/unlock";
exports.ids = ["pages/api/unlock"];
exports.modules = {

/***/ "(api)/./pages/api/unlock.ts":
/*!*****************************!*\
  !*** ./pages/api/unlock.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ payment)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nasync function payment(req, res) {\n    const response = await fetch(\"http://localhost:5164/Payment/UnlockPump\", {\n        method: \"POST\",\n        headers: {\n            \"Accept\": \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            paymentId: req.body.paymentId\n        })\n    });\n    const data = await response.json();\n    res.status(200).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdW5sb2NrLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSw2RUFBNkU7QUFROUQsZUFBZUEsUUFDNUJDLEdBQW1CLEVBQ25CQyxHQUFrQyxFQUNsQztJQUVBLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSw0Q0FBNEM7UUFDdkVDLFFBQVE7UUFDUkMsU0FBUztZQUNQLFVBQVU7WUFDVixnQkFBZ0I7UUFDbEI7UUFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO1lBQ25CQyxXQUFXVCxJQUFJTSxJQUFJLENBQUNHLFNBQVM7UUFDL0I7SUFDRjtJQUVBLE1BQU1DLE9BQU8sTUFBTVIsU0FBU1MsSUFBSTtJQUVoQ1YsSUFBSVcsTUFBTSxDQUFDLEtBQUtELElBQUksQ0FBQ0Q7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JwLXBheW1lbnQtd2ViLy4vcGFnZXMvYXBpL3VubG9jay50cz8yMDNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuXG50eXBlIFVubG9ja1Jlc3VsdCA9IHtcbiAgU3VjY2VzczogYm9vbGVhbixcbiAgRXJyb3JNZXNzYWdlOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcGF5bWVudChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VW5sb2NrUmVzdWx0PlxuKSB7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MTY0L1BheW1lbnQvVW5sb2NrUHVtcCcsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcGF5bWVudElkOiByZXEuYm9keS5wYXltZW50SWRcbiAgICB9KVxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpIGFzIFVubG9ja1Jlc3VsdDtcblxuICByZXMuc3RhdHVzKDIwMCkuanNvbihkYXRhKTtcbn1cbiJdLCJuYW1lcyI6WyJwYXltZW50IiwicmVxIiwicmVzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBheW1lbnRJZCIsImRhdGEiLCJqc29uIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/unlock.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/unlock.ts"));
module.exports = __webpack_exports__;

})();