!function(t){"function"==typeof define?define(t):t()}(function(){function t(t){try{return Object.defineProperty(t,"sentinel",{}),"sentinel"in t}catch(e){}}Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var r=a.call(arguments,1),n=function(){if(this instanceof n){var o=function(){};o.prototype=e.prototype;var o=new o,i=e.apply(o,r.concat(a.call(arguments)));return null!==i&&Object(i)===i?i:o}return e.apply(t,r.concat(a.call(arguments)))};return n});var e,r,n,o,i,p=Function.prototype.call,c=Object.prototype,a=Array.prototype.slice,f=p.bind(c.toString),u=p.bind(c.hasOwnProperty);if((i=u(c,"__defineGetter__"))&&(e=p.bind(c.__defineGetter__),r=p.bind(c.__defineSetter__),n=p.bind(c.__lookupGetter__),o=p.bind(c.__lookupSetter__)),Array.isArray||(Array.isArray=function(t){return"[object Array]"==f(t)}),Array.prototype.forEach||(Array.prototype.forEach=function(t,e){var r=_(this),n=0,o=r.length>>>0;if("[object Function]"!=f(t))throw new TypeError;for(;o>n;)n in r&&t.call(e,r[n],n,r),n++}),Array.prototype.map||(Array.prototype.map=function(t,e){var r=_(this),n=r.length>>>0,o=Array(n);if("[object Function]"!=f(t))throw new TypeError;for(var i=0;n>i;i++)i in r&&(o[i]=t.call(e,r[i],i,r));return o}),Array.prototype.filter||(Array.prototype.filter=function(t,e){var r=_(this),n=r.length>>>0,o=[];if("[object Function]"!=f(t))throw new TypeError;for(var i=0;n>i;i++)i in r&&t.call(e,r[i],i,r)&&o.push(r[i]);return o}),Array.prototype.every||(Array.prototype.every=function(t,e){var r=_(this),n=r.length>>>0;if("[object Function]"!=f(t))throw new TypeError;for(var o=0;n>o;o++)if(o in r&&!t.call(e,r[o],o,r))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(t,e){var r=_(this),n=r.length>>>0;if("[object Function]"!=f(t))throw new TypeError;for(var o=0;n>o;o++)if(o in r&&t.call(e,r[o],o,r))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(t){var e=_(this),r=e.length>>>0;if("[object Function]"!=f(t))throw new TypeError;if(!r&&1==arguments.length)throw new TypeError;var n,o=0;if(2<=arguments.length)n=arguments[1];else for(;;){if(o in e){n=e[o++];break}if(++o>=r)throw new TypeError}for(;r>o;o++)o in e&&(n=t.call(void 0,n,e[o],o,e));return n}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(t){var e=_(this),r=e.length>>>0;if("[object Function]"!=f(t))throw new TypeError;if(!r&&1==arguments.length)throw new TypeError;var n,r=r-1;if(2<=arguments.length)n=arguments[1];else for(;;){if(r in e){n=e[r--];break}if(0>--r)throw new TypeError}do r in this&&(n=t.call(void 0,n,e[r],r,e));while(r--);return n}),Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var e=_(this),r=e.length>>>0;if(!r)return-1;var n=0;for(1<arguments.length&&(n=d(arguments[1])),n=n>=0?n:Math.max(0,r+n);r>n;n++)if(n in e&&e[n]===t)return n;return-1}),Array.prototype.lastIndexOf||(Array.prototype.lastIndexOf=function(t){var e=_(this),r=e.length>>>0;if(!r)return-1;var n=r-1;for(1<arguments.length&&(n=Math.min(n,d(arguments[1]))),n=n>=0?n:r-Math.abs(n);n>=0;n--)if(n in e&&t===e[n])return n;return-1}),Object.getPrototypeOf||(Object.getPrototypeOf=function(t){return t.__proto__||(t.constructor?t.constructor.prototype:c)}),Object.getOwnPropertyDescriptor||(Object.getOwnPropertyDescriptor=function(t,e){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+t);if(u(t,e)){var r,p,a;if(r={enumerable:!0,configurable:!0},i){var f=t.__proto__;if(t.__proto__=c,p=n(t,e),a=o(t,e),t.__proto__=f,p||a)return p&&(r.get=p),a&&(r.set=a),r}return r.value=t[e],r}}),Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(t){return Object.keys(t)}),Object.create||(Object.create=function(t,e){var r;if(null===t)r={__proto__:null};else{if("object"!=typeof t)throw new TypeError("typeof prototype["+typeof t+"] != 'object'");r=function(){},r.prototype=t,r=new r,r.__proto__=t}return void 0!==e&&Object.defineProperties(r,e),r}),Object.defineProperty){var p=t({}),y="undefined"==typeof document||t(document.createElement("div"));if(!p||!y)var s=Object.defineProperty}(!Object.defineProperty||s)&&(Object.defineProperty=function(t,p,a){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.defineProperty called on non-object: "+t);if("object"!=typeof a&&"function"!=typeof a||null===a)throw new TypeError("Property description must be an object: "+a);if(s)try{return s.call(Object,t,p,a)}catch(f){}if(u(a,"value"))if(i&&(n(t,p)||o(t,p))){var y=t.__proto__;t.__proto__=c,delete t[p],t[p]=a.value,t.__proto__=y}else t[p]=a.value;else{if(!i)throw new TypeError("getters & setters can not be defined on this javascript engine");u(a,"get")&&e(t,p,a.get),u(a,"set")&&r(t,p,a.set)}return t}),Object.defineProperties||(Object.defineProperties=function(t,e){for(var r in e)u(e,r)&&Object.defineProperty(t,r,e[r]);return t}),Object.seal||(Object.seal=function(t){return t}),Object.freeze||(Object.freeze=function(t){return t});try{Object.freeze(function(){})}catch(l){Object.freeze=function(t){return function(e){return"function"==typeof e?e:t(e)}}(Object.freeze)}if(Object.preventExtensions||(Object.preventExtensions=function(t){return t}),Object.isSealed||(Object.isSealed=function(){return!1}),Object.isFrozen||(Object.isFrozen=function(){return!1}),Object.isExtensible||(Object.isExtensible=function(t){if(Object(t)===t)throw new TypeError;for(var e="";u(t,e);)e+="?";t[e]=!0;var r=u(t,e);return delete t[e],r}),!Object.keys){var h,b=!0,g="toString,toLocaleString,valueOf,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,constructor".split(","),w=g.length;for(h in{toString:null})b=!1;Object.keys=function(t){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError("Object.keys called on a non-object");var e,r=[];for(e in t)u(t,e)&&r.push(e);if(b)for(e=0;w>e;e++){var n=g[e];u(t,n)&&r.push(n)}return r}}if(Date.prototype.toISOString&&-1!==new Date(-621987552e5).toISOString().indexOf("-000001")||(Date.prototype.toISOString=function(){var t,e,r,n;if(!isFinite(this))throw new RangeError;for(t=[this.getUTCMonth()+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],n=this.getUTCFullYear(),n=(0>n?"-":n>9999?"+":"")+("00000"+Math.abs(n)).slice(n>=0&&9999>=n?-4:-6),e=t.length;e--;)r=t[e],10>r&&(t[e]="0"+r);return n+"-"+t.slice(0,2).join("-")+"T"+t.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"}),Date.now||(Date.now=function(){return(new Date).getTime()}),Date.prototype.toJSON||(Date.prototype.toJSON=function(){if("function"!=typeof this.toISOString)throw new TypeError;return this.toISOString()}),Date.parse&&864e13===Date.parse("+275760-09-13T00:00:00.000Z")||(Date=function(t){var e,r=function o(e,r,n,i,p,c,a){var f=arguments.length;return this instanceof t?(f=1==f&&""+e===e?new t(o.parse(e)):f>=7?new t(e,r,n,i,p,c,a):f>=6?new t(e,r,n,i,p,c):f>=5?new t(e,r,n,i,p):f>=4?new t(e,r,n,i):f>=3?new t(e,r,n):f>=2?new t(e,r):f>=1?new t(e):new t,f.constructor=o,f):t.apply(this,arguments)},n=RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(?:Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");for(e in t)r[e]=t[e];return r.now=t.now,r.UTC=t.UTC,r.prototype=t.prototype,r.prototype.constructor=r,r.parse=function(e){var r=n.exec(e);if(r){r.shift();for(var o=1;7>o;o++)r[o]=+(r[o]||(3>o?1:0)),1==o&&r[o]--;var i=+r.pop(),p=+r.pop(),c=r.pop(),o=0;if(c){if(p>23||i>59)return 0/0;o=6e4*(60*p+i)*("+"==c?-1:1)}return i=+r[0],i>=0&&99>=i?(r[0]=i+400,t.UTC.apply(this,r)+o-126227808e5):t.UTC.apply(this,r)+o}return t.parse.apply(this,arguments)},r}(Date)),h="	\n\f\r   ᠎             　\u2028\u2029﻿",!String.prototype.trim||h.trim()){h="["+h+"]";var O=RegExp("^"+h+h+"*"),j=RegExp(h+h+"*$");String.prototype.trim=function(){return(""+this).replace(O,"").replace(j,"")}}var d=function(t){return t=+t,t!==t?t=0:0!==t&&t!==1/0&&t!==-(1/0)&&(t=(t>0||-1)*Math.floor(Math.abs(t))),t},v="a"!="a"[0],_=function(t){if(null==t)throw new TypeError;return v&&"string"==typeof t&&t?t.split(""):Object(t)}});