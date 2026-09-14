const If=()=>{};var fc={};/**
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
 */const Xu=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},wf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],u=n[t++],l=((s&7)<<18|(i&63)<<12|(a&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ju={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,u=a?n[s+1]:0,l=s+2<n.length,d=l?n[s+2]:0,p=i>>2,g=(i&3)<<4|u>>4;let E=(u&15)<<2|d>>6,b=d&63;l||(b=64,a||(E=64)),r.push(t[p],t[g],t[E],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Xu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):wf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const d=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||u==null||d==null||g==null)throw new Af;const E=i<<2|u>>4;if(r.push(E),d!==64){const b=u<<4&240|d>>2;if(r.push(b),g!==64){const C=d<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Af extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rf=function(n){const e=Xu(n);return Ju.encodeByteArray(e,!0)},fs=function(n){return Rf(n).replace(/\./g,"")},Yu=function(n){try{return Ju.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function bf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Sf=()=>bf().__FIREBASE_DEFAULTS__,Pf=()=>{if(typeof process>"u"||typeof fc>"u")return;const n=fc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Cf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Yu(n[1]);return e&&JSON.parse(e)},Ds=()=>{try{return If()||Sf()||Pf()||Cf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Zu=n=>{var e,t;return(t=(e=Ds())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},el=n=>{const e=Zu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},tl=()=>{var n;return(n=Ds())===null||n===void 0?void 0:n.config},nl=n=>{var e;return(e=Ds())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class kf{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Vt(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mo(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function rl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[fs(JSON.stringify(t)),fs(JSON.stringify(a)),""].join(".")}const tr={};function Df(){const n={prod:[],emulator:[]};for(const e of Object.keys(tr))tr[e]?n.emulator.push(e):n.prod.push(e);return n}function Nf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let pc=!1;function go(n,e){if(typeof window>"u"||typeof document>"u"||!Vt(window.location.host)||tr[n]===e||tr[n]||pc)return;tr[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=Df().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function u(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function l(E,b){E.setAttribute("width","24"),E.setAttribute("id",b),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function d(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{pc=!0,a()},E}function p(E,b){E.setAttribute("id",b),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function g(){const E=Nf(r),b=t("text"),C=document.getElementById(b)||document.createElement("span"),N=t("learnmore"),k=document.getElementById(N)||document.createElement("a"),q=t("preprendIcon"),U=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const F=E.element;u(F),p(k,N);const z=d();l(U,q),F.append(U,C,k,z),document.body.appendChild(F)}i?(C.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Vf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Of(){var n;const e=(n=Ds())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lf(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Mf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function xf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Uf(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ff(){return!Of()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bf(){try{return typeof indexedDB=="object"}catch{return!1}}function jf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const qf="FirebaseError";class Ye extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=qf,Object.setPrototypeOf(this,Ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Er.prototype.create)}}class Er{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?$f(i,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Ye(s,u,r)}}function $f(n,e){return n.replace(zf,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const zf=/\{\$([^}]+)}/g;function Hf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Ht(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(mc(i)&&mc(a)){if(!Ht(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function mc(n){return n!==null&&typeof n=="object"}/**
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
 */function vr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Xn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Wf(n,e){const t=new Gf(n,e);return t.subscribe.bind(t)}class Gf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Kf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Si),s.error===void 0&&(s.error=Si),s.complete===void 0&&(s.complete=Si);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Kf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Si(){}/**
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
 */function te(n){return n&&n._delegate?n._delegate:n}class Rt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jt="[DEFAULT]";/**
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
 */class Qf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new kf;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Jf(e))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jt){return this.instances.has(e)}getOptions(e=jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(i);r===u&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jt){return this.component?this.component.multipleInstances?e:jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xf(n){return n===jt?void 0:n}function Jf(n){return n.instantiationMode==="EAGER"}/**
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
 */class Yf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Qf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const Zf={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},ep=H.INFO,tp={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},np=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=tp[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class _o{constructor(e){this.name=e,this._logLevel=ep,this._logHandler=np,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Zf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const rp=(n,e)=>e.some(t=>n instanceof t);let gc,_c;function sp(){return gc||(gc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ip(){return _c||(_c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sl=new WeakMap,Bi=new WeakMap,il=new WeakMap,Pi=new WeakMap,yo=new WeakMap;function op(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Et(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&sl.set(t,n)}).catch(()=>{}),yo.set(e,n),e}function ap(n){if(Bi.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});Bi.set(n,e)}let ji={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Bi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||il.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Et(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cp(n){ji=n(ji)}function up(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ci(this),e,...t);return il.set(r,e.sort?e.sort():[e]),Et(r)}:ip().includes(n)?function(...e){return n.apply(Ci(this),e),Et(sl.get(this))}:function(...e){return Et(n.apply(Ci(this),e))}}function lp(n){return typeof n=="function"?up(n):(n instanceof IDBTransaction&&ap(n),rp(n,sp())?new Proxy(n,ji):n)}function Et(n){if(n instanceof IDBRequest)return op(n);if(Pi.has(n))return Pi.get(n);const e=lp(n);return e!==n&&(Pi.set(n,e),yo.set(e,n)),e}const Ci=n=>yo.get(n);function hp(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),u=Et(a);return r&&a.addEventListener("upgradeneeded",l=>{r(Et(a.result),l.oldVersion,l.newVersion,Et(a.transaction),l)}),t&&a.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),u.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const dp=["get","getKey","getAll","getAllKeys","count"],fp=["put","add","delete","clear"],ki=new Map;function yc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ki.get(e))return ki.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=fp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dp.includes(t)))return;const i=async function(a,...u){const l=this.transaction(a,s?"readwrite":"readonly");let d=l.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[t](...u),s&&l.done]))[0]};return ki.set(e,i),i}cp(n=>({...n,get:(e,t,r)=>yc(e,t)||n.get(e,t,r),has:(e,t)=>!!yc(e,t)||n.has(e,t)}));/**
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
 */class pp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(mp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function mp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qi="@firebase/app",Ec="0.13.2";/**
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
 */const st=new _o("@firebase/app"),gp="@firebase/app-compat",_p="@firebase/analytics-compat",yp="@firebase/analytics",Ep="@firebase/app-check-compat",vp="@firebase/app-check",Tp="@firebase/auth",Ip="@firebase/auth-compat",wp="@firebase/database",Ap="@firebase/data-connect",Rp="@firebase/database-compat",bp="@firebase/functions",Sp="@firebase/functions-compat",Pp="@firebase/installations",Cp="@firebase/installations-compat",kp="@firebase/messaging",Dp="@firebase/messaging-compat",Np="@firebase/performance",Vp="@firebase/performance-compat",Op="@firebase/remote-config",Lp="@firebase/remote-config-compat",Mp="@firebase/storage",xp="@firebase/storage-compat",Up="@firebase/firestore",Fp="@firebase/ai",Bp="@firebase/firestore-compat",jp="firebase",qp="11.10.0";/**
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
 */const $i="[DEFAULT]",$p={[qi]:"fire-core",[gp]:"fire-core-compat",[yp]:"fire-analytics",[_p]:"fire-analytics-compat",[vp]:"fire-app-check",[Ep]:"fire-app-check-compat",[Tp]:"fire-auth",[Ip]:"fire-auth-compat",[wp]:"fire-rtdb",[Ap]:"fire-data-connect",[Rp]:"fire-rtdb-compat",[bp]:"fire-fn",[Sp]:"fire-fn-compat",[Pp]:"fire-iid",[Cp]:"fire-iid-compat",[kp]:"fire-fcm",[Dp]:"fire-fcm-compat",[Np]:"fire-perf",[Vp]:"fire-perf-compat",[Op]:"fire-rc",[Lp]:"fire-rc-compat",[Mp]:"fire-gcs",[xp]:"fire-gcs-compat",[Up]:"fire-fst",[Bp]:"fire-fst-compat",[Fp]:"fire-vertex","fire-js":"fire-js",[jp]:"fire-js-all"};/**
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
 */const ps=new Map,zp=new Map,zi=new Map;function vc(n,e){try{n.container.addComponent(e)}catch(t){st.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wt(n){const e=n.name;if(zi.has(e))return st.debug(`There were multiple attempts to register component ${e}.`),!1;zi.set(e,n);for(const t of ps.values())vc(t,n);for(const t of zp.values())vc(t,n);return!0}function Ns(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Oe(n){return n==null?!1:n.settings!==void 0}/**
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
 */const Hp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vt=new Er("app","Firebase",Hp);/**
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
 */class Wp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Yt=qp;function Gp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$i,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw vt.create("bad-app-name",{appName:String(s)});if(t||(t=tl()),!t)throw vt.create("no-options");const i=ps.get(s);if(i){if(Ht(t,i.options)&&Ht(r,i.config))return i;throw vt.create("duplicate-app",{appName:s})}const a=new Yf(s);for(const l of zi.values())a.addComponent(l);const u=new Wp(t,r,a);return ps.set(s,u),u}function Eo(n=$i){const e=ps.get(n);if(!e&&n===$i&&tl())return Gp();if(!e)throw vt.create("no-app",{appName:n});return e}function ze(n,e,t){var r;let s=(r=$p[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const u=[`Unable to register library "${s}" with version "${e}":`];i&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),st.warn(u.join(" "));return}Wt(new Rt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Kp="firebase-heartbeat-database",Qp=1,cr="firebase-heartbeat-store";let Di=null;function ol(){return Di||(Di=hp(Kp,Qp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(cr)}catch(t){console.warn(t)}}}}).catch(n=>{throw vt.create("idb-open",{originalErrorMessage:n.message})})),Di}async function Xp(n){try{const t=(await ol()).transaction(cr),r=await t.objectStore(cr).get(al(n));return await t.done,r}catch(e){if(e instanceof Ye)st.warn(e.message);else{const t=vt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});st.warn(t.message)}}}async function Tc(n,e){try{const r=(await ol()).transaction(cr,"readwrite");await r.objectStore(cr).put(e,al(n)),await r.done}catch(t){if(t instanceof Ye)st.warn(t.message);else{const r=vt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});st.warn(r.message)}}}function al(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Jp=1024,Yp=30;class Zp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tm(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ic();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Yp){const a=nm(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){st.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ic(),{heartbeatsToSend:r,unsentEntries:s}=em(this._heartbeatsCache.heartbeats),i=fs(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return st.warn(t),""}}}function Ic(){return new Date().toISOString().substring(0,10)}function em(n,e=Jp){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),wc(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),wc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class tm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bf()?jf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Xp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Tc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wc(n){return fs(JSON.stringify({version:2,heartbeats:n})).length}function nm(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function rm(n){Wt(new Rt("platform-logger",e=>new pp(e),"PRIVATE")),Wt(new Rt("heartbeat",e=>new Zp(e),"PRIVATE")),ze(qi,Ec,n),ze(qi,Ec,"esm2017"),ze("fire-js","")}rm("");function vo(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function VT(n,e,t,r){function s(i){return i instanceof t?i:new t(function(a){a(i)})}return new(t||(t=Promise))(function(i,a){function u(p){try{d(r.next(p))}catch(g){a(g)}}function l(p){try{d(r.throw(p))}catch(g){a(g)}}function d(p){p.done?i(p.value):s(p.value).then(u,l)}d((r=r.apply(n,e||[])).next())})}function cl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sm=cl,ul=new Er("auth","Firebase",cl());/**
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
 */const ms=new _o("@firebase/auth");function im(n,...e){ms.logLevel<=H.WARN&&ms.warn(`Auth (${Yt}): ${n}`,...e)}function rs(n,...e){ms.logLevel<=H.ERROR&&ms.error(`Auth (${Yt}): ${n}`,...e)}/**
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
 */function Be(n,...e){throw To(n,...e)}function He(n,...e){return To(n,...e)}function ll(n,e,t){const r=Object.assign(Object.assign({},sm()),{[e]:t});return new Er("auth","Firebase",r).create(e,{appName:n.name})}function Tt(n){return ll(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function To(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ul.create(n,...e)}function M(n,e,...t){if(!n)throw To(e,...t)}function nt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw rs(e),new Error(e)}function it(n,e){n||nt(e)}/**
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
 */function Hi(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function om(){return Ac()==="http:"||Ac()==="https:"}function Ac(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function am(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(om()||Mf()||"connection"in navigator)?navigator.onLine:!0}function cm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Tr{constructor(e,t){this.shortDelay=e,this.longDelay=t,it(t>e,"Short delay should be less than long delay!"),this.isMobile=Vf()||xf()}get(){return am()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Io(n,e){it(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class hl{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const um={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lm=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hm=new Tr(3e4,6e4);function Zt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ot(n,e,t,r,s={}){return dl(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const u=vr(Object.assign({key:n.config.apiKey},a)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const d=Object.assign({method:e,headers:l},i);return Lf()||(d.referrerPolicy="no-referrer"),n.emulatorConfig&&Vt(n.emulatorConfig.host)&&(d.credentials="include"),hl.fetch()(await fl(n,n.config.apiHost,t,u),d)})}async function dl(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},um),e);try{const s=new fm(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Qr(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const u=i.ok?a.errorMessage:a.error.message,[l,d]=u.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qr(n,"credential-already-in-use",a);if(l==="EMAIL_EXISTS")throw Qr(n,"email-already-in-use",a);if(l==="USER_DISABLED")throw Qr(n,"user-disabled",a);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ll(n,p,d);Be(n,p)}}catch(s){if(s instanceof Ye)throw s;Be(n,"network-request-failed",{message:String(s)})}}async function Vs(n,e,t,r,s={}){const i=await Ot(n,e,t,r,s);return"mfaPendingCredential"in i&&Be(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function fl(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Io(n.config,s):`${n.config.apiScheme}://${s}`;return lm.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}function dm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class fm{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(He(this.auth,"network-request-failed")),hm.get())})}}function Qr(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=He(n,e,r);return s.customData._tokenResponse=t,s}function Rc(n){return n!==void 0&&n.enterprise!==void 0}class pm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return dm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function mm(n,e){return Ot(n,"GET","/v2/recaptchaConfig",Zt(n,e))}/**
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
 */async function gm(n,e){return Ot(n,"POST","/v1/accounts:delete",e)}async function gs(n,e){return Ot(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function nr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _m(n,e=!1){const t=te(n),r=await t.getIdToken(e),s=wo(r);M(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:nr(Ni(s.auth_time)),issuedAtTime:nr(Ni(s.iat)),expirationTime:nr(Ni(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ni(n){return Number(n)*1e3}function wo(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return rs("JWT malformed, contained fewer than 3 sections"),null;try{const s=Yu(t);return s?JSON.parse(s):(rs("Failed to decode base64 JWT payload"),null)}catch(s){return rs("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bc(n){const e=wo(n);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ur(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ye&&ym(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ym({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Em{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Wi{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=nr(this.lastLoginAt),this.creationTime=nr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _s(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ur(n,gs(t,{idToken:r}));M(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?pl(i.providerUserInfo):[],u=Tm(n.providerData,a),l=n.isAnonymous,d=!(n.email&&i.passwordHash)&&!(u!=null&&u.length),p=l?d:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:u,metadata:new Wi(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function vm(n){const e=te(n);await _s(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Tm(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function pl(n){return n.map(e=>{var{providerId:t}=e,r=vo(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Im(n,e){const t=await dl(n,{},async()=>{const r=vr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await fl(n,s,"/v1/token",`key=${i}`),u=await n._getAdditionalHeaders();u["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:u,body:r};return n.emulatorConfig&&Vt(n.emulatorConfig.host)&&(l.credentials="include"),hl.fetch()(a,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function wm(n,e){return Ot(n,"POST","/v2/accounts:revokeToken",Zt(n,e))}/**
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
 */class fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){M(e.length!==0,"internal-error");const t=bc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Im(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new fn;return r&&(M(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(M(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fn,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
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
 */function dt(n,e){M(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class xe{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=vo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Em(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wi(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ur(this,this.stsTokenManager.getToken(this.auth,e));return M(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return _m(this,e)}reload(){return vm(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _s(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Oe(this.auth.app))return Promise.reject(Tt(this.auth));const e=await this.getIdToken();return await ur(this,gm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,u,l,d,p;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,N=(u=t.tenantId)!==null&&u!==void 0?u:void 0,k=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,q=(d=t.createdAt)!==null&&d!==void 0?d:void 0,U=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:F,emailVerified:z,isAnonymous:fe,providerData:Y,stsTokenManager:T}=t;M(F&&T,e,"internal-error");const m=fn.fromJSON(this.name,T);M(typeof F=="string",e,"internal-error"),dt(g,e.name),dt(E,e.name),M(typeof z=="boolean",e,"internal-error"),M(typeof fe=="boolean",e,"internal-error"),dt(b,e.name),dt(C,e.name),dt(N,e.name),dt(k,e.name),dt(q,e.name),dt(U,e.name);const y=new xe({uid:F,auth:e,email:E,emailVerified:z,displayName:g,isAnonymous:fe,photoURL:C,phoneNumber:b,tenantId:N,stsTokenManager:m,createdAt:q,lastLoginAt:U});return Y&&Array.isArray(Y)&&(y.providerData=Y.map(v=>Object.assign({},v))),k&&(y._redirectEventId=k),y}static async _fromIdTokenResponse(e,t,r=!1){const s=new fn;s.updateFromServerResponse(t);const i=new xe({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await _s(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];M(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?pl(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),u=new fn;u.updateFromIdToken(r);const l=new xe({uid:s.localId,auth:e,stsTokenManager:u,isAnonymous:a}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Wi(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,d),l}}/**
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
 */const Sc=new Map;function rt(n){it(n instanceof Function,"Expected a class definition");let e=Sc.get(n);return e?(it(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Sc.set(n,e),e)}/**
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
 */class ml{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ml.type="NONE";const Pc=ml;/**
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
 */function ss(n,e,t){return`firebase:${n}:${e}:${t}`}class pn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ss(this.userKey,s.apiKey,i),this.fullPersistenceKey=ss("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await gs(this.auth,{idToken:e}).catch(()=>{});return t?xe._fromGetAccountInfoResponse(this.auth,t,e):null}return xe._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new pn(rt(Pc),e,r);const s=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||rt(Pc);const a=ss(r,e.config.apiKey,e.name);let u=null;for(const d of t)try{const p=await d._get(a);if(p){let g;if(typeof p=="string"){const E=await gs(e,{idToken:p}).catch(()=>{});if(!E)break;g=await xe._fromGetAccountInfoResponse(e,E,p)}else g=xe._fromJSON(e,p);d!==i&&(u=g),i=d;break}}catch{}const l=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new pn(i,e,r):(i=l[0],u&&await i._set(a,u.toJSON()),await Promise.all(t.map(async d=>{if(d!==i)try{await d._remove(a)}catch{}})),new pn(i,e,r))}}/**
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
 */function Cc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(El(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(gl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tl(e))return"Blackberry";if(Il(e))return"Webos";if(_l(e))return"Safari";if((e.includes("chrome/")||yl(e))&&!e.includes("edge/"))return"Chrome";if(vl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function gl(n=Re()){return/firefox\//i.test(n)}function _l(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yl(n=Re()){return/crios\//i.test(n)}function El(n=Re()){return/iemobile/i.test(n)}function vl(n=Re()){return/android/i.test(n)}function Tl(n=Re()){return/blackberry/i.test(n)}function Il(n=Re()){return/webos/i.test(n)}function Ao(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Am(n=Re()){var e;return Ao(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Rm(){return Uf()&&document.documentMode===10}function wl(n=Re()){return Ao(n)||vl(n)||Il(n)||Tl(n)||/windows phone/i.test(n)||El(n)}/**
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
 */function Al(n,e=[]){let t;switch(n){case"Browser":t=Cc(Re());break;case"Worker":t=`${Cc(Re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Yt}/${r}`}/**
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
 */class bm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,u)=>{try{const l=e(i);a(l)}catch(l){u(l)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Sm(n,e={}){return Ot(n,"GET","/v2/passwordPolicy",Zt(n,e))}/**
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
 */const Pm=6;class Cm{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:Pm,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,u;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(a=l.containsNumericCharacter)!==null&&a!==void 0?a:!0),l.isValid&&(l.isValid=(u=l.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),l}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class km{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kc(this),this.idTokenSubscription=new kc(this),this.beforeStateQueue=new bm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ul,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=rt(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await pn.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await gs(this,{idToken:e}),r=await xe._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Oe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!a||a===u)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _s(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Oe(this.app))return Promise.reject(Tt(this));const t=e?te(e):null;return t&&M(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Oe(this.app)?Promise.reject(Tt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Oe(this.app)?Promise.reject(Tt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sm(this),t=new Cm(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Er("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await wm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&rt(e)||this._popupRedirectResolver;M(t,this,"argument-error"),this.redirectPersistenceManager=await pn.create(this,[rt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(u,this,"internal-error"),u.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,r,s);return()=>{a=!0,l()}}else{const l=e.addObserver(t);return()=>{a=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Al(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&im(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function An(n){return te(n)}class kc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Wf(t=>this.observer=t)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Os={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Dm(n){Os=n}function Rl(n){return Os.loadJS(n)}function Nm(){return Os.recaptchaEnterpriseScript}function Vm(){return Os.gapiScript}function Om(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Lm{constructor(){this.enterprise=new Mm}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Mm{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const xm="recaptcha-enterprise",bl="NO_RECAPTCHA";class Um{constructor(e){this.type=xm,this.auth=An(e)}async verify(e="verify",t=!1){async function r(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(a,u)=>{mm(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const d=new pm(l);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,a(d.siteKey)}}).catch(l=>{u(l)})})}function s(i,a,u){const l=window.grecaptcha;Rc(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(d=>{a(d)}).catch(()=>{a(bl)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Lm().execute("siteKey",{action:"verify"}):new Promise((i,a)=>{r(this.auth).then(u=>{if(!t&&Rc(window.grecaptcha))s(u,i,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Nm();l.length!==0&&(l+=u),Rl(l).then(()=>{s(u,i,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function Dc(n,e,t,r=!1,s=!1){const i=new Um(n);let a;if(s)a=bl;else try{a=await i.verify(t)}catch{a=await i.verify(t,!0)}const u=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in u){const l=u.phoneEnrollmentInfo.phoneNumber,d=u.phoneEnrollmentInfo.recaptchaToken;Object.assign(u,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:d,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in u){const l=u.phoneSignInInfo.recaptchaToken;Object.assign(u,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:a,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return u}return r?Object.assign(u,{captchaResp:a}):Object.assign(u,{captchaResponse:a}),Object.assign(u,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(u,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),u}async function Nc(n,e,t,r,s){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Dc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await Dc(n,e,t,t==="getOobCode");return r(n,u)}else return Promise.reject(a)})}/**
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
 */function Fm(n,e){const t=Ns(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Ht(i,e??{}))return s;Be(s,"already-initialized")}return t.initialize({options:e})}function Bm(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(rt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jm(n,e,t){const r=An(n);M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Sl(e),{host:a,port:u}=qm(e),l=u===null?"":`:${u}`,d={url:`${i}//${a}${l}/`},p=Object.freeze({host:a,port:u,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){M(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),M(Ht(d,r.config.emulator)&&Ht(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,Vt(a)?(mo(`${i}//${a}${l}`),go("Auth",!0)):$m()}function Sl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qm(n){const e=Sl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vc(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Vc(a)}}}function Vc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function $m(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Ro{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,t){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}async function zm(n,e){return Ot(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Hm(n,e){return Vs(n,"POST","/v1/accounts:signInWithPassword",Zt(n,e))}/**
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
 */async function Wm(n,e){return Vs(n,"POST","/v1/accounts:signInWithEmailLink",Zt(n,e))}async function Gm(n,e){return Vs(n,"POST","/v1/accounts:signInWithEmailLink",Zt(n,e))}/**
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
 */class lr extends Ro{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new lr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new lr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nc(e,t,"signInWithPassword",Hm);case"emailLink":return Wm(e,{email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nc(e,r,"signUpPassword",zm);case"emailLink":return Gm(e,{idToken:t,email:this._email,oobCode:this._password});default:Be(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function mn(n,e){return Vs(n,"POST","/v1/accounts:signInWithIdp",Zt(n,e))}/**
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
 */const Km="http://localhost";class Gt extends Ro{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Be("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=vo(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Gt(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return mn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,mn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,mn(e,t)}buildRequest(){const e={requestUri:Km,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vr(t)}return e}}/**
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
 */function Qm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xm(n){const e=Qn(Xn(n)).link,t=e?Qn(Xn(e)).deep_link_id:null,r=Qn(Xn(n)).deep_link_id;return(r?Qn(Xn(r)).link:null)||r||t||e||n}class bo{constructor(e){var t,r,s,i,a,u;const l=Qn(Xn(e)),d=(t=l.apiKey)!==null&&t!==void 0?t:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,g=Qm((s=l.mode)!==null&&s!==void 0?s:null);M(d&&p&&g,"argument-error"),this.apiKey=d,this.operation=g,this.code=p,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(a=l.lang)!==null&&a!==void 0?a:null,this.tenantId=(u=l.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=Xm(e);try{return new bo(t)}catch{return null}}}/**
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
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,t){return lr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=bo.parseLink(t);return M(r,"argument-error"),lr._fromEmailAndCode(e,r.code,r.tenantId)}}Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Pl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ir extends Pl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ft extends Ir{constructor(){super("facebook.com")}static credential(e){return Gt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ft.credential(e.oauthAccessToken)}catch{return null}}}ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";ft.PROVIDER_ID="facebook.com";/**
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
 */class pt extends Ir{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gt._fromParams({providerId:pt.PROVIDER_ID,signInMethod:pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pt.credentialFromTaggedObject(e)}static credentialFromError(e){return pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return pt.credential(t,r)}catch{return null}}}pt.GOOGLE_SIGN_IN_METHOD="google.com";pt.PROVIDER_ID="google.com";/**
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
 */class mt extends Ir{constructor(){super("github.com")}static credential(e){return Gt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch{return null}}}mt.GITHUB_SIGN_IN_METHOD="github.com";mt.PROVIDER_ID="github.com";/**
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
 */class gt extends Ir{constructor(){super("twitter.com")}static credential(e,t){return Gt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return gt.credential(t,r)}catch{return null}}}gt.TWITTER_SIGN_IN_METHOD="twitter.com";gt.PROVIDER_ID="twitter.com";/**
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
 */class yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await xe._fromIdTokenResponse(e,r,s),a=Oc(r);return new yn({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Oc(r);return new yn({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Oc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class ys extends Ye{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ys.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new ys(e,t,r,s)}}function Cl(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ys._fromErrorAndOperation(n,i,e,r):i})}async function Jm(n,e,t=!1){const r=await ur(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return yn._forOperation(n,"link",r)}/**
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
 */async function Ym(n,e,t=!1){const{auth:r}=n;if(Oe(r.app))return Promise.reject(Tt(r));const s="reauthenticate";try{const i=await ur(n,Cl(r,s,e,n),t);M(i.idToken,r,"internal-error");const a=wo(i.idToken);M(a,r,"internal-error");const{sub:u}=a;return M(n.uid===u,r,"user-mismatch"),yn._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Be(r,"user-mismatch"),i}}/**
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
 */async function kl(n,e,t=!1){if(Oe(n.app))return Promise.reject(Tt(n));const r="signIn",s=await Cl(n,r,e),i=await yn._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Zm(n,e){return kl(An(n),e)}/**
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
 */async function eg(n){const e=An(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function OT(n,e,t){return Oe(n.app)?Promise.reject(Tt(n)):Zm(te(n),Rn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&eg(n),r})}function tg(n,e,t,r){return te(n).onIdTokenChanged(e,t,r)}function ng(n,e,t){return te(n).beforeAuthStateChanged(e,t)}function LT(n,e,t,r){return te(n).onAuthStateChanged(e,t,r)}function MT(n){return te(n).signOut()}const Es="__sak";/**
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
 */class Dl{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Es,"1"),this.storage.removeItem(Es),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const rg=1e3,sg=10;class Nl extends Dl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wl(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,l)=>{this.notifyListeners(a,l)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Rm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,sg):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},rg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nl.type="LOCAL";const ig=Nl;/**
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
 */class Vl extends Dl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Vl.type="SESSION";const Ol=Vl;/**
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
 */function og(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ls{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Ls(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const u=Array.from(a).map(async d=>d(t.origin,i)),l=await og(u);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ls.receivers=[];/**
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
 */function So(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ag{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((u,l)=>{const d=So("",20);s.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===d)switch(E.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),u(E.data.response);break;default:clearTimeout(p),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function We(){return window}function cg(n){We().location.href=n}/**
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
 */function Ll(){return typeof We().WorkerGlobalScope<"u"&&typeof We().importScripts=="function"}async function ug(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function hg(){return Ll()?self:null}/**
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
 */const Ml="firebaseLocalStorageDb",dg=1,vs="firebaseLocalStorage",xl="fbase_key";class wr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ms(n,e){return n.transaction([vs],e?"readwrite":"readonly").objectStore(vs)}function fg(){const n=indexedDB.deleteDatabase(Ml);return new wr(n).toPromise()}function Gi(){const n=indexedDB.open(Ml,dg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(vs,{keyPath:xl})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(vs)?e(r):(r.close(),await fg(),e(await Gi()))})})}async function Lc(n,e,t){const r=Ms(n,!0).put({[xl]:e,value:t});return new wr(r).toPromise()}async function pg(n,e){const t=Ms(n,!1).get(e),r=await new wr(t).toPromise();return r===void 0?null:r.value}function Mc(n,e){const t=Ms(n,!0).delete(e);return new wr(t).toPromise()}const mg=800,gg=3;class Ul{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gi(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>gg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ll()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ls._getInstance(hg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await ug(),!this.activeServiceWorker)return;this.sender=new ag(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Gi();return await Lc(e,Es,"1"),await Mc(e,Es),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>pg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Mc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ms(s,!1).getAll();return new wr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ul.type="LOCAL";const _g=Ul;new Tr(3e4,6e4);/**
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
 */function yg(n,e){return e?rt(e):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Po extends Ro{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return mn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return mn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return mn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Eg(n){return kl(n.auth,new Po(n),n.bypassAuthState)}function vg(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Ym(t,new Po(n),n.bypassAuthState)}async function Tg(n){const{auth:e,user:t}=n;return M(t,e,"internal-error"),Jm(t,new Po(n),n.bypassAuthState)}/**
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
 */class Fl{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:u}=e;if(a){this.reject(a);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(l))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Eg;case"linkViaPopup":case"linkViaRedirect":return Tg;case"reauthViaPopup":case"reauthViaRedirect":return vg;default:Be(this.auth,"internal-error")}}resolve(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){it(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Ig=new Tr(2e3,1e4);class dn extends Fl{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dn.currentPopupAction&&dn.currentPopupAction.cancel(),dn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){it(this.filter.length===1,"Popup operations only handle one event");const e=So();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(He(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(He(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(He(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ig.get())};e()}}dn.currentPopupAction=null;/**
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
 */const wg="pendingRedirect",is=new Map;class Ag extends Fl{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=is.get(this.auth._key());if(!e){try{const r=await Rg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}is.set(this.auth._key(),e)}return this.bypassAuthState||is.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Rg(n,e){const t=Pg(e),r=Sg(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function bg(n,e){is.set(n._key(),e)}function Sg(n){return rt(n._redirectPersistence)}function Pg(n){return ss(wg,n.config.apiKey,n.name)}async function Cg(n,e,t=!1){if(Oe(n.app))return Promise.reject(Tt(n));const r=An(n),s=yg(r,e),a=await new Ag(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const kg=600*1e3;class Dg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ng(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Bl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(He(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kg&&this.cachedEventUids.clear(),this.cachedEventUids.has(xc(e))}saveEventToCache(e){this.cachedEventUids.add(xc(e)),this.lastProcessedEventTime=Date.now()}}function xc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Bl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ng(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bl(n);default:return!1}}/**
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
 */async function Vg(n,e={}){return Ot(n,"GET","/v1/projects",e)}/**
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
 */const Og=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Lg=/^https?/;async function Mg(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Vg(n);for(const t of e)try{if(xg(t))return}catch{}Be(n,"unauthorized-domain")}function xg(n){const e=Hi(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!Lg.test(t))return!1;if(Og.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Ug=new Tr(3e4,6e4);function Uc(){const n=We().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Fg(n){return new Promise((e,t)=>{var r,s,i;function a(){Uc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Uc(),t(He(n,"network-request-failed"))},timeout:Ug.get()})}if(!((s=(r=We().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=We().gapi)===null||i===void 0)&&i.load)a();else{const u=Om("iframefcb");return We()[u]=()=>{gapi.load?a():t(He(n,"network-request-failed"))},Rl(`${Vm()}?onload=${u}`).catch(l=>t(l))}}).catch(e=>{throw os=null,e})}let os=null;function Bg(n){return os=os||Fg(n),os}/**
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
 */const jg=new Tr(5e3,15e3),qg="__/auth/iframe",$g="emulator/auth/iframe",zg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Hg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wg(n){const e=n.config;M(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Io(e,$g):`https://${n.config.authDomain}/${qg}`,r={apiKey:e.apiKey,appName:n.name,v:Yt},s=Hg.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${vr(r).slice(1)}`}async function Gg(n){const e=await Bg(n),t=We().gapi;return M(t,n,"internal-error"),e.open({where:document.body,url:Wg(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zg,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=He(n,"network-request-failed"),u=We().setTimeout(()=>{i(a)},jg.get());function l(){We().clearTimeout(u),s(r)}r.ping(l).then(l,()=>{i(a)})}))}/**
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
 */const Kg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Qg=500,Xg=600,Jg="_blank",Yg="http://localhost";class Fc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Zg(n,e,t,r=Qg,s=Xg){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const l=Object.assign(Object.assign({},Kg),{width:r.toString(),height:s.toString(),top:i,left:a}),d=Re().toLowerCase();t&&(u=yl(d)?Jg:t),gl(d)&&(e=e||Yg,l.scrollbars="yes");const p=Object.entries(l).reduce((E,[b,C])=>`${E}${b}=${C},`,"");if(Am(d)&&u!=="_self")return e_(e||"",u),new Fc(null);const g=window.open(e||"",u,p);M(g,n,"popup-blocked");try{g.focus()}catch{}return new Fc(g)}function e_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const t_="__/auth/handler",n_="emulator/auth/handler",r_=encodeURIComponent("fac");async function Bc(n,e,t,r,s,i){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Yt,eventId:s};if(e instanceof Pl){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Hf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))a[p]=g}if(e instanceof Ir){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const l=await n._getAppCheckToken(),d=l?`#${r_}=${encodeURIComponent(l)}`:"";return`${s_(n)}?${vr(u).slice(1)}${d}`}function s_({config:n}){return n.emulator?Io(n,n_):`https://${n.authDomain}/${t_}`}/**
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
 */const Vi="webStorageSupport";class i_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ol,this._completeRedirectFn=Cg,this._overrideRedirectResult=bg}async _openPopup(e,t,r,s){var i;it((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Bc(e,t,r,Hi(),s);return Zg(e,a,So())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Bc(e,t,r,Hi(),s);return cg(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(it(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Gg(e),r=new Dg(e);return t.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vi,{type:Vi},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Vi];a!==void 0&&t(!!a),Be(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Mg(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wl()||_l()||Ao()}}const o_=i_;var jc="@firebase/auth",qc="1.10.8";/**
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
 */class a_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function c_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function u_(n){Wt(new Rt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=r.options;M(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Al(n)},d=new km(r,s,i,l);return Bm(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Wt(new Rt("auth-internal",e=>{const t=An(e.getProvider("auth").getImmediate());return(r=>new a_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ze(jc,qc,c_(n)),ze(jc,qc,"esm2017")}/**
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
 */const l_=300,h_=nl("authIdTokenMaxAge")||l_;let $c=null;const d_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>h_)return;const s=t==null?void 0:t.token;$c!==s&&($c=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function xT(n=Eo()){const e=Ns(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Fm(n,{popupRedirectResolver:o_,persistence:[_g,ig,Ol]}),r=nl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=d_(i.toString());ng(t,a,()=>a(t.currentUser)),tg(t,u=>a(u))}}const s=Zu("auth");return s&&jm(t,`http://${s}`),t}function f_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Dm({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=He("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",f_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});u_("Browser");var p_="firebase",m_="11.10.0";/**
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
 */ze(p_,m_,"app");var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var It,jl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,m){function y(){}y.prototype=m.prototype,T.D=m.prototype,T.prototype=new y,T.prototype.constructor=T,T.C=function(v,I,A){for(var _=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)_[Ze-2]=arguments[Ze];return m.prototype[I].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,m,y){y||(y=0);var v=Array(16);if(typeof m=="string")for(var I=0;16>I;++I)v[I]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(I=0;16>I;++I)v[I]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=T.g[0],y=T.g[1],I=T.g[2];var A=T.g[3],_=m+(A^y&(I^A))+v[0]+3614090360&4294967295;m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+v[1]+3905402710&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+v[2]+606105819&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+v[3]+3250441966&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(A^y&(I^A))+v[4]+4118548399&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+v[5]+1200080426&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+v[6]+2821735955&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+v[7]+4249261313&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(A^y&(I^A))+v[8]+1770035416&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+v[9]+2336552879&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+v[10]+4294925233&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+v[11]+2304563134&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(A^y&(I^A))+v[12]+1804603682&4294967295,m=y+(_<<7&4294967295|_>>>25),_=A+(I^m&(y^I))+v[13]+4254626195&4294967295,A=m+(_<<12&4294967295|_>>>20),_=I+(y^A&(m^y))+v[14]+2792965006&4294967295,I=A+(_<<17&4294967295|_>>>15),_=y+(m^I&(A^m))+v[15]+1236535329&4294967295,y=I+(_<<22&4294967295|_>>>10),_=m+(I^A&(y^I))+v[1]+4129170786&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+v[6]+3225465664&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+v[11]+643717713&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+v[0]+3921069994&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(I^A&(y^I))+v[5]+3593408605&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+v[10]+38016083&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+v[15]+3634488961&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+v[4]+3889429448&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(I^A&(y^I))+v[9]+568446438&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+v[14]+3275163606&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+v[3]+4107603335&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+v[8]+1163531501&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(I^A&(y^I))+v[13]+2850285829&4294967295,m=y+(_<<5&4294967295|_>>>27),_=A+(y^I&(m^y))+v[2]+4243563512&4294967295,A=m+(_<<9&4294967295|_>>>23),_=I+(m^y&(A^m))+v[7]+1735328473&4294967295,I=A+(_<<14&4294967295|_>>>18),_=y+(A^m&(I^A))+v[12]+2368359562&4294967295,y=I+(_<<20&4294967295|_>>>12),_=m+(y^I^A)+v[5]+4294588738&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+v[8]+2272392833&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+v[11]+1839030562&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+v[14]+4259657740&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(y^I^A)+v[1]+2763975236&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+v[4]+1272893353&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+v[7]+4139469664&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+v[10]+3200236656&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(y^I^A)+v[13]+681279174&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+v[0]+3936430074&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+v[3]+3572445317&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+v[6]+76029189&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(y^I^A)+v[9]+3654602809&4294967295,m=y+(_<<4&4294967295|_>>>28),_=A+(m^y^I)+v[12]+3873151461&4294967295,A=m+(_<<11&4294967295|_>>>21),_=I+(A^m^y)+v[15]+530742520&4294967295,I=A+(_<<16&4294967295|_>>>16),_=y+(I^A^m)+v[2]+3299628645&4294967295,y=I+(_<<23&4294967295|_>>>9),_=m+(I^(y|~A))+v[0]+4096336452&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+v[7]+1126891415&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+v[14]+2878612391&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+v[5]+4237533241&4294967295,y=I+(_<<21&4294967295|_>>>11),_=m+(I^(y|~A))+v[12]+1700485571&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+v[3]+2399980690&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+v[10]+4293915773&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+v[1]+2240044497&4294967295,y=I+(_<<21&4294967295|_>>>11),_=m+(I^(y|~A))+v[8]+1873313359&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+v[15]+4264355552&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+v[6]+2734768916&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+v[13]+1309151649&4294967295,y=I+(_<<21&4294967295|_>>>11),_=m+(I^(y|~A))+v[4]+4149444226&4294967295,m=y+(_<<6&4294967295|_>>>26),_=A+(y^(m|~I))+v[11]+3174756917&4294967295,A=m+(_<<10&4294967295|_>>>22),_=I+(m^(A|~y))+v[2]+718787259&4294967295,I=A+(_<<15&4294967295|_>>>17),_=y+(A^(I|~m))+v[9]+3951481745&4294967295,T.g[0]=T.g[0]+m&4294967295,T.g[1]=T.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,T.g[2]=T.g[2]+I&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.u=function(T,m){m===void 0&&(m=T.length);for(var y=m-this.blockSize,v=this.B,I=this.h,A=0;A<m;){if(I==0)for(;A<=y;)s(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<m;)if(v[I++]=T.charCodeAt(A++),I==this.blockSize){s(this,v),I=0;break}}else for(;A<m;)if(v[I++]=T[A++],I==this.blockSize){s(this,v),I=0;break}}this.h=I,this.o+=m},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var m=1;m<T.length-8;++m)T[m]=0;var y=8*this.o;for(m=T.length-8;m<T.length;++m)T[m]=y&255,y/=256;for(this.u(T),T=Array(16),m=y=0;4>m;++m)for(var v=0;32>v;v+=8)T[y++]=this.g[m]>>>v&255;return T};function i(T,m){var y=u;return Object.prototype.hasOwnProperty.call(y,T)?y[T]:y[T]=m(T)}function a(T,m){this.h=m;for(var y=[],v=!0,I=T.length-1;0<=I;I--){var A=T[I]|0;v&&A==m||(y[I]=A,v=!1)}this.g=y}var u={};function l(T){return-128<=T&&128>T?i(T,function(m){return new a([m|0],0>m?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return k(d(-T));for(var m=[],y=1,v=0;T>=y;v++)m[v]=T/y|0,y*=4294967296;return new a(m,0)}function p(T,m){if(T.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(T.charAt(0)=="-")return k(p(T.substring(1),m));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=d(Math.pow(m,8)),v=g,I=0;I<T.length;I+=8){var A=Math.min(8,T.length-I),_=parseInt(T.substring(I,I+A),m);8>A?(A=d(Math.pow(m,A)),v=v.j(A).add(d(_))):(v=v.j(y),v=v.add(d(_)))}return v}var g=l(0),E=l(1),b=l(16777216);n=a.prototype,n.m=function(){if(N(this))return-k(this).m();for(var T=0,m=1,y=0;y<this.g.length;y++){var v=this.i(y);T+=(0<=v?v:4294967296+v)*m,m*=4294967296}return T},n.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(N(this))return"-"+k(this).toString(T);for(var m=d(Math.pow(T,6)),y=this,v="";;){var I=z(y,m).g;y=q(y,I.j(m));var A=((0<y.g.length?y.g[0]:y.h)>>>0).toString(T);if(y=I,C(y))return A+v;for(;6>A.length;)A="0"+A;v=A+v}},n.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var m=0;m<T.g.length;m++)if(T.g[m]!=0)return!1;return!0}function N(T){return T.h==-1}n.l=function(T){return T=q(this,T),N(T)?-1:C(T)?0:1};function k(T){for(var m=T.g.length,y=[],v=0;v<m;v++)y[v]=~T.g[v];return new a(y,~T.h).add(E)}n.abs=function(){return N(this)?k(this):this},n.add=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],v=0,I=0;I<=m;I++){var A=v+(this.i(I)&65535)+(T.i(I)&65535),_=(A>>>16)+(this.i(I)>>>16)+(T.i(I)>>>16);v=_>>>16,A&=65535,_&=65535,y[I]=_<<16|A}return new a(y,y[y.length-1]&-2147483648?-1:0)};function q(T,m){return T.add(k(m))}n.j=function(T){if(C(this)||C(T))return g;if(N(this))return N(T)?k(this).j(k(T)):k(k(this).j(T));if(N(T))return k(this.j(k(T)));if(0>this.l(b)&&0>T.l(b))return d(this.m()*T.m());for(var m=this.g.length+T.g.length,y=[],v=0;v<2*m;v++)y[v]=0;for(v=0;v<this.g.length;v++)for(var I=0;I<T.g.length;I++){var A=this.i(v)>>>16,_=this.i(v)&65535,Ze=T.i(I)>>>16,Dn=T.i(I)&65535;y[2*v+2*I]+=_*Dn,U(y,2*v+2*I),y[2*v+2*I+1]+=A*Dn,U(y,2*v+2*I+1),y[2*v+2*I+1]+=_*Ze,U(y,2*v+2*I+1),y[2*v+2*I+2]+=A*Ze,U(y,2*v+2*I+2)}for(v=0;v<m;v++)y[v]=y[2*v+1]<<16|y[2*v];for(v=m;v<2*m;v++)y[v]=0;return new a(y,0)};function U(T,m){for(;(T[m]&65535)!=T[m];)T[m+1]+=T[m]>>>16,T[m]&=65535,m++}function F(T,m){this.g=T,this.h=m}function z(T,m){if(C(m))throw Error("division by zero");if(C(T))return new F(g,g);if(N(T))return m=z(k(T),m),new F(k(m.g),k(m.h));if(N(m))return m=z(T,k(m)),new F(k(m.g),m.h);if(30<T.g.length){if(N(T)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var y=E,v=m;0>=v.l(T);)y=fe(y),v=fe(v);var I=Y(y,1),A=Y(v,1);for(v=Y(v,2),y=Y(y,2);!C(v);){var _=A.add(v);0>=_.l(T)&&(I=I.add(y),A=_),v=Y(v,1),y=Y(y,1)}return m=q(T,I.j(m)),new F(I,m)}for(I=g;0<=T.l(m);){for(y=Math.max(1,Math.floor(T.m()/m.m())),v=Math.ceil(Math.log(y)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),A=d(y),_=A.j(m);N(_)||0<_.l(T);)y-=v,A=d(y),_=A.j(m);C(A)&&(A=E),I=I.add(A),T=q(T,_)}return new F(I,T)}n.A=function(T){return z(this,T).h},n.and=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)&T.i(v);return new a(y,this.h&T.h)},n.or=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)|T.i(v);return new a(y,this.h|T.h)},n.xor=function(T){for(var m=Math.max(this.g.length,T.g.length),y=[],v=0;v<m;v++)y[v]=this.i(v)^T.i(v);return new a(y,this.h^T.h)};function fe(T){for(var m=T.g.length+1,y=[],v=0;v<m;v++)y[v]=T.i(v)<<1|T.i(v-1)>>>31;return new a(y,T.h)}function Y(T,m){var y=m>>5;m%=32;for(var v=T.g.length-y,I=[],A=0;A<v;A++)I[A]=0<m?T.i(A+y)>>>m|T.i(A+y+1)<<32-m:T.i(A+y);return new a(I,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,jl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,It=a}).apply(typeof zc<"u"?zc:typeof self<"u"?self:typeof window<"u"?window:{});var Xr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ql,Jn,$l,as,Ki,zl,Hl,Wl;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xr=="object"&&Xr];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var w=o[f];if(!(w in h))break e;h=h[w]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,f=!1,w={next:function(){if(!f&&h<o.length){var R=h++;return{value:c(R,o[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function p(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),o.apply(c,w)}}return function(){return o.apply(c,arguments)}}function E(o,c,h){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:g,E.apply(null,arguments)}function b(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function C(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,w,R){for(var D=Array(arguments.length-2),X=2;X<arguments.length;X++)D[X-2]=arguments[X];return c.prototype[w].apply(f,D)}}function N(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function k(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(l(f)){const w=o.length||0,R=f.length||0;o.length=w+R;for(let D=0;D<R;D++)o[w+D]=f[D]}else o.push(f)}}class q{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function U(o){return/^[\s\xa0]*$/.test(o)}function F(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var fe=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function Y(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function T(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function m(o){const c={};for(const h in o)c[h]=o[h];return c}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,c){let h,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(h in f)o[h]=f[h];for(let R=0;R<y.length;R++)h=y[R],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function I(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function A(o){u.setTimeout(()=>{throw o},0)}function _(){var o=ri;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Ze{constructor(){this.h=this.g=null}add(c,h){const f=Dn.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Dn=new q(()=>new Bd,o=>o.reset());class Bd{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Nn,Vn=!1,ri=new Ze,fa=()=>{const o=u.Promise.resolve(void 0);Nn=()=>{o.then(jd)}};var jd=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){A(h)}var c=Dn;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Vn=!1};function ct(){this.s=this.s,this.C=this.C}ct.prototype.s=!1,ct.prototype.ma=function(){this.s||(this.s=!0,this.N())},ct.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ye(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}ye.prototype.h=function(){this.defaultPrevented=!0};var qd=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o})();function On(o,c){if(ye.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(fe){e:{try{z(c.nodeName);var w=!0;break e}catch{}w=!1}w||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:$d[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&On.aa.h.call(this)}}C(On,ye);var $d={2:"touch",3:"pen",4:"mouse"};On.prototype.h=function(){On.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var kr="closure_listenable_"+(1e6*Math.random()|0),zd=0;function Hd(o,c,h,f,w){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=w,this.key=++zd,this.da=this.fa=!1}function Dr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Nr(o){this.src=o,this.g={},this.h=0}Nr.prototype.add=function(o,c,h,f,w){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var D=ii(o,c,f,w);return-1<D?(c=o[D],h||(c.fa=!1)):(c=new Hd(c,this.src,R,!!f,w),c.fa=h,o.push(c)),c};function si(o,c){var h=c.type;if(h in o.g){var f=o.g[h],w=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=w)&&Array.prototype.splice.call(f,w,1),R&&(Dr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function ii(o,c,h,f){for(var w=0;w<o.length;++w){var R=o[w];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==f)return w}return-1}var oi="closure_lm_"+(1e6*Math.random()|0),ai={};function pa(o,c,h,f,w){if(Array.isArray(c)){for(var R=0;R<c.length;R++)pa(o,c[R],h,f,w);return null}return h=_a(h),o&&o[kr]?o.K(c,h,d(f)?!!f.capture:!1,w):Wd(o,c,h,!1,f,w)}function Wd(o,c,h,f,w,R){if(!c)throw Error("Invalid event type");var D=d(w)?!!w.capture:!!w,X=ui(o);if(X||(o[oi]=X=new Nr(o)),h=X.add(c,h,f,D,R),h.proxy)return h;if(f=Gd(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)qd||(w=D),w===void 0&&(w=!1),o.addEventListener(c.toString(),f,w);else if(o.attachEvent)o.attachEvent(ga(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Gd(){function o(h){return c.call(o.src,o.listener,h)}const c=Kd;return o}function ma(o,c,h,f,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)ma(o,c[R],h,f,w);else f=d(f)?!!f.capture:!!f,h=_a(h),o&&o[kr]?(o=o.i,c=String(c).toString(),c in o.g&&(R=o.g[c],h=ii(R,h,f,w),-1<h&&(Dr(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[c],o.h--)))):o&&(o=ui(o))&&(c=o.g[c.toString()],o=-1,c&&(o=ii(c,h,f,w)),(h=-1<o?c[o]:null)&&ci(h))}function ci(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[kr])si(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(ga(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=ui(c))?(si(h,o),h.h==0&&(h.src=null,c[oi]=null)):Dr(o)}}}function ga(o){return o in ai?ai[o]:ai[o]="on"+o}function Kd(o,c){if(o.da)o=!0;else{c=new On(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&ci(o),o=h.call(f,c)}return o}function ui(o){return o=o[oi],o instanceof Nr?o:null}var li="__closure_events_fn_"+(1e9*Math.random()>>>0);function _a(o){return typeof o=="function"?o:(o[li]||(o[li]=function(c){return o.handleEvent(c)}),o[li])}function Ee(){ct.call(this),this.i=new Nr(this),this.M=this,this.F=null}C(Ee,ct),Ee.prototype[kr]=!0,Ee.prototype.removeEventListener=function(o,c,h,f){ma(this,o,c,h,f)};function be(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new ye(c,o);else if(c instanceof ye)c.target=c.target||o;else{var w=c;c=new ye(f,o),v(c,w)}if(w=!0,h)for(var R=h.length-1;0<=R;R--){var D=c.g=h[R];w=Vr(D,f,!0,c)&&w}if(D=c.g=o,w=Vr(D,f,!0,c)&&w,w=Vr(D,f,!1,c)&&w,h)for(R=0;R<h.length;R++)D=c.g=h[R],w=Vr(D,f,!1,c)&&w}Ee.prototype.N=function(){if(Ee.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)Dr(h[f]);delete o.g[c],o.h--}}this.F=null},Ee.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},Ee.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function Vr(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,R=0;R<c.length;++R){var D=c[R];if(D&&!D.da&&D.capture==h){var X=D.listener,pe=D.ha||D.src;D.fa&&si(o.i,D),w=X.call(pe,f)!==!1&&w}}return w&&!f.defaultPrevented}function ya(o,c,h){if(typeof o=="function")h&&(o=E(o,h));else if(o&&typeof o.handleEvent=="function")o=E(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function Ea(o){o.g=ya(()=>{o.g=null,o.i&&(o.i=!1,Ea(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Qd extends ct{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Ea(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ln(o){ct.call(this),this.h=o,this.g={}}C(Ln,ct);var va=[];function Ta(o){Y(o.g,function(c,h){this.g.hasOwnProperty(h)&&ci(c)},o),o.g={}}Ln.prototype.N=function(){Ln.aa.N.call(this),Ta(this)},Ln.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hi=u.JSON.stringify,Xd=u.JSON.parse,Jd=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function di(){}di.prototype.h=null;function Ia(o){return o.h||(o.h=o.i())}function wa(){}var Mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function fi(){ye.call(this,"d")}C(fi,ye);function pi(){ye.call(this,"c")}C(pi,ye);var xt={},Aa=null;function Or(){return Aa=Aa||new Ee}xt.La="serverreachability";function Ra(o){ye.call(this,xt.La,o)}C(Ra,ye);function xn(o){const c=Or();be(c,new Ra(c))}xt.STAT_EVENT="statevent";function ba(o,c){ye.call(this,xt.STAT_EVENT,o),this.stat=c}C(ba,ye);function Se(o){const c=Or();be(c,new ba(c,o))}xt.Ma="timingevent";function Sa(o,c){ye.call(this,xt.Ma,o),this.size=c}C(Sa,ye);function Un(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Fn(){this.g=!0}Fn.prototype.xa=function(){this.g=!1};function Yd(o,c,h,f,w,R){o.info(function(){if(o.g)if(R)for(var D="",X=R.split("&"),pe=0;pe<X.length;pe++){var K=X[pe].split("=");if(1<K.length){var ve=K[0];K=K[1];var Te=ve.split("_");D=2<=Te.length&&Te[1]=="type"?D+(ve+"="+K+"&"):D+(ve+"=redacted&")}}else D=null;else D=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+h+`
`+D})}function Zd(o,c,h,f,w,R,D){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+h+`
`+R+" "+D})}function rn(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+tf(o,h)+(f?" "+f:"")})}function ef(o,c){o.info(function(){return"TIMEOUT: "+c})}Fn.prototype.info=function(){};function tf(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var D=1;D<w.length;D++)w[D]=""}}}}return hi(h)}catch{return c}}var Lr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Pa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mi;function Mr(){}C(Mr,di),Mr.prototype.g=function(){return new XMLHttpRequest},Mr.prototype.i=function(){return{}},mi=new Mr;function ut(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new Ln(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ca}function Ca(){this.i=null,this.g="",this.h=!1}var ka={},gi={};function _i(o,c,h){o.L=1,o.v=Br(et(c)),o.m=h,o.P=!0,Da(o,null)}function Da(o,c){o.F=Date.now(),xr(o),o.A=et(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Ha(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Ca,o.g=uc(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Qd(E(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var w="readystatechange";Array.isArray(w)||(w&&(va[0]=w.toString()),w=va);for(var R=0;R<w.length;R++){var D=pa(h,w[R],f||c.handleEvent,!1,c.h||c);if(!D)break;c.g[D.key]=D}c=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),xn(),Yd(o.i,o.u,o.A,o.l,o.R,o.m)}ut.prototype.ca=function(o){o=o.target;const c=this.M;c&&tt(o)==3?c.j():this.Y(o)},ut.prototype.Y=function(o){try{if(o==this.g)e:{const Te=tt(this.g);var c=this.g.Ba();const an=this.g.Z();if(!(3>Te)&&(Te!=3||this.g&&(this.h.h||this.g.oa()||Ya(this.g)))){this.J||Te!=4||c==7||(c==8||0>=an?xn(3):xn(2)),yi(this);var h=this.g.Z();this.X=h;t:if(Na(this)){var f=Ya(this.g);o="";var w=f.length,R=tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ut(this),Bn(this);var D="";break t}this.h.i=new u.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(R&&c==w-1)});f.length=0,this.h.g+=o,this.C=0,D=this.h.g}else D=this.g.oa();if(this.o=h==200,Zd(this.i,this.u,this.A,this.l,this.R,Te,h),this.o){if(this.T&&!this.K){t:{if(this.g){var X,pe=this.g;if((X=pe.g?pe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(X)){var K=X;break t}}K=null}if(h=K)rn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ei(this,h);else{this.o=!1,this.s=3,Se(12),Ut(this),Bn(this);break e}}if(this.P){h=!0;let Me;for(;!this.J&&this.C<D.length;)if(Me=nf(this,D),Me==gi){Te==4&&(this.s=4,Se(14),h=!1),rn(this.i,this.l,null,"[Incomplete Response]");break}else if(Me==ka){this.s=4,Se(15),rn(this.i,this.l,D,"[Invalid Chunk]"),h=!1;break}else rn(this.i,this.l,Me,null),Ei(this,Me);if(Na(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||D.length!=0||this.h.h||(this.s=1,Se(16),h=!1),this.o=this.o&&h,!h)rn(this.i,this.l,D,"[Invalid Chunked Response]"),Ut(this),Bn(this);else if(0<D.length&&!this.W){this.W=!0;var ve=this.j;ve.g==this&&ve.ba&&!ve.M&&(ve.j.info("Great, no buffering proxy detected. Bytes received: "+D.length),Ri(ve),ve.M=!0,Se(11))}}else rn(this.i,this.l,D,null),Ei(this,D);Te==4&&Ut(this),this.o&&!this.J&&(Te==4?ic(this.j,this):(this.o=!1,xr(this)))}else vf(this.g),h==400&&0<D.indexOf("Unknown SID")?(this.s=3,Se(12)):(this.s=0,Se(13)),Ut(this),Bn(this)}}}catch{}finally{}};function Na(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function nf(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?gi:(h=Number(c.substring(h,f)),isNaN(h)?ka:(f+=1,f+h>c.length?gi:(c=c.slice(f,f+h),o.C=f+h,c)))}ut.prototype.cancel=function(){this.J=!0,Ut(this)};function xr(o){o.S=Date.now()+o.I,Va(o,o.I)}function Va(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Un(E(o.ba,o),c)}function yi(o){o.B&&(u.clearTimeout(o.B),o.B=null)}ut.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(ef(this.i,this.A),this.L!=2&&(xn(),Se(17)),Ut(this),this.s=2,Bn(this)):Va(this,this.S-o)};function Bn(o){o.j.G==0||o.J||ic(o.j,o)}function Ut(o){yi(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Ta(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Ei(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||vi(h.h,o))){if(!o.K&&vi(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Wr(h),zr(h);else break e;Ai(h),Se(18)}}else h.za=w[1],0<h.za-h.T&&37500>w[2]&&h.F&&h.v==0&&!h.C&&(h.C=Un(E(h.Za,h),6e3));if(1>=Ma(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Bt(h,11)}else if((o.K||h.g==o)&&Wr(h),!U(c))for(w=h.Da.g.parse(c),c=0;c<w.length;c++){let K=w[c];if(h.T=K[0],K=K[1],h.G==2)if(K[0]=="c"){h.K=K[1],h.ia=K[2];const ve=K[3];ve!=null&&(h.la=ve,h.j.info("VER="+h.la));const Te=K[4];Te!=null&&(h.Aa=Te,h.j.info("SVER="+h.Aa));const an=K[5];an!=null&&typeof an=="number"&&0<an&&(f=1.5*an,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const Me=o.g;if(Me){const Kr=Me.g?Me.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Kr){var R=f.h;R.g||Kr.indexOf("spdy")==-1&&Kr.indexOf("quic")==-1&&Kr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ti(R,R.h),R.h=null))}if(f.D){const bi=Me.g?Me.g.getResponseHeader("X-HTTP-Session-Id"):null;bi&&(f.ya=bi,Z(f.I,f.D,bi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var D=o;if(f.qa=cc(f,f.J?f.ia:null,f.W),D.K){xa(f.h,D);var X=D,pe=f.L;pe&&(X.I=pe),X.B&&(yi(X),xr(X)),f.g=D}else rc(f);0<h.i.length&&Hr(h)}else K[0]!="stop"&&K[0]!="close"||Bt(h,7);else h.G==3&&(K[0]=="stop"||K[0]=="close"?K[0]=="stop"?Bt(h,7):wi(h):K[0]!="noop"&&h.l&&h.l.ta(K),h.v=0)}}xn(4)}catch{}}var rf=class{constructor(o,c){this.g=o,this.map=c}};function Oa(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function La(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ma(o){return o.h?1:o.g?o.g.size:0}function vi(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ti(o,c){o.g?o.g.add(c):o.h=c}function xa(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Oa.prototype.cancel=function(){if(this.i=Ua(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ua(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return N(o.i)}function sf(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function of(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function Fa(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=of(o),f=sf(o),w=f.length,R=0;R<w;R++)c.call(void 0,f[R],h&&h[R],o)}var Ba=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function af(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),w=null;if(0<=f){var R=o[h].substring(0,f);w=o[h].substring(f+1)}else R=o[h];c(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function Ft(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ft){this.h=o.h,Ur(this,o.j),this.o=o.o,this.g=o.g,Fr(this,o.s),this.l=o.l;var c=o.i,h=new $n;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),ja(this,h),this.m=o.m}else o&&(c=String(o).match(Ba))?(this.h=!1,Ur(this,c[1]||"",!0),this.o=jn(c[2]||""),this.g=jn(c[3]||"",!0),Fr(this,c[4]),this.l=jn(c[5]||"",!0),ja(this,c[6]||"",!0),this.m=jn(c[7]||"")):(this.h=!1,this.i=new $n(null,this.h))}Ft.prototype.toString=function(){var o=[],c=this.j;c&&o.push(qn(c,qa,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(qn(c,qa,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(qn(h,h.charAt(0)=="/"?lf:uf,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",qn(h,df)),o.join("")};function et(o){return new Ft(o)}function Ur(o,c,h){o.j=h?jn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Fr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function ja(o,c,h){c instanceof $n?(o.i=c,ff(o.i,o.h)):(h||(c=qn(c,hf)),o.i=new $n(c,o.h))}function Z(o,c,h){o.i.set(c,h)}function Br(o){return Z(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function jn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function qn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,cf),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function cf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var qa=/[#\/\?@]/g,uf=/[#\?:]/g,lf=/[#\?]/g,hf=/[#\?@]/g,df=/#/g;function $n(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function lt(o){o.g||(o.g=new Map,o.h=0,o.i&&af(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=$n.prototype,n.add=function(o,c){lt(this),this.i=null,o=sn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function $a(o,c){lt(o),c=sn(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function za(o,c){return lt(o),c=sn(o,c),o.g.has(c)}n.forEach=function(o,c){lt(this),this.g.forEach(function(h,f){h.forEach(function(w){o.call(c,w,f,this)},this)},this)},n.na=function(){lt(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const w=o[f];for(let R=0;R<w.length;R++)h.push(c[f])}return h},n.V=function(o){lt(this);let c=[];if(typeof o=="string")za(this,o)&&(c=c.concat(this.g.get(sn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return lt(this),this.i=null,o=sn(this,o),za(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Ha(o,c,h){$a(o,c),0<h.length&&(o.i=null,o.g.set(sn(o,c),N(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const R=encodeURIComponent(String(f)),D=this.V(f);for(f=0;f<D.length;f++){var w=R;D[f]!==""&&(w+="="+encodeURIComponent(String(D[f]))),o.push(w)}}return this.i=o.join("&")};function sn(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function ff(o,c){c&&!o.j&&(lt(o),o.i=null,o.g.forEach(function(h,f){var w=f.toLowerCase();f!=w&&($a(this,f),Ha(this,w,h))},o)),o.j=c}function pf(o,c){const h=new Fn;if(u.Image){const f=new Image;f.onload=b(ht,h,"TestLoadImage: loaded",!0,c,f),f.onerror=b(ht,h,"TestLoadImage: error",!1,c,f),f.onabort=b(ht,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=b(ht,h,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function mf(o,c){const h=new Fn,f=new AbortController,w=setTimeout(()=>{f.abort(),ht(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?ht(h,"TestPingServer: ok",!0,c):ht(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),ht(h,"TestPingServer: error",!1,c)})}function ht(o,c,h,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(h)}catch{}}function gf(){this.g=new Jd}function _f(o,c,h){const f=h||"";try{Fa(o,function(w,R){let D=w;d(w)&&(D=hi(w)),c.push(f+R+"="+encodeURIComponent(D))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function jr(o){this.l=o.Ub||null,this.j=o.eb||!1}C(jr,di),jr.prototype.g=function(){return new qr(this.l,this.j)},jr.prototype.i=(function(o){return function(){return o}})({});function qr(o,c){Ee.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(qr,Ee),n=qr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Hn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Hn(this)),this.g&&(this.readyState=3,Hn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Wa(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Wa(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?zn(this):Hn(this),this.readyState==3&&Wa(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,zn(this))},n.Qa=function(o){this.g&&(this.response=o,zn(this))},n.ga=function(){this.g&&zn(this)};function zn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Hn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Hn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ga(o){let c="";return Y(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Ii(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Ga(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):Z(o,c,h))}function re(o){Ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(re,Ee);var yf=/^https?$/i,Ef=["POST","PUT"];n=re.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mi.g(),this.v=this.o?Ia(this.o):Ia(mi),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){Ka(this,R);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)h.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),w=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(Ef,c,void 0))||f||w||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,D]of h)this.g.setRequestHeader(R,D);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ja(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Ka(this,R)}};function Ka(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Qa(o),$r(o)}function Qa(o){o.A||(o.A=!0,be(o,"complete"),be(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,be(this,"complete"),be(this,"abort"),$r(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$r(this,!0)),re.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Xa(this):this.bb())},n.bb=function(){Xa(this)};function Xa(o){if(o.h&&typeof a<"u"&&(!o.v[1]||tt(o)!=4||o.Z()!=2)){if(o.u&&tt(o)==4)ya(o.Ea,0,o);else if(be(o,"readystatechange"),tt(o)==4){o.h=!1;try{const D=o.Z();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=D===0){var w=String(o.D).match(Ba)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),f=!yf.test(w?w.toLowerCase():"")}h=f}if(h)be(o,"complete"),be(o,"success");else{o.m=6;try{var R=2<tt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",Qa(o)}}finally{$r(o)}}}}function $r(o,c){if(o.g){Ja(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||be(o,"ready");try{h.onreadystatechange=f}catch{}}}function Ja(o){o.I&&(u.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function tt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<tt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Xd(c)}};function Ya(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function vf(o){const c={};o=(o.g&&2<=tt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(U(o[f]))continue;var h=I(o[f]);const w=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[w]||[];c[w]=R,R.push(h)}T(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Wn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Za(o){this.Aa=0,this.i=[],this.j=new Fn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Wn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Wn("baseRetryDelayMs",5e3,o),this.cb=Wn("retryDelaySeedMs",1e4,o),this.Wa=Wn("forwardChannelMaxRetries",2,o),this.wa=Wn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Oa(o&&o.concurrentRequestLimit),this.Da=new gf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Za.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,f){Se(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=cc(this,null,this.W),Hr(this)};function wi(o){if(ec(o),o.G==3){var c=o.U++,h=et(o.I);if(Z(h,"SID",o.K),Z(h,"RID",c),Z(h,"TYPE","terminate"),Gn(o,h),c=new ut(o,o.j,c),c.L=2,c.v=Br(et(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=uc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),xr(c)}ac(o)}function zr(o){o.g&&(Ri(o),o.g.cancel(),o.g=null)}function ec(o){zr(o),o.u&&(u.clearTimeout(o.u),o.u=null),Wr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function Hr(o){if(!La(o.h)&&!o.s){o.s=!0;var c=o.Ga;Nn||fa(),Vn||(Nn(),Vn=!0),ri.add(c,o),o.B=0}}function Tf(o,c){return Ma(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Un(E(o.Ga,o,c),oc(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const w=new ut(this,this.j,o);let R=this.o;if(this.S&&(R?(R=m(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=nc(this,w,c),h=et(this.I),Z(h,"RID",o),Z(h,"CVER",22),this.D&&Z(h,"X-HTTP-Session-Id",this.D),Gn(this,h),R&&(this.O?c="headers="+encodeURIComponent(String(Ga(R)))+"&"+c:this.m&&Ii(h,this.m,R)),Ti(this.h,w),this.Ua&&Z(h,"TYPE","init"),this.P?(Z(h,"$req",c),Z(h,"SID","null"),w.T=!0,_i(w,h,null)):_i(w,h,c),this.G=2}}else this.G==3&&(o?tc(this,o):this.i.length==0||La(this.h)||tc(this))};function tc(o,c){var h;c?h=c.l:h=o.U++;const f=et(o.I);Z(f,"SID",o.K),Z(f,"RID",h),Z(f,"AID",o.T),Gn(o,f),o.m&&o.o&&Ii(f,o.m,o.o),h=new ut(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=nc(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ti(o.h,h),_i(h,f,c)}function Gn(o,c){o.H&&Y(o.H,function(h,f){Z(c,f,h)}),o.l&&Fa({},function(h,f){Z(c,f,h)})}function nc(o,c,h){h=Math.min(o.i.length,h);var f=o.l?E(o.l.Na,o.l,o):null;e:{var w=o.i;let R=-1;for(;;){const D=["count="+h];R==-1?0<h?(R=w[0].g,D.push("ofs="+R)):R=0:D.push("ofs="+R);let X=!0;for(let pe=0;pe<h;pe++){let K=w[pe].g;const ve=w[pe].map;if(K-=R,0>K)R=Math.max(0,w[pe].g-100),X=!1;else try{_f(ve,D,"req"+K+"_")}catch{f&&f(ve)}}if(X){f=D.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,f}function rc(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Nn||fa(),Vn||(Nn(),Vn=!0),ri.add(c,o),o.v=0}}function Ai(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Un(E(o.Fa,o),oc(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,sc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Un(E(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Se(10),zr(this),sc(this))};function Ri(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function sc(o){o.g=new ut(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=et(o.qa);Z(c,"RID","rpc"),Z(c,"SID",o.K),Z(c,"AID",o.T),Z(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&Z(c,"TO",o.ja),Z(c,"TYPE","xmlhttp"),Gn(o,c),o.m&&o.o&&Ii(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Br(et(c)),h.m=null,h.P=!0,Da(h,o)}n.Za=function(){this.C!=null&&(this.C=null,zr(this),Ai(this),Se(19))};function Wr(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function ic(o,c){var h=null;if(o.g==c){Wr(o),Ri(o),o.g=null;var f=2}else if(vi(o.h,c))h=c.D,xa(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var w=o.B;f=Or(),be(f,new Sa(f,h)),Hr(o)}else rc(o);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&Tf(o,c)||f==2&&Ai(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),w){case 1:Bt(o,5);break;case 4:Bt(o,10);break;case 3:Bt(o,6);break;default:Bt(o,2)}}}function oc(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Bt(o,c){if(o.j.info("Error code "+c),c==2){var h=E(o.fb,o),f=o.Xa;const w=!f;f=new Ft(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Ur(f,"https"),Br(f),w?pf(f.toString(),h):mf(f.toString(),h)}else Se(2);o.G=0,o.l&&o.l.sa(c),ac(o),ec(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Se(2)):(this.j.info("Failed to ping google.com"),Se(1))};function ac(o){if(o.G=0,o.ka=[],o.l){const c=Ua(o.h);(c.length!=0||o.i.length!=0)&&(k(o.ka,c),k(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function cc(o,c,h){var f=h instanceof Ft?et(h):new Ft(h);if(f.g!="")c&&(f.g=c+"."+f.g),Fr(f,f.s);else{var w=u.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var R=new Ft(null);f&&Ur(R,f),c&&(R.g=c),w&&Fr(R,w),h&&(R.l=h),f=R}return h=o.D,c=o.ya,h&&c&&Z(f,h,c),Z(f,"VER",o.la),Gn(o,f),f}function uc(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new re(new jr({eb:h})):new re(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function lc(){}n=lc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Gr(){}Gr.prototype.g=function(o,c){return new De(o,c)};function De(o,c){Ee.call(this),this.g=new Za(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!U(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!U(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new on(this)}C(De,Ee),De.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},De.prototype.close=function(){wi(this.g)},De.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=hi(o),o=h);c.i.push(new rf(c.Ya++,o)),c.G==3&&Hr(c)},De.prototype.N=function(){this.g.l=null,delete this.j,wi(this.g),delete this.g,De.aa.N.call(this)};function hc(o){fi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}C(hc,fi);function dc(){pi.call(this),this.status=1}C(dc,pi);function on(o){this.g=o}C(on,lc),on.prototype.ua=function(){be(this.g,"a")},on.prototype.ta=function(o){be(this.g,new hc(o))},on.prototype.sa=function(o){be(this.g,new dc)},on.prototype.ra=function(){be(this.g,"b")},Gr.prototype.createWebChannel=Gr.prototype.g,De.prototype.send=De.prototype.o,De.prototype.open=De.prototype.m,De.prototype.close=De.prototype.close,Wl=function(){return new Gr},Hl=function(){return Or()},zl=xt,Ki={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Lr.NO_ERROR=0,Lr.TIMEOUT=8,Lr.HTTP_ERROR=6,as=Lr,Pa.COMPLETE="complete",$l=Pa,wa.EventType=Mn,Mn.OPEN="a",Mn.CLOSE="b",Mn.ERROR="c",Mn.MESSAGE="d",Ee.prototype.listen=Ee.prototype.K,Jn=wa,re.prototype.listenOnce=re.prototype.L,re.prototype.getLastError=re.prototype.Ka,re.prototype.getLastErrorCode=re.prototype.Ba,re.prototype.getStatus=re.prototype.Z,re.prototype.getResponseJson=re.prototype.Oa,re.prototype.getResponseText=re.prototype.oa,re.prototype.send=re.prototype.ea,re.prototype.setWithCredentials=re.prototype.Ha,ql=re}).apply(typeof Xr<"u"?Xr:typeof self<"u"?self:typeof window<"u"?window:{});const Hc="@firebase/firestore",Wc="4.8.0";/**
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
 */class we{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}we.UNAUTHENTICATED=new we(null),we.GOOGLE_CREDENTIALS=new we("google-credentials-uid"),we.FIRST_PARTY=new we("first-party-uid"),we.MOCK_USER=new we("mock-user");/**
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
 */let bn="11.10.0";/**
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
 */const Kt=new _o("@firebase/firestore");function cn(){return Kt.logLevel}function O(n,...e){if(Kt.logLevel<=H.DEBUG){const t=e.map(Co);Kt.debug(`Firestore (${bn}): ${n}`,...t)}}function ot(n,...e){if(Kt.logLevel<=H.ERROR){const t=e.map(Co);Kt.error(`Firestore (${bn}): ${n}`,...t)}}function bt(n,...e){if(Kt.logLevel<=H.WARN){const t=e.map(Co);Kt.warn(`Firestore (${bn}): ${n}`,...t)}}function Co(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function x(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Gl(n,r,t)}function Gl(n,e,t){let r=`FIRESTORE (${bn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ot(r),new Error(r)}function Q(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Gl(e,s,r)}function j(n,e){return n}/**
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
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class V extends Ye{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class wt{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class Kl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class g_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(we.UNAUTHENTICATED)))}shutdown(){}}class __{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class y_{constructor(e){this.t=e,this.currentUser=we.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Q(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,t(l)):Promise.resolve();let i=new wt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new wt,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},u=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((l=>u(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new wt)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string",31837,{l:r}),new Kl(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string",2055,{h:e}),new we(e)}}class E_{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=we.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class v_{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new E_(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(we.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Gc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class T_{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Oe(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Q(this.o===void 0,3512);const r=i=>{i.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Gc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Q(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Gc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function I_(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function Ql(){return new TextEncoder}/**
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
 */class ko{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=I_(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function $(n,e){return n<e?-1:n>e?1:0}function Qi(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return $(r,s);{const i=Ql(),a=w_(i.encode(Kc(n,t)),i.encode(Kc(e,t)));return a!==0?a:$(r,s)}}t+=r>65535?2:1}return $(n.length,e.length)}function Kc(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function w_(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return $(n[t],e[t]);return $(n.length,e.length)}function En(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const Qc="__name__";class qe{constructor(e,t,r){t===void 0?t=0:t>e.length&&x(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&x(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return qe.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof qe?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=qe.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return $(e.length,t.length)}static compareSegments(e,t){const r=qe.isNumericId(e),s=qe.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?qe.extractNumericId(e).compare(qe.extractNumericId(t)):Qi(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return It.fromString(e.substring(4,e.length-2))}}class J extends qe{construct(e,t,r){return new J(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new V(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new J(t)}static emptyPath(){return new J([])}}const A_=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ge extends qe{construct(e,t,r){return new ge(e,t,r)}static isValidIdentifier(e){return A_.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ge.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qc}static keyField(){return new ge([Qc])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const u=e[s];if(u==="\\"){if(s+1===e.length)throw new V(S.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new V(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(i(),s++)}if(i(),a)throw new V(S.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ge(t)}static emptyPath(){return new ge([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(J.fromString(e))}static fromName(e){return new L(J.fromString(e).popFirst(5))}static empty(){return new L(J.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&J.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return J.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new J(e.slice()))}}/**
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
 */function Xl(n,e,t){if(!t)throw new V(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function R_(n,e,t,r){if(e===!0&&r===!0)throw new V(S.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Xc(n){if(!L.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Jc(n){if(L.isDocumentKey(n))throw new V(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Jl(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function xs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":x(12329,{type:typeof n})}function Ue(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new V(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=xs(n);throw new V(S.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function le(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ar(n,e){if(!Jl(n))throw new V(S.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new V(S.INVALID_ARGUMENT,t);return!0}/**
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
 */const Yc=-62135596800,Zc=1e6;class ee{static now(){return ee.fromMillis(Date.now())}static fromDate(e){return ee.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Zc);return new ee(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new V(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Yc)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new V(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Zc}_compareTo(e){return this.seconds===e.seconds?$(this.nanoseconds,e.nanoseconds):$(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ee._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ar(e,ee._jsonSchema))return new ee(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ee._jsonSchemaVersion="firestore/timestamp/1.0",ee._jsonSchema={type:le("string",ee._jsonSchemaVersion),seconds:le("number"),nanoseconds:le("number")};/**
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
 */class B{static fromTimestamp(e){return new B(e)}static min(){return new B(new ee(0,0))}static max(){return new B(new ee(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const hr=-1;function b_(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=B.fromTimestamp(r===1e9?new ee(t+1,0):new ee(t,r));return new St(s,L.empty(),e)}function S_(n){return new St(n.readTime,n.key,hr)}class St{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new St(B.min(),L.empty(),hr)}static max(){return new St(B.max(),L.empty(),hr)}}function P_(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=L.comparator(n.documentKey,e.documentKey),t!==0?t:$(n.largestBatchId,e.largestBatchId))}/**
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
 */const C_="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class k_{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Sn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==C_)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&x(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new P(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof P?t:P.resolve(t)}catch(t){return P.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):P.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):P.reject(t)}static resolve(e){return new P(((t,r)=>{t(e)}))}static reject(e){return new P(((t,r)=>{r(e)}))}static waitFor(e){return new P(((t,r)=>{let s=0,i=0,a=!1;e.forEach((u=>{++s,u.next((()=>{++i,a&&i===s&&t()}),(l=>r(l)))})),a=!0,i===s&&t()}))}static or(e){let t=P.resolve(!1);for(const r of e)t=t.next((s=>s?P.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new P(((r,s)=>{const i=e.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;t(e[d]).next((p=>{a[d]=p,++u,u===i&&r(a)}),(p=>s(p)))}}))}static doWhile(e,t){return new P(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function D_(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Pn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Us{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Us.ue=-1;/**
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
 */const Do=-1;function Fs(n){return n==null}function Ts(n){return n===0&&1/n==-1/0}function N_(n){return typeof n=="number"&&Number.isInteger(n)&&!Ts(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const Yl="";function V_(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=eu(e)),e=O_(n.get(t),e);return eu(e)}function O_(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case Yl:t+="";break;default:t+=i}}return t}function eu(n){return n+Yl+""}/**
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
 */function tu(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Lt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Zl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ne{constructor(e,t){this.comparator=e,this.root=t||me.EMPTY}insert(e,t){return new ne(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,me.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,me.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Jr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Jr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Jr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Jr(this.root,e,this.comparator,!0)}}class Jr{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class me{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??me.RED,this.left=s??me.EMPTY,this.right=i??me.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new me(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return me.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return me.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw x(43730,{key:this.key,value:this.value});if(this.right.isRed())throw x(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw x(27949);return e+(this.isRed()?0:1)}}me.EMPTY=null,me.RED=!0,me.BLACK=!1;me.EMPTY=new class{constructor(){this.size=0}get key(){throw x(57766)}get value(){throw x(16141)}get color(){throw x(16727)}get left(){throw x(29726)}get right(){throw x(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new me(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class he{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nu(this.data.getIterator())}getIteratorFrom(e){return new nu(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof he)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new he(this.comparator);return t.data=e,t}}class nu{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ne{constructor(e){this.fields=e,e.sort(ge.comparator)}static empty(){return new Ne([])}unionWith(e){let t=new he(ge.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ne(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return En(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class eh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class _e{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new eh("Invalid base64 string: "+i):i}})(e);return new _e(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new _e(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return $(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}_e.EMPTY_BYTE_STRING=new _e("");const L_=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pt(n){if(Q(!!n,39018),typeof n=="string"){let e=0;const t=L_.exec(n);if(Q(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ae(n.seconds),nanos:ae(n.nanos)}}function ae(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ct(n){return typeof n=="string"?_e.fromBase64String(n):_e.fromUint8Array(n)}/**
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
 */const th="server_timestamp",nh="__type__",rh="__previous_value__",sh="__local_write_time__";function No(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[nh])===null||t===void 0?void 0:t.stringValue)===th}function Bs(n){const e=n.mapValue.fields[rh];return No(e)?Bs(e):e}function dr(n){const e=Pt(n.mapValue.fields[sh].timestampValue);return new ee(e.seconds,e.nanos)}/**
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
 */class M_{constructor(e,t,r,s,i,a,u,l,d,p){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d,this.isUsingEmulator=p}}const Is="(default)";class fr{constructor(e,t){this.projectId=e,this.database=t||Is}static empty(){return new fr("","")}get isDefaultDatabase(){return this.database===Is}isEqual(e){return e instanceof fr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ih="__type__",x_="__max__",Yr={mapValue:{}},oh="__vector__",ws="value";function kt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?No(n)?4:F_(n)?9007199254740991:U_(n)?10:11:x(28295,{value:n})}function Je(n,e){if(n===e)return!0;const t=kt(n);if(t!==kt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return dr(n).isEqual(dr(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Pt(s.timestampValue),u=Pt(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Ct(s.bytesValue).isEqual(Ct(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return ae(s.geoPointValue.latitude)===ae(i.geoPointValue.latitude)&&ae(s.geoPointValue.longitude)===ae(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ae(s.integerValue)===ae(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ae(s.doubleValue),u=ae(i.doubleValue);return a===u?Ts(a)===Ts(u):isNaN(a)&&isNaN(u)}return!1})(n,e);case 9:return En(n.arrayValue.values||[],e.arrayValue.values||[],Je);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(tu(a)!==tu(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Je(a[l],u[l])))return!1;return!0})(n,e);default:return x(52216,{left:n})}}function pr(n,e){return(n.values||[]).find((t=>Je(t,e)))!==void 0}function vn(n,e){if(n===e)return 0;const t=kt(n),r=kt(e);if(t!==r)return $(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return $(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const u=ae(i.integerValue||i.doubleValue),l=ae(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1})(n,e);case 3:return ru(n.timestampValue,e.timestampValue);case 4:return ru(dr(n),dr(e));case 5:return Qi(n.stringValue,e.stringValue);case 6:return(function(i,a){const u=Ct(i),l=Ct(a);return u.compareTo(l)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const p=$(u[d],l[d]);if(p!==0)return p}return $(u.length,l.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const u=$(ae(i.latitude),ae(a.latitude));return u!==0?u:$(ae(i.longitude),ae(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return su(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var u,l,d,p;const g=i.fields||{},E=a.fields||{},b=(u=g[ws])===null||u===void 0?void 0:u.arrayValue,C=(l=E[ws])===null||l===void 0?void 0:l.arrayValue,N=$(((d=b==null?void 0:b.values)===null||d===void 0?void 0:d.length)||0,((p=C==null?void 0:C.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:su(b,C)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===Yr.mapValue&&a===Yr.mapValue)return 0;if(i===Yr.mapValue)return 1;if(a===Yr.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},p=Object.keys(d);l.sort(),p.sort();for(let g=0;g<l.length&&g<p.length;++g){const E=Qi(l[g],p[g]);if(E!==0)return E;const b=vn(u[l[g]],d[p[g]]);if(b!==0)return b}return $(l.length,p.length)})(n.mapValue,e.mapValue);default:throw x(23264,{le:t})}}function ru(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return $(n,e);const t=Pt(n),r=Pt(e),s=$(t.seconds,r.seconds);return s!==0?s:$(t.nanos,r.nanos)}function su(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=vn(t[s],r[s]);if(i)return i}return $(t.length,r.length)}function Tn(n){return Xi(n)}function Xi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Pt(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Ct(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return L.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Xi(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Xi(t.fields[a])}`;return s+"}"})(n.mapValue):x(61005,{value:n})}function cs(n){switch(kt(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bs(n);return e?16+cs(e):16;case 5:return 2*n.stringValue.length;case 6:return Ct(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+cs(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Lt(r.fields,((i,a)=>{s+=i.length+cs(a)})),s})(n.mapValue);default:throw x(13486,{value:n})}}function iu(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ji(n){return!!n&&"integerValue"in n}function Vo(n){return!!n&&"arrayValue"in n}function ou(n){return!!n&&"nullValue"in n}function au(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function us(n){return!!n&&"mapValue"in n}function U_(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[ih])===null||t===void 0?void 0:t.stringValue)===oh}function rr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Lt(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=rr(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=rr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function F_(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===x_}/**
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
 */class ke{constructor(e){this.value=e}static empty(){return new ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!us(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rr(t)}setAll(e){let t=ge.emptyPath(),r={},s=[];e.forEach(((a,u)=>{if(!t.isImmediateParentOf(u)){const l=this.getFieldsMap(t);this.applyChanges(l,r,s),r={},s=[],t=u.popLast()}a?r[u.lastSegment()]=rr(a):s.push(u.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());us(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];us(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Lt(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new ke(rr(this.value))}}function ah(n){const e=[];return Lt(n.fields,((t,r)=>{const s=new ge([t]);if(us(r)){const i=ah(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Ne(e)}/**
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
 */class Ae{constructor(e,t,r,s,i,a,u){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(e){return new Ae(e,0,B.min(),B.min(),B.min(),ke.empty(),0)}static newFoundDocument(e,t,r,s){return new Ae(e,1,t,B.min(),r,s,0)}static newNoDocument(e,t){return new Ae(e,2,t,B.min(),B.min(),ke.empty(),0)}static newUnknownDocument(e,t){return new Ae(e,3,t,B.min(),B.min(),ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ae&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ae(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class As{constructor(e,t){this.position=e,this.inclusive=t}}function cu(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=L.comparator(L.fromName(a.referenceValue),t.key):r=vn(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function uu(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Je(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class mr{constructor(e,t="asc"){this.field=e,this.dir=t}}function B_(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class ch{}class ue extends ch{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new q_(e,t,r):t==="array-contains"?new H_(e,r):t==="in"?new W_(e,r):t==="not-in"?new G_(e,r):t==="array-contains-any"?new K_(e,r):new ue(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new $_(e,r):new z_(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(vn(t,this.value)):t!==null&&kt(this.value)===kt(t)&&this.matchesComparison(vn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return x(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class je extends ch{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new je(e,t)}matches(e){return uh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function uh(n){return n.op==="and"}function lh(n){return j_(n)&&uh(n)}function j_(n){for(const e of n.filters)if(e instanceof je)return!1;return!0}function Yi(n){if(n instanceof ue)return n.field.canonicalString()+n.op.toString()+Tn(n.value);if(lh(n))return n.filters.map((e=>Yi(e))).join(",");{const e=n.filters.map((t=>Yi(t))).join(",");return`${n.op}(${e})`}}function hh(n,e){return n instanceof ue?(function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&Je(r.value,s.value)})(n,e):n instanceof je?(function(r,s){return s instanceof je&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,u)=>i&&hh(a,s.filters[u])),!0):!1})(n,e):void x(19439)}function dh(n){return n instanceof ue?(function(t){return`${t.field.canonicalString()} ${t.op} ${Tn(t.value)}`})(n):n instanceof je?(function(t){return t.op.toString()+" {"+t.getFilters().map(dh).join(" ,")+"}"})(n):"Filter"}class q_ extends ue{constructor(e,t,r){super(e,t,r),this.key=L.fromName(r.referenceValue)}matches(e){const t=L.comparator(e.key,this.key);return this.matchesComparison(t)}}class $_ extends ue{constructor(e,t){super(e,"in",t),this.keys=fh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class z_ extends ue{constructor(e,t){super(e,"not-in",t),this.keys=fh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function fh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>L.fromName(r.referenceValue)))}class H_ extends ue{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vo(t)&&pr(t.arrayValue,this.value)}}class W_ extends ue{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&pr(this.value.arrayValue,t)}}class G_ extends ue{constructor(e,t){super(e,"not-in",t)}matches(e){if(pr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!pr(this.value.arrayValue,t)}}class K_ extends ue{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vo(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>pr(this.value.arrayValue,r)))}}/**
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
 */class Q_{constructor(e,t=null,r=[],s=[],i=null,a=null,u=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.Pe=null}}function lu(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Q_(n,e,t,r,s,i,a)}function Oo(n){const e=j(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Yi(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Fs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Tn(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Tn(r))).join(",")),e.Pe=t}return e.Pe}function Lo(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!B_(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!hh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!uu(n.startAt,e.startAt)&&uu(n.endAt,e.endAt)}function Zi(n){return L.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Cn{constructor(e,t=null,r=[],s=[],i=null,a="F",u=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function X_(n,e,t,r,s,i,a,u){return new Cn(n,e,t,r,s,i,a,u)}function js(n){return new Cn(n)}function hu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ph(n){return n.collectionGroup!==null}function sr(n){const e=j(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new he(ge.comparator);return a.filters.forEach((l=>{l.getFlattenedFilters().forEach((d=>{d.isInequality()&&(u=u.add(d.field))}))})),u})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new mr(i,r))})),t.has(ge.keyField().canonicalString())||e.Te.push(new mr(ge.keyField(),r))}return e.Te}function Ge(n){const e=j(n);return e.Ie||(e.Ie=J_(e,sr(n))),e.Ie}function J_(n,e){if(n.limitType==="F")return lu(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new mr(s.field,i)}));const t=n.endAt?new As(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new As(n.startAt.position,n.startAt.inclusive):null;return lu(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function eo(n,e){const t=n.filters.concat([e]);return new Cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function to(n,e,t){return new Cn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function qs(n,e){return Lo(Ge(n),Ge(e))&&n.limitType===e.limitType}function mh(n){return`${Oo(Ge(n))}|lt:${n.limitType}`}function un(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>dh(s))).join(", ")}]`),Fs(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Tn(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Tn(s))).join(",")),`Target(${r})`})(Ge(n))}; limitType=${n.limitType})`}function $s(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):L.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of sr(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,u,l){const d=cu(a,u,l);return a.inclusive?d<=0:d<0})(r.startAt,sr(r),s)||r.endAt&&!(function(a,u,l){const d=cu(a,u,l);return a.inclusive?d>=0:d>0})(r.endAt,sr(r),s))})(n,e)}function Y_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gh(n){return(e,t)=>{let r=!1;for(const s of sr(n)){const i=Z_(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Z_(n,e,t){const r=n.field.isKeyField()?L.comparator(e.key,t.key):(function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?vn(l,d):x(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return x(19790,{direction:n.dir})}}/**
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
 */class en{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lt(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Zl(this.inner)}size(){return this.innerSize}}/**
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
 */const ey=new ne(L.comparator);function at(){return ey}const _h=new ne(L.comparator);function Yn(...n){let e=_h;for(const t of n)e=e.insert(t.key,t);return e}function yh(n){let e=_h;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function qt(){return ir()}function Eh(){return ir()}function ir(){return new en((n=>n.toString()),((n,e)=>n.isEqual(e)))}const ty=new ne(L.comparator),ny=new he(L.comparator);function W(...n){let e=ny;for(const t of n)e=e.add(t);return e}const ry=new he($);function sy(){return ry}/**
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
 */function Mo(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ts(e)?"-0":e}}function vh(n){return{integerValue:""+n}}function iy(n,e){return N_(e)?vh(e):Mo(n,e)}/**
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
 */class zs{constructor(){this._=void 0}}function oy(n,e,t){return n instanceof gr?(function(s,i){const a={fields:{[nh]:{stringValue:th},[sh]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&No(i)&&(i=Bs(i)),i&&(a.fields[rh]=i),{mapValue:a}})(t,e):n instanceof _r?Ih(n,e):n instanceof yr?wh(n,e):(function(s,i){const a=Th(s,i),u=du(a)+du(s.Ee);return Ji(a)&&Ji(s.Ee)?vh(u):Mo(s.serializer,u)})(n,e)}function ay(n,e,t){return n instanceof _r?Ih(n,e):n instanceof yr?wh(n,e):t}function Th(n,e){return n instanceof Rs?(function(r){return Ji(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class gr extends zs{}class _r extends zs{constructor(e){super(),this.elements=e}}function Ih(n,e){const t=Ah(e);for(const r of n.elements)t.some((s=>Je(s,r)))||t.push(r);return{arrayValue:{values:t}}}class yr extends zs{constructor(e){super(),this.elements=e}}function wh(n,e){let t=Ah(e);for(const r of n.elements)t=t.filter((s=>!Je(s,r)));return{arrayValue:{values:t}}}class Rs extends zs{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function du(n){return ae(n.integerValue||n.doubleValue)}function Ah(n){return Vo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class cy{constructor(e,t){this.field=e,this.transform=t}}function uy(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof _r&&s instanceof _r||r instanceof yr&&s instanceof yr?En(r.elements,s.elements,Je):r instanceof Rs&&s instanceof Rs?Je(r.Ee,s.Ee):r instanceof gr&&s instanceof gr})(n.transform,e.transform)}class ly{constructor(e,t){this.version=e,this.transformResults=t}}class Fe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fe}static exists(e){return new Fe(void 0,e)}static updateTime(e){return new Fe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ls(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Hs{}function Rh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Sh(n.key,Fe.none()):new Rr(n.key,n.data,Fe.none());{const t=n.data,r=ke.empty();let s=new he(ge.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Mt(n.key,r,new Ne(s.toArray()),Fe.none())}}function hy(n,e,t){n instanceof Rr?(function(s,i,a){const u=s.value.clone(),l=pu(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()})(n,e,t):n instanceof Mt?(function(s,i,a){if(!ls(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=pu(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(bh(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function or(n,e,t,r){return n instanceof Rr?(function(i,a,u,l){if(!ls(i.precondition,a))return u;const d=i.value.clone(),p=mu(i.fieldTransforms,l,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null})(n,e,t,r):n instanceof Mt?(function(i,a,u,l){if(!ls(i.precondition,a))return u;const d=mu(i.fieldTransforms,l,a),p=a.data;return p.setAll(bh(i)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(i,a,u){return ls(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u})(n,e,t)}function dy(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Th(r.transform,s||null);i!=null&&(t===null&&(t=ke.empty()),t.set(r.field,i))}return t||null}function fu(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&En(r,s,((i,a)=>uy(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Rr extends Hs{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mt extends Hs{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function bh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function pu(n,e,t){const r=new Map;Q(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,u=e.data.field(i.field);r.set(i.field,ay(a,u,t[s]))}return r}function mu(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,oy(i,a,e))}return r}class Sh extends Hs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fy extends Hs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class py{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&hy(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=or(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=or(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Eh();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=t.has(s.key)?null:u;const l=Rh(a,u);l!==null&&r.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(B.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),W())}isEqual(e){return this.batchId===e.batchId&&En(this.mutations,e.mutations,((t,r)=>fu(t,r)))&&En(this.baseMutations,e.baseMutations,((t,r)=>fu(t,r)))}}class xo{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Q(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return ty})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new xo(e,t,r,s)}}/**
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
 */class my{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ce,G;function _y(n){switch(n){case S.OK:return x(64938);case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0;default:return x(15467,{code:n})}}function Ph(n){if(n===void 0)return ot("GRPC error has no .code"),S.UNKNOWN;switch(n){case ce.OK:return S.OK;case ce.CANCELLED:return S.CANCELLED;case ce.UNKNOWN:return S.UNKNOWN;case ce.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case ce.INTERNAL:return S.INTERNAL;case ce.UNAVAILABLE:return S.UNAVAILABLE;case ce.UNAUTHENTICATED:return S.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case ce.NOT_FOUND:return S.NOT_FOUND;case ce.ALREADY_EXISTS:return S.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return S.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case ce.ABORTED:return S.ABORTED;case ce.OUT_OF_RANGE:return S.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return S.UNIMPLEMENTED;case ce.DATA_LOSS:return S.DATA_LOSS;default:return x(39323,{code:n})}}(G=ce||(ce={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const yy=new It([4294967295,4294967295],0);function gu(n){const e=Ql().encode(n),t=new jl;return t.update(e),new Uint8Array(t.digest())}function _u(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new It([t,r],0),new It([s,i],0)]}class Uo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Zn(`Invalid padding: ${t}`);if(r<0)throw new Zn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Zn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Zn(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=It.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(It.fromNumber(r)));return s.compare(yy)===1&&(s=new It([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=gu(e),[r,s]=_u(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Uo(i,s,t);return r.forEach((u=>a.insert(u))),a}insert(e){if(this.fe===0)return;const t=gu(e),[r,s]=_u(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Zn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Ws{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,br.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ws(B.min(),s,new ne($),at(),W())}}class br{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new br(r,t,W(),W(),W())}}/**
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
 */class hs{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Ch{constructor(e,t){this.targetId=e,this.De=t}}class kh{constructor(e,t,r=_e.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class yu{constructor(){this.ve=0,this.Ce=Eu(),this.Fe=_e.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=W(),t=W(),r=W();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:x(38017,{changeType:i})}})),new br(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Eu()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Q(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Ey{constructor(e){this.We=e,this.Ge=new Map,this.ze=at(),this.je=Zr(),this.Je=Zr(),this.He=new ne($)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:x(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Zi(i))if(r===0){const a=new L(i.path);this.Xe(t,a,Ae.newNoDocument(a,B.min()))}else Q(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const u=this._t(e),l=u?this.ut(u,e,a):1;if(l!==0){this.rt(t);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,d)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,u;try{a=Ct(r).toUint8Array()}catch(l){if(l instanceof eh)return bt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new Uo(a,s,i)}catch(l){return bt(l instanceof Zn?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.fe===0?null:u}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(u)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const u=this.st(a);if(u){if(i.current&&Zi(u.target)){const l=new L(u.target.path);this.Tt(l).has(a)||this.It(a,l)||this.Xe(a,l,Ae.newNoDocument(l,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=W();this.Je.forEach(((i,a)=>{let u=!0;a.forEachWhile((l=>{const d=this.st(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)})),u&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new Ws(e,t,this.He,this.ze,r);return this.ze=at(),this.je=Zr(),this.Je=Zr(),this.He=new ne($),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new yu,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new he($),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new he($),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||O("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new yu),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Zr(){return new ne(L.comparator)}function Eu(){return new ne(L.comparator)}const vy={asc:"ASCENDING",desc:"DESCENDING"},Ty={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Iy={and:"AND",or:"OR"};class wy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function no(n,e){return n.useProto3Json||Fs(e)?e:{value:e}}function bs(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Dh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Ay(n,e){return bs(n,e.toTimestamp())}function Ke(n){return Q(!!n,49232),B.fromTimestamp((function(t){const r=Pt(t);return new ee(r.seconds,r.nanos)})(n))}function Fo(n,e){return ro(n,e).canonicalString()}function ro(n,e){const t=(function(s){return new J(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Nh(n){const e=J.fromString(n);return Q(xh(e),10190,{key:e.toString()}),e}function so(n,e){return Fo(n.databaseId,e.path)}function Oi(n,e){const t=Nh(e);if(t.get(1)!==n.databaseId.projectId)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new V(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new L(Oh(t))}function Vh(n,e){return Fo(n.databaseId,e)}function Ry(n){const e=Nh(n);return e.length===4?J.emptyPath():Oh(e)}function io(n){return new J(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Oh(n){return Q(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function vu(n,e,t){return{name:so(n,e),fields:t.value.mapValue.fields}}function by(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:x(39313,{state:d})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(d,p){return d.useProto3Json?(Q(p===void 0||typeof p=="string",58123),_e.fromBase64String(p||"")):(Q(p===void 0||p instanceof Buffer||p instanceof Uint8Array,16193),_e.fromUint8Array(p||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,u=a&&(function(d){const p=d.code===void 0?S.UNKNOWN:Ph(d.code);return new V(p,d.message||"")})(a);t=new kh(r,s,i,u||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Oi(n,r.document.name),i=Ke(r.document.updateTime),a=r.document.createTime?Ke(r.document.createTime):B.min(),u=new ke({mapValue:{fields:r.document.fields}}),l=Ae.newFoundDocument(s,i,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];t=new hs(d,p,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Oi(n,r.document),i=r.readTime?Ke(r.readTime):B.min(),a=Ae.newNoDocument(s,i),u=r.removedTargetIds||[];t=new hs([],u,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Oi(n,r.document),i=r.removedTargetIds||[];t=new hs([],i,s,null)}else{if(!("filter"in e))return x(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new gy(s,i),u=r.targetId;t=new Ch(u,a)}}return t}function Sy(n,e){let t;if(e instanceof Rr)t={update:vu(n,e.key,e.value)};else if(e instanceof Sh)t={delete:so(n,e.key)};else if(e instanceof Mt)t={update:vu(n,e.key,e.data),updateMask:My(e.fieldMask)};else{if(!(e instanceof fy))return x(16599,{Rt:e.type});t={verify:so(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const u=a.transform;if(u instanceof gr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof _r)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof yr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Rs)return{fieldPath:a.field.canonicalString(),increment:u.Ee};throw x(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Ay(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:x(27497)})(n,e.precondition)),t}function Py(n,e){return n&&n.length>0?(Q(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Ke(s.updateTime):Ke(i);return a.isEqual(B.min())&&(a=Ke(i)),new ly(a,s.transformResults||[])})(t,e)))):[]}function Cy(n,e){return{documents:[Vh(n,e.path)]}}function ky(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Vh(n,s);const i=(function(d){if(d.length!==0)return Mh(je.create(d,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(d){if(d.length!==0)return d.map((p=>(function(E){return{field:ln(E.field),direction:Vy(E.dir)}})(p)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const u=no(n,e.limit);return u!==null&&(t.structuredQuery.limit=u),e.startAt&&(t.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(e.endAt)),{Vt:t,parent:s}}function Dy(n){let e=Ry(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Q(r===1,65062);const p=t.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];t.where&&(i=(function(g){const E=Lh(g);return E instanceof je&&lh(E)?E.getFilters():[E]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((E=>(function(C){return new mr(hn(C.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(E)))})(t.orderBy));let u=null;t.limit&&(u=(function(g){let E;return E=typeof g=="object"?g.value:g,Fs(E)?null:E})(t.limit));let l=null;t.startAt&&(l=(function(g){const E=!!g.before,b=g.values||[];return new As(b,E)})(t.startAt));let d=null;return t.endAt&&(d=(function(g){const E=!g.before,b=g.values||[];return new As(b,E)})(t.endAt)),X_(e,s,a,i,u,"F",l,d)}function Ny(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return x(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lh(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=hn(t.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hn(t.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hn(t.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=hn(t.unaryFilter.field);return ue.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return x(61313);default:return x(60726)}})(n):n.fieldFilter!==void 0?(function(t){return ue.create(hn(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return x(58110);default:return x(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return je.create(t.compositeFilter.filters.map((r=>Lh(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return x(1026)}})(t.compositeFilter.op))})(n):x(30097,{filter:n})}function Vy(n){return vy[n]}function Oy(n){return Ty[n]}function Ly(n){return Iy[n]}function ln(n){return{fieldPath:n.canonicalString()}}function hn(n){return ge.fromServerFormat(n.fieldPath)}function Mh(n){return n instanceof ue?(function(t){if(t.op==="=="){if(au(t.value))return{unaryFilter:{field:ln(t.field),op:"IS_NAN"}};if(ou(t.value))return{unaryFilter:{field:ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(au(t.value))return{unaryFilter:{field:ln(t.field),op:"IS_NOT_NAN"}};if(ou(t.value))return{unaryFilter:{field:ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ln(t.field),op:Oy(t.op),value:t.value}}})(n):n instanceof je?(function(t){const r=t.getFilters().map((s=>Mh(s)));return r.length===1?r[0]:{compositeFilter:{op:Ly(t.op),filters:r}}})(n):x(54877,{filter:n})}function My(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function xh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class yt{constructor(e,t,r,s,i=B.min(),a=B.min(),u=_e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(e){return new yt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class xy{constructor(e){this.gt=e}}function Uy(n){const e=Dy({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?to(e,e.limit,"L"):e}/**
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
 */class Fy{constructor(){this.Dn=new By}addToCollectionParentIndex(e,t){return this.Dn.add(t),P.resolve()}getCollectionParents(e,t){return P.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return P.resolve()}deleteFieldIndex(e,t){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,t){return P.resolve()}getDocumentsMatchingTarget(e,t){return P.resolve(null)}getIndexType(e,t){return P.resolve(0)}getFieldIndexes(e,t){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,t){return P.resolve(St.min())}getMinOffsetFromCollectionGroup(e,t){return P.resolve(St.min())}updateCollectionGroup(e,t,r){return P.resolve()}updateIndexEntries(e,t){return P.resolve()}}class By{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new he(J.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new he(J.comparator)).toArray()}}/**
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
 */const Tu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Uh=41943040;class Ce{static withCacheSize(e){return new Ce(e,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ce.DEFAULT_COLLECTION_PERCENTILE=10,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ce.DEFAULT=new Ce(Uh,Ce.DEFAULT_COLLECTION_PERCENTILE,Ce.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ce.DISABLED=new Ce(-1,0,0);/**
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
 */class In{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new In(0)}static ur(){return new In(-1)}}/**
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
 */const Iu="LruGarbageCollector",jy=1048576;function wu([n,e],[t,r]){const s=$(n,t);return s===0?$(e,r):s}class qy{constructor(e){this.Tr=e,this.buffer=new he(wu),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();wu(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $y{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){O(Iu,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Pn(t)?O(Iu,"Ignoring IndexedDB error during garbage collection: ",t):await Sn(t)}await this.Rr(3e5)}))}}class zy{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return P.resolve(Us.ue);const r=new qy(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(O("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Tu)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(O("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Tu):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,u,l,d;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(O("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,u=Date.now(),this.removeTargets(e,r,t)))).next((g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(d=Date.now(),cn()<=H.DEBUG&&O("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-p}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-p}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function Hy(n,e){return new zy(n,e)}/**
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
 */class Wy{constructor(){this.changes=new en((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ae.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?P.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Gy{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Ky{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&or(r.mutation,s,Ne.empty(),ee.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,W()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=W()){const s=qt();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Yn();return i.forEach(((u,l)=>{a=a.insert(u,l.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=qt();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,W())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,u)=>{t.set(a,u)}))}))}computeViews(e,t,r,s){let i=at();const a=ir(),u=(function(){return ir()})();return t.forEach(((l,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Mt)?i=i.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),or(p.mutation,d,p.mutation.getFieldMask(),ee.now())):a.set(d.key,Ne.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((d,p)=>a.set(d,p))),t.forEach(((d,p)=>{var g;return u.set(d,new Gy(p,(g=a.get(d))!==null&&g!==void 0?g:null))})),u)))}recalculateAndSaveOverlays(e,t){const r=ir();let s=new ne(((a,u)=>a-u)),i=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const u of a)u.keys().forEach((l=>{const d=t.get(l);if(d===null)return;let p=r.get(l)||Ne.empty();p=u.applyToLocalView(d,p),r.set(l,p);const g=(s.get(u.batchId)||W()).add(l);s=s.insert(u.batchId,g)}))})).next((()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,p=l.value,g=Eh();p.forEach((E=>{if(!i.has(E)){const b=Rh(t.get(E),r.get(E));b!==null&&g.set(E,b),i=i.add(E)}})),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return P.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return L.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ph(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):P.resolve(qt());let u=hr,l=i;return a.next((d=>P.forEach(d,((p,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(p)?P.resolve():this.remoteDocumentCache.getEntry(e,p).next((E=>{l=l.insert(p,E)}))))).next((()=>this.populateOverlays(e,d,i))).next((()=>this.computeViews(e,l,d,W()))).next((p=>({batchId:u,changes:yh(p)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new L(t)).next((r=>{let s=Yn();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Yn();return this.indexManager.getCollectionParents(e,i).next((u=>P.forEach(u,(l=>{const d=(function(g,E){return new Cn(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next((p=>{p.forEach(((g,E)=>{a=a.insert(g,E)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((l,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Ae.newInvalidDocument(p)))}));let u=Yn();return a.forEach(((l,d)=>{const p=i.get(l);p!==void 0&&or(p.mutation,d,Ne.empty(),ee.now()),$s(t,d)&&(u=u.insert(l,d))})),u}))}}/**
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
 */class Qy{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return P.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Ke(s.createTime)}})(t)),P.resolve()}getNamedQuery(e,t){return P.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:Uy(s.bundledQuery),readTime:Ke(s.readTime)}})(t)),P.resolve()}}/**
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
 */class Xy{constructor(){this.overlays=new ne(L.comparator),this.kr=new Map}getOverlay(e,t){return P.resolve(this.overlays.get(t))}getOverlays(e,t){const r=qt();return P.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),P.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),P.resolve()}getOverlaysForCollection(e,t,r){const s=qt(),i=t.length+1,a=new L(t.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ne(((d,p)=>d-p));const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=qt(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=qt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((d,p)=>u.set(d,p))),!(u.size()>=s)););return P.resolve(u)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new my(t,r));let i=this.kr.get(t);i===void 0&&(i=W(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
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
 */class Jy{constructor(){this.sessionToken=_e.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,P.resolve()}}/**
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
 */class Bo{constructor(){this.qr=new he(de.Qr),this.$r=new he(de.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new de(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new de(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new L(new J([])),r=new de(t,e),s=new de(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new L(new J([])),r=new de(t,e),s=new de(t,e+1);let i=W();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new de(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class de{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return L.comparator(e.key,t.key)||$(e.Hr,t.Hr)}static Ur(e,t){return $(e.Hr,t.Hr)||L.comparator(e.key,t.key)}}/**
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
 */class Yy{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new he(de.Qr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new py(i,t,r,s);this.mutationQueue.push(a);for(const u of s)this.Yr=this.Yr.add(new de(u.key,i)),this.indexManager.addToCollectionParentIndex(e,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(e,t){return P.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Do:this.er-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new de(t,0),s=new de(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const u=this.Zr(a.Hr);i.push(u)})),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new he($);return t.forEach((s=>{const i=new de(s,0),a=new de(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(u=>{r=r.add(u.Hr)}))})),P.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;L.isDocumentKey(i)||(i=i.child(""));const a=new de(new L(i),0);let u=new he($);return this.Yr.forEachWhile((l=>{const d=l.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.Hr)),!0)}),a),P.resolve(this.ei(u))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Q(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return P.forEach(t.mutations,(s=>{const i=new de(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new de(t,0),s=this.Yr.firstAfterOrEqual(r);return P.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Zy{constructor(e){this.ni=e,this.docs=(function(){return new ne(L.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return P.resolve(r?r.document.mutableCopy():Ae.newInvalidDocument(t))}getEntries(e,t){let r=at();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ae.newInvalidDocument(s))})),P.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=at();const a=t.path,u=new L(a.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:p}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||P_(S_(p),r)<=0||(s.has(p.key)||$s(t,p))&&(i=i.insert(p.key,p.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,t,r,s){x(9500)}ri(e,t){return P.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new eE(this)}getSize(e){return P.resolve(this.size)}}class eE extends Wy{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),P.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class tE{constructor(e){this.persistence=e,this.ii=new en((t=>Oo(t)),Lo),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.si=0,this.oi=new Bo,this.targetCount=0,this._i=In.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),P.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new In(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,P.resolve()}updateTargetData(e,t){return this.hr(t),P.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,u)=>{u.sequenceNumber<=t&&r.get(u.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,u.targetId)),s++)})),P.waitFor(i).next((()=>s))}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return P.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),P.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),P.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),P.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return P.resolve(r)}containsKey(e,t){return P.resolve(this.oi.containsKey(t))}}/**
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
 */class Fh{constructor(e,t){this.ai={},this.overlays={},this.ui=new Us(0),this.ci=!1,this.ci=!0,this.li=new Jy,this.referenceDelegate=e(this),this.hi=new tE(this),this.indexManager=new Fy,this.remoteDocumentCache=(function(s){return new Zy(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new xy(t),this.Ti=new Qy(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Xy,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new Yy(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){O("MemoryPersistence","Starting transaction:",e);const s=new nE(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return P.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class nE extends k_{constructor(e){super(),this.currentSequenceNumber=e}}class jo{constructor(e){this.persistence=e,this.Ai=new Bo,this.Ri=null}static Vi(e){return new jo(e)}get mi(){if(this.Ri)return this.Ri;throw x(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),P.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),P.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.mi,(r=>{const s=L.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,B.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return P.or([()=>P.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Ss{constructor(e,t){this.persistence=e,this.gi=new en((r=>V_(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Hy(this,t)}static Vi(e,t){return new Ss(e,t)}Ii(){}di(e){return P.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return P.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?P.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((u=>{u||(r++,i.removeEntry(a,B.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),P.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),P.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=cs(e.data.value)),t}Sr(e,t,r){return P.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class qo{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=W(),s=W();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new qo(e,t.fromCache,r,s)}}/**
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
 */class rE{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class sE{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Ff()?8:D_(Re())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new rE;return this.ws(e,t,a).next((u=>{if(i.result=u,this.Rs)return this.Ss(e,t,a,u.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(cn()<=H.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",un(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(cn()<=H.DEBUG&&O("QueryEngine","Query:",un(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(cn()<=H.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",un(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ge(t))):P.resolve())}ps(e,t){if(hu(t))return P.resolve(null);let r=Ge(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=to(t,null,"F"),r=Ge(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=W(...i);return this.gs.getDocuments(e,a).next((u=>this.indexManager.getMinOffset(e,r).next((l=>{const d=this.bs(t,u);return this.Ds(t,d,a,l.readTime)?this.ps(e,to(t,null,"F")):this.vs(e,d,t,l)}))))})))))}ys(e,t,r,s){return hu(t)||s.isEqual(B.min())?P.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?P.resolve(null):(cn()<=H.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),un(t)),this.vs(e,a,t,b_(s,hr)).next((u=>u)))}))}bs(e,t){let r=new he(gh(e));return t.forEach(((s,i)=>{$s(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return cn()<=H.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",un(t)),this.gs.getDocumentsMatchingQuery(e,t,St.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const $o="LocalStore",iE=3e8;class oE{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new ne($),this.Ms=new en((i=>Oo(i)),Lo),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ky(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function aE(n,e,t,r){return new oE(n,e,t,r)}async function Bh(n,e){const t=j(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],u=[];let l=W();for(const d of s){a.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}for(const d of i){u.push(d.batchId);for(const p of d.mutations)l=l.add(p.key)}return t.localDocuments.getDocuments(r,l).next((d=>({Bs:d,removedBatchIds:a,addedBatchIds:u})))}))}))}function cE(n,e){const t=j(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(u,l,d,p){const g=d.batch,E=g.keys();let b=P.resolve();return E.forEach((C=>{b=b.next((()=>p.getEntry(l,C))).next((N=>{const k=d.docVersions.get(C);Q(k!==null,48541),N.version.compareTo(k)<0&&(g.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))}))})),b.next((()=>u.mutationQueue.removeMutationBatch(l,g)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(u){let l=W();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function jh(n){const e=j(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function uE(n,e){const t=j(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const u=[];e.targetChanges.forEach(((p,g)=>{const E=s.get(g);if(!E)return;u.push(t.hi.removeMatchingKeys(i,p.removedDocuments,g).next((()=>t.hi.addMatchingKeys(i,p.addedDocuments,g))));let b=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?b=b.withResumeToken(_e.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,r)),s=s.insert(g,b),(function(N,k,q){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=iE?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0})(E,b,p)&&u.push(t.hi.updateTargetData(i,b))}));let l=at(),d=W();if(e.documentUpdates.forEach((p=>{e.resolvedLimboDocuments.has(p)&&u.push(t.persistence.referenceDelegate.updateLimboDocument(i,p))})),u.push(lE(i,a,e.documentUpdates).next((p=>{l=p.Ls,d=p.ks}))),!r.isEqual(B.min())){const p=t.hi.getLastRemoteSnapshotVersion(i).next((g=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));u.push(p)}return P.waitFor(u).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,l,d))).next((()=>l))})).then((i=>(t.Fs=s,i)))}function lE(n,e,t){let r=W(),s=W();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=at();return t.forEach(((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(B.min())?(e.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(l),a=a.insert(u,l)):O($o,"Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)})),{Ls:a,ks:s}}))}function hE(n,e){const t=j(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Do),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function dE(n,e){const t=j(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,P.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new yt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function oo(n,e,t){const r=j(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!Pn(a))throw a;O($o,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Au(n,e,t){const r=j(n);let s=B.min(),i=W();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(l,d,p){const g=j(l),E=g.Ms.get(p);return E!==void 0?P.resolve(g.Fs.get(E)):g.hi.getTargetData(d,p)})(r,a,Ge(e)).next((u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,u.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:B.min(),t?i:W()))).next((u=>(fE(r,Y_(e),u),{documents:u,qs:i})))))}function fE(n,e,t){let r=n.xs.get(e)||B.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Ru{constructor(){this.activeTargetIds=sy()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pE{constructor(){this.Fo=new Ru,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ru,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mE{xo(e){}shutdown(){}}/**
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
 */const bu="ConnectivityMonitor";class Su{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){O(bu,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){O(bu,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let es=null;function ao(){return es===null?es=(function(){return 268435456+Math.round(2147483648*Math.random())})():es++,"0x"+es.toString(16)}/**
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
 */const Li="RestConnection",gE={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _E{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Is?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=ao(),u=this.Go(e,t.toUriEncodedString());O(Li,`Sending RPC '${e}' ${a}:`,u,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:d}=new URL(u),p=Vt(d);return this.jo(e,u,l,r,p).then((g=>(O(Li,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw bt(Li,`RPC '${e}' ${a} failed with error: `,g,"url: ",u,"request:",r),g}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+bn})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=gE[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class yE{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const Ie="WebChannelConnection";class EE extends _E{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=ao();return new Promise(((u,l)=>{const d=new ql;d.setWithCredentials(!0),d.listenOnce($l.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case as.NO_ERROR:const g=d.getResponseJson();O(Ie,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),u(g);break;case as.TIMEOUT:O(Ie,`RPC '${e}' ${a} timed out`),l(new V(S.DEADLINE_EXCEEDED,"Request time out"));break;case as.HTTP_ERROR:const E=d.getStatus();if(O(Ie,`RPC '${e}' ${a} failed with status:`,E,"response text:",d.getResponseText()),E>0){let b=d.getResponseJson();Array.isArray(b)&&(b=b[0]);const C=b==null?void 0:b.error;if(C&&C.status&&C.message){const N=(function(q){const U=q.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(U)>=0?U:S.UNKNOWN})(C.status);l(new V(N,C.message))}else l(new V(S.UNKNOWN,"Server responded with status "+d.getStatus()))}else l(new V(S.UNAVAILABLE,"Connection failed."));break;default:x(9055,{c_:e,streamId:a,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{O(Ie,`RPC '${e}' ${a} completed.`)}}));const p=JSON.stringify(s);O(Ie,`RPC '${e}' ${a} sending request:`,s),d.send(t,"POST",p,r,15)}))}P_(e,t,r){const s=ao(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Wl(),u=Hl(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,t,r),l.encodeInitMessageHeaders=!0;const p=i.join("");O(Ie,`Creating RPC '${e}' stream ${s}: ${p}`,l);const g=a.createWebChannel(p,l);this.T_(g);let E=!1,b=!1;const C=new yE({Ho:k=>{b?O(Ie,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(E||(O(Ie,`Opening RPC '${e}' stream ${s} transport.`),g.open(),E=!0),O(Ie,`RPC '${e}' stream ${s} sending:`,k),g.send(k))},Yo:()=>g.close()}),N=(k,q,U)=>{k.listen(q,(F=>{try{U(F)}catch(z){setTimeout((()=>{throw z}),0)}}))};return N(g,Jn.EventType.OPEN,(()=>{b||(O(Ie,`RPC '${e}' stream ${s} transport opened.`),C.s_())})),N(g,Jn.EventType.CLOSE,(()=>{b||(b=!0,O(Ie,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(g))})),N(g,Jn.EventType.ERROR,(k=>{b||(b=!0,bt(Ie,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),C.__(new V(S.UNAVAILABLE,"The operation could not be completed")))})),N(g,Jn.EventType.MESSAGE,(k=>{var q;if(!b){const U=k.data[0];Q(!!U,16349);const F=U,z=(F==null?void 0:F.error)||((q=F[0])===null||q===void 0?void 0:q.error);if(z){O(Ie,`RPC '${e}' stream ${s} received error:`,z);const fe=z.status;let Y=(function(y){const v=ce[y];if(v!==void 0)return Ph(v)})(fe),T=z.message;Y===void 0&&(Y=S.INTERNAL,T="Unknown error status: "+fe+" with message "+z.message),b=!0,C.__(new V(Y,T)),g.close()}else O(Ie,`RPC '${e}' stream ${s} received:`,U),C.a_(U)}})),N(u,zl.STAT_EVENT,(k=>{k.stat===Ki.PROXY?O(Ie,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===Ki.NOPROXY&&O(Ie,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Mi(){return typeof document<"u"?document:null}/**
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
 */function Gs(n){return new wy(n,!0)}/**
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
 */class qh{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Pu="PersistentStream";class $h{constructor(e,t,r,s,i,a,u,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new qh(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===S.RESOURCE_EXHAUSTED?(ot(t.toString()),ot("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new V(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return O(Pu,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(O(Pu,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class vE extends $h{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=by(this.serializer,e),r=(function(i){if(!("targetChange"in i))return B.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?Ke(a.readTime):B.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=io(this.serializer),t.addTarget=(function(i,a){let u;const l=a.target;if(u=Zi(l)?{documents:Cy(i,l)}:{query:ky(i,l).Vt},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Dh(i,a.resumeToken);const d=no(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=bs(i,a.snapshotVersion.toTimestamp());const d=no(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u})(this.serializer,e);const r=Ny(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=io(this.serializer),t.removeTarget=e,this.k_(t)}}class TE extends $h{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Q(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Q(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Q(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=Py(e.writeResults,e.commitTime),r=Ke(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=io(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Sy(this.serializer,r)))};this.k_(t)}}/**
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
 */class IE{}class wE extends IE{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,ro(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new V(S.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,u])=>this.connection.Jo(e,ro(t,r),s,a,u,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new V(S.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class AE{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ot(t),this._a=!1):O("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Qt="RemoteStore";class RE{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{tn(this)&&(O(Qt,"Restarting streams for network reachability change."),await(async function(l){const d=j(l);d.Ia.add(4),await Sr(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Ks(d)})(this))}))})),this.Aa=new AE(r,s)}}async function Ks(n){if(tn(n))for(const e of n.da)await e(!0)}async function Sr(n){for(const e of n.da)await e(!1)}function zh(n,e){const t=j(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Go(t)?Wo(t):kn(t).x_()&&Ho(t,e))}function zo(n,e){const t=j(n),r=kn(t);t.Ta.delete(e),r.x_()&&Hh(t,e),t.Ta.size===0&&(r.x_()?r.B_():tn(t)&&t.Aa.set("Unknown"))}function Ho(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(B.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}kn(n).H_(e)}function Hh(n,e){n.Ra.$e(e),kn(n).Y_(e)}function Wo(n){n.Ra=new Ey({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),kn(n).start(),n.Aa.aa()}function Go(n){return tn(n)&&!kn(n).M_()&&n.Ta.size>0}function tn(n){return j(n).Ia.size===0}function Wh(n){n.Ra=void 0}async function bE(n){n.Aa.set("Online")}async function SE(n){n.Ta.forEach(((e,t)=>{Ho(n,e)}))}async function PE(n,e){Wh(n),Go(n)?(n.Aa.la(e),Wo(n)):n.Aa.set("Unknown")}async function CE(n,e,t){if(n.Aa.set("Online"),e instanceof kh&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const u of i.targetIds)s.Ta.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.Ta.delete(u),s.Ra.removeTarget(u))})(n,e)}catch(r){O(Qt,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ps(n,r)}else if(e instanceof hs?n.Ra.Ye(e):e instanceof Ch?n.Ra.it(e):n.Ra.et(e),!t.isEqual(B.min()))try{const r=await jh(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const u=i.Ra.Pt(a);return u.targetChanges.forEach(((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const p=i.Ta.get(d);p&&i.Ta.set(d,p.withResumeToken(l.resumeToken,a))}})),u.targetMismatches.forEach(((l,d)=>{const p=i.Ta.get(l);if(!p)return;i.Ta.set(l,p.withResumeToken(_e.EMPTY_BYTE_STRING,p.snapshotVersion)),Hh(i,l);const g=new yt(p.target,l,d,p.sequenceNumber);Ho(i,g)})),i.remoteSyncer.applyRemoteEvent(u)})(n,t)}catch(r){O(Qt,"Failed to raise snapshot:",r),await Ps(n,r)}}async function Ps(n,e,t){if(!Pn(e))throw e;n.Ia.add(1),await Sr(n),n.Aa.set("Offline"),t||(t=()=>jh(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{O(Qt,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Ks(n)}))}function Gh(n,e){return e().catch((t=>Ps(n,t,e)))}async function Qs(n){const e=j(n),t=Dt(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Do;for(;kE(e);)try{const s=await hE(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,DE(e,s)}catch(s){await Ps(e,s)}Kh(e)&&Qh(e)}function kE(n){return tn(n)&&n.Pa.length<10}function DE(n,e){n.Pa.push(e);const t=Dt(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Kh(n){return tn(n)&&!Dt(n).M_()&&n.Pa.length>0}function Qh(n){Dt(n).start()}async function NE(n){Dt(n).na()}async function VE(n){const e=Dt(n);for(const t of n.Pa)e.X_(t.mutations)}async function OE(n,e,t){const r=n.Pa.shift(),s=xo.from(r,e,t);await Gh(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await Qs(n)}async function LE(n,e){e&&Dt(n).Z_&&await(async function(r,s){if((function(a){return _y(a)&&a!==S.ABORTED})(s.code)){const i=r.Pa.shift();Dt(r).N_(),await Gh(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Qs(r)}})(n,e),Kh(n)&&Qh(n)}async function Cu(n,e){const t=j(n);t.asyncQueue.verifyOperationInProgress(),O(Qt,"RemoteStore received new credentials");const r=tn(t);t.Ia.add(3),await Sr(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Ks(t)}async function ME(n,e){const t=j(n);e?(t.Ia.delete(2),await Ks(t)):e||(t.Ia.add(2),await Sr(t),t.Aa.set("Unknown"))}function kn(n){return n.Va||(n.Va=(function(t,r,s){const i=j(t);return i.ia(),new vE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:bE.bind(null,n),e_:SE.bind(null,n),n_:PE.bind(null,n),J_:CE.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Go(n)?Wo(n):n.Aa.set("Unknown")):(await n.Va.stop(),Wh(n))}))),n.Va}function Dt(n){return n.ma||(n.ma=(function(t,r,s){const i=j(t);return i.ia(),new TE(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:NE.bind(null,n),n_:LE.bind(null,n),ea:VE.bind(null,n),ta:OE.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Qs(n)):(await n.ma.stop(),n.Pa.length>0&&(O(Qt,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class Ko{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,u=new Ko(e,t,a,s,i);return u.start(r),u}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new V(S.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qo(n,e){if(ot("AsyncQueue",`${e}: ${n}`),Pn(n))return new V(S.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class gn{static emptySet(e){return new gn(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||L.comparator(t.key,r.key):(t,r)=>L.comparator(t.key,r.key),this.keyedMap=Yn(),this.sortedSet=new ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof gn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new gn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class ku{constructor(){this.fa=new ne(L.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):x(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class wn{constructor(e,t,r,s,i,a,u,l,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((u=>{a.push({type:0,doc:u})})),new wn(e,t,gn.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&qs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class xE{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class UE{constructor(){this.queries=Du(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=j(t),i=s.queries;s.queries=Du(),i.forEach(((a,u)=>{for(const l of u.wa)l.onError(r)}))})(this,new V(S.ABORTED,"Firestore shutting down"))}}function Du(){return new en((n=>mh(n)),qs)}async function Xh(n,e){const t=j(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new xE,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const u=Qo(a,`Initialization of query '${un(e.query)}' failed`);return void e.onError(u)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Xo(t)}async function Jh(n,e){const t=j(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function FE(n,e){const t=j(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const u of a.wa)u.Ca(s)&&(r=!0);a.ya=s}}r&&Xo(t)}function BE(n,e,t){const r=j(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Xo(n){n.Da.forEach((e=>{e.next()}))}var co,Nu;(Nu=co||(co={})).Fa="default",Nu.Cache="cache";class Yh{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new wn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=wn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==co.Cache}}/**
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
 */class Zh{constructor(e){this.key=e}}class ed{constructor(e){this.key=e}}class jE{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=W(),this.mutatedKeys=W(),this.Xa=gh(e),this.eu=new gn(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new ku,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((p,g)=>{const E=s.get(p),b=$s(this.query,g)?g:null,C=!!E&&this.mutatedKeys.has(E.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let k=!1;E&&b?E.data.isEqual(b.data)?C!==N&&(r.track({type:3,doc:b}),k=!0):this.iu(E,b)||(r.track({type:2,doc:b}),k=!0,(l&&this.Xa(b,l)>0||d&&this.Xa(b,d)<0)&&(u=!0)):!E&&b?(r.track({type:0,doc:b}),k=!0):E&&!b&&(r.track({type:1,doc:E}),k=!0,(l||d)&&(u=!0)),k&&(b?(a=a.add(b),i=N?i.add(p):i.delete(p)):(a=a.delete(p),i=i.delete(p)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{eu:a,ru:r,Ds:u,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((p,g)=>(function(b,C){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return x(20277,{At:k})}};return N(b)-N(C)})(p.type,g.type)||this.Xa(p.doc,g.doc))),this.su(r),s=s!=null&&s;const u=t&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,d=l!==this.Ya;return this.Ya=l,a.length!==0||d?{snapshot:new wn(this.query,e.eu,i,a,e.mutatedKeys,l===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:u}:{_u:u}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ku,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=W(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new ed(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Zh(r))})),t}uu(e){this.Ha=e.qs,this.Za=W();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return wn.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Jo="SyncEngine";class qE{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class $E{constructor(e){this.key=e,this.lu=!1}}class zE{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new en((u=>mh(u)),qs),this.Tu=new Map,this.Iu=new Set,this.du=new ne(L.comparator),this.Eu=new Map,this.Au=new Bo,this.Ru={},this.Vu=new Map,this.mu=In.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function HE(n,e,t=!0){const r=od(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await td(r,e,t,!0),s}async function WE(n,e){const t=od(n);await td(t,e,!0,!1)}async function td(n,e,t,r){const s=await dE(n.localStore,Ge(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let u;return r&&(u=await GE(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&zh(n.remoteStore,s),u}async function GE(n,e,t,r,s){n.gu=(g,E,b)=>(async function(N,k,q,U){let F=k.view.nu(q);F.Ds&&(F=await Au(N.localStore,k.query,!1).then((({documents:T})=>k.view.nu(T,F))));const z=U&&U.targetChanges.get(k.targetId),fe=U&&U.targetMismatches.get(k.targetId)!=null,Y=k.view.applyChanges(F,N.isPrimaryClient,z,fe);return Ou(N,k.targetId,Y._u),Y.snapshot})(n,g,E,b);const i=await Au(n.localStore,e,!0),a=new jE(e,i.qs),u=a.nu(i.documents),l=br.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,l);Ou(n,t,d._u);const p=new qE(e,t,a);return n.Pu.set(e,p),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),d.snapshot}async function KE(n,e,t){const r=j(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!qs(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await oo(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&zo(r.remoteStore,s.targetId),uo(r,s.targetId)})).catch(Sn)):(uo(r,s.targetId),await oo(r.localStore,s.targetId,!0))}async function QE(n,e){const t=j(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),zo(t.remoteStore,r.targetId))}async function XE(n,e,t){const r=rv(n);try{const s=await(function(a,u){const l=j(a),d=ee.now(),p=u.reduce(((b,C)=>b.add(C.key)),W());let g,E;return l.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let C=at(),N=W();return l.Os.getEntries(b,p).next((k=>{C=k,C.forEach(((q,U)=>{U.isValidDocument()||(N=N.add(q))}))})).next((()=>l.localDocuments.getOverlayedDocuments(b,C))).next((k=>{g=k;const q=[];for(const U of u){const F=dy(U,g.get(U.key).overlayedDocument);F!=null&&q.push(new Mt(U.key,F,ah(F.value.mapValue),Fe.exists(!0)))}return l.mutationQueue.addMutationBatch(b,d,q,u)})).next((k=>{E=k;const q=k.applyToLocalDocumentSet(g,N);return l.documentOverlayCache.saveOverlays(b,k.batchId,q)}))})).then((()=>({batchId:E.batchId,changes:yh(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,u,l){let d=a.Ru[a.currentUser.toKey()];d||(d=new ne($)),d=d.insert(u,l),a.Ru[a.currentUser.toKey()]=d})(r,s.batchId,t),await Pr(r,s.changes),await Qs(r.remoteStore)}catch(s){const i=Qo(s,"Failed to persist write");t.reject(i)}}async function nd(n,e){const t=j(n);try{const r=await uE(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Q(a.lu,14607):s.removedDocuments.size>0&&(Q(a.lu,42227),a.lu=!1))})),await Pr(t,r,e)}catch(r){await Sn(r)}}function Vu(n,e,t){const r=j(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const u=a.view.va(e);u.snapshot&&s.push(u.snapshot)})),(function(a,u){const l=j(a);l.onlineState=u;let d=!1;l.queries.forEach(((p,g)=>{for(const E of g.wa)E.va(u)&&(d=!0)})),d&&Xo(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JE(n,e,t){const r=j(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new ne(L.comparator);a=a.insert(i,Ae.newNoDocument(i,B.min()));const u=W().add(i),l=new Ws(B.min(),new Map,new ne($),a,u);await nd(r,l),r.du=r.du.remove(i),r.Eu.delete(e),Yo(r)}else await oo(r.localStore,e,!1).then((()=>uo(r,e,t))).catch(Sn)}async function YE(n,e){const t=j(n),r=e.batch.batchId;try{const s=await cE(t.localStore,e);sd(t,r,null),rd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Pr(t,s)}catch(s){await Sn(s)}}async function ZE(n,e,t){const r=j(n);try{const s=await(function(a,u){const l=j(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let p;return l.mutationQueue.lookupMutationBatch(d,u).next((g=>(Q(g!==null,37113),p=g.keys(),l.mutationQueue.removeMutationBatch(d,g)))).next((()=>l.mutationQueue.performConsistencyCheck(d))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(d,p,u))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p))).next((()=>l.localDocuments.getDocuments(d,p)))}))})(r.localStore,e);sd(r,e,t),rd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Pr(r,s)}catch(s){await Sn(s)}}function rd(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function sd(n,e,t){const r=j(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function uo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||id(n,r)}))}function id(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(zo(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Yo(n))}function Ou(n,e,t){for(const r of t)r instanceof Zh?(n.Au.addReference(r.key,e),ev(n,r)):r instanceof ed?(O(Jo,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||id(n,r.key)):x(19791,{yu:r})}function ev(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(O(Jo,"New document in limbo: "+t),n.Iu.add(r),Yo(n))}function Yo(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new L(J.fromString(e)),r=n.mu.next();n.Eu.set(r,new $E(t)),n.du=n.du.insert(t,r),zh(n.remoteStore,new yt(Ge(js(t.path)),r,"TargetPurposeLimboResolution",Us.ue))}}async function Pr(n,e,t){const r=j(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((u,l)=>{a.push(r.gu(l,e,t).then((d=>{var p;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(p=t==null?void 0:t.targetChanges.get(l.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(l.targetId,g?"current":"not-current")}if(d){s.push(d);const g=qo.Es(l.targetId,d);i.push(g)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(l,d){const p=j(l);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>P.forEach(d,(E=>P.forEach(E.Is,(b=>p.persistence.referenceDelegate.addReference(g,E.targetId,b))).next((()=>P.forEach(E.ds,(b=>p.persistence.referenceDelegate.removeReference(g,E.targetId,b)))))))))}catch(g){if(!Pn(g))throw g;O($o,"Failed to update sequence numbers: "+g)}for(const g of d){const E=g.targetId;if(!g.fromCache){const b=p.Fs.get(E),C=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(C);p.Fs=p.Fs.insert(E,N)}}})(r.localStore,i))}async function tv(n,e){const t=j(n);if(!t.currentUser.isEqual(e)){O(Jo,"User change. New user:",e.toKey());const r=await Bh(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((u=>{u.forEach((l=>{l.reject(new V(S.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pr(t,r.Bs)}}function nv(n,e){const t=j(n),r=t.Eu.get(e);if(r&&r.lu)return W().add(r.key);{let s=W();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const u=t.Pu.get(a);s=s.unionWith(u.view.tu)}return s}}function od(n){const e=j(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=nd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JE.bind(null,e),e.hu.J_=FE.bind(null,e.eventManager),e.hu.pu=BE.bind(null,e.eventManager),e}function rv(n){const e=j(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YE.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZE.bind(null,e),e}class Cs{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Gs(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return aE(this.persistence,new sE,e.initialUser,this.serializer)}Du(e){return new Fh(jo.Vi,this.serializer)}bu(e){return new pE}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Cs.provider={build:()=>new Cs};class sv extends Cs{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Q(this.persistence.referenceDelegate instanceof Ss,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $y(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Ce.withCacheSize(this.cacheSizeBytes):Ce.DEFAULT;return new Fh((r=>Ss.Vi(r,t)),this.serializer)}}class lo{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vu(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tv.bind(null,this.syncEngine),await ME(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new UE})()}createDatastore(e){const t=Gs(e.databaseInfo.databaseId),r=(function(i){return new EE(i)})(e.databaseInfo);return(function(i,a,u,l){return new wE(i,a,u,l)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,u){return new RE(r,s,i,a,u)})(this.localStore,this.datastore,e.asyncQueue,(t=>Vu(this.syncEngine,t,0)),(function(){return Su.C()?new Su:new mE})())}createSyncEngine(e,t){return(function(s,i,a,u,l,d,p){const g=new zE(s,i,a,u,l,d);return p&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=j(s);O(Qt,"RemoteStore shutting down."),i.Ia.add(5),await Sr(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}lo.provider={build:()=>new lo};/**
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
 */class ad{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ot("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Nt="FirestoreClient";class iv{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=we.UNAUTHENTICATED,this.clientId=ko.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{O(Nt,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(O(Nt,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Qo(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function xi(n,e){n.asyncQueue.verifyOperationInProgress(),O(Nt,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Bh(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{bt("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{O("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{bt("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Lu(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ov(n);O(Nt,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Cu(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Cu(e.remoteStore,s))),n._onlineComponents=e}async function ov(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O(Nt,"Using user provided OfflineComponentProvider");try{await xi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===S.FAILED_PRECONDITION||s.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;bt("Error using user provided cache. Falling back to memory cache: "+t),await xi(n,new Cs)}}else O(Nt,"Using default OfflineComponentProvider"),await xi(n,new sv(void 0));return n._offlineComponents}async function cd(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O(Nt,"Using user provided OnlineComponentProvider"),await Lu(n,n._uninitializedComponentsProvider._online)):(O(Nt,"Using default OnlineComponentProvider"),await Lu(n,new lo))),n._onlineComponents}function av(n){return cd(n).then((e=>e.syncEngine))}async function ho(n){const e=await cd(n),t=e.eventManager;return t.onListen=HE.bind(null,e.syncEngine),t.onUnlisten=KE.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=WE.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=QE.bind(null,e.syncEngine),t}function cv(n,e,t={}){const r=new wt;return n.asyncQueue.enqueueAndForget((async()=>(function(i,a,u,l,d){const p=new ad({next:E=>{p.Ou(),a.enqueueAndForget((()=>Jh(i,g)));const b=E.docs.has(u);!b&&E.fromCache?d.reject(new V(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&E.fromCache&&l&&l.source==="server"?d.reject(new V(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(E)},error:E=>d.reject(E)}),g=new Yh(js(u.path),p,{includeMetadataChanges:!0,ka:!0});return Xh(i,g)})(await ho(n),n.asyncQueue,e,t,r))),r.promise}/**
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
 */function ud(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Mu=new Map;/**
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
 */const ld="firestore.googleapis.com",xu=!0;class Uu{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new V(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ld,this.ssl=xu}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:xu;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Uh;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jy)throw new V(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}R_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ud((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new V(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Xs{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uu({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new V(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new V(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uu(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new g_;switch(r.type){case"firstParty":return new v_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new V(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Mu.get(t);r&&(O("ComponentProvider","Removing Datastore"),Mu.delete(t),r.terminate())})(this),Promise.resolve()}}function uv(n,e,t,r={}){var s;n=Ue(n,Xs);const i=Vt(e),a=n._getSettings(),u=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),l=`${e}:${t}`;i&&(mo(`https://${l}`),go("Firestore",!0)),a.host!==ld&&a.host!==l&&bt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},a),{host:l,ssl:i,emulatorOptions:r});if(!Ht(d,u)&&(n._setSettings(d),r.mockUserToken)){let p,g;if(typeof r.mockUserToken=="string")p=r.mockUserToken,g=we.MOCK_USER;else{p=rl(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new V(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new we(E)}n._authCredentials=new __(new Kl(p,g))}}/**
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
 */class nn{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new nn(this.firestore,e,this._query)}}class se{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new At(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new se(this.firestore,e,this._key)}toJSON(){return{type:se._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ar(t,se._jsonSchema))return new se(e,r||null,new L(J.fromString(t.referencePath)))}}se._jsonSchemaVersion="firestore/documentReference/1.0",se._jsonSchema={type:le("string",se._jsonSchemaVersion),referencePath:le("string")};class At extends nn{constructor(e,t,r){super(e,t,js(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new se(this.firestore,null,new L(e))}withConverter(e){return new At(this.firestore,e,this._path)}}function FT(n,e,...t){if(n=te(n),Xl("collection","path",e),n instanceof Xs){const r=J.fromString(e,...t);return Jc(r),new At(n,null,r)}{if(!(n instanceof se||n instanceof At))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return Jc(r),new At(n.firestore,null,r)}}function lv(n,e,...t){if(n=te(n),arguments.length===1&&(e=ko.newId()),Xl("doc","path",e),n instanceof Xs){const r=J.fromString(e,...t);return Xc(r),new se(n,null,new L(r))}{if(!(n instanceof se||n instanceof At))throw new V(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(J.fromString(e,...t));return Xc(r),new se(n.firestore,n instanceof At?n.converter:null,new L(r))}}/**
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
 */const Fu="AsyncQueue";class Bu{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new qh(this,"async_queue_retry"),this.oc=()=>{const r=Mi();r&&O(Fu,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Mi();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Mi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new wt;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Pn(e))throw e;O(Fu,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,ot("INTERNAL UNHANDLED ERROR: ",ju(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Ko.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&x(47125,{hc:ju(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function ju(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function qu(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class Xt extends Xs{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Bu,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bu(e),this._firestoreClient=void 0,await e}}}function BT(n,e){const t=typeof n=="object"?n:Eo(),r=typeof n=="string"?n:Is,s=Ns(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=el("firestore");i&&uv(s,...i)}return s}function Zo(n){if(n._terminated)throw new V(S.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||hv(n),n._firestoreClient}function hv(n){var e,t,r;const s=n._freezeSettings(),i=(function(u,l,d,p){return new M_(u,l,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,ud(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new iv(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(u){const l=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(l),_online:l}})(n._componentsProvider))}/**
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
 */class Le{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Le(_e.fromBase64String(e))}catch(t){throw new V(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Le(_e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Le._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ar(e,Le._jsonSchema))return Le.fromBase64String(e.bytes)}}Le._jsonSchemaVersion="firestore/bytes/1.0",Le._jsonSchema={type:le("string",Le._jsonSchemaVersion),bytes:le("string")};/**
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
 */class Js{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new V(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ys{constructor(e){this._methodName=e}}/**
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
 */class Qe{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new V(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new V(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return $(this._lat,e._lat)||$(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qe._jsonSchemaVersion}}static fromJSON(e){if(Ar(e,Qe._jsonSchema))return new Qe(e.latitude,e.longitude)}}Qe._jsonSchemaVersion="firestore/geoPoint/1.0",Qe._jsonSchema={type:le("string",Qe._jsonSchemaVersion),latitude:le("number"),longitude:le("number")};/**
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
 */class Xe{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Xe._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ar(e,Xe._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Xe(e.vectorValues);throw new V(S.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xe._jsonSchemaVersion="firestore/vectorValue/1.0",Xe._jsonSchema={type:le("string",Xe._jsonSchemaVersion),vectorValues:le("object")};/**
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
 */const dv=/^__.*__$/;class fv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Rr(e,this.data,t,this.fieldTransforms)}}class hd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Mt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function dd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw x(40011,{Ec:n})}}class ea{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ea(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ks(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(dd(this.Ec)&&dv.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class pv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Gs(e)}Dc(e,t,r,s=!1){return new ea({Ec:e,methodName:t,bc:r,path:ge.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Zs(n){const e=n._freezeSettings(),t=Gs(n._databaseId);return new pv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function fd(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);na("Data must be an object, but it was:",a,r);const u=pd(r,a);let l,d;if(i.merge)l=new Ne(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const p=[];for(const g of i.mergeFields){const E=fo(e,g,t);if(!a.contains(E))throw new V(S.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);gd(p,E)||p.push(E)}l=new Ne(p),d=a.fieldTransforms.filter((g=>l.covers(g.field)))}else l=null,d=a.fieldTransforms;return new fv(new ke(u),l,d)}class ei extends Ys{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ei}}class ta extends Ys{_toFieldTransform(e){return new cy(e.path,new gr)}isEqual(e){return e instanceof ta}}function mv(n,e,t,r){const s=n.Dc(1,e,t);na("Data must be an object, but it was:",s,r);const i=[],a=ke.empty();Lt(r,((l,d)=>{const p=ra(e,l,t);d=te(d);const g=s.gc(p);if(d instanceof ei)i.push(p);else{const E=Cr(d,g);E!=null&&(i.push(p),a.set(p,E))}}));const u=new Ne(i);return new hd(a,u,s.fieldTransforms)}function gv(n,e,t,r,s,i){const a=n.Dc(1,e,t),u=[fo(e,r,t)],l=[s];if(i.length%2!=0)throw new V(S.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<i.length;E+=2)u.push(fo(e,i[E])),l.push(i[E+1]);const d=[],p=ke.empty();for(let E=u.length-1;E>=0;--E)if(!gd(d,u[E])){const b=u[E];let C=l[E];C=te(C);const N=a.gc(b);if(C instanceof ei)d.push(b);else{const k=Cr(C,N);k!=null&&(d.push(b),p.set(b,k))}}const g=new Ne(d);return new hd(p,g,a.fieldTransforms)}function _v(n,e,t,r=!1){return Cr(t,n.Dc(r?4:3,e))}function Cr(n,e){if(md(n=te(n)))return na("Unsupported field value:",e,n),pd(n,e);if(n instanceof Ys)return(function(r,s){if(!dd(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const u of r){let l=Cr(u,s.yc(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=te(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iy(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ee.fromDate(r);return{timestampValue:bs(s.serializer,i)}}if(r instanceof ee){const i=new ee(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:bs(s.serializer,i)}}if(r instanceof Qe)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Le)return{bytesValue:Dh(s.serializer,r._byteString)};if(r instanceof se){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fo(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Xe)return(function(a,u){return{mapValue:{fields:{[ih]:{stringValue:oh},[ws]:{arrayValue:{values:a.toArray().map((d=>{if(typeof d!="number")throw u.wc("VectorValues must only contain numeric values.");return Mo(u.serializer,d)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${xs(r)}`)})(n,e)}function pd(n,e){const t={};return Zl(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lt(n,((r,s)=>{const i=Cr(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function md(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ee||n instanceof Qe||n instanceof Le||n instanceof se||n instanceof Ys||n instanceof Xe)}function na(n,e,t){if(!md(t)||!Jl(t)){const r=xs(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function fo(n,e,t){if((e=te(e))instanceof Js)return e._internalPath;if(typeof e=="string")return ra(n,e);throw ks("Field path arguments must be of type string or ",n,!1,void 0,t)}const yv=new RegExp("[~\\*/\\[\\]]");function ra(n,e,t){if(e.search(yv)>=0)throw ks(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Js(...e.split("."))._internalPath}catch{throw ks(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ks(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${e}() called with invalid data`;t&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${r}`),a&&(l+=` in document ${s}`),l+=")"),new V(S.INVALID_ARGUMENT,u+n+l)}function gd(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class _d{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new se(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ev(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ti("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Ev extends _d{data(){return super.data()}}function ti(n,e){return typeof e=="string"?ra(n,e):e instanceof Js?e._internalPath:e._delegate._internalPath}/**
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
 */function vv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new V(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class sa{}class yd extends sa{}function jT(n,e,...t){let r=[];e instanceof sa&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((l=>l instanceof ia)).length,u=i.filter((l=>l instanceof ni)).length;if(a>1||a>0&&u>0)throw new V(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class ni extends yd{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ni(e,t,r)}_apply(e){const t=this._parse(e);return Ed(e._query,t),new nn(e.firestore,e.converter,eo(e._query,t))}_parse(e){const t=Zs(e.firestore);return(function(i,a,u,l,d,p,g){let E;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new V(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){zu(g,p);const C=[];for(const N of g)C.push($u(l,i,N));E={arrayValue:{values:C}}}else E=$u(l,i,g)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||zu(g,p),E=_v(u,a,g,p==="in"||p==="not-in");return ue.create(d,p,E)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function qT(n,e,t){const r=e,s=ti("where",n);return ni._create(s,r,t)}class ia extends sa{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new ia(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:je.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)Ed(a,l),a=eo(a,l)})(e._query,t),new nn(e.firestore,e.converter,eo(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class oa extends yd{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new oa(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new V(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new mr(i,a)})(e._query,this._field,this._direction);return new nn(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new Cn(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function $T(n,e="asc"){const t=e,r=ti("orderBy",n);return oa._create(r,t)}function $u(n,e,t){if(typeof(t=te(t))=="string"){if(t==="")throw new V(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ph(e)&&t.indexOf("/")!==-1)throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(J.fromString(t));if(!L.isDocumentKey(r))throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return iu(n,new L(r))}if(t instanceof se)return iu(n,t._key);throw new V(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xs(t)}.`)}function zu(n,e){if(!Array.isArray(n)||n.length===0)throw new V(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ed(n,e){const t=(function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new V(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Tv{convertValue(e,t="none"){switch(kt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ct(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw x(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Lt(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[ws].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>ae(a.doubleValue)));return new Xe(i)}convertGeoPoint(e){return new Qe(ae(e.latitude),ae(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Bs(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(dr(e));default:return null}}convertTimestamp(e){const t=Pt(e);return new ee(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=J.fromString(e);Q(xh(r),9688,{name:e});const s=new fr(r.get(1),r.get(3)),i=new L(r.popFirst(5));return s.isEqual(t)||ot(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function vd(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class er{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $t extends _d{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ds(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ti("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new V(S.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=$t._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}$t._jsonSchemaVersion="firestore/documentSnapshot/1.0",$t._jsonSchema={type:le("string",$t._jsonSchemaVersion),bundleSource:le("string","DocumentSnapshot"),bundleName:le("string"),bundle:le("string")};class ds extends $t{data(e={}){return super.data(e)}}class _n{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new er(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new ds(this._firestore,this._userDataWriter,r.key,r,new er(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new V(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((u=>{const l=new ds(s._firestore,s._userDataWriter,u.doc.key,u.doc,new er(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((u=>i||u.type!==3)).map((u=>{const l=new ds(s._firestore,s._userDataWriter,u.doc.key,u.doc,new er(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:Iv(u.type),doc:l,oldIndex:d,newIndex:p}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new V(S.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=_n._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=ko.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Iv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return x(61501,{type:n})}}/**
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
 */function zT(n){n=Ue(n,se);const e=Ue(n.firestore,Xt);return cv(Zo(e),n._key).then((t=>Id(e,n,t)))}_n._jsonSchemaVersion="firestore/querySnapshot/1.0",_n._jsonSchema={type:le("string",_n._jsonSchemaVersion),bundleSource:le("string","QuerySnapshot"),bundleName:le("string"),bundle:le("string")};class Td extends Tv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Le(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new se(this.firestore,null,t)}}function HT(n,e,t){n=Ue(n,se);const r=Ue(n.firestore,Xt),s=vd(n.converter,e,t);return aa(r,[fd(Zs(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Fe.none())])}function WT(n,e,t,...r){n=Ue(n,se);const s=Ue(n.firestore,Xt),i=Zs(s);let a;return a=typeof(e=te(e))=="string"||e instanceof Js?gv(i,"updateDoc",n._key,e,t,r):mv(i,"updateDoc",n._key,e),aa(s,[a.toMutation(n._key,Fe.exists(!0))])}function GT(n,e){const t=Ue(n.firestore,Xt),r=lv(n),s=vd(n.converter,e);return aa(t,[fd(Zs(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Fe.exists(!1))]).then((()=>r))}function KT(n,...e){var t,r,s;n=te(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||qu(e[a])||(i=e[a++]);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(qu(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let l,d,p;if(n instanceof se)d=Ue(n.firestore,Xt),p=js(n._key.path),l={next:g=>{e[a]&&e[a](Id(d,n,g))},error:e[a+1],complete:e[a+2]};else{const g=Ue(n,nn);d=Ue(g.firestore,Xt),p=g._query;const E=new Td(d);l={next:b=>{e[a]&&e[a](new _n(d,E,g,b))},error:e[a+1],complete:e[a+2]},vv(n._query)}return(function(E,b,C,N){const k=new ad(N),q=new Yh(b,k,C);return E.asyncQueue.enqueueAndForget((async()=>Xh(await ho(E),q))),()=>{k.Ou(),E.asyncQueue.enqueueAndForget((async()=>Jh(await ho(E),q)))}})(Zo(d),p,u,l)}function aa(n,e){return(function(r,s){const i=new wt;return r.asyncQueue.enqueueAndForget((async()=>XE(await av(r),s,i))),i.promise})(Zo(n),e)}function Id(n,e,t){const r=t.docs.get(e._key),s=new Td(n);return new $t(n,s,e._key,r,new er(t.hasPendingWrites,t.fromCache),e.converter)}function QT(){return new ta("serverTimestamp")}(function(e,t=!0){(function(s){bn=s})(Yt),Wt(new Rt("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),u=new Xt(new y_(r.getProvider("auth-internal")),new T_(a,r.getProvider("app-check-internal")),(function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new V(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fr(d.options.projectId,p)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),u._setSettings(i),u}),"PUBLIC").setMultipleInstances(!0)),ze(Hc,Wc,e),ze(Hc,Wc,"esm2017")})();/**
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
 */const wd="firebasestorage.googleapis.com",Ad="storageBucket",wv=120*1e3,Av=600*1e3;/**
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
 */class oe extends Ye{constructor(e,t,r=0){super(Ui(e),`Firebase Storage: ${t} (${Ui(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ui(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ie;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ie||(ie={}));function Ui(n){return"storage/"+n}function ca(){const n="An unknown error occurred, please check the error payload for server response.";return new oe(ie.UNKNOWN,n)}function Rv(n){return new oe(ie.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function bv(n){return new oe(ie.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Sv(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new oe(ie.UNAUTHENTICATED,n)}function Pv(){return new oe(ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Cv(n){return new oe(ie.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function kv(){return new oe(ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Dv(){return new oe(ie.CANCELED,"User canceled the upload/download.")}function Nv(n){return new oe(ie.INVALID_URL,"Invalid URL '"+n+"'.")}function Vv(n){return new oe(ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Ov(){return new oe(ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ad+"' property when initializing the app?")}function Lv(){return new oe(ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Mv(){return new oe(ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function xv(n){return new oe(ie.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function po(n){return new oe(ie.INVALID_ARGUMENT,n)}function Rd(){return new oe(ie.APP_DELETED,"The Firebase app was deleted.")}function Uv(n){return new oe(ie.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ar(n,e){return new oe(ie.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Kn(n){throw new oe(ie.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Ve{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ve.makeFromUrl(e,t)}catch{return new Ve(e,"")}if(r.path==="")return r;throw Vv(e)}static makeFromUrl(e,t){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(z){z.path.charAt(z.path.length-1)==="/"&&(z.path_=z.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+s+a,"i"),l={bucket:1,path:3};function d(z){z.path_=decodeURIComponent(z.path)}const p="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",b=new RegExp(`^https?://${g}/${p}/b/${s}/o${E}`,"i"),C={bucket:1,path:3},N=t===wd?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",q=new RegExp(`^https?://${N}/${s}/${k}`,"i"),F=[{regex:u,indices:l,postModify:i},{regex:b,indices:C,postModify:d},{regex:q,indices:{bucket:1,path:2},postModify:d}];for(let z=0;z<F.length;z++){const fe=F[z],Y=fe.regex.exec(e);if(Y){const T=Y[fe.indices.bucket];let m=Y[fe.indices.path];m||(m=""),r=new Ve(T,m),fe.postModify(r);break}}if(r==null)throw Nv(e);return r}}class Fv{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Bv(n,e,t){let r=1,s=null,i=null,a=!1,u=0;function l(){return u===2}let d=!1;function p(...k){d||(d=!0,e.apply(null,k))}function g(k){s=setTimeout(()=>{s=null,n(b,l())},k)}function E(){i&&clearTimeout(i)}function b(k,...q){if(d){E();return}if(k){E(),p.call(null,k,...q);return}if(l()||a){E(),p.call(null,k,...q);return}r<64&&(r*=2);let F;u===1?(u=2,F=0):F=(r+Math.random())*1e3,g(F)}let C=!1;function N(k){C||(C=!0,E(),!d&&(s!==null?(k||(u=2),clearTimeout(s),g(0)):k||(u=1)))}return g(0),i=setTimeout(()=>{a=!0,N(!0)},t),N}function jv(n){n(!1)}/**
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
 */function qv(n){return n!==void 0}function $v(n){return typeof n=="object"&&!Array.isArray(n)}function ua(n){return typeof n=="string"||n instanceof String}function Hu(n){return la()&&n instanceof Blob}function la(){return typeof Blob<"u"}function Wu(n,e,t,r){if(r<e)throw po(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw po(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function ha(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function bd(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const s=e(r)+"="+e(n[r]);t=t+s+"&"}return t=t.slice(0,-1),t}var zt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(zt||(zt={}));/**
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
 */function zv(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,i=e.indexOf(n)!==-1;return t||s||i}/**
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
 */class Hv{constructor(e,t,r,s,i,a,u,l,d,p,g,E=!0,b=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=l,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=g,this.retry=E,this.isUsingEmulator=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((C,N)=>{this.resolve_=C,this.reject_=N,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ts(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const a=u=>{const l=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,d)};this.progressCallback_!==null&&i.addUploadProgressListener(a),i.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(a),this.pendingConnection_=null;const u=i.getErrorCode()===zt.NO_ERROR,l=i.getStatus();if(!u||zv(l,this.additionalRetryCodes_)&&this.retry){const p=i.getErrorCode()===zt.ABORT;r(!1,new ts(!1,null,p));return}const d=this.successCodes_.indexOf(l)!==-1;r(!0,new ts(d,i))})},t=(r,s)=>{const i=this.resolve_,a=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(u,u.getResponse());qv(l)?i(l):i()}catch(l){a(l)}else if(u!==null){const l=ca();l.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,l)):a(l)}else if(s.canceled){const l=this.appDelete_?Rd():Dv();a(l)}else{const l=kv();a(l)}};this.canceled_?t(!1,new ts(!1,null,!0)):this.backoffId_=Bv(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&jv(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ts{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Wv(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Gv(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Kv(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Qv(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Xv(n,e,t,r,s,i,a=!0,u=!1){const l=bd(n.urlParams),d=n.url+l,p=Object.assign({},n.headers);return Kv(p,e),Wv(p,t),Gv(p,i),Qv(p,r),new Hv(d,n.method,p,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a,u)}/**
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
 */function Jv(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Yv(...n){const e=Jv();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(la())return new Blob(n);throw new oe(ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Zv(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function eT(n){if(typeof atob>"u")throw xv("base-64");return atob(n)}/**
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
 */const $e={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Fi{constructor(e,t){this.data=e,this.contentType=t||null}}function tT(n,e){switch(n){case $e.RAW:return new Fi(Sd(e));case $e.BASE64:case $e.BASE64URL:return new Fi(Pd(n,e));case $e.DATA_URL:return new Fi(rT(e),sT(e))}throw ca()}function Sd(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const i=r,a=n.charCodeAt(++t);r=65536|(i&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function nT(n){let e;try{e=decodeURIComponent(n)}catch{throw ar($e.DATA_URL,"Malformed data URL.")}return Sd(e)}function Pd(n,e){switch(n){case $e.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ar(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case $e.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ar(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=eT(e)}catch(s){throw s.message.includes("polyfill")?s:ar(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}class Cd{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ar($e.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=iT(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function rT(n){const e=new Cd(n);return e.base64?Pd($e.BASE64,e.rest):nT(e.rest)}function sT(n){return new Cd(n).contentType}function iT(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class _t{constructor(e,t){let r=0,s="";Hu(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Hu(this.data_)){const r=this.data_,s=Zv(r,e,t);return s===null?null:new _t(s)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new _t(r,!0)}}static getBlob(...e){if(la()){const t=e.map(r=>r instanceof _t?r.data_:r);return new _t(Yv.apply(null,t))}else{const t=e.map(a=>ua(a)?tT($e.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let i=0;return t.forEach(a=>{for(let u=0;u<a.length;u++)s[i++]=a[u]}),new _t(s,!0)}}uploadData(){return this.data_}}/**
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
 */function kd(n){let e;try{e=JSON.parse(n)}catch{return null}return $v(e)?e:null}/**
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
 */function oT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function aT(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Dd(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function cT(n,e){return e}class Pe{constructor(e,t,r,s){this.server=e,this.local=t||e,this.writable=!!r,this.xform=s||cT}}let ns=null;function uT(n){return!ua(n)||n.length<2?n:Dd(n)}function Nd(){if(ns)return ns;const n=[];n.push(new Pe("bucket")),n.push(new Pe("generation")),n.push(new Pe("metageneration")),n.push(new Pe("name","fullPath",!0));function e(i,a){return uT(a)}const t=new Pe("name");t.xform=e,n.push(t);function r(i,a){return a!==void 0?Number(a):a}const s=new Pe("size");return s.xform=r,n.push(s),n.push(new Pe("timeCreated")),n.push(new Pe("updated")),n.push(new Pe("md5Hash",null,!0)),n.push(new Pe("cacheControl",null,!0)),n.push(new Pe("contentDisposition",null,!0)),n.push(new Pe("contentEncoding",null,!0)),n.push(new Pe("contentLanguage",null,!0)),n.push(new Pe("contentType",null,!0)),n.push(new Pe("metadata","customMetadata",!0)),ns=n,ns}function lT(n,e){function t(){const r=n.bucket,s=n.fullPath,i=new Ve(r,s);return e._makeStorageReference(i)}Object.defineProperty(n,"ref",{get:t})}function hT(n,e,t){const r={};r.type="file";const s=t.length;for(let i=0;i<s;i++){const a=t[i];r[a.local]=a.xform(r,e[a.server])}return lT(r,n),r}function Vd(n,e,t){const r=kd(e);return r===null?null:hT(n,r,t)}function dT(n,e,t,r){const s=kd(e);if(s===null||!ua(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const a=encodeURIComponent;return i.split(",").map(d=>{const p=n.bucket,g=n.fullPath,E="/b/"+a(p)+"/o/"+a(g),b=ha(E,t,r),C=bd({alt:"media",token:d});return b+C})[0]}function fT(n,e){const t={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(t[i.server]=n[i.local])}return JSON.stringify(t)}class Od{constructor(e,t,r,s){this.url=e,this.method=t,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Ld(n){if(!n)throw ca()}function pT(n,e){function t(r,s){const i=Vd(n,s,e);return Ld(i!==null),i}return t}function mT(n,e){function t(r,s){const i=Vd(n,s,e);return Ld(i!==null),dT(i,s,n.host,n._protocol)}return t}function Md(n){function e(t,r){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=Pv():s=Sv():t.getStatus()===402?s=bv(n.bucket):t.getStatus()===403?s=Cv(n.path):s=r,s.status=t.getStatus(),s.serverResponse=r.serverResponse,s}return e}function gT(n){const e=Md(n);function t(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Rv(n.path)),i.serverResponse=s.serverResponse,i}return t}function _T(n,e,t){const r=e.fullServerUrl(),s=ha(r,n.host,n._protocol),i="GET",a=n.maxOperationRetryTime,u=new Od(s,i,mT(n,t),a);return u.errorHandler=gT(e),u}function yT(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function ET(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=yT(null,e)),r}function vT(n,e,t,r,s){const i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let F="";for(let z=0;z<2;z++)F=F+Math.random().toString().slice(2);return F}const l=u();a["Content-Type"]="multipart/related; boundary="+l;const d=ET(e,r,s),p=fT(d,t),g="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+l+`\r
Content-Type: `+d.contentType+`\r
\r
`,E=`\r
--`+l+"--",b=_t.getBlob(g,r,E);if(b===null)throw Lv();const C={name:d.fullPath},N=ha(i,n.host,n._protocol),k="POST",q=n.maxUploadRetryTime,U=new Od(N,k,pT(n,t),q);return U.urlParams=C,U.headers=a,U.body=b.uploadData(),U.errorHandler=Md(e),U}class TT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=zt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=zt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=zt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,s,i){if(this.sent_)throw Kn("cannot .send() more than once");if(Vt(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const a in i)i.hasOwnProperty(a)&&this.xhr_.setRequestHeader(a,i[a].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Kn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Kn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Kn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Kn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class IT extends TT{initXhr(){this.xhr_.responseType="text"}}function xd(){return new IT}/**
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
 */class Jt{constructor(e,t){this._service=e,t instanceof Ve?this._location=t:this._location=Ve.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Jt(e,t)}get root(){const e=new Ve(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Dd(this._location.path)}get storage(){return this._service}get parent(){const e=oT(this._location.path);if(e===null)return null;const t=new Ve(this._location.bucket,e);return new Jt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Uv(e)}}function wT(n,e,t){n._throwIfRoot("uploadBytes");const r=vT(n.storage,n._location,Nd(),new _t(e,!0),t);return n.storage.makeRequestWithTokens(r,xd).then(s=>({metadata:s,ref:n}))}function AT(n){n._throwIfRoot("getDownloadURL");const e=_T(n.storage,n._location,Nd());return n.storage.makeRequestWithTokens(e,xd).then(t=>{if(t===null)throw Mv();return t})}function RT(n,e){const t=aT(n._location.path,e),r=new Ve(n._location.bucket,t);return new Jt(n.storage,r)}/**
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
 */function bT(n){return/^[A-Za-z]+:\/\//.test(n)}function ST(n,e){return new Jt(n,e)}function Ud(n,e){if(n instanceof da){const t=n;if(t._bucket==null)throw Ov();const r=new Jt(t,t._bucket);return e!=null?Ud(r,e):r}else return e!==void 0?RT(n,e):n}function PT(n,e){if(e&&bT(e)){if(n instanceof da)return ST(n,e);throw po("To use ref(service, url), the first argument must be a Storage instance.")}else return Ud(n,e)}function Gu(n,e){const t=e==null?void 0:e[Ad];return t==null?null:Ve.makeFromBucketSpec(t,n)}function CT(n,e,t,r={}){n.host=`${e}:${t}`;const s=Vt(e);s&&(mo(`https://${n.host}/b`),go("Storage",!0)),n._isUsingEmulator=!0,n._protocol=s?"https":"http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:rl(i,n.app.options.projectId))}class da{constructor(e,t,r,s,i,a=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._isUsingEmulator=a,this._bucket=null,this._host=wd,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=wv,this._maxUploadRetryTime=Av,this._requests=new Set,s!=null?this._bucket=Ve.makeFromBucketSpec(s,this._host):this._bucket=Gu(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ve.makeFromBucketSpec(this._url,e):this._bucket=Gu(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Wu("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Wu("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Oe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jt(this,e)}_makeRequest(e,t,r,s,i=!0){if(this._deleted)return new Fv(Rd());{const a=Xv(e,this._appId,r,s,t,this._firebaseVersion,i,this._isUsingEmulator);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,s).getPromise()}}const Ku="@firebase/storage",Qu="0.13.14";/**
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
 */const Fd="storage";function XT(n,e,t){return n=te(n),wT(n,e,t)}function JT(n){return n=te(n),AT(n)}function YT(n,e){return n=te(n),PT(n,e)}function ZT(n=Eo(),e){n=te(n);const r=Ns(n,Fd).getImmediate({identifier:e}),s=el("storage");return s&&kT(r,...s),r}function kT(n,e,t,r={}){CT(n,e,t,r)}function DT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new da(t,r,s,e,Yt)}function NT(){Wt(new Rt(Fd,DT,"PUBLIC").setMultipleInstances(!0)),ze(Ku,Qu,""),ze(Ku,Qu,"esm2017")}NT();export{XT as A,JT as B,Rt as C,HT as D,QT as E,Ye as F,GT as G,Wt as _,Oe as a,Ns as b,el as c,Eo as d,Gp as e,xT as f,te as g,BT as h,Vt as i,ZT as j,lv as k,zT as l,OT as m,$T as n,LT as o,mo as p,jT as q,ze as r,MT as s,FT as t,go as u,KT as v,qT as w,WT as x,VT as y,YT as z};
