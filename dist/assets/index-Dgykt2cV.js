const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-DVSIuIwO.js","assets/categories-_4dQZ5Hg.js","assets/ToolPage-CrJut8sw.js","assets/SignInPage-D4eEVFWi.js","assets/usageManager-D0sdWj63.js","assets/PricingPage-Bq1EoTwH.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();var dM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function J0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ld={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function vS(){if(Z_)return El;Z_=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:u}}return El.Fragment=t,El.jsx=n,El.jsxs=n,El}var W_;function ES(){return W_||(W_=1,Ld.exports=vS()),Ld.exports}var X=ES(),Ud={exports:{}},vt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function TS(){if(tv)return vt;tv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),N=Symbol.iterator;function H(M){return M===null||typeof M!="object"?null:(M=N&&M[N]||M["@@iterator"],typeof M=="function"?M:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,Z={};function ut(M,Q,nt){this.props=M,this.context=Q,this.refs=Z,this.updater=nt||J}ut.prototype.isReactComponent={},ut.prototype.setState=function(M,Q){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Q,"setState")},ut.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function gt(){}gt.prototype=ut.prototype;function pt(M,Q,nt){this.props=M,this.context=Q,this.refs=Z,this.updater=nt||J}var Pt=pt.prototype=new gt;Pt.constructor=pt,W(Pt,ut.prototype),Pt.isPureReactComponent=!0;var te=Array.isArray;function Nt(){}var C={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function R(M,Q,nt){var rt=nt.ref;return{$$typeof:r,type:M,key:Q,ref:rt!==void 0?rt:null,props:nt}}function k(M,Q){return R(M.type,Q,M.props)}function O(M){return typeof M=="object"&&M!==null&&M.$$typeof===r}function V(M){var Q={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(nt){return Q[nt]})}var b=/\/+/g;function It(M,Q){return typeof M=="object"&&M!==null&&M.key!=null?V(""+M.key):Q.toString(36)}function ce(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(Nt,Nt):(M.status="pending",M.then(function(Q){M.status==="pending"&&(M.status="fulfilled",M.value=Q)},function(Q){M.status==="pending"&&(M.status="rejected",M.reason=Q)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function q(M,Q,nt,rt,yt){var wt=typeof M;(wt==="undefined"||wt==="boolean")&&(M=null);var Ut=!1;if(M===null)Ut=!0;else switch(wt){case"bigint":case"string":case"number":Ut=!0;break;case"object":switch(M.$$typeof){case r:case t:Ut=!0;break;case T:return Ut=M._init,q(Ut(M._payload),Q,nt,rt,yt)}}if(Ut)return yt=yt(M),Ut=rt===""?"."+It(M,0):rt,te(yt)?(nt="",Ut!=null&&(nt=Ut.replace(b,"$&/")+"/"),q(yt,Q,nt,"",function(cs){return cs})):yt!=null&&(O(yt)&&(yt=k(yt,nt+(yt.key==null||M&&M.key===yt.key?"":(""+yt.key).replace(b,"$&/")+"/")+Ut)),Q.push(yt)),1;Ut=0;var Ne=rt===""?".":rt+":";if(te(M))for(var se=0;se<M.length;se++)rt=M[se],wt=Ne+It(rt,se),Ut+=q(rt,Q,nt,wt,yt);else if(se=H(M),typeof se=="function")for(M=se.call(M),se=0;!(rt=M.next()).done;)rt=rt.value,wt=Ne+It(rt,se++),Ut+=q(rt,Q,nt,wt,yt);else if(wt==="object"){if(typeof M.then=="function")return q(ce(M),Q,nt,rt,yt);throw Q=String(M),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Ut}function et(M,Q,nt){if(M==null)return M;var rt=[],yt=0;return q(M,rt,"","",function(wt){return Q.call(nt,wt,yt++)}),rt}function at(M){if(M._status===-1){var Q=M._result;Q=Q(),Q.then(function(nt){(M._status===0||M._status===-1)&&(M._status=1,M._result=nt)},function(nt){(M._status===0||M._status===-1)&&(M._status=2,M._result=nt)}),M._status===-1&&(M._status=0,M._result=Q)}if(M._status===1)return M._result.default;throw M._result}var Dt=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},qt={map:et,forEach:function(M,Q,nt){et(M,function(){Q.apply(this,arguments)},nt)},count:function(M){var Q=0;return et(M,function(){Q++}),Q},toArray:function(M){return et(M,function(Q){return Q})||[]},only:function(M){if(!O(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return vt.Activity=S,vt.Children=qt,vt.Component=ut,vt.Fragment=n,vt.Profiler=l,vt.PureComponent=pt,vt.StrictMode=s,vt.Suspense=g,vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,vt.__COMPILER_RUNTIME={__proto__:null,c:function(M){return C.H.useMemoCache(M)}},vt.cache=function(M){return function(){return M.apply(null,arguments)}},vt.cacheSignal=function(){return null},vt.cloneElement=function(M,Q,nt){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var rt=W({},M.props),yt=M.key;if(Q!=null)for(wt in Q.key!==void 0&&(yt=""+Q.key),Q)!w.call(Q,wt)||wt==="key"||wt==="__self"||wt==="__source"||wt==="ref"&&Q.ref===void 0||(rt[wt]=Q[wt]);var wt=arguments.length-2;if(wt===1)rt.children=nt;else if(1<wt){for(var Ut=Array(wt),Ne=0;Ne<wt;Ne++)Ut[Ne]=arguments[Ne+2];rt.children=Ut}return R(M.type,yt,rt)},vt.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},vt.createElement=function(M,Q,nt){var rt,yt={},wt=null;if(Q!=null)for(rt in Q.key!==void 0&&(wt=""+Q.key),Q)w.call(Q,rt)&&rt!=="key"&&rt!=="__self"&&rt!=="__source"&&(yt[rt]=Q[rt]);var Ut=arguments.length-2;if(Ut===1)yt.children=nt;else if(1<Ut){for(var Ne=Array(Ut),se=0;se<Ut;se++)Ne[se]=arguments[se+2];yt.children=Ne}if(M&&M.defaultProps)for(rt in Ut=M.defaultProps,Ut)yt[rt]===void 0&&(yt[rt]=Ut[rt]);return R(M,wt,yt)},vt.createRef=function(){return{current:null}},vt.forwardRef=function(M){return{$$typeof:p,render:M}},vt.isValidElement=O,vt.lazy=function(M){return{$$typeof:T,_payload:{_status:-1,_result:M},_init:at}},vt.memo=function(M,Q){return{$$typeof:y,type:M,compare:Q===void 0?null:Q}},vt.startTransition=function(M){var Q=C.T,nt={};C.T=nt;try{var rt=M(),yt=C.S;yt!==null&&yt(nt,rt),typeof rt=="object"&&rt!==null&&typeof rt.then=="function"&&rt.then(Nt,Dt)}catch(wt){Dt(wt)}finally{Q!==null&&nt.types!==null&&(Q.types=nt.types),C.T=Q}},vt.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},vt.use=function(M){return C.H.use(M)},vt.useActionState=function(M,Q,nt){return C.H.useActionState(M,Q,nt)},vt.useCallback=function(M,Q){return C.H.useCallback(M,Q)},vt.useContext=function(M){return C.H.useContext(M)},vt.useDebugValue=function(){},vt.useDeferredValue=function(M,Q){return C.H.useDeferredValue(M,Q)},vt.useEffect=function(M,Q){return C.H.useEffect(M,Q)},vt.useEffectEvent=function(M){return C.H.useEffectEvent(M)},vt.useId=function(){return C.H.useId()},vt.useImperativeHandle=function(M,Q,nt){return C.H.useImperativeHandle(M,Q,nt)},vt.useInsertionEffect=function(M,Q){return C.H.useInsertionEffect(M,Q)},vt.useLayoutEffect=function(M,Q){return C.H.useLayoutEffect(M,Q)},vt.useMemo=function(M,Q){return C.H.useMemo(M,Q)},vt.useOptimistic=function(M,Q){return C.H.useOptimistic(M,Q)},vt.useReducer=function(M,Q,nt){return C.H.useReducer(M,Q,nt)},vt.useRef=function(M){return C.H.useRef(M)},vt.useState=function(M){return C.H.useState(M)},vt.useSyncExternalStore=function(M,Q,nt){return C.H.useSyncExternalStore(M,Q,nt)},vt.useTransition=function(){return C.H.useTransition()},vt.version="19.2.0",vt}var ev;function Om(){return ev||(ev=1,Ud.exports=TS()),Ud.exports}var Gt=Om();const AS=J0(Gt);var zd={exports:{}},Tl={},jd={exports:{}},Bd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function SS(){return nv||(nv=1,(function(r){function t(q,et){var at=q.length;q.push(et);t:for(;0<at;){var Dt=at-1>>>1,qt=q[Dt];if(0<l(qt,et))q[Dt]=et,q[at]=qt,at=Dt;else break t}}function n(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var et=q[0],at=q.pop();if(at!==et){q[0]=at;t:for(var Dt=0,qt=q.length,M=qt>>>1;Dt<M;){var Q=2*(Dt+1)-1,nt=q[Q],rt=Q+1,yt=q[rt];if(0>l(nt,at))rt<qt&&0>l(yt,nt)?(q[Dt]=yt,q[rt]=at,Dt=rt):(q[Dt]=nt,q[Q]=at,Dt=Q);else if(rt<qt&&0>l(yt,at))q[Dt]=yt,q[rt]=at,Dt=rt;else break t}}return et}function l(q,et){var at=q.sortIndex-et.sortIndex;return at!==0?at:q.id-et.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var g=[],y=[],T=1,S=null,N=3,H=!1,J=!1,W=!1,Z=!1,ut=typeof setTimeout=="function"?setTimeout:null,gt=typeof clearTimeout=="function"?clearTimeout:null,pt=typeof setImmediate<"u"?setImmediate:null;function Pt(q){for(var et=n(y);et!==null;){if(et.callback===null)s(y);else if(et.startTime<=q)s(y),et.sortIndex=et.expirationTime,t(g,et);else break;et=n(y)}}function te(q){if(W=!1,Pt(q),!J)if(n(g)!==null)J=!0,Nt||(Nt=!0,V());else{var et=n(y);et!==null&&ce(te,et.startTime-q)}}var Nt=!1,C=-1,w=5,R=-1;function k(){return Z?!0:!(r.unstable_now()-R<w)}function O(){if(Z=!1,Nt){var q=r.unstable_now();R=q;var et=!0;try{t:{J=!1,W&&(W=!1,gt(C),C=-1),H=!0;var at=N;try{e:{for(Pt(q),S=n(g);S!==null&&!(S.expirationTime>q&&k());){var Dt=S.callback;if(typeof Dt=="function"){S.callback=null,N=S.priorityLevel;var qt=Dt(S.expirationTime<=q);if(q=r.unstable_now(),typeof qt=="function"){S.callback=qt,Pt(q),et=!0;break e}S===n(g)&&s(g),Pt(q)}else s(g);S=n(g)}if(S!==null)et=!0;else{var M=n(y);M!==null&&ce(te,M.startTime-q),et=!1}}break t}finally{S=null,N=at,H=!1}et=void 0}}finally{et?V():Nt=!1}}}var V;if(typeof pt=="function")V=function(){pt(O)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,It=b.port2;b.port1.onmessage=O,V=function(){It.postMessage(null)}}else V=function(){ut(O,0)};function ce(q,et){C=ut(function(){q(r.unstable_now())},et)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(q){q.callback=null},r.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<q?Math.floor(1e3/q):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_next=function(q){switch(N){case 1:case 2:case 3:var et=3;break;default:et=N}var at=N;N=et;try{return q()}finally{N=at}},r.unstable_requestPaint=function(){Z=!0},r.unstable_runWithPriority=function(q,et){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var at=N;N=q;try{return et()}finally{N=at}},r.unstable_scheduleCallback=function(q,et,at){var Dt=r.unstable_now();switch(typeof at=="object"&&at!==null?(at=at.delay,at=typeof at=="number"&&0<at?Dt+at:Dt):at=Dt,q){case 1:var qt=-1;break;case 2:qt=250;break;case 5:qt=1073741823;break;case 4:qt=1e4;break;default:qt=5e3}return qt=at+qt,q={id:T++,callback:et,priorityLevel:q,startTime:at,expirationTime:qt,sortIndex:-1},at>Dt?(q.sortIndex=at,t(y,q),n(g)===null&&q===n(y)&&(W?(gt(C),C=-1):W=!0,ce(te,at-Dt))):(q.sortIndex=qt,t(g,q),J||H||(J=!0,Nt||(Nt=!0,V()))),q},r.unstable_shouldYield=k,r.unstable_wrapCallback=function(q){var et=N;return function(){var at=N;N=et;try{return q.apply(this,arguments)}finally{N=at}}}})(Bd)),Bd}var iv;function wS(){return iv||(iv=1,jd.exports=SS()),jd.exports}var qd={exports:{}},Xe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function bS(){if(rv)return Xe;rv=1;var r=Om();function t(g){var y="https://react.dev/errors/"+g;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)y+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+g+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(g,y,T){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:g,containerInfo:y,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,y){if(g==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Xe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Xe.createPortal=function(g,y){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(t(299));return u(g,y,null,T)},Xe.flushSync=function(g){var y=f.T,T=s.p;try{if(f.T=null,s.p=2,g)return g()}finally{f.T=y,s.p=T,s.d.f()}},Xe.preconnect=function(g,y){typeof g=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,s.d.C(g,y))},Xe.prefetchDNS=function(g){typeof g=="string"&&s.d.D(g)},Xe.preinit=function(g,y){if(typeof g=="string"&&y&&typeof y.as=="string"){var T=y.as,S=p(T,y.crossOrigin),N=typeof y.integrity=="string"?y.integrity:void 0,H=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;T==="style"?s.d.S(g,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:S,integrity:N,fetchPriority:H}):T==="script"&&s.d.X(g,{crossOrigin:S,integrity:N,fetchPriority:H,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Xe.preinitModule=function(g,y){if(typeof g=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var T=p(y.as,y.crossOrigin);s.d.M(g,{crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&s.d.M(g)},Xe.preload=function(g,y){if(typeof g=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var T=y.as,S=p(T,y.crossOrigin);s.d.L(g,T,{crossOrigin:S,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Xe.preloadModule=function(g,y){if(typeof g=="string")if(y){var T=p(y.as,y.crossOrigin);s.d.m(g,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:T,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else s.d.m(g)},Xe.requestFormReset=function(g){s.d.r(g)},Xe.unstable_batchedUpdates=function(g,y){return g(y)},Xe.useFormState=function(g,y,T){return f.H.useFormState(g,y,T)},Xe.useFormStatus=function(){return f.H.useHostTransitionStatus()},Xe.version="19.2.0",Xe}var sv;function IS(){if(sv)return qd.exports;sv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),qd.exports=bS(),qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function RS(){if(av)return Tl;av=1;var r=wS(),t=Om(),n=IS();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(u(e)!==e)throw Error(s(188))}function y(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return g(h),e;if(d===o)return g(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=h,o=d;else{for(var _=!1,E=h.child;E;){if(E===a){_=!0,a=h,o=d;break}if(E===o){_=!0,o=h,a=d;break}E=E.sibling}if(!_){for(E=d.child;E;){if(E===a){_=!0,a=d,o=h;break}if(E===o){_=!0,o=d,a=h;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function T(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=T(e),i!==null)return i;e=e.sibling}return null}var S=Object.assign,N=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),J=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),gt=Symbol.for("react.consumer"),pt=Symbol.for("react.context"),Pt=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),Nt=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),k=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function V(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var b=Symbol.for("react.client.reference");function It(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===b?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case ut:return"Profiler";case Z:return"StrictMode";case te:return"Suspense";case Nt:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case J:return"Portal";case pt:return e.displayName||"Context";case gt:return(e._context.displayName||"Context")+".Consumer";case Pt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case C:return i=e.displayName||null,i!==null?i:It(e.type)||"Memo";case w:i=e._payload,e=e._init;try{return It(e(i))}catch{}}return null}var ce=Array.isArray,q=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,at={pending:!1,data:null,method:null,action:null},Dt=[],qt=-1;function M(e){return{current:e}}function Q(e){0>qt||(e.current=Dt[qt],Dt[qt]=null,qt--)}function nt(e,i){qt++,Dt[qt]=e.current,e.current=i}var rt=M(null),yt=M(null),wt=M(null),Ut=M(null);function Ne(e,i){switch(nt(wt,i),nt(yt,e),nt(rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?T_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=T_(i),e=A_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(rt),nt(rt,e)}function se(){Q(rt),Q(yt),Q(wt)}function cs(e){e.memoizedState!==null&&nt(Ut,e);var i=rt.current,a=A_(i,e.type);i!==a&&(nt(yt,e),nt(rt,a))}function ia(e){yt.current===e&&(Q(rt),Q(yt)),Ut.current===e&&(Q(Ut),gl._currentValue=at)}var ra,sa;function ri(e){if(ra===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ra=i&&i[1]||"",sa=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ra+e+sa}var go=!1;function hs(e,i){if(!e||go)return"";go=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(B){var z=B}Reflect.construct(e,[],K)}else{try{K.call()}catch(B){z=B}e.call(K.prototype)}}else{try{throw Error()}catch(B){z=B}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(B){if(B&&z&&typeof B.stack=="string")return[B.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),_=d[0],E=d[1];if(_&&E){var I=_.split(`
`),U=E.split(`
`);for(h=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;h<U.length&&!U[h].includes("DetermineComponentFrameRoot");)h++;if(o===I.length||h===U.length)for(o=I.length-1,h=U.length-1;1<=o&&0<=h&&I[o]!==U[h];)h--;for(;1<=o&&0<=h;o--,h--)if(I[o]!==U[h]){if(o!==1||h!==1)do if(o--,h--,0>h||I[o]!==U[h]){var F=`
`+I[o].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=o&&0<=h);break}}}finally{go=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ri(a):""}function yo(e,i){switch(e.tag){case 26:case 27:case 5:return ri(e.type);case 16:return ri("Lazy");case 13:return e.child!==i&&i!==null?ri("Suspense Fallback"):ri("Suspense");case 19:return ri("SuspenseList");case 0:case 15:return hs(e.type,!1);case 11:return hs(e.type.render,!1);case 1:return hs(e.type,!0);case 31:return ri("Activity");default:return""}}function _o(e){try{var i="",a=null;do i+=yo(e,a),a=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var _e=Object.prototype.hasOwnProperty,De=r.unstable_scheduleCallback,fr=r.unstable_cancelCallback,Uh=r.unstable_shouldYield,eu=r.unstable_requestPaint,tn=r.unstable_now,fs=r.unstable_getCurrentPriorityLevel,vo=r.unstable_ImmediatePriority,Eo=r.unstable_UserBlockingPriority,dr=r.unstable_NormalPriority,zh=r.unstable_LowPriority,nu=r.unstable_IdlePriority,iu=r.log,ru=r.unstable_setDisableYieldValue,qn=null,je=null;function In(e){if(typeof iu=="function"&&ru(e),je&&typeof je.setStrictMode=="function")try{je.setStrictMode(qn,e)}catch{}}var de=Math.clz32?Math.clz32:au,su=Math.log,aa=Math.LN2;function au(e){return e>>>=0,e===0?32:31-(su(e)/aa|0)|0}var si=256,ds=262144,ve=4194304;function ai(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function oi(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var h=0,d=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~d,o!==0?h=ai(o):(_&=E,_!==0?h=ai(_):a||(a=E&~e,a!==0&&(h=ai(a))))):(E=o&~d,E!==0?h=ai(E):_!==0?h=ai(_):a||(a=o&~e,a!==0&&(h=ai(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function Hn(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function jh(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ou(){var e=ve;return ve<<=1,(ve&62914560)===0&&(ve=4194304),e}function li(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function ms(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bh(e,i,a,o,h,d){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,I=e.expirationTimes,U=e.hiddenUpdates;for(a=_&~a;0<a;){var F=31-de(a),K=1<<F;E[F]=0,I[F]=-1;var z=U[F];if(z!==null)for(U[F]=null,F=0;F<z.length;F++){var B=z[F];B!==null&&(B.lane&=-536870913)}a&=~K}o!==0&&ps(e,o,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(_&~i))}function ps(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-de(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function To(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-de(a),h=1<<o;h&i|e[o]&i&&(e[o]|=i),a&=~h}}function Ao(e,i){var a=i&-i;return a=(a&42)!==0?1:gs(a),(a&(e.suspendedLanes|i))!==0?0:a}function gs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pi(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function lu(){var e=et.p;return e!==0?e:(e=window.event,e===void 0?32:G_(e.type))}function Fn(e,i){var a=et.p;try{return et.p=e,i()}finally{et.p=a}}var Gn=Math.random().toString(36).slice(2),Ee="__reactFiber$"+Gn,Pe="__reactProps$"+Gn,ui="__reactContainer$"+Gn,oa="__reactEvents$"+Gn,qh="__reactListeners$"+Gn,uu="__reactHandles$"+Gn,cu="__reactResources$"+Gn,ci="__reactMarker$"+Gn;function la(e){delete e[Ee],delete e[Pe],delete e[oa],delete e[qh],delete e[uu]}function hi(e){var i=e[Ee];if(i)return i;for(var a=e.parentNode;a;){if(i=a[ui]||a[Ee]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=N_(e);e!==null;){if(a=e[Ee])return a;e=N_(e)}return i}e=a,a=e.parentNode}return null}function Rn(e){if(e=e[Ee]||e[ui]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function mn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function fi(e){var i=e[cu];return i||(i=e[cu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Te(e){e[ci]=!0}var So=new Set,wo={};function di(e,i){mi(e,i),mi(e+"Capture",i)}function mi(e,i){for(wo[e]=i,e=0;e<i.length;e++)So.add(i[e])}var bo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Io={},Ro={};function hu(e){return _e.call(Ro,e)?!0:_e.call(Io,e)?!1:bo.test(e)?Ro[e]=!0:(Io[e]=!0,!1)}function ua(e,i,a){if(hu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function pn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Ae(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}function Le(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function mr(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Co(e,i,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,d=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(_){a=""+_,d.call(this,_)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Qt(e){if(!e._valueTracker){var i=mr(e)?"checked":"value";e._valueTracker=Co(e,i,""+e[i])}}function ys(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=mr(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _s=/[\n"\\]/g;function sn(e){return e.replace(_s,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ca(e,i,a,o,h,d,_,E){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),i!=null?_==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Le(i)):e.value!==""+Le(i)&&(e.value=""+Le(i)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),i!=null?No(e,_,Le(i)):a!=null?No(e,_,Le(a)):o!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Le(E):e.removeAttribute("name")}function fu(e,i,a,o,h,d,_,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Qt(e);return}a=a!=null?""+Le(a):"",i=i!=null?""+Le(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Qt(e)}function No(e,i,a){i==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pr(e,i,a,o){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Le(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function du(e,i,a){if(i!=null&&(i=""+Le(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Le(a):""}function gr(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(ce(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=Le(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Qt(e)}function an(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var mu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Do(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||mu.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Oo(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in i)o=i[h],i.hasOwnProperty(h)&&a[h]!==o&&Do(e,h,o)}else for(var d in i)i.hasOwnProperty(d)&&Do(e,d,i[d])}function ha(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),yr=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fa(e){return yr.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Kn(){}var Mo=null;function Cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _r=null,gi=null;function vs(e){var i=Rn(e);if(i&&(e=i.stateNode)){var a=e[Pe]||null;t:switch(e=i.stateNode,i.type){case"input":if(ca(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+sn(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var h=o[Pe]||null;if(!h)throw Error(s(90));ca(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&ys(o)}break t;case"textarea":du(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&pr(e,!!a.multiple,i,!1)}}}var da=!1;function vr(e,i,a){if(da)return e(i,a);da=!0;try{var o=e(i);return o}finally{if(da=!1,(_r!==null||gi!==null)&&(lc(),_r&&(i=_r,e=gi,gi=_r=null,vs(i),e)))for(i=0;i<e.length;i++)vs(e[i])}}function Qn(e,i){var a=e.stateNode;if(a===null)return null;var o=a[Pe]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Es=!1;if(Nn)try{var $t={};Object.defineProperty($t,"passive",{get:function(){Es=!0}}),window.addEventListener("test",$t,$t),window.removeEventListener("test",$t,$t)}catch{Es=!1}var yi=null,ko=null,Ts=null;function Vo(){if(Ts)return Ts;var e,i=ko,a=i.length,o,h="value"in yi?yi.value:yi.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var _=a-e;for(o=1;o<=_&&i[a-o]===h[d-o];o++);return Ts=h.slice(e,1<o?1-o:void 0)}function As(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function Yn(){return!1}function Be(e){function i(a,o,h,d,_){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Li:Yn,this.isPropagationStopped=Yn,this}return S(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),i}var Ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_i=Be(Ui),Er=S({},Ui,{view:0,detail:0}),xo=Be(Er),Tr,ma,vi,pa=S({},Er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ar,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vi&&(vi&&e.type==="mousemove"?(Tr=e.screenX-vi.screenX,ma=e.screenY-vi.screenY):ma=Tr=0,vi=e),Tr)},movementY:function(e){return"movementY"in e?e.movementY:ma}}),Po=Be(pa),Ss=S({},pa,{dataTransfer:0}),gu=Be(Ss),yu=S({},Er,{relatedTarget:0}),ws=Be(yu),Lo=S({},Ui,{animationName:0,elapsedTime:0,pseudoElement:0}),_u=Be(Lo),ga=S({},Ui,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vu=Be(ga),Eu=S({},Ui,{data:0}),Ei=Be(Eu),Tu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Au={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Su={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wu(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Su[e])?!!i[e]:!1}function Ar(){return wu}var en=S({},Er,{key:function(e){if(e.key){var i=Tu[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=As(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Au[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ar,charCode:function(e){return e.type==="keypress"?As(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?As(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bu=Be(en),Iu=S({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zi=Be(Iu),c=S({},Er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ar}),m=Be(c),v=S({},Ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),A=Be(v),P=S({},pa,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),j=Be(P),tt=S({},Ui,{newState:0,oldState:0}),At=Be(tt),me=[9,13,27,32],Ht=Nn&&"CompositionEvent"in window,ae=null;Nn&&"documentMode"in document&&(ae=document.documentMode);var Dn=Nn&&"TextEvent"in window&&!ae,Ti=Nn&&(!Ht||ae&&8<ae&&11>=ae),Xn=" ",$n=!1;function bs(e,i){switch(e){case"keyup":return me.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ya(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var _a=!1;function H1(e,i){switch(e){case"compositionend":return ya(i);case"keypress":return i.which!==32?null:($n=!0,Xn);case"textInput":return e=i.data,e===Xn&&$n?null:e;default:return null}}function F1(e,i){if(_a)return e==="compositionend"||!Ht&&bs(e,i)?(e=Vo(),Ts=ko=yi=null,_a=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ti&&i.locale!=="ko"?null:i.data;default:return null}}var G1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!G1[e.type]:i==="textarea"}function kp(e,i,a,o){_r?gi?gi.push(o):gi=[o]:_r=o,i=pc(i,"onChange"),0<i.length&&(a=new _i("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var Uo=null,zo=null;function K1(e){p_(e,0)}function Ru(e){var i=mn(e);if(ys(i))return e}function Vp(e,i){if(e==="change")return i}var xp=!1;if(Nn){var Hh;if(Nn){var Fh="oninput"in document;if(!Fh){var Pp=document.createElement("div");Pp.setAttribute("oninput","return;"),Fh=typeof Pp.oninput=="function"}Hh=Fh}else Hh=!1;xp=Hh&&(!document.documentMode||9<document.documentMode)}function Lp(){Uo&&(Uo.detachEvent("onpropertychange",Up),zo=Uo=null)}function Up(e){if(e.propertyName==="value"&&Ru(zo)){var i=[];kp(i,zo,e,Cn(e)),vr(K1,i)}}function Q1(e,i,a){e==="focusin"?(Lp(),Uo=i,zo=a,Uo.attachEvent("onpropertychange",Up)):e==="focusout"&&Lp()}function Y1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ru(zo)}function X1(e,i){if(e==="click")return Ru(i)}function $1(e,i){if(e==="input"||e==="change")return Ru(i)}function J1(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var gn=typeof Object.is=="function"?Object.is:J1;function jo(e,i){if(gn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!_e.call(i,h)||!gn(e[h],i[h]))return!1}return!0}function zp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jp(e,i){var a=zp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=zp(a)}}function Bp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Bp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function qp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=pi(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=pi(e.document)}return i}function Gh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var Z1=Nn&&"documentMode"in document&&11>=document.documentMode,va=null,Kh=null,Bo=null,Qh=!1;function Hp(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Qh||va==null||va!==pi(o)||(o=va,"selectionStart"in o&&Gh(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Bo&&jo(Bo,o)||(Bo=o,o=pc(Kh,"onSelect"),0<o.length&&(i=new _i("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=va)))}function Is(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Ea={animationend:Is("Animation","AnimationEnd"),animationiteration:Is("Animation","AnimationIteration"),animationstart:Is("Animation","AnimationStart"),transitionrun:Is("Transition","TransitionRun"),transitionstart:Is("Transition","TransitionStart"),transitioncancel:Is("Transition","TransitionCancel"),transitionend:Is("Transition","TransitionEnd")},Yh={},Fp={};Nn&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete Ea.animationend.animation,delete Ea.animationiteration.animation,delete Ea.animationstart.animation),"TransitionEvent"in window||delete Ea.transitionend.transition);function Rs(e){if(Yh[e])return Yh[e];if(!Ea[e])return e;var i=Ea[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Fp)return Yh[e]=i[a];return e}var Gp=Rs("animationend"),Kp=Rs("animationiteration"),Qp=Rs("animationstart"),W1=Rs("transitionrun"),tA=Rs("transitionstart"),eA=Rs("transitioncancel"),Yp=Rs("transitionend"),Xp=new Map,Xh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xh.push("scrollEnd");function Jn(e,i){Xp.set(e,i),di(i,[e])}var Cu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},On=[],Ta=0,$h=0;function Nu(){for(var e=Ta,i=$h=Ta=0;i<e;){var a=On[i];On[i++]=null;var o=On[i];On[i++]=null;var h=On[i];On[i++]=null;var d=On[i];if(On[i++]=null,o!==null&&h!==null){var _=o.pending;_===null?h.next=h:(h.next=_.next,_.next=h),o.pending=h}d!==0&&$p(a,h,d)}}function Du(e,i,a,o){On[Ta++]=e,On[Ta++]=i,On[Ta++]=a,On[Ta++]=o,$h|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Jh(e,i,a,o){return Du(e,i,a,o),Ou(e)}function Cs(e,i){return Du(e,null,null,i),Ou(e)}function $p(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-de(a),e=d.hiddenUpdates,o=e[h],o===null?e[h]=[i]:o.push(i),i.lane=a|536870912),d):null}function Ou(e){if(50<ul)throw ul=0,od=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Aa={};function nA(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yn(e,i,a,o){return new nA(e,i,a,o)}function Zh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,i){var a=e.alternate;return a===null?(a=yn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Jp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Mu(e,i,a,o,h,d){var _=0;if(o=e,typeof e=="function")Zh(e)&&(_=1);else if(typeof e=="string")_=oS(e,a,rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=yn(31,a,i,h),e.elementType=R,e.lanes=d,e;case W:return Ns(a.children,h,d,i);case Z:_=8,h|=24;break;case ut:return e=yn(12,a,i,h|2),e.elementType=ut,e.lanes=d,e;case te:return e=yn(13,a,i,h),e.elementType=te,e.lanes=d,e;case Nt:return e=yn(19,a,i,h),e.elementType=Nt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pt:_=10;break t;case gt:_=9;break t;case Pt:_=11;break t;case C:_=14;break t;case w:_=16,o=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=yn(_,a,i,h),i.elementType=e,i.type=o,i.lanes=d,i}function Ns(e,i,a,o){return e=yn(7,e,o,i),e.lanes=a,e}function Wh(e,i,a){return e=yn(6,e,null,i),e.lanes=a,e}function Zp(e){var i=yn(18,null,null,0);return i.stateNode=e,i}function tf(e,i,a){return i=yn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Wp=new WeakMap;function Mn(e,i){if(typeof e=="object"&&e!==null){var a=Wp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:_o(i)},Wp.set(e,i),i)}return{value:e,source:i,stack:_o(i)}}var Sa=[],wa=0,ku=null,qo=0,kn=[],Vn=0,Sr=null,Ai=1,Si="";function Bi(e,i){Sa[wa++]=qo,Sa[wa++]=ku,ku=e,qo=i}function tg(e,i,a){kn[Vn++]=Ai,kn[Vn++]=Si,kn[Vn++]=Sr,Sr=e;var o=Ai;e=Si;var h=32-de(o)-1;o&=~(1<<h),a+=1;var d=32-de(i)+h;if(30<d){var _=h-h%5;d=(o&(1<<_)-1).toString(32),o>>=_,h-=_,Ai=1<<32-de(i)+h|a<<h|o,Si=d+e}else Ai=1<<d|a<<h|o,Si=e}function ef(e){e.return!==null&&(Bi(e,1),tg(e,1,0))}function nf(e){for(;e===ku;)ku=Sa[--wa],Sa[wa]=null,qo=Sa[--wa],Sa[wa]=null;for(;e===Sr;)Sr=kn[--Vn],kn[Vn]=null,Si=kn[--Vn],kn[Vn]=null,Ai=kn[--Vn],kn[Vn]=null}function eg(e,i){kn[Vn++]=Ai,kn[Vn++]=Si,kn[Vn++]=Sr,Ai=i.id,Si=i.overflow,Sr=e}var qe=null,ne=null,Lt=!1,wr=null,xn=!1,rf=Error(s(519));function br(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ho(Mn(i,e)),rf}function ng(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[Ee]=e,i[Pe]=o,a){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(a=0;a<hl.length;a++)Ct(hl[a],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":Ct("invalid",i),fu(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ct("invalid",i);break;case"textarea":Ct("invalid",i),gr(i,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||v_(i.textContent,a)?(o.popover!=null&&(Ct("beforetoggle",i),Ct("toggle",i)),o.onScroll!=null&&Ct("scroll",i),o.onScrollEnd!=null&&Ct("scrollend",i),o.onClick!=null&&(i.onclick=Kn),i=!0):i=!1,i||br(e,!0)}function ig(e){for(qe=e.return;qe;)switch(qe.tag){case 5:case 31:case 13:xn=!1;return;case 27:case 3:xn=!0;return;default:qe=qe.return}}function ba(e){if(e!==qe)return!1;if(!Lt)return ig(e),Lt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ad(e.type,e.memoizedProps)),a=!a),a&&ne&&br(e),ig(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ne=C_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ne=C_(e)}else i===27?(i=ne,zr(e.type)?(e=Rd,Rd=null,ne=e):ne=i):ne=qe?Ln(e.stateNode.nextSibling):null;return!0}function Ds(){ne=qe=null,Lt=!1}function sf(){var e=wr;return e!==null&&(cn===null?cn=e:cn.push.apply(cn,e),wr=null),e}function Ho(e){wr===null?wr=[e]:wr.push(e)}var af=M(null),Os=null,qi=null;function Ir(e,i,a){nt(af,i._currentValue),i._currentValue=a}function Hi(e){e._currentValue=af.current,Q(af)}function of(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function lf(e,i,a,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var I=0;I<i.length;I++)if(E.context===i[I]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),of(d.return,a,e),o||(_=null);break t}d=E.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),of(_,a,e),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===e){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Ia(e,i,a,o){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=h.type;gn(h.pendingProps.value,_.value)||(e!==null?e.push(E):e=[E])}}else if(h===Ut.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(gl):e=[gl])}h=h.return}e!==null&&lf(i,e,a,o),i.flags|=262144}function Vu(e){for(e=e.firstContext;e!==null;){if(!gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ms(e){Os=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function He(e){return rg(Os,e)}function xu(e,i){return Os===null&&Ms(e),rg(e,i)}function rg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},qi===null){if(e===null)throw Error(s(308));qi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else qi=qi.next=i;return a}var iA=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},rA=r.unstable_scheduleCallback,sA=r.unstable_NormalPriority,Se={$$typeof:pt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uf(){return{controller:new iA,data:new Map,refCount:0}}function Fo(e){e.refCount--,e.refCount===0&&rA(sA,function(){e.controller.abort()})}var Go=null,cf=0,Ra=0,Ca=null;function aA(e,i){if(Go===null){var a=Go=[];cf=0,Ra=dd(),Ca={status:"pending",value:void 0,then:function(o){a.push(o)}}}return cf++,i.then(sg,sg),i}function sg(){if(--cf===0&&Go!==null){Ca!==null&&(Ca.status="fulfilled");var e=Go;Go=null,Ra=0,Ca=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function oA(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var ag=q.S;q.S=function(e,i){Hy=tn(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&aA(e,i),ag!==null&&ag(e,i)};var ks=M(null);function hf(){var e=ks.current;return e!==null?e:ee.pooledCache}function Pu(e,i){i===null?nt(ks,ks.current):nt(ks,i.pool)}function og(){var e=hf();return e===null?null:{parent:Se._currentValue,pool:e}}var Na=Error(s(460)),ff=Error(s(474)),Lu=Error(s(542)),Uu={then:function(){}};function lg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ug(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Kn,Kn),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,hg(e),e;default:if(typeof i.status=="string")i.then(Kn,Kn);else{if(e=ee,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=o}},function(o){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,hg(e),e}throw xs=i,Na}}function Vs(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xs=a,Na):a}}var xs=null;function cg(){if(xs===null)throw Error(s(459));var e=xs;return xs=null,e}function hg(e){if(e===Na||e===Lu)throw Error(s(483))}var Da=null,Ko=0;function zu(e){var i=Ko;return Ko+=1,Da===null&&(Da=[]),ug(Da,e,i)}function Qo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ju(e,i){throw i.$$typeof===N?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function fg(e){function i(x,D){if(e){var L=x.deletions;L===null?(x.deletions=[D],x.flags|=16):L.push(D)}}function a(x,D){if(!e)return null;for(;D!==null;)i(x,D),D=D.sibling;return null}function o(x){for(var D=new Map;x!==null;)x.key!==null?D.set(x.key,x):D.set(x.index,x),x=x.sibling;return D}function h(x,D){return x=ji(x,D),x.index=0,x.sibling=null,x}function d(x,D,L){return x.index=L,e?(L=x.alternate,L!==null?(L=L.index,L<D?(x.flags|=67108866,D):L):(x.flags|=67108866,D)):(x.flags|=1048576,D)}function _(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function E(x,D,L,G){return D===null||D.tag!==6?(D=Wh(L,x.mode,G),D.return=x,D):(D=h(D,L),D.return=x,D)}function I(x,D,L,G){var ct=L.type;return ct===W?F(x,D,L.props.children,G,L.key):D!==null&&(D.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===w&&Vs(ct)===D.type)?(D=h(D,L.props),Qo(D,L),D.return=x,D):(D=Mu(L.type,L.key,L.props,null,x.mode,G),Qo(D,L),D.return=x,D)}function U(x,D,L,G){return D===null||D.tag!==4||D.stateNode.containerInfo!==L.containerInfo||D.stateNode.implementation!==L.implementation?(D=tf(L,x.mode,G),D.return=x,D):(D=h(D,L.children||[]),D.return=x,D)}function F(x,D,L,G,ct){return D===null||D.tag!==7?(D=Ns(L,x.mode,G,ct),D.return=x,D):(D=h(D,L),D.return=x,D)}function K(x,D,L){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Wh(""+D,x.mode,L),D.return=x,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case H:return L=Mu(D.type,D.key,D.props,null,x.mode,L),Qo(L,D),L.return=x,L;case J:return D=tf(D,x.mode,L),D.return=x,D;case w:return D=Vs(D),K(x,D,L)}if(ce(D)||V(D))return D=Ns(D,x.mode,L,null),D.return=x,D;if(typeof D.then=="function")return K(x,zu(D),L);if(D.$$typeof===pt)return K(x,xu(x,D),L);ju(x,D)}return null}function z(x,D,L,G){var ct=D!==null?D.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return ct!==null?null:E(x,D,""+L,G);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case H:return L.key===ct?I(x,D,L,G):null;case J:return L.key===ct?U(x,D,L,G):null;case w:return L=Vs(L),z(x,D,L,G)}if(ce(L)||V(L))return ct!==null?null:F(x,D,L,G,null);if(typeof L.then=="function")return z(x,D,zu(L),G);if(L.$$typeof===pt)return z(x,D,xu(x,L),G);ju(x,L)}return null}function B(x,D,L,G,ct){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return x=x.get(L)||null,E(D,x,""+G,ct);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case H:return x=x.get(G.key===null?L:G.key)||null,I(D,x,G,ct);case J:return x=x.get(G.key===null?L:G.key)||null,U(D,x,G,ct);case w:return G=Vs(G),B(x,D,L,G,ct)}if(ce(G)||V(G))return x=x.get(L)||null,F(D,x,G,ct,null);if(typeof G.then=="function")return B(x,D,L,zu(G),ct);if(G.$$typeof===pt)return B(x,D,L,xu(D,G),ct);ju(D,G)}return null}function st(x,D,L,G){for(var ct=null,jt=null,ot=D,bt=D=0,Mt=null;ot!==null&&bt<L.length;bt++){ot.index>bt?(Mt=ot,ot=null):Mt=ot.sibling;var Bt=z(x,ot,L[bt],G);if(Bt===null){ot===null&&(ot=Mt);break}e&&ot&&Bt.alternate===null&&i(x,ot),D=d(Bt,D,bt),jt===null?ct=Bt:jt.sibling=Bt,jt=Bt,ot=Mt}if(bt===L.length)return a(x,ot),Lt&&Bi(x,bt),ct;if(ot===null){for(;bt<L.length;bt++)ot=K(x,L[bt],G),ot!==null&&(D=d(ot,D,bt),jt===null?ct=ot:jt.sibling=ot,jt=ot);return Lt&&Bi(x,bt),ct}for(ot=o(ot);bt<L.length;bt++)Mt=B(ot,x,bt,L[bt],G),Mt!==null&&(e&&Mt.alternate!==null&&ot.delete(Mt.key===null?bt:Mt.key),D=d(Mt,D,bt),jt===null?ct=Mt:jt.sibling=Mt,jt=Mt);return e&&ot.forEach(function(Fr){return i(x,Fr)}),Lt&&Bi(x,bt),ct}function ft(x,D,L,G){if(L==null)throw Error(s(151));for(var ct=null,jt=null,ot=D,bt=D=0,Mt=null,Bt=L.next();ot!==null&&!Bt.done;bt++,Bt=L.next()){ot.index>bt?(Mt=ot,ot=null):Mt=ot.sibling;var Fr=z(x,ot,Bt.value,G);if(Fr===null){ot===null&&(ot=Mt);break}e&&ot&&Fr.alternate===null&&i(x,ot),D=d(Fr,D,bt),jt===null?ct=Fr:jt.sibling=Fr,jt=Fr,ot=Mt}if(Bt.done)return a(x,ot),Lt&&Bi(x,bt),ct;if(ot===null){for(;!Bt.done;bt++,Bt=L.next())Bt=K(x,Bt.value,G),Bt!==null&&(D=d(Bt,D,bt),jt===null?ct=Bt:jt.sibling=Bt,jt=Bt);return Lt&&Bi(x,bt),ct}for(ot=o(ot);!Bt.done;bt++,Bt=L.next())Bt=B(ot,x,bt,Bt.value,G),Bt!==null&&(e&&Bt.alternate!==null&&ot.delete(Bt.key===null?bt:Bt.key),D=d(Bt,D,bt),jt===null?ct=Bt:jt.sibling=Bt,jt=Bt);return e&&ot.forEach(function(_S){return i(x,_S)}),Lt&&Bi(x,bt),ct}function Wt(x,D,L,G){if(typeof L=="object"&&L!==null&&L.type===W&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case H:t:{for(var ct=L.key;D!==null;){if(D.key===ct){if(ct=L.type,ct===W){if(D.tag===7){a(x,D.sibling),G=h(D,L.props.children),G.return=x,x=G;break t}}else if(D.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===w&&Vs(ct)===D.type){a(x,D.sibling),G=h(D,L.props),Qo(G,L),G.return=x,x=G;break t}a(x,D);break}else i(x,D);D=D.sibling}L.type===W?(G=Ns(L.props.children,x.mode,G,L.key),G.return=x,x=G):(G=Mu(L.type,L.key,L.props,null,x.mode,G),Qo(G,L),G.return=x,x=G)}return _(x);case J:t:{for(ct=L.key;D!==null;){if(D.key===ct)if(D.tag===4&&D.stateNode.containerInfo===L.containerInfo&&D.stateNode.implementation===L.implementation){a(x,D.sibling),G=h(D,L.children||[]),G.return=x,x=G;break t}else{a(x,D);break}else i(x,D);D=D.sibling}G=tf(L,x.mode,G),G.return=x,x=G}return _(x);case w:return L=Vs(L),Wt(x,D,L,G)}if(ce(L))return st(x,D,L,G);if(V(L)){if(ct=V(L),typeof ct!="function")throw Error(s(150));return L=ct.call(L),ft(x,D,L,G)}if(typeof L.then=="function")return Wt(x,D,zu(L),G);if(L.$$typeof===pt)return Wt(x,D,xu(x,L),G);ju(x,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,D!==null&&D.tag===6?(a(x,D.sibling),G=h(D,L),G.return=x,x=G):(a(x,D),G=Wh(L,x.mode,G),G.return=x,x=G),_(x)):a(x,D)}return function(x,D,L,G){try{Ko=0;var ct=Wt(x,D,L,G);return Da=null,ct}catch(ot){if(ot===Na||ot===Lu)throw ot;var jt=yn(29,ot,null,x.mode);return jt.lanes=G,jt.return=x,jt}finally{}}}var Ps=fg(!0),dg=fg(!1),Rr=!1;function df(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Cr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ft&2)!==0){var h=o.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),o.pending=i,i=Ou(e),$p(e,null,a),i}return Du(e,o,i,a),Ou(e)}function Yo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,To(e,a)}}function pf(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var gf=!1;function Xo(){if(gf){var e=Ca;if(e!==null)throw e}}function $o(e,i,a,o){gf=!1;var h=e.updateQueue;Rr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var I=E,U=I.next;I.next=null,_===null?d=U:_.next=U,_=I;var F=e.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==_&&(E===null?F.firstBaseUpdate=U:E.next=U,F.lastBaseUpdate=I))}if(d!==null){var K=h.baseState;_=0,F=U=I=null,E=d;do{var z=E.lane&-536870913,B=z!==E.lane;if(B?(Ot&z)===z:(o&z)===z){z!==0&&z===Ra&&(gf=!0),F!==null&&(F=F.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var st=e,ft=E;z=i;var Wt=a;switch(ft.tag){case 1:if(st=ft.payload,typeof st=="function"){K=st.call(Wt,K,z);break t}K=st;break t;case 3:st.flags=st.flags&-65537|128;case 0:if(st=ft.payload,z=typeof st=="function"?st.call(Wt,K,z):st,z==null)break t;K=S({},K,z);break t;case 2:Rr=!0}}z=E.callback,z!==null&&(e.flags|=64,B&&(e.flags|=8192),B=h.callbacks,B===null?h.callbacks=[z]:B.push(z))}else B={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(U=F=B,I=K):F=F.next=B,_|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;B=E,E=B.next,B.next=null,h.lastBaseUpdate=B,h.shared.pending=null}}while(!0);F===null&&(I=K),h.baseState=I,h.firstBaseUpdate=U,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),Vr|=_,e.lanes=_,e.memoizedState=K}}function mg(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function pg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)mg(a[e],i)}var Oa=M(null),Bu=M(0);function gg(e,i){e=Zi,nt(Bu,e),nt(Oa,i),Zi=e|i.baseLanes}function yf(){nt(Bu,Zi),nt(Oa,Oa.current)}function _f(){Zi=Bu.current,Q(Oa),Q(Bu)}var _n=M(null),Pn=null;function Dr(e){var i=e.alternate;nt(pe,pe.current&1),nt(_n,e),Pn===null&&(i===null||Oa.current!==null||i.memoizedState!==null)&&(Pn=e)}function vf(e){nt(pe,pe.current),nt(_n,e),Pn===null&&(Pn=e)}function yg(e){e.tag===22?(nt(pe,pe.current),nt(_n,e),Pn===null&&(Pn=e)):Or()}function Or(){nt(pe,pe.current),nt(_n,_n.current)}function vn(e){Q(_n),Pn===e&&(Pn=null),Q(pe)}var pe=M(0);function qu(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||bd(a)||Id(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Fi=0,St=null,Jt=null,we=null,Hu=!1,Ma=!1,Ls=!1,Fu=0,Jo=0,ka=null,lA=0;function he(){throw Error(s(321))}function Ef(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!gn(e[a],i[a]))return!1;return!0}function Tf(e,i,a,o,h,d){return Fi=d,St=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,q.H=e===null||e.memoizedState===null?ty:Pf,Ls=!1,d=a(o,h),Ls=!1,Ma&&(d=vg(i,a,o,h)),_g(e),d}function _g(e){q.H=tl;var i=Jt!==null&&Jt.next!==null;if(Fi=0,we=Jt=St=null,Hu=!1,Jo=0,ka=null,i)throw Error(s(300));e===null||be||(e=e.dependencies,e!==null&&Vu(e)&&(be=!0))}function vg(e,i,a,o){St=e;var h=0;do{if(Ma&&(ka=null),Jo=0,Ma=!1,25<=h)throw Error(s(301));if(h+=1,we=Jt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}q.H=ey,d=i(a,o)}while(Ma);return d}function uA(){var e=q.H,i=e.useState()[0];return i=typeof i.then=="function"?Zo(i):i,e=e.useState()[0],(Jt!==null?Jt.memoizedState:null)!==e&&(St.flags|=1024),i}function Af(){var e=Fu!==0;return Fu=0,e}function Sf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function wf(e){if(Hu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Hu=!1}Fi=0,we=Jt=St=null,Ma=!1,Jo=Fu=0,ka=null}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?St.memoizedState=we=e:we=we.next=e,we}function ge(){if(Jt===null){var e=St.alternate;e=e!==null?e.memoizedState:null}else e=Jt.next;var i=we===null?St.memoizedState:we.next;if(i!==null)we=i,Jt=e;else{if(e===null)throw St.alternate===null?Error(s(467)):Error(s(310));Jt=e,e={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},we===null?St.memoizedState=we=e:we=we.next=e}return we}function Gu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(e){var i=Jo;return Jo+=1,ka===null&&(ka=[]),e=ug(ka,e,i),i=St,(we===null?i.memoizedState:we.next)===null&&(i=i.alternate,q.H=i===null||i.memoizedState===null?ty:Pf),e}function Ku(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zo(e);if(e.$$typeof===pt)return He(e)}throw Error(s(438,String(e)))}function bf(e){var i=null,a=St.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=St.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Gu(),St.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=k;return i.index++,a}function Gi(e,i){return typeof i=="function"?i(e):i}function Qu(e){var i=ge();return If(i,Jt,e)}function If(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var h=e.baseQueue,d=o.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}i.baseQueue=h=d,o.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=_=null,I=null,U=i,F=!1;do{var K=U.lane&-536870913;if(K!==U.lane?(Ot&K)===K:(Fi&K)===K){var z=U.revertLane;if(z===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),K===Ra&&(F=!0);else if((Fi&z)===z){U=U.next,z===Ra&&(F=!0);continue}else K={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},I===null?(E=I=K,_=d):I=I.next=K,St.lanes|=z,Vr|=z;K=U.action,Ls&&a(d,K),d=U.hasEagerState?U.eagerState:a(d,K)}else z={lane:K,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},I===null?(E=I=z,_=d):I=I.next=z,St.lanes|=K,Vr|=K;U=U.next}while(U!==null&&U!==i);if(I===null?_=d:I.next=E,!gn(d,e.memoizedState)&&(be=!0,F&&(a=Ca,a!==null)))throw a;e.memoizedState=d,e.baseState=_,e.baseQueue=I,o.lastRenderedState=d}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Rf(e){var i=ge(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=e(d,_.action),_=_.next;while(_!==h);gn(d,i.memoizedState)||(be=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,o]}function Eg(e,i,a){var o=St,h=ge(),d=Lt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var _=!gn((Jt||h).memoizedState,a);if(_&&(h.memoizedState=a,be=!0),h=h.queue,Df(Sg.bind(null,o,h,e),[e]),h.getSnapshot!==i||_||we!==null&&we.memoizedState.tag&1){if(o.flags|=2048,Va(9,{destroy:void 0},Ag.bind(null,o,h,a,i),null),ee===null)throw Error(s(349));d||(Fi&127)!==0||Tg(o,i,a)}return a}function Tg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=St.updateQueue,i===null?(i=Gu(),St.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Ag(e,i,a,o){i.value=a,i.getSnapshot=o,wg(i)&&bg(e)}function Sg(e,i,a){return a(function(){wg(i)&&bg(e)})}function wg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!gn(e,a)}catch{return!0}}function bg(e){var i=Cs(e,2);i!==null&&hn(i,e,2)}function Cf(e){var i=nn();if(typeof e=="function"){var a=e;if(e=a(),Ls){In(!0);try{a()}finally{In(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},i}function Ig(e,i,a,o){return e.baseState=a,If(e,Jt,typeof o=="function"?o:Gi)}function cA(e,i,a,o,h){if($u(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};q.T!==null?a(!0):d.isTransition=!1,o(d),a=i.pending,a===null?(d.next=i.pending=d,Rg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Rg(e,i){var a=i.action,o=i.payload,h=e.state;if(i.isTransition){var d=q.T,_={};q.T=_;try{var E=a(h,o),I=q.S;I!==null&&I(_,E),Cg(e,i,E)}catch(U){Nf(e,i,U)}finally{d!==null&&_.types!==null&&(d.types=_.types),q.T=d}}else try{d=a(h,o),Cg(e,i,d)}catch(U){Nf(e,i,U)}}function Cg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Ng(e,i,o)},function(o){return Nf(e,i,o)}):Ng(e,i,a)}function Ng(e,i,a){i.status="fulfilled",i.value=a,Dg(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Rg(e,a)))}function Nf(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,Dg(i),i=i.next;while(i!==o)}e.action=null}function Dg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Og(e,i){return i}function Mg(e,i){if(Lt){var a=ee.formState;if(a!==null){t:{var o=St;if(Lt){if(ne){e:{for(var h=ne,d=xn;h.nodeType!==8;){if(!d){h=null;break e}if(h=Ln(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ne=Ln(h.nextSibling),o=h.data==="F!";break t}}br(o)}o=!1}o&&(i=a[0])}}return a=nn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Og,lastRenderedState:i},a.queue=o,a=Jg.bind(null,St,o),o.dispatch=a,o=Cf(!1),d=xf.bind(null,St,!1,o.queue),o=nn(),h={state:i,dispatch:null,action:e,pending:null},o.queue=h,a=cA.bind(null,St,h,d,a),h.dispatch=a,o.memoizedState=e,[i,a,!1]}function kg(e){var i=ge();return Vg(i,Jt,e)}function Vg(e,i,a){if(i=If(e,i,Og)[0],e=Qu(Gi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Zo(i)}catch(_){throw _===Na?Lu:_}else o=i;i=ge();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(St.flags|=2048,Va(9,{destroy:void 0},hA.bind(null,h,a),null)),[o,d,e]}function hA(e,i){e.action=i}function xg(e){var i=ge(),a=Jt;if(a!==null)return Vg(i,a,e);ge(),i=i.memoizedState,a=ge();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function Va(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=St.updateQueue,i===null&&(i=Gu(),St.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Pg(){return ge().memoizedState}function Yu(e,i,a,o){var h=nn();St.flags|=e,h.memoizedState=Va(1|i,{destroy:void 0},a,o===void 0?null:o)}function Xu(e,i,a,o){var h=ge();o=o===void 0?null:o;var d=h.memoizedState.inst;Jt!==null&&o!==null&&Ef(o,Jt.memoizedState.deps)?h.memoizedState=Va(i,d,a,o):(St.flags|=e,h.memoizedState=Va(1|i,d,a,o))}function Lg(e,i){Yu(8390656,8,e,i)}function Df(e,i){Xu(2048,8,e,i)}function fA(e){St.flags|=4;var i=St.updateQueue;if(i===null)i=Gu(),St.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function Ug(e){var i=ge().memoizedState;return fA({ref:i,nextImpl:e}),function(){if((Ft&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function zg(e,i){return Xu(4,2,e,i)}function jg(e,i){return Xu(4,4,e,i)}function Bg(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function qg(e,i,a){a=a!=null?a.concat([e]):null,Xu(4,4,Bg.bind(null,i,e),a)}function Of(){}function Hg(e,i){var a=ge();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&Ef(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function Fg(e,i){var a=ge();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&Ef(i,o[1]))return o[0];if(o=e(),Ls){In(!0);try{e()}finally{In(!1)}}return a.memoizedState=[o,i],o}function Mf(e,i,a){return a===void 0||(Fi&1073741824)!==0&&(Ot&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=Gy(),St.lanes|=e,Vr|=e,a)}function Gg(e,i,a,o){return gn(a,i)?a:Oa.current!==null?(e=Mf(e,a,o),gn(e,i)||(be=!0),e):(Fi&42)===0||(Fi&1073741824)!==0&&(Ot&261930)===0?(be=!0,e.memoizedState=a):(e=Gy(),St.lanes|=e,Vr|=e,i)}function Kg(e,i,a,o,h){var d=et.p;et.p=d!==0&&8>d?d:8;var _=q.T,E={};q.T=E,xf(e,!1,i,a);try{var I=h(),U=q.S;if(U!==null&&U(E,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var F=oA(I,o);Wo(e,i,F,An(e))}else Wo(e,i,o,An(e))}catch(K){Wo(e,i,{then:function(){},status:"rejected",reason:K},An())}finally{et.p=d,_!==null&&E.types!==null&&(_.types=E.types),q.T=_}}function dA(){}function kf(e,i,a,o){if(e.tag!==5)throw Error(s(476));var h=Qg(e).queue;Kg(e,h,i,at,a===null?dA:function(){return Yg(e),a(o)})}function Qg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:at,baseState:at,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:at},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Yg(e){var i=Qg(e);i.next===null&&(i=e.alternate.memoizedState),Wo(e,i.next.queue,{},An())}function Vf(){return He(gl)}function Xg(){return ge().memoizedState}function $g(){return ge().memoizedState}function mA(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=An();e=Cr(a);var o=Nr(i,e,a);o!==null&&(hn(o,i,a),Yo(o,i,a)),i={cache:uf()},e.payload=i;return}i=i.return}}function pA(e,i,a){var o=An();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},$u(e)?Zg(i,a):(a=Jh(e,i,a,o),a!==null&&(hn(a,e,o),Wg(a,i,o)))}function Jg(e,i,a){var o=An();Wo(e,i,a,o)}function Wo(e,i,a,o){var h={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if($u(e))Zg(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var _=i.lastRenderedState,E=d(_,a);if(h.hasEagerState=!0,h.eagerState=E,gn(E,_))return Du(e,i,h,0),ee===null&&Nu(),!1}catch{}finally{}if(a=Jh(e,i,h,o),a!==null)return hn(a,e,o),Wg(a,i,o),!0}return!1}function xf(e,i,a,o){if(o={lane:2,revertLane:dd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},$u(e)){if(i)throw Error(s(479))}else i=Jh(e,a,o,2),i!==null&&hn(i,e,2)}function $u(e){var i=e.alternate;return e===St||i!==null&&i===St}function Zg(e,i){Ma=Hu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Wg(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,To(e,a)}}var tl={readContext:He,use:Ku,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useLayoutEffect:he,useInsertionEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useSyncExternalStore:he,useId:he,useHostTransitionStatus:he,useFormState:he,useActionState:he,useOptimistic:he,useMemoCache:he,useCacheRefresh:he};tl.useEffectEvent=he;var ty={readContext:He,use:Ku,useCallback:function(e,i){return nn().memoizedState=[e,i===void 0?null:i],e},useContext:He,useEffect:Lg,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Yu(4194308,4,Bg.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Yu(4194308,4,e,i)},useInsertionEffect:function(e,i){Yu(4,2,e,i)},useMemo:function(e,i){var a=nn();i=i===void 0?null:i;var o=e();if(Ls){In(!0);try{e()}finally{In(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=nn();if(a!==void 0){var h=a(i);if(Ls){In(!0);try{a(i)}finally{In(!1)}}}else h=i;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=pA.bind(null,St,e),[o.memoizedState,e]},useRef:function(e){var i=nn();return e={current:e},i.memoizedState=e},useState:function(e){e=Cf(e);var i=e.queue,a=Jg.bind(null,St,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Of,useDeferredValue:function(e,i){var a=nn();return Mf(a,e,i)},useTransition:function(){var e=Cf(!1);return e=Kg.bind(null,St,e.queue,!0,!1),nn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=St,h=nn();if(Lt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),ee===null)throw Error(s(349));(Ot&127)!==0||Tg(o,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Lg(Sg.bind(null,o,d,e),[e]),o.flags|=2048,Va(9,{destroy:void 0},Ag.bind(null,o,d,a,i),null),a},useId:function(){var e=nn(),i=ee.identifierPrefix;if(Lt){var a=Si,o=Ai;a=(o&~(1<<32-de(o)-1)).toString(32)+a,i="_"+i+"R_"+a,a=Fu++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=lA++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Vf,useFormState:Mg,useActionState:Mg,useOptimistic:function(e){var i=nn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=xf.bind(null,St,!0,a),a.dispatch=i,[e,i]},useMemoCache:bf,useCacheRefresh:function(){return nn().memoizedState=mA.bind(null,St)},useEffectEvent:function(e){var i=nn(),a={impl:e};return i.memoizedState=a,function(){if((Ft&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Pf={readContext:He,use:Ku,useCallback:Hg,useContext:He,useEffect:Df,useImperativeHandle:qg,useInsertionEffect:zg,useLayoutEffect:jg,useMemo:Fg,useReducer:Qu,useRef:Pg,useState:function(){return Qu(Gi)},useDebugValue:Of,useDeferredValue:function(e,i){var a=ge();return Gg(a,Jt.memoizedState,e,i)},useTransition:function(){var e=Qu(Gi)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:Zo(e),i]},useSyncExternalStore:Eg,useId:Xg,useHostTransitionStatus:Vf,useFormState:kg,useActionState:kg,useOptimistic:function(e,i){var a=ge();return Ig(a,Jt,e,i)},useMemoCache:bf,useCacheRefresh:$g};Pf.useEffectEvent=Ug;var ey={readContext:He,use:Ku,useCallback:Hg,useContext:He,useEffect:Df,useImperativeHandle:qg,useInsertionEffect:zg,useLayoutEffect:jg,useMemo:Fg,useReducer:Rf,useRef:Pg,useState:function(){return Rf(Gi)},useDebugValue:Of,useDeferredValue:function(e,i){var a=ge();return Jt===null?Mf(a,e,i):Gg(a,Jt.memoizedState,e,i)},useTransition:function(){var e=Rf(Gi)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:Zo(e),i]},useSyncExternalStore:Eg,useId:Xg,useHostTransitionStatus:Vf,useFormState:xg,useActionState:xg,useOptimistic:function(e,i){var a=ge();return Jt!==null?Ig(a,Jt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:bf,useCacheRefresh:$g};ey.useEffectEvent=Ug;function Lf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:S({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Uf={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=An(),h=Cr(o);h.payload=i,a!=null&&(h.callback=a),i=Nr(e,h,o),i!==null&&(hn(i,e,o),Yo(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=An(),h=Cr(o);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Nr(e,h,o),i!==null&&(hn(i,e,o),Yo(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=An(),o=Cr(a);o.tag=2,i!=null&&(o.callback=i),i=Nr(e,o,a),i!==null&&(hn(i,e,a),Yo(i,e,a))}};function ny(e,i,a,o,h,d,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,_):i.prototype&&i.prototype.isPureReactComponent?!jo(a,o)||!jo(h,d):!0}function iy(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&Uf.enqueueReplaceState(i,i.state,null)}function Us(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=S({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}function ry(e){Cu(e)}function sy(e){console.error(e)}function ay(e){Cu(e)}function Ju(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function oy(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function zf(e,i,a){return a=Cr(a),a.tag=3,a.payload={element:null},a.callback=function(){Ju(e,i)},a}function ly(e){return e=Cr(e),e.tag=3,e}function uy(e,i,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=o.value;e.payload=function(){return h(d)},e.callback=function(){oy(i,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){oy(i,a,o),typeof h!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function gA(e,i,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&Ia(i,a,h,!0),a=_n.current,a!==null){switch(a.tag){case 31:case 13:return Pn===null?uc():a.alternate===null&&fe===0&&(fe=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===Uu?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),cd(e,o,h)),!1;case 22:return a.flags|=65536,o===Uu?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),cd(e,o,h)),!1}throw Error(s(435,a.tag))}return cd(e,o,h),uc(),!1}if(Lt)return i=_n.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,o!==rf&&(e=Error(s(422),{cause:o}),Ho(Mn(e,a)))):(o!==rf&&(i=Error(s(423),{cause:o}),Ho(Mn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=Mn(o,a),h=zf(e.stateNode,o,h),pf(e,h),fe!==4&&(fe=2)),!1;var d=Error(s(520),{cause:o});if(d=Mn(d,a),ll===null?ll=[d]:ll.push(d),fe!==4&&(fe=2),i===null)return!0;o=Mn(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=zf(a.stateNode,o,e),pf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(xr===null||!xr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=ly(h),uy(h,e,a,o),pf(a,h),!1}a=a.return}while(a!==null);return!1}var jf=Error(s(461)),be=!1;function Fe(e,i,a,o){i.child=e===null?dg(i,null,a,o):Ps(i,e.child,a,o)}function cy(e,i,a,o,h){a=a.render;var d=i.ref;if("ref"in o){var _={};for(var E in o)E!=="ref"&&(_[E]=o[E])}else _=o;return Ms(i),o=Tf(e,i,a,_,d,h),E=Af(),e!==null&&!be?(Sf(e,i,h),Ki(e,i,h)):(Lt&&E&&ef(i),i.flags|=1,Fe(e,i,o,h),i.child)}function hy(e,i,a,o,h){if(e===null){var d=a.type;return typeof d=="function"&&!Zh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,fy(e,i,d,o,h)):(e=Mu(a.type,null,o,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Yf(e,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:jo,a(_,o)&&e.ref===i.ref)return Ki(e,i,h)}return i.flags|=1,e=ji(d,o),e.ref=i.ref,e.return=i,i.child=e}function fy(e,i,a,o,h){if(e!==null){var d=e.memoizedProps;if(jo(d,o)&&e.ref===i.ref)if(be=!1,i.pendingProps=o=d,Yf(e,h))(e.flags&131072)!==0&&(be=!0);else return i.lanes=e.lanes,Ki(e,i,h)}return Bf(e,i,a,o,h)}function dy(e,i,a,o){var h=o.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=i.child=e.child,h=0;o!==null;)h=h|o.lanes|o.childLanes,o=o.sibling;o=h&~d}else o=0,i.child=null;return my(e,i,d,a,o)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Pu(i,d!==null?d.cachePool:null),d!==null?gg(i,d):yf(),yg(i);else return o=i.lanes=536870912,my(e,i,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Pu(i,d.cachePool),gg(i,d),Or(),i.memoizedState=null):(e!==null&&Pu(i,null),yf(),Or());return Fe(e,i,h,a),i.child}function el(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function my(e,i,a,o,h){var d=hf();return d=d===null?null:{parent:Se._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},e!==null&&Pu(i,null),yf(),yg(i),e!==null&&Ia(e,i,o,!0),i.childLanes=h,null}function Zu(e,i){return i=tc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function py(e,i,a){return Ps(i,e.child,null,a),e=Zu(i,i.pendingProps),e.flags|=2,vn(i),i.memoizedState=null,e}function yA(e,i,a){var o=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Lt){if(o.mode==="hidden")return e=Zu(i,o),i.lanes=536870912,el(null,e);if(vf(i),(e=ne)?(e=R_(e,xn),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Sr!==null?{id:Ai,overflow:Si}:null,retryLane:536870912,hydrationErrors:null},a=Zp(e),a.return=i,i.child=a,qe=i,ne=null)):e=null,e===null)throw br(i);return i.lanes=536870912,null}return Zu(i,o)}var d=e.memoizedState;if(d!==null){var _=d.dehydrated;if(vf(i),h)if(i.flags&256)i.flags&=-257,i=py(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(be||Ia(e,i,a,!1),h=(a&e.childLanes)!==0,be||h){if(o=ee,o!==null&&(_=Ao(o,a),_!==0&&_!==d.retryLane))throw d.retryLane=_,Cs(e,_),hn(o,e,_),jf;uc(),i=py(e,i,a)}else e=d.treeContext,ne=Ln(_.nextSibling),qe=i,Lt=!0,wr=null,xn=!1,e!==null&&eg(i,e),i=Zu(i,o),i.flags|=4096;return i}return e=ji(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Wu(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Bf(e,i,a,o,h){return Ms(i),a=Tf(e,i,a,o,void 0,h),o=Af(),e!==null&&!be?(Sf(e,i,h),Ki(e,i,h)):(Lt&&o&&ef(i),i.flags|=1,Fe(e,i,a,h),i.child)}function gy(e,i,a,o,h,d){return Ms(i),i.updateQueue=null,a=vg(i,o,a,h),_g(e),o=Af(),e!==null&&!be?(Sf(e,i,d),Ki(e,i,d)):(Lt&&o&&ef(i),i.flags|=1,Fe(e,i,a,d),i.child)}function yy(e,i,a,o,h){if(Ms(i),i.stateNode===null){var d=Aa,_=a.contextType;typeof _=="object"&&_!==null&&(d=He(_)),d=new a(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Uf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},df(i),_=a.contextType,d.context=typeof _=="object"&&_!==null?He(_):Aa,d.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Lf(i,a,_,o),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Uf.enqueueReplaceState(d,d.state,null),$o(i,o,d,h),Xo(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,I=Us(a,E);d.props=I;var U=d.context,F=a.contextType;_=Aa,typeof F=="object"&&F!==null&&(_=He(F));var K=a.getDerivedStateFromProps;F=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||U!==_)&&iy(i,d,o,_),Rr=!1;var z=i.memoizedState;d.state=z,$o(i,o,d,h),Xo(),U=i.memoizedState,E||z!==U||Rr?(typeof K=="function"&&(Lf(i,a,K,o),U=i.memoizedState),(I=Rr||ny(i,a,I,o,z,U,_))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=U),d.props=o,d.state=U,d.context=_,o=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,mf(e,i),_=i.memoizedProps,F=Us(a,_),d.props=F,K=i.pendingProps,z=d.context,U=a.contextType,I=Aa,typeof U=="object"&&U!==null&&(I=He(U)),E=a.getDerivedStateFromProps,(U=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==K||z!==I)&&iy(i,d,o,I),Rr=!1,z=i.memoizedState,d.state=z,$o(i,o,d,h),Xo();var B=i.memoizedState;_!==K||z!==B||Rr||e!==null&&e.dependencies!==null&&Vu(e.dependencies)?(typeof E=="function"&&(Lf(i,a,E,o),B=i.memoizedState),(F=Rr||ny(i,a,F,o,z,B,I)||e!==null&&e.dependencies!==null&&Vu(e.dependencies))?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,B,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,B,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=B),d.props=o,d.state=B,d.context=I,o=F):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,Wu(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=Ps(i,e.child,null,h),i.child=Ps(i,null,a,h)):Fe(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Ki(e,i,h),e}function _y(e,i,a,o){return Ds(),i.flags|=256,Fe(e,i,a,o),i.child}var qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(e){return{baseLanes:e,cachePool:og()}}function Ff(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Tn),e}function vy(e,i,a){var o=i.pendingProps,h=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=e!==null&&e.memoizedState===null?!1:(pe.current&2)!==0),_&&(h=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,e===null){if(Lt){if(h?Dr(i):Or(),(e=ne)?(e=R_(e,xn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Sr!==null?{id:Ai,overflow:Si}:null,retryLane:536870912,hydrationErrors:null},a=Zp(e),a.return=i,i.child=a,qe=i,ne=null)):e=null,e===null)throw br(i);return Id(e)?i.lanes=32:i.lanes=536870912,null}var E=o.children;return o=o.fallback,h?(Or(),h=i.mode,E=tc({mode:"hidden",children:E},h),o=Ns(o,h,a,null),E.return=i,o.return=i,E.sibling=o,i.child=E,o=i.child,o.memoizedState=Hf(a),o.childLanes=Ff(e,_,a),i.memoizedState=qf,el(null,o)):(Dr(i),Gf(i,E))}var I=e.memoizedState;if(I!==null&&(E=I.dehydrated,E!==null)){if(d)i.flags&256?(Dr(i),i.flags&=-257,i=Kf(e,i,a)):i.memoizedState!==null?(Or(),i.child=e.child,i.flags|=128,i=null):(Or(),E=o.fallback,h=i.mode,o=tc({mode:"visible",children:o.children},h),E=Ns(E,h,a,null),E.flags|=2,o.return=i,E.return=i,o.sibling=E,i.child=o,Ps(i,e.child,null,a),o=i.child,o.memoizedState=Hf(a),o.childLanes=Ff(e,_,a),i.memoizedState=qf,i=el(null,o));else if(Dr(i),Id(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var U=_.dgst;_=U,o=Error(s(419)),o.stack="",o.digest=_,Ho({value:o,source:null,stack:null}),i=Kf(e,i,a)}else if(be||Ia(e,i,a,!1),_=(a&e.childLanes)!==0,be||_){if(_=ee,_!==null&&(o=Ao(_,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,Cs(e,o),hn(_,e,o),jf;bd(E)||uc(),i=Kf(e,i,a)}else bd(E)?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,ne=Ln(E.nextSibling),qe=i,Lt=!0,wr=null,xn=!1,e!==null&&eg(i,e),i=Gf(i,o.children),i.flags|=4096);return i}return h?(Or(),E=o.fallback,h=i.mode,I=e.child,U=I.sibling,o=ji(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,U!==null?E=ji(U,E):(E=Ns(E,h,a,null),E.flags|=2),E.return=i,o.return=i,o.sibling=E,i.child=o,el(null,o),o=i.child,E=e.child.memoizedState,E===null?E=Hf(a):(h=E.cachePool,h!==null?(I=Se._currentValue,h=h.parent!==I?{parent:I,pool:I}:h):h=og(),E={baseLanes:E.baseLanes|a,cachePool:h}),o.memoizedState=E,o.childLanes=Ff(e,_,a),i.memoizedState=qf,el(e.child,o)):(Dr(i),a=e.child,e=a.sibling,a=ji(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(_=i.deletions,_===null?(i.deletions=[e],i.flags|=16):_.push(e)),i.child=a,i.memoizedState=null,a)}function Gf(e,i){return i=tc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function tc(e,i){return e=yn(22,e,null,i),e.lanes=0,e}function Kf(e,i,a){return Ps(i,e.child,null,a),e=Gf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Ey(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),of(e.return,i,a)}function Qf(e,i,a,o,h,d){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h,treeForkCount:d}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=h,_.treeForkCount=d)}function Ty(e,i,a){var o=i.pendingProps,h=o.revealOrder,d=o.tail;o=o.children;var _=pe.current,E=(_&2)!==0;if(E?(_=_&1|2,i.flags|=128):_&=1,nt(pe,_),Fe(e,i,o,a),o=Lt?qo:0,!E&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ey(e,a,i);else if(e.tag===19)Ey(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&qu(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Qf(i,!1,h,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&qu(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Qf(i,!0,a,null,d,o);break;case"together":Qf(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function Ki(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),Vr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Ia(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=ji(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=ji(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Yf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Vu(e)))}function _A(e,i,a){switch(i.tag){case 3:Ne(i,i.stateNode.containerInfo),Ir(i,Se,e.memoizedState.cache),Ds();break;case 27:case 5:cs(i);break;case 4:Ne(i,i.stateNode.containerInfo);break;case 10:Ir(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,vf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Dr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?vy(e,i,a):(Dr(i),e=Ki(e,i,a),e!==null?e.sibling:null);Dr(i);break;case 19:var h=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(Ia(e,i,a,!1),o=(a&i.childLanes)!==0),h){if(o)return Ty(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),nt(pe,pe.current),o)break;return null;case 22:return i.lanes=0,dy(e,i,a,i.pendingProps);case 24:Ir(i,Se,e.memoizedState.cache)}return Ki(e,i,a)}function Ay(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)be=!0;else{if(!Yf(e,a)&&(i.flags&128)===0)return be=!1,_A(e,i,a);be=(e.flags&131072)!==0}else be=!1,Lt&&(i.flags&1048576)!==0&&tg(i,qo,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=Vs(i.elementType),i.type=e,typeof e=="function")Zh(e)?(o=Us(e,o),i.tag=1,i=yy(null,i,e,o,a)):(i.tag=0,i=Bf(null,i,e,o,a));else{if(e!=null){var h=e.$$typeof;if(h===Pt){i.tag=11,i=cy(null,i,e,o,a);break t}else if(h===C){i.tag=14,i=hy(null,i,e,o,a);break t}}throw i=It(e)||e,Error(s(306,i,""))}}return i;case 0:return Bf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,h=Us(o,i.pendingProps),yy(e,i,o,h,a);case 3:t:{if(Ne(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;h=d.element,mf(e,i),$o(i,o,null,a);var _=i.memoizedState;if(o=_.cache,Ir(i,Se,o),o!==d.cache&&lf(i,[Se],a,!0),Xo(),o=_.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=_y(e,i,o,a);break t}else if(o!==h){h=Mn(Error(s(424)),i),Ho(h),i=_y(e,i,o,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ne=Ln(e.firstChild),qe=i,Lt=!0,wr=null,xn=!0,a=dg(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ds(),o===h){i=Ki(e,i,a);break t}Fe(e,i,o,a)}i=i.child}return i;case 26:return Wu(e,i),e===null?(a=k_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Lt||(a=i.type,e=i.pendingProps,o=gc(wt.current).createElement(a),o[Ee]=i,o[Pe]=e,Ge(o,a,e),Te(o),i.stateNode=o):i.memoizedState=k_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return cs(i),e===null&&Lt&&(o=i.stateNode=D_(i.type,i.pendingProps,wt.current),qe=i,xn=!0,h=ne,zr(i.type)?(Rd=h,ne=Ln(o.firstChild)):ne=h),Fe(e,i,i.pendingProps.children,a),Wu(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Lt&&((h=o=ne)&&(o=YA(o,i.type,i.pendingProps,xn),o!==null?(i.stateNode=o,qe=i,ne=Ln(o.firstChild),xn=!1,h=!0):h=!1),h||br(i)),cs(i),h=i.type,d=i.pendingProps,_=e!==null?e.memoizedProps:null,o=d.children,Ad(h,d)?o=null:_!==null&&Ad(h,_)&&(i.flags|=32),i.memoizedState!==null&&(h=Tf(e,i,uA,null,null,a),gl._currentValue=h),Wu(e,i),Fe(e,i,o,a),i.child;case 6:return e===null&&Lt&&((e=a=ne)&&(a=XA(a,i.pendingProps,xn),a!==null?(i.stateNode=a,qe=i,ne=null,e=!0):e=!1),e||br(i)),null;case 13:return vy(e,i,a);case 4:return Ne(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Ps(i,null,o,a):Fe(e,i,o,a),i.child;case 11:return cy(e,i,i.type,i.pendingProps,a);case 7:return Fe(e,i,i.pendingProps,a),i.child;case 8:return Fe(e,i,i.pendingProps.children,a),i.child;case 12:return Fe(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Ir(i,i.type,o.value),Fe(e,i,o.children,a),i.child;case 9:return h=i.type._context,o=i.pendingProps.children,Ms(i),h=He(h),o=o(h),i.flags|=1,Fe(e,i,o,a),i.child;case 14:return hy(e,i,i.type,i.pendingProps,a);case 15:return fy(e,i,i.type,i.pendingProps,a);case 19:return Ty(e,i,a);case 31:return yA(e,i,a);case 22:return dy(e,i,a,i.pendingProps);case 24:return Ms(i),o=He(Se),e===null?(h=hf(),h===null&&(h=ee,d=uf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:o,cache:h},df(i),Ir(i,Se,h)):((e.lanes&a)!==0&&(mf(e,i),$o(i,null,null,a),Xo()),h=e.memoizedState,d=i.memoizedState,h.parent!==o?(h={parent:o,cache:o},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ir(i,Se,o)):(o=d.cache,Ir(i,Se,o),o!==h.cache&&lf(i,[Se],a,!0))),Fe(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Qi(e){e.flags|=4}function Xf(e,i,a,o,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(Xy())e.flags|=8192;else throw xs=Uu,ff}else e.flags&=-16777217}function Sy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!U_(i))if(Xy())e.flags|=8192;else throw xs=Uu,ff}function ec(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ou():536870912,e.lanes|=i,Ua|=i)}function nl(e,i){if(!Lt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ie(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function vA(e,i,a){var o=i.pendingProps;switch(nf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(i),null;case 1:return ie(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Hi(Se),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ba(i)?Qi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,sf())),ie(i),null;case 26:var h=i.type,d=i.memoizedState;return e===null?(Qi(i),d!==null?(ie(i),Sy(i,d)):(ie(i),Xf(i,h,null,o,a))):d?d!==e.memoizedState?(Qi(i),ie(i),Sy(i,d)):(ie(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&Qi(i),ie(i),Xf(i,h,e,o,a)),null;case 27:if(ia(i),a=wt.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Qi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return ie(i),null}e=rt.current,ba(i)?ng(i):(e=D_(h,o,a),i.stateNode=e,Qi(i))}return ie(i),null;case 5:if(ia(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Qi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return ie(i),null}if(d=rt.current,ba(i))ng(i);else{var _=gc(wt.current);switch(d){case 1:d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":d=_.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?_.createElement(h,{is:o.is}):_.createElement(h)}}d[Ee]=i,d[Pe]=o;t:for(_=i.child;_!==null;){if(_.tag===5||_.tag===6)d.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===i)break t;for(;_.sibling===null;){if(_.return===null||_.return===i)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}i.stateNode=d;t:switch(Ge(d,h,o),h){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Qi(i)}}return ie(i),Xf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Qi(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=wt.current,ba(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,h=qe,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[Ee]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||v_(e.nodeValue,a)),e||br(i,!0)}else e=gc(e).createTextNode(o),e[Ee]=i,i.stateNode=e}return ie(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(o=ba(i),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ee]=i}else Ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ie(i),e=!1}else a=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?(vn(i),i):(vn(i),null);if((i.flags&128)!==0)throw Error(s(558))}return ie(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=ba(i),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ee]=i}else Ds(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ie(i),h=!1}else h=sf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(vn(i),i):(vn(i),null)}return vn(i),(i.flags&128)!==0?(i.lanes=a,i):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=i.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==h&&(o.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),ec(i,i.updateQueue),ie(i),null);case 4:return se(),e===null&&yd(i.stateNode.containerInfo),ie(i),null;case 10:return Hi(i.type),ie(i),null;case 19:if(Q(pe),o=i.memoizedState,o===null)return ie(i),null;if(h=(i.flags&128)!==0,d=o.rendering,d===null)if(h)nl(o,!1);else{if(fe!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=qu(e),d!==null){for(i.flags|=128,nl(o,!1),e=d.updateQueue,i.updateQueue=e,ec(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Jp(a,e),a=a.sibling;return nt(pe,pe.current&1|2),Lt&&Bi(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&tn()>ac&&(i.flags|=128,h=!0,nl(o,!1),i.lanes=4194304)}else{if(!h)if(e=qu(d),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,ec(i,e),nl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Lt)return ie(i),null}else 2*tn()-o.renderingStartTime>ac&&a!==536870912&&(i.flags|=128,h=!0,nl(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(e=o.last,e!==null?e.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=tn(),e.sibling=null,a=pe.current,nt(pe,h?a&1|2:a&1),Lt&&Bi(i,o.treeForkCount),e):(ie(i),null);case 22:case 23:return vn(i),_f(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(ie(i),i.subtreeFlags&6&&(i.flags|=8192)):ie(i),a=i.updateQueue,a!==null&&ec(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&Q(ks),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Hi(Se),ie(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function EA(e,i){switch(nf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Hi(Se),se(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ia(i),null;case 31:if(i.memoizedState!==null){if(vn(i),i.alternate===null)throw Error(s(340));Ds()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(vn(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Ds()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Q(pe),null;case 4:return se(),null;case 10:return Hi(i.type),null;case 22:case 23:return vn(i),_f(),e!==null&&Q(ks),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Hi(Se),null;case 25:return null;default:return null}}function wy(e,i){switch(nf(i),i.tag){case 3:Hi(Se),se();break;case 26:case 27:case 5:ia(i);break;case 4:se();break;case 31:i.memoizedState!==null&&vn(i);break;case 13:vn(i);break;case 19:Q(pe);break;case 10:Hi(i.type);break;case 22:case 23:vn(i),_f(),e!==null&&Q(ks);break;case 24:Hi(Se)}}function il(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&e)===e){o=void 0;var d=a.create,_=a.inst;o=d(),_.destroy=o}a=a.next}while(a!==h)}}catch(E){Xt(i,i.return,E)}}function Mr(e,i,a){try{var o=i.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var d=h.next;o=d;do{if((o.tag&e)===e){var _=o.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,h=i;var I=a,U=E;try{U()}catch(F){Xt(h,I,F)}}}o=o.next}while(o!==d)}}catch(F){Xt(i,i.return,F)}}function by(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{pg(i,a)}catch(o){Xt(e,e.return,o)}}}function Iy(e,i,a){a.props=Us(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Xt(e,i,o)}}function rl(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(h){Xt(e,i,h)}}function wi(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){Xt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Xt(e,i,h)}else a.current=null}function Ry(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){Xt(e,e.return,h)}}function $f(e,i,a){try{var o=e.stateNode;qA(o,e.type,a,i),o[Pe]=i}catch(h){Xt(e,e.return,h)}}function Cy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&zr(e.type)||e.tag===4}function Jf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Cy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&zr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zf(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Kn));else if(o!==4&&(o===27&&zr(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Zf(e,i,a),e=e.sibling;e!==null;)Zf(e,i,a),e=e.sibling}function nc(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&zr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(nc(e,i,a),e=e.sibling;e!==null;)nc(e,i,a),e=e.sibling}function Ny(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Ge(i,o,a),i[Ee]=e,i[Pe]=a}catch(d){Xt(e,e.return,d)}}var Yi=!1,Ie=!1,Wf=!1,Dy=typeof WeakSet=="function"?WeakSet:Set,Ue=null;function TA(e,i){if(e=e.containerInfo,Ed=Sc,e=qp(e),Gh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var _=0,E=-1,I=-1,U=0,F=0,K=e,z=null;e:for(;;){for(var B;K!==a||h!==0&&K.nodeType!==3||(E=_+h),K!==d||o!==0&&K.nodeType!==3||(I=_+o),K.nodeType===3&&(_+=K.nodeValue.length),(B=K.firstChild)!==null;)z=K,K=B;for(;;){if(K===e)break e;if(z===a&&++U===h&&(E=_),z===d&&++F===o&&(I=_),(B=K.nextSibling)!==null)break;K=z,z=K.parentNode}K=B}a=E===-1||I===-1?null:{start:E,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Td={focusedElem:e,selectionRange:a},Sc=!1,Ue=i;Ue!==null;)if(i=Ue,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Ue=e;else for(;Ue!==null;){switch(i=Ue,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)h=e[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var st=Us(a.type,h);e=o.getSnapshotBeforeUpdate(st,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ft){Xt(a,a.return,ft)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)wd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Ue=e;break}Ue=i.return}}function Oy(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:$i(e,a),o&4&&il(5,a);break;case 1:if($i(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(_){Xt(a,a.return,_)}else{var h=Us(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Xt(a,a.return,_)}}o&64&&by(a),o&512&&rl(a,a.return);break;case 3:if($i(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{pg(e,i)}catch(_){Xt(a,a.return,_)}}break;case 27:i===null&&o&4&&Ny(a);case 26:case 5:$i(e,a),i===null&&o&4&&Ry(a),o&512&&rl(a,a.return);break;case 12:$i(e,a);break;case 31:$i(e,a),o&4&&Vy(e,a);break;case 13:$i(e,a),o&4&&xy(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=DA.bind(null,a),$A(e,a))));break;case 22:if(o=a.memoizedState!==null||Yi,!o){i=i!==null&&i.memoizedState!==null||Ie,h=Yi;var d=Ie;Yi=o,(Ie=i)&&!d?Ji(e,a,(a.subtreeFlags&8772)!==0):$i(e,a),Yi=h,Ie=d}break;case 30:break;default:$i(e,a)}}function My(e){var i=e.alternate;i!==null&&(e.alternate=null,My(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&la(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var oe=null,on=!1;function Xi(e,i,a){for(a=a.child;a!==null;)ky(e,i,a),a=a.sibling}function ky(e,i,a){if(je&&typeof je.onCommitFiberUnmount=="function")try{je.onCommitFiberUnmount(qn,a)}catch{}switch(a.tag){case 26:Ie||wi(a,i),Xi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ie||wi(a,i);var o=oe,h=on;zr(a.type)&&(oe=a.stateNode,on=!1),Xi(e,i,a),dl(a.stateNode),oe=o,on=h;break;case 5:Ie||wi(a,i);case 6:if(o=oe,h=on,oe=null,Xi(e,i,a),oe=o,on=h,oe!==null)if(on)try{(oe.nodeType===9?oe.body:oe.nodeName==="HTML"?oe.ownerDocument.body:oe).removeChild(a.stateNode)}catch(d){Xt(a,i,d)}else try{oe.removeChild(a.stateNode)}catch(d){Xt(a,i,d)}break;case 18:oe!==null&&(on?(e=oe,b_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ka(e)):b_(oe,a.stateNode));break;case 4:o=oe,h=on,oe=a.stateNode.containerInfo,on=!0,Xi(e,i,a),oe=o,on=h;break;case 0:case 11:case 14:case 15:Mr(2,a,i),Ie||Mr(4,a,i),Xi(e,i,a);break;case 1:Ie||(wi(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Iy(a,i,o)),Xi(e,i,a);break;case 21:Xi(e,i,a);break;case 22:Ie=(o=Ie)||a.memoizedState!==null,Xi(e,i,a),Ie=o;break;default:Xi(e,i,a)}}function Vy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ka(e)}catch(a){Xt(i,i.return,a)}}}function xy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ka(e)}catch(a){Xt(i,i.return,a)}}function AA(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Dy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Dy),i;default:throw Error(s(435,e.tag))}}function ic(e,i){var a=AA(e);i.forEach(function(o){if(!a.has(o)){a.add(o);var h=OA.bind(null,e,o);o.then(h,h)}})}function ln(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],d=e,_=i,E=_;t:for(;E!==null;){switch(E.tag){case 27:if(zr(E.type)){oe=E.stateNode,on=!1;break t}break;case 5:oe=E.stateNode,on=!1;break t;case 3:case 4:oe=E.stateNode.containerInfo,on=!0;break t}E=E.return}if(oe===null)throw Error(s(160));ky(d,_,h),oe=null,on=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Py(i,e),i=i.sibling}var Zn=null;function Py(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ln(i,e),un(e),o&4&&(Mr(3,e,e.return),il(3,e),Mr(5,e,e.return));break;case 1:ln(i,e),un(e),o&512&&(Ie||a===null||wi(a,a.return)),o&64&&Yi&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=Zn;if(ln(i,e),un(e),o&512&&(Ie||a===null||wi(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ci]||d[Ee]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(o),h.head.insertBefore(d,h.querySelector("head > title"))),Ge(d,o,a),d[Ee]=e,Te(d),o=d;break t;case"link":var _=P_("link","href",h).get(o+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(d=_[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}d=h.createElement(o),Ge(d,o,a),h.head.appendChild(d);break;case"meta":if(_=P_("meta","content",h).get(o+(a.content||""))){for(E=0;E<_.length;E++)if(d=_[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}d=h.createElement(o),Ge(d,o,a),h.head.appendChild(d);break;default:throw Error(s(468,o))}d[Ee]=e,Te(d),o=d}e.stateNode=o}else L_(h,e.type,e.stateNode);else e.stateNode=x_(h,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?L_(h,e.type,e.stateNode):x_(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&$f(e,e.memoizedProps,a.memoizedProps)}break;case 27:ln(i,e),un(e),o&512&&(Ie||a===null||wi(a,a.return)),a!==null&&o&4&&$f(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ln(i,e),un(e),o&512&&(Ie||a===null||wi(a,a.return)),e.flags&32){h=e.stateNode;try{an(h,"")}catch(st){Xt(e,e.return,st)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,$f(e,h,a!==null?a.memoizedProps:h)),o&1024&&(Wf=!0);break;case 6:if(ln(i,e),un(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(st){Xt(e,e.return,st)}}break;case 3:if(vc=null,h=Zn,Zn=yc(i.containerInfo),ln(i,e),Zn=h,un(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Ka(i.containerInfo)}catch(st){Xt(e,e.return,st)}Wf&&(Wf=!1,Ly(e));break;case 4:o=Zn,Zn=yc(e.stateNode.containerInfo),ln(i,e),un(e),Zn=o;break;case 12:ln(i,e),un(e);break;case 31:ln(i,e),un(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ic(e,o)));break;case 13:ln(i,e),un(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(sc=tn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ic(e,o)));break;case 22:h=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,U=Yi,F=Ie;if(Yi=U||h,Ie=F||I,ln(i,e),Ie=F,Yi=U,un(e),o&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||I||Yi||Ie||zs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){I=a=i;try{if(d=I.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=I.stateNode;var K=I.memoizedProps.style,z=K!=null&&K.hasOwnProperty("display")?K.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(st){Xt(I,I.return,st)}}}else if(i.tag===6){if(a===null){I=i;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(st){Xt(I,I.return,st)}}}else if(i.tag===18){if(a===null){I=i;try{var B=I.stateNode;h?I_(B,!0):I_(I.stateNode,!1)}catch(st){Xt(I,I.return,st)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,ic(e,a))));break;case 19:ln(i,e),un(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,ic(e,o)));break;case 30:break;case 21:break;default:ln(i,e),un(e)}}function un(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(Cy(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=Jf(e);nc(e,d,h);break;case 5:var _=a.stateNode;a.flags&32&&(an(_,""),a.flags&=-33);var E=Jf(e);nc(e,E,_);break;case 3:case 4:var I=a.stateNode.containerInfo,U=Jf(e);Zf(e,U,I);break;default:throw Error(s(161))}}catch(F){Xt(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Ly(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Ly(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function $i(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Oy(e,i.alternate,i),i=i.sibling}function zs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Mr(4,i,i.return),zs(i);break;case 1:wi(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Iy(i,i.return,a),zs(i);break;case 27:dl(i.stateNode);case 26:case 5:wi(i,i.return),zs(i);break;case 22:i.memoizedState===null&&zs(i);break;case 30:zs(i);break;default:zs(i)}e=e.sibling}}function Ji(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,h=e,d=i,_=d.flags;switch(d.tag){case 0:case 11:case 15:Ji(h,d,a),il(4,d);break;case 1:if(Ji(h,d,a),o=d,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(U){Xt(o,o.return,U)}if(o=d,h=o.updateQueue,h!==null){var E=o.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)mg(I[h],E)}catch(U){Xt(o,o.return,U)}}a&&_&64&&by(d),rl(d,d.return);break;case 27:Ny(d);case 26:case 5:Ji(h,d,a),a&&o===null&&_&4&&Ry(d),rl(d,d.return);break;case 12:Ji(h,d,a);break;case 31:Ji(h,d,a),a&&_&4&&Vy(h,d);break;case 13:Ji(h,d,a),a&&_&4&&xy(h,d);break;case 22:d.memoizedState===null&&Ji(h,d,a),rl(d,d.return);break;case 30:break;default:Ji(h,d,a)}i=i.sibling}}function td(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Fo(a))}function ed(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Fo(e))}function Wn(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Uy(e,i,a,o),i=i.sibling}function Uy(e,i,a,o){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Wn(e,i,a,o),h&2048&&il(9,i);break;case 1:Wn(e,i,a,o);break;case 3:Wn(e,i,a,o),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Fo(e)));break;case 12:if(h&2048){Wn(e,i,a,o),e=i.stateNode;try{var d=i.memoizedProps,_=d.id,E=d.onPostCommit;typeof E=="function"&&E(_,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Xt(i,i.return,I)}}else Wn(e,i,a,o);break;case 31:Wn(e,i,a,o);break;case 13:Wn(e,i,a,o);break;case 23:break;case 22:d=i.stateNode,_=i.alternate,i.memoizedState!==null?d._visibility&2?Wn(e,i,a,o):sl(e,i):d._visibility&2?Wn(e,i,a,o):(d._visibility|=2,xa(e,i,a,o,(i.subtreeFlags&10256)!==0||!1)),h&2048&&td(_,i);break;case 24:Wn(e,i,a,o),h&2048&&ed(i.alternate,i);break;default:Wn(e,i,a,o)}}function xa(e,i,a,o,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,_=i,E=a,I=o,U=_.flags;switch(_.tag){case 0:case 11:case 15:xa(d,_,E,I,h),il(8,_);break;case 23:break;case 22:var F=_.stateNode;_.memoizedState!==null?F._visibility&2?xa(d,_,E,I,h):sl(d,_):(F._visibility|=2,xa(d,_,E,I,h)),h&&U&2048&&td(_.alternate,_);break;case 24:xa(d,_,E,I,h),h&&U&2048&&ed(_.alternate,_);break;default:xa(d,_,E,I,h)}i=i.sibling}}function sl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,h=o.flags;switch(o.tag){case 22:sl(a,o),h&2048&&td(o.alternate,o);break;case 24:sl(a,o),h&2048&&ed(o.alternate,o);break;default:sl(a,o)}i=i.sibling}}var al=8192;function Pa(e,i,a){if(e.subtreeFlags&al)for(e=e.child;e!==null;)zy(e,i,a),e=e.sibling}function zy(e,i,a){switch(e.tag){case 26:Pa(e,i,a),e.flags&al&&e.memoizedState!==null&&lS(a,Zn,e.memoizedState,e.memoizedProps);break;case 5:Pa(e,i,a);break;case 3:case 4:var o=Zn;Zn=yc(e.stateNode.containerInfo),Pa(e,i,a),Zn=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=al,al=16777216,Pa(e,i,a),al=o):Pa(e,i,a));break;default:Pa(e,i,a)}}function jy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ol(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Ue=o,qy(o,e)}jy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)By(e),e=e.sibling}function By(e){switch(e.tag){case 0:case 11:case 15:ol(e),e.flags&2048&&Mr(9,e,e.return);break;case 3:ol(e);break;case 12:ol(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,rc(e)):ol(e);break;default:ol(e)}}function rc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Ue=o,qy(o,e)}jy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Mr(8,i,i.return),rc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,rc(i));break;default:rc(i)}e=e.sibling}}function qy(e,i){for(;Ue!==null;){var a=Ue;switch(a.tag){case 0:case 11:case 15:Mr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Fo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Ue=o;else t:for(a=e;Ue!==null;){o=Ue;var h=o.sibling,d=o.return;if(My(o),o===a){Ue=null;break t}if(h!==null){h.return=d,Ue=h;break t}Ue=d}}}var SA={getCacheForType:function(e){var i=He(Se),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return He(Se).controller.signal}},wA=typeof WeakMap=="function"?WeakMap:Map,Ft=0,ee=null,Rt=null,Ot=0,Yt=0,En=null,kr=!1,La=!1,nd=!1,Zi=0,fe=0,Vr=0,js=0,id=0,Tn=0,Ua=0,ll=null,cn=null,rd=!1,sc=0,Hy=0,ac=1/0,oc=null,xr=null,Oe=0,Pr=null,za=null,Wi=0,sd=0,ad=null,Fy=null,ul=0,od=null;function An(){return(Ft&2)!==0&&Ot!==0?Ot&-Ot:q.T!==null?dd():lu()}function Gy(){if(Tn===0)if((Ot&536870912)===0||Lt){var e=ds;ds<<=1,(ds&3932160)===0&&(ds=262144),Tn=e}else Tn=536870912;return e=_n.current,e!==null&&(e.flags|=32),Tn}function hn(e,i,a){(e===ee&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)&&(ja(e,0),Lr(e,Ot,Tn,!1)),ms(e,a),((Ft&2)===0||e!==ee)&&(e===ee&&((Ft&2)===0&&(js|=a),fe===4&&Lr(e,Ot,Tn,!1)),bi(e))}function Ky(e,i,a){if((Ft&6)!==0)throw Error(s(327));var o=!a&&(i&127)===0&&(i&e.expiredLanes)===0||Hn(e,i),h=o?RA(e,i):ud(e,i,!0),d=o;do{if(h===0){La&&!o&&Lr(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!bA(a)){h=ud(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;t:{var E=e;h=ll;var I=E.current.memoizedState.isDehydrated;if(I&&(ja(E,_).flags|=256),_=ud(E,_,!1),_!==2){if(nd&&!I){E.errorRecoveryDisabledLanes|=d,js|=d,h=4;break t}d=cn,cn=h,d!==null&&(cn===null?cn=d:cn.push.apply(cn,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){ja(e,0),Lr(e,i,0,!0);break}t:{switch(o=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Lr(o,i,Tn,!kr);break t;case 2:cn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=sc+300-tn(),10<h)){if(Lr(o,i,Tn,!kr),oi(o,0,!0)!==0)break t;Wi=i,o.timeoutHandle=S_(Qy.bind(null,o,a,cn,oc,rd,i,Tn,js,Ua,kr,d,"Throttled",-0,0),h);break t}Qy(o,a,cn,oc,rd,i,Tn,js,Ua,kr,d,null,-0,0)}}break}while(!0);bi(e)}function Qy(e,i,a,o,h,d,_,E,I,U,F,K,z,B){if(e.timeoutHandle=-1,K=i.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Kn},zy(i,d,K);var st=(d&62914560)===d?sc-tn():(d&4194048)===d?Hy-tn():0;if(st=uS(K,st),st!==null){Wi=d,e.cancelPendingCommit=st(e_.bind(null,e,i,d,a,o,h,_,E,I,F,K,null,z,B)),Lr(e,d,_,!U);return}}e_(e,i,d,a,o,h,_,E,I)}function bA(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],d=h.getSnapshot;h=h.value;try{if(!gn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Lr(e,i,a,o){i&=~id,i&=~js,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var h=i;0<h;){var d=31-de(h),_=1<<d;o[d]=-1,h&=~_}a!==0&&ps(e,a,i)}function lc(){return(Ft&6)===0?(cl(0),!1):!0}function ld(){if(Rt!==null){if(Yt===0)var e=Rt.return;else e=Rt,qi=Os=null,wf(e),Da=null,Ko=0,e=Rt;for(;e!==null;)wy(e.alternate,e),e=e.return;Rt=null}}function ja(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,GA(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wi=0,ld(),ee=e,Rt=a=ji(e.current,null),Ot=i,Yt=0,En=null,kr=!1,La=Hn(e,i),nd=!1,Ua=Tn=id=js=Vr=fe=0,cn=ll=null,rd=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var h=31-de(o),d=1<<h;i|=e[h],o&=~d}return Zi=i,Nu(),a}function Yy(e,i){St=null,q.H=tl,i===Na||i===Lu?(i=cg(),Yt=3):i===ff?(i=cg(),Yt=4):Yt=i===jf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,En=i,Rt===null&&(fe=1,Ju(e,Mn(i,e.current)))}function Xy(){var e=_n.current;return e===null?!0:(Ot&4194048)===Ot?Pn===null:(Ot&62914560)===Ot||(Ot&536870912)!==0?e===Pn:!1}function $y(){var e=q.H;return q.H=tl,e===null?tl:e}function Jy(){var e=q.A;return q.A=SA,e}function uc(){fe=4,kr||(Ot&4194048)!==Ot&&_n.current!==null||(La=!0),(Vr&134217727)===0&&(js&134217727)===0||ee===null||Lr(ee,Ot,Tn,!1)}function ud(e,i,a){var o=Ft;Ft|=2;var h=$y(),d=Jy();(ee!==e||Ot!==i)&&(oc=null,ja(e,i)),i=!1;var _=fe;t:do try{if(Yt!==0&&Rt!==null){var E=Rt,I=En;switch(Yt){case 8:ld(),_=6;break t;case 3:case 2:case 9:case 6:_n.current===null&&(i=!0);var U=Yt;if(Yt=0,En=null,Ba(e,E,I,U),a&&La){_=0;break t}break;default:U=Yt,Yt=0,En=null,Ba(e,E,I,U)}}IA(),_=fe;break}catch(F){Yy(e,F)}while(!0);return i&&e.shellSuspendCounter++,qi=Os=null,Ft=o,q.H=h,q.A=d,Rt===null&&(ee=null,Ot=0,Nu()),_}function IA(){for(;Rt!==null;)Zy(Rt)}function RA(e,i){var a=Ft;Ft|=2;var o=$y(),h=Jy();ee!==e||Ot!==i?(oc=null,ac=tn()+500,ja(e,i)):La=Hn(e,i);t:do try{if(Yt!==0&&Rt!==null){i=Rt;var d=En;e:switch(Yt){case 1:Yt=0,En=null,Ba(e,i,d,1);break;case 2:case 9:if(lg(d)){Yt=0,En=null,Wy(i);break}i=function(){Yt!==2&&Yt!==9||ee!==e||(Yt=7),bi(e)},d.then(i,i);break t;case 3:Yt=7;break t;case 4:Yt=5;break t;case 7:lg(d)?(Yt=0,En=null,Wy(i)):(Yt=0,En=null,Ba(e,i,d,7));break;case 5:var _=null;switch(Rt.tag){case 26:_=Rt.memoizedState;case 5:case 27:var E=Rt;if(_?U_(_):E.stateNode.complete){Yt=0,En=null;var I=E.sibling;if(I!==null)Rt=I;else{var U=E.return;U!==null?(Rt=U,cc(U)):Rt=null}break e}}Yt=0,En=null,Ba(e,i,d,5);break;case 6:Yt=0,En=null,Ba(e,i,d,6);break;case 8:ld(),fe=6;break t;default:throw Error(s(462))}}CA();break}catch(F){Yy(e,F)}while(!0);return qi=Os=null,q.H=o,q.A=h,Ft=a,Rt!==null?0:(ee=null,Ot=0,Nu(),fe)}function CA(){for(;Rt!==null&&!Uh();)Zy(Rt)}function Zy(e){var i=Ay(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,i===null?cc(e):Rt=i}function Wy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=gy(a,i,i.pendingProps,i.type,void 0,Ot);break;case 11:i=gy(a,i,i.pendingProps,i.type.render,i.ref,Ot);break;case 5:wf(i);default:wy(a,i),i=Rt=Jp(i,Zi),i=Ay(a,i,Zi)}e.memoizedProps=e.pendingProps,i===null?cc(e):Rt=i}function Ba(e,i,a,o){qi=Os=null,wf(i),Da=null,Ko=0;var h=i.return;try{if(gA(e,h,i,a,Ot)){fe=1,Ju(e,Mn(a,e.current)),Rt=null;return}}catch(d){if(h!==null)throw Rt=h,d;fe=1,Ju(e,Mn(a,e.current)),Rt=null;return}i.flags&32768?(Lt||o===1?e=!0:La||(Ot&536870912)!==0?e=!1:(kr=e=!0,(o===2||o===9||o===3||o===6)&&(o=_n.current,o!==null&&o.tag===13&&(o.flags|=16384))),t_(i,e)):cc(i)}function cc(e){var i=e;do{if((i.flags&32768)!==0){t_(i,kr);return}e=i.return;var a=vA(i.alternate,i,Zi);if(a!==null){Rt=a;return}if(i=i.sibling,i!==null){Rt=i;return}Rt=i=e}while(i!==null);fe===0&&(fe=5)}function t_(e,i){do{var a=EA(e.alternate,e);if(a!==null){a.flags&=32767,Rt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){Rt=e;return}Rt=e=a}while(e!==null);fe=6,Rt=null}function e_(e,i,a,o,h,d,_,E,I){e.cancelPendingCommit=null;do hc();while(Oe!==0);if((Ft&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=$h,Bh(e,a,d,_,E,I),e===ee&&(Rt=ee=null,Ot=0),za=i,Pr=e,Wi=a,sd=d,ad=h,Fy=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,MA(dr,function(){return a_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=q.T,q.T=null,h=et.p,et.p=2,_=Ft,Ft|=4;try{TA(e,i,a)}finally{Ft=_,et.p=h,q.T=o}}Oe=1,n_(),i_(),r_()}}function n_(){if(Oe===1){Oe=0;var e=Pr,i=za,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=q.T,q.T=null;var o=et.p;et.p=2;var h=Ft;Ft|=4;try{Py(i,e);var d=Td,_=qp(e.containerInfo),E=d.focusedElem,I=d.selectionRange;if(_!==E&&E&&E.ownerDocument&&Bp(E.ownerDocument.documentElement,E)){if(I!==null&&Gh(E)){var U=I.start,F=I.end;if(F===void 0&&(F=U),"selectionStart"in E)E.selectionStart=U,E.selectionEnd=Math.min(F,E.value.length);else{var K=E.ownerDocument||document,z=K&&K.defaultView||window;if(z.getSelection){var B=z.getSelection(),st=E.textContent.length,ft=Math.min(I.start,st),Wt=I.end===void 0?ft:Math.min(I.end,st);!B.extend&&ft>Wt&&(_=Wt,Wt=ft,ft=_);var x=jp(E,ft),D=jp(E,Wt);if(x&&D&&(B.rangeCount!==1||B.anchorNode!==x.node||B.anchorOffset!==x.offset||B.focusNode!==D.node||B.focusOffset!==D.offset)){var L=K.createRange();L.setStart(x.node,x.offset),B.removeAllRanges(),ft>Wt?(B.addRange(L),B.extend(D.node,D.offset)):(L.setEnd(D.node,D.offset),B.addRange(L))}}}}for(K=[],B=E;B=B.parentNode;)B.nodeType===1&&K.push({element:B,left:B.scrollLeft,top:B.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<K.length;E++){var G=K[E];G.element.scrollLeft=G.left,G.element.scrollTop=G.top}}Sc=!!Ed,Td=Ed=null}finally{Ft=h,et.p=o,q.T=a}}e.current=i,Oe=2}}function i_(){if(Oe===2){Oe=0;var e=Pr,i=za,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=q.T,q.T=null;var o=et.p;et.p=2;var h=Ft;Ft|=4;try{Oy(e,i.alternate,i)}finally{Ft=h,et.p=o,q.T=a}}Oe=3}}function r_(){if(Oe===4||Oe===3){Oe=0,eu();var e=Pr,i=za,a=Wi,o=Fy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Oe=5:(Oe=0,za=Pr=null,s_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(xr=null),Pi(a),i=i.stateNode,je&&typeof je.onCommitFiberRoot=="function")try{je.onCommitFiberRoot(qn,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=q.T,h=et.p,et.p=2,q.T=null;try{for(var d=e.onRecoverableError,_=0;_<o.length;_++){var E=o[_];d(E.value,{componentStack:E.stack})}}finally{q.T=i,et.p=h}}(Wi&3)!==0&&hc(),bi(e),h=e.pendingLanes,(a&261930)!==0&&(h&42)!==0?e===od?ul++:(ul=0,od=e):ul=0,cl(0)}}function s_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Fo(i)))}function hc(){return n_(),i_(),r_(),a_()}function a_(){if(Oe!==5)return!1;var e=Pr,i=sd;sd=0;var a=Pi(Wi),o=q.T,h=et.p;try{et.p=32>a?32:a,q.T=null,a=ad,ad=null;var d=Pr,_=Wi;if(Oe=0,za=Pr=null,Wi=0,(Ft&6)!==0)throw Error(s(331));var E=Ft;if(Ft|=4,By(d.current),Uy(d,d.current,_,a),Ft=E,cl(0,!1),je&&typeof je.onPostCommitFiberRoot=="function")try{je.onPostCommitFiberRoot(qn,d)}catch{}return!0}finally{et.p=h,q.T=o,s_(e,i)}}function o_(e,i,a){i=Mn(a,i),i=zf(e.stateNode,i,2),e=Nr(e,i,2),e!==null&&(ms(e,2),bi(e))}function Xt(e,i,a){if(e.tag===3)o_(e,e,a);else for(;i!==null;){if(i.tag===3){o_(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(xr===null||!xr.has(o))){e=Mn(a,e),a=ly(2),o=Nr(i,a,2),o!==null&&(uy(a,o,i,e),ms(o,2),bi(o));break}}i=i.return}}function cd(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new wA;var h=new Set;o.set(i,h)}else h=o.get(i),h===void 0&&(h=new Set,o.set(i,h));h.has(a)||(nd=!0,h.add(a),e=NA.bind(null,e,i,a),i.then(e,e))}function NA(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ee===e&&(Ot&a)===a&&(fe===4||fe===3&&(Ot&62914560)===Ot&&300>tn()-sc?(Ft&2)===0&&ja(e,0):id|=a,Ua===Ot&&(Ua=0)),bi(e)}function l_(e,i){i===0&&(i=ou()),e=Cs(e,i),e!==null&&(ms(e,i),bi(e))}function DA(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),l_(e,a)}function OA(e,i){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),l_(e,a)}function MA(e,i){return De(e,i)}var fc=null,qa=null,hd=!1,dc=!1,fd=!1,Ur=0;function bi(e){e!==qa&&e.next===null&&(qa===null?fc=qa=e:qa=qa.next=e),dc=!0,hd||(hd=!0,VA())}function cl(e,i){if(!fd&&dc){fd=!0;do for(var a=!1,o=fc;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var d=0;else{var _=o.suspendedLanes,E=o.pingedLanes;d=(1<<31-de(42|e)+1)-1,d&=h&~(_&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,f_(o,d))}else d=Ot,d=oi(o,o===ee?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Hn(o,d)||(a=!0,f_(o,d));o=o.next}while(a);fd=!1}}function kA(){u_()}function u_(){dc=hd=!1;var e=0;Ur!==0&&FA()&&(e=Ur);for(var i=tn(),a=null,o=fc;o!==null;){var h=o.next,d=c_(o,i);d===0?(o.next=null,a===null?fc=h:a.next=h,h===null&&(qa=a)):(a=o,(e!==0||(d&3)!==0)&&(dc=!0)),o=h}Oe!==0&&Oe!==5||cl(e),Ur!==0&&(Ur=0)}function c_(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var _=31-de(d),E=1<<_,I=h[_];I===-1?((E&a)===0||(E&o)!==0)&&(h[_]=jh(E,i)):I<=i&&(e.expiredLanes|=E),d&=~E}if(i=ee,a=Ot,a=oi(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Yt===2||Yt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&fr(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Hn(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&fr(o),Pi(a)){case 2:case 8:a=Eo;break;case 32:a=dr;break;case 268435456:a=nu;break;default:a=dr}return o=h_.bind(null,e),a=De(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&fr(o),e.callbackPriority=2,e.callbackNode=null,2}function h_(e,i){if(Oe!==0&&Oe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(hc()&&e.callbackNode!==a)return null;var o=Ot;return o=oi(e,e===ee?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Ky(e,o,i),c_(e,tn()),e.callbackNode!=null&&e.callbackNode===a?h_.bind(null,e):null)}function f_(e,i){if(hc())return null;Ky(e,i,!0)}function VA(){KA(function(){(Ft&6)!==0?De(vo,kA):u_()})}function dd(){if(Ur===0){var e=Ra;e===0&&(e=si,si<<=1,(si&261888)===0&&(si=256)),Ur=e}return Ur}function d_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:fa(""+e)}function m_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function xA(e,i,a,o,h){if(i==="submit"&&a&&a.stateNode===h){var d=d_((h[Pe]||null).action),_=o.submitter;_&&(i=(i=_[Pe]||null)?d_(i.formAction):_.getAttribute("formAction"),i!==null&&(d=i,_=null));var E=new _i("action","action",null,o,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ur!==0){var I=_?m_(h,_):new FormData(h);kf(a,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(E.preventDefault(),I=_?m_(h,_):new FormData(h),kf(a,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var md=0;md<Xh.length;md++){var pd=Xh[md],PA=pd.toLowerCase(),LA=pd[0].toUpperCase()+pd.slice(1);Jn(PA,"on"+LA)}Jn(Gp,"onAnimationEnd"),Jn(Kp,"onAnimationIteration"),Jn(Qp,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(W1,"onTransitionRun"),Jn(tA,"onTransitionStart"),Jn(eA,"onTransitionCancel"),Jn(Yp,"onTransitionEnd"),mi("onMouseEnter",["mouseout","mouseover"]),mi("onMouseLeave",["mouseout","mouseover"]),mi("onPointerEnter",["pointerout","pointerover"]),mi("onPointerLeave",["pointerout","pointerover"]),di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),di("onBeforeInput",["compositionend","keypress","textInput","paste"]),di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hl));function p_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],h=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var _=o.length-1;0<=_;_--){var E=o[_],I=E.instance,U=E.currentTarget;if(E=E.listener,I!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=U;try{d(h)}catch(F){Cu(F)}h.currentTarget=null,d=I}else for(_=0;_<o.length;_++){if(E=o[_],I=E.instance,U=E.currentTarget,E=E.listener,I!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=U;try{d(h)}catch(F){Cu(F)}h.currentTarget=null,d=I}}}}function Ct(e,i){var a=i[oa];a===void 0&&(a=i[oa]=new Set);var o=e+"__bubble";a.has(o)||(g_(i,e,2,!1),a.add(o))}function gd(e,i,a){var o=0;i&&(o|=4),g_(a,e,o,i)}var mc="_reactListening"+Math.random().toString(36).slice(2);function yd(e){if(!e[mc]){e[mc]=!0,So.forEach(function(a){a!=="selectionchange"&&(UA.has(a)||gd(a,!1,e),gd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[mc]||(i[mc]=!0,gd("selectionchange",!1,i))}}function g_(e,i,a,o){switch(G_(i)){case 2:var h=fS;break;case 8:h=dS;break;default:h=Md}a=h.bind(null,i,a,e),h=void 0,!Es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function _d(e,i,a,o,h){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var E=o.stateNode.containerInfo;if(E===h)break;if(_===4)for(_=o.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;E!==null;){if(_=hi(E),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){o=d=_;continue t}E=E.parentNode}}o=o.return}vr(function(){var U=d,F=Cn(a),K=[];t:{var z=Xp.get(e);if(z!==void 0){var B=_i,st=e;switch(e){case"keypress":if(As(a)===0)break t;case"keydown":case"keyup":B=bu;break;case"focusin":st="focus",B=ws;break;case"focusout":st="blur",B=ws;break;case"beforeblur":case"afterblur":B=ws;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":B=Po;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":B=gu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":B=m;break;case Gp:case Kp:case Qp:B=_u;break;case Yp:B=A;break;case"scroll":case"scrollend":B=xo;break;case"wheel":B=j;break;case"copy":case"cut":case"paste":B=vu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":B=zi;break;case"toggle":case"beforetoggle":B=At}var ft=(i&4)!==0,Wt=!ft&&(e==="scroll"||e==="scrollend"),x=ft?z!==null?z+"Capture":null:z;ft=[];for(var D=U,L;D!==null;){var G=D;if(L=G.stateNode,G=G.tag,G!==5&&G!==26&&G!==27||L===null||x===null||(G=Qn(D,x),G!=null&&ft.push(fl(D,G,L))),Wt)break;D=D.return}0<ft.length&&(z=new B(z,st,null,a,F),K.push({event:z,listeners:ft}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",B=e==="mouseout"||e==="pointerout",z&&a!==Mo&&(st=a.relatedTarget||a.fromElement)&&(hi(st)||st[ui]))break t;if((B||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,B?(st=a.relatedTarget||a.toElement,B=U,st=st?hi(st):null,st!==null&&(Wt=u(st),ft=st.tag,st!==Wt||ft!==5&&ft!==27&&ft!==6)&&(st=null)):(B=null,st=U),B!==st)){if(ft=Po,G="onMouseLeave",x="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(ft=zi,G="onPointerLeave",x="onPointerEnter",D="pointer"),Wt=B==null?z:mn(B),L=st==null?z:mn(st),z=new ft(G,D+"leave",B,a,F),z.target=Wt,z.relatedTarget=L,G=null,hi(F)===U&&(ft=new ft(x,D+"enter",st,a,F),ft.target=L,ft.relatedTarget=Wt,G=ft),Wt=G,B&&st)e:{for(ft=zA,x=B,D=st,L=0,G=x;G;G=ft(G))L++;G=0;for(var ct=D;ct;ct=ft(ct))G++;for(;0<L-G;)x=ft(x),L--;for(;0<G-L;)D=ft(D),G--;for(;L--;){if(x===D||D!==null&&x===D.alternate){ft=x;break e}x=ft(x),D=ft(D)}ft=null}else ft=null;B!==null&&y_(K,z,B,ft,!1),st!==null&&Wt!==null&&y_(K,Wt,st,ft,!0)}}t:{if(z=U?mn(U):window,B=z.nodeName&&z.nodeName.toLowerCase(),B==="select"||B==="input"&&z.type==="file")var jt=Vp;else if(Mp(z))if(xp)jt=$1;else{jt=Y1;var ot=Q1}else B=z.nodeName,!B||B.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?U&&ha(U.elementType)&&(jt=Vp):jt=X1;if(jt&&(jt=jt(e,U))){kp(K,jt,a,F);break t}ot&&ot(e,z,U),e==="focusout"&&U&&z.type==="number"&&U.memoizedProps.value!=null&&No(z,"number",z.value)}switch(ot=U?mn(U):window,e){case"focusin":(Mp(ot)||ot.contentEditable==="true")&&(va=ot,Kh=U,Bo=null);break;case"focusout":Bo=Kh=va=null;break;case"mousedown":Qh=!0;break;case"contextmenu":case"mouseup":case"dragend":Qh=!1,Hp(K,a,F);break;case"selectionchange":if(Z1)break;case"keydown":case"keyup":Hp(K,a,F)}var bt;if(Ht)t:{switch(e){case"compositionstart":var Mt="onCompositionStart";break t;case"compositionend":Mt="onCompositionEnd";break t;case"compositionupdate":Mt="onCompositionUpdate";break t}Mt=void 0}else _a?bs(e,a)&&(Mt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Mt="onCompositionStart");Mt&&(Ti&&a.locale!=="ko"&&(_a||Mt!=="onCompositionStart"?Mt==="onCompositionEnd"&&_a&&(bt=Vo()):(yi=F,ko="value"in yi?yi.value:yi.textContent,_a=!0)),ot=pc(U,Mt),0<ot.length&&(Mt=new Ei(Mt,e,null,a,F),K.push({event:Mt,listeners:ot}),bt?Mt.data=bt:(bt=ya(a),bt!==null&&(Mt.data=bt)))),(bt=Dn?H1(e,a):F1(e,a))&&(Mt=pc(U,"onBeforeInput"),0<Mt.length&&(ot=new Ei("onBeforeInput","beforeinput",null,a,F),K.push({event:ot,listeners:Mt}),ot.data=bt)),xA(K,e,U,a,F)}p_(K,i)})}function fl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function pc(e,i){for(var a=i+"Capture",o=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Qn(e,a),h!=null&&o.unshift(fl(e,h,d)),h=Qn(e,i),h!=null&&o.push(fl(e,h,d))),e.tag===3)return o;e=e.return}return[]}function zA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function y_(e,i,a,o,h){for(var d=i._reactName,_=[];a!==null&&a!==o;){var E=a,I=E.alternate,U=E.stateNode;if(E=E.tag,I!==null&&I===o)break;E!==5&&E!==26&&E!==27||U===null||(I=U,h?(U=Qn(a,d),U!=null&&_.unshift(fl(a,U,I))):h||(U=Qn(a,d),U!=null&&_.push(fl(a,U,I)))),a=a.return}_.length!==0&&e.push({event:i,listeners:_})}var jA=/\r\n?/g,BA=/\u0000|\uFFFD/g;function __(e){return(typeof e=="string"?e:""+e).replace(jA,`
`).replace(BA,"")}function v_(e,i){return i=__(i),__(e)===i}function Zt(e,i,a,o,h,d){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||an(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&an(e,""+o);break;case"className":pn(e,"class",o);break;case"tabIndex":pn(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":pn(e,a,o);break;case"style":Oo(e,o,d);break;case"data":if(i!=="object"){pn(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fa(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Zt(e,i,"name",h.name,h,null),Zt(e,i,"formEncType",h.formEncType,h,null),Zt(e,i,"formMethod",h.formMethod,h,null),Zt(e,i,"formTarget",h.formTarget,h,null)):(Zt(e,i,"encType",h.encType,h,null),Zt(e,i,"method",h.method,h,null),Zt(e,i,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=fa(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Kn);break;case"onScroll":o!=null&&Ct("scroll",e);break;case"onScrollEnd":o!=null&&Ct("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=fa(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ct("beforetoggle",e),Ct("toggle",e),ua(e,"popover",o);break;case"xlinkActuate":Ae(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ae(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ae(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ae(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ae(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ae(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ua(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=pu.get(a)||a,ua(e,a,o))}}function vd(e,i,a,o,h,d){switch(a){case"style":Oo(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?an(e,o):(typeof o=="number"||typeof o=="bigint")&&an(e,""+o);break;case"onScroll":o!=null&&Ct("scroll",e);break;case"onScrollEnd":o!=null&&Ct("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Kn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[Pe]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,h);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ua(e,a,o)}}}function Ge(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ct("error",e),Ct("load",e);var o=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Zt(e,i,d,_,a,null)}}h&&Zt(e,i,"srcSet",a.srcSet,a,null),o&&Zt(e,i,"src",a.src,a,null);return;case"input":Ct("invalid",e);var E=d=_=h=null,I=null,U=null;for(o in a)if(a.hasOwnProperty(o)){var F=a[o];if(F!=null)switch(o){case"name":h=F;break;case"type":_=F;break;case"checked":I=F;break;case"defaultChecked":U=F;break;case"value":d=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:Zt(e,i,o,F,a,null)}}fu(e,d,E,I,U,_,h,!1);return;case"select":Ct("invalid",e),o=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":_=E;break;case"multiple":o=E;default:Zt(e,i,h,E,a,null)}i=d,a=_,e.multiple=!!o,i!=null?pr(e,!!o,i,!1):a!=null&&pr(e,!!o,a,!0);return;case"textarea":Ct("invalid",e),d=h=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":o=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Zt(e,i,_,E,a,null)}gr(e,o,h,d);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Zt(e,i,I,o,a,null)}return;case"dialog":Ct("beforetoggle",e),Ct("toggle",e),Ct("cancel",e),Ct("close",e);break;case"iframe":case"object":Ct("load",e);break;case"video":case"audio":for(o=0;o<hl.length;o++)Ct(hl[o],e);break;case"image":Ct("error",e),Ct("load",e);break;case"details":Ct("toggle",e);break;case"embed":case"source":case"link":Ct("error",e),Ct("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in a)if(a.hasOwnProperty(U)&&(o=a[U],o!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Zt(e,i,U,o,a,null)}return;default:if(ha(i)){for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!==void 0&&vd(e,i,F,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&Zt(e,i,E,o,a,null))}function qA(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,E=null,I=null,U=null,F=null;for(B in a){var K=a[B];if(a.hasOwnProperty(B)&&K!=null)switch(B){case"checked":break;case"value":break;case"defaultValue":I=K;default:o.hasOwnProperty(B)||Zt(e,i,B,null,o,K)}}for(var z in o){var B=o[z];if(K=a[z],o.hasOwnProperty(z)&&(B!=null||K!=null))switch(z){case"type":d=B;break;case"name":h=B;break;case"checked":U=B;break;case"defaultChecked":F=B;break;case"value":_=B;break;case"defaultValue":E=B;break;case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(s(137,i));break;default:B!==K&&Zt(e,i,z,B,o,K)}}ca(e,_,E,I,U,F,d,h);return;case"select":B=_=E=z=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":B=I;default:o.hasOwnProperty(d)||Zt(e,i,d,null,o,I)}for(h in o)if(d=o[h],I=a[h],o.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":_=d;default:d!==I&&Zt(e,i,h,d,o,I)}i=E,a=_,o=B,z!=null?pr(e,!!a,z,!1):!!o!=!!a&&(i!=null?pr(e,!!a,i,!0):pr(e,!!a,a?[]:"",!1));return;case"textarea":B=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Zt(e,i,E,null,o,h)}for(_ in o)if(h=o[_],d=a[_],o.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":z=h;break;case"defaultValue":B=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Zt(e,i,_,h,o,d)}du(e,z,B);return;case"option":for(var st in a)if(z=a[st],a.hasOwnProperty(st)&&z!=null&&!o.hasOwnProperty(st))switch(st){case"selected":e.selected=!1;break;default:Zt(e,i,st,null,o,z)}for(I in o)if(z=o[I],B=a[I],o.hasOwnProperty(I)&&z!==B&&(z!=null||B!=null))switch(I){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Zt(e,i,I,z,o,B)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ft in a)z=a[ft],a.hasOwnProperty(ft)&&z!=null&&!o.hasOwnProperty(ft)&&Zt(e,i,ft,null,o,z);for(U in o)if(z=o[U],B=a[U],o.hasOwnProperty(U)&&z!==B&&(z!=null||B!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Zt(e,i,U,z,o,B)}return;default:if(ha(i)){for(var Wt in a)z=a[Wt],a.hasOwnProperty(Wt)&&z!==void 0&&!o.hasOwnProperty(Wt)&&vd(e,i,Wt,void 0,o,z);for(F in o)z=o[F],B=a[F],!o.hasOwnProperty(F)||z===B||z===void 0&&B===void 0||vd(e,i,F,z,o,B);return}}for(var x in a)z=a[x],a.hasOwnProperty(x)&&z!=null&&!o.hasOwnProperty(x)&&Zt(e,i,x,null,o,z);for(K in o)z=o[K],B=a[K],!o.hasOwnProperty(K)||z===B||z==null&&B==null||Zt(e,i,K,z,o,B)}function E_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function HA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var h=a[o],d=h.transferSize,_=h.initiatorType,E=h.duration;if(d&&E&&E_(_)){for(_=0,E=h.responseEnd,o+=1;o<a.length;o++){var I=a[o],U=I.startTime;if(U>E)break;var F=I.transferSize,K=I.initiatorType;F&&E_(K)&&(I=I.responseEnd,_+=F*(I<E?1:(E-U)/(I-U)))}if(--o,i+=8*(d+_)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ed=null,Td=null;function gc(e){return e.nodeType===9?e:e.ownerDocument}function T_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Ad(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Sd=null;function FA(){var e=window.event;return e&&e.type==="popstate"?e===Sd?!1:(Sd=e,!0):(Sd=null,!1)}var S_=typeof setTimeout=="function"?setTimeout:void 0,GA=typeof clearTimeout=="function"?clearTimeout:void 0,w_=typeof Promise=="function"?Promise:void 0,KA=typeof queueMicrotask=="function"?queueMicrotask:typeof w_<"u"?function(e){return w_.resolve(null).then(e).catch(QA)}:S_;function QA(e){setTimeout(function(){throw e})}function zr(e){return e==="head"}function b_(e,i){var a=i,o=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(h),Ka(i);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")dl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,dl(a);for(var d=a.firstChild;d;){var _=d.nextSibling,E=d.nodeName;d[ci]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=_}}else a==="body"&&dl(e.ownerDocument.body);a=h}while(a);Ka(i)}function I_(e,i){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function wd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wd(a),la(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function YA(e,i,a,o){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ci])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Ln(e.nextSibling),e===null)break}return null}function XA(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ln(e.nextSibling),e===null))return null;return e}function R_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ln(e.nextSibling),e===null))return null;return e}function bd(e){return e.data==="$?"||e.data==="$~"}function Id(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $A(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ln(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Rd=null;function C_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return Ln(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function N_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function D_(e,i,a){switch(i=gc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function dl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);la(e)}var Un=new Map,O_=new Set;function yc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var tr=et.d;et.d={f:JA,r:ZA,D:WA,C:tS,L:eS,m:nS,X:rS,S:iS,M:sS};function JA(){var e=tr.f(),i=lc();return e||i}function ZA(e){var i=Rn(e);i!==null&&i.tag===5&&i.type==="form"?Yg(i):tr.r(e)}var Ha=typeof document>"u"?null:document;function M_(e,i,a){var o=Ha;if(o&&typeof i=="string"&&i){var h=sn(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),O_.has(h)||(O_.add(h),e={rel:e,crossOrigin:a,href:i},o.querySelector(h)===null&&(i=o.createElement("link"),Ge(i,"link",e),Te(i),o.head.appendChild(i)))}}function WA(e){tr.D(e),M_("dns-prefetch",e,null)}function tS(e,i){tr.C(e,i),M_("preconnect",e,i)}function eS(e,i,a){tr.L(e,i,a);var o=Ha;if(o&&e&&i){var h='link[rel="preload"][as="'+sn(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+sn(a.imageSizes)+'"]')):h+='[href="'+sn(e)+'"]';var d=h;switch(i){case"style":d=Fa(e);break;case"script":d=Ga(e)}Un.has(d)||(e=S({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Un.set(d,e),o.querySelector(h)!==null||i==="style"&&o.querySelector(ml(d))||i==="script"&&o.querySelector(pl(d))||(i=o.createElement("link"),Ge(i,"link",e),Te(i),o.head.appendChild(i)))}}function nS(e,i){tr.m(e,i);var a=Ha;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+sn(o)+'"][href="'+sn(e)+'"]',d=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ga(e)}if(!Un.has(d)&&(e=S({rel:"modulepreload",href:e},i),Un.set(d,e),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pl(d)))return}o=a.createElement("link"),Ge(o,"link",e),Te(o),a.head.appendChild(o)}}}function iS(e,i,a){tr.S(e,i,a);var o=Ha;if(o&&e){var h=fi(o).hoistableStyles,d=Fa(e);i=i||"default";var _=h.get(d);if(!_){var E={loading:0,preload:null};if(_=o.querySelector(ml(d)))E.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Un.get(d))&&Cd(e,a);var I=_=o.createElement("link");Te(I),Ge(I,"link",e),I._p=new Promise(function(U,F){I.onload=U,I.onerror=F}),I.addEventListener("load",function(){E.loading|=1}),I.addEventListener("error",function(){E.loading|=2}),E.loading|=4,_c(_,i,o)}_={type:"stylesheet",instance:_,count:1,state:E},h.set(d,_)}}}function rS(e,i){tr.X(e,i);var a=Ha;if(a&&e){var o=fi(a).hoistableScripts,h=Ga(e),d=o.get(h);d||(d=a.querySelector(pl(h)),d||(e=S({src:e,async:!0},i),(i=Un.get(h))&&Nd(e,i),d=a.createElement("script"),Te(d),Ge(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function sS(e,i){tr.M(e,i);var a=Ha;if(a&&e){var o=fi(a).hoistableScripts,h=Ga(e),d=o.get(h);d||(d=a.querySelector(pl(h)),d||(e=S({src:e,async:!0,type:"module"},i),(i=Un.get(h))&&Nd(e,i),d=a.createElement("script"),Te(d),Ge(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function k_(e,i,a,o){var h=(h=wt.current)?yc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Fa(a.href),a=fi(h).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Fa(a.href);var d=fi(h).hoistableStyles,_=d.get(e);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,_),(d=h.querySelector(ml(e)))&&!d._p&&(_.instance=d,_.state.loading=5),Un.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Un.set(e,a),d||aS(h,e,a,_.state))),i&&o===null)throw Error(s(528,""));return _}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ga(a),a=fi(h).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Fa(e){return'href="'+sn(e)+'"'}function ml(e){return'link[rel="stylesheet"]['+e+"]"}function V_(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function aS(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Ge(i,"link",a),Te(i),e.head.appendChild(i))}function Ga(e){return'[src="'+sn(e)+'"]'}function pl(e){return"script[async]"+e}function x_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+sn(a.href)+'"]');if(o)return i.instance=o,Te(o),o;var h=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Te(o),Ge(o,"style",h),_c(o,a.precedence,e),i.instance=o;case"stylesheet":h=Fa(a.href);var d=e.querySelector(ml(h));if(d)return i.state.loading|=4,i.instance=d,Te(d),d;o=V_(a),(h=Un.get(h))&&Cd(o,h),d=(e.ownerDocument||e).createElement("link"),Te(d);var _=d;return _._p=new Promise(function(E,I){_.onload=E,_.onerror=I}),Ge(d,"link",o),i.state.loading|=4,_c(d,a.precedence,e),i.instance=d;case"script":return d=Ga(a.src),(h=e.querySelector(pl(d)))?(i.instance=h,Te(h),h):(o=a,(h=Un.get(d))&&(o=S({},a),Nd(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),Te(h),Ge(h,"link",o),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,_c(o,a.precedence,e));return i.instance}function _c(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,d=h,_=0;_<o.length;_++){var E=o[_];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function Cd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Nd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var vc=null;function P_(e,i,a){if(vc===null){var o=new Map,h=vc=new Map;h.set(a,o)}else h=vc,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[ci]||d[Ee]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(i)||"";_=e+_;var E=o.get(_);E?E.push(d):o.set(_,[d])}}return o}function L_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function oS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function U_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function lS(e,i,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=Fa(o.href),d=i.querySelector(ml(h));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Ec.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=d,Te(d);return}d=i.ownerDocument||i,o=V_(o),(h=Un.get(h))&&Cd(o,h),d=d.createElement("link"),Te(d);var _=d;_._p=new Promise(function(E,I){_.onload=E,_.onerror=I}),Ge(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ec.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var Dd=0;function uS(e,i){return e.stylesheets&&e.count===0&&Ac(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&Ac(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&Dd===0&&(Dd=62500*HA());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ac(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Dd?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(h)}}:null}function Ec(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ac(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Tc=null;function Ac(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Tc=new Map,i.forEach(cS,e),Tc=null,Ec.call(e))}function cS(e,i){if(!(i.state.loading&4)){var a=Tc.get(e);if(a)var o=a.get(null);else{a=new Map,Tc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}h=i.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||o,d===o&&a.set(null,h),a.set(_,h),this.count++,o=Ec.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var gl={$$typeof:pt,Provider:null,Consumer:null,_currentValue:at,_currentValue2:at,_threadCount:0};function hS(e,i,a,o,h,d,_,E,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=li(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=li(0),this.hiddenUpdates=li(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function z_(e,i,a,o,h,d,_,E,I,U,F,K){return e=new hS(e,i,a,_,I,U,F,K,E),i=1,d===!0&&(i|=24),d=yn(3,null,null,i),e.current=d,d.stateNode=e,i=uf(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:i},df(d),e}function j_(e){return e?(e=Aa,e):Aa}function B_(e,i,a,o,h,d){h=j_(h),o.context===null?o.context=h:o.pendingContext=h,o=Cr(i),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Nr(e,o,i),a!==null&&(hn(a,e,i),Yo(a,e,i))}function q_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Od(e,i){q_(e,i),(e=e.alternate)&&q_(e,i)}function H_(e){if(e.tag===13||e.tag===31){var i=Cs(e,67108864);i!==null&&hn(i,e,67108864),Od(e,67108864)}}function F_(e){if(e.tag===13||e.tag===31){var i=An();i=gs(i);var a=Cs(e,i);a!==null&&hn(a,e,i),Od(e,i)}}var Sc=!0;function fS(e,i,a,o){var h=q.T;q.T=null;var d=et.p;try{et.p=2,Md(e,i,a,o)}finally{et.p=d,q.T=h}}function dS(e,i,a,o){var h=q.T;q.T=null;var d=et.p;try{et.p=8,Md(e,i,a,o)}finally{et.p=d,q.T=h}}function Md(e,i,a,o){if(Sc){var h=kd(o);if(h===null)_d(e,i,o,wc,a),K_(e,o);else if(pS(h,e,i,a,o))o.stopPropagation();else if(K_(e,o),i&4&&-1<mS.indexOf(e)){for(;h!==null;){var d=Rn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=ai(d.pendingLanes);if(_!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var I=1<<31-de(_);E.entanglements[1]|=I,_&=~I}bi(d),(Ft&6)===0&&(ac=tn()+500,cl(0))}}break;case 31:case 13:E=Cs(d,2),E!==null&&hn(E,d,2),lc(),Od(d,2)}if(d=kd(o),d===null&&_d(e,i,o,wc,a),d===h)break;h=d}h!==null&&o.stopPropagation()}else _d(e,i,o,null,a)}}function kd(e){return e=Cn(e),Vd(e)}var wc=null;function Vd(e){if(wc=null,e=hi(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===31){if(e=p(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return wc=e,null}function G_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fs()){case vo:return 2;case Eo:return 8;case dr:case zh:return 32;case nu:return 268435456;default:return 32}default:return 32}}var xd=!1,jr=null,Br=null,qr=null,yl=new Map,_l=new Map,Hr=[],mS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K_(e,i){switch(e){case"focusin":case"focusout":jr=null;break;case"dragenter":case"dragleave":Br=null;break;case"mouseover":case"mouseout":qr=null;break;case"pointerover":case"pointerout":yl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(i.pointerId)}}function vl(e,i,a,o,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Rn(i),i!==null&&H_(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function pS(e,i,a,o,h){switch(i){case"focusin":return jr=vl(jr,e,i,a,o,h),!0;case"dragenter":return Br=vl(Br,e,i,a,o,h),!0;case"mouseover":return qr=vl(qr,e,i,a,o,h),!0;case"pointerover":var d=h.pointerId;return yl.set(d,vl(yl.get(d)||null,e,i,a,o,h)),!0;case"gotpointercapture":return d=h.pointerId,_l.set(d,vl(_l.get(d)||null,e,i,a,o,h)),!0}return!1}function Q_(e){var i=hi(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Fn(e.priority,function(){F_(a)});return}}else if(i===31){if(i=p(a),i!==null){e.blockedOn=i,Fn(e.priority,function(){F_(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=kd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Mo=o,a.target.dispatchEvent(o),Mo=null}else return i=Rn(a),i!==null&&H_(i),e.blockedOn=a,!1;i.shift()}return!0}function Y_(e,i,a){bc(e)&&a.delete(i)}function gS(){xd=!1,jr!==null&&bc(jr)&&(jr=null),Br!==null&&bc(Br)&&(Br=null),qr!==null&&bc(qr)&&(qr=null),yl.forEach(Y_),_l.forEach(Y_)}function Ic(e,i){e.blockedOn===i&&(e.blockedOn=null,xd||(xd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,gS)))}var Rc=null;function X_(e){Rc!==e&&(Rc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Rc===e&&(Rc=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],h=e[i+2];if(typeof o!="function"){if(Vd(o||a)===null)continue;break}var d=Rn(a);d!==null&&(e.splice(i,3),i-=3,kf(d,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function Ka(e){function i(I){return Ic(I,e)}jr!==null&&Ic(jr,e),Br!==null&&Ic(Br,e),qr!==null&&Ic(qr,e),yl.forEach(i),_l.forEach(i);for(var a=0;a<Hr.length;a++){var o=Hr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Hr.length&&(a=Hr[0],a.blockedOn===null);)Q_(a),a.blockedOn===null&&Hr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],d=a[o+1],_=h[Pe]||null;if(typeof d=="function")_||X_(a);else if(_){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[Pe]||null)E=_.formAction;else if(Vd(h)!==null)continue}else E=_.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),X_(a)}}}function $_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(_){return h=_})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Pd(e){this._internalRoot=e}Cc.prototype.render=Pd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=An();B_(a,o,e,i,null,null)},Cc.prototype.unmount=Pd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;B_(e.current,2,null,e,null,null),lc(),i[ui]=null}};function Cc(e){this._internalRoot=e}Cc.prototype.unstable_scheduleHydration=function(e){if(e){var i=lu();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Hr.length&&i!==0&&i<Hr[a].priority;a++);Hr.splice(a,0,e),a===0&&Q_(e)}};var J_=t.version;if(J_!=="19.2.0")throw Error(s(527,J_,"19.2.0"));et.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=y(i),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var yS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:q,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nc.isDisabled&&Nc.supportsFiber)try{qn=Nc.inject(yS),je=Nc}catch{}}return Tl.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",h=ry,d=sy,_=ay;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError)),i=z_(e,1,!1,null,null,a,o,null,h,d,_,$_),e[ui]=i.current,yd(e),new Pd(i)},Tl.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,h="",d=ry,_=sy,E=ay,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),i=z_(e,1,!0,i,a??null,o,h,I,d,_,E,$_),i.context=j_(null),a=i.current,o=An(),o=gs(o),h=Cr(o),h.callback=null,Nr(a,h,o),a=o,i.current.lanes=a,ms(i,a),bi(i),e[ui]=i.current,yd(e),new Cc(i)},Tl.version="19.2.0",Tl}var ov;function CS(){if(ov)return zd.exports;ov=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),zd.exports=RS(),zd.exports}var NS=CS();const DS=J0(NS),OS="modulepreload",MS=function(r){return"/"+r},lv={},lr=function(t,n,s){let l=Promise.resolve();if(n&&n.length>0){let f=function(y){return Promise.all(y.map(T=>Promise.resolve(T).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),g=(p==null?void 0:p.nonce)||(p==null?void 0:p.getAttribute("nonce"));l=f(n.map(y=>{if(y=MS(y),y in lv)return;lv[y]=!0;const T=y.endsWith(".css"),S=T?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${y}"]${S}`))return;const N=document.createElement("link");if(N.rel=T?"stylesheet":OS,T||(N.as="script"),N.crossOrigin="",N.href=y,g&&N.setAttribute("nonce",g),document.head.appendChild(N),T)return new Promise((H,J)=>{N.addEventListener("load",H),N.addEventListener("error",()=>J(new Error(`Unable to preload CSS for ${y}`)))})}))}function u(f){const p=new Event("vite:preloadError",{cancelable:!0});if(p.payload=f,window.dispatchEvent(p),!p.defaultPrevented)throw f}return l.then(f=>{for(const p of f||[])p.status==="rejected"&&u(p.reason);return t().catch(u)})};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kS=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),VS=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase()),uv=r=>{const t=VS(r);return t.charAt(0).toUpperCase()+t.slice(1)},Z0=(...r)=>r.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim(),xS=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var PS={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LS=Gt.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:f,...p},g)=>Gt.createElement("svg",{ref:g,...PS,width:t,height:t,stroke:r,strokeWidth:s?Number(n)*24/Number(t):n,className:Z0("lucide",l),...!u&&!xS(p)&&{"aria-hidden":"true"},...p},[...f.map(([y,T])=>Gt.createElement(y,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=(r,t)=>{const n=Gt.forwardRef(({className:s,...l},u)=>Gt.createElement(LS,{ref:u,iconNode:t,className:Z0(`lucide-${kS(uv(r))}`,`lucide-${r}`,s),...l}));return n.displayName=uv(r),n};/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const US=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],zS=Tt("activity",US);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jS=[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]],BS=Tt("arrow-right-left",jS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qS=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],HS=Tt("bot",qS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FS=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],GS=Tt("calculator",FS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KS=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],QS=Tt("calendar",KS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YS=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V9",key:"uvy0l4"}],["path",{d:"M19 21V3",key:"11j9sm"}]],XS=Tt("chart-no-axes-column-increasing",YS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $S=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]],JS=Tt("clipboard-check",$S);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZS=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],WS=Tt("code-xml",ZS);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],ew=Tt("dollar-sign",tw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],iw=Tt("eye",nw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]],sw=Tt("file-braces",rw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aw=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}]],ow=Tt("file-code",aw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]],uw=Tt("file-image",lw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cw=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],cv=Tt("file-text",cw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"14sh0y"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",key:"1970lx"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1",key:"l4dndm"}]],fw=Tt("files",hw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dw=[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]],mw=Tt("hash",dw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]],gw=Tt("hexagon",pw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],_w=Tt("image",yw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"m22 11-1.296-1.296a2.4 2.4 0 0 0-3.408 0L11 16",key:"9kzy35"}],["path",{d:"M4 8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2",key:"1t0f0t"}],["circle",{cx:"13",cy:"7",r:"1",fill:"currentColor",key:"1obus6"}],["rect",{x:"8",y:"2",width:"14",height:"14",rx:"2",key:"1gvhby"}]],Ew=Tt("images",vw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],Aw=Tt("languages",Tw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],ww=Tt("layers",Sw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]],Iw=Tt("link-2",bw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Cw=Tt("link",Rw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]],Dw=Tt("list",Nw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ow=[["path",{d:"m10 17 5-5-5-5",key:"1bsop3"}],["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}]],hv=Tt("log-in",Ow);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],kw=Tt("lock",Mw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],fv=Tt("log-out",Vw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xw=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],Pw=Tt("menu",xw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lw=[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]],Uw=Tt("minimize-2",Lw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],dv=Tt("moon",zw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]],Bw=Tt("pen-tool",jw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]],Hw=Tt("pencil",qw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]],Gw=Tt("percent",Fw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],Qw=Tt("qr-code",Kw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yw=[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]],Xw=Tt("regex",Yw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $w=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Jw=Tt("scale",$w);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zw=[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]],Ww=Tt("scissors",Zw);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tb=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],eb=Tt("search",tb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nb=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],ib=Tt("shield-check",nb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rb=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],sb=Tt("shuffle",rb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ab=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],ob=Tt("square-pen",ab);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lb=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],mv=Tt("sun",lb);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ub=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],pv=Tt("user-plus",ub);/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cb=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],hb=Tt("zap",cb),Hd=[{id:"ai-image-gen",name:"AI Image Generator",description:"Unleash your creativity with our AI Image Generator. Simply describe the image you want, and our advanced AI will create stunning, unique visuals from your text. Perfect for artists, marketers, and anyone in need of high-quality, custom images.",categoryId:"ai",icon:_w,isPopular:!0,actionType:"ai-image",placeholder:"A futuristic city with flying cars at sunset, cyberpunk style..."},{id:"logo-generator",name:"AI Logo Generator",description:"Create a professional logo for your business in seconds. Our AI Logo Generator designs unique and memorable logos tailored to your brand's identity. No design skills needed—just tell us your vision.",categoryId:"ai",icon:gw,isNew:!0,actionType:"ai-image"},{id:"ai-image-editor",name:"AI Image Editor",description:"Transform your photos with the power of AI. Our AI Image Editor allows you to effortlessly add, remove, or replace objects in your images. It's like having a professional photo editor in your browser.",categoryId:"ai",icon:ww,isNew:!0,actionType:"ai-image-edit",placeholder:"Describe how to edit the image..."},{id:"ai-hairstyle",name:"AI Hairstyle Changer",description:"Find your perfect look with our AI Hairstyle Changer. Experiment with different hairstyles and colors in real-time. Upload your photo and discover a new you, instantly and risk-free.",categoryId:"ai",icon:Ww,isNew:!0,actionType:"ai-hairstyle"},{id:"ai-summarizer",name:"AI Summarizer",description:"Save time and get the key insights, fast. Our AI Summarizer condenses long articles, reports, and documents into concise, easy-to-read summaries. Ideal for students, researchers, and busy professionals.",categoryId:"ai",icon:Dw,isPopular:!0,actionType:"ai-text",systemPrompt:"Summarize the following text concisely. Capture the main points using bullet points where appropriate.",placeholder:"Paste the long text you want to summarize here..."},{id:"ai-grammar",name:"Grammar Fixer",description:"Write with confidence. Our Grammar Fixer instantly corrects spelling mistakes, grammatical errors, and punctuation issues in your text, helping you communicate clearly and professionally.",categoryId:"ai",icon:ib,actionType:"ai-text",systemPrompt:"Correct the grammar and spelling of the following text. Do not change the tone, just fix errors.",placeholder:"Paste text with errors here..."},{id:"ai-translator",name:"Universal Translator",description:"Break down language barriers with our Universal Translator. Translate text between dozens of major languages accurately and instantly. Perfect for work, travel, and communication.",categoryId:"ai",icon:Aw,actionType:"ai-text",systemPrompt:"Detect the language and translate the following text into English, Spanish, French, and German.",placeholder:"Enter text to translate..."},{id:"pdf-editor",name:"PDF Editor",description:"Take full control of your PDF documents. Our online PDF Editor lets you edit text, add images and signatures, and annotate your files directly in your browser. Simple, secure, and free.",categoryId:"pdf",icon:ob,isNew:!0,isPopular:!0,actionType:"pdf-editor"},{id:"pdf-merger",name:"Merge PDF",description:"Combine multiple PDF files into one organized document. Our PDF Merger tool is fast, easy to use, and maintains the quality of your original files. Simplify your document management.",categoryId:"pdf",icon:fw,isNew:!0,actionType:"pdf-merge"},{id:"pdf-compress",name:"Compress PDF",description:"Reduce the size of your PDF files without losing quality. Our PDF Compressor makes it easy to share and store your documents by optimizing them for the smallest possible file size.",categoryId:"pdf",icon:Uw,isPopular:!0,actionType:"pdf-compress"},{id:"pdf-to-word",name:"PDF to Word",description:"Convert your PDF documents into editable Microsoft Word files. Our PDF to Word converter accurately preserves the layout, formatting, and text of your original document.",categoryId:"pdf",icon:cv,isPopular:!0,isNew:!0,actionType:"pdf-to-word"},{id:"pdf-to-image",name:"PDF to Image",description:"Easily convert each page of a PDF document into high-quality JPG or PNG images. Our PDF to Image tool is perfect for sharing, presentations, or web use.",categoryId:"pdf",icon:Ew,isNew:!0,actionType:"pdf-to-image"},{id:"image-to-pdf",name:"Image to PDF",description:"Combine multiple JPG, PNG, or other image formats into a single, professional PDF document. Our Image to PDF converter is perfect for creating portfolios, reports, and archives.",categoryId:"pdf",icon:uw,isPopular:!0,actionType:"image-to-pdf"},{id:"word-counter",name:"Word Counter",description:"Instantly count the number of words, characters, and sentences in your text. Our Word Counter is an essential tool for writers, students, and anyone working with word limits.",categoryId:"text",icon:mw,actionType:"utility-client",placeholder:"Start typing to count..."},{id:"lorem-ipsum",name:"Lorem Ipsum Gen",description:"Generate placeholder text for your designs and layouts. Our Lorem Ipsum Generator creates customizable dummy text to help you visualize your projects before the final content is ready.",categoryId:"text",icon:cv,actionType:"utility-client"},{id:"code-formatter",name:"Code Formatter",description:"Clean up your code with a single click. Our Code Formatter automatically beautifies your HTML, CSS, JavaScript, and other code snippets, making them readable and easy to maintain.",categoryId:"dev",icon:WS,actionType:"ai-text",systemPrompt:"Format the following code to be clean, readable, and follow standard conventions. Detect the language automatically.",placeholder:"Paste messy code here..."},{id:"regex-tester",name:"Regex Tester",description:"Test and debug your regular expressions in real-time. Our Regex Tester provides instant feedback and visual highlighting, helping you build and validate complex patterns with ease.",categoryId:"dev",icon:Xw,isNew:!0,actionType:"regex-tester",placeholder:"Input text to test regex against..."},{id:"json-validator",name:"JSON Validator",description:"Validate and format your JSON data instantly. Our JSON Validator helps you identify syntax errors and beautify your code, ensuring your JSON is well-formed and easy to read.",categoryId:"dev",icon:sw,actionType:"ai-text",systemPrompt:"Validate and format the following JSON. If there is an error, explain it.",placeholder:"{'key': 'value'}"},{id:"meta-tag-gen",name:"Meta Tag Generator",description:"Improve your website's SEO with our Meta Tag Generator. Create optimized meta titles, descriptions, and keywords to help search engines understand and rank your content.",categoryId:"dev",icon:Cw,actionType:"ai-text",systemPrompt:"Generate HTML meta tags (title, description, keywords, og:tags) for a website described as follows:",placeholder:"Describe your website..."},{id:"citation-gen",name:"Citation Generator",description:"Create accurate citations for your research papers and essays. Our Citation Generator supports APA, MLA, Chicago, and other popular formats, making academic writing easier.",categoryId:"student",icon:Bw,actionType:"ai-text",systemPrompt:"Generate citations in APA, MLA, and Chicago formats for the following source details:",placeholder:"Book title, Author, Year, Publisher..."},{id:"flashcard-maker",name:"Flashcard Maker",description:"Boost your learning with custom digital flashcards. Our Flashcard Maker helps you create and study from your notes, making it easy to memorize key concepts and prepare for exams.",categoryId:"student",icon:hb,actionType:"ai-text",systemPrompt:"Create a list of 5 Question/Answer pairs based on the following notes, suitable for flashcards.",placeholder:"Paste your study notes here..."},{id:"math-solver",name:"Math Problem Solver",description:"Get step-by-step solutions to your math problems. Our Math Problem Solver handles everything from basic algebra to complex calculus, helping you understand the process behind the answers.",categoryId:"student",icon:GS,actionType:"ai-text",systemPrompt:"Solve the following math problem step-by-step. Explain the logic.",placeholder:"e.g. Integral of x^2..."},{id:"plagiarism-checker",name:"Plagiarism Checker (Basic)",description:"Ensure your work is original. Our basic Plagiarism Checker compares two texts to help you identify any overlapping content and avoid unintentional duplication.",categoryId:"student",icon:JS,isNew:!0,actionType:"utility-client"},{id:"seo-content-analyzer",name:"SEO Content Analyzer",description:"Optimize your content for search engines. Our SEO Content Analyzer evaluates your text for keyword density, readability, and other critical factors to improve your search rankings.",categoryId:"seo",icon:XS,isNew:!0,actionType:"ai-text"},{id:"backlink-checker",name:"Backlink Quality Checker",description:"Evaluate the strength of your backlink profile. Our Backlink Quality Checker analyzes the authority and relevance of your backlinks to help you build a healthier SEO strategy.",categoryId:"seo",icon:Iw,isNew:!0,actionType:"ai-text"},{id:"serp-preview",name:"SERP Preview Tool",description:"See how your website appears on Google. Our SERP Preview Tool lets you visualize and optimize your title tags and meta descriptions to improve click-through rates.",categoryId:"seo",icon:iw,isPopular:!0,actionType:"utility-client"},{id:"sitemap-generator",name:"XML Sitemap Generator",description:"Create a search-engine-friendly XML sitemap for your website. Our Sitemap Generator helps Google and other search engines crawl and index your pages more effectively.",categoryId:"seo",icon:ow,isNew:!0,actionType:"utility-client"},{id:"robots-txt-gen",name:"Robots.txt Generator",description:"Control how search engines crawl your site. Our Robots.txt Generator helps you create a properly formatted file to guide search engine bots and protect sensitive areas.",categoryId:"seo",icon:HS,isNew:!0,actionType:"utility-client"},{id:"keyword-research",name:"Keyword Research",description:"Discover high-traffic keywords for your niche. Our Keyword Research tool helps you find valuable long-tail keywords to attract more organic traffic and grow your audience.",categoryId:"seo",icon:eb,actionType:"ai-text",systemPrompt:"Suggest 10 high-traffic, low-competition SEO keywords related to the following topic. Include search intent.",placeholder:"Enter a niche (e.g., 'Vegan Dog Food')..."},{id:"article-idea-gen",name:"Blog Post Ideas",description:"Never run out of content ideas again. Our Blog Post Ideas generator provides fresh, engaging, and SEO-friendly topics to keep your blog active and your readers interested.",categoryId:"seo",icon:Hw,isPopular:!0,actionType:"ai-text",systemPrompt:"List 10 catchy, SEO-friendly blog post titles for the following topic:",placeholder:"Enter topic..."},{id:"unit-converter",name:"Advanced Unit Converter",description:"Convert between thousands of different units effortlessly. Our Advanced Unit Converter covers length, weight, volume, temperature, and much more, with instant and accurate results.",categoryId:"utility",icon:Jw,isNew:!0,actionType:"utility-client"},{id:"file-converter",name:"File Converter (Local)",description:"Convert your files securely on your own device. Our local File Converter supports various image, audio, and text formats without uploading anything to a server. Fast, private, and free.",categoryId:"utility",icon:BS,isNew:!0,actionType:"utility-client"},{id:"age-calculator",name:"Age Calculator",description:"Calculate your age down to the day. Our Age Calculator provides your exact age, your next birthday countdown, and fun facts about your life in years, months, and days.",categoryId:"utility",icon:QS,isNew:!0,actionType:"utility-client"},{id:"random-number-gen",name:"Random Number Generator",description:"Generate random numbers for any purpose. Our Random Number Generator allows you to create customizable sequences with specific ranges, quantities, and uniqueness.",categoryId:"utility",icon:sb,isNew:!0,actionType:"utility-client"},{id:"percentage-calculator",name:"Percentage Calculator",description:"Solve percentage problems in seconds. Our Percentage Calculator makes it easy to find percentages, calculate increases and decreases, and handle other common percentage tasks.",categoryId:"utility",icon:Gw,isNew:!0,actionType:"utility-client"},{id:"bmi-calculator",name:"BMI Calculator",description:"Check your Body Mass Index (BMI) with our simple calculator. Our BMI Calculator helps you understand where you stand on the health spectrum and provides insights based on your results.",categoryId:"utility",icon:zS,isNew:!0,actionType:"utility-client"},{id:"password-gen",name:"Password Generator",description:"Create strong, unique, and secure passwords with a single click. Our Password Generator helps you protect your online accounts with randomized passwords that are difficult to crack.",categoryId:"utility",icon:kw,actionType:"utility-client"},{id:"qr-generator",name:"QR Code Generator",description:"Create custom QR codes for your website, contact information, or any other text. Our QR Code Generator is fast, free, and allows you to generate codes instantly for print or web.",categoryId:"utility",icon:Qw,actionType:"utility-client",placeholder:"https://dicetools.online"}],fb=({darkMode:r,setDarkMode:t,currentTool:n,mobileMenuOpen:s,setMobileMenuOpen:l,onNavigateHome:u,onNavigateToSignIn:f,onNavigateToSignUp:p,onNavigateToPricing:g,isAuthenticated:y,onSignOut:T})=>X.jsx(X.Fragment,{children:X.jsxs("nav",{className:"sticky top-0 z-40 w-full glass border-b border-slate-200/50 dark:border-slate-800/50 transition-all",children:[X.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:X.jsxs("div",{className:"flex justify-between h-16 items-center",children:[X.jsxs("div",{className:"flex items-center gap-2 cursor-pointer",onClick:u,children:[X.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary-500/30",children:"D"}),X.jsx("span",{className:"text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300",children:"Dicetools"})]}),X.jsxs("div",{className:"hidden md:flex items-center gap-4",children:[!n&&X.jsxs("div",{className:"flex items-center gap-8",children:[X.jsx("a",{href:"#categories",className:"text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-white transition-colors",children:"Categories"}),X.jsx("a",{href:"#features",className:"text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-white transition-colors",children:"Featured"}),X.jsx("button",{onClick:g,className:"text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-white transition-colors",children:"Pricing"}),X.jsx("a",{href:"#faq",className:"text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-white transition-colors",children:"FAQ"})]}),X.jsx("div",{className:"flex items-center gap-2",children:y?X.jsxs("button",{onClick:T,className:"flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-white transition-colors",children:[X.jsx(fv,{className:"w-4 h-4"}),X.jsx("span",{children:"Sign Out"})]}):X.jsxs(X.Fragment,{children:[X.jsxs("button",{onClick:f,className:"flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-white transition-colors",children:[X.jsx(hv,{className:"w-4 h-4"}),X.jsx("span",{children:"Sign In"})]}),X.jsxs("button",{onClick:p,className:"px-4 py-2 text-sm font-bold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2",children:[X.jsx(pv,{className:"w-4 h-4"}),X.jsx("span",{children:"Sign Up"})]})]})}),X.jsx("button",{onClick:()=>t(!r),className:"p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors","aria-label":"Toggle Theme",children:r?X.jsx(mv,{className:"w-5 h-5"}):X.jsx(dv,{className:"w-5 h-5"})})]}),X.jsxs("div",{className:"md:hidden flex items-center gap-2",children:[X.jsx("button",{onClick:()=>t(!r),className:"p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400",children:r?X.jsx(mv,{className:"w-5 h-5"}):X.jsx(dv,{className:"w-5 h-5"})}),X.jsx("button",{onClick:()=>l(!s),className:"text-slate-600 dark:text-slate-300",children:X.jsx(Pw,{className:"w-6 h-6"})})]})]})}),s&&X.jsxs("div",{className:"md:hidden glass border-t border-slate-200 dark:border-slate-800 p-4 space-y-4",children:[!n&&X.jsxs(X.Fragment,{children:[X.jsx("a",{href:"#categories",onClick:()=>l(!1),className:"block text-slate-600 dark:text-slate-300 font-medium",children:"Categories"}),X.jsx("a",{href:"#features",onClick:()=>l(!1),className:"block text-slate-600 dark:text-slate-300 font-medium",children:"All Tools"}),X.jsxs("button",{onClick:()=>{g(),l(!1)},className:"w-full text-left flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium",children:[X.jsx(ew,{className:"w-4 h-4"}),"Pricing"]}),X.jsx("a",{href:"#faq",onClick:()=>l(!1),className:"block text-slate-600 dark:text-slate-300 font-medium",children:"FAQ"}),X.jsx("hr",{className:"border-slate-200 dark:border-slate-800"})]}),y?X.jsxs("button",{onClick:()=>{T(),l(!1)},className:"w-full text-left flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium",children:[X.jsx(fv,{className:"w-4 h-4"}),"Sign Out"]}):X.jsxs(X.Fragment,{children:[X.jsxs("button",{onClick:()=>{f(),l(!1)},className:"w-full text-left flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium",children:[X.jsx(hv,{className:"w-4 h-4"}),"Sign In"]}),X.jsxs("button",{onClick:()=>{p(),l(!1)},className:"w-full text-left flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium",children:[X.jsx(pv,{className:"w-4 h-4"}),"Sign Up"]})]})]})]})}),db=({onNavigateHome:r,onNavigateToPrivacy:t,onNavigateToContact:n,onNavigateToCookiePolicy:s})=>X.jsx("footer",{className:"bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8",children:X.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[X.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-12 mb-12",children:[X.jsxs("div",{className:"col-span-1 md:col-span-1",children:[X.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[X.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-600 flex items-center justify-center text-white font-bold",children:"D"}),X.jsx("span",{className:"text-xl font-bold text-slate-900 dark:text-white",children:"Dicetools"})]}),X.jsx("p",{className:"text-sm text-slate-500 dark:text-slate-400",children:"The ultimate toolkit for students, developers, and creators."})]}),X.jsxs("div",{children:[X.jsx("h4",{className:"font-bold text-slate-900 dark:text-white mb-4",children:"Quick Links"}),X.jsxs("ul",{className:"space-y-2 text-sm text-slate-500 dark:text-slate-400",children:[X.jsx("li",{children:X.jsx("button",{onClick:r,className:"hover:text-primary-600 text-left",children:"Home"})}),X.jsx("li",{children:X.jsx("a",{href:"#categories",className:"hover:text-primary-600",children:"Categories"})}),X.jsx("li",{children:X.jsx("a",{href:"#features",className:"hover:text-primary-600",children:"Tools"})})]})]}),X.jsxs("div",{children:[X.jsx("h4",{className:"font-bold text-slate-900 dark:text-white mb-4",children:"Legal"}),X.jsxs("ul",{className:"space-y-2 text-sm text-slate-500 dark:text-slate-400",children:[X.jsx("li",{children:X.jsx("button",{onClick:t,className:"hover:text-primary-600",children:"Privacy Policy"})}),X.jsx("li",{children:X.jsx("button",{onClick:s,className:"hover:text-primary-600",children:"Cookie Policy"})})]})]}),X.jsxs("div",{children:[X.jsx("h4",{className:"font-bold text-slate-900 dark:text-white mb-4",children:"Connect"}),X.jsx("ul",{className:"space-y-2 text-sm text-slate-500 dark:text-slate-400",children:X.jsx("li",{children:X.jsx("button",{onClick:n,className:"hover:text-primary-600",children:"Contact"})})})]})]}),X.jsx("div",{className:"border-t border-slate-100 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-slate-400",children:X.jsxs("p",{children:["© ",new Date().getFullYear()," Dicetools.online. All rights reserved."]})})]})}),mb=()=>{};var gv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?t[n++]=l:l<2048?(t[n++]=l>>6|192,t[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=l>>18|240,t[n++]=l>>12&63|128,t[n++]=l>>6&63|128,t[n++]=l&63|128):(t[n++]=l>>12|224,t[n++]=l>>6&63|128,t[n++]=l&63|128)}return t},pb=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)t[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];t[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],f=r[n++],p=r[n++],g=((l&7)<<18|(u&63)<<12|(f&63)<<6|p&63)-65536;t[s++]=String.fromCharCode(55296+(g>>10)),t[s++]=String.fromCharCode(56320+(g&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|f&63)}}return t.join("")},tE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],f=l+1<r.length,p=f?r[l+1]:0,g=l+2<r.length,y=g?r[l+2]:0,T=u>>2,S=(u&3)<<4|p>>4;let N=(p&15)<<2|y>>6,H=y&63;g||(H=64,f||(N=64)),s.push(n[T],n[S],n[N],n[H])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(W0(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):pb(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],p=l<r.length?n[r.charAt(l)]:0;++l;const y=l<r.length?n[r.charAt(l)]:64;++l;const S=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||p==null||y==null||S==null)throw new gb;const N=u<<2|p>>4;if(s.push(N),y!==64){const H=p<<4&240|y>>2;if(s.push(H),S!==64){const J=y<<6&192|S;s.push(J)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class gb extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const yb=function(r){const t=W0(r);return tE.encodeByteArray(t,!0)},Kc=function(r){return yb(r).replace(/\./g,"")},eE=function(r){try{return tE.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vb=()=>_b().__FIREBASE_DEFAULTS__,Eb=()=>{if(typeof process>"u"||typeof gv>"u")return;const r=gv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Tb=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&eE(r[1]);return t&&JSON.parse(t)},ph=()=>{try{return mb()||vb()||Eb()||Tb()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},nE=r=>{var t,n;return(n=(t=ph())==null?void 0:t.emulatorHosts)==null?void 0:n[r]},Ab=r=>{const t=nE(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},iE=()=>{var r;return(r=ph())==null?void 0:r.config},rE=r=>{var t;return(t=ph())==null?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lo(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function sE(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[Kc(JSON.stringify(n)),Kc(JSON.stringify(f)),""].join(".")}const Cl={};function bb(){const r={prod:[],emulator:[]};for(const t of Object.keys(Cl))Cl[t]?r.emulator.push(t):r.prod.push(t);return r}function Ib(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let yv=!1;function aE(r,t){if(typeof window>"u"||typeof document>"u"||!lo(window.location.host)||Cl[r]===t||Cl[r]||yv)return;Cl[r]=t;function n(N){return`__firebase__banner__${N}`}const s="__firebase__banner",u=bb().prod.length>0;function f(){const N=document.getElementById(s);N&&N.remove()}function p(N){N.style.display="flex",N.style.background="#7faaf0",N.style.position="fixed",N.style.bottom="5px",N.style.left="5px",N.style.padding=".5em",N.style.borderRadius="5px",N.style.alignItems="center"}function g(N,H){N.setAttribute("width","24"),N.setAttribute("id",H),N.setAttribute("height","24"),N.setAttribute("viewBox","0 0 24 24"),N.setAttribute("fill","none"),N.style.marginLeft="-6px"}function y(){const N=document.createElement("span");return N.style.cursor="pointer",N.style.marginLeft="16px",N.style.fontSize="24px",N.innerHTML=" &times;",N.onclick=()=>{yv=!0,f()},N}function T(N,H){N.setAttribute("id",H),N.innerText="Learn more",N.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",N.setAttribute("target","__blank"),N.style.paddingLeft="5px",N.style.textDecoration="underline"}function S(){const N=Ib(s),H=n("text"),J=document.getElementById(H)||document.createElement("span"),W=n("learnmore"),Z=document.getElementById(W)||document.createElement("a"),ut=n("preprendIcon"),gt=document.getElementById(ut)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(N.created){const pt=N.element;p(pt),T(Z,W);const Pt=y();g(gt,ut),pt.append(gt,J,Z,Pt),document.body.appendChild(pt)}u?(J.innerText="Preview backend disconnected.",gt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(gt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,J.innerText="Preview backend running in this workspace."),J.setAttribute("id",H)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rb(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function Cb(){var t;const r=(t=ph())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Nb(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mm(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Db(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ob(){const r=We();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function Mb(){return!Cb()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function km(){try{return typeof indexedDB=="object"}catch{return!1}}function Vm(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;t(((u=l.error)==null?void 0:u.message)||"")}}catch(n){t(n)}})}function oE(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb="FirebaseError";class ii extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=kb,Object.setPrototypeOf(this,ii.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ws.prototype.create)}}class Ws{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},l=`${this.service}/${t}`,u=this.errors[t],f=u?Vb(u,s):"Error",p=`${this.serviceName}: ${f} (${l}).`;return new ii(l,p,s)}}function Vb(r,t){return r.replace(xb,(n,s)=>{const l=t[s];return l!=null?String(l):`<${s}?>`})}const xb=/\{\$([^}]+)}/g;function Pb(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function es(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const l of n){if(!s.includes(l))return!1;const u=r[l],f=t[l];if(_v(u)&&_v(f)){if(!es(u,f))return!1}else if(u!==f)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function _v(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Al(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,u]=s.split("=");t[decodeURIComponent(l)]=decodeURIComponent(u)}}),t}function Sl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function Lb(r,t){const n=new Ub(r,t);return n.subscribe.bind(n)}class Ub{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let l;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");zb(t,["next","error","complete"])?l=t:l={next:t,error:n,complete:s},l.next===void 0&&(l.next=Fd),l.error===void 0&&(l.error=Fd),l.complete===void 0&&(l.complete=Fd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zb(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function Fd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jb=1e3,Bb=2,qb=14400*1e3,Hb=.5;function vv(r,t=jb,n=Bb){const s=t*Math.pow(n,r),l=Math.round(Hb*s*(Math.random()-.5)*2);return Math.min(qb,s+l)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(r){return r&&r._delegate?r._delegate:r}class ni{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Sb;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Kb(t))try{this.getOrInitializeService({instanceIdentifier:Bs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(t=Bs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Bs){return this.instances.has(t)}getOptions(t=Bs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&f.resolve(l)}return l}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(t),this.onInitCallbacks.set(s,l);const u=this.instances.get(s);return u&&t(u,s),()=>{l.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Gb(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Bs){return this.component?this.component.multipleInstances?t:Bs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Gb(r){return r===Bs?void 0:r}function Kb(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Fb(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(kt||(kt={}));const Yb={debug:kt.DEBUG,verbose:kt.VERBOSE,info:kt.INFO,warn:kt.WARN,error:kt.ERROR,silent:kt.SILENT},Xb=kt.INFO,$b={[kt.DEBUG]:"log",[kt.VERBOSE]:"log",[kt.INFO]:"info",[kt.WARN]:"warn",[kt.ERROR]:"error"},Jb=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),l=$b[t];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class gh{constructor(t){this.name=t,this._logLevel=Xb,this._logHandler=Jb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in kt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yb[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,kt.DEBUG,...t),this._logHandler(this,kt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,kt.VERBOSE,...t),this._logHandler(this,kt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,kt.INFO,...t),this._logHandler(this,kt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,kt.WARN,...t),this._logHandler(this,kt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,kt.ERROR,...t),this._logHandler(this,kt.ERROR,...t)}}const Zb=(r,t)=>t.some(n=>r instanceof n);let Ev,Tv;function Wb(){return Ev||(Ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function t2(){return Tv||(Tv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lE=new WeakMap,sm=new WeakMap,uE=new WeakMap,Gd=new WeakMap,xm=new WeakMap;function e2(r){const t=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(Jr(r.result)),l()},f=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&lE.set(n,r)}).catch(()=>{}),xm.set(t,r),t}function n2(r){if(sm.has(r))return;const t=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),l()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});sm.set(r,t)}let am={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return sm.get(r);if(t==="objectStoreNames")return r.objectStoreNames||uE.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jr(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function i2(r){am=r(am)}function r2(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(Kd(this),t,...n);return uE.set(s,t.sort?t.sort():[t]),Jr(s)}:t2().includes(r)?function(...t){return r.apply(Kd(this),t),Jr(lE.get(this))}:function(...t){return Jr(r.apply(Kd(this),t))}}function s2(r){return typeof r=="function"?r2(r):(r instanceof IDBTransaction&&n2(r),Zb(r,Wb())?new Proxy(r,am):r)}function Jr(r){if(r instanceof IDBRequest)return e2(r);if(Gd.has(r))return Gd.get(r);const t=s2(r);return t!==r&&(Gd.set(r,t),xm.set(t,r)),t}const Kd=r=>xm.get(r);function cE(r,t,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const f=indexedDB.open(r,t),p=Jr(f);return s&&f.addEventListener("upgradeneeded",g=>{s(Jr(f.result),g.oldVersion,g.newVersion,Jr(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),p.then(g=>{u&&g.addEventListener("close",()=>u()),l&&g.addEventListener("versionchange",y=>l(y.oldVersion,y.newVersion,y))}).catch(()=>{}),p}const a2=["get","getKey","getAll","getAllKeys","count"],o2=["put","add","delete","clear"],Qd=new Map;function Av(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(Qd.get(t))return Qd.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,l=o2.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||a2.includes(n)))return;const u=async function(f,...p){const g=this.transaction(f,l?"readwrite":"readonly");let y=g.store;return s&&(y=y.index(p.shift())),(await Promise.all([y[n](...p),l&&g.done]))[0]};return Qd.set(t,u),u}i2(r=>({...r,get:(t,n,s)=>Av(t,n)||r.get(t,n,s),has:(t,n)=>!!Av(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(u2(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function u2(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const om="@firebase/app",Sv="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr=new gh("@firebase/app"),c2="@firebase/app-compat",h2="@firebase/analytics-compat",f2="@firebase/analytics",d2="@firebase/app-check-compat",m2="@firebase/app-check",p2="@firebase/auth",g2="@firebase/auth-compat",y2="@firebase/database",_2="@firebase/data-connect",v2="@firebase/database-compat",E2="@firebase/functions",T2="@firebase/functions-compat",A2="@firebase/installations",S2="@firebase/installations-compat",w2="@firebase/messaging",b2="@firebase/messaging-compat",I2="@firebase/performance",R2="@firebase/performance-compat",C2="@firebase/remote-config",N2="@firebase/remote-config-compat",D2="@firebase/storage",O2="@firebase/storage-compat",M2="@firebase/firestore",k2="@firebase/ai",V2="@firebase/firestore-compat",x2="firebase",P2="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="[DEFAULT]",L2={[om]:"fire-core",[c2]:"fire-core-compat",[f2]:"fire-analytics",[h2]:"fire-analytics-compat",[m2]:"fire-app-check",[d2]:"fire-app-check-compat",[p2]:"fire-auth",[g2]:"fire-auth-compat",[y2]:"fire-rtdb",[_2]:"fire-data-connect",[v2]:"fire-rtdb-compat",[E2]:"fire-fn",[T2]:"fire-fn-compat",[A2]:"fire-iid",[S2]:"fire-iid-compat",[w2]:"fire-fcm",[b2]:"fire-fcm-compat",[I2]:"fire-perf",[R2]:"fire-perf-compat",[C2]:"fire-rc",[N2]:"fire-rc-compat",[D2]:"fire-gcs",[O2]:"fire-gcs-compat",[M2]:"fire-fst",[V2]:"fire-fst-compat",[k2]:"fire-vertex","fire-js":"fire-js",[x2]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new Map,U2=new Map,um=new Map;function wv(r,t){try{r.container.addComponent(t)}catch(n){rr.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function ki(r){const t=r.name;if(um.has(t))return rr.debug(`There were multiple attempts to register component ${t}.`),!1;um.set(t,r);for(const n of Qc.values())wv(n,r);for(const n of U2.values())wv(n,r);return!0}function ta(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Sn(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zr=new Ws("app","Firebase",z2);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j2{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ni("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=P2;function hE(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s={name:lm,automaticDataCollectionEnabled:!0,...t},l=s.name;if(typeof l!="string"||!l)throw Zr.create("bad-app-name",{appName:String(l)});if(n||(n=iE()),!n)throw Zr.create("no-options");const u=Qc.get(l);if(u){if(es(n,u.options)&&es(s,u.config))return u;throw Zr.create("duplicate-app",{appName:l})}const f=new Qb(l);for(const g of um.values())f.addComponent(g);const p=new j2(n,s,f);return Qc.set(l,p),p}function Pm(r=lm){const t=Qc.get(r);if(!t&&r===lm&&iE())return hE();if(!t)throw Zr.create("no-app",{appName:r});return t}function jn(r,t,n){let s=L2[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),u=t.match(/\s|\//);if(l||u){const f=[`Unable to register library "${s}" with version "${t}":`];l&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),rr.warn(f.join(" "));return}ki(new ni(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B2="firebase-heartbeat-database",q2=1,xl="firebase-heartbeat-store";let Yd=null;function fE(){return Yd||(Yd=cE(B2,q2,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(xl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Zr.create("idb-open",{originalErrorMessage:r.message})})),Yd}async function H2(r){try{const n=(await fE()).transaction(xl),s=await n.objectStore(xl).get(dE(r));return await n.done,s}catch(t){if(t instanceof ii)rr.warn(t.message);else{const n=Zr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});rr.warn(n.message)}}}async function bv(r,t){try{const s=(await fE()).transaction(xl,"readwrite");await s.objectStore(xl).put(t,dE(r)),await s.done}catch(n){if(n instanceof ii)rr.warn(n.message);else{const s=Zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rr.warn(s.message)}}}function dE(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F2=1024,G2=30;class K2{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Y2(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Iv();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>G2){const f=X2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){rr.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Iv(),{heartbeatsToSend:s,unsentEntries:l}=Q2(this._heartbeatsCache.heartbeats),u=Kc(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return rr.warn(n),""}}}function Iv(){return new Date().toISOString().substring(0,10)}function Q2(r,t=F2){const n=[];let s=r.slice();for(const l of r){const u=n.find(f=>f.agent===l.agent);if(u){if(u.dates.push(l.date),Rv(n)>t){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Rv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Y2{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return km()?Vm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await H2(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return bv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return bv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Rv(r){return Kc(JSON.stringify({version:2,heartbeats:r})).length}function X2(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(r){ki(new ni("platform-logger",t=>new l2(t),"PRIVATE")),ki(new ni("heartbeat",t=>new K2(t),"PRIVATE")),jn(om,Sv,r),jn(om,Sv,"esm2020"),jn("fire-js","")}$2("");var J2="firebase",Z2="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(J2,Z2,"app");function mE(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const W2=mE,pE=new Ws("auth","Firebase",mE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=new gh("@firebase/auth");function tI(r,...t){Yc.logLevel<=kt.WARN&&Yc.warn(`Auth (${uo}): ${r}`,...t)}function Pc(r,...t){Yc.logLevel<=kt.ERROR&&Yc.error(`Auth (${uo}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(r,...t){throw Um(r,...t)}function ei(r,...t){return Um(r,...t)}function Lm(r,t,n){const s={...W2(),[t]:n};return new Ws("auth","Firebase",s).create(t,{appName:r.name})}function ir(r){return Lm(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eI(r,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&Bn(r,"argument-error"),Lm(r,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Um(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return pE.create(r,...t)}function dt(r,t,...n){if(!r)throw Um(t,...n)}function er(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Pc(t),new Error(t)}function sr(r,t){r||er(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function nI(){return Cv()==="http:"||Cv()==="https:"}function Cv(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nI()||Mm()||"connection"in navigator)?navigator.onLine:!0}function rI(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(t,n){this.shortDelay=t,this.longDelay=n,sr(n>t,"Short delay should be less than long delay!"),this.isMobile=Rb()||Db()}get(){return iI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(r,t){sr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;er("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;er("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;er("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oI=new Kl(3e4,6e4);function ur(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function cr(r,t,n,s,l={}){return yE(r,l,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const p=Gl({key:r.config.apiKey,...f}).slice(1),g=await r._getAdditionalHeaders();g["Content-Type"]="application/json",r.languageCode&&(g["X-Firebase-Locale"]=r.languageCode);const y={method:t,headers:g,...u};return Nb()||(y.referrerPolicy="no-referrer"),r.emulatorConfig&&lo(r.emulatorConfig.host)&&(y.credentials="include"),gE.fetch()(await _E(r,r.config.apiHost,n,p),y)})}async function yE(r,t,n){r._canInitEmulator=!1;const s={...sI,...t};try{const l=new uI(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Dc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const p=u.ok?f.errorMessage:f.error.message,[g,y]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Dc(r,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw Dc(r,"email-already-in-use",f);if(g==="USER_DISABLED")throw Dc(r,"user-disabled",f);const T=s[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(y)throw Lm(r,T,y);Bn(r,T)}}catch(l){if(l instanceof ii)throw l;Bn(r,"network-request-failed",{message:String(l)})}}async function Ql(r,t,n,s,l={}){const u=await cr(r,t,n,s,l);return"mfaPendingCredential"in u&&Bn(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function _E(r,t,n,s){const l=`${t}${n}?${s}`,u=r,f=u.config.emulator?zm(r.config,l):`${r.config.apiScheme}://${l}`;return aI.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function lI(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(ei(this.auth,"network-request-failed")),oI.get())})}}function Dc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=ei(r,t,s);return l.customData._tokenResponse=n,l}function Nv(r){return r!==void 0&&r.enterprise!==void 0}class cI{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return lI(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function hI(r,t){return cr(r,"GET","/v2/recaptchaConfig",ur(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fI(r,t){return cr(r,"POST","/v1/accounts:delete",t)}async function Xc(r,t){return cr(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function dI(r,t=!1){const n=xe(r),s=await n.getIdToken(t),l=jm(s);dt(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Nl(Xd(l.auth_time)),issuedAtTime:Nl(Xd(l.iat)),expirationTime:Nl(Xd(l.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Xd(r){return Number(r)*1e3}function jm(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Pc("JWT malformed, contained fewer than 3 sections"),null;try{const l=eE(n);return l?JSON.parse(l):(Pc("Failed to decode base64 JWT payload"),null)}catch(l){return Pc("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Dv(r){const t=jm(r);return dt(t,"internal-error"),dt(typeof t.exp<"u","internal-error"),dt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof ii&&mI(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function mI({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Nl(this.lastLoginAt),this.creationTime=Nl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(r){var S;const t=r.auth,n=await r.getIdToken(),s=await Pl(r,Xc(t,{idToken:n}));dt(s==null?void 0:s.users.length,t,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const u=(S=l.providerUserInfo)!=null&&S.length?vE(l.providerUserInfo):[],f=yI(r.providerData,u),p=r.isAnonymous,g=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),y=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new hm(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(r,T)}async function gI(r){const t=xe(r);await $c(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function yI(r,t){return[...r.filter(s=>!t.some(l=>l.providerId===s.providerId)),...t]}function vE(r){return r.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(r,t){const n=await yE(r,{},async()=>{const s=Gl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,f=await _E(r,l,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:s};return r.emulatorConfig&&lo(r.emulatorConfig.host)&&(g.credentials="include"),gE.fetch()(f,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vI(r,t){return cr(r,"POST","/v2/accounts:revokeToken",ur(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){dt(t.idToken,"internal-error"),dt(typeof t.idToken<"u","internal-error"),dt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Dv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){dt(t.length!==0,"internal-error");const n=Dv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(dt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await _I(t,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,f=new Ja;return s&&(dt(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),l&&(dt(typeof l=="string","internal-error",{appName:t}),f.accessToken=l),u&&(dt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ja,this.toJSON())}_performRefresh(){return er("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(r,t){dt(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class ti{constructor({uid:t,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new pI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new hm(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const n=await Pl(this,this.stsTokenManager.getToken(this.auth,t));return dt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return dI(this,t)}reload(){return gI(this)}_assign(t){this!==t&&(dt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new ti({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){dt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await $c(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sn(this.auth.app))return Promise.reject(ir(this.auth));const t=await this.getIdToken();return await Pl(this,fI(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const s=n.displayName??void 0,l=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,p=n.tenantId??void 0,g=n._redirectEventId??void 0,y=n.createdAt??void 0,T=n.lastLoginAt??void 0,{uid:S,emailVerified:N,isAnonymous:H,providerData:J,stsTokenManager:W}=n;dt(S&&W,t,"internal-error");const Z=Ja.fromJSON(this.name,W);dt(typeof S=="string",t,"internal-error"),Gr(s,t.name),Gr(l,t.name),dt(typeof N=="boolean",t,"internal-error"),dt(typeof H=="boolean",t,"internal-error"),Gr(u,t.name),Gr(f,t.name),Gr(p,t.name),Gr(g,t.name),Gr(y,t.name),Gr(T,t.name);const ut=new ti({uid:S,auth:t,email:l,emailVerified:N,displayName:s,isAnonymous:H,photoURL:f,phoneNumber:u,tenantId:p,stsTokenManager:Z,createdAt:y,lastLoginAt:T});return J&&Array.isArray(J)&&(ut.providerData=J.map(gt=>({...gt}))),g&&(ut._redirectEventId=g),ut}static async _fromIdTokenResponse(t,n,s=!1){const l=new Ja;l.updateFromServerResponse(n);const u=new ti({uid:n.localId,auth:t,stsTokenManager:l,isAnonymous:s});return await $c(u),u}static async _fromGetAccountInfoResponse(t,n,s){const l=n.users[0];dt(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?vE(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),p=new Ja;p.updateFromIdToken(s);const g=new ti({uid:l.localId,auth:t,stsTokenManager:p,isAnonymous:f}),y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new hm(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,y),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov=new Map;function nr(r){sr(r instanceof Function,"Expected a class definition");let t=Ov.get(r);return t?(sr(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,Ov.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}EE.type="NONE";const Mv=EE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lc(r,t,n){return`firebase:${r}:${t}:${n}`}class Za{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=Lc(this.userKey,l.apiKey,u),this.fullPersistenceKey=Lc("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Xc(this.auth,{idToken:t}).catch(()=>{});return n?ti._fromGetAccountInfoResponse(this.auth,n,t):null}return ti._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new Za(nr(Mv),t,s);const l=(await Promise.all(n.map(async y=>{if(await y._isAvailable())return y}))).filter(y=>y);let u=l[0]||nr(Mv);const f=Lc(s,t.config.apiKey,t.name);let p=null;for(const y of n)try{const T=await y._get(f);if(T){let S;if(typeof T=="string"){const N=await Xc(t,{idToken:T}).catch(()=>{});if(!N)break;S=await ti._fromGetAccountInfoResponse(t,N,T)}else S=ti._fromJSON(t,T);y!==u&&(p=S),u=y;break}}catch{}const g=l.filter(y=>y._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Za(u,t,s):(u=g[0],p&&await u._set(f,p.toJSON()),await Promise.all(n.map(async y=>{if(y!==u)try{await y._remove(f)}catch{}})),new Za(u,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(wE(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(TE(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(IE(t))return"Blackberry";if(RE(t))return"Webos";if(AE(t))return"Safari";if((t.includes("chrome/")||SE(t))&&!t.includes("edge/"))return"Chrome";if(bE(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function TE(r=We()){return/firefox\//i.test(r)}function AE(r=We()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function SE(r=We()){return/crios\//i.test(r)}function wE(r=We()){return/iemobile/i.test(r)}function bE(r=We()){return/android/i.test(r)}function IE(r=We()){return/blackberry/i.test(r)}function RE(r=We()){return/webos/i.test(r)}function Bm(r=We()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function EI(r=We()){var t;return Bm(r)&&!!((t=window.navigator)!=null&&t.standalone)}function TI(){return Ob()&&document.documentMode===10}function CE(r=We()){return Bm(r)||bE(r)||RE(r)||IE(r)||/windows phone/i.test(r)||wE(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(r,t=[]){let n;switch(r){case"Browser":n=kv(We());break;case"Worker":n=`${kv(We())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${uo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,p)=>{try{const g=t(u);f(g)}catch(g){p(g)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SI(r,t={}){return cr(r,"GET","/v2/passwordPolicy",ur(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wI=6;class bI{constructor(t){var s;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??wI,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=t.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),l&&(n.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<t.length;l++)s=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(t,n,s,l){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vv(this),this.idTokenSubscription=new Vv(this),this.beforeStateQueue=new AI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pE,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=nr(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await Za.create(this,t),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Xc(this,{idToken:t}),s=await ti._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var u;if(Sn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(p,p))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,p=s==null?void 0:s._redirectEventId,g=await this.tryRedirectSignIn(t);(!f||f===p)&&(g!=null&&g.user)&&(s=g.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(f){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return dt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await $c(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=rI()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Sn(this.app))return Promise.reject(ir(this));const n=t?xe(t):null;return n&&dt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&dt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Sn(this.app)?Promise.reject(ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Sn(this.app)?Promise.reject(ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(nr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await SI(this),n=new bI(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Ws("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await vI(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&nr(t)||this._popupRedirectResolver;dt(n,this,"argument-error"),this.redirectPersistenceManager=await Za.create(this,[nr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(dt(p,this,"internal-error"),p.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=t.addObserver(n,s,l);return()=>{f=!0,g()}}else{const g=t.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return dt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=NE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var n;if(Sn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&tI(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function hr(r){return xe(r)}class Vv{constructor(t){this.auth=t,this.observer=null,this.addObserver=Lb(n=>this.observer=n)}get next(){return dt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RI(r){yh=r}function DE(r){return yh.loadJS(r)}function CI(){return yh.recaptchaEnterpriseScript}function NI(){return yh.gapiScript}function DI(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class OI{constructor(){this.enterprise=new MI}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class MI{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const kI="recaptcha-enterprise",OE="NO_RECAPTCHA";class VI{constructor(t){this.type=kI,this.auth=hr(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,p)=>{hI(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(g=>{if(g.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const y=new cI(g);return u.tenantId==null?u._agentRecaptchaConfig=y:u._tenantRecaptchaConfigs[u.tenantId]=y,f(y.siteKey)}}).catch(g=>{p(g)})})}function l(u,f,p){const g=window.grecaptcha;Nv(g)?g.enterprise.ready(()=>{g.enterprise.execute(u,{action:t}).then(y=>{f(y)}).catch(()=>{f(OE)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new OI().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(p=>{if(!n&&Nv(window.grecaptcha))l(p,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let g=CI();g.length!==0&&(g+=p),DE(g).then(()=>{l(p,u,f)}).catch(y=>{f(y)})}}).catch(p=>{f(p)})})}}async function xv(r,t,n,s=!1,l=!1){const u=new VI(r);let f;if(l)f=OE;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const p={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const g=p.phoneEnrollmentInfo.phoneNumber,y=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:g,recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const g=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Jc(r,t,n,s,l){var u;if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await xv(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await xv(r,t,n,n==="getOobCode");return s(r,p)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xI(r,t){const n=ta(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if(es(u,t??{}))return l;Bn(l,"already-initialized")}return n.initialize({options:t})}function PI(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(nr);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function LI(r,t,n){const s=hr(r);dt(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const l=!1,u=ME(t),{host:f,port:p}=UI(t),g=p===null?"":`:${p}`,y={url:`${u}//${f}${g}/`},T=Object.freeze({host:f,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){dt(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),dt(es(y,s.config.emulator)&&es(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=y,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,lo(f)?(sE(`${u}//${f}${g}`),aE("Auth",!0)):zI()}function ME(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function UI(r){const t=ME(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Pv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Pv(f)}}}function Pv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function zI(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return er("not implemented")}_getIdTokenResponse(t){return er("not implemented")}_linkToIdToken(t,n){return er("not implemented")}_getReauthenticationResolver(t){return er("not implemented")}}async function jI(r,t){return cr(r,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(r,t){return Ql(r,"POST","/v1/accounts:signInWithPassword",ur(r,t))}async function qI(r,t){return cr(r,"POST","/v1/accounts:sendOobCode",ur(r,t))}async function HI(r,t){return qI(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(r,t){return Ql(r,"POST","/v1/accounts:signInWithEmailLink",ur(r,t))}async function GI(r,t){return Ql(r,"POST","/v1/accounts:signInWithEmailLink",ur(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll extends qm{constructor(t,n,s,l=null){super("password",s),this._email=t,this._password=n,this._tenantId=l}static _fromEmailAndPassword(t,n){return new Ll(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Ll(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jc(t,n,"signInWithPassword",BI);case"emailLink":return FI(t,{email:this._email,oobCode:this._password});default:Bn(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Jc(t,s,"signUpPassword",jI);case"emailLink":return GI(t,{idToken:n,email:this._email,oobCode:this._password});default:Bn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(r,t){return Ql(r,"POST","/v1/accounts:signInWithIdp",ur(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="http://localhost";class Ks extends qm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Ks(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:l,...u}=n;if(!s||!l)return null;const f=new Ks(s,l);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Wa(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Wa(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Wa(t,n)}buildRequest(){const t={requestUri:KI,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Gl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function YI(r){const t=Al(Sl(r)).link,n=t?Al(Sl(t)).deep_link_id:null,s=Al(Sl(r)).deep_link_id;return(s?Al(Sl(s)).link:null)||s||n||t||r}class Hm{constructor(t){const n=Al(Sl(t)),s=n.apiKey??null,l=n.oobCode??null,u=QI(n.mode??null);dt(s&&l&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=l,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=YI(t);try{return new Hm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(){this.providerId=co.PROVIDER_ID}static credential(t,n){return Ll._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=Hm.parseLink(n);return dt(s,"argument-error"),Ll._fromEmailAndCode(t,s.code,s.tenantId)}}co.PROVIDER_ID="password";co.EMAIL_PASSWORD_SIGN_IN_METHOD="password";co.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fm{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl extends Fm{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr extends Yl{constructor(){super("facebook.com")}static credential(t){return Ks._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Kr.credentialFromTaggedObject(t)}static credentialFromError(t){return Kr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Kr.credential(t.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Yl{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Ks._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Qr.credentialFromTaggedObject(t)}static credentialFromError(t){return Qr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Qr.credential(n,s)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends Yl{constructor(){super("github.com")}static credential(t){return Ks._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yr.credentialFromTaggedObject(t)}static credentialFromError(t){return Yr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Yr.credential(t.oauthAccessToken)}catch{return null}}}Yr.GITHUB_SIGN_IN_METHOD="github.com";Yr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Yl{constructor(){super("twitter.com")}static credential(t,n){return Ks._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Xr.credentialFromTaggedObject(t)}static credentialFromError(t){return Xr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return Xr.credential(n,s)}catch{return null}}}Xr.TWITTER_SIGN_IN_METHOD="twitter.com";Xr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XI(r,t){return Ql(r,"POST","/v1/accounts:signUp",ur(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,l=!1){const u=await ti._fromIdTokenResponse(t,s,l),f=Lv(s);return new Qs({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const l=Lv(s);return new Qs({user:t,providerId:l,_tokenResponse:s,operationType:n})}}function Lv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends ii{constructor(t,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,Zc.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,l){return new Zc(t,n,s,l)}}function kE(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?Zc._fromErrorAndOperation(r,u,t,s):u})}async function $I(r,t,n=!1){const s=await Pl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Qs._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(r,t,n=!1){const{auth:s}=r;if(Sn(s.app))return Promise.reject(ir(s));const l="reauthenticate";try{const u=await Pl(r,kE(s,l,t,r),n);dt(u.idToken,s,"internal-error");const f=jm(u.idToken);dt(f,s,"internal-error");const{sub:p}=f;return dt(r.uid===p,s,"user-mismatch"),Qs._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&Bn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VE(r,t,n=!1){if(Sn(r.app))return Promise.reject(ir(r));const s="signIn",l=await kE(r,s,t),u=await Qs._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}async function ZI(r,t){return VE(hr(r),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xE(r){const t=hr(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function mM(r,t,n){const s=hr(r);await Jc(s,{requestType:"PASSWORD_RESET",email:t,clientType:"CLIENT_TYPE_WEB"},"getOobCode",HI)}async function pM(r,t,n){if(Sn(r.app))return Promise.reject(ir(r));const s=hr(r),f=await Jc(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",XI).catch(g=>{throw g.code==="auth/password-does-not-meet-requirements"&&xE(r),g}),p=await Qs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(p.user),p}function gM(r,t,n){return Sn(r.app)?Promise.reject(ir(r)):ZI(xe(r),co.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&xE(r),s})}function WI(r,t,n,s){return xe(r).onIdTokenChanged(t,n,s)}function tR(r,t,n){return xe(r).beforeAuthStateChanged(t,n)}function eR(r,t,n,s){return xe(r).onAuthStateChanged(t,n,s)}function nR(r){return xe(r).signOut()}const Wc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PE{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Wc,"1"),this.storage.removeItem(Wc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR=1e3,rR=10;class LE extends PE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=CE(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&t(n,l,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,p,g)=>{this.notifyListeners(f,g)});return}const s=t.key;n?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);TI()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,rR):l()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},iR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}LE.type="LOCAL";const sR=LE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE extends PE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}UE.type="SESSION";const zE=UE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(l=>l.isListeningto(t));if(n)return n;const s=new _h(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:l,data:u}=n.data,f=this.handlersMap[l];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const p=Array.from(f).map(async y=>y(n.origin,u)),g=await aR(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:g})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_h.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,f;return new Promise((p,g)=>{const y=Gm("",20);l.port1.start();const T=setTimeout(()=>{g(new Error("unsupported_event"))},s);f={messageChannel:l,onMessage(S){const N=S;if(N.data.eventId===y)switch(N.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(N.data.response);break;default:clearTimeout(T),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:y,data:n},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(){return window}function lR(r){Ri().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(){return typeof Ri().WorkerGlobalScope<"u"&&typeof Ri().importScripts=="function"}async function uR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cR(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function hR(){return jE()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE="firebaseLocalStorageDb",fR=1,th="firebaseLocalStorage",qE="fbase_key";class Xl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function vh(r,t){return r.transaction([th],t?"readwrite":"readonly").objectStore(th)}function dR(){const r=indexedDB.deleteDatabase(BE);return new Xl(r).toPromise()}function fm(){const r=indexedDB.open(BE,fR);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(th,{keyPath:qE})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(th)?t(s):(s.close(),await dR(),t(await fm()))})})}async function Uv(r,t,n){const s=vh(r,!0).put({[qE]:t,value:n});return new Xl(s).toPromise()}async function mR(r,t){const n=vh(r,!1).get(t),s=await new Xl(n).toPromise();return s===void 0?null:s.value}function zv(r,t){const n=vh(r,!0).delete(t);return new Xl(n).toPromise()}const pR=800,gR=3;class HE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>gR)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jE()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_h._getInstance(hR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await uR(),!this.activeServiceWorker)return;this.sender=new oR(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(s=t[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||cR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await fm();return await Uv(t,Wc,"1"),await zv(t,Wc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Uv(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>mR(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>zv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const u=vh(l,!1).getAll();return new Xl(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:l,value:u}of t)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}HE.type="LOCAL";const yR=HE;new Kl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(r,t){return t?nr(t):(dt(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km extends qm{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Wa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Wa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Wa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function _R(r){return VE(r.auth,new Km(r),r.bypassAuthState)}function vR(r){const{auth:t,user:n}=r;return dt(n,t,"internal-error"),JI(n,new Km(r),r.bypassAuthState)}async function ER(r){const{auth:t,user:n}=r;return dt(n,t,"internal-error"),$I(n,new Km(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(t,n,s,l,u=!1){this.auth=t,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:f,type:p}=t;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(y){this.reject(y)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return _R;case"linkViaPopup":case"linkViaRedirect":return ER;case"reauthViaPopup":case"reauthViaRedirect":return vR;default:Bn(this.auth,"internal-error")}}resolve(t){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){sr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR=new Kl(2e3,1e4);async function yM(r,t,n){if(Sn(r.app))return Promise.reject(ei(r,"operation-not-supported-in-this-environment"));const s=hr(r);eI(r,t,Fm);const l=FE(s,n);return new qs(s,"signInViaPopup",t,l).executeNotNull()}class qs extends GE{constructor(t,n,s,l,u){super(t,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,qs.currentPopupAction&&qs.currentPopupAction.cancel(),qs.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return dt(t,this.auth,"internal-error"),t}async onExecution(){sr(this.filter.length===1,"Popup operations only handle one event");const t=Gm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ei(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(ei(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qs.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ei(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,TR.get())};t()}}qs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="pendingRedirect",Uc=new Map;class SR extends GE{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=Uc.get(this.auth._key());if(!t){try{const s=await wR(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}Uc.set(this.auth._key(),t)}return this.bypassAuthState||Uc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wR(r,t){const n=RR(t),s=IR(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function bR(r,t){Uc.set(r._key(),t)}function IR(r){return nr(r._redirectPersistence)}function RR(r){return Lc(AR,r.config.apiKey,r.name)}async function CR(r,t,n=!1){if(Sn(r.app))return Promise.reject(ir(r));const s=hr(r),l=FE(s,t),f=await new SR(s,l,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=600*1e3;class DR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!OR(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!KE(t)){const l=((s=t.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(ei(this.auth,l))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=NR&&this.cachedEventUids.clear(),this.cachedEventUids.has(jv(t))}saveEventToCache(t){this.cachedEventUids.add(jv(t)),this.lastProcessedEventTime=Date.now()}}function jv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function KE({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function OR(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return KE(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MR(r,t={}){return cr(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VR=/^https?/;async function xR(r){if(r.config.emulator)return;const{authorizedDomains:t}=await MR(r);for(const n of t)try{if(PR(n))return}catch{}Bn(r,"unauthorized-domain")}function PR(r){const t=cm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!VR.test(n))return!1;if(kR.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=new Kl(3e4,6e4);function Bv(){const r=Ri().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function UR(r){return new Promise((t,n)=>{var l,u,f;function s(){Bv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Bv(),n(ei(r,"network-request-failed"))},timeout:LR.get()})}if((u=(l=Ri().gapi)==null?void 0:l.iframes)!=null&&u.Iframe)t(gapi.iframes.getContext());else if((f=Ri().gapi)!=null&&f.load)s();else{const p=DI("iframefcb");return Ri()[p]=()=>{gapi.load?s():n(ei(r,"network-request-failed"))},DE(`${NI()}?onload=${p}`).catch(g=>n(g))}}).catch(t=>{throw zc=null,t})}let zc=null;function zR(r){return zc=zc||UR(r),zc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=new Kl(5e3,15e3),BR="__/auth/iframe",qR="emulator/auth/iframe",HR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GR(r){const t=r.config;dt(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?zm(t,qR):`https://${r.config.authDomain}/${BR}`,s={apiKey:t.apiKey,appName:r.name,v:uo},l=FR.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${Gl(s).slice(1)}`}async function KR(r){const t=await zR(r),n=Ri().gapi;return dt(n,r,"internal-error"),t.open({where:document.body,url:GR(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HR,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const f=ei(r,"network-request-failed"),p=Ri().setTimeout(()=>{u(f)},jR.get());function g(){Ri().clearTimeout(p),l(s)}s.ping(g).then(g,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YR=500,XR=600,$R="_blank",JR="http://localhost";class qv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ZR(r,t,n,s=YR,l=XR){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const g={...QR,width:s.toString(),height:l.toString(),top:u,left:f},y=We().toLowerCase();n&&(p=SE(y)?$R:n),TE(y)&&(t=t||JR,g.scrollbars="yes");const T=Object.entries(g).reduce((N,[H,J])=>`${N}${H}=${J},`,"");if(EI(y)&&p!=="_self")return WR(t||"",p),new qv(null);const S=window.open(t||"",p,T);dt(S,r,"popup-blocked");try{S.focus()}catch{}return new qv(S)}function WR(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC="__/auth/handler",eC="emulator/auth/handler",nC=encodeURIComponent("fac");async function Hv(r,t,n,s,l,u){dt(r.config.authDomain,r,"auth-domain-config-required"),dt(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:uo,eventId:l};if(t instanceof Fm){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",Pb(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[T,S]of Object.entries({}))f[T]=S}if(t instanceof Yl){const T=t.getScopes().filter(S=>S!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const p=f;for(const T of Object.keys(p))p[T]===void 0&&delete p[T];const g=await r._getAppCheckToken(),y=g?`#${nC}=${encodeURIComponent(g)}`:"";return`${iC(r)}?${Gl(p).slice(1)}${y}`}function iC({config:r}){return r.emulator?zm(r,eC):`https://${r.authDomain}/${tC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="webStorageSupport";class rC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zE,this._completeRedirectFn=CR,this._overrideRedirectResult=bR}async _openPopup(t,n,s,l){var f;sr((f=this.eventManagers[t._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await Hv(t,n,s,cm(),l);return ZR(t,u,Gm())}async _openRedirect(t,n,s,l){await this._originValidation(t);const u=await Hv(t,n,s,cm(),l);return lR(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(sr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await KR(t),s=new DR(t);return n.register("authEvent",l=>(dt(l==null?void 0:l.authEvent,t,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send($d,{type:$d},l=>{var f;const u=(f=l==null?void 0:l[0])==null?void 0:f[$d];u!==void 0&&n(!!u),Bn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xR(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return CE()||AE()||Bm()}}const sC=rC;var Fv="@firebase/auth",Gv="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){dt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lC(r){ki(new ni("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=s.options;dt(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const g={apiKey:f,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:NE(r)},y=new II(s,l,u,g);return PI(y,n),y},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),ki(new ni("auth-internal",t=>{const n=hr(t.getProvider("auth").getImmediate());return(s=>new aC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(Fv,Gv,oC(r)),jn(Fv,Gv,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=300,cC=rE("authIdTokenMaxAge")||uC;let Kv=null;const hC=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>cC)return;const l=n==null?void 0:n.token;Kv!==l&&(Kv=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function fC(r=Pm()){const t=ta(r,"auth");if(t.isInitialized())return t.getImmediate();const n=xI(r,{popupRedirectResolver:sC,persistence:[yR,sR,zE]}),s=rE("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=hC(u.toString());tR(n,f,()=>f(n.currentUser)),WI(n,p=>f(p))}}const l=nE("auth");return l&&LI(n,`http://${l}`),n}function dC(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}RI({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=l=>{const u=ei("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",dC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lC("Browser");var Qv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,QE;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(C,w){function R(){}R.prototype=w.prototype,C.F=w.prototype,C.prototype=new R,C.prototype.constructor=C,C.D=function(k,O,V){for(var b=Array(arguments.length-2),It=2;It<arguments.length;It++)b[It-2]=arguments[It];return w.prototype[O].apply(k,b)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(C,w,R){R||(R=0);const k=Array(16);if(typeof w=="string")for(var O=0;O<16;++O)k[O]=w.charCodeAt(R++)|w.charCodeAt(R++)<<8|w.charCodeAt(R++)<<16|w.charCodeAt(R++)<<24;else for(O=0;O<16;++O)k[O]=w[R++]|w[R++]<<8|w[R++]<<16|w[R++]<<24;w=C.g[0],R=C.g[1],O=C.g[2];let V=C.g[3],b;b=w+(V^R&(O^V))+k[0]+3614090360&4294967295,w=R+(b<<7&4294967295|b>>>25),b=V+(O^w&(R^O))+k[1]+3905402710&4294967295,V=w+(b<<12&4294967295|b>>>20),b=O+(R^V&(w^R))+k[2]+606105819&4294967295,O=V+(b<<17&4294967295|b>>>15),b=R+(w^O&(V^w))+k[3]+3250441966&4294967295,R=O+(b<<22&4294967295|b>>>10),b=w+(V^R&(O^V))+k[4]+4118548399&4294967295,w=R+(b<<7&4294967295|b>>>25),b=V+(O^w&(R^O))+k[5]+1200080426&4294967295,V=w+(b<<12&4294967295|b>>>20),b=O+(R^V&(w^R))+k[6]+2821735955&4294967295,O=V+(b<<17&4294967295|b>>>15),b=R+(w^O&(V^w))+k[7]+4249261313&4294967295,R=O+(b<<22&4294967295|b>>>10),b=w+(V^R&(O^V))+k[8]+1770035416&4294967295,w=R+(b<<7&4294967295|b>>>25),b=V+(O^w&(R^O))+k[9]+2336552879&4294967295,V=w+(b<<12&4294967295|b>>>20),b=O+(R^V&(w^R))+k[10]+4294925233&4294967295,O=V+(b<<17&4294967295|b>>>15),b=R+(w^O&(V^w))+k[11]+2304563134&4294967295,R=O+(b<<22&4294967295|b>>>10),b=w+(V^R&(O^V))+k[12]+1804603682&4294967295,w=R+(b<<7&4294967295|b>>>25),b=V+(O^w&(R^O))+k[13]+4254626195&4294967295,V=w+(b<<12&4294967295|b>>>20),b=O+(R^V&(w^R))+k[14]+2792965006&4294967295,O=V+(b<<17&4294967295|b>>>15),b=R+(w^O&(V^w))+k[15]+1236535329&4294967295,R=O+(b<<22&4294967295|b>>>10),b=w+(O^V&(R^O))+k[1]+4129170786&4294967295,w=R+(b<<5&4294967295|b>>>27),b=V+(R^O&(w^R))+k[6]+3225465664&4294967295,V=w+(b<<9&4294967295|b>>>23),b=O+(w^R&(V^w))+k[11]+643717713&4294967295,O=V+(b<<14&4294967295|b>>>18),b=R+(V^w&(O^V))+k[0]+3921069994&4294967295,R=O+(b<<20&4294967295|b>>>12),b=w+(O^V&(R^O))+k[5]+3593408605&4294967295,w=R+(b<<5&4294967295|b>>>27),b=V+(R^O&(w^R))+k[10]+38016083&4294967295,V=w+(b<<9&4294967295|b>>>23),b=O+(w^R&(V^w))+k[15]+3634488961&4294967295,O=V+(b<<14&4294967295|b>>>18),b=R+(V^w&(O^V))+k[4]+3889429448&4294967295,R=O+(b<<20&4294967295|b>>>12),b=w+(O^V&(R^O))+k[9]+568446438&4294967295,w=R+(b<<5&4294967295|b>>>27),b=V+(R^O&(w^R))+k[14]+3275163606&4294967295,V=w+(b<<9&4294967295|b>>>23),b=O+(w^R&(V^w))+k[3]+4107603335&4294967295,O=V+(b<<14&4294967295|b>>>18),b=R+(V^w&(O^V))+k[8]+1163531501&4294967295,R=O+(b<<20&4294967295|b>>>12),b=w+(O^V&(R^O))+k[13]+2850285829&4294967295,w=R+(b<<5&4294967295|b>>>27),b=V+(R^O&(w^R))+k[2]+4243563512&4294967295,V=w+(b<<9&4294967295|b>>>23),b=O+(w^R&(V^w))+k[7]+1735328473&4294967295,O=V+(b<<14&4294967295|b>>>18),b=R+(V^w&(O^V))+k[12]+2368359562&4294967295,R=O+(b<<20&4294967295|b>>>12),b=w+(R^O^V)+k[5]+4294588738&4294967295,w=R+(b<<4&4294967295|b>>>28),b=V+(w^R^O)+k[8]+2272392833&4294967295,V=w+(b<<11&4294967295|b>>>21),b=O+(V^w^R)+k[11]+1839030562&4294967295,O=V+(b<<16&4294967295|b>>>16),b=R+(O^V^w)+k[14]+4259657740&4294967295,R=O+(b<<23&4294967295|b>>>9),b=w+(R^O^V)+k[1]+2763975236&4294967295,w=R+(b<<4&4294967295|b>>>28),b=V+(w^R^O)+k[4]+1272893353&4294967295,V=w+(b<<11&4294967295|b>>>21),b=O+(V^w^R)+k[7]+4139469664&4294967295,O=V+(b<<16&4294967295|b>>>16),b=R+(O^V^w)+k[10]+3200236656&4294967295,R=O+(b<<23&4294967295|b>>>9),b=w+(R^O^V)+k[13]+681279174&4294967295,w=R+(b<<4&4294967295|b>>>28),b=V+(w^R^O)+k[0]+3936430074&4294967295,V=w+(b<<11&4294967295|b>>>21),b=O+(V^w^R)+k[3]+3572445317&4294967295,O=V+(b<<16&4294967295|b>>>16),b=R+(O^V^w)+k[6]+76029189&4294967295,R=O+(b<<23&4294967295|b>>>9),b=w+(R^O^V)+k[9]+3654602809&4294967295,w=R+(b<<4&4294967295|b>>>28),b=V+(w^R^O)+k[12]+3873151461&4294967295,V=w+(b<<11&4294967295|b>>>21),b=O+(V^w^R)+k[15]+530742520&4294967295,O=V+(b<<16&4294967295|b>>>16),b=R+(O^V^w)+k[2]+3299628645&4294967295,R=O+(b<<23&4294967295|b>>>9),b=w+(O^(R|~V))+k[0]+4096336452&4294967295,w=R+(b<<6&4294967295|b>>>26),b=V+(R^(w|~O))+k[7]+1126891415&4294967295,V=w+(b<<10&4294967295|b>>>22),b=O+(w^(V|~R))+k[14]+2878612391&4294967295,O=V+(b<<15&4294967295|b>>>17),b=R+(V^(O|~w))+k[5]+4237533241&4294967295,R=O+(b<<21&4294967295|b>>>11),b=w+(O^(R|~V))+k[12]+1700485571&4294967295,w=R+(b<<6&4294967295|b>>>26),b=V+(R^(w|~O))+k[3]+2399980690&4294967295,V=w+(b<<10&4294967295|b>>>22),b=O+(w^(V|~R))+k[10]+4293915773&4294967295,O=V+(b<<15&4294967295|b>>>17),b=R+(V^(O|~w))+k[1]+2240044497&4294967295,R=O+(b<<21&4294967295|b>>>11),b=w+(O^(R|~V))+k[8]+1873313359&4294967295,w=R+(b<<6&4294967295|b>>>26),b=V+(R^(w|~O))+k[15]+4264355552&4294967295,V=w+(b<<10&4294967295|b>>>22),b=O+(w^(V|~R))+k[6]+2734768916&4294967295,O=V+(b<<15&4294967295|b>>>17),b=R+(V^(O|~w))+k[13]+1309151649&4294967295,R=O+(b<<21&4294967295|b>>>11),b=w+(O^(R|~V))+k[4]+4149444226&4294967295,w=R+(b<<6&4294967295|b>>>26),b=V+(R^(w|~O))+k[11]+3174756917&4294967295,V=w+(b<<10&4294967295|b>>>22),b=O+(w^(V|~R))+k[2]+718787259&4294967295,O=V+(b<<15&4294967295|b>>>17),b=R+(V^(O|~w))+k[9]+3951481745&4294967295,C.g[0]=C.g[0]+w&4294967295,C.g[1]=C.g[1]+(O+(b<<21&4294967295|b>>>11))&4294967295,C.g[2]=C.g[2]+O&4294967295,C.g[3]=C.g[3]+V&4294967295}s.prototype.v=function(C,w){w===void 0&&(w=C.length);const R=w-this.blockSize,k=this.C;let O=this.h,V=0;for(;V<w;){if(O==0)for(;V<=R;)l(this,C,V),V+=this.blockSize;if(typeof C=="string"){for(;V<w;)if(k[O++]=C.charCodeAt(V++),O==this.blockSize){l(this,k),O=0;break}}else for(;V<w;)if(k[O++]=C[V++],O==this.blockSize){l(this,k),O=0;break}}this.h=O,this.o+=w},s.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var w=1;w<C.length-8;++w)C[w]=0;w=this.o*8;for(var R=C.length-8;R<C.length;++R)C[R]=w&255,w/=256;for(this.v(C),C=Array(16),w=0,R=0;R<4;++R)for(let k=0;k<32;k+=8)C[w++]=this.g[R]>>>k&255;return C};function u(C,w){var R=p;return Object.prototype.hasOwnProperty.call(R,C)?R[C]:R[C]=w(C)}function f(C,w){this.h=w;const R=[];let k=!0;for(let O=C.length-1;O>=0;O--){const V=C[O]|0;k&&V==w||(R[O]=V,k=!1)}this.g=R}var p={};function g(C){return-128<=C&&C<128?u(C,function(w){return new f([w|0],w<0?-1:0)}):new f([C|0],C<0?-1:0)}function y(C){if(isNaN(C)||!isFinite(C))return S;if(C<0)return Z(y(-C));const w=[];let R=1;for(let k=0;C>=R;k++)w[k]=C/R|0,R*=4294967296;return new f(w,0)}function T(C,w){if(C.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(C.charAt(0)=="-")return Z(T(C.substring(1),w));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const R=y(Math.pow(w,8));let k=S;for(let V=0;V<C.length;V+=8){var O=Math.min(8,C.length-V);const b=parseInt(C.substring(V,V+O),w);O<8?(O=y(Math.pow(w,O)),k=k.j(O).add(y(b))):(k=k.j(R),k=k.add(y(b)))}return k}var S=g(0),N=g(1),H=g(16777216);r=f.prototype,r.m=function(){if(W(this))return-Z(this).m();let C=0,w=1;for(let R=0;R<this.g.length;R++){const k=this.i(R);C+=(k>=0?k:4294967296+k)*w,w*=4294967296}return C},r.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(J(this))return"0";if(W(this))return"-"+Z(this).toString(C);const w=y(Math.pow(C,6));var R=this;let k="";for(;;){const O=Pt(R,w).g;R=ut(R,O.j(w));let V=((R.g.length>0?R.g[0]:R.h)>>>0).toString(C);if(R=O,J(R))return V+k;for(;V.length<6;)V="0"+V;k=V+k}},r.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function J(C){if(C.h!=0)return!1;for(let w=0;w<C.g.length;w++)if(C.g[w]!=0)return!1;return!0}function W(C){return C.h==-1}r.l=function(C){return C=ut(this,C),W(C)?-1:J(C)?0:1};function Z(C){const w=C.g.length,R=[];for(let k=0;k<w;k++)R[k]=~C.g[k];return new f(R,~C.h).add(N)}r.abs=function(){return W(this)?Z(this):this},r.add=function(C){const w=Math.max(this.g.length,C.g.length),R=[];let k=0;for(let O=0;O<=w;O++){let V=k+(this.i(O)&65535)+(C.i(O)&65535),b=(V>>>16)+(this.i(O)>>>16)+(C.i(O)>>>16);k=b>>>16,V&=65535,b&=65535,R[O]=b<<16|V}return new f(R,R[R.length-1]&-2147483648?-1:0)};function ut(C,w){return C.add(Z(w))}r.j=function(C){if(J(this)||J(C))return S;if(W(this))return W(C)?Z(this).j(Z(C)):Z(Z(this).j(C));if(W(C))return Z(this.j(Z(C)));if(this.l(H)<0&&C.l(H)<0)return y(this.m()*C.m());const w=this.g.length+C.g.length,R=[];for(var k=0;k<2*w;k++)R[k]=0;for(k=0;k<this.g.length;k++)for(let O=0;O<C.g.length;O++){const V=this.i(k)>>>16,b=this.i(k)&65535,It=C.i(O)>>>16,ce=C.i(O)&65535;R[2*k+2*O]+=b*ce,gt(R,2*k+2*O),R[2*k+2*O+1]+=V*ce,gt(R,2*k+2*O+1),R[2*k+2*O+1]+=b*It,gt(R,2*k+2*O+1),R[2*k+2*O+2]+=V*It,gt(R,2*k+2*O+2)}for(C=0;C<w;C++)R[C]=R[2*C+1]<<16|R[2*C];for(C=w;C<2*w;C++)R[C]=0;return new f(R,0)};function gt(C,w){for(;(C[w]&65535)!=C[w];)C[w+1]+=C[w]>>>16,C[w]&=65535,w++}function pt(C,w){this.g=C,this.h=w}function Pt(C,w){if(J(w))throw Error("division by zero");if(J(C))return new pt(S,S);if(W(C))return w=Pt(Z(C),w),new pt(Z(w.g),Z(w.h));if(W(w))return w=Pt(C,Z(w)),new pt(Z(w.g),w.h);if(C.g.length>30){if(W(C)||W(w))throw Error("slowDivide_ only works with positive integers.");for(var R=N,k=w;k.l(C)<=0;)R=te(R),k=te(k);var O=Nt(R,1),V=Nt(k,1);for(k=Nt(k,2),R=Nt(R,2);!J(k);){var b=V.add(k);b.l(C)<=0&&(O=O.add(R),V=b),k=Nt(k,1),R=Nt(R,1)}return w=ut(C,O.j(w)),new pt(O,w)}for(O=S;C.l(w)>=0;){for(R=Math.max(1,Math.floor(C.m()/w.m())),k=Math.ceil(Math.log(R)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),V=y(R),b=V.j(w);W(b)||b.l(C)>0;)R-=k,V=y(R),b=V.j(w);J(V)&&(V=N),O=O.add(V),C=ut(C,b)}return new pt(O,C)}r.B=function(C){return Pt(this,C).h},r.and=function(C){const w=Math.max(this.g.length,C.g.length),R=[];for(let k=0;k<w;k++)R[k]=this.i(k)&C.i(k);return new f(R,this.h&C.h)},r.or=function(C){const w=Math.max(this.g.length,C.g.length),R=[];for(let k=0;k<w;k++)R[k]=this.i(k)|C.i(k);return new f(R,this.h|C.h)},r.xor=function(C){const w=Math.max(this.g.length,C.g.length),R=[];for(let k=0;k<w;k++)R[k]=this.i(k)^C.i(k);return new f(R,this.h^C.h)};function te(C){const w=C.g.length+1,R=[];for(let k=0;k<w;k++)R[k]=C.i(k)<<1|C.i(k-1)>>>31;return new f(R,C.h)}function Nt(C,w){const R=w>>5;w%=32;const k=C.g.length-R,O=[];for(let V=0;V<k;V++)O[V]=w>0?C.i(V+R)>>>w|C.i(V+R+1)<<32-w:C.i(V+R);return new f(O,C.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,QE=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=y,f.fromString=T,Wr=f}).apply(typeof Qv<"u"?Qv:typeof self<"u"?self:typeof window<"u"?window:{});var Oc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var YE,wl,XE,jc,dm,$E,JE,ZE;(function(){var r,t=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Oc=="object"&&Oc];for(var m=0;m<c.length;++m){var v=c[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function l(c,m){if(m)t:{var v=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var P=c[A];if(!(P in v))break t;v=v[P]}c=c[c.length-1],A=v[c],m=m(A),m!=A&&m!=null&&t(v,c,{configurable:!0,writable:!0,value:m})}}l("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),l("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),l("Object.entries",function(c){return c||function(m){var v=[],A;for(A in m)Object.prototype.hasOwnProperty.call(m,A)&&v.push([A,m[A]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function p(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function g(c,m,v){return c.call.apply(c.bind,arguments)}function y(c,m,v){return y=g,y.apply(null,arguments)}function T(c,m){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function S(c,m){function v(){}v.prototype=m.prototype,c.Z=m.prototype,c.prototype=new v,c.prototype.constructor=c,c.Ob=function(A,P,j){for(var tt=Array(arguments.length-2),At=2;At<arguments.length;At++)tt[At-2]=arguments[At];return m.prototype[P].apply(A,tt)}}var N=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function H(c){const m=c.length;if(m>0){const v=Array(m);for(let A=0;A<m;A++)v[A]=c[A];return v}return[]}function J(c,m){for(let A=1;A<arguments.length;A++){const P=arguments[A];var v=typeof P;if(v=v!="object"?v:P?Array.isArray(P)?"array":v:"null",v=="array"||v=="object"&&typeof P.length=="number"){v=c.length||0;const j=P.length||0;c.length=v+j;for(let tt=0;tt<j;tt++)c[v+tt]=P[tt]}else c.push(P)}}class W{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function Z(c){f.setTimeout(()=>{throw c},0)}function ut(){var c=C;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class gt{constructor(){this.h=this.g=null}add(m,v){const A=pt.get();A.set(m,v),this.h?this.h.next=A:this.g=A,this.h=A}}var pt=new W(()=>new Pt,c=>c.reset());class Pt{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let te,Nt=!1,C=new gt,w=()=>{const c=Promise.resolve(void 0);te=()=>{c.then(R)}};function R(){for(var c;c=ut();){try{c.h.call(c.g)}catch(v){Z(v)}var m=pt;m.j(c),m.h<100&&(m.h++,c.next=m.g,m.g=c)}Nt=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var V=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};f.addEventListener("test",v,m),f.removeEventListener("test",v,m)}catch{}return c})();function b(c){return/^[\s\xa0]*$/.test(c)}function It(c,m){O.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,m)}S(It,O),It.prototype.init=function(c,m){const v=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget,m||(v=="mouseover"?m=c.fromElement:v=="mouseout"&&(m=c.toElement)),this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&It.Z.h.call(this)},It.prototype.h=function(){It.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var ce="closure_listenable_"+(Math.random()*1e6|0),q=0;function et(c,m,v,A,P){this.listener=c,this.proxy=null,this.src=m,this.type=v,this.capture=!!A,this.ha=P,this.key=++q,this.da=this.fa=!1}function at(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Dt(c,m,v){for(const A in c)m.call(v,c[A],A,c)}function qt(c,m){for(const v in c)m.call(void 0,c[v],v,c)}function M(c){const m={};for(const v in c)m[v]=c[v];return m}const Q="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nt(c,m){let v,A;for(let P=1;P<arguments.length;P++){A=arguments[P];for(v in A)c[v]=A[v];for(let j=0;j<Q.length;j++)v=Q[j],Object.prototype.hasOwnProperty.call(A,v)&&(c[v]=A[v])}}function rt(c){this.src=c,this.g={},this.h=0}rt.prototype.add=function(c,m,v,A,P){const j=c.toString();c=this.g[j],c||(c=this.g[j]=[],this.h++);const tt=wt(c,m,A,P);return tt>-1?(m=c[tt],v||(m.fa=!1)):(m=new et(m,this.src,j,!!A,P),m.fa=v,c.push(m)),m};function yt(c,m){const v=m.type;if(v in c.g){var A=c.g[v],P=Array.prototype.indexOf.call(A,m,void 0),j;(j=P>=0)&&Array.prototype.splice.call(A,P,1),j&&(at(m),c.g[v].length==0&&(delete c.g[v],c.h--))}}function wt(c,m,v,A){for(let P=0;P<c.length;++P){const j=c[P];if(!j.da&&j.listener==m&&j.capture==!!v&&j.ha==A)return P}return-1}var Ut="closure_lm_"+(Math.random()*1e6|0),Ne={};function se(c,m,v,A,P){if(Array.isArray(m)){for(let j=0;j<m.length;j++)se(c,m[j],v,A,P);return null}return v=_o(v),c&&c[ce]?c.J(m,v,p(A)?!!A.capture:!1,P):cs(c,m,v,!1,A,P)}function cs(c,m,v,A,P,j){if(!m)throw Error("Invalid event type");const tt=p(P)?!!P.capture:!!P;let At=hs(c);if(At||(c[Ut]=At=new rt(c)),v=At.add(m,v,A,tt,j),v.proxy)return v;if(A=ia(),v.proxy=A,A.src=c,A.listener=v,c.addEventListener)V||(P=tt),P===void 0&&(P=!1),c.addEventListener(m.toString(),A,P);else if(c.attachEvent)c.attachEvent(ri(m.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ia(){function c(v){return m.call(c.src,c.listener,v)}const m=go;return c}function ra(c,m,v,A,P){if(Array.isArray(m))for(var j=0;j<m.length;j++)ra(c,m[j],v,A,P);else A=p(A)?!!A.capture:!!A,v=_o(v),c&&c[ce]?(c=c.i,j=String(m).toString(),j in c.g&&(m=c.g[j],v=wt(m,v,A,P),v>-1&&(at(m[v]),Array.prototype.splice.call(m,v,1),m.length==0&&(delete c.g[j],c.h--)))):c&&(c=hs(c))&&(m=c.g[m.toString()],c=-1,m&&(c=wt(m,v,A,P)),(v=c>-1?m[c]:null)&&sa(v))}function sa(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[ce])yt(m.i,c);else{var v=c.type,A=c.proxy;m.removeEventListener?m.removeEventListener(v,A,c.capture):m.detachEvent?m.detachEvent(ri(v),A):m.addListener&&m.removeListener&&m.removeListener(A),(v=hs(m))?(yt(v,c),v.h==0&&(v.src=null,m[Ut]=null)):at(c)}}}function ri(c){return c in Ne?Ne[c]:Ne[c]="on"+c}function go(c,m){if(c.da)c=!0;else{m=new It(m,this);const v=c.listener,A=c.ha||c.src;c.fa&&sa(c),c=v.call(A,m)}return c}function hs(c){return c=c[Ut],c instanceof rt?c:null}var yo="__closure_events_fn_"+(Math.random()*1e9>>>0);function _o(c){return typeof c=="function"?c:(c[yo]||(c[yo]=function(m){return c.handleEvent(m)}),c[yo])}function _e(){k.call(this),this.i=new rt(this),this.M=this,this.G=null}S(_e,k),_e.prototype[ce]=!0,_e.prototype.removeEventListener=function(c,m,v,A){ra(this,c,m,v,A)};function De(c,m){var v,A=c.G;if(A)for(v=[];A;A=A.G)v.push(A);if(c=c.M,A=m.type||m,typeof m=="string")m=new O(m,c);else if(m instanceof O)m.target=m.target||c;else{var P=m;m=new O(A,c),nt(m,P)}P=!0;let j,tt;if(v)for(tt=v.length-1;tt>=0;tt--)j=m.g=v[tt],P=fr(j,A,!0,m)&&P;if(j=m.g=c,P=fr(j,A,!0,m)&&P,P=fr(j,A,!1,m)&&P,v)for(tt=0;tt<v.length;tt++)j=m.g=v[tt],P=fr(j,A,!1,m)&&P}_e.prototype.N=function(){if(_e.Z.N.call(this),this.i){var c=this.i;for(const m in c.g){const v=c.g[m];for(let A=0;A<v.length;A++)at(v[A]);delete c.g[m],c.h--}}this.G=null},_e.prototype.J=function(c,m,v,A){return this.i.add(String(c),m,!1,v,A)},_e.prototype.K=function(c,m,v,A){return this.i.add(String(c),m,!0,v,A)};function fr(c,m,v,A){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();let P=!0;for(let j=0;j<m.length;++j){const tt=m[j];if(tt&&!tt.da&&tt.capture==v){const At=tt.listener,me=tt.ha||tt.src;tt.fa&&yt(c.i,tt),P=At.call(me,A)!==!1&&P}}return P&&!A.defaultPrevented}function Uh(c,m){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=y(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:f.setTimeout(c,m||0)}function eu(c){c.g=Uh(()=>{c.g=null,c.i&&(c.i=!1,eu(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class tn extends k{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:eu(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function fs(c){k.call(this),this.h=c,this.g={}}S(fs,k);var vo=[];function Eo(c){Dt(c.g,function(m,v){this.g.hasOwnProperty(v)&&sa(m)},c),c.g={}}fs.prototype.N=function(){fs.Z.N.call(this),Eo(this)},fs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var dr=f.JSON.stringify,zh=f.JSON.parse,nu=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function iu(){}function ru(){}var qn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function je(){O.call(this,"d")}S(je,O);function In(){O.call(this,"c")}S(In,O);var de={},su=null;function aa(){return su=su||new _e}de.Ia="serverreachability";function au(c){O.call(this,de.Ia,c)}S(au,O);function si(c){const m=aa();De(m,new au(m))}de.STAT_EVENT="statevent";function ds(c,m){O.call(this,de.STAT_EVENT,c),this.stat=m}S(ds,O);function ve(c){const m=aa();De(m,new ds(m,c))}de.Ja="timingevent";function ai(c,m){O.call(this,de.Ja,c),this.size=m}S(ai,O);function oi(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},m)}function Hn(){this.g=!0}Hn.prototype.ua=function(){this.g=!1};function jh(c,m,v,A,P,j){c.info(function(){if(c.g)if(j){var tt="",At=j.split("&");for(let Ht=0;Ht<At.length;Ht++){var me=At[Ht].split("=");if(me.length>1){const ae=me[0];me=me[1];const Dn=ae.split("_");tt=Dn.length>=2&&Dn[1]=="type"?tt+(ae+"="+me+"&"):tt+(ae+"=redacted&")}}}else tt=null;else tt=j;return"XMLHTTP REQ ("+A+") [attempt "+P+"]: "+m+`
`+v+`
`+tt})}function ou(c,m,v,A,P,j,tt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+P+"]: "+m+`
`+v+`
`+j+" "+tt})}function li(c,m,v,A){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Bh(c,v)+(A?" "+A:"")})}function ms(c,m){c.info(function(){return"TIMEOUT: "+m})}Hn.prototype.info=function(){};function Bh(c,m){if(!c.g)return m;if(!m)return null;try{const j=JSON.parse(m);if(j){for(c=0;c<j.length;c++)if(Array.isArray(j[c])){var v=j[c];if(!(v.length<2)){var A=v[1];if(Array.isArray(A)&&!(A.length<1)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(let tt=1;tt<A.length;tt++)A[tt]=""}}}}return dr(j)}catch{return m}}var ps={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},To={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Ao;function gs(){}S(gs,iu),gs.prototype.g=function(){return new XMLHttpRequest},Ao=new gs;function Pi(c){return encodeURIComponent(String(c))}function lu(c){var m=1;c=c.split(":");const v=[];for(;m>0&&c.length;)v.push(c.shift()),m--;return c.length&&v.push(c.join(":")),v}function Fn(c,m,v,A){this.j=c,this.i=m,this.l=v,this.S=A||1,this.V=new fs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Gn}function Gn(){this.i=null,this.g="",this.h=!1}var Ee={},Pe={};function ui(c,m,v){c.M=1,c.A=ys(Ae(m)),c.u=v,c.R=!0,oa(c,null)}function oa(c,m){c.F=Date.now(),ci(c),c.B=Ae(c.A);var v=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),ha(v.i,"t",A),c.C=0,v=c.j.L,c.h=new Gn,c.g=Su(c.j,v?m:null,!c.u),c.P>0&&(c.O=new tn(y(c.Y,c,c.g),c.P)),m=c.V,v=c.g,A=c.ba;var P="readystatechange";Array.isArray(P)||(P&&(vo[0]=P.toString()),P=vo);for(let j=0;j<P.length;j++){const tt=se(v,P[j],A||m.handleEvent,!1,m.h||m);if(!tt)break;m.g[tt.key]=tt}m=c.J?M(c.J):{},c.u?(c.v||(c.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,m)):(c.v="GET",c.g.ea(c.B,c.v,null,m)),si(),jh(c.i,c.v,c.B,c.l,c.S,c.u)}Fn.prototype.ba=function(c){c=c.target;const m=this.O;m&&Yn(c)==3?m.j():this.Y(c)},Fn.prototype.Y=function(c){try{if(c==this.g)t:{const At=Yn(this.g),me=this.g.ya(),Ht=this.g.ca();if(!(At<3)&&(At!=3||this.g&&(this.h.h||this.g.la()||Be(this.g)))){this.K||At!=4||me==7||(me==8||Ht<=0?si(3):si(2)),hi(this);var m=this.g.ca();this.X=m;var v=qh(this);if(this.o=m==200,ou(this.i,this.v,this.B,this.l,this.S,At,m),this.o){if(this.U&&!this.L){e:{if(this.g){var A,P=this.g;if((A=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(A)){var j=A;break e}}j=null}if(c=j)li(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fi(this,c);else{this.o=!1,this.m=3,ve(12),mn(this),Rn(this);break t}}if(this.R){c=!0;let ae;for(;!this.K&&this.C<v.length;)if(ae=cu(this,v),ae==Pe){At==4&&(this.m=4,ve(14),c=!1),li(this.i,this.l,null,"[Incomplete Response]");break}else if(ae==Ee){this.m=4,ve(15),li(this.i,this.l,v,"[Invalid Chunk]"),c=!1;break}else li(this.i,this.l,ae,null),fi(this,ae);if(uu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||v.length!=0||this.h.h||(this.m=1,ve(16),c=!1),this.o=this.o&&c,!c)li(this.i,this.l,v,"[Invalid Chunked Response]"),mn(this),Rn(this);else if(v.length>0&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.aa&&!tt.P&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Lo(tt),tt.P=!0,ve(11))}}else li(this.i,this.l,v,null),fi(this,v);At==4&&mn(this),this.o&&!this.K&&(At==4?vu(this.j,this):(this.o=!1,ci(this)))}else Ui(this.g),m==400&&v.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),mn(this),Rn(this)}}}catch{}finally{}};function qh(c){if(!uu(c))return c.g.la();const m=Be(c.g);if(m==="")return"";let v="";const A=m.length,P=Yn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return mn(c),Rn(c),"";c.h.i=new f.TextDecoder}for(let j=0;j<A;j++)c.h.h=!0,v+=c.h.i.decode(m[j],{stream:!(P&&j==A-1)});return m.length=0,c.h.g+=v,c.C=0,c.h.g}function uu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function cu(c,m){var v=c.C,A=m.indexOf(`
`,v);return A==-1?Pe:(v=Number(m.substring(v,A)),isNaN(v)?Ee:(A+=1,A+v>m.length?Pe:(m=m.slice(A,A+v),c.C=A+v,m)))}Fn.prototype.cancel=function(){this.K=!0,mn(this)};function ci(c){c.T=Date.now()+c.H,la(c,c.H)}function la(c,m){if(c.D!=null)throw Error("WatchDog timer not null");c.D=oi(y(c.aa,c),m)}function hi(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Fn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(ms(this.i,this.B),this.M!=2&&(si(),ve(17)),mn(this),this.m=2,Rn(this)):la(this,this.T-c)};function Rn(c){c.j.I==0||c.K||vu(c.j,c)}function mn(c){hi(c);var m=c.O;m&&typeof m.dispose=="function"&&m.dispose(),c.O=null,Eo(c.V),c.g&&(m=c.g,c.g=null,m.abort(),m.dispose())}function fi(c,m){try{var v=c.j;if(v.I!=0&&(v.g==c||mi(v.h,c))){if(!c.L&&mi(v.h,c)&&v.I==3){try{var A=v.Ba.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var P=A;if(P[0]==0){t:if(!v.v){if(v.g)if(v.g.F+3e3<c.F)ga(v),Tr(v);else break t;ws(v),ve(18)}}else v.xa=P[1],0<v.xa-v.K&&P[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=oi(y(v.Va,v),6e3));di(v.h)<=1&&v.ta&&(v.ta=void 0)}else Ei(v,11)}else if((c.L||v.g==c)&&ga(v),!b(m))for(P=v.Ba.g.parse(m),m=0;m<P.length;m++){let Ht=P[m];const ae=Ht[0];if(!(ae<=v.K))if(v.K=ae,Ht=Ht[1],v.I==2)if(Ht[0]=="c"){v.M=Ht[1],v.ba=Ht[2];const Dn=Ht[3];Dn!=null&&(v.ka=Dn,v.j.info("VER="+v.ka));const Ti=Ht[4];Ti!=null&&(v.za=Ti,v.j.info("SVER="+v.za));const Xn=Ht[5];Xn!=null&&typeof Xn=="number"&&Xn>0&&(A=1.5*Xn,v.O=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const $n=c.g;if($n){const bs=$n.g?$n.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bs){var j=A.h;j.g||bs.indexOf("spdy")==-1&&bs.indexOf("quic")==-1&&bs.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(bo(j,j.h),j.h=null))}if(A.G){const ya=$n.g?$n.g.getResponseHeader("X-HTTP-Session-Id"):null;ya&&(A.wa=ya,Qt(A.J,A.G,ya))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-c.F,v.j.info("Handshake RTT: "+v.T+"ms")),A=v;var tt=c;if(A.na=Au(A,A.L?A.ba:null,A.W),tt.L){Io(A.h,tt);var At=tt,me=A.O;me&&(At.H=me),At.D&&(hi(At),ci(At)),A.g=tt}else yu(A);v.i.length>0&&vi(v)}else Ht[0]!="stop"&&Ht[0]!="close"||Ei(v,7);else v.I==3&&(Ht[0]=="stop"||Ht[0]=="close"?Ht[0]=="stop"?Ei(v,7):xo(v):Ht[0]!="noop"&&v.l&&v.l.qa(Ht),v.A=0)}}si(4)}catch{}}var Te=class{constructor(c,m){this.g=c,this.map=m}};function So(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function wo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function di(c){return c.h?1:c.g?c.g.size:0}function mi(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function bo(c,m){c.g?c.g.add(m):c.h=m}function Io(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}So.prototype.cancel=function(){if(this.i=Ro(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Ro(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const v of c.g.values())m=m.concat(v.G);return m}return H(c.i)}var hu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ua(c,m){if(c){c=c.split("&");for(let v=0;v<c.length;v++){const A=c[v].indexOf("=");let P,j=null;A>=0?(P=c[v].substring(0,A),j=c[v].substring(A+1)):P=c[v],m(P,j?decodeURIComponent(j.replace(/\+/g," ")):"")}}}function pn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;c instanceof pn?(this.l=c.l,Le(this,c.j),this.o=c.o,this.g=c.g,mr(this,c.u),this.h=c.h,Co(this,pu(c.i)),this.m=c.m):c&&(m=String(c).match(hu))?(this.l=!1,Le(this,m[1]||"",!0),this.o=pi(m[2]||""),this.g=pi(m[3]||"",!0),mr(this,m[4]),this.h=pi(m[5]||"",!0),Co(this,m[6]||"",!0),this.m=pi(m[7]||"")):(this.l=!1,this.i=new gr(null,this.l))}pn.prototype.toString=function(){const c=[];var m=this.j;m&&c.push(_s(m,ca,!0),":");var v=this.g;return(v||m=="file")&&(c.push("//"),(m=this.o)&&c.push(_s(m,ca,!0),"@"),c.push(Pi(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&c.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(_s(v,v.charAt(0)=="/"?No:fu,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",_s(v,du)),c.join("")},pn.prototype.resolve=function(c){const m=Ae(this);let v=!!c.j;v?Le(m,c.j):v=!!c.o,v?m.o=c.o:v=!!c.g,v?m.g=c.g:v=c.u!=null;var A=c.h;if(v)mr(m,c.u);else if(v=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var P=m.h.lastIndexOf("/");P!=-1&&(A=m.h.slice(0,P+1)+A)}if(P=A,P==".."||P==".")A="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){A=P.lastIndexOf("/",0)==0,P=P.split("/");const j=[];for(let tt=0;tt<P.length;){const At=P[tt++];At=="."?A&&tt==P.length&&j.push(""):At==".."?((j.length>1||j.length==1&&j[0]!="")&&j.pop(),A&&tt==P.length&&j.push("")):(j.push(At),A=!0)}A=j.join("/")}else A=P}return v?m.h=A:v=c.i.toString()!=="",v?Co(m,pu(c.i)):v=!!c.m,v&&(m.m=c.m),m};function Ae(c){return new pn(c)}function Le(c,m,v){c.j=v?pi(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function mr(c,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);c.u=m}else c.u=null}function Co(c,m,v){m instanceof gr?(c.i=m,fa(c.i,c.l)):(v||(m=_s(m,pr)),c.i=new gr(m,c.l))}function Qt(c,m,v){c.i.set(m,v)}function ys(c){return Qt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function pi(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function _s(c,m,v){return typeof c=="string"?(c=encodeURI(c).replace(m,sn),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function sn(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ca=/[#\/\?@]/g,fu=/[#\?:]/g,No=/[#\?]/g,pr=/[#\?@]/g,du=/#/g;function gr(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function an(c){c.g||(c.g=new Map,c.h=0,c.i&&ua(c.i,function(m,v){c.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}r=gr.prototype,r.add=function(c,m){an(this),this.i=null,c=yr(this,c);let v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(m),this.h+=1,this};function mu(c,m){an(c),m=yr(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function Do(c,m){return an(c),m=yr(c,m),c.g.has(m)}r.forEach=function(c,m){an(this),this.g.forEach(function(v,A){v.forEach(function(P){c.call(m,P,A,this)},this)},this)};function Oo(c,m){an(c);let v=[];if(typeof m=="string")Do(c,m)&&(v=v.concat(c.g.get(yr(c,m))));else for(c=Array.from(c.g.values()),m=0;m<c.length;m++)v=v.concat(c[m]);return v}r.set=function(c,m){return an(this),this.i=null,c=yr(this,c),Do(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},r.get=function(c,m){return c?(c=Oo(this,c),c.length>0?String(c[0]):m):m};function ha(c,m,v){mu(c,m),v.length>0&&(c.i=null,c.g.set(yr(c,m),H(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(let A=0;A<m.length;A++){var v=m[A];const P=Pi(v);v=Oo(this,v);for(let j=0;j<v.length;j++){let tt=P;v[j]!==""&&(tt+="="+Pi(v[j])),c.push(tt)}}return this.i=c.join("&")};function pu(c){const m=new gr;return m.i=c.i,c.g&&(m.g=new Map(c.g),m.h=c.h),m}function yr(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function fa(c,m){m&&!c.j&&(an(c),c.i=null,c.g.forEach(function(v,A){const P=A.toLowerCase();A!=P&&(mu(this,A),ha(this,P,v))},c)),c.j=m}function Kn(c,m){const v=new Hn;if(f.Image){const A=new Image;A.onload=T(Cn,v,"TestLoadImage: loaded",!0,m,A),A.onerror=T(Cn,v,"TestLoadImage: error",!1,m,A),A.onabort=T(Cn,v,"TestLoadImage: abort",!1,m,A),A.ontimeout=T(Cn,v,"TestLoadImage: timeout",!1,m,A),f.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else m(!1)}function Mo(c,m){const v=new Hn,A=new AbortController,P=setTimeout(()=>{A.abort(),Cn(v,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:A.signal}).then(j=>{clearTimeout(P),j.ok?Cn(v,"TestPingServer: ok",!0,m):Cn(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(P),Cn(v,"TestPingServer: error",!1,m)})}function Cn(c,m,v,A,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),A(v)}catch{}}function _r(){this.g=new nu}function gi(c){this.i=c.Sb||null,this.h=c.ab||!1}S(gi,iu),gi.prototype.g=function(){return new vs(this.i,this.h)};function vs(c,m){_e.call(this),this.H=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(vs,_e),r=vs.prototype,r.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=m,this.readyState=1,Qn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(m.body=c),(this.H||f).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Qn(this)),this.g&&(this.readyState=3,Qn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;da(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function da(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?vr(this):Qn(this),this.readyState==3&&da(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,vr(this))},r.Na=function(c){this.g&&(this.response=c,vr(this))},r.ga=function(){this.g&&vr(this)};function vr(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Qn(c)}r.setRequestHeader=function(c,m){this.A.append(c,m)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=m.next();return c.join(`\r
`)};function Qn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(vs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Nn(c){let m="";return Dt(c,function(v,A){m+=A,m+=":",m+=v,m+=`\r
`}),m}function Es(c,m,v){t:{for(A in v){var A=!1;break t}A=!0}A||(v=Nn(v),typeof c=="string"?v!=null&&Pi(v):Qt(c,m,v))}function $t(c){_e.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S($t,_e);var yi=/^https?$/i,ko=["POST","PUT"];r=$t.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,m,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Ao.g(),this.g.onreadystatechange=N(y(this.Ca,this));try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(j){Ts(this,j);return}if(c=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var P in A)v.set(P,A[P]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const j of A.keys())v.set(j,A.get(j));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(j=>j.toLowerCase()=="content-type"),P=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(ko,m,void 0)>=0)||A||P||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,tt]of v)this.g.setRequestHeader(j,tt);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(j){Ts(this,j)}};function Ts(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.o=5,Vo(c),Li(c)}function Vo(c){c.A||(c.A=!0,De(c,"complete"),De(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,De(this,"complete"),De(this,"abort"),Li(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Li(this,!0)),$t.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?As(this):this.Xa())},r.Xa=function(){As(this)};function As(c){if(c.h&&typeof u<"u"){if(c.v&&Yn(c)==4)setTimeout(c.Ca.bind(c),0);else if(De(c,"readystatechange"),Yn(c)==4){c.h=!1;try{const j=c.ca();t:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var v;if(!(v=m)){var A;if(A=j===0){let tt=String(c.D).match(hu)[1]||null;!tt&&f.self&&f.self.location&&(tt=f.self.location.protocol.slice(0,-1)),A=!yi.test(tt?tt.toLowerCase():"")}v=A}if(v)De(c,"complete"),De(c,"success");else{c.o=6;try{var P=Yn(c)>2?c.g.statusText:""}catch{P=""}c.l=P+" ["+c.ca()+"]",Vo(c)}}finally{Li(c)}}}}function Li(c,m){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const v=c.g;c.g=null,m||De(c,"ready");try{v.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Yn(c){return c.g?c.g.readyState:0}r.ca=function(){try{return Yn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),zh(m)}};function Be(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Ui(c){const m={};c=(c.g&&Yn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(b(c[A]))continue;var v=lu(c[A]);const P=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const j=m[P]||[];m[P]=j,j.push(v)}qt(m,function(A){return A.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function _i(c,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||m}function Er(c){this.za=0,this.i=[],this.j=new Hn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=_i("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=_i("baseRetryDelayMs",5e3,c),this.Za=_i("retryDelaySeedMs",1e4,c),this.Ta=_i("forwardChannelMaxRetries",2,c),this.va=_i("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new So(c&&c.concurrentRequestLimit),this.Ba=new _r,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Er.prototype,r.ka=8,r.I=1,r.connect=function(c,m,v,A){ve(0),this.W=c,this.H=m||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.J=Au(this,null,this.W),vi(this)};function xo(c){if(ma(c),c.I==3){var m=c.V++,v=Ae(c.J);if(Qt(v,"SID",c.M),Qt(v,"RID",m),Qt(v,"TYPE","terminate"),Ss(c,v),m=new Fn(c,c.j,m),m.M=2,m.A=ys(Ae(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(m.A.toString(),"")}catch{}!v&&f.Image&&(new Image().src=m.A,v=!0),v||(m.g=Su(m.j,null),m.g.ea(m.A)),m.F=Date.now(),ci(m)}Tu(c)}function Tr(c){c.g&&(Lo(c),c.g.cancel(),c.g=null)}function ma(c){Tr(c),c.v&&(f.clearTimeout(c.v),c.v=null),ga(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function vi(c){if(!wo(c.h)&&!c.m){c.m=!0;var m=c.Ea;te||w(),Nt||(te(),Nt=!0),C.add(m,c),c.D=0}}function pa(c,m){return di(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=m.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=oi(y(c.Ea,c,m),Eu(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const P=new Fn(this,this.j,c);let j=this.o;if(this.U&&(j?(j=M(j),nt(j,this.U)):j=this.U),this.u!==null||this.R||(P.J=j,j=null),this.S)t:{for(var m=0,v=0;v<this.i.length;v++){e:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(m+=A,m>4096){m=v;break t}if(m===4096||v===this.i.length-1){m=v+1;break t}}m=1e3}else m=1e3;m=gu(this,P,m),v=Ae(this.J),Qt(v,"RID",c),Qt(v,"CVER",22),this.G&&Qt(v,"X-HTTP-Session-Id",this.G),Ss(this,v),j&&(this.R?m="headers="+Pi(Nn(j))+"&"+m:this.u&&Es(v,this.u,j)),bo(this.h,P),this.Ra&&Qt(v,"TYPE","init"),this.S?(Qt(v,"$req",m),Qt(v,"SID","null"),P.U=!0,ui(P,v,null)):ui(P,v,m),this.I=2}}else this.I==3&&(c?Po(this,c):this.i.length==0||wo(this.h)||Po(this))};function Po(c,m){var v;m?v=m.l:v=c.V++;const A=Ae(c.J);Qt(A,"SID",c.M),Qt(A,"RID",v),Qt(A,"AID",c.K),Ss(c,A),c.u&&c.o&&Es(A,c.u,c.o),v=new Fn(c,c.j,v,c.D+1),c.u===null&&(v.J=c.o),m&&(c.i=m.G.concat(c.i)),m=gu(c,v,1e3),v.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),bo(c.h,v),ui(v,A,m)}function Ss(c,m){c.H&&Dt(c.H,function(v,A){Qt(m,A,v)}),c.l&&Dt({},function(v,A){Qt(m,A,v)})}function gu(c,m,v){v=Math.min(c.i.length,v);const A=c.l?y(c.l.Ka,c.l,c):null;t:{var P=c.i;let At=-1;for(;;){const me=["count="+v];At==-1?v>0?(At=P[0].g,me.push("ofs="+At)):At=0:me.push("ofs="+At);let Ht=!0;for(let ae=0;ae<v;ae++){var j=P[ae].g;const Dn=P[ae].map;if(j-=At,j<0)At=Math.max(0,P[ae].g-100),Ht=!1;else try{j="req"+j+"_"||"";try{var tt=Dn instanceof Map?Dn:Object.entries(Dn);for(const[Ti,Xn]of tt){let $n=Xn;p(Xn)&&($n=dr(Xn)),me.push(j+Ti+"="+encodeURIComponent($n))}}catch(Ti){throw me.push(j+"type="+encodeURIComponent("_badmap")),Ti}}catch{A&&A(Dn)}}if(Ht){tt=me.join("&");break t}}tt=void 0}return c=c.i.splice(0,v),m.G=c,tt}function yu(c){if(!c.g&&!c.v){c.Y=1;var m=c.Da;te||w(),Nt||(te(),Nt=!0),C.add(m,c),c.A=0}}function ws(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=oi(y(c.Da,c),Eu(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,_u(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=oi(y(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),Tr(this),_u(this))};function Lo(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function _u(c){c.g=new Fn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var m=Ae(c.na);Qt(m,"RID","rpc"),Qt(m,"SID",c.M),Qt(m,"AID",c.K),Qt(m,"CI",c.F?"0":"1"),!c.F&&c.ia&&Qt(m,"TO",c.ia),Qt(m,"TYPE","xmlhttp"),Ss(c,m),c.u&&c.o&&Es(m,c.u,c.o),c.O&&(c.g.H=c.O);var v=c.g;c=c.ba,v.M=1,v.A=ys(Ae(m)),v.u=null,v.R=!0,oa(v,c)}r.Va=function(){this.C!=null&&(this.C=null,Tr(this),ws(this),ve(19))};function ga(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function vu(c,m){var v=null;if(c.g==m){ga(c),Lo(c),c.g=null;var A=2}else if(mi(c.h,m))v=m.G,Io(c.h,m),A=1;else return;if(c.I!=0){if(m.o)if(A==1){v=m.u?m.u.length:0,m=Date.now()-m.F;var P=c.D;A=aa(),De(A,new ai(A,v)),vi(c)}else yu(c);else if(P=m.m,P==3||P==0&&m.X>0||!(A==1&&pa(c,m)||A==2&&ws(c)))switch(v&&v.length>0&&(m=c.h,m.i=m.i.concat(v)),P){case 1:Ei(c,5);break;case 4:Ei(c,10);break;case 3:Ei(c,6);break;default:Ei(c,2)}}}function Eu(c,m){let v=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(v*=2),v*m}function Ei(c,m){if(c.j.info("Error code "+m),m==2){var v=y(c.bb,c),A=c.Ua;const P=!A;A=new pn(A||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Le(A,"https"),ys(A),P?Kn(A.toString(),v):Mo(A.toString(),v)}else ve(2);c.I=0,c.l&&c.l.pa(m),Tu(c),ma(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Tu(c){if(c.I=0,c.ja=[],c.l){const m=Ro(c.h);(m.length!=0||c.i.length!=0)&&(J(c.ja,m),J(c.ja,c.i),c.h.i.length=0,H(c.i),c.i.length=0),c.l.oa()}}function Au(c,m,v){var A=v instanceof pn?Ae(v):new pn(v);if(A.g!="")m&&(A.g=m+"."+A.g),mr(A,A.u);else{var P=f.location;A=P.protocol,m=m?m+"."+P.hostname:P.hostname,P=+P.port;const j=new pn(null);A&&Le(j,A),m&&(j.g=m),P&&mr(j,P),v&&(j.h=v),A=j}return v=c.G,m=c.wa,v&&m&&Qt(A,v,m),Qt(A,"VER",c.ka),Ss(c,A),A}function Su(c,m,v){if(m&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Aa&&!c.ma?new $t(new gi({ab:v})):new $t(c.ma),m.Fa(c.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function wu(){}r=wu.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Ar(){}Ar.prototype.g=function(c,m){return new en(c,m)};function en(c,m){_e.call(this),this.g=new Er(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(c?c["X-WebChannel-Client-Profile"]=m.sa:c={"X-WebChannel-Client-Profile":m.sa}),this.g.U=c,(c=m&&m.Qb)&&!b(c)&&(this.g.u=c),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!b(m)&&(this.g.G=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new zi(this)}S(en,_e),en.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},en.prototype.close=function(){xo(this.g)},en.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.v&&(v={},v.__data__=dr(c),c=v);m.i.push(new Te(m.Ya++,c)),m.I==3&&vi(m)},en.prototype.N=function(){this.g.l=null,delete this.j,xo(this.g),delete this.g,en.Z.N.call(this)};function bu(c){je.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){t:{for(const v in m){c=v;break t}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}S(bu,je);function Iu(){In.call(this),this.status=1}S(Iu,In);function zi(c){this.g=c}S(zi,wu),zi.prototype.ra=function(){De(this.g,"a")},zi.prototype.qa=function(c){De(this.g,new bu(c))},zi.prototype.pa=function(c){De(this.g,new Iu)},zi.prototype.oa=function(){De(this.g,"b")},Ar.prototype.createWebChannel=Ar.prototype.g,en.prototype.send=en.prototype.o,en.prototype.open=en.prototype.m,en.prototype.close=en.prototype.close,ZE=function(){return new Ar},JE=function(){return aa()},$E=de,dm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ps.NO_ERROR=0,ps.TIMEOUT=8,ps.HTTP_ERROR=6,jc=ps,To.COMPLETE="complete",XE=To,ru.EventType=qn,qn.OPEN="a",qn.CLOSE="b",qn.ERROR="c",qn.MESSAGE="d",_e.prototype.listen=_e.prototype.J,wl=ru,$t.prototype.listenOnce=$t.prototype.K,$t.prototype.getLastError=$t.prototype.Ha,$t.prototype.getLastErrorCode=$t.prototype.ya,$t.prototype.getStatus=$t.prototype.ca,$t.prototype.getResponseJson=$t.prototype.La,$t.prototype.getResponseText=$t.prototype.la,$t.prototype.send=$t.prototype.ea,$t.prototype.setWithCredentials=$t.prototype.Fa,YE=$t}).apply(typeof Oc<"u"?Oc:typeof self<"u"?self:typeof window<"u"?window:{});const Yv="@firebase/firestore",Xv="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Je.UNAUTHENTICATED=new Je(null),Je.GOOGLE_CREDENTIALS=new Je("google-credentials-uid"),Je.FIRST_PARTY=new Je("first-party-uid"),Je.MOCK_USER=new Je("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=new gh("@firebase/firestore");function Qa(){return Ys.logLevel}function it(r,...t){if(Ys.logLevel<=kt.DEBUG){const n=t.map(Qm);Ys.debug(`Firestore (${ho}): ${r}`,...n)}}function ar(r,...t){if(Ys.logLevel<=kt.ERROR){const n=t.map(Qm);Ys.error(`Firestore (${ho}): ${r}`,...n)}}function no(r,...t){if(Ys.logLevel<=kt.WARN){const n=t.map(Qm);Ys.warn(`Firestore (${ho}): ${r}`,...n)}}function Qm(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,WE(r,s,n)}function WE(r,t,n){let s=`FIRESTORE (${ho}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw ar(s),new Error(s)}function Kt(r,t,n,s){let l="Unexpected state";typeof n=="string"?l=n:s=n,r||WE(t,l,s)}function Et(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class lt extends ii{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class mC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(Je.UNAUTHENTICATED)))}shutdown(){}}class pC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class gC{constructor(t){this.t=t,this.currentUser=Je.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Kt(this.o===void 0,42304);let s=this.i;const l=g=>this.i!==s?(s=this.i,n(g)):Promise.resolve();let u=new ts;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ts,t.enqueueRetryable((()=>l(this.currentUser)))};const f=()=>{const g=u;t.enqueueRetryable((async()=>{await g.promise,await l(this.currentUser)}))},p=g=>{it("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(it("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ts)}}),0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==t?(it("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Kt(typeof s.accessToken=="string",31837,{l:s}),new tT(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Kt(t===null||typeof t=="string",2055,{h:t}),new Je(t)}}class yC{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=Je.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _C{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new yC(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(Je.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class $v{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vC{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Sn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Kt(this.o===void 0,3512);const s=u=>{u.error!=null&&it("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,it("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>s(u)))};const l=u=>{it("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>l(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?l(u):it("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new $v(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(Kt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new $v(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=EC(40);for(let u=0;u<l.length;++u)s.length<20&&l[u]<n&&(s+=t.charAt(l[u]%62))}return s}}function Vt(r,t){return r<t?-1:r>t?1:0}function mm(r,t){const n=Math.min(r.length,t.length);for(let s=0;s<n;s++){const l=r.charAt(s),u=t.charAt(s);if(l!==u)return Jd(l)===Jd(u)?Vt(l,u):Jd(l)?1:-1}return Vt(r.length,t.length)}const TC=55296,AC=57343;function Jd(r){const t=r.charCodeAt(0);return t>=TC&&t<=AC}function io(r,t,n){return r.length===t.length&&r.every(((s,l)=>n(s,t[l])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jv="__name__";class Ii{constructor(t,n,s){n===void 0?n=0:n>t.length&&mt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&mt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ii.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ii?t.forEach((s=>{n.push(s)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let l=0;l<s;l++){const u=Ii.compareSegments(t.get(l),n.get(l));if(u!==0)return u}return Vt(t.length,n.length)}static compareSegments(t,n){const s=Ii.isNumericId(t),l=Ii.isNumericId(n);return s&&!l?-1:!s&&l?1:s&&l?Ii.extractNumericId(t).compare(Ii.extractNumericId(n)):mm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Wr.fromString(t.substring(4,t.length-2))}}class le extends Ii{construct(t,n,s){return new le(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new lt($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((l=>l.length>0)))}return new le(n)}static emptyPath(){return new le([])}}const SC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Qe extends Ii{construct(t,n,s){return new Qe(t,n,s)}static isValidIdentifier(t){return SC.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Qe.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Jv}static keyField(){return new Qe([Jv])}static fromServerFormat(t){const n=[];let s="",l=0;const u=()=>{if(s.length===0)throw new lt($.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;l<t.length;){const p=t[l];if(p==="\\"){if(l+1===t.length)throw new lt($.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[l+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new lt($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=g,l+=2}else p==="`"?(f=!f,l++):p!=="."||f?(s+=p,l++):(u(),l++)}if(u(),f)throw new lt($.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Qe(n)}static emptyPath(){return new Qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.path=t}static fromPath(t){return new ht(le.fromString(t))}static fromName(t){return new ht(le.fromString(t).popFirst(5))}static empty(){return new ht(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&le.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return le.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ht(new le(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(r,t,n){if(!n)throw new lt($.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function bC(r,t,n,s){if(t===!0&&s===!0)throw new lt($.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Zv(r){if(!ht.isDocumentKey(r))throw new lt($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function eT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Xm(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(s){return s.constructor?s.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":mt(12329,{type:typeof r})}function Xs(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new lt($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Xm(r);throw new lt($.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(r,t){const n={typeString:r};return t&&(n.value=t),n}function $l(r,t){if(!eT(r))throw new lt($.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const l=t[s].typeString,u="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(l&&typeof f!==l){n=`JSON field '${s}' must be a ${l}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new lt($.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv=-62135596800,t0=1e6;class re{static now(){return re.fromMillis(Date.now())}static fromDate(t){return re.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*t0);return new re(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new lt($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new lt($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<Wv)throw new lt($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new lt($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/t0}_compareTo(t){return this.seconds===t.seconds?Vt(this.nanoseconds,t.nanoseconds):Vt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:re._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if($l(t,re._jsonSchema))return new re(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-Wv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}re._jsonSchemaVersion="firestore/timestamp/1.0",re._jsonSchema={type:Ce("string",re._jsonSchemaVersion),seconds:Ce("number"),nanoseconds:Ce("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{static fromTimestamp(t){return new _t(t)}static min(){return new _t(new re(0,0))}static max(){return new _t(new re(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=-1;function IC(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=_t.fromTimestamp(s===1e9?new re(n+1,0):new re(n,s));return new ns(l,ht.empty(),t)}function RC(r){return new ns(r.readTime,r.key,Ul)}class ns{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new ns(_t.min(),ht.empty(),Ul)}static max(){return new ns(_t.max(),ht.empty(),Ul)}}function CC(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ht.comparator(r.documentKey,t.documentKey),n!==0?n:Vt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(r){if(r.code!==$.FAILED_PRECONDITION||r.message!==NC)throw r;it("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&mt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new Y(((s,l)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,l)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,l)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof Y?n:Y.resolve(n)}catch(n){return Y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):Y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):Y.reject(n)}static resolve(t){return new Y(((n,s)=>{n(t)}))}static reject(t){return new Y(((n,s)=>{s(t)}))}static waitFor(t){return new Y(((n,s)=>{let l=0,u=0,f=!1;t.forEach((p=>{++l,p.next((()=>{++u,f&&u===l&&n()}),(g=>s(g)))})),f=!0,u===l&&n()}))}static or(t){let n=Y.resolve(!1);for(const s of t)n=n.next((l=>l?Y.resolve(l):s()));return n}static forEach(t,n){const s=[];return t.forEach(((l,u)=>{s.push(n.call(this,l,u))})),this.waitFor(s)}static mapArray(t,n){return new Y(((s,l)=>{const u=t.length,f=new Array(u);let p=0;for(let g=0;g<u;g++){const y=g;n(t[y]).next((T=>{f[y]=T,++p,p===u&&s(f)}),(T=>l(T)))}}))}static doWhile(t,n){return new Y(((s,l)=>{const u=()=>{t()===!0?n().next((()=>{u()}),l):s()};u()}))}}function OC(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function mo(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Eh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $m=-1;function Th(r){return r==null}function eh(r){return r===0&&1/r==-1/0}function MC(r){return typeof r=="number"&&Number.isInteger(r)&&!eh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nT="";function kC(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=e0(t)),t=VC(r.get(n),t);return e0(t)}function VC(r,t){let n=t;const s=r.length;for(let l=0;l<s;l++){const u=r.charAt(l);switch(u){case"\0":n+="";break;case nT:n+="";break;default:n+=u}}return n}function e0(r){return r+nT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function ls(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function iT(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t,n){this.comparator=t,this.root=n||Ke.EMPTY}insert(t,n){return new ue(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(t){return new ue(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(t,s.key);if(l===0)return n+s.left.size;l<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,s)=>(t(n,s),!1)))}toString(){const t=[];return this.inorderTraversal(((n,s)=>(t.push(`${n}:${s}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Mc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Mc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Mc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Mc(this.root,t,this.comparator,!0)}}class Mc{constructor(t,n,s,l){this.isReverse=l,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&l&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ke{constructor(t,n,s,l,u){this.key=t,this.value=n,this.color=s??Ke.RED,this.left=l??Ke.EMPTY,this.right=u??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,l,u){return new Ke(t??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let l=this;const u=s(t,l.key);return l=u<0?l.copy(null,null,null,l.left.insert(t,n,s),null):u===0?l.copy(null,n,null,null,null):l.copy(null,null,null,null,l.right.insert(t,n,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,l=this;if(n(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,n),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),n(t,l.key)===0){if(l.right.isEmpty())return Ke.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,n))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw mt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw mt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw mt(27949);return t+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw mt(57766)}get value(){throw mt(16141)}get color(){throw mt(16727)}get left(){throw mt(29726)}get right(){throw mt(36894)}copy(t,n,s,l,u){return this}insert(t,n,s){return new Ke(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(t){this.comparator=t,this.data=new ue(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,s)=>(t(n),!1)))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,t[1])>=0)return;n(l.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new i0(this.data.getIterator())}getIteratorFrom(t){return new i0(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((s=>{n=n.add(s)})),n}isEqual(t){if(!(t instanceof Ve)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const l=n.getNext().key,u=s.getNext().key;if(this.comparator(l,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new Ve(this.comparator);return n.data=t,n}}class i0{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(t){this.fields=t,t.sort(Qe.comparator)}static empty(){return new wn([])}unionWith(t){let n=new Ve(Qe.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new wn(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return io(this.fields,t.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(l){try{return atob(l)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new rT("Invalid base64 string: "+u):u}})(t);return new Ye(n)}static fromUint8Array(t){const n=(function(l){let u="";for(let f=0;f<l.length;++f)u+=String.fromCharCode(l[f]);return u})(t);return new Ye(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let l=0;l<n.length;l++)s[l]=n.charCodeAt(l);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Vt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const xC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(r){if(Kt(!!r,39018),typeof r=="string"){let t=0;const n=xC.exec(r);if(Kt(!!n,46558,{timestamp:r}),n[1]){let l=n[1];l=(l+"000000000").substr(0,9),t=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:ye(r.seconds),nanos:ye(r.nanos)}}function ye(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function rs(r){return typeof r=="string"?Ye.fromBase64String(r):Ye.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT="server_timestamp",aT="__type__",oT="__previous_value__",lT="__local_write_time__";function Jm(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[aT])==null?void 0:s.stringValue)===sT}function Ah(r){const t=r.mapValue.fields[oT];return Jm(t)?Ah(t):t}function zl(r){const t=is(r.mapValue.fields[lT].timestampValue);return new re(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC{constructor(t,n,s,l,u,f,p,g,y,T){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=l,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=y,this.isUsingEmulator=T}}const nh="(default)";class jl{constructor(t,n){this.projectId=t,this.database=n||nh}static empty(){return new jl("","")}get isDefaultDatabase(){return this.database===nh}isEqual(t){return t instanceof jl&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT="__type__",LC="__max__",kc={mapValue:{}},cT="__vector__",ih="value";function ss(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Jm(r)?4:zC(r)?9007199254740991:UC(r)?10:11:mt(28295,{value:r})}function Vi(r,t){if(r===t)return!0;const n=ss(r);if(n!==ss(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return zl(r).isEqual(zl(t));case 3:return(function(l,u){if(typeof l.timestampValue=="string"&&typeof u.timestampValue=="string"&&l.timestampValue.length===u.timestampValue.length)return l.timestampValue===u.timestampValue;const f=is(l.timestampValue),p=is(u.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(l,u){return rs(l.bytesValue).isEqual(rs(u.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(l,u){return ye(l.geoPointValue.latitude)===ye(u.geoPointValue.latitude)&&ye(l.geoPointValue.longitude)===ye(u.geoPointValue.longitude)})(r,t);case 2:return(function(l,u){if("integerValue"in l&&"integerValue"in u)return ye(l.integerValue)===ye(u.integerValue);if("doubleValue"in l&&"doubleValue"in u){const f=ye(l.doubleValue),p=ye(u.doubleValue);return f===p?eh(f)===eh(p):isNaN(f)&&isNaN(p)}return!1})(r,t);case 9:return io(r.arrayValue.values||[],t.arrayValue.values||[],Vi);case 10:case 11:return(function(l,u){const f=l.mapValue.fields||{},p=u.mapValue.fields||{};if(n0(f)!==n0(p))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(p[g]===void 0||!Vi(f[g],p[g])))return!1;return!0})(r,t);default:return mt(52216,{left:r})}}function Bl(r,t){return(r.values||[]).find((n=>Vi(n,t)))!==void 0}function ro(r,t){if(r===t)return 0;const n=ss(r),s=ss(t);if(n!==s)return Vt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Vt(r.booleanValue,t.booleanValue);case 2:return(function(u,f){const p=ye(u.integerValue||u.doubleValue),g=ye(f.integerValue||f.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(r,t);case 3:return r0(r.timestampValue,t.timestampValue);case 4:return r0(zl(r),zl(t));case 5:return mm(r.stringValue,t.stringValue);case 6:return(function(u,f){const p=rs(u),g=rs(f);return p.compareTo(g)})(r.bytesValue,t.bytesValue);case 7:return(function(u,f){const p=u.split("/"),g=f.split("/");for(let y=0;y<p.length&&y<g.length;y++){const T=Vt(p[y],g[y]);if(T!==0)return T}return Vt(p.length,g.length)})(r.referenceValue,t.referenceValue);case 8:return(function(u,f){const p=Vt(ye(u.latitude),ye(f.latitude));return p!==0?p:Vt(ye(u.longitude),ye(f.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return s0(r.arrayValue,t.arrayValue);case 10:return(function(u,f){var N,H,J,W;const p=u.fields||{},g=f.fields||{},y=(N=p[ih])==null?void 0:N.arrayValue,T=(H=g[ih])==null?void 0:H.arrayValue,S=Vt(((J=y==null?void 0:y.values)==null?void 0:J.length)||0,((W=T==null?void 0:T.values)==null?void 0:W.length)||0);return S!==0?S:s0(y,T)})(r.mapValue,t.mapValue);case 11:return(function(u,f){if(u===kc.mapValue&&f===kc.mapValue)return 0;if(u===kc.mapValue)return 1;if(f===kc.mapValue)return-1;const p=u.fields||{},g=Object.keys(p),y=f.fields||{},T=Object.keys(y);g.sort(),T.sort();for(let S=0;S<g.length&&S<T.length;++S){const N=mm(g[S],T[S]);if(N!==0)return N;const H=ro(p[g[S]],y[T[S]]);if(H!==0)return H}return Vt(g.length,T.length)})(r.mapValue,t.mapValue);default:throw mt(23264,{he:n})}}function r0(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Vt(r,t);const n=is(r),s=is(t),l=Vt(n.seconds,s.seconds);return l!==0?l:Vt(n.nanos,s.nanos)}function s0(r,t){const n=r.values||[],s=t.values||[];for(let l=0;l<n.length&&l<s.length;++l){const u=ro(n[l],s[l]);if(u)return u}return Vt(n.length,s.length)}function so(r){return pm(r)}function pm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=is(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return rs(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return ht.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",l=!0;for(const u of n.values||[])l?l=!1:s+=",",s+=pm(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let l="{",u=!0;for(const f of s)u?u=!1:l+=",",l+=`${f}:${pm(n.fields[f])}`;return l+"}"})(r.mapValue):mt(61005,{value:r})}function Bc(r){switch(ss(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ah(r);return t?16+Bc(t):16;case 5:return 2*r.stringValue.length;case 6:return rs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((l,u)=>l+Bc(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let l=0;return ls(s.fields,((u,f)=>{l+=u.length+Bc(f)})),l})(r.mapValue);default:throw mt(13486,{value:r})}}function gm(r){return!!r&&"integerValue"in r}function Zm(r){return!!r&&"arrayValue"in r}function a0(r){return!!r&&"nullValue"in r}function o0(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function qc(r){return!!r&&"mapValue"in r}function UC(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[uT])==null?void 0:s.stringValue)===cT}function Dl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return ls(r.mapValue.fields,((n,s)=>t.mapValue.fields[n]=Dl(s))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Dl(r.arrayValue.values[n]);return t}return{...r}}function zC(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===LC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t){this.value=t}static empty(){return new dn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!qc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Dl(n)}setAll(t){let n=Qe.emptyPath(),s={},l=[];t.forEach(((f,p)=>{if(!n.isImmediateParentOf(p)){const g=this.getFieldsMap(n);this.applyChanges(g,s,l),s={},l=[],n=p.popLast()}f?s[p.lastSegment()]=Dl(f):l.push(p.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,l)}delete(t){const n=this.field(t.popLast());qc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Vi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let l=n.mapValue.fields[t.get(s)];qc(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=l),n=l}return n.mapValue.fields}applyChanges(t,n,s){ls(n,((l,u)=>t[l]=u));for(const l of s)delete t[l]}clone(){return new dn(Dl(this.value))}}function hT(r){const t=[];return ls(r.fields,((n,s)=>{const l=new Qe([n]);if(qc(s)){const u=hT(s.mapValue).fields;if(u.length===0)t.push(l);else for(const f of u)t.push(l.child(f))}else t.push(l)})),new wn(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(t,n,s,l,u,f,p){this.key=t,this.documentType=n,this.version=s,this.readTime=l,this.createTime=u,this.data=f,this.documentState=p}static newInvalidDocument(t){return new Ze(t,0,_t.min(),_t.min(),_t.min(),dn.empty(),0)}static newFoundDocument(t,n,s,l){return new Ze(t,1,n,_t.min(),s,l,0)}static newNoDocument(t,n){return new Ze(t,2,n,_t.min(),_t.min(),dn.empty(),0)}static newUnknownDocument(t,n){return new Ze(t,3,n,_t.min(),_t.min(),dn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(_t.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_t.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ze&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(t,n){this.position=t,this.inclusive=n}}function l0(r,t,n){let s=0;for(let l=0;l<r.position.length;l++){const u=t[l],f=r.position[l];if(u.field.isKeyField()?s=ht.comparator(ht.fromName(f.referenceValue),n.key):s=ro(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function u0(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Vi(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(t,n="asc"){this.field=t,this.dir=n}}function jC(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{}class Me extends fT{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new qC(t,n,s):n==="array-contains"?new GC(t,s):n==="in"?new KC(t,s):n==="not-in"?new QC(t,s):n==="array-contains-any"?new YC(t,s):new Me(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new HC(t,s):new FC(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ro(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.matchesComparison(ro(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return mt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class xi extends fT{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new xi(t,n)}matches(t){return dT(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function dT(r){return r.op==="and"}function mT(r){return BC(r)&&dT(r)}function BC(r){for(const t of r.filters)if(t instanceof xi)return!1;return!0}function ym(r){if(r instanceof Me)return r.field.canonicalString()+r.op.toString()+so(r.value);if(mT(r))return r.filters.map((t=>ym(t))).join(",");{const t=r.filters.map((n=>ym(n))).join(",");return`${r.op}(${t})`}}function pT(r,t){return r instanceof Me?(function(s,l){return l instanceof Me&&s.op===l.op&&s.field.isEqual(l.field)&&Vi(s.value,l.value)})(r,t):r instanceof xi?(function(s,l){return l instanceof xi&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce(((u,f,p)=>u&&pT(f,l.filters[p])),!0):!1})(r,t):void mt(19439)}function gT(r){return r instanceof Me?(function(n){return`${n.field.canonicalString()} ${n.op} ${so(n.value)}`})(r):r instanceof xi?(function(n){return n.op.toString()+" {"+n.getFilters().map(gT).join(" ,")+"}"})(r):"Filter"}class qC extends Me{constructor(t,n,s){super(t,n,s),this.key=ht.fromName(s.referenceValue)}matches(t){const n=ht.comparator(t.key,this.key);return this.matchesComparison(n)}}class HC extends Me{constructor(t,n){super(t,"in",n),this.keys=yT("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class FC extends Me{constructor(t,n){super(t,"not-in",n),this.keys=yT("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function yT(r,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map((s=>ht.fromName(s.referenceValue)))}class GC extends Me{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Zm(n)&&Bl(n.arrayValue,this.value)}}class KC extends Me{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Bl(this.value.arrayValue,n)}}class QC extends Me{constructor(t,n){super(t,"not-in",n)}matches(t){if(Bl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Bl(this.value.arrayValue,n)}}class YC extends Me{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Zm(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Bl(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XC{constructor(t,n=null,s=[],l=[],u=null,f=null,p=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=l,this.limit=u,this.startAt=f,this.endAt=p,this.Te=null}}function c0(r,t=null,n=[],s=[],l=null,u=null,f=null){return new XC(r,t,n,s,l,u,f)}function Wm(r){const t=Et(r);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((s=>ym(s))).join(","),n+="|ob:",n+=t.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Th(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>so(s))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>so(s))).join(",")),t.Te=n}return t.Te}function tp(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!jC(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!pT(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!u0(r.startAt,t.startAt)&&u0(r.endAt,t.endAt)}function _m(r){return ht.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(t,n=null,s=[],l=[],u=null,f="F",p=null,g=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=l,this.limit=u,this.limitType=f,this.startAt=p,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function $C(r,t,n,s,l,u,f,p){return new Sh(r,t,n,s,l,u,f,p)}function ep(r){return new Sh(r)}function h0(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function JC(r){return r.collectionGroup!==null}function Ol(r){const t=Et(r);if(t.Ie===null){t.Ie=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new Ve(Qe.comparator);return f.filters.forEach((g=>{g.getFlattenedFilters().forEach((y=>{y.isInequality()&&(p=p.add(y.field))}))})),p})(t).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new sh(u,s))})),n.has(Qe.keyField().canonicalString())||t.Ie.push(new sh(Qe.keyField(),s))}return t.Ie}function Ci(r){const t=Et(r);return t.Ee||(t.Ee=ZC(t,Ol(r))),t.Ee}function ZC(r,t){if(r.limitType==="F")return c0(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((l=>{const u=l.dir==="desc"?"asc":"desc";return new sh(l.field,u)}));const n=r.endAt?new rh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new rh(r.startAt.position,r.startAt.inclusive):null;return c0(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function vm(r,t,n){return new Sh(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function wh(r,t){return tp(Ci(r),Ci(t))&&r.limitType===t.limitType}function _T(r){return`${Wm(Ci(r))}|lt:${r.limitType}`}function Ya(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((l=>gT(l))).join(", ")}]`),Th(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((l=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(l))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((l=>so(l))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((l=>so(l))).join(",")),`Target(${s})`})(Ci(r))}; limitType=${r.limitType})`}function bh(r,t){return t.isFoundDocument()&&(function(s,l){const u=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ht.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,t)&&(function(s,l){for(const u of Ol(s))if(!u.field.isKeyField()&&l.data.field(u.field)===null)return!1;return!0})(r,t)&&(function(s,l){for(const u of s.filters)if(!u.matches(l))return!1;return!0})(r,t)&&(function(s,l){return!(s.startAt&&!(function(f,p,g){const y=l0(f,p,g);return f.inclusive?y<=0:y<0})(s.startAt,Ol(s),l)||s.endAt&&!(function(f,p,g){const y=l0(f,p,g);return f.inclusive?y>=0:y>0})(s.endAt,Ol(s),l))})(r,t)}function WC(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function vT(r){return(t,n)=>{let s=!1;for(const l of Ol(r)){const u=tN(l,t,n);if(u!==0)return u;s=s||l.field.isKeyField()}return 0}}function tN(r,t,n){const s=r.field.isKeyField()?ht.comparator(t.key,n.key):(function(u,f,p){const g=f.data.field(u),y=p.data.field(u);return g!==null&&y!==null?ro(g,y):mt(42886)})(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return mt(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[l,u]of s)if(this.equalsFn(l,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),l=this.inner[s];if(l===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<l.length;u++)if(this.equalsFn(l[u][0],t))return void(l[u]=[t,n]);l.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],t))return s.length===1?delete this.inner[n]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(t){ls(this.inner,((n,s)=>{for(const[l,u]of s)t(l,u)}))}isEmpty(){return iT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=new ue(ht.comparator);function or(){return eN}const ET=new ue(ht.comparator);function bl(...r){let t=ET;for(const n of r)t=t.insert(n.key,n);return t}function TT(r){let t=ET;return r.forEach(((n,s)=>t=t.insert(n,s.overlayedDocument))),t}function Hs(){return Ml()}function AT(){return Ml()}function Ml(){return new ea((r=>r.toString()),((r,t)=>r.isEqual(t)))}const nN=new ue(ht.comparator),iN=new Ve(ht.comparator);function xt(...r){let t=iN;for(const n of r)t=t.add(n);return t}const rN=new Ve(Vt);function sN(){return rN}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:eh(t)?"-0":t}}function ST(r){return{integerValue:""+r}}function aN(r,t){return MC(t)?ST(t):np(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(){this._=void 0}}function oN(r,t,n){return r instanceof ah?(function(l,u){const f={fields:{[aT]:{stringValue:sT},[lT]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return u&&Jm(u)&&(u=Ah(u)),u&&(f.fields[oT]=u),{mapValue:f}})(n,t):r instanceof ql?bT(r,t):r instanceof Hl?IT(r,t):(function(l,u){const f=wT(l,u),p=f0(f)+f0(l.Ae);return gm(f)&&gm(l.Ae)?ST(p):np(l.serializer,p)})(r,t)}function lN(r,t,n){return r instanceof ql?bT(r,t):r instanceof Hl?IT(r,t):n}function wT(r,t){return r instanceof oh?(function(s){return gm(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(t)?t:{integerValue:0}:null}class ah extends Ih{}class ql extends Ih{constructor(t){super(),this.elements=t}}function bT(r,t){const n=RT(t);for(const s of r.elements)n.some((l=>Vi(l,s)))||n.push(s);return{arrayValue:{values:n}}}class Hl extends Ih{constructor(t){super(),this.elements=t}}function IT(r,t){let n=RT(t);for(const s of r.elements)n=n.filter((l=>!Vi(l,s)));return{arrayValue:{values:n}}}class oh extends Ih{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function f0(r){return ye(r.integerValue||r.doubleValue)}function RT(r){return Zm(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}function uN(r,t){return r.field.isEqual(t.field)&&(function(s,l){return s instanceof ql&&l instanceof ql||s instanceof Hl&&l instanceof Hl?io(s.elements,l.elements,Vi):s instanceof oh&&l instanceof oh?Vi(s.Ae,l.Ae):s instanceof ah&&l instanceof ah})(r.transform,t.transform)}class cN{constructor(t,n){this.version=t,this.transformResults=n}}class Ni{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new Ni}static exists(t){return new Ni(void 0,t)}static updateTime(t){return new Ni(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Hc(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Rh{}function CT(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new DT(r.key,Ni.none()):new Jl(r.key,r.data,Ni.none());{const n=r.data,s=dn.empty();let l=new Ve(Qe.comparator);for(let u of t.fields)if(!l.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),l=l.add(u)}return new us(r.key,s,new wn(l.toArray()),Ni.none())}}function hN(r,t,n){r instanceof Jl?(function(l,u,f){const p=l.value.clone(),g=m0(l.fieldTransforms,u,f.transformResults);p.setAll(g),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(r,t,n):r instanceof us?(function(l,u,f){if(!Hc(l.precondition,u))return void u.convertToUnknownDocument(f.version);const p=m0(l.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(NT(l)),g.setAll(p),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()})(r,t,n):(function(l,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,n)}function kl(r,t,n,s){return r instanceof Jl?(function(u,f,p,g){if(!Hc(u.precondition,f))return p;const y=u.value.clone(),T=p0(u.fieldTransforms,g,f);return y.setAll(T),f.convertToFoundDocument(f.version,y).setHasLocalMutations(),null})(r,t,n,s):r instanceof us?(function(u,f,p,g){if(!Hc(u.precondition,f))return p;const y=p0(u.fieldTransforms,g,f),T=f.data;return T.setAll(NT(u)),T.setAll(y),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(r,t,n,s):(function(u,f,p){return Hc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p})(r,t,n)}function fN(r,t){let n=null;for(const s of r.fieldTransforms){const l=t.data.field(s.field),u=wT(s.transform,l||null);u!=null&&(n===null&&(n=dn.empty()),n.set(s.field,u))}return n||null}function d0(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&io(s,l,((u,f)=>uN(u,f)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Jl extends Rh{constructor(t,n,s,l=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class us extends Rh{constructor(t,n,s,l,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=l,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function NT(r){const t=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}})),t}function m0(r,t,n){const s=new Map;Kt(r.length===n.length,32656,{Re:n.length,Ve:r.length});for(let l=0;l<n.length;l++){const u=r[l],f=u.transform,p=t.data.field(u.field);s.set(u.field,lN(f,p,n[l]))}return s}function p0(r,t,n){const s=new Map;for(const l of r){const u=l.transform,f=n.data.field(l.field);s.set(l.field,oN(u,f,t))}return s}class DT extends Rh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dN extends Rh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(t,n,s,l){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let l=0;l<this.mutations.length;l++){const u=this.mutations[l];u.key.isEqual(t.key)&&hN(u,t,s[l])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=kl(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=kl(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=AT();return this.mutations.forEach((l=>{const u=t.get(l.key),f=u.overlayedDocument;let p=this.applyToLocalView(f,u.mutatedFields);p=n.has(l.key)?null:p;const g=CT(f,p);g!==null&&s.set(l.key,g),f.isValidDocument()||f.convertToNoDocument(_t.min())})),s}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),xt())}isEqual(t){return this.batchId===t.batchId&&io(this.mutations,t.mutations,((n,s)=>d0(n,s)))&&io(this.baseMutations,t.baseMutations,((n,s)=>d0(n,s)))}}class ip{constructor(t,n,s,l){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=l}static from(t,n,s){Kt(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let l=(function(){return nN})();const u=t.mutations;for(let f=0;f<u.length;f++)l=l.insert(u[f].key,s[f].version);return new ip(t,n,s,l)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re,zt;function yN(r){switch(r){case $.OK:return mt(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return mt(15467,{code:r})}}function OT(r){if(r===void 0)return ar("GRPC error has no .code"),$.UNKNOWN;switch(r){case Re.OK:return $.OK;case Re.CANCELLED:return $.CANCELLED;case Re.UNKNOWN:return $.UNKNOWN;case Re.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Re.INTERNAL:return $.INTERNAL;case Re.UNAVAILABLE:return $.UNAVAILABLE;case Re.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Re.NOT_FOUND:return $.NOT_FOUND;case Re.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Re.ABORTED:return $.ABORTED;case Re.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Re.DATA_LOSS:return $.DATA_LOSS;default:return mt(39323,{code:r})}}(zt=Re||(Re={}))[zt.OK=0]="OK",zt[zt.CANCELLED=1]="CANCELLED",zt[zt.UNKNOWN=2]="UNKNOWN",zt[zt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",zt[zt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",zt[zt.NOT_FOUND=5]="NOT_FOUND",zt[zt.ALREADY_EXISTS=6]="ALREADY_EXISTS",zt[zt.PERMISSION_DENIED=7]="PERMISSION_DENIED",zt[zt.UNAUTHENTICATED=16]="UNAUTHENTICATED",zt[zt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",zt[zt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",zt[zt.ABORTED=10]="ABORTED",zt[zt.OUT_OF_RANGE=11]="OUT_OF_RANGE",zt[zt.UNIMPLEMENTED=12]="UNIMPLEMENTED",zt[zt.INTERNAL=13]="INTERNAL",zt[zt.UNAVAILABLE=14]="UNAVAILABLE",zt[zt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN=new Wr([4294967295,4294967295],0);function g0(r){const t=_N().encode(r),n=new QE;return n.update(t),new Uint8Array(n.digest())}function y0(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),l=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Wr([n,s],0),new Wr([l,u],0)]}class rp{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Il(`Invalid padding: ${n}`);if(s<0)throw new Il(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new Il(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new Il(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Wr.fromNumber(this.ge)}ye(t,n,s){let l=t.add(n.multiply(Wr.fromNumber(s)));return l.compare(vN)===1&&(l=new Wr([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=g0(t),[s,l]=y0(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,l,u);if(!this.we(f))return!1}return!0}static create(t,n,s){const l=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new rp(u,l,n);return s.forEach((p=>f.insert(p))),f}insert(t){if(this.ge===0)return;const n=g0(t),[s,l]=y0(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,l,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class Il extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(t,n,s,l,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const l=new Map;return l.set(t,Zl.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Ch(_t.min(),l,new ue(Vt),or(),xt())}}class Zl{constructor(t,n,s,l,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new Zl(s,n,xt(),xt(),xt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(t,n,s,l){this.be=t,this.removedTargetIds=n,this.key=s,this.De=l}}class MT{constructor(t,n){this.targetId=t,this.Ce=n}}class kT{constructor(t,n,s=Ye.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=l}}class _0{constructor(){this.ve=0,this.Fe=v0(),this.Me=Ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=xt(),n=xt(),s=xt();return this.Fe.forEach(((l,u)=>{switch(u){case 0:t=t.add(l);break;case 2:n=n.add(l);break;case 1:s=s.add(l);break;default:mt(38017,{changeType:u})}})),new Zl(this.Me,this.xe,t,n,s)}qe(){this.Oe=!1,this.Fe=v0()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,Kt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class EN{constructor(t){this.Ge=t,this.ze=new Map,this.je=or(),this.Je=Vc(),this.He=Vc(),this.Ye=new ue(Vt)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const s=this.nt(n);switch(t.state){case 0:this.rt(n)&&s.Le(t.resumeToken);break;case 1:s.Ke(),s.Ne||s.qe(),s.Le(t.resumeToken);break;case 2:s.Ke(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.We(),s.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(t.resumeToken));break;default:mt(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((s,l)=>{this.rt(l)&&n(l)}))}st(t){const n=t.targetId,s=t.Ce.count,l=this.ot(n);if(l){const u=l.target;if(_m(u))if(s===0){const f=new ht(u.path);this.et(n,f,Ze.newNoDocument(f,_t.min()))}else Kt(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const p=this.ut(t),g=p?this.ct(p,t,f):1;if(g!==0){this.it(n);const y=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,y)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:u=0}=n;let f,p;try{f=rs(s).toUint8Array()}catch(g){if(g instanceof rT)return no("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new rp(f,l,u)}catch(g){return no(g instanceof Il?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.ge===0?null:p}ct(t,n,s){return n.Ce.count===s-this.Pt(t,n.targetId)?0:2}Pt(t,n){const s=this.Ge.getRemoteKeysForTarget(n);let l=0;return s.forEach((u=>{const f=this.Ge.ht(),p=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(p)||(this.et(n,u,null),l++)})),l}Tt(t){const n=new Map;this.ze.forEach(((u,f)=>{const p=this.ot(f);if(p){if(u.current&&_m(p.target)){const g=new ht(p.target.path);this.It(g).has(f)||this.Et(f,g)||this.et(f,g,Ze.newNoDocument(g,t))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let s=xt();this.He.forEach(((u,f)=>{let p=!0;f.forEachWhile((g=>{const y=this.ot(g);return!y||y.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const l=new Ch(t,n,this.Ye,this.je,s);return this.je=or(),this.Je=Vc(),this.He=Vc(),this.Ye=new ue(Vt),l}Xe(t,n){if(!this.rt(t))return;const s=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,s),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,s){if(!this.rt(t))return;const l=this.nt(t);this.Et(t,n)?l.Qe(n,1):l.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),s&&(this.je=this.je.insert(n,s))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new _0,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new Ve(Vt),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new Ve(Vt),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||it("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new _0),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Vc(){return new ue(ht.comparator)}function v0(){return new ue(ht.comparator)}const TN={asc:"ASCENDING",desc:"DESCENDING"},AN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},SN={and:"AND",or:"OR"};class wN{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Em(r,t){return r.useProto3Json||Th(t)?t:{value:t}}function lh(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function VT(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function bN(r,t){return lh(r,t.toTimestamp())}function Di(r){return Kt(!!r,49232),_t.fromTimestamp((function(n){const s=is(n);return new re(s.seconds,s.nanos)})(r))}function sp(r,t){return Tm(r,t).canonicalString()}function Tm(r,t){const n=(function(l){return new le(["projects",l.projectId,"databases",l.database])})(r).child("documents");return t===void 0?n:n.child(t)}function xT(r){const t=le.fromString(r);return Kt(jT(t),10190,{key:t.toString()}),t}function Am(r,t){return sp(r.databaseId,t.path)}function Zd(r,t){const n=xT(t);if(n.get(1)!==r.databaseId.projectId)throw new lt($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new lt($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ht(LT(n))}function PT(r,t){return sp(r.databaseId,t)}function IN(r){const t=xT(r);return t.length===4?le.emptyPath():LT(t)}function Sm(r){return new le(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function LT(r){return Kt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function E0(r,t,n){return{name:Am(r,t),fields:n.value.mapValue.fields}}function RN(r,t){let n;if("targetChange"in t){t.targetChange;const s=(function(y){return y==="NO_CHANGE"?0:y==="ADD"?1:y==="REMOVE"?2:y==="CURRENT"?3:y==="RESET"?4:mt(39313,{state:y})})(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],u=(function(y,T){return y.useProto3Json?(Kt(T===void 0||typeof T=="string",58123),Ye.fromBase64String(T||"")):(Kt(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Ye.fromUint8Array(T||new Uint8Array))})(r,t.targetChange.resumeToken),f=t.targetChange.cause,p=f&&(function(y){const T=y.code===void 0?$.UNKNOWN:OT(y.code);return new lt(T,y.message||"")})(f);n=new kT(s,l,u,p||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const l=Zd(r,s.document.name),u=Di(s.document.updateTime),f=s.document.createTime?Di(s.document.createTime):_t.min(),p=new dn({mapValue:{fields:s.document.fields}}),g=Ze.newFoundDocument(l,u,f,p),y=s.targetIds||[],T=s.removedTargetIds||[];n=new Fc(y,T,g.key,g)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const l=Zd(r,s.document),u=s.readTime?Di(s.readTime):_t.min(),f=Ze.newNoDocument(l,u),p=s.removedTargetIds||[];n=new Fc([],p,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const l=Zd(r,s.document),u=s.removedTargetIds||[];n=new Fc([],u,l,null)}else{if(!("filter"in t))return mt(11601,{Rt:t});{t.filter;const s=t.filter;s.targetId;const{count:l=0,unchangedNames:u}=s,f=new gN(l,u),p=s.targetId;n=new MT(p,f)}}return n}function CN(r,t){let n;if(t instanceof Jl)n={update:E0(r,t.key,t.value)};else if(t instanceof DT)n={delete:Am(r,t.key)};else if(t instanceof us)n={update:E0(r,t.key,t.data),updateMask:LN(t.fieldMask)};else{if(!(t instanceof dN))return mt(16599,{Vt:t.type});n={verify:Am(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((s=>(function(u,f){const p=f.transform;if(p instanceof ah)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof ql)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Hl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof oh)return{fieldPath:f.field.canonicalString(),increment:p.Ae};throw mt(20930,{transform:f.transform})})(0,s)))),t.precondition.isNone||(n.currentDocument=(function(l,u){return u.updateTime!==void 0?{updateTime:bN(l,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:mt(27497)})(r,t.precondition)),n}function NN(r,t){return r&&r.length>0?(Kt(t!==void 0,14353),r.map((n=>(function(l,u){let f=l.updateTime?Di(l.updateTime):Di(u);return f.isEqual(_t.min())&&(f=Di(u)),new cN(f,l.transformResults||[])})(n,t)))):[]}function DN(r,t){return{documents:[PT(r,t.path)]}}function ON(r,t){const n={structuredQuery:{}},s=t.path;let l;t.collectionGroup!==null?(l=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=PT(r,l);const u=(function(y){if(y.length!==0)return zT(xi.create(y,"and"))})(t.filters);u&&(n.structuredQuery.where=u);const f=(function(y){if(y.length!==0)return y.map((T=>(function(N){return{field:Xa(N.field),direction:VN(N.dir)}})(T)))})(t.orderBy);f&&(n.structuredQuery.orderBy=f);const p=Em(r,t.limit);return p!==null&&(n.structuredQuery.limit=p),t.startAt&&(n.structuredQuery.startAt=(function(y){return{before:y.inclusive,values:y.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(y){return{before:!y.inclusive,values:y.position}})(t.endAt)),{ft:n,parent:l}}function MN(r){let t=IN(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let l=null;if(s>0){Kt(s===1,65062);const T=n.from[0];T.allDescendants?l=T.collectionId:t=t.child(T.collectionId)}let u=[];n.where&&(u=(function(S){const N=UT(S);return N instanceof xi&&mT(N)?N.getFilters():[N]})(n.where));let f=[];n.orderBy&&(f=(function(S){return S.map((N=>(function(J){return new sh($a(J.field),(function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(J.direction))})(N)))})(n.orderBy));let p=null;n.limit&&(p=(function(S){let N;return N=typeof S=="object"?S.value:S,Th(N)?null:N})(n.limit));let g=null;n.startAt&&(g=(function(S){const N=!!S.before,H=S.values||[];return new rh(H,N)})(n.startAt));let y=null;return n.endAt&&(y=(function(S){const N=!S.before,H=S.values||[];return new rh(H,N)})(n.endAt)),$C(t,l,f,u,p,"F",g,y)}function kN(r,t){const n=(function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return mt(28987,{purpose:l})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function UT(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=$a(n.unaryFilter.field);return Me.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=$a(n.unaryFilter.field);return Me.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=$a(n.unaryFilter.field);return Me.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=$a(n.unaryFilter.field);return Me.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return mt(61313);default:return mt(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Me.create($a(n.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return mt(58110);default:return mt(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return xi.create(n.compositeFilter.filters.map((s=>UT(s))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return mt(1026)}})(n.compositeFilter.op))})(r):mt(30097,{filter:r})}function VN(r){return TN[r]}function xN(r){return AN[r]}function PN(r){return SN[r]}function Xa(r){return{fieldPath:r.canonicalString()}}function $a(r){return Qe.fromServerFormat(r.fieldPath)}function zT(r){return r instanceof Me?(function(n){if(n.op==="=="){if(o0(n.value))return{unaryFilter:{field:Xa(n.field),op:"IS_NAN"}};if(a0(n.value))return{unaryFilter:{field:Xa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(o0(n.value))return{unaryFilter:{field:Xa(n.field),op:"IS_NOT_NAN"}};if(a0(n.value))return{unaryFilter:{field:Xa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xa(n.field),op:xN(n.op),value:n.value}}})(r):r instanceof xi?(function(n){const s=n.getFilters().map((l=>zT(l)));return s.length===1?s[0]:{compositeFilter:{op:PN(n.op),filters:s}}})(r):mt(54877,{filter:r})}function LN(r){const t=[];return r.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function jT(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,n,s,l,u=_t.min(),f=_t.min(),p=Ye.EMPTY_BYTE_STRING,g=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(t){return new $r(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new $r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(t){this.yt=t}}function zN(r){const t=MN({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?vm(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jN{constructor(){this.Cn=new BN}addToCollectionParentIndex(t,n){return this.Cn.add(n),Y.resolve()}getCollectionParents(t,n){return Y.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return Y.resolve()}deleteFieldIndex(t,n){return Y.resolve()}deleteAllFieldIndexes(t){return Y.resolve()}createTargetIndexes(t,n){return Y.resolve()}getDocumentsMatchingTarget(t,n){return Y.resolve(null)}getIndexType(t,n){return Y.resolve(0)}getFieldIndexes(t,n){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,n){return Y.resolve(ns.min())}getMinOffsetFromCollectionGroup(t,n){return Y.resolve(ns.min())}updateCollectionGroup(t,n,s){return Y.resolve()}updateIndexEntries(t,n){return Y.resolve()}}class BN{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),l=this.index[n]||new Ve(le.comparator),u=!l.has(s);return this.index[n]=l.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),l=this.index[n];return l&&l.has(s)}getEntries(t){return(this.index[t]||new Ve(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},BT=41943040;class fn{static withCacheSize(t){return new fn(t,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn.DEFAULT_COLLECTION_PERCENTILE=10,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fn.DEFAULT=new fn(BT,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fn.DISABLED=new fn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new ao(0)}static cr(){return new ao(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0="LruGarbageCollector",qN=1048576;function S0([r,t],[n,s]){const l=Vt(r,n);return l===0?Vt(t,s):l}class HN{constructor(t){this.Ir=t,this.buffer=new Ve(S0),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();S0(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class FN{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){it(A0,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){mo(n)?it(A0,"Ignoring IndexedDB error during garbage collection: ",n):await fo(n)}await this.Vr(3e5)}))}}class GN{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(t,n){if(n===0)return Y.resolve(Eh.ce);const s=new HN(n);return this.mr.forEachTarget(t,(l=>s.Ar(l.sequenceNumber))).next((()=>this.mr.pr(t,(l=>s.Ar(l))))).next((()=>s.maxValue))}removeTargets(t,n,s){return this.mr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(it("LruGarbageCollector","Garbage collection skipped; disabled"),Y.resolve(T0)):this.getCacheSize(t).next((s=>s<this.params.cacheSizeCollectionThreshold?(it("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),T0):this.yr(t,n)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let s,l,u,f,p,g,y;const T=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(it("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),l=this.params.maximumSequenceNumbersToCollect):l=S,f=Date.now(),this.nthSequenceNumber(t,l)))).next((S=>(s=S,p=Date.now(),this.removeTargets(t,s,n)))).next((S=>(u=S,g=Date.now(),this.removeOrphanedDocuments(t,s)))).next((S=>(y=Date.now(),Qa()<=kt.DEBUG&&it("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${l} in `+(p-f)+`ms
	Removed ${u} targets in `+(g-p)+`ms
	Removed ${S} documents in `+(y-g)+`ms
Total Duration: ${y-T}ms`),Y.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:u,documentsRemoved:S}))))}}function KN(r,t){return new GN(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(){this.changes=new ea((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ze.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?Y.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(t,n,s,l){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=l}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next((l=>(s=l,this.remoteDocumentCache.getEntry(t,n)))).next((l=>(s!==null&&kl(s.mutation,l,wn.empty(),re.now()),l)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.getLocalViewOfDocuments(t,s,xt()).next((()=>s))))}getLocalViewOfDocuments(t,n,s=xt()){const l=Hs();return this.populateOverlays(t,l,n).next((()=>this.computeViews(t,n,l,s).next((u=>{let f=bl();return u.forEach(((p,g)=>{f=f.insert(p,g.overlayedDocument)})),f}))))}getOverlayedDocuments(t,n){const s=Hs();return this.populateOverlays(t,s,n).next((()=>this.computeViews(t,n,s,xt())))}populateOverlays(t,n,s){const l=[];return s.forEach((u=>{n.has(u)||l.push(u)})),this.documentOverlayCache.getOverlays(t,l).next((u=>{u.forEach(((f,p)=>{n.set(f,p)}))}))}computeViews(t,n,s,l){let u=or();const f=Ml(),p=(function(){return Ml()})();return n.forEach(((g,y)=>{const T=s.get(y.key);l.has(y.key)&&(T===void 0||T.mutation instanceof us)?u=u.insert(y.key,y):T!==void 0?(f.set(y.key,T.mutation.getFieldMask()),kl(T.mutation,y,T.mutation.getFieldMask(),re.now())):f.set(y.key,wn.empty())})),this.recalculateAndSaveOverlays(t,u).next((g=>(g.forEach(((y,T)=>f.set(y,T))),n.forEach(((y,T)=>p.set(y,new YN(T,f.get(y)??null)))),p)))}recalculateAndSaveOverlays(t,n){const s=Ml();let l=new ue(((f,p)=>f-p)),u=xt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((f=>{for(const p of f)p.keys().forEach((g=>{const y=n.get(g);if(y===null)return;let T=s.get(g)||wn.empty();T=p.applyToLocalView(y,T),s.set(g,T);const S=(l.get(p.batchId)||xt()).add(g);l=l.insert(p.batchId,S)}))})).next((()=>{const f=[],p=l.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),y=g.key,T=g.value,S=AT();T.forEach((N=>{if(!u.has(N)){const H=CT(n.get(N),s.get(N));H!==null&&S.set(N,H),u=u.add(N)}})),f.push(this.documentOverlayCache.saveOverlays(t,y,S))}return Y.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.recalculateAndSaveOverlays(t,s)))}getDocumentsMatchingQuery(t,n,s,l){return(function(f){return ht.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):JC(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,l):this.getDocumentsMatchingCollectionQuery(t,n,s,l)}getNextDocuments(t,n,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,l).next((u=>{const f=l-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,l-u.size):Y.resolve(Hs());let p=Ul,g=u;return f.next((y=>Y.forEach(y,((T,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),u.get(T)?Y.resolve():this.remoteDocumentCache.getEntry(t,T).next((N=>{g=g.insert(T,N)}))))).next((()=>this.populateOverlays(t,y,u))).next((()=>this.computeViews(t,g,y,xt()))).next((T=>({batchId:p,changes:TT(T)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ht(n)).next((s=>{let l=bl();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l}))}getDocumentsMatchingCollectionGroupQuery(t,n,s,l){const u=n.collectionGroup;let f=bl();return this.indexManager.getCollectionParents(t,u).next((p=>Y.forEach(p,(g=>{const y=(function(S,N){return new Sh(N,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(t,y,s,l).next((T=>{T.forEach(((S,N)=>{f=f.insert(S,N)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,n,s,l){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,l)))).next((f=>{u.forEach(((g,y)=>{const T=y.getKey();f.get(T)===null&&(f=f.insert(T,Ze.newInvalidDocument(T)))}));let p=bl();return f.forEach(((g,y)=>{const T=u.get(g);T!==void 0&&kl(T.mutation,y,wn.empty(),re.now()),bh(n,y)&&(p=p.insert(g,y))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return Y.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,(function(l){return{id:l.id,version:l.version,createTime:Di(l.createTime)}})(n)),Y.resolve()}getNamedQuery(t,n){return Y.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,(function(l){return{name:l.name,query:zN(l.bundledQuery),readTime:Di(l.readTime)}})(n)),Y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this.overlays=new ue(ht.comparator),this.qr=new Map}getOverlay(t,n){return Y.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Hs();return Y.forEach(n,(l=>this.getOverlay(t,l).next((u=>{u!==null&&s.set(l,u)})))).next((()=>s))}saveOverlays(t,n,s){return s.forEach(((l,u)=>{this.St(t,n,u)})),Y.resolve()}removeOverlaysForBatchId(t,n,s){const l=this.qr.get(s);return l!==void 0&&(l.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(s)),Y.resolve()}getOverlaysForCollection(t,n,s){const l=Hs(),u=n.length+1,f=new ht(n.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const g=p.getNext().value,y=g.getKey();if(!n.isPrefixOf(y.path))break;y.path.length===u&&g.largestBatchId>s&&l.set(g.getKey(),g)}return Y.resolve(l)}getOverlaysForCollectionGroup(t,n,s,l){let u=new ue(((y,T)=>y-T));const f=this.overlays.getIterator();for(;f.hasNext();){const y=f.getNext().value;if(y.getKey().getCollectionGroup()===n&&y.largestBatchId>s){let T=u.get(y.largestBatchId);T===null&&(T=Hs(),u=u.insert(y.largestBatchId,T)),T.set(y.getKey(),y)}}const p=Hs(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((y,T)=>p.set(y,T))),!(p.size()>=l)););return Y.resolve(p)}St(t,n,s){const l=this.overlays.get(s.key);if(l!==null){const f=this.qr.get(l.largestBatchId).delete(s.key);this.qr.set(l.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new pN(n,s));let u=this.qr.get(n);u===void 0&&(u=xt(),this.qr.set(n,u)),this.qr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(t){return Y.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,Y.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(){this.Qr=new Ve(ze.$r),this.Ur=new Ve(ze.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const s=new ze(t,n);this.Qr=this.Qr.add(s),this.Ur=this.Ur.add(s)}Wr(t,n){t.forEach((s=>this.addReference(s,n)))}removeReference(t,n){this.Gr(new ze(t,n))}zr(t,n){t.forEach((s=>this.removeReference(s,n)))}jr(t){const n=new ht(new le([])),s=new ze(n,t),l=new ze(n,t+1),u=[];return this.Ur.forEachInRange([s,l],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new ht(new le([])),s=new ze(n,t),l=new ze(n,t+1);let u=xt();return this.Ur.forEachInRange([s,l],(f=>{u=u.add(f.key)})),u}containsKey(t){const n=new ze(t,0),s=this.Qr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class ze{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return ht.comparator(t.key,n.key)||Vt(t.Yr,n.Yr)}static Kr(t,n){return Vt(t.Yr,n.Yr)||ht.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Ve(ze.$r)}checkEmpty(t){return Y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,l){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new mN(u,n,s,l);this.mutationQueue.push(f);for(const p of l)this.Zr=this.Zr.add(new ze(p.key,u)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return Y.resolve(f)}lookupMutationBatch(t,n){return Y.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,l=this.ei(s),u=l<0?0:l;return Y.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(this.mutationQueue.length===0?$m:this.tr-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new ze(n,0),l=new ze(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([s,l],(f=>{const p=this.Xr(f.Yr);u.push(p)})),Y.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Ve(Vt);return n.forEach((l=>{const u=new ze(l,0),f=new ze(l,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(p=>{s=s.add(p.Yr)}))})),Y.resolve(this.ti(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,l=s.length+1;let u=s;ht.isDocumentKey(u)||(u=u.child(""));const f=new ze(new ht(u),0);let p=new Ve(Vt);return this.Zr.forEachWhile((g=>{const y=g.key.path;return!!s.isPrefixOf(y)&&(y.length===l&&(p=p.add(g.Yr)),!0)}),f),Y.resolve(this.ti(p))}ti(t){const n=[];return t.forEach((s=>{const l=this.Xr(s);l!==null&&n.push(l)})),n}removeMutationBatch(t,n){Kt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Zr;return Y.forEach(n.mutations,(l=>{const u=new ze(l.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)})).next((()=>{this.Zr=s}))}ir(t){}containsKey(t,n){const s=new ze(n,0),l=this.Zr.firstAfterOrEqual(s);return Y.resolve(n.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t4{constructor(t){this.ri=t,this.docs=(function(){return new ue(ht.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,l=this.docs.get(s),u=l?l.size:0,f=this.ri(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return Y.resolve(s?s.document.mutableCopy():Ze.newInvalidDocument(n))}getEntries(t,n){let s=or();return n.forEach((l=>{const u=this.docs.get(l);s=s.insert(l,u?u.document.mutableCopy():Ze.newInvalidDocument(l))})),Y.resolve(s)}getDocumentsMatchingQuery(t,n,s,l){let u=or();const f=n.path,p=new ht(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:y,value:{document:T}}=g.getNext();if(!f.isPrefixOf(y.path))break;y.path.length>f.length+1||CC(RC(T),s)<=0||(l.has(T.key)||bh(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return Y.resolve(u)}getAllFromCollectionGroup(t,n,s,l){mt(9500)}ii(t,n){return Y.forEach(this.docs,(s=>n(s)))}newChangeBuffer(t){return new e4(this)}getSize(t){return Y.resolve(this.size)}}class e4 extends QN{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach(((s,l)=>{l.isValidDocument()?n.push(this.Nr.addEntry(t,l)):this.Nr.removeEntry(s)})),Y.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(t){this.persistence=t,this.si=new ea((n=>Wm(n)),tp),this.lastRemoteSnapshotVersion=_t.min(),this.highestTargetId=0,this.oi=0,this._i=new ap,this.targetCount=0,this.ai=ao.ur()}forEachTarget(t,n){return this.si.forEach(((s,l)=>n(l))),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.oi&&(this.oi=n),Y.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new ao(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,Y.resolve()}updateTargetData(t,n){return this.Pr(n),Y.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,n,s){let l=0;const u=[];return this.si.forEach(((f,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(t,p.targetId)),l++)})),Y.waitFor(u).next((()=>l))}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,n){const s=this.si.get(n)||null;return Y.resolve(s)}addMatchingKeys(t,n,s){return this._i.Wr(n,s),Y.resolve()}removeMatchingKeys(t,n,s){this._i.zr(n,s);const l=this.persistence.referenceDelegate,u=[];return l&&n.forEach((f=>{u.push(l.markPotentiallyOrphaned(t,f))})),Y.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),Y.resolve()}getMatchingKeysForTargetId(t,n){const s=this._i.Hr(n);return Y.resolve(s)}containsKey(t,n){return Y.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(t,n){this.ui={},this.overlays={},this.ci=new Eh(0),this.li=!1,this.li=!0,this.hi=new ZN,this.referenceDelegate=t(this),this.Pi=new n4(this),this.indexManager=new jN,this.remoteDocumentCache=(function(l){return new t4(l)})((s=>this.referenceDelegate.Ti(s))),this.serializer=new UN(n),this.Ii=new $N(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new JN,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.ui[t.toKey()];return s||(s=new WN(n,this.referenceDelegate),this.ui[t.toKey()]=s),s}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,s){it("MemoryPersistence","Starting transaction:",t);const l=new i4(this.ci.next());return this.referenceDelegate.Ei(),s(l).next((u=>this.referenceDelegate.di(l).next((()=>u)))).toPromise().then((u=>(l.raiseOnCommittedEvent(),u)))}Ai(t,n){return Y.or(Object.values(this.ui).map((s=>()=>s.containsKey(t,n))))}}class i4 extends DC{constructor(t){super(),this.currentSequenceNumber=t}}class op{constructor(t){this.persistence=t,this.Ri=new ap,this.Vi=null}static mi(t){return new op(t)}get fi(){if(this.Vi)return this.Vi;throw mt(60996)}addReference(t,n,s){return this.Ri.addReference(s,n),this.fi.delete(s.toString()),Y.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.fi.add(s.toString()),Y.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),Y.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach((l=>this.fi.add(l.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next((l=>{l.forEach((u=>this.fi.add(u.toString())))})).next((()=>s.removeTargetData(t,n)))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.fi,(s=>{const l=ht.fromPath(s);return this.gi(t,l).next((u=>{u||n.removeEntry(l,_t.min())}))})).next((()=>(this.Vi=null,n.apply(t))))}updateLimboDocument(t,n){return this.gi(t,n).next((s=>{s?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(t){return 0}gi(t,n){return Y.or([()=>Y.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class uh{constructor(t,n){this.persistence=t,this.pi=new ea((s=>kC(s.path)),((s,l)=>s.isEqual(l))),this.garbageCollector=KN(this,n)}static mi(t,n){return new uh(t,n)}Ei(){}di(t){return Y.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((s=>n.next((l=>s+l))))}wr(t){let n=0;return this.pr(t,(s=>{n++})).next((()=>n))}pr(t,n){return Y.forEach(this.pi,((s,l)=>this.br(t,s,l).next((u=>u?Y.resolve():n(l)))))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const l=this.persistence.getRemoteDocumentCache(),u=l.newChangeBuffer();return l.ii(t,(f=>this.br(t,f,n).next((p=>{p||(s++,u.removeEntry(f,_t.min()))})))).next((()=>u.apply(t))).next((()=>s))}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),Y.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),Y.resolve()}removeReference(t,n,s){return this.pi.set(s,t.currentSequenceNumber),Y.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),Y.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Bc(t.data.value)),n}br(t,n,s){return Y.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const l=this.pi.get(n);return Y.resolve(l!==void 0&&l>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(t,n,s,l){this.targetId=t,this.fromCache=n,this.Es=s,this.ds=l}static As(t,n){let s=xt(),l=xt();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:l=l.add(u.doc.key)}return new lp(t,n.fromCache,s,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s4{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Mb()?8:OC(We())>0?6:4})()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,s,l){const u={result:null};return this.ys(t,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(t,n,l,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new r4;return this.Ss(t,n,f).next((p=>{if(u.result=p,this.Vs)return this.bs(t,n,f,p.size)}))})).next((()=>u.result))}bs(t,n,s,l){return s.documentReadCount<this.fs?(Qa()<=kt.DEBUG&&it("QueryEngine","SDK will not create cache indexes for query:",Ya(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),Y.resolve()):(Qa()<=kt.DEBUG&&it("QueryEngine","Query:",Ya(n),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.gs*l?(Qa()<=kt.DEBUG&&it("QueryEngine","The SDK decides to create cache indexes for query:",Ya(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ci(n))):Y.resolve())}ys(t,n){if(h0(n))return Y.resolve(null);let s=Ci(n);return this.indexManager.getIndexType(t,s).next((l=>l===0?null:(n.limit!==null&&l===1&&(n=vm(n,null,"F"),s=Ci(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next((u=>{const f=xt(...u);return this.ps.getDocuments(t,f).next((p=>this.indexManager.getMinOffset(t,s).next((g=>{const y=this.Ds(n,p);return this.Cs(n,y,f,g.readTime)?this.ys(t,vm(n,null,"F")):this.vs(t,y,n,g)}))))})))))}ws(t,n,s,l){return h0(n)||l.isEqual(_t.min())?Y.resolve(null):this.ps.getDocuments(t,s).next((u=>{const f=this.Ds(n,u);return this.Cs(n,f,s,l)?Y.resolve(null):(Qa()<=kt.DEBUG&&it("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),Ya(n)),this.vs(t,f,n,IC(l,Ul)).next((p=>p)))}))}Ds(t,n){let s=new Ve(vT(t));return n.forEach(((l,u)=>{bh(t,u)&&(s=s.add(u))})),s}Cs(t,n,s,l){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(l)>0)}Ss(t,n,s){return Qa()<=kt.DEBUG&&it("QueryEngine","Using full collection scan to execute query:",Ya(n)),this.ps.getDocumentsMatchingQuery(t,n,ns.min(),s)}vs(t,n,s,l){return this.ps.getDocumentsMatchingQuery(t,s,l).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="LocalStore",a4=3e8;class o4{constructor(t,n,s,l){this.persistence=t,this.Fs=n,this.serializer=l,this.Ms=new ue(Vt),this.xs=new ea((u=>Wm(u)),tp),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(s)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new XN(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.Ms)))}}function l4(r,t,n,s){return new o4(r,t,n,s)}async function HT(r,t){const n=Et(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let l;return n.mutationQueue.getAllMutationBatches(s).next((u=>(l=u,n.Bs(t),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],p=[];let g=xt();for(const y of l){f.push(y.batchId);for(const T of y.mutations)g=g.add(T.key)}for(const y of u){p.push(y.batchId);for(const T of y.mutations)g=g.add(T.key)}return n.localDocuments.getDocuments(s,g).next((y=>({Ls:y,removedBatchIds:f,addedBatchIds:p})))}))}))}function u4(r,t){const n=Et(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const l=t.batch.keys(),u=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,g,y,T){const S=y.batch,N=S.keys();let H=Y.resolve();return N.forEach((J=>{H=H.next((()=>T.getEntry(g,J))).next((W=>{const Z=y.docVersions.get(J);Kt(Z!==null,48541),W.version.compareTo(Z)<0&&(S.applyToRemoteDocument(W,y),W.isValidDocument()&&(W.setReadTime(y.commitVersion),T.addEntry(W)))}))})),H.next((()=>p.mutationQueue.removeMutationBatch(g,S)))})(n,s,t,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,l,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let g=xt();for(let y=0;y<p.mutationResults.length;++y)p.mutationResults[y].transformResults.length>0&&(g=g.add(p.batch.mutations[y].key));return g})(t)))).next((()=>n.localDocuments.getDocuments(s,l)))}))}function FT(r){const t=Et(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.Pi.getLastRemoteSnapshotVersion(n)))}function c4(r,t){const n=Et(r),s=t.snapshotVersion;let l=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});l=n.Ms;const p=[];t.targetChanges.forEach(((T,S)=>{const N=l.get(S);if(!N)return;p.push(n.Pi.removeMatchingKeys(u,T.removedDocuments,S).next((()=>n.Pi.addMatchingKeys(u,T.addedDocuments,S))));let H=N.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(S)!==null?H=H.withResumeToken(Ye.EMPTY_BYTE_STRING,_t.min()).withLastLimboFreeSnapshotVersion(_t.min()):T.resumeToken.approximateByteSize()>0&&(H=H.withResumeToken(T.resumeToken,s)),l=l.insert(S,H),(function(W,Z,ut){return W.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=a4?!0:ut.addedDocuments.size+ut.modifiedDocuments.size+ut.removedDocuments.size>0})(N,H,T)&&p.push(n.Pi.updateTargetData(u,H))}));let g=or(),y=xt();if(t.documentUpdates.forEach((T=>{t.resolvedLimboDocuments.has(T)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))})),p.push(h4(u,f,t.documentUpdates).next((T=>{g=T.ks,y=T.qs}))),!s.isEqual(_t.min())){const T=n.Pi.getLastRemoteSnapshotVersion(u).next((S=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,s)));p.push(T)}return Y.waitFor(p).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,g,y))).next((()=>g))})).then((u=>(n.Ms=l,u)))}function h4(r,t,n){let s=xt(),l=xt();return n.forEach((u=>s=s.add(u))),t.getEntries(r,s).next((u=>{let f=or();return n.forEach(((p,g)=>{const y=u.get(p);g.isFoundDocument()!==y.isFoundDocument()&&(l=l.add(p)),g.isNoDocument()&&g.version.isEqual(_t.min())?(t.removeEntry(p,g.readTime),f=f.insert(p,g)):!y.isValidDocument()||g.version.compareTo(y.version)>0||g.version.compareTo(y.version)===0&&y.hasPendingWrites?(t.addEntry(g),f=f.insert(p,g)):it(up,"Ignoring outdated watch update for ",p,". Current version:",y.version," Watch version:",g.version)})),{ks:f,qs:l}}))}function f4(r,t){const n=Et(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(t===void 0&&(t=$m),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t))))}function d4(r,t){const n=Et(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let l;return n.Pi.getTargetData(s,t).next((u=>u?(l=u,Y.resolve(l)):n.Pi.allocateTargetId(s).next((f=>(l=new $r(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.Pi.addTargetData(s,l).next((()=>l)))))))})).then((s=>{const l=n.Ms.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(s.targetId,s),n.xs.set(t,s.targetId)),s}))}async function wm(r,t,n){const s=Et(r),l=s.Ms.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,l)))}catch(f){if(!mo(f))throw f;it(up,`Failed to update sequence numbers for target ${t}: ${f}`)}s.Ms=s.Ms.remove(t),s.xs.delete(l.target)}function w0(r,t,n){const s=Et(r);let l=_t.min(),u=xt();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(g,y,T){const S=Et(g),N=S.xs.get(T);return N!==void 0?Y.resolve(S.Ms.get(N)):S.Pi.getTargetData(y,T)})(s,f,Ci(t)).next((p=>{if(p)return l=p.lastLimboFreeSnapshotVersion,s.Pi.getMatchingKeysForTargetId(f,p.targetId).next((g=>{u=g}))})).next((()=>s.Fs.getDocumentsMatchingQuery(f,t,n?l:_t.min(),n?u:xt()))).next((p=>(m4(s,WC(t),p),{documents:p,Qs:u})))))}function m4(r,t,n){let s=r.Os.get(t)||_t.min();n.forEach(((l,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Os.set(t,s)}class b0{constructor(){this.activeTargetIds=sN()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class p4{constructor(){this.Mo=new b0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,s){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new b0,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g4{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="ConnectivityMonitor";class R0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){it(I0,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){it(I0,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xc=null;function bm(){return xc===null?xc=(function(){return 268435456+Math.round(2147483648*Math.random())})():xc++,"0x"+xc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="RestConnection",y4={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _4{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${s}/databases/${l}`,this.Wo=this.databaseId.database===nh?`project_id=${s}`:`project_id=${s}&database_id=${l}`}Go(t,n,s,l,u){const f=bm(),p=this.zo(t,n.toUriEncodedString());it(Wd,`Sending RPC '${t}' ${f}:`,p,s);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,l,u);const{host:y}=new URL(p),T=lo(y);return this.Jo(t,p,g,s,T).then((S=>(it(Wd,`Received RPC '${t}' ${f}: `,S),S)),(S=>{throw no(Wd,`RPC '${t}' ${f} failed with error: `,S,"url: ",p,"request:",s),S}))}Ho(t,n,s,l,u,f){return this.Go(t,n,s,l,u)}jo(t,n,s){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ho})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((l,u)=>t[u]=l)),s&&s.headers.forEach(((l,u)=>t[u]=l))}zo(t,n){const s=y4[t];return`${this.Uo}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v4{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e="WebChannelConnection";class E4 extends _4{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,s,l,u){const f=bm();return new Promise(((p,g)=>{const y=new YE;y.setWithCredentials(!0),y.listenOnce(XE.COMPLETE,(()=>{try{switch(y.getLastErrorCode()){case jc.NO_ERROR:const S=y.getResponseJson();it($e,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(S)),p(S);break;case jc.TIMEOUT:it($e,`RPC '${t}' ${f} timed out`),g(new lt($.DEADLINE_EXCEEDED,"Request time out"));break;case jc.HTTP_ERROR:const N=y.getStatus();if(it($e,`RPC '${t}' ${f} failed with status:`,N,"response text:",y.getResponseText()),N>0){let H=y.getResponseJson();Array.isArray(H)&&(H=H[0]);const J=H==null?void 0:H.error;if(J&&J.status&&J.message){const W=(function(ut){const gt=ut.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(gt)>=0?gt:$.UNKNOWN})(J.status);g(new lt(W,J.message))}else g(new lt($.UNKNOWN,"Server responded with status "+y.getStatus()))}else g(new lt($.UNAVAILABLE,"Connection failed."));break;default:mt(9055,{l_:t,streamId:f,h_:y.getLastErrorCode(),P_:y.getLastError()})}}finally{it($e,`RPC '${t}' ${f} completed.`)}}));const T=JSON.stringify(l);it($e,`RPC '${t}' ${f} sending request:`,l),y.send(n,"POST",T,s,15)}))}T_(t,n,s){const l=bm(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=ZE(),p=JE(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const T=u.join("");it($e,`Creating RPC '${t}' stream ${l}: ${T}`,g);const S=f.createWebChannel(T,g);this.I_(S);let N=!1,H=!1;const J=new v4({Yo:Z=>{H?it($e,`Not sending because RPC '${t}' stream ${l} is closed:`,Z):(N||(it($e,`Opening RPC '${t}' stream ${l} transport.`),S.open(),N=!0),it($e,`RPC '${t}' stream ${l} sending:`,Z),S.send(Z))},Zo:()=>S.close()}),W=(Z,ut,gt)=>{Z.listen(ut,(pt=>{try{gt(pt)}catch(Pt){setTimeout((()=>{throw Pt}),0)}}))};return W(S,wl.EventType.OPEN,(()=>{H||(it($e,`RPC '${t}' stream ${l} transport opened.`),J.o_())})),W(S,wl.EventType.CLOSE,(()=>{H||(H=!0,it($e,`RPC '${t}' stream ${l} transport closed`),J.a_(),this.E_(S))})),W(S,wl.EventType.ERROR,(Z=>{H||(H=!0,no($e,`RPC '${t}' stream ${l} transport errored. Name:`,Z.name,"Message:",Z.message),J.a_(new lt($.UNAVAILABLE,"The operation could not be completed")))})),W(S,wl.EventType.MESSAGE,(Z=>{var ut;if(!H){const gt=Z.data[0];Kt(!!gt,16349);const pt=gt,Pt=(pt==null?void 0:pt.error)||((ut=pt[0])==null?void 0:ut.error);if(Pt){it($e,`RPC '${t}' stream ${l} received error:`,Pt);const te=Pt.status;let Nt=(function(R){const k=Re[R];if(k!==void 0)return OT(k)})(te),C=Pt.message;Nt===void 0&&(Nt=$.INTERNAL,C="Unknown error status: "+te+" with message "+Pt.message),H=!0,J.a_(new lt(Nt,C)),S.close()}else it($e,`RPC '${t}' stream ${l} received:`,gt),J.u_(gt)}})),W(p,$E.STAT_EVENT,(Z=>{Z.stat===dm.PROXY?it($e,`RPC '${t}' stream ${l} detected buffering proxy`):Z.stat===dm.NOPROXY&&it($e,`RPC '${t}' stream ${l} detected no buffering proxy`)})),setTimeout((()=>{J.__()}),0),J}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((n=>n===t))}}function tm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(r){return new wN(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{constructor(t,n,s=1e3,l=1.5,u=6e4){this.Mi=t,this.timerId=n,this.d_=s,this.A_=l,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),s=Math.max(0,Date.now()-this.f_),l=Math.max(0,n-s);l>0&&it("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="PersistentStream";class KT{constructor(t,n,s,l,u,f,p,g){this.Mi=t,this.S_=s,this.b_=l,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new GT(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(ar(n.toString()),ar("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,l])=>{this.D_===n&&this.G_(s,l)}),(s=>{t((()=>{const l=new lt($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(l)}))}))}G_(t,n){const s=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo((()=>{s((()=>this.listener.Xo()))})),this.stream.t_((()=>{s((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((l=>{s((()=>this.z_(l)))})),this.stream.onMessage((l=>{s((()=>++this.F_==1?this.J_(l):this.onNext(l)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return it(C0,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget((()=>this.D_===t?n():(it(C0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class T4 extends KT{constructor(t,n,s,l,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,l,f),this.serializer=u}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=RN(this.serializer,t),s=(function(u){if(!("targetChange"in u))return _t.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?_t.min():f.readTime?Di(f.readTime):_t.min()})(t);return this.listener.H_(n,s)}Y_(t){const n={};n.database=Sm(this.serializer),n.addTarget=(function(u,f){let p;const g=f.target;if(p=_m(g)?{documents:DN(u,g)}:{query:ON(u,g).ft},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=VT(u,f.resumeToken);const y=Em(u,f.expectedCount);y!==null&&(p.expectedCount=y)}else if(f.snapshotVersion.compareTo(_t.min())>0){p.readTime=lh(u,f.snapshotVersion.toTimestamp());const y=Em(u,f.expectedCount);y!==null&&(p.expectedCount=y)}return p})(this.serializer,t);const s=kN(this.serializer,t);s&&(n.labels=s),this.q_(n)}Z_(t){const n={};n.database=Sm(this.serializer),n.removeTarget=t,this.q_(n)}}class A4 extends KT{constructor(t,n,s,l,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,l,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return Kt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,Kt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){Kt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=NN(t.writeResults,t.commitTime),s=Di(t.commitTime);return this.listener.na(s,n)}ra(){const t={};t.database=Sm(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((s=>CN(this.serializer,s)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S4{}class w4 extends S4{constructor(t,n,s,l){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new lt($.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,s,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Go(t,Tm(n,s),l,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new lt($.UNKNOWN,u.toString())}))}Ho(t,n,s,l,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,p])=>this.connection.Ho(t,Tm(n,s),l,f,p,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new lt($.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class b4{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ar(n),this.aa=!1):it("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="RemoteStore";class I4{constructor(t,n,s,l,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{s.enqueueAndForget((async()=>{na(this)&&(it($s,"Restarting streams for network reachability change."),await(async function(g){const y=Et(g);y.Ea.add(4),await Wl(y),y.Ra.set("Unknown"),y.Ea.delete(4),await Dh(y)})(this))}))})),this.Ra=new b4(s,l)}}async function Dh(r){if(na(r))for(const t of r.da)await t(!0)}async function Wl(r){for(const t of r.da)await t(!1)}function QT(r,t){const n=Et(r);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),dp(n)?fp(n):po(n).O_()&&hp(n,t))}function cp(r,t){const n=Et(r),s=po(n);n.Ia.delete(t),s.O_()&&YT(n,t),n.Ia.size===0&&(s.O_()?s.L_():na(n)&&n.Ra.set("Unknown"))}function hp(r,t){if(r.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(_t.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}po(r).Y_(t)}function YT(r,t){r.Va.Ue(t),po(r).Z_(t)}function fp(r){r.Va=new EN({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),po(r).start(),r.Ra.ua()}function dp(r){return na(r)&&!po(r).x_()&&r.Ia.size>0}function na(r){return Et(r).Ea.size===0}function XT(r){r.Va=void 0}async function R4(r){r.Ra.set("Online")}async function C4(r){r.Ia.forEach(((t,n)=>{hp(r,t)}))}async function N4(r,t){XT(r),dp(r)?(r.Ra.ha(t),fp(r)):r.Ra.set("Unknown")}async function D4(r,t,n){if(r.Ra.set("Online"),t instanceof kT&&t.state===2&&t.cause)try{await(async function(l,u){const f=u.cause;for(const p of u.targetIds)l.Ia.has(p)&&(await l.remoteSyncer.rejectListen(p,f),l.Ia.delete(p),l.Va.removeTarget(p))})(r,t)}catch(s){it($s,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await ch(r,s)}else if(t instanceof Fc?r.Va.Ze(t):t instanceof MT?r.Va.st(t):r.Va.tt(t),!n.isEqual(_t.min()))try{const s=await FT(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const p=u.Va.Tt(f);return p.targetChanges.forEach(((g,y)=>{if(g.resumeToken.approximateByteSize()>0){const T=u.Ia.get(y);T&&u.Ia.set(y,T.withResumeToken(g.resumeToken,f))}})),p.targetMismatches.forEach(((g,y)=>{const T=u.Ia.get(g);if(!T)return;u.Ia.set(g,T.withResumeToken(Ye.EMPTY_BYTE_STRING,T.snapshotVersion)),YT(u,g);const S=new $r(T.target,g,y,T.sequenceNumber);hp(u,S)})),u.remoteSyncer.applyRemoteEvent(p)})(r,n)}catch(s){it($s,"Failed to raise snapshot:",s),await ch(r,s)}}async function ch(r,t,n){if(!mo(t))throw t;r.Ea.add(1),await Wl(r),r.Ra.set("Offline"),n||(n=()=>FT(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{it($s,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await Dh(r)}))}function $T(r,t){return t().catch((n=>ch(r,n,t)))}async function Oh(r){const t=Et(r),n=as(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:$m;for(;O4(t);)try{const l=await f4(t.localStore,s);if(l===null){t.Ta.length===0&&n.L_();break}s=l.batchId,M4(t,l)}catch(l){await ch(t,l)}JT(t)&&ZT(t)}function O4(r){return na(r)&&r.Ta.length<10}function M4(r,t){r.Ta.push(t);const n=as(r);n.O_()&&n.X_&&n.ea(t.mutations)}function JT(r){return na(r)&&!as(r).x_()&&r.Ta.length>0}function ZT(r){as(r).start()}async function k4(r){as(r).ra()}async function V4(r){const t=as(r);for(const n of r.Ta)t.ea(n.mutations)}async function x4(r,t,n){const s=r.Ta.shift(),l=ip.from(s,t,n);await $T(r,(()=>r.remoteSyncer.applySuccessfulWrite(l))),await Oh(r)}async function P4(r,t){t&&as(r).X_&&await(async function(s,l){if((function(f){return yN(f)&&f!==$.ABORTED})(l.code)){const u=s.Ta.shift();as(s).B_(),await $T(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,l))),await Oh(s)}})(r,t),JT(r)&&ZT(r)}async function N0(r,t){const n=Et(r);n.asyncQueue.verifyOperationInProgress(),it($s,"RemoteStore received new credentials");const s=na(n);n.Ea.add(3),await Wl(n),s&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await Dh(n)}async function L4(r,t){const n=Et(r);t?(n.Ea.delete(2),await Dh(n)):t||(n.Ea.add(2),await Wl(n),n.Ra.set("Unknown"))}function po(r){return r.ma||(r.ma=(function(n,s,l){const u=Et(n);return u.sa(),new T4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,l)})(r.datastore,r.asyncQueue,{Xo:R4.bind(null,r),t_:C4.bind(null,r),r_:N4.bind(null,r),H_:D4.bind(null,r)}),r.da.push((async t=>{t?(r.ma.B_(),dp(r)?fp(r):r.Ra.set("Unknown")):(await r.ma.stop(),XT(r))}))),r.ma}function as(r){return r.fa||(r.fa=(function(n,s,l){const u=Et(n);return u.sa(),new A4(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,l)})(r.datastore,r.asyncQueue,{Xo:()=>Promise.resolve(),t_:k4.bind(null,r),r_:P4.bind(null,r),ta:V4.bind(null,r),na:x4.bind(null,r)}),r.da.push((async t=>{t?(r.fa.B_(),await Oh(r)):(await r.fa.stop(),r.Ta.length>0&&(it($s,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(t,n,s,l,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=l,this.removalCallback=u,this.deferred=new ts,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,l,u){const f=Date.now()+s,p=new mp(t,n,f,l,u);return p.start(s),p}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new lt($.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pp(r,t){if(ar("AsyncQueue",`${t}: ${r}`),mo(r))return new lt($.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{static emptySet(t){return new to(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ht.comparator(n.key,s.key):(n,s)=>ht.comparator(n.key,s.key),this.keyedMap=bl(),this.sortedSet=new ue(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,s)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof to)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const l=n.getNext().key,u=s.getNext().key;if(!l.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new to;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(){this.ga=new ue(ht.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):mt(63341,{Rt:t,pa:s}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,s)=>{t.push(s)})),t}}class oo{constructor(t,n,s,l,u,f,p,g,y){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=y}static fromInitialDocuments(t,n,s,l,u){const f=[];return n.forEach((p=>{f.push({type:0,doc:p})})),new oo(t,n,to.emptySet(n),f,s,l,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&wh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let l=0;l<n.length;l++)if(n[l].type!==s[l].type||!n[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U4{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class z4{constructor(){this.queries=O0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const l=Et(n),u=l.queries;l.queries=O0(),u.forEach(((f,p)=>{for(const g of p.Sa)g.onError(s)}))})(this,new lt($.ABORTED,"Firestore shutting down"))}}function O0(){return new ea((r=>_T(r)),wh)}async function j4(r,t){const n=Et(r);let s=3;const l=t.query;let u=n.queries.get(l);u?!u.ba()&&t.Da()&&(s=2):(u=new U4,s=t.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(l,!0);break;case 1:u.wa=await n.onListen(l,!1);break;case 2:await n.onFirstRemoteStoreListen(l)}}catch(f){const p=pp(f,`Initialization of query '${Ya(t.query)}' failed`);return void t.onError(p)}n.queries.set(l,u),u.Sa.push(t),t.va(n.onlineState),u.wa&&t.Fa(u.wa)&&gp(n)}async function B4(r,t){const n=Et(r),s=t.query;let l=3;const u=n.queries.get(s);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?l=t.Da()?0:1:!u.ba()&&t.Da()&&(l=2))}switch(l){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function q4(r,t){const n=Et(r);let s=!1;for(const l of t){const u=l.query,f=n.queries.get(u);if(f){for(const p of f.Sa)p.Fa(l)&&(s=!0);f.wa=l}}s&&gp(n)}function H4(r,t,n){const s=Et(r),l=s.queries.get(t);if(l)for(const u of l.Sa)u.onError(n);s.queries.delete(t)}function gp(r){r.Ca.forEach((t=>{t.next()}))}var Im,M0;(M0=Im||(Im={})).Ma="default",M0.Cache="cache";class F4{constructor(t,n,s){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const l of t.docChanges)l.type!==3&&s.push(l);t=new oo(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.qa||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=oo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Im.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WT{constructor(t){this.key=t}}class t1{constructor(t){this.key=t}}class G4{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=xt(),this.mutatedKeys=xt(),this.eu=vT(t),this.tu=new to(this.eu)}get nu(){return this.Ya}ru(t,n){const s=n?n.iu:new D0,l=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=l,p=!1;const g=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,y=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal(((T,S)=>{const N=l.get(T),H=bh(this.query,S)?S:null,J=!!N&&this.mutatedKeys.has(N.key),W=!!H&&(H.hasLocalMutations||this.mutatedKeys.has(H.key)&&H.hasCommittedMutations);let Z=!1;N&&H?N.data.isEqual(H.data)?J!==W&&(s.track({type:3,doc:H}),Z=!0):this.su(N,H)||(s.track({type:2,doc:H}),Z=!0,(g&&this.eu(H,g)>0||y&&this.eu(H,y)<0)&&(p=!0)):!N&&H?(s.track({type:0,doc:H}),Z=!0):N&&!H&&(s.track({type:1,doc:N}),Z=!0,(g||y)&&(p=!0)),Z&&(H?(f=f.add(H),u=W?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{tu:f,iu:s,Cs:p,mutatedKeys:u}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,l){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((T,S)=>(function(H,J){const W=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return mt(20277,{Rt:Z})}};return W(H)-W(J)})(T.type,S.type)||this.eu(T.doc,S.doc))),this.ou(s),l=l??!1;const p=n&&!l?this._u():[],g=this.Xa.size===0&&this.current&&!l?1:0,y=g!==this.Za;return this.Za=g,f.length!==0||y?{snapshot:new oo(this.query,t.tu,u,f,t.mutatedKeys,g===0,y,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new D0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=xt(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Xa=this.Xa.add(s.key))}));const n=[];return t.forEach((s=>{this.Xa.has(s)||n.push(new t1(s))})),this.Xa.forEach((s=>{t.has(s)||n.push(new WT(s))})),n}cu(t){this.Ya=t.Qs,this.Xa=xt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return oo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const yp="SyncEngine";class K4{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Q4{constructor(t){this.key=t,this.hu=!1}}class Y4{constructor(t,n,s,l,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=l,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new ea((p=>_T(p)),wh),this.Iu=new Map,this.Eu=new Set,this.du=new ue(ht.comparator),this.Au=new Map,this.Ru=new ap,this.Vu={},this.mu=new Map,this.fu=ao.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function X4(r,t,n=!0){const s=a1(r);let l;const u=s.Tu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),l=u.view.lu()):l=await e1(s,t,n,!0),l}async function $4(r,t){const n=a1(r);await e1(n,t,!0,!1)}async function e1(r,t,n,s){const l=await d4(r.localStore,Ci(t)),u=l.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let p;return s&&(p=await J4(r,t,u,f==="current",l.resumeToken)),r.isPrimaryClient&&n&&QT(r.remoteStore,l),p}async function J4(r,t,n,s,l){r.pu=(S,N,H)=>(async function(W,Z,ut,gt){let pt=Z.view.ru(ut);pt.Cs&&(pt=await w0(W.localStore,Z.query,!1).then((({documents:C})=>Z.view.ru(C,pt))));const Pt=gt&&gt.targetChanges.get(Z.targetId),te=gt&&gt.targetMismatches.get(Z.targetId)!=null,Nt=Z.view.applyChanges(pt,W.isPrimaryClient,Pt,te);return V0(W,Z.targetId,Nt.au),Nt.snapshot})(r,S,N,H);const u=await w0(r.localStore,t,!0),f=new G4(t,u.Qs),p=f.ru(u.documents),g=Zl.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",l),y=f.applyChanges(p,r.isPrimaryClient,g);V0(r,n,y.au);const T=new K4(t,n,f);return r.Tu.set(t,T),r.Iu.has(n)?r.Iu.get(n).push(t):r.Iu.set(n,[t]),y.snapshot}async function Z4(r,t,n){const s=Et(r),l=s.Tu.get(t),u=s.Iu.get(l.targetId);if(u.length>1)return s.Iu.set(l.targetId,u.filter((f=>!wh(f,t)))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await wm(s.localStore,l.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(l.targetId),n&&cp(s.remoteStore,l.targetId),Rm(s,l.targetId)})).catch(fo)):(Rm(s,l.targetId),await wm(s.localStore,l.targetId,!0))}async function W4(r,t){const n=Et(r),s=n.Tu.get(t),l=n.Iu.get(s.targetId);n.isPrimaryClient&&l.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),cp(n.remoteStore,s.targetId))}async function tD(r,t,n){const s=oD(r);try{const l=await(function(f,p){const g=Et(f),y=re.now(),T=p.reduce(((H,J)=>H.add(J.key)),xt());let S,N;return g.persistence.runTransaction("Locally write mutations","readwrite",(H=>{let J=or(),W=xt();return g.Ns.getEntries(H,T).next((Z=>{J=Z,J.forEach(((ut,gt)=>{gt.isValidDocument()||(W=W.add(ut))}))})).next((()=>g.localDocuments.getOverlayedDocuments(H,J))).next((Z=>{S=Z;const ut=[];for(const gt of p){const pt=fN(gt,S.get(gt.key).overlayedDocument);pt!=null&&ut.push(new us(gt.key,pt,hT(pt.value.mapValue),Ni.exists(!0)))}return g.mutationQueue.addMutationBatch(H,y,ut,p)})).next((Z=>{N=Z;const ut=Z.applyToLocalDocumentSet(S,W);return g.documentOverlayCache.saveOverlays(H,Z.batchId,ut)}))})).then((()=>({batchId:N.batchId,changes:TT(S)})))})(s.localStore,t);s.sharedClientState.addPendingMutation(l.batchId),(function(f,p,g){let y=f.Vu[f.currentUser.toKey()];y||(y=new ue(Vt)),y=y.insert(p,g),f.Vu[f.currentUser.toKey()]=y})(s,l.batchId,n),await tu(s,l.changes),await Oh(s.remoteStore)}catch(l){const u=pp(l,"Failed to persist write");n.reject(u)}}async function n1(r,t){const n=Et(r);try{const s=await c4(n.localStore,t);t.targetChanges.forEach(((l,u)=>{const f=n.Au.get(u);f&&(Kt(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?f.hu=!0:l.modifiedDocuments.size>0?Kt(f.hu,14607):l.removedDocuments.size>0&&(Kt(f.hu,42227),f.hu=!1))})),await tu(n,s,t)}catch(s){await fo(s)}}function k0(r,t,n){const s=Et(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const l=[];s.Tu.forEach(((u,f)=>{const p=f.view.va(t);p.snapshot&&l.push(p.snapshot)})),(function(f,p){const g=Et(f);g.onlineState=p;let y=!1;g.queries.forEach(((T,S)=>{for(const N of S.Sa)N.va(p)&&(y=!0)})),y&&gp(g)})(s.eventManager,t),l.length&&s.Pu.H_(l),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function eD(r,t,n){const s=Et(r);s.sharedClientState.updateQueryState(t,"rejected",n);const l=s.Au.get(t),u=l&&l.key;if(u){let f=new ue(ht.comparator);f=f.insert(u,Ze.newNoDocument(u,_t.min()));const p=xt().add(u),g=new Ch(_t.min(),new Map,new ue(Vt),f,p);await n1(s,g),s.du=s.du.remove(u),s.Au.delete(t),_p(s)}else await wm(s.localStore,t,!1).then((()=>Rm(s,t,n))).catch(fo)}async function nD(r,t){const n=Et(r),s=t.batch.batchId;try{const l=await u4(n.localStore,t);r1(n,s,null),i1(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await tu(n,l)}catch(l){await fo(l)}}async function iD(r,t,n){const s=Et(r);try{const l=await(function(f,p){const g=Et(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",(y=>{let T;return g.mutationQueue.lookupMutationBatch(y,p).next((S=>(Kt(S!==null,37113),T=S.keys(),g.mutationQueue.removeMutationBatch(y,S)))).next((()=>g.mutationQueue.performConsistencyCheck(y))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(y,T,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(y,T))).next((()=>g.localDocuments.getDocuments(y,T)))}))})(s.localStore,t);r1(s,t,n),i1(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await tu(s,l)}catch(l){await fo(l)}}function i1(r,t){(r.mu.get(t)||[]).forEach((n=>{n.resolve()})),r.mu.delete(t)}function r1(r,t,n){const s=Et(r);let l=s.Vu[s.currentUser.toKey()];if(l){const u=l.get(t);u&&(n?u.reject(n):u.resolve(),l=l.remove(t)),s.Vu[s.currentUser.toKey()]=l}}function Rm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Iu.get(t))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(t),r.isPrimaryClient&&r.Ru.jr(t).forEach((s=>{r.Ru.containsKey(s)||s1(r,s)}))}function s1(r,t){r.Eu.delete(t.path.canonicalString());const n=r.du.get(t);n!==null&&(cp(r.remoteStore,n),r.du=r.du.remove(t),r.Au.delete(n),_p(r))}function V0(r,t,n){for(const s of n)s instanceof WT?(r.Ru.addReference(s.key,t),rD(r,s)):s instanceof t1?(it(yp,"Document no longer in limbo: "+s.key),r.Ru.removeReference(s.key,t),r.Ru.containsKey(s.key)||s1(r,s.key)):mt(19791,{wu:s})}function rD(r,t){const n=t.key,s=n.path.canonicalString();r.du.get(n)||r.Eu.has(s)||(it(yp,"New document in limbo: "+n),r.Eu.add(s),_p(r))}function _p(r){for(;r.Eu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const n=new ht(le.fromString(t)),s=r.fu.next();r.Au.set(s,new Q4(n)),r.du=r.du.insert(n,s),QT(r.remoteStore,new $r(Ci(ep(n.path)),s,"TargetPurposeLimboResolution",Eh.ce))}}async function tu(r,t,n){const s=Et(r),l=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((p,g)=>{f.push(s.pu(g,t,n).then((y=>{var T;if((y||n)&&s.isPrimaryClient){const S=y?!y.fromCache:(T=n==null?void 0:n.targetChanges.get(g.targetId))==null?void 0:T.current;s.sharedClientState.updateQueryState(g.targetId,S?"current":"not-current")}if(y){l.push(y);const S=lp.As(g.targetId,y);u.push(S)}})))})),await Promise.all(f),s.Pu.H_(l),await(async function(g,y){const T=Et(g);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>Y.forEach(y,(N=>Y.forEach(N.Es,(H=>T.persistence.referenceDelegate.addReference(S,N.targetId,H))).next((()=>Y.forEach(N.ds,(H=>T.persistence.referenceDelegate.removeReference(S,N.targetId,H)))))))))}catch(S){if(!mo(S))throw S;it(up,"Failed to update sequence numbers: "+S)}for(const S of y){const N=S.targetId;if(!S.fromCache){const H=T.Ms.get(N),J=H.snapshotVersion,W=H.withLastLimboFreeSnapshotVersion(J);T.Ms=T.Ms.insert(N,W)}}})(s.localStore,u))}async function sD(r,t){const n=Et(r);if(!n.currentUser.isEqual(t)){it(yp,"User change. New user:",t.toKey());const s=await HT(n.localStore,t);n.currentUser=t,(function(u,f){u.mu.forEach((p=>{p.forEach((g=>{g.reject(new lt($.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await tu(n,s.Ls)}}function aD(r,t){const n=Et(r),s=n.Au.get(t);if(s&&s.hu)return xt().add(s.key);{let l=xt();const u=n.Iu.get(t);if(!u)return l;for(const f of u){const p=n.Tu.get(f);l=l.unionWith(p.view.nu)}return l}}function a1(r){const t=Et(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=n1.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=aD.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=eD.bind(null,t),t.Pu.H_=q4.bind(null,t.eventManager),t.Pu.yu=H4.bind(null,t.eventManager),t}function oD(r){const t=Et(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=nD.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=iD.bind(null,t),t}class hh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Nh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return l4(this.persistence,new s4,t.initialUser,this.serializer)}Cu(t){return new qT(op.mi,this.serializer)}Du(t){return new p4}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}hh.provider={build:()=>new hh};class lD extends hh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){Kt(this.persistence.referenceDelegate instanceof uh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new FN(s,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?fn.withCacheSize(this.cacheSizeBytes):fn.DEFAULT;return new qT((s=>uh.mi(s,n)),this.serializer)}}class Cm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>k0(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sD.bind(null,this.syncEngine),await L4(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new z4})()}createDatastore(t){const n=Nh(t.databaseInfo.databaseId),s=(function(u){return new E4(u)})(t.databaseInfo);return(function(u,f,p,g){return new w4(u,f,p,g)})(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return(function(s,l,u,f,p){return new I4(s,l,u,f,p)})(this.localStore,this.datastore,t.asyncQueue,(n=>k0(this.syncEngine,n,0)),(function(){return R0.v()?new R0:new g4})())}createSyncEngine(t,n){return(function(l,u,f,p,g,y,T){const S=new Y4(l,u,f,p,g,y);return T&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await(async function(l){const u=Et(l);it($s,"RemoteStore shutting down."),u.Ea.add(5),await Wl(u),u.Aa.shutdown(),u.Ra.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}Cm.provider={build:()=>new Cm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):ar("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="FirestoreClient";class cD{constructor(t,n,s,l,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=l,this.user=Je.UNAUTHENTICATED,this.clientId=Ym.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{it(os,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(it(os,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ts;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=pp(n,"Failed to shutdown persistence");t.reject(s)}})),t.promise}}async function em(r,t){r.asyncQueue.verifyOperationInProgress(),it(os,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async l=>{s.isEqual(l)||(await HT(t.localStore,l),s=l)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function x0(r,t){r.asyncQueue.verifyOperationInProgress();const n=await hD(r);it(os,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener((s=>N0(t.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,l)=>N0(t.remoteStore,l))),r._onlineComponents=t}async function hD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){it(os,"Using user provided OfflineComponentProvider");try{await em(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(l){return l.name==="FirebaseError"?l.code===$.FAILED_PRECONDITION||l.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(n))throw n;no("Error using user provided cache. Falling back to memory cache: "+n),await em(r,new hh)}}else it(os,"Using default OfflineComponentProvider"),await em(r,new lD(void 0));return r._offlineComponents}async function o1(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(it(os,"Using user provided OnlineComponentProvider"),await x0(r,r._uninitializedComponentsProvider._online)):(it(os,"Using default OnlineComponentProvider"),await x0(r,new Cm))),r._onlineComponents}function fD(r){return o1(r).then((t=>t.syncEngine))}async function dD(r){const t=await o1(r),n=t.eventManager;return n.onListen=X4.bind(null,t.syncEngine),n.onUnlisten=Z4.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=$4.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=W4.bind(null,t.syncEngine),n}function mD(r,t,n={}){const s=new ts;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,p,g,y){const T=new uD({next:N=>{T.Nu(),f.enqueueAndForget((()=>B4(u,S)));const H=N.docs.has(p);!H&&N.fromCache?y.reject(new lt($.UNAVAILABLE,"Failed to get document because the client is offline.")):H&&N.fromCache&&g&&g.source==="server"?y.reject(new lt($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):y.resolve(N)},error:N=>y.reject(N)}),S=new F4(ep(p.path),T,{includeMetadataChanges:!0,qa:!0});return j4(u,S)})(await dD(r),r.asyncQueue,t,n,s))),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l1(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P0=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="firestore.googleapis.com",L0=!0;class U0{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new lt($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=u1,this.ssl=L0}else this.host=t.host,this.ssl=t.ssl??L0;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=BT;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<qN)throw new lt($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}bC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=l1(t.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new lt($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new lt($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new lt($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(s,l){return s.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class vp{constructor(t,n,s,l){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new U0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new lt($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new lt($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new U0(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new mC;switch(s.type){case"firstParty":return new _C(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new lt($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=P0.get(n);s&&(it("ComponentProvider","Removing Datastore"),P0.delete(n),s.terminate())})(this),Promise.resolve()}}function pD(r,t,n,s={}){var y;r=Xs(r,vp);const l=lo(t),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},p=`${t}:${n}`;l&&(sE(`https://${p}`),aE("Firestore",!0)),u.host!==u1&&u.host!==p&&no("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:p,ssl:l,emulatorOptions:s};if(!es(g,f)&&(r._setSettings(g),s.mockUserToken)){let T,S;if(typeof s.mockUserToken=="string")T=s.mockUserToken,S=Je.MOCK_USER;else{T=wb(s.mockUserToken,(y=r._app)==null?void 0:y.options.projectId);const N=s.mockUserToken.sub||s.mockUserToken.user_id;if(!N)throw new lt($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new Je(N)}r._authCredentials=new pC(new tT(T,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ep(this.firestore,t,this._query)}}class ke{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Fl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new ke(this.firestore,t,this._key)}toJSON(){return{type:ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if($l(n,ke._jsonSchema))return new ke(t,s||null,new ht(le.fromString(n.referencePath)))}}ke._jsonSchemaVersion="firestore/documentReference/1.0",ke._jsonSchema={type:Ce("string",ke._jsonSchemaVersion),referencePath:Ce("string")};class Fl extends Ep{constructor(t,n,s){super(t,n,ep(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new ke(this.firestore,null,new ht(t))}withConverter(t){return new Fl(this.firestore,t,this._path)}}function vM(r,t,...n){if(r=xe(r),arguments.length===1&&(t=Ym.newId()),wC("doc","path",t),r instanceof vp){const s=le.fromString(t,...n);return Zv(s),new ke(r,null,new ht(s))}{if(!(r instanceof ke||r instanceof Fl))throw new lt($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(le.fromString(t,...n));return Zv(s),new ke(r.firestore,r instanceof Fl?r.converter:null,new ht(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z0="AsyncQueue";class j0{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new GT(this,"async_queue_retry"),this._c=()=>{const s=tm();s&&it(z0,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const n=tm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=tm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new ts;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!mo(t))throw t;it(z0,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,ar("INTERNAL UNHANDLED ERROR: ",B0(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(t,n,s){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const l=mp.createAndSchedule(this,t,n,s,(u=>this.hc(u)));return this.tc.push(l),l}uc(){this.nc&&mt(47125,{Pc:B0(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function B0(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class Mh extends vp{constructor(t,n,s,l){super(t,n,s,l),this.type="firestore",this._queue=new j0,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new j0(t),this._firestoreClient=void 0,await t}}}function gD(r,t){const n=typeof r=="object"?r:Pm(),s=typeof r=="string"?r:nh,l=ta(n,"firestore").getImmediate({identifier:s});if(!l._initialized){const u=Ab("firestore");u&&pD(l,...u)}return l}function c1(r){if(r._terminated)throw new lt($.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||yD(r),r._firestoreClient}function yD(r){var s,l,u;const t=r._freezeSettings(),n=(function(p,g,y,T){return new PC(p,g,y,T.host,T.ssl,T.experimentalForceLongPolling,T.experimentalAutoDetectLongPolling,l1(T.experimentalLongPollingOptions),T.useFetchStreams,T.isUsingEmulator)})(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,t);r._componentsProvider||(l=t.localCache)!=null&&l._offlineComponentProvider&&((u=t.localCache)!=null&&u._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new cD(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new zn(Ye.fromBase64String(t))}catch(n){throw new lt($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new zn(Ye.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:zn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if($l(t,zn._jsonSchema))return zn.fromBase64String(t.bytes)}}zn._jsonSchemaVersion="firestore/bytes/1.0",zn._jsonSchema={type:Ce("string",zn._jsonSchemaVersion),bytes:Ce("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new lt($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Qe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new lt($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new lt($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Vt(this._lat,t._lat)||Vt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Oi._jsonSchemaVersion}}static fromJSON(t){if($l(t,Oi._jsonSchema))return new Oi(t.latitude,t.longitude)}}Oi._jsonSchemaVersion="firestore/geoPoint/1.0",Oi._jsonSchema={type:Ce("string",Oi._jsonSchemaVersion),latitude:Ce("number"),longitude:Ce("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(s,l){if(s.length!==l.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==l[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Mi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if($l(t,Mi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new Mi(t.vectorValues);throw new lt($.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Mi._jsonSchemaVersion="firestore/vectorValue/1.0",Mi._jsonSchema={type:Ce("string",Mi._jsonSchemaVersion),vectorValues:Ce("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D=/^__.*__$/;class vD{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new us(t,this.data,this.fieldMask,n,this.fieldTransforms):new Jl(t,this.data,n,this.fieldTransforms)}}class h1{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new us(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function f1(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw mt(40011,{Ac:r})}}class Ap{constructor(t,n,s,l,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=l,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new Ap({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var l;const n=(l=this.path)==null?void 0:l.child(t),s=this.Vc({path:n,fc:!1});return s.gc(t),s}yc(t){var l;const n=(l=this.path)==null?void 0:l.child(t),s=this.Vc({path:n,fc:!1});return s.Rc(),s}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return fh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(f1(this.Ac)&&_D.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class ED{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Nh(t)}Cc(t,n,s,l=!1){return new Ap({Ac:t,methodName:n,Dc:s,path:Qe.emptyPath(),fc:!1,bc:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function d1(r){const t=r._freezeSettings(),n=Nh(r._databaseId);return new ED(r._databaseId,!!t.ignoreUndefinedProperties,n)}function TD(r,t,n,s,l,u={}){const f=r.Cc(u.merge||u.mergeFields?2:0,t,n,l);Sp("Data must be an object, but it was:",f,s);const p=m1(s,f);let g,y;if(u.merge)g=new wn(f.fieldMask),y=f.fieldTransforms;else if(u.mergeFields){const T=[];for(const S of u.mergeFields){const N=Nm(t,S,n);if(!f.contains(N))throw new lt($.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);g1(T,N)||T.push(N)}g=new wn(T),y=f.fieldTransforms.filter((S=>g.covers(S.field)))}else g=null,y=f.fieldTransforms;return new vD(new dn(p),g,y)}class Vh extends Tp{_toFieldTransform(t){if(t.Ac!==2)throw t.Ac===1?t.Sc(`${this._methodName}() can only appear at the top level of your update data`):t.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Vh}}function AD(r,t,n,s){const l=r.Cc(1,t,n);Sp("Data must be an object, but it was:",l,s);const u=[],f=dn.empty();ls(s,((g,y)=>{const T=wp(t,g,n);y=xe(y);const S=l.yc(T);if(y instanceof Vh)u.push(T);else{const N=xh(y,S);N!=null&&(u.push(T),f.set(T,N))}}));const p=new wn(u);return new h1(f,p,l.fieldTransforms)}function SD(r,t,n,s,l,u){const f=r.Cc(1,t,n),p=[Nm(t,s,n)],g=[l];if(u.length%2!=0)throw new lt($.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let N=0;N<u.length;N+=2)p.push(Nm(t,u[N])),g.push(u[N+1]);const y=[],T=dn.empty();for(let N=p.length-1;N>=0;--N)if(!g1(y,p[N])){const H=p[N];let J=g[N];J=xe(J);const W=f.yc(H);if(J instanceof Vh)y.push(H);else{const Z=xh(J,W);Z!=null&&(y.push(H),T.set(H,Z))}}const S=new wn(y);return new h1(T,S,f.fieldTransforms)}function xh(r,t){if(p1(r=xe(r)))return Sp("Unsupported field value:",t,r),m1(r,t);if(r instanceof Tp)return(function(s,l){if(!f1(l.Ac))throw l.Sc(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.Sc(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(l);u&&l.fieldTransforms.push(u)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(s,l){const u=[];let f=0;for(const p of s){let g=xh(p,l.wc(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}})(r,t)}return(function(s,l){if((s=xe(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return aN(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=re.fromDate(s);return{timestampValue:lh(l.serializer,u)}}if(s instanceof re){const u=new re(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:lh(l.serializer,u)}}if(s instanceof Oi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof zn)return{bytesValue:VT(l.serializer,s._byteString)};if(s instanceof ke){const u=l.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw l.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:sp(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof Mi)return(function(f,p){return{mapValue:{fields:{[uT]:{stringValue:cT},[ih]:{arrayValue:{values:f.toArray().map((y=>{if(typeof y!="number")throw p.Sc("VectorValues must only contain numeric values.");return np(p.serializer,y)}))}}}}}})(s,l);throw l.Sc(`Unsupported field value: ${Xm(s)}`)})(r,t)}function m1(r,t){const n={};return iT(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ls(r,((s,l)=>{const u=xh(l,t.mc(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function p1(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof re||r instanceof Oi||r instanceof zn||r instanceof ke||r instanceof Tp||r instanceof Mi)}function Sp(r,t,n){if(!p1(n)||!eT(n)){const s=Xm(n);throw s==="an object"?t.Sc(r+" a custom object"):t.Sc(r+" "+s)}}function Nm(r,t,n){if((t=xe(t))instanceof kh)return t._internalPath;if(typeof t=="string")return wp(r,t);throw fh("Field path arguments must be of type string or ",r,!1,void 0,n)}const wD=new RegExp("[~\\*/\\[\\]]");function wp(r,t,n){if(t.search(wD)>=0)throw fh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new kh(...t.split("."))._internalPath}catch{throw fh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function fh(r,t,n,s,l){const u=s&&!s.isEmpty(),f=l!==void 0;let p=`Function ${t}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${s}`),f&&(g+=` in document ${l}`),g+=")"),new lt($.INVALID_ARGUMENT,p+r+g)}function g1(r,t){return r.some((n=>n.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(t,n,s,l,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=l,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new bD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(_1("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bD extends y1{data(){return super.data()}}function _1(r,t){return typeof t=="string"?wp(r,t):t instanceof kh?t._internalPath:t._delegate._internalPath}class ID{convertValue(t,n="none"){switch(ss(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ye(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(rs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw mt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return ls(t,((l,u)=>{s[l]=this.convertValue(u,n)})),s}convertVectorValue(t){var s,l,u;const n=(u=(l=(s=t.fields)==null?void 0:s[ih].arrayValue)==null?void 0:l.values)==null?void 0:u.map((f=>ye(f.doubleValue)));return new Mi(n)}convertGeoPoint(t){return new Oi(ye(t.latitude),ye(t.longitude))}convertArray(t,n){return(t.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Ah(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(zl(t));default:return null}}convertTimestamp(t){const n=is(t);return new re(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=le.fromString(t);Kt(jT(s),9688,{name:t});const l=new jl(s.get(1),s.get(3)),u=new ht(s.popFirst(5));return l.isEqual(n)||ar(`Document ${u} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(r,t,n){let s;return s=r?r.toFirestore(t):t,s}class Rl{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Gs extends y1{constructor(t,n,s,l,u,f){super(t,n,s,l,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Gc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(_1("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new lt($.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Gs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Gs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Gs._jsonSchema={type:Ce("string",Gs._jsonSchemaVersion),bundleSource:Ce("string","DocumentSnapshot"),bundleName:Ce("string"),bundle:Ce("string")};class Gc extends Gs{data(t={}){return super.data(t)}}class Vl{constructor(t,n,s,l){this._firestore=t,this._userDataWriter=n,this._snapshot=l,this.metadata=new Rl(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((s=>{t.call(n,new Gc(this._firestore,this._userDataWriter,s.key,s,new Rl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new lt($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(l,u){if(l._snapshot.oldDocs.isEmpty()){let f=0;return l._snapshot.docChanges.map((p=>{const g=new Gc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new Rl(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}}))}{let f=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const g=new Gc(l._firestore,l._userDataWriter,p.doc.key,p.doc,new Rl(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let y=-1,T=-1;return p.type!==0&&(y=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),T=f.indexOf(p.doc.key)),{type:CD(p.type),doc:g,oldIndex:y,newIndex:T}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new lt($.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Vl._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Ym.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],l=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),l.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function CD(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return mt(61501,{type:r})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(r){r=Xs(r,ke);const t=Xs(r.firestore,Mh);return mD(c1(t),r._key).then((n=>DD(t,r,n)))}Vl._jsonSchemaVersion="firestore/querySnapshot/1.0",Vl._jsonSchema={type:Ce("string",Vl._jsonSchemaVersion),bundleSource:Ce("string","QuerySnapshot"),bundleName:Ce("string"),bundle:Ce("string")};class ND extends ID{constructor(t){super(),this.firestore=t}convertBytes(t){return new zn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new ke(this.firestore,null,n)}}function TM(r,t,n){r=Xs(r,ke);const s=Xs(r.firestore,Mh),l=RD(r.converter,t);return v1(s,[TD(d1(s),"setDoc",r._key,l,r.converter!==null,n).toMutation(r._key,Ni.none())])}function AM(r,t,n,...s){r=Xs(r,ke);const l=Xs(r.firestore,Mh),u=d1(l);let f;return f=typeof(t=xe(t))=="string"||t instanceof kh?SD(u,"updateDoc",r._key,t,n,s):AD(u,"updateDoc",r._key,t),v1(l,[f.toMutation(r._key,Ni.exists(!0))])}function v1(r,t){return(function(s,l){const u=new ts;return s.asyncQueue.enqueueAndForget((async()=>tD(await fD(s),l,u))),u.promise})(c1(r),t)}function DD(r,t,n){const s=n.docs.get(t._key),l=new ND(r);return new Gs(r,l,t._key,s,new Rl(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){(function(l){ho=l})(uo),ki(new ni("firestore",((s,{instanceIdentifier:l,options:u})=>{const f=s.getProvider("app").getImmediate(),p=new Mh(new gC(s.getProvider("auth-internal")),new vC(f,s.getProvider("app-check-internal")),(function(y,T){if(!Object.prototype.hasOwnProperty.apply(y.options,["projectId"]))throw new lt($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jl(y.options.projectId,T)})(f,l),f);return u={useFetchStreams:n,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),jn(Yv,Xv,t),jn(Yv,Xv,"esm2020")})();const E1="@firebase/installations",bp="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1=1e4,A1=`w:${bp}`,S1="FIS_v2",OD="https://firebaseinstallations.googleapis.com/v1",MD=3600*1e3,kD="installations",VD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Js=new Ws(kD,VD,xD);function w1(r){return r instanceof ii&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1({projectId:r}){return`${OD}/projects/${r}/installations`}function I1(r){return{token:r.token,requestStatus:2,expiresIn:LD(r.expiresIn),creationTime:Date.now()}}async function R1(r,t){const s=(await t.json()).error;return Js.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function C1({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function PD(r,{refreshToken:t}){const n=C1(r);return n.append("Authorization",UD(t)),n}async function N1(r){const t=await r();return t.status>=500&&t.status<600?r():t}function LD(r){return Number(r.replace("s","000"))}function UD(r){return`${S1} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zD({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=b1(r),l=C1(r),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const f={fid:n,authVersion:S1,appId:r.appId,sdkVersion:A1},p={method:"POST",headers:l,body:JSON.stringify(f)},g=await N1(()=>fetch(s,p));if(g.ok){const y=await g.json();return{fid:y.fid||n,registrationStatus:2,refreshToken:y.refreshToken,authToken:I1(y.authToken)}}else throw await R1("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=/^[cdef][\w-]{21}$/,Dm="";function qD(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=HD(r);return BD.test(n)?n:Dm}catch{return Dm}}function HD(r){return jD(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=new Map;function M1(r,t){const n=Ph(r);k1(n,t),FD(n,t)}function k1(r,t){const n=O1.get(r);if(n)for(const s of n)s(t)}function FD(r,t){const n=GD();n&&n.postMessage({key:r,fid:t}),KD()}let Fs=null;function GD(){return!Fs&&"BroadcastChannel"in self&&(Fs=new BroadcastChannel("[Firebase] FID Change"),Fs.onmessage=r=>{k1(r.data.key,r.data.fid)}),Fs}function KD(){O1.size===0&&Fs&&(Fs.close(),Fs=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD="firebase-installations-database",YD=1,Zs="firebase-installations-store";let nm=null;function Ip(){return nm||(nm=cE(QD,YD,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(Zs)}}})),nm}async function dh(r,t){const n=Ph(r),l=(await Ip()).transaction(Zs,"readwrite"),u=l.objectStore(Zs),f=await u.get(n);return await u.put(t,n),await l.done,(!f||f.fid!==t.fid)&&M1(r,t.fid),t}async function V1(r){const t=Ph(r),s=(await Ip()).transaction(Zs,"readwrite");await s.objectStore(Zs).delete(t),await s.done}async function Lh(r,t){const n=Ph(r),l=(await Ip()).transaction(Zs,"readwrite"),u=l.objectStore(Zs),f=await u.get(n),p=t(f);return p===void 0?await u.delete(n):await u.put(p,n),await l.done,p&&(!f||f.fid!==p.fid)&&M1(r,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rp(r){let t;const n=await Lh(r.appConfig,s=>{const l=XD(s),u=$D(r,l);return t=u.registrationPromise,u.installationEntry});return n.fid===Dm?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function XD(r){const t=r||{fid:qD(),registrationStatus:0};return x1(t)}function $D(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(Js.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=JD(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ZD(r)}:{installationEntry:t}}async function JD(r,t){try{const n=await zD(r,t);return dh(r.appConfig,n)}catch(n){throw w1(n)&&n.customData.serverCode===409?await V1(r.appConfig):await dh(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ZD(r){let t=await q0(r.appConfig);for(;t.registrationStatus===1;)await D1(100),t=await q0(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Rp(r);return s||n}return t}function q0(r){return Lh(r,t=>{if(!t)throw Js.create("installation-not-found");return x1(t)})}function x1(r){return WD(r)?{fid:r.fid,registrationStatus:0}:r}function WD(r){return r.registrationStatus===1&&r.registrationTime+T1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tO({appConfig:r,heartbeatServiceProvider:t},n){const s=eO(r,n),l=PD(r,n),u=t.getImmediate({optional:!0});if(u){const y=await u.getHeartbeatsHeader();y&&l.append("x-firebase-client",y)}const f={installation:{sdkVersion:A1,appId:r.appId}},p={method:"POST",headers:l,body:JSON.stringify(f)},g=await N1(()=>fetch(s,p));if(g.ok){const y=await g.json();return I1(y)}else throw await R1("Generate Auth Token",g)}function eO(r,{fid:t}){return`${b1(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cp(r,t=!1){let n;const s=await Lh(r.appConfig,u=>{if(!P1(u))throw Js.create("not-registered");const f=u.authToken;if(!t&&rO(f))return u;if(f.requestStatus===1)return n=nO(r,t),u;{if(!navigator.onLine)throw Js.create("app-offline");const p=aO(u);return n=iO(r,p),p}});return n?await n:s.authToken}async function nO(r,t){let n=await H0(r.appConfig);for(;n.authToken.requestStatus===1;)await D1(100),n=await H0(r.appConfig);const s=n.authToken;return s.requestStatus===0?Cp(r,t):s}function H0(r){return Lh(r,t=>{if(!P1(t))throw Js.create("not-registered");const n=t.authToken;return oO(n)?{...t,authToken:{requestStatus:0}}:t})}async function iO(r,t){try{const n=await tO(r,t),s={...t,authToken:n};return await dh(r.appConfig,s),n}catch(n){if(w1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await V1(r.appConfig);else{const s={...t,authToken:{requestStatus:0}};await dh(r.appConfig,s)}throw n}}function P1(r){return r!==void 0&&r.registrationStatus===2}function rO(r){return r.requestStatus===2&&!sO(r)}function sO(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+MD}function aO(r){const t={requestStatus:1,requestTime:Date.now()};return{...r,authToken:t}}function oO(r){return r.requestStatus===1&&r.requestTime+T1<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lO(r){const t=r,{installationEntry:n,registrationPromise:s}=await Rp(t);return s?s.catch(console.error):Cp(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uO(r,t=!1){const n=r;return await cO(n),(await Cp(n,t)).token}async function cO(r){const{registrationPromise:t}=await Rp(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(r){if(!r||!r.options)throw im("App Configuration");if(!r.name)throw im("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw im(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function im(r){return Js.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="installations",fO="installations-internal",dO=r=>{const t=r.getProvider("app").getImmediate(),n=hO(t),s=ta(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},mO=r=>{const t=r.getProvider("app").getImmediate(),n=ta(t,L1).getImmediate();return{getId:()=>lO(n),getToken:l=>uO(n,l)}};function pO(){ki(new ni(L1,dO,"PUBLIC")),ki(new ni(fO,mO,"PRIVATE"))}pO();jn(E1,bp);jn(E1,bp,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mh="analytics",gO="firebase_id",yO="origin",_O=60*1e3,vO="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Np="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new gh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bn=new Ws("analytics","Analytics",EO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TO(r){if(!r.startsWith(Np)){const t=bn.create("invalid-gtag-resource",{gtagURL:r});return rn.warn(t.message),""}return r}function U1(r){return Promise.all(r.map(t=>t.catch(n=>n)))}function AO(r,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,t)),n}function SO(r,t){const n=AO("firebase-js-sdk-policy",{createScriptURL:TO}),s=document.createElement("script"),l=`${Np}?l=${r}&id=${t}`;s.src=n?n==null?void 0:n.createScriptURL(l):l,s.async=!0,document.head.appendChild(s)}function wO(r){let t=[];return Array.isArray(window[r])?t=window[r]:window[r]=t,t}async function bO(r,t,n,s,l,u){const f=s[l];try{if(f)await t[f];else{const g=(await U1(n)).find(y=>y.measurementId===l);g&&await t[g.appId]}}catch(p){rn.error(p)}r("config",l,u)}async function IO(r,t,n,s,l){try{let u=[];if(l&&l.send_to){let f=l.send_to;Array.isArray(f)||(f=[f]);const p=await U1(n);for(const g of f){const y=p.find(S=>S.measurementId===g),T=y&&t[y.appId];if(T)u.push(T);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),r("event",s,l||{})}catch(u){rn.error(u)}}function RO(r,t,n,s){async function l(u,...f){try{if(u==="event"){const[p,g]=f;await IO(r,t,n,p,g)}else if(u==="config"){const[p,g]=f;await bO(r,t,n,s,p,g)}else if(u==="consent"){const[p,g]=f;r("consent",p,g)}else if(u==="get"){const[p,g,y]=f;r("get",p,g,y)}else if(u==="set"){const[p]=f;r("set",p)}else r(u,...f)}catch(p){rn.error(p)}}return l}function CO(r,t,n,s,l){let u=function(...f){window[s].push(arguments)};return window[l]&&typeof window[l]=="function"&&(u=window[l]),window[l]=RO(u,r,t,n),{gtagCore:u,wrappedGtag:window[l]}}function NO(r){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Np)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DO=30,OO=1e3;class MO{constructor(t={},n=OO){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const z1=new MO;function kO(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function VO(r){var f;const{appId:t,apiKey:n}=r,s={method:"GET",headers:kO(n)},l=vO.replace("{app-id}",t),u=await fetch(l,s);if(u.status!==200&&u.status!==304){let p="";try{const g=await u.json();(f=g.error)!=null&&f.message&&(p=g.error.message)}catch{}throw bn.create("config-fetch-failed",{httpStatus:u.status,responseMessage:p})}return u.json()}async function xO(r,t=z1,n){const{appId:s,apiKey:l,measurementId:u}=r.options;if(!s)throw bn.create("no-app-id");if(!l){if(u)return{measurementId:u,appId:s};throw bn.create("no-api-key")}const f=t.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new UO;return setTimeout(async()=>{p.abort()},_O),j1({appId:s,apiKey:l,measurementId:u},f,p,t)}async function j1(r,{throttleEndTimeMillis:t,backoffCount:n},s,l=z1){var p;const{appId:u,measurementId:f}=r;try{await PO(s,t)}catch(g){if(f)return rn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:u,measurementId:f};throw g}try{const g=await VO(r);return l.deleteThrottleMetadata(u),g}catch(g){const y=g;if(!LO(y)){if(l.deleteThrottleMetadata(u),f)return rn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:u,measurementId:f};throw g}const T=Number((p=y==null?void 0:y.customData)==null?void 0:p.httpStatus)===503?vv(n,l.intervalMillis,DO):vv(n,l.intervalMillis),S={throttleEndTimeMillis:Date.now()+T,backoffCount:n+1};return l.setThrottleMetadata(u,S),rn.debug(`Calling attemptFetch again in ${T} millis`),j1(r,S,s,l)}}function PO(r,t){return new Promise((n,s)=>{const l=Math.max(t-Date.now(),0),u=setTimeout(n,l);r.addEventListener(()=>{clearTimeout(u),s(bn.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function LO(r){if(!(r instanceof ii)||!r.customData)return!1;const t=Number(r.customData.httpStatus);return t===429||t===500||t===503||t===504}class UO{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function zO(r,t,n,s,l){if(l&&l.global){r("event",n,s);return}else{const u=await t,f={...s,send_to:u};r("event",n,f)}}async function jO(r,t,n,s){if(s&&s.global){const l={};for(const u of Object.keys(n))l[`user_properties.${u}`]=n[u];return r("set",l),Promise.resolve()}else{const l=await t;r("config",l,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BO(){if(km())try{await Vm()}catch(r){return rn.warn(bn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return rn.warn(bn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function qO(r,t,n,s,l,u,f){const p=xO(r);p.then(N=>{n[N.measurementId]=N.appId,r.options.measurementId&&N.measurementId!==r.options.measurementId&&rn.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>rn.error(N)),t.push(p);const g=BO().then(N=>{if(N)return s.getId()}),[y,T]=await Promise.all([p,g]);NO(u)||SO(u,y.measurementId),l("js",new Date);const S=(f==null?void 0:f.config)??{};return S[yO]="firebase",S.update=!0,T!=null&&(S[gO]=T),l("config",y.measurementId,S),y.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(t){this.app=t}_delete(){return delete eo[this.app.options.appId],Promise.resolve()}}let eo={},F0=[];const G0={};let rm="dataLayer",FO="gtag",K0,Dp,Q0=!1;function GO(){const r=[];if(Mm()&&r.push("This is a browser extension environment."),oE()||r.push("Cookies are not available."),r.length>0){const t=r.map((s,l)=>`(${l+1}) ${s}`).join(" "),n=bn.create("invalid-analytics-context",{errorInfo:t});rn.warn(n.message)}}function KO(r,t,n){GO();const s=r.options.appId;if(!s)throw bn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)rn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bn.create("no-api-key");if(eo[s]!=null)throw bn.create("already-exists",{id:s});if(!Q0){wO(rm);const{wrappedGtag:u,gtagCore:f}=CO(eo,F0,G0,rm,FO);Dp=u,K0=f,Q0=!0}return eo[s]=qO(r,F0,G0,t,K0,rm,n),new HO(r)}function QO(r=Pm()){r=xe(r);const t=ta(r,mh);return t.isInitialized()?t.getImmediate():YO(r)}function YO(r,t={}){const n=ta(r,mh);if(n.isInitialized()){const l=n.getImmediate();if(es(t,n.getOptions()))return l;throw bn.create("already-initialized")}return n.initialize({options:t})}async function XO(){if(Mm()||!oE()||!km())return!1;try{return await Vm()}catch{return!1}}function $O(r,t,n){r=xe(r),jO(Dp,eo[r.app.options.appId],t,n).catch(s=>rn.error(s))}function JO(r,t,n,s){r=xe(r),zO(Dp,eo[r.app.options.appId],t,n,s).catch(l=>rn.error(l))}const Y0="@firebase/analytics",X0="0.10.19";function ZO(){ki(new ni(mh,(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("installations-internal").getImmediate();return KO(s,l,n)},"PUBLIC")),ki(new ni("analytics-internal",r,"PRIVATE")),jn(Y0,X0),jn(Y0,X0,"esm2020");function r(t){try{const n=t.getProvider(mh).getImmediate();return{logEvent:(s,l,u)=>JO(n,s,l,u),setUserProperties:(s,l)=>$O(n,s,l)}}catch(n){throw bn.create("interop-component-reg-failed",{reason:n})}}}ZO();const WO={apiKey:"AIzaSyBynijMBTpMuk_R7b93qlOatS2aVOqEHsc",authDomain:"dicetools-b54b5.firebaseapp.com",projectId:"dicetools-b54b5",storageBucket:"dicetools-b54b5.appspot.com",messagingSenderId:"119703255150",appId:"1:119703255150:web:bdd9bc06856efe99788e7f",measurementId:"G-KXF95848E9"},Op=hE(WO),SM=gD(Op);typeof window<"u"&&XO().then(r=>r&&QO(Op));const $0=fC(Op),B1=Gt.createContext(void 0),tM=({children:r})=>{const[t,n]=Gt.useState(null),[s,l]=Gt.useState(!1),[u,f]=Gt.useState(!0);Gt.useEffect(()=>eR($0,y=>{n(y),l(!!y),f(!1)}),[]);const p=()=>{nR($0).then(()=>{l(!1)})};return X.jsx(B1.Provider,{value:{currentUser:t,isAuthenticated:s,loading:u,signOut:p},children:r})},eM=()=>{const r=Gt.useContext(B1);if(r===void 0)throw new Error("useAuth must be used within an AuthProvider");return r},nM=Gt.lazy(()=>lr(()=>import("./HomePage-DVSIuIwO.js"),__vite__mapDeps([0,1]))),iM=Gt.lazy(()=>lr(()=>import("./ToolPage-CrJut8sw.js").then(r=>r.T),__vite__mapDeps([2,1,3,4]))),rM=Gt.lazy(()=>lr(()=>import("./PrivacyPage-BXopQ3M9.js"),[])),sM=Gt.lazy(()=>lr(()=>import("./ContactPage-dfKmAlRd.js"),[])),aM=Gt.lazy(()=>lr(()=>import("./SignInPage-D4eEVFWi.js"),[])),oM=Gt.lazy(()=>lr(()=>import("./SignUpPage-DRj940y1.js"),[])),lM=Gt.lazy(()=>lr(()=>import("./ForgotPasswordPage-CCoQ_zkL.js"),[])),uM=Gt.lazy(()=>lr(()=>import("./CookiePolicyPage-CAw54wG4.js"),[])),cM=Gt.lazy(()=>lr(()=>import("./PricingPage-Bq1EoTwH.js"),__vite__mapDeps([5,4]))),hM=()=>{const[r,t]=Gt.useState(!1),[n,s]=Gt.useState("all"),[l,u]=Gt.useState(""),[f,p]=Gt.useState(null),[g,y]=Gt.useState(!1),[T,S]=Gt.useState("home"),{isAuthenticated:N,signOut:H,loading:J}=eM();Gt.useEffect(()=>{const V=new URLSearchParams(window.location.search),b=V.get("tool"),It=V.get("page");if(It==="privacy")S("privacy");else if(It==="contact")S("contact");else if(It==="signin")S("signin");else if(It==="signup")S("signup");else if(It==="forgot-password")S("forgot-password");else if(It==="cookie-policy")S("cookie-policy");else if(It==="pricing")S("pricing");else if(b){const q=Hd.find(et=>et.id===b);q&&(p(q),S("tool"))}else S("home");const ce=()=>{const q=new URLSearchParams(window.location.search),et=q.get("tool"),at=q.get("page");if(at==="privacy")S("privacy"),p(null);else if(at==="contact")S("contact"),p(null);else if(at==="signin")S("signin"),p(null);else if(at==="signup")S("signup"),p(null);else if(at==="forgot-password")S("forgot-password"),p(null);else if(at==="cookie-policy")S("cookie-policy"),p(null);else if(at==="pricing")S("pricing"),p(null);else if(et){const Dt=Hd.find(qt=>qt.id===et);Dt&&(p(Dt),S("tool"))}else p(null),S("home")};return window.addEventListener("popstate",ce),()=>window.removeEventListener("popstate",ce)},[]),Gt.useEffect(()=>{T==="tool"&&f?document.title=`${f.name} - Dicetools.online`:T==="privacy"?document.title="Privacy Policy - Dicetools.online":T==="contact"?document.title="Contact Us - Dicetools.online":T==="signin"?document.title="Sign In - Dicetools.online":T==="signup"?document.title="Sign Up - Dicetools.online":T==="forgot-password"?document.title="Forgot Password - Dicetools.online":T==="cookie-policy"?document.title="Cookie Policy - Dicetools.online":T==="pricing"?document.title="Pricing - Dicetools.online":document.title="Dicetools.online - Smart Tools for Everything"},[T,f]),Gt.useEffect(()=>{r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[r]);const W=(V,b=null)=>{const It=new URL(window.location.href);It.search="",V==="tool"&&b?(It.searchParams.set("tool",b.id),p(b)):V&&It.searchParams.set("page",V),window.history.pushState({},"",It),S(V),window.scrollTo(0,0)},Z=V=>W("tool",V),ut=()=>W("home"),gt=()=>W("privacy"),pt=()=>W("contact"),Pt=()=>W("signin"),te=()=>W("signup"),Nt=()=>W("forgot-password"),C=()=>W("cookie-policy"),w=()=>W("pricing"),R=()=>{H(),ut()},k=Hd.filter(V=>{const b=n==="all"||V.categoryId===n,It=V.name.toLowerCase().includes(l.toLowerCase())||V.description.toLowerCase().includes(l.toLowerCase());return b&&It}),O=()=>{if(J)return X.jsx("div",{className:"flex-grow flex items-center justify-center",children:X.jsx("div",{className:"w-16 h-16 border-4 border-primary-500 border-dashed rounded-full animate-spin"})});if(N&&(T==="signin"||T==="signup"||T==="forgot-password"))return ut(),null;switch(T){case"tool":return f&&X.jsx(iM,{tool:f,onBack:ut,onNavigateToPricing:w,onSelectCategory:V=>{s(V),ut()}});case"privacy":return X.jsx(rM,{});case"contact":return X.jsx(sM,{});case"cookie-policy":return X.jsx(uM,{});case"pricing":return X.jsx(cM,{});case"signin":return X.jsx(aM,{onNavigateToSignUp:te,onNavigateToForgotPassword:Nt,onSignInSuccess:ut});case"signup":return X.jsx(oM,{onNavigateToSignIn:Pt,onSignUpSuccess:ut});case"forgot-password":return X.jsx(lM,{onNavigateToSignIn:Pt});default:return X.jsx(nM,{searchQuery:l,setSearchQuery:u,activeCategory:n,setActiveCategory:s,filteredTools:k,navigateToTool:Z})}};return X.jsxs("div",{className:"min-h-screen flex flex-col font-sans selection:bg-primary-500/30 selection:text-primary-900",children:[X.jsx(fb,{darkMode:r,setDarkMode:t,currentTool:f,mobileMenuOpen:g,setMobileMenuOpen:y,onNavigateHome:ut,onNavigateToSignIn:Pt,onNavigateToSignUp:te,onNavigateToPricing:w,isAuthenticated:N,onSignOut:R}),X.jsx(Gt.Suspense,{fallback:X.jsx("div",{className:"flex-grow flex items-center justify-center",children:X.jsx("div",{className:"w-16 h-16 border-4 border-primary-500 border-dashed rounded-full animate-spin"})}),children:O()}),X.jsx(db,{onNavigateHome:ut,onNavigateToPrivacy:gt,onNavigateToContact:pt,onNavigateToCookiePolicy:C})]})},q1=document.getElementById("root");if(!q1)throw new Error("Could not find root element to mount to");const fM=DS.createRoot(q1);fM.render(X.jsx(AS.StrictMode,{children:X.jsx(tM,{children:X.jsx(hM,{})})}));export{BS as A,HS as B,XS as C,pM as D,mM as E,cv as F,Qr as G,gw as H,Ew as I,vM as J,EM as K,Aw as L,Uw as M,TM as N,SM as O,Hw as P,AM as Q,dM as R,eb as S,pv as U,hb as Z,lr as _,Ww as a,uw as b,Tt as c,fw as d,_w as e,Bw as f,J0 as g,Iw as h,ib as i,X as j,QS as k,ow as l,JS as m,ww as n,zS as o,dv as p,sb as q,Gt as r,Gw as s,mv as t,eM as u,WS as v,hv as w,gM as x,$0 as y,yM as z};
