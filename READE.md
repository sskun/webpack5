<!--
 * @Descripttion: 
 * @version: 
 * @Author: Yukun
 * @Date: 2022-07-24 15:01:47
 * @LastEditors: Yukun
 * @LastEditTime: 2022-07-24 15:29:56
-->

## 使用babel
> 文档地址 https://webpack.docschina.org/loaders/babel-loader/
#### babel 介绍
> babel 是一个代码编辑工具
Babel用于转译￿esnext、typescript、flow￿等到目标环境支持的￿js,也可以做一些代码的静态分析

#### babel 的编译流程
1. 通过￿parser￿把源码转成抽象语法树（AST）
2. 遍历￿AST，调用各种￿transform￿插件对￿AST￿进行增删改
3. 把转换后的￿AST￿打印成目标代码，并生成￿sourcemap

#### 什么是AST 
通过不同的对象来保存不同的数据，并且按照依赖关系组织起来，这种数据结构就是抽象语法树（abstract￿syntax￿tree）。之所以￿叫抽象语法树是因为数据结构中省略掉了一些无具体意义的分隔符比如￿;￿{￿}￿等

#### 依赖明细
1. babel-loader - webpack里面使用babel的插件
2. babel-core - 作用是把 js 代码分析成 AST ，方便各个插件分析语法进行相应的处理。有些新语法在低版本 js 中是不存在的，如箭头函数，rest 参数，函数默认值等，这种语言层面的不兼容只能通过将代码转为 ast，分析其语法后再转为低版本 js