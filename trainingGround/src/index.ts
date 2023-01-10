import { isNullOrUndefined } from "util";
import { Z_FILTERED } from "zlib";

const greet = (name:string, birthYear:number) : string => {
  const age = new Date().getFullYear() - birthYear;
  return `Hello ${name}, you are ${age} years old`;
}

const isOld = (age : number ) => age >= 35;


const countOdd = ( arr : number[]) => arr.filter( num => num % 2 !== 0).length;

const sumEven = (arr : number[]) => {
    return arr
        .filter( num => num % 2 == 0 )
        .reduce((sum,curr) => sum + curr, 0);
}

type Address = {
    street: string,
    streetNo: number,
    city: string,
  };
  
  type Person = {
    name: string,
    birthYear: number,
    address: Address
  };

 const getPersonStreetNo = (p : Person ) => p.address.streetNo;


 class PersonClass {
    name: string = '';
    birthYear: number = 0;
  
    constructor(name:string, birthYear: number) {
      this.name = name;
      this.birthYear = birthYear;
    }

    getName() {
        return this.name;
      }

  }

  const p = new PersonClass('Marcus', 1972);
 
  class EmployeeClass extends PersonClass {
    employeeId: number = -1;
  }

  const e = new EmployeeClass('Marcus Employee', 1972);
console.log(e.name);
console.log(e.employeeId);

interface IPerson {
    name: string,
    birthYear: number,
  };

const getPersonNameString = ( p: IPerson) => `${p.name}, ${p.birthYear}`;
  

const printThis = (p : Person | undefined | null) => {
    if(!p) { return 'no person supplied'; };
    return p.name;
} 

const optionallyAdd = (num1:number, num2:number, num3?:number,num4?:number,num5?:number) => {
    let sum = num1 + num2;
  
    if(num3 !== undefined) {
      sum += num3;
    }
  
    if(num4) {
      sum += num4;
    }
  
    sum += num5 ? num5 : 0;
  
    return sum;
  }

  const greetPeople = (greeting : string, ...names : string[]) => {
    return `${greeting} ${names.join(' and ')}`.trim();
  }

  const addToStart = <T>(list:T[], itemToAdd: T) : T[] => {
    return [itemToAdd, ...list];
  }

  class Wrapper<T> {
    private list: T[];
  
    constructor(list : T[]) {
      this.list = list;
    }
  
    public getFirst() : T { return this.list[0]; }
    public getLast() : T { return this.list[this.list.length - 1]; }
  }  

export {
  greet,
  isOld,
  countOdd,
  sumEven,
  Address,
  Person,
  getPersonStreetNo,
  PersonClass,
  EmployeeClass,
  IPerson,
  getPersonNameString,
  printThis,
  optionallyAdd,
  greetPeople,
  addToStart,
  Wrapper
};