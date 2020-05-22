// ####################################################
// 6.classes
//
// ####################################################
console.log('####################################################')

class Person {
    constructor(name, yearOfBirth, job) {
        this.name = name
        this.yearOfBirth = yearOfBirth
        this.job = job
    }

    calculateAge() {
        const now = new Date().getFullYear()
        let age = now - this.yearOfBirth
        console.log('------------------------------------');
        console.log(`This is ${this.name} and he is ${age} years old`);
        console.log('------------------------------------');
        console.log('------------------------------------');
        console.log(now);
        console.log('------------------------------------');
    }
}
const dom = new Person('Dom', 1990, 'teacher')

dom.calculateAge();

// -------------------------------------------------------------------------
// subclass
class Athlete extends Person {
    constructor(name, yearOfBirth, job, olymcpicGames, medals) {        // you have to repeat parameters provided in the superclass
            super(name, yearOfBirth, job);
            this.olymcpicGames = olymcpicGames
            this.medals = medals
        
    }
        wonMedal() {
            this.medals++
            console.log('------------------------------------');
            console.log(this.medals);
            console.log('------------------------------------');
        }
}
const johnAthlete = new Athlete('John', 1998, 'swimmer', 3, 10)
johnAthlete.wonMedal()