(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1122:function(t,s,a){"use strict";a.r(s);var n=a(3),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"从零开始学习-tdd-测试驱动开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从零开始学习-tdd-测试驱动开发"}},[t._v("#")]),t._v(" 从零开始学习 TDD，测试驱动开发")]),t._v(" "),s("p",[t._v("测试的核心是“可测试“，可测试意味着好的代码架构，写出可测试代码是优良测试的必要条件。")]),t._v(" "),s("p",[t._v("Google Tech Talk 有一个很值得看的系列 👉 "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=RlfLCWKxHJ0&list=PLBEF062FC61F9395B",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("The Clean Code Talks - Don't Look For Things!"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"什么是-tdd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-tdd"}},[t._v("#")]),t._v(" 什么是 TDD")]),t._v(" "),s("p",[t._v("TDD 是 Test Driven Development（测试驱动开发）的缩写，是一种敏捷开发的实践。")]),t._v(" "),s("p",[t._v("TDD 主要由三个环节的迭代构成：\n"),s("img",{attrs:{src:a(635),alt:""}})]),t._v(" "),s("p",[t._v("TDD 方式要求开发者总是按照上述的三个环节进行软件开发：")]),t._v(" "),s("ol",[s("li",[t._v("根据需求编写测试用例，运行测试用例，你通不过，甚至编译都过不了")]),t._v(" "),s("li",[t._v("编写实现代码使测试用例通过。最重要的是快速通过测试，即使写点幼稚的实现")]),t._v(" "),s("li",[t._v("重构代码使实现更加干净，消除重复和依赖")])]),t._v(" "),s("p",[t._v("看起来就像这样：\n"),s("img",{attrs:{src:a(636),alt:""}})]),t._v(" "),s("p",[t._v("由于相当多的单元测试工具，在测试不通过时，使用红色警告，而在测试通过时，使用绿色祝贺。因此，在 TDD 中，也把这三个阶段分别称为： 红 / 绿 / 重构。")]),t._v(" "),s("h2",{attrs:{id:"tdd-中的-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tdd-中的-test"}},[t._v("#")]),t._v(" TDD 中的 TEST")]),t._v(" "),s("p",[t._v("TDD 中的测试，主要指单元测试（Unit Test），因此这对开发者的开发工作隐含了一个重要的设计约束：你设计的单元模块必须是可测试的。这一点的设计约束，通常会导向更松耦合的设计，这是好的一方面。")]),t._v(" "),s("p",[t._v("另一个需要指出的是，TDD 中的测试用例编写，不是测试那一队的人员来承担的，这是开发者的日常工作，不可缺少的例行工作。")]),t._v(" "),s("p",[t._v("有两个原因让开发人员必须承担这个工作：")]),t._v(" "),s("ul",[s("li",[t._v("其中一个原因，在于 TDD 要求频繁地、快速地测试，你不可能要求测试人员一天几十次来给你写测试用例，这不经济。")]),t._v(" "),s("li",[t._v("测试用例由开发人员编写的更重要的原因在于，在 TDD 实践中，开发工作（Development）是测试（Test）驱动的， 这实际上意味着，软件的设计思想的展开，是通过测试用例的设计，一步步推进的。这个工作显然不可能假手测试人员。")])]),t._v(" "),s("p",[t._v("💡TDD 的测试隐含的好处在于，每当你为软件引入新的特性实现，它会自动地跑一遍已有的全部测试用例（回归测试），这意味着你总是有信心你的软件在任何时候都拿得出手。")]),t._v(" "),s("h2",{attrs:{id:"tdd-中的-development"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tdd-中的-development"}},[t._v("#")]),t._v(" TDD 中的 Development")]),t._v(" "),s("p",[t._v("TDD 中的开发，是指的包含设计的开发，不是单纯的 CODING：你可以理解为，你的输入只有需求，没有既有的设计，你的输出是包含了你的设计思想的软件产品。\n在 TDD 中，开发工作划分到了两个阶段："),s("strong",[t._v("实现阶段")]),t._v("和"),s("strong",[t._v("重构阶段")]),t._v("。")]),t._v(" "),s("p",[t._v("❓为什么这么做？")]),t._v(" "),s("ol",[s("li",[t._v("快：引入新需求，测试用例跑不过，赶快实现")]),t._v(" "),s("li",[t._v("小步：回归测试")])]),t._v(" "),s("p",[t._v("一种解释是，因为 TDD 是小步快跑的方式来开发软件，它要求快速地响应小的变化：你的新的测试用例引入了变化，会导致你通不过测试，那么你就得尽快地编写实现代码来通过测试。至于实现的代码漂亮不漂亮，质量高不高，反正还有下一个阶段的重构呢。")]),t._v(" "),s("p",[t._v("其实更深层的原因，在于隐含的回归测试。随着开发的推进，你的测试用例越来越多，这意味着你每一次试图通过测试，都要避免破坏已经通过的测试。你得小心翼翼地修改你的即有代码，或者添加些新的代码，步子太大了，就很容易翻出历史旧账，导致你不由自主地步子小一些。")]),t._v(" "),s("h2",{attrs:{id:"tdd-中的-design"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tdd-中的-design"}},[t._v("#")]),t._v(" TDD 中的 Design")]),t._v(" "),s("p",[t._v("前面已经提到，TDD 中的开发中包含着设计职责。")]),t._v(" "),s("p",[t._v("实际上，在 TDD 的三个阶段中，都需要开发者进行设计方面的思考，编写代码，仅仅是最后的临门一脚。不过这三个阶段的思考侧重点有所不同。")]),t._v(" "),s("p",[s("strong",[t._v("外部设计")]),t._v("：在编写测试用例时，开发者思考的来源，更多的来自于对需求的满足的尝试，或者来自于你的 Scrum 看板的任务，或者来自于前一次迭代产生的新的特性灵感。测试用例的编写，实际上体现了设计者所思考的目标实现的外部行为（接口）特征。\n"),s("img",{attrs:{src:a(637),alt:""}})]),t._v(" "),s("p",[s("strong",[t._v("内部设计")]),t._v("：而在实现阶段，最重要的目标是在保证回归测试的前提下，如果才能快起来。因此这个阶段的设计思考，主要是对新引入接口的实现，如何尽量地做到不影响即有的代码。")]),t._v(" "),s("p",[s("strong",[t._v("优化设计")]),t._v("：重构阶段思考的重点在于实现的质量，比如消除冗余的代码，梳理出新的类关系等等，并且为下一个迭代提供新的特性需求，就像滚雪球一样。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"},[t._v("思考")]),s("p",[t._v("TDD 实践中，对软件产品的设计，可能发生在哪些时刻？")])]),s("h2",{attrs:{id:"tdd-的三个守则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tdd-的三个守则"}},[t._v("#")]),t._v(" TDD 的三个守则")]),t._v(" "),s("p",[t._v("波波叔（Uncle Bob）提出了 TDD 的三个基本守则")]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("See More")]),t._v(" "),s("ul",[s("li",[t._v("除非为了通过一个失败的单元测试，否则不允许编写任何产品代码 You are not allowed to write any production code unless it is to make a failing unit test pass")]),t._v(" "),s("li",[t._v("在一个单元测试中，只允许编写刚好能够导致失败的内容（编译错误也算失败） You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.")]),t._v(" "),s("li",[t._v("只允许编写刚好能够使一个失败的单元测试通过的产品代码 You are not allowed to write any more production code than is sufficient to pass the one failing unit test.")])])]),t._v(" "),s("p",[t._v("首先，如果你想实现一个功能，就需要先写一个单元测试（规则 1）；但是，你又不能让这个单元测试覆盖太多，刚好够失败就行（规则 2）；然后，你在实现和重构时，也不要写太多，刚好通过失败的测试就行（规则 3）。")]),t._v(" "),s("p",[t._v("这三个规则实际上用来帮助开发者控制迭代的步子，不要一下子将太多的变化带入即有的代码，因此无论是测试用例的设计，还是产品代码的实现，都要采用小步快跑的方式。")]),t._v(" "),s("h3",{attrs:{id:"关于小步快跑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于小步快跑"}},[t._v("#")]),t._v(" 关于小步快跑")]),t._v(" "),s("p",[t._v("需求表示一种期望，开发出来的产品表示对期望的满足。很多情况下，需求的提出方需要等待相当长的时间（软件的开发周期）才有可能满足自己的期望——这意味着反馈时间相当的长。")]),t._v(" "),s("p",[t._v("在 TDD 实践中，通过"),s("strong",[t._v("测试用例 -> 实现 -> 重构")]),t._v("这样的迭代，能够分段的满足需求，自然大大缩短了反馈周期 —— 这是从外部用户的角度而言。")]),t._v(" "),s("p",[t._v("对于开发者也一样。通过 TDD 实践，开发者不断地给自己提出预期（测试用例），然后满足外部预期（快速实现），再满足内部实现预期（重构）。这使得开发者始终对自己的工作有预期，有反馈 —— 相当棒的操作方法！")]),t._v(" "),s("h2",{attrs:{id:"什么是测试驱动开发中的单元测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是测试驱动开发中的单元测试"}},[t._v("#")]),t._v(" 什么是测试驱动开发中的单元测试？")]),t._v(" "),s("p",[t._v("单元测试是您编写的用于评估程序独立部分的功能的测试。换句话说，单元测试检查一个完全隔离的程序单元是否按预期工作。请注意，单元测试的主要目的不是检查错误。相反，单元测试的核心目的是检查一个独立的程序片段（称为单元）在各种测试用例下是否按预期运行。")]),t._v(" "),s("h2",{attrs:{id:"什么是测试驱动开发中的集成测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是测试驱动开发中的集成测试"}},[t._v("#")]),t._v(" 什么是测试驱动开发中的集成测试？")]),t._v(" "),s("p",[t._v("集成测试评估依赖程序的功能。换句话说，集成测试检查依赖于其他代码的程序是否按预期工作。")]),t._v(" "),s("h2",{attrs:{id:"什么是测试驱动开发中的端到端测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是测试驱动开发中的端到端测试"}},[t._v("#")]),t._v(" 什么是测试驱动开发中的端到端测试？")]),t._v(" "),s("p",[t._v("端到端 (E2E) 测试评估用户界面的功能。换句话说，E2E 检查您的用户界面是否按预期工作。可以查看这个 [视频](JavaScript Testing Introduction Tutorial - Unit Tests, Integration Tests & e2e Tests) 更深入了解端到端测试")]),t._v(" "),s("h2",{attrs:{id:"测试覆盖率"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试覆盖率"}},[t._v("#")]),t._v(" 测试覆盖率")]),t._v(" "),s("p",[t._v("什么是测试覆盖率？用一个公式来表示：代码覆盖率 = 已执行的代码数 / 代码总数。Jest 如果要开启测试覆盖率统计，只需要在 Jest 命令后面加上 --coverage 参数：")]),t._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"jest --coverage"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("现在来看一个示例")]),t._v(" "),s("div",{staticClass:"language-JS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// main.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TypeError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'参数必须为数值型'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// test.main.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abc'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toThrow")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TypeError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类型错误")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("p",[s("img",{attrs:{src:a(638),alt:""}})]),t._v(" "),s("p",[t._v("上图表示每一项覆盖率都是 100%。")]),t._v(" "),s("p",[t._v("现在我们把测试类型错误的那一行代码注释掉，再试试")]),t._v(" "),s("div",{staticClass:"language-JS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// test.spec.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("expect")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("abs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toBe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// expect(() => abs('abc')).toThrow(TypeError)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[s("img",{attrs:{src:a(639),alt:""}})]),t._v(" "),s("p",[t._v("可以看到测试覆盖率下降了，为什么会这样呢？因为 abs() 函数中判断类型错误的那个分支的代码没有执行。")]),t._v(" "),s("div",{staticClass:"language-JS line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 就是这一个分支语句")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'number'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throw")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TypeError")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'参数必须为数值型'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("h3",{attrs:{id:"覆盖率统计项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#覆盖率统计项"}},[t._v("#")]),t._v(" 覆盖率统计项")]),t._v(" "),s("p",[t._v("从覆盖率的图片可以看到一共有 4 个统计项：")]),t._v(" "),s("ol",[s("li",[t._v("Stmts(statements)：语句覆盖率，程序中的每个语句是否都已执行。")]),t._v(" "),s("li",[t._v("Branch：分支覆盖率，是否执行了每个分支。")]),t._v(" "),s("li",[t._v("Funcs：函数覆盖率，是否执行了每个函数。")]),t._v(" "),s("li",[t._v("Lines：行覆盖率，是否执行了每一行代码。")])]),t._v(" "),s("blockquote",[s("p",[t._v("可能有人会有疑问，1 和 4 不是一样吗？其实不一样，因为一行代码可以包含好几个语句。")])]),t._v(" "),s("h2",{attrs:{id:"课程资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#课程资源"}},[t._v("#")]),t._v(" 课程资源")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://xc.hubwiz.com/course/5911d52ab343f27b0ae1b895?affid=zhihu",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("TDD - 测试驱动开发"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.infoq.cn/article/2009/05/recommended-tdd-tutorials",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("TDD 推荐教程"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.pluralsight.com/guides/introduction-to-test-driven-development-in-javascript",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("JavaScript 中的测试驱动开发简介"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.freecodecamp.org/news/an-introduction-to-test-driven-development-c4de6dce5c/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("An Introduction to Test-Driven Development | freecodecamp"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.freecodecamp.org/news/test-driven-development-tutorial-how-to-test-javascript-and-reactjs-app/",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Test-Driven Development Tutorial – How to Test Your JavaScript and ReactJS Applications"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/dwyl/learn-tdd",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("JavaScript 中的测试驱动开发 (TDD) 简介 ｜ github"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("⏯"),s("a",{attrs:{href:"https://www.letscodejavascript.com/v3/account/start_here",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("Let's Code: Test-Driven JavaScript ｜ 视频 "),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzUzMjA3MTI2NQ==&mid=2247486099&idx=1&sn=4c2107bdc0a27da7decf5a9813fe8984&chksm=fab99c9dcdce158b8bb20d9bb23854c76da0977aafee1afcbf637ad740ce664f497941176232&token=1833222379&lang=zh_CN&scene=21#wechat_redirect",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("使用 TDD 开发组件 --- Notification"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports},635:function(t,s,a){t.exports=a.p+"assets/img/img1.a26ce07c.png"},636:function(t,s,a){t.exports=a.p+"assets/img/img2.576dc558.png"},637:function(t,s,a){t.exports=a.p+"assets/img/img3.34c28d33.png"},638:function(t,s,a){t.exports=a.p+"assets/img/img4.98f4e094.png"},639:function(t,s,a){t.exports=a.p+"assets/img/img5.37db9862.png"}}]);