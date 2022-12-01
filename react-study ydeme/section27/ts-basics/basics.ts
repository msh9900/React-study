// 기본형 타입 숫자형,문자열,부울형
//복잡한 자료형 배열,object,
//함수 타입, 파라미터

//기본형

let age: number

age= 12;

let userName: string;

userName = 'Max'

let isInstructor: boolean;

isInstructor= true;

//복잡한 자료형

let hobbies: string |string[]; 

hobbies = ['Sports', 'Cooking']

type Person = {
    name: string;
    age: number
};

let person: Person;

 person = {
    name:'Max',
    age:32
}

// person = {
//     isEmployee: true
// }

let people: Person[];

//타입 추론

let course:string | number = 'React- The Complete Guide'

course = 12341;

//함수와 타입

function add(a:number,b:number) {
    return a+b;
}
function print(value: any){
    console.log(value)
}

//제네럴

function insertAtBeginning<T>(array: T[],value:T){
    const newArray =[value,...array]
    return newArray;
}

const demoArray =[1,2,3]
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a','b','c'],'d')

// updatedArray[0].split('')

