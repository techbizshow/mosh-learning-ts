let fname: string = 'Hanuman';
let age: number = 100; //10, 10.3, -100
let isColor: boolean = true;

///array
const colors: string[] = ['12', 'blue', 'green'];
const count: number[] = [20, 30, 50];
const god: {}[] = [{ gname: 'RAM JEE', address: 'Ayodhya', age: 11000 }];
const godall: {}[] = [
  { gname: 'RAM JEE', address: 'Ayodhya', age: 11000 },
  { gname: 'Hanuman JEE', address: 'Banaras', age: 1000 },
  { gname: 'Sita JEE', address: 'Guya', age: 4000 },
];
// const godDetails: {"",{}}[] = [{{product:"ssdsd",  {gname: 'RAM JEE', address: 'Ayodhya', age: 11000}} ];

//2 min

//string litetrals - opetial value
type Country = 'US' | 'UK';
let country: Country;
country = 'US';

// Object
const Customer: {
  fname: string;
  age: number;
  address: string;
  details: {};
  colors: string[];
} = {
  fname: 'Hanuman',
  age: 30,
  address: 'B-42 bajrang marg, Swarg',
  details: {
    title: 'Mr. Bond',
    des: 'Mr. Bond is good actor',
  },
  colors: ['red', 'blue', 'green'],
};
console.log(Customer.address);

//type and interface
//class/object/inheitance/abstraton/encapusumation/prubic/funcaton oveloading/overriding/super/constructor

interface ICustomer {
  fname: string;
  age: number;
  address: string;
}
// Object
const CustomerDetails: ICustomer = {
  fname: 'Hanuman',
  age: 30,
  address: 'B-42 bajrang marg, Swarg',
};
console.log(CustomerDetails.address);

type IProduct = {
  pname: string;
  des: string;
};

///5  min

// Object
export const ProdcutDetails: IProduct = {
  pname: 'samson',
  des: 'This samsun TV is the best and we all love it !!!',
};

//type inference
// -----------------
const number1 = 100;
const number2 = 200;

const addNumber = (n1: number, n2: number): number => {
  return n1 + n2;
};
const resultno = addNumber(number1, number2);

const showString = (n1: number, n2: number): string => {
  const res = n1 + n2;
  return 'This result is: ' + res;
};

const resultstr = showString(number1, number2);

const shoreVoid = (n1: number, n2: number) => {
  console.log(`Hello, the two number are ${n1} and ${n2}`);
};

shoreVoid(100, 200);

//tupple
const vehicle: [string, number, string] = ['BMW', 2000, 'CB'];
const Person: {
  role: [number, string];
} = {
  role: [20, 'Role1'],
};

interface IPerson {
  role: [number, string];
}
const Person1: IPerson = {
  role: [20, 'Role1'],
};

// Person1.role = [10, 'rohit', 30];
