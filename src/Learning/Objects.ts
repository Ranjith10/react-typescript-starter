// Object Types
function greet(person: {name: string, age: number}) {
    return `Hello ${person.name}`
}
//replace the type for person using interface or type
interface Person {
    name: string,
    age?: number,
}
let ranjith : Person = {
    name: "ranjith",
}
type PersonId = {
    name: string,
    age: number,
}
function greetPerson(person: Person) {
    return `Hello ${person.name}`
}
function greetPersonId(person: PersonId) {
    return `Hello ${person.name}`
}

//optional properties 
interface Points {
    x: number,
    y: number,
    radius?: number,
}

function parseShape( point: Points) {
    // point.x 
}
parseShape({ x: 1, y: 2})
parseShape({x: 1, y: 2, radius: 8})
//both are valid

//we can rewrite it as 
//destructure and then add default values
function parseShapeUpgraded({x, y, radius = 0} : Points) {
}

//read-only properties
interface Random {
    readonly props: string
}
function doSomething(d: Random) {
    console.log(d.props)
    d.props = "ra"
}
//Cannot assign to 'props' because it is a read-only property

//Extending
interface BaseAddress {
    name: string, 
    street: string,
    city: string,
    country: string,
    postal?: number,
}

interface FullAddress extends BaseAddress {
    county: string,
}

//Intersection 

interface Colorful {
    color: string,
}
interface Circle {
    radius: number
}
type ColorfulCirlce = Colorful & Circle

//Want props from two interfaces - create a third inteface extending other two
//Want intersecting props from two interfaces - create a type that intersects the other two

//Generic obj types

interface Box <Type> {
    contents: Type
}

let stringBox : Box<string> = {
    contents : 'sample'
}
//ReadonlyArray Type 