(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{392:function(e,a,n){"use strict";n.r(a);var t=n(31),s=n(394),r=n.n(s),i=n(116),u=n(121),o=n(396),c=n(411);function h(e,a,n,t,s,r,i){try{var u=e[r](i),o=u.value}catch(e){return void n(e)}u.done?a(o):Promise.resolve(o).then(t,s)}var d={name:"Shares",components:{Avatar:n.n(c).a},data:function(){return{uniqueShareUIDs:[],uidDisplaynameMap:{},isLoading:!0}},computed:{isEmptyList:function(){return!1===this.isLoading&&0===this.uniqueShareUIDs.length}},mounted:function(){var e,a=this;return(e=regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(i.generateOcsUrl)("/apps/files_sharing/api/v1/shares?format=json&shared_with_me=false"),s=Object(u.getCurrentUser)().uid,e.prev=2,e.next=5,r.a.get(n);case 5:e.sent.data.ocs.data.forEach((function(e){if(e.share_with!==s)switch(e.share_type){case 0:-1===a.uniqueShareUIDs.indexOf(e.share_with)&&(a.uniqueShareUIDs.push(e.share_with),t.default.set(a.uidDisplaynameMap,e.share_with,e.share_with_displayname))}})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.error(e.t0),Object(o.a)("Error loading information about shares.");case 13:return e.prev=13,a.isLoading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[2,9,13,16]])})),function(){var a=this,n=arguments;return new Promise((function(t,s){var r=e.apply(a,n);function i(e){h(r,t,s,i,u,"next",e)}function u(e){h(r,t,s,i,u,"throw",e)}i(void 0)}))})()}},p=n(395),l=Object(p.a)(d,(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"who-has-access"},[n("span",{staticClass:"icon icon-loading",class:{hidden:!e.isLoading}}),e._v(" "),n("span",{class:{hidden:!e.isEmptyList}},[e._v("\n\t\t"+e._s(e.$t("privacy","You don't have any shares with individual users."))+"\n\t")]),e._v(" "),e._l(e.uniqueShareUIDs,(function(a){return n("Avatar",{key:a,attrs:{user:a,"display-name":e.uidDisplaynameMap[a],size:64,"show-user-status":!1}})}))],2)}),[],!1,null,null,null);a.default=l.exports}}]);
//# sourceMappingURL=9-9ea6a34ed60ea48eec27.js.map