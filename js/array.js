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

let array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9, [10, 11, 12, [13, 14, 15]]]
]

console.log(array.cusromFlatten());
console.log('_'.repeat(40));

for (let item of array.cusromFlatten()) {
    console.log(item);
}