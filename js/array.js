// 构造函数创建数组
// let arr = new Array(5); // 创建一个长度为5的数组，元素未定义,不推荐
// console.log(arr); // [ <5 empty items> ]

// 通过字面量创建数组，推荐使用，语法简洁明了
let arr = [1, 2, 3]; // 创建一个包含3个元素的数组
console.log(arr); // [1, 2, 3]
console.log(arr.valueOf()); // [1, 2, 3]
console.log(arr.toString()); // '1,2,3'
console.log(Array.isArray(arr)); // true

arr.push(4); // 在数组末尾添加一个元素
console.log(arr); // [1, 2, 3, 4]

arr.pop(); // 删除数组末尾的元素
console.log(arr); // [1, 2, 3]
console.log([].pop()); // undefined
console.log(arr.shift()); // 1
arr.unshift(5, 6, 'oppo') // 在数组开头添加元素
console.log(arr); // [5, 6, 'oppo', 2, 3]

// 将数组元素连接成一个字符串，元素之间用 '-' 分隔
console.log(arr.join('-')); 

// 合并数组
[1,2,3].concat([4,5,6]); // [1, 2, 3, 4, 5, 6]

arr.reverse(); // 反转数组
console.log(arr); // ['oppo', 6, 5, 2, 3]

arr.slice(1, 4); // ['6', '5', '2']，返回一个新的数组，包含从索引1到索引4（不包括4）的元素


arr1 = [1, 2, 3];
arr1.splice(1, 1, 'a', 'b'); // 从索引1开始删除1个元素，并插入'a'和'b'
arr1.splice(2, 0, 'c'); // 从索引2开始删除0个元素，并插入'c'，即在索引2位置插入'c'


arr2 = [1, 2, 4, 6, 5, 3];
arr2.sort(); // [1, 2, 3, 4, 5, 6]，默认按照字符串顺序排序
arr2.sort((a, b) => a - b); // [1, 2, 3, 4, 5, 6]，按照数值顺序排序,升序排列

arr3 = [1,2,3,4,5];
arr3.map(x => x * 2); // [2, 4, 6, 8, 10]，返回一个新数组，数组中的元素是原数组元素调用函数处理后的结果

arr4 = []
arr3.forEach(x => this.push(x * 2),arr4); // [2, 4, 6, 8, 10]，对数组中的每个元素执行一次提供的函数，没有返回值,
console.log(arr4); // [2, 4, 6, 8, 10]

arr4.filter(x => x > 5); // [6, 8, 10]，返回一个新数组，包含所有大于5的元素

arr4.some(x => x>5); // true，测试数组中是否至少有一个元素满足条件
arr4.every(x => x > 5); // false，测试数组中是否所有元素都满足条件

arr4.reduce((acc, x) => acc + x, 0); // 30，计算数组中所有元素的和，acc 是累加器，初始值为0

arr4.filter(x => x > 5).map(x => x * 2); // [12, 16, 20]，先过滤出大于5的元素，然后将这些元素乘以2,实现链式调用




// 数组扁平化，定义在 Array.prototype 上的 cusromFlatten 方法。
// 可以递归地将嵌套的数组扁平化为一个一维数组，可直接通过数组实例调用该方法。
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

let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, [10, 11, 12, [13, 14, 15]]]
]

// console.log(array.cusromFlatten());
console.log('_'.repeat(40));

// for (let item of array.cusromFlatten()) {
//     console.log(item);
// }