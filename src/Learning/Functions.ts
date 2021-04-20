//Function type expressions

import { timeStamp } from "console"

function fun (a: string) : void {
    //some logic   
}

//generic functions 
//Generics provide a way to make components work with any data type and not restrict to one data type 
function firstElement (arr: any[]) {
    return arr[0]
}
const st= firstElement(['a', 'b'])
//st is of type any
const nu = firstElement([1,2,3])
// nu is of type any

//arr can be of 'any' type - so the return type is also 'any'
// to make this better - we use generics  
function returnFirstElement <Type> (arr: Type[]) : Type {
    return arr[0]
}

const randomFun = <Type>  (arr: Array<Type>) : Type => {
    return arr[0]
}

//By adding type parameter 'Type' at two places - we created a link between input and output
const str = returnFirstElement(['a', 'b'])
//str is of type string
const num = returnFirstElement([1,2,3])
// num is of type number

//Constraints - sometimes we want to restrict generics to work on subset of values
function longest<Type extends {length: number}>(a: Type, b: Type) {
    if(a.length > b.length) {
        return a 
    }
    return b
}
const longArr = longest([1,2,4], [1,2])
const longStr = longest('ranjith', 'kumar')
const longInt = longest(10, 23) //number doesnt have length property

//Specify Type Arguments
function combine<Type>(a: Type[], b: Type[] ) {
    return a.concat(b)
}
const arr = combine<number | string >([1,23], ['hello']) 

//Optional params
function sampleFunc( a?: number | string) {
}
sampleFunc()
sampleFunc(10)
sampleFunc('op')
//all three are valid

//Function overloads - want to call a single function - in many ways - based on params 
function makeDate() {} -// can accept date, year or just timestamp 

//Param destructuring
function sum({a, b, c} : {a : number; b : number; c : number;}) {
    return (a+b+c)
}

