(function(){function f(a,b,d){if(a.addEventListener)a.addEventListener(b,d,!1);else if(a.attachEvent)a.attachEvent("on"+b,d);else{var c=a["on"+b];a["on"+b]=function(){d.call(this);c&&c.call(this)}}};window.pagespeed=window.pagespeed||{};var g=window.pagespeed;function k(a){this.e=[];this.d=0;this.f=!1;this.h=a;this.g=null;this.i=0;this.k=200;this.b=!1;this.a=0}function l(a,b){var d=b.getAttribute("pagespeed_lazy_position");if(d)return parseInt(d,0);var d=b.offsetTop,c=b.offsetParent;c&&(d+=l(a,c));d=Math.max(d,0);b.setAttribute("pagespeed_lazy_position",d);return d}
function m(a,b){var d,c,e;if(!a.b&&(0==b.offsetHeight||0==b.offsetWidth))return!1;a:if(b.currentStyle)c=b.currentStyle.position;else{if(document.defaultView&&document.defaultView.getComputedStyle&&(c=document.defaultView.getComputedStyle(b,null))){c=c.getPropertyValue("position");break a}c=b.style&&b.style.position?b.style.position:""}if("relative"==c)return!0;e=0;"number"==typeof window.pageYOffset?e=window.pageYOffset:document.body&&document.body.scrollTop?e=document.body.scrollTop:document.documentElement&&
document.documentElement.scrollTop&&(e=document.documentElement.scrollTop);d=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight;c=e;e+=d;var h=b.getBoundingClientRect();h?(e=h.top-d,c=h.bottom):(h=l(a,b),d=h+b.offsetHeight,e=h-e,c=d-c);return e<=a.d&&0<=c+a.d}
k.prototype.j=function(a){p(a);var b=this;window.setTimeout(function(){var d=a.getAttribute("pagespeed_lazy_src");if(null!=d)if((b.f||m(b,a))&&-1!=a.src.indexOf(b.h)){var c=a.parentNode,e=a.nextSibling;c&&c.removeChild(a);a.c&&(a.getAttribute=a.c);a.removeAttribute("onload");a.tagName&&"IMG"==a.tagName&&g.CriticalImages&&f(a,"load",function(){g.CriticalImages.checkImageForCriticality(this);b.b&&(b.a--,0==b.a&&g.CriticalImages.checkCriticalImages())});a.removeAttribute("pagespeed_lazy_src");a.removeAttribute("pagespeed_lazy_replaced_functions");
c&&c.insertBefore(a,e);a.src=d}else b.e.push(a)},0)};k.prototype.loadIfVisibleAndMaybeBeacon=k.prototype.j;k.prototype.n=function(){this.f=!0;q(this)};k.prototype.loadAllImages=k.prototype.n;function q(a){var b=a.e,d=b.length;a.e=[];for(var c=0;c<d;++c)a.j(b[c])}function t(a,b){return a.l?null!=a.l(b):null!=a.getAttribute(b)}k.prototype.o=function(){for(var a=document.getElementsByTagName("img"),b=0,d;d=a[b];b++)t(d,"pagespeed_lazy_src")&&p(d)};k.prototype.overrideAttributeFunctions=k.prototype.o;
function p(a){t(a,"pagespeed_lazy_replaced_functions")||(a.c=a.getAttribute,a.getAttribute=function(a){"src"==a.toLowerCase()&&t(this,"pagespeed_lazy_src")&&(a="pagespeed_lazy_src");return this.c(a)},a.setAttribute("pagespeed_lazy_replaced_functions","1"))}
g.m=function(a,b){function d(){if(!(c.b&&a||c.g)){var b=c.k;(new Date).getTime()-c.i>c.k&&(b=0);c.g=window.setTimeout(function(){c.i=(new Date).getTime();q(c);c.g=null},b)}}var c=new k(b);g.lazyLoadImages=c;f(window,"load",function(){c.b=!0;c.f=a;c.d=200;if(g.CriticalImages){for(var b=0,d=document.getElementsByTagName("img"),r=0,n;n=d[r];r++)-1!=n.src.indexOf(c.h)&&t(n,"pagespeed_lazy_src")&&b++;c.a=b;0==c.a&&g.CriticalImages.checkCriticalImages()}q(c)});0!=b.indexOf("data")&&((new Image).src=b);
f(window,"scroll",d);f(window,"resize",d)};g.lazyLoadInit=g.m;})();
