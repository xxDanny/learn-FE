(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{1129:function(s,a,e){"use strict";e.r(a);var n=e(3),t=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"c-语言入门"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#c-语言入门"}},[s._v("#")]),s._v(" C 语言入门")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://chinese.freecodecamp.org/news/the-c-beginners-handbook/",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("C 语言入门手册：几小时内就能学会的 C 语言基础"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://wangdoc.com/clang/pointer.html",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("C 教程"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1803522",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("VS Code 配置 C 语言开发环境的超详细教程"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("我们如何执行一个 C 程序呢？")]),s._v(" "),a("p",[s._v("C 是一门编译型语言。要运行程序，我们必须先编译它。任何 Linux 或 macOS 计算机都自带了 C 编译器。至于 Windows，你可以使用适用于 Linux 的 Windows 子系统（WSL）。")]),s._v(" "),a("h2",{attrs:{id:"变量与类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量与类型"}},[s._v("#")]),s._v(" 变量与类型")]),s._v(" "),a("p",[s._v("C 是一门静态类型语言。")]),s._v(" "),a("p",[s._v("这意味着任何变量都有一个相关联的类型，并且该类型在编译时是可知的")]),s._v(" "),a("p",[s._v("当你在 C 中创建变量时，你必须在声明中给出该变量的类型。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int a\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("变量名可以包含任意大写或小写字母，也可以包含数字和下划线，但是不能以数字开头。 "),a("code",[s._v("AGE")]),s._v(" 和 "),a("code",[s._v("Age10")]),s._v(" 都是有效的变量名，但 "),a("code",[s._v("1age")]),s._v(" 就不是了。")]),s._v(" "),a("p",[s._v("C 的内置数据类型有 int、char、short、long、float、double、long double。咱们进一步了解这些数据类型吧")]),s._v(" "),a("h3",{attrs:{id:"整数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整数"}},[s._v("#")]),s._v(" 整数")]),s._v(" "),a("p",[s._v("C 给我们提供了下列定义整数的类型：")]),s._v(" "),a("ul",[a("li",[s._v("char")]),s._v(" "),a("li",[s._v("int")]),s._v(" "),a("li",[s._v("short")]),s._v(" "),a("li",[s._v("long")])]),s._v(" "),a("p",[s._v("char 类型通常被用来保存 ASCII 表中的字母，但是它也可以用来保存 -128 到 127 之间的小整数。它占据至少一个字节。")]),s._v(" "),a("p",[s._v("int 占据至少两个字节。short 占据至少两个字节。long 占据至少四个字节。")]),s._v(" "),a("h3",{attrs:{id:"无符号整数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无符号整数"}},[s._v("#")]),s._v(" 无符号整数")]),s._v(" "),a("p",[s._v("对于以上所有的数据类型，我们都可以在其前面追加一个 unsigned。这样一来，值的范围就不再从负数开始，而是从 0 开始。这在很多情况下是很有用的。")]),s._v(" "),a("ul",[a("li",[s._v("unsigned char 的范围从 0 开始，至少到 255")]),s._v(" "),a("li",[s._v("unsigned int 的范围从 0 开始，至少到 65, 535")]),s._v(" "),a("li",[s._v("unsigned short 的范围从 0 开始，至少到 65, 535")]),s._v(" "),a("li",[s._v("unsigned long 的范围从 0 开始，至少到 4, 294, 967, 295")])]),s._v(" "),a("h3",{attrs:{id:"浮点数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浮点数"}},[s._v("#")]),s._v(" 浮点数")]),s._v(" "),a("ul",[a("li",[s._v("float")]),s._v(" "),a("li",[s._v("double")]),s._v(" "),a("li",[s._v("long double")])]),s._v(" "),a("p",[s._v("是用来表示带有小数点的数字（浮点类型）的。这几种类型都可以表示正数和负数。")]),s._v(" "),a("p",[s._v("任何 C 的实现都必须满足的最小要求是 float 可以表示范围在 "),a("code",[s._v("10^-37")]),s._v(" 到 "),a("code",[s._v("10^+37")]),s._v(" 之间的数，这通常用 32 位比特实现。 double 可以表示一组更大范围的数，long double 可以保存的数还要更多。")]),s._v(" "),a("p",[s._v("在现代的 Mac 上，")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("float 用 32 位表示，精度为 24 个有效位，剩余 8 位被用来编码指数部分。")])]),s._v(" "),a("li",[a("p",[s._v("double 用 64 位表示，精度为 53 个有效位，剩余 11 为用于编码指数部分。")])]),s._v(" "),a("li",[a("p",[s._v("long double 类型用 80 位表示，精度为 64 位有效位，剩余 15 位被用来编码指数部分。")])])]),s._v(" "),a("p",[s._v("使用浮点数时，我们将数表示成小数乘以 10 的幂。")]),s._v(" "),a("p",[s._v("你可能见过浮点数被写成")]),s._v(" "),a("ul",[a("li",[s._v("1.29e-3")]),s._v(" "),a("li",[s._v("-2.3e+5")])]),s._v(" "),a("h2",{attrs:{id:"常量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常量"}},[s._v("#")]),s._v(" 常量")]),s._v(" "),a("p",[s._v("常量的声明与变量类似，不同之处在于常量声明的前面带有 const 关键字，并且你总是需要给常量指定一个值。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("const int age = 37;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("常量的命名规则与变量相同：可以包含任意大小写字母、数字和下划线，但是不能以数字开头。AGE 和 Age10 都是有效的变量名，而 1AGE 就不是了。")]),s._v(" "),a("p",[s._v("另一种定义常量的方式是使用这种语法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#define AGE 17\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("在这种情况下，你不需要添加类型，也不需要使用等于符号 =，并且可以省略末尾的分号。")]),s._v(" "),a("p",[s._v("C 编译器将会在编译时从声明的值推断出相应的类型。")]),s._v(" "),a("h2",{attrs:{id:"数组"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[s._v("#")]),s._v(" 数组")]),s._v(" "),a("p",[s._v("你可以像这样定义一个 int 型的数组：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int age[5]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串"}},[s._v("#")]),s._v(" 字符串")]),s._v(" "),a("p",[s._v("在 C 中，字符串是一种特殊的数组：字符串是由 char 值组成的数组：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('char name[7] = { "F", "l", "a", "v", "i", "o" };\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者使用更加方便的字符串字面量（也被称为字符串常量），一组用双引号引起来的字符：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('char name[7] = "Flavio";\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("你可以通过 printf() 打印字符串，使用 %s：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('printf("%s", name);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("你有注意到“Flavio”是 6 个字符长，但是我定义了一个长度为 7 的数组吗？这是因为字符串中的最后一个字符必须是 0，它是字符串的终止符号，我们必须给它留个位置")]),s._v(" "),a("p",[s._v("记住这个非常重要，尤其是当你操作字符串的时候。")]),s._v(" "),a("p",[s._v("说到操作字符串，C 提供了一个非常重要的标准库：string.h")]),s._v(" "),a("p",[s._v("这个库是必不可少的，因为它抽象了很多与字符串有关的底层细节，给我们提供了一组非常有用的函数。")]),s._v(" "),a("p",[s._v("你可以在程序中加载这个库，需要在文件顶部加上：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#include <string.h>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("一旦你这么做了之后，你就可以访问函数：")]),s._v(" "),a("ul",[a("li",[s._v("strcpy()：将一个字符串复制到另一个字符串")]),s._v(" "),a("li",[s._v("strcat()：将一个字符串追加到另一个字符串")]),s._v(" "),a("li",[s._v("strcmp()：比较两个字符串是否相等")]),s._v(" "),a("li",[s._v("strncmp()：比较两个字符串的前 n 个字符")]),s._v(" "),a("li",[s._v("strlen()：计算字符串的长度")])]),s._v(" "),a("h2",{attrs:{id:"指针"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指针"}},[s._v("#")]),s._v(" 指针")]),s._v(" "),a("p",[s._v("当你像这样声明一个整数时：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int age = 37;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("我们可以使用 & 运算符获取内存中该变量的地址值：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('printf("%p", &age); /* 0x7ffeef7dcb9c */\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("当在声明中使用 int *address 时，我们并没有在声明一个整数值，而是在声明一个 指向一个整数的指针")]),s._v(" "),a("p",[s._v("我们可以使用指针运算符获取该地址指向的变量的值：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('int age = 37;\nint *address = &age;\nprintf("%u", *address); /* 37 */\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("数组就是一个例子。当你声明一个数组时：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int prices[3] = { 5, 4, 3 };\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("prices 变量实际上是一个指向数组首个元素的指针。在这种情况下，你可以使用这个 printf() 函数获取第一个数组元素的值：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('printf("%u", *prices); /* 5 */\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[s._v("#")]),s._v(" 函数")]),s._v(" "),a("p",[s._v("main() 函数是一个非常重要的函数，它是 C 程序的入口点。")]),s._v(" "),a("p",[s._v("如果函数没有返回值，你可以在函数名前面使用关键字 void。否则你就要声明该函数的返回值类型（整数为 int，浮点数为 float，字符串为 const char *，等等）。")]),s._v(" "),a("p",[s._v("函数返回值的数量不能超过一个。")]),s._v(" "),a("p",[s._v("函数可以有参数。它们是可选的。如果函数没有参数，我们就在括号内插入 void，就像这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("void doSomething(void) {\n  /* ... */\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果有一个参数，我们就声明该参数的类型和名字，就像这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("void doSomething(int value) {\n   /* ... */\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("参数是通过 拷贝 传递的。这意味着如果你修改 value1，它的值是在局部作用域内修改的。函数外的那个值，即我们在调用时传入的值，并不会改变。")]),s._v(" "),a("p",[s._v("如果你传入的参数为一个 指针，你可以修改该变量的值，因为你现在可以使用它的内存地址直接访问它。")]),s._v(" "),a("p",[s._v("你不能为参数定义默认值。C++ 是可以的（Arduino Language 程序也可以），但是 C 不行。")]),s._v(" "),a("h2",{attrs:{id:"输入与输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入与输出"}},[s._v("#")]),s._v(" 输入与输出")]),s._v(" "),a("p",[s._v("是一门小型语言，并且 C 的“内核”并不包含任何输入/输出（I/O）功能。")]),s._v(" "),a("p",[s._v("当然，这并不是 C 所独有的。语言内核与 I/O 无关是很常见的。")]),s._v(" "),a("p",[s._v("在 C 中，输入/输出由 C 的标准库通过一组定义在 "),a("code",[s._v("stdio.h")]),s._v(" 头文件中的函数向我们提供。")]),s._v(" "),a("p",[s._v("你可以在 C 文件顶部使用：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#include <stdio.h>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这个库给我们提供了很多其它的函数：")]),s._v(" "),a("ul",[a("li",[s._v("printf()")]),s._v(" "),a("li",[s._v("scanf()")]),s._v(" "),a("li",[s._v("sscanf()")]),s._v(" "),a("li",[s._v("fgets()")]),s._v(" "),a("li",[s._v("fprintf()")])]),s._v(" "),a("p",[s._v("在描述这个函数干啥之前，我想先花一分钟讲一下 I/O 流。")]),s._v(" "),a("p",[s._v("在 C 中，我们有三种类型的 I/O 流：")]),s._v(" "),a("ul",[a("li",[s._v("stdin（标准输入）")]),s._v(" "),a("li",[s._v("stdout（标准输出）")]),s._v(" "),a("li",[s._v("stderr（标准错误）")])]),s._v(" "),a("p",[s._v("printf() 是你在学习 C 编程时最先使用的函数之一。")]),s._v(" "),a("p",[s._v("在它最简单的使用形式中，你给它传递一个字符串字面量：")]),s._v(" "),a("p",[s._v("你可以打印一个变量的值。但是这有点棘手，因为你需要添加一个特殊的字符，一个占位符，它会根据变量的类型变化。例如，我们为有符号十进制整数使用 %d：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('int age = 37;\n\nprintf("My age is %d", age);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("通过使用逗号，我现在可以打印多个变量：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('int age_yesterday = 37;\nint age_today = 36;\n\nprintf("Yesterday my age was %d and today is %d", age_yesterday, age_today);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("还有其它像 %d 一样的格式指示符：")]),s._v(" "),a("ul",[a("li",[s._v("%c 用于字符")]),s._v(" "),a("li",[s._v("%s 用于字符串")]),s._v(" "),a("li",[s._v("%f 用于浮点数")]),s._v(" "),a("li",[s._v("%p 用于指针")])]),s._v(" "),a("h3",{attrs:{id:"scanf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scanf"}},[s._v("#")]),s._v(" scanf()")]),s._v(" "),a("p",[s._v("我们必须先定义一个变量，它将被用来存放我们从输入中获取的值：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int age\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("然后我们调用 scanf()，传入两个参数：变量的格式（类型），和变量的地址：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("scanf('%d',&age)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("如果我们想在输入时获取一个字符串，还记得字符串名是一个指向第一个字符的指针，所以你不需要在它前面加上 &：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('char name[20];\nscanf("%s", name);\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"变量作用域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量作用域"}},[s._v("#")]),s._v(" 变量作用域")]),s._v(" "),a("p",[s._v("当你在 C 程序中定义一个变量时，根据你声明它的位置，它会有一个不同的 作用域（scope）。")]),s._v(" "),a("p",[s._v("这意味着它将会在某些地方可用，而在其它地方不可用。")]),s._v(" "),a("p",[s._v("该位置决定了两种类型的变量：")]),s._v(" "),a("ul",[a("li",[s._v("全局变量（global variables）")]),s._v(" "),a("li",[s._v("局部变量（local variables）")])]),s._v(" "),a("p",[s._v("这就是区别：在函数内部声明的变量就是局部变量，定义在函数外部的变量就是全局变量，比如这个示例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int age = 37;\n\nint main(void) {\n  /* ... */\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("全局变量可以从程序中的任何一个函数访问，它们在整个程序的执行过程中都是可用的，直到程序结束。")]),s._v(" "),a("h2",{attrs:{id:"静态变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#静态变量"}},[s._v("#")]),s._v(" 静态变量")]),s._v(" "),a("p",[s._v("在函数内部，你可以使用 static 关键字初始化一个 静态变量（static variable）。")]),s._v(" "),a("p",[s._v("我说了“在函数内部”，因为全局变量默认就是静态的，所以没有必要再添加这个关键字。")]),s._v(" "),a("p",[s._v("什么是静态变量？静态变量在没有声明初始值的时候会被初始化为 0，并且它会在函数调用中保持该值。")]),s._v(" "),a("p",[s._v("考虑这个函数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int incrementAge() {\n  int age = 0;\n  age++;\n  return age;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("如果我们调用一次 incrementAge()，我们将会得到返回值 1。如果我们再调用一次，我们总是会得到 1，因为 age 是一个局部变量并且在每次调用该函数的时候都会被重新初始化为 0。")]),s._v(" "),a("p",[s._v("如果我们将该函数改为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int incrementAge() {\n  static int age = 0;\n  age++;\n  return age;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("现在我们每调用一次这个函数，我们就会得到一个增加了的值：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('printf("%d\\n", incrementAge());\n\nprintf("%d\\n", incrementAge());\n\nprintf("%d\\n", incrementAge());\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("将会给我们")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1\n2\n3\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("我们也可以在 static int age = 0; 中省略初始化 age 为 0 的代码，只写 static int age; ，因为静态变量在创建时会自动设置为 0")]),s._v(" "),a("h2",{attrs:{id:"全局变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局变量"}},[s._v("#")]),s._v(" 全局变量")]),s._v(" "),a("p",[s._v("全局变量可以被程序内的任何函数访问。该访问并不只局限于读取全局变量的值：任何函数都可以更新全局变量的值。")]),s._v(" "),a("p",[s._v("因此，全局变量是一种在函数间共享相同数据的一种方式。")]),s._v(" "),a("p",[s._v("局部变量的主要不同在于，分配给局部变量的内存会在函数结束之后立即释放。")]),s._v(" "),a("p",[s._v("全局变量只在程序结束时才会释放。")]),s._v(" "),a("h2",{attrs:{id:"类型定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型定义"}},[s._v("#")]),s._v(" 类型定义")]),s._v(" "),a("p",[s._v("C 中的 typedef 关键字允许你定义新的类型。")]),s._v(" "),a("p",[s._v("我们可以从 C 内置的类型开始创建自己的类型，使用这个语法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef existingtype NEWTYPE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("按照惯例，我们创建的新类型通常是大写的。")]),s._v(" "),a("p",[s._v("这样可以更加容易区分它，并且可以立即识别出它是一种类型。")]),s._v(" "),a("p",[s._v("例如，我们可以定义一个新的 NUMBER 类型，它还是 int：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef int NUMBER\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("一旦你这么做了之后，你就可以定义新的 NUMBER 变量了：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("NUMBER one = 1;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("现在你可能会问：为什么？为什么不直接使用内置的 int 类型呢？")]),s._v(" "),a("p",[s._v("嗯，当两个东西搭配在一起的时候，typedef 会变得真的很有用：枚举类型和结构体。")]),s._v(" "),a("h2",{attrs:{id:"枚举类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#枚举类型"}},[s._v("#")]),s._v(" 枚举类型")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("typedef")]),s._v(" 和 "),a("code",[s._v("enum")]),s._v(" 关键字，我们可以定义具有指定值的类型。")]),s._v(" "),a("p",[s._v("这是 "),a("code",[s._v("typedef")]),s._v(" 关键字最重要的使用场景之一。")]),s._v(" "),a("p",[s._v("这是枚举类型的语法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef enum {\n  //值……\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("按照惯例，我们创建的枚举类通常是大写的。")]),s._v(" "),a("p",[s._v("这里是一个简单的示例：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef enum {\n  true,\n  false\n} BOOLEAN;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("另一个示例是定义一周中的那几个日子：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("typedef enum {\n  monday,  \n  tuesday,\n  wednesday,\n  thursday,\n  friday,\n  saturday,\n  sunday\n} WEEKDAY;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("这里是使用这个枚举类的一个简单程序：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#include <stdio.h>\n\ntypedef enum {\n  monday,  \n  tuesday,\n  wednesday,\n  thursday,\n  friday,\n  saturday,\n  sunday\n} WEEKDAY;\n\nint main(void) {\n  WEEKDAY day = monday;\n\n  if (day == monday) {\n    printf("It\'s monday!"); \n  } else {\n    printf("It\'s not monday"); \n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("p",[s._v("枚举定义中的每个枚举项在内部都与一个整数配对。所以在这个示例中 monday 是 0，tuesday 是 1，以此类推。")]),s._v(" "),a("p",[s._v("这意味着对应的条件可以是 if (day == 0) 而不是 if (day == monday)，但是对于我们人类来说，使用名字比数字更合理，所以它是一个非常便利的语法。")]),s._v(" "),a("h2",{attrs:{id:"结构体"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结构体"}},[s._v("#")]),s._v(" 结构体")]),s._v(" "),a("p",[s._v("利用 struct 关键字，我们可以使用基本的 C 类型创建复杂的数据结构。")]),s._v(" "),a("p",[s._v("结构体是一组由不同类型的值组成的集合。C 中的数组被限制为一种类型，所以结构体在很多用例中会显得非常有趣。")]),s._v(" "),a("p",[s._v("这里是结构体的语法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("struct <structname> {\n  //变量……\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("示例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("struct person {\n  int age;\n  char *name;\n};\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("通过将变量添加到右花括号之后，分号之前，你可以声明类型为该结构体的变量，就像这样")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("struct person {\n  int age;\n  char *name;\n} flavio;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("或者多个变量也行，就像这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("struct person {\n  int age;\n  char *name;\n} flavio, people[20];\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("我们也可以稍后再声明变量，使用这个语法：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("struct person {\n  int age;\n  char *name;\n};\n\nstruct person flavio;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("我们可以在声明的时候初始化一个结构体：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('struct person {\n  int age;\n  char *name;\n};\n\nstruct person flavio = { 37, "Flavio" };\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("一旦定义了结构体，我们就可以使用一个点（.）来访问它里面的值了：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('struct person {\n  int age;\n  char *name;\n};\n\nstruct person flavio = { 37, "Flavio" };\nprintf("%s, age %u", flavio.name, flavio.age)\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("按照惯例，我们使用 typedef 创建的结构体通常是大写的。")]),s._v(" "),a("p",[s._v("现在，我们可以像这样声明一个新的 PERSON 变量：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("PERSON flavio;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("并且我们可以用这种方式在声明的时候初始化它们：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('PERSON flavio = { 37, "Flavio" };\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"命令行参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行参数"}},[s._v("#")]),s._v(" 命令行参数")]),s._v(" "),a("p",[s._v("在 C 程序中，你可能需要在命令启动时从命令行接收参数。")]),s._v(" "),a("p",[s._v("对于简单的需求而言，你只需要将 main() 函数的签名从")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int main(void)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("修改为")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int main (int argc, char *argv[])\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("argc 是一个整数，包含从命令行提供的参数的数量。")])]),s._v(" "),a("li",[a("p",[s._v("argv 是一个字符串数组。")])])]),s._v(" "),a("p",[s._v("当程序开始运行时，我们用这两个参数给主函数提供参数。")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"},[s._v("注意")]),a("p",[s._v("argv 数组中总是至少有一个元素：程序的名字。")])]),a("p",[s._v("咱们以我们用来运行程序的 C 编译器作为示例吧，就像这样")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gcc hello.c -o hello\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("如果这就是我们的程序，我们的 argc 将会是 4，argv 将是一个包含以下内容的数组：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gcc\nhello.c\n-o\nhello\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("咱们写一个打印它收到的参数的程序吧：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#include <stdio.h>\n\nint main (int argc, char *argv[]) {\n  for (int i = 0; i < argc; i++) {\n    printf("%s\\n", argv[i]);\n  }\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"头文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头文件"}},[s._v("#")]),s._v(" 头文件")]),s._v(" "),a("p",[s._v("简单的程序可以直接放在单个文件中。但是当你的程序变大，将它放在单个文件中就不可能了。")]),s._v(" "),a("p",[s._v("你可以将程序一些部分移动到一个单独的文件中，然后创建一个 头文件。")]),s._v(" "),a("p",[s._v("头文件看起来就像普通的 C 文件一样，但是它是以 "),a("code",[s._v(".h")]),s._v(" 而不是 "),a("code",[s._v(".c")]),s._v(" 结尾的。它里面的内容是 声明，而不是函数的实现和程序的其它部分。")]),s._v(" "),a("p",[s._v("你已经在第一次使用 printf() 函数或其它 I/O 函数的时候使用过头文件了，如果你要使用它，需要输入以下内容：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#include <stdio.h>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("#include 是一个预处理器指令。\n该预处理器会在标准库中寻找 "),a("code",[s._v("stdio.h")]),s._v(' 文件，因为你使用了花括号包裹它。若要包含你自己的头文件，你需要使用引号（"），就像这样：')]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#include "myfile.h"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("上述代码会让预处理器在当前文件夹内寻找 myfile.h。")]),s._v(" "),a("p",[s._v("你也可以使用文件夹结构的库：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#include "myfolder/myfile.h"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("咱们看一个示例。这个程序计算自给定年份以来的年数：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#include <stdio.h>\n\nint calculateAge(int year) {\n  const int CURRENT_YEAR = 2020;\n  return CURRENT_YEAR - year;\n}\n\nint main(void) {\n  printf("%u", calculateAge(1983));\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("假设我想将 "),a("code",[s._v("caculateAge")]),s._v(" 函数移到一个单独的文件中。")]),s._v(" "),a("p",[s._v("我创建一个名为 "),a("code",[s._v("calculate_age.c")]),s._v(" 的文件：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int calculateAge(int year) {\n  const int CURRENT_YEAR = 2020;\n  return CURRENT_YEAR - year;\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("我还创建了一个名为 "),a("code",[s._v("calculate_age.h")]),s._v(" 的文件，我在其中放入了 函数原型，除了函数体，它与 "),a("code",[s._v(".c")]),s._v(" 文件中的函数完全相同")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("int calculateAge(int year);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("现在在主 .c 文件中，我们可以移除 "),a("code",[s._v("calculateAge()")]),s._v(" 函数的定义，并且我们可以导入 "),a("code",[s._v("calculate_age.h")]),s._v(" ，它会让 "),a("code",[s._v("calculateAge()")]),s._v(" 函数可用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('#include <stdio.h>\n#include "calculate_age.h"\n\nint main(void) {\n  printf("%u", calculateAge(1983));\n}\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("别忘了编译多个文件组成的程序，你需要在命令行中列出它们，就像这样：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("gcc -o main main.c calculate_age.c\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=t.exports}}]);