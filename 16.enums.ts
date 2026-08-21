enum Day {
    Monday, 
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

let offDay = Day.Sunday
console.log(Day.Monday);

if(offDay === Day.Sunday || offDay === Day.Friday){

}


enum Roles {
    Admin = 'Admin',
    Moderator = 'Moderator',
    Guest = 'Guest'
}

console.log(Roles.Admin)

const nandu = {
    name: 'chandu',
    role: Roles.Moderator
}

console.log(nandu)

enum Priority {
    Low,
    Moderate,
    Medium,
    High,
    Urgent
}