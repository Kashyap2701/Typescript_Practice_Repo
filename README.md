# TypeScript Practice 

### Concepts

- What is Typescript ?
- Configuration
- TypeScript Basic Data types
- Tuple, Never, Any, Union Types
- Type Alias
- String Literal Type
- Functions
- Classes
- Interface

# Senarioes Based Practice Of Typescript Concepts

### 1. You are building a simple web application that allows users to add and remove items from a shopping cart. You need to write a TypeScript class that represents a shopping cart, with methods to add and remove items from the cart.

Here are the requirements for the ShoppingCart class:

- The ShoppingCart class should have a private property items that is an array of strings, to represent the items in the cart.
- The ShoppingCart class should have a method addItem that takes a string as input and adds it to the items array.
- The ShoppingCart class should have a method removeItem that takes a string as input and removes it from the items array.
- The ShoppingCart class should have a method getItems that returns the current items in the items array.

### 2. You need to write a TypeScript function that takes in an array of numbers and returns the sum of all the even numbers in the array. If the input array is empty or contains no even numbers, the function should return 0.

Here are the requirements for the sumEvenNumbers function:

- The sumEvenNumbers function should take in an array of numbers as input.
- The sumEvenNumbers function should return a number representing the sum of all the even numbers in the input array.
- If the input array is empty or contains no even numbers, the sumEvenNumbers function should return 0.

### 3. You need to write a TypeScript function that takes in a string and returns the number of vowels (a, e, i, o, u) in the string. The function should be case-insensitive, so both uppercase and lowercase vowels should be counted.

Here are the requirements for the countVowels function:

- The countVowels function should take in a string as input.
- The countVowels function should return a number representing the total number of vowels (a, e, i, o, u) in the input string.
- The function should be case-insensitive, so both uppercase and lowercase vowels should be counted.

### 4. Suppose you are building a web application that allows users to create and manage to-do lists. You want to create a TodoList class that stores a list of tasks and provides methods for adding, removing, and updating tasks.

You want to ensure that each task has a unique ID, and that users can't add tasks with the same ID. You also want to be able to filter tasks by their completion status.

Using TypeScript, you could implement the TodoList class with the following methods:

- addTask(task: Task): void - Adds a new task to the list.
- removeTask(id: number): void - Removes the task with the specified ID from the list.
- updateTask(id: number, task: Task): void - Updates the task with the specified ID in the list.
- getTask(id: number): Task - Returns the task with the specified ID from the list.
- getCompletedTasks(): Task[] - Returns an array of all completed tasks.
- getIncompleteTasks(): Task[] - Returns an array of all incomplete tasks.