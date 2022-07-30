/*
 * @Descripttion:
 * @version:
 * @Author: Yukun
 * @Date: 2022-07-24 15:56:17
 * @LastEditors: Yukun
 * @LastEditTime: 2022-07-30 15:43:19
 */
// innerHtml封装
export function SetHtml(ele, html) {
  if (ele != null && html !== undefined) {
    ele.innerHTML = html;
  }
}
export const getName = (name) => {
  return name + 'name';
};
export const getAge = (age) => {
  return age + 'age';
};
// appendHtml添加网页元素
export function AppendHtml(ele, html) {
  var div = document.createElement('div');
  SetHtml(div, html);
  while (div.childNodes.length > 0) {
    ele.appendChild(div.childNodes[0]);
  }
}
