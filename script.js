// Create an object representing a book
// Ex1
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
};

// Access and log 
console.log("Title:", book.title);     
console.log("Author:", book.author);    
console.log("Year:", book.year);     

// Modify the properties of the book object
book.title = "1984";
book.author = "George Orwell";
book.year = 1949;

console.log("Updated Book:", book);

// Add a method to the book object
book.getDetails = function() {
    return `${this.title} by ${this.author}`;
};

// Call the method 
console.log(book.getDetails());
// Output: 1984 by George Orwell


// Create an object representing a person
let person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function() {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Call the method 
console.log(person.getFullName());


// Write a function that takes an object as an argument and returns a string listing all the properties and their values
function displayObjectProperties(obj) {
    let properties = Object.keys(obj);
    let values = Object.values(obj);
    let result = "";

    for (let i = 0; i < properties.length; i++) {
        result += `${properties[i]}: ${values[i]}\n`;
    }

    return result;
}


let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

console.log(displayObjectProperties(car));
/*
Output:
make: Toyota
model: Corolla
year: 2020
*/


// Constructor function for creating book objects
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Create two book objects
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
let book2 = new Book("Moby Dick", "Herman Melville", 1851);

console.log(book1); 
console.log(book2); 


// Constructor function for creating book objects with a method
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getDescription = function() {
        return `${this.title} by ${this.author}, published in ${this.year}`;
    };
}

// Create a book object and call the method
let book3 = new Book("The Catcher in the Rye", "J.D. Salinger", 1951);
console.log(book3.getDescription());
// Output: The Catcher in the Rye by J.D. Salinger, published in 1951


