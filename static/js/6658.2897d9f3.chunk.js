"use strict";(self.webpackChunkmarkdown_editor=self.webpackChunkmarkdown_editor||[]).push([[6658],{86658:function(e,n,t){t.r(n),t.d(n,{apl:function(){return s}});var l={"+":["conjugate","add"],"\u2212":["negate","subtract"],"\xd7":["signOf","multiply"],"\xf7":["reciprocal","divide"],"\u2308":["ceiling","greaterOf"],"\u230a":["floor","lesserOf"],"\u2223":["absolute","residue"],"\u2373":["indexGenerate","indexOf"],"?":["roll","deal"],"\u22c6":["exponentiate","toThePowerOf"],"\u235f":["naturalLog","logToTheBase"],"\u25cb":["piTimes","circularFuncs"],"!":["factorial","binomial"],"\u2339":["matrixInverse","matrixDivide"],"<":[null,"lessThan"],"\u2264":[null,"lessThanOrEqual"],"=":[null,"equals"],">":[null,"greaterThan"],"\u2265":[null,"greaterThanOrEqual"],"\u2260":[null,"notEqual"],"\u2261":["depth","match"],"\u2262":[null,"notMatch"],"\u2208":["enlist","membership"],"\u2377":[null,"find"],"\u222a":["unique","union"],"\u2229":[null,"intersection"],"\u223c":["not","without"],"\u2228":[null,"or"],"\u2227":[null,"and"],"\u2371":[null,"nor"],"\u2372":[null,"nand"],"\u2374":["shapeOf","reshape"],",":["ravel","catenate"],"\u236a":[null,"firstAxisCatenate"],"\u233d":["reverse","rotate"],"\u2296":["axis1Reverse","axis1Rotate"],"\u2349":["transpose",null],"\u2191":["first","take"],"\u2193":[null,"drop"],"\u2282":["enclose","partitionWithAxis"],"\u2283":["diclose","pick"],"\u2337":[null,"index"],"\u234b":["gradeUp",null],"\u2352":["gradeDown",null],"\u22a4":["encode",null],"\u22a5":["decode",null],"\u2355":["format","formatByExample"],"\u234e":["execute",null],"\u22a3":["stop","left"],"\u22a2":["pass","right"]},r=/[\.\/\u233f\u2340\xa8\u2363]/,a=/\u236c/,u=/[\+\u2212\xd7\xf7\u2308\u230a\u2223\u2373\?\u22c6\u235f\u25cb!\u2339<\u2264=>\u2265\u2260\u2261\u2262\u2208\u2377\u222a\u2229\u223c\u2228\u2227\u2371\u2372\u2374,\u236a\u233d\u2296\u2349\u2191\u2193\u2282\u2283\u2337\u234b\u2352\u22a4\u22a5\u2355\u234e\u22a3\u22a2]/,i=/\u2190/,o=/[\u235d#].*$/,s={startState:function(){return{prev:!1,func:!1,op:!1,string:!1,escape:!1}},token:function(e,n){var t;return e.eatSpace()?null:'"'===(t=e.next())||"'"===t?(e.eatWhile(function(e){var n;return n=!1,function(t){return n=t,t!==e||"\\"===n}}(t)),e.next(),n.prev=!0,"string"):/[\[{\(]/.test(t)?(n.prev=!1,null):/[\]}\)]/.test(t)?(n.prev=!0,null):a.test(t)?(n.prev=!1,"atom"):/[\xaf\d]/.test(t)?(n.func?(n.func=!1,n.prev=!1):n.prev=!0,e.eatWhile(/[\w\.]/),"number"):r.test(t)||i.test(t)?"operator":u.test(t)?(n.func=!0,n.prev=!1,l[t]?"variableName.function.standard":"variableName.function"):o.test(t)?(e.skipToEnd(),"comment"):"\u2218"===t&&"."===e.peek()?(e.next(),"variableName.function"):(e.eatWhile(/[\w\$_]/),n.prev=!0,"keyword")}}}}]);
//# sourceMappingURL=6658.2897d9f3.chunk.js.map