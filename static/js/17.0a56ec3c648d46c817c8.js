webpackJsonp([17],{"1HZ2":function(e,t,a){"use strict";function i(e){a("6Sta")}Object.defineProperty(t,"__esModule",{value:!0});var n=a("bGai"),d={width:450,dynamic:[[{name:"id",hidden:!0},{name:"code",type:"text",span:20,label:"编号"},{name:"dictTypeId",type:"treeSelect",span:20,label:"分类",dataFromTree:!0,rules:{required:!0,type:"number"}},{name:"name",type:"text",span:20,label:"名称",rules:{required:!0}},{name:"note",type:"text",textarea:{minRows:2,maxRows:3},span:20,label:"备注"}]]},r={width:400,labelWidth:80,dynamic:[[{name:"id",hidden:!0},{name:"parentId",type:"treeSelect",dataFromTree:!0,span:24,label:"父类标识"},{name:"identity",type:"text",span:24,label:"分类标识",rules:{required:!0}}],[{name:"name",type:"text",span:24,label:"分类名称",rules:{required:!0}}]]},l={showToolbar:!0,editOptions:r,categoryField:"dictTypeId",dataUrl:"/sys/dictType/list",createUrl:"/sys/dictType/create",deleteUrl:"/sys/dictType/delete",updateUrl:"/sys/dictType/update",title:"字典分类"},s={selection:[],pageSize:20,title:"基础字典",permsPrefix:"dict",editOptions:d,dataUrl:"/sys/dict/list",createUrl:"/sys/dict/create",deleteUrl:"/sys/dict/delete",updateUrl:"/sys/dict/update",param:{},columns:[{type:"selection",width:60,align:"center"},{key:"dictTypeId",dataFromTree:!0,title:"分类",width:120},{key:"code",title:"编号",width:120},{key:"name",title:"名称",width:120},{key:"note",title:"备注"}],searchDynamic:[[{name:"code",label:"编号",span:6,type:"text"},{name:"name",label:"名称",span:6,type:"text"}]]},p={data:function(){return{tableOptions:s,treeOptions:l}},computed:{},methods:{},mounted:function(){},components:{CrudView:n.d}},c=function(){var e=this,t=e.$createElement;return(e._self._c||t)("CrudView",{ref:"crudView",attrs:{tableOptions:e.tableOptions,treeOptions:e.treeOptions}})},o=[],y={render:c,staticRenderFns:o},u=y,m=a("VU/8"),b=i,f=m(p,u,!1,b,"data-v-0bfa88a2",null);t.default=f.exports},"6Sta":function(e,t,a){var i=a("Qe67");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("rjj0")("315b99e0",i,!0,{})},Qe67:function(e,t,a){t=e.exports=a("FZ+f")(!1),t.push([e.i,"",""])}});