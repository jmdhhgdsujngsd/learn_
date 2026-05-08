function sayHi() {
    return 'Hi';
}
sayHi.lang = 'en';  // 函数也是对象，可以挂属性
// console.log(sayHi.lang); // 'en'

// 函数表达式,将函数赋值给一个变量,可以是匿名函数,也可以是具名函数
const sayHi2 = function () {
    console.log(this); // this指向全局对象window
    return 'Hi';
}
// console.log(sayHi2());  // 'Hi'

// 具名函数表达式,函数有名字,但这个名字只能在函数内部使用
const sayHi3 = function greet() {
    return 'Hi';
}

// console.log(sayHi3()); // 'Hi'

// 匿名函数表达式,函数没有名字,只能通过变量名来调用
const sayHi4 = function() {
    return 'Hi';
}
// console.log(sayHi4()); // 'Hi'


// 箭头函数，是一种更简洁的函数表达式，使用箭头符号 => 来定义函数。箭头函数没有自己的 this、arguments、super 或 new.target，适合用于回调函数或需要保持 this 绑定的场景。
const add = (a, b) => a + b;
const double = n => n * 2;           // 单参数可省括号
const getObj = () => ({ x: 1 });     // 返回对象需要加括号
// console.log(add(2, 3)); // 5
// console.log(double(4)); // 8
// console.log(getObj()); // { x: 1 }


// 默认参数，允许在函数定义时为参数指定默认值，如果调用函数时没有提供该参数，则使用默认值。
function multiply(a, b = 1) { return a * b; }
multiply(5); // 5

// 剩余参数，使用 ... 语法将函数的参数收集到一个数组中，适用于不确定参数数量的情况。将参数收集到一个数组中，适用于不确定参数数量的情况。必须放在最后一个参数的位置。
function sumAll(...nums) {
  return nums.reduce((acc, n) => acc + n);
}
console.log(sumAll(1, 2, 3)); // 6

console.log('-'.repeat(60));

// 旧用法，函数内部使用 arguments 对象来访问传入的参数。arguments 是一个类数组对象，包含了函数调用时传入的所有参数，但它不是一个真正的数组，因此没有数组的方法。
function oldStyle() {
  console.log(arguments[0]); // 类数组，不是真正的数组
  const args = Array.from(arguments); // 转为数组
  // 遍历数组
  for (const arg of args) {
    console.log(arg);
  }
}
oldStyle(1, 2, 3); // 1 2 3

// 新用法，使用剩余参数（rest parameters）来收集函数的参数。剩余参数使用 ... 语法，可以将函数的参数收集到一个真正的数组中，方便使用数组的方法进行操作。
function newStyle(...args) {
    for (const arg of args) {
        console.log(arg);   
    }
}
newStyle(1, 2, 3); // 1 2 3

console.log('-'.repeat(60));

// 参数解构
// 对象结构赋值
function printUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}
printUser({ name: 'Alice', age: 30 }); // Name: Alice, Age: 30
console.log(printUser.toString()); // function printUser({ name, age }) { ... }


// 数组解构赋值
// function add([a, b]) {
//     return a + b;
// }
// console.log(add([5, 10])); // 15

console.log('-'.repeat(60));

const obj = {
  name: 'Eve',
  greet() {
    console.log(this.name);
    console.log(this); //this指向调用该方法的对象，即obj
  }
};
obj.greet(); // 'Eve'

// const detached = obj.greet;
// detached();  // 非严格模式 -> window.name （可能是 undefined/'window'）
console.log('-'.repeat(60));

// 箭头函数没有自己的 this，它会捕获其所在上下文的 this 值。
// 因此，在箭头函数中，this 的值取决于它被定义的位置，而不是被调用的位置。
// 这使得箭头函数非常适合在回调函数中使用，避免了传统函数中 this 绑定的问题。
const team = {
  name: 'Devs',
  members: ['Alice', 'Bob'],
  print() {
    this.members.forEach(member => {
      // 箭头函数内的 this 与 print() 中的 this 相同
      console.log(`${member} is in ${this.name}`);
    });
  }
};
team.print(); // Alice is in Devs ...

console.log('-'.repeat(60));


function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
// count 变量被内部函数引用，不会被垃圾回收，形成闭包

console.log('-'.repeat(60));


// 函数也是对象，可以有属性和方法。函数的 this 取决于调用方式，可以通过 call、apply、bind 来改变 this 的指向。
function introduce(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
}
const user = { name: 'Zoe' };

// this指向user对象，调用introduce函数时，greeting参数传入'Hello'，输出结果为'Hello, I'm Zoe'。
introduce.call(user, 'Hello');   // Hello, I'm Zoe
introduce.apply(user, ['Hi']);   // Hi, I'm Zoe

const boundIntro = introduce.bind(user, 'Hey');
boundIntro();                    // Hey, I'm Zoe

console.log('-'.repeat(60));

// 立即执行函数表达式（IIFE），是一种在定义后立即执行的函数。它通常用于创建一个独立的作用域，避免变量污染全局作用域。
(function() {
  var privateVar = 'secret';
  console.log(privateVar);
  // 业务逻辑
})();

console.log('-'.repeat(60));
