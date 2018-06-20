webpackJsonp([6],{"7f37":function(t,e,a){"use strict";function i(t){a("lJ/C"),a("NDIx")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("mvHQ"),l=a.n(s),n={props:[],data:function(){return{methods:"",url:"",result:"",apiList:[],searchText:"",index:-1,paramDynamic:[],methodsList:[{label:"POST",value:"POST"},{label:"GET",value:"GET"}],urlList:[]}},created:function(){},mounted:function(){var t=this;this.$http.apiGet("/restful/list",{}).then(function(e){t.apiList=e})},methods:{handleAdd:function(){this.index++,this.paramDynamic.push({value:"",status:1,name:"",index:this.index})},handleRemove:function(t){this.paramDynamic[t].status=0},onClick:function(t){this.url=t.url.replace("/api/","/")},filterSearch:function(t){return 0===this.searchText.length||t.indexOf(this.searchText)>=0},request:function(){for(var t=this,e={},a=0;a<this.paramDynamic.length;a++){var i=this.paramDynamic[a];null!=i&&1===i.status&&(e[i.name]=i.value)}switch(this.methods){case"POST":this.$http.apiPost(this.url,e).then(function(e){t.result=l()(e)});break;case"GET":this.$http.apiGet(this.url,e).then(function(e){t.result=l()(e)})}}},components:{}},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-view main-view-full"},[a("Row",{attrs:{gutter:10}},[a("i-col",{staticStyle:{padding:"10px"},attrs:{span:"14"}},[a("Row",{attrs:{gutter:10}},[a("i-col",{attrs:{span:"24"}},[a("Input",{model:{value:t.url,callback:function(e){t.url=e},expression:"url"}},[a("Select",{staticStyle:{width:"100px"},attrs:{slot:"prepend"},slot:"prepend",model:{value:t.methods,callback:function(e){t.methods=e},expression:"methods"}},t._l(t.methodsList,function(e){return a("Option",{key:e.value,attrs:{value:e.value}},[t._v(t._s(e.label))])}))],1)],1)],1),t._v(" "),a("Row",{staticStyle:{"padding-top":"10px"},attrs:{gutter:10}},[a("i-col",{staticStyle:{"max-height":"300px",overflow:"auto"},attrs:{span:"20"}},[a("Row",[a("table",{directives:[{name:"show",rawName:"v-show",value:t.paramDynamic&&t.paramDynamic.length>0,expression:"paramDynamic && paramDynamic.length>0"}],staticClass:"param-table",staticStyle:{width:"100%"}},[a("tr",[a("th",{staticClass:"ivu-table-column-center",staticStyle:{width:"120px"}},[t._v("参数名")]),t._v(" "),a("th",{staticClass:"ivu-table-column-center"},[t._v("值")]),t._v(" "),a("th",{staticClass:"ivu-table-column-center",staticStyle:{width:"60px"}})]),t._v(" "),t._l(t.paramDynamic,function(e,i){return e.status?[a("tr",[a("td",[a("Input",{attrs:{type:"text",size:"small",placeholder:"参数名"},model:{value:e.name,callback:function(a){t.$set(e,"name",a)},expression:"item.name"}})],1),t._v(" "),a("td",[a("Input",{attrs:{type:"text",size:"small",placeholder:"值"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}})],1),t._v(" "),a("td",[a("Button",{attrs:{type:"ghost",size:"small"},on:{click:function(e){t.handleRemove(i)}}},[t._v("删除")])],1)])]:t._e()})],2)]),t._v(" "),a("Row",[a("Button",{attrs:{type:"dashed",long:"",icon:"plus-round"},on:{click:t.handleAdd}},[t._v("添加参数")])],1)],1),t._v(" "),a("i-col",{attrs:{span:"4"}},[a("Button",{attrs:{type:"ghost",long:"",icon:"ios-search"},on:{click:t.request}},[t._v("发 送")])],1)],1),t._v(" "),a("Row",{staticStyle:{"padding-top":"20px"},attrs:{gutter:10}},[a("i-col",{attrs:{span:"24"}},[a("Input",{attrs:{readonly:"",type:"textarea",rows:20},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}})],1)],1)],1),t._v(" "),a("i-col",{attrs:{span:"10"}},[a("ul",{staticClass:"api-ul"},[a("div",{staticStyle:{margin:"10px"}},[a("h1",[t._v("API接口列表")]),t._v(" "),a("Input",{staticStyle:{width:"100%"},attrs:{size:"small",icon:"ios-search"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}}),t._v(" "),t._l(t.apiList,function(e){return[t.filterSearch(e.url)?a("li",{staticClass:"api-li",on:{click:function(a){t.onClick(e)}}},[t._v("\n              "+t._s(e.url)+"\n            ")]):t._e()]})],2)])])],1)],1)},o=[],c={render:r,staticRenderFns:o},u=c,p=a("VU/8"),d=i,h=p(n,u,!1,d,"data-v-1b0b8b42",null);e.default=h.exports},"KBi/":function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".param-table .ivu-table-wrapper{border:none}",""])},NDIx:function(t,e,a){var i=a("KBi/");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("585d3d7f",i,!0,{})},RufJ:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".api-ul[data-v-1b0b8b42]{height:calc(100vh - 120px);margin:0 5px 0 20px;padding-right:20px;overflow:auto;border-left:2px solid #f5f7f9}.api-li[data-v-1b0b8b42]{cursor:pointer;padding:2px 0;border-bottom:1px solid #f5f7f9}.api-li[data-v-1b0b8b42]:hover{border-left:2px solid #333;font-size:14px}.param-table td[data-v-1b0b8b42]{height:30px;padding:0 5px;text-align:center}.param-table tr th[data-v-1b0b8b42]{height:30px;white-space:nowrap;overflow:hidden;background-color:#f8f8f9}.param-table[data-v-1b0b8b42]{border:1px solid #f8f8f9;margin-bottom:2px}",""])},"lJ/C":function(t,e,a){var i=a("RufJ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("9883df62",i,!0,{})}});