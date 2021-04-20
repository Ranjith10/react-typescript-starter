//Guard Clauses

//typeof type guards
function padLeft(padding: number | string, input: string) {
    if(typeof padding === 'number') {
        // padding.toLowerCase()
        return new Array(padding + 1).join(' ') + input
    }
    return padding + input
}
//The flow of the logic is guarded with first block when padding is number
//Also, the string operations cannot be performed in the first block

//Truthiness narrowing
const getUsersOnline = (users: number) => {
    if(users) {
        return `${users} are online`
    }
    return 'No one online!'
}

//The guard clause checks for truthiness 
// Null, '', undefined, 0, NaN - all this fail the truthiness test
// Theses values coerce to false

function printALl(strs: string | string[] | null) {
    if(strs && typeof strs === 'object') {
        //loop through strs
    } else if (typeof strs === 'string') {
        //do string stuff
    }
}
//the check strs - makes sure that strs is not null

//Equality narrowing
//instanceof narrowing

///Assignment narrowing

let x = Math.random() > 0.5 ? 10 : "sample"
//now x has union type of number | string based on assignment
x =1 
x = "ranjith"
//x can take either string | number
x = {a: "ra"}
//but it cant take any other data type



