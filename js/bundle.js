!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){e.exports=t(1)},function(e,n,t){"use strict";t.r(n);t(2),t(3),t(4),t(5),t(6),t(7),t(8),t(9),t(10),t(11),t(12),t(13),t(14),t(15),t(16);console.log("Works!")},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n){var t=document.querySelector(".slider-container");document.querySelector(".read-more__btn").onclick=function(){t.classList.toggle("active")}},function(e,n){var t,i,o,r=document.querySelector(".slider-container"),a=document.querySelector(".slider-container2"),s=document.querySelector(".slider-container3");function c(){window.innerWidth<=600&&"false"==r.dataset.mobile&&(t=new Swiper(r,{sliderPerView:1,spaceBetween:10,loop:!0,slideClass:"swiper-wrapper__card",pagination:{el:".swiper-pagination"}}),r.dataset.mobile="true"),window.innerWidth>600&&(r.dataset.mobile="false",r.classList.contains("swiper-initialized")&&t.destroy())}function l(){window.innerWidth<=600&&"false"==a.dataset.mobile&&(i=new Swiper(a,{sliderPerView:1,spaceBetween:10,loop:!0,wrapperClass:"swiper-wrapper2",slideClass:"swiper-wrapper__card2",pagination:{el:".swiper-pagination"}}),a.dataset.mobile="true"),window.innerWidth>600&&(a.dataset.mobile="false",a.classList.contains("swiper-initialized")&&i.destroy())}function d(){window.innerWidth<=600&&"false"==s.dataset.mobile&&(o=new Swiper(s,{sliderPerView:1,spaceBetween:50,loop:!0,wrapperClass:"swiper-wrapper3",slideClass:"swiper-wrapper__card3",pagination:{el:".swiper-pagination"}}),s.dataset.mobile="true"),window.innerWidth>600&&(s.dataset.mobile="false",s.classList.contains("swiper-initialized")&&o.destroy())}c(),window.addEventListener("resize",c),l(),window.addEventListener("resize",l),d(),window.addEventListener("resize",d)},function(e,n){var t=document.querySelectorAll(".open-popup"),i=document.querySelectorAll(".close");t.forEach((function(e){e.addEventListener("click",(function(){var n=e.getAttribute("data-popup");document.getElementById(n).style.display="block",console.log(n)}))})),i.forEach((function(e){e.addEventListener("click",(function(){e.closest(".popup").style.display="none"}))})),window.onclick=function(e){e.target.classList.contains("popup")&&(e.target.style.display="none")}}]);
//# sourceMappingURL=bundle.js.map