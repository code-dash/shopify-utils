(function(t){function e(e){for(var o,r,c=e[0],l=e[1],s=e[2],u=0,p=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&p.push(a[r][0]),a[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,c=1;c<n.length;c++){var l=n[c];0!==a[l]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{right:"",fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-content-copy")])],1),n("v-list-item-content",[n("v-list-item-title",{on:{click:function(e){return e.stopPropagation(),t.openDuplicateModal(e)}}},[t._v("Duplicate Selected")])],1)],1),n("v-list-item",{attrs:{link:""}},[n("v-list-item-action",[n("v-icon",[t._v("mdi-content-duplicate")])],1),n("v-list-item-content",[n("v-list-item-title",{on:{click:function(e){return e.stopPropagation(),t.openContentModal(e)}}},[t._v("Dynamic Content")])],1)],1)],1)],1),n("ContenForm",{attrs:{dialog:t.contentModal},on:{contentClose:t.contentClose}}),n("DuplicateForm",{attrs:{dialog:t.duplicateModal},on:{duplicateClose:t.duplicateClose}}),n("span",{on:{click:function(e){return e.stopPropagation(),t.openNavigation(e)}}},[n("v-icon",[t._v("mdi-arrow-left-bold-box")])],1)],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{"max-width":"290"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[t._v("Duplication options")])]),n("v-card-text",[n("v-checkbox",{staticClass:"mx-2",attrs:{label:"Variant Metafields (a lot slower)"},model:{value:t.variant_meta,callback:function(e){t.variant_meta=e},expression:"variant_meta"}}),n("v-checkbox",{staticClass:"mx-2",attrs:{label:"Metafields (slow)"},model:{value:t.meta,callback:function(e){t.meta=e},expression:"meta"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeModal}},[t._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.closeModal}},[t._v("Start")])],1)],1)],1)},c=[],l={data:function(){return{variant_meta:!1,meta:!1}},props:{dialog:{type:Boolean,default:!1}},methods:{closeModal:function(){this.$emit("duplicateClose")}}},s=l,d=n("2877"),u=n("6544"),p=n.n(u),v=n("8336"),f=n("b0af"),m=n("99d9"),h=n("ac7c"),b=n("169a"),x=n("2fa4"),g=Object(d["a"])(s,r,c,!1,null,null,null),C=g.exports;p()(g,{VBtn:v["a"],VCard:f["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VCheckbox:h["a"],VDialog:b["a"],VSpacer:x["a"]});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{fullscreen:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-toolbar",{attrs:{dark:"",color:"primary"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:t.closeModal}},[n("v-icon",[t._v("mdi-close")])],1),n("v-toolbar-title",[t._v("Dynamic Content")])],1),n("v-list",{attrs:{"three-line":"",subheader:""}},[n("v-container",{attrs:{fluid:""}},[n("v-subheader",[t._v("Conditions")]),n("v-radio-group",{attrs:{row:""},model:{value:t.conditionRadio,callback:function(e){t.conditionRadio=e},expression:"conditionRadio"}},[n("v-radio",{attrs:{label:"AND",value:"and"}}),n("v-radio",{attrs:{label:"OR",value:"or"}})],1)],1),t._l(t.conditionArrayElements,(function(e,o){return n("v-col",{key:o,staticClass:"d-flex",attrs:{cols:"12"}},[t.conditionRadio?n("v-select",{staticClass:"pa-2",attrs:{items:t.conditionTarget,label:"Choose Type"},on:{change:function(){return t.setConditionOperators(e)}},model:{value:e.conditionTargetSelected,callback:function(n){t.$set(e,"conditionTargetSelected",n)},expression:"item.conditionTargetSelected"}}):t._e(),e.conditionTargetSelected?n("v-select",{staticClass:"pa-2",attrs:{items:e.conditionOperators,label:"Choose Condition"},model:{value:e.conditionChecksSelected,callback:function(n){t.$set(e,"conditionChecksSelected",n)},expression:"item.conditionChecksSelected"}}):t._e(),e.conditionChecksSelected?n("v-text-field",{staticClass:"pa-2",attrs:{placeholder:"Enter your text here"},model:{value:e.conditionCheckText,callback:function(n){t.$set(e,"conditionCheckText",n)},expression:"item.conditionCheckText"}}):t._e(),e.conditionCheckText&&0===o?n("v-btn",{attrs:{fab:"","x-small":"",dark:"",color:"primary"},on:{click:t.addNewConditionRow}},[n("v-icon",[t._v("mdi-plus-circle-outline")])],1):t._e(),0!==o?n("v-btn",{attrs:{fab:"","x-small":"",dark:"",color:"error"},on:{click:function(){return t.removeRow(o)}}},[n("v-icon",[t._v("mdi-minus")])],1):t._e()],1)})),t.checkForText?n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{"x-large":"",color:"primary"}},[t._v("Start")])],1):t._e()],2),n("v-divider")],1)],1)},w=[],T=(n("4de4"),n("c975"),{data:function(){return{conditionRadio:"",conditionArrayElements:[{conditionTargetSelected:"",conditionChecksSelected:"",conditionCheckText:"",conditionOperators:[]}],conditionTarget:[{text:"Title",value:"title",access:["*"]},{text:"Content",value:"content",access:["*"]},{text:"Price",value:"price",access:["products","product"]},{text:"Tags",value:"tags",access:["products","product","article","articles"]}],conditionChecks:[{text:"Is equal to",target:["title","content","price"],value:"==="},{text:"Is not equal to",target:["title","content","price"],value:"!=="},{text:"Starts With",target:["title","content","price"],value:"^"},{text:"Ends With",target:["title","content","price"],value:"$"},{text:"Contains",target:["*"],value:"contains"},{text:"Does not Contains",target:["*"],value:"!contains"},{text:"Is Greater Then",target:["price"],value:">"},{text:"Is Less Then",target:["price"],value:"<"}]}},props:{dialog:{type:Boolean,default:!1}},computed:{checkForText:function(){return this.conditionArrayElements.filter((function(t){return""!=t.conditionCheckText})).length>0}},methods:{closeModal:function(){this.$emit("contentClose")},setConditionOperators:function(t){var e=this.conditionTarget.filter((function(e){return e.value===t.conditionTargetSelected})).pop()||[];t.conditionOperators=this.conditionChecks.filter((function(t){return t.target.indexOf(e.value)>-1||t.target.indexOf("*")>-1}))},addNewConditionRow:function(){this.conditionArrayElements.push({conditionTargetSelected:"",conditionChecksSelected:"",conditionCheckText:""})},removeRow:function(t){this.conditionArrayElements=this.conditionArrayElements.filter((function(e,n){return n!==t}))}}}),_=T,y=n("62ad"),S=n("a523"),V=n("ce7e"),M=n("132d"),O=n("8860"),E=n("67b6"),R=n("43a6"),A=n("b974"),D=n("e0c7"),j=n("8654"),I=n("71d9"),P=n("2a7f"),F=Object(d["a"])(_,k,w,!1,null,null,null),$=F.exports;p()(F,{VBtn:v["a"],VCard:f["a"],VCol:y["a"],VContainer:S["a"],VDialog:b["a"],VDivider:V["a"],VIcon:M["a"],VList:O["a"],VRadio:E["a"],VRadioGroup:R["a"],VSelect:A["a"],VSubheader:D["a"],VTextField:j["a"],VToolbar:I["a"],VToolbarTitle:P["a"]});n("d3b7");function L(){var t=this,e=window.top.document.querySelector('meta[name="csrf-token"'),n=null;e?this.csrfToken=e.getAttribute("content"):fetch("".concat(window.location.origin,"/admin/articles"),{method:"GET",credentials:"include",headers:{accept:"text/html, application/xhtml+xml, application/xml","x-shopify-web":"1"}}).then((function(t){if(t.ok)return t.text();var e=new Error("Error fetching CSRF token.");throw e.status="ERROR_FETCHING_CSRF_TOKEN",e})).then((function(o){var a=window.top.document.createElement("div");if(a.innerHTML=o,e=a.querySelector('meta[name="csrf-token"]'),e){t.csrfToken=e.getAttribute("content");var i=window.top.document.createElement("meta");i.setAttribute("name","csrf-token"),i.setAttribute("content",n),window.top.document.querySelector("head").appendChild(i),a.remove(),a=null}}))}var N=L,q={props:{source:String},components:{DuplicateForm:C,ContenForm:$},data:function(){return{drawer:!1,duplicateModal:!1,contentModal:!1}},methods:{openNavigation:function(){this.duplicateModal=!1,this.contentModal=!1,this.drawer=!0},openDuplicateModal:function(){this.duplicateModal=!0,this.drawer=!1},openContentModal:function(){this.contentModal=!0,this.drawer=!1},duplicateClose:function(){this.duplicateModal=!1},contentClose:function(){this.contentModal=!1},tokenSet:function(){N()}},created:function(){this.tokenSet()}},B=q,G=n("7496"),H=n("da13"),J=n("1800"),W=n("5d23"),K=n("f774"),z=Object(d["a"])(B,a,i,!1,null,null,null),Q=z.exports;p()(z,{VApp:G["a"],VIcon:M["a"],VList:O["a"],VListItem:H["a"],VListItemAction:J["a"],VListItemContent:W["a"],VListItemTitle:W["b"],VNavigationDrawer:K["a"]});var U=n("f309");o["a"].use(U["a"]);var X=new U["a"]({}),Y=(n("bf40"),n("fb98"),n("2f62"));o["a"].use(Y["a"]);var Z=new Y["a"].Store({modules:{}});o["a"].config.productionTip=!1,new o["a"]({vuetify:X,store:Z,render:function(t){return t(Q)}}).$mount("#app")},fb98:function(t,e,n){}});
//# sourceMappingURL=app.d0b083ad.js.map