!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=183)}({0:function(e,t){e.exports={".activate-line":{"":{backgroundColor:["#FFFFFF",0,0,1]}},"@VERSION":2}},1:function(e,t,r){"use strict";function o(e,t,r,o,n,i,a,s,l,u){var c,f="function"==typeof e?e.options:e;if(l){f.components||(f.components={});var p=Object.prototype.hasOwnProperty;for(var d in l)p.call(l,d)&&!p.call(f.components,d)&&(f.components[d]=l[d])}if(u&&("function"==typeof u.beforeCreate&&(u.beforeCreate=[u.beforeCreate]),(u.beforeCreate||(u.beforeCreate=[])).unshift((function(){this[u.__module]=this})),(f.mixins||(f.mixins=[])).push(u)),t&&(f.render=t,f.staticRenderFns=r,f._compiled=!0),o&&(f.functional=!0),i&&(f._scopeId="data-v-"+i),a?(c=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},f._ssrRegister=c):n&&(c=s?function(){n.call(this,this.$root.$options.shadowRoot)}:n),c)if(f.functional){f._injectStyles=c;var y=f.render;f.render=function(e,t){return c.call(t),y(e,t)}}else{var g=f.beforeCreate;f.beforeCreate=g?[].concat(g,c):[c]}return{exports:e,options:f}}r.d(t,"a",(function(){return o}))},130:function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("scroll-view",{staticStyle:{flexDirection:"column"},attrs:{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true"}},[r("view",{staticClass:["page"]},[r("view",{staticClass:["line"]}),r("scroll-view",{attrs:{scrollY:"true"},on:{scrolltolower:function(t){e.pagingFollowsList()}}},e._l(e.followsList,(function(t,o){return r("view",{key:o,staticClass:["user-wrapper"]},[r("view",{staticClass:["user-info"]},[r("u-image",{staticClass:["face"],staticStyle:{alignSelf:"center"},attrs:{src:t.face}}),r("u-text",{staticClass:["user-name"],staticStyle:{alignSelf:"center"},appendAsTree:!0,attrs:{append:"tree"}},[e._v(e._s(t.nickname))])],1),t.followed?e._e():r("view",{staticClass:["operator-wrapper"],staticStyle:{width:"140rpx",height:"60rpx",display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"#ef274d",borderRadius:"10px",alignSelf:"center"}},[r("u-text",{staticClass:["operator-words"],staticStyle:{alignSelf:"center",color:"#FFFFFF"},appendAsTree:!0,attrs:{append:"tree"},on:{click:function(r){e.followMe(t.vlogerId)}}},[e._v("\u5173\u6ce8")])]),t.followed?r("view",{staticClass:["operator-wrapper"],staticStyle:{width:"140rpx",height:"60rpx",display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"#ef274d",borderRadius:"10px",alignSelf:"center",borderWidth:"1px",borderColor:"#ef274d",backgroundColor:"#181b27"}},[r("u-text",{staticClass:["operator-words"],staticStyle:{alignSelf:"center",color:"#ef274d"},appendAsTree:!0,attrs:{append:"tree"},on:{click:function(r){e.cancelFollow(t.vlogerId)}}},[e._v("\u53d6\u5173")])]):e._e()])})),0)],1)])},n=[]},157:function(e,t,r){"use strict";r.r(t);var o=r(63),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return o[e]}))}(i);t.default=n.a},183:function(e,t,r){"use strict";r.r(t);r(2),r(4);var o=r(38);o.default.mpType="page",o.default.route="pages/me/myFollows",o.default.el="#root",new Vue(o.default)},2:function(e,t,r){Vue.prototype.__$appStyle__={},Vue.prototype.__merge_style&&Vue.prototype.__merge_style(r(3).default,Vue.prototype.__$appStyle__)},3:function(e,t,r){"use strict";r.r(t);var o=r(0),n=r.n(o);for(var i in o)["default"].indexOf(i)<0&&function(e){r.d(t,e,(function(){return o[e]}))}(i);t.default=n.a},38:function(e,t,r){"use strict";var o=r(130),n=r(61),i=r(1);var a=Object(i.a)(n.default,o.b,o.c,!1,null,null,"39454aa1",!1,o.a,void 0);(function(e){this.options.style||(this.options.style={}),Vue.prototype.__merge_style&&Vue.prototype.__$appStyle__&&Vue.prototype.__merge_style(Vue.prototype.__$appStyle__,this.options.style),Vue.prototype.__merge_style?Vue.prototype.__merge_style(r(157).default,this.options.style):Object.assign(this.options.style,r(157).default)}).call(a),t.default=a.exports},4:function(e,t){if("undefined"==typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(r){return t.resolve(e()).then((function(){return r}))}),(function(r){return t.resolve(e()).then((function(){throw r}))}))}),"undefined"!=typeof uni&&uni&&uni.requireGlobal){var r=uni.requireGlobal();ArrayBuffer=r.ArrayBuffer,Int8Array=r.Int8Array,Uint8Array=r.Uint8Array,Uint8ClampedArray=r.Uint8ClampedArray,Int16Array=r.Int16Array,Uint16Array=r.Uint16Array,Int32Array=r.Int32Array,Uint32Array=r.Uint32Array,Float32Array=r.Float32Array,Float64Array=r.Float64Array,BigInt64Array=r.BigInt64Array,BigUint64Array=r.BigUint64Array}},61:function(e,t,r){"use strict";var o=r(62),n=r.n(o);t.default=n.a},62:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;uni.getSystemInfoSync();var o=getApp(),n={components:{},data:function(){return{screenHeight:0,page:0,totalPage:0,followsList:[],followsList2:[]}},onLoad:function(){this.queryMyFollowList(0)},methods:{reFreshList:function(e,t){for(var r=this.followsList,o=0;o<r.length;o++){var n=r[o];n.vlogerId==e&&(n.followed=t,r.splice(o,1,n))}this.followsList=r},cancelFollow:function(e){var t=this,r=getApp().getUserInfoSession().id,n=o.globalData.serverUrl;uni.request({method:"POST",header:{headerUserId:r,headerUserToken:o.getUserSessionToken()},url:n+"/fans/cancel?myId="+r+"&vlogerId="+e,success:function(r){200==r.data.status?t.reFreshList(e,!1):uni.showToast({title:r.data.msg,icon:"none",duration:3e3})}})},followMe:function(e){var t=this,r=getApp().getUserInfoSession().id,n=o.globalData.serverUrl;uni.request({method:"POST",header:{headerUserId:r,headerUserToken:o.getUserSessionToken()},url:n+"/fans/follow?myId="+r+"&vlogerId="+e,success:function(r){200==r.data.status?t.reFreshList(e,!0):uni.showToast({title:r.data.msg,icon:"none",duration:3e3})}})},queryMyFollowList:function(e){var t=this;e+=1;var r=getApp().getUserInfoSession().id,n=o.globalData.serverUrl;uni.request({method:"GET",header:{headerUserId:r,headerUserToken:o.getUserSessionToken()},url:n+"/fans/queryMyFollows?myId="+r+"&page="+e+"&pageSize=10",success:function(r){if(200==r.data.status){var o=r.data.data.rows,n=r.data.data.total;t.followsList=t.followsList.concat(o),t.page=e,t.totalPage=n}}})},pagingFollowsList:function(){this.page>=this.totalPage||this.queryMyFollowList(this.page)}}};t.default=n},63:function(e,t){e.exports={".page":{"":{position:["absolute",0,0,0],left:[0,0,0,0],right:[0,0,0,0],top:[0,0,0,0],bottom:[0,0,0,0],backgroundColor:["#181b27",0,0,0]}},".line":{"":{height:["1rpx",0,0,1],backgroundColor:["#393a41",0,0,1],width:["750rpx",0,0,1]}},".place-box":{"":{backgroundColor:["#4a4c52",0,0,2]}},".place-box-touched":{"":{backgroundColor:["#6d6b6b",0,0,3]}},".right-arrow":{"":{width:["32rpx",0,0,4],height:["32rpx",0,0,4],marginLeft:["20rpx",0,0,4]}},".user-wrapper":{"":{paddingLeft:["30rpx",0,0,5],paddingRight:["30rpx",0,0,5],width:["750rpx",0,0,5],height:["120rpx",0,0,5],display:["flex",0,0,5],flexDirection:["row",0,0,5],justifyContent:["space-between",0,0,5],marginTop:["20rpx",0,0,5],marginBottom:["20rpx",0,0,5]}},".user-name":{"":{color:["#FFFFFF",0,0,6],fontSize:["15",0,0,6],marginLeft:["20rpx",0,0,6]}},".operator-wrapper":{"":{width:["140rpx",0,0,7],height:["60rpx",0,0,7],display:["flex",0,0,7],flexDirection:["row",0,0,7],justifyContent:["center",0,0,7],backgroundColor:["#ef274d",0,0,7],borderRadius:["10",0,0,7]}},".operator-words":{"":{color:["#FFFFFF",0,0,8],fontSize:["14",0,0,8]}},".user-info":{"":{display:["flex",0,0,9],flexDirection:["row",0,0,9],justifyContent:["flex-start",0,0,9]}},".face":{"":{width:["110rpx",0,0,10],height:["110rpx",0,0,10],borderRadius:["100rpx",0,0,10],borderWidth:["1",0,0,10],borderColor:["#F1F1F1",0,0,10]}},"@VERSION":2}}});