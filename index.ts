class Calculator{
    add(a: number, b: number): number {
        return a + b;
      }

    subtract(a: number, b:number):number{
        return a - b;
    }

    multiply(a: number, b:number):number{
        return a * b;
    }

    divide(a: number, b:number):number{
        return a / b;
    }

    exponent(a: number, b:number):number{
        return a ** b;
    }

    squareRoot(a: number): number {
        return Math.sqrt(a);
      }
    
    nthRoot(base: number, n: number): number {
        return Math.pow(base, 1 / n);
    }    
}

const Calculator1 = new Calculator();
const add = Calculator1.add(12, 2);
const sub = Calculator1.subtract(12, 2);
const mul = Calculator1.multiply(12, 2);
const divide = Calculator1.divide(12, 2);
const exp = Calculator1.exponent(12, 2);
const root = Calculator1.nthRoot(12, 2);
console.log("Add: ",add)
console.log("Subtract: ",sub)
console.log("Multiply: ",mul)
console.log("Divide: ",divide)
console.log("Exponent: ",exp)
console.log("Root: ",root)
