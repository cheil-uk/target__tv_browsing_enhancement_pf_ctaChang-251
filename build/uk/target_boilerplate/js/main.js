(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var cheillondon=cheillondon||{};cheillondon.targetBoilerplate=function(){var e={init:function(){e.doEverythingTimeout()},doEverythingTimeout:function(){var t=this;console.log("XXX - doEverythingTimeout"),setTimeout(function(){if(window.$){console.log("doEverythingTimeout - jQuery loaded"),e.appendNewStyle(),e.removeStuff(),e.addElements();var o=document.querySelector(".js-pf-cta-area > a");new MutationObserver(function(t,o){var n=!0,r=!1,i=void 0;try{for(var l,a=t[Symbol.iterator]();!(n=(l=a.next()).done);n=!0){var d=l.value;"childList"===d.type?e.addElements():"attributes"===d.type&&console.log("The "+d.attributeName+" attribute was modified.")}}catch(e){r=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(r)throw i}}}).observe(o,{attributes:!0,childList:!0,subtree:!0})}else console.log("no jquery"),t.doEverythingTimeout()},1500)},appendNewStyle:function(){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=".boilerplate{width:100vw}.boilerplate__container{padding:2%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.boilerplate__content{background:white}.boilerplate__title{font-size:2em;font-family:\"SamsungOne\",arial;color:#1428a0}":t.appendChild(document.createTextNode(".boilerplate{width:100vw}.boilerplate__container{padding:2%;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.boilerplate__content{background:white}.boilerplate__title{font-size:2em;font-family:\"SamsungOne\",arial;color:#1428a0}")),e.appendChild(t)},removeStuff:function(){console.log("removeStuff")},addElements:function(){var e=document.querySelectorAll(".pf-finder-v2__box-view.js-pf-product-card"),t=!0,o=!1,n=void 0;try{for(var r,i=e[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var l=r.value,a=l.querySelector(".cta--outlined").getAttribute("href"),d=l.querySelector(".js-cta-addon");d.setAttribute("href",a),d.innerText="Buy Now"}}catch(e){o=!0,n=e}finally{try{!t&&i.return&&i.return()}finally{if(o)throw n}}},setEvents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log("XXX - setEvents: "+e)},resizeWindow:function(){setTimeout(function(){$(window).resize(),console.log("window resized")},100)}};return{main:e}}(),cheillondon.targetBoilerplate.main.init();

},{}]},{},[1])

//# sourceMappingURL=main.js.map
