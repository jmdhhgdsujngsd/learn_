const arr = [1, 2, 3, 4, 5];
const result = arr.reduce((acc, val) => acc + val, 0);
console.log(result); // Output: 15


const num = arr.map(x => x * 2);
console.log(num); //  返回一个数组 Output: [2, 4, 6, 8, 10]
const filtered = arr.filter(x => x % 2 === 0);
console.log(filtered); // Output: [2, 4]

