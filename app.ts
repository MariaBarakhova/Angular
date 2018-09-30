// //var first: string ="Hello world";
// const arr: number[] =[1, 2, 3];
// //const arr: Array<number> =[1, 2, 3];
// console.log(arr);

// const arr1: [number, string, number] =[1, '2', 3];
// console.log(arr1);


// enum Season { Winter, Spring, Summer, Autumn };
// let current: Season = Season.Summer;
// console.log(current);


// enum KeyCodes {Enter = 13, Tab =9};
//  let key: KeyCodes =  KeyCodes.Enter;
//  console.log(key);

 


// // let b = function add()
// let c = (a:number, b:number) => (a + b);


// class User {
    
//        id: number;
//        name: string;
//        getInfo(): string {
//            return "id:" + this.id + " name:" + this.name;
//        }
// }
    
// let tom: User = new User();
// tom.id = 1;
// tom.name = "Tom";
// console.log(tom.getInfo());







// class User {
    
//       name: string;
//       constructor(userName: string) {
    
//           this.name = userName;
//       }
//       getInfo(): void {
//           console.log("Имя: " + this.name);
//       }
//   }
    
//   class Employee extends User {
    
//       company: string;
//       constructor(userName: string, empCompany: string) {
    
//           super(userName);
//           this.company = empCompany;
//       }
//       getInfo(): void {
//           super.getInfo()
//           console.log("Работает в компании: " + this.company);
//       }
//   }

//   let bill = new Employee('Bill', 'Company');
//   bill.getInfo();






// abstract class Figure {
//    abstract name: string;
//     abstract color: string;

// }
// class fff extends Figure{
     
//     constructor(public name: string, public color: string){ 
//         super();
//     }
// }

// let someFigure: fff = new fff('fgbfgb', 'drfdrgd')
// console.log(someFigure.name);


abstract class Unit {
    constructor(
        protected name: string, 
        protected color: 'black' | 'white',){

    }
    abstract move(): void
}

class Pown extends Unit{
    move(): void{
        console.log('I am a pown and I go only forward');
    }
}

const fig1 = new Pown('pown1', 'black');
console.log(fig1, fig1.move());
