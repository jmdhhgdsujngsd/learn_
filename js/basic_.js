
"use strict";
// 基础语法打印a
// let a = 1;
// console.log(a);

// 分支语句，判断正负数
/*
let a = prompt("请输入一个数字");
if (a > 0) {
    console.log("a是正数");
} else if (a < 0) {
    console.log("a是负数");
} else {
    console.log("a是零");
}
    */
//    三元运算符
// a > 0 ? console.log("a是正数") : a < 0 ? console.log("a是负数") : console.log("a是零");



// 循环语句
// for循环，根据条件执行循环体
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// while循环，根据条件执行循环体
// let j = 0;
// while (j < 5) {
//     console.log(j);
//     j++;
// }
// let k = 0;
// dowhile循环，至少执行一次
// do {
//     console.log(k);
//     k++;
// } while (k < 5);


// Switch语句，根据不同的条件执行不同的代码块，适用于多分支的情况
// let day = prompt("请输入一个数字，代表星期几（1-7）");
// switch (day) {
//     case "1":
//         console.log("星期一");
//         break;
//     case "2":
//         console.log("星期二");
//         break;
//     case "3":
//         console.log("星期三");
//         break;
//     case "4":
//         console.log("星期四");
//         break;
//     case "5":
//         console.log("星期五");
//         break;
//     case "6":
//         console.log("星期六");
//         break;
//     case "7":
//         console.log("星期日");
//         break;
//     default:
//         console.log("输入错误，请输入1-7的数字");
//             break;
// }

// 函数是封装好的代码块，可以重复使用，接受输入参数并返回输出结果
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(2, 3));  // 5

// // 函数表达式，匿名函数赋值给变量,也可以使用箭头函数
// const multiply = function (a, b) {
//     return a * b;
// }

// console.log(multiply(2, 3)); // 6
// // 可以通过输出语句打印出函数体
// console.log(multiply);

// // 箭头函数，简化函数表达式的语法，没有自己的this和arguments，适用于简单的函数体
// const printHello = () => "Hello, World!";


// console.log(typeof printHello); // "function"

// console.log(a); // ReferenceError（let）
// let a = 1;

// class C {
//     x = 1;
//     m = () => this.x; // 每个实例一个函数，this 永远实例
// }
// const c = new C();
// console.log(c.m()); // 1 在类里面 this.x 是实例的属性，this 永远指向实例



function f(a, b) { console.log(this, a, b); }
f.call({ id: 1 }, 2, 3)
f.apply({ id: 1 }, [2, 3])

class Person {
    constructor(name) {
        this.name = name;
    }
    say() {
        return this.name;
    }
    static create(name) {
        return new Person(name);
    }
}

Person.prototype.say = function () { return this.name; };
const p = new Person('A');
p.say();              // this → p
const g = p.say;
g();                  // 严格模式下往往报错（this 为 undefined）

