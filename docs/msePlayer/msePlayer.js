!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1)}([function(e,t,n){"use strict";n.r(t);var r={};n.d(r,"default",function(){return o});var o=function(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}},a=function(){return function(e){this.msePlayer=e}}(),i=["audioTracks","autoplay","buffered","controller","controls","crossOrigin","currentSrc","currentTime","defaultMuted","defaultPlaybackRate","duration","ended","error","loop","mediaGroup","muted","networkState","paused","playbackRate","played","preload","readyState","seekable","seeking","src","startDate","textTracks","videoTracks","volume"],u=["addTextTrack","canPlayType","load","play","pause"],s=["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],c=function(){function e(e){this.msePlayer=e,this.videoElement=e.videoElement,this._addProperty(),this._addMethods(),this._addEvents()}return e.prototype._addProperty=function(){for(var e=0;e<i.length;e++){var t=i[e];this[t]=this.videoElement[t]}},e.prototype._addMethods=function(){for(var e=0;e<u.length;e++){var t=u[e];this[t]=this.videoElement[t]}},e.prototype._addEvents=function(){for(var e=this,t=function(t){var r=s[t];n.videoElement.addEventListener(r,function(t){e.msePlayer.emitter.emit(r,t)})},n=this,r=0;r<s.length;r++)t(r)},e}(),d=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l=function(){function e(t){this.options=d({},e.DEFAULTS,t),this.videoElement=document.querySelector(this.options.target),this.emitter=r(),this._init()}return Object.defineProperty(e,"DEFAULTS",{get:function(){return{target:"",type:"",url:""}},enumerable:!0,configurable:!0}),e.prototype._init=function(){this.mse=new a(this),this.mediaElement=new c(this)},e}();window.MsePlayer=l;t.default=l},function(e,t,n){e.exports=n(0)}]);
//# sourceMappingURL=msePlayer.js.map