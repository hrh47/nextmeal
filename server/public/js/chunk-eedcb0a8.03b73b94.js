(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-eedcb0a8"],{"13ad":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("form",{staticClass:"form p-3 rounded-sm shadow-sm mb-3",on:{submit:function(s){return s.stopPropagation(),s.preventDefault(),t.$emit("after-search",t.searchInput)}}},[e("div",{staticClass:"form-row align-items-center"},[t.hasOption?e("div",{staticClass:"form-group form-select-control col-sm-6 col-md my-1"},[e("select",{directives:[{name:"model",rawName:"v-model.trim",value:t.selectedOption,expression:"selectedOption",modifiers:{trim:!0}}],staticClass:"form-control",on:{input:function(s){return t.$emit("after-filter",s.target.value)},change:function(s){var e=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.selectedOption=s.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"",selected:""}},[t._t("filterOption")],2),t._l(t.options,(function(s){return e("option",{key:s,domProps:{value:s}},[t._v("\n          "+t._s(s)+"\n        ")])}))],2)]):t._e(),t.hasDate?e("CustomDatePicker",{staticClass:"col-sm-6 my-1 col-md pl-md-2 pr-md-0",attrs:{"last-date":t.getTomorrowDate,"has-label":!1},on:{"handle-date":function(s){return t.$emit("after-date-pick",s)}},model:{value:t.selectedDate,callback:function(s){t.selectedDate=s},expression:"selectedDate"}}):t._e(),t.hasSearch?e("div",{staticClass:"input-group col pl-1 my-1  input-search-group",class:{"pl-sm-2":!t.hasDate,"pl-sm-0":t.hasDate,"pl-md-2":t.hasDate}},[e("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchInput,expression:"searchInput",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{id:"searchInput",type:"text",placeholder:t.inputPlaceholder,required:""},domProps:{value:t.searchInput},on:{input:function(s){s.target.composing||(t.searchInput=s.target.value.trim())},blur:function(s){return t.$forceUpdate()}}}),t._m(0)]):t._e()],1)])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn",attrs:{id:"button-addon2",type:"submit"}},[e("i",{staticClass:"fas fa-search"})])])}],r=(e("c5f6"),e("af09")),i=e("c1df"),c=e.n(i),o={components:{CustomDatePicker:r["a"]},props:{hasOption:{type:Boolean,default:!0},hasSearch:{type:Boolean,default:!0},hasDate:{type:Boolean,default:!1},totalFileds:{type:Number,default:2},options:{type:Array,required:!0},inputPlaceholder:{type:String,default:"搜尋名稱"}},data:function(){return{searchInput:"",selectedOption:"",selectedDate:{dob:c()().format("YYYY-MM-DD")}}},computed:{getTomorrowDate:function(){return c()().add(1,"d")}}},l=o,u=(e("f7a5"),e("2877")),d=Object(u["a"])(l,a,n,!1,null,"cbda90d2",null);s["a"]=d.exports},"1b34":function(t,s,e){"use strict";var a=e("c606"),n=e.n(a);n.a},2279:function(t,s,e){"use strict";var a=e("7d10"),n=e.n(a);n.a},2976:function(t,s,e){},6135:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("section",{staticClass:"wrapper d-flex vh-100"},[e("AdminSideNavBar"),e("section",{staticClass:"users flex-fill"},[e("h1",{staticClass:"users-title"},[t._v("\n      用戶管理\n    ")]),e("hr",{staticClass:"users-divider"}),e("AdminFilterPanel",{attrs:{options:t.subscriptionStatus,"input-placeholder":"搜尋名稱"},on:{"after-search":t.handleAfterSearch,"after-filter":t.handleAfterFilter},scopedSlots:t._u([{key:"filterOption",fn:function(){return[t._v("\n        訂單狀態\n      ")]},proxy:!0}])}),e("AdminUsersTable",{attrs:{users:t.users}})],1)],1)},n=[],r=e("e9e5"),i=e("13ad"),c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"table-wrapper table-borderless table-hover rounded-sm "},[e("table",{staticClass:"table m-0"},[t._m(0),e("tbody",t._l(t.users,(function(s){return e("tr",{key:s.id,on:{click:function(e){return t.$router.push({name:"admin-user-edit",params:{user_id:s.id}})}}},[e("td",[t._v(t._s(s.name))]),e("td",[t._v(t._s(s.role))]),e("td",[e("span",{class:{isTrue:s.subscription_status,isFalse:!s.subscription_status},domProps:{innerHTML:t._f("getStatusIcon")(s.subscription_status)}})]),e("td",{staticClass:"comment"},[t._v("\n          "+t._s(t._f("getAmount")(s.sub_description))+"\n        ")]),e("td",[t._v("\n          "+t._s(t._f("getAmount")(s.order_num))+"\n        ")])])})),0)])])},o=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("tr",[e("th",{attrs:{scope:"col"}},[t._v("\n          名稱\n        ")]),e("th",{attrs:{scope:"col"}},[t._v("\n          用戶權限\n        ")]),e("th",{attrs:{scope:"col"}},[t._v("\n          訂閱狀態\n        ")]),e("th",{attrs:{scope:"col"}},[t._v("\n          訂閱方案\n        ")]),e("th",{attrs:{scope:"col"}},[t._v("\n          點餐量\n        ")])])])}],l=(e("c5f6"),{filters:{getStatusIcon:function(t){return t?'<i class="fas fa-check"></i>':'<i class="fas fa-times"></i>'},getAmount:function(t){return Number(t)?"".concat(t," 餐"):"-"}},props:{users:{type:Array,required:!0}}}),u=l,d=(e("1b34"),e("2877")),p=Object(d["a"])(u,c,o,!1,null,"1a2e78f7",null),f=p.exports,m={users:[{id:1,name:"user1",role:"Owner",subscription_status:!0,sub_description:"10",order_num:20},{id:2,name:"user2",role:"User",subscription_status:!0,sub_description:"20",order_num:20},{id:3,name:"user3",role:"User",subscription_status:!0,sub_description:"10",order_num:20},{id:4,name:"user4",role:"Owner",subscription_status:!1,sub_description:null,order_num:30},{id:5,name:"user5",role:"Owner",subscription_status:!0,sub_description:"20",order_num:20},{id:6,name:"user6",role:"Owner",subscription_status:!0,sub_description:"10",order_num:20}],subscription_status:["已訂閱","未訂閱"]},v={components:{AdminSideNavBar:r["a"],AdminFilterPanel:i["a"],AdminUsersTable:f},data:function(){return{users:[],subscriptionStatus:[],currentSearchInput:"",currentFilterOption:""}},created:function(){this.fetchUsers()},beforeRouteUpdate:function(){this.fetchUsers()},methods:{fetchUsers:function(t,s){this.users=m.users,this.subscriptionStatus=m.subscription_status||this.subscriptionStatus},handleAfterSearch:function(t){this.currentSearchInput=t,this.fetchUsers(this.currentSearchInput,this.currentFilterOption)},handleAfterFilter:function(t){this.currentFilterOption=t,this.fetchUsers(this.currentSearchInput,this.currentFilterOption)}}},h=v,_=(e("2279"),Object(d["a"])(h,a,n,!1,null,"293ac1e1",null));s["default"]=_.exports},"71ed":function(t,s,e){},"7d10":function(t,s,e){},c606:function(t,s,e){},e7e0:function(t,s,e){"use strict";var a=e("2976"),n=e.n(a);n.a},e9e5:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("nav",{staticClass:"sidenav shadow-sm"},[t._m(0),e("ul",{staticClass:"sidenav-nav px-0 text-center"},[e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"admin-restaurants"},"active-class":"active"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-store"})]),e("span",{staticClass:"nav-link-description"},[t._v("餐廳")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"admin-users"},"active-class":"active"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-utensils"})]),e("span",{staticClass:"nav-link-description"},[t._v("用戶")])])],1),e("li",{staticClass:"nav-item"},[e("router-link",{staticClass:"nav-link",attrs:{to:{name:"admin-orders"},"active-class":"active"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-clipboard-list"})]),e("span",{staticClass:"nav-link-description"},[t._v("訂單")])])],1),t._m(1),e("li",{staticClass:"nav-divider"}),t._m(2)])])},n=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"sidenav-brand-container text-center py-5"},[e("a",{staticClass:"sidenav-brand",attrs:{href:"#"}},[t._v("NextMeal")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-chart-line"})]),e("span",{staticClass:"nav-link-description"},[t._v("分析")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"nav-item"},[e("a",{staticClass:"nav-link",attrs:{href:"#"}},[e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-cog"})]),e("span",{staticClass:"nav-link-description"},[t._v("登出")])])])}],r=(e("e7e0"),e("2877")),i={},c=Object(r["a"])(i,a,n,!1,null,"4eb0aadb",null);s["a"]=c.exports},f7a5:function(t,s,e){"use strict";var a=e("71ed"),n=e.n(a);n.a}}]);
//# sourceMappingURL=chunk-eedcb0a8.03b73b94.js.map