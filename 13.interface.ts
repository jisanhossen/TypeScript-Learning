// type and interface are almost same, has small difference
// interface has extends feature

// interface in object

interface Employee {
    name : string;
    id : number;
    department : string;
    salary? : number; // it is optional
}

const numan : Employee = {
    name : 'Hussain-al Numan',
    id : 1017,
    department : 'Engineering',
    salary : 50000 // it is optional
}

const bill : Employee = {
    name : 'Bill',
    id : 102,
    department : 'Sales',
}

const team : Employee[] = [numan, bill, {
    name : 'Abdur Rahman',
    id : 103,
    department : 'Marketing'
}];


// interface with function

function printEmployeeDetails(employee : Employee) : void {
    console.log(`Name: ${employee.name}`);
    console.log(`ID: ${employee.id}`);
    console.log(`Department: ${employee.department}`);

}

printEmployeeDetails({
    name : 'Human',
    id : 10002,
    department : 'Humanity'
});



function displayEmployeeDetails({ name, id, department }: Employee): void {
    console.log(`Name: ${name}`);
    console.log(`ID: ${id}`);
    console.log(`Department: ${department}`);
}
displayEmployeeDetails({ name: 'Elon', department: 'spaceX', id: 101 });
displayEmployeeDetails(numan);