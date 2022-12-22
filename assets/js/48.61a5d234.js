(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1142:function(t,v,_){"use strict";_.r(v);var a=_(3),s=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"_1-vue-与模版"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-vue-与模版"}},[t._v("#")]),t._v(" 1.vue 与模版")]),t._v(" "),v("h2",{attrs:{id:"使用步骤"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#使用步骤"}},[t._v("#")]),t._v(" 使用步骤")]),t._v(" "),v("ol",[v("li",[t._v("编写模版")]),t._v(" "),v("li",[t._v("创建 vue 实例")])]),t._v(" "),v("p",[t._v("在 vue 构造函数中提供需要使用的数据，比如 data，method，computed，watch，props。")]),t._v(" "),v("p",[t._v("el 代表将这个 vue 实例和页面中哪个 DOM 元素绑定在一起")]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("将 vue 挂载到页面中（mount）")])]),t._v(" "),v("p",[v("img",{attrs:{src:_(670),alt:""}})]),t._v(" "),v("h2",{attrs:{id:"数据驱动模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据驱动模型"}},[t._v("#")]),t._v(" 数据驱动模型")]),t._v(" "),v("p",[t._v("Vue 的执行流程")]),t._v(" "),v("ol",[v("li",[t._v("获得模版：模版中有‘坑’")]),t._v(" "),v("li",[t._v("利用 vue 构造函数中的数据填坑 -> 得到可以在页面中显示的标签")]),t._v(" "),v("li",[t._v("将标签替换页面中原来有坑的标签")])]),t._v(" "),v("p",[t._v("实现原理")]),t._v(" "),v("ol",[v("li",[t._v("拿到模版")]),t._v(" "),v("li",[t._v("拿到数据")]),t._v(" "),v("li",[t._v("将数据和模版结合，生成 HTML 标签")]),t._v(" "),v("li",[t._v("放到页面中")])]),t._v(" "),v("h2",{attrs:{id:"vdom"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vdom"}},[t._v("#")]),t._v(" VDOM")]),t._v(" "),v("h2",{attrs:{id:"克里化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#克里化"}},[t._v("#")]),t._v(" 克里化")]),t._v(" "),v("p",[t._v("为什么要使用柯里化？为了提升性能，可以缓存一部分能力")]),t._v(" "),v("p",[t._v("案例：")]),t._v(" "),v("p",[t._v("VUE 本质是使用 HTML 的 DOM 字符串作为模版->抽象语法树->虚拟 DOM")]),t._v(" "),v("p",[t._v("JS 怎么养判断哪些标签是 HTML 原生？哪些标签是自定义？\n使用一个 HASPMAP 存储所有 HTML 原生标签，利用闭包")]),t._v(" "),v("h2",{attrs:{id:"原生实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原生实现"}},[t._v("#")]),t._v(" 原生实现")]),t._v(" "),v("p",[t._v("VUE 也使用这样的二次提交设计结构")]),t._v(" "),v("ol",[v("li",[t._v("DOM 和虚拟 DOM 是一一对应的关系")]),t._v(" "),v("li",[t._v("先由 AST 和数据生成新的 VNODE（render）")]),t._v(" "),v("li",[t._v("将新的 VNODE 和旧的 VNODE 进行比较（diff），然后更新（update）\n每次改变数据都会生成一个新的 VDOM。然后将新的 VDOM 和页面上已经存在的 VDOM 进行比较，在这个比对过程中发现不同就更新到 VDOM 上")])]),t._v(" "),v("blockquote",[v("p",[t._v("缓存的是抽象语法树")])]),t._v(" "),v("p",[t._v("mount 挂载：内部执行 render+update\nrender：生成虚拟 DOM（有缓存功能）。利用抽象语法树和数据结合生成虚拟 DOM\nupdate：将 VDOM 渲染到页面上")]),t._v(" "),v("p",[v("img",{attrs:{src:_(671),alt:""}})]),t._v(" "),v("p",[t._v("数据库事务是什么概念？原子性，一致性，完整性")]),t._v(" "),v("p",[t._v("比如 A 给 B 赚钱 100。内存更新完成后，一次性写到硬盘上去")]),t._v(" "),v("p",[v("img",{attrs:{src:_(672),alt:""}})]),t._v(" "),v("p",[t._v("DIFF 算法基本思想思想是先遍历就的 VDOM 属性，看新的 VDOM 有没有那个值，如果有就比较，然后更新。如果没有就从旧的 VDOM 删除掉。然后再遍历新的 VDOM，把旧的 VDOM 没有的部分加过去")])])}),[],!1,null,null,null);v.default=s.exports},670:function(t,v,_){t.exports=_.p+"assets/img/1.f4858a86.png"},671:function(t,v,_){t.exports=_.p+"assets/img/3.60cc943a.png"},672:function(t,v,_){t.exports=_.p+"assets/img/2.3e4cafa1.png"}}]);