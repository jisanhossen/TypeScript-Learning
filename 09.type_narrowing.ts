// type narrowing in function


function printIdNumber (id : string | number) {
    if(typeof id === 'string'){
        let upperCaseId = id.toUpperCase();
        console.log(upperCaseId);
    }
    else {
        console.log(id);
    }
}

printIdNumber('A1010');
printIdNumber(1010);


function printStatus(status: "success" | "error") {

    if (status === "success") {
        console.log("Everything is OK");
    } 
    else {
        console.log("Something went wrong");
    }
}


// type narrowing in object

type Student = {
    name : string;
    studentId : number;
};

type Teacher = {
    name : string;
    subject : string;
};

function printInfo(person : Student | Teacher) {
    if('studentId' in person) {
        console.log(person.studentId);
    }
    else {
        console.log(person.subject);
    }
}

