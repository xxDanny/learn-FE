(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{1197:function(t,_,a){"use strict";a.r(_);var r=a(3),v=Object(r.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"q-a"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#q-a"}},[t._v("#")]),t._v(" Q&A")]),t._v(" "),_("ol",[_("li",[t._v("如何学习？")])]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("See More")]),t._v(" "),_("p",[t._v("我会去 Udemy/coursera 上学习自己感兴趣的课程，比如 TDD 我就是在上面学习的。\nfreecodecamp 阅读技术文章\n在 codewar 上进行一些编码练习")])]),t._v(" "),_("ol",{attrs:{start:"2"}},[_("li",[t._v("项目优化")])]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("See More")]),t._v(" "),_("p",[t._v("官方文档老师出现文字排版错误，人工 cr 可能也会出现这类错误，思考如何规避这类错误？\n找到了 panggu-markdown 这个插件，配置来自动添加中英文空格")]),t._v(" "),_("blockquote",[_("p",[_("a",{attrs:{href:"https://wiki-power.com/VSCode%E7%94%9F%E4%BA%A7%E5%8A%9B%E6%8C%87%E5%8D%97-%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE#markdown",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("VS Code 生产力指南 - 环境配置"),_("OutboundLink")],1)])])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("项目中遇到的问题")])]),t._v(" "),_("details",{staticClass:"custom-block details"},[_("summary",[t._v("See More")]),t._v(" "),_("ul",[_("li",[t._v("配置目录文件，README 不能写出来而是要用 "),_("code",[t._v("/")]),t._v(" 代替")])])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("开发工具 svn 和 git 有啥区别")]),t._v(" "),_("li",[t._v("安卓是原生的开发还是")]),t._v(" "),_("li",[t._v("nginx 是你部署的么，会配置么")]),t._v(" "),_("li",[t._v("项目打出来的包都比较大，你关注过吗")]),t._v(" "),_("li",[t._v("常用 window 对象中的哪些方法")])]),t._v(" "),_("p",[t._v(":::tips 题库")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://fe.ecool.fun/topic-answer/9c119d14-fe3b-4f23-9a51-222c50529890",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("前端题库"),_("OutboundLink")],1),t._v("\n:::")])]),t._v(" "),_("p",[t._v("在项目进行性能优化时，重新深入学习了浏览器原理，并且学会利用开发者工具的 Timeline 面板分析页面性能。")]),t._v(" "),_("h2",{attrs:{id:"说一下-tcp-ip-协议-以及每层的作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#说一下-tcp-ip-协议-以及每层的作用"}},[t._v("#")]),t._v(" 说一下 TCP/IP 协议？以及每层的作用？")]),t._v(" "),_("p",[t._v("TCP/IP 包含四层模型，从上层往下层分别是：应用层、传输层、网络层、数据链路层。些资料也会说 TCP/IP 是五层模型，所谓的五层模型指的是在数据链路层下面还有一个物理层，而作为软件工程师一般不需要关注物理层，所以通常我们说 TCP/IP 四层模型更多一些。")]),t._v(" "),_("ol",[_("li",[_("p",[t._v("应用层\n应用层的作用是负责应用程序间的数据通讯的。 不同的网络应用需要不同的应用层协议，比如电子邮件传输 SMTP 协议、文件传输 FTP 协议、网络远程访问 Telnet 协议等等。")])]),t._v(" "),_("li",[_("p",[t._v("传输层\n传输层的主要作用是负责两台主机间的数据传输的。 如传输控制协议 (TCP)，能够确保数据可靠的从源主机发送到目标主机。")])])]),t._v(" "),_("p",[t._v("传输层的常见协议有以下两个：")]),t._v(" "),_("ul",[_("li",[t._v("TCP 协议（Transmission Control Protocol，传输控制协议）：提供了稳定的、需要连接的、面向字节流的协议。")]),t._v(" "),_("li",[t._v("UDP 协议（User Datagram Protocol，用户数据协议）：提供了无连接的、不稳定的、面向数据报的协议。")])]),t._v(" "),_("ol",{attrs:{start:"3"}},[_("li",[t._v("网络层")])]),t._v(" "),_("p",[t._v("网络层的作用是负责网络上的地址管理和路由选择的。")]),t._v(" "),_("p",[t._v("在数据通讯时，可以选择很多条路径（抵达目的地的），比如从西安到北京，可以选择先从西安 -> 太原 -> 北京，也可以选择从西安 -> 郑州 -> 石家庄 -> 北京，还可以选择从西安 -> 延安 -> 呼和浩特 -> 张家口 -> 北京，究竟选择那一条路呢？这就是网络层负责的。")]),t._v(" "),_("ol",{attrs:{start:"4"}},[_("li",[_("p",[t._v("数据链路层\n数据链路层的作用是负责设备之间的数据帧的传送和识别的。 数据在传输时需要经过多个设备进行数据传输，而数据链路层就是负责相邻设备间的数据传输和识别的。\n数据链路层可以完全消除网络层和物理层之间的不同，将数据在链路层进行有效的识别和传输")])]),t._v(" "),_("li",[_("p",[t._v("物理层（可选）\n物理层的作用是负责将数据转换成信号，再将信号转换为数据的。 转换方法因通讯媒体不同而不同，所以没有特定的协议")])])]),t._v(" "),_("h2",{attrs:{id:"子网划分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#子网划分"}},[t._v("#")]),t._v(" 子网划分")]),t._v(" "),_("p",[t._v("最初设计互联网络时，Internet 委员会定义了 5 种 IP 地址类型以适合不同容量的网络。")]),t._v(" "),_("p",[t._v("基本思路：")]),t._v(" "),_("p",[t._v("子网划分是在分类的 IP 基础上提出的，对于分类 IP 其网络位已确定，想进一步进行子网划分，则考虑借用主机位作为子网位，从而形成三层地址结构，即网络位，子网位，主机位，利用网络位与子网位共同来标识网段。")]),t._v(" "),_("h2",{attrs:{id:"手上几个-offer"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#手上几个-offer"}},[t._v("#")]),t._v(" 手上几个 offer")]),t._v(" "),_("p",[t._v("我目前手上有 2 个 offer，但是我更倾向于咱们公司的岗位，不管是发展前景还是岗位方向，咱们公司都是我最理想的选择。")]),t._v(" "),_("p",[t._v("最近我刚刚开始寻找工作机会，有两家公司刚通过终面。")]),t._v(" "),_("h2",{attrs:{id:"你选择加入民生科技的原因是什么-你觉得加入民生科技对你的职业帮助大吗"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#你选择加入民生科技的原因是什么-你觉得加入民生科技对你的职业帮助大吗"}},[t._v("#")]),t._v(" 你选择加入民生科技的原因是什么？你觉得加入民生科技对你的职业帮助大吗？")]),t._v(" "),_("p",[t._v("喜欢这个公司，对自己帮助很大。公司相对还不错，还算发展比较好的传统银行科技类公司。能帮助自己学习到很多东西。")])])}),[],!1,null,null,null);_.default=v.exports}}]);