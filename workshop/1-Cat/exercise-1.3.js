// Exercise 1.3
// ------------
// Creating a Cat class - Part 3

// A) In the previous exercises, we created a Cat class and used it to create a boots object.
// Rewrite that Cat class, but let's also add some functions that will modify the various porperties of a cat.
// Write methods that will update tiredness, hunger, loneliness, and happiness.

// HINT: You need to write arrow functions here. () => {}
// - Write a sleep method that accept hours and reduces tiredness by 5 times that number.
// - Write an eat method that accept grams of food and reduces hunger by 1/5 that number.
// - Write an play method that accept minutes and reduces loneliness by 3 times that number.
// - the happiness property should be modified all of the above methods as well.
// You decide how much sleep, eat, and play affects your cat's happiness.

class Cat {
    constructor (name, breed) {
        this.name = name || '';
        this.breed = breed || '';
        this.tiredness = 0;
        this.hunger = 0;
        this.loneliness = 0;
        this.happiness = 0;
    }

    sleep = (hours) => {
        this.tiredness = this.tiredness - 5*hours;
        this.happiness = (this.tiredness + this.tiredness * (this.hunger + 10) + this.loneliness - this.hunger);
    }

    eat = (gramsOfFood) => {
        this.hunger = this.hunger - (gramsOfFood/5);
        this.happiness = (this.tiredness + this.tiredness * (this.hunger + 10) + this.loneliness - this.hunger);
    }

    play = (minutesOfPlay) => {
        this.loneliness = this.loneliness - 3 * minutesOfPlay;
        this.happiness = (this.tiredness + this.tiredness * (this.hunger + 10) + this.loneliness - this.hunger);
    }
}

// B) Instantiate a cat called 'boots' with the Cat class.
const boots = new Cat('boots', 'Simaese');

console.log(boots);

boots.sleep(5);
console.log(boots);

boots.eat(5);
console.log(boots);

boots.play(5);
console.log(boots);



// B) call the different methods with appropriate values and then console.log boots to see what happened to the property values.
