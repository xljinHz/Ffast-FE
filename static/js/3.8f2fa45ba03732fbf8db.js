webpackJsonp([3],{"7DnD":function(t,a,e){var o=e("lO+l");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("48e01cb8",o,!0,{})},Qt9A:function(t,a,e){"use strict";function o(t){e("frP9")}function i(t){e("ZHaV"),e("7DnD")}Object.defineProperty(a,"__esModule",{value:!0});var n=e("aBzk"),r=e("bGai"),s=e("XLwt"),c=e.n(s),l=function(t){var a=[],e=[],o=0;console.log(111111),console.log(t);for(var i in t.count)a.push(i),e.push(t.count[i][0]),o+=parseFloat(t.count[i][0]);return{sum:o,tooltip:{trigger:"axis"},grid:{x:0,y:0,x2:0,y2:0,borderWidth:1},xAxis:[{type:"category",boundaryGap:!1,show:!1,data:a}],yAxis:[{show:!1,type:"value"}],color:["#00CB00"],series:[{name:"注册量",type:"line",smooth:!0,itemStyle:{normal:{areaStyle:{type:"default"}}},data:e}]}},d={props:{},data:function(){return{countData:{data1:{count:0},data2:{count:0},data3:{count:0},data4:{count:0}}}},created:function(){},mounted:function(){this.queryData()},methods:{queryData:function(t){var a={count:{"2018年1月":[268568],"2018年2月":[580457],"2018年3月":[580457],"2018年4月":[900457],"2018年5月":[980457],"2018年6月":[780457],"2018年7月":[380457],"2018年8月":[280457],"2018年9月":[180457],"2018年10月":[480457],"2018年11月":[380457],"2018年12月":[280457]}},e={count:{"6月1号":[8e3],"6月2号":[6e3],"6月3号":[4e3],"6月4号":[6e3],"6月5号":[4e3],"6月6号":[3e3],"6月7号":[5e3],"6月8号":[5510],"6月9号":[6615]}},o={count:{"6月4号":[450],"6月5号":[400],"6月6号":[300],"6月7号":[700],"6月8号":[600],"6月9号":[345]}},i={count:{"1时":[1],"2时":[10],"3时":[10],"4时":[2],"5时":[5],"6时":[10],"7时":[60],"8时":[60],"9时":[70],"10时":[80],"11时":[100],"12时":[122]}},n=c.a.init(document.querySelector("#chart1")),r=l(a);this.$set(this.countData.data1,"count",r.sum),n.setOption(r);var s=c.a.init(document.querySelector("#chart2")),d=l(e);this.$set(this.countData.data2,"count",d.sum),s.setOption(d);var u=c.a.init(document.querySelector("#chart3")),p=l(o);this.$set(this.countData.data3,"count",p.sum),u.setOption(p);var h=c.a.init(document.querySelector("#chart4")),g=l(i);this.$set(this.countData.data4,"count",g.sum),h.setOption(g)}},components:{NumberUd:r.m}},u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("Row",{attrs:{gutter:20}},[e("i-col",{attrs:{span:"6"}},[e("Card",{staticStyle:{height:"155px"},attrs:{bordered:!1}},[e("Tooltip",{staticClass:"count-tip",attrs:{content:"年度新注册量",placement:"left"}},[e("Icon",{attrs:{type:"information-circled"}})],1),t._v(" "),e("div",[e("NumberUd",{attrs:{color:"#5c6b77",textAlign:"left",countSize:30,endVal:t.countData.data1.count,title:"年度新注册量",rightText:"人"}})],1),t._v(" "),e("div",{staticStyle:{height:"60px",width:"95%"},attrs:{id:"chart1"}})],1)],1),t._v(" "),e("i-col",{attrs:{span:"6"}},[e("Card",{staticStyle:{height:"155px"},attrs:{bordered:!1}},[e("Tooltip",{staticClass:"count-tip",attrs:{content:"本月每日新注册量统计",placement:"left"}},[e("Icon",{attrs:{type:"information-circled"}})],1),t._v(" "),e("div",[e("NumberUd",{attrs:{color:"#5c6b77",textAlign:"left",countSize:30,endVal:t.countData.data2.count,title:"本月新注册量",rightText:"人"}})],1),t._v(" "),e("div",{staticStyle:{height:"60px",width:"95%"},attrs:{id:"chart2"}})],1)],1),t._v(" "),e("i-col",{attrs:{span:"6"}},[e("Card",{staticStyle:{height:"155px"},attrs:{bordered:!1}},[e("Tooltip",{staticClass:"count-tip",attrs:{content:"本周每日新注册量统计",placement:"left"}},[e("Icon",{attrs:{type:"information-circled"}})],1),t._v(" "),e("div",[e("NumberUd",{staticStyle:{display:"inline-block"},attrs:{color:"#5c6b77",textAlign:"left",countSize:30,endVal:t.countData.data3.count,title:"本周新注册量",rightText:"人"}})],1),t._v(" "),e("div",{staticStyle:{height:"60px",width:"95%"},attrs:{id:"chart3"}})],1)],1),t._v(" "),e("i-col",{attrs:{span:"6"}},[e("Card",{staticStyle:{height:"155px"},attrs:{bordered:!1}},[e("Tooltip",{staticClass:"count-tip",attrs:{content:"今日新注册量统计",placement:"left"}},[e("Icon",{attrs:{type:"information-circled"}})],1),t._v(" "),e("div",[e("NumberUd",{staticStyle:{display:"inline-block"},attrs:{color:"#5c6b77",textAlign:"left",countSize:30,endVal:t.countData.data4.count,title:"今日新注册量",rightText:"人"}})],1),t._v(" "),e("div",{staticStyle:{height:"60px",width:"95%"},attrs:{id:"chart4"}})],1)],1)],1)},p=[],h={render:u,staticRenderFns:p},g=h,f=e("VU/8"),v=o,b=f(d,g,!1,v,"data-v-40c0dfae",null),m=b.exports,x={data:function(){return{imgUrl:"http://39.107.104.190:6060/api/sys/attach/getImg?id=",DateUtils:n.a}},computed:{warningList:function(){return this.$store.state.warning},backlogList:function(){return this.$store.state.backlog}},methods:{backlogItemClick:function(t){this.$router.push({path:"/work/backlog",name:"待办事项",params:{backLog:t}})}},mounted:function(){},components:{NumberUd:r.m,IndexCharts:m,NumberCircle:r.l}},y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"sys-index"},[e("Row",[e("i-col",{attrs:{span:"24"}},[e("IndexCharts")],1)],1),t._v(" "),e("Row",{staticStyle:{"padding-top":"20px"},attrs:{gutter:20}},[e("i-col",{staticClass:"not-padding backlog",attrs:{span:"6"}},[e("Card",{attrs:{bordered:!1}},[e("h3",{attrs:{slot:"title"},slot:"title"},[t._v("待办事项")]),t._v(" "),e("router-link",{attrs:{slot:"extra",to:"/work/backlog"},slot:"extra"},[t._v("\n          更多\n          "),e("Icon",{attrs:{type:"ios-arrow-right"}})],1),t._v(" "),e("div",{staticClass:"backlog-parent"},[t.backlogList?e("ul",t._l(t.backlogList,function(a){return e("li",{staticClass:"curday-backlog-li",on:{click:function(e){t.backlogItemClick(a)}}},[e("Tag",{attrs:{color:1==a.priority?"red":"default"}},[t._v("\n                "+t._s(0==a.priority?"一般":1==a.priority?"重要":"")+"\n              ")]),t._v(" "),e("span",{staticStyle:{"font-weight":"800","font-size":"14px","padding-top":"5px"}},[t._v("\n                   "+t._s(a.name)+"\n                ")]),t._v(" "),e("span",{staticStyle:{float:"right"}},[t._v("\n                "+t._s(t.DateUtils.getSimpleDate2(a.startTime))+"\n                    "),e("Tag",{attrs:{color:1==a.status?"blue":"green"}},[t._v(t._s(0==a.status?"未完成":1==a.status?"已完成":""))])],1),t._v(" "),e("div",{staticClass:"backlog-content",domProps:{innerHTML:t._s(a.content)}})],1)})):t._e(),t._v(" "),0==t.backlogList.length?e("div",{staticClass:"empty"},[e("Icon",{attrs:{type:"information-circled"}}),t._v("\n            暂无待办事项\n          ")],1):t._e()])],1)],1),t._v(" "),e("i-col",{attrs:{span:18}},[e("Card",{staticStyle:{padding:"10px"},attrs:{bordered:!1}},[e("row",[e("i-col",{attrs:{span:6}},[e("NumberCircle",{attrs:{endVal:15652,leftText:"本周访问量",rightText:"人"}})],1),t._v(" "),e("i-col",{attrs:{span:6}},[e("NumberCircle",{attrs:{endVal:15652,leftText:"本周访问量",rightText:"人"}})],1),t._v(" "),e("i-col",{attrs:{span:6}},[e("NumberCircle",{attrs:{endVal:15652,leftText:"本周访问量",rightText:"人"}})],1),t._v(" "),e("i-col",{attrs:{span:6}},[e("NumberCircle",{attrs:{endVal:15652,leftText:"本周访问量",rightText:"人"}})],1)],1),t._v(" "),e("row",[e("div",{staticStyle:{height:"427px"}})])],1)],1)],1)],1)},_=[],k={render:y,staticRenderFns:_},C=k,S=e("VU/8"),w=i,T=S(x,C,!1,w,"data-v-775b8550",null);a.default=T.exports},"Y+Hw":function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,".sys-index[data-v-775b8550]{padding:10px;width:100%}.backlog li[data-v-775b8550]{height:70px;padding:5px;border-bottom:1px solid #f5f7f9;cursor:pointer;list-style-type:none}.backlog li[data-v-775b8550]:last-child{border-bottom:none}.backlog li[data-v-775b8550]:hover{background-color:#ebf7ff}.empty[data-v-775b8550]{font-size:16px;text-align:center;color:#80848f;height:100%;width:100%;padding-top:120px}.backlog-parent[data-v-775b8550]{height:565px}.backlog-content[data-v-775b8550]{color:#657180;font-size:13px}",""])},ZHaV:function(t,a,e){var o=e("Y+Hw");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("130aae00",o,!0,{})},frP9:function(t,a,e){var o=e("wjHv");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("a7f42e40",o,!0,{})},"lO+l":function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,".not-padding .ivu-card-body{padding:0}",""])},wjHv:function(t,a,e){a=t.exports=e("FZ+f")(!1),a.push([t.i,".count-tip[data-v-40c0dfae]{color:#7e909e;float:right}",""])}});