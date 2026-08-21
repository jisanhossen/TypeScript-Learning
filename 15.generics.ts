// interface Response {
//     // data: any;
//     // data: string | number | boolean | object | null;
//     status: number;
// }

interface Response<T> {
    data: T;
    status: number;
}

const transactionResponse: Response<string> = {
    data: "Transaction successful",
    status: 200
}

const transactionStatus: Response<boolean> = {
    data: false,
    status: 200
}

const transactionAmount: Response<number> = {
    data: 215,
    status: 401
}

function getLength<item>(array: item[]): number{
    return array.length;
}

getLength<string>(['', '', '3'])
getLength<number>([4, 6])


// function useState(initialValue) {
//     let value = initialValue;

//     function setValue(newValue) {
//         value = newValue;
//     }

//     return [value, setValue]
// }


// const [counter, setCounter] = useState(0);

// console.log(counter)


// -----------------------------------
function useState<T>(initialValue: T): [T, (newValue: T) => void ] {
    let value = initialValue;
    function setValue(newValue: T){
        value = newValue;
    }

    // return [value]
    return [value, setValue]
}

useState<string>('')
useState<number>(0)
useState<boolean>(false)

interface User {
    email: string,
    isLoggedIn: boolean
}

useState<User>({ email: '', isLoggedIn: false })
useState<User | null>(null)