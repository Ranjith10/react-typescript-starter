//Generic Types
function identity(arg: number):number {
    return arg
}
//convert this using generics
function identityFn<Type>(arg: Type):Type {
    return arg
}
//Established a relation between the input and output via Type
let str = identityFn('Ranjith')
//Typeof str is String
let num = identityFn(10)
//Typeof num is nuber

//keyof type operator

type PointOf = {x: number, y: number}
type P = keyof PointOf

//typeof operator - limited usecases
let s = 'hello'
let t: typeof s
// t is string type

//indexed access
type Person1 = {name: string, age:number}
type Age = Person1['age']


