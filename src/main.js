/*
 * @Descripttion:
 * @version:
 * @Author: Yukun
 * @Date: 2022-07-24 15:34:56
 * @LastEditors: Yukun
 * @LastEditTime: 2022-07-24 17:20:12
 */
import { getName } from './tool';
const getYname = (name) => {
  return getName(name);
};
const dom = document.querySelector('#app');
dom.innerHTML = '2222';
export { getYname };
