(this.webpackJsonpwbs_react_memefactory=this.webpackJsonpwbs_react_memefactory||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),m=n(1),r=n.n(m),s=n(3),o=n.n(s),a=(n(10),n(4)),i=(n(11),function(){return Object(c.jsxs)("form",{className:"meme-form",children:[Object(c.jsx)("label",{for:"top-text-input",className:"meme-form-field-label",children:"Text top:"}),Object(c.jsx)("input",{type:"text",id:"top-text-input",className:"meme-form-field"}),Object(c.jsx)("label",{for:"bottom-text-input",className:"meme-form-field-label",children:"Text bottom:"}),Object(c.jsx)("input",{type:"text",id:"bottom-text-input",className:"meme-form-field"}),Object(c.jsx)("button",{type:"submit",className:"meme-form-submit",children:"Generate"})]})});n(12);var u=function(){var e=Object(m.useState)(),t=Object(a.a)(e,2),n=t[0],r=t[1],s=function(e){if(e.ok)return e;throw Error(e.statusText)};return Object(m.useEffect)((function(){fetch("https://api.imgflip.com/get_memes").then(s).then((function(e){return e.json()})).then((function(e){var t=e.data.memes,n=Math.round(Math.random()*t.length-1);r(t[n].url)}))}),[]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"The Meme Mine"}),Object(c.jsx)(i,{}),Object(c.jsx)("img",{src:n,className:"meme-picture",alt:"Meme base"})]})};o.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.262eba22.chunk.js.map