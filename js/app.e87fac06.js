(function(e){function t(t){for(var i,a,c=t[0],s=t[1],u=t[2],p=0,h=[];p<c.length;p++)a=c[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&h.push(o[a][0]),o[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);l&&l(t);while(h.length)h.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},o={app:0},r=[];function c(e){return s.p+"js/"+({center:"center",home:"home"}[e]||e)+"."+{center:"62dafbde",home:"de5627d3"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={center:1,home:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var i="css/"+({center:"center",home:"home"}[e]||e)+"."+{center:"a0c11c79",home:"d87b7347"}[e]+".css",o=s.p+i,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var u=r[c],p=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(p===i||p===o))return t()}var h=document.getElementsByTagName("style");for(c=0;c<h.length;c++){u=h[c],p=u.getAttribute("data-href");if(p===i||p===o)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var i=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete a[e],l.parentNode.removeChild(l),n(r)},l.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(l)})).then((function(){a[e]=0})));var i=o[e];if(0!==i)if(i)t.push(i[2]);else{var r=new Promise((function(t,n){i=o[e]=[t,n]}));t.push(i[2]=r);var u,p=document.createElement("script");p.charset="utf-8",p.timeout=120,s.nc&&p.setAttribute("nonce",s.nc),p.src=c(e);var h=new Error;u=function(t){p.onerror=p.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;h.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",h.name="ChunkLoadError",h.type=i,h.request=a,n[1](h)}o[e]=void 0}};var l=setTimeout((function(){u({type:"timeout",target:p})}),12e4);p.onerror=p.onload=u,document.head.appendChild(p)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],p=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var l=p;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],r={data:function(){return{}},created:function(){console.log("%c 钱辉的博客 ⭐","color: #fff;font-size:20px;background-color:black;padding:200px;")},methods:{stopF5Refresh:function(){document.onkeydown=function(e){var t=window.event||e,n=t.keyCode||t.which;n>111&&n<124&&(t.preventDefault?t.preventDefault():(t.keyCode=0,t.returnValue=!1))},document.oncontextmenu=function(e){return!1}}}},c=r,s=(n("5c0b"),n("2877")),u=Object(s["a"])(c,a,o,!1,null,null,null),p=u.exports,h=n("8c4f");i["a"].use(h["a"]);var l=new h["a"]({routes:[{path:"/",redirect:"/home"},{path:"/home",component:function(){return Promise.all([n.e("center"),n.e("home")]).then(n.bind(null,"c3b0"))}},{path:"/center",component:function(){return n.e("center").then(n.bind(null,"97b0"))}}]}),d=(n("02ac"),n("bfd0"),n("7618")),g=n("d225"),m=n("b0b4"),f=function(){function e(t,n,i){Object(g["a"])(this,e);var a=this;a.obj=t,a.binding=n,a.touchType=i,a.firstTouchPosition={x:0,y:0},a.firstTouchTime=0,a.callBack="object"===Object(d["a"])(n.value)?n.value.fn:n.value,a.moved=!1,a.leaved=!1,a.longTouched=!1;var o=Object.create(null),r=function(e){return function(t){var n=a.binding.modifiers,i=n.stop,r=n.prevent,c=n.self,s=n.once;i&&t.stopPropagation(),r&&t.preventDefault(),s&&a.obj.removeEventListener("touch"+e,o[e]),c&&t.target!==t.currentTarget||a[e](t)}};o.start=r("start"),o.end=r("end"),o.move=r("move"),this.obj.addEventListener("touchstart",o.start,!1),this.obj.addEventListener("touchend",o.end,!1),this.obj.addEventListener("touchmove",o.move,!1)}return Object(m["a"])(e,[{key:"start",value:function(e){var t=this;t.moved=!1,t.leaved=!1,t.longTouched=!1,t.firstTouchPosition=t.getMultiCenter(e.changedTouches),t.firstTouchTime=e.timeStamp,t.time=setTimeout(function(){t.leaved||t.moved||("longtap"===t.touchType&&t.callBack(e,t.binding.value),t.longTouched=!0)}.bind(t),1e3)}},{key:"end",value:function(e){var t=this,n=t.getMultiCenter(e.changedTouches),i=n.x,a=n.y,o=i-t.firstTouchPosition.x,r=a-t.firstTouchPosition.y,c=Math.sqrt(o*o+r*r),s=e.timeStamp-t.firstTouchTime;clearTimeout(t.time);var u=this.getAngle(o,r);c>18&&s<300?("swipe"===t.touchType&&t.callBack(e,t.binding.value),u>=60&&u<=120&&"swipedown"===t.touchType&&t.callBack(e,t.binding.value),u<=-60&&u>=-120&&"swipeup"===t.touchType&&t.callBack(e,t.binding.value),u<=20&&u>=-20&&"swipeleft"===t.touchType&&t.callBack(e,t.binding.value),(u<=-160&&u>-180||u>=160&&u<=180)&&"swiperight"===t.touchType&&t.callBack(e,t.binding.value)):t.longTouched||t.moved||("tap"===t.touchType&&t.callBack(e,t.binding.value),t.leaved=!0)}},{key:"move",value:function(){this.moved=!0}},{key:"getMultiCenter",value:function(e){for(var t=0,n=0,i=e.length,a=0;a<i;a++)t+=e[a].pageX,n+=e[a].pageY;return{x:Math.round(t/i),y:Math.round(n/i)}}},{key:"getAngle",value:function(e,t){return"number"!==typeof e||"number"!==typeof t?45:180*Math.atan2(t,e)/Math.PI}}]),e}();i["a"].directive("tap",{bind:function(e,t){new f(e,t,"tap")}}),i["a"].directive("swipe",{bind:function(e,t){new f(e,t,"swipe")}}),i["a"].directive("swipeleft",{bind:function(e,t){new f(e,t,"swipeleft")}}),i["a"].directive("swiperight",{bind:function(e,t){new f(e,t,"swiperight")}}),i["a"].directive("swipedown",{bind:function(e,t){new f(e,t,"swipedown")}}),i["a"].directive("swipeup",{bind:function(e,t){new f(e,t,"swipeup")}}),i["a"].directive("longtap",{bind:function(e,t){new f(e,t,"longtap")}});n("be35");var v=n("bc3a"),b=n.n(v),y=(n("3b2b"),n("a481"),function(e,t){if("string"==typeof e)return e;if(t||(t="yyyy-MM-dd hh:mm:ss"),!e||null==e)return null;var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var i in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),n)new RegExp("("+i+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?n[i]:("00"+n[i]).substr((""+n[i]).length)));return t}),j=function(e){return new Date(e)},w=function(e){return new Date(e).getTime()},q=function(e,t,n){return n||(n=t),t||n||(n=t=20),e+="?param=w".concat(t,"h").concat(n),e},T={formatDate:y,timeDate:j,timeDates:w,genImgUrl:q};b.a.interceptors.request.use((function(e){return e}),(function(e){return Promise.error(e)})),b.a.interceptors.response.use((function(e){return 200===e.status?e.data:Promise.reject(e)}));var k={yiyan:"https://v1.hitokoto.cn/"},O=k,I={yiyan:"".concat(O.yiyan)};i["a"].prototype.$utils=T,i["a"].prototype.$axios=void 0,i["a"].prototype.$api=I;var E=n("a7fe"),x=n.n(E),_=!1,M="",S="Song-QiEn",P="https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/kavaer/1.3o4ilcabcrq0.png",C="https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/kavaer/4.ip7pncglxio.png",A=[{class:"fa fa-github",title:"github",url:"https://github.com/qianhuiya"},{class:"iconfont icon-gitee-fill-round",title:"gitee",url:"https://gitee.com/qianhuiya"}],R="https://qianhuiya.gitee.io",G=["https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/1.61h6mp78b6s0.jpg","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/2.17eqkieq1ta8.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/3.4zsg5h2crz80.jpg","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/4.200h324qf96o.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/5.1drrjtv2h3vk.jpg","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/6.6sxkddz62nk0.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/7.5v6bmspf4uk0.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/8.2jgr0sh2af40.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/9.3i0jq3com8s0.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/10.5v17b4055rk0.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/blog/11.58p8srttppo0.png"],L=["https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/1.21ixb239z7ls.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/2.66e4gp8iifk0.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/3.2vhw6a3rxay0.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/4.5sqhr7w4xpo0.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/5.436ra117dhq0.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/6.1xj61dnmfaw0.jpg","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/7.45kz4m2uq8c.jpg","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/8.1z5y85zosdog.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/9.6arkg2uva8k0.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/10.3ap23gslarc0.png","https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/phone/11.3d7qronk8vc0.jpg"],B=["不忘初心,方得始终.","幸亏时光不会倒流，否则万物一定会朝旧岁月里疾步奔跑.","最最好的,和最最痛苦的,是一样的","让留下的人，笑着活下去","我也是二十岁的大人了~","人生在世必遇患难,如同火星飞腾.","有耳可听的,就应当听.","一言，一思，一走，一生.","纵观世界无非就两件事最火：断章取义和美名其曰."],D="",N=!0,z="https://cdn.jsdelivr.net/gh/qianhuiya/picgo@main/avaer/4.49p04o5mdw20.png",U=[{sortId:1,title:"MyFavorite"},{sortId:2,title:"AboutMe"}],$="钱辉",H=[{pageId:1,sortId:1,title:"百度翻译",subtitle:"百度翻译",url:"https://fanyi.baidu.com/translate?aldtype=16047&query=&keyfrom=baidu&smartresult=dict&lang=auto2zh#auto/zh/",icon:"https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/4.6sv3r4fabeg0.png"},{pageId:2,sortId:1,title:"花瓣网",subtitle:"图片素材网",url:"https://huaban.com/",icon:"https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/5.7642at7umy80.png"},{pageId:3,sortId:1,title:"CSDN",subtitle:"开发者社区",url:"https://www.csdn.net/",icon:"https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/6.4fyhi367hb00.png"},{pageId:4,sortId:1,title:"Github",subtitle:"Github",url:"https://github.com/",icon:"https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/2.2a793w51mv6s.png"},{pageId:5,sortId:1,title:"Gitee",subtitle:"Github",url:"https://gitee.com/",icon:"https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/3.1fup2jujy7eo.png"},{pageId:6,sortId:1,title:"Element-plus",subtitle:"Element-plus",url:"https://element-plus.gitee.io/#/zh-CN",icon:"https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/8.432iuu0a69m0.png"},{pageId:7,sortId:1,title:"hexo-theme-melody",subtitle:"hexo-theme-melody",url:"https://molunerfinn.com/hexo-theme-melody-doc/zh-Hans/quick-start.html",icon:"https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/9.6gdf382bbao0.png"},{pageId:1,sortId:2,title:"Github",subtitle:"".concat($,"    Github"),url:"https://github.com/qianhuiya",icon:"https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/2.2a793w51mv6s.png"},{pageId:2,sortId:2,title:"Gitee",subtitle:"".concat($,"   Gitee"),url:"https://gitee.com/qianhuiya/",icon:"https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/3.1fup2jujy7eo.png"},{pageId:3,sortId:2,title:"Coding",subtitle:"".concat($,"   Coding"),url:"https://qianhuiya.coding.net/public/",icon:"https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/1.7d0l4t590s00.png"},{pageId:4,sortId:2,title:"PicQh图床",subtitle:"".concat($,"   PicQh图床"),url:"https://coding-pages-bucket-3495601-8075853-6783-399747-1303851664.cos-website.ap-beijing.myqcloud.com",icon:"https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/kavaer/1.3o4ilcabcrq0.png"},{pageId:5,sortId:2,title:"一言",subtitle:"".concat($,"   精彩句子~一言"),url:"https://coding-pages-bucket-3495601-8075853-6855-401178-1303851664.cos-website.ap-beijing.myqcloud.com",icon:"https://cdn.jsdelivr.net/gh/qianhuiya/pics@main/icon/10.3mcwppjkwvq0.png"}],F={SERVE:_,HOST:M,BLOG_URL:R,BLOG_NAME:S,BASICS_LOGO:P,LOGO_CENTER:C,LOGO_TOP_RIGHT:A,SORT_DATA:U,PAGES_DATA:H,BASICS_ICONFONT:z,SLOGAN:B,FOOTER_INFO:N,BACKGROUND_IMG_URL:G,BACKGROUND_IMG_URL_PHONE:L,RECORD_NUMBER:D,AUTHOR:$};i["a"].prototype.$config=F,i["a"].use(x.a,b.a),b.a.defaults.baseURL=F.HOST,i["a"].config.productionTip=!1,new i["a"]({router:l,render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var i=n("e332"),a=n.n(i);a.a},be35:function(e,t,n){},e332:function(e,t,n){}});