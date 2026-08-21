const user: { name: string; age: number; isAdmin: boolean } = {
    name: 'John',
    age: 30,
    isAdmin: true
};

// const age = user.age;
// const name = user.name;

// const { age, name } = {name: 'John', age: 30, isAdmin: true};
const { age, isAdmin: adminStatus } = user;

const userInfo = ['Rohomot Ali', 25];

const [ , userAge] = ['Rohomot Ali', 25, true]