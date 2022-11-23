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
exports.id = "pages/api/payment";
exports.ids = ["pages/api/payment"];
exports.modules = {

/***/ "(api)/./pages/api/payment.ts":
/*!******************************!*\
  !*** ./pages/api/payment.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ payment)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\nasync function payment(req, res) {\n    const response = await fetch(\"http://localhost:5164/Payment/Pay\", {\n        method: \"POST\",\n        headers: {\n            \"Accept\": \"application/json\",\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            siteId: req.body.siteId,\n            fuelType: req.body.fuelType,\n            amount: req.body.amount,\n            cardDetails: req.body.cardDetails,\n            pumpNumber: req.body.pumpNumber\n        })\n    });\n    const data = await response.json();\n    res.status(200).json(data);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcGF5bWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsNkVBQTZFO0FBRzlELGVBQWVBLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBeUIsRUFDekI7SUFFQSxNQUFNQyxXQUFXLE1BQU1DLE1BQU0scUNBQXFDO1FBQ2hFQyxRQUFRO1FBQ1JDLFNBQVM7WUFDUCxVQUFVO1lBQ1YsZ0JBQWdCO1FBQ2xCO1FBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUNuQkMsUUFBUVQsSUFBSU0sSUFBSSxDQUFDRyxNQUFNO1lBQ3ZCQyxVQUFVVixJQUFJTSxJQUFJLENBQUNJLFFBQVE7WUFDM0JDLFFBQVFYLElBQUlNLElBQUksQ0FBQ0ssTUFBTTtZQUN2QkMsYUFBYVosSUFBSU0sSUFBSSxDQUFDTSxXQUFXO1lBQ2pDQyxZQUFZYixJQUFJTSxJQUFJLENBQUNPLFVBQVU7UUFDakM7SUFDRjtJQUVBLE1BQU1DLE9BQU8sTUFBTVosU0FBU2EsSUFBSTtJQUVoQ2QsSUFBSWUsTUFBTSxDQUFDLEtBQUtELElBQUksQ0FBQ0Q7QUFDdkIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JwLXBheW1lbnQtd2ViLy4vcGFnZXMvYXBpL3BheW1lbnQudHM/ZmRmZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcGF5bWVudChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8YW55PlxuKSB7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo1MTY0L1BheW1lbnQvUGF5Jywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBzaXRlSWQ6IHJlcS5ib2R5LnNpdGVJZCwgXG4gICAgICBmdWVsVHlwZTogcmVxLmJvZHkuZnVlbFR5cGUsXG4gICAgICBhbW91bnQ6IHJlcS5ib2R5LmFtb3VudCwgXG4gICAgICBjYXJkRGV0YWlsczogcmVxLmJvZHkuY2FyZERldGFpbHMsIFxuICAgICAgcHVtcE51bWJlcjogcmVxLmJvZHkucHVtcE51bWJlciBcbiAgICB9KVxuICB9KTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGRhdGEpO1xufVxuIl0sIm5hbWVzIjpbInBheW1lbnQiLCJyZXEiLCJyZXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic2l0ZUlkIiwiZnVlbFR5cGUiLCJhbW91bnQiLCJjYXJkRGV0YWlscyIsInB1bXBOdW1iZXIiLCJkYXRhIiwianNvbiIsInN0YXR1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/payment.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/payment.ts"));
module.exports = __webpack_exports__;

})();