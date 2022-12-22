(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1117:function(e,t,a){"use strict";a.r(t);var s=a(3),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"浏览器缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#浏览器缓存"}},[e._v("#")]),e._v(" 浏览器缓存")]),e._v(" "),t("p",[e._v("浏览器有 reponse 响应头决定缓存策略\n"),t("img",{attrs:{src:a(621),alt:""}})]),e._v(" "),t("p",[e._v("那浏览器根据什么规则缓存呢？")]),e._v(" "),t("ol",[t("li",[e._v("新鲜度（过期机制）：也就是缓存副本有效期。一个缓存副本必须满足以下条件，浏览器会认为它是有效的，足够新的\n"),t("ul",[t("li",[e._v("含有完整的过期时间控制头信息（HTTP 协议报头），并且仍在有效期内；(last modified / if-modified-since)")]),e._v(" "),t("li",[e._v("浏览器已经使用过这个缓存副本，并且在一个会话中已经检查过新鲜度；")])])]),e._v(" "),t("li",[e._v("校验值（验证机制）：服务器返回资源的时候有时在控制头信息带上这个资源的实体标签 Etag（Entity Tag），它可以用来作为浏览器再次请求过程的校验标识。如果发现校验标识不匹配，说明资源已经被修改或过期，浏览器需求重新获取资源内容。")])]),e._v(" "),t("h2",{attrs:{id:"http-缓存的两个阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-缓存的两个阶段"}},[e._v("#")]),e._v(" HTTP 缓存的两个阶段")]),e._v(" "),t("p",[e._v("浏览器缓存一般分为两类：强缓存（也称本地缓存）和协商缓存（也称弱缓存）。")]),e._v(" "),t("h3",{attrs:{id:"强缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#强缓存"}},[e._v("#")]),e._v(" 强缓存")]),e._v(" "),t("p",[e._v("浏览器发送请求前，会先去缓存里查看是否命中强缓存，如果命中，则直接从缓存中读取资源，不会发送请求到服务器。否则，进入下一步。")]),e._v(" "),t("h3",{attrs:{id:"协商缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#协商缓存"}},[e._v("#")]),e._v(" 协商缓存")]),e._v(" "),t("p",[e._v("当强缓存没有命中时，浏览器一定会向服务器发起请求。服务器会根据 "),t("code",[e._v("Request Header")]),e._v(" 中的一些字段来判断是否命中协商缓存。如果命中，服务器会返回 304 响应，但是不会携带任何响应实体，只是告诉浏览器可以直接从浏览器缓存中获取这个资源。如果本地缓存和协商缓存都没有命中，则从直接从服务器加载资源。")]),e._v(" "),t("p",[t("img",{attrs:{src:a(622),alt:""}})]),e._v(" "),t("h2",{attrs:{id:"启用-关闭缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启用-关闭缓存"}},[e._v("#")]),e._v(" 启用&关闭缓存")]),e._v(" "),t("ol",[t("li",[e._v("使用 HTML Meta 标签 　　\nWeb 开发者可以在 HTML 页面的节点中加入标签，如下：")])]),e._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" mata http "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" equiv "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Chache-Control"')]),e._v("\ncontent "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"no-chache, no-stroe, must-revalidate"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("\n  meta http "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" equiv "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Pragma"')]),e._v("\ncontent "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"no-chache"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("\n  meta http "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" equiv "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Expires"')]),e._v("\ncontent "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0"')]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[e._v("上述代码的作用是告诉浏览器当前页面不被缓存，事实上这种禁用缓存的形式用处很有限：")]),e._v(" "),t("ul",[t("li",[e._v("仅有 IE 才能识别这段 meta 标签含义，其它主流浏览器仅识别“ Cache-Control: no-store ”的 meta 标签。")]),e._v(" "),t("li",[e._v("在 IE 中识别到该 meta 标签含义，并不一定会在请求字段加上 Pragma，但的确会让当前页面每次都发新请求（仅限页面，页面上的资源则不受影响）")])]),e._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[e._v("使用缓存有关的 HTTP 消息报头")])]),e._v(" "),t("p",[e._v("这里需要了解 HTTP 的基础知识。一个 URI 的完整 HTTP 协议交互过程是由 HTTP 请求和 HTTP 响应组成的。有关 HTTP 详细内容可参考《Hypertext Transfer Protocol — HTTP/1.1》、《HTTP 权威指南》等。")]),e._v(" "),t("p",[e._v("在 HTTP 请求和响应的消息报头中，常见的与缓存有关的消息报头有：\n"),t("img",{attrs:{src:a(623),alt:""}})]),e._v(" "),t("h2",{attrs:{id:"cache-control-vs-expires"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cache-control-vs-expires"}},[e._v("#")]),e._v(" Cache-Control VS Expires")]),e._v(" "),t("p",[e._v("Cache-Control：HTTP1.1 提出的特性，为了弥补 Expires 缺陷加入的，提供了更精确细致的缓存功能。")]),e._v(" "),t("p",[e._v("Expires：HTTP1.0 的特性，标识该资源过期的时间点，它是一个绝对值，格林威治时间（Greenwich Mean Time, GMT），即在这个时间点之后，缓存的资源过期；优先级：Cache-Control 优先级高于 Expires，为了兼容，通常两个头部同时设置；")]),e._v(" "),t("blockquote",[t("p",[e._v("浏览器默认行为：其实就算 "),t("code",[e._v("Response Header")]),e._v(" 中沒有设置 "),t("code",[e._v("Cache-Control")]),e._v(" 和 "),t("code",[e._v("Expires")]),e._v(" ，浏览器仍然会缓存某些资源，这是浏览器的默认行为，是为了提升性能进行的优化，每个浏览器的行为可能不一致，有些浏览器甚至没有这样的优化。")])]),e._v(" "),t("h2",{attrs:{id:"last-modified-vs-etag"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-modified-vs-etag"}},[e._v("#")]),e._v(" Last-Modified VS ETag")]),e._v(" "),t("p",[t("code",[e._v("Last-Modified(Response Header)")]),e._v(" 与 "),t("code",[e._v("If-Modified-Since(Request Header)")]),e._v(" 是一对报文头，属于 HTTP 1.0。")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("If-Modified-Since")]),e._v(" 是一个请求首部字段，并且只能用在 "),t("code",[e._v("GET")]),e._v(" 或者 "),t("code",[e._v("HEAD")]),e._v(" 请求中。")]),e._v(" "),t("li",[t("code",[e._v("Last-Modified")]),e._v(" 是一个响应首部字段，包含服务器认定的资源作出修改的日期及时间")])]),e._v(" "),t("p",[e._v("当带着 "),t("code",[e._v("If-Modified-Since")]),e._v(" 头访问服务器请求资源时，服务器会检查 "),t("code",[e._v("Last-Modified")]),e._v(" ，如果 "),t("code",[e._v("Last-Modified")]),e._v(" 的时间早于或等于 "),t("code",[e._v("If-Modified-Since")]),e._v(" 则会返回一个不带主体的 "),t("code",[e._v("304")]),e._v(" 响应，否则将重新返回资源。")]),e._v(" "),t("p",[t("img",{attrs:{src:a(624),alt:""}})]),e._v(" "),t("p",[e._v("由上图的请求，请求头中 If-Modified-Since 的时间为 05:12:21。 而响应头中的 "),t("code",[e._v("Last-Modified")]),e._v(" 为：07:06:18 因此资源已经更改了所以返回 200")]),e._v(" "),t("p",[t("code",[e._v("ETag")]),e._v(" 与 "),t("code",[e._v("If-None-Match")]),e._v(" 是一对报文头，属于 HTTP 1.1。")]),e._v(" "),t("ul",[t("li",[e._v("ETag 是一个响应首部字段，它是根据实体内容生成的一段 hash 字符串，标识资源的状态，由服务端产生。")]),e._v(" "),t("li",[e._v("If-None-Match 是一个条件式的请求首部。如果请求资源时在请求首部加上这个字段，值为之前服务器端返回的资源上的 ETag，则当且仅当服务器上没有任何资源的 ETag 属性值与这个首部中列出的时候，服务器才会返回带有所请求资源实体的 200 响应，否则服务器会返回不带实体的 304 响应。")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(625),alt:""}})]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("Last-Modified")]),e._v(" 标注的最后修改只能精确到秒级，如果某些文件在 1 秒钟以内，被修改多次的话，它将不能准确标注文件的新鲜度")])]),e._v(" "),t("h2",{attrs:{id:"缓存位置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存位置"}},[e._v("#")]),e._v(" 缓存位置")]),e._v(" "),t("p",[e._v("浏览器可以在内存、硬盘中开辟一个空间用于保存请求资源副本。我们经常调试时在 DevTools Network 里看到 "),t("code",[e._v("Memory Cache（內存缓存")]),e._v(" ）和 "),t("code",[e._v("Disk Cache（硬盘缓存")]),e._v(" ），指的就是缓存所在的位置。请求一个资源时，会按照优先级（Service Worker -> Memory Cache -> Disk Cache -> Push Cache）依次查找缓存，如果命中则使用缓存，否则发起请求。")]),e._v(" "),t("p",[e._v("这里先介绍 Memory Cache 和 Disk Cache。")]),e._v(" "),t("h3",{attrs:{id:"_200-from-memory-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_200-from-memory-cache"}},[e._v("#")]),e._v(" 200 from memory cache")]),e._v(" "),t("p",[e._v("表示不访问服务器，直接从内存中读取缓存。因为缓存的资源保存在内存中，所以读取速度较快，但是关闭进程后，缓存资源也会随之销毁，一般来说，系统不会给内存分配较大的容量，因此内存缓存一般用于存储较小文件。同时内存缓存在有时效性要求的场景下也很有用（比如浏览器的隐私模式）")]),e._v(" "),t("h3",{attrs:{id:"_200-from-disk-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_200-from-disk-cache"}},[e._v("#")]),e._v(" 200 from disk cache")]),e._v(" "),t("p",[e._v("表示不访问服务器，直接从硬盘中读取缓存。与内存相比，硬盘的读取速度相对较慢，但硬盘缓存持续的时间更长，关闭进程之后，缓存的资源仍然存在。由于硬盘的容量较大，因此一般用于存储大文件。")]),e._v(" "),t("p",[e._v("下图可清晰看出差别：")]),e._v(" "),t("p",[t("img",{attrs:{src:a(626),alt:""}})]),e._v(" "),t("h3",{attrs:{id:"_200-from-prefetch-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_200-from-prefetch-cache"}},[e._v("#")]),e._v(" 200 from prefetch cache")]),e._v(" "),t("p",[e._v("在 preload 或 prefetch 的资源加载时，两者也是均存储在 http cache，当资源加载完成后，如果资源是可以被缓存的，那么其被存储在 http cache 中等待后续使用；如果资源不可被缓存，那么其在被使用前均存储在 memory cache。\n"),t("img",{attrs:{src:a(627),alt:""}})]),e._v(" "),t("h3",{attrs:{id:"cdn-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cdn-cache"}},[e._v("#")]),e._v(" CDN Cache")]),e._v(" "),t("p",[e._v("以腾讯 CDN 为例：")]),e._v(" "),t("ul",[t("li",[e._v("X-Cache-Lookup: Hit From MemCache 表示命中 CDN 节点的内存；")]),e._v(" "),t("li",[e._v("X-Cache-Lookup: Hit From Disktank 表示命中 CDN 节点的磁盘；")]),e._v(" "),t("li",[e._v("X-Cache-Lookup: Hit From Upstream 表示没有命中 CDN。")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(628),alt:""}})]),e._v(" "),t("h2",{attrs:{id:"整体流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#整体流程"}},[e._v("#")]),e._v(" 整体流程")]),e._v(" "),t("p",[t("img",{attrs:{src:a(629),alt:""}})]),e._v(" "),t("p",[e._v("从上图能感受到整个流程，比如常见两种刷新场景：")]),e._v(" "),t("ul",[t("li",[e._v("当 F5 刷新网页时，跳过强缓存，但是会检查协商缓存；")]),e._v(" "),t("li",[e._v("当 Ctrl + F5 强制刷新页面时，直接从服务器加载，跳过强缓存和协商缓存")])]),e._v(" "),t("h2",{attrs:{id:"参考"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[e._v("#")]),e._v(" 参考")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.jiqizhixin.com/articles/2020-07-24-12",target:"_blank",rel:"nofollow noopener noreferrer"}},[t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.cn/post/7087900897526677534#heading-5",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("缓存与 PWA（实践篇）"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.asaki-m.com/blog/%E5%85%B3%E4%BA%8E%E5%BC%BA%E7%BC%93%E5%AD%98-%E5%8D%8F%E5%95%86%E7%BC%93%E5%AD%98%E7%9A%84%E5%AE%9E%E8%B7%B5.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("关于强缓存/协商缓存的实践"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://ltaoo.github.io/blog/2020/01/05/cache-control-in-nodejs/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("nodejs 中的 Cache-Control"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/55623075",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("图解 Http 缓存控制之 max-age=0、no-cache、no-store 区别"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s/DRN8zowskxUHrrAJ__stog",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("前端浏览器缓存知识梳理"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzAxODE2MjM1MA==&mid=2651554722&idx=2&sn=1fd2eef32a303056beecbe8b0da37512&chksm=80255463b752dd75ac981952e0bd5211939e52244776b55a044bc2eeb9ae2d6b1d9c3f2e16c6&scene=21#wechat_redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("一篇文章理解 Web 缓存"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports},621:function(e,t,a){e.exports=a.p+"assets/img/js1.0e104f57.png"},622:function(e,t,a){e.exports=a.p+"assets/img/js2.cfdba101.png"},623:function(e,t,a){e.exports=a.p+"assets/img/js3.b810f91d.png"},624:function(e,t,a){e.exports=a.p+"assets/img/js4.63353879.png"},625:function(e,t,a){e.exports=a.p+"assets/img/js5.d89cdd05.png"},626:function(e,t,a){e.exports=a.p+"assets/img/js6.4108ae98.png"},627:function(e,t,a){e.exports=a.p+"assets/img/js7.3ddbef0d.png"},628:function(e,t,a){e.exports=a.p+"assets/img/js8.9044e629.png"},629:function(e,t,a){e.exports=a.p+"assets/img/js9.1c4ab3dc.png"}}]);