(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"05ce":function(e,t,i){},"0dbb":function(e,t,i){"use strict";var a=i("253d"),n=i.n(a);n.a},1345:function(e,t,i){"use strict";var a=i("a85b"),n=i.n(a);n.a},1831:function(e,t,i){},2036:function(e,t,i){},"253d":function(e,t,i){},"2ec9":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("my-header",{attrs:{"header-title":e.headerTitle}}),i("file-list",{attrs:{fileList:e.videoList}})],1)},n=[],s=i("9839"),l=i("504e"),c={name:"MyVideo",data:function(){return{headerTitle:"Video",videoList:[{id:"1",name:"自我介绍",author:"bruski",type:"mp4",uploadTime:"2019-01-11",path:"./assets/论文.doc"},{id:"2",name:"毕业论文",author:"bruski",type:"avi",uploadTime:"2019-01-11",path:"./assets/论文.doc"},{id:"3",name:"帅气指南",author:"bruski",type:"mp4",uploadTime:"2019-01-11",path:"./assets/论文.doc"}]}},components:{MyHeader:s["a"],FileList:l["a"]}},o=c,r=(i("549a"),i("2877")),u=Object(r["a"])(o,a,n,!1,null,"09a591c1",null);u.options.__file="MyVideo.vue";t["default"]=u.exports},"2f20":function(e,t,i){"use strict";var a=i("05ce"),n=i.n(a);n.a},"504e":function(e,t,i){"use strict";var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"file-list"},[e.fileList.length>0?[i("ul",e._l(e.fileList,function(t){return i("li",{key:t.id,class:[e.checkActive(t.id)?"active":""],on:{click:function(i){e.selectFile(t)}}},[i("div",{staticClass:"file-wrap"},[e._m(0,!0),i("div",{staticClass:"file-content"},[i("div",{staticClass:"file-content-wrap"},[i("h3",{staticClass:"file-name"},[e._v("\n                "+e._s(t.author)+" - "+e._s(t.name)+"."+e._s(t.type)+"\n              ")]),i("p",{staticClass:"file-uploadtime"},[e._v("\n                "+e._s(t.uploadTime)+"\n              ")])])])])])}),0),null!==e.selectedFile?i("edit-tabs",{attrs:{tabList:e.editList},on:{tabClick:e.tabClick}}):e._e(),e.isShowInfo?i("file-info-panel",{attrs:{file:e.selectedFile},on:{closeInfo:e.closeInfo}}):e._e()]:[e._m(1)]],2)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"file-header"},[a("img",{staticClass:"file-type-img",attrs:{src:i("cf05"),alt:""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"no-file"},[i("h3",[e._v("没有文件")]),i("p",[e._v('点击右下角"+"按扭上传文件')])])}],s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"info-page"},[i("div",{staticClass:"info-wrap"},[i("div",{staticClass:"info-panel"},[i("div",{staticClass:"info-header"},[i("h3",[e._v(e._s(e.file.author)+" - "+e._s(e.file.name)+"."+e._s(e.file.type))])]),i("div",{staticClass:"info-content"},e._l(e.fileInfo,function(t,a){return i("p",{key:a,staticClass:"info-type"},[e._v("\n          "+e._s(e.nameMapping(a))+": "+e._s(t)+"\n        ")])}),0)]),i("button",{staticClass:"btn-close",on:{click:e.closeInfo}},[e._v("x")])])])},l=[],c={name:"FileInfo",props:{file:{type:Object,default:null}},data:function(){return{}},computed:{fileInfo:function(){var e={};for(var t in this.file)"id"!==t&&"name"!==t&&(e[t]=this.file[t]);return e}},methods:{closeInfo:function(){this.$emit("closeInfo")},nameMapping:function(e){switch(e){case"author":return"作者";case"type":return"类型";case"uploadTime":return"上传时间";case"path":return"文件位置";default:return e}}},components:{}},o=c,r=(i("2f20"),i("2877")),u=Object(r["a"])(o,s,l,!1,null,"0ea38d21",null);u.options.__file="FileInfoPanel.vue";var f=u.exports,d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"bottom-tabs"},[i("ul",{staticClass:"tabs-wrap"},e._l(e.tabList,function(t,a){return i("li",{key:a,on:{click:function(t){e.tabClick(a)}}},[e._v("\n      "+e._s(t.name)+"\n    ")])}),0)])},p=[],h={name:"EditTabs",props:{tabList:{type:Array,default:null}},data:function(){return{isActive:2}},methods:{switchPage:function(e,t){this.$router.push(e),this.isActive=t},tabClick:function(e){this.$emit("tabClick",e)}}},m=h,v=(i("6d30"),Object(r["a"])(m,d,p,!1,null,"b67ffe78",null));v.options.__file="EditTabs.vue";var _=v.exports,b={name:"fileList",components:{EditTabs:_,FileInfoPanel:f},props:{fileList:{type:Array,default:function(){return[]}}},data:function(){return{editList:[{name:"查看详情"},{name:"下载"},{name:"删除"},{name:"取消选择"}],selectedFile:null,isShowInfo:!1}},computed:{},methods:{selectFile:function(e){null===this.selectedFile?this.selectedFile=e:this.selectedFile.id!==e.id?this.selectedFile=e:this.selectedFile=null},checkActive:function(e){return null!==this.selectedFile&&this.selectedFile.id===e},checkoutFile:function(){this.isShowInfo=!0},downloadFile:function(){},deleteFile:function(){},cancelSelect:function(){this.selectedFile=null},tabClick:function(e){switch(e){case 0:this.checkoutFile();break;case 1:break;case 2:break;case 3:this.cancelSelect();break;default:break}},closeInfo:function(){this.isShowInfo=!1}}},y=b,k=(i("f541"),Object(r["a"])(y,a,n,!1,null,"97ca466c",null));k.options.__file="FileList.vue";t["a"]=k.exports},"549a":function(e,t,i){"use strict";var a=i("ab65"),n=i.n(a);n.a},"6d30":function(e,t,i){"use strict";var a=i("d545"),n=i.n(a);n.a},9998:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("my-header",{attrs:{"header-title":e.headerTitle}}),i("file-list",{attrs:{fileList:e.docList}})],1)},n=[],s=i("9839"),l=i("504e"),c={name:"MyDoc",data:function(){return{headerTitle:"Documents",docList:[]}},components:{MyHeader:s["a"],FileList:l["a"]}},o=c,r=(i("0dbb"),i("2877")),u=Object(r["a"])(o,a,n,!1,null,"d253ed5c",null);u.options.__file="MyDoc.vue";t["default"]=u.exports},a85b:function(e,t,i){},ab65:function(e,t,i){},b5d3:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("my-header",{attrs:{"header-title":e.headerTitle}}),i("file-list",{attrs:{fileList:e.musicList}})],1)},n=[],s=i("9839"),l=i("504e"),c={name:"MyMusic",data:function(){return{headerTitle:"Music",musicList:[{id:"1",name:"苦行僧",author:"GAI",type:"mp3",uploadTime:"2019-01-11",path:"./assets/1.mp3"},{id:"2",name:"时间是金",author:"王闪火",type:"mp3",uploadTime:"2019-01-11",path:"./assets/1.mp3"},{id:"3",name:"小人物",author:"艾热",type:"mp3",uploadTime:"2019-01-11",path:"./assets/1.mp3"}]}},components:{MyHeader:s["a"],FileList:l["a"]}},o=c,r=(i("1345"),i("2877")),u=Object(r["a"])(o,a,n,!1,null,"42076110",null);u.options.__file="MyMusic.vue";t["default"]=u.exports},c6a9:function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("my-header",{attrs:{"header-title":e.headerTitle}}),i("file-list",{attrs:{fileList:e.photoList}})],1)},n=[],s=(i("cadf"),i("551c"),i("097d"),i("9839")),l=i("504e"),c={name:"MyPhoto",data:function(){return{headerTitle:"Photo",photoList:[{id:"1",name:"苦行僧",author:"GAI",type:"jpg",uploadTime:"2019-01-11",path:"./assets/1.mp3"},{id:"2",name:"时间是金",author:"王闪火",type:"png",uploadTime:"2019-01-11",path:"./assets/1.mp3"},{id:"3",name:"小人物",author:"艾热",type:"gif",uploadTime:"2019-01-11",path:"./assets/1.mp3"}]}},components:{MyHeader:s["a"],FileList:l["a"]}},o=c,r=(i("e6bb"),i("2877")),u=Object(r["a"])(o,a,n,!1,null,"20e6109f",null);u.options.__file="MyPhoto.vue";t["default"]=u.exports},d545:function(e,t,i){},e6bb:function(e,t,i){"use strict";var a=i("1831"),n=i.n(a);n.a},f541:function(e,t,i){"use strict";var a=i("2036"),n=i.n(a);n.a}}]);
//# sourceMappingURL=about.475c74f3.js.map