type userRole = 'Admin' | 'User' | 'Moderator' | 'Guest';
type status = 'Pending';

interface User {
    name : string;
    role : userRole;
    email : string;
}

interface Admin extends User {
    permissions : string[];
}

const boss : Admin = {
    name : 'Boss',
    role : 'Admin',
    email : 'example.com',
    permissions : ['manage_users', 'edit_content']
}



// same name er akadhik interface declaire korle TS tader combine kore

interface Gift {
    name : string;
}

interface Gift {
    price : number;
}

const gift : Gift = {
    name : 'Book',
    price : 560
}