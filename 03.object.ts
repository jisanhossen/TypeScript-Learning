
const student : { name : string, age : number, isPassed : boolean } = {
    name: 'Jisan',
    age : 23,
    isPassed : true
}

student.age = 24;


const book : {
    name : string,
    author : string,
    price : number,
    pages : number,
    isUsed? : boolean  // ? optional ,, that means it can be used or not
} = {
    name : 'Chemistry',
    author : 'Hajari',
    price : 600,
    pages : 560,
    // isUsed : false
}


const book2 : {
    name : string,
    author : string,
    price : number,
    pages : number,
    isUsed? : boolean,  // ? optional ,, that means it can be used or not
    pi : 3.1416  // we can use value here instead of type for a constant value
} = {
    name : 'Chemistry',
    author : 'Hajari',
    price : 600,
    pages : 560,
    // isUsed : false,
    pi : 3.1416
}

//book2.pi = 4  it is not allowed 