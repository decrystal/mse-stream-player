!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r=t();for(var s in r)("object"==typeof exports?exports:e)[s]=r[s]}}(window,function(){return function(e){var t={};function r(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:s})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);class s extends Error{constructor(e,t){super(e),Error.captureStackTrace(this,t),this.name="MseError"}}class o{constructor(e){this.msePlayer=e,this.msSourceopen=this.msSourceopen.bind(this),this.msSourceclose=this.msSourceclose.bind(this),this.msSourceended=this.msSourceended.bind(this),this.sbUpdatestart=this.sbUpdatestart.bind(this),this.sbUpdateend=this.sbUpdateend.bind(this),this.sbUpdate=this.sbUpdate.bind(this),this.sbError=this.sbError.bind(this),this.sbAbort=this.sbAbort.bind(this),this.sblAddsourcebuffer=this.sblAddsourcebuffer.bind(this),this.sblRemovesourcebuffer=this.sblRemovesourcebuffer.bind(this),this.asblAddsourcebuffer=this.asblAddsourcebuffer.bind(this),this.asblRemovesourcebuffer=this.asblRemovesourcebuffer.bind(this),this.init()}init(){if(!MediaSource.isTypeSupported(this.msePlayer.options.mimeCodec))throw new s(`Unsupported MIME type or codec: ${this.msePlayer.options.mimeCodec}`);this.msInstance=new MediaSource,this.msePlayer.videoElement.src=URL.createObjectURL(this.msInstance),this.msInstance.addEventListener("sourceopen",this.msSourceopen),this.msInstance.addEventListener("sourceclose",this.msSourceclose),this.msInstance.addEventListener("sourceended",this.msSourceended),this.msInstance.sourceBuffers.addEventListener("addsourcebuffer",this.sblAddsourcebuffer),this.msInstance.sourceBuffers.addEventListener("removesourcebuffer",this.sblRemovesourcebuffer),this.msInstance.activeSourceBuffers.addEventListener("addsourcebuffer",this.asblAddsourcebuffer),this.msInstance.activeSourceBuffers.addEventListener("removesourcebuffer",this.asblRemovesourcebuffer)}msSourceopen(e){console.log("mediaSource: sourceopen"),this.activeSourceBuffer=this.msInstance.addSourceBuffer(this.msePlayer.options.mimeCodec),this.activeSourceBuffer.addEventListener("abort",this.sbAbort),this.activeSourceBuffer.addEventListener("error",this.sbError),this.activeSourceBuffer.addEventListener("update",this.sbUpdate),this.activeSourceBuffer.addEventListener("updateend",this.sbUpdateend),this.activeSourceBuffer.addEventListener("updatestart",this.sbUpdatestart),this.fetchUrl(this.msePlayer.options.url).then(e=>{this.activeSourceBuffer.appendBuffer(e)})}msSourceclose(e){console.log("mediaSource: sourceClose")}msSourceended(e){console.log("mediaSource: sourceEnded")}sbUpdatestart(e){console.log("sourceBuffer: updateStart")}sbUpdateend(e){console.log("sourceBuffer: updateend"),this.msInstance.endOfStream(),this.msePlayer.videoElement.play()}sbUpdate(e){console.log("sourceBuffer: update")}sbError(e){console.log("sourceBuffer: error")}sbAbort(e){console.log("sourceBuffer: abort")}sblAddsourcebuffer(e){console.log("sourceBufferList: addsourcebuffer")}sblRemovesourcebuffer(e){console.log("sourceBufferList: removesourcebuffer")}asblAddsourcebuffer(e){console.log("activeSourceBufferList: addsourcebuffer")}asblRemovesourcebuffer(e){console.log("activeSourceBufferList: removesourcebuffer")}fetchUrl(e){return console.log("fetch: "+e),fetch(e).then(e=>e.arrayBuffer()).catch(e=>{throw new s(e.message)})}destroyASB(){this.activeSourceBuffer.removeEventListener("abort",this.sbAbort),this.activeSourceBuffer.removeEventListener("error",this.sbError),this.activeSourceBuffer.removeEventListener("update",this.sbUpdate),this.activeSourceBuffer.removeEventListener("updateend",this.sbUpdateend),this.activeSourceBuffer.removeEventListener("updatestart",this.sbUpdatestart)}destroyMS(){this.msInstance.removeEventListener("sourceopen",this.msSourceopen),this.msInstance.removeEventListener("sourceclose",this.msSourceclose),this.msInstance.removeEventListener("sourceended",this.msSourceended)}destroySBL(){this.msInstance.sourceBuffers.removeEventListener("addsourcebuffer",this.sblAddsourcebuffer),this.msInstance.sourceBuffers.removeEventListener("removesourcebuffer",this.sblRemovesourcebuffer)}destroyASBL(){this.msInstance.activeSourceBuffers.removeEventListener("addsourcebuffer",this.asblAddsourcebuffer),this.msInstance.activeSourceBuffers.removeEventListener("removesourcebuffer",this.asblRemovesourcebuffer)}destroyURL(){URL.revokeObjectURL(this.msePlayer.videoElement.src)}}const i=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"];class n{constructor(e){this.msePlayer=e,this.addEvents()}addEvents(){this.events=i;for(let e=0;e<i.length;e++){let t=i[e];this.msePlayer.videoElement.addEventListener(t,e=>{this.msePlayer.emit(t,e)})}}}var a={mp4:'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',webm:'video/webm; codecs="vorbis,vp8"',ts:'video/mp2t; codecs="avc1.42E01E,mp4a.40.2"'};r(1);class u{constructor(e){var t;if(this.options=this.verification(Object.assign({},u.DEFAULTS,e)),Object.assign(this.constructor.prototype,(t=t||Object.create(null),{on(e,r){(t[e]||(t[e]=[])).push(r)},off(e,r){t[e]&&t[e].splice(t[e].indexOf(r)>>>0,1)},emit(e,r){(t[e]||[]).slice().map(e=>{e(r)}),(t["*"]||[]).slice().map(t=>{t(e,r)})}})),this.videoElement=document.querySelector(this.options.target),!this.videoElement||"VIDEO"!==this.videoElement.tagName)throw new s(`Can't find video's element: ${this.options.target}`);this.init()}static get DEFAULTS(){return{target:"",type:"",url:"",mimeCodec:""}}verification(e){if(!e.url)throw new s("Can't find video's url");if(!e.type){let t=e.url.trim().toLocaleLowerCase().split("."),r=t[t.length-1];if(!r||!Object.keys(a).includes(r))throw new s(`Can't find video's type from ${e.url}`);e.type=r}if(!e.mimeCodec){let t=a[e.type];if(!t)throw new s(`Can't find video's mimeCodec from ${e.type}`);e.mimeCodec=t}return e}init(){this.mediaElement=new n(this),this.mse=new o(this)}}window.MsePlayer=u,t.default=u},function(e,t){!function(e){"use strict";if(!e.fetch){var t={searchParams:"URLSearchParams"in e,iterable:"Symbol"in e&&"iterator"in Symbol,blob:"FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in e,arrayBuffer:"ArrayBuffer"in e};if(t.arrayBuffer)var r=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],s=function(e){return e&&DataView.prototype.isPrototypeOf(e)},o=ArrayBuffer.isView||function(e){return e&&r.indexOf(Object.prototype.toString.call(e))>-1};d.prototype.append=function(e,t){e=a(e),t=u(t);var r=this.map[e];this.map[e]=r?r+","+t:t},d.prototype.delete=function(e){delete this.map[a(e)]},d.prototype.get=function(e){return e=a(e),this.has(e)?this.map[e]:null},d.prototype.has=function(e){return this.map.hasOwnProperty(a(e))},d.prototype.set=function(e,t){this.map[a(e)]=u(t)},d.prototype.forEach=function(e,t){for(var r in this.map)this.map.hasOwnProperty(r)&&e.call(t,this.map[r],r,this)},d.prototype.keys=function(){var e=[];return this.forEach(function(t,r){e.push(r)}),c(e)},d.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),c(e)},d.prototype.entries=function(){var e=[];return this.forEach(function(t,r){e.push([r,t])}),c(e)},t.iterable&&(d.prototype[Symbol.iterator]=d.prototype.entries);var i=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];m.prototype.clone=function(){return new m(this,{body:this._bodyInit})},b.call(m.prototype),b.call(v.prototype),v.prototype.clone=function(){return new v(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new d(this.headers),url:this.url})},v.error=function(){var e=new v(null,{status:0,statusText:""});return e.type="error",e};var n=[301,302,303,307,308];v.redirect=function(e,t){if(-1===n.indexOf(t))throw new RangeError("Invalid status code");return new v(null,{status:t,headers:{location:e}})},e.Headers=d,e.Request=m,e.Response=v,e.fetch=function(e,r){return new Promise(function(s,o){var i=new m(e,r),n=new XMLHttpRequest;n.onload=function(){var e,t,r={status:n.status,statusText:n.statusText,headers:(e=n.getAllResponseHeaders()||"",t=new d,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach(function(e){var r=e.split(":"),s=r.shift().trim();if(s){var o=r.join(":").trim();t.append(s,o)}}),t)};r.url="responseURL"in n?n.responseURL:r.headers.get("X-Request-URL");var o="response"in n?n.response:n.responseText;s(new v(o,r))},n.onerror=function(){o(new TypeError("Network request failed"))},n.ontimeout=function(){o(new TypeError("Network request failed"))},n.open(i.method,i.url,!0),"include"===i.credentials?n.withCredentials=!0:"omit"===i.credentials&&(n.withCredentials=!1),"responseType"in n&&t.blob&&(n.responseType="blob"),i.headers.forEach(function(e,t){n.setRequestHeader(t,e)}),n.send(void 0===i._bodyInit?null:i._bodyInit)})},e.fetch.polyfill=!0}function a(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function u(e){return"string"!=typeof e&&(e=String(e)),e}function c(e){var r={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t.iterable&&(r[Symbol.iterator]=function(){return r}),r}function d(e){this.map={},e instanceof d?e.forEach(function(e,t){this.append(t,e)},this):Array.isArray(e)?e.forEach(function(e){this.append(e[0],e[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}function f(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function h(e){return new Promise(function(t,r){e.onload=function(){t(e.result)},e.onerror=function(){r(e.error)}})}function l(e){var t=new FileReader,r=h(t);return t.readAsArrayBuffer(e),r}function p(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function b(){return this.bodyUsed=!1,this._initBody=function(e){if(this._bodyInit=e,e)if("string"==typeof e)this._bodyText=e;else if(t.blob&&Blob.prototype.isPrototypeOf(e))this._bodyBlob=e;else if(t.formData&&FormData.prototype.isPrototypeOf(e))this._bodyFormData=e;else if(t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e))this._bodyText=e.toString();else if(t.arrayBuffer&&t.blob&&s(e))this._bodyArrayBuffer=p(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!t.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(e)&&!o(e))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=p(e)}else this._bodyText="";this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):t.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},t.blob&&(this.blob=function(){var e=f(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?f(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(l)}),this.text=function(){var e,t,r,s=f(this);if(s)return s;if(this._bodyBlob)return e=this._bodyBlob,r=h(t=new FileReader),t.readAsText(e),r;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),r=new Array(t.length),s=0;s<t.length;s++)r[s]=String.fromCharCode(t[s]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},t.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}function m(e,t){var r,s,o=(t=t||{}).body;if(e instanceof m){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new d(e.headers)),this.method=e.method,this.mode=e.mode,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"omit",!t.headers&&this.headers||(this.headers=new d(t.headers)),this.method=(s=(r=t.method||this.method||"GET").toUpperCase(),i.indexOf(s)>-1?s:r),this.mode=t.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function y(e){var t=new FormData;return e.trim().split("&").forEach(function(e){if(e){var r=e.split("="),s=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(s),decodeURIComponent(o))}}),t}function v(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new d(t.headers),this.url=t.url||"",this._initBody(e)}}("undefined"!=typeof self?self:this)}])});