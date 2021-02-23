const Human = require("./Human")

//inheritance
class Programmer extends Human{
    constructor(name, address, language) {
        super(name, address)
        this.language = language;
    }

    introduce() {
        super.introduce();
        console.log(`I can speak`, this.language);
    }
}

const ronaldo = new Programmer("Cristiano Ronaldo", "Portugal", ["Portuguese", "English"]);

ronaldo.introduce();
ronaldo.greet();

Programmer.work("Kuli Ketik");