webpackJsonp([16],{Qcef:function(t,o,i){o=t.exports=i("FZ+f")(!1),o.push([t.i,".edit-row[data-v-33c5855a]{padding-bottom:45px}",""])},RYrg:function(t,o,i){"use strict";function n(t){i("jOZu")}Object.defineProperty(o,"__esModule",{value:!0});var s=i("bGai"),e={props:{},data:function(){return{options:{},action:{},data:{},loading:!1}},computed:{},methods:{ok:function(){var t=this;this.$refs.dynamicForm.submit(function(o){console.log(o),t.options.submitBeforeCallBack&&!t.options.submitBeforeCallBack(o)||(t.options.submitBefore&&t.options.submitBefore(o),null!==t.action.postUrl&&(t.loading=!0,t.$http.apiPost(t.action.postUrl,o).then(function(i){t.loading=!1,i.success?(t.$Message.success("提交成功"),null!=i.data.id&&(o.id=i.data.id),null!=t.options.editSuccess&&t.options.editSuccess(),(null==t.options.successBack||t.options.successBack)&&t.$router.go(-1)):t.$http.handleError(i)})))},function(t){})},back:function(){this.$router.go(-1)}},mounted:function(){},activated:function(){var t=this;this.options=this.$route.query.options,this.action=this.$route.query.action,this.data=this.$route.query.data,console.log(this.$route),console.log(this.options),console.log(this.data),this.$nextTick(function(){t.$refs.dynamicForm.setFormData(t.data)})},components:{CrudView:s.d,FormDynamic:s.h,PermsValid:s.n}},a=function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("div",{staticClass:"main-view main-view-full",staticStyle:{"padding-top":"20px"}},[i("row",{staticStyle:{height:"80px"}},[i("Button",{attrs:{type:"text",icon:"chevron-left"},on:{click:t.back}},[t._v("返 回")])],1),t._v(" "),i("row",{staticClass:"edit-row",attrs:{type:"flex",justify:"center"}},[i("i-col",{attrs:{span:"22"}},[i("formDynamic",{ref:"dynamicForm",attrs:{data:t.options.dynamic,"label-width":t.options.labelWidth}}),t._v(" "),i("div",{style:{marginLeft:t.options.labelWidth+"px"}},[i("i-button",{attrs:{type:"primary",icon:"folder",loading:t.loading},on:{click:t.ok}},[t._v("\n          保 存\n        ")])],1)],1)],1)],1)},c=[],r={render:a,staticRenderFns:c},l=r,u=i("VU/8"),d=n,p=u(e,l,!1,d,"data-v-33c5855a",null);o.default=p.exports},jOZu:function(t,o,i){var n=i("Qcef");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("c9a2c8bc",n,!0,{})}});