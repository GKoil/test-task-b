(()=>{"use strict";var e={505:function(e,t,r){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=s(r(17)),i=s(r(455)),n=s(r(860)),{PORT:u,NODE_ENV:l}=process.env,a=(0,n.default)(),p=u||3e3,d="development"===l?"./dist":".";a.use((0,i.default)()),a.use(n.default.static(o.default.join(__dirname,d))),a.get("*",((e,t)=>{t.sendFile("index.html",{root:o.default.join(__dirname,d)})})),a.listen(p,(()=>{console.log(`Express server listeting on port ${p}`)}))},455:e=>{e.exports=require("compression")},860:e=>{e.exports=require("express")},17:e=>{e.exports=require("path")}},t={};!function r(s){var o=t[s];if(void 0!==o)return o.exports;var i=t[s]={exports:{}};return e[s].call(i.exports,i,i.exports,r),i.exports}(505)})();