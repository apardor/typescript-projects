"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printThis = exports.getPersonNameString = exports.EmployeeClass = exports.PersonClass = exports.getPersonStreetNo = exports.sumEven = exports.countOdd = exports.isOld = exports.greet = void 0;
function greet(name, birthYear) {
    const age = new Date().getFullYear() - birthYear;
    return `Hello ${name}, you are ${age} years old`;
}
exports.greet = greet;
function isOld(age) {
    return age >= 35;
}
exports.isOld = isOld;
function countOdd(arr) {
    return arr.filter(num => num % 2 !== 0).length;
}
exports.countOdd = countOdd;
function sumEven(arr) {
    return arr
        .filter(num => num % 2 == 0)
        .reduce((sum, curr) => sum + curr, 0);
}
exports.sumEven = sumEven;
function getPersonStreetNo(p) {
    return p.address.streetNo;
}
exports.getPersonStreetNo = getPersonStreetNo;
class PersonClass {
    constructor(name, birthYear) {
        this.name = '';
        this.birthYear = 0;
        this.name = name;
        this.birthYear = birthYear;
    }
    getName() {
        return this.name;
    }
}
exports.PersonClass = PersonClass;
const p = new PersonClass('Marcus', 1972);
class EmployeeClass extends PersonClass {
    constructor() {
        super(...arguments);
        this.employeeId = -1;
    }
}
exports.EmployeeClass = EmployeeClass;
const e = new EmployeeClass('Marcus Employee', 1972);
console.log(e.name);
console.log(e.employeeId);
;
function getPersonNameString(p) {
    return `${p.name}, ${p.birthYear}`;
}
exports.getPersonNameString = getPersonNameString;
function printThis(p) {
    if (!p) {
        return 'no person supplied';
    }
    ;
    return p.name;
}
exports.printThis = printThis;
