(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{327:function(t,e,n){"use strict";n.r(e);n(33),n(42);var r=n(9),o=(n(43),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("posts").only(["title","description","slug","updatedAt"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{posts:r});case 5:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),c=n(27),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blog"},[e("h2",[t._v("Notes")]),t._v(" "),e("ul",t._l(t.posts,(function(n,i){return e("li",{key:i},[e("NuxtLink",{staticClass:"post card",attrs:{to:{name:"notes-slug",params:{slug:n.slug}}}},[e("h3",{staticClass:"title"},[t._v(t._s(n.title))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(n.description))]),t._v(" "),e("p",{staticClass:"updated-at"},[t._v(t._s(t.formatDate(n.updatedAt)))])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);