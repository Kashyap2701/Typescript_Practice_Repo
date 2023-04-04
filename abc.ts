console.log('file')
let counter : number = parseInt('10');
let num : string = '10';

// array
let numbers : number[] = [2,1,2,4,5,6];
let names: (string|number)[] = [1,'kp','yash','abc'];

// object
let obj : {name:string, age:number} = {name:'Kashyap', age:21};

// normal function
function greeting(a:string,b:number=10) : string {
    return 'hello';
}

// arrow function
let sum : (a:number,b?:number)=>number = (a,b=10) => {
    return a+b;
}

// rest parameter
function multiplex(...rest:number[]):number{
    let total = 0;
    rest.forEach(num=>total+=num)
    return total;
}

// tuple
let color : [number,number,number,number?] = [23,24,23];
let gender : [string,string] = ['Kashyap','MALE'];

// enum
enum days { 'Monday', 'Tuesday', 'Wednesday', 'Thursday','Frieday' };

console.log(days['Monday']); // 0
console.log(days[0]); // Monday

// any 
let a:any;

a = {a:'a'};
a = 'String';

console.log(a);

// You are building a simple web application that allows users to add and remove items from a shopping cart. You need to write a TypeScript class that represents a shopping cart, with methods to add and remove items from the cart.

// Here are the requirements for the ShoppingCart class:

// The ShoppingCart class should have a private property items that is an array of strings, to represent the items in the cart.
// The ShoppingCart class should have a method addItem that takes a string as input and adds it to the items array.
// The ShoppingCart class should have a method removeItem that takes a string as input and removes it from the items array.
// The ShoppingCart class should have a method getItems that returns the current items in the items array.

class ShoppingCart {
    
    private items:string[];

    constructor() {
        this.items = [];
    }

    public addItem(item:string):void{
        this.items.push(item);
    }

    public removeItem(item:string):void{
        this.items = this.items.filter(i=>i!=item);
    }

    public getItems():string[]{
        return this.items;
    }
}

// You need to write a TypeScript function that takes in an array of numbers and returns the sum of all the even numbers in the array. If the input array is empty or contains no even numbers, the function should return 0.

// Here are the requirements for the sumEvenNumbers function:

// The sumEvenNumbers function should take in an array of numbers as input.
// The sumEvenNumbers function should return a number representing the sum of all the even numbers in the input array.
// If the input array is empty or contains no even numbers, the sumEvenNumbers function should return 0.

function sumEvenNumbers(arr:number[]):number{
    
    if(arr.length===0)
        return 0;
    
    return arr.reduce((sum,cur)=>{
        if(cur%2===0)
            sum+=cur;
        return sum;
    },0);

}

/* You need to write a TypeScript function that takes in a string and returns the number of vowels (a, e, i, o, u) in the string. The function should be case-insensitive, so both uppercase and lowercase vowels should be counted.

Here are the requirements for the countVowels function:

The countVowels function should take in a string as input.
The countVowels function should return a number representing the total number of vowels (a, e, i, o, u) in the input string.
The function should be case-insensitive, so both uppercase and lowercase vowels should be counted. */

function countVowels(str:string):number{

    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let counter = 0;

    for(const char of str){
        if(vowels.includes(char)){
            counter++;
        }
    }

    return counter;

}

/* Suppose you are building a web application that allows users to create and manage to-do lists. You want to create a TodoList class that stores a list of tasks and provides methods for adding, removing, and updating tasks.

You want to ensure that each task has a unique ID, and that users can't add tasks with the same ID. You also want to be able to filter tasks by their completion status.

Using TypeScript, you could implement the TodoList class with the following methods:

- addTask(task: Task): void - Adds a new task to the list.
- removeTask(id: number): void - Removes the task with the specified ID from the list.
- updateTask(id: number, task: Task): void - Updates the task with the specified ID in the list.
- getTask(id: number): Task - Returns the task with the specified ID from the list.
- getCompletedTasks(): Task[] - Returns an array of all completed tasks.
- getIncompleteTasks(): Task[] - Returns an array of all incomplete tasks.

 */

interface Task {
    id: number;
    name: string;
    description?: string;
    completed: boolean;
}

class TodoList {

    private todos:Task[];

    constructor(){
        this.todos = [];
    }

    public addTask(task:Task):void{
        this.todos.push(task);
    }

    public removeTask(id:number):void{
        this.todos = this.todos.filter(t=>t.id!=id);
    }

    public updateTask(id:number, newTask:Task):void{
        let index = this.todos.findIndex(t=>t.id==id);
        this.todos[index].name = newTask.name;
        this.todos[index].description = newTask.description;
        this.todos[index].completed = newTask.completed;
    }

    public getTask(id:number):Task{
        return this.todos.filter(t=>t.id===id)[0];
    }

    public getCompletedTasks():Task[]{
        return this.todos.filter(t=>t.completed==true);
    }

    public getInCompletedTasks():Task[]{
        return this.todos.filter(t=>t.completed==false);
    }

}





