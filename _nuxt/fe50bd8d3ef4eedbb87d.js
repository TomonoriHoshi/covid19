(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{464:function(t,e,r){var content=r(473);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("2bc6109a",content,!0,{sourceMap:!1})},468:function(t,e,r){var content=r(509);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("57335474",content,!0,{sourceMap:!1})},469:function(t,e,r){var content=r(513);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("212ad082",content,!0,{sourceMap:!1})},472:function(t,e,r){"use strict";var n=r(464);r.n(n).a},473:function(t,e,r){(e=r(12)(!1)).push([t.i,".header{display:flex;align-items:flex-end;flex-wrap:wrap}.pageTitle{display:flex;align-items:center;font-size:1.875rem;line-height:1;font-weight:normal;margin:0 .5em 0 0}@media screen and (max-width: 600px){.pageTitle{font-size:1.25rem}}.date{font-size:.875rem;color:gray}",""]),t.exports=e},476:function(t,e,r){"use strict";var n=r(471),l={props:{title:{type:String,required:!0,default:""},icon:{type:String,required:!1,default:""},date:{type:String,required:!1,default:""}},data:function(){return{formattedDate:Object(n.b)(this.date)}}},o=(r(472),r(21)),d=r(47),c=r.n(d),h=r(141),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header mb-3"},[r("h2",{staticClass:"pageTitle"},[r("v-icon",{staticClass:"mr-2",attrs:{size:"40"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),r("div",{staticClass:"date"},[r("span",[t._v("最終更新 ")]),t._v(" "),r("time",{attrs:{datetime:t.formattedDate}},[t._v(t._s(t.date))])])])}),[],!1,null,null,null);e.a=component.exports;c()(component,{VIcon:h.a})},508:function(t,e,r){"use strict";var n=r(468);r.n(n).a},509:function(t,e,r){(e=r(12)(!1)).push([t.i,".DataSelector{margin-top:2px;border:1px solid #d9d9d9;background-color:#fff}.DataSelector-Button{border:none !important;margin:2px;border-radius:4px !important;height:24px !important;font-size:12px !important;color:#333 !important;background-color:#fff !important}.DataSelector-Button::before{background-color:inherit}.DataSelector .v-btn--active{background-color:#4d4d4d !important;color:#fff !important}",""]),t.exports=e},512:function(t,e,r){"use strict";var n=r(469);r.n(n).a},513:function(t,e,r){(e=r(12)(!1)).push([t.i,".cardTable.v-data-table th{padding:8px 10px;height:auto;border-bottom:1px solid #d9d9d9;white-space:nowrap;color:#4d4d4d;font-size:12px}.cardTable.v-data-table th.text-center{text-align:center}.cardTable.v-data-table tbody tr{color:#333}.cardTable.v-data-table tbody tr td{padding:8px 10px;height:auto;font-size:12px}.cardTable.v-data-table tbody tr td.text-center{text-align:center}.cardTable.v-data-table tbody tr:nth-child(odd) td{background:rgba(217,217,217,.3)}.cardTable.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row){border:none}.note{padding:8px;font-size:12px;color:gray}",""]),t.exports=e},514:function(t,e,r){"use strict";e.a=function(data){var t=[],e=new Date,r=0;return data.filter((function(t){return new Date(t["日付"])<e})).forEach((function(e){var n=new Date(e["日付"]),l=e["小計"];isNaN(l)||(r+=l,t.push({label:n,transition:l,cumulative:r}))})),t}},515:function(t,e,r){"use strict";var n=r(23),l=r.n(n),o=[{text:"日付",value:"日付"},{text:"居住地",value:"居住地"},{text:"年代",value:"年代"},{text:"性別",value:"性別"}];e.a=function(data){var t={headers:o,datasets:[]};return data.forEach((function(e){var r,n,o,d,c={"日付":null!==(r=l()(e["発表日"]).format("MM/DD"))&&void 0!==r?r:"不明","居住地":null!==(n=e["居住地"])&&void 0!==n?n:"不明","年代":null!==(o=e["年代"])&&void 0!==o?o:"不明","性別":null!==(d=e["性別"])&&void 0!==d?d:"不明"};t.datasets.push(c)})),t.datasets.sort((function(a,b){return a===b?0:a<b?1:-1})),t}},526:function(t,e,r){var content=r(664);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("e5bb1cf8",content,!0,{sourceMap:!1})},527:function(t,e,r){var content=r(667);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("c23ed5aa",content,!0,{sourceMap:!1})},528:function(t,e,r){"use strict";r(533);var n=r(23),l=r.n(n),o=r(470),d={name:"DataSelector",props:{value:{type:String,required:!1,default:""}}},c=(r(508),r(21)),h=r(47),f=r.n(h),m=r(531),x=r(688),v=r(155),w=r.n(v),y=r(48),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn-toggle",{staticClass:"DataSelector",attrs:{value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[r("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{value:"transition"}},[t._v("\n    日別\n  ")]),t._v(" "),r("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{value:"cumulative"}},[t._v("\n    累計\n  ")])],1)}),[],!1,null,null,null),D=component.exports;f()(component,{VBtn:m.a,VBtnToggle:x.a}),w()(component,{Ripple:y.a});var k=r(475),S=(r(36),{name:"DateSelectSlider",props:{chartData:{type:Array,required:!0},value:{type:Array,required:!0},sliderMax:{type:Number,required:!0,default:1}},data:function(){var t=this;return{sliderValue:this.value,rules:[function(e){return Math.abs(e[0]-e[1])>14||t.$t("表示期間の最小範囲は１４日間です")}]}},watch:{sliderMax:function(){this.sliderValue=[0,this.sliderMax]},sliderValue:function(t,e){Math.abs(t[0]-t[1])<=14?this.sliderValue=e:this.$emit("sliderInput",t)}},methods:{getSliderLabels:function(t){return this.chartData&&0!==this.chartData.length?l()(this.chartData[t].label).format("M/D"):1}}}),_=r(687),C=Object(c.a)(S,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-range-slider",{staticStyle:{"padding-top":"35px"},attrs:{value:t.sliderValue,label:t.$t("表示期間"),rules:t.rules,max:t.sliderMax,min:0,"thumb-label":"always",color:"#85005d","track-color":"#808080"},scopedSlots:t._u([{key:"thumb-label",fn:function(e){return[t._v("\n    "+t._s(t.getSliderLabels(e.value))+"\n  ")]}}]),model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})}),[],!1,null,null,null),T=C.exports;f()(C,{VRangeSlider:_.a});var N={components:{DataView:o.a,DataSelector:D,DataViewBasicInfoPanel:k.a,DateSelectSlider:T},props:{title:{type:String,required:!1,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,required:!1,default:"time-bar-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},unit:{type:String,required:!1,default:""},url:{type:String,required:!1,default:""},defaultdatakind:{type:String,required:!1,default:"transition"},sourceText:{type:String,required:!1,default:""},sourceUrl:{type:String,required:!1,default:""}},data:function(){return{dataKind:this.defaultdatakind,graphRange:[0,this.chartData.length-1]}},computed:{sliderMax:function(){return this.chartData&&0!==this.chartData.length?this.chartData.length-1:1},displayCumulativeRatio:function(){var t=this.chartData.slice(-1)[0].cumulative,e=this.chartData.slice(-2)[0].cumulative;return this.formatDayBeforeRatio(t-e)},displayTransitionRatio:function(){var t=this.chartData.slice(-1)[0].transition,e=this.chartData.slice(-2)[0].transition;return this.formatDayBeforeRatio(t-e)},displayInfo:function(){if("transition"===this.dataKind)return{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:"実績値（前日比：".concat(this.displayTransitionRatio," ").concat(this.unit,"）"),unit:this.unit};var t=l()(this.chartData.slice(-1)[0].label).format("M/DD");return{lText:this.chartData[this.chartData.length-1].cumulative.toLocaleString(),sText:"".concat(t," 累計値（前日比：").concat(this.displayCumulativeRatio," ").concat(this.unit,"）"),unit:this.unit}},displayData:function(){return"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:"#85005d",borderWidth:0}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:"#85005d",borderWidth:0}]}},displayOption:function(){var t=this.unit;return{animation:!1,tooltips:{displayColors:!1,callbacks:{label:function(e){return parseInt(e.value).toLocaleString()+t},title:function(t,data){return l()(data.labels[t[0].index]).format("M月D日")}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",type:"time",offset:!0,time:{tooltipFormat:"MM/DD",unit:"day",unitStepSize:1,displayFormats:{day:"D"},round:"day"},stacked:!0,gridLines:{display:!1},ticks:{min:this.chartData[this.graphRange[0]].label,max:this.chartData[this.graphRange[1]].label,fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,minRotation:0}},{id:"month",type:"time",stacked:!0,time:{unit:"month",unitStepSize:1,displayFormats:{month:"YYYY年M月"},round:"day"},gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{min:this.chartData[this.graphRange[0]].label,max:this.chartData[this.graphRange[1]].label,fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold",gridLines:{display:!0}}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]}}}},methods:{sliderUpdate:function(t){this.graphRange=t},formatDayBeforeRatio:function(t){var e=t.toLocaleString();switch(Math.sign(t)){case 1:return"+".concat(e);case-1:default:return"".concat(e)}}}},W=r(672),I=Object(c.a)(N,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{attrs:{title:t.title,date:t.date,"title-id":t.titleId,"source-text":t.sourceText,"source-url":t.sourceUrl},scopedSlots:t._u([{key:"button",fn:function(){return[r("data-selector",{model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[r("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0}])},[t._v(" "),r("v-layout",{attrs:{column:""}},[r("bar",{attrs:{"chart-data":t.displayData,options:t.displayOption,height:240}}),t._v(" "),r("date-select-slider",{attrs:{"chart-data":t.chartData,value:[0,t.sliderMax],"slider-max":t.sliderMax},on:{sliderInput:t.sliderUpdate}})],1)],1)}),[],!1,null,null,null);e.a=I.exports;f()(I,{VLayout:W.a})},529:function(t,e,r){"use strict";var n=r(470),l=r(475),o={components:{DataView:n.a,DataViewBasicInfoPanel:l.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,required:!1,default:function(){}},url:{type:String,required:!1,default:""},sourceText:{type:String,required:!1,default:""},sourceUrl:{type:String,required:!1,default:""}}},d=(r(512),r(21)),c=r(47),h=r.n(c),f=r(675),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,url:t.url,"source-text":t.sourceText,"source-url":t.sourceUrl},scopedSlots:t._u([{key:"button",fn:function(){return[r("span")]},proxy:!0},{key:"infoPanel",fn:function(){return[r("data-view-basic-info-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0}])},[t._v(" "),r("v-data-table",{staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0}})],1)}),[],!1,null,null,null);e.a=component.exports;h()(component,{VDataTable:f.a})},663:function(t,e,r){"use strict";var n=r(526);r.n(n).a},664:function(t,e,r){(e=r(12)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0px 0px 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew-heading{display:flex;align-items:center;font-size:19px;font-size:1.1875rem;color:#4d4d4d;font-weight:bold;margin-bottom:12px;color:#4d4d4d;margin-left:12px}.WhatsNew-heading-icon{margin:3px}.WhatsNew .WhatsNew-list{padding-left:0px;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{display:flex;text-decoration:none;margin:5px;font-size:14px}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:14px;font-size:0.875rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},665:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2020/4/24","url":"http://www.pref.nara.jp/item/227374.htm","text":"新型コロナウイルス感染者・患者の発生について"},{"date":"2020/4/23","url":"http://www.pref.nara.jp/item/227332.htm","text":"新型コロナウイルス感染者・患者の発生について"},{"date":"2020/4/22","url":"http://www.pref.nara.jp/item/227249.htm","text":"新型コロナウイルス感染者・患者の発生について"},{"date":"2020/4/21","url":"http://www.pref.nara.jp/item/227163.htm","text":"新型コロナウイルス感染者・患者の発生について"},{"date":"2020/4/20","url":"http://www.pref.nara.jp/item/227068.htm","text":"新型コロナウイルス感染者・患者の発生について"}]}')},666:function(t,e,r){"use strict";var n=r(527);r.n(n).a},667:function(t,e,r){(e=r(12)(!1)).push([t.i,".MainPage .DataBlock[data-v-b7a3107c]{margin:20px -8px}@media screen and (min-width: 769px){.MainPage .DataBlock .DataCard[data-v-b7a3107c]{padding:10px}}@media screen and (max-width: 600px){.MainPage .DataBlock .DataCard[data-v-b7a3107c]{padding:4px 8px}}",""]),t.exports=e},677:function(t,e,r){"use strict";r.r(e);var n=r(23),l=r.n(n),o=r(476),d=r(528),c=r(471),h={props:{items:{type:Array,required:!0}},computed:{limitCount:function(){return this.items.slice(0,5)}},methods:{isInternalLink:function(path){return!/^https?:\/\//.test(path)},formattedDate:function(t){return Object(c.a)(t)}}},f=(r(663),r(21)),m=r(47),x=r.n(m),v=r(141),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"WhatsNew"},[r("h2",{staticClass:"WhatsNew-heading"},[r("v-icon",{staticClass:"WhatsNew-heading-icon",attrs:{size:"24"}},[t._v("\n      mdi-information\n    ")]),t._v("\n    最新のお知らせ\n  ")],1),t._v(" "),r("ul",{staticClass:"WhatsNew-list"},t._l(t.limitCount,(function(e,i){return r("li",{key:i,staticClass:"WhatsNew-list-item"},[r("a",{staticClass:"WhatsNew-list-item-anchor",attrs:{href:e.url,target:"_blank",rel:"noopener"}},[r("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(e.date)+"\n        ")]),t._v(" "),r("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n          "),t.isInternalLink(e.url)?t._e():r("v-icon",{staticClass:"WhatsNew-item-ExternalLinkIcon",attrs:{size:"12"}},[t._v("\n            mdi-open-in-new\n          ")])],1)])])})),0)])}),[],!1,null,null,null),w=component.exports;x()(component,{VIcon:v.a});var y=r(522),D=r(529),k=r(514),S=r(515),_=r(540),C=r(665),T=r(539),N={components:{PageHeader:o.a,TimeBarChart:d.a,WhatsNew:w,ConfirmedCasesDetailsCard:_.a,DataTable:D.a,PatientsAndSickbeds:T.a},data:function(){var t=Object(k.a)(y.patients_summary.data),e=Object(S.a)(y.patients.data),r={lText:t[t.length-1].cumulative.toLocaleString(),sText:l()(t[t.length-1].label).format("M/D")+"の累計",unit:"人"},data={Data:y,patientsTable:e,patientsGraph:t,sumInfoOfPatients:r,headerItem:{icon:"mdi-chart-timeline-variant",title:"奈良県内の最新感染動向",date:y.lastUpdate},newsItems:C.newsItems,metroGraphOption:{responsive:!0,legend:{display:!0},scales:{xAxes:[{position:"bottom",stacked:!1,gridLines:{display:!0},ticks:{fontSize:10,maxTicksLimit:20,fontColor:"#808080"}}],yAxes:[{stacked:!1,gridLines:{display:!0},ticks:{fontSize:12,maxTicksLimit:10,fontColor:"#808080",callback:function(t){return t.toFixed(2)+"%"}}}]},tooltips:{displayColors:!1,callbacks:{title:function(t,e){var label=t[0].label;return"期間: ".concat(label)},label:function(t,data){var e=data.datasets[t.datasetIndex],r="".concat(e.data[t.index],"%");return"利用者数との相対値: ".concat(r)}}}}};return data},head:function(){return{title:"奈良県内の最新感染動向"}}},W=(r(666),r(460)),I=r(461),M=Object(f.a)(N,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"MainPage"},[r("page-header",{attrs:{icon:t.headerItem.icon,title:t.headerItem.title,date:t.headerItem.date}}),t._v(" "),r("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems}}),t._v(" "),r("v-row",{staticClass:"DataBlock"},[r("confirmed-cases-details-card",{attrs:{"source-url":"http://www.pref.nara.jp/","source-text":"奈良県緊急版トップページ"}}),t._v(" "),r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("time-bar-chart",{attrs:{title:"陽性者数","title-id":"number-of-confirmed-cases","chart-id":"time-bar-chart-patients","chart-data":t.patientsGraph,date:t.Data.patients.date,unit:"人",url:"http://www.pref.nara.jp/","source-url":"http://www.pref.nara.jp/1652.htm","source-text":"奈良県疾病課最新情報"}})],1),t._v(" "),r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("data-table",{attrs:{title:"陽性者の属性","title-id":"attributes-of-confirmed-cases","chart-data":t.patientsTable,"chart-option":{},date:t.Data.patients.date,info:t.sumInfoOfPatients,url:"http://www.pref.nara.jp/","source-url":"http://www.pref.nara.jp/1652.htm","source-text":"奈良県疾病課最新情報"}})],1),t._v(" "),r("patients-and-sickbeds",{attrs:{"source-url":"http://www.pref.nara.jp/","source-text":"奈良県緊急版トップページ"}})],1)],1)}),[],!1,null,"b7a3107c",null);e.default=M.exports;x()(M,{VCol:W.a,VRow:I.a})}}]);