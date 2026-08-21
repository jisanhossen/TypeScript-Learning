// Union type 

let value: string | number | boolean;

value = 'Jisan';
value = 23;
value = true;
// but
// value = null / [] cannot be accepted


// Union type in function

function printId(id : string | number) {
    console.log(id);
}

printId(1010);
printId('A1010');
// but printId(true) it is not accepted



// Type literal Union

type Status = 'success' | 'error' | 'loading';
// That means the value of type Gender will be Male or Female or Other.

let status2 : Status;   // status2 var er type Status

status2 = 'success';
status2 = 'error';
status2 = 'loading';

// but status2 = 'pending' is not accepted



// Union Type + Array

let data : (string | number)[] = ['Jisan Hossen', 23, 'id', 1010];

// data var ti string or number er araay hobe

data.push('Semester');
data.push(4);
// but data.push(true) is not accepted

