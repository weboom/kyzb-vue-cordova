webpackJsonp([4],{QvQp:function(t,s,a){"use strict";var i={props:{value:{type:Boolean,default:!1}},data:function(){return{sku1Val:"不限",sku2Val:"不限",visible:this.value,sku1List:[{name:"不限"},{name:"移动应用"},{name:"H5应用"},{name:"微信应用"},{name:"小程序应用"},{name:"WEB应用"}],sku2List:[{name:"不限"},{name:"项目"},{name:"悬赏"}]}},watch:{value:function(t){this.visible=t},visible:function(t){this.$emit("input",t)}},methods:{handleReset:function(){this.sku1Val=this.sku1List[0].name,this.sku2Val=this.sku2List[0].name},handleConfirm:function(){this.$emit("confirm",{appType:this.sku1Val,projectType:this.sku2Val})}}},e={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("van-popup",{staticClass:"sku-popup",attrs:{position:"right"},model:{value:t.visible,callback:function(s){t.visible=s},expression:"visible"}},[a("div",{staticClass:"dt"},[t._v("应用类型")]),t._v(" "),a("ul",{staticClass:"dd c-list"},t._l(t.sku1List,function(s,i){return a("li",{key:i,staticClass:"c-item",class:{"is-active":s.name===t.sku1Val},on:{click:function(a){t.sku1Val=s.name}}},[a("span",[t._v(t._s(s.name))])])}),0),t._v(" "),a("div",{staticClass:"dt"},[t._v("项目类型")]),t._v(" "),a("ul",{staticClass:"dd c-list"},t._l(t.sku2List,function(s,i){return a("li",{key:i,staticClass:"c-item",class:{"is-active":s.name===t.sku2Val},on:{click:function(a){t.sku2Val=s.name}}},[a("span",[t._v(t._s(s.name))])])}),0),t._v(" "),a("div",{staticClass:"btns-wrapper"},[a("van-button",{staticClass:"btn",attrs:{type:"primary",size:"small"},on:{click:t.handleReset}},[t._v("重置")]),t._v(" "),a("van-button",{staticClass:"btn",attrs:{type:"primary",size:"small"},on:{click:t.handleConfirm}},[t._v("确认")])],1)])},staticRenderFns:[]};var n=a("C7Lr")(i,e,!1,function(t){a("qDvX")},"data-v-155cf176",null);s.a=n.exports},XNwl:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("lC5x"),e=a.n(i),n=a("ZLEe"),r=a.n(n),l=a("J0Oq"),c=a.n(l),o=a("aTwi"),u=a("QvQp"),v=a("sq9e"),d={components:{SkuPopup:u.a,SearchEntry:v.a},data:function(){return{list:[],listLoading:!1,skuVisible:!1,pageIndex:1,pageSize:10,total:0,hasMore:!0,queryParams:{projectType:"不限",appType:"不限"}}},mounted:function(){this.getDataList()},methods:{loadMore:function(){this.listLoading||this.hasMore&&(this.pageIndex++,this.getDataList())},switchItem:function(t){this.$router.push("/project/"+t)},getDataList:function(){var t=this;return c()(e.a.mark(function s(){var a,i;return e.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return t.listLoading,t.listLoading=!0,a={pageSize:t.pageSize,pageIndex:t.pageIndex,appType:t.queryParams.appType,projectType:t.queryParams.projectType},r()(a).forEach(function(t){"不限"===a[t]&&delete a[t]}),s.next=6,o.a.getUserCreateList(a);case 6:if(i=s.sent,t.listLoading=!1,i){s.next=10;break}return s.abrupt("return");case 10:if(i.success){s.next=12;break}return s.abrupt("return",t.$toast(i.errMsg));case 12:console.log(i),t.list=t.list.concat(i.data.list),t.total=i.data.pageInfo.total,console.log(t.total),t.hasMore=t.list.length<t.total;case 17:case"end":return s.stop()}},s,t)}))()},onConfirmSku:function(t){this.pageIndex=1,this.queryParams=t,this.getDataList()}}},p={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"view"},[a("van-nav-bar",{attrs:{title:"我的发布","left-arrow":"","left-text":"返回"},on:{"click-left":function(s){return t.$router.back()}}}),t._v(" "),a("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.loadMore,expression:"loadMore"}],attrs:{"infinite-scroll-disabled":t.listLoading,"infinite-scroll-distance":10}},[a("ul",{staticClass:"d-list"},t._l(t.list,function(s,i){return a("li",{key:i,staticClass:"d-item",on:{click:function(a){return t.switchItem(s.id)}}},[a("div",{staticClass:"d-item__hd"},[a("img",{staticClass:"d-item__logo",attrs:{src:"https://zb.oschina.net/file/get?path=static/project-reward/cover/youxikaifa_2.png"}}),t._v(" "),a("ul",[a("li",{staticClass:"title"},[t._v(t._s(s.title))]),t._v(" "),t._m(0,!0)])]),t._v(" "),a("div",{staticClass:"d-item__bd"},[a("div",{staticClass:"column"},[a("span",{staticClass:"label"},[t._v("需求预算：")]),t._v(" "),a("span",[t._v("￥"+t._s(s.reward/100))])]),t._v(" "),a("div",{staticClass:"column"},[a("span",{staticClass:"label"},[t._v("技能要求：")]),t._v(" "),a("span",[t._v(t._s(s.requires||"无任何要求"))])])]),t._v(" "),a("div",{staticClass:"d-item__ft"},[a("div",{staticClass:"ui-flex"},[a("img",{staticClass:"d-item__avatar",attrs:{src:s.userInfo.avatar}}),t._v(" "),a("div",{staticClass:"d-item__name"},[t._v(t._s(s.userInfo.mobile))])]),t._v(" "),a("div",{staticClass:"ui-flex"},[a("van-icon",{staticClass:"arrow-right",attrs:{name:"friends"}}),t._v(" "),a("span",[t._v(t._s(s.enrollList.length)+"人")]),t._v(" "),a("van-icon",{staticClass:"arrow-right",attrs:{name:"arrow"}})],1)])])}),0),t._v(" "),t.listLoading?a("div",{staticClass:"loading"},[t._v("加载中...")]):t._e(),t._v(" "),t.listLoading||t.hasMore?t._e():a("div",{staticClass:"loading"},[t._v("-我是有底线的-")])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("li",{staticClass:"tags"},[s("span",{staticClass:"tag"},[this._v("程序开发")])])}]};var _=a("C7Lr")(d,p,!1,function(t){a("aIWc")},"data-v-3d9cd5e0",null);s.default=_.exports},aIWc:function(t,s){},qDvX:function(t,s){},sq9e:function(t,s,a){"use strict";var i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"search-bar"},[s("div",{staticClass:"form"},[s("div",{staticClass:"bg"},[s("van-icon",{staticClass:"icon-search",attrs:{name:"search"}}),this._v(" "),s("span",{staticClass:"input"},[this._v("搜索商品名称")])],1),this._v(" "),this._t("default")],2)])},staticRenderFns:[]};var e=a("C7Lr")({},i,!1,function(t){a("wzRV")},"data-v-1720caba",null);s.a=e.exports},wzRV:function(t,s){}});
//# sourceMappingURL=4.34454d4ffae8fafbf135.js.map