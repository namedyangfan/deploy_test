(function(e){function t(t){for(var s,i,l=t[0],o=t[1],c=t[2],d=0,f=[];d<l.length;d++)i=l[d],n[i]&&f.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,l=1;l<a.length;l++){var o=a[l];0!==n[o]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={app:0},r=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/bungalow_challenge/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("1356"),n=a.n(s);n.a},1356:function(e,t,a){},"3a45":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return a(t)}function r(e){var t=s[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(s)},n.resolve=r,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=a("bb71");a("da64");s["a"].use(n["a"],{iconfont:"md"});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("Filters",{attrs:{selectedCity:e.selectedCity},on:{changeSelectedCity:e.changeSelectedCity}}),e.isLoading?[a("v-container",{attrs:{"fill-height":""}},[a("div",{staticClass:"text-xs-center center-loading"},[a("v-progress-circular",{attrs:{size:100,color:"primary",indeterminate:""}})],1)])]:[a("v-content",{attrs:{"pt-60":""}},[a("Card",{attrs:{bungalows:e.bungalows}})],1)]],2)},i=[],l=a("bc3a"),o=a.n(l),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"grid-list-xl":""}},[a("v-layout",{attrs:{wrap:""}},e._l(e.bungalows,function(t){return a("v-flex",{key:t.id,attrs:{xs12:"",sm6:"",lg4:"",xl3:"","pa-1":""}},[a("v-hover",{scopedSlots:e._u([{key:"default",fn:function(s){var n=s.hover;return a("v-card",{attrs:{flat:"",tile:"",height:"100%"}},[a("v-carousel",{attrs:{"hide-delimiters":"",cycle:!1,"hide-controls":!n,height:250}},e._l(t.images,function(t,s){return a("v-carousel-item",{key:s,attrs:{src:t.sm_url,srcset:e.getSrcSet(t),sizes:e.getSizes(),lazy:!0}})}),1),a("CardDescription",{attrs:{bungalowHeadline:t.headline,headline:t.headline,available_room_count:t.available_room_count,total_room_count:t.total_room_count,room_prices:t.room_prices,earliest_available_date:t.earliest_available_date}})],1)}}],null,!0)})],1)}),1)],1)},u=[],d=(a("c5f6"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-list-tile-sub-title",{staticClass:"card-title"},[e._v(" "+e._s(e.headline)+" ")])],1),a("v-layout",{attrs:{row:""}},[e.isFlatRate?[a("span",{staticClass:"card-title price-avalibility-txt"},[e._v(" \n        $"+e._s(e.room_prices[0])+" •  \n      ")])]:[a("span",{staticClass:"card-title price-avalibility-txt"},[e._v(" \n        $"+e._s(e.room_prices[0])+"+ •\n      ")])],e.isAvalibleToday?[a("span",{staticClass:"card-title pl-1 price-avalibility-txt"},[e._v(" avaliable today ")])]:e.isAvalibleInFiveDays?[a("span",{staticClass:"card-title pl-1 price-avalibility-txt"},[e._v(" avaliable in 5 days ")])]:e.isAvalibleInOneMonth?[a("span",{staticClass:"card-title pl-1 price-avalibility-txt"},[e._v(" avaliable in 1 month ")])]:e._e()],2),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{shrink:"","pl-0":"","pb-0":""}},[e._l(e.available_room_count,function(t){return[a("i",{staticClass:"material-icons room-icon teal--text font-weight-medium"},[e._v("person_outline")])]}),e._l(e.occupiedRoom,function(t){return[a("i",{staticClass:"material-icons room-icon grey--text text--lighten-1"},[e._v("person")])]})],2),a("v-flex",{attrs:{grow:"","pl-0":"","pb-0":""}},[a("v-list-tile-sub-title",{staticClass:"avaliable-room-txt"},[e._v(" \n        "+e._s(e.available_room_count)+" room avaliable\n      ")])],1)],1)],1)}),f=[],b=a("c1df"),j=a.n(b),v={name:"CardDescription",data:function(){return{occupiedRoom:this.total_room_count-this.available_room_count,currentDate:j()(),earliestAvailableDate:j()(this.earliest_available_date),isFlatRate:Math.max.apply(null,this.room_prices)==Math.min.apply(null,this.room_prices),isAvalibleToday:j()(this.earliest_available_date).diff(this.currentDate,"days")<2,isAvalibleInFiveDays:j()(this.earliest_available_date).diff(this.currentDate,"days")<5,isAvalibleInOneMonth:j()(this.earliest_available_date).diff(this.currentDate,"months")<2}},props:{headline:String,available_room_count:Number,total_room_count:Number,room_prices:Array,earliest_available_date:String}},p=v,h=(a("7bfe"),a("2877")),m=a("6544"),g=a.n(m),_=a("a523"),y=a("0e8f"),C=a("a722"),w=a("5d23"),x=Object(h["a"])(p,d,f,!1,null,"e895e946",null),k=x.exports;g()(x,{VContainer:_["a"],VFlex:y["a"],VLayout:C["a"],VListTileSubTitle:w["b"]});var z={name:"Card",components:{CardDescription:k},props:{bungalows:Array,cardHeight:Number},data:function(){return{hover:!1,height:null}},methods:{getSrcSet:function(e){var t="".concat(e.lg_url," 1500w, ").concat(e.md_url," 960w, ").concat(e.sm_url," 560w");return t},getSizes:function(){var e="(min-width: 1264px) 30vw, (min-width: 600px) 45vw, 98vw";return e},getCarouselHeight:function(){var e=document.getElementsByClassName("v-image__image--cover");this.carouselHeight=e[0].clientHeight+"px"}}},S=z,O=(a("b507"),a("b0af")),V=a("5e66"),A=a("3e35"),L=a("ce87"),D=Object(h["a"])(S,c,u,!1,null,"33725396",null),F=D.exports;g()(D,{VCard:O["a"],VCarousel:V["a"],VCarouselItem:A["a"],VContainer:_["a"],VFlex:y["a"],VHover:L["a"],VLayout:C["a"]});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-toolbar",{attrs:{light:!0,fixed:!0,app:"",flat:""}},[a("v-container",{attrs:{"mx-auto":"","py-0":""}},[a("v-layout",[a("v-flex",{attrs:{xs12:"",sm6:"","d-flex":""}},[a("v-select",{attrs:{label:e.selectedCityStyled,items:e.avaliableCitiesList,"item-value":"initialv",solo:"","prepend-inner-icon":"search"},on:{change:e.changeSelectedCity}})],1)],1)],1)],1)},T=[],$=(a("a481"),a("2ef0")),E=a.n($),P={name:"Filters",props:{selectedCity:String},data:function(){return{avaliableCitiesList:[],avaliableCities:null,errors:[]}},created:function(){this.getAvaliableCities()},methods:{changeSelectedCity:function(e){var t=e.replace(/\s+/g,"-").toLowerCase();this.$emit("changeSelectedCity",t)},getAvaliableCities:function(){var e=this,t="".concat("https://fieldstone.bungalow.com/api/v1/","markets/?format=json");o.a.get(t).then(function(t){e.avaliableCities=t.data.results,e.avaliableCitiesList=e.avaliableCities.map(function(e){return e.internal_name})}).catch(function(t){e.errors.push(t)})}},computed:{selectedCityStyled:function(){return E.a.startCase(E.a.toLower(this.selectedCity))}}},H=P,N=a("b56d"),I=a("71d9"),B=Object(h["a"])(H,M,T,!1,null,null,null),R=B.exports;g()(B,{VContainer:_["a"],VFlex:y["a"],VLayout:C["a"],VSelect:N["a"],VToolbar:I["a"]});var q={name:"App",components:{Card:F,Filters:R},data:function(){return{bungalows:[],errors:[],selectedCity:"seattle",isLoading:!0}},methods:{getBungalows:function(){var e=this,t="".concat("https://fieldstone.bungalow.com/api/v1/","listings/properties/?market__slug=").concat(this.selectedCity);this.isLoading=!0,o.a.get(t,{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(t){e.bungalows=t.data.results,e.isLoading=!1,console.log(e.bungalows)}).catch(function(t){e.errors.push(t),e.isLoading=!1,console.log(e.errors)})},changeSelectedCity:function(e){this.selectedCity=e,this.getBungalows()}},created:function(){this.getBungalows()}},G=q,J=(a("034f"),a("7496")),U=a("549c"),K=a("490a"),Q=Object(h["a"])(G,r,i,!1,null,null,null),W=Q.exports;g()(Q,{VApp:J["a"],VContainer:_["a"],VContent:U["a"],VProgressCircular:K["a"]}),s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(W)}}).$mount("#app")},"7bfe":function(e,t,a){"use strict";var s=a("3a45"),n=a.n(s);n.a},b507:function(e,t,a){"use strict";var s=a("de92"),n=a.n(s);n.a},de92:function(e,t,a){}});
//# sourceMappingURL=app.065eb7fc.js.map