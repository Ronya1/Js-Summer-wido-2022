const { expect} = require("chai");


class sampleTest {

    static addNumbers(num1, num2) {
        return num1+num2;
    }

}

console.log('this'); // my test to see if this file works 

module.exports = sampleTest  