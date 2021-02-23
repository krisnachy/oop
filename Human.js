class Human {

    //static poperty
    static isLive = true;

    //constructor
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

    //instance method
    introduce(){
        console.log(`Hi, my name is ${this.name} from ${this.address}`);
    }

    greet() {
        console.log(`Greeting from ${this.name}`);
    }

    //static method
    static work(job) {
        console.log(`I'm working now as a ${job}`);
    }
}

//instance object dari class Human
//const krisna = new Human("Krisna", "Jogja")
//const cr = new Human("Cristiano Ronaldo", "Portugal")

// krisna.introduce();
// // cr.introduce();
// // cr.greet();

// //instance static method
// Human.work("Mobile Developer");

// Human.sleep = function(hour) {
//     console.log(`I Sleep ${hour} per day`);
// }

// Human.sleep("8");

// console.log(Human.isLive);

module.exports = Human;