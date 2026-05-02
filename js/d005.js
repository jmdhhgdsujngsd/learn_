
class A{
    constructor(name, age) {
        this.name = name
        this.sge = age
    }
    sayHi() {
        console.log(this.name, this.sge);
    }
}

const a = new A('jack', 18)
a.sayHi()