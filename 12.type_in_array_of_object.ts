type Product = {
    id : number;
    name : string;
    price : number;
    description? : string; // it is optional
}

const products : Product[] = [{
    id : 1001,
    name : 'Latop',
    price : 29500,
    description : 'HP-elitebook 840 g6' // it is optional
}, {
    id : 1002,
    name : 'Smartphone',
    price : 12790
    // no description here
}]