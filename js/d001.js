let a = "gg"
console.log(a);

// 使用String对象创建字符串时，得到的是一个String对象，而不是一个原始字符串。虽然它们看起来相似，但它们是不同的类型。原始字符串是基本数据类型，而String对象是一个对象实例。
let b = new String("gg")
console.log(b);

// 使用Number对象创建数字时，得到的是一个Number对象，而不是一个原始数字。虽然它们看起来相似，但它们是不同的类型。原始数字是基本数据类型，而Number对象是一个对象实例。
let c = new Number(23)
console.log(c);

// 使用Boolean对象创建布尔值时，得到的是一个Boolean对象，而不是一个原始布尔值。虽然它们看起来相似，但它们是不同的类型。原始布尔值是基本数据类型，而Boolean对象是一个对象实例。
let d = new Boolean(true)
console.log(d);