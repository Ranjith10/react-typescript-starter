//Primitive types
//number
//string
//boolean
// Do not use Capitalised types (String, Number, Boolean) - legal but refers to some special built-in types.

//Array
//number [], string []
//Array<number> -> Generics 

//any - fallback to JS 
var a : any = 'ranjith'
a() // will not throw TS errors


//function param type annotations
function getName(firstName: string, lastName: string) {
    return `${firstName} ${lastName}`
}
//Function return type annotation
function getName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`
}

//Anonymous Functions - Contextual Typing 
// 
const names = ["a", "b", "c"] 
names.forEach(name => name.toLowercase())
//Property 'toLowercase' does not exist in type 'string'
//In this case, the 'name' didn't have any type annotation
//but based on the context of the function - type is inferred

//Object
function point (pt: {x: number, y: number}) {
    return pt.x + pt.y
}

//Optional properties
const printName = (firstName: string, lastName?: string) {
    console.log(`${firstName} ${lastName}`)
}

printName("Ranjith", "kumar")
printName("Ranjith") 
//This is still valid as the 2nd param is an optional property

//Union types - build new types using existing ones with operators
//A function that can operate on numbers or string
function unionExample(item: number | string) {

}
unionExample('sa')
unionExample(10)
function unionExampleOne(item: number | string) {
    return item.toUpperCase()
    //toUpperCase does not exist on type 'number | string'
}
//Solve by checking type - like in JS
function unionExampleOne(item: number | string) {
    if(typeof item === 'number') {
        //some logic
    } else {
        return item.toUpperCase()
    }
}

//Type Aliases
// used when same type is needed at multiple places - u give a common name for it

type Point = {
    x: number,
    y: number
}

let sample: Point = {x: 10 , y: 20}

//interfaces - another way to name object types
interface newPoint {
    x: number,
    y: number
}

//Diff types and interface
//Extension - using 'extends', using '&'

//Type Assertion - stripped when compiled
let canvas = <HTMLCanvasElement>document.getElementById('canvas')

//null & undefined
//enable strictNullChecks - to avoid unwanted behaviour
