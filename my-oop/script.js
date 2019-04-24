//OOP EXAMPLES

// PROCEDURAL WAY

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {
    return baseSalary + (overtime * rate);
}

// OOP ENCAPSULATION

// Encapsulation: groups related variables and functions together
// Encapsulation: Reduce complexity + increase reusability

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
    getWage: function() {
        return this.baseSalary + (this.overtime * this.rate);
    }
};
employee.getWage();

// ABSTRACTION: Reduce complexity + isolate impact of changes
// INHERITANCE: Eliminate redundant code
// POLYMORPHISM: Refactor ugly switch/case statements 