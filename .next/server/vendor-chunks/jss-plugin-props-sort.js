"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jss-plugin-props-sort";
exports.ids = ["vendor-chunks/jss-plugin-props-sort"];
exports.modules = {

/***/ "(ssr)/./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/**\n * Sort props by length.\n */ function jssPropsSort() {\n    var sort = function sort(prop0, prop1) {\n        if (prop0.length === prop1.length) {\n            return prop0 > prop1 ? 1 : -1;\n        }\n        return prop0.length - prop1.length;\n    };\n    return {\n        onProcessStyle: function onProcessStyle(style, rule) {\n            if (rule.type !== \"style\") return style;\n            var newStyle = {};\n            var props = Object.keys(style).sort(sort);\n            for(var i = 0; i < props.length; i++){\n                newStyle[props[i]] = style[props[i]];\n            }\n            return newStyle;\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jssPropsSort);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1wcm9wcy1zb3J0L2Rpc3QvanNzLXBsdWdpbi1wcm9wcy1zb3J0LmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0NBRUMsR0FDRCxTQUFTQTtJQUNQLElBQUlDLE9BQU8sU0FBU0EsS0FBS0MsS0FBSyxFQUFFQyxLQUFLO1FBQ25DLElBQUlELE1BQU1FLE1BQU0sS0FBS0QsTUFBTUMsTUFBTSxFQUFFO1lBQ2pDLE9BQU9GLFFBQVFDLFFBQVEsSUFBSSxDQUFDO1FBQzlCO1FBRUEsT0FBT0QsTUFBTUUsTUFBTSxHQUFHRCxNQUFNQyxNQUFNO0lBQ3BDO0lBRUEsT0FBTztRQUNMQyxnQkFBZ0IsU0FBU0EsZUFBZUMsS0FBSyxFQUFFQyxJQUFJO1lBQ2pELElBQUlBLEtBQUtDLElBQUksS0FBSyxTQUFTLE9BQU9GO1lBQ2xDLElBQUlHLFdBQVcsQ0FBQztZQUNoQixJQUFJQyxRQUFRQyxPQUFPQyxJQUFJLENBQUNOLE9BQU9MLElBQUksQ0FBQ0E7WUFFcEMsSUFBSyxJQUFJWSxJQUFJLEdBQUdBLElBQUlILE1BQU1OLE1BQU0sRUFBRVMsSUFBSztnQkFDckNKLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDRyxFQUFFLENBQUMsR0FBR1AsS0FBSyxDQUFDSSxLQUFLLENBQUNHLEVBQUUsQ0FBQztZQUN0QztZQUVBLE9BQU9KO1FBQ1Q7SUFDRjtBQUNGO0FBRUEsaUVBQWVULFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wMzNyLy4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tcHJvcHMtc29ydC9kaXN0L2pzcy1wbHVnaW4tcHJvcHMtc29ydC5lc20uanM/YjUyZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFNvcnQgcHJvcHMgYnkgbGVuZ3RoLlxuICovXG5mdW5jdGlvbiBqc3NQcm9wc1NvcnQoKSB7XG4gIHZhciBzb3J0ID0gZnVuY3Rpb24gc29ydChwcm9wMCwgcHJvcDEpIHtcbiAgICBpZiAocHJvcDAubGVuZ3RoID09PSBwcm9wMS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBwcm9wMCA+IHByb3AxID8gMSA6IC0xO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wMC5sZW5ndGggLSBwcm9wMS5sZW5ndGg7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NTdHlsZTogZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUpIHtcbiAgICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcbiAgICAgIHZhciBuZXdTdHlsZSA9IHt9O1xuICAgICAgdmFyIHByb3BzID0gT2JqZWN0LmtleXMoc3R5bGUpLnNvcnQoc29ydCk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbmV3U3R5bGVbcHJvcHNbaV1dID0gc3R5bGVbcHJvcHNbaV1dO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3U3R5bGU7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc3NQcm9wc1NvcnQ7XG4iXSwibmFtZXMiOlsianNzUHJvcHNTb3J0Iiwic29ydCIsInByb3AwIiwicHJvcDEiLCJsZW5ndGgiLCJvblByb2Nlc3NTdHlsZSIsInN0eWxlIiwicnVsZSIsInR5cGUiLCJuZXdTdHlsZSIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js\n");

/***/ })

};
;