webpackJsonp([0],{"0ySe":function(e,t){},"0yoX":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("U0O9"),n=i("g0mL"),a={name:"MyPhoto",data:function(){return{headerTitle:"Photo",photoList:[{id:"1",name:"苦行僧",author:"GAI",type:"jpg",uploadTime:"2019-01-11",path:"./assets/1.mp3"},{id:"2",name:"时间是金",author:"王闪火",type:"png",uploadTime:"2019-01-11",path:"./assets/1.mp3"},{id:"3",name:"小人物",author:"艾热",type:"gif",uploadTime:"2019-01-11",path:"./assets/1.mp3"}]}},components:{MyHeader:s.a,FileList:n.a}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("my-header",{attrs:{"header-title":this.headerTitle}}),this._v(" "),t("file-list",{attrs:{fileList:this.photoList}})],1)},staticRenderFns:[]};var c=i("VU/8")(a,l,!1,function(e){i("DuDl")},"data-v-20e6109f",null);t.default=c.exports},AErM:function(e,t){},DuDl:function(e,t){},KQHf:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("U0O9"),n=i("g0mL"),a={name:"MyMusic",data:function(){return{headerTitle:"Music",musicList:[{id:"1",name:"苦行僧",author:"GAI",type:"mp3",uploadTime:"2019-01-11",path:"./assets/1.mp3"},{id:"2",name:"时间是金",author:"王闪火",type:"mp3",uploadTime:"2019-01-11",path:"./assets/1.mp3"},{id:"3",name:"小人物",author:"艾热",type:"mp3",uploadTime:"2019-01-11",path:"./assets/1.mp3"}]}},components:{MyHeader:s.a,FileList:n.a}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("my-header",{attrs:{"header-title":this.headerTitle}}),this._v(" "),t("file-list",{attrs:{fileList:this.musicList}})],1)},staticRenderFns:[]};var c=i("VU/8")(a,l,!1,function(e){i("xxdp")},"data-v-42076110",null);t.default=c.exports},LvBd:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("U0O9"),n=i("g0mL"),a={name:"MyVideo",data:function(){return{headerTitle:"Video",videoList:[{id:"1",name:"自我介绍",author:"bruski",type:"mp4",uploadTime:"2019-01-11",path:"./assets/论文.doc"},{id:"2",name:"毕业论文",author:"bruski",type:"avi",uploadTime:"2019-01-11",path:"./assets/论文.doc"},{id:"3",name:"帅气指南",author:"bruski",type:"mp4",uploadTime:"2019-01-11",path:"./assets/论文.doc"}]}},components:{MyHeader:s.a,FileList:n.a}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("my-header",{attrs:{"header-title":this.headerTitle}}),this._v(" "),t("file-list",{attrs:{fileList:this.videoList}})],1)},staticRenderFns:[]};var c=i("VU/8")(a,l,!1,function(e){i("0ySe")},"data-v-09a591c1",null);t.default=c.exports},"WUU/":function(e,t){},"d/Kw":function(e,t){},g0mL:function(e,t,i){"use strict";var s={name:"FileInfo",props:{file:{type:Object,default:null}},data:function(){return{}},computed:{fileInfo:function(){var e={};for(var t in this.file)"id"!==t&&"name"!==t&&(e[t]=this.file[t]);return e}},methods:{closeInfo:function(){this.$emit("closeInfo")},nameMapping:function(e){switch(e){case"author":return"作者";case"type":return"类型";case"uploadTime":return"上传时间";case"path":return"文件位置";default:return e}}},components:{}},n={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"info-page"},[i("div",{staticClass:"info-wrap"},[i("div",{staticClass:"info-panel"},[i("div",{staticClass:"info-header"},[i("h3",[e._v(e._s(e.file.author)+" - "+e._s(e.file.name)+"."+e._s(e.file.type))])]),e._v(" "),i("div",{staticClass:"info-content"},e._l(e.fileInfo,function(t,s){return i("p",{key:s,staticClass:"info-type"},[e._v("\n          "+e._s(e.nameMapping(s))+": "+e._s(t)+"\n        ")])}),0)]),e._v(" "),i("button",{staticClass:"btn-close",on:{click:e.closeInfo}},[e._v("x")])])])},staticRenderFns:[]};var a=i("VU/8")(s,n,!1,function(e){i("d/Kw")},"data-v-0ea38d21",null).exports,l={name:"EditTabs",props:{tabList:{type:Array,default:null}},data:function(){return{isActive:2}},methods:{switchPage:function(e,t){this.$router.push(e),this.isActive=t},tabClick:function(e){this.$emit("tabClick",e)}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bottom-tabs"},[i("ul",{staticClass:"tabs-wrap"},e._l(e.tabList,function(t,s){return i("li",{key:s,on:{click:function(t){e.tabClick(s)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])}),0)])},staticRenderFns:[]};var r={name:"fileList",components:{EditTabs:i("VU/8")(l,c,!1,function(e){i("AErM")},"data-v-b67ffe78",null).exports,FileInfoPanel:a},props:{fileList:{type:Array,default:function(){return[]}}},data:function(){return{editList:[{name:"查看详情"},{name:"下载"},{name:"删除"},{name:"取消选择"}],selectedFile:null,isShowInfo:!1}},computed:{},methods:{selectFile:function(e){null===this.selectedFile?this.selectedFile=e:this.selectedFile.id!==e.id?this.selectedFile=e:this.selectedFile=null},checkActive:function(e){return null!==this.selectedFile&&this.selectedFile.id===e},checkoutFile:function(){this.isShowInfo=!0},downloadFile:function(){},deleteFile:function(){},cancelSelect:function(){this.selectedFile=null},tabClick:function(e){switch(e){case 0:this.checkoutFile();break;case 1:case 2:break;case 3:this.cancelSelect()}},closeInfo:function(){this.isShowInfo=!1}}},o={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"file-list"},[e.fileList.length>0?[i("ul",e._l(e.fileList,function(t){return i("li",{key:t.id,class:[e.checkActive(t.id)?"active":""],on:{click:function(i){e.selectFile(t)}}},[i("div",{staticClass:"file-wrap"},[e._m(0,!0),e._v(" "),i("div",{staticClass:"file-content"},[i("div",{staticClass:"file-content-wrap"},[i("h3",{staticClass:"file-name"},[e._v("\n                "+e._s(t.author)+" - "+e._s(t.name)+"."+e._s(t.type)+"\n              ")]),e._v(" "),i("p",{staticClass:"file-uploadtime"},[e._v("\n                "+e._s(t.uploadTime)+"\n              ")])])])])])}),0),e._v(" "),null!==e.selectedFile?i("edit-tabs",{attrs:{tabList:e.editList},on:{tabClick:e.tabClick}}):e._e(),e._v(" "),e.isShowInfo?i("file-info-panel",{attrs:{file:e.selectedFile},on:{closeInfo:e.closeInfo}}):e._e()]:[e._m(1)]],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"file-header"},[t("img",{staticClass:"file-type-img",attrs:{src:i("7Otq"),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"no-file"},[t("h3",[this._v("没有文件")]),this._v(" "),t("p",[this._v('点击右下角"+"按扭上传文件')])])}]};var u=i("VU/8")(r,o,!1,function(e){i("WUU/")},"data-v-97ca466c",null);t.a=u.exports},l0YO:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("U0O9"),n=i("g0mL"),a={name:"MyDoc",data:function(){return{headerTitle:"Documents",docList:[]}},components:{MyHeader:s.a,FileList:n.a}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("my-header",{attrs:{"header-title":this.headerTitle}}),this._v(" "),t("file-list",{attrs:{fileList:this.docList}})],1)},staticRenderFns:[]};var c=i("VU/8")(a,l,!1,function(e){i("noZp")},"data-v-d253ed5c",null);t.default=c.exports},noZp:function(e,t){},xxdp:function(e,t){}});
//# sourceMappingURL=0.a914ef2532280d8674ac.js.map