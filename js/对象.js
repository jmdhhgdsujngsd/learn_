
// 对象是由属性和方法组成的数据结构，属性是对象的特征，方法是对象的行为,
const person = {
    name: "Alice",
    age: 30,
    // 这里的greet是一个方法，使用函数表达式定义，也是对象的一个属性，可以通过this关键字访问对象的其他属性
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
}
// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }
let obj = {
    name: "Bob",
    age: 25,
}
// Object.assign会对象进行浅复制，复制对象的属性值，如果属性值是一个对象，那么复制的是对象的引用，而不是对象本身
let clone = Object.assign({}, obj);
console.log(clone);
