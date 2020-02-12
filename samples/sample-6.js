class Dog {
    constructor() {
        this.hunger = 0;
    }
    
    remaining = () => {
        console.log(this.food.amount)
    }
 }

 let fido = new Dog();
 fido.remaining();  // fido does not have the "food.amount" property