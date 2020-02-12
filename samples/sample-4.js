class Student {
    constructor() {
        this.excitement = 1;
    }

    writeCode = () => { this.learn(); }
}

let bob = new Student();
bob.writeCode(); // error, this.learn() does not exist