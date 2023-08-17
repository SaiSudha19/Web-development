function a(){
    return 1
}
/*or
let a=function (){
    return 1
}
*/

let b=2

console.log( 13313,typeof 13313)//number(for int and float)
console.log(2345.32445,typeof 2345.32445)//number
console.log('a',typeof 'a')//string(for char and string)
console.log("asjdnsdnfmfng",typeof "asjdnsdnfmfng")//string
console.log(true,typeof true)//boolean
console.log(null,typeof null)//object
console.log(undefined,typeof undefined)//undefined

console.log(a,typeof a)//function(it's also a data type)
console.log(a(),typeof a())//or console.log(1,typeof 1)

a()
// console.log(b())-run error(type error-when the datatype doesn't match)
console.log(a(),b,b)// or console.log((a),(b))
console.log(true, typeof true)
//lines after the error will not be printed