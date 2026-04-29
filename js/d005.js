console.log(1111111111);

class A{
    constructor(name) {
        this.name = name
    }
    sayHi() {
        console.log(this.name);
    }
}

const a = new A('jack');
a.sayHi()