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
    grade:null
}

Object.preventExtensions(obj) // 禁止对象添加新属性，但可以修改和删除现有属性
obj.mother = "Mary" // 无效，无法添加新属性
obj.age = 26 // 有效，可以修改现有属性
delete obj.name // 有效，可以删除现有属性
console.log(obj); // 输出: { age: 26, grade: null }
Object.isExtensible(obj) // false，表示对象不可扩展

console.log('_'.repeat(40));

Object.seal(obj) // 密封对象，禁止添加和删除属性，但可以修改现有属性
obj.father = "John" // 无效，无法添加新属性
delete obj.age // 无效，无法删除现有属性
obj.grade = "A" // 有效，可以修改现有属性
console.log(obj); // 输出: { age: 26, grade: "A" }
Object.isSealed(obj) // true，表示对象已密封

console.log('_'.repeat(40));

Object.freeze(obj) // 冻结对象，禁止添加、删除和修改属性
obj.sister = "Anna" // 无效，无法添加新属性
delete obj.grade // 无效，无法删除现有属性
obj.age = 27 // 无效，无法修改现有属性
console.log(obj); // 输出: { age: 26, grade: "A" }
Object.isFrozen(obj) // true，表示对象已冻结

console.log('_'.repeat(40));

obj2 = {
    name: "Charlie",
    age: 28,
    grade: "B"
}

obj3 = {
    name: "Charlie",
    age: 28,
    grade: "B",
    mother: "Mary"
}

const obj4 = Object.assign({}, obj2, obj3) // 将obj2和obj3的属性合并到一个新的对象中，如果有重复的属性，后面的对象会覆盖前面的对象;
console.log(obj4); // 输出: { name: "Charlie", age: 28, grade: "B" }

console.log('_'.repeat(40));

console.log(Object.values(obj3)); // 输出: ["Charlie", 28, "B", "Mary"]，返回对象的所有属性值组成的数组

console.log('_'.repeat(40));

let arr = Object.entries(obj3)

console.log(arr); // 输出: [["name", "Charlie"], ["age", 28], ["grade", "B"], ["mother", "Mary"]]，返回对象的所有属性键值对组成的数组

// 数组扁平化
Array.prototype.cusromFlatten = function () {
    let arr = []
    for (let item of this) {
        if (Array.isArray(item)) {
            arr = arr.concat(item.cusromFlatten())
        } else {
            arr.push(item)
        }
    }
    return arr
}
console.log(arr.cusromFlatten()); // 输出: ["name", "Charlie", "age", 28, "grade", "B", "mother", "Mary"]，将一个嵌套的数组扁平化为一个一维数组


console.log('_'.repeat(40));

console.log(Object.fromEntries(arr)); // 输出: { name: "Charlie", age: 28, grade: "B", mother: "Mary" }，将一个键值对数组转换为一个对象

console.log('_'.repeat(40));



// 空值合并运算符（??）是JavaScript中的一个逻辑运算符，用于处理null或undefined的情况。当左侧的操作数为null或undefined时，返回右侧的操作数；否则，返回左侧的操作数。
console.log(obj.grade ?? 0);

// Object.assign会对象进行浅克隆，复制对象的属性值，如果属性值是一个对象，那么复制的是对象的引用，而不是对象本身
let clone = Object.assign({}, obj);
console.log(clone);
