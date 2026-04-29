

// let tag = prompt("What tag do you want to find?", "h2");

// let regexp = new RegExp(`<${tag}>`); // 如果在上方输入到 prompt 中的答案是 "h2"，则与 /<h2>/ 相同
// console.log(regexp);


let str = "We will, we will rock you";
// 正则表达式具有修饰符 g，它返回一个由所有匹配项所构成的数组,修饰符 i 使得正则表达式在进行搜索时不区分大小写。
// alert(str.match(/we/gi)); // ["We", "we"]

// 没有g修饰符时，match() 方法只返回第一个匹配项的结果。i表示不区分大小写
// match()方法返回一个数组，包含了匹配的结果以及一些相关信息，可以通过索引访问这些信息：
let res = str.match(/we/i)
// alert(res); // "We"
// alert(res.index); // 0
// input属性是一个字符串，包含了被搜索的原始字符串str
// alert(res.input); // "We will, we will rock you"
// alert(res[0]); // "We"
// alert(res.length); // 1

// 这样的结果是一个数组，包含了匹配的结果以及一些相关信息，可以通过索引访问这些信息：
let matchs = "javascript html".match(/html/) || [];
if(!matchs.length) {
    console.log("No match found");
} else {
    console.log(matchs[0]);
}

// 替换字符串中的内容
// i修饰符表示不区分大小写，g修饰符表示替换全部
console.log("I say,you say".replace(/say/ig, "speak")); // I speak,you speak
// 没有g修饰符时，replace() 方法只替换第一个匹配项的结果
console.log("I say,you say".replace(/say/i, "speak")); // I speak,you say

let str2 = "+7(903)-123-45-67";

let regexp2 = /\d/g; // \d 匹配一个数字字符，等价于 [0-9]
console.log(str2.match(regexp2)); // ["7", "9", "0", "3", "1", "2", "3", "4", "5", "6", "7"]
console.log(str2.match(regexp2).join(''));


