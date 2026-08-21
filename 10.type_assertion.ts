let value2 : unknown;

value2 = 'Jisan';

let name2 = value as string;


let value: unknown;

// value.toUppercase();
// value.toFixed(2);

let myValue = value as string;
const uppi = myValue.toUpperCase();
const yourValue = value as number;
yourValue.toFixed();

let data: unknown;
interface User{
    name: string;
    email?: string;
}

const userData = data as User;
userData.name;

// as const
const kamruzzaman: User = {
    name: 'Kamruzzaman Karmuzzaman',
    email:'kam@sizerland.com'
} as const;