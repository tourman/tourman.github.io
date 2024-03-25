(()=>{"use strict";var e={2740:e=>{e.exports=function(e,r,t,n,o,i,l,a){if(!e){var s;if(void 0===r)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var d=[t,n,o,i,l,a],u=0;(s=new Error(r.replace(/%s/g,(function(){return d[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{const e={name:"",surname:"",birthdate:"",country:""},r=Object.keys(e);var n=t(2740),o=t.n(n);const i=e=>{let{display:t,validating:n,submitting:i}=e;const l=!r.map((e=>t[e].error)).filter((e=>e)).length,a=!r.map((e=>t[e].value)).filter((e=>""===e)).length;o()(t.allowSubmit===(l&&a&&!n&&!i),"allowSubmit is violated %s",JSON.stringify({"display.allowSubmit":t.allowSubmit,noErrors:l,validating:n,submitting:i}))},l=e=>{let{submitting:r,display:t}=e;o()(!!r===t.submitting,"Submitting is violated")},a=e=>{let{submitting:r,display:{error:t}}=e;if(r&&t)throw new Error("No error allowed while submitting")},s=e=>{let{display:t,validating:n}=e;const{done:i,error:l,submitting:a}=t;i&&(o()(!r.filter((e=>""!==t[e].value)).length,"All values must be nullish when done"),o()(!r.filter((e=>null!==t[e].error)).length,"All errors must be reset when done"),o()(!l,"No error expected when done"),o()(!a,"No submitting expected when done"),o()(!n,"No validation expected when done")),r.filter((e=>""!==t[e].value)).length&&o()(!i,"Done value must be reset once form has changed"),l&&o()(!i,"No done expected when error")},d=e=>{let{display:t}=e;for(const n of r)""===t[n].value&&o()("FULL_STRING"!==t[n].error,"FULL_STRING error should be ignore due to better user experience")},u=e=>r=>{[i,l,a,s,d].forEach((t=>e((()=>t(r)))))};let v;self.addEventListener("message",(e=>{var r;v=null!==(r=v)&&void 0!==r?r:u((e=>{try{e()}catch(r){self.postMessage(r)}})),v(null===e||void 0===e?void 0:e.data)}))})()})();
//# sourceMappingURL=856.6ca3c0b6.chunk.js.map