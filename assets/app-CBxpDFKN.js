import{r as O,R as ng,j as u,I as z,A as En,m as le,L as rg,a as Qh,g as sg,b as zo,c as ig,d as og}from"./plans-C3ABB1yI.js";function ag(r,e){if(r instanceof RegExp)return{keys:!1,pattern:r};var t,n,s,i,o=[],c="",l=r.split("/");for(l[0]||l.shift();s=l.shift();)t=s[0],t==="*"?(o.push(t),c+=s[1]==="?"?"(?:/(.*))?":"/(.*)"):t===":"?(n=s.indexOf("?",1),i=s.indexOf(".",1),o.push(s.substring(1,~n?n:~i?i:s.length)),c+=~n&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(c+=(~n?"?":"")+"\\"+s.substring(i))):c+="/"+s;return{keys:o,pattern:new RegExp("^"+c+(e?"(?=$|/)":"/?$"),"i")}}var Jh={exports:{}},Yh={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wn=O;function cg(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var lg=typeof Object.is=="function"?Object.is:cg,ug=Wn.useState,hg=Wn.useEffect,dg=Wn.useLayoutEffect,fg=Wn.useDebugValue;function mg(r,e){var t=e(),n=ug({inst:{value:t,getSnapshot:e}}),s=n[0].inst,i=n[1];return dg(function(){s.value=t,s.getSnapshot=e,Go(s)&&i({inst:s})},[r,t,e]),hg(function(){return Go(s)&&i({inst:s}),r(function(){Go(s)&&i({inst:s})})},[r]),fg(t),t}function Go(r){var e=r.getSnapshot;r=r.value;try{var t=e();return!lg(r,t)}catch{return!0}}function pg(r,e){return e()}var gg=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?pg:mg;Yh.useSyncExternalStore=Wn.useSyncExternalStore!==void 0?Wn.useSyncExternalStore:gg;Jh.exports=Yh;var _g=Jh.exports;const yg=ng.useInsertionEffect,vg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xh=vg?O.useLayoutEffect:O.useEffect,Ig=yg||Xh,Ga=r=>{const e=O.useRef([r,(...t)=>e[0](...t)]).current;return Ig(()=>{e[0]=r}),e[1]},wg="popstate",Ka="pushState",Ha="replaceState",Eg="hashchange",tu=[wg,Ka,Ha,Eg],Tg=r=>{for(const e of tu)addEventListener(e,r);return()=>{for(const e of tu)removeEventListener(e,r)}},Zh=(r,e)=>_g.useSyncExternalStore(Tg,r,e),bg=()=>location.search,Ag=({ssrSearch:r=""}={})=>Zh(bg,()=>r),nu=()=>location.pathname,xg=({ssrPath:r}={})=>Zh(nu,r?()=>r:nu),Sg=(r,{replace:e=!1,state:t=null}={})=>history[e?Ha:Ka](t,"",r),ed=(r={})=>[xg(r),Sg],ru=Symbol.for("wouter_v3");if(typeof history<"u"&&typeof window[ru]>"u"){for(const r of[Ka,Ha]){const e=history[r];history[r]=function(){const t=e.apply(this,arguments),n=new Event(r);return n.arguments=arguments,dispatchEvent(n),t}}Object.defineProperty(window,ru,{value:!0})}const Rg=(r,e)=>e.toLowerCase().indexOf(r.toLowerCase())?"~"+e:e.slice(r.length)||"/",td=(r="")=>r==="/"?"":r,kg=(r,e)=>r[0]==="~"?r.slice(1):td(e)+r,Pg=(r="",e)=>Rg(su(td(r)),su(e)),su=r=>{try{return decodeURI(r)}catch{return r}},nd={hook:ed,searchHook:Ag,parser:ag,base:"",ssrPath:void 0,ssrSearch:void 0,hrefs:r=>r},rd=O.createContext(nd),ys=()=>O.useContext(rd),sd={},id=O.createContext(sd),Cg=()=>O.useContext(id),Ki=r=>{const[e,t]=r.hook(r);return[Pg(r.base,e),Ga((n,s)=>t(kg(n,r.base),s))]},qe=()=>Ki(ys()),od=(r,e,t,n)=>{const{pattern:s,keys:i}=e instanceof RegExp?{keys:!1,pattern:e}:r(e||"*",n),o=s.exec(t)||[],[c,...l]=o;return c!==void 0?[!0,(()=>{const d=i!==!1?Object.fromEntries(i.map((p,_)=>[p,l[_]])):o.groups;let m={...l};return d&&Object.assign(m,d),m})(),...n?[c]:[]]:[!1,null]},ad=({children:r,...e})=>{var m,p;const t=ys(),n=e.hook?nd:t;let s=n;const[i,o]=((m=e.ssrPath)==null?void 0:m.split("?"))??[];o&&(e.ssrSearch=o,e.ssrPath=i),e.hrefs=e.hrefs??((p=e.hook)==null?void 0:p.hrefs);let c=O.useRef({}),l=c.current,d=l;for(let _ in n){const E=_==="base"?n[_]+(e[_]||""):e[_]||n[_];l===d&&E!==d[_]&&(c.current=d={...d}),d[_]=E,E!==n[_]&&(s=d)}return O.createElement(rd.Provider,{value:s,children:r})},iu=({children:r,component:e},t)=>e?O.createElement(e,{params:t}):typeof r=="function"?r(t):r,Ng=r=>{let e=O.useRef(sd),t=e.current;for(const n in r)r[n]!==t[n]&&(t=r);return Object.keys(r).length===0&&(t=r),e.current=t},Je=({path:r,nest:e,match:t,...n})=>{const s=ys(),[i]=Ki(s),[o,c,l]=t??od(s.parser,r,i,e),d=Ng({...Cg(),...c});if(!o)return null;const m=l?O.createElement(ad,{base:l},iu(n,d)):iu(n,d);return O.createElement(id.Provider,{value:d,children:m})},Bt=O.forwardRef((r,e)=>{const t=ys(),[n,s]=Ki(t),{to:i="",href:o=i,onClick:c,asChild:l,children:d,className:m,replace:p,state:_,...E}=r,R=Ga(k=>{k.ctrlKey||k.metaKey||k.altKey||k.shiftKey||k.button!==0||(c==null||c(k),k.defaultPrevented||(k.preventDefault(),s(o,r)))}),C=t.hrefs(o[0]==="~"?o.slice(1):t.base+o,t);return l&&O.isValidElement(d)?O.cloneElement(d,{onClick:R,href:C}):O.createElement("a",{...E,onClick:R,href:C,className:m!=null&&m.call?m(n===o):m,children:d,ref:e})}),cd=r=>Array.isArray(r)?r.flatMap(e=>cd(e&&e.type===O.Fragment?e.props.children:e)):[r],Vg=({children:r,location:e})=>{const t=ys(),[n]=Ki(t);for(const s of cd(r)){let i=0;if(O.isValidElement(s)&&(i=od(t.parser,s.props.path,e||n,s.props.nest))[0])return O.cloneElement(s,{match:i})}return null},Ti=r=>{const{to:e,href:t=e}=r,[,n]=qe(),s=Ga(()=>n(e||t,r));return Xh(()=>{s()},[]),null};var ou={};/**
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
 */const ld=function(r){const e=[];let t=0;for(let n=0;n<r.length;n++){let s=r.charCodeAt(n);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&n+1<r.length&&(r.charCodeAt(n+1)&64512)===56320?(s=65536+((s&1023)<<10)+(r.charCodeAt(++n)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Dg=function(r){const e=[];let t=0,n=0;for(;t<r.length;){const s=r[t++];if(s<128)e[n++]=String.fromCharCode(s);else if(s>191&&s<224){const i=r[t++];e[n++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=r[t++],o=r[t++],c=r[t++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const i=r[t++],o=r[t++];e[n++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},ud={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let s=0;s<r.length;s+=3){const i=r[s],o=s+1<r.length,c=o?r[s+1]:0,l=s+2<r.length,d=l?r[s+2]:0,m=i>>2,p=(i&3)<<4|c>>4;let _=(c&15)<<2|d>>6,E=d&63;l||(E=64,o||(_=64)),n.push(t[m],t[p],t[_],t[E])}return n.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(ld(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):Dg(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let s=0;s<r.length;){const i=t[r.charAt(s++)],c=s<r.length?t[r.charAt(s)]:0;++s;const d=s<r.length?t[r.charAt(s)]:64;++s;const p=s<r.length?t[r.charAt(s)]:64;if(++s,i==null||c==null||d==null||p==null)throw new jg;const _=i<<2|c>>4;if(n.push(_),d!==64){const E=c<<4&240|d>>2;if(n.push(E),p!==64){const R=d<<6&192|p;n.push(R)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class jg extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Og=function(r){const e=ld(r);return ud.encodeByteArray(e,!0)},hd=function(r){return Og(r).replace(/\./g,"")},dd=function(r){try{return ud.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mg(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lg=()=>Mg().__FIREBASE_DEFAULTS__,Fg=()=>{if(typeof process>"u"||typeof ou>"u")return;const r=ou.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},Ug=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&dd(r[1]);return e&&JSON.parse(e)},Hi=()=>{try{return Lg()||Fg()||Ug()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},Bg=r=>{var e,t;return(t=(e=Hi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[r]},fd=()=>{var r;return(r=Hi())===null||r===void 0?void 0:r.config},md=r=>{var e;return(e=Hi())===null||e===void 0?void 0:e[`_${r}`]};/**
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
 */class qg{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function Ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $g(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ee())}function zg(){var r;const e=(r=Hi())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Gg(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Kg(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function Hg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wg(){const r=Ee();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function pd(){return!zg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gd(){try{return typeof indexedDB=="object"}catch{return!1}}function Qg(){return new Promise((r,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(n);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(n),r(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Jg="FirebaseError";class gt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=Jg,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vs.prototype.create)}}class vs{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Yg(i,n):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new gt(s,c,n)}}function Yg(r,e){return r.replace(Xg,(t,n)=>{const s=e[n];return s!=null?String(s):`<${n}?>`})}const Xg=/\{\$([^}]+)}/g;function Zg(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function ns(r,e){if(r===e)return!0;const t=Object.keys(r),n=Object.keys(e);for(const s of t){if(!n.includes(s))return!1;const i=r[s],o=e[s];if(au(i)&&au(o)){if(!ns(i,o))return!1}else if(i!==o)return!1}for(const s of n)if(!t.includes(s))return!1;return!0}function au(r){return r!==null&&typeof r=="object"}/**
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
 */function Is(r){const e=[];for(const[t,n]of Object.entries(r))Array.isArray(n)?n.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function e_(r,e){const t=new t_(r,e);return t.subscribe.bind(t)}class t_{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let s;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");n_(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:n},s.next===void 0&&(s.next=Ko),s.error===void 0&&(s.error=Ko),s.complete===void 0&&(s.complete=Ko);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function n_(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Ko(){}/**
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
 */function Ae(r){return r&&r._delegate?r._delegate:r}class mn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rn="[DEFAULT]";/**
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
 */class r_{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new qg;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&n.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(i_(e))try{this.getOrInitializeService({instanceIdentifier:rn})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});n.resolve(i)}catch{}}}}clearInstance(e=rn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rn){return this.instances.has(e)}getOptions(e=rn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);n===c&&o.resolve(s)}return s}onInit(e,t){var n;const s=this.normalizeInstanceIdentifier(t),i=(n=this.onInitCallbacks.get(s))!==null&&n!==void 0?n:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const s of n)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:s_(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=rn){return this.component?this.component.multipleInstances?e:rn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s_(r){return r===rn?void 0:r}function i_(r){return r.instantiationMode==="EAGER"}/**
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
 */class o_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new r_(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ee;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(ee||(ee={}));const a_={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},c_=ee.INFO,l_={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},u_=(r,e,...t)=>{if(e<r.logLevel)return;const n=new Date().toISOString(),s=l_[e];if(s)console[s](`[${n}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wa{constructor(e){this.name=e,this._logLevel=c_,this._logHandler=u_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?a_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const h_=(r,e)=>e.some(t=>r instanceof t);let cu,lu;function d_(){return cu||(cu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function f_(){return lu||(lu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _d=new WeakMap,ua=new WeakMap,yd=new WeakMap,Ho=new WeakMap,Qa=new WeakMap;function m_(r){const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("success",i),r.removeEventListener("error",o)},i=()=>{t(Nt(r.result)),s()},o=()=>{n(r.error),s()};r.addEventListener("success",i),r.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_d.set(t,r)}).catch(()=>{}),Qa.set(e,r),e}function p_(r){if(ua.has(r))return;const e=new Promise((t,n)=>{const s=()=>{r.removeEventListener("complete",i),r.removeEventListener("error",o),r.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{n(r.error||new DOMException("AbortError","AbortError")),s()};r.addEventListener("complete",i),r.addEventListener("error",o),r.addEventListener("abort",o)});ua.set(r,e)}let ha={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return ua.get(r);if(e==="objectStoreNames")return r.objectStoreNames||yd.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Nt(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function g_(r){ha=r(ha)}function __(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=r.call(Wo(this),e,...t);return yd.set(n,e.sort?e.sort():[e]),Nt(n)}:f_().includes(r)?function(...e){return r.apply(Wo(this),e),Nt(_d.get(this))}:function(...e){return Nt(r.apply(Wo(this),e))}}function y_(r){return typeof r=="function"?__(r):(r instanceof IDBTransaction&&p_(r),h_(r,d_())?new Proxy(r,ha):r)}function Nt(r){if(r instanceof IDBRequest)return m_(r);if(Ho.has(r))return Ho.get(r);const e=y_(r);return e!==r&&(Ho.set(r,e),Qa.set(e,r)),e}const Wo=r=>Qa.get(r);function v_(r,e,{blocked:t,upgrade:n,blocking:s,terminated:i}={}){const o=indexedDB.open(r,e),c=Nt(o);return n&&o.addEventListener("upgradeneeded",l=>{n(Nt(o.result),l.oldVersion,l.newVersion,Nt(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const I_=["get","getKey","getAll","getAllKeys","count"],w_=["put","add","delete","clear"],Qo=new Map;function uu(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Qo.get(e))return Qo.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,s=w_.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(s||I_.includes(t)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let d=l.store;return n&&(d=d.index(c.shift())),(await Promise.all([d[t](...c),s&&l.done]))[0]};return Qo.set(e,i),i}g_(r=>({...r,get:(e,t,n)=>uu(e,t)||r.get(e,t,n),has:(e,t)=>!!uu(e,t)||r.has(e,t)}));/**
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
 */class E_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(T_(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function T_(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const da="@firebase/app",hu="0.10.16";/**
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
 */const dt=new Wa("@firebase/app"),b_="@firebase/app-compat",A_="@firebase/analytics-compat",x_="@firebase/analytics",S_="@firebase/app-check-compat",R_="@firebase/app-check",k_="@firebase/auth",P_="@firebase/auth-compat",C_="@firebase/database",N_="@firebase/data-connect",V_="@firebase/database-compat",D_="@firebase/functions",j_="@firebase/functions-compat",O_="@firebase/installations",M_="@firebase/installations-compat",L_="@firebase/messaging",F_="@firebase/messaging-compat",U_="@firebase/performance",B_="@firebase/performance-compat",q_="@firebase/remote-config",$_="@firebase/remote-config-compat",z_="@firebase/storage",G_="@firebase/storage-compat",K_="@firebase/firestore",H_="@firebase/vertexai",W_="@firebase/firestore-compat",Q_="firebase",J_="11.0.2";/**
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
 */const fa="[DEFAULT]",Y_={[da]:"fire-core",[b_]:"fire-core-compat",[x_]:"fire-analytics",[A_]:"fire-analytics-compat",[R_]:"fire-app-check",[S_]:"fire-app-check-compat",[k_]:"fire-auth",[P_]:"fire-auth-compat",[C_]:"fire-rtdb",[N_]:"fire-data-connect",[V_]:"fire-rtdb-compat",[D_]:"fire-fn",[j_]:"fire-fn-compat",[O_]:"fire-iid",[M_]:"fire-iid-compat",[L_]:"fire-fcm",[F_]:"fire-fcm-compat",[U_]:"fire-perf",[B_]:"fire-perf-compat",[q_]:"fire-rc",[$_]:"fire-rc-compat",[z_]:"fire-gcs",[G_]:"fire-gcs-compat",[K_]:"fire-fst",[W_]:"fire-fst-compat",[H_]:"fire-vertex","fire-js":"fire-js",[Q_]:"fire-js-all"};/**
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
 */const bi=new Map,X_=new Map,ma=new Map;function du(r,e){try{r.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function Qn(r){const e=r.name;if(ma.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;ma.set(e,r);for(const t of bi.values())du(t,r);for(const t of X_.values())du(t,r);return!0}function Ja(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function Ze(r){return r.settings!==void 0}/**
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
 */const Z_={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vt=new vs("app","Firebase",Z_);/**
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
 */class ey{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new mn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const hr=J_;function vd(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const n=Object.assign({name:fa,automaticDataCollectionEnabled:!1},e),s=n.name;if(typeof s!="string"||!s)throw Vt.create("bad-app-name",{appName:String(s)});if(t||(t=fd()),!t)throw Vt.create("no-options");const i=bi.get(s);if(i){if(ns(t,i.options)&&ns(n,i.config))return i;throw Vt.create("duplicate-app",{appName:s})}const o=new o_(s);for(const l of ma.values())o.addComponent(l);const c=new ey(t,n,o);return bi.set(s,c),c}function ty(r=fa){const e=bi.get(r);if(!e&&r===fa&&fd())return vd();if(!e)throw Vt.create("no-app",{appName:r});return e}function Dt(r,e,t){var n;let s=(n=Y_[r])!==null&&n!==void 0?n:r;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(c.join(" "));return}Qn(new mn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ny="firebase-heartbeat-database",ry=1,rs="firebase-heartbeat-store";let Jo=null;function Id(){return Jo||(Jo=v_(ny,ry,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(rs)}catch(t){console.warn(t)}}}}).catch(r=>{throw Vt.create("idb-open",{originalErrorMessage:r.message})})),Jo}async function sy(r){try{const t=(await Id()).transaction(rs),n=await t.objectStore(rs).get(wd(r));return await t.done,n}catch(e){if(e instanceof gt)dt.warn(e.message);else{const t=Vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}}async function fu(r,e){try{const n=(await Id()).transaction(rs,"readwrite");await n.objectStore(rs).put(e,wd(r)),await n.done}catch(t){if(t instanceof gt)dt.warn(t.message);else{const n=Vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(n.message)}}}function wd(r){return`${r.name}!${r.options.appId}`}/**
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
 */const iy=1024,oy=30*24*60*60*1e3;class ay{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ly(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mu();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=oy}),this._storage.overwrite(this._heartbeatsCache))}catch(n){dt.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mu(),{heartbeatsToSend:n,unsentEntries:s}=cy(this._heartbeatsCache.heartbeats),i=hd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return dt.warn(t),""}}}function mu(){return new Date().toISOString().substring(0,10)}function cy(r,e=iy){const t=[];let n=r.slice();for(const s of r){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),pu(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class ly{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gd()?Qg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sy(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return fu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return fu(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pu(r){return hd(JSON.stringify({version:2,heartbeats:r})).length}/**
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
 */function uy(r){Qn(new mn("platform-logger",e=>new E_(e),"PRIVATE")),Qn(new mn("heartbeat",e=>new ay(e),"PRIVATE")),Dt(da,hu,r),Dt(da,hu,"esm2017"),Dt("fire-js","")}uy("");var gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var hn,Ed;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function v(){}v.prototype=y.prototype,w.D=y.prototype,w.prototype=new v,w.prototype.constructor=w,w.C=function(T,b,S){for(var I=Array(arguments.length-2),we=2;we<arguments.length;we++)I[we-2]=arguments[we];return y.prototype[b].apply(T,I)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,v){v||(v=0);var T=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)T[b]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(b=0;16>b;++b)T[b]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=w.g[0],v=w.g[1],b=w.g[2];var S=w.g[3],I=y+(S^v&(b^S))+T[0]+3614090360&4294967295;y=v+(I<<7&4294967295|I>>>25),I=S+(b^y&(v^b))+T[1]+3905402710&4294967295,S=y+(I<<12&4294967295|I>>>20),I=b+(v^S&(y^v))+T[2]+606105819&4294967295,b=S+(I<<17&4294967295|I>>>15),I=v+(y^b&(S^y))+T[3]+3250441966&4294967295,v=b+(I<<22&4294967295|I>>>10),I=y+(S^v&(b^S))+T[4]+4118548399&4294967295,y=v+(I<<7&4294967295|I>>>25),I=S+(b^y&(v^b))+T[5]+1200080426&4294967295,S=y+(I<<12&4294967295|I>>>20),I=b+(v^S&(y^v))+T[6]+2821735955&4294967295,b=S+(I<<17&4294967295|I>>>15),I=v+(y^b&(S^y))+T[7]+4249261313&4294967295,v=b+(I<<22&4294967295|I>>>10),I=y+(S^v&(b^S))+T[8]+1770035416&4294967295,y=v+(I<<7&4294967295|I>>>25),I=S+(b^y&(v^b))+T[9]+2336552879&4294967295,S=y+(I<<12&4294967295|I>>>20),I=b+(v^S&(y^v))+T[10]+4294925233&4294967295,b=S+(I<<17&4294967295|I>>>15),I=v+(y^b&(S^y))+T[11]+2304563134&4294967295,v=b+(I<<22&4294967295|I>>>10),I=y+(S^v&(b^S))+T[12]+1804603682&4294967295,y=v+(I<<7&4294967295|I>>>25),I=S+(b^y&(v^b))+T[13]+4254626195&4294967295,S=y+(I<<12&4294967295|I>>>20),I=b+(v^S&(y^v))+T[14]+2792965006&4294967295,b=S+(I<<17&4294967295|I>>>15),I=v+(y^b&(S^y))+T[15]+1236535329&4294967295,v=b+(I<<22&4294967295|I>>>10),I=y+(b^S&(v^b))+T[1]+4129170786&4294967295,y=v+(I<<5&4294967295|I>>>27),I=S+(v^b&(y^v))+T[6]+3225465664&4294967295,S=y+(I<<9&4294967295|I>>>23),I=b+(y^v&(S^y))+T[11]+643717713&4294967295,b=S+(I<<14&4294967295|I>>>18),I=v+(S^y&(b^S))+T[0]+3921069994&4294967295,v=b+(I<<20&4294967295|I>>>12),I=y+(b^S&(v^b))+T[5]+3593408605&4294967295,y=v+(I<<5&4294967295|I>>>27),I=S+(v^b&(y^v))+T[10]+38016083&4294967295,S=y+(I<<9&4294967295|I>>>23),I=b+(y^v&(S^y))+T[15]+3634488961&4294967295,b=S+(I<<14&4294967295|I>>>18),I=v+(S^y&(b^S))+T[4]+3889429448&4294967295,v=b+(I<<20&4294967295|I>>>12),I=y+(b^S&(v^b))+T[9]+568446438&4294967295,y=v+(I<<5&4294967295|I>>>27),I=S+(v^b&(y^v))+T[14]+3275163606&4294967295,S=y+(I<<9&4294967295|I>>>23),I=b+(y^v&(S^y))+T[3]+4107603335&4294967295,b=S+(I<<14&4294967295|I>>>18),I=v+(S^y&(b^S))+T[8]+1163531501&4294967295,v=b+(I<<20&4294967295|I>>>12),I=y+(b^S&(v^b))+T[13]+2850285829&4294967295,y=v+(I<<5&4294967295|I>>>27),I=S+(v^b&(y^v))+T[2]+4243563512&4294967295,S=y+(I<<9&4294967295|I>>>23),I=b+(y^v&(S^y))+T[7]+1735328473&4294967295,b=S+(I<<14&4294967295|I>>>18),I=v+(S^y&(b^S))+T[12]+2368359562&4294967295,v=b+(I<<20&4294967295|I>>>12),I=y+(v^b^S)+T[5]+4294588738&4294967295,y=v+(I<<4&4294967295|I>>>28),I=S+(y^v^b)+T[8]+2272392833&4294967295,S=y+(I<<11&4294967295|I>>>21),I=b+(S^y^v)+T[11]+1839030562&4294967295,b=S+(I<<16&4294967295|I>>>16),I=v+(b^S^y)+T[14]+4259657740&4294967295,v=b+(I<<23&4294967295|I>>>9),I=y+(v^b^S)+T[1]+2763975236&4294967295,y=v+(I<<4&4294967295|I>>>28),I=S+(y^v^b)+T[4]+1272893353&4294967295,S=y+(I<<11&4294967295|I>>>21),I=b+(S^y^v)+T[7]+4139469664&4294967295,b=S+(I<<16&4294967295|I>>>16),I=v+(b^S^y)+T[10]+3200236656&4294967295,v=b+(I<<23&4294967295|I>>>9),I=y+(v^b^S)+T[13]+681279174&4294967295,y=v+(I<<4&4294967295|I>>>28),I=S+(y^v^b)+T[0]+3936430074&4294967295,S=y+(I<<11&4294967295|I>>>21),I=b+(S^y^v)+T[3]+3572445317&4294967295,b=S+(I<<16&4294967295|I>>>16),I=v+(b^S^y)+T[6]+76029189&4294967295,v=b+(I<<23&4294967295|I>>>9),I=y+(v^b^S)+T[9]+3654602809&4294967295,y=v+(I<<4&4294967295|I>>>28),I=S+(y^v^b)+T[12]+3873151461&4294967295,S=y+(I<<11&4294967295|I>>>21),I=b+(S^y^v)+T[15]+530742520&4294967295,b=S+(I<<16&4294967295|I>>>16),I=v+(b^S^y)+T[2]+3299628645&4294967295,v=b+(I<<23&4294967295|I>>>9),I=y+(b^(v|~S))+T[0]+4096336452&4294967295,y=v+(I<<6&4294967295|I>>>26),I=S+(v^(y|~b))+T[7]+1126891415&4294967295,S=y+(I<<10&4294967295|I>>>22),I=b+(y^(S|~v))+T[14]+2878612391&4294967295,b=S+(I<<15&4294967295|I>>>17),I=v+(S^(b|~y))+T[5]+4237533241&4294967295,v=b+(I<<21&4294967295|I>>>11),I=y+(b^(v|~S))+T[12]+1700485571&4294967295,y=v+(I<<6&4294967295|I>>>26),I=S+(v^(y|~b))+T[3]+2399980690&4294967295,S=y+(I<<10&4294967295|I>>>22),I=b+(y^(S|~v))+T[10]+4293915773&4294967295,b=S+(I<<15&4294967295|I>>>17),I=v+(S^(b|~y))+T[1]+2240044497&4294967295,v=b+(I<<21&4294967295|I>>>11),I=y+(b^(v|~S))+T[8]+1873313359&4294967295,y=v+(I<<6&4294967295|I>>>26),I=S+(v^(y|~b))+T[15]+4264355552&4294967295,S=y+(I<<10&4294967295|I>>>22),I=b+(y^(S|~v))+T[6]+2734768916&4294967295,b=S+(I<<15&4294967295|I>>>17),I=v+(S^(b|~y))+T[13]+1309151649&4294967295,v=b+(I<<21&4294967295|I>>>11),I=y+(b^(v|~S))+T[4]+4149444226&4294967295,y=v+(I<<6&4294967295|I>>>26),I=S+(v^(y|~b))+T[11]+3174756917&4294967295,S=y+(I<<10&4294967295|I>>>22),I=b+(y^(S|~v))+T[2]+718787259&4294967295,b=S+(I<<15&4294967295|I>>>17),I=v+(S^(b|~y))+T[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(b+(I<<21&4294967295|I>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+S&4294967295}n.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var v=y-this.blockSize,T=this.B,b=this.h,S=0;S<y;){if(b==0)for(;S<=v;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<y;)if(T[b++]=w.charCodeAt(S++),b==this.blockSize){s(this,T),b=0;break}}else for(;S<y;)if(T[b++]=w[S++],b==this.blockSize){s(this,T),b=0;break}}this.h=b,this.o+=y},n.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var v=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=v&255,v/=256;for(this.u(w),w=Array(16),y=v=0;4>y;++y)for(var T=0;32>T;T+=8)w[v++]=this.g[y]>>>T&255;return w};function i(w,y){var v=c;return Object.prototype.hasOwnProperty.call(v,w)?v[w]:v[w]=y(w)}function o(w,y){this.h=y;for(var v=[],T=!0,b=w.length-1;0<=b;b--){var S=w[b]|0;T&&S==y||(v[b]=S,T=!1)}this.g=v}var c={};function l(w){return-128<=w&&128>w?i(w,function(y){return new o([y|0],0>y?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return k(d(-w));for(var y=[],v=1,T=0;w>=v;T++)y[T]=w/v|0,v*=4294967296;return new o(y,0)}function m(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return k(m(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=d(Math.pow(y,8)),T=p,b=0;b<w.length;b+=8){var S=Math.min(8,w.length-b),I=parseInt(w.substring(b,b+S),y);8>S?(S=d(Math.pow(y,S)),T=T.j(S).add(d(I))):(T=T.j(v),T=T.add(d(I)))}return T}var p=l(0),_=l(1),E=l(16777216);r=o.prototype,r.m=function(){if(C(this))return-k(this).m();for(var w=0,y=1,v=0;v<this.g.length;v++){var T=this.i(v);w+=(0<=T?T:4294967296+T)*y,y*=4294967296}return w},r.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(R(this))return"0";if(C(this))return"-"+k(this).toString(w);for(var y=d(Math.pow(w,6)),v=this,T="";;){var b=D(v,y).g;v=M(v,b.j(y));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(w);if(v=b,R(v))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},r.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function R(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function C(w){return w.h==-1}r.l=function(w){return w=M(this,w),C(w)?-1:R(w)?0:1};function k(w){for(var y=w.g.length,v=[],T=0;T<y;T++)v[T]=~w.g[T];return new o(v,~w.h).add(_)}r.abs=function(){return C(this)?k(this):this},r.add=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0,b=0;b<=y;b++){var S=T+(this.i(b)&65535)+(w.i(b)&65535),I=(S>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);T=I>>>16,S&=65535,I&=65535,v[b]=I<<16|S}return new o(v,v[v.length-1]&-2147483648?-1:0)};function M(w,y){return w.add(k(y))}r.j=function(w){if(R(this)||R(w))return p;if(C(this))return C(w)?k(this).j(k(w)):k(k(this).j(w));if(C(w))return k(this.j(k(w)));if(0>this.l(E)&&0>w.l(E))return d(this.m()*w.m());for(var y=this.g.length+w.g.length,v=[],T=0;T<2*y;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var b=0;b<w.g.length;b++){var S=this.i(T)>>>16,I=this.i(T)&65535,we=w.i(b)>>>16,vt=w.i(b)&65535;v[2*T+2*b]+=I*vt,L(v,2*T+2*b),v[2*T+2*b+1]+=S*vt,L(v,2*T+2*b+1),v[2*T+2*b+1]+=I*we,L(v,2*T+2*b+1),v[2*T+2*b+2]+=S*we,L(v,2*T+2*b+2)}for(T=0;T<y;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=y;T<2*y;T++)v[T]=0;return new o(v,0)};function L(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function N(w,y){this.g=w,this.h=y}function D(w,y){if(R(y))throw Error("division by zero");if(R(w))return new N(p,p);if(C(w))return y=D(k(w),y),new N(k(y.g),k(y.h));if(C(y))return y=D(w,k(y)),new N(k(y.g),y.h);if(30<w.g.length){if(C(w)||C(y))throw Error("slowDivide_ only works with positive integers.");for(var v=_,T=y;0>=T.l(w);)v=B(v),T=B(T);var b=W(v,1),S=W(T,1);for(T=W(T,2),v=W(v,2);!R(T);){var I=S.add(T);0>=I.l(w)&&(b=b.add(v),S=I),T=W(T,1),v=W(v,1)}return y=M(w,b.j(y)),new N(b,y)}for(b=p;0<=w.l(y);){for(v=Math.max(1,Math.floor(w.m()/y.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=d(v),I=S.j(y);C(I)||0<I.l(w);)v-=T,S=d(v),I=S.j(y);R(S)&&(S=_),b=b.add(S),w=M(w,I)}return new N(b,w)}r.A=function(w){return D(this,w).h},r.and=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)&w.i(T);return new o(v,this.h&w.h)},r.or=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)|w.i(T);return new o(v,this.h|w.h)},r.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),v=[],T=0;T<y;T++)v[T]=this.i(T)^w.i(T);return new o(v,this.h^w.h)};function B(w){for(var y=w.g.length+1,v=[],T=0;T<y;T++)v[T]=w.i(T)<<1|w.i(T-1)>>>31;return new o(v,w.h)}function W(w,y){var v=y>>5;y%=32;for(var T=w.g.length-v,b=[],S=0;S<T;S++)b[S]=0<y?w.i(S+v)>>>y|w.i(S+v+1)<<32-y:w.i(S+v);return new o(b,w.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Ed=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=m,hn=o}).apply(typeof gu<"u"?gu:typeof self<"u"?self:typeof window<"u"?window:{});var Qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Td,$r,bd,oi,pa,Ad,xd,Sd;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qs=="object"&&Qs];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var n=t(this);function s(a,h){if(h)e:{var f=n;a=a.split(".");for(var g=0;g<a.length-1;g++){var x=a[g];if(!(x in f))break e;f=f[x]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,x={next:function(){if(!g&&f<a.length){var P=f++;return{value:h(P,a[P]),done:!1}}return g=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function d(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function m(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,g),a.apply(h,x)}}return function(){return a.apply(h,arguments)}}function _(a,h,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?m:p,_.apply(null,arguments)}function E(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,x,P){for(var F=Array(arguments.length-2),ce=2;ce<arguments.length;ce++)F[ce-2]=arguments[ce];return h.prototype[x].apply(g,F)}}function C(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function k(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const x=a.length||0,P=g.length||0;a.length=x+P;for(let F=0;F<P;F++)a[x+F]=g[F]}else a.push(g)}}class M{constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(a){return/^[\s\xa0]*$/.test(a)}function N(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var B=N().indexOf("Gecko")!=-1&&!(N().toLowerCase().indexOf("webkit")!=-1&&N().indexOf("Edge")==-1)&&!(N().indexOf("Trident")!=-1||N().indexOf("MSIE")!=-1)&&N().indexOf("Edge")==-1;function W(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function w(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,h){let f,g;for(let x=1;x<arguments.length;x++){g=arguments[x];for(f in g)a[f]=g[f];for(let P=0;P<v.length;P++)f=v[P],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function b(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function S(a){c.setTimeout(()=>{throw a},0)}function I(){var a=de;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class we{constructor(){this.h=this.g=null}add(h,f){const g=vt.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var vt=new M(()=>new Q,a=>a.reset());class Q{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Y,ae=!1,de=new we,xn=()=>{const a=c.Promise.resolve(void 0);Y=()=>{a.then(Io)}};var Io=()=>{for(var a;a=I();){try{a.h.call(a.g)}catch(f){S(f)}var h=vt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ae=!1};function It(){this.s=this.s,this.C=this.C}It.prototype.s=!1,It.prototype.ma=function(){this.s||(this.s=!0,this.N())},It.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Re(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Re.prototype.h=function(){this.defaultPrevented=!0};var Tp=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a}();function Ir(a,h){if(Re.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(B){e:{try{D(h.nodeName);var x=!0;break e}catch{}x=!1}x||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:bp[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ir.aa.h.call(this)}}R(Ir,Re);var bp={2:"touch",3:"pen",4:"mouse"};Ir.prototype.h=function(){Ir.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ps="closure_listenable_"+(1e6*Math.random()|0),Ap=0;function xp(a,h,f,g,x){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=x,this.key=++Ap,this.da=this.fa=!1}function Cs(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ns(a){this.src=a,this.g={},this.h=0}Ns.prototype.add=function(a,h,f,g,x){var P=a.toString();a=this.g[P],a||(a=this.g[P]=[],this.h++);var F=Eo(a,h,g,x);return-1<F?(h=a[F],f||(h.fa=!1)):(h=new xp(h,this.src,P,!!g,x),h.fa=f,a.push(h)),h};function wo(a,h){var f=h.type;if(f in a.g){var g=a.g[f],x=Array.prototype.indexOf.call(g,h,void 0),P;(P=0<=x)&&Array.prototype.splice.call(g,x,1),P&&(Cs(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Eo(a,h,f,g){for(var x=0;x<a.length;++x){var P=a[x];if(!P.da&&P.listener==h&&P.capture==!!f&&P.ha==g)return x}return-1}var To="closure_lm_"+(1e6*Math.random()|0),bo={};function nl(a,h,f,g,x){if(Array.isArray(h)){for(var P=0;P<h.length;P++)nl(a,h[P],f,g,x);return null}return f=il(f),a&&a[Ps]?a.K(h,f,d(g)?!!g.capture:!1,x):Sp(a,h,f,!1,g,x)}function Sp(a,h,f,g,x,P){if(!h)throw Error("Invalid event type");var F=d(x)?!!x.capture:!!x,ce=xo(a);if(ce||(a[To]=ce=new Ns(a)),f=ce.add(h,f,g,F,P),f.proxy)return f;if(g=Rp(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)Tp||(x=F),x===void 0&&(x=!1),a.addEventListener(h.toString(),g,x);else if(a.attachEvent)a.attachEvent(sl(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Rp(){function a(f){return h.call(a.src,a.listener,f)}const h=kp;return a}function rl(a,h,f,g,x){if(Array.isArray(h))for(var P=0;P<h.length;P++)rl(a,h[P],f,g,x);else g=d(g)?!!g.capture:!!g,f=il(f),a&&a[Ps]?(a=a.i,h=String(h).toString(),h in a.g&&(P=a.g[h],f=Eo(P,f,g,x),-1<f&&(Cs(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete a.g[h],a.h--)))):a&&(a=xo(a))&&(h=a.g[h.toString()],a=-1,h&&(a=Eo(h,f,g,x)),(f=-1<a?h[a]:null)&&Ao(f))}function Ao(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[Ps])wo(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(sl(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=xo(h))?(wo(f,a),f.h==0&&(f.src=null,h[To]=null)):Cs(a)}}}function sl(a){return a in bo?bo[a]:bo[a]="on"+a}function kp(a,h){if(a.da)a=!0;else{h=new Ir(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&Ao(a),a=f.call(g,h)}return a}function xo(a){return a=a[To],a instanceof Ns?a:null}var So="__closure_events_fn_"+(1e9*Math.random()>>>0);function il(a){return typeof a=="function"?a:(a[So]||(a[So]=function(h){return a.handleEvent(h)}),a[So])}function ke(){It.call(this),this.i=new Ns(this),this.M=this,this.F=null}R(ke,It),ke.prototype[Ps]=!0,ke.prototype.removeEventListener=function(a,h,f,g){rl(this,a,h,f,g)};function Me(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Re(h,a);else if(h instanceof Re)h.target=h.target||a;else{var x=h;h=new Re(g,a),T(h,x)}if(x=!0,f)for(var P=f.length-1;0<=P;P--){var F=h.g=f[P];x=Vs(F,g,!0,h)&&x}if(F=h.g=a,x=Vs(F,g,!0,h)&&x,x=Vs(F,g,!1,h)&&x,f)for(P=0;P<f.length;P++)F=h.g=f[P],x=Vs(F,g,!1,h)&&x}ke.prototype.N=function(){if(ke.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)Cs(f[g]);delete a.g[h],a.h--}}this.F=null},ke.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ke.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function Vs(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var x=!0,P=0;P<h.length;++P){var F=h[P];if(F&&!F.da&&F.capture==f){var ce=F.listener,xe=F.ha||F.src;F.fa&&wo(a.i,F),x=ce.call(xe,g)!==!1&&x}}return x&&!g.defaultPrevented}function ol(a,h,f){if(typeof a=="function")f&&(a=_(a,f));else if(a&&typeof a.handleEvent=="function")a=_(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function al(a){a.g=ol(()=>{a.g=null,a.i&&(a.i=!1,al(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Pp extends It{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:al(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function wr(a){It.call(this),this.h=a,this.g={}}R(wr,It);var cl=[];function ll(a){W(a.g,function(h,f){this.g.hasOwnProperty(f)&&Ao(h)},a),a.g={}}wr.prototype.N=function(){wr.aa.N.call(this),ll(this)},wr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ro=c.JSON.stringify,Cp=c.JSON.parse,Np=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ko(){}ko.prototype.h=null;function ul(a){return a.h||(a.h=a.i())}function hl(){}var Er={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Po(){Re.call(this,"d")}R(Po,Re);function Co(){Re.call(this,"c")}R(Co,Re);var Xt={},dl=null;function Ds(){return dl=dl||new ke}Xt.La="serverreachability";function fl(a){Re.call(this,Xt.La,a)}R(fl,Re);function Tr(a){const h=Ds();Me(h,new fl(h))}Xt.STAT_EVENT="statevent";function ml(a,h){Re.call(this,Xt.STAT_EVENT,a),this.stat=h}R(ml,Re);function Le(a){const h=Ds();Me(h,new ml(h,a))}Xt.Ma="timingevent";function pl(a,h){Re.call(this,Xt.Ma,a),this.size=h}R(pl,Re);function br(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function Ar(){this.g=!0}Ar.prototype.xa=function(){this.g=!1};function Vp(a,h,f,g,x,P){a.info(function(){if(a.g)if(P)for(var F="",ce=P.split("&"),xe=0;xe<ce.length;xe++){var re=ce[xe].split("=");if(1<re.length){var Pe=re[0];re=re[1];var Ce=Pe.split("_");F=2<=Ce.length&&Ce[1]=="type"?F+(Pe+"="+re+"&"):F+(Pe+"=redacted&")}}else F=null;else F=P;return"XMLHTTP REQ ("+g+") [attempt "+x+"]: "+h+`
`+f+`
`+F})}function Dp(a,h,f,g,x,P,F){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+x+"]: "+h+`
`+f+`
`+P+" "+F})}function Sn(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Op(a,f)+(g?" "+g:"")})}function jp(a,h){a.info(function(){return"TIMEOUT: "+h})}Ar.prototype.info=function(){};function Op(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var x=g[1];if(Array.isArray(x)&&!(1>x.length)){var P=x[0];if(P!="noop"&&P!="stop"&&P!="close")for(var F=1;F<x.length;F++)x[F]=""}}}}return Ro(f)}catch{return h}}var js={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gl={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},No;function Os(){}R(Os,ko),Os.prototype.g=function(){return new XMLHttpRequest},Os.prototype.i=function(){return{}},No=new Os;function wt(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new wr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new _l}function _l(){this.i=null,this.g="",this.h=!1}var yl={},Vo={};function Do(a,h,f){a.L=1,a.v=Us(it(h)),a.m=f,a.P=!0,vl(a,null)}function vl(a,h){a.F=Date.now(),Ms(a),a.A=it(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Vl(f.i,"t",g),a.C=0,f=a.j.J,a.h=new _l,a.g=Yl(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Pp(_(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var x="readystatechange";Array.isArray(x)||(x&&(cl[0]=x.toString()),x=cl);for(var P=0;P<x.length;P++){var F=nl(f,x[P],g||h.handleEvent,!1,h.h||h);if(!F)break;h.g[F.key]=F}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),Tr(),Vp(a.i,a.u,a.A,a.l,a.R,a.m)}wt.prototype.ca=function(a){a=a.target;const h=this.M;h&&ot(a)==3?h.j():this.Y(a)},wt.prototype.Y=function(a){try{if(a==this.g)e:{const Ce=ot(this.g);var h=this.g.Ba();const Pn=this.g.Z();if(!(3>Ce)&&(Ce!=3||this.g&&(this.h.h||this.g.oa()||Ul(this.g)))){this.J||Ce!=4||h==7||(h==8||0>=Pn?Tr(3):Tr(2)),jo(this);var f=this.g.Z();this.X=f;t:if(Il(this)){var g=Ul(this.g);a="";var x=g.length,P=ot(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),xr(this);var F="";break t}this.h.i=new c.TextDecoder}for(h=0;h<x;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(P&&h==x-1)});g.length=0,this.h.g+=a,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=f==200,Dp(this.i,this.u,this.A,this.l,this.R,Ce,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ce,xe=this.g;if((ce=xe.g?xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(ce)){var re=ce;break t}}re=null}if(f=re)Sn(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Oo(this,f);else{this.o=!1,this.s=3,Le(12),Zt(this),xr(this);break e}}if(this.P){f=!0;let Qe;for(;!this.J&&this.C<F.length;)if(Qe=Mp(this,F),Qe==Vo){Ce==4&&(this.s=4,Le(14),f=!1),Sn(this.i,this.l,null,"[Incomplete Response]");break}else if(Qe==yl){this.s=4,Le(15),Sn(this.i,this.l,F,"[Invalid Chunk]"),f=!1;break}else Sn(this.i,this.l,Qe,null),Oo(this,Qe);if(Il(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ce!=4||F.length!=0||this.h.h||(this.s=1,Le(16),f=!1),this.o=this.o&&f,!f)Sn(this.i,this.l,F,"[Invalid Chunked Response]"),Zt(this),xr(this);else if(0<F.length&&!this.W){this.W=!0;var Pe=this.j;Pe.g==this&&Pe.ba&&!Pe.M&&(Pe.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),qo(Pe),Pe.M=!0,Le(11))}}else Sn(this.i,this.l,F,null),Oo(this,F);Ce==4&&Zt(this),this.o&&!this.J&&(Ce==4?Hl(this.j,this):(this.o=!1,Ms(this)))}else eg(this.g),f==400&&0<F.indexOf("Unknown SID")?(this.s=3,Le(12)):(this.s=0,Le(13)),Zt(this),xr(this)}}}catch{}finally{}};function Il(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Mp(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?Vo:(f=Number(h.substring(f,g)),isNaN(f)?yl:(g+=1,g+f>h.length?Vo:(h=h.slice(g,g+f),a.C=g+f,h)))}wt.prototype.cancel=function(){this.J=!0,Zt(this)};function Ms(a){a.S=Date.now()+a.I,wl(a,a.I)}function wl(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=br(_(a.ba,a),h)}function jo(a){a.B&&(c.clearTimeout(a.B),a.B=null)}wt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(jp(this.i,this.A),this.L!=2&&(Tr(),Le(17)),Zt(this),this.s=2,xr(this)):wl(this,this.S-a)};function xr(a){a.j.G==0||a.J||Hl(a.j,a)}function Zt(a){jo(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ll(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Oo(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Mo(f.h,a))){if(!a.K&&Mo(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var x=g;if(x[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Ks(f),zs(f);else break e;Bo(f),Le(18)}}else f.za=x[1],0<f.za-f.T&&37500>x[2]&&f.F&&f.v==0&&!f.C&&(f.C=br(_(f.Za,f),6e3));if(1>=bl(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else tn(f,11)}else if((a.K||f.g==a)&&Ks(f),!L(h))for(x=f.Da.g.parse(h),h=0;h<x.length;h++){let re=x[h];if(f.T=re[0],re=re[1],f.G==2)if(re[0]=="c"){f.K=re[1],f.ia=re[2];const Pe=re[3];Pe!=null&&(f.la=Pe,f.j.info("VER="+f.la));const Ce=re[4];Ce!=null&&(f.Aa=Ce,f.j.info("SVER="+f.Aa));const Pn=re[5];Pn!=null&&typeof Pn=="number"&&0<Pn&&(g=1.5*Pn,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const Qe=a.g;if(Qe){const Ws=Qe.g?Qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ws){var P=g.h;P.g||Ws.indexOf("spdy")==-1&&Ws.indexOf("quic")==-1&&Ws.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Lo(P,P.h),P.h=null))}if(g.D){const $o=Qe.g?Qe.g.getResponseHeader("X-HTTP-Session-Id"):null;$o&&(g.ya=$o,he(g.I,g.D,$o))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var F=a;if(g.qa=Jl(g,g.J?g.ia:null,g.W),F.K){Al(g.h,F);var ce=F,xe=g.L;xe&&(ce.I=xe),ce.B&&(jo(ce),Ms(ce)),g.g=F}else Gl(g);0<f.i.length&&Gs(f)}else re[0]!="stop"&&re[0]!="close"||tn(f,7);else f.G==3&&(re[0]=="stop"||re[0]=="close"?re[0]=="stop"?tn(f,7):Uo(f):re[0]!="noop"&&f.l&&f.l.ta(re),f.v=0)}}Tr(4)}catch{}}var Lp=class{constructor(a,h){this.g=a,this.map=h}};function El(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tl(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function bl(a){return a.h?1:a.g?a.g.size:0}function Mo(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Lo(a,h){a.g?a.g.add(h):a.h=h}function Al(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}El.prototype.cancel=function(){if(this.i=xl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function xl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return C(a.i)}function Fp(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function Up(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Sl(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=Up(a),g=Fp(a),x=g.length,P=0;P<x;P++)h.call(void 0,g[P],f&&f[P],a)}var Rl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bp(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),x=null;if(0<=g){var P=a[f].substring(0,g);x=a[f].substring(g+1)}else P=a[f];h(P,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function en(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof en){this.h=a.h,Ls(this,a.j),this.o=a.o,this.g=a.g,Fs(this,a.s),this.l=a.l;var h=a.i,f=new kr;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),kl(this,f),this.m=a.m}else a&&(h=String(a).match(Rl))?(this.h=!1,Ls(this,h[1]||"",!0),this.o=Sr(h[2]||""),this.g=Sr(h[3]||"",!0),Fs(this,h[4]),this.l=Sr(h[5]||"",!0),kl(this,h[6]||"",!0),this.m=Sr(h[7]||"")):(this.h=!1,this.i=new kr(null,this.h))}en.prototype.toString=function(){var a=[],h=this.j;h&&a.push(Rr(h,Pl,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(Rr(h,Pl,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Rr(f,f.charAt(0)=="/"?zp:$p,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Rr(f,Kp)),a.join("")};function it(a){return new en(a)}function Ls(a,h,f){a.j=f?Sr(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Fs(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function kl(a,h,f){h instanceof kr?(a.i=h,Hp(a.i,a.h)):(f||(h=Rr(h,Gp)),a.i=new kr(h,a.h))}function he(a,h,f){a.i.set(h,f)}function Us(a){return he(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Sr(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Rr(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,qp),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function qp(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Pl=/[#\/\?@]/g,$p=/[#\?:]/g,zp=/[#\?]/g,Gp=/[#\?@]/g,Kp=/#/g;function kr(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function Et(a){a.g||(a.g=new Map,a.h=0,a.i&&Bp(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}r=kr.prototype,r.add=function(a,h){Et(this),this.i=null,a=Rn(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function Cl(a,h){Et(a),h=Rn(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Nl(a,h){return Et(a),h=Rn(a,h),a.g.has(h)}r.forEach=function(a,h){Et(this),this.g.forEach(function(f,g){f.forEach(function(x){a.call(h,x,g,this)},this)},this)},r.na=function(){Et(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const x=a[g];for(let P=0;P<x.length;P++)f.push(h[g])}return f},r.V=function(a){Et(this);let h=[];if(typeof a=="string")Nl(this,a)&&(h=h.concat(this.g.get(Rn(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},r.set=function(a,h){return Et(this),this.i=null,a=Rn(this,a),Nl(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},r.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Vl(a,h,f){Cl(a,h),0<f.length&&(a.i=null,a.g.set(Rn(a,h),C(f)),a.h+=f.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const P=encodeURIComponent(String(g)),F=this.V(g);for(g=0;g<F.length;g++){var x=P;F[g]!==""&&(x+="="+encodeURIComponent(String(F[g]))),a.push(x)}}return this.i=a.join("&")};function Rn(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Hp(a,h){h&&!a.j&&(Et(a),a.i=null,a.g.forEach(function(f,g){var x=g.toLowerCase();g!=x&&(Cl(this,g),Vl(this,x,f))},a)),a.j=h}function Wp(a,h){const f=new Ar;if(c.Image){const g=new Image;g.onload=E(Tt,f,"TestLoadImage: loaded",!0,h,g),g.onerror=E(Tt,f,"TestLoadImage: error",!1,h,g),g.onabort=E(Tt,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=E(Tt,f,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function Qp(a,h){const f=new Ar,g=new AbortController,x=setTimeout(()=>{g.abort(),Tt(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(P=>{clearTimeout(x),P.ok?Tt(f,"TestPingServer: ok",!0,h):Tt(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(x),Tt(f,"TestPingServer: error",!1,h)})}function Tt(a,h,f,g,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),g(f)}catch{}}function Jp(){this.g=new Np}function Yp(a,h,f){const g=f||"";try{Sl(a,function(x,P){let F=x;d(x)&&(F=Ro(x)),h.push(g+P+"="+encodeURIComponent(F))})}catch(x){throw h.push(g+"type="+encodeURIComponent("_badmap")),x}}function Bs(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Bs,ko),Bs.prototype.g=function(){return new qs(this.l,this.j)},Bs.prototype.i=function(a){return function(){return a}}({});function qs(a,h){ke.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(qs,ke),r=qs.prototype,r.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,Cr(this)},r.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pr(this)),this.readyState=0},r.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Cr(this)),this.g&&(this.readyState=3,Cr(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Dl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Dl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}r.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Pr(this):Cr(this),this.readyState==3&&Dl(this)}},r.Ra=function(a){this.g&&(this.response=this.responseText=a,Pr(this))},r.Qa=function(a){this.g&&(this.response=a,Pr(this))},r.ga=function(){this.g&&Pr(this)};function Pr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Cr(a)}r.setRequestHeader=function(a,h){this.u.append(a,h)},r.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function Cr(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(qs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function jl(a){let h="";return W(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Fo(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=jl(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):he(a,h,f))}function ge(a){ke.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(ge,ke);var Xp=/^https?$/i,Zp=["POST","PUT"];r=ge.prototype,r.Ha=function(a){this.J=a},r.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():No.g(),this.v=this.o?ul(this.o):ul(No),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(P){Ol(this,P);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var x in g)f.set(x,g[x]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const P of g.keys())f.set(P,g.get(P));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),x=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Zp,h,void 0))||g||x||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,F]of f)this.g.setRequestHeader(P,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fl(this),this.u=!0,this.g.send(a),this.u=!1}catch(P){Ol(this,P)}};function Ol(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Ml(a),$s(a)}function Ml(a){a.A||(a.A=!0,Me(a,"complete"),Me(a,"error"))}r.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Me(this,"complete"),Me(this,"abort"),$s(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$s(this,!0)),ge.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ll(this):this.bb())},r.bb=function(){Ll(this)};function Ll(a){if(a.h&&typeof o<"u"&&(!a.v[1]||ot(a)!=4||a.Z()!=2)){if(a.u&&ot(a)==4)ol(a.Ea,0,a);else if(Me(a,"readystatechange"),ot(a)==4){a.h=!1;try{const F=a.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=F===0){var x=String(a.D).match(Rl)[1]||null;!x&&c.self&&c.self.location&&(x=c.self.location.protocol.slice(0,-1)),g=!Xp.test(x?x.toLowerCase():"")}f=g}if(f)Me(a,"complete"),Me(a,"success");else{a.m=6;try{var P=2<ot(a)?a.g.statusText:""}catch{P=""}a.l=P+" ["+a.Z()+"]",Ml(a)}}finally{$s(a)}}}}function $s(a,h){if(a.g){Fl(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||Me(a,"ready");try{f.onreadystatechange=g}catch{}}}function Fl(a){a.I&&(c.clearTimeout(a.I),a.I=null)}r.isActive=function(){return!!this.g};function ot(a){return a.g?a.g.readyState:0}r.Z=function(){try{return 2<ot(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Cp(h)}};function Ul(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function eg(a){const h={};a=(a.g&&2<=ot(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(L(a[g]))continue;var f=b(a[g]);const x=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=h[x]||[];h[x]=P,P.push(f)}w(h,function(g){return g.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Nr(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function Bl(a){this.Aa=0,this.i=[],this.j=new Ar,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Nr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Nr("baseRetryDelayMs",5e3,a),this.cb=Nr("retryDelaySeedMs",1e4,a),this.Wa=Nr("forwardChannelMaxRetries",2,a),this.wa=Nr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new El(a&&a.concurrentRequestLimit),this.Da=new Jp,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Bl.prototype,r.la=8,r.G=1,r.connect=function(a,h,f,g){Le(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=Jl(this,null,this.W),Gs(this)};function Uo(a){if(ql(a),a.G==3){var h=a.U++,f=it(a.I);if(he(f,"SID",a.K),he(f,"RID",h),he(f,"TYPE","terminate"),Vr(a,f),h=new wt(a,a.j,h),h.L=2,h.v=Us(it(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=Yl(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ms(h)}Ql(a)}function zs(a){a.g&&(qo(a),a.g.cancel(),a.g=null)}function ql(a){zs(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ks(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Gs(a){if(!Tl(a.h)&&!a.s){a.s=!0;var h=a.Ga;Y||xn(),ae||(Y(),ae=!0),de.add(h,a),a.B=0}}function tg(a,h){return bl(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=br(_(a.Ga,a,h),Wl(a,a.B)),a.B++,!0)}r.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const x=new wt(this,this.j,a);let P=this.o;if(this.S&&(P?(P=y(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(x.H=P,P=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=zl(this,x,h),f=it(this.I),he(f,"RID",a),he(f,"CVER",22),this.D&&he(f,"X-HTTP-Session-Id",this.D),Vr(this,f),P&&(this.O?h="headers="+encodeURIComponent(String(jl(P)))+"&"+h:this.m&&Fo(f,this.m,P)),Lo(this.h,x),this.Ua&&he(f,"TYPE","init"),this.P?(he(f,"$req",h),he(f,"SID","null"),x.T=!0,Do(x,f,null)):Do(x,f,h),this.G=2}}else this.G==3&&(a?$l(this,a):this.i.length==0||Tl(this.h)||$l(this))};function $l(a,h){var f;h?f=h.l:f=a.U++;const g=it(a.I);he(g,"SID",a.K),he(g,"RID",f),he(g,"AID",a.T),Vr(a,g),a.m&&a.o&&Fo(g,a.m,a.o),f=new wt(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=zl(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Lo(a.h,f),Do(f,g,h)}function Vr(a,h){a.H&&W(a.H,function(f,g){he(h,g,f)}),a.l&&Sl({},function(f,g){he(h,g,f)})}function zl(a,h,f){f=Math.min(a.i.length,f);var g=a.l?_(a.l.Na,a.l,a):null;e:{var x=a.i;let P=-1;for(;;){const F=["count="+f];P==-1?0<f?(P=x[0].g,F.push("ofs="+P)):P=0:F.push("ofs="+P);let ce=!0;for(let xe=0;xe<f;xe++){let re=x[xe].g;const Pe=x[xe].map;if(re-=P,0>re)P=Math.max(0,x[xe].g-100),ce=!1;else try{Yp(Pe,F,"req"+re+"_")}catch{g&&g(Pe)}}if(ce){g=F.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function Gl(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Y||xn(),ae||(Y(),ae=!0),de.add(h,a),a.v=0}}function Bo(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=br(_(a.Fa,a),Wl(a,a.v)),a.v++,!0)}r.Fa=function(){if(this.u=null,Kl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=br(_(this.ab,this),a)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Le(10),zs(this),Kl(this))};function qo(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Kl(a){a.g=new wt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=it(a.qa);he(h,"RID","rpc"),he(h,"SID",a.K),he(h,"AID",a.T),he(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&he(h,"TO",a.ja),he(h,"TYPE","xmlhttp"),Vr(a,h),a.m&&a.o&&Fo(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Us(it(h)),f.m=null,f.P=!0,vl(f,a)}r.Za=function(){this.C!=null&&(this.C=null,zs(this),Bo(this),Le(19))};function Ks(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Hl(a,h){var f=null;if(a.g==h){Ks(a),qo(a),a.g=null;var g=2}else if(Mo(a.h,h))f=h.D,Al(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var x=a.B;g=Ds(),Me(g,new pl(g,f)),Gs(a)}else Gl(a);else if(x=h.s,x==3||x==0&&0<h.X||!(g==1&&tg(a,h)||g==2&&Bo(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),x){case 1:tn(a,5);break;case 4:tn(a,10);break;case 3:tn(a,6);break;default:tn(a,2)}}}function Wl(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function tn(a,h){if(a.j.info("Error code "+h),h==2){var f=_(a.fb,a),g=a.Xa;const x=!g;g=new en(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Ls(g,"https"),Us(g),x?Wp(g.toString(),f):Qp(g.toString(),f)}else Le(2);a.G=0,a.l&&a.l.sa(h),Ql(a),ql(a)}r.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function Ql(a){if(a.G=0,a.ka=[],a.l){const h=xl(a.h);(h.length!=0||a.i.length!=0)&&(k(a.ka,h),k(a.ka,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.ra()}}function Jl(a,h,f){var g=f instanceof en?it(f):new en(f);if(g.g!="")h&&(g.g=h+"."+g.g),Fs(g,g.s);else{var x=c.location;g=x.protocol,h=h?h+"."+x.hostname:x.hostname,x=+x.port;var P=new en(null);g&&Ls(P,g),h&&(P.g=h),x&&Fs(P,x),f&&(P.l=f),g=P}return f=a.D,h=a.ya,f&&h&&he(g,f,h),he(g,"VER",a.la),Vr(a,g),g}function Yl(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ge(new Bs({eb:f})):new ge(a.pa),h.Ha(a.J),h}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xl(){}r=Xl.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Hs(){}Hs.prototype.g=function(a,h){return new Ge(a,h)};function Ge(a,h){ke.call(this),this.g=new Bl(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!L(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!L(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new kn(this)}R(Ge,ke),Ge.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ge.prototype.close=function(){Uo(this.g)},Ge.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ro(a),a=f);h.i.push(new Lp(h.Ya++,a)),h.G==3&&Gs(h)},Ge.prototype.N=function(){this.g.l=null,delete this.j,Uo(this.g),delete this.g,Ge.aa.N.call(this)};function Zl(a){Po.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Zl,Po);function eu(){Co.call(this),this.status=1}R(eu,Co);function kn(a){this.g=a}R(kn,Xl),kn.prototype.ua=function(){Me(this.g,"a")},kn.prototype.ta=function(a){Me(this.g,new Zl(a))},kn.prototype.sa=function(a){Me(this.g,new eu)},kn.prototype.ra=function(){Me(this.g,"b")},Hs.prototype.createWebChannel=Hs.prototype.g,Ge.prototype.send=Ge.prototype.o,Ge.prototype.open=Ge.prototype.m,Ge.prototype.close=Ge.prototype.close,Sd=function(){return new Hs},xd=function(){return Ds()},Ad=Xt,pa={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},js.NO_ERROR=0,js.TIMEOUT=8,js.HTTP_ERROR=6,oi=js,gl.COMPLETE="complete",bd=gl,hl.EventType=Er,Er.OPEN="a",Er.CLOSE="b",Er.ERROR="c",Er.MESSAGE="d",ke.prototype.listen=ke.prototype.K,$r=hl,ge.prototype.listenOnce=ge.prototype.L,ge.prototype.getLastError=ge.prototype.Ka,ge.prototype.getLastErrorCode=ge.prototype.Ba,ge.prototype.getStatus=ge.prototype.Z,ge.prototype.getResponseJson=ge.prototype.Oa,ge.prototype.getResponseText=ge.prototype.oa,ge.prototype.send=ge.prototype.ea,ge.prototype.setWithCredentials=ge.prototype.Ha,Td=ge}).apply(typeof Qs<"u"?Qs:typeof self<"u"?self:typeof window<"u"?window:{});const _u="@firebase/firestore";/**
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
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
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
 */let dr="11.0.2";/**
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
 */const pn=new Wa("@firebase/firestore");function On(){return pn.logLevel}function j(r,...e){if(pn.logLevel<=ee.DEBUG){const t=e.map(Ya);pn.debug(`Firestore (${dr}): ${r}`,...t)}}function ye(r,...e){if(pn.logLevel<=ee.ERROR){const t=e.map(Ya);pn.error(`Firestore (${dr}): ${r}`,...t)}}function ss(r,...e){if(pn.logLevel<=ee.WARN){const t=e.map(Ya);pn.warn(`Firestore (${dr}): ${r}`,...t)}}function Ya(r){if(typeof r=="string")return r;try{/**
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
*/return function(t){return JSON.stringify(t)}(r)}catch{return r}}/**
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
 */function $(r="Unexpected state"){const e=`FIRESTORE (${dr}) INTERNAL ASSERTION FAILED: `+r;throw ye(e),new Error(e)}function K(r,e){r||$()}function G(r,e){return r}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends gt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class hy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ve.UNAUTHENTICATED))}shutdown(){}}class fy{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){K(this.o===void 0);let n=this.i;const s=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let i=new jt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new jt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new jt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(K(typeof n.accessToken=="string"),new hy(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string"),new Ve(e)}}class my{constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class py{constructor(e,t,n){this.l=e,this.h=t,this.P=n}getToken(){return Promise.resolve(new my(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _y{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){K(this.o===void 0);const n=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>n(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(K(typeof t.token=="string"),this.R=t.token,new gy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yy(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<r;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */class Rd{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const s=yy(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<t&&(n+=e.charAt(s[i]%e.length))}return n}}function X(r,e){return r<e?-1:r>e?1:0}function Jn(r,e,t){return r.length===e.length&&r.every((n,s)=>t(n,e[s]))}function kd(r){return r+"\0"}/**
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
 */class pe{static now(){return pe.fromMillis(Date.now())}static fromDate(e){return pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new pe(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new U(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new U(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new U(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?X(this.nanoseconds,e.nanoseconds):X(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class H{static fromTimestamp(e){return new H(e)}static min(){return new H(new pe(0,0))}static max(){return new H(new pe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class is{constructor(e,t,n){t===void 0?t=0:t>e.length&&$(),n===void 0?n=e.length-t:n>e.length-t&&$(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return is.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof is?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let s=0;s<n;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class se extends is{construct(e,t,n){return new se(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new U(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(s=>s.length>0))}return new se(t)}static emptyPath(){return new se([])}}const vy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class me extends is{construct(e,t,n){return new me(e,t,n)}static isValidIdentifier(e){return vy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new me(["__name__"])}static fromServerFormat(e){const t=[];let n="",s=0;const i=()=>{if(n.length===0)throw new U(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new U(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(n+=c,s++):(i(),s++)}if(i(),o)throw new U(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new me(t)}static emptyPath(){return new me([])}}/**
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
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(se.fromString(e))}static fromName(e){return new q(se.fromString(e).popFirst(5))}static empty(){return new q(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new se(e.slice()))}}/**
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
 */class Ai{constructor(e,t,n,s){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=s}}function ga(r){return r.fields.find(e=>e.kind===2)}function sn(r){return r.fields.filter(e=>e.kind!==2)}Ai.UNKNOWN_ID=-1;class ai{constructor(e,t){this.fieldPath=e,this.kind=t}}class os{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new os(0,We.min())}}function Pd(r,e){const t=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=H.fromTimestamp(n===1e9?new pe(t+1,0):new pe(t,n));return new We(s,q.empty(),e)}function Cd(r){return new We(r.readTime,r.key,-1)}class We{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new We(H.min(),q.empty(),-1)}static max(){return new We(H.max(),q.empty(),-1)}}function Xa(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=q.comparator(r.documentKey,e.documentKey),t!==0?t:X(r.largestBatchId,e.largestBatchId))}/**
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
 */const Nd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Vd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Kt(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Nd)throw r;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new A((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof A?t:A.resolve(t)}catch(t){return A.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):A.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):A.reject(t)}static resolve(e){return new A((t,n)=>{t(e)})}static reject(e){return new A((t,n)=>{n(e)})}static waitFor(e){return new A((t,n)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&t()},l=>n(l))}),o=!0,i===s&&t()})}static or(e){let t=A.resolve(!1);for(const n of e)t=t.next(s=>s?A.resolve(s):n());return t}static forEach(e,t){const n=[];return e.forEach((s,i)=>{n.push(t.call(this,s,i))}),this.waitFor(n)}static mapArray(e,t){return new A((n,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next(m=>{o[d]=m,++c,c===i&&n(o)},m=>s(m))}})}static doWhile(e,t){return new A((n,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):n()};i()})}}/**
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
 */class Wi{static open(e,t,n,s){try{return new Wi(t,e.transaction(s,n))}catch(i){throw new Wr(t,i)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new jt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Wr(e,t.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=Za(n.target.error);this.V.reject(new Wr(e,s))}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(j("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new wy(t)}}class Ot{static delete(e){return j("SimpleDb","Removing database:",e),on(window.indexedDB.deleteDatabase(e)).toPromise()}static p(){if(!gd())return!1;if(Ot.S())return!0;const e=Ee(),t=Ot.D(e),n=0<t&&t<10,s=Dd(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||i)}static S(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static C(e,t){return e.store(t)}static D(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.F=n,Ot.D(Ee())===12.2&&ye("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async M(e){return this.db||(j("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{n(new Wr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?n(new U(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?n(new U(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):n(new Wr(e,o))},s.onupgradeneeded=i=>{j("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.F.O(o,s.transaction,i.oldVersion,this.version).next(()=>{j("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const c=Wi.open(this.db,e,i?"readonly":"readwrite",n),l=s(c).next(d=>(c.g(),d)).catch(d=>(c.abort(d),A.reject(d))).toPromise();return l.catch(()=>{}),await c.m,l}catch(c){const l=c,d=l.name!=="FirebaseError"&&o<3;if(j("SimpleDb","Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Dd(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class Iy{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return on(this.B.delete())}}class Wr extends U{constructor(e,t){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ht(r){return r.name==="IndexedDbTransactionError"}class wy{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(j("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(j("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),on(n)}add(e){return j("SimpleDb","ADD",this.store.name,e,e),on(this.store.add(e))}get(e){return on(this.store.get(e)).next(t=>(t===void 0&&(t=null),j("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return j("SimpleDb","DELETE",this.store.name,e),on(this.store.delete(e))}count(){return j("SimpleDb","COUNT",this.store.name),on(this.store.count())}U(e,t){const n=this.options(e,t),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new A((o,c)=>{i.onerror=l=>{c(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(n),o=[];return this.W(i,(c,l)=>{o.push(l)}).next(()=>o)}}G(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new A((s,i)=>{n.onerror=o=>{i(o.target.error)},n.onsuccess=o=>{s(o.target.result)}})}j(e,t){j("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.H=!1;const s=this.cursor(n);return this.W(s,(i,o,c)=>c.delete())}J(e,t){let n;t?n=e:(n={},t=e);const s=this.cursor(n);return this.W(s,t)}Y(e){const t=this.cursor({});return new A((n,s)=>{t.onerror=i=>{const o=Za(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(c=>{c?o.continue():n()}):n()}})}W(e,t){const n=[];return new A((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const c=o.target.result;if(!c)return void s();const l=new Iy(c),d=t(c.primaryKey,c.value,l);if(d instanceof A){const m=d.catch(p=>(l.done(),A.reject(p)));n.push(m)}l.isDone?s():l.K===null?c.continue():c.continue(l.K)}}).next(()=>A.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.H?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function on(r){return new A((e,t)=>{r.onsuccess=n=>{const s=n.target.result;e(s)},r.onerror=n=>{const s=Za(n.target.error);t(s)}})}let yu=!1;function Za(r){const e=Ot.D(Ee());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const n=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return yu||(yu=!0,setTimeout(()=>{throw n},0)),n}}return r}class Ey{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){j("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{j("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Ht(t)?j("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Kt(t)}await this.X(6e4)})}}class Ty{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.te(t,e))}te(e,t){const n=new Set;let s=t,i=!0;return A.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!n.has(o))return j("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(c=>{s-=c,n.add(o)});i=!1})).next(()=>t-s)}ne(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,n).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(c=>(j("IndexBackfiller",`Updating offset: ${c}`),this.localStore.indexManager.updateCollectionGroup(e,t,c))).next(()=>o.size)}))}re(e,t){let n=e;return t.changes.forEach((s,i)=>{const o=Cd(i);Xa(o,n)>0&&(n=o)}),new We(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class $e{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ie(n),this.se=n=>t.writeSequenceNumber(n))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}$e.oe=-1;function Qi(r){return r==null}function as(r){return r===0&&1/r==-1/0}function jd(r){return typeof r=="number"&&Number.isInteger(r)&&!as(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */function Oe(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=vu(e)),e=by(r.get(t),e);return vu(e)}function by(r,e){let t=e;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function vu(r){return r+""}function et(r){const e=r.length;if(K(e>=2),e===2)return K(r.charAt(0)===""&&r.charAt(1)===""),se.emptyPath();const t=e-2,n=[];let s="";for(let i=0;i<e;){const o=r.indexOf("",i);switch((o<0||o>t)&&$(),r.charAt(o+1)){case"":const c=r.substring(i,o);let l;s.length===0?l=c:(s+=c,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,o),s+="\0";break;case"":s+=r.substring(i,o+1);break;default:$()}i=o+2}return new se(n)}/**
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
 */const Iu=["userId","batchId"];/**
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
 */function ci(r,e){return[r,Oe(e)]}function Od(r,e,t){return[r,Oe(e),t]}const Ay={},xy=["prefixPath","collectionGroup","readTime","documentId"],Sy=["prefixPath","collectionGroup","documentId"],Ry=["collectionGroup","readTime","prefixPath","documentId"],ky=["canonicalId","targetId"],Py=["targetId","path"],Cy=["path","targetId"],Ny=["collectionId","parent"],Vy=["indexId","uid"],Dy=["uid","sequenceNumber"],jy=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Oy=["indexId","uid","orderedDocumentKey"],My=["userId","collectionPath","documentId"],Ly=["userId","collectionPath","largestBatchId"],Fy=["userId","collectionGroup","largestBatchId"],Md=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Uy=[...Md,"documentOverlays"],Ld=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Fd=Ld,ec=[...Fd,"indexConfiguration","indexState","indexEntries"],By=ec,qy=[...ec,"globals"];/**
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
 */class _a extends Vd{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function Te(r,e){const t=G(r);return Ot.C(t._e,e)}/**
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
 */function wu(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function Wt(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function Ud(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class ue{constructor(e,t){this.comparator=e,this.root=t||Se.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Se.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Se.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return t+n.left.size;s<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Js(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Js(this.root,e,this.comparator,!1)}getReverseIterator(){return new Js(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Js(this.root,e,this.comparator,!0)}}class Js{constructor(e,t,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Se{constructor(e,t,n,s,i){this.key=e,this.value=t,this.color=n??Se.RED,this.left=s??Se.EMPTY,this.right=i??Se.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,s,i){return new Se(e??this.key,t??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let s=this;const i=n(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,n),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Se.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Se.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Se.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Se.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}Se.EMPTY=null,Se.RED=!0,Se.BLACK=!1;Se.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(e,t,n,s,i){return this}insert(e,t,n){return new Se(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class oe{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Eu(this.data.getIterator())}getIteratorFrom(e){return new Eu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof oe)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new oe(this.comparator);return t.data=e,t}}class Eu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Cn(r){return r.hasNext()?r.getNext():void 0}/**
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
 */class ze{constructor(e){this.fields=e,e.sort(me.comparator)}static empty(){return new ze([])}unionWith(e){let t=new oe(me.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new ze(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Jn(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class Bd extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ve{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Bd("Invalid base64 string: "+i):i}}(e);return new ve(t)}static fromUint8Array(e){const t=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return X(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ve.EMPTY_BYTE_STRING=new ve("");const $y=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ft(r){if(K(!!r),typeof r=="string"){let e=0;const t=$y.exec(r);if(K(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:fe(r.seconds),nanos:fe(r.nanos)}}function fe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function mt(r){return typeof r=="string"?ve.fromBase64String(r):ve.fromUint8Array(r)}/**
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
 */function tc(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ji(r){const e=r.mapValue.fields.__previous_value__;return tc(e)?Ji(e):e}function cs(r){const e=ft(r.mapValue.fields.__local_write_time__.timestampValue);return new pe(e.seconds,e.nanos)}/**
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
 */class zy{constructor(e,t,n,s,i,o,c,l,d){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=d}}class gn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new gn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof gn&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ct={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},li={nullValue:"NULL_VALUE"};function qt(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?tc(r)?4:qd(r)?9007199254740991:Yi(r)?10:11:$()}function rt(r,e){if(r===e)return!0;const t=qt(r);if(t!==qt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return cs(r).isEqual(cs(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=ft(s.timestampValue),c=ft(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(s,i){return mt(s.bytesValue).isEqual(mt(i.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(s,i){return fe(s.geoPointValue.latitude)===fe(i.geoPointValue.latitude)&&fe(s.geoPointValue.longitude)===fe(i.geoPointValue.longitude)}(r,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return fe(s.integerValue)===fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=fe(s.doubleValue),c=fe(i.doubleValue);return o===c?as(o)===as(c):isNaN(o)&&isNaN(c)}return!1}(r,e);case 9:return Jn(r.arrayValue.values||[],e.arrayValue.values||[],rt);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(wu(o)!==wu(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!rt(o[l],c[l])))return!1;return!0}(r,e);default:return $()}}function ls(r,e){return(r.values||[]).find(t=>rt(t,e))!==void 0}function $t(r,e){if(r===e)return 0;const t=qt(r),n=qt(e);if(t!==n)return X(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return X(r.booleanValue,e.booleanValue);case 2:return function(i,o){const c=fe(i.integerValue||i.doubleValue),l=fe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(r,e);case 3:return Tu(r.timestampValue,e.timestampValue);case 4:return Tu(cs(r),cs(e));case 5:return X(r.stringValue,e.stringValue);case 6:return function(i,o){const c=mt(i),l=mt(o);return c.compareTo(l)}(r.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let d=0;d<c.length&&d<l.length;d++){const m=X(c[d],l[d]);if(m!==0)return m}return X(c.length,l.length)}(r.referenceValue,e.referenceValue);case 8:return function(i,o){const c=X(fe(i.latitude),fe(o.latitude));return c!==0?c:X(fe(i.longitude),fe(o.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return bu(r.arrayValue,e.arrayValue);case 10:return function(i,o){var c,l,d,m;const p=i.fields||{},_=o.fields||{},E=(c=p.value)===null||c===void 0?void 0:c.arrayValue,R=(l=_.value)===null||l===void 0?void 0:l.arrayValue,C=X(((d=E==null?void 0:E.values)===null||d===void 0?void 0:d.length)||0,((m=R==null?void 0:R.values)===null||m===void 0?void 0:m.length)||0);return C!==0?C:bu(E,R)}(r.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ct.mapValue&&o===Ct.mapValue)return 0;if(i===Ct.mapValue)return 1;if(o===Ct.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),d=o.fields||{},m=Object.keys(d);l.sort(),m.sort();for(let p=0;p<l.length&&p<m.length;++p){const _=X(l[p],m[p]);if(_!==0)return _;const E=$t(c[l[p]],d[m[p]]);if(E!==0)return E}return X(l.length,m.length)}(r.mapValue,e.mapValue);default:throw $()}}function Tu(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return X(r,e);const t=ft(r),n=ft(e),s=X(t.seconds,n.seconds);return s!==0?s:X(t.nanos,n.nanos)}function bu(r,e){const t=r.values||[],n=e.values||[];for(let s=0;s<t.length&&s<n.length;++s){const i=$t(t[s],n[s]);if(i)return i}return X(t.length,n.length)}function Yn(r){return ya(r)}function ya(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(t){const n=ft(t);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(t){return mt(t).toBase64()}(r.bytesValue):"referenceValue"in r?function(t){return q.fromName(t).toString()}(r.referenceValue):"geoPointValue"in r?function(t){return`geo(${t.latitude},${t.longitude})`}(r.geoPointValue):"arrayValue"in r?function(t){let n="[",s=!0;for(const i of t.values||[])s?s=!1:n+=",",n+=ya(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(t){const n=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const o of n)i?i=!1:s+=",",s+=`${o}:${ya(t.fields[o])}`;return s+"}"}(r.mapValue):$()}function ui(r){switch(qt(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ji(r);return e?16+ui(e):16;case 5:return 2*r.stringValue.length;case 6:return mt(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+ui(i),0)}(r.arrayValue);case 10:case 11:return function(n){let s=0;return Wt(n.fields,(i,o)=>{s+=i.length+ui(o)}),s}(r.mapValue);default:throw $()}}function us(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function va(r){return!!r&&"integerValue"in r}function hs(r){return!!r&&"arrayValue"in r}function Au(r){return!!r&&"nullValue"in r}function xu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function hi(r){return!!r&&"mapValue"in r}function Yi(r){var e,t;return((t=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="__vector__"}function Qr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return Wt(r.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Qr(n)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Qr(r.arrayValue.values[t]);return e}return Object.assign({},r)}function qd(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const $d={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function Gy(r){return"nullValue"in r?li:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?us(gn.empty(),q.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?Yi(r)?$d:{mapValue:{}}:$()}function Ky(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?us(gn.empty(),q.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?$d:"mapValue"in r?Yi(r)?{mapValue:{}}:Ct:$()}function Su(r,e){const t=$t(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function Ru(r,e){const t=$t(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
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
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!hi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qr(t)}setAll(e){let t=me.emptyPath(),n={},s=[];e.forEach((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,s),n={},s=[],t=c.popLast()}o?n[c.lastSegment()]=Qr(o):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,s)}delete(e){const t=this.field(e.popLast());hi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return rt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let s=t.mapValue.fields[e.get(n)];hi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,n){Wt(t,(s,i)=>e[s]=i);for(const s of n)delete e[s]}clone(){return new je(Qr(this.value))}}function zd(r){const e=[];return Wt(r.fields,(t,n)=>{const s=new me([t]);if(hi(n)){const i=zd(n.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new ze(e)}/**
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
 */class _e{constructor(e,t,n,s,i,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new _e(e,0,H.min(),H.min(),H.min(),je.empty(),0)}static newFoundDocument(e,t,n,s){return new _e(e,1,t,H.min(),n,s,0)}static newNoDocument(e,t){return new _e(e,2,t,H.min(),H.min(),je.empty(),0)}static newUnknownDocument(e,t){return new _e(e,3,t,H.min(),H.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(H.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=H.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xn{constructor(e,t){this.position=e,this.inclusive=t}}function ku(r,e,t){let n=0;for(let s=0;s<r.position.length;s++){const i=e[s],o=r.position[s];if(i.field.isKeyField()?n=q.comparator(q.fromName(o.referenceValue),t.key):n=$t(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function Pu(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!rt(r.position[t],e.position[t]))return!1;return!0}/**
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
 */class ds{constructor(e,t="asc"){this.field=e,this.dir=t}}function Hy(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class Gd{}class te extends Gd{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Wy(e,t,n):t==="array-contains"?new Yy(e,n):t==="in"?new Yd(e,n):t==="not-in"?new Xy(e,n):t==="array-contains-any"?new Zy(e,n):new te(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new Qy(e,n):new Jy(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison($t(t,this.value)):t!==null&&qt(this.value)===qt(t)&&this.matchesComparison($t(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ie extends Gd{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ie(e,t)}matches(e){return Zn(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Zn(r){return r.op==="and"}function Ia(r){return r.op==="or"}function nc(r){return Kd(r)&&Zn(r)}function Kd(r){for(const e of r.filters)if(e instanceof ie)return!1;return!0}function wa(r){if(r instanceof te)return r.field.canonicalString()+r.op.toString()+Yn(r.value);if(nc(r))return r.filters.map(e=>wa(e)).join(",");{const e=r.filters.map(t=>wa(t)).join(",");return`${r.op}(${e})`}}function Hd(r,e){return r instanceof te?function(n,s){return s instanceof te&&n.op===s.op&&n.field.isEqual(s.field)&&rt(n.value,s.value)}(r,e):r instanceof ie?function(n,s){return s instanceof ie&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,o,c)=>i&&Hd(o,s.filters[c]),!0):!1}(r,e):void $()}function Wd(r,e){const t=r.filters.concat(e);return ie.create(t,r.op)}function Qd(r){return r instanceof te?function(t){return`${t.field.canonicalString()} ${t.op} ${Yn(t.value)}`}(r):r instanceof ie?function(t){return t.op.toString()+" {"+t.getFilters().map(Qd).join(" ,")+"}"}(r):"Filter"}class Wy extends te{constructor(e,t,n){super(e,t,n),this.key=q.fromName(n.referenceValue)}matches(e){const t=q.comparator(e.key,this.key);return this.matchesComparison(t)}}class Qy extends te{constructor(e,t){super(e,"in",t),this.keys=Jd("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Jy extends te{constructor(e,t){super(e,"not-in",t),this.keys=Jd("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Jd(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>q.fromName(n.referenceValue))}class Yy extends te{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hs(t)&&ls(t.arrayValue,this.value)}}class Yd extends te{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ls(this.value.arrayValue,t)}}class Xy extends te{constructor(e,t){super(e,"not-in",t)}matches(e){if(ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ls(this.value.arrayValue,t)}}class Zy extends te{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>ls(this.value.arrayValue,n))}}/**
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
 */class ev{constructor(e,t=null,n=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Ea(r,e=null,t=[],n=[],s=null,i=null,o=null){return new ev(r,e,t,n,s,i,o)}function _n(r){const e=G(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>wa(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Qi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Yn(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Yn(n)).join(",")),e.ue=t}return e.ue}function ws(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Hy(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!Hd(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Pu(r.startAt,e.startAt)&&Pu(r.endAt,e.endAt)}function xi(r){return q.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Si(r,e){return r.filters.filter(t=>t instanceof te&&t.field.isEqual(e))}function Cu(r,e,t){let n=li,s=!0;for(const i of Si(r,e)){let o=li,c=!0;switch(i.op){case"<":case"<=":o=Gy(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,c=!1;break;case"!=":case"not-in":o=li}Su({value:n,inclusive:s},{value:o,inclusive:c})<0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Su({value:n,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}function Nu(r,e,t){let n=Ct,s=!0;for(const i of Si(r,e)){let o=Ct,c=!0;switch(i.op){case">=":case">":o=Ky(i.value),c=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,c=!1;break;case"!=":case"not-in":o=Ct}Ru({value:n,inclusive:s},{value:o,inclusive:c})>0&&(n=o,s=c)}if(t!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(e)){const o=t.position[i];Ru({value:n,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(n=o,s=t.inclusive);break}}return{value:n,inclusive:s}}/**
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
 */class fr{constructor(e,t=null,n=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Xd(r,e,t,n,s,i,o,c){return new fr(r,e,t,n,s,i,o,c)}function Xi(r){return new fr(r)}function Vu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function Zd(r){return r.collectionGroup!==null}function Jr(r){const e=G(r);if(e.ce===null){e.ce=[];const t=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new oe(me.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.ce.push(new ds(i,n))}),t.has(me.keyField().canonicalString())||e.ce.push(new ds(me.keyField(),n))}return e.ce}function He(r){const e=G(r);return e.le||(e.le=tv(e,Jr(r))),e.le}function tv(r,e){if(r.limitType==="F")return Ea(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ds(s.field,i)});const t=r.endAt?new Xn(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Xn(r.startAt.position,r.startAt.inclusive):null;return Ea(r.path,r.collectionGroup,e,r.filters,r.limit,t,n)}}function Ta(r,e){const t=r.filters.concat([e]);return new fr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function ba(r,e,t){return new fr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function Zi(r,e){return ws(He(r),He(e))&&r.limitType===e.limitType}function ef(r){return`${_n(He(r))}|lt:${r.limitType}`}function Mn(r){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Qd(s)).join(", ")}]`),Qi(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Yn(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Yn(s)).join(",")),`Target(${n})`}(He(r))}; limitType=${r.limitType})`}function Es(r,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):q.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,e)&&function(n,s){for(const i of Jr(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,e)&&function(n,s){return!(n.startAt&&!function(o,c,l){const d=ku(o,c,l);return o.inclusive?d<=0:d<0}(n.startAt,Jr(n),s)||n.endAt&&!function(o,c,l){const d=ku(o,c,l);return o.inclusive?d>=0:d>0}(n.endAt,Jr(n),s))}(r,e)}function tf(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function nf(r){return(e,t)=>{let n=!1;for(const s of Jr(r)){const i=nv(s,e,t);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function nv(r,e,t){const n=r.field.isKeyField()?q.comparator(e.key,t.key):function(i,o,c){const l=o.data.field(i),d=c.data.field(i);return l!==null&&d!==null?$t(l,d):$()}(r.field,e,t);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return $()}}/**
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
 */class _t{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return n.length===1?delete this.inner[t]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Wt(this.inner,(t,n)=>{for(const[s,i]of n)e(s,i)})}isEmpty(){return Ud(this.inner)}size(){return this.innerSize}}/**
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
 */const rv=new ue(q.comparator);function Ke(){return rv}const rf=new ue(q.comparator);function zr(...r){let e=rf;for(const t of r)e=e.insert(t.key,t);return e}function sf(r){let e=rf;return r.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function tt(){return Yr()}function of(){return Yr()}function Yr(){return new _t(r=>r.toString(),(r,e)=>r.isEqual(e))}const sv=new ue(q.comparator),iv=new oe(q.comparator);function Z(...r){let e=iv;for(const t of r)e=e.add(t);return e}const ov=new oe(X);function rc(){return ov}/**
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
 */function sc(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:as(e)?"-0":e}}function af(r){return{integerValue:""+r}}function av(r,e){return jd(e)?af(e):sc(r,e)}/**
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
 */class eo{constructor(){this._=void 0}}function cv(r,e,t){return r instanceof er?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&tc(i)&&(i=Ji(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(t,e):r instanceof tr?lf(r,e):r instanceof nr?uf(r,e):function(s,i){const o=cf(s,i),c=Du(o)+Du(s.Pe);return va(o)&&va(s.Pe)?af(c):sc(s.serializer,c)}(r,e)}function lv(r,e,t){return r instanceof tr?lf(r,e):r instanceof nr?uf(r,e):t}function cf(r,e){return r instanceof fs?function(n){return va(n)||function(i){return!!i&&"doubleValue"in i}(n)}(e)?e:{integerValue:0}:null}class er extends eo{}class tr extends eo{constructor(e){super(),this.elements=e}}function lf(r,e){const t=hf(e);for(const n of r.elements)t.some(s=>rt(s,n))||t.push(n);return{arrayValue:{values:t}}}class nr extends eo{constructor(e){super(),this.elements=e}}function uf(r,e){let t=hf(e);for(const n of r.elements)t=t.filter(s=>!rt(s,n));return{arrayValue:{values:t}}}class fs extends eo{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Du(r){return fe(r.integerValue||r.doubleValue)}function hf(r){return hs(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class df{constructor(e,t){this.field=e,this.transform=t}}function uv(r,e){return r.field.isEqual(e.field)&&function(n,s){return n instanceof tr&&s instanceof tr||n instanceof nr&&s instanceof nr?Jn(n.elements,s.elements,rt):n instanceof fs&&s instanceof fs?rt(n.Pe,s.Pe):n instanceof er&&s instanceof er}(r.transform,e.transform)}class hv{constructor(e,t){this.version=e,this.transformResults=t}}class Fe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function di(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class to{}function ff(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new no(r.key,Fe.none()):new mr(r.key,r.data,Fe.none());{const t=r.data,n=je.empty();let s=new oe(me.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),s=s.add(i)}return new yt(r.key,n,new ze(s.toArray()),Fe.none())}}function dv(r,e,t){r instanceof mr?function(s,i,o){const c=s.value.clone(),l=Ou(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(r,e,t):r instanceof yt?function(s,i,o){if(!di(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Ou(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(mf(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(r,e,t):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Xr(r,e,t,n){return r instanceof mr?function(i,o,c,l){if(!di(i.precondition,o))return c;const d=i.value.clone(),m=Mu(i.fieldTransforms,l,o);return d.setAll(m),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(r,e,t,n):r instanceof yt?function(i,o,c,l){if(!di(i.precondition,o))return c;const d=Mu(i.fieldTransforms,l,o),m=o.data;return m.setAll(mf(i)),m.setAll(d),o.convertToFoundDocument(o.version,m).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(r,e,t,n):function(i,o,c){return di(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(r,e,t)}function fv(r,e){let t=null;for(const n of r.fieldTransforms){const s=e.data.field(n.field),i=cf(n.transform,s||null);i!=null&&(t===null&&(t=je.empty()),t.set(n.field,i))}return t||null}function ju(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Jn(n,s,(i,o)=>uv(i,o))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class mr extends to{constructor(e,t,n,s=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class yt extends to{constructor(e,t,n,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function mf(r){const e=new Map;return r.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=r.data.field(t);e.set(t,n)}}),e}function Ou(r,e,t){const n=new Map;K(r.length===t.length);for(let s=0;s<t.length;s++){const i=r[s],o=i.transform,c=e.data.field(i.field);n.set(i.field,lv(o,c,t[s]))}return n}function Mu(r,e,t){const n=new Map;for(const s of r){const i=s.transform,o=t.data.field(s.field);n.set(s.field,cv(i,o,e))}return n}class no extends to{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pf extends to{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ic{constructor(e,t,n,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&dv(i,e,n[s])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Xr(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Xr(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=of();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=t.has(s.key)?null:c;const l=ff(o,c);l!==null&&n.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(H.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&Jn(this.mutations,e.mutations,(t,n)=>ju(t,n))&&Jn(this.baseMutations,e.baseMutations,(t,n)=>ju(t,n))}}class oc{constructor(e,t,n,s){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=s}static from(e,t,n){K(e.mutations.length===n.length);let s=function(){return sv}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,n[o].version);return new oc(e,t,n,s)}}/**
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
 */class ac{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class mv{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ie,ne;function pv(r){switch(r){default:return $();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function gf(r){if(r===void 0)return ye("GRPC error has no .code"),V.UNKNOWN;switch(r){case Ie.OK:return V.OK;case Ie.CANCELLED:return V.CANCELLED;case Ie.UNKNOWN:return V.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return V.INTERNAL;case Ie.UNAVAILABLE:return V.UNAVAILABLE;case Ie.UNAUTHENTICATED:return V.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case Ie.NOT_FOUND:return V.NOT_FOUND;case Ie.ALREADY_EXISTS:return V.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return V.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case Ie.ABORTED:return V.ABORTED;case Ie.OUT_OF_RANGE:return V.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return V.UNIMPLEMENTED;case Ie.DATA_LOSS:return V.DATA_LOSS;default:return $()}}(ne=Ie||(Ie={}))[ne.OK=0]="OK",ne[ne.CANCELLED=1]="CANCELLED",ne[ne.UNKNOWN=2]="UNKNOWN",ne[ne.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ne[ne.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ne[ne.NOT_FOUND=5]="NOT_FOUND",ne[ne.ALREADY_EXISTS=6]="ALREADY_EXISTS",ne[ne.PERMISSION_DENIED=7]="PERMISSION_DENIED",ne[ne.UNAUTHENTICATED=16]="UNAUTHENTICATED",ne[ne.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ne[ne.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ne[ne.ABORTED=10]="ABORTED",ne[ne.OUT_OF_RANGE=11]="OUT_OF_RANGE",ne[ne.UNIMPLEMENTED=12]="UNIMPLEMENTED",ne[ne.INTERNAL=13]="INTERNAL",ne[ne.UNAVAILABLE=14]="UNAVAILABLE",ne[ne.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function gv(){return new TextEncoder}/**
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
 */const _v=new hn([4294967295,4294967295],0);function Lu(r){const e=gv().encode(r),t=new Ed;return t.update(e),new Uint8Array(t.digest())}function Fu(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hn([t,n],0),new hn([s,i],0)]}class cc{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Gr(`Invalid padding: ${t}`);if(n<0)throw new Gr(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Gr(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Gr(`Invalid padding when bitmap length is 0: ${t}`);this.Te=8*e.length-t,this.Ie=hn.fromNumber(this.Te)}Ee(e,t,n){let s=e.add(t.multiply(hn.fromNumber(n)));return s.compare(_v)===1&&(s=new hn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ie).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const t=Lu(e),[n,s]=Fu(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);if(!this.de(o))return!1}return!0}static create(e,t,n){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new cc(i,s,t);return n.forEach(c=>o.insert(c)),o}insert(e){if(this.Te===0)return;const t=Lu(e),[n,s]=Fu(t);for(let i=0;i<this.hashCount;i++){const o=this.Ee(n,s,i);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Gr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ts{constructor(e,t,n,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const s=new Map;return s.set(e,bs.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Ts(H.min(),s,new ue(X),Ke(),Z())}}class bs{constructor(e,t,n,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new bs(n,t,Z(),Z(),Z())}}/**
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
 */class fi{constructor(e,t,n,s){this.Re=e,this.removedTargetIds=t,this.key=n,this.Ve=s}}class _f{constructor(e,t){this.targetId=e,this.me=t}}class yf{constructor(e,t,n=ve.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=s}}class Uu{constructor(){this.fe=0,this.ge=Bu(),this.pe=ve.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Z(),t=Z(),n=Z();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:n=n.add(s);break;default:$()}}),new bs(this.pe,this.ye,e,t,n)}Ce(){this.we=!1,this.ge=Bu()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,K(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yv{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ke(),this.qe=Ys(),this.Qe=Ys(),this.Ke=new ue(X)}$e(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.Ue(t,e.Ve):this.We(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.We(t,e.key,e.Ve)}Ge(e){this.forEachTarget(e,t=>{const n=this.ze(t);switch(e.state){case 0:this.je(t)&&n.De(e.resumeToken);break;case 1:n.Oe(),n.Se||n.Ce(),n.De(e.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(t);break;case 3:this.je(t)&&(n.Ne(),n.De(e.resumeToken));break;case 4:this.je(t)&&(this.He(t),n.De(e.resumeToken));break;default:$()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((n,s)=>{this.je(s)&&t(s)})}Je(e){const t=e.targetId,n=e.me.count,s=this.Ye(t);if(s){const i=s.target;if(xi(i))if(n===0){const o=new q(i.path);this.We(t,o,_e.newNoDocument(o,H.min()))}else K(n===1);else{const o=this.Ze(t);if(o!==n){const c=this.Xe(e),l=c?this.et(c,e,o):1;if(l!==0){this.He(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,d)}}}}}Xe(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=t;let o,c;try{o=mt(n).toUint8Array()}catch(l){if(l instanceof Bd)return ss("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new cc(o,s,i)}catch(l){return ss(l instanceof Gr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Te===0?null:c}et(e,t,n){return t.me.count===n-this.rt(e,t.targetId)?0:2}rt(e,t){const n=this.Le.getRemoteKeysForTarget(t);let s=0;return n.forEach(i=>{const o=this.Le.nt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.We(t,i,null),s++)}),s}it(e){const t=new Map;this.Be.forEach((i,o)=>{const c=this.Ye(o);if(c){if(i.current&&xi(c.target)){const l=new q(c.target.path);this.st(l).has(o)||this.ot(o,l)||this.We(o,l,_e.newNoDocument(l,e))}i.be&&(t.set(o,i.ve()),i.Ce())}});let n=Z();this.Qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const d=this.Ye(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(n=n.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ts(e,t,this.Ke,this.ke,n);return this.ke=Ke(),this.qe=Ys(),this.Qe=Ys(),this.Ke=new ue(X),s}Ue(e,t){if(!this.je(e))return;const n=this.ot(e,t.key)?2:0;this.ze(e).Fe(t.key,n),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e)),this.Qe=this.Qe.insert(t.key,this._t(t.key).add(e))}We(e,t,n){if(!this.je(e))return;const s=this.ze(e);this.ot(e,t)?s.Fe(t,1):s.Me(t),this.Qe=this.Qe.insert(t,this._t(t).delete(e)),this.Qe=this.Qe.insert(t,this._t(t).add(e)),n&&(this.ke=this.ke.insert(t,n))}removeTarget(e){this.Be.delete(e)}Ze(e){const t=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.ze(e).xe()}ze(e){let t=this.Be.get(e);return t||(t=new Uu,this.Be.set(e,t)),t}_t(e){let t=this.Qe.get(e);return t||(t=new oe(X),this.Qe=this.Qe.insert(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new oe(X),this.qe=this.qe.insert(e,t)),t}je(e){const t=this.Ye(e)!==null;return t||j("WatchChangeAggregator","Detected inactive target",e),t}Ye(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ut(e)}He(e){this.Be.set(e,new Uu),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.We(e,t,null)})}ot(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Ys(){return new ue(q.comparator)}function Bu(){return new ue(q.comparator)}const vv={asc:"ASCENDING",desc:"DESCENDING"},Iv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wv={and:"AND",or:"OR"};class Ev{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Aa(r,e){return r.useProto3Json||Qi(e)?e:{value:e}}function rr(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vf(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function Tv(r,e){return rr(r,e.toTimestamp())}function Ue(r){return K(!!r),H.fromTimestamp(function(t){const n=ft(t);return new pe(n.seconds,n.nanos)}(r))}function lc(r,e){return xa(r,e).canonicalString()}function xa(r,e){const t=function(s){return new se(["projects",s.projectId,"databases",s.database])}(r).child("documents");return e===void 0?t:t.child(e)}function If(r){const e=se.fromString(r);return K(kf(e)),e}function Ri(r,e){return lc(r.databaseId,e.path)}function dn(r,e){const t=If(e);if(t.get(1)!==r.databaseId.projectId)throw new U(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new U(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new q(Tf(t))}function wf(r,e){return lc(r.databaseId,e)}function Ef(r){const e=If(r);return e.length===4?se.emptyPath():Tf(e)}function Sa(r){return new se(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function Tf(r){return K(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function qu(r,e,t){return{name:Ri(r,e),fields:t.value.mapValue.fields}}function bv(r,e,t){const n=dn(r,e.name),s=Ue(e.updateTime),i=e.createTime?Ue(e.createTime):H.min(),o=new je({mapValue:{fields:e.fields}}),c=_e.newFoundDocument(n,s,i,o);return t&&c.setHasCommittedMutations(),t?c.setHasCommittedMutations():c}function Av(r,e){let t;if("targetChange"in e){e.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,m){return d.useProto3Json?(K(m===void 0||typeof m=="string"),ve.fromBase64String(m||"")):(K(m===void 0||m instanceof Buffer||m instanceof Uint8Array),ve.fromUint8Array(m||new Uint8Array))}(r,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(d){const m=d.code===void 0?V.UNKNOWN:gf(d.code);return new U(m,d.message||"")}(o);t=new yf(n,s,i,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const s=dn(r,n.document.name),i=Ue(n.document.updateTime),o=n.document.createTime?Ue(n.document.createTime):H.min(),c=new je({mapValue:{fields:n.document.fields}}),l=_e.newFoundDocument(s,i,o,c),d=n.targetIds||[],m=n.removedTargetIds||[];t=new fi(d,m,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const s=dn(r,n.document),i=n.readTime?Ue(n.readTime):H.min(),o=_e.newNoDocument(s,i),c=n.removedTargetIds||[];t=new fi([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const s=dn(r,n.document),i=n.removedTargetIds||[];t=new fi([],i,s,null)}else{if(!("filter"in e))return $();{e.filter;const n=e.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,o=new mv(s,i),c=n.targetId;t=new _f(c,o)}}return t}function ki(r,e){let t;if(e instanceof mr)t={update:qu(r,e.key,e.value)};else if(e instanceof no)t={delete:Ri(r,e.key)};else if(e instanceof yt)t={update:qu(r,e.key,e.data),updateMask:Cv(e.fieldMask)};else{if(!(e instanceof pf))return $();t={verify:Ri(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(i,o){const c=o.transform;if(c instanceof er)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof tr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof nr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof fs)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw $()}(0,n))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Tv(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:$()}(r,e.precondition)),t}function Ra(r,e){const t=e.currentDocument?function(i){return i.updateTime!==void 0?Fe.updateTime(Ue(i.updateTime)):i.exists!==void 0?Fe.exists(i.exists):Fe.none()}(e.currentDocument):Fe.none(),n=e.updateTransforms?e.updateTransforms.map(s=>function(o,c){let l=null;if("setToServerValue"in c)K(c.setToServerValue==="REQUEST_TIME"),l=new er;else if("appendMissingElements"in c){const m=c.appendMissingElements.values||[];l=new tr(m)}else if("removeAllFromArray"in c){const m=c.removeAllFromArray.values||[];l=new nr(m)}else"increment"in c?l=new fs(o,c.increment):$();const d=me.fromServerFormat(c.fieldPath);return new df(d,l)}(r,s)):[];if(e.update){e.update.name;const s=dn(r,e.update.name),i=new je({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const d=l.fieldPaths||[];return new ze(d.map(m=>me.fromServerFormat(m)))}(e.updateMask);return new yt(s,i,o,t,n)}return new mr(s,i,t,n)}if(e.delete){const s=dn(r,e.delete);return new no(s,t)}if(e.verify){const s=dn(r,e.verify);return new pf(s,t)}return $()}function xv(r,e){return r&&r.length>0?(K(e!==void 0),r.map(t=>function(s,i){let o=s.updateTime?Ue(s.updateTime):Ue(i);return o.isEqual(H.min())&&(o=Ue(i)),new hv(o,s.transformResults||[])}(t,e))):[]}function bf(r,e){return{documents:[wf(r,e.path)]}}function Af(r,e){const t={structuredQuery:{}},n=e.path;let s;e.collectionGroup!==null?(s=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=wf(r,s);const i=function(d){if(d.length!==0)return Rf(ie.create(d,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(m=>function(_){return{field:Ln(_.field),direction:Rv(_.dir)}}(m))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=Aa(r,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ct:t,parent:s}}function xf(r){let e=Ef(r.parent);const t=r.structuredQuery,n=t.from?t.from.length:0;let s=null;if(n>0){K(n===1);const m=t.from[0];m.allDescendants?s=m.collectionId:e=e.child(m.collectionId)}let i=[];t.where&&(i=function(p){const _=Sf(p);return _ instanceof ie&&nc(_)?_.getFilters():[_]}(t.where));let o=[];t.orderBy&&(o=function(p){return p.map(_=>function(R){return new ds(Fn(R.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(_))}(t.orderBy));let c=null;t.limit&&(c=function(p){let _;return _=typeof p=="object"?p.value:p,Qi(_)?null:_}(t.limit));let l=null;t.startAt&&(l=function(p){const _=!!p.before,E=p.values||[];return new Xn(E,_)}(t.startAt));let d=null;return t.endAt&&(d=function(p){const _=!p.before,E=p.values||[];return new Xn(E,_)}(t.endAt)),Xd(e,s,o,i,c,"F",l,d)}function Sv(r,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return $()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Sf(r){return r.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Fn(t.unaryFilter.field);return te.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Fn(t.unaryFilter.field);return te.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fn(t.unaryFilter.field);return te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Fn(t.unaryFilter.field);return te.create(o,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(r):r.fieldFilter!==void 0?function(t){return te.create(Fn(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(t.fieldFilter.op),t.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(t){return ie.create(t.compositeFilter.filters.map(n=>Sf(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return $()}}(t.compositeFilter.op))}(r):$()}function Rv(r){return vv[r]}function kv(r){return Iv[r]}function Pv(r){return wv[r]}function Ln(r){return{fieldPath:r.canonicalString()}}function Fn(r){return me.fromServerFormat(r.fieldPath)}function Rf(r){return r instanceof te?function(t){if(t.op==="=="){if(xu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NAN"}};if(Au(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(xu(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NAN"}};if(Au(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(t.field),op:kv(t.op),value:t.value}}}(r):r instanceof ie?function(t){const n=t.getFilters().map(s=>Rf(s));return n.length===1?n[0]:{compositeFilter:{op:Pv(t.op),filters:n}}}(r):$()}function Cv(r){const e=[];return r.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function kf(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class ct{constructor(e,t,n,s,i=H.min(),o=H.min(),c=ve.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new ct(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ct(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ct(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Pf{constructor(e){this.ht=e}}function Nv(r,e){let t;if(e.document)t=bv(r.ht,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=q.fromSegments(e.noDocument.path),s=vn(e.noDocument.readTime);t=_e.newNoDocument(n,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const n=q.fromSegments(e.unknownDocument.path),s=vn(e.unknownDocument.version);t=_e.newUnknownDocument(n,s)}}return e.readTime&&t.setReadTime(function(s){const i=new pe(s[0],s[1]);return H.fromTimestamp(i)}(e.readTime)),t}function $u(r,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Pi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(i,o){return{name:Ri(i,o.key),fields:o.data.value.mapValue.fields,updateTime:rr(i,o.version.toTimestamp()),createTime:rr(i,o.createTime.toTimestamp())}}(r.ht,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:yn(e.version)};else{if(!e.isUnknownDocument())return $();n.unknownDocument={path:t.path.toArray(),version:yn(e.version)}}return n}function Pi(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function yn(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function vn(r){const e=new pe(r.seconds,r.nanoseconds);return H.fromTimestamp(e)}function an(r,e){const t=(e.baseMutations||[]).map(i=>Ra(r.ht,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const c=e.mutations[i+1];o.updateTransforms=c.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const n=e.mutations.map(i=>Ra(r.ht,i)),s=pe.fromMillis(e.localWriteTimeMs);return new ic(e.batchId,s,t,n)}function Kr(r){const e=vn(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?vn(r.lastLimboFreeSnapshotVersion):H.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return K(i.documents.length===1),He(Xi(Ef(i.documents[0])))}(r.query):function(i){return He(xf(i))}(r.query),new ct(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,ve.fromBase64String(r.resumeToken))}function Cf(r,e){const t=yn(e.snapshotVersion),n=yn(e.lastLimboFreeSnapshotVersion);let s;s=xi(e.target)?bf(r.ht,e.target):Af(r.ht,e.target).ct;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:_n(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function Nf(r){const e=xf({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?ba(e,e.limit,"L"):e}function Yo(r,e){return new ac(e.largestBatchId,Ra(r.ht,e.overlayMutation))}function zu(r,e){const t=e.path.lastSegment();return[r,Oe(e.path.popLast()),t]}function Gu(r,e,t,n){return{indexId:r,uid:e,sequenceNumber:t,readTime:yn(n.readTime),documentKey:Oe(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class Vv{getBundleMetadata(e,t){return Ku(e).get(t).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:vn(i.createTime),version:i.version}}(n)})}saveBundleMetadata(e,t){return Ku(e).put(function(s){return{bundleId:s.id,createTime:yn(Ue(s.createTime)),version:s.version}}(t))}getNamedQuery(e,t){return Hu(e).get(t).next(n=>{if(n)return function(i){return{name:i.name,query:Nf(i.bundledQuery),readTime:vn(i.readTime)}}(n)})}saveNamedQuery(e,t){return Hu(e).put(function(s){return{name:s.name,readTime:yn(Ue(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function Ku(r){return Te(r,"bundles")}function Hu(r){return Te(r,"namedQueries")}/**
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
 */class ro{constructor(e,t){this.serializer=e,this.userId=t}static Pt(e,t){const n=t.uid||"";return new ro(e,n)}getOverlay(e,t){return Dr(e).get(zu(this.userId,t)).next(n=>n?Yo(this.serializer,n):null)}getOverlays(e,t){const n=tt();return A.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){const s=[];return n.forEach((i,o)=>{const c=new ac(t,o);s.push(this.Tt(e,c))}),A.waitFor(s)}removeOverlaysForBatchId(e,t,n){const s=new Set;t.forEach(o=>s.add(Oe(o.getCollectionPath())));const i=[];return s.forEach(o=>{const c=IDBKeyRange.bound([this.userId,o,n],[this.userId,o,n+1],!1,!0);i.push(Dr(e).j("collectionPathOverlayIndex",c))}),A.waitFor(i)}getOverlaysForCollection(e,t,n){const s=tt(),i=Oe(t),o=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Dr(e).U("collectionPathOverlayIndex",o).next(c=>{for(const l of c){const d=Yo(this.serializer,l);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(e,t,n,s){const i=tt();let o;const c=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Dr(e).J({index:"collectionGroupOverlayIndex",range:c},(l,d,m)=>{const p=Yo(this.serializer,d);i.size()<s||p.largestBatchId===o?(i.set(p.getKey(),p),o=p.largestBatchId):m.done()}).next(()=>i)}Tt(e,t){return Dr(e).put(function(s,i,o){const[c,l,d]=zu(i,o.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:ki(s.ht,o.mutation)}}(this.serializer,this.userId,t))}}function Dr(r){return Te(r,"documentOverlays")}/**
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
 */class Dv{It(e){return Te(e,"globals")}getSessionToken(e){return this.It(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?ve.fromUint8Array(n):ve.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.It(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class cn{constructor(){}Et(e,t){this.dt(e,t),t.At()}dt(e,t){if("nullValue"in e)this.Rt(t,5);else if("booleanValue"in e)this.Rt(t,10),t.Vt(e.booleanValue?1:0);else if("integerValue"in e)this.Rt(t,15),t.Vt(fe(e.integerValue));else if("doubleValue"in e){const n=fe(e.doubleValue);isNaN(n)?this.Rt(t,13):(this.Rt(t,15),as(n)?t.Vt(0):t.Vt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Rt(t,20),typeof n=="string"&&(n=ft(n)),t.ft(`${n.seconds||""}`),t.Vt(n.nanos||0)}else if("stringValue"in e)this.gt(e.stringValue,t),this.yt(t);else if("bytesValue"in e)this.Rt(t,30),t.wt(mt(e.bytesValue)),this.yt(t);else if("referenceValue"in e)this.St(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Rt(t,45),t.Vt(n.latitude||0),t.Vt(n.longitude||0)}else"mapValue"in e?qd(e)?this.Rt(t,Number.MAX_SAFE_INTEGER):Yi(e)?this.bt(e.mapValue,t):(this.Dt(e.mapValue,t),this.yt(t)):"arrayValue"in e?(this.vt(e.arrayValue,t),this.yt(t)):$()}gt(e,t){this.Rt(t,25),this.Ct(e,t)}Ct(e,t){t.ft(e)}Dt(e,t){const n=e.fields||{};this.Rt(t,55);for(const s of Object.keys(n))this.gt(s,t),this.dt(n[s],t)}bt(e,t){var n,s;const i=e.fields||{};this.Rt(t,53);const o="value",c=((s=(n=i[o].arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.length)||0;this.Rt(t,15),t.Vt(fe(c)),this.gt(o,t),this.dt(i[o],t)}vt(e,t){const n=e.values||[];this.Rt(t,50);for(const s of n)this.dt(s,t)}St(e,t){this.Rt(t,37),q.fromName(e).path.forEach(n=>{this.Rt(t,60),this.Ct(n,t)})}Rt(e,t){e.Vt(t)}yt(e){e.Vt(2)}}cn.Ft=new cn;function jv(r){if(r===0)return 8;let e=0;return!(r>>4)&&(e+=4,r<<=4),!(r>>6)&&(e+=2,r<<=2),!(r>>7)&&(e+=1),e}function Wu(r){const e=64-function(n){let s=0;for(let i=0;i<8;++i){const o=jv(255&n[i]);if(s+=o,o!==8)break}return s}(r);return Math.ceil(e/8)}class Ov{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Mt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.xt(n.value),n=t.next();this.Ot()}Nt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Lt(n.value),n=t.next();this.Bt()}kt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.xt(n);else if(n<2048)this.xt(960|n>>>6),this.xt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.xt(480|n>>>12),this.xt(128|63&n>>>6),this.xt(128|63&n);else{const s=t.codePointAt(0);this.xt(240|s>>>18),this.xt(128|63&s>>>12),this.xt(128|63&s>>>6),this.xt(128|63&s)}}this.Ot()}qt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Lt(n);else if(n<2048)this.Lt(960|n>>>6),this.Lt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Lt(480|n>>>12),this.Lt(128|63&n>>>6),this.Lt(128|63&n);else{const s=t.codePointAt(0);this.Lt(240|s>>>18),this.Lt(128|63&s>>>12),this.Lt(128|63&s>>>6),this.Lt(128|63&s)}}this.Bt()}Qt(e){const t=this.Kt(e),n=Wu(t);this.$t(1+n),this.buffer[this.position++]=255&n;for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Ut(e){const t=this.Kt(e),n=Wu(t);this.$t(1+n),this.buffer[this.position++]=~(255&n);for(let s=t.length-n;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}Wt(){this.Gt(255),this.Gt(255)}zt(){this.jt(255),this.jt(255)}reset(){this.position=0}seed(e){this.$t(e.length),this.buffer.set(e,this.position),this.position+=e.length}Ht(){return this.buffer.slice(0,this.position)}Kt(e){const t=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),n=(128&t[0])!=0;t[0]^=n?255:128;for(let s=1;s<t.length;++s)t[s]^=n?255:0;return t}xt(e){const t=255&e;t===0?(this.Gt(0),this.Gt(255)):t===255?(this.Gt(255),this.Gt(0)):this.Gt(t)}Lt(e){const t=255&e;t===0?(this.jt(0),this.jt(255)):t===255?(this.jt(255),this.jt(0)):this.jt(e)}Ot(){this.Gt(0),this.Gt(1)}Bt(){this.jt(0),this.jt(1)}Gt(e){this.$t(1),this.buffer[this.position++]=e}jt(e){this.$t(1),this.buffer[this.position++]=~e}$t(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Mv{constructor(e){this.Jt=e}wt(e){this.Jt.Mt(e)}ft(e){this.Jt.kt(e)}Vt(e){this.Jt.Qt(e)}At(){this.Jt.Wt()}}class Lv{constructor(e){this.Jt=e}wt(e){this.Jt.Nt(e)}ft(e){this.Jt.qt(e)}Vt(e){this.Jt.Ut(e)}At(){this.Jt.zt()}}class jr{constructor(){this.Jt=new Ov,this.Yt=new Mv(this.Jt),this.Zt=new Lv(this.Jt)}seed(e){this.Jt.seed(e)}Xt(e){return e===0?this.Yt:this.Zt}Ht(){return this.Jt.Ht()}reset(){this.Jt.reset()}}/**
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
 */class ln{constructor(e,t,n,s){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=s}en(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new ln(this.indexId,this.documentKey,this.arrayValue,n)}}function bt(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=Qu(r.arrayValue,e.arrayValue),t!==0?t:(t=Qu(r.directionalValue,e.directionalValue),t!==0?t:q.comparator(r.documentKey,e.documentKey)))}function Qu(r,e){for(let t=0;t<r.length&&t<e.length;++t){const n=r[t]-e[t];if(n!==0)return n}return r.length-e.length}/**
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
 */class Ju{constructor(e){this.tn=new oe((t,n)=>me.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.nn=e.orderBy,this.rn=[];for(const t of e.filters){const n=t;n.isInequality()?this.tn=this.tn.add(n):this.rn.push(n)}}get sn(){return this.tn.size>1}on(e){if(K(e.collectionGroup===this.collectionId),this.sn)return!1;const t=ga(e);if(t!==void 0&&!this._n(t))return!1;const n=sn(e);let s=new Set,i=0,o=0;for(;i<n.length&&this._n(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.tn.size>0){const c=this.tn.getIterator().getNext();if(!s.has(c.field.canonicalString())){const l=n[i];if(!this.an(c,l)||!this.un(this.nn[o++],l))return!1}++i}for(;i<n.length;++i){const c=n[i];if(o>=this.nn.length||!this.un(this.nn[o++],c))return!1}return!0}cn(){if(this.sn)return null;let e=new oe(me.comparator);const t=[];for(const n of this.rn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new ai(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ai(n.field,0))}for(const n of this.nn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ai(n.field,n.dir==="asc"?0:1)));return new Ai(Ai.UNKNOWN_ID,this.collectionId,t,os.empty())}_n(e){for(const t of this.rn)if(this.an(t,e))return!0;return!1}an(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}un(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Vf(r){var e,t;if(K(r instanceof te||r instanceof ie),r instanceof te){if(r instanceof Yd){const s=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>te.create(r.field,"==",i)))||[];return ie.create(s,"or")}return r}const n=r.filters.map(s=>Vf(s));return ie.create(n,r.op)}function Fv(r){if(r.getFilters().length===0)return[];const e=Ca(Vf(r));return K(Df(e)),ka(e)||Pa(e)?[e]:e.getFilters()}function ka(r){return r instanceof te}function Pa(r){return r instanceof ie&&nc(r)}function Df(r){return ka(r)||Pa(r)||function(t){if(t instanceof ie&&Ia(t)){for(const n of t.getFilters())if(!ka(n)&&!Pa(n))return!1;return!0}return!1}(r)}function Ca(r){if(K(r instanceof te||r instanceof ie),r instanceof te)return r;if(r.filters.length===1)return Ca(r.filters[0]);const e=r.filters.map(n=>Ca(n));let t=ie.create(e,r.op);return t=Ci(t),Df(t)?t:(K(t instanceof ie),K(Zn(t)),K(t.filters.length>1),t.filters.reduce((n,s)=>uc(n,s)))}function uc(r,e){let t;return K(r instanceof te||r instanceof ie),K(e instanceof te||e instanceof ie),t=r instanceof te?e instanceof te?function(s,i){return ie.create([s,i],"and")}(r,e):Yu(r,e):e instanceof te?Yu(e,r):function(s,i){if(K(s.filters.length>0&&i.filters.length>0),Zn(s)&&Zn(i))return Wd(s,i.getFilters());const o=Ia(s)?s:i,c=Ia(s)?i:s,l=o.filters.map(d=>uc(d,c));return ie.create(l,"or")}(r,e),Ci(t)}function Yu(r,e){if(Zn(e))return Wd(e,r.getFilters());{const t=e.filters.map(n=>uc(r,n));return ie.create(t,"or")}}function Ci(r){if(K(r instanceof te||r instanceof ie),r instanceof te)return r;const e=r.getFilters();if(e.length===1)return Ci(e[0]);if(Kd(r))return r;const t=e.map(s=>Ci(s)),n=[];return t.forEach(s=>{s instanceof te?n.push(s):s instanceof ie&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:ie.create(n,r.op)}/**
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
 */class Uv{constructor(){this.ln=new hc}addToCollectionParentIndex(e,t){return this.ln.add(t),A.resolve()}getCollectionParents(e,t){return A.resolve(this.ln.getEntries(t))}addFieldIndex(e,t){return A.resolve()}deleteFieldIndex(e,t){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,t){return A.resolve()}getDocumentsMatchingTarget(e,t){return A.resolve(null)}getIndexType(e,t){return A.resolve(0)}getFieldIndexes(e,t){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,t){return A.resolve(We.min())}getMinOffsetFromCollectionGroup(e,t){return A.resolve(We.min())}updateCollectionGroup(e,t,n){return A.resolve()}updateIndexEntries(e,t){return A.resolve()}}class hc{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t]||new oe(se.comparator),i=!s.has(n);return this.index[t]=s.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),s=this.index[t];return s&&s.has(n)}getEntries(e){return(this.index[e]||new oe(se.comparator)).toArray()}}/**
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
 */const Xs=new Uint8Array(0);class Bv{constructor(e,t){this.databaseId=t,this.hn=new hc,this.Pn=new _t(n=>_n(n),(n,s)=>ws(n,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.hn.has(t)){const n=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.hn.add(t)});const i={collectionId:n,parent:Oe(s)};return Xu(e).put(i)}return A.resolve()}getCollectionParents(e,t){const n=[],s=IDBKeyRange.bound([t,""],[kd(t),""],!1,!0);return Xu(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;n.push(et(o.parent))}return n})}addFieldIndex(e,t){const n=Or(e),s=function(c){return{indexId:c.indexId,collectionGroup:c.collectionGroup,fields:c.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(t);delete s.indexId;const i=n.add(s);if(t.indexState){const o=Vn(e);return i.next(c=>{o.put(Gu(c,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Or(e),s=Vn(e),i=Nn(e);return n.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Or(e),n=Nn(e),s=Vn(e);return t.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(e,t){return A.forEach(this.Tn(t),n=>this.getIndexType(e,n).next(s=>{if(s===0||s===1){const i=new Ju(n).cn();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,t){const n=Nn(e);let s=!0;const i=new Map;return A.forEach(this.Tn(t),o=>this.In(e,o).next(c=>{s&&(s=!!c),i.set(o,c)})).next(()=>{if(s){let o=Z();const c=[];return A.forEach(i,(l,d)=>{j("IndexedDbIndexManager",`Using index ${function(N){return`id=${N.indexId}|cg=${N.collectionGroup}|f=${N.fields.map(D=>`${D.fieldPath}:${D.kind}`).join(",")}`}(l)} to execute ${_n(t)}`);const m=function(N,D){const B=ga(D);if(B===void 0)return null;for(const W of Si(N,B.fieldPath))switch(W.op){case"array-contains-any":return W.value.arrayValue.values||[];case"array-contains":return[W.value]}return null}(d,l),p=function(N,D){const B=new Map;for(const W of sn(D))for(const w of Si(N,W.fieldPath))switch(w.op){case"==":case"in":B.set(W.fieldPath.canonicalString(),w.value);break;case"not-in":case"!=":return B.set(W.fieldPath.canonicalString(),w.value),Array.from(B.values())}return null}(d,l),_=function(N,D){const B=[];let W=!0;for(const w of sn(D)){const y=w.kind===0?Cu(N,w.fieldPath,N.startAt):Nu(N,w.fieldPath,N.startAt);B.push(y.value),W&&(W=y.inclusive)}return new Xn(B,W)}(d,l),E=function(N,D){const B=[];let W=!0;for(const w of sn(D)){const y=w.kind===0?Nu(N,w.fieldPath,N.endAt):Cu(N,w.fieldPath,N.endAt);B.push(y.value),W&&(W=y.inclusive)}return new Xn(B,W)}(d,l),R=this.En(l,d,_),C=this.En(l,d,E),k=this.dn(l,d,p),M=this.An(l.indexId,m,R,_.inclusive,C,E.inclusive,k);return A.forEach(M,L=>n.G(L,t.limit).next(N=>{N.forEach(D=>{const B=q.fromSegments(D.documentKey);o.has(B)||(o=o.add(B),c.push(B))})}))}).next(()=>c)}return A.resolve(null)})}Tn(e){let t=this.Pn.get(e);return t||(e.filters.length===0?t=[e]:t=Fv(ie.create(e.filters,"and")).map(n=>Ea(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.Pn.set(e,t),t)}An(e,t,n,s,i,o,c){const l=(t!=null?t.length:1)*Math.max(n.length,i.length),d=l/(t!=null?t.length:1),m=[];for(let p=0;p<l;++p){const _=t?this.Rn(t[p/d]):Xs,E=this.Vn(e,_,n[p%d],s),R=this.mn(e,_,i[p%d],o),C=c.map(k=>this.Vn(e,_,k,!0));m.push(...this.createRange(E,R,C))}return m}Vn(e,t,n,s){const i=new ln(e,q.empty(),t,n);return s?i:i.en()}mn(e,t,n,s){const i=new ln(e,q.empty(),t,n);return s?i.en():i}In(e,t){const n=new Ju(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const c of i)n.on(c)&&(!o||c.fields.length>o.fields.length)&&(o=c);return o})}getIndexType(e,t){let n=2;const s=this.Tn(t);return A.forEach(s,i=>this.In(e,i).next(o=>{o?n!==0&&o.fields.length<function(l){let d=new oe(me.comparator),m=!1;for(const p of l.filters)for(const _ of p.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?m=!0:d=d.add(_.field));for(const p of l.orderBy)p.field.isKeyField()||(d=d.add(p.field));return d.size+(m?1:0)}(i)&&(n=1):n=0})).next(()=>function(o){return o.limit!==null}(t)&&s.length>1&&n===2?1:n)}fn(e,t){const n=new jr;for(const s of sn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=n.Xt(s.kind);cn.Ft.Et(i,o)}return n.Ht()}Rn(e){const t=new jr;return cn.Ft.Et(e,t.Xt(0)),t.Ht()}gn(e,t){const n=new jr;return cn.Ft.Et(us(this.databaseId,t),n.Xt(function(i){const o=sn(i);return o.length===0?0:o[o.length-1].kind}(e))),n.Ht()}dn(e,t,n){if(n===null)return[];let s=[];s.push(new jr);let i=0;for(const o of sn(e)){const c=n[i++];for(const l of s)if(this.pn(t,o.fieldPath)&&hs(c))s=this.yn(s,o,c);else{const d=l.Xt(o.kind);cn.Ft.Et(c,d)}}return this.wn(s)}En(e,t,n){return this.dn(e,t,n.position)}wn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].Ht();return t}yn(e,t,n){const s=[...e],i=[];for(const o of n.arrayValue.values||[])for(const c of s){const l=new jr;l.seed(c.Ht()),cn.Ft.Et(o,l.Xt(t.kind)),i.push(l)}return i}pn(e,t){return!!e.filters.find(n=>n instanceof te&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Or(e),s=Vn(e);return(t?n.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.U()).next(i=>{const o=[];return A.forEach(i,c=>s.get([c.indexId,this.uid]).next(l=>{o.push(function(m,p){const _=p?new os(p.sequenceNumber,new We(vn(p.readTime),new q(et(p.documentKey)),p.largestBatchId)):os.empty(),E=m.fields.map(([R,C])=>new ai(me.fromServerFormat(R),C));return new Ai(m.indexId,m.collectionGroup,E,_)}(c,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:X(n.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const s=Or(e),i=Vn(e);return this.Sn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(c=>A.forEach(c,l=>i.put(Gu(l.indexId,this.uid,o,n)))))}updateIndexEntries(e,t){const n=new Map;return A.forEach(t,(s,i)=>{const o=n.get(s.collectionGroup);return(o?A.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(c=>(n.set(s.collectionGroup,c),A.forEach(c,l=>this.bn(e,s,l).next(d=>{const m=this.Dn(i,l);return d.isEqual(m)?A.resolve():this.vn(e,i,l,d,m)}))))})}Cn(e,t,n,s){return Nn(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.gn(n,t.key),documentKey:t.key.path.toArray()})}Fn(e,t,n,s){return Nn(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.gn(n,t.key),t.key.path.toArray()])}bn(e,t,n){const s=Nn(e);let i=new oe(bt);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.gn(n,t)])},(o,c)=>{i=i.add(new ln(n.indexId,t,c.arrayValue,c.directionalValue))}).next(()=>i)}Dn(e,t){let n=new oe(bt);const s=this.fn(t,e);if(s==null)return n;const i=ga(t);if(i!=null){const o=e.data.field(i.fieldPath);if(hs(o))for(const c of o.arrayValue.values||[])n=n.add(new ln(t.indexId,e.key,this.Rn(c),s))}else n=n.add(new ln(t.indexId,e.key,Xs,s));return n}vn(e,t,n,s,i){j("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(l,d,m,p,_){const E=l.getIterator(),R=d.getIterator();let C=Cn(E),k=Cn(R);for(;C||k;){let M=!1,L=!1;if(C&&k){const N=m(C,k);N<0?L=!0:N>0&&(M=!0)}else C!=null?L=!0:M=!0;M?(p(k),k=Cn(R)):L?(_(C),C=Cn(E)):(C=Cn(E),k=Cn(R))}}(s,i,bt,c=>{o.push(this.Cn(e,t,n,c))},c=>{o.push(this.Fn(e,t,n,c))}),A.waitFor(o)}Sn(e){let t=1;return Vn(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((o,c)=>bt(o,c)).filter((o,c,l)=>!c||bt(o,l[c-1])!==0);const s=[];s.push(e);for(const o of n){const c=bt(o,e),l=bt(o,t);if(c===0)s[0]=e.en();else if(c>0&&l<0)s.push(o),s.push(o.en());else if(l>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.Mn(s[o],s[o+1]))return[];const c=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Xs,[]],l=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Xs,[]];i.push(IDBKeyRange.bound(c,l))}return i}Mn(e,t){return bt(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Zu)}getMinOffset(e,t){return A.mapArray(this.Tn(t),n=>this.In(e,n).next(s=>s||$())).next(Zu)}}function Xu(r){return Te(r,"collectionParents")}function Nn(r){return Te(r,"indexEntries")}function Or(r){return Te(r,"indexConfiguration")}function Vn(r){return Te(r,"indexState")}function Zu(r){K(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;Xa(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new We(e.readTime,e.documentKey,t)}/**
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
 */const eh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class De{static withCacheSize(e){return new De(e,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function jf(r,e,t){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let c=0;const l=n.J({range:o},(m,p,_)=>(c++,_.delete()));i.push(l.next(()=>{K(c===1)}));const d=[];for(const m of t.mutations){const p=Od(e,m.key.path,t.batchId);i.push(s.delete(p)),d.push(m.key)}return A.waitFor(i).next(()=>d)}function Ni(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw $();e=r.noDocument}return JSON.stringify(e).length}/**
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
 */De.DEFAULT_COLLECTION_PERCENTILE=10,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,De.DEFAULT=new De(41943040,De.DEFAULT_COLLECTION_PERCENTILE,De.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),De.DISABLED=new De(-1,0,0);class so{constructor(e,t,n,s){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=s,this.xn={}}static Pt(e,t,n,s){K(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new so(i,t,n,s)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return At(e).J({index:"userMutationsIndex",range:n},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,n,s){const i=Un(e),o=At(e);return o.add({}).next(c=>{K(typeof c=="number");const l=new ic(c,t,n,s),d=function(E,R,C){const k=C.baseMutations.map(L=>ki(E.ht,L)),M=C.mutations.map(L=>ki(E.ht,L));return{userId:R,batchId:C.batchId,localWriteTimeMs:C.localWriteTime.toMillis(),baseMutations:k,mutations:M}}(this.serializer,this.userId,l),m=[];let p=new oe((_,E)=>X(_.canonicalString(),E.canonicalString()));for(const _ of s){const E=Od(this.userId,_.key.path,c);p=p.add(_.key.path.popLast()),m.push(o.put(d)),m.push(i.put(E,Ay))}return p.forEach(_=>{m.push(this.indexManager.addToCollectionParentIndex(e,_))}),e.addOnCommittedListener(()=>{this.xn[c]=l.keys()}),A.waitFor(m).next(()=>l)})}lookupMutationBatch(e,t){return At(e).get(t).next(n=>n?(K(n.userId===this.userId),an(this.serializer,n)):null)}On(e,t){return this.xn[t]?A.resolve(this.xn[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const s=n.keys();return this.xn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return At(e).J({index:"userMutationsIndex",range:s},(o,c,l)=>{c.userId===this.userId&&(K(c.batchId>=n),i=an(this.serializer,c)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return At(e).J({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{n=i.batchId,o.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return At(e).U("userMutationsIndex",t).next(n=>n.map(s=>an(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=ci(this.userId,t.path),s=IDBKeyRange.lowerBound(n),i=[];return Un(e).J({range:s},(o,c,l)=>{const[d,m,p]=o,_=et(m);if(d===this.userId&&t.path.isEqual(_))return At(e).get(p).next(E=>{if(!E)throw $();K(E.userId===this.userId),i.push(an(this.serializer,E))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new oe(X);const s=[];return t.forEach(i=>{const o=ci(this.userId,i.path),c=IDBKeyRange.lowerBound(o),l=Un(e).J({range:c},(d,m,p)=>{const[_,E,R]=d,C=et(E);_===this.userId&&i.path.isEqual(C)?n=n.add(R):p.done()});s.push(l)}),A.waitFor(s).next(()=>this.Nn(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1,i=ci(this.userId,n),o=IDBKeyRange.lowerBound(i);let c=new oe(X);return Un(e).J({range:o},(l,d,m)=>{const[p,_,E]=l,R=et(_);p===this.userId&&n.isPrefixOf(R)?R.length===s&&(c=c.add(E)):m.done()}).next(()=>this.Nn(e,c))}Nn(e,t){const n=[],s=[];return t.forEach(i=>{s.push(At(e).get(i).next(o=>{if(o===null)throw $();K(o.userId===this.userId),n.push(an(this.serializer,o))}))}),A.waitFor(s).next(()=>n)}removeMutationBatch(e,t){return jf(e._e,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.Ln(t.batchId)}),A.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}Ln(e){delete this.xn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return A.resolve();const n=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return Un(e).J({range:n},(i,o,c)=>{if(i[0]===this.userId){const l=et(i[1]);s.push(l)}else c.done()}).next(()=>{K(s.length===0)})})}containsKey(e,t){return Of(e,this.userId,t)}Bn(e){return Mf(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Of(r,e,t){const n=ci(e,t.path),s=n[1],i=IDBKeyRange.lowerBound(n);let o=!1;return Un(r).J({range:i,H:!0},(c,l,d)=>{const[m,p,_]=c;m===e&&p===s&&(o=!0),d.done()}).next(()=>o)}function At(r){return Te(r,"mutations")}function Un(r){return Te(r,"documentMutations")}function Mf(r){return Te(r,"mutationQueues")}/**
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
 */class In{constructor(e){this.kn=e}next(){return this.kn+=2,this.kn}static qn(){return new In(0)}static Qn(){return new In(-1)}}/**
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
 */class qv{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Kn(e).next(t=>{const n=new In(t.highestTargetId);return t.highestTargetId=n.next(),this.$n(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Kn(e).next(t=>H.fromTimestamp(new pe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Kn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.Kn(e).next(s=>(s.highestListenSequenceNumber=t,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.$n(e,s)))}addTargetData(e,t){return this.Un(e,t).next(()=>this.Kn(e).next(n=>(n.targetCount+=1,this.Wn(t,n),this.$n(e,n))))}updateTargetData(e,t){return this.Un(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Dn(e).delete(t.targetId)).next(()=>this.Kn(e)).next(n=>(K(n.targetCount>0),n.targetCount-=1,this.$n(e,n)))}removeTargets(e,t,n){let s=0;const i=[];return Dn(e).J((o,c)=>{const l=Kr(c);l.sequenceNumber<=t&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(e,l)))}).next(()=>A.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Dn(e).J((n,s)=>{const i=Kr(s);t(i)})}Kn(e){return th(e).get("targetGlobalKey").next(t=>(K(t!==null),t))}$n(e,t){return th(e).put("targetGlobalKey",t)}Un(e,t){return Dn(e).put(Cf(this.serializer,t))}Wn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Kn(e).next(t=>t.targetCount)}getTargetData(e,t){const n=_n(t),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return Dn(e).J({range:s,index:"queryTargetsIndex"},(o,c,l)=>{const d=Kr(c);ws(t,d.target)&&(i=d,l.done())}).next(()=>i)}addMatchingKeys(e,t,n){const s=[],i=St(e);return t.forEach(o=>{const c=Oe(o.path);s.push(i.put({targetId:n,path:c})),s.push(this.referenceDelegate.addReference(e,n,o))}),A.waitFor(s)}removeMatchingKeys(e,t,n){const s=St(e);return A.forEach(t,i=>{const o=Oe(i.path);return A.waitFor([s.delete([n,o]),this.referenceDelegate.removeReference(e,n,i)])})}removeMatchingKeysForTargetId(e,t){const n=St(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),s=St(e);let i=Z();return s.J({range:n,H:!0},(o,c,l)=>{const d=et(o[1]),m=new q(d);i=i.add(m)}).next(()=>i)}containsKey(e,t){const n=Oe(t.path),s=IDBKeyRange.bound([n],[kd(n)],!1,!0);let i=0;return St(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,c],l,d)=>{o!==0&&(i++,d.done())}).next(()=>i>0)}ut(e,t){return Dn(e).get(t).next(n=>n?Kr(n):null)}}function Dn(r){return Te(r,"targets")}function th(r){return Te(r,"targetGlobal")}function St(r){return Te(r,"targetDocuments")}/**
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
 */function nh([r,e],[t,n]){const s=X(r,t);return s===0?X(e,n):s}class $v{constructor(e){this.Gn=e,this.buffer=new oe(nh),this.zn=0}jn(){return++this.zn}Hn(e){const t=[e,this.jn()];if(this.buffer.size<this.Gn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();nh(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Lf{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Yn(6e4)}stop(){this.Jn&&(this.Jn.cancel(),this.Jn=null)}get started(){return this.Jn!==null}Yn(e){j("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ht(t)?j("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Kt(t)}await this.Yn(3e5)})}}class zv{constructor(e,t){this.Zn=e,this.params=t}calculateTargetCount(e,t){return this.Zn.Xn(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return A.resolve($e.oe);const n=new $v(t);return this.Zn.forEachTarget(e,s=>n.Hn(s.sequenceNumber)).next(()=>this.Zn.er(e,s=>n.Hn(s))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Zn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Zn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(j("LruGarbageCollector","Garbage collection skipped; disabled"),A.resolve(eh)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),eh):this.tr(e,t))}getCacheSize(e){return this.Zn.getCacheSize(e)}tr(e,t){let n,s,i,o,c,l,d;const m=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(n=p,c=Date.now(),this.removeTargets(e,n,t))).next(p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,n))).next(p=>(d=Date.now(),On()<=ee.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-m}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(d-l)+`ms
Total Duration: ${d-m}ms`),A.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Ff(r,e){return new zv(r,e)}/**
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
 */class Gv{constructor(e,t){this.db=e,this.garbageCollector=Ff(this,t)}Xn(e){const t=this.nr(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}nr(e){let t=0;return this.er(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}er(e,t){return this.rr(e,(n,s)=>t(s))}addReference(e,t,n){return Zs(e,n)}removeReference(e,t,n){return Zs(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Zs(e,t)}ir(e,t){return function(s,i){let o=!1;return Mf(s).Y(c=>Of(s,c,i).next(l=>(l&&(o=!0),A.resolve(!l)))).next(()=>o)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.rr(e,(o,c)=>{if(c<=t){const l=this.ir(e,o).next(d=>{if(!d)return i++,n.getEntry(e,o).next(()=>(n.removeEntry(o,H.min()),St(e).delete(function(p){return[0,Oe(p.path)]}(o))))});s.push(l)}}).next(()=>A.waitFor(s)).next(()=>n.apply(e)).next(()=>i)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Zs(e,t)}rr(e,t){const n=St(e);let s,i=$e.oe;return n.J({index:"documentTargetsIndex"},([o,c],{path:l,sequenceNumber:d})=>{o===0?(i!==$e.oe&&t(new q(et(s)),i),i=d,s=l):i=$e.oe}).next(()=>{i!==$e.oe&&t(new q(et(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Zs(r,e){return St(r).put(function(n,s){return{targetId:0,path:Oe(n.path),sequenceNumber:s}}(e,r.currentSequenceNumber))}/**
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
 */class Uf{constructor(){this.changes=new _t(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,_e.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?A.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Kv{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return nn(e).put(n)}removeEntry(e,t,n){return nn(e).delete(function(i,o){const c=i.path.toArray();return[c.slice(0,c.length-2),c[c.length-2],Pi(o),c[c.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.sr(e,n)))}getEntry(e,t){let n=_e.newInvalidDocument(t);return nn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Mr(t))},(s,i)=>{n=this._r(t,i)}).next(()=>n)}ar(e,t){let n={size:0,document:_e.newInvalidDocument(t)};return nn(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Mr(t))},(s,i)=>{n={document:this._r(t,i),size:Ni(i)}}).next(()=>n)}getEntries(e,t){let n=Ke();return this.ur(e,t,(s,i)=>{const o=this._r(s,i);n=n.insert(s,o)}).next(()=>n)}cr(e,t){let n=Ke(),s=new ue(q.comparator);return this.ur(e,t,(i,o)=>{const c=this._r(i,o);n=n.insert(i,c),s=s.insert(i,Ni(o))}).next(()=>({documents:n,lr:s}))}ur(e,t,n){if(t.isEmpty())return A.resolve();let s=new oe(ih);t.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(Mr(s.first()),Mr(s.last())),o=s.getIterator();let c=o.getNext();return nn(e).J({index:"documentKeyIndex",range:i},(l,d,m)=>{const p=q.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;c&&ih(c,p)<0;)n(c,null),c=o.getNext();c&&c.isEqual(p)&&(n(c,d),c=o.hasNext()?o.getNext():null),c?m.$(Mr(c)):m.done()}).next(()=>{for(;c;)n(c,null),c=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,n,s,i){const o=t.path,c=[o.popLast().toArray(),o.lastSegment(),Pi(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return nn(e).U(IDBKeyRange.bound(c,l,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let m=Ke();for(const p of d){const _=this._r(q.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);_.isFoundDocument()&&(Es(t,_)||s.has(_.key))&&(m=m.insert(_.key,_))}return m})}getAllFromCollectionGroup(e,t,n,s){let i=Ke();const o=sh(t,n),c=sh(t,We.max());return nn(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,c,!0)},(l,d,m)=>{const p=this._r(q.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(p.key,p),i.size===s&&m.done()}).next(()=>i)}newChangeBuffer(e){return new Hv(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return rh(e).get("remoteDocumentGlobalKey").next(t=>(K(!!t),t))}sr(e,t){return rh(e).put("remoteDocumentGlobalKey",t)}_r(e,t){if(t){const n=Nv(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(H.min())))return n}return _e.newInvalidDocument(e)}}function Bf(r){return new Kv(r)}class Hv extends Uf{constructor(e,t){super(),this.hr=e,this.trackRemovals=t,this.Pr=new _t(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(e){const t=[];let n=0,s=new oe((i,o)=>X(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const c=this.Pr.get(i);if(t.push(this.hr.removeEntry(e,i,c.readTime)),o.isValidDocument()){const l=$u(this.hr.serializer,o);s=s.add(i.path.popLast());const d=Ni(l);n+=d-c.size,t.push(this.hr.addEntry(e,i,l))}else if(n-=c.size,this.trackRemovals){const l=$u(this.hr.serializer,o.convertToNoDocument(H.min()));t.push(this.hr.addEntry(e,i,l))}}),s.forEach(i=>{t.push(this.hr.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.hr.updateMetadata(e,n)),A.waitFor(t)}getFromCache(e,t){return this.hr.ar(e,t).next(n=>(this.Pr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.hr.cr(e,t).next(({documents:n,lr:s})=>(s.forEach((i,o)=>{this.Pr.set(i,{size:o,readTime:n.get(i).readTime})}),n))}}function rh(r){return Te(r,"remoteDocumentGlobal")}function nn(r){return Te(r,"remoteDocumentsV14")}function Mr(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function sh(r,e){const t=e.documentKey.path.toArray();return[r,Pi(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function ih(r,e){const t=r.path.toArray(),n=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<n.length-2;++i)if(s=X(t[i],n[i]),s)return s;return s=X(t.length,n.length),s||(s=X(t[t.length-2],n[n.length-2]),s||X(t[t.length-1],n[n.length-1]))}/**
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
 */class Wv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class qf{constructor(e,t,n,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=s}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(n=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(n!==null&&Xr(n.mutation,s,ze.empty(),pe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Z()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Z()){const s=tt();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,n).next(i=>{let o=zr();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const n=tt();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Z()))}populateOverlays(e,t,n){const s=[];return n.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{t.set(o,c)})})}computeViews(e,t,n,s){let i=Ke();const o=Yr(),c=function(){return Yr()}();return t.forEach((l,d)=>{const m=n.get(d.key);s.has(d.key)&&(m===void 0||m.mutation instanceof yt)?i=i.insert(d.key,d):m!==void 0?(o.set(d.key,m.mutation.getFieldMask()),Xr(m.mutation,d,m.mutation.getFieldMask(),pe.now())):o.set(d.key,ze.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((d,m)=>o.set(d,m)),t.forEach((d,m)=>{var p;return c.set(d,new Wv(m,(p=o.get(d))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,t){const n=Yr();let s=new ue((o,c)=>o-c),i=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const c of o)c.keys().forEach(l=>{const d=t.get(l);if(d===null)return;let m=n.get(l)||ze.empty();m=c.applyToLocalView(d,m),n.set(l,m);const p=(s.get(c.batchId)||Z()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),d=l.key,m=l.value,p=of();m.forEach(_=>{if(!i.has(_)){const E=ff(t.get(_),n.get(_));E!==null&&p.set(_,E),i=i.add(_)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,p))}return A.waitFor(o)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,s){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Zd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,s):this.getDocumentsMatchingCollectionQuery(e,t,n,s)}getNextDocuments(e,t,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,s-i.size):A.resolve(tt());let c=-1,l=i;return o.next(d=>A.forEach(d,(m,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(m)?A.resolve():this.remoteDocumentCache.getEntry(e,m).next(_=>{l=l.insert(m,_)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,l,d,Z())).next(m=>({batchId:c,changes:sf(m)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(n=>{let s=zr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,n,s){const i=t.collectionGroup;let o=zr();return this.indexManager.getCollectionParents(e,i).next(c=>A.forEach(c,l=>{const d=function(p,_){return new fr(_,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,n,s).next(m=>{m.forEach((p,_)=>{o=o.insert(p,_)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,s))).next(o=>{i.forEach((l,d)=>{const m=d.getKey();o.get(m)===null&&(o=o.insert(m,_e.newInvalidDocument(m)))});let c=zr();return o.forEach((l,d)=>{const m=i.get(l);m!==void 0&&Xr(m.mutation,d,ze.empty(),pe.now()),Es(t,d)&&(c=c.insert(l,d))}),c})}}/**
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
 */class Qv{constructor(e){this.serializer=e,this.Tr=new Map,this.Ir=new Map}getBundleMetadata(e,t){return A.resolve(this.Tr.get(t))}saveBundleMetadata(e,t){return this.Tr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ue(s.createTime)}}(t)),A.resolve()}getNamedQuery(e,t){return A.resolve(this.Ir.get(t))}saveNamedQuery(e,t){return this.Ir.set(t.name,function(s){return{name:s.name,query:Nf(s.bundledQuery),readTime:Ue(s.readTime)}}(t)),A.resolve()}}/**
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
 */class Jv{constructor(){this.overlays=new ue(q.comparator),this.Er=new Map}getOverlay(e,t){return A.resolve(this.overlays.get(t))}getOverlays(e,t){const n=tt();return A.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((s,i)=>{this.Tt(e,t,i)}),A.resolve()}removeOverlaysForBatchId(e,t,n){const s=this.Er.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Er.delete(n)),A.resolve()}getOverlaysForCollection(e,t,n){const s=tt(),i=t.length+1,o=new q(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return A.resolve(s)}getOverlaysForCollectionGroup(e,t,n,s){let i=new ue((d,m)=>d-m);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>n){let m=i.get(d.largestBatchId);m===null&&(m=tt(),i=i.insert(d.largestBatchId,m)),m.set(d.getKey(),d)}}const c=tt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,m)=>c.set(d,m)),!(c.size()>=s)););return A.resolve(c)}Tt(e,t,n){const s=this.overlays.get(n.key);if(s!==null){const o=this.Er.get(s.largestBatchId).delete(n.key);this.Er.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new ac(t,n));let i=this.Er.get(t);i===void 0&&(i=Z(),this.Er.set(t,i)),this.Er.set(t,i.add(n.key))}}/**
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
 */class Yv{constructor(){this.sessionToken=ve.EMPTY_BYTE_STRING}getSessionToken(e){return A.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,A.resolve()}}/**
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
 */class dc{constructor(){this.dr=new oe(be.Ar),this.Rr=new oe(be.Vr)}isEmpty(){return this.dr.isEmpty()}addReference(e,t){const n=new be(e,t);this.dr=this.dr.add(n),this.Rr=this.Rr.add(n)}mr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.gr(new be(e,t))}pr(e,t){e.forEach(n=>this.removeReference(n,t))}yr(e){const t=new q(new se([])),n=new be(t,e),s=new be(t,e+1),i=[];return this.Rr.forEachInRange([n,s],o=>{this.gr(o),i.push(o.key)}),i}wr(){this.dr.forEach(e=>this.gr(e))}gr(e){this.dr=this.dr.delete(e),this.Rr=this.Rr.delete(e)}Sr(e){const t=new q(new se([])),n=new be(t,e),s=new be(t,e+1);let i=Z();return this.Rr.forEachInRange([n,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new be(e,0),n=this.dr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class be{constructor(e,t){this.key=e,this.br=t}static Ar(e,t){return q.comparator(e.key,t.key)||X(e.br,t.br)}static Vr(e,t){return X(e.br,t.br)||q.comparator(e.key,t.key)}}/**
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
 */class Xv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Dr=1,this.vr=new oe(be.Ar)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,s){const i=this.Dr;this.Dr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new ic(i,t,n,s);this.mutationQueue.push(o);for(const c of s)this.vr=this.vr.add(new be(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,t){return A.resolve(this.Cr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,s=this.Fr(n),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.Dr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new be(t,0),s=new be(t,Number.POSITIVE_INFINITY),i=[];return this.vr.forEachInRange([n,s],o=>{const c=this.Cr(o.br);i.push(c)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new oe(X);return t.forEach(s=>{const i=new be(s,0),o=new be(s,Number.POSITIVE_INFINITY);this.vr.forEachInRange([i,o],c=>{n=n.add(c.br)})}),A.resolve(this.Mr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,s=n.length+1;let i=n;q.isDocumentKey(i)||(i=i.child(""));const o=new be(new q(i),0);let c=new oe(X);return this.vr.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(c=c.add(l.br)),!0)},o),A.resolve(this.Mr(c))}Mr(e){const t=[];return e.forEach(n=>{const s=this.Cr(n);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){K(this.Or(t.batchId,"removed")===0),this.mutationQueue.shift();let n=this.vr;return A.forEach(t.mutations,s=>{const i=new be(s.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.vr=n})}Ln(e){}containsKey(e,t){const n=new be(t,0),s=this.vr.firstAfterOrEqual(n);return A.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Or(e,t){return this.Fr(e)}Fr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Cr(e){const t=this.Fr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Zv{constructor(e){this.Nr=e,this.docs=function(){return new ue(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,s=this.docs.get(n),i=s?s.size:0,o=this.Nr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return A.resolve(n?n.document.mutableCopy():_e.newInvalidDocument(t))}getEntries(e,t){let n=Ke();return t.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():_e.newInvalidDocument(s))}),A.resolve(n)}getDocumentsMatchingQuery(e,t,n,s){let i=Ke();const o=t.path,c=new q(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:d,value:{document:m}}=l.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Xa(Cd(m),n)<=0||(s.has(m.key)||Es(t,m))&&(i=i.insert(m.key,m.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,t,n,s){$()}Lr(e,t){return A.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new eI(this)}getSize(e){return A.resolve(this.size)}}class eI extends Uf{constructor(e){super(),this.hr=e}applyChanges(e){const t=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?t.push(this.hr.addEntry(e,s)):this.hr.removeEntry(n)}),A.waitFor(t)}getFromCache(e,t){return this.hr.getEntry(e,t)}getAllFromCache(e,t){return this.hr.getEntries(e,t)}}/**
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
 */class tI{constructor(e){this.persistence=e,this.Br=new _t(t=>_n(t),ws),this.lastRemoteSnapshotVersion=H.min(),this.highestTargetId=0,this.kr=0,this.qr=new dc,this.targetCount=0,this.Qr=In.qn()}forEachTarget(e,t){return this.Br.forEach((n,s)=>t(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.kr)}allocateTargetId(e){return this.highestTargetId=this.Qr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.kr&&(this.kr=t),A.resolve()}Un(e){this.Br.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Qr=new In(t),this.highestTargetId=t),e.sequenceNumber>this.kr&&(this.kr=e.sequenceNumber)}addTargetData(e,t){return this.Un(t),this.targetCount+=1,A.resolve()}updateTargetData(e,t){return this.Un(t),A.resolve()}removeTargetData(e,t){return this.Br.delete(t.target),this.qr.yr(t.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,t,n){let s=0;const i=[];return this.Br.forEach((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.Br.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,t){const n=this.Br.get(t)||null;return A.resolve(n)}addMatchingKeys(e,t,n){return this.qr.mr(t,n),A.resolve()}removeMatchingKeys(e,t,n){this.qr.pr(t,n);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.qr.yr(t),A.resolve()}getMatchingKeysForTargetId(e,t){const n=this.qr.Sr(t);return A.resolve(n)}containsKey(e,t){return A.resolve(this.qr.containsKey(t))}}/**
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
 */class fc{constructor(e,t){this.Kr={},this.overlays={},this.$r=new $e(0),this.Ur=!1,this.Ur=!0,this.Wr=new Yv,this.referenceDelegate=e(this),this.Gr=new tI(this),this.indexManager=new Uv,this.remoteDocumentCache=function(s){return new Zv(s)}(n=>this.referenceDelegate.zr(n)),this.serializer=new Pf(t),this.jr=new Qv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ur=!1,Promise.resolve()}get started(){return this.Ur}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Jv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Kr[e.toKey()];return n||(n=new Xv(t,this.referenceDelegate),this.Kr[e.toKey()]=n),n}getGlobalsCache(){return this.Wr}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.jr}runTransaction(e,t,n){j("MemoryPersistence","Starting transaction:",e);const s=new nI(this.$r.next());return this.referenceDelegate.Hr(),n(s).next(i=>this.referenceDelegate.Jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Yr(e,t){return A.or(Object.values(this.Kr).map(n=>()=>n.containsKey(e,t)))}}class nI extends Vd{constructor(e){super(),this.currentSequenceNumber=e}}class io{constructor(e){this.persistence=e,this.Zr=new dc,this.Xr=null}static ei(e){return new io(e)}get ti(){if(this.Xr)return this.Xr;throw $()}addReference(e,t,n){return this.Zr.addReference(n,t),this.ti.delete(n.toString()),A.resolve()}removeReference(e,t,n){return this.Zr.removeReference(n,t),this.ti.add(n.toString()),A.resolve()}markPotentiallyOrphaned(e,t){return this.ti.add(t.toString()),A.resolve()}removeTarget(e,t){this.Zr.yr(t.targetId).forEach(s=>this.ti.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.ti.add(i.toString()))}).next(()=>n.removeTargetData(e,t))}Hr(){this.Xr=new Set}Jr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.ti,n=>{const s=q.fromPath(n);return this.ni(e,s).next(i=>{i||t.removeEntry(s,H.min())})}).next(()=>(this.Xr=null,t.apply(e)))}updateLimboDocument(e,t){return this.ni(e,t).next(n=>{n?this.ti.delete(t.toString()):this.ti.add(t.toString())})}zr(e){return 0}ni(e,t){return A.or([()=>A.resolve(this.Zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Yr(e,t)])}}class Vi{constructor(e,t){this.persistence=e,this.ri=new _t(n=>Oe(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=Ff(this,t)}static ei(e,t){return new Vi(e,t)}Hr(){}Jr(e){return A.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}Xn(e){const t=this.nr(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(s=>n+s))}nr(e){let t=0;return this.er(e,n=>{t++}).next(()=>t)}er(e,t){return A.forEach(this.ri,(n,s)=>this.ir(e,n,s).next(i=>i?A.resolve():t(s)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Lr(e,o=>this.ir(e,o,t).next(c=>{c||(n++,i.removeEntry(o,H.min()))})).next(()=>i.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.ri.set(t,e.currentSequenceNumber),A.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),A.resolve()}removeReference(e,t,n){return this.ri.set(n,e.currentSequenceNumber),A.resolve()}updateLimboDocument(e,t){return this.ri.set(t,e.currentSequenceNumber),A.resolve()}zr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ui(e.data.value)),t}ir(e,t,n){return A.or([()=>this.persistence.Yr(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.ri.get(t);return A.resolve(s!==void 0&&s>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class rI{constructor(e){this.serializer=e}O(e,t,n,s){const i=new Wi("createOrUpgrade",t);n<1&&s>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Iu,{unique:!0}),l.createObjectStore("documentMutations")}(e),oh(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=A.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),oh(e)),o=o.next(()=>function(l){const d=l.store("targetGlobal"),m={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:H.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",m)}(i))),n<4&&s>=4&&(n!==0&&(o=o.next(()=>function(l,d){return d.store("mutations").U().next(m=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Iu,{unique:!0});const p=d.store("mutations"),_=m.map(E=>p.put(E));return A.waitFor(_)})}(e,i))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),n<5&&s>=5&&(o=o.next(()=>this.ii(i))),n<6&&s>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.si(i)))),n<7&&s>=7&&(o=o.next(()=>this.oi(i))),n<8&&s>=8&&(o=o.next(()=>this._i(e,i))),n<9&&s>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&s>=10&&(o=o.next(()=>this.ai(i))),n<11&&s>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),n<12&&s>=12&&(o=o.next(()=>{(function(l){const d=l.createObjectStore("documentOverlays",{keyPath:My});d.createIndex("collectionPathOverlayIndex",Ly,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",Fy,{unique:!1})})(e)})),n<13&&s>=13&&(o=o.next(()=>function(l){const d=l.createObjectStore("remoteDocumentsV14",{keyPath:xy});d.createIndex("documentKeyIndex",Sy),d.createIndex("collectionGroupIndex",Ry)}(e)).next(()=>this.ui(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(o=o.next(()=>this.ci(e,i))),n<15&&s>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:Vy}).createIndex("sequenceNumberIndex",Dy,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:jy}).createIndex("documentKeyIndex",Oy,{unique:!1})}(e))),n<16&&s>=16&&(o=o.next(()=>{t.objectStore("indexState").clear()}).next(()=>{t.objectStore("indexEntries").clear()})),n<17&&s>=17&&(o=o.next(()=>{(function(l){l.createObjectStore("globals",{keyPath:"name"})})(e)})),o}si(e){let t=0;return e.store("remoteDocuments").J((n,s)=>{t+=Ni(s)}).next(()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}ii(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.U().next(s=>A.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",o).next(c=>A.forEach(c,l=>{K(l.userId===i.userId);const d=an(this.serializer,l);return jf(e,i.userId,d).next(()=>{})}))}))}oi(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((o,c)=>{const l=new se(o),d=function(p){return[0,Oe(p)]}(l);i.push(t.get(d).next(m=>m?A.resolve():(p=>t.put({targetId:0,path:Oe(p),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>A.waitFor(i))})}_i(e,t){e.createObjectStore("collectionParents",{keyPath:Ny});const n=t.store("collectionParents"),s=new hc,i=o=>{if(s.add(o)){const c=o.lastSegment(),l=o.popLast();return n.put({collectionId:c,parent:Oe(l)})}};return t.store("remoteDocuments").J({H:!0},(o,c)=>{const l=new se(o);return i(l.popLast())}).next(()=>t.store("documentMutations").J({H:!0},([o,c,l],d)=>{const m=et(c);return i(m.popLast())}))}ai(e){const t=e.store("targets");return t.J((n,s)=>{const i=Kr(s),o=Cf(this.serializer,i);return t.put(o)})}ui(e,t){const n=t.store("remoteDocuments"),s=[];return n.J((i,o)=>{const c=t.store("remoteDocumentsV14"),l=function(p){return p.document?new q(se.fromString(p.document.name).popFirst(5)):p.noDocument?q.fromSegments(p.noDocument.path):p.unknownDocument?q.fromSegments(p.unknownDocument.path):$()}(o).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(c.put(d))}).next(()=>A.waitFor(s))}ci(e,t){const n=t.store("mutations"),s=Bf(this.serializer),i=new fc(io.ei,this.serializer.ht);return n.U().next(o=>{const c=new Map;return o.forEach(l=>{var d;let m=(d=c.get(l.userId))!==null&&d!==void 0?d:Z();an(this.serializer,l).keys().forEach(p=>m=m.add(p)),c.set(l.userId,m)}),A.forEach(c,(l,d)=>{const m=new Ve(d),p=ro.Pt(this.serializer,m),_=i.getIndexManager(m),E=so.Pt(m,this.serializer,_,i.referenceDelegate);return new qf(s,E,p,_).recalculateAndSaveOverlaysForDocumentKeys(new _a(t,$e.oe),l).next()})})}}function oh(r){r.createObjectStore("targetDocuments",{keyPath:Py}).createIndex("documentTargetsIndex",Cy,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",ky,{unique:!0}),r.createObjectStore("targetGlobal")}const Xo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class mc{constructor(e,t,n,s,i,o,c,l,d,m,p=17){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.li=i,this.window=o,this.document=c,this.hi=d,this.Pi=m,this.Ti=p,this.$r=null,this.Ur=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ii=null,this.inForeground=!1,this.Ei=null,this.di=null,this.Ai=Number.NEGATIVE_INFINITY,this.Ri=_=>Promise.resolve(),!mc.p())throw new U(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Gv(this,s),this.Vi=t+"main",this.serializer=new Pf(l),this.mi=new Ot(this.Vi,this.Ti,new rI(this.serializer)),this.Wr=new Dv,this.Gr=new qv(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Bf(this.serializer),this.jr=new Vv,this.window&&this.window.localStorage?this.fi=this.window.localStorage:(this.fi=null,m===!1&&ye("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new U(V.FAILED_PRECONDITION,Xo);return this.pi(),this.yi(),this.wi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Gr.getHighestSequenceNumber(e))}).then(e=>{this.$r=new $e(e,this.hi)}).then(()=>{this.Ur=!0}).catch(e=>(this.mi&&this.mi.close(),Promise.reject(e)))}Si(e){return this.Ri=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.mi.L(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.li.enqueueAndForget(async()=>{this.started&&await this.gi()}))}gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ei(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.bi(e).next(t=>{t||(this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)))})}).next(()=>this.Di(e)).next(t=>this.isPrimary&&!t?this.vi(e).next(()=>!1):!!t&&this.Ci(e).next(()=>!0))).catch(e=>{if(Ht(e))return j("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return j("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.li.enqueueRetryable(()=>this.Ri(e)),this.isPrimary=e})}bi(e){return Lr(e).get("owner").next(t=>A.resolve(this.Fi(t)))}Mi(e){return ei(e).delete(this.clientId)}async xi(){if(this.isPrimary&&!this.Oi(this.Ai,18e5)){this.Ai=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Te(t,"clientMetadata");return n.U().next(s=>{const i=this.Ni(s,18e5),o=s.filter(c=>i.indexOf(c)===-1);return A.forEach(o,c=>n.delete(c.clientId)).next(()=>o)})}).catch(()=>[]);if(this.fi)for(const t of e)this.fi.removeItem(this.Li(t.clientId))}}wi(){this.di=this.li.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.gi().then(()=>this.xi()).then(()=>this.wi()))}Fi(e){return!!e&&e.ownerId===this.clientId}Di(e){return this.Pi?A.resolve(!0):Lr(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Bi(t.ownerId)){if(this.Fi(t)&&this.networkEnabled)return!0;if(!this.Fi(t)){if(!t.allowTabSynchronization)throw new U(V.FAILED_PRECONDITION,Xo);return!1}}return!(!this.networkEnabled||!this.inForeground)||ei(e).U().next(n=>this.Ni(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,c=this.networkEnabled===s.networkEnabled;if(i||o&&c)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&j("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ur=!1,this.ki(),this.di&&(this.di.cancel(),this.di=null),this.qi(),this.Qi(),await this.mi.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new _a(e,$e.oe);return this.vi(t).next(()=>this.Mi(t))}),this.mi.close(),this.Ki()}Ni(e,t){return e.filter(n=>this.Oi(n.updateTimeMs,t)&&!this.Bi(n.clientId))}$i(){return this.runTransaction("getActiveClients","readonly",e=>ei(e).U().next(t=>this.Ni(t,18e5).map(n=>n.clientId)))}get started(){return this.Ur}getGlobalsCache(){return this.Wr}getMutationQueue(e,t){return so.Pt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Gr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Bv(e,this.serializer.ht.databaseId)}getDocumentOverlayCache(e){return ro.Pt(this.serializer,e)}getBundleCache(){return this.jr}runTransaction(e,t,n){j("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=function(l){return l===17?qy:l===16?By:l===15?ec:l===14?Fd:l===13?Ld:l===12?Uy:l===11?Md:void $()}(this.Ti);let o;return this.mi.runTransaction(e,s,i,c=>(o=new _a(c,this.$r?this.$r.next():$e.oe),t==="readwrite-primary"?this.bi(o).next(l=>!!l||this.Di(o)).next(l=>{if(!l)throw ye(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.li.enqueueRetryable(()=>this.Ri(!1)),new U(V.FAILED_PRECONDITION,Nd);return n(o)}).next(l=>this.Ci(o).next(()=>l)):this.Ui(o).next(()=>n(o)))).then(c=>(o.raiseOnCommittedEvent(),c))}Ui(e){return Lr(e).get("owner").next(t=>{if(t!==null&&this.Oi(t.leaseTimestampMs,5e3)&&!this.Bi(t.ownerId)&&!this.Fi(t)&&!(this.Pi||this.allowTabSynchronization&&t.allowTabSynchronization))throw new U(V.FAILED_PRECONDITION,Xo)})}Ci(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Lr(e).put("owner",t)}static p(){return Ot.p()}vi(e){const t=Lr(e);return t.get("owner").next(n=>this.Fi(n)?(j("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):A.resolve())}Oi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(ye(`Detected an update time that is in the future: ${e} > ${n}`),!1))}pi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ei=()=>{this.li.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.gi()))},this.document.addEventListener("visibilitychange",this.Ei),this.inForeground=this.document.visibilityState==="visible")}qi(){this.Ei&&(this.document.removeEventListener("visibilitychange",this.Ei),this.Ei=null)}yi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Ii=()=>{this.ki();const t=/(?:Version|Mobile)\/1[456]/;pd()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.li.enterRestrictedMode(!0),this.li.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ii))}Qi(){this.Ii&&(this.window.removeEventListener("pagehide",this.Ii),this.Ii=null)}Bi(e){var t;try{const n=((t=this.fi)===null||t===void 0?void 0:t.getItem(this.Li(e)))!==null;return j("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return ye("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}ki(){if(this.fi)try{this.fi.setItem(this.Li(this.clientId),String(Date.now()))}catch(e){ye("Failed to set zombie client id.",e)}}Ki(){if(this.fi)try{this.fi.removeItem(this.Li(this.clientId))}catch{}}Li(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Lr(r){return Te(r,"owner")}function ei(r){return Te(r,"clientMetadata")}function $f(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class pc{constructor(e,t,n,s){this.targetId=e,this.fromCache=t,this.Wi=n,this.Gi=s}static zi(e,t){let n=Z(),s=Z();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new pc(e,t.fromCache,n,s)}}/**
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
 */class sI{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class zf{constructor(){this.ji=!1,this.Hi=!1,this.Ji=100,this.Yi=function(){return pd()?8:Dd(Ee())>0?6:4}()}initialize(e,t){this.Zi=e,this.indexManager=t,this.ji=!0}getDocumentsMatchingQuery(e,t,n,s){const i={result:null};return this.Xi(e,t).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.es(e,t,s,n).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new sI;return this.ts(e,t,o).next(c=>{if(i.result=c,this.Hi)return this.ns(e,t,o,c.size)})}).next(()=>i.result)}ns(e,t,n,s){return n.documentReadCount<this.Ji?(On()<=ee.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Mn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Ji,"documents"),A.resolve()):(On()<=ee.DEBUG&&j("QueryEngine","Query:",Mn(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Yi*s?(On()<=ee.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Mn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,He(t))):A.resolve())}Xi(e,t){if(Vu(t))return A.resolve(null);let n=He(t);return this.indexManager.getIndexType(e,n).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=ba(t,null,"F"),n=He(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(i=>{const o=Z(...i);return this.Zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,n).next(l=>{const d=this.rs(t,c);return this.ss(t,d,o,l.readTime)?this.Xi(e,ba(t,null,"F")):this.os(e,d,t,l)}))})))}es(e,t,n,s){return Vu(t)||s.isEqual(H.min())?A.resolve(null):this.Zi.getDocuments(e,n).next(i=>{const o=this.rs(t,i);return this.ss(t,o,n,s)?A.resolve(null):(On()<=ee.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mn(t)),this.os(e,o,t,Pd(s,-1)).next(c=>c))})}rs(e,t){let n=new oe(nf(e));return t.forEach((s,i)=>{Es(e,i)&&(n=n.add(i))}),n}ss(e,t,n,s){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ts(e,t,n){return On()<=ee.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Mn(t)),this.Zi.getDocumentsMatchingQuery(e,t,We.min(),n)}os(e,t,n,s){return this.Zi.getDocumentsMatchingQuery(e,n,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class iI{constructor(e,t,n,s){this.persistence=e,this._s=t,this.serializer=s,this.us=new ue(X),this.cs=new _t(i=>_n(i),ws),this.ls=new Map,this.hs=e.getRemoteDocumentCache(),this.Gr=e.getTargetCache(),this.jr=e.getBundleCache(),this.Ps(n)}Ps(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qf(this.hs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.hs.setIndexManager(this.indexManager),this._s.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.us))}}function Gf(r,e,t,n){return new iI(r,e,t,n)}async function Kf(r,e){const t=G(r);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let s;return t.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,t.Ps(e),t.mutationQueue.getAllMutationBatches(n))).next(i=>{const o=[],c=[];let l=Z();for(const d of s){o.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}for(const d of i){c.push(d.batchId);for(const m of d.mutations)l=l.add(m.key)}return t.localDocuments.getDocuments(n,l).next(d=>({Ts:d,removedBatchIds:o,addedBatchIds:c}))})})}function oI(r,e){const t=G(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=e.batch.keys(),i=t.hs.newChangeBuffer({trackRemovals:!0});return function(c,l,d,m){const p=d.batch,_=p.keys();let E=A.resolve();return _.forEach(R=>{E=E.next(()=>m.getEntry(l,R)).next(C=>{const k=d.docVersions.get(R);K(k!==null),C.version.compareTo(k)<0&&(p.applyToRemoteDocument(C,d),C.isValidDocument()&&(C.setReadTime(d.commitVersion),m.addEntry(C)))})}),E.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(t,n,e,i).next(()=>i.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(c){let l=Z();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(l=l.add(c.batch.mutations[d].key));return l}(e))).next(()=>t.localDocuments.getDocuments(n,s))})}function Hf(r){const e=G(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Gr.getLastRemoteSnapshotVersion(t))}function aI(r,e){const t=G(r),n=e.snapshotVersion;let s=t.us;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.hs.newChangeBuffer({trackRemovals:!0});s=t.us;const c=[];e.targetChanges.forEach((m,p)=>{const _=s.get(p);if(!_)return;c.push(t.Gr.removeMatchingKeys(i,m.removedDocuments,p).next(()=>t.Gr.addMatchingKeys(i,m.addedDocuments,p)));let E=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?E=E.withResumeToken(ve.EMPTY_BYTE_STRING,H.min()).withLastLimboFreeSnapshotVersion(H.min()):m.resumeToken.approximateByteSize()>0&&(E=E.withResumeToken(m.resumeToken,n)),s=s.insert(p,E),function(C,k,M){return C.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(_,E,m)&&c.push(t.Gr.updateTargetData(i,E))});let l=Ke(),d=Z();if(e.documentUpdates.forEach(m=>{e.resolvedLimboDocuments.has(m)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,m))}),c.push(cI(i,o,e.documentUpdates).next(m=>{l=m.Is,d=m.Es})),!n.isEqual(H.min())){const m=t.Gr.getLastRemoteSnapshotVersion(i).next(p=>t.Gr.setTargetsMetadata(i,i.currentSequenceNumber,n));c.push(m)}return A.waitFor(c).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(t.us=s,i))}function cI(r,e,t){let n=Z(),s=Z();return t.forEach(i=>n=n.add(i)),e.getEntries(r,n).next(i=>{let o=Ke();return t.forEach((c,l)=>{const d=i.get(c);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(H.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):j("LocalStore","Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",l.version)}),{Is:o,Es:s}})}function lI(r,e){const t=G(r);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Di(r,e){const t=G(r);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return t.Gr.getTargetData(n,e).next(i=>i?(s=i,A.resolve(s)):t.Gr.allocateTargetId(n).next(o=>(s=new ct(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.Gr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=t.us.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.us=t.us.insert(n.targetId,n),t.cs.set(e,n.targetId)),n})}async function sr(r,e,t){const n=G(r),s=n.us.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,o=>n.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ht(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}n.us=n.us.remove(e),n.cs.delete(s.target)}function Na(r,e,t){const n=G(r);let s=H.min(),i=Z();return n.persistence.runTransaction("Execute query","readwrite",o=>function(l,d,m){const p=G(l),_=p.cs.get(m);return _!==void 0?A.resolve(p.us.get(_)):p.Gr.getTargetData(d,m)}(n,o,He(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,n.Gr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>n._s.getDocumentsMatchingQuery(o,e,t?s:H.min(),t?i:Z())).next(c=>(Jf(n,tf(e),c),{documents:c,ds:i})))}function Wf(r,e){const t=G(r),n=G(t.Gr),s=t.us.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>n.ut(i,e).next(o=>o?o.target:null))}function Qf(r,e){const t=G(r),n=t.ls.get(e)||H.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.hs.getAllFromCollectionGroup(s,e,Pd(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Jf(t,e,s),s))}function Jf(r,e,t){let n=r.ls.get(e)||H.min();t.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.ls.set(e,n)}function ah(r,e){return`firestore_clients_${r}_${e}`}function ch(r,e,t){let n=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}function Zo(r,e){return`firestore_targets_${r}_${e}`}class ji{constructor(e,t,n,s){this.user=e,this.batchId=t,this.state=n,this.error=s}static fs(e,t,n){const s=JSON.parse(n);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new U(s.error.code,s.error.message))),o?new ji(e,t,s.state,i):(ye("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Zr{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static fs(e,t){const n=JSON.parse(t);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new U(n.error.code,n.error.message))),i?new Zr(e,n.state,s):(ye("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}gs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Oi{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static fs(e,t){const n=JSON.parse(t);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=rc();for(let o=0;s&&o<n.activeTargetIds.length;++o)s=jd(n.activeTargetIds[o]),i=i.add(n.activeTargetIds[o]);return s?new Oi(e,i):(ye("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class gc{constructor(e,t){this.clientId=e,this.onlineState=t}static fs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new gc(t.clientId,t.onlineState):(ye("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Va{constructor(){this.activeTargetIds=rc()}ps(e){this.activeTargetIds=this.activeTargetIds.add(e)}ys(e){this.activeTargetIds=this.activeTargetIds.delete(e)}gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ea{constructor(e,t,n,s,i){this.window=e,this.li=t,this.persistenceKey=n,this.ws=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ss=this.bs.bind(this),this.Ds=new ue(X),this.started=!1,this.vs=[];const o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Cs=ah(this.persistenceKey,this.ws),this.Fs=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.Ds=this.Ds.insert(this.ws,new Va),this.Ms=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.xs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Os=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Ns=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Ls=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ss)}static p(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.$i();for(const n of e){if(n===this.ws)continue;const s=this.getItem(ah(this.persistenceKey,n));if(s){const i=Oi.fs(n,s);i&&(this.Ds=this.Ds.insert(i.clientId,i))}}this.Bs();const t=this.storage.getItem(this.Ns);if(t){const n=this.ks(t);n&&this.qs(n)}for(const n of this.vs)this.bs(n);this.vs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Fs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Qs(this.Ds)}isActiveQueryTarget(e){let t=!1;return this.Ds.forEach((n,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ks(e,"pending")}updateMutationState(e,t,n){this.Ks(e,t,n),this.$s(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Zo(this.persistenceKey,e));if(s){const i=Zr.fs(e,s);i&&(n=i.state)}}return t&&this.Us.ps(e),this.Bs(),n}removeLocalQueryTarget(e){this.Us.ys(e),this.Bs()}isLocalQueryTarget(e){return this.Us.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Zo(this.persistenceKey,e))}updateQueryState(e,t,n){this.Ws(e,t,n)}handleUserChange(e,t,n){t.forEach(s=>{this.$s(s)}),this.currentUser=e,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Gs(e)}notifyBundleLoaded(e){this.zs(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ss),this.removeItem(this.Cs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return j("SharedClientState","READ",e,t),t}setItem(e,t){j("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){j("SharedClientState","REMOVE",e),this.storage.removeItem(e)}bs(e){const t=e;if(t.storageArea===this.storage){if(j("SharedClientState","EVENT",t.key,t.newValue),t.key===this.Cs)return void ye("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.li.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.Ms.test(t.key)){if(t.newValue==null){const n=this.js(t.key);return this.Hs(n,null)}{const n=this.Js(t.key,t.newValue);if(n)return this.Hs(n.clientId,n)}}else if(this.xs.test(t.key)){if(t.newValue!==null){const n=this.Ys(t.key,t.newValue);if(n)return this.Zs(n)}}else if(this.Os.test(t.key)){if(t.newValue!==null){const n=this.Xs(t.key,t.newValue);if(n)return this.eo(n)}}else if(t.key===this.Ns){if(t.newValue!==null){const n=this.ks(t.newValue);if(n)return this.qs(n)}}else if(t.key===this.Fs){const n=function(i){let o=$e.oe;if(i!=null)try{const c=JSON.parse(i);K(typeof c=="number"),o=c}catch(c){ye("SharedClientState","Failed to read sequence number from WebStorage",c)}return o}(t.newValue);n!==$e.oe&&this.sequenceNumberHandler(n)}else if(t.key===this.Ls){const n=this.no(t.newValue);await Promise.all(n.map(s=>this.syncEngine.ro(s)))}}}else this.vs.push(t)})}}get Us(){return this.Ds.get(this.ws)}Bs(){this.setItem(this.Cs,this.Us.gs())}Ks(e,t,n){const s=new ji(this.currentUser,e,t,n),i=ch(this.persistenceKey,this.currentUser,e);this.setItem(i,s.gs())}$s(e){const t=ch(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Gs(e){const t={clientId:this.ws,onlineState:e};this.storage.setItem(this.Ns,JSON.stringify(t))}Ws(e,t,n){const s=Zo(this.persistenceKey,e),i=new Zr(e,t,n);this.setItem(s,i.gs())}zs(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Ls,t)}js(e){const t=this.Ms.exec(e);return t?t[1]:null}Js(e,t){const n=this.js(e);return Oi.fs(n,t)}Ys(e,t){const n=this.xs.exec(e),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return ji.fs(new Ve(i),s,t)}Xs(e,t){const n=this.Os.exec(e),s=Number(n[1]);return Zr.fs(s,t)}ks(e){return gc.fs(e)}no(e){return JSON.parse(e)}async Zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.io(e.batchId,e.state,e.error);j("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}eo(e){return this.syncEngine.so(e.targetId,e.state,e.error)}Hs(e,t){const n=t?this.Ds.insert(e,t):this.Ds.remove(e),s=this.Qs(this.Ds),i=this.Qs(n),o=[],c=[];return i.forEach(l=>{s.has(l)||o.push(l)}),s.forEach(l=>{i.has(l)||c.push(l)}),this.syncEngine.oo(o,c).then(()=>{this.Ds=n})}qs(e){this.Ds.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Qs(e){let t=rc();return e.forEach((n,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Yf{constructor(){this._o=new Va,this.ao={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this._o.ps(e),this.ao[e]||"not-current"}updateQueryState(e,t,n){this.ao[e]=t}removeLocalQueryTarget(e){this._o.ys(e)}isLocalQueryTarget(e){return this._o.activeTargetIds.has(e)}clearQueryState(e){delete this.ao[e]}getAllActiveQueryTargets(){return this._o.activeTargetIds}isActiveQueryTarget(e){return this._o.activeTargetIds.has(e)}start(){return this._o=new Va,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class uI{uo(e){}shutdown(){}}/**
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
 */class lh{constructor(){this.co=()=>this.lo(),this.ho=()=>this.Po(),this.To=[],this.Io()}uo(e){this.To.push(e)}shutdown(){window.removeEventListener("online",this.co),window.removeEventListener("offline",this.ho)}Io(){window.addEventListener("online",this.co),window.addEventListener("offline",this.ho)}lo(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.To)e(0)}Po(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.To)e(1)}static p(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ti=null;function ta(){return ti===null?ti=function(){return 268435456+Math.round(2147483648*Math.random())}():ti++,"0x"+ti.toString(16)}/**
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
 */const hI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class dI{constructor(e){this.Eo=e.Eo,this.Ao=e.Ao}Ro(e){this.Vo=e}mo(e){this.fo=e}po(e){this.yo=e}onMessage(e){this.wo=e}close(){this.Ao()}send(e){this.Eo(e)}So(){this.Vo()}bo(){this.fo()}Do(e){this.yo(e)}vo(e){this.wo(e)}}/**
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
 */const Ne="WebChannelConnection";class fI extends class{get Co(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Fo=n+"://"+t.host,this.Mo=`projects/${s}/databases/${i}`,this.xo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}Oo(t,n,s,i,o){const c=ta(),l=this.No(t,n.toUriEncodedString());j("RestConnection",`Sending RPC '${t}' ${c}:`,l,s);const d={"google-cloud-resource-prefix":this.Mo,"x-goog-request-params":this.xo};return this.Lo(d,i,o),this.Bo(t,l,d,s).then(m=>(j("RestConnection",`Received RPC '${t}' ${c}: `,m),m),m=>{throw ss("RestConnection",`RPC '${t}' ${c} failed with error: `,m,"url: ",l,"request:",s),m})}ko(t,n,s,i,o,c){return this.Oo(t,n,s,i,o)}Lo(t,n,s){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+dr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,o)=>t[o]=i),s&&s.headers.forEach((i,o)=>t[o]=i)}No(t,n){const s=hI[t];return`${this.Fo}/v1/${n}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Bo(e,t,n,s){const i=ta();return new Promise((o,c)=>{const l=new Td;l.setWithCredentials(!0),l.listenOnce(bd.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case oi.NO_ERROR:const m=l.getResponseJson();j(Ne,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(m)),o(m);break;case oi.TIMEOUT:j(Ne,`RPC '${e}' ${i} timed out`),c(new U(V.DEADLINE_EXCEEDED,"Request time out"));break;case oi.HTTP_ERROR:const p=l.getStatus();if(j(Ne,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const E=_==null?void 0:_.error;if(E&&E.status&&E.message){const R=function(k){const M=k.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(M)>=0?M:V.UNKNOWN}(E.status);c(new U(R,E.message))}else c(new U(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new U(V.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{j(Ne,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);j(Ne,`RPC '${e}' ${i} sending request:`,s),l.send(t,"POST",d,n,15)})}qo(e,t,n){const s=ta(),i=[this.Fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Sd(),c=xd(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Lo(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;const m=i.join("");j(Ne,`Creating RPC '${e}' stream ${s}: ${m}`,l);const p=o.createWebChannel(m,l);let _=!1,E=!1;const R=new dI({Eo:k=>{E?j(Ne,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(_||(j(Ne,`Opening RPC '${e}' stream ${s} transport.`),p.open(),_=!0),j(Ne,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},Ao:()=>p.close()}),C=(k,M,L)=>{k.listen(M,N=>{try{L(N)}catch(D){setTimeout(()=>{throw D},0)}})};return C(p,$r.EventType.OPEN,()=>{E||(j(Ne,`RPC '${e}' stream ${s} transport opened.`),R.So())}),C(p,$r.EventType.CLOSE,()=>{E||(E=!0,j(Ne,`RPC '${e}' stream ${s} transport closed`),R.Do())}),C(p,$r.EventType.ERROR,k=>{E||(E=!0,ss(Ne,`RPC '${e}' stream ${s} transport errored:`,k),R.Do(new U(V.UNAVAILABLE,"The operation could not be completed")))}),C(p,$r.EventType.MESSAGE,k=>{var M;if(!E){const L=k.data[0];K(!!L);const N=L,D=(N==null?void 0:N.error)||((M=N[0])===null||M===void 0?void 0:M.error);if(D){j(Ne,`RPC '${e}' stream ${s} received error:`,D);const B=D.status;let W=function(v){const T=Ie[v];if(T!==void 0)return gf(T)}(B),w=D.message;W===void 0&&(W=V.INTERNAL,w="Unknown error status: "+B+" with message "+D.message),E=!0,R.Do(new U(W,w)),p.close()}else j(Ne,`RPC '${e}' stream ${s} received:`,L),R.vo(L)}}),C(c,Ad.STAT_EVENT,k=>{k.stat===pa.PROXY?j(Ne,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===pa.NOPROXY&&j(Ne,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.bo()},0),R}}/**
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
 */function Xf(){return typeof window<"u"?window:null}function mi(){return typeof document<"u"?document:null}/**
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
 */function oo(r){return new Ev(r,!0)}/**
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
 */class Zf{constructor(e,t,n=1e3,s=1.5,i=6e4){this.li=e,this.timerId=t,this.Qo=n,this.Ko=s,this.$o=i,this.Uo=0,this.Wo=null,this.Go=Date.now(),this.reset()}reset(){this.Uo=0}zo(){this.Uo=this.$o}jo(e){this.cancel();const t=Math.floor(this.Uo+this.Ho()),n=Math.max(0,Date.now()-this.Go),s=Math.max(0,t-n);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Uo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Wo=this.li.enqueueAfterDelay(this.timerId,s,()=>(this.Go=Date.now(),e())),this.Uo*=this.Ko,this.Uo<this.Qo&&(this.Uo=this.Qo),this.Uo>this.$o&&(this.Uo=this.$o)}Jo(){this.Wo!==null&&(this.Wo.skipDelay(),this.Wo=null)}cancel(){this.Wo!==null&&(this.Wo.cancel(),this.Wo=null)}Ho(){return(Math.random()-.5)*this.Uo}}/**
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
 */class em{constructor(e,t,n,s,i,o,c,l){this.li=e,this.Yo=n,this.Zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.Xo=0,this.e_=null,this.t_=null,this.stream=null,this.n_=0,this.r_=new Zf(e,t)}i_(){return this.state===1||this.state===5||this.s_()}s_(){return this.state===2||this.state===3}start(){this.n_=0,this.state!==4?this.auth():this.o_()}async stop(){this.i_()&&await this.close(0)}__(){this.state=0,this.r_.reset()}a_(){this.s_()&&this.e_===null&&(this.e_=this.li.enqueueAfterDelay(this.Yo,6e4,()=>this.u_()))}c_(e){this.l_(),this.stream.send(e)}async u_(){if(this.s_())return this.close(0)}l_(){this.e_&&(this.e_.cancel(),this.e_=null)}h_(){this.t_&&(this.t_.cancel(),this.t_=null)}async close(e,t){this.l_(),this.h_(),this.r_.cancel(),this.Xo++,e!==4?this.r_.reset():t&&t.code===V.RESOURCE_EXHAUSTED?(ye(t.toString()),ye("Using maximum backoff delay to prevent overloading the backend."),this.r_.zo()):t&&t.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.P_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.po(t)}P_(){}auth(){this.state=1;const e=this.T_(this.Xo),t=this.Xo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.Xo===t&&this.I_(n,s)},n=>{e(()=>{const s=new U(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.E_(s)})})}I_(e,t){const n=this.T_(this.Xo);this.stream=this.d_(e,t),this.stream.Ro(()=>{n(()=>this.listener.Ro())}),this.stream.mo(()=>{n(()=>(this.state=2,this.t_=this.li.enqueueAfterDelay(this.Zo,1e4,()=>(this.s_()&&(this.state=3),Promise.resolve())),this.listener.mo()))}),this.stream.po(s=>{n(()=>this.E_(s))}),this.stream.onMessage(s=>{n(()=>++this.n_==1?this.A_(s):this.onNext(s))})}o_(){this.state=5,this.r_.jo(async()=>{this.state=0,this.start()})}E_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}T_(e){return t=>{this.li.enqueueAndForget(()=>this.Xo===e?t():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mI extends em{constructor(e,t,n,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}d_(e,t){return this.connection.qo("Listen",e,t)}A_(e){return this.onNext(e)}onNext(e){this.r_.reset();const t=Av(this.serializer,e),n=function(i){if(!("targetChange"in i))return H.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?H.min():o.readTime?Ue(o.readTime):H.min()}(e);return this.listener.R_(t,n)}V_(e){const t={};t.database=Sa(this.serializer),t.addTarget=function(i,o){let c;const l=o.target;if(c=xi(l)?{documents:bf(i,l)}:{query:Af(i,l).ct},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=vf(i,o.resumeToken);const d=Aa(i,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(H.min())>0){c.readTime=rr(i,o.snapshotVersion.toTimestamp());const d=Aa(i,o.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const n=Sv(this.serializer,e);n&&(t.labels=n),this.c_(t)}m_(e){const t={};t.database=Sa(this.serializer),t.removeTarget=e,this.c_(t)}}class pI extends em{constructor(e,t,n,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,s,o),this.serializer=i}get f_(){return this.n_>0}start(){this.lastStreamToken=void 0,super.start()}P_(){this.f_&&this.g_([])}d_(e,t){return this.connection.qo("Write",e,t)}A_(e){return K(!!e.streamToken),this.lastStreamToken=e.streamToken,K(!e.writeResults||e.writeResults.length===0),this.listener.p_()}onNext(e){K(!!e.streamToken),this.lastStreamToken=e.streamToken,this.r_.reset();const t=xv(e.writeResults,e.commitTime),n=Ue(e.commitTime);return this.listener.y_(n,t)}w_(){const e={};e.database=Sa(this.serializer),this.c_(e)}g_(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>ki(this.serializer,n))};this.c_(t)}}/**
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
 */class gI extends class{}{constructor(e,t,n,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=s,this.S_=!1}b_(){if(this.S_)throw new U(V.FAILED_PRECONDITION,"The client has already been terminated.")}Oo(e,t,n,s){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Oo(e,xa(t,n),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(V.UNKNOWN,i.toString())})}ko(e,t,n,s,i){return this.b_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.ko(e,xa(t,n),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(V.UNKNOWN,o.toString())})}terminate(){this.S_=!0,this.connection.terminate()}}class _I{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.D_=0,this.v_=null,this.C_=!0}F_(){this.D_===0&&(this.M_("Unknown"),this.v_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.v_=null,this.x_("Backend didn't respond within 10 seconds."),this.M_("Offline"),Promise.resolve())))}O_(e){this.state==="Online"?this.M_("Unknown"):(this.D_++,this.D_>=1&&(this.N_(),this.x_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.M_("Offline")))}set(e){this.N_(),this.D_=0,e==="Online"&&(this.C_=!1),this.M_(e)}M_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}x_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.C_?(ye(t),this.C_=!1):j("OnlineStateTracker",t)}N_(){this.v_!==null&&(this.v_.cancel(),this.v_=null)}}/**
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
 */class yI{constructor(e,t,n,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.L_=[],this.B_=new Map,this.k_=new Set,this.q_=[],this.Q_=i,this.Q_.uo(o=>{n.enqueueAndForget(async()=>{Tn(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=G(l);d.k_.add(4),await As(d),d.K_.set("Unknown"),d.k_.delete(4),await ao(d)}(this))})}),this.K_=new _I(n,s)}}async function ao(r){if(Tn(r))for(const e of r.q_)await e(!0)}async function As(r){for(const e of r.q_)await e(!1)}function co(r,e){const t=G(r);t.B_.has(e.targetId)||(t.B_.set(e.targetId,e),vc(t)?yc(t):gr(t).s_()&&_c(t,e))}function ir(r,e){const t=G(r),n=gr(t);t.B_.delete(e),n.s_()&&tm(t,e),t.B_.size===0&&(n.s_()?n.a_():Tn(t)&&t.K_.set("Unknown"))}function _c(r,e){if(r.U_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(H.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}gr(r).V_(e)}function tm(r,e){r.U_.xe(e),gr(r).m_(e)}function yc(r){r.U_=new yv({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>r.B_.get(e)||null,nt:()=>r.datastore.serializer.databaseId}),gr(r).start(),r.K_.F_()}function vc(r){return Tn(r)&&!gr(r).i_()&&r.B_.size>0}function Tn(r){return G(r).k_.size===0}function nm(r){r.U_=void 0}async function vI(r){r.K_.set("Online")}async function II(r){r.B_.forEach((e,t)=>{_c(r,e)})}async function wI(r,e){nm(r),vc(r)?(r.K_.O_(e),yc(r)):r.K_.set("Unknown")}async function EI(r,e,t){if(r.K_.set("Online"),e instanceof yf&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.B_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.B_.delete(c),s.U_.removeTarget(c))}(r,e)}catch(n){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Mi(r,n)}else if(e instanceof fi?r.U_.$e(e):e instanceof _f?r.U_.Je(e):r.U_.Ge(e),!t.isEqual(H.min()))try{const n=await Hf(r.localStore);t.compareTo(n)>=0&&await function(i,o){const c=i.U_.it(o);return c.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const m=i.B_.get(d);m&&i.B_.set(d,m.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,d)=>{const m=i.B_.get(l);if(!m)return;i.B_.set(l,m.withResumeToken(ve.EMPTY_BYTE_STRING,m.snapshotVersion)),tm(i,l);const p=new ct(m.target,l,d,m.sequenceNumber);_c(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(r,t)}catch(n){j("RemoteStore","Failed to raise snapshot:",n),await Mi(r,n)}}async function Mi(r,e,t){if(!Ht(e))throw e;r.k_.add(1),await As(r),r.K_.set("Offline"),t||(t=()=>Hf(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await t(),r.k_.delete(1),await ao(r)})}function rm(r,e){return e().catch(t=>Mi(r,t,e))}async function pr(r){const e=G(r),t=zt(e);let n=e.L_.length>0?e.L_[e.L_.length-1].batchId:-1;for(;TI(e);)try{const s=await lI(e.localStore,n);if(s===null){e.L_.length===0&&t.a_();break}n=s.batchId,bI(e,s)}catch(s){await Mi(e,s)}sm(e)&&im(e)}function TI(r){return Tn(r)&&r.L_.length<10}function bI(r,e){r.L_.push(e);const t=zt(r);t.s_()&&t.f_&&t.g_(e.mutations)}function sm(r){return Tn(r)&&!zt(r).i_()&&r.L_.length>0}function im(r){zt(r).start()}async function AI(r){zt(r).w_()}async function xI(r){const e=zt(r);for(const t of r.L_)e.g_(t.mutations)}async function SI(r,e,t){const n=r.L_.shift(),s=oc.from(n,e,t);await rm(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await pr(r)}async function RI(r,e){e&&zt(r).f_&&await async function(n,s){if(function(o){return pv(o)&&o!==V.ABORTED}(s.code)){const i=n.L_.shift();zt(n).__(),await rm(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pr(n)}}(r,e),sm(r)&&im(r)}async function uh(r,e){const t=G(r);t.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const n=Tn(t);t.k_.add(3),await As(t),n&&t.K_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.k_.delete(3),await ao(t)}async function Da(r,e){const t=G(r);e?(t.k_.delete(2),await ao(t)):e||(t.k_.add(2),await As(t),t.K_.set("Unknown"))}function gr(r){return r.W_||(r.W_=function(t,n,s){const i=G(t);return i.b_(),new mI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Ro:vI.bind(null,r),mo:II.bind(null,r),po:wI.bind(null,r),R_:EI.bind(null,r)}),r.q_.push(async e=>{e?(r.W_.__(),vc(r)?yc(r):r.K_.set("Unknown")):(await r.W_.stop(),nm(r))})),r.W_}function zt(r){return r.G_||(r.G_=function(t,n,s){const i=G(t);return i.b_(),new pI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Ro:()=>Promise.resolve(),mo:AI.bind(null,r),po:RI.bind(null,r),p_:xI.bind(null,r),y_:SI.bind(null,r)}),r.q_.push(async e=>{e?(r.G_.__(),await pr(r)):(await r.G_.stop(),r.L_.length>0&&(j("RemoteStore",`Stopping write stream with ${r.L_.length} pending writes`),r.L_=[]))})),r.G_}/**
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
 */class Ic{constructor(e,t,n,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new jt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,s,i){const o=Date.now()+n,c=new Ic(e,t,o,s,i);return c.start(n),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wc(r,e){if(ye("AsyncQueue",`${e}: ${r}`),Ht(r))return new U(V.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class zn{static emptySet(e){return new zn(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||q.comparator(t.key,n.key):(t,n)=>q.comparator(t.key,n.key),this.keyedMap=zr(),this.sortedSet=new ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new zn;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class hh{constructor(){this.z_=new ue(q.comparator)}track(e){const t=e.doc.key,n=this.z_.get(t);n?e.type!==0&&n.type===3?this.z_=this.z_.insert(t,e):e.type===3&&n.type!==1?this.z_=this.z_.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.z_=this.z_.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.z_=this.z_.remove(t):e.type===1&&n.type===2?this.z_=this.z_.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.z_=this.z_.insert(t,{type:2,doc:e.doc}):$():this.z_=this.z_.insert(t,e)}j_(){const e=[];return this.z_.inorderTraversal((t,n)=>{e.push(n)}),e}}class or{constructor(e,t,n,s,i,o,c,l,d){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,n,s,i){const o=[];return t.forEach(c=>{o.push({type:0,doc:c})}),new or(e,t,zn.emptySet(t),o,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==n[s].type||!t[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
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
 */class kI{constructor(){this.H_=void 0,this.J_=[]}Y_(){return this.J_.some(e=>e.Z_())}}class PI{constructor(){this.queries=dh(),this.onlineState="Unknown",this.X_=new Set}terminate(){(function(t,n){const s=G(t),i=s.queries;s.queries=dh(),i.forEach((o,c)=>{for(const l of c.J_)l.onError(n)})})(this,new U(V.ABORTED,"Firestore shutting down"))}}function dh(){return new _t(r=>ef(r),Zi)}async function CI(r,e){const t=G(r);let n=3;const s=e.query;let i=t.queries.get(s);i?!i.Y_()&&e.Z_()&&(n=2):(i=new kI,n=e.Z_()?0:1);try{switch(n){case 0:i.H_=await t.onListen(s,!0);break;case 1:i.H_=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(o){const c=wc(o,`Initialization of query '${Mn(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.J_.push(e),e.ea(t.onlineState),i.H_&&e.ta(i.H_)&&Ec(t)}async function NI(r,e){const t=G(r),n=e.query;let s=3;const i=t.queries.get(n);if(i){const o=i.J_.indexOf(e);o>=0&&(i.J_.splice(o,1),i.J_.length===0?s=e.Z_()?0:1:!i.Y_()&&e.Z_()&&(s=2))}switch(s){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function VI(r,e){const t=G(r);let n=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const c of o.J_)c.ta(s)&&(n=!0);o.H_=s}}n&&Ec(t)}function DI(r,e,t){const n=G(r),s=n.queries.get(e);if(s)for(const i of s.J_)i.onError(t);n.queries.delete(e)}function Ec(r){r.X_.forEach(e=>{e.next()})}var ja,fh;(fh=ja||(ja={})).na="default",fh.Cache="cache";class jI{constructor(e,t,n){this.query=e,this.ra=t,this.ia=!1,this.sa=null,this.onlineState="Unknown",this.options=n||{}}ta(e){if(!this.options.includeMetadataChanges){const n=[];for(const s of e.docChanges)s.type!==3&&n.push(s);e=new or(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ia?this.oa(e)&&(this.ra.next(e),t=!0):this._a(e,this.onlineState)&&(this.aa(e),t=!0),this.sa=e,t}onError(e){this.ra.error(e)}ea(e){this.onlineState=e;let t=!1;return this.sa&&!this.ia&&this._a(this.sa,e)&&(this.aa(this.sa),t=!0),t}_a(e,t){if(!e.fromCache||!this.Z_())return!0;const n=t!=="Offline";return(!this.options.ua||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}oa(e){if(e.docChanges.length>0)return!0;const t=this.sa&&this.sa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}aa(e){e=or.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ia=!0,this.ra.next(e)}Z_(){return this.options.source!==ja.Cache}}/**
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
 */class om{constructor(e){this.key=e}}class am{constructor(e){this.key=e}}class OI{constructor(e,t){this.query=e,this.da=t,this.Aa=null,this.hasCachedResults=!1,this.current=!1,this.Ra=Z(),this.mutatedKeys=Z(),this.Va=nf(e),this.ma=new zn(this.Va)}get fa(){return this.da}ga(e,t){const n=t?t.pa:new hh,s=t?t.ma:this.ma;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((m,p)=>{const _=s.get(m),E=Es(this.query,p)?p:null,R=!!_&&this.mutatedKeys.has(_.key),C=!!E&&(E.hasLocalMutations||this.mutatedKeys.has(E.key)&&E.hasCommittedMutations);let k=!1;_&&E?_.data.isEqual(E.data)?R!==C&&(n.track({type:3,doc:E}),k=!0):this.ya(_,E)||(n.track({type:2,doc:E}),k=!0,(l&&this.Va(E,l)>0||d&&this.Va(E,d)<0)&&(c=!0)):!_&&E?(n.track({type:0,doc:E}),k=!0):_&&!E&&(n.track({type:1,doc:_}),k=!0,(l||d)&&(c=!0)),k&&(E?(o=o.add(E),i=C?i.add(m):i.delete(m)):(o=o.delete(m),i=i.delete(m)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const m=this.query.limitType==="F"?o.last():o.first();o=o.delete(m.key),i=i.delete(m.key),n.track({type:1,doc:m})}return{ma:o,pa:n,ss:c,mutatedKeys:i}}ya(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,s){const i=this.ma;this.ma=e.ma,this.mutatedKeys=e.mutatedKeys;const o=e.pa.j_();o.sort((m,p)=>function(E,R){const C=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return C(E)-C(R)}(m.type,p.type)||this.Va(m.doc,p.doc)),this.wa(n),s=s!=null&&s;const c=t&&!s?this.Sa():[],l=this.Ra.size===0&&this.current&&!s?1:0,d=l!==this.Aa;return this.Aa=l,o.length!==0||d?{snapshot:new or(this.query,e.ma,i,o,e.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),ba:c}:{ba:c}}ea(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ma:this.ma,pa:new hh,mutatedKeys:this.mutatedKeys,ss:!1},!1)):{ba:[]}}Da(e){return!this.da.has(e)&&!!this.ma.has(e)&&!this.ma.get(e).hasLocalMutations}wa(e){e&&(e.addedDocuments.forEach(t=>this.da=this.da.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.da=this.da.delete(t)),this.current=e.current)}Sa(){if(!this.current)return[];const e=this.Ra;this.Ra=Z(),this.ma.forEach(n=>{this.Da(n.key)&&(this.Ra=this.Ra.add(n.key))});const t=[];return e.forEach(n=>{this.Ra.has(n)||t.push(new am(n))}),this.Ra.forEach(n=>{e.has(n)||t.push(new om(n))}),t}va(e){this.da=e.ds,this.Ra=Z();const t=this.ga(e.documents);return this.applyChanges(t,!0)}Ca(){return or.fromInitialDocuments(this.query,this.ma,this.mutatedKeys,this.Aa===0,this.hasCachedResults)}}class MI{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class LI{constructor(e){this.key=e,this.Fa=!1}}class FI{constructor(e,t,n,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ma={},this.xa=new _t(c=>ef(c),Zi),this.Oa=new Map,this.Na=new Set,this.La=new ue(q.comparator),this.Ba=new Map,this.ka=new dc,this.qa={},this.Qa=new Map,this.Ka=In.Qn(),this.onlineState="Unknown",this.$a=void 0}get isPrimaryClient(){return this.$a===!0}}async function UI(r,e,t=!0){const n=lo(r);let s;const i=n.xa.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Ca()):s=await cm(n,e,t,!0),s}async function BI(r,e){const t=lo(r);await cm(t,e,!0,!1)}async function cm(r,e,t,n){const s=await Di(r.localStore,He(e)),i=s.targetId,o=r.sharedClientState.addLocalQueryTarget(i,t);let c;return n&&(c=await Tc(r,e,i,o==="current",s.resumeToken)),r.isPrimaryClient&&t&&co(r.remoteStore,s),c}async function Tc(r,e,t,n,s){r.Ua=(p,_,E)=>async function(C,k,M,L){let N=k.view.ga(M);N.ss&&(N=await Na(C.localStore,k.query,!1).then(({documents:w})=>k.view.ga(w,N)));const D=L&&L.targetChanges.get(k.targetId),B=L&&L.targetMismatches.get(k.targetId)!=null,W=k.view.applyChanges(N,C.isPrimaryClient,D,B);return Oa(C,k.targetId,W.ba),W.snapshot}(r,p,_,E);const i=await Na(r.localStore,e,!0),o=new OI(e,i.ds),c=o.ga(i.documents),l=bs.createSynthesizedTargetChangeForCurrentChange(t,n&&r.onlineState!=="Offline",s),d=o.applyChanges(c,r.isPrimaryClient,l);Oa(r,t,d.ba);const m=new MI(e,t,o);return r.xa.set(e,m),r.Oa.has(t)?r.Oa.get(t).push(e):r.Oa.set(t,[e]),d.snapshot}async function qI(r,e,t){const n=G(r),s=n.xa.get(e),i=n.Oa.get(s.targetId);if(i.length>1)return n.Oa.set(s.targetId,i.filter(o=>!Zi(o,e))),void n.xa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await sr(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),t&&ir(n.remoteStore,s.targetId),ar(n,s.targetId)}).catch(Kt)):(ar(n,s.targetId),await sr(n.localStore,s.targetId,!0))}async function $I(r,e){const t=G(r),n=t.xa.get(e),s=t.Oa.get(n.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ir(t.remoteStore,n.targetId))}async function zI(r,e,t){const n=Sc(r);try{const s=await function(o,c){const l=G(o),d=pe.now(),m=c.reduce((E,R)=>E.add(R.key),Z());let p,_;return l.persistence.runTransaction("Locally write mutations","readwrite",E=>{let R=Ke(),C=Z();return l.hs.getEntries(E,m).next(k=>{R=k,R.forEach((M,L)=>{L.isValidDocument()||(C=C.add(M))})}).next(()=>l.localDocuments.getOverlayedDocuments(E,R)).next(k=>{p=k;const M=[];for(const L of c){const N=fv(L,p.get(L.key).overlayedDocument);N!=null&&M.push(new yt(L.key,N,zd(N.value.mapValue),Fe.exists(!0)))}return l.mutationQueue.addMutationBatch(E,d,M,c)}).next(k=>{_=k;const M=k.applyToLocalDocumentSet(p,C);return l.documentOverlayCache.saveOverlays(E,k.batchId,M)})}).then(()=>({batchId:_.batchId,changes:sf(p)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let d=o.qa[o.currentUser.toKey()];d||(d=new ue(X)),d=d.insert(c,l),o.qa[o.currentUser.toKey()]=d}(n,s.batchId,t),await Qt(n,s.changes),await pr(n.remoteStore)}catch(s){const i=wc(s,"Failed to persist write");t.reject(i)}}async function lm(r,e){const t=G(r);try{const n=await aI(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.Ba.get(i);o&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Fa=!0:s.modifiedDocuments.size>0?K(o.Fa):s.removedDocuments.size>0&&(K(o.Fa),o.Fa=!1))}),await Qt(t,n,e)}catch(n){await Kt(n)}}function mh(r,e,t){const n=G(r);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const s=[];n.xa.forEach((i,o)=>{const c=o.view.ea(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=G(o);l.onlineState=c;let d=!1;l.queries.forEach((m,p)=>{for(const _ of p.J_)_.ea(c)&&(d=!0)}),d&&Ec(l)}(n.eventManager,e),s.length&&n.Ma.R_(s),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function GI(r,e,t){const n=G(r);n.sharedClientState.updateQueryState(e,"rejected",t);const s=n.Ba.get(e),i=s&&s.key;if(i){let o=new ue(q.comparator);o=o.insert(i,_e.newNoDocument(i,H.min()));const c=Z().add(i),l=new Ts(H.min(),new Map,new ue(X),o,c);await lm(n,l),n.La=n.La.remove(i),n.Ba.delete(e),xc(n)}else await sr(n.localStore,e,!1).then(()=>ar(n,e,t)).catch(Kt)}async function KI(r,e){const t=G(r),n=e.batch.batchId;try{const s=await oI(t.localStore,e);Ac(t,n,null),bc(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await Qt(t,s)}catch(s){await Kt(s)}}async function HI(r,e,t){const n=G(r);try{const s=await function(o,c){const l=G(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let m;return l.mutationQueue.lookupMutationBatch(d,c).next(p=>(K(p!==null),m=p.keys(),l.mutationQueue.removeMutationBatch(d,p))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,m,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,m)).next(()=>l.localDocuments.getDocuments(d,m))})}(n.localStore,e);Ac(n,e,t),bc(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await Qt(n,s)}catch(s){await Kt(s)}}function bc(r,e){(r.Qa.get(e)||[]).forEach(t=>{t.resolve()}),r.Qa.delete(e)}function Ac(r,e,t){const n=G(r);let s=n.qa[n.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),n.qa[n.currentUser.toKey()]=s}}function ar(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const n of r.Oa.get(e))r.xa.delete(n),t&&r.Ma.Wa(n,t);r.Oa.delete(e),r.isPrimaryClient&&r.ka.yr(e).forEach(n=>{r.ka.containsKey(n)||um(r,n)})}function um(r,e){r.Na.delete(e.path.canonicalString());const t=r.La.get(e);t!==null&&(ir(r.remoteStore,t),r.La=r.La.remove(e),r.Ba.delete(t),xc(r))}function Oa(r,e,t){for(const n of t)n instanceof om?(r.ka.addReference(n.key,e),WI(r,n)):n instanceof am?(j("SyncEngine","Document no longer in limbo: "+n.key),r.ka.removeReference(n.key,e),r.ka.containsKey(n.key)||um(r,n.key)):$()}function WI(r,e){const t=e.key,n=t.path.canonicalString();r.La.get(t)||r.Na.has(n)||(j("SyncEngine","New document in limbo: "+t),r.Na.add(n),xc(r))}function xc(r){for(;r.Na.size>0&&r.La.size<r.maxConcurrentLimboResolutions;){const e=r.Na.values().next().value;r.Na.delete(e);const t=new q(se.fromString(e)),n=r.Ka.next();r.Ba.set(n,new LI(t)),r.La=r.La.insert(t,n),co(r.remoteStore,new ct(He(Xi(t.path)),n,"TargetPurposeLimboResolution",$e.oe))}}async function Qt(r,e,t){const n=G(r),s=[],i=[],o=[];n.xa.isEmpty()||(n.xa.forEach((c,l)=>{o.push(n.Ua(l,e,t).then(d=>{var m;if((d||t)&&n.isPrimaryClient){const p=d?!d.fromCache:(m=t==null?void 0:t.targetChanges.get(l.targetId))===null||m===void 0?void 0:m.current;n.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(d){s.push(d);const p=pc.zi(l.targetId,d);i.push(p)}}))}),await Promise.all(o),n.Ma.R_(s),await async function(l,d){const m=G(l);try{await m.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>A.forEach(d,_=>A.forEach(_.Wi,E=>m.persistence.referenceDelegate.addReference(p,_.targetId,E)).next(()=>A.forEach(_.Gi,E=>m.persistence.referenceDelegate.removeReference(p,_.targetId,E)))))}catch(p){if(!Ht(p))throw p;j("LocalStore","Failed to update sequence numbers: "+p)}for(const p of d){const _=p.targetId;if(!p.fromCache){const E=m.us.get(_),R=E.snapshotVersion,C=E.withLastLimboFreeSnapshotVersion(R);m.us=m.us.insert(_,C)}}}(n.localStore,i))}async function QI(r,e){const t=G(r);if(!t.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const n=await Kf(t.localStore,e);t.currentUser=e,function(i,o){i.Qa.forEach(c=>{c.forEach(l=>{l.reject(new U(V.CANCELLED,o))})}),i.Qa.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await Qt(t,n.Ts)}}function JI(r,e){const t=G(r),n=t.Ba.get(e);if(n&&n.Fa)return Z().add(n.key);{let s=Z();const i=t.Oa.get(e);if(!i)return s;for(const o of i){const c=t.xa.get(o);s=s.unionWith(c.view.fa)}return s}}async function YI(r,e){const t=G(r),n=await Na(t.localStore,e.query,!0),s=e.view.va(n);return t.isPrimaryClient&&Oa(t,e.targetId,s.ba),s}async function XI(r,e){const t=G(r);return Qf(t.localStore,e).then(n=>Qt(t,n))}async function ZI(r,e,t,n){const s=G(r),i=await function(c,l){const d=G(c),m=G(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",p=>m.On(p,l).next(_=>_?d.localDocuments.getDocuments(p,_):A.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await pr(s.remoteStore):t==="acknowledged"||t==="rejected"?(Ac(s,e,n||null),bc(s,e),function(c,l){G(G(c).mutationQueue).Ln(l)}(s.localStore,e)):$(),await Qt(s,i)):j("SyncEngine","Cannot apply mutation batch with id: "+e)}async function ew(r,e){const t=G(r);if(lo(t),Sc(t),e===!0&&t.$a!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),s=await ph(t,n.toArray());t.$a=!0,await Da(t.remoteStore,!0);for(const i of s)co(t.remoteStore,i)}else if(e===!1&&t.$a!==!1){const n=[];let s=Promise.resolve();t.Oa.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?n.push(o):s=s.then(()=>(ar(t,o),sr(t.localStore,o,!0))),ir(t.remoteStore,o)}),await s,await ph(t,n),function(o){const c=G(o);c.Ba.forEach((l,d)=>{ir(c.remoteStore,d)}),c.ka.wr(),c.Ba=new Map,c.La=new ue(q.comparator)}(t),t.$a=!1,await Da(t.remoteStore,!1)}}async function ph(r,e,t){const n=G(r),s=[],i=[];for(const o of e){let c;const l=n.Oa.get(o);if(l&&l.length!==0){c=await Di(n.localStore,He(l[0]));for(const d of l){const m=n.xa.get(d),p=await YI(n,m);p.snapshot&&i.push(p.snapshot)}}else{const d=await Wf(n.localStore,o);c=await Di(n.localStore,d),await Tc(n,hm(d),o,!1,c.resumeToken)}s.push(c)}return n.Ma.R_(i),s}function hm(r){return Xd(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function tw(r){return function(t){return G(G(t).persistence).$i()}(G(r).localStore)}async function nw(r,e,t,n){const s=G(r);if(s.$a)return void j("SyncEngine","Ignoring unexpected query state notification.");const i=s.Oa.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Qf(s.localStore,tf(i[0])),c=Ts.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ve.EMPTY_BYTE_STRING);await Qt(s,o,c);break}case"rejected":await sr(s.localStore,e,!0),ar(s,e,n);break;default:$()}}async function rw(r,e,t){const n=lo(r);if(n.$a){for(const s of e){if(n.Oa.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){j("SyncEngine","Adding an already active target "+s);continue}const i=await Wf(n.localStore,s),o=await Di(n.localStore,i);await Tc(n,hm(i),o.targetId,!1,o.resumeToken),co(n.remoteStore,o)}for(const s of t)n.Oa.has(s)&&await sr(n.localStore,s,!1).then(()=>{ir(n.remoteStore,s),ar(n,s)}).catch(Kt)}}function lo(r){const e=G(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=lm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JI.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GI.bind(null,e),e.Ma.R_=VI.bind(null,e.eventManager),e.Ma.Wa=DI.bind(null,e.eventManager),e}function Sc(r){const e=G(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=KI.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=HI.bind(null,e),e}class ms{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oo(e.databaseInfo.databaseId),this.sharedClientState=this.za(e),this.persistence=this.ja(e),await this.persistence.start(),this.localStore=this.Ha(e),this.gcScheduler=this.Ja(e,this.localStore),this.indexBackfillerScheduler=this.Ya(e,this.localStore)}Ja(e,t){return null}Ya(e,t){return null}Ha(e){return Gf(this.persistence,new zf,e.initialUser,this.serializer)}ja(e){return new fc(io.ei,this.serializer)}za(e){return new Yf}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ms.provider={build:()=>new ms};class sw extends ms{constructor(e){super(),this.cacheSizeBytes=e}Ja(e,t){K(this.persistence.referenceDelegate instanceof Vi);const n=this.persistence.referenceDelegate.garbageCollector;return new Lf(n,e.asyncQueue,t)}ja(e){const t=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new fc(n=>Vi.ei(n,t),this.serializer)}}class dm extends ms{constructor(e,t,n){super(),this.Za=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Za.initialize(this,e),await Sc(this.Za.syncEngine),await pr(this.Za.remoteStore),await this.persistence.Si(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Ha(e){return Gf(this.persistence,new zf,e.initialUser,this.serializer)}Ja(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Lf(n,e.asyncQueue,t)}Ya(e,t){const n=new Ty(t,this.persistence);return new Ey(e.asyncQueue,n)}ja(e){const t=$f(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?De.withCacheSize(this.cacheSizeBytes):De.DEFAULT;return new mc(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Xf(),mi(),this.serializer,this.sharedClientState,!!this.forceOwnership)}za(e){return new Yf}}class iw extends dm{constructor(e,t){super(e,t,!1),this.Za=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Za.syncEngine;this.sharedClientState instanceof ea&&(this.sharedClientState.syncEngine={io:ZI.bind(null,t),so:nw.bind(null,t),oo:rw.bind(null,t),$i:tw.bind(null,t),ro:XI.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Si(async n=>{await ew(this.Za.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}za(e){const t=Xf();if(!ea.p(t))throw new U(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=$f(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new ea(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class ps{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>mh(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=QI.bind(null,this.syncEngine),await Da(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PI}()}createDatastore(e){const t=oo(e.databaseInfo.databaseId),n=function(i){return new fI(i)}(e.databaseInfo);return function(i,o,c,l){return new gI(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,s,i,o,c){return new yI(n,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,t=>mh(this.syncEngine,t,0),function(){return lh.p()?new lh:new uI}())}createSyncEngine(e,t){return function(s,i,o,c,l,d,m){const p=new FI(s,i,o,c,l,d);return m&&(p.$a=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=G(s);j("RemoteStore","RemoteStore shutting down."),i.k_.add(5),await As(i),i.Q_.shutdown(),i.K_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ps.provider={build:()=>new ps};/**
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
 */class ow{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Xa(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Xa(this.observer.error,e):ye("Uncaught Error in snapshot listener:",e.toString()))}eu(){this.muted=!0}Xa(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class aw{constructor(e,t,n,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=s,this.user=Ve.UNAUTHENTICATED,this.clientId=Rd.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,async o=>{j("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(n,o=>(j("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=wc(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function na(r,e){r.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let n=t.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Kf(e.localStore,s),n=s)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function gh(r,e){r.asyncQueue.verifyOperationInProgress();const t=await cw(r);j("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener(n=>uh(e.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>uh(e.remoteStore,s)),r._onlineComponents=e}async function cw(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await na(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;ss("Error using user provided cache. Falling back to memory cache: "+t),await na(r,new ms)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await na(r,new sw(void 0));return r._offlineComponents}async function fm(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await gh(r,r._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await gh(r,new ps))),r._onlineComponents}function lw(r){return fm(r).then(e=>e.syncEngine)}async function _h(r){const e=await fm(r),t=e.eventManager;return t.onListen=UI.bind(null,e.syncEngine),t.onUnlisten=qI.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=BI.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=$I.bind(null,e.syncEngine),t}/**
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
 */function mm(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const yh=new Map;/**
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
 */function pm(r,e,t){if(!t)throw new U(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function uw(r,e,t,n){if(e===!0&&n===!0)throw new U(V.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function vh(r){if(!q.isDocumentKey(r))throw new U(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function Ih(r){if(q.isDocumentKey(r))throw new U(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function uo(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":$()}function Mt(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new U(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=uo(r);throw new U(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}/**
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
 */class wh{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new U(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mm((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rc{constructor(e,t,n,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wh({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new U(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new U(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wh(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new dy;switch(n.type){case"firstParty":return new py(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new U(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=yh.get(t);n&&(j("ComponentProvider","Removing Datastore"),yh.delete(t),n.terminate())}(this),Promise.resolve()}}/**
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
 */class bn{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new bn(this.firestore,e,this._query)}}class Be{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Lt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}}class Lt extends bn{constructor(e,t,n){super(e,t,Xi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new q(e))}withConverter(e){return new Lt(this.firestore,e,this._path)}}function hw(r,e,...t){if(r=Ae(r),pm("collection","path",e),r instanceof Rc){const n=se.fromString(e,...t);return Ih(n),new Lt(r,null,n)}{if(!(r instanceof Be||r instanceof Lt))throw new U(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(se.fromString(e,...t));return Ih(n),new Lt(r.firestore,null,n)}}function _r(r,e,...t){if(r=Ae(r),arguments.length===1&&(e=Rd.newId()),pm("doc","path",e),r instanceof Rc){const n=se.fromString(e,...t);return vh(n),new Be(r,null,new q(n))}{if(!(r instanceof Be||r instanceof Lt))throw new U(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(se.fromString(e,...t));return vh(n),new Be(r.firestore,r instanceof Lt?r.converter:null,new q(n))}}/**
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
 */class Eh{constructor(e=Promise.resolve()){this.Iu=[],this.Eu=!1,this.du=[],this.Au=null,this.Ru=!1,this.Vu=!1,this.mu=[],this.r_=new Zf(this,"async_queue_retry"),this.fu=()=>{const n=mi();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.r_.Jo()},this.gu=e;const t=mi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.fu)}get isShuttingDown(){return this.Eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.pu(),this.yu(e)}enterRestrictedMode(e){if(!this.Eu){this.Eu=!0,this.Vu=e||!1;const t=mi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.fu)}}enqueue(e){if(this.pu(),this.Eu)return new Promise(()=>{});const t=new jt;return this.yu(()=>this.Eu&&this.Vu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Iu.push(e),this.wu()))}async wu(){if(this.Iu.length!==0){try{await this.Iu[0](),this.Iu.shift(),this.r_.reset()}catch(e){if(!Ht(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Iu.length>0&&this.r_.jo(()=>this.wu())}}yu(e){const t=this.gu.then(()=>(this.Ru=!0,e().catch(n=>{this.Au=n,this.Ru=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(n);throw ye("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.Ru=!1,n))));return this.gu=t,t}enqueueAfterDelay(e,t,n){this.pu(),this.mu.indexOf(e)>-1&&(t=0);const s=Ic.createAndSchedule(this,e,t,n,i=>this.Su(i));return this.du.push(s),s}pu(){this.Au&&$()}verifyOperationInProgress(){}async bu(){let e;do e=this.gu,await e;while(e!==this.gu)}Du(e){for(const t of this.du)if(t.timerId===e)return!0;return!1}vu(e){return this.bu().then(()=>{this.du.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.du)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.bu()})}Cu(e){this.mu.push(e)}Su(e){const t=this.du.indexOf(e);this.du.splice(t,1)}}function Th(r){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class cr extends Rc{constructor(e,t,n,s){super(e,t,n,s),this.type="firestore",this._queue=new Eh,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Eh(e),this._firestoreClient=void 0,await e}}}function dw(r,e,t){const n=Ja(r,"firestore");if(n.isInitialized(t)){const s=n.getImmediate({identifier:t}),i=n.getOptions(t);if(ns(i,e))return s;throw new U(V.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new U(V.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:e,instanceIdentifier:t})}function gm(r){if(r._terminated)throw new U(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||fw(r),r._firestoreClient}function fw(r){var e,t,n;const s=r._freezeSettings(),i=function(c,l,d,m){return new zy(c,l,d,m.host,m.ssl,m.experimentalForceLongPolling,m.experimentalAutoDetectLongPolling,mm(m.experimentalLongPollingOptions),m.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,s);r._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),r._firestoreClient=new aw(r._authCredentials,r._appCheckCredentials,r._queue,i,r._componentsProvider&&function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}}(r._componentsProvider))}/**
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
 */class lr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lr(ve.fromBase64String(e))}catch(t){throw new U(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new lr(ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ho{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new U(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class fo{constructor(e){this._methodName=e}}/**
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
 */class kc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return X(this._lat,e._lat)||X(this._long,e._long)}}/**
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
 */class Pc{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,s){if(n.length!==s.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const mw=/^__.*__$/;class pw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new yt(e,this.data,this.fieldMask,t,this.fieldTransforms):new mr(e,this.data,t,this.fieldTransforms)}}class _m{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new yt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ym(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class Cc{constructor(e,t,n,s,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.Fu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Mu(){return this.settings.Mu}xu(e){return new Cc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ou(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:n,Nu:!1});return s.Lu(e),s}Bu(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.xu({path:n,Nu:!1});return s.Fu(),s}ku(e){return this.xu({path:void 0,Nu:!0})}qu(e){return Li(e,this.settings.methodName,this.settings.Qu||!1,this.path,this.settings.Ku)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Fu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lu(this.path.get(e))}Lu(e){if(e.length===0)throw this.qu("Document fields must not be empty");if(ym(this.Mu)&&mw.test(e))throw this.qu('Document fields cannot begin and end with "__"')}}class gw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||oo(e)}$u(e,t,n,s=!1){return new Cc({Mu:e,methodName:t,Ku:n,path:me.emptyPath(),Nu:!1,Qu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Nc(r){const e=r._freezeSettings(),t=oo(r._databaseId);return new gw(r._databaseId,!!e.ignoreUndefinedProperties,t)}function _w(r,e,t,n,s,i={}){const o=r.$u(i.merge||i.mergeFields?2:0,e,t,s);Dc("Data must be an object, but it was:",o,n);const c=vm(n,o);let l,d;if(i.merge)l=new ze(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const m=[];for(const p of i.mergeFields){const _=Ma(e,p,t);if(!o.contains(_))throw new U(V.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);wm(m,_)||m.push(_)}l=new ze(m),d=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,d=o.fieldTransforms;return new pw(new je(c),l,d)}class mo extends fo{_toFieldTransform(e){if(e.Mu!==2)throw e.Mu===1?e.qu(`${this._methodName}() can only appear at the top level of your update data`):e.qu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof mo}}class Vc extends fo{_toFieldTransform(e){return new df(e.path,new er)}isEqual(e){return e instanceof Vc}}function yw(r,e,t,n){const s=r.$u(1,e,t);Dc("Data must be an object, but it was:",s,n);const i=[],o=je.empty();Wt(n,(l,d)=>{const m=jc(e,l,t);d=Ae(d);const p=s.Bu(m);if(d instanceof mo)i.push(m);else{const _=xs(d,p);_!=null&&(i.push(m),o.set(m,_))}});const c=new ze(i);return new _m(o,c,s.fieldTransforms)}function vw(r,e,t,n,s,i){const o=r.$u(1,e,t),c=[Ma(e,n,t)],l=[s];if(i.length%2!=0)throw new U(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)c.push(Ma(e,i[_])),l.push(i[_+1]);const d=[],m=je.empty();for(let _=c.length-1;_>=0;--_)if(!wm(d,c[_])){const E=c[_];let R=l[_];R=Ae(R);const C=o.Bu(E);if(R instanceof mo)d.push(E);else{const k=xs(R,C);k!=null&&(d.push(E),m.set(E,k))}}const p=new ze(d);return new _m(m,p,o.fieldTransforms)}function Iw(r,e,t,n=!1){return xs(t,r.$u(n?4:3,e))}function xs(r,e){if(Im(r=Ae(r)))return Dc("Unsupported field value:",e,r),vm(r,e);if(r instanceof fo)return function(n,s){if(!ym(s.Mu))throw s.qu(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.qu(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Nu&&e.Mu!==4)throw e.qu("Nested arrays are not supported");return function(n,s){const i=[];let o=0;for(const c of n){let l=xs(c,s.ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(r,e)}return function(n,s){if((n=Ae(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return av(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=pe.fromDate(n);return{timestampValue:rr(s.serializer,i)}}if(n instanceof pe){const i=new pe(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:rr(s.serializer,i)}}if(n instanceof kc)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof lr)return{bytesValue:vf(s.serializer,n._byteString)};if(n instanceof Be){const i=s.databaseId,o=n.firestore._databaseId;if(!o.isEqual(i))throw s.qu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:lc(n.firestore._databaseId||s.databaseId,n._key.path)}}if(n instanceof Pc)return function(o,c){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(l=>{if(typeof l!="number")throw c.qu("VectorValues must only contain numeric values.");return sc(c.serializer,l)})}}}}}}(n,s);throw s.qu(`Unsupported field value: ${uo(n)}`)}(r,e)}function vm(r,e){const t={};return Ud(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wt(r,(n,s)=>{const i=xs(s,e.Ou(n));i!=null&&(t[n]=i)}),{mapValue:{fields:t}}}function Im(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof pe||r instanceof kc||r instanceof lr||r instanceof Be||r instanceof fo||r instanceof Pc)}function Dc(r,e,t){if(!Im(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const n=uo(t);throw n==="an object"?e.qu(r+" a custom object"):e.qu(r+" "+n)}}function Ma(r,e,t){if((e=Ae(e))instanceof ho)return e._internalPath;if(typeof e=="string")return jc(r,e);throw Li("Field path arguments must be of type string or ",r,!1,void 0,t)}const ww=new RegExp("[~\\*/\\[\\]]");function jc(r,e,t){if(e.search(ww)>=0)throw Li(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new ho(...e.split("."))._internalPath}catch{throw Li(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Li(r,e,t,n,s){const i=n&&!n.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${n}`),o&&(l+=` in document ${s}`),l+=")"),new U(V.INVALID_ARGUMENT,c+r+l)}function wm(r,e){return r.some(t=>t.isEqual(e))}/**
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
 */class Em{constructor(e,t,n,s,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ew(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Oc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ew extends Em{data(){return super.data()}}function Oc(r,e){return typeof e=="string"?jc(r,e):e instanceof ho?e._internalPath:e._delegate._internalPath}/**
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
 */function Tw(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new U(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Mc{}class Tm extends Mc{}function bw(r,e,...t){let n=[];e instanceof Mc&&n.push(e),n=n.concat(t),function(i){const o=i.filter(l=>l instanceof Fc).length,c=i.filter(l=>l instanceof Lc).length;if(o>1||o>0&&c>0)throw new U(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Lc extends Tm{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Lc(e,t,n)}_apply(e){const t=this._parse(e);return bm(e._query,t),new bn(e.firestore,e.converter,Ta(e._query,t))}_parse(e){const t=Nc(e.firestore);return function(i,o,c,l,d,m,p){let _;if(d.isKeyField()){if(m==="array-contains"||m==="array-contains-any")throw new U(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${m}' queries on documentId().`);if(m==="in"||m==="not-in"){Ah(p,m);const E=[];for(const R of p)E.push(bh(l,i,R));_={arrayValue:{values:E}}}else _=bh(l,i,p)}else m!=="in"&&m!=="not-in"&&m!=="array-contains-any"||Ah(p,m),_=Iw(c,o,p,m==="in"||m==="not-in");return te.create(d,m,_)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Fc extends Mc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Fc(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:ie.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)bm(o,l),o=Ta(o,l)}(e._query,t),new bn(e.firestore,e.converter,Ta(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Uc extends Tm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Uc(e,t)}_apply(e){const t=function(s,i,o){if(s.startAt!==null)throw new U(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new U(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ds(i,o)}(e._query,this._field,this._direction);return new bn(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new fr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Aw(r,e="asc"){const t=e,n=Oc("orderBy",r);return Uc._create(n,t)}function bh(r,e,t){if(typeof(t=Ae(t))=="string"){if(t==="")throw new U(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zd(e)&&t.indexOf("/")!==-1)throw new U(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(se.fromString(t));if(!q.isDocumentKey(n))throw new U(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return us(r,new q(n))}if(t instanceof Be)return us(r,t._key);throw new U(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uo(t)}.`)}function Ah(r,e){if(!Array.isArray(r)||r.length===0)throw new U(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bm(r,e){const t=function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new U(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class xw{convertValue(e,t="none"){switch(qt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(mt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw $()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Wt(e,(s,i)=>{n[s]=this.convertValue(i,t)}),n}convertVectorValue(e){var t,n,s;const i=(s=(n=(t=e.fields)===null||t===void 0?void 0:t.value.arrayValue)===null||n===void 0?void 0:n.values)===null||s===void 0?void 0:s.map(o=>fe(o.doubleValue));return new Pc(i)}convertGeoPoint(e){return new kc(fe(e.latitude),fe(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ji(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(cs(e));default:return null}}convertTimestamp(e){const t=ft(e);return new pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=se.fromString(e);K(kf(n));const s=new gn(n.get(1),n.get(3)),i=new q(n.popFirst(5));return s.isEqual(t)||ye(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Sw(r,e,t){let n;return n=r?r.toFirestore(e):e,n}/**
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
 */class Hr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Am extends Em{constructor(e,t,n,s,i,o){super(e,t,n,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Oc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class pi extends Am{data(e={}){return super.data(e)}}class Rw{constructor(e,t,n,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Hr(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new pi(this._firestore,this._userDataWriter,n.key,n,new Hr(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new U(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new pi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Hr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new pi(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Hr(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,m=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),m=o.indexOf(c.doc.key)),{type:kw(c.type),doc:l,oldIndex:d,newIndex:m}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function kw(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}class xm extends xw{constructor(e){super(),this.firestore=e}convertBytes(e){return new lr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,t)}}function Pw(r,e,t){r=Mt(r,Be);const n=Mt(r.firestore,cr),s=Sw(r.converter,e);return Bc(n,[_w(Nc(n),"setDoc",r._key,s,r.converter!==null,t).toMutation(r._key,Fe.none())])}function Cw(r,e,t,...n){r=Mt(r,Be);const s=Mt(r.firestore,cr),i=Nc(s);let o;return o=typeof(e=Ae(e))=="string"||e instanceof ho?vw(i,"updateDoc",r._key,e,t,n):yw(i,"updateDoc",r._key,e),Bc(s,[o.toMutation(r._key,Fe.exists(!0))])}function Nw(r){return Bc(Mt(r.firestore,cr),[new no(r._key,Fe.none())])}function po(r,...e){var t,n,s;r=Ae(r);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Th(e[o])||(i=e[o],o++);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Th(e[o])){const p=e[o];e[o]=(t=p.next)===null||t===void 0?void 0:t.bind(p),e[o+1]=(n=p.error)===null||n===void 0?void 0:n.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,d,m;if(r instanceof Be)d=Mt(r.firestore,cr),m=Xi(r._key.path),l={next:p=>{e[o]&&e[o](Vw(d,r,p))},error:e[o+1],complete:e[o+2]};else{const p=Mt(r,bn);d=Mt(p.firestore,cr),m=p._query;const _=new xm(d);l={next:E=>{e[o]&&e[o](new Rw(d,_,p,E))},error:e[o+1],complete:e[o+2]},Tw(r._query)}return function(_,E,R,C){const k=new ow(C),M=new jI(E,k,R);return _.asyncQueue.enqueueAndForget(async()=>CI(await _h(_),M)),()=>{k.eu(),_.asyncQueue.enqueueAndForget(async()=>NI(await _h(_),M))}}(gm(d),m,c,l)}function Bc(r,e){return function(n,s){const i=new jt;return n.asyncQueue.enqueueAndForget(async()=>zI(await lw(n),s,i)),i.promise}(gm(r),e)}function Vw(r,e,t){const n=t.docs.get(e._key),s=new xm(r);return new Am(r,s,e._key,n,new Hr(t.hasPendingWrites,t.fromCache),e.converter)}class Dw{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=Lw(),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function jw(r){return new Dw(r)}class Ow{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ps.provider,this._offlineComponentProvider={build:t=>new dm(t,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class Mw{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=ps.provider,this._offlineComponentProvider={build:t=>new iw(t,e==null?void 0:e.cacheSizeBytes)}}}function Lw(r){return new Ow(void 0)}function Fw(){return new Mw}function Uw(){return new Vc("serverTimestamp")}(function(e,t=!0){(function(s){dr=s})(hr),Qn(new mn("firestore",(n,{instanceIdentifier:s,options:i})=>{const o=n.getProvider("app").getImmediate(),c=new cr(new fy(n.getProvider("auth-internal")),new _y(n.getProvider("app-check-internal")),function(d,m){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new U(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gn(d.options.projectId,m)}(o,s),o);return i=Object.assign({useFetchStreams:t},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Dt(_u,"4.7.5",e),Dt(_u,"4.7.5","esm2017")})();var Bw="firebase",qw="11.0.2";/**
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
 */Dt(Bw,qw,"app");function qc(r,e){var t={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.indexOf(n)<0&&(t[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(r);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(r,n[s])&&(t[n[s]]=r[n[s]]);return t}function Sm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $w=Sm,Rm=new vs("auth","Firebase",Sm());/**
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
 */const Fi=new Wa("@firebase/auth");function zw(r,...e){Fi.logLevel<=ee.WARN&&Fi.warn(`Auth (${hr}): ${r}`,...e)}function gi(r,...e){Fi.logLevel<=ee.ERROR&&Fi.error(`Auth (${hr}): ${r}`,...e)}/**
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
 */function st(r,...e){throw zc(r,...e)}function Ye(r,...e){return zc(r,...e)}function $c(r,e,t){const n=Object.assign(Object.assign({},$w()),{[e]:t});return new vs("auth","Firebase",n).create(e,{appName:r.name})}function Ft(r){return $c(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function km(r,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&st(r,"argument-error"),$c(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zc(r,...e){if(typeof r!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=r.name),r._errorFactory.create(t,...n)}return Rm.create(r,...e)}function J(r,e,...t){if(!r)throw zc(e,...t)}function lt(r){const e="INTERNAL ASSERTION FAILED: "+r;throw gi(e),new Error(e)}function pt(r,e){r||lt(e)}/**
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
 */function La(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function Gw(){return xh()==="http:"||xh()==="https:"}function xh(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
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
 */function Kw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gw()||Kg()||"connection"in navigator)?navigator.onLine:!0}function Hw(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class Ss{constructor(e,t){this.shortDelay=e,this.longDelay=t,pt(t>e,"Short delay should be less than long delay!"),this.isMobile=$g()||Hg()}get(){return Kw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Gc(r,e){pt(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Pm{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;lt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;lt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;lt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ww={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Qw=new Ss(3e4,6e4);function Kc(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function yr(r,e,t,n,s={}){return Cm(r,s,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const c=Is(Object.assign({key:r.config.apiKey},o)).slice(1),l=await r._getAdditionalHeaders();l["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode);const d=Object.assign({method:e,headers:l},i);return Gg()||(d.referrerPolicy="no-referrer"),Pm.fetch()(Nm(r,r.config.apiHost,t,c),d)})}async function Cm(r,e,t){r._canInitEmulator=!1;const n=Object.assign(Object.assign({},Ww),e);try{const s=new Yw(r),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ni(r,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,d]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ni(r,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ni(r,"email-already-in-use",o);if(l==="USER_DISABLED")throw ni(r,"user-disabled",o);const m=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw $c(r,m,d);st(r,m)}}catch(s){if(s instanceof gt)throw s;st(r,"network-request-failed",{message:String(s)})}}async function Jw(r,e,t,n,s={}){const i=await yr(r,e,t,n,s);return"mfaPendingCredential"in i&&st(r,"multi-factor-auth-required",{_serverResponse:i}),i}function Nm(r,e,t,n){const s=`${e}${t}?${n}`;return r.config.emulator?Gc(r.config,s):`${r.config.apiScheme}://${s}`}class Yw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Ye(this.auth,"network-request-failed")),Qw.get())})}}function ni(r,e,t){const n={appName:r.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const s=Ye(r,e,n);return s.customData._tokenResponse=t,s}/**
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
 */async function Xw(r,e){return yr(r,"POST","/v1/accounts:delete",e)}async function Vm(r,e){return yr(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function es(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zw(r,e=!1){const t=Ae(r),n=await t.getIdToken(e),s=Hc(n);J(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:n,authTime:es(ra(s.auth_time)),issuedAtTime:es(ra(s.iat)),expirationTime:es(ra(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ra(r){return Number(r)*1e3}function Hc(r){const[e,t,n]=r.split(".");if(e===void 0||t===void 0||n===void 0)return gi("JWT malformed, contained fewer than 3 sections"),null;try{const s=dd(t);return s?JSON.parse(s):(gi("Failed to decode base64 JWT payload"),null)}catch(s){return gi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sh(r){const e=Hc(r);return J(e,"internal-error"),J(typeof e.exp<"u","internal-error"),J(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gs(r,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof gt&&eE(n)&&r.auth.currentUser===r&&await r.auth.signOut(),n}}function eE({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class tE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=es(this.lastLoginAt),this.creationTime=es(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ui(r){var e;const t=r.auth,n=await r.getIdToken(),s=await gs(r,Vm(t,{idToken:n}));J(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];r._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Dm(i.providerUserInfo):[],c=rE(r.providerData,o),l=r.isAnonymous,d=!(r.email&&i.passwordHash)&&!(c!=null&&c.length),m=l?d:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Fa(i.createdAt,i.lastLoginAt),isAnonymous:m};Object.assign(r,p)}async function nE(r){const e=Ae(r);await Ui(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rE(r,e){return[...r.filter(n=>!e.some(s=>s.providerId===n.providerId)),...e]}function Dm(r){return r.map(e=>{var{providerId:t}=e,n=qc(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function sE(r,e){const t=await Cm(r,{},async()=>{const n=Is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=r.config,o=Nm(r,s,"/v1/token",`key=${i}`),c=await r._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Pm.fetch()(o,{method:"POST",headers:c,body:n})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function iE(r,e){return yr(r,"POST","/v2/accounts:revokeToken",Kc(r,e))}/**
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
 */class Gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){J(e.idToken,"internal-error"),J(typeof e.idToken<"u","internal-error"),J(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){J(e.length!==0,"internal-error");const t=Sh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(J(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:s,expiresIn:i}=await sE(e,t);this.updateTokensAndExpiration(n,s,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:s,expirationTime:i}=t,o=new Gn;return n&&(J(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),s&&(J(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(J(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gn,this.toJSON())}_performRefresh(){return lt("not implemented")}}/**
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
 */function xt(r,e){J(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ut{constructor(e){var{uid:t,auth:n,stsTokenManager:s}=e,i=qc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Fa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await gs(this,this.stsTokenManager.getToken(this.auth,e));return J(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Zw(this,e)}reload(){return nE(this)}_assign(e){this!==e&&(J(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ut(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){J(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Ui(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ze(this.auth.app))return Promise.reject(Ft(this.auth));const e=await this.getIdToken();return await gs(this,Xw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,s,i,o,c,l,d,m;const p=(n=t.displayName)!==null&&n!==void 0?n:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,E=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=t.photoURL)!==null&&o!==void 0?o:void 0,C=(c=t.tenantId)!==null&&c!==void 0?c:void 0,k=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,M=(d=t.createdAt)!==null&&d!==void 0?d:void 0,L=(m=t.lastLoginAt)!==null&&m!==void 0?m:void 0,{uid:N,emailVerified:D,isAnonymous:B,providerData:W,stsTokenManager:w}=t;J(N&&w,e,"internal-error");const y=Gn.fromJSON(this.name,w);J(typeof N=="string",e,"internal-error"),xt(p,e.name),xt(_,e.name),J(typeof D=="boolean",e,"internal-error"),J(typeof B=="boolean",e,"internal-error"),xt(E,e.name),xt(R,e.name),xt(C,e.name),xt(k,e.name),xt(M,e.name),xt(L,e.name);const v=new ut({uid:N,auth:e,email:_,emailVerified:D,displayName:p,isAnonymous:B,photoURL:R,phoneNumber:E,tenantId:C,stsTokenManager:y,createdAt:M,lastLoginAt:L});return W&&Array.isArray(W)&&(v.providerData=W.map(T=>Object.assign({},T))),k&&(v._redirectEventId=k),v}static async _fromIdTokenResponse(e,t,n=!1){const s=new Gn;s.updateFromServerResponse(t);const i=new ut({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:n});return await Ui(i),i}static async _fromGetAccountInfoResponse(e,t,n){const s=t.users[0];J(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Dm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Gn;c.updateFromIdToken(n);const l=new ut({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Fa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
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
 */const Rh=new Map;function ht(r){pt(r instanceof Function,"Expected a class definition");let e=Rh.get(r);return e?(pt(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Rh.set(r,e),e)}/**
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
 */class jm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}jm.type="NONE";const kh=jm;/**
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
 */function _i(r,e,t){return`firebase:${r}:${e}:${t}`}class Kn{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:s,name:i}=this.auth;this.fullUserKey=_i(this.userKey,s.apiKey,i),this.fullPersistenceKey=_i("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ut._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Kn(ht(kh),e,n);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||ht(kh);const o=_i(n,e.config.apiKey,e.name);let c=null;for(const d of t)try{const m=await d._get(o);if(m){const p=ut._fromJSON(e,m);d!==i&&(c=p),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Kn(i,e,n):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Kn(i,e,n))}}/**
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
 */function Ph(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Om(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bm(e))return"Blackberry";if(qm(e))return"Webos";if(Mm(e))return"Safari";if((e.includes("chrome/")||Lm(e))&&!e.includes("edge/"))return"Chrome";if(Um(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=r.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Om(r=Ee()){return/firefox\//i.test(r)}function Mm(r=Ee()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lm(r=Ee()){return/crios\//i.test(r)}function Fm(r=Ee()){return/iemobile/i.test(r)}function Um(r=Ee()){return/android/i.test(r)}function Bm(r=Ee()){return/blackberry/i.test(r)}function qm(r=Ee()){return/webos/i.test(r)}function Wc(r=Ee()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function oE(r=Ee()){var e;return Wc(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function aE(){return Wg()&&document.documentMode===10}function $m(r=Ee()){return Wc(r)||Um(r)||qm(r)||Bm(r)||/windows phone/i.test(r)||Fm(r)}/**
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
 */function zm(r,e=[]){let t;switch(r){case"Browser":t=Ph(Ee());break;case"Worker":t=`${Ph(Ee())}-${r}`;break;default:t=r}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${hr}/${n}`}/**
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
 */class cE{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function lE(r,e={}){return yr(r,"GET","/v2/passwordPolicy",Kc(r,e))}/**
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
 */const uE=6;class hE{constructor(e){var t,n,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:uE,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(n=l.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let s=0;s<e.length;s++)n=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class dE{constructor(e,t,n,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ch(this),this.idTokenSubscription=new Ch(this),this.beforeStateQueue=new cE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ht(t)),this._initializationPromise=this.queue(async()=>{var n,s;if(!this._deleted&&(this.persistenceManager=await Kn.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Vm(this,{idToken:e}),n=await ut._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Ze(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return J(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ui(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ze(this.app))return Promise.reject(Ft(this));const t=e?Ae(e):null;return t&&J(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&J(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ze(this.app)?Promise.reject(Ft(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ze(this.app)?Promise.reject(Ft(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lE(this),t=new hE(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await iE(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ht(e)||this._popupRedirectResolver;J(t,this,"argument-error"),this.redirectPersistenceManager=await Kn.create(this,[ht(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(J(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return J(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&zw(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function vr(r){return Ae(r)}class Ch{constructor(e){this.auth=e,this.observer=null,this.addObserver=e_(t=>this.observer=t)}get next(){return J(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Qc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function fE(r){Qc=r}function mE(r){return Qc.loadJS(r)}function pE(){return Qc.gapiScript}function gE(r){return`__${r}${Math.floor(Math.random()*1e6)}`}/**
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
 */function _E(r,e){const t=Ja(r,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(ns(i,e??{}))return s;st(s,"already-initialized")}return t.initialize({options:e})}function yE(r,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(ht);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function vE(r,e,t){const n=vr(r);J(n._canInitEmulator,n,"emulator-config-failed"),J(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const s=!1,i=Gm(e),{host:o,port:c}=IE(e),l=c===null?"":`:${c}`;n.config.emulator={url:`${i}//${o}${l}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),wE()}function Gm(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function IE(r){const e=Gm(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(n);if(s){const i=s[1];return{host:i,port:Nh(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:Nh(o)}}}function Nh(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function wE(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class Km{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return lt("not implemented")}_getIdTokenResponse(e){return lt("not implemented")}_linkToIdToken(e,t){return lt("not implemented")}_getReauthenticationResolver(e){return lt("not implemented")}}/**
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
 */async function Hn(r,e){return Jw(r,"POST","/v1/accounts:signInWithIdp",Kc(r,e))}/**
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
 */const EE="http://localhost";class wn extends Km{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):st("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:s}=t,i=qc(t,["providerId","signInMethod"]);if(!n||!s)return null;const o=new wn(n,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Hn(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Hn(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Hn(e,t)}buildRequest(){const e={requestUri:EE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Is(t)}return e}}/**
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
 */class go{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rs extends go{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Rt extends Rs{constructor(){super("facebook.com")}static credential(e){return wn._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rt.credential(e.oauthAccessToken)}catch{return null}}}Rt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rt.PROVIDER_ID="facebook.com";/**
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
 */class at extends Rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wn._fromParams({providerId:at.PROVIDER_ID,signInMethod:at.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return at.credentialFromTaggedObject(e)}static credentialFromError(e){return at.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return at.credential(t,n)}catch{return null}}}at.GOOGLE_SIGN_IN_METHOD="google.com";at.PROVIDER_ID="google.com";/**
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
 */class kt extends Rs{constructor(){super("github.com")}static credential(e){return wn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kt.credentialFromTaggedObject(e)}static credentialFromError(e){return kt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kt.credential(e.oauthAccessToken)}catch{return null}}}kt.GITHUB_SIGN_IN_METHOD="github.com";kt.PROVIDER_ID="github.com";/**
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
 */class Pt extends Rs{constructor(){super("twitter.com")}static credential(e,t){return wn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Pt.credential(t,n)}catch{return null}}}Pt.TWITTER_SIGN_IN_METHOD="twitter.com";Pt.PROVIDER_ID="twitter.com";/**
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
 */class ur{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,s=!1){const i=await ut._fromIdTokenResponse(e,n,s),o=Vh(n);return new ur({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const s=Vh(n);return new ur({user:e,providerId:s,_tokenResponse:n,operationType:t})}}function Vh(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class Bi extends gt{constructor(e,t,n,s){var i;super(t.code,t.message),this.operationType=n,this.user=s,Object.setPrototypeOf(this,Bi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,s){return new Bi(e,t,n,s)}}function Hm(r,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bi._fromErrorAndOperation(r,i,e,n):i})}async function TE(r,e,t=!1){const n=await gs(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return ur._forOperation(r,"link",n)}/**
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
 */async function bE(r,e,t=!1){const{auth:n}=r;if(Ze(n.app))return Promise.reject(Ft(n));const s="reauthenticate";try{const i=await gs(r,Hm(n,s,e,r),t);J(i.idToken,n,"internal-error");const o=Hc(i.idToken);J(o,n,"internal-error");const{sub:c}=o;return J(r.uid===c,n,"user-mismatch"),ur._forOperation(r,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&st(n,"user-mismatch"),i}}/**
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
 */async function AE(r,e,t=!1){if(Ze(r.app))return Promise.reject(Ft(r));const n="signIn",s=await Hm(r,n,e),i=await ur._fromIdTokenResponse(r,n,s);return t||await r._updateCurrentUser(i.user),i}function xE(r,e,t,n){return Ae(r).onIdTokenChanged(e,t,n)}function SE(r,e,t){return Ae(r).beforeAuthStateChanged(e,t)}function RE(r,e,t,n){return Ae(r).onAuthStateChanged(e,t,n)}function kE(r){return Ae(r).signOut()}const qi="__sak";/**
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
 */class Wm{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(qi,"1"),this.storage.removeItem(qi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const PE=1e3,CE=10;class Qm extends Wm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=$m(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),s=this.localCache[t];n!==s&&e(t,s,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);aE()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,CE):s()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},PE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qm.type="LOCAL";const NE=Qm;/**
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
 */class Jm extends Wm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jm.type="SESSION";const Ym=Jm;/**
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
 */function VE(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class _o{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const n=new _o(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:s});const c=Array.from(o).map(async d=>d(t.origin,i)),l=await VE(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_o.receivers=[];/**
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
 */function Jc(r="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return r+t}/**
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
 */class DE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const d=Jc("",20);s.port1.start();const m=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:s,onMessage(p){const _=p;if(_.data.eventId===d)switch(_.data.status){case"ack":clearTimeout(m),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(_.data.response);break;default:clearTimeout(m),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nt(){return window}function jE(r){nt().location.href=r}/**
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
 */function Xm(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function OE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ME(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function LE(){return Xm()?self:null}/**
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
 */const Zm="firebaseLocalStorageDb",FE=1,$i="firebaseLocalStorage",ep="fbase_key";class ks{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function yo(r,e){return r.transaction([$i],e?"readwrite":"readonly").objectStore($i)}function UE(){const r=indexedDB.deleteDatabase(Zm);return new ks(r).toPromise()}function Ua(){const r=indexedDB.open(Zm,FE);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const n=r.result;try{n.createObjectStore($i,{keyPath:ep})}catch(s){t(s)}}),r.addEventListener("success",async()=>{const n=r.result;n.objectStoreNames.contains($i)?e(n):(n.close(),await UE(),e(await Ua()))})})}async function Dh(r,e,t){const n=yo(r,!0).put({[ep]:e,value:t});return new ks(n).toPromise()}async function BE(r,e){const t=yo(r,!1).get(e),n=await new ks(t).toPromise();return n===void 0?null:n.value}function jh(r,e){const t=yo(r,!0).delete(e);return new ks(t).toPromise()}const qE=800,$E=3;class tp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ua(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>$E)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_o._getInstance(LE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await OE(),!this.activeServiceWorker)return;this.sender=new DE(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ME()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ua();return await Dh(e,qi,"1"),await jh(e,qi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dh(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>BE(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>jh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=yo(s,!1).getAll();return new ks(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)n.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!n.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const s of Array.from(n))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tp.type="LOCAL";const zE=tp;new Ss(3e4,6e4);/**
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
 */function Yc(r,e){return e?ht(e):(J(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class Xc extends Km{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Hn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Hn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function GE(r){return AE(r.auth,new Xc(r),r.bypassAuthState)}function KE(r){const{auth:e,user:t}=r;return J(t,e,"internal-error"),bE(t,new Xc(r),r.bypassAuthState)}async function HE(r){const{auth:e,user:t}=r;return J(t,e,"internal-error"),TE(t,new Xc(r),r.bypassAuthState)}/**
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
 */class np{constructor(e,t,n,s,i=!1){this.auth=e,this.resolver=n,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return GE;case"linkViaPopup":case"linkViaRedirect":return HE;case"reauthViaPopup":case"reauthViaRedirect":return KE;default:st(this.auth,"internal-error")}}resolve(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const WE=new Ss(2e3,1e4);async function QE(r,e,t){if(Ze(r.app))return Promise.reject(Ye(r,"operation-not-supported-in-this-environment"));const n=vr(r);km(r,e,go);const s=Yc(n,t);return new un(n,"signInViaPopup",e,s).executeNotNull()}class un extends np{constructor(e,t,n,s,i){super(e,t,s,i),this.provider=n,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return J(e,this.auth,"internal-error"),e}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const e=Jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ye(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ye(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ye(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WE.get())};e()}}un.currentPopupAction=null;/**
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
 */const JE="pendingRedirect",yi=new Map;class YE extends np{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=yi.get(this.auth._key());if(!e){try{const n=await XE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}yi.set(this.auth._key(),e)}return this.bypassAuthState||yi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function XE(r,e){const t=sp(e),n=rp(r);if(!await n._isAvailable())return!1;const s=await n._get(t)==="true";return await n._remove(t),s}async function ZE(r,e){return rp(r)._set(sp(e),"true")}function eT(r,e){yi.set(r._key(),e)}function rp(r){return ht(r._redirectPersistence)}function sp(r){return _i(JE,r.config.apiKey,r.name)}/**
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
 */function Oh(r,e,t){return tT(r,e,t)}async function tT(r,e,t){if(Ze(r.app))return Promise.reject(Ft(r));const n=vr(r);km(r,e,go),await n._initializationPromise;const s=Yc(n,t);return await ZE(s,n),s._openRedirect(n,e,"signInViaRedirect")}async function nT(r,e){return await vr(r)._initializationPromise,ip(r,e,!1)}async function ip(r,e,t=!1){if(Ze(r.app))return Promise.reject(Ft(r));const n=vr(r),s=Yc(n,e),o=await new YE(n,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const rT=10*60*1e3;class sT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!iT(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!op(e)){const s=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ye(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=rT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mh(e))}saveEventToCache(e){this.cachedEventUids.add(Mh(e)),this.lastProcessedEventTime=Date.now()}}function Mh(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function op({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function iT(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return op(r);default:return!1}}/**
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
 */async function oT(r,e={}){return yr(r,"GET","/v1/projects",e)}/**
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
 */const aT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cT=/^https?/;async function lT(r){if(r.config.emulator)return;const{authorizedDomains:e}=await oT(r);for(const t of e)try{if(uT(t))return}catch{}st(r,"unauthorized-domain")}function uT(r){const e=La(),{protocol:t,hostname:n}=new URL(e);if(r.startsWith("chrome-extension://")){const o=new URL(r);return o.hostname===""&&n===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!cT.test(t))return!1;if(aT.test(r))return n===r;const s=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(n)}/**
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
 */const hT=new Ss(3e4,6e4);function Lh(){const r=nt().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function dT(r){return new Promise((e,t)=>{var n,s,i;function o(){Lh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lh(),t(Ye(r,"network-request-failed"))},timeout:hT.get()})}if(!((s=(n=nt().gapi)===null||n===void 0?void 0:n.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nt().gapi)===null||i===void 0)&&i.load)o();else{const c=gE("iframefcb");return nt()[c]=()=>{gapi.load?o():t(Ye(r,"network-request-failed"))},mE(`${pE()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw vi=null,e})}let vi=null;function fT(r){return vi=vi||dT(r),vi}/**
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
 */const mT=new Ss(5e3,15e3),pT="__/auth/iframe",gT="emulator/auth/iframe",_T={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},yT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vT(r){const e=r.config;J(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?Gc(e,gT):`https://${r.config.authDomain}/${pT}`,n={apiKey:e.apiKey,appName:r.name,v:hr},s=yT.get(r.config.apiHost);s&&(n.eid=s);const i=r._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Is(n).slice(1)}`}async function IT(r){const e=await fT(r),t=nt().gapi;return J(t,r,"internal-error"),e.open({where:document.body,url:vT(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_T,dontclear:!0},n=>new Promise(async(s,i)=>{await n.restyle({setHideOnLeave:!1});const o=Ye(r,"network-request-failed"),c=nt().setTimeout(()=>{i(o)},mT.get());function l(){nt().clearTimeout(c),s(n)}n.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const wT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ET=500,TT=600,bT="_blank",AT="http://localhost";class Fh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xT(r,e,t,n=ET,s=TT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l=Object.assign(Object.assign({},wT),{width:n.toString(),height:s.toString(),top:i,left:o}),d=Ee().toLowerCase();t&&(c=Lm(d)?bT:t),Om(d)&&(e=e||AT,l.scrollbars="yes");const m=Object.entries(l).reduce((_,[E,R])=>`${_}${E}=${R},`,"");if(oE(d)&&c!=="_self")return ST(e||"",c),new Fh(null);const p=window.open(e||"",c,m);J(p,r,"popup-blocked");try{p.focus()}catch{}return new Fh(p)}function ST(r,e){const t=document.createElement("a");t.href=r,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const RT="__/auth/handler",kT="emulator/auth/handler",PT=encodeURIComponent("fac");async function Uh(r,e,t,n,s,i){J(r.config.authDomain,r,"auth-domain-config-required"),J(r.config.apiKey,r,"invalid-api-key");const o={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:n,v:hr,eventId:s};if(e instanceof go){e.setDefaultLanguage(r.languageCode),o.providerId=e.providerId||"",Zg(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[m,p]of Object.entries({}))o[m]=p}if(e instanceof Rs){const m=e.getScopes().filter(p=>p!=="");m.length>0&&(o.scopes=m.join(","))}r.tenantId&&(o.tid=r.tenantId);const c=o;for(const m of Object.keys(c))c[m]===void 0&&delete c[m];const l=await r._getAppCheckToken(),d=l?`#${PT}=${encodeURIComponent(l)}`:"";return`${CT(r)}?${Is(c).slice(1)}${d}`}function CT({config:r}){return r.emulator?Gc(r,kT):`https://${r.authDomain}/${RT}`}/**
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
 */const sa="webStorageSupport";class NT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ym,this._completeRedirectFn=ip,this._overrideRedirectResult=eT}async _openPopup(e,t,n,s){var i;pt((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Uh(e,t,n,La(),s);return xT(e,o,Jc())}async _openRedirect(e,t,n,s){await this._originValidation(e);const i=await Uh(e,t,n,La(),s);return jE(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(pt(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await IT(e),n=new sT(e);return t.register("authEvent",s=>(J(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sa,{type:sa},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[sa];o!==void 0&&t(!!o),st(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lT(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return $m()||Mm()||Wc()}}const VT=NT;var Bh="@firebase/auth",qh="1.8.1";/**
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
 */class DT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){J(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jT(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OT(r){Qn(new mn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;J(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zm(r)},d=new dE(n,s,i,l);return yE(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),Qn(new mn("auth-internal",e=>{const t=vr(e.getProvider("auth").getImmediate());return(n=>new DT(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(Bh,qh,jT(r)),Dt(Bh,qh,"esm2017")}/**
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
 */const MT=5*60,LT=md("authIdTokenMaxAge")||MT;let $h=null;const FT=r=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>LT)return;const s=t==null?void 0:t.token;$h!==s&&($h=s,await fetch(r,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function UT(r=ty()){const e=Ja(r,"auth");if(e.isInitialized())return e.getImmediate();const t=_E(r,{popupRedirectResolver:VT,persistence:[zE,NE,Ym]}),n=md("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=FT(i.toString());SE(t,o,()=>o(t.currentUser)),xE(t,c=>o(c))}}const s=Bg("auth");return s&&vE(t,`http://${s}`),t}function BT(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}fE({loadJS(r){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",r),n.onload=e,n.onerror=s=>{const i=Ye("internal-error");i.customData=s,t(i)},n.type="text/javascript",n.charset="UTF-8",BT().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OT("Browser");const qT={VITE_FIREBASE_API_KEY:"AIzaSyBGacyTQ76tJlOgYOJyQGNau8g-tsmEHU4",VITE_FIREBASE_AUTH_DOMAIN:"cherry-662ac.firebaseapp.com",VITE_FIREBASE_PROJECT_ID:"cherry-662ac",VITE_FIRESTORE_DATABASE:"cherry"},Ii=qT,ap=vd({apiKey:Ii.VITE_FIREBASE_API_KEY,authDomain:Ii.VITE_FIREBASE_AUTH_DOMAIN,projectId:Ii.VITE_FIREBASE_PROJECT_ID,appId:void 0}),fn=UT(ap),An=dw(ap,{localCache:jw({tabManager:Fw()})},Ii.VITE_FIRESTORE_DATABASE),wi=new at;wi.setCustomParameters({prompt:"select_account"});function $T(){return window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0}async function zT(){if($T())return Oh(fn,wi);try{return await QE(fn,wi)}catch(r){if((r==null?void 0:r.code)==="auth/popup-blocked"||(r==null?void 0:r.code)==="auth/operation-not-supported-in-this-environment")return Oh(fn,wi);throw r}}function GT(){return nT(fn).catch(()=>null)}function KT(r){return RE(fn,r)}const Ba=()=>kE(fn),HT="demo",WT="Baked Feta Pasta with Chicken",QT="ready",JT="https://www.tiktok.com/@jose.elcook/video/7448169436764212510",YT="tiktok",XT={type:"tiktok",postId:"7448169436764212510"},ZT=4,eb=35,tb=[{name:"grape tomatoes",quantity:"16 oz",storeSection:"produce",costUsd:3.49,emoji:"🍅"},{name:"feta cheese",quantity:"4 oz block",storeSection:"dairy_alternatives",costUsd:3,emoji:"🧀"},{name:"olive oil",quantity:"2-3 tbsp",storeSection:"spices_condiments",costUsd:.5,emoji:"🫒"},{name:"salt",quantity:"to taste",storeSection:"spices_condiments",costUsd:.1,emoji:"🧂"},{name:"black pepper",quantity:"to taste",storeSection:"spices_condiments",costUsd:.1,emoji:"🌶️"},{name:"red chili flakes",quantity:"1 tsp",storeSection:"spices_condiments",costUsd:.15,emoji:"🌶️"},{name:"dried oregano",quantity:"1 tsp",storeSection:"spices_condiments",costUsd:.15,emoji:"🌿"},{name:"chicken breast",quantity:"1 large",storeSection:"proteins",costUsd:3.5,emoji:"🍗"},{name:"pasta (rotini or fusilli)",quantity:"8 oz",storeSection:"grains_pasta",costUsd:1.25,emoji:"🍝"},{name:"fresh basil",quantity:"handful, chopped",storeSection:"produce",costUsd:1,emoji:"🌱"}],nb=["Place grape tomatoes in a baking dish and set the block of feta cheese in the center.","Drizzle with olive oil, then season with salt, freshly cracked black pepper, red chili flakes, and dried oregano.","Bake in a preheated oven at 400°F (200°C) for 30 to 35 minutes until tomatoes blister and feta softens.","Pat chicken breast dry with a paper towel, slice horizontally into cutlets, cover with plastic wrap, and pound evenly with a meat mallet.","Season both sides of chicken cutlets with salt and black pepper.","Sear chicken in a pan with a little oil over medium-high heat until golden brown and cooked through, then slice into bite-sized strips.","Remove baking dish from oven, mash tomatoes and feta with a wooden spoon, and stir until a creamy sauce forms.","Toss in cooked pasta, sliced seared chicken, and fresh chopped basil until thoroughly combined."],rb=[{start:4,end:20,title:"Season tomatoes and feta",steps:[0,1],ingredients:[0,1,2,3,4,5,6]},{start:20,end:25,title:"Bake in oven",steps:[2],ingredients:[]},{start:25,end:35,title:"Prep and season chicken",steps:[3,4],ingredients:[3,4,7]},{start:35,end:40,title:"Sear and slice chicken",steps:[5],ingredients:[2,7]},{start:40,end:49,title:"Mix sauce and toss pasta",steps:[6,7],ingredients:[8,9]}],sb=null,ib="Mediterranean",cp={id:HT,title:WT,status:QT,sourceUrl:JT,platform:YT,embed:XT,servings:ZT,cookMinutes:eb,ingredients:tb,steps:nb,segments:rb,imageUrl:sb,cuisine:ib},lp=!1,ia=r=>`/assets/plates/${r}.jpg`,Fr=cp;({...Fr},{...Fr,imageUrl:ia("tacos")}),{...Fr,imageUrl:ia("ramen")},{...Fr,imageUrl:ia("burger")},{...Fr};let Bn={ready:!1,user:null,doc:null,entitled:!1};const qa=new Set,ri=()=>qa.forEach(r=>r());let Ur=null;function ob(r){var e,t;return r?["active","trialing","past_due"].includes((e=r.stripe)==null?void 0:e.status)?!0:((t=r.subscription)==null?void 0:t.status)==="active":!1}let zh=!1;function ab(){zh||(zh=!0,GT(),KT(r=>{if(Ur==null||Ur(),Ur=null,!r)return Bn={ready:!0,user:null,doc:null,entitled:!1},ri();Bn={...Bn,user:r,ready:!1},ri(),Ur=po(_r(An,"users",r.uid),e=>{const t=e.exists()?e.data():null;Bn={ready:!0,user:r,doc:t,entitled:ob(t)},ri()},()=>{Bn={ready:!0,user:r,doc:null,entitled:!1},ri()})}))}function Xe(){return O.useSyncExternalStore(r=>(qa.add(r),()=>qa.delete(r)),()=>Bn)}function up(r){const[e,t]=O.useState(null);return O.useEffect(()=>{if(!r||lp)return;const n=bw(hw(An,"users",r,"savedRecipes"),Aw("createdAt","desc"));return po(n,s=>{t(s.docs.map(i=>({id:i.id,...i.data()})).filter(i=>i.origin==="imported"||i.status))},()=>t([]))},[r]),e}function hp(r,e){const[t,n]=O.useState(void 0);return O.useEffect(()=>{if(!(!r||lp))return po(_r(An,"users",r,"savedRecipes",e),s=>{n(s.exists()?{id:s.id,...s.data()}:null)},()=>n(null))},[r,e]),t}const dp=(r,e)=>Nw(_r(An,"users",r,"savedRecipes",e)),cb=(r,e,t)=>Cw(_r(An,"users",r,"savedRecipes",e),{favorite:t});function Zc(r){const[e,t]=O.useState(void 0);return O.useEffect(()=>{if(r)return po(_r(An,"users",r,"lists","current"),n=>{t(n.exists()?n.data():null)},()=>t(null))},[r]),e}const Ei=(r,e)=>Pw(_r(An,"users",r,"lists","current"),{...e,updatedAt:Uw()}),zi={produce:{label:"Produce",emoji:"🥬",order:0},meat_seafood:{label:"Meat & seafood",emoji:"🥩",order:1},proteins:{label:"Proteins",emoji:"🍗",order:1},dairy_eggs:{label:"Dairy & eggs",emoji:"🧀",order:2},dairy_alternatives:{label:"Dairy & eggs",emoji:"🧀",order:2},bakery:{label:"Bakery",emoji:"🥖",order:3},grains_pasta:{label:"Pasta, rice & grains",emoji:"🍝",order:4},canned_jarred:{label:"Cans & jars",emoji:"🥫",order:5},spices_condiments:{label:"Spices & condiments",emoji:"🧂",order:6},nuts_seeds:{label:"Nuts & seeds",emoji:"🥜",order:7},frozen:{label:"Frozen",emoji:"🧊",order:8},snacks_drinks:{label:"Snacks & drinks",emoji:"🥤",order:9},other:{label:"Everything else",emoji:"🛒",order:10}},lb=r=>zi[r||"other"]||zi.other,ub={"½":.5,"⅓":1/3,"⅔":2/3,"¼":.25,"¾":.75,"⅛":.125};function oa(r){const e=r.trim().replace(/[½⅓⅔¼¾⅛]/g,s=>` ${ub[s]}`).trim(),t=e.match(/^(\d+(?:\.\d+)?)(?:\s+(\d+)\/(\d+)|\s+(0?\.\d+))?|^(\d+)\/(\d+)/);if(!t)return null;let n=0;return t[5]?n=+t[5]/+t[6]:(n=parseFloat(t[1]),t[2]&&(n+=+t[2]/+t[3]),t[4]&&(n+=parseFloat(t[4]))),{value:n,rest:e.slice(t[0].length)}}function aa(r){const e=Math.floor(r+1e-9),t=r-e,n=[[.125,"⅛"],[.25,"¼"],[1/3,"⅓"],[.5,"½"],[2/3,"⅔"],[.75,"¾"]];if(t<.06)return String(e||(r>0?"⅛":0));if(t>.94)return String(e+1);const[,s]=n.reduce((i,o)=>Math.abs(o[0]-t)<Math.abs(i[0]-t)?o:i);return e?`${e}${s}`:s}function $a(r,e){if(!r||e===1)return r||"";const t=r.trim().match(/^([\d.\/\s½⅓⅔¼¾⅛]+?)\s*[-–]\s*([\d.\/½⅓⅔¼¾⅛]+)(.*)$/);if(t){const s=oa(t[1]),i=oa(t[2]);if(s&&i)return`${aa(s.value*e)}–${aa(i.value*e)}${t[3]}`}const n=oa(r);return n?`${aa(n.value*e)}${n.rest.startsWith(" ")||!n.rest?"":" "}${n.rest}`.trim():r}function fp(r,e){const t=r?r.items.map(i=>({...i,recipeIds:[...i.recipeIds]})):[],n=new Set((r==null?void 0:r.recipeIds)||[]),s=new Map(t.map(i=>[i.name.toLowerCase().trim(),i]));for(const i of e)if(!n.has(i.id)){n.add(i.id);for(const o of i.ingredients||[]){const c=(o.name||"").toLowerCase().trim();if(!c)continue;const l=s.get(c);if(l)o.quantity&&!l.quantity.includes(o.quantity)&&(l.quantity=l.quantity?`${l.quantity} + ${o.quantity}`:o.quantity),l.recipeIds.includes(i.id)||l.recipeIds.push(i.id),l.checked=!1;else{const d={id:crypto.randomUUID(),name:o.name,quantity:o.quantity||"",section:o.storeSection||"other",emoji:o.emoji,checked:!1,recipeIds:[i.id]};t.push(d),s.set(c,d)}}}return{items:t,recipeIds:[...n]}}function za(r,e){return{items:r.items.map(n=>({...n,recipeIds:n.recipeIds.filter(s=>s!==e)})).filter(n=>n.manual||n.recipeIds.length),recipeIds:r.recipeIds.filter(n=>n!==e)}}function qn(r){const e=r.match(/https?:\/\/[^\s]*(tiktok\.com|instagram\.com|instagr\.am)\/[^\s]+/i);return e?e[0]:null}function si(r){const e=Math.max(0,Math.round(r));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function _s(r){if(!r)return null;if(r<60)return`${r} min`;const e=Math.floor(r/60),t=r%60;return t?`${e} h ${t} min`:`${e} h`}const hb=["controls=0","autoplay=1","loop=0","muted=1","progress_bar=0","play_button=0","volume_control=0","fullscreen_button=0","timestamp=0","rel=0","music_info=0","description=0","native_context_menu=0","closed_caption=0"].join("&"),db=O.forwardRef(function({embed:e,onReady:t,onTime:n,onEnded:s,onFail:i},o){const c=O.useRef(null),l=O.useRef({onReady:t,onTime:n,onEnded:s,onFail:i});l.current={onReady:t,onTime:n,onEnded:s,onFail:i};const d=(p,_)=>{var E,R;e.type==="tiktok"&&((R=(E=c.current)==null?void 0:E.contentWindow)==null||R.postMessage({type:p,value:_,"x-tiktok-player":!0},"*"))};O.useImperativeHandle(o,()=>({seek:p=>d("seekTo",p),play:()=>d("play"),pause:()=>d("pause"),mute:p=>d(p?"mute":"unMute")}),[e]),O.useEffect(()=>{if(e.type!=="tiktok")return;let p=!1;const _=R=>{var k,M,L,N,D,B,W,w;if(R.source!==((k=c.current)==null?void 0:k.contentWindow))return;let C=R.data;if(typeof C=="string")try{C=JSON.parse(C)}catch{return}!C||!C["x-tiktok-player"]||(C.type==="onPlayerReady"?(p=!0,(L=(M=l.current).onReady)==null||L.call(M)):C.type==="onCurrentTime"?(B=(D=l.current).onTime)==null||B.call(D,Number((N=C.value)==null?void 0:N.currentTime)):C.type==="onStateChange"&&Number(C.value)===0&&((w=(W=l.current).onEnded)==null||w.call(W)))};window.addEventListener("message",_);const E=setTimeout(()=>{var R,C;p||(C=(R=l.current).onFail)==null||C.call(R)},15e3);return()=>{window.removeEventListener("message",_),clearTimeout(E)}},[e]);const m=e.type==="tiktok"?`https://www.tiktok.com/player/v1/${e.postId}?${hb}`:`https://www.instagram.com/reel/${e.shortcode}/embed/`;return u.jsx("iframe",{ref:c,src:m,title:"Original recipe video",allow:"autoplay; encrypted-media; fullscreen; picture-in-picture",style:{width:"100%",height:"100%",border:0,display:"block",background:"#000"}},m)});function fb(r){const e=r.steps.length,t=r.ingredients.length,n=(r.segments||[]).map(s=>({...s,steps:(s.steps||[]).filter(i=>i>=0&&i<e),ingredients:(s.ingredients||[]).filter(i=>i>=0&&i<t),fromVideo:!0})).filter(s=>s.steps.length&&s.end>s.start);return n.length>=2?n:r.steps.map((s,i)=>({start:0,end:0,title:"",steps:[i],ingredients:[],fromVideo:!1}))}function mp({recipe:r,factor:e=1,onClose:t,limit:n,onUnlock:s}){var vt;const i=O.useMemo(()=>fb(r),[r]),o=!!n&&i.length>n,c=O.useMemo(()=>o?i.slice(0,n):i,[i,o,n]),l=o?c.length:c.length-1,[d,m]=O.useState(0),[p,_]=O.useState(!1),[E,R]=O.useState(!0),[C,k]=O.useState(!1),M=O.useRef(null),L=O.useRef(!1),N=O.useRef(null),D=O.useRef({index:d,paused:p});D.current={index:d,paused:p};const B=r.embed,W=(B==null?void 0:B.type)==="tiktok"&&((vt=c[0])==null?void 0:vt.fromVideo),w=d>=l,y=o&&d===c.length;O.useEffect(()=>{let Q=null;const Y=async()=>{var de;try{Q=await((de=navigator.wakeLock)==null?void 0:de.request("screen"))}catch{}};Y();const ae=()=>{document.visibilityState==="visible"&&Y()};return document.addEventListener("visibilitychange",ae),()=>{var de;document.removeEventListener("visibilitychange",ae),(de=Q==null?void 0:Q.release)==null||de.call(Q)}},[]),O.useEffect(()=>{const Q=Y=>{(Y.key==="ArrowDown"||Y.key==="ArrowRight")&&(Y.preventDefault(),I(D.current.index+1)),(Y.key==="ArrowUp"||Y.key==="ArrowLeft")&&(Y.preventDefault(),I(D.current.index-1)),Y.key==="Escape"&&t(),Y.key===" "&&(Y.preventDefault(),b())};return window.addEventListener("keydown",Q),()=>window.removeEventListener("keydown",Q)},[c.length]);const v=()=>{var Y,ae,de;const Q=c[D.current.index];!L.current||!(Q!=null&&Q.fromVideo)||!W||((Y=M.current)==null||Y.seek(Q.start),D.current.paused?(ae=M.current)==null||ae.pause():(de=M.current)==null||de.play())};O.useEffect(()=>{var Q;o&&d===c.length?(Q=M.current)==null||Q.pause():v()},[d]);const T=Q=>{const Y=c[D.current.index];!Y||D.current.paused||!W||(Q>=Y.end-.15||Q<Y.start-1)&&v()};function b(){_(Q=>{var ae,de;const Y=!Q;return Y?(ae=M.current)==null||ae.pause():(de=M.current)==null||de.play(),Y})}function S(){R(Q=>{var Y;return(Y=M.current)==null||Y.mute(!Q),!Q})}function I(Q){var ae;if(Q<0||Q>l)return;const Y=(ae=N.current)==null?void 0:ae.querySelector(`[data-n="${Q}"]`);Y==null||Y.scrollIntoView({behavior:"smooth",block:"start"})}O.useEffect(()=>{const Q=N.current;if(!Q)return;const Y=new IntersectionObserver(ae=>{var de;for(const xn of ae)if(xn.isIntersecting&&xn.intersectionRatio>=.6){const Io=Number(xn.target.dataset.n);m(Io),_(!1),(de=navigator.vibrate)==null||de.call(navigator,8)}},{root:Q,threshold:[.6]});return Q.querySelectorAll("[data-n]").forEach(ae=>Y.observe(ae)),()=>Y.disconnect()},[c]);const we=c[d];return u.jsxs("div",{className:"cook",children:[u.jsxs("header",{className:"cook__top",children:[u.jsx("button",{className:"icon-btn icon-btn--dark",onClick:t,"aria-label":"Close cook mode",children:u.jsx(z,{name:"close"})}),u.jsx("div",{className:"cook__ticks","aria-hidden":"true",children:i.map((Q,Y)=>u.jsx("i",{className:Y<=d?"on":""},Y))}),u.jsxs("span",{className:"cook__count",children:[Math.min(d+1,i.length),"/",i.length]})]}),B&&!C&&u.jsxs("section",{className:"cook__video",children:[u.jsx(db,{ref:M,embed:B,onReady:()=>{var Q;L.current=!0,(Q=M.current)==null||Q.mute(E),v()},onTime:T,onEnded:()=>{D.current.paused||v()},onFail:()=>{B.type==="tiktok"&&k(!0)}}),W&&u.jsxs("div",{className:"cook__controls",children:[u.jsx("button",{className:"icon-btn icon-btn--glass",onClick:b,"aria-label":p?"Play":"Pause",children:u.jsx(z,{name:p?"play":"pause",fill:p?"currentColor":"none"})}),u.jsx("button",{className:"icon-btn icon-btn--glass",onClick:S,"aria-label":E?"Sound on":"Sound off",children:u.jsx(z,{name:E?"mute":"sound"})})]}),W&&(we==null?void 0:we.fromVideo)&&u.jsxs("div",{className:"cook__loop",children:[u.jsx(z,{name:"refresh",size:13,stroke:2.6})," Looping ",si(we.start),"–",si(we.end)]})]}),(B==null?void 0:B.type)==="instagram"&&(we==null?void 0:we.fromVideo)&&u.jsxs("p",{className:"cook__note",children:["Instagram videos play in their own player: jump to ",u.jsx("b",{children:si(we.start)})," for this step."]}),u.jsxs("div",{className:"cook__pages",ref:N,children:[c.map((Q,Y)=>u.jsxs("article",{"data-n":Y,className:"cook__page",children:[u.jsxs("p",{className:"cook__kicker",children:["Step ",Y+1," of ",i.length,Q.fromVideo&&u.jsx("span",{children:si(Q.start)})]}),Q.title&&u.jsx("h2",{className:"cook__title display",children:Q.title}),u.jsx("ol",{className:"cook__steps",children:Q.steps.map(ae=>u.jsxs("li",{children:[u.jsx("span",{className:"cook__num",children:ae+1}),u.jsx("span",{children:r.steps[ae]})]},ae))}),Q.ingredients.length>0&&u.jsx("div",{className:"cook__ings",children:Q.ingredients.map(ae=>{const de=r.ingredients[ae];return u.jsxs("span",{className:"cook__ing",children:[de.emoji&&u.jsx("span",{children:de.emoji}),de.name,de.quantity&&u.jsx("em",{children:$a(de.quantity,e)})]},ae)})})]},Y)),o&&u.jsxs("article",{"data-n":c.length,className:"cook__page cook__lock",children:[u.jsx("span",{className:"cook__lockicon",children:u.jsx(z,{name:"lock",size:22})}),u.jsxs("h2",{className:"cook__title display",children:[i.length-c.length," more step",i.length-c.length===1?"":"s"," to dinner."]}),u.jsx("p",{children:"Save this recipe to your cookbook to cook it all the way through, with every step looping like the ones you just saw."})]})]}),u.jsxs("footer",{className:"cook__bottom",children:[u.jsx("button",{className:"icon-btn icon-btn--dark",onClick:()=>I(d-1),disabled:d===0,"aria-label":"Previous step",children:u.jsx(z,{name:"back"})}),u.jsx(En,{mode:"wait",initial:!1,children:u.jsxs(le.button,{className:"btn btn--cherry cook__next",onClick:()=>y?(s||t)():w?t():I(d+1),initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},transition:{duration:.18},children:[y?"Save it and keep cooking":w?"Done, enjoy!":"Next step",u.jsx(z,{name:y?"next":w?"check":"down",stroke:2.6})]},y?"unlock":w?"done":"next")})]})]})}function pp({label:r="Continue with Google"}){const[e,t]=O.useState(!1),[n,s]=O.useState(null),i=async()=>{t(!0),s(null);try{await zT()}catch(o){(o==null?void 0:o.code)!=="auth/popup-closed-by-user"&&(o==null?void 0:o.code)!=="auth/cancelled-popup-request"&&s("Google sign-in did not work. Try again.")}finally{t(!1)}};return u.jsxs(u.Fragment,{children:[u.jsxs("button",{className:"btn btn--white btn--block gbtn",onClick:i,disabled:e,children:[e?u.jsx("span",{className:"spinner"}):u.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 48 48","aria-hidden":"true",children:[u.jsx("path",{fill:"#FFC107",d:"M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"}),u.jsx("path",{fill:"#FF3D00",d:"M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"}),u.jsx("path",{fill:"#4CAF50",d:"M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.3 0-9.7-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z"}),u.jsx("path",{fill:"#1976D2",d:"M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z"})]}),r]}),n&&u.jsx("p",{className:"err",role:"alert",children:n})]})}const mb="https://cherry-backend-hqyn.onrender.com".replace(/\/$/,"");class Gh extends Error{constructor(e,t,n){super(n),this.status=e,this.code=t}}async function Jt(r,e,t=e===void 0?"GET":"POST"){const n={},s=fn.currentUser;s&&(n.Authorization=`Bearer ${await s.getIdToken()}`),e!==void 0&&(n["Content-Type"]="application/json");let i;try{i=await fetch(`${mb}/v1${r}`,{method:t,headers:n,body:e===void 0?void 0:JSON.stringify(e)})}catch{throw new Gh(0,"network","Can't reach Cherry. Check your connection.")}const o=await i.json().catch(()=>({}));if(!i.ok)throw new Gh(i.status,o.error||"error",o.message||"Something went wrong. Try again.");return o}const gp=r=>Jt("/import",{url:r}),pb=r=>Jt("/checkout",{plan:r}),gb=r=>Jt("/checkout/confirm",{session:r}),_b=()=>Jt("/portal",{}),yb=r=>Jt("/profile",r),vb=()=>Jt("/account/delete",{}),Ib=r=>Jt("/preview",{url:r}),wb=r=>Jt(`/preview/${r}`),Kh={saved:50,cooked:1,blockers:[],household:2,nights:3,takeout:2},el="cherry.funnel";function Gi(){try{return{...Kh,...JSON.parse(localStorage.getItem(el)||"{}")}}catch{return Kh}}function Eb(r){try{localStorage.setItem(el,JSON.stringify(r))}catch{}}function Tb(){try{return!!localStorage.getItem(el)}catch{return!1}}const _p=18,yp=6;function vo(r){const e=Math.min(r.takeout,r.nights),t=Math.round(e*4.3*r.household*(_p-yp)/5)*5;return{oneIn:r.cooked>0?Math.max(1,Math.round(r.saved/r.cooked)):null,waiting:Math.max(0,r.saved-r.cooked),swapped:e,monthly:t,dinners:Math.round(r.nights*4.3),savedLabel:r.saved>=500?"500+":String(r.saved)}}const bb="https://www.tiktok.com/@jose.elcook/video/7448169436764212510",Br=["saved","cooked","reveal","blockers","fix","table","takeout","math","paste","ready","account"],Ab=["reveal","math"],ca=[5,10,20,30,50,75,100,150,200,300,500],ii=[[2,6,30,-8],[66,0,32,7],[70,58,28,-5],[0,60,31,6],[36,-8,26,3],[38,72,27,-4],[-8,32,24,10],[84,30,24,-9],[20,-4,20,-12],[58,76,22,9],[16,78,21,-7],[60,-10,19,12]],vp=[{id:"rewind",label:"I keep rewinding with messy hands",fix:"Every step loops by itself. Hands stay in the bowl."},{id:"fast",label:"The video goes way too fast",fix:"One step at a time. It waits for you."},{id:"amounts",label:"Amounts are missing or buried in comments",fix:"Every ingredient written out, with amounts."},{id:"lost",label:"I can never find the recipe again",fix:"One cookbook, searchable, on every device."},{id:"shopping",label:"I never have the ingredients",fix:"One tap turns recipes into a grocery list by aisle."}];function xb(){const[,r]=qe(),{user:e,entitled:t,ready:n}=Xe(),[s,i]=O.useState(()=>Gi()),[o,c]=O.useState(0),[l,d]=O.useState(1),[m,p]=O.useState(!1),_=Br[o],E=O.useMemo(()=>vo(s),[s]);O.useEffect(()=>{Eb(s)},[s]);const R=L=>i(N=>({...N,...typeof L=="function"?L(N):L}));O.useEffect(()=>{var L;if(!(!n||!e)){if(t){r("/");return}(_==="account"||o===0&&s.recipe)&&(yb({firstName:(L=e.displayName)==null?void 0:L.split(" ")[0],household:String(s.household),cookingFrequency:String(s.nights),goals:s.blockers,saveHabit:`${s.cooked}/${s.saved}`,completed:!0}).catch(()=>{}),r("/join"))}},[n,e,t,_]);const C=L=>{d(L>o?1:-1),c(Math.max(0,Math.min(Br.length-1,L)))},k=()=>C(o+1),M=Ab.includes(_);return u.jsxs("div",{className:`flow ${M?"flow--dark":""}`,children:[u.jsxs("header",{className:"flow__top",children:[o>0?u.jsx("button",{className:"flow__back",onClick:()=>C(o-1),"aria-label":"Back",children:u.jsx(z,{name:"back"})}):u.jsx("a",{className:"flow__back",href:"/","aria-label":"Back to home",children:u.jsx(z,{name:"back"})}),u.jsx("div",{className:"flow__bar",role:"progressbar","aria-valuenow":o+1,"aria-valuemax":Br.length,children:u.jsx("i",{style:{width:`${(o+1)/Br.length*100}%`}})}),u.jsx(Bt,{href:"/signin",className:"flow__signin",children:"Sign in"})]}),u.jsx(En,{mode:"wait",custom:l,initial:!1,children:u.jsxs(le.section,{className:"flow__body",initial:{opacity:0,x:l*28},animate:{opacity:1,x:0},exit:{opacity:0,x:l*-28},transition:{duration:.26,ease:[.2,.8,.2,1]},children:[_==="saved"&&u.jsx(Sb,{f:s,set:R,onNext:k}),_==="cooked"&&u.jsx(Rb,{f:s,set:R,onNext:k}),_==="reveal"&&u.jsx(kb,{f:s,onNext:k}),_==="blockers"&&u.jsx(Pb,{f:s,set:R,onNext:k}),_==="fix"&&u.jsx(Cb,{f:s,onNext:k}),_==="table"&&u.jsx(Nb,{f:s,set:R,onNext:k}),_==="takeout"&&u.jsx(Vb,{f:s,set:R,onNext:k}),_==="math"&&u.jsx(Db,{f:s,onNext:k}),_==="paste"&&u.jsx(Hh,{f:s,set:R,onReady:k}),_==="ready"&&s.recipe&&u.jsx(jb,{f:s,onCook:()=>p(!0),onNext:k}),_==="ready"&&!s.recipe&&u.jsx(Hh,{f:s,set:R,onReady:()=>{}}),_==="account"&&u.jsx(Ob,{f:s})]},_)}),m&&s.recipe&&u.jsx(mp,{recipe:s.recipe,limit:2,onClose:()=>p(!1),onUnlock:()=>{p(!1),C(Br.indexOf("account"))}}),u.jsx("span",{className:"sr-only","aria-live":"polite",children:E.savedLabel})]})}function Gt({kicker:r,children:e}){return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"eyebrow flow__kicker",children:r}),u.jsx("h1",{className:"display flow__q",children:e})]})}function Yt({children:r,onClick:e,disabled:t,note:n}){return u.jsxs("div",{className:"flow__cta",children:[n&&u.jsx("p",{className:"flow__note",children:n}),u.jsx("button",{className:"btn btn--cherry btn--block",onClick:e,disabled:t,children:r})]})}function tl({value:r,min:e,max:t,onChange:n,suffix:s,label:i}){const o=c=>{var l;(l=navigator.vibrate)==null||l.call(navigator,6),n(Math.max(e,Math.min(t,r+c)))};return u.jsxs("div",{className:"counter",role:"group","aria-label":i,children:[u.jsx("button",{className:"counter__btn",onClick:()=>o(-1),disabled:r<=e,"aria-label":"Less",children:"−"}),u.jsx("div",{className:"counter__value",children:u.jsx(En,{mode:"popLayout",initial:!1,children:u.jsxs(le.span,{className:"num",initial:{y:26,opacity:0},animate:{y:0,opacity:1},exit:{y:-26,opacity:0},transition:{duration:.16},children:[r,r>=t&&s==="+"?"+":""]},r)})}),u.jsx("button",{className:"counter__btn",onClick:()=>o(1),disabled:r>=t,"aria-label":"More",children:"+"})]})}function Sb({f:r,set:e,onNext:t}){const n=Math.max(0,ca.indexOf(r.saved)),s=r.saved>=300?"A full-blown archive.":r.saved>=100?"A serious collection.":r.saved>=30?"A healthy habit.":"Just getting started.",i=["tacos","ramen","burger","sushi","pad_thai","paella","margherita","poke","shakshuka","bibimbap","mac_cheese","tikka_masala"],o=Math.min(i.length,2+n);return u.jsxs(u.Fragment,{children:[u.jsxs(Gt,{kicker:"Let's be honest",children:["How many recipes are sitting in your ",u.jsx("em",{children:"saved"})," folder?"]}),u.jsxs("div",{className:"pile","aria-hidden":"true",children:[i.slice(0,o).map((c,l)=>u.jsx(le.div,{className:"plate pile__plate",style:{left:`${ii[l][0]}%`,top:`${ii[l][1]}%`,width:`${ii[l][2]}%`,zIndex:l%3},initial:{scale:0,rotate:-25},animate:{scale:1,rotate:ii[l][3]},exit:{scale:0},transition:{type:"spring",stiffness:300,damping:20},children:u.jsx("img",{src:`/assets/plates/${c}.jpg`,alt:""})},c)),u.jsx("div",{className:"pile__num num",children:r.saved>=500?"500+":r.saved})]}),u.jsx("p",{className:"pile__label",children:s}),u.jsx("input",{className:"range",type:"range",min:0,max:ca.length-1,step:1,value:n,onChange:c=>e({saved:ca[Number(c.target.value)]}),"aria-label":"Saved recipes"}),u.jsxs("div",{className:"range__ends",children:[u.jsx("span",{children:"A few"}),u.jsx("span",{children:"Lost count"})]}),u.jsx(Yt,{onClick:t,children:"That's about right"})]})}function Rb({f:r,set:e,onNext:t}){return u.jsxs(u.Fragment,{children:[u.jsxs(Gt,{kicker:`Out of ${r.saved>=500?"500+":r.saved} saved`,children:["And how many did you actually ",u.jsx("em",{children:"cook"})," last month?"]}),u.jsxs("div",{className:"flow__mid",children:[u.jsx(tl,{value:r.cooked,min:0,max:12,suffix:"+",onChange:n=>e({cooked:n}),label:"Recipes cooked last month"}),u.jsx("p",{className:"flow__hint",children:r.cooked===0?"Zero is a very common answer.":r.cooked<=2?"No judgment. Most people say this.":"Better than most."})]}),u.jsx(Yt,{onClick:t,children:"Continue"})]})}function kb({f:r,onNext:e}){const t=vo(r),n=Math.min(r.saved,150),s=r.cooked===0?0:Math.max(1,Math.round(r.cooked/r.saved*n));return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"eyebrow flow__kicker",children:"Your saved folder"}),t.oneIn?u.jsxs("h1",{className:"display reveal__title",children:["You cook ",u.jsxs("span",{className:"reveal__big num",children:["1 in ",t.oneIn]})]}):u.jsxs("h1",{className:"display reveal__title",children:["You cooked ",u.jsxs("span",{className:"reveal__big num",children:["0 of ",t.savedLabel]})]}),u.jsx("div",{className:"dots","aria-hidden":"true",children:Array.from({length:n}).map((i,o)=>u.jsx(le.i,{className:o<s?"on":"",initial:{opacity:0,scale:0},animate:{opacity:1,scale:1},transition:{delay:.15+o*.004,duration:.2}},o))}),u.jsxs("p",{className:"reveal__body",children:[r.cooked===0?"All":"The other"," ",u.jsx("b",{children:t.waiting>=499?"hundreds":t.waiting})," are still waiting. That's not a willpower problem. Recipe videos are made to be ",u.jsx("em",{className:"voice",children:"watched"}),", not followed."]}),u.jsx(Yt,{onClick:e,children:"So what's stopping me?"})]})}function Pb({f:r,set:e,onNext:t}){const n=s=>{var i;(i=navigator.vibrate)==null||i.call(navigator,6),e(o=>({blockers:o.blockers.includes(s)?o.blockers.filter(c=>c!==s):[...o.blockers,s]}))};return u.jsxs(u.Fragment,{children:[u.jsxs(Gt,{kicker:"Pick all that sound like you",children:["What actually gets ",u.jsx("em",{children:"in the way?"})]}),u.jsx("div",{className:"opts",children:vp.map((s,i)=>u.jsxs(le.button,{className:`opt ${r.blockers.includes(s.id)?"on":""}`,onClick:()=>n(s.id),"aria-pressed":r.blockers.includes(s.id),initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.04*i,duration:.3},children:[u.jsx("span",{className:"opt__n",children:String(i+1).padStart(2,"0")}),u.jsx("span",{className:"opt__label",children:s.label}),u.jsx("span",{className:"opt__tick",children:u.jsx(z,{name:"check",size:14,stroke:3.2})})]},s.id))}),u.jsx(Yt,{onClick:t,disabled:!r.blockers.length,children:r.blockers.length?`That's my ${r.blockers.length===1?"one":r.blockers.length}`:"Pick at least one"})]})}function Cb({f:r,onNext:e}){const t=vp.filter(n=>r.blockers.includes(n.id));return u.jsxs(u.Fragment,{children:[u.jsxs(Gt,{kicker:"Here's the fix",children:["Meet ",u.jsx("em",{children:"cook mode."})]}),u.jsxs("div",{className:"fix",children:[u.jsx(rg,{className:"fix__demo"}),u.jsx("ul",{className:"fix__list",children:t.slice(0,3).map((n,s)=>u.jsxs(le.li,{initial:{opacity:0,x:14},animate:{opacity:1,x:0},transition:{delay:.25+s*.12},children:[u.jsx("s",{children:n.label}),u.jsx("b",{children:n.fix})]},n.id))})]}),u.jsx(Yt,{onClick:e,children:"I want that"})]})}function Nb({f:r,set:e,onNext:t}){return u.jsxs(u.Fragment,{children:[u.jsxs(Gt,{kicker:"Make it yours",children:["How many nights a week do you ",u.jsx("em",{children:"want"})," to cook?"]}),u.jsxs("div",{className:"flow__mid",children:[u.jsx(tl,{value:r.nights,min:1,max:7,onChange:n=>e({nights:n}),label:"Nights per week"}),u.jsxs("p",{className:"flow__hint",children:[r.nights," night",r.nights===1?"":"s"," a week is ",Math.round(r.nights*4.3)," dinners a month."]}),u.jsxs("div",{className:"seg",role:"radiogroup","aria-label":"Cooking for",children:[u.jsx("span",{className:"seg__label",children:"Cooking for"}),[1,2,3,4,5].map(n=>u.jsx("button",{role:"radio","aria-checked":r.household===n,className:r.household===n?"on":"",onClick:()=>e({household:n}),children:n===5?"5+":n},n))]})]}),u.jsx(Yt,{onClick:t,children:"That's the goal"})]})}function Vb({f:r,set:e,onNext:t}){return u.jsxs(u.Fragment,{children:[u.jsxs(Gt,{kicker:"One more number",children:["And how many nights is it ",u.jsx("em",{children:"takeout"})," right now?"]}),u.jsxs("div",{className:"flow__mid",children:[u.jsx(tl,{value:r.takeout,min:0,max:7,onChange:n=>e({takeout:n}),label:"Takeout nights per week"}),u.jsx("p",{className:"flow__hint",children:`Delivery, drive-thru, "I'll just grab something". All of it.`})]}),u.jsx(Yt,{onClick:t,children:"Show me the math"})]})}function Db({f:r,onNext:e}){const t=vo(r),n=t.swapped>0&&t.monthly>0;return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"eyebrow flow__kicker",children:"Your plan"}),n?u.jsxs(u.Fragment,{children:[u.jsxs("h1",{className:"display reveal__title",children:["Cook ",t.swapped," of those nights and keep about ",u.jsxs("span",{className:"reveal__big num",children:["$",t.monthly]})," ",u.jsx("span",{className:"reveal__unit",children:"a month."})]}),u.jsxs("p",{className:"reveal__fine",children:["Estimate for ",r.household," ",r.household===1?"person":"people",": $",_p," per takeout meal vs $",yp," home-cooked."]})]}):u.jsxs("h1",{className:"display reveal__title",children:["That's ",u.jsx("span",{className:"reveal__big num",children:t.dinners})," ",u.jsx("span",{className:"reveal__unit",children:"home-cooked dinners a month."})]}),u.jsxs("ul",{className:"planlist",children:[u.jsxs("li",{children:[u.jsx("span",{className:"num",children:r.nights}),"nights a week, from recipes you already saved"]}),u.jsxs("li",{children:[u.jsx("span",{className:"num",children:r.household===5?"5+":r.household}),"at the table, amounts scaled for you"]}),u.jsxs("li",{children:[u.jsx("span",{className:"num",children:t.savedLabel}),"saved recipes finally in play"]})]}),u.jsx(Yt,{onClick:e,children:"Let's start with one recipe"})]})}function Hh({f:r,set:e,onReady:t}){const[n,s]=O.useState(""),[i,o]=O.useState("idle"),[c,l]=O.useState("reading"),[d,m]=O.useState(null),[p,_]=O.useState(0),E=O.useRef(!0);O.useEffect(()=>()=>{E.current=!1},[]),O.useEffect(()=>{if(i!=="working")return;const M=setInterval(()=>_(L=>L+1),1e3);return()=>clearInterval(M)},[i]);const R=()=>{e({recipe:cp,url:bb,demo:!0}),t()},C=async M=>{const L=qn(M.trim());if(!L){m("That doesn't look like a TikTok or Instagram link."),o("error");return}o("working"),m(null),_(0),l("reading");try{const{id:N}=await Ib(L);for(;;){if(await new Promise(B=>setTimeout(B,1500)),!E.current)return;const D=await wb(N);if(l(D.stage),D.status==="done"&&D.recipe){e({recipe:D.recipe,url:L,demo:!1}),t();return}if(D.status==="error")throw new Error(D.error||"We couldn't read that video.")}}catch(N){if(!E.current)return;m(N.message||"We couldn't read that video."),o("error")}},k=async()=>{var M;try{const L=await navigator.clipboard.readText(),N=qn(L||"");N?(s(N),C(N)):(m("No TikTok or Instagram link on your clipboard yet. Copy one and try again."),o("error"))}catch{(M=document.getElementById("paste-input"))==null||M.focus()}};if(i==="working"){const M=["Opening the post","Watching the whole video","Writing every ingredient","Matching each step to its moment"],L=c==="reading"?0:Math.min(3,1+Math.floor(p/9));return u.jsxs(u.Fragment,{children:[u.jsxs(Gt,{kicker:"Usually under a minute",children:["Cherry is ",u.jsx("em",{children:"watching"})," your video."]}),u.jsxs("div",{className:"watch",children:[u.jsxs("div",{className:"stamp watch__stamp",children:[u.jsxs("svg",{viewBox:"0 0 100 100","aria-hidden":"true",children:[u.jsx("defs",{children:u.jsx("path",{id:"circ",d:"M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"})}),u.jsx("text",{fontSize:"9.2",fontWeight:"700",letterSpacing:"2.2",children:u.jsx("textPath",{href:"#circ",children:"WATCHING · WRITING · MATCHING · "})})]}),u.jsxs("b",{children:[p,"s"]})]}),u.jsx("ul",{className:"watch__list",children:M.map((N,D)=>u.jsxs("li",{className:D<L?"done":D===L?"now":"",children:[u.jsx("span",{children:D<L?u.jsx(z,{name:"check",size:13,stroke:3.2}):String(D+1)}),N]},N))})]}),u.jsx("p",{className:"flow__note",children:"Keep this open. Your recipe appears here the moment it's ready."})]})}return u.jsxs(u.Fragment,{children:[u.jsxs(Gt,{kicker:"Now the fun part",children:["Paste one recipe ",u.jsx("em",{children:"you"})," saved."]}),u.jsx("p",{className:"flow__lead",children:"We'll turn it into cook mode right now, before you sign up for anything."}),u.jsxs("div",{className:"flow__mid flow__mid--top",children:[u.jsxs("button",{className:"btn btn--ink btn--block btn--xl",onClick:k,children:[u.jsx(z,{name:"paste"})," Paste link"]}),u.jsxs("form",{className:"linkbox",onSubmit:M=>{M.preventDefault(),C(n)},children:[u.jsx("input",{id:"paste-input",value:n,onChange:M=>s(M.target.value),inputMode:"url",placeholder:"or type a TikTok / Instagram link","aria-label":"Recipe link"}),u.jsx("button",{className:"linkbox__go",type:"submit",disabled:!n.trim(),"aria-label":"Go",children:u.jsx(z,{name:"next",stroke:2.6})})]}),d&&u.jsx("p",{className:"err",role:"alert",children:d}),u.jsxs("ol",{className:"howlink",children:[u.jsxs("li",{children:[u.jsx("span",{children:"1"}),"Open the video on TikTok or Instagram"]}),u.jsxs("li",{children:[u.jsx("span",{children:"2"}),"Tap Share, then Copy link"]}),u.jsxs("li",{children:[u.jsx("span",{children:"3"}),"Come back and tap Paste link"]})]})]}),u.jsx("div",{className:"flow__cta",children:u.jsx("button",{className:"flow__link",onClick:R,children:r.recipe&&!r.demo?"Use a popular recipe instead":"I don't have one handy, show me a popular one"})})]})}function jb({f:r,onCook:e,onNext:t}){var i;const n=r.recipe,s=(((i=n.segments)==null?void 0:i.length)||0)>=2?n.segments.length:n.steps.length;return u.jsxs(u.Fragment,{children:[u.jsx("p",{className:"eyebrow flow__kicker",children:r.demo?"A popular one, ready to cook":"Yours, ready to cook"}),u.jsxs("div",{className:"ready",children:[u.jsxs(le.div,{className:"ready__card",initial:{opacity:0,y:30,rotate:-3},animate:{opacity:1,y:0,rotate:-1.5},transition:{type:"spring",stiffness:140,damping:16},children:[n.imageUrl?u.jsx("img",{src:n.imageUrl,alt:""}):u.jsx("img",{src:"/assets/steps/serve.jpg",alt:""}),u.jsx("div",{className:"ready__shade"}),u.jsx("h1",{className:"display ready__title",children:n.title})]}),u.jsxs("ul",{className:"ready__stats",children:[u.jsxs("li",{children:[u.jsx("span",{className:"num",children:n.ingredients.length}),"ingredients",u.jsx("br",{}),"with amounts"]}),u.jsxs("li",{children:[u.jsx("span",{className:"num",children:s}),"steps synced",u.jsx("br",{}),"to the video"]}),u.jsxs("li",{children:[u.jsx("span",{className:"num",children:n.cookMinutes||"—"}),(_s(n.cookMinutes),"minutes"),u.jsx("br",{}),"start to plate"]})]})]}),u.jsxs("div",{className:"flow__cta",children:[u.jsxs("button",{className:"btn btn--cherry btn--block",onClick:e,children:[u.jsx(z,{name:"play",fill:"currentColor",size:17})," Try the first steps"]}),u.jsx("button",{className:"flow__link",onClick:t,children:"Save it to my cookbook"})]})]})}function Ob({f:r}){const e=r.recipe;return u.jsxs("div",{className:"account",children:[u.jsx(Qh,{size:30}),u.jsxs("h1",{className:"display flow__q",children:["Save ",u.jsx("em",{children:e?Mb(e.title):"your recipe"})," to your cookbook."]}),u.jsx("p",{className:"flow__lead",children:"One account keeps your recipes and grocery list in sync on your phone and computer."}),u.jsx(pp,{}),u.jsxs("p",{className:"legal",children:["By continuing you agree to our ",u.jsx("a",{href:"/terms",children:"Terms"})," and ",u.jsx("a",{href:"/privacy",children:"Privacy Policy"}),"."]})]})}function Mb(r){return r.length>34?`${r.slice(0,32).trim()}…`:r}function Lb(){var v,T;const{user:r,entitled:e,ready:t}=Xe(),[,n]=qe(),[s,i]=O.useState(null),[o,c]=O.useState("yearly"),[l,d]=O.useState(!1),[m,p]=O.useState(null),_=new URLSearchParams(location.search).has("canceled"),E=O.useMemo(()=>Tb(),[]),R=O.useMemo(()=>Gi(),[]),C=vo(R),k=(v=r==null?void 0:r.displayName)==null?void 0:v.split(" ")[0];if(O.useEffect(()=>{sg().then(b=>i(b.plans)).catch(()=>i([]))},[]),O.useEffect(()=>{e&&n("/")},[e]),t&&!r)return u.jsx(Ti,{to:"/start"});const M=s==null?void 0:s.find(b=>b.plan==="yearly"),L=s==null?void 0:s.find(b=>b.plan==="monthly"),N=o==="yearly"?M:L,D=M&&L?Math.round((1-M.amount/(L.amount*12))*100):0,B=M?M.amount/12:null,W=async()=>{d(!0),p(null);try{const{url:b}=await pb(o);location.href=b}catch(b){p(b.message||"Checkout is not available right now."),d(!1)}},w=E?R.recipe:void 0,y=w?(((T=w.segments)==null?void 0:T.length)||0)>=2?w.segments.length:w.steps.length:0;return u.jsxs("div",{className:"pay",children:[u.jsxs("section",{className:"pay__top",children:[u.jsxs("header",{className:"pay__bar",children:[u.jsx("span",{className:"eyebrow",children:w?"Ready and waiting":"Membership"}),u.jsxs("button",{className:"pay__out",onClick:()=>Ba(),children:["Not ",k||"you","?"]})]}),w&&u.jsxs(le.div,{className:"pay__recipe",initial:{opacity:0,y:16},animate:{opacity:1,y:0},transition:{duration:.5,ease:[.2,.8,.2,1]},children:[u.jsx("img",{src:w.imageUrl||"/assets/steps/serve.jpg",alt:""}),u.jsxs("div",{children:[u.jsx("b",{children:w.title}),u.jsxs("span",{children:[w.ingredients.length," ingredients · ",y," video steps"]})]}),u.jsx("span",{className:"pay__lock",children:u.jsx(z,{name:"lock",size:16})})]}),u.jsx("h1",{className:"display pay__title",children:w?u.jsxs(u.Fragment,{children:[k?`${k}, your`:"Your"," dinner is ",u.jsx("em",{children:"one tap away."})]}):u.jsxs(u.Fragment,{children:["Cook every recipe ",u.jsx("em",{children:"you save."})]})}),E&&u.jsxs("ul",{className:"pay__stats",children:[u.jsxs("li",{children:[u.jsx("span",{className:"num",children:R.nights}),"nights a week"]}),u.jsxs("li",{children:[u.jsx("span",{className:"num",children:R.household===5?"5+":R.household}),"at the table"]}),C.monthly>0?u.jsxs("li",{children:[u.jsxs("span",{className:"num",children:["$",C.monthly]}),"back a month*"]}):u.jsxs("li",{children:[u.jsx("span",{className:"num",children:C.dinners}),"dinners a month"]})]})]}),u.jsxs("section",{className:"pay__body",children:[u.jsxs("ul",{className:"pay__gets",children:[u.jsxs("li",{children:[u.jsx(z,{name:"check",size:16,stroke:3}),"Cook mode on every recipe, each step looping its moment"]}),u.jsxs("li",{children:[u.jsx(z,{name:"check",size:16,stroke:3}),"Unlimited TikTok and Instagram recipes, written out with amounts"]}),u.jsxs("li",{children:[u.jsx(z,{name:"check",size:16,stroke:3}),"Grocery lists by aisle, synced on every device"]})]}),_&&u.jsx("p",{className:"pay__note",children:"Nothing was charged. Pick a plan whenever you're ready."}),u.jsxs("div",{className:"plans",role:"radiogroup","aria-label":"Choose a plan",children:[s===null&&u.jsx("div",{className:"plan-card shimmer",style:{height:86}}),M&&u.jsxs("button",{role:"radio","aria-checked":o==="yearly",className:`plan-card ${o==="yearly"?"on":""}`,onClick:()=>c("yearly"),children:[u.jsx("span",{className:"plan-card__radio"}),u.jsxs("span",{className:"plan-card__main",children:[u.jsxs("b",{children:["Yearly",D>0&&u.jsxs("i",{children:["Save ",D,"%"]})]}),u.jsx("small",{children:B?`${zo(Math.round(B*100)/100,M.currency)} a month, billed yearly`:"Billed yearly"})]}),u.jsx("span",{className:"plan-card__price num",children:zo(M.amount,M.currency)})]}),L&&u.jsxs("button",{role:"radio","aria-checked":o==="monthly",className:`plan-card ${o==="monthly"?"on":""}`,onClick:()=>c("monthly"),children:[u.jsx("span",{className:"plan-card__radio"}),u.jsxs("span",{className:"plan-card__main",children:[u.jsx("b",{children:"Monthly"}),u.jsx("small",{children:"Cancel anytime"})]}),u.jsx("span",{className:"plan-card__price num",children:zo(L.amount,L.currency)})]}),s&&!s.length&&u.jsx("p",{className:"err",children:"Plans are not available right now. Please try again in a moment."})]}),u.jsxs("div",{className:"pay__cta",children:[u.jsxs("button",{className:`btn btn--cherry btn--block btn--xl ${l?"is-busy":""}`,onClick:W,disabled:!N,children:[l?"Opening secure checkout":N!=null&&N.trialDays?`Start ${N.trialDays} days free`:w?"Unlock my recipe":"Start cooking",!l&&u.jsx(z,{name:"next",stroke:2.6})]}),m&&u.jsx("p",{className:"err",role:"alert",children:m}),u.jsxs("p",{className:"pay__fine",children:[u.jsx(z,{name:"lock",size:13})," Stripe checkout · Apple Pay and Google Pay · Cancel in two taps"]}),E&&C.monthly>0&&u.jsx("p",{className:"pay__fine pay__fine--small",children:"*Your estimate from the answers you gave."}),u.jsxs("p",{className:"pay__fine pay__fine--small",children:["Cherry is a product of Jacopo Giannetti · ",u.jsx("a",{href:"/terms",children:"Terms"})," · ",u.jsx("a",{href:"/privacy",children:"Privacy"})]})]})]})]})}const Ip="support@hellovego.com";let $n=null;window.addEventListener("beforeinstallprompt",r=>{r.preventDefault(),$n=r});const Fb=()=>window.matchMedia("(display-mode: standalone)").matches||navigator.standalone===!0;function wp(){const r=navigator.userAgent;return/iPhone|iPad|iPod/.test(r)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1?"ios":/Android/.test(r)?"android":"desktop"}const la=()=>!!$n;async function Ub(){if(!$n)return!1;$n.prompt();const r=await $n.userChoice.catch(()=>null);return $n=null,(r==null?void 0:r.outcome)==="accepted"}function Ep({onDone:r,compact:e=!1}){const t=wp(),[n,s]=O.useState(Fb());return n?u.jsxs("div",{className:"install",children:[u.jsx("div",{className:"install__ok",children:u.jsx(z,{name:"check",size:28,stroke:3})}),u.jsx("h2",{className:"display",children:"Cherry is on your Home Screen"}),r&&u.jsx("button",{className:"btn btn--cherry btn--block",onClick:r,children:"Continue"})]}):u.jsxs("div",{className:"install",children:[!e&&u.jsx("p",{className:"eyebrow",children:"Like an app, without the App Store"}),u.jsx("h2",{className:"display install__title",children:"Put Cherry on your Home Screen"}),u.jsx("p",{className:"install__lead",children:"Full screen, its own icon, opens in one tap. Takes 10 seconds."}),t==="ios"&&u.jsxs("ol",{className:"install__steps",children:[u.jsxs(qr,{n:1,delay:.05,children:["Tap ",u.jsx("b",{children:"Share"})," ",u.jsx("span",{className:"kbd",children:u.jsx(z,{name:"share",size:16})})," in Safari's toolbar",u.jsx("small",{children:"On iPhone it's at the bottom. In Chrome, it's next to the address bar."})]}),u.jsxs(qr,{n:2,delay:.15,children:["Scroll and tap ",u.jsx("b",{children:"Add to Home Screen"})," ",u.jsx("span",{className:"kbd",children:u.jsx(z,{name:"plus",size:14,stroke:2.6})})]}),u.jsxs(qr,{n:3,delay:.25,children:["Tap ",u.jsx("b",{children:"Add"}),". Done: open Cherry from its icon."]})]}),t!=="ios"&&la()&&u.jsxs("button",{className:"btn btn--ink btn--block",onClick:async()=>{await Ub()&&s(!0)},children:[u.jsx(z,{name:"plus",stroke:2.6})," Install Cherry"]}),t==="android"&&!la()&&u.jsxs("ol",{className:"install__steps",children:[u.jsxs(qr,{n:1,delay:.05,children:["Open the ",u.jsx("b",{children:"⋮"})," menu in Chrome"]}),u.jsxs(qr,{n:2,delay:.15,children:["Tap ",u.jsx("b",{children:"Add to Home screen"})," or ",u.jsx("b",{children:"Install app"})]})]}),t==="desktop"&&!la()&&u.jsxs("p",{className:"install__lead",children:["On your computer, Cherry works right here in the browser. Open ",u.jsx("b",{children:"hellocherry.app"})," on your phone to add it to your Home Screen."]}),r&&u.jsx("button",{className:"flow__link",onClick:r,children:t==="desktop"?"Continue":"I've added it"})]})}function qr({n:r,children:e,delay:t}){return u.jsxs(le.li,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:t},children:[u.jsx("span",{className:"install__n",children:r}),u.jsx("div",{children:e})]})}function Bb(){var d;const{user:r,entitled:e}=Xe(),[,t]=qe(),[n,s]=O.useState("confirming"),i=new URLSearchParams(location.search).get("session"),o=Gi().url,c=o?`/add?u=${encodeURIComponent(o)}`:"/add?first=1",l=(d=Gi().recipe)==null?void 0:d.title;return O.useEffect(()=>{if(!r)return;if(e){s(_=>_==="confirming"?"ready":_);return}if(!i){t("/join");return}let m=0;const p=()=>gb(i).then(_=>{!_.entitled&&++m<6?setTimeout(p,1500):_.entitled||s("error")}).catch(()=>{++m<6?setTimeout(p,1500):s("error")});p()},[r,e]),n==="install"?u.jsx("div",{className:"flow",children:u.jsx("section",{className:"flow__body",children:u.jsx(Ep,{onDone:()=>t(c)})})}):u.jsxs("div",{className:"welcome",children:[n==="confirming"&&u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"spinner",style:{width:36,height:36}}),u.jsx("p",{children:"Setting up your membership…"})]}),n==="error"&&u.jsxs(u.Fragment,{children:[u.jsx("h1",{className:"display",children:"Almost there"}),u.jsx("p",{children:"Your payment went through, we're just waiting for confirmation. This page will update by itself."}),u.jsx("a",{className:"btn btn--ghost",href:`mailto:${Ip}`,children:"Contact support"})]}),n==="ready"&&u.jsxs(u.Fragment,{children:[u.jsx(qb,{}),u.jsx(le.img,{src:"/assets/mascot.png",alt:"",className:"welcome__mascot",initial:{scale:0,rotate:-30},animate:{scale:1,rotate:0},transition:{type:"spring",stiffness:220,damping:11}}),u.jsxs(le.h1,{className:"display",initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{delay:.2},children:["You're ",u.jsx("em",{children:"in"}),r!=null&&r.displayName?`, ${r.displayName.split(" ")[0]}`:"","."]}),u.jsx(le.p,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.35},children:"One last thing: put Cherry on your Home Screen so it opens like an app."}),u.jsxs(le.button,{className:"btn btn--cherry",onClick:()=>s("install"),initial:{opacity:0},animate:{opacity:1},transition:{delay:.5},children:["Add to Home Screen ",u.jsx(z,{name:"next",stroke:2.6})]}),u.jsx("button",{className:"flow__link",onClick:()=>t(c),children:l?`Later, take me to ${l}`:"Later, take me to my cookbook"})]})]})}function qb(){const r=Array.from({length:36},(t,n)=>n),e=["#E8334A","#1B1313","#DDD3C3","#E8334A","#FFFCF7"];return u.jsx("div",{className:"confetti","aria-hidden":"true",children:r.map(t=>u.jsx(le.i,{style:{background:e[t%e.length],left:`${t*37%100}%`},initial:{y:-40,rotate:0,opacity:1},animate:{y:"105vh",rotate:360+t*40,opacity:[1,1,.6]},transition:{duration:2.2+t%5*.35,delay:t%9*.06,ease:[.2,.6,.4,1]}},t))})}const $b={reading:"Opening the post",watching:"Watching the video"};function zb({recipe:r,index:e=0}){var i,o;const t=r.status==="importing",n=r.status==="failed",s=((i=r.segments)==null?void 0:i.length)||0;return u.jsx(le.div,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:Math.min(e,8)*.04},layout:!0,children:u.jsxs(Bt,{href:`/r/${r.id}`,className:`rcard ${t?"rcard--importing":""}`,onClick:()=>{document.documentElement.dataset.vt=r.id},children:[u.jsxs("div",{className:"rcard__img",style:{viewTransitionName:`r-${r.id}`},children:[r.imageUrl?u.jsx("img",{src:r.imageUrl,alt:"",loading:"lazy"}):u.jsx("div",{className:"shimmer",style:{position:"absolute",inset:0}}),t&&u.jsxs("div",{className:"importing",children:[u.jsx("span",{className:"spinner",style:{width:30,height:30}}),u.jsx("b",{children:$b[r.importStage||"reading"]||"Writing your recipe"}),u.jsx("small",{children:"Usually under a minute"})]}),n&&u.jsxs("div",{className:"importing",children:[u.jsx("b",{children:"Couldn't read this one"}),u.jsx("small",{children:"Tap for details"})]})]}),!t&&!n&&u.jsxs(u.Fragment,{children:[s>=2&&u.jsxs("span",{className:"rcard__badge",children:[u.jsx(z,{name:"play",size:11,fill:"currentColor"})," ",s," steps"]}),r.favorite&&u.jsx("span",{className:"rcard__fav",children:u.jsx(z,{name:"heart",fill:"currentColor",size:20})}),u.jsxs("div",{className:"rcard__body",children:[u.jsx("div",{className:"rcard__title",children:r.title}),u.jsxs("div",{className:"rcard__meta",children:[_s(r.cookMinutes)&&u.jsx("span",{children:_s(r.cookMinutes)}),u.jsxs("span",{children:[((o=r.ingredients)==null?void 0:o.length)||0," ingredients"]})]})]})]})]})})}function Gb(){var _;const{user:r}=Xe(),e=up(r==null?void 0:r.uid),[,t]=qe(),[n,s]=O.useState("all"),[i,o]=O.useState(""),c=(_=r==null?void 0:r.displayName)==null?void 0:_.split(" ")[0],l=O.useMemo(()=>{const E=new Map;for(const R of e||[])R.cuisine&&E.set(R.cuisine,(E.get(R.cuisine)||0)+1);return[...E.entries()].sort((R,C)=>C[1]-R[1]).slice(0,6).map(([R])=>R)},[e]),d=O.useMemo(()=>{let E=e||[];if(n==="quick"?E=E.filter(R=>R.cookMinutes&&R.cookMinutes<=30):n==="fav"?E=E.filter(R=>R.favorite):n!=="all"&&(E=E.filter(R=>R.cuisine===n)),i.trim()){const R=i.toLowerCase();E=E.filter(C=>{var k;return C.title.toLowerCase().includes(R)||((k=C.ingredients)==null?void 0:k.some(M=>M.name.toLowerCase().includes(R)))})}return E},[e,n,i]),m=new Date().getHours(),p=m<12?"Good morning":m<18?"Good afternoon":"Good evening";return u.jsxs("main",{className:"screen",children:[u.jsxs("div",{className:"topbar",children:[u.jsxs("span",{className:"eyebrow",children:[p,c?`, ${c}`:""]}),u.jsx(Bt,{href:"/settings",className:"avatar","aria-label":"Account",children:r!=null&&r.photoURL?u.jsx("img",{src:r.photoURL,alt:"",referrerPolicy:"no-referrer"}):u.jsx(z,{name:"user"})})]}),u.jsxs("div",{className:"hello",children:[u.jsxs("h1",{className:"display",children:["What are we ",u.jsx("em",{children:"cooking?"})]}),e&&e.length>0&&u.jsxs("p",{children:[e.length," recipe",e.length===1?"":"s"," in your cookbook"]})]}),u.jsxs(le.button,{className:"paste-card",onClick:()=>t("/add"),whileTap:{scale:.98},children:[u.jsx("span",{className:"paste-card__icon",children:u.jsx(z,{name:"link",stroke:2.4})}),u.jsxs("span",{style:{position:"relative",zIndex:1},children:[u.jsx("b",{children:"Add a recipe video"}),u.jsx("span",{children:"Paste a TikTok or Instagram link"})]}),u.jsx(z,{name:"next",className:"paste-card__go"})]}),e===null&&u.jsx("div",{className:"grid",children:[0,1,2,3].map(E=>u.jsx("div",{className:"rcard shimmer",style:{aspectRatio:"4/5"}},E))}),e&&e.length===0&&u.jsxs("div",{className:"empty",children:[u.jsx("div",{className:"empty__plates","aria-hidden":"true",children:["tacos","ramen","burger"].map(E=>u.jsx("span",{className:"plate",children:u.jsx("img",{src:`/assets/plates/${E}.jpg`,alt:""})},E))}),u.jsxs("h2",{className:"display",children:["Your cookbook is ",u.jsx("em",{children:"hungry."})]}),u.jsx("p",{children:"Find a recipe on TikTok or Instagram, tap Share → Copy link, and paste it here."}),u.jsx(Bt,{href:"/add",className:"btn btn--cherry",children:"Add your first recipe"})]}),e&&e.length>0&&u.jsxs(u.Fragment,{children:[e.length>5&&u.jsxs("label",{className:"search",children:[u.jsx(z,{name:"search"}),u.jsx("input",{value:i,onChange:E=>o(E.target.value),placeholder:"Search recipes or ingredients"})]}),u.jsx("div",{className:"filters",role:"tablist",children:[["all","All"],["quick","Under 30 min"],["fav","Favorites"],...l.map(E=>[E,E])].map(([E,R])=>u.jsx("button",{role:"tab","aria-selected":n===E,className:`filter ${n===E?"on":""}`,onClick:()=>s(E),children:R},E))}),u.jsx("div",{className:"grid",children:d.map((E,R)=>u.jsx(zb,{recipe:E,index:R},E.id))}),!d.length&&u.jsx("p",{className:"muted",style:{textAlign:"center",padding:30},children:"Nothing here yet."})]})]})}function Kb(){const[,r]=qe(),e=new URLSearchParams(location.search),t=e.get("u")||e.get("url")||e.get("text")||"",n=e.has("first"),[s,i]=O.useState(qn(t)||""),[o,c]=O.useState(!1),[l,d]=O.useState(null),m=O.useRef(null),p=O.useRef(!1),_=async(C=s)=>{const k=qn(C.trim());if(!k){d("That doesn’t look like a TikTok or Instagram link.");return}c(!0),d(null);try{const{id:M}=await gp(k);r(`/r/${M}`)}catch(M){d(M.message),c(!1)}};O.useEffect(()=>{t&&qn(t)&&!p.current&&(p.current=!0,_(t))},[]);const E=async()=>{var C,k;try{const M=await navigator.clipboard.readText(),L=qn(M||"");L?(i(L),_(L)):(d("No TikTok or Instagram link on your clipboard yet."),(C=m.current)==null||C.focus())}catch{(k=m.current)==null||k.focus()}},R=wp();return u.jsxs("main",{className:"screen add-hero",children:[u.jsxs("div",{className:"topbar",children:[u.jsx("button",{className:"icon-btn",onClick:()=>r("/"),"aria-label":"Back",children:u.jsx(z,{name:"back"})}),u.jsx("span",{})]}),u.jsx("p",{className:"eyebrow",children:n?"Your first recipe":"New recipe"}),u.jsxs("h1",{className:"display",children:["Paste a recipe ",u.jsx("em",{children:"video."})]}),u.jsx("p",{children:"Cherry watches the whole video and writes every step, synced to the exact moment it happens."}),u.jsx(le.button,{className:"btn btn--cherry btn--block paste-big",onClick:E,disabled:o,whileTap:{scale:.97},children:o?u.jsxs(u.Fragment,{children:[u.jsx("span",{className:"spinner",style:{borderTopColor:"#fff"}})," Starting…"]}):u.jsxs(u.Fragment,{children:[u.jsx(z,{name:"paste",stroke:2.4})," Paste link"]})}),u.jsxs("form",{className:"linkbox",style:{marginTop:14},onSubmit:C=>{C.preventDefault(),_()},children:[u.jsx(z,{name:"link"}),u.jsx("input",{ref:m,value:s,onChange:C=>i(C.target.value),inputMode:"url",placeholder:"…or type it here","aria-label":"Recipe link"}),u.jsx("button",{className:"btn btn--ink btn--sm",type:"submit",disabled:o||!s.trim(),children:"Go"})]}),l&&u.jsx("p",{className:"err",role:"alert",children:l}),u.jsxs("ol",{className:"howlink",children:[u.jsxs("li",{children:[u.jsx("span",{children:"1"}),"Open the video on TikTok or Instagram"]}),u.jsxs("li",{children:[u.jsx("span",{children:"2"}),R==="android"?"Tap Share, then Copy link (or share straight to Cherry)":"Tap Share, then Copy link"]}),u.jsxs("li",{children:[u.jsx("span",{children:"3"}),"Come back and tap Paste link"]})]})]})}let ts=null,Hb=0;function Ut(r,e="check"){ts==null||ts({id:++Hb,text:r,icon:e})}function Wb(){const[r,e]=O.useState([]);return O.useEffect(()=>(ts=t=>{e([t]),setTimeout(()=>e(n=>n.filter(s=>s.id!==t.id)),2600)},()=>{ts=null}),[]),u.jsx(En,{children:r.map(t=>u.jsxs(le.div,{className:"toast",role:"status",initial:{opacity:0,y:16,x:"-50%",scale:.96},animate:{opacity:1,y:0,x:"-50%",scale:1},exit:{opacity:0,y:10,x:"-50%"},transition:{type:"spring",stiffness:420,damping:30},children:[t.icon&&u.jsx(z,{name:t.icon,size:18,stroke:2.6}),t.text]},t.id))})}function Qb({id:r}){var o;const{user:e,doc:t}=Xe(),n=hp(e==null?void 0:e.uid,r),[,s]=qe();if(n===void 0)return u.jsx("div",{className:"boot",children:u.jsx("span",{className:"spinner"})});if(n===null)return u.jsxs("main",{className:"screen empty",children:[u.jsx("h2",{className:"display",children:"Recipe not found"}),u.jsx("p",{children:"It may have been deleted."}),u.jsx("button",{className:"btn btn--ink",onClick:()=>s("/"),children:"Back to cookbook"})]});if(n.status==="importing")return u.jsx(Jb,{recipe:n,onBack:()=>s("/")});if(n.status==="failed")return u.jsx(Yb,{recipe:n,uid:e.uid});const i=Number((o=t==null?void 0:t.webProfile)==null?void 0:o.household)||0;return u.jsx(Xb,{recipe:n,uid:e.uid,household:i})}function Jb({recipe:r,onBack:e}){const t=[{id:"reading",label:"Opening the post"},{id:"watching",label:"Watching the whole video"},{id:"writing",label:"Writing every step"}],[n,s]=O.useState(0);O.useEffect(()=>{const c=setInterval(()=>s(l=>l+1),1e3);return()=>clearInterval(c)},[]);const i=r.importStage==="watching"?n>14?2:1:0,o=["Each step will loop its exact moment of the video.","Tip: cook mode keeps your screen awake.","Ingredients come with amounts, even when the video skips them.","Add recipes to your grocery list with one tap."];return u.jsxs("main",{className:"screen import-screen",children:[u.jsxs("div",{className:"topbar",children:[u.jsx("button",{className:"icon-btn",onClick:e,"aria-label":"Back",children:u.jsx(z,{name:"back"})}),u.jsx("span",{})]}),u.jsx("p",{className:"eyebrow",children:"Usually under a minute"}),u.jsxs("h1",{className:"display",children:["Cherry is ",u.jsx("em",{children:"watching"})," your video."]}),u.jsxs("div",{className:"watch",children:[u.jsxs("div",{className:"stamp watch__stamp",children:[u.jsxs("svg",{viewBox:"0 0 100 100","aria-hidden":"true",children:[u.jsx("defs",{children:u.jsx("path",{id:"circ2",d:"M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"})}),u.jsx("text",{fontSize:"9.2",fontWeight:"700",letterSpacing:"2.2",children:u.jsx("textPath",{href:"#circ2",children:"WATCHING · WRITING · MATCHING · "})})]}),u.jsxs("b",{children:[n,"s"]})]}),u.jsx("ul",{className:"watch__list",children:t.map((c,l)=>u.jsxs("li",{className:l<i?"done":l===i?"now":"",children:[u.jsx("span",{children:l<i?u.jsx(z,{name:"check",size:13,stroke:3.2}):String(l+1)}),c.label]},c.id))})]}),u.jsx(En,{mode:"wait",children:u.jsx(le.p,{className:"import-tip",initial:{opacity:0,y:6},animate:{opacity:1,y:0},exit:{opacity:0,y:-6},children:o[Math.floor(n/5)%o.length]},Math.floor(n/5)%o.length)})]})}function Yb({recipe:r,uid:e}){const[,t]=qe(),[n,s]=O.useState(!1);return u.jsxs("main",{className:"screen empty",children:[u.jsxs("h2",{className:"display",children:["We couldn't ",u.jsx("em",{children:"read"})," this one."]}),u.jsx("p",{children:r.error||"Something went wrong."}),u.jsxs("div",{style:{display:"grid",gap:10,maxWidth:320,margin:"0 auto"},children:[r.sourceUrl&&u.jsx("button",{className:"btn btn--cherry",disabled:n,onClick:async()=>{s(!0);try{await gp(r.sourceUrl)}catch(i){Ut(i.message,"close")}s(!1)},children:"Try again"}),u.jsx("button",{className:"btn btn--ghost",onClick:async()=>{await dp(e,r.id),t("/")},children:"Remove it"})]})]})}function Xb({recipe:r,uid:e,household:t}){var R,C;const[,n]=qe(),s=Zc(e),i=r.servings||2,[o,c]=O.useState(t&&t!==i?t:i),l=o/i,d=!!((R=s==null?void 0:s.recipeIds)!=null&&R.includes(r.id)),[m,p]=O.useState(!1),_=(((C=r.segments)==null?void 0:C.length)||0)>=2,E=async()=>{var k;if((k=navigator.vibrate)==null||k.call(navigator,10),d&&s)await Ei(e,za(s,r.id)),Ut("Removed from your list","cart");else{const M={...r,ingredients:r.ingredients.map(L=>({...L,quantity:$a(L.quantity,l)}))};await Ei(e,fp(s||null,[M])),Ut("Added to your grocery list","cart")}};return u.jsxs("main",{className:"recipe",children:[u.jsxs("div",{className:"recipe__hero",style:{viewTransitionName:`r-${r.id}`},children:[r.imageUrl&&u.jsx("img",{src:r.imageUrl,alt:""}),u.jsxs("div",{className:"recipe__nav",children:[u.jsx("button",{className:"icon-btn",onClick:()=>n("/"),"aria-label":"Back",children:u.jsx(z,{name:"back"})}),u.jsx("button",{className:"icon-btn",onClick:()=>cb(e,r.id,!r.favorite),"aria-label":r.favorite?"Remove from favorites":"Add to favorites",style:{color:r.favorite?"var(--cherry)":void 0},children:u.jsx(z,{name:"heart",fill:r.favorite?"currentColor":"none"})})]}),u.jsxs("div",{className:"recipe__head",children:[u.jsx("h1",{className:"display",children:r.title}),u.jsxs("div",{className:"recipe__chips",children:[_s(r.cookMinutes)&&u.jsxs("span",{className:"chip",children:[u.jsx(z,{name:"clock",size:15})," ",_s(r.cookMinutes)]}),r.cuisine&&u.jsx("span",{className:"chip",children:r.cuisine}),_&&u.jsxs("span",{className:"chip",children:[u.jsx(z,{name:"play",size:12,fill:"currentColor"})," ",r.segments.length," video steps"]})]})]})]}),u.jsx("div",{className:"recipe__cta",children:u.jsxs(le.button,{className:"btn btn--cherry btn--block",onClick:()=>n(`/cook/${r.id}?s=${o}`),whileTap:{scale:.97},children:[u.jsx(z,{name:"flame"})," Start cooking"]})}),u.jsxs("div",{className:"recipe__body",children:[u.jsxs("section",{className:"block",children:[u.jsxs("div",{className:"block__head",children:[u.jsx("h2",{className:"display",children:"Ingredients"}),u.jsxs("div",{className:"stepper","aria-label":"Servings",children:[u.jsx("button",{onClick:()=>c(k=>Math.max(1,k-1)),"aria-label":"Fewer servings",children:"−"}),u.jsxs("span",{children:[u.jsx(z,{name:"people",size:15})," ",o]}),u.jsx("button",{onClick:()=>c(k=>Math.min(20,k+1)),"aria-label":"More servings",children:"+"})]})]}),u.jsx("ul",{className:"ings",children:r.ingredients.map((k,M)=>u.jsxs("li",{className:"ing",children:[u.jsx("span",{className:"ing__emoji",children:k.emoji||"•"}),u.jsx("span",{className:"ing__name",children:k.name}),u.jsx("span",{className:"ing__qty",children:$a(k.quantity,l)})]},M))}),u.jsxs("button",{className:`btn btn--block ${d?"is-done":"btn--ink"}`,style:{marginTop:14},onClick:E,children:[u.jsx(z,{name:d?"check":"cart"})," ",d?"On your grocery list":"Add to grocery list"]})]}),u.jsxs("section",{className:"block",children:[u.jsxs("div",{className:"block__head",children:[u.jsx("h2",{className:"display",children:"Steps"}),u.jsx("span",{className:"muted",children:r.steps.length})]}),u.jsx("ol",{className:"steps",children:r.steps.map((k,M)=>u.jsxs("li",{className:"step",children:[u.jsx("span",{className:"step__n",children:M+1}),u.jsx("p",{children:k})]},M))})]}),r.sourceUrl&&u.jsxs("a",{className:"source-link",href:r.sourceUrl,target:"_blank",rel:"noopener",children:[u.jsx(z,{name:"external",size:17})," Original on ",r.platform==="instagram"?"Instagram":"TikTok"]}),m?u.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"center",paddingBottom:20},children:[u.jsx("button",{className:"btn btn--ghost btn--sm",onClick:()=>p(!1),children:"Keep it"}),u.jsx("button",{className:"btn btn--ink btn--sm",onClick:async()=>{d&&s&&await Ei(e,za(s,r.id)),await dp(e,r.id),Ut("Recipe deleted","trash"),n("/")},children:"Delete for good"})]}):u.jsxs("button",{className:"source-link danger",style:{width:"100%"},onClick:()=>p(!0),children:[u.jsx(z,{name:"trash",size:17})," Delete recipe"]})]})]})}function Zb({id:r}){const{user:e}=Xe(),t=hp(e==null?void 0:e.uid,r),[,n]=qe(),s=Number(new URLSearchParams(location.search).get("s"))||0;if(t===void 0)return u.jsx("div",{className:"boot",children:u.jsx("span",{className:"spinner"})});if(!t||t.status!=="ready")return n(`/r/${r}`),null;const i=s&&t.servings?s/t.servings:1;return u.jsx(mp,{recipe:t,factor:i,onClose:()=>n(`/r/${r}`)})}const Wh=["#E5566E","#3F9A62","#EE9A62","#7C6CF2","#2E9BD6","#C76AC2","#8A9A2B"];function eA(){const{user:r}=Xe(),e=r.uid,t=Zc(e),n=up(e),[s,i]=O.useState(""),[o,c]=O.useState(!1),l=O.useMemo(()=>{const N=new Map;return((t==null?void 0:t.recipeIds)||[]).forEach((D,B)=>N.set(D,Wh[B%Wh.length])),N},[t==null?void 0:t.recipeIds]),d=O.useMemo(()=>{const N=new Map;for(const D of(t==null?void 0:t.items)||[]){const B=lb(D.section).label;N.set(B,[...N.get(B)||[],D])}return[...N.entries()].map(([D,B])=>{var W,w;return{label:D,emoji:((W=Object.values(zi).find(y=>y.label===D))==null?void 0:W.emoji)||"🛒",order:((w=Object.values(zi).find(y=>y.label===D))==null?void 0:w.order)??99,items:B}}).sort((D,B)=>D.order-B.order)},[t]),m=(t==null?void 0:t.items.length)||0,p=(t==null?void 0:t.items.filter(N=>N.checked).length)||0,_=N=>Ei(e,N),E=N=>{var D;t&&((D=navigator.vibrate)==null||D.call(navigator,8),_({...t,items:t.items.map(B=>B.id===N?{...B,checked:!B.checked}:B)}))},R=N=>{N.preventDefault();const D=s.trim();if(!D)return;const B=t||{items:[],recipeIds:[]};_({...B,items:[...B.items,{id:crypto.randomUUID(),name:D,quantity:"",section:"other",checked:!1,recipeIds:[],manual:!0}]}),i("")},C=()=>t&&_({...t,items:t.items.filter(N=>!N.checked)}),k=async()=>{if(!t)return;const N=d.map(D=>`${D.emoji} ${D.label}
${D.items.filter(B=>!B.checked).map(B=>`• ${B.name}${B.quantity?` (${B.quantity})`:""}`).join(`
`)}`).join(`

`);try{navigator.share?await navigator.share({title:"Grocery list",text:N}):(await navigator.clipboard.writeText(N),Ut("List copied"))}catch{}},M=((t==null?void 0:t.recipeIds)||[]).map(N=>n==null?void 0:n.find(D=>D.id===N)).filter(Boolean),L=(n||[]).filter(N=>{var D;return N.status==="ready"&&!((D=t==null?void 0:t.recipeIds)!=null&&D.includes(N.id))});return u.jsxs("main",{className:"screen",children:[u.jsxs("div",{className:"list-head",children:[u.jsxs("div",{children:[u.jsx("p",{className:"eyebrow",children:m?`${m-p} left`:"Groceries"}),u.jsxs("h1",{className:"display",style:{fontSize:"clamp(44px, 12vw, 60px)",marginTop:6},children:["Your ",u.jsx("em",{children:"list"})]})]}),m>0&&u.jsx("button",{className:"icon-btn",onClick:k,"aria-label":"Share list",children:u.jsx(z,{name:"share"})})]}),m>0&&u.jsx("div",{className:"progress","aria-label":`${p} of ${m} checked`,children:u.jsx("i",{style:{width:`${p/m*100}%`}})}),M.length>0&&u.jsx("div",{className:"list-recipes",children:M.map(N=>u.jsxs("span",{className:"lr",children:[N.imageUrl&&u.jsx("img",{src:N.imageUrl,alt:""}),u.jsx("i",{style:{background:l.get(N.id)}}),u.jsx("span",{children:N.title}),u.jsx("button",{"aria-label":`Remove ${N.title}`,onClick:()=>t&&_(za(t,N.id)),children:u.jsx(z,{name:"close",size:14,stroke:2.6})})]},N.id))}),u.jsxs("button",{className:"btn btn--ink btn--block",style:{marginBottom:16},onClick:()=>c(!0),children:[u.jsx(z,{name:"plus",stroke:2.6})," Add recipes to the list"]}),u.jsxs("form",{className:"add-item",onSubmit:R,children:[u.jsx("input",{value:s,onChange:N=>i(N.target.value),placeholder:"Add an item (paper towels, coffee…)","aria-label":"Add an item"}),u.jsx("button",{className:"btn btn--ghost btn--sm",type:"submit",style:{height:50},disabled:!s.trim(),children:"Add"})]}),m===0&&u.jsxs("div",{className:"empty",style:{paddingTop:10},children:[u.jsxs("h2",{className:"display",children:["Nothing to buy ",u.jsx("em",{children:"yet."})]}),u.jsx("p",{children:"Add a few recipes and Cherry builds one list, sorted by aisle."})]}),d.map(N=>u.jsxs("section",{className:"aisle",children:[u.jsxs("h3",{className:"aisle__head",children:[u.jsx("span",{children:N.label}),u.jsx("small",{children:N.items.filter(D=>!D.checked).length})]}),u.jsx("div",{className:"items",children:[...N.items].sort((D,B)=>Number(D.checked)-Number(B.checked)).map(D=>u.jsxs(le.button,{layout:!0,className:`item ${D.checked?"done":""}`,onClick:()=>E(D.id),transition:{type:"spring",stiffness:500,damping:40},children:[u.jsx("span",{className:"box",children:D.checked&&u.jsx(z,{name:"check",size:16,stroke:3.2})}),u.jsxs("span",{style:{flex:1},children:[u.jsxs("span",{className:"item__name",children:[D.emoji?`${D.emoji} `:"",D.name]}),D.recipeIds.length>0&&u.jsx("span",{className:"item__dots",children:D.recipeIds.map(B=>u.jsx("i",{style:{background:l.get(B)}},B))})]}),u.jsx("span",{className:"item__qty",children:D.quantity})]},D.id))})]},N.label)),p>0&&u.jsxs("button",{className:"source-link",style:{width:"100%"},onClick:C,children:[u.jsx(z,{name:"trash",size:16})," Clear ",p," checked"]}),u.jsx(En,{children:o&&u.jsxs(u.Fragment,{children:[u.jsx(le.div,{className:"sheet-bg",onClick:()=>c(!1),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),u.jsxs(le.div,{className:"sheet",initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"spring",stiffness:380,damping:38},children:[u.jsx("div",{className:"sheet__grab"}),u.jsxs("h2",{className:"display",children:["What are you ",u.jsx("em",{children:"cooking?"})]}),u.jsx("p",{className:"muted",style:{marginBottom:16},children:"Tap recipes to add their ingredients."}),!L.length&&u.jsxs("p",{className:"muted",children:["All your recipes are already on the list. ",u.jsx(Bt,{href:"/add",children:"Add a new one"}),"."]}),u.jsx("div",{className:"pick-grid",children:L.map(N=>u.jsxs("button",{className:"pick",onClick:async()=>{await _(fp(t||null,[N])),Ut(`${N.title} added`,"cart")},children:[N.imageUrl?u.jsx("img",{src:N.imageUrl,alt:""}):u.jsx("span",{className:"shimmer"}),u.jsx("b",{children:N.title}),u.jsx("span",{className:"pick__plus",children:u.jsx(z,{name:"plus",size:16,stroke:2.8})})]},N.id))}),u.jsx("button",{className:"btn btn--ink btn--block",style:{marginTop:18},onClick:()=>c(!1),children:"Done"})]})]})})]})}function tA(){var p;const{user:r,doc:e}=Xe(),[,t]=qe(),[n,s]=O.useState(null),[i,o]=O.useState(!1),c=e==null?void 0:e.stripe,l=!(c!=null&&c.status)&&((p=e==null?void 0:e.subscription)==null?void 0:p.status)==="active",d=c!=null&&c.currentPeriodEnd?new Date(c.currentPeriodEnd).toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}):null,m=async()=>{o(!0);try{location.href=(await _b()).url}catch(_){Ut(_.message,"close"),o(!1)}};return u.jsxs("main",{className:"screen",children:[u.jsxs("div",{className:"topbar",children:[u.jsx("button",{className:"icon-btn",onClick:()=>t("/"),"aria-label":"Back",children:u.jsx(z,{name:"back"})}),u.jsx("span",{})]}),u.jsx("h1",{className:"display",style:{fontSize:60,marginBottom:20},children:"You"}),u.jsxs("div",{className:"member",children:[u.jsx("p",{className:"eyebrow",style:{color:"rgba(255,255,255,.6)"},children:"Membership"}),u.jsxs("b",{children:["Cherry ",(c==null?void 0:c.interval)==="month"?"Monthly":(c==null?void 0:c.interval)==="year"?"Yearly":"Member"]}),u.jsx("p",{children:l?"Billed through the App Store.":c!=null&&c.cancelAtPeriodEnd?`Ends on ${d}.`:(c==null?void 0:c.status)==="trialing"?`Free trial, then renews on ${d}.`:d?`Renews on ${d}.`:"Active"}),!l&&(c==null?void 0:c.customerId)&&u.jsx("button",{className:"btn btn--white btn--sm",style:{marginTop:16,position:"relative",zIndex:1},onClick:m,disabled:i,children:"Manage or cancel"})]}),u.jsxs("div",{className:"group",children:[u.jsxs("div",{className:"row",children:[u.jsx("span",{className:"row__icon",children:r!=null&&r.photoURL?u.jsx("img",{src:r.photoURL,alt:"",style:{width:36,height:36,borderRadius:11},referrerPolicy:"no-referrer"}):u.jsx(z,{name:"user"})}),u.jsxs("span",{className:"row__label",children:[(r==null?void 0:r.displayName)||"Your account",u.jsx("br",{}),u.jsx("small",{className:"muted",children:r==null?void 0:r.email})]})]}),u.jsxs("button",{className:"row",onClick:()=>s("install"),children:[u.jsx("span",{className:"row__icon",children:u.jsx(z,{name:"plus"})}),u.jsx("span",{className:"row__label",children:"Add Cherry to Home Screen"}),u.jsx(z,{name:"next"})]}),u.jsxs("a",{className:"row",href:`mailto:${Ip}`,children:[u.jsx("span",{className:"row__icon",children:u.jsx(z,{name:"heart"})}),u.jsx("span",{className:"row__label",children:"Help & feedback"}),u.jsx(z,{name:"next"})]})]}),u.jsxs("div",{className:"group",children:[u.jsxs("a",{className:"row",href:"/privacy",children:[u.jsx("span",{className:"row__label",children:"Privacy Policy"}),u.jsx(z,{name:"external",size:17})]}),u.jsxs("a",{className:"row",href:"/terms",children:[u.jsx("span",{className:"row__label",children:"Terms of Service"}),u.jsx(z,{name:"external",size:17})]})]}),u.jsxs("div",{className:"group",children:[u.jsx("button",{className:"row",onClick:()=>Ba().then(()=>t("/start")),children:u.jsx("span",{className:"row__label",children:"Sign out"})}),u.jsx("button",{className:"row danger",onClick:()=>s("delete"),children:u.jsx("span",{className:"row__label",children:"Delete account"})})]}),u.jsx(En,{children:n&&u.jsxs(u.Fragment,{children:[u.jsx(le.div,{className:"sheet-bg",onClick:()=>s(null),initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}}),u.jsxs(le.div,{className:"sheet",initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"spring",stiffness:380,damping:38},children:[u.jsx("div",{className:"sheet__grab"}),n==="install"&&u.jsx(Ep,{compact:!0,onDone:()=>s(null)}),n==="delete"&&u.jsxs("div",{children:[u.jsx("h2",{className:"display",children:"Delete your account?"}),u.jsxs("p",{className:"muted",style:{margin:"8px 0 20px"},children:["This permanently deletes your cookbook and grocery list",c!=null&&c.subscriptionId?" and cancels your membership right away":"",". It can't be undone."]}),u.jsx("button",{className:"btn btn--ink btn--block",disabled:i,onClick:async()=>{o(!0);try{await vb(),await Ba(),t("/start")}catch(_){Ut(_.message,"close"),o(!1)}},children:i?u.jsx("span",{className:"spinner"}):"Delete everything"}),u.jsx("button",{className:"flow__link",onClick:()=>s(null),children:"Keep my account"})]})]})]})})]})}function nA(){const[,r]=qe(),{user:e,entitled:t,ready:n}=Xe();return O.useEffect(()=>{n&&e&&r(t?"/":"/join")},[n,e,t]),u.jsxs("div",{className:"flow",children:[u.jsxs("header",{className:"flow__top",children:[u.jsx(Bt,{href:"/start",className:"icon-btn","aria-label":"Back",children:u.jsx(z,{name:"back"})}),u.jsx("span",{})]}),u.jsxs("section",{className:"flow__body save",children:[u.jsx(Qh,{size:40}),u.jsx("h1",{className:"display save__title",style:{marginTop:28},children:"Welcome back"}),u.jsx("p",{className:"save__lead",children:"Sign in to open your cookbook."}),u.jsx(pp,{})]})]})}function rA(){const[r]=qe(),{user:e}=Xe(),t=Zc(e==null?void 0:e.uid),n=(t==null?void 0:t.items.filter(i=>!i.checked).length)||0,s=(i,o,c,l)=>u.jsxs(Bt,{href:i,className:`tab ${r===i?"active":""}`,"aria-current":r===i?"page":void 0,children:[u.jsx(z,{name:o,stroke:r===i?2.5:2.1}),l?u.jsx("span",{className:"tab__badge",children:l}):null,c]});return u.jsxs("nav",{className:"tabbar","aria-label":"Main",children:[s("/","book","Cookbook"),u.jsx(Bt,{href:"/add",className:"tab__add","aria-label":"Add a recipe",children:u.jsx(z,{name:"plus",stroke:2.8})}),s("/list","cart","Groceries",n)]})}ab();"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("/sw.js").catch(()=>{}));function sA(){return u.jsx("div",{className:"boot",children:u.jsx("img",{src:"/assets/mascot.png",alt:"Loading"})})}function jn({children:r,tabs:e=!0}){const t=Xe(),[n]=qe();return t.ready?t.user?t.entitled?u.jsxs(u.Fragment,{children:[r,e&&u.jsx(rA,{})]}):u.jsx(Ti,{to:"/join"}):u.jsx(Ti,{to:`/start${n==="/"?"":`?next=${encodeURIComponent(n)}`}`}):u.jsx(sA,{})}function iA(){const[r]=qe();return O.useEffect(()=>{window.scrollTo(0,0)},[r]),null}const oA=r=>{const[e,t]=ed(r);return[e,(n,s)=>{var o;const i=(o=document.startViewTransition)==null?void 0:o.bind(document);if(!i)return t(n,s);i(()=>og.flushSync(()=>t(n,s)))}]};function aA(){return u.jsxs(ad,{base:"/app",hook:oA,children:[u.jsx(iA,{}),u.jsx("div",{className:"shell",children:u.jsxs(Vg,{children:[u.jsx(Je,{path:"/start",children:u.jsx(xb,{})}),u.jsx(Je,{path:"/signin",children:u.jsx(nA,{})}),u.jsx(Je,{path:"/join",children:u.jsx(Lb,{})}),u.jsx(Je,{path:"/welcome",children:u.jsx(Bb,{})}),u.jsx(Je,{path:"/add",children:u.jsx(jn,{children:u.jsx(Kb,{})})}),u.jsx(Je,{path:"/r/:id",children:r=>u.jsx(jn,{tabs:!1,children:u.jsx(Qb,{id:r.id})})}),u.jsx(Je,{path:"/cook/:id",children:r=>u.jsx(jn,{tabs:!1,children:u.jsx(Zb,{id:r.id})})}),u.jsx(Je,{path:"/list",children:u.jsx(jn,{children:u.jsx(eA,{})})}),u.jsx(Je,{path:"/settings",children:u.jsx(jn,{children:u.jsx(tA,{})})}),u.jsx(Je,{path:"/",children:u.jsx(jn,{children:u.jsx(Gb,{})})}),u.jsx(Je,{children:u.jsx(Ti,{to:"/"})})]})}),u.jsx(Wb,{})]})}ig(document.getElementById("root")).render(u.jsx(O.StrictMode,{children:u.jsx(aA,{})}));
