
/**
 * Human class
 */
class Human {
    /**
     * @param {String} name of person
     * @param {Number} age
     * @age Number age of person
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    /**
     * Say the name of person
     * @return {String} Name of the person
     */
    sayName() {
        return `My name is ${this.name} and age is ${this.age}`;
    }
}

export default Human;
