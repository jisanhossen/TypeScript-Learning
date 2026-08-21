type Students = {
    name : string;
    roll : number;
    major : string;
    cgpa : number;
    gender? : "Male" | "Female" | "Other";
}  
 // 1 ta general type declare kore bar bar use kora jacche
const rahim : Students = {
    name : 'Rahim',
    roll : 1010,
    major : 'Computer Science',
    cgpa : 3.94,
    // gender : 'Male'  Gender is optional
}

const karim : Students = {
    name : 'Karim',
    roll : 1011,
    major : 'Computer Science',
    cgpa : 3.98,
    // gender : 'Male'  Gender is optional
}

const iftekharul : Students = {
    name : 'Iftekharul',
    roll : 1016,
    major : 'Computer Science',
    cgpa : 3.99,
    gender : 'Male'
}

const saad : Students = {
    name : 'Saad',
    roll : 1012,
    major : 'Civil',
    cgpa : 3.94,
    // gender : 'Male'  Gender is optional
}

// eivabe amra Students namer custom type ke bar bar use korte parbo.
