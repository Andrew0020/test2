(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(5),a=c.n(i),l=(c(10),c(2)),d=c(4),r=c.n(d),o=(c(11),c(0));var j=function(){var e=["0001","0002","0003","0004","0005","0006","0007","0008","test1","test2","test3"],t=Object(n.useState)(!1),c=Object(l.a)(t,2),s=c[0],i=c[1],a=Object(n.useState)(!1),d=Object(l.a)(a,2),j=d[0],u=d[1],h=Object(n.useState)(e),b=Object(l.a)(h,2),m=b[0],O=b[1],v=document.getElementById("second"),p=function(){for(var e=0;e<v.children.length;e++)v.children[e].classList.remove("secondActive")},f=function(t){document.getElementById("select").value=t.target.innerHTML,p(),t.target.classList.add("secondActive"),u(!0),i(!1),O(e)};return Object(o.jsx)("div",{className:"select",children:Object(o.jsx)("div",{className:"root",children:Object(o.jsxs)("div",{className:"main",children:[Object(o.jsxs)("div",{className:"mainTop",children:[Object(o.jsx)("div",{children:Object(o.jsx)("input",{autoComplete:"off",id:"select",type:"text",placeholder:"Select ...",onChange:function(t){""===t.target.value&&p();var c=e.filter((function(e){return-1!==e.indexOf(t.target.value)}));i(!0),O(c)}})}),Object(o.jsx)("div",{className:r()("cross",{elementShow:j}),onClick:function(){document.getElementById("select").value="",document.getElementById("select").placeholder="Select ...",p(),u(!1),O(e)},children:Object(o.jsx)("span",{children:"\xd7"})}),Object(o.jsx)("div",{onClick:function(){i(!s)},children:s?Object(o.jsx)("span",{children:"\u25b4"}):Object(o.jsx)("span",{children:"\u25be"})})]}),Object(o.jsx)("div",{id:"second",className:r()("second",{elementHide:!s}),children:m.map((function(e){return Object(o.jsx)("div",{onClick:f,children:e},e)}))})]})})})};c(13);var u=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("header",{className:"App-header",children:Object(o.jsx)(j,{})})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,15)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),i(e),a(e)}))};a.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(u,{})}),document.getElementById("root")),h()}],[[14,1,2]]]);
//# sourceMappingURL=main.7dc38a8b.chunk.js.map