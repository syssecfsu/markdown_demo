"use strict";(self.webpackChunkmarkdown_editor=self.webpackChunkmarkdown_editor||[]).push([[4596],{64596:function(e,t,n){function r(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}n.r(t),n.d(t,{groovy:function(){return y}});var i,a=r("abstract as assert boolean break byte case catch char class const continue def default do double else enum extends final finally float for goto if implements import in instanceof int interface long native new package private protected public return short static strictfp super switch synchronized threadsafe throw throws trait transient try void volatile while"),o=r("catch class def do else enum finally for if interface switch trait try while"),l=r("return break continue"),s=r("null true false this");function u(e,t){var n=e.next();if('"'==n||"'"==n)return f(n,e,t);if(/[\[\]{}\(\),;\:\.]/.test(n))return i=n,null;if(/\d/.test(n))return e.eatWhile(/[\w\.]/),e.eat(/eE/)&&(e.eat(/\+\-/),e.eatWhile(/\d/)),"number";if("/"==n){if(e.eat("*"))return t.tokenize.push(p),p(e,t);if(e.eat("/"))return e.skipToEnd(),"comment";if(d(t.lastToken,!1))return f(n,e,t)}if("-"==n&&e.eat(">"))return i="->",null;if(/[+\-*&%=<>!?|\/~]/.test(n))return e.eatWhile(/[+\-*&%=<>|~]/),"operator";if(e.eatWhile(/[\w\$_]/),"@"==n)return e.eatWhile(/[\w\$_\.]/),"meta";if("."==t.lastToken)return"property";if(e.eat(":"))return i="proplabel","property";var r=e.current();return s.propertyIsEnumerable(r)?"atom":a.propertyIsEnumerable(r)?(o.propertyIsEnumerable(r)?i="newstatement":l.propertyIsEnumerable(r)&&(i="standalone"),"keyword"):"variable"}function f(e,t,n){var r=!1;if("/"!=e&&t.eat(e)){if(!t.eat(e))return"string";r=!0}function i(t,n){for(var i,a=!1,o=!r;null!=(i=t.next());){if(i==e&&!a){if(!r)break;if(t.match(e+e)){o=!0;break}}if('"'==e&&"$"==i&&!a&&t.eat("{"))return n.tokenize.push(c()),"string";a=!a&&"\\"==i}return o&&n.tokenize.pop(),"string"}return n.tokenize.push(i),i(t,n)}function c(){var e=1;function t(t,n){if("}"==t.peek()){if(0==--e)return n.tokenize.pop(),n.tokenize[n.tokenize.length-1](t,n)}else"{"==t.peek()&&e++;return u(t,n)}return t.isBase=!0,t}function p(e,t){for(var n,r=!1;n=e.next();){if("/"==n&&r){t.tokenize.pop();break}r="*"==n}return"comment"}function d(e,t){return!e||"operator"==e||"->"==e||/[\.\[\{\(,;:]/.test(e)||"newstatement"==e||"keyword"==e||"proplabel"==e||"standalone"==e&&!t}function k(e,t,n,r,i){this.indented=e,this.column=t,this.type=n,this.align=r,this.prev=i}function m(e,t,n){return e.context=new k(e.indented,t,n,null,e.context)}function h(e){var t=e.context.type;return")"!=t&&"]"!=t&&"}"!=t||(e.indented=e.context.indented),e.context=e.context.prev}u.isBase=!0;var y={startState:function(e){return{tokenize:[u],context:new k(-e,0,"top",!1),indented:0,startOfLine:!0,lastToken:null}},token:function(e,t){var n=t.context;if(e.sol()&&(null==n.align&&(n.align=!1),t.indented=e.indentation(),t.startOfLine=!0,"statement"!=n.type||d(t.lastToken,!0)||(h(t),n=t.context)),e.eatSpace())return null;i=null;var r=t.tokenize[t.tokenize.length-1](e,t);if("comment"==r)return r;if(null==n.align&&(n.align=!0),";"!=i&&":"!=i||"statement"!=n.type)if("->"==i&&"statement"==n.type&&"}"==n.prev.type)h(t),t.context.align=!1;else if("{"==i)m(t,e.column(),"}");else if("["==i)m(t,e.column(),"]");else if("("==i)m(t,e.column(),")");else if("}"==i){for(;"statement"==n.type;)n=h(t);for("}"==n.type&&(n=h(t));"statement"==n.type;)n=h(t)}else i==n.type?h(t):("}"==n.type||"top"==n.type||"statement"==n.type&&"newstatement"==i)&&m(t,e.column(),"statement");else h(t);return t.startOfLine=!1,t.lastToken=i||r,r},indent:function(e,t,n){if(!e.tokenize[e.tokenize.length-1].isBase)return null;var r=t&&t.charAt(0),i=e.context;"statement"!=i.type||d(e.lastToken,!0)||(i=i.prev);var a=r==i.type;return"statement"==i.type?i.indented+("{"==r?0:n.unit):i.align?i.column+(a?0:1):i.indented+(a?0:n.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"'''",'"""']}}}}}]);
//# sourceMappingURL=4596.5ab8e0f6.chunk.js.map