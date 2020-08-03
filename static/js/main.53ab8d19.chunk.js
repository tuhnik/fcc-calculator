(this["webpackJsonpfcc-calculator"]=this["webpackJsonpfcc-calculator"]||[]).push([[0],{11:function(e,a,t){e.exports=t(24)},16:function(e,a,t){},23:function(e,a,t){},24:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),s=t(3),i=t.n(s),c=(t(16),t(2)),l=(t(23),t(4)),o=[{name:"divide",value:"/",type:"is-info"},{name:"multiply",value:"*",type:"is-info"},{name:"subtract",value:"-",type:"is-info"},{name:"add",value:"+",type:"is-info"},{name:"one",value:"1"},{name:"two",value:"2"},{name:"three",value:"3"},{name:"four",value:"4"},{name:"five",value:"5"},{name:"six",value:"6"},{name:"seven",value:"7"},{name:"eight",value:"8"},{name:"nine",value:"9"},{name:"zero",value:"0"},{name:"decimal",value:"."},{name:"equals",value:"=",type:"is-success"},{name:"clear",value:"AC",type:"is-danger"}],u=function(){var e=Object(c.b)();return n.a.createElement("div",{className:"keypad-grid"},o.map((function(a){var t=a.name,r=a.value,s=a.type;return n.a.createElement("button",{id:t,className:"button ".concat(s||"is-warning"),key:r,value:r,onClick:function(){return e(Object(l.a)(r))}},r)})))};function p(){var e=Object(c.c)((function(e){return e.calculator})).expression;return n.a.createElement("div",{className:"calculator"},n.a.createElement("div",{className:"display-wrapper"},n.a.createElement("div",{id:"display"},e)),n.a.createElement(u,null))}var x=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p,null))},v=t(5),m=Object(v.a)({reducer:{calculator:l.b}});i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(c.a,{store:m},n.a.createElement(x,null))),document.getElementById("root"))},4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return calculate}));var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5),calculatorSlice=Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.b)({name:"calculator",initialState:{expression:"0"},reducers:{setExpression:function(e,a){e.expression=a.payload}}}),setExpression=calculatorSlice.actions.setExpression,calculate=function calculate(value){return function(dispatch,getState){var _expression$match,expression=getState().calculator.expression,isOperator=value.match(/[+\-*/]/g),expTrailingOperators=null===(_expression$match=expression.match(/[+\-*/]+$/g))||void 0===_expression$match?void 0:_expression$match[0],expEndsWithMinus="-"===expression.charAt(expression.length-1);if(2===(null===expTrailingOperators||void 0===expTrailingOperators?void 0:expTrailingOperators.length)&&expEndsWithMinus&&isOperator){if("-"===value)return;var _nextExpression=expression.replace(/.{2}$/,value);return dispatch(setExpression(_nextExpression))}if(("0"!==expression||"0"!==value&&!value.match(/[+/*]/g))&&("-"!==value||"-"!==expression)){if("."===value){if("0"===expression)return dispatch(setExpression("0."));if(expression.match(/\.\d+$|\.$/g))return}if(value.match(/[+-/*]/gi)&&expression.match(/[+-/*]$/g))return"-"!==value&&expression.match(/[+/*]-$/g)?dispatch(setExpression(expression.replace(/.{2}$/,value))):"-"===value&&expression.match(/[+/*-]$/g)?dispatch(setExpression(expression+"-")):dispatch(setExpression(expression.replace(/.$/,value)));if("AC"===value)return dispatch(setExpression("0"));var nextExpression;if(nextExpression="0"===expression?value.toString():expression+value.toString(),"="===value){var formattedExpression=removeTrailingDot(expression).replace("--","- -"),result=eval(formattedExpression).toString();return dispatch(setExpression(result))}dispatch(setExpression(nextExpression))}}},removeTrailingDot=function e(a){return a.match(/[+-/*]$/gi)?e(a.replace(/.$/,"")):a};__webpack_exports__.b=calculatorSlice.reducer}},[[11,1,2]]]);
//# sourceMappingURL=main.53ab8d19.chunk.js.map