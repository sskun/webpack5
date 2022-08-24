/*
 * @Descripttion:
 * @version:
 * @Author: Yukun
 * @Date: 2022-08-23 19:53:47
 * @LastEditors: Yukun
 * @LastEditTime: 2022-08-23 20:53:41
 */

// 正常的执行错误，可以捕获错误 √
try {
  console.log(testInfo.name);
} catch (error) {
  console.log('try catch error --01--', error); // try catch error --01-- ReferenceError: testInfo is not defined
}

// 语法错误，无法正常捕获 ×
try {
const testInfo.name
} catch (error) {
    console.log('try catch error', error);
}

// 普通异步任务错误，不能捕获 ×
try {
  setTimeout(() => {
    console.log(testInfo.name);
  });
} catch (error) {
  console.log('try catch error ---', error);
}

// Promise 任务，捕获不到 ×
try {
  new Promise((resolve) => {
    testDo();
    resolve();
  });
} catch (error) {
  console.log('try catch error --04--', error);
}

// async await 任务，可以捕获 √
const getName = async () => {
  testDo();
};
const getCatch = async () => {
  try {
    await getName();
  } catch (error) {
    console.log('try catch error --05--', error); // try catch error --05-- ReferenceError: testDo is not defined
  }
};
getCatch();
