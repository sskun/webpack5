/*
 * @Descripttion: 自定义loader
 * @version:
 * @Author: Yukun
 * @Date: 2022-07-28 14:46:42
 * @LastEditors: Yukun
 * @LastEditTime: 2022-07-30 15:42:13
 */
//自定义loader，接收的是一个文件，对文件内容做一个单功能处理，然后处理我们处理后的文件
var MarkdownIt = require('markdown-it');
const md = new MarkdownIt();
module.exports = function (source) {
  const content = md.render(source);
  const mdDom = `module.exports = ${JSON.stringify(content)}`;
  return mdDom;
};
