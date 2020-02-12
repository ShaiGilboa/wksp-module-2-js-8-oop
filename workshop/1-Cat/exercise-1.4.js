// Exercise 1.4
// ------------
// Creating a Cat class - Part 4

// A) So far so good. Our Cat can modify its properties but we don't have a way to lower them...
// Write a wait method that accepts a minutes parameter and slowly lowers or increases the properties.

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
        this.happiness = (this.tiredness + this.tiredness * (this.hunger + 10) - this.loneliness - this.hunger);
    }

    eat = (gramsOfFood) => {
        this.hunger = this.hunger - (gramsOfFood/5);
        this.happiness = (this.tiredness + this.tiredness * (this.hunger + 10) - this.loneliness - this.hunger);
    }

    play = (minutesOfPlay) => {
        this.loneliness = this.loneliness - 3 * minutesOfPlay;
        this.happiness = (this.tiredness + this.tiredness * (this.hunger + 10) - this.loneliness - this.hunger);
    }

    wait = (minutes) => {
        this.tiredness = this.tiredness - minutes*5;
        this.hunger = this.hunger + minutes*3;
        this.loneliness = this.loneliness + minutes*4;
    }
}

// B) Make Boots wait 20 minutes and call then console.log(boots);

const boots = new Cat('boots', 'Simaese');

console.log(boots);

boots.sleep(5);
console.log(boots);

boots.eat(5);
console.log(boots);

boots.play(5);
console.log(boots);

boots.wait(20);
console.log(boots);