//Static type checking

let message = "Hello world"
message.toLowerCase()
message() 
//this expression is not callable - identified before running the code 

//Non-exception failure

const user = {
    name: 'Ranjith',
    job: 'software dev'
}

let firstName = user.firstName 
//Property 'firstName' does not exist on '{name: string, job: string}'
//.js this woild return undefined

const randomGenerator = () => {
    const value = Math.random() < 0.5 ? "a": "b"
    if(value !== "a") {
        //do something
    } else if(value === "b") {
        //do something else 
    }
}
//This condition will always false since types 'a' and 'b' have no overlap - unreachable logic

//Tooling
// Typescript compiler 
//compiles .ts files and generates a .js file

//Explicit Types 
const greetWithName = (person: string, date: Date) : string => {
    return `Hi ${person}, today is ${date.toDateString()}`
}
greetWithName("Ranjith")
//Expected two arguments, but got 1
greetWithName("Rajith", Date())
//Arg of type String is not assignable to param of type 'Date'
greetWithName("Ranjith", new Date())

//Erased Types 
// The output of Typescript compiler of above function will be 
function greetWithName(person, date) {
    return "Hi" + person + ", today is " + date.toDateString()
}
//Type annotations will be erased 
//Downlevelling - ES6+ features will be downlevelled to ES5 and lower stable versions for browser compatibility

