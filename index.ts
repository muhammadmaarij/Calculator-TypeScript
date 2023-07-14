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
const add = Calculator1.exponent(12, 2);
console.log(add)
