(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,n){e.exports=n(268)},150:function(e,t,n){},268:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"search",function(){return Pe});var a=n(0),c=n.n(a),o=n(21),i=n.n(o),s=(n(150),n(298)),u=n(294),l=n(297),f=n(19),p=n(33),m=n(43),v=n(134),d=n(121),b=(n(85),n(103)),E=n.n(b),h=n(115),w=n.n(h),g=n(116),O=n.n(g),j="SEARCH_REQUEST",k="SEARCH_RESPONSE",y="SEARCH_ERROR",R="SEARCH_RESET",x="SEARCH_CLOSE",C="SEARCH_SELECT",S="SEARCH_DOWN",N="SEARCH_UP",q={busy:!1,error:"",reset:{available:!1},input:{string:"",error:!1,focusCounter:0},list:{available:!1,items:[]}};function A(e,t){var n=new RegExp(t,"gi"),r={};if(r.normal=e.split(n),1===r.normal)throw new Error("No matches for name (".concat(e,") and request (").concat(t,")"));r.selected=e.match(n);var a=Object.entries(r).map(function(e){var t=Object(v.a)(e,2),n=t[0];return t[1].map(function(e){return{type:n,text:e}})});return w.a.apply(void 0,Object(m.a)(a)).flat().filter(function(e){return e&&e.text})}function W(e){e.busy=!1,e.reset.available=!1,e.input.string="",e.list.available=!1}var H=n(7),L=n.n(H);var F=n(58),I={onRequest:j,onResponse:k,onError:y,onReset:R,onClose:x,onSelect:C,onUp:N,onDown:S},P=E()(I,function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:e,payload:t}}});function _(e){return e.search}function D(e){return{actions:E()(P,function(t){return function(n){return e(t(n))}})}}var T=n(29),U=n(135),M=n(23),z=n.n(M),B=n(40),J=z.a.mark(Y),Q=z.a.mark($);function Y(e,t){var n,r,a,c,o;return z.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(n=e.api,t.type,r=t.payload,a=r.request){i.next=5;break}return i.abrupt("return");case 5:return i.next=7,Object(B.b)(500);case 7:return i.prev=7,i.next=10,Object(B.a)(n.search,{request:a});case 10:return c=i.sent,i.next=13,Object(B.c)(P.onResponse({response:c}));case 13:i.next=20;break;case 15:return i.prev=15,i.t0=i.catch(7),o=String(i.t0),i.next=20,Object(B.c)(P.onError({error:o}));case 20:case"end":return i.stop()}},J,null,[[7,15]])}function $(e){var t;return z.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.api,n.next=3,Object(B.d)([j,R],Y,{api:t});case 3:case"end":return n.stop()}},Q)}var G=Object(T.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;return Object(d.a)(e,function(e){switch(n){case j:r.request?(e.busy=!0,e.reset.available=!0,e.input.string=r.request):W(e),e.error="",e.input.error=!1;break;case k:e.busy=!1;var t=r.response.results||[];e.list.available=!!t.length,e.list.items=t.map(function(t){var n=t.name,r=Object(p.a)(t,["name"]);return Object(f.a)({},r,{name:n,split:A(n,e.input.string)})});break;case y:e.error=r.error,e.input.error=!0,e.busy=!1;break;case R:W(e),e.error="",e.input.error=!1,e.input.focusCounter++;break;case x:e.list.available=!1;break;case C:var a=e.list.items.find(function(e){return e.name===r.name});if(!a)break;e.busy=!1,e.list.available=!1,e.list.items=[a],e.input.string=r.name,e.input.focusCounter++;break;case S:var c=e.list.items,o=c.findIndex(function(e){return e.selected});if(o===c.length-1)break;if(c[o+1].selected=!0,!~o)break;c[o].selected=!1;break;case N:var i=e.list.items,s=i.findIndex(function(e){return e.selected});if(!~s)break;if(!s)break;i[s-1].selected=!0,i[s].selected=!1}})}});var K=n(269),V=n(291),X=Object(K.a)({wrapper:{padding:"4px",display:"flex",position:"relative"}});var Z=c.a.forwardRef(function(e,t){var n=X();return c.a.createElement(s.a,{m:1},c.a.createElement(V.a,{ref:t,className:n.wrapper},e.children))}),ee=n(292),te=n(124),ne=n.n(te),re=n(293),ae=(new Map).set(!0,{Icon:ee.a,iconProps:{size:24}}).set(!1,{Icon:ne.a,iconProps:{}});function ce(e){var t=ae.get(e.busy),n=t.Icon,r=t.iconProps;return c.a.createElement(re.a,null,c.a.createElement(n,r))}var oe=n(130),ie=n.n(oe),se=n(300),ue=Object(K.a)({wrapper:{flex:1,minWidth:200},error:{overflow:"hidden",width:"100%",justifyContent:"left"}}),le=(new Map).set(!0,"block").set(!1,"none");function fe(e){var t=e.error,n=le.get(!!t),r=ue();return c.a.createElement(s.a,{m:1,style:{display:n},className:r.wrapper},c.a.createElement(se.a,{icon:c.a.createElement(ie.a,null),label:t,className:r.error,color:"secondary"}))}var pe=n(299),me=Object(K.a)({input:{marginLeft:"8px",flex:2}});var ve=c.a.forwardRef(function(e,t){var n=e.autoFocus,r=e.error,a=e.string,o=e.placeholder,i=me();return c.a.createElement(pe.a,{className:i.input,inputRef:t,error:r,autoFocus:n,value:a,placeholder:o,onChange:function(t){var n=t.target.value;e.actions.onChange({value:n})}})}),de=n(132),be=n.n(de),Ee=(new Map).set(!0,"visible").set(!1,"hidden");var he=c.a.forwardRef(function(e,t){var n=Ee.get(e.available);return c.a.createElement(re.a,{ref:t,style:{visibility:n},onClick:function(t){return e.actions.onClick(t)}},c.a.createElement(be.a,null))});var we=c.a.forwardRef(function(e,t){var n=e.reset,r=e.input,a=e.actions,o=e.autoFocus,i=e.withNavigation,s=e.placeholder,u=Object(f.a)({},a,{onChange:function(t){var n=t.value;e.actions.onRequest({request:n})}}),l=Object(f.a)({},a,{onClick:function(){e.actions.onReset()}});return c.a.createElement(c.a.Fragment,null,c.a.createElement(ve,Object.assign({},r,{actions:u,withNavigation:i,placeholder:s,autoFocus:o,ref:t})),c.a.createElement(he,Object.assign({},n,{actions:l,withNavigation:i})))}),ge=n(295),Oe=Object(K.a)({wrapper:{position:"absolute",top:60,zIndex:1,padding:"0 40px"},list:{overflowY:"auto",maxHeight:300,paddingRight:8}}),je=(new Map).set(!0,"visible").set(!1,"hidden");function ke(e){var t=Oe(),n=je.get(e.available);return c.a.createElement(u.a,{maxWidth:"md",className:t.wrapper,style:{visibility:n}},c.a.createElement(V.a,null,c.a.createElement(ge.a,{className:t.list},e.children)))}var ye=n(133),Re=n.n(ye);var xe=n(296),Ce=n(302),Se=Object(K.a)({selected:{fontWeight:600,background:"yellow"},item:{transition:"none"}}),Ne=(new Map).set("normal",{Wrapper:c.a.Fragment,getProps:function(){return{}}}).set("selected",{Wrapper:"b",getProps:function(e){return{className:e.classes.selected}}});function qe(e,t){e.actions;var n=Object(p.a)(e,["actions"]),r=(t.actions,Object(p.a)(t,["actions"]));return Re()(n,r)}var Ae=O()([function(e){return c.a.memo(e,qe)},function(e){return function(t){var n=t.selected,r=Object(a.useRef)();return Object(a.useEffect)(function(){n&&r.current.focus()},[n]),c.a.createElement(e,Object.assign({},t,{ref:r}))}},c.a.forwardRef])(function(e,t){var n=e.selected,r=Se(),a=e.split.map(function(e,t){var n=Ne.get(e.type),a=n.Wrapper,o=(0,n.getProps)({classes:r});return c.a.createElement(a,Object.assign({key:t},o),e.text)});return c.a.createElement(xe.a,{className:r.item,button:!0,component:"a",href:e.name,selected:n,ref:t,onClick:function(t){t.preventDefault();var n=e.name;e.actions.onClick({name:n})}},c.a.createElement(Ce.a,null,a))});function We(e){var t=e.actions,n=e.available,r=e.withNavigation,a=Object(f.a)({},t),o=Object(f.a)({},t,{onClick:function(t){var n=t.name;e.actions.onSelect({name:n})}});return c.a.createElement(ke,{available:n,actions:a},e.items.map(function(e){return c.a.createElement(Ae,Object.assign({},e,{actions:o,key:e.id,withNavigation:r}))}))}var He=c.a.forwardRef(function(e,t){var n=e.list,r=e.actions,a=e.inputRef,o=e.placeholder;return c.a.createElement(Z,{ref:t},c.a.createElement(ce,e),c.a.createElement(we,Object.assign({},e,{actions:r,placeholder:o,ref:a})),c.a.createElement(fe,e),c.a.createElement(We,Object.assign({},n,{actions:r})))}),Le=O()([function(e){return function(t){var n=t.api,r=Object(p.a)(t,["api"]),a=Object(U.a)(),o=Object(T.e)(G,Object(T.a)(a));return a.run($,{api:n}),c.a.createElement(F.a,{store:o},c.a.createElement(e,r))}},function(e){return Object(F.b)(_,D)(e)},function(e){return function(t){var n=Object(a.useRef)();return c.a.createElement(e,Object.assign({},t,{ref:n}))}},function(e){return c.a.forwardRef(function(t,n){var r=t.actions.onClose;function o(e){var t=n.current===e.target,a=n.current.contains(e.target);t||a||r()}function i(e){~["Esc","Escape"].indexOf(e.key)&&r()}return Object(a.useEffect)(function(){return document.addEventListener("keyup",i),document.addEventListener("click",o),function(){document.removeEventListener("keyup",i),document.removeEventListener("click",o)}}),c.a.createElement(e,Object.assign({},t,{ref:n}))})},function(e){var t={ArrowUp:"onUp",ArrowDown:"onDown"};return c.a.forwardRef(function(n,r){function o(e){var a=r.current===document.activeElement,c=r.current.contains(document.activeElement);if(a||c){var o=t[e.key];o&&(n.actions[o](),e.preventDefault())}}return Object(a.useEffect)(function(){return document.addEventListener("keydown",o),function(){document.removeEventListener("keydown",o)}}),c.a.createElement(e,Object.assign({},n,{ref:r}))})},function(e){return c.a.forwardRef(function(t,n){var r=Object(a.useRef)();return Object(a.useEffect)(function(){r.current.focus()},[t.input.focusCounter]),c.a.createElement(e,Object.assign({},t,{inputRef:r,ref:n}))})}])(He);Le.propTypes={api:L.a.shape({search:L.a.func.isRequired}).isRequired,autoFocus:L.a.bool};var Fe=Le,Ie=n(81);function Pe(){return _e.apply(this,arguments)}function _e(){return(_e=Object(Ie.a)(z.a.mark(function e(){var t,n,r,a,c,o,i,s,u=arguments;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=function(){return(a=Object(Ie.a)(z.a.mark(function e(t){var n,a,c,o,i,s,u=arguments;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=u.length>1&&void 0!==u[1]?u[1]:{results:[]},t){e.next=3;break}return e.abrupt("return",n);case 3:return e.next=5,fetch(t);case 5:if((a=e.sent).ok){e.next=10;break}throw c=a.status,o=(o=a.statusText)&&": (".concat(o,")"),new Error("".concat(c).concat(o));case 10:return e.next=12,a.json();case 12:return i=e.sent,s=Object(f.a)({},i,{results:[].concat(Object(m.a)(n.results),Object(m.a)(i.results))}),e.next=16,r(i.next,s);case 16:return e.abrupt("return",e.sent);case 17:case"end":return e.stop()}},e)}))).apply(this,arguments)},r=function(e){return a.apply(this,arguments)},t=u.length>0&&void 0!==u[0]?u[0]:{},n=t.request,c=encodeURIComponent(n),o="https://swapi.co/api/planets/?search=".concat(c),e.next=7,r(o);case 7:return i=e.sent,s=new RegExp(n,"i"),i.results=i.results.map(function(e){return Object(f.a)({},e,{id:e.name})}).filter(function(e){return s.test(e.name)}),i.count=i.results.length,e.abrupt("return",i);case 12:case"end":return e.stop()}},e)}))).apply(this,arguments)}function De(e){return c.a.createElement(s.a,{m:2},c.a.createElement(u.a,{component:"main",maxWidth:"md"},c.a.createElement(l.a,null),e.children))}var Te=function(){return c.a.createElement(De,null,c.a.createElement(Fe,{api:r,autoFocus:!0,placeholder:"Try to search planets..."}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(Te,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[145,1,2]]]);
//# sourceMappingURL=main.74d60881.chunk.js.map