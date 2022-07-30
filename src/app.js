/*
 * @Descripttion:
 * @version:
 * @Author: Yukun
 * @Date: 2022-07-30 15:37:27
 * @LastEditors: Yukun
 * @LastEditTime: 2022-07-30 15:46:17
 */
import { getAge, AppendHtml } from './tool';
const ageDom = `<div>${getAge(10)}</div>`;
const dom = document.querySelector('#app');
AppendHtml(dom, ageDom);
