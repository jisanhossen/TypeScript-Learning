
function add(a : number, b : number) : number { // return type is optional
    return a + b;
}

function add2(a : number, b : number) { // return type is optional
    return a + b;
}

function printName(name : string) : void {
    console.log('Jisan Hossen');
}

// optional parameter

function greet(name: string, age?: number) {
    console.log(name, age);
}

greet('Jisan')
greet('Jisan', 23)


const double  = (a : number) : number =>  {

    return a * 2;
}

const getLargerName = (name1 : string, name2 : string) : string => {
    
    if(name1.length > name2.length){
        return name1;
    }

    return name2;
}

const biggerName = getLargerName('Jisan', 'Iftekharul Islam');

const marks : number[] = [78, 98, 99, 86, 94];



function calculate(numbers: number[], tax: number, accountant: string): boolean {
    return false;
}

calculate([23, 45, 67], 0.2, 'Jonayed');






function add3(num1: number, num2: number): number[] {
    const total = num1 + num2;
    return [total];
}

function add4(num1: number, num2: number): { total?: number } {
    const total = num1 + num2;
    return { total: total };
}

function add5(num1: number, num2: number): [string, number] {
    const total = num1 + num2;
    return ['total', total];
}



function doubleOrHalf(num: number, isDouble?: boolean): boolean {
    return false;
}




// const getLargerName = (name1, name2) =>{
//     if(name1.length > name2.length){
//         return name1;
//     }
//     return name2;
// }
const getLargerName2 = (name1: string, name2: string): string =>{
    if(name1.length > name2.length){
        return name1;
    }
    return name2;
}

const biggerName2 = getLargerName('Alice', 'Bob');