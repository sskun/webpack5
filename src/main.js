/*
 * @Descripttion:
 * @version:
 * @Author: Yukun
 * @Date: 2022-07-24 15:34:56
 * @LastEditors: Yukun
 * @LastEditTime: 2022-07-30 17:38:50
 */
import { getName, AppendHtml } from './tool';
import './app.js';
import testMd from './test.md';
const getYname = (name) => {
  return getName(name);
};
const dom = document.querySelector('#app');
const mdDom = `<div>${testMd}</div>`;
const nameDom = `<div>${getYname('yukun')}</div>`;
AppendHtml(dom, mdDom);
AppendHtml(dom, nameDom);
