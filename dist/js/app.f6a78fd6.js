(function(t){function e(e){for(var i,l,r=e[0],o=e[1],c=e[2],m=0,d=[];m<r.length;m++)l=r[m],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],i=!0,r=1;r<n.length;r++){var o=n[r];0!==a[o]&&(i=!1)}i&&(s.splice(e--,1),t=l(l.s=n[0]))}return t}var i={},a={app:0},s=[];function l(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=i,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(n,i,function(e){return t[e]}.bind(null,i));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0edf":function(t,e,n){"use strict";n("7fcb")},4949:function(t,e,n){"use strict";n("730e")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("div",{attrs:{id:"app"}},[n("Teter")],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game layout-v"},[n("Result"),n("Info"),n("Actions"),n("FallingItems"),n("TeeterTotter")],1)},r=[],o=n("5530"),c=n("2f62"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{style:t.seasawStyle,attrs:{id:"seasaw"}},[t._l(t.rightItems,(function(t){return n("Item",{key:t.id,attrs:{item:t,rightItem:!0}})})),t._l(t.leftItems,(function(t){return n("Item",{key:t.id,attrs:{item:t}})}))],2),t._m(0)])},m=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pivot"},[n("span",{staticClass:"angle"})])}],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:"layout-h layout-center-center item "+t.shape,attrs:{id:"itemId"}},[n("span",{staticClass:"weight"},[t._v(" "+t._s(t.item.weight+"kg")+" ")])])},f=[],h=(n("99af"),["rectangle","triangle","circle"]),g={SET_GAME_STATUS:"setGameStatus",SET_DROP_SPEED:"setDropSpeed",SET_BENDING_SPEED:"setBendingSpeed",TEETER_WIDTH:"teeterWidth",REMOVE_FALLING_ITEM:"removeFallingItem",MOVE_ITEM:"moveItem",ADD_ITEM:"addItem",RESET:"reset"},p={props:{item:{type:Object,required:!0},rightItem:{type:Boolean,default:!1},onBoard:{type:Boolean,default:!0}},computed:Object(o["a"])(Object(o["a"])({},Object(c["d"])([g.TEETER_WIDTH])),{},{shape:function(){return h[this.item.shape]},updateTeeterWidth:function(){var t=document.getElementById("itemId");if(t){var e=Math.round(t.getBoundingClientRect().left/100);return e}return!0}}),mounted:function(){this.setItemColor(),this.updateItemPosition(this.item.left)},watch:{"item.left":function(t){this.updateItemPosition(t)},updateTeeterWidth:function(t){console.log("newVal",t)}},methods:{updateItemPosition:function(t){var e=this.$el.getBoundingClientRect(),n=e.width,i=this.rightItem?50:0;this.$el.style.left=this.rightItem&&t>25?"calc(".concat(i+t,"% - ").concat(n,"px)"):"".concat(i+t,"%")},setItemColor:function(){var t=this.item.color;"triangle"===this.shape?this.$el.style.borderBottomColor=t:this.$el.style.backgroundColor=t,this.onBoard&&(this.$el.style.transform+="translateY(-100%)")}}},I=p,v=(n("4949"),n("2877")),b=Object(v["a"])(I,d,f,!1,null,"364c7073",null),E=b.exports,_={data:function(){return{sesawEl:null,sesawElWidth:0}},mounted:function(){this.sesawEl=document.getElementById("seasaw"),this.sesawEl?(this.sesawElWidth=Math.floor(this.sesawEl.getBoundingClientRect().width/100),this.updateTeeterWidth(this.sesawElWidth)):console.log("document Element is not loaded yet")},components:{Item:E},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["e"])(["rightItems","leftItems"])),Object(c["c"])(["sesawAngle"])),{},{seasawStyle:function(){return{transform:"rotate(".concat(this.sesawAngle,"deg)"),transitionDuration:"".concat(2500/(Math.abs(this.sesawAngle)+1),"ms")}}}),methods:Object(o["a"])(Object(o["a"])({},Object(c["d"])([g.SET_GAME_STATUS,g.TEETER_WIDTH])),{},{updateTeeterWidth:function(t){this.teeterWidth(t)}}),watch:{sesawAngle:function(t){Math.abs(t)>30&&this.setGameStatus("end")}}},w=_,O=(n("7e77"),Object(v["a"])(w,u,m,!1,null,"2bc7d58a",null)),S=O.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"falling-wrapper"}},t._l(t.fallingItems,(function(t){return n("Item",{key:t.id,staticClass:"falling-item",attrs:{id:"item-"+t.id,item:t,onBoard:!1}})})),1)},T=[],j={components:{Item:E},data:function(){return{sesaw:null,fallingItemTop:0,fallingIntervalId:null,topLimit:0}},mounted:function(){window.addEventListener("keydown",this.moveItem),this.sesaw=document.getElementById("seasaw"),this.startFalling(),this.calcBottomLimit()},beforeDestroy:function(){window.removeEventListener("keydown",this.moveItem),clearInterval(this.fallingIntervalId)},watch:{status:function(t){"play"===t?(window.addEventListener("keydown",this.moveItem),this.startFalling()):(clearInterval(this.fallingIntervalId),window.removeEventListener("keydown",this.moveItem))}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["e"])(["fallingItems","status","dropSpeed","bendingSpeed"])),Object(c["c"])(["sesawAngle"])),{},{fallingItem:function(){return this.fallingItems[0]},fallingItemEl:function(){return this.fallingItem?document.getElementById("item-"+this.fallingItems[0].id):null},fallingWrapperEl:function(){return document.getElementById("falling-wrapper")},sesawEl:function(){return document.getElementById("seasaw")}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(c["b"])(["hitTheSeasaw"])),Object(c["d"])({move:g.MOVE_ITEM})),Object(c["d"])([g.SET_DROP_SPEED,g.SET_BENDING_SPEED])),{},{nextItem:function(){var t=this.fallingItemEl.getBoundingClientRect(),e=this.fallingWrapperEl.getBoundingClientRect(),n=100*(t.left-e.left-Math.tan(this.sesawAngle*Math.PI/180)*t.width)/e.width;this.fallingItemTop=0,this.setDropSpeed(this.dropSpeed+1),this.setBendingSpeed(this.bendingSpeed+1),this.hitTheSeasaw(n),this.startFalling(),this.calcBottomLimit()},calcBottomLimit:function(){var t=this.fallingItemEl.getBoundingClientRect(),e=this.fallingWrapperEl.getBoundingClientRect(),n=e.width/2-(t.left-e.left),i=Math.tan(this.sesawAngle*Math.PI/180)*n;this.topLimit=e.height-i-t.height},startFalling:function(){var t=this;this.fallingIntervalId&&clearInterval(this.fallingIntervalId),this.fallingIntervalId=setInterval((function(){t.fallingItemTop>t.topLimit?(clearInterval(t.fallingIntervalId),t.fallingIntervalId=null,t.nextItem()):(t.fallingItemTop+=1,t.fallingItemEl.style.top="".concat(t.fallingItemTop,"px"))}),20/this.dropSpeed)},moveItem:function(t){if(39===t.keyCode||37===t.keyCode){var e=this.fallingItem.left,n=this.fallingWrapperEl.getBoundingClientRect().width,i=this.fallingItemEl.getBoundingClientRect().width,a=i/n*100;if(!(39===t.keyCode&&e+a>49)&&!(37===t.keyCode&&e<1)){this.calcBottomLimit();var s=39===t.keyCode?1:-1;this.move(s)}}}})},C=j,M=(n("a4f8"),Object(v["a"])(C,y,T,!1,null,"648d6594",null)),B=M.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("button",{staticClass:"btn btn-primary",attrs:{disabled:"end"===t.status},on:{click:t.toggleGameStatus}},[n("span",[t._v(t._s(t.buttonLabel))])])])},A=[],D={computed:Object(o["a"])(Object(o["a"])({},Object(c["e"])(["status"])),{},{buttonLabel:function(){return"pause"===this.status?"Continue":"Pause"}}),methods:Object(o["a"])(Object(o["a"])({},Object(c["d"])([g.SET_GAME_STATUS])),{},{toggleGameStatus:function(){this.setGameStatus("pause"===this.status?"play":"pause")}})},k=D,R=Object(v["a"])(k,x,A,!1,null,"66ec5b42",null),W=R.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",[t._v("Total Weight: "+t._s(t.leftTotalSum))])]),n("div",{staticClass:"col"},[n("div",[t._v("Total Weight: "+t._s(t.rightTotalSum))])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",[t._v("Momentum: "+t._s(t.leftItemMomentum))])]),n("div",{staticClass:"col"},[n("div",[t._v("Momentum: "+t._s(t.rightItemMomentum))])])])])},P=[],L={computed:Object(o["a"])({},Object(c["c"])(["leftTotalSum","rightTotalSum","leftItemMomentum","rightItemMomentum"]))},$=L,F=Object(v["a"])($,G,P,!1,null,"555aad76",null),H=F.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{class:{six:"end"===t.status},attrs:{id:"modal-container"}},[n("div",{staticClass:"modal-background"},[n("div",{staticClass:"modal"},[n("div",{staticClass:"layout-v layout-center"},[n("h3",[t._v(" Hope you enjoyed! ")]),n("button",{staticClass:"btn btn-primary",on:{click:t.resetGame}},[n("span",[t._v("Re-Start")])])])])])])])},V=[],U={computed:Object(o["a"])({},Object(c["e"])(["status"])),methods:Object(o["a"])({},Object(c["b"])(["resetGame"]))},J=U,q=Object(v["a"])(J,N,V,!1,null,null,null),Y=q.exports,Z={components:{TeeterTotter:S,FallingItems:B,Actions:W,Info:H,Result:Y},created:function(){this.startGame()},methods:Object(o["a"])({},Object(c["b"])(["startGame"]))},z=Z,K=(n("0edf"),Object(v["a"])(z,l,r,!1,null,"ca9ae402",null)),Q=K.exports,X=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar navbar-expand navbar-light bg-light"},[n("div",{staticClass:"container-fluid"},[n("ul",{staticClass:"navbar-nav me-auto mb-2 mb-lg-0"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link active",attrs:{"aria-current":"page",href:"#"}},[t._v("Huseyin OZDOGAN")])])])])])}],et={},nt=et,it=Object(v["a"])(nt,X,tt,!1,null,"782691ad",null),at=it.exports,st={name:"App",components:{Teter:Q,Header:at}},lt=st,rt=(n("034f"),Object(v["a"])(lt,a,s,!1,null,null,null)),ot=rt.exports;n("ac1f"),n("5319"),n("d3b7"),n("25f0");function ct(t,e){return t+Math.round(Math.random()*e)}function ut(){return"#xxxxxx".replace(/x/g,(function(){return(16*Math.random()|0).toString(16)}))}var mt={hitTheSeasaw:function(t,e){var n=t.state,i=t.commit,a=t.dispatch,s=n.fallingItems[0];i(g.ADD_ITEM,{item:Object(o["a"])(Object(o["a"])({},s),{},{left:e}),position:"left"}),i(g.REMOVE_FALLING_ITEM),a("createItem","right"),a("createItem","falling")},createItem:function(t){var e=t.state,n=t.commit,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"right",a="right"===i?[10,45]:[5,40],s=ct(1,10),l=ct(a[0],a[1]),r=ct(0,h.length-1),o=ut(),c=e.dropSpeed*s,u=e.fallingItems.length+e.leftItems.length+e.rightItems.length,m={id:u,weight:s,momentum:c,shape:r,left:l,color:o};n(g.ADD_ITEM,{item:m,position:i})},startGame:function(t){var e=t.dispatch;e("createItem","falling"),e("createItem","falling"),e("createItem","right")},resetGame:function(t){var e=t.dispatch,n=t.commit;n(g.RESET),e("createItem","falling"),e("createItem","falling"),e("createItem","right")}},dt=mt,ft={leftTotalSum:function(t){var e=t.leftItems;return e.reduce((function(t,e){return t+e.weight}),0)},leftItemMomentum:function(t){var e=t.leftItems;return e.reduce((function(t,e){return e.momentum}),0)},rightItemMomentum:function(t){var e=t.rightItems;return e.reduce((function(t,e){return e.momentum}),0)},rightTotalSum:function(t){var e=t.rightItems;return e.reduce((function(t,e){return t+e.weight}),0)},leftItemSum:function(t){var e=t.leftItems;return Math.floor(e.reduce((function(t,e){return t+e.weight*(50-e.left)}),0))},rightItemSum:function(t){var e=t.rightItems;return Math.floor(e.reduce((function(t,e){return t+e.weight*e.left}),0))},sesawAngle:function(t,e){var n=e.leftItemSum,i=e.rightItemSum;return(i-n)/30}},ht=ft,gt={moveItem:function(t,e){t.fallingItems[0].left+=e},addItem:function(t,e){var n=e.item,i=e.position;"falling"===i?t.fallingItems.push(n):"left"===i?t.leftItems.push(n):t.rightItems.push(n)},removeFallingItem:function(t){t.fallingItems.shift()},setGameStatus:function(t,e){t.status=e},setDropSpeed:function(t,e){t.dropSpeed=e},setBendingSpeed:function(t,e){t.bendingSpeed=e},teeterWidth:function(t,e){t.teeterWidth=e},reset:function(t){t.fallingItems=[],t.leftItems=[],t.rightItems=[],t.status="play",t.dropSpeed=1}},pt=gt,It={fallingItems:[],leftItems:[],rightItems:[],status:"",dropSpeed:1,bendingSpeed:1,teeterWidth:0},vt=It;i["a"].use(c["a"]);var bt=new c["a"].Store({actions:dt,getters:ht,mutations:pt,state:vt});n("6861");i["a"].config.productionTip=!1,new i["a"]({store:bt,render:function(t){return t(ot)}}).$mount("#app")},6861:function(t,e,n){},"730e":function(t,e,n){},"7b3f":function(t,e,n){},"7e77":function(t,e,n){"use strict";n("7b3f")},"7fcb":function(t,e,n){},"85ec":function(t,e,n){},a4f8:function(t,e,n){"use strict";n("c63b")},c63b:function(t,e,n){}});
//# sourceMappingURL=app.f6a78fd6.js.map