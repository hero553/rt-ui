(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{807:function(t,a,e){"use strict";e.r(a);var s=e(1),l={__name:"filters",setup:function(t){return{__sfc:!0,reactiveData:Object(s.reactive)({table:{data:[{id:"1",date:"2019-09-25",name:"张三",status:"1",amount:3e3,address:"广东省广州市天河区"},{id:"2",date:"2019-09-26",name:"张三1",status:"2",amount:2e3,address:"广东省广州市天广东省广州市天河区2广东省广州市天河区2河区2"},{id:"3",date:"2019-09-27",name:"张三2",status:"3",amount:4e3,address:"广东省广州市天河区3"}],columns:[{prop:"name",label:"姓名",minWidth:"100"},{prop:"date",label:"日期",minWidth:"160"},{prop:"status",label:"字典过滤",minWidth:"100",filters:{list:"statusList",key:"id",label:"label"}},{prop:"address",label:"地址",minWidth:"220"},{prop:"amount",label:"金额",minWidth:"160"},{prop:"address",label:"地址",minWidth:"220"}],listTypeInfo:{statusList:[{id:"1",label:"待办"},{id:"2",label:"待审批"},{id:"3",label:"报废"}]}}}),reactive:s.reactive}}},i=e(2),n=Object(i.a)(l,(function(){var t=this._self._c,a=this._self._setupProxy;return t("div",{staticClass:"t-table",staticStyle:{width:"100%"}},[t("rt-table",{attrs:{table:a.reactiveData.table,columns:a.reactiveData.table.columns}})],1)}),[],!1,null,null,null);a.default=n.exports}}]);