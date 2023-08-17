let str="Asdds"                         //3 levels from null
let num=233                             //3 levels from null
let bool=true                           //3 levels from null
let arr=[234,42,133,4]                  //3 levels from null
let obj={a:10,b:'dshd'}                 //2 levels from null
let fun=function(){console.log('yay!')} //3 levels from null

//if x and y are not primitive
//x==y:true <- means they are reference to the same  object in memory

console.log('=======types======')
console.log('typeof String',typeof String)
console.log('typeof Object',typeof Object)
console.log('typeof Boolean',typeof Boolean)
console.log('typeof Number',typeof Number)
console.log('typeof Array',typeof Array)
console.log('typeof Function',typeof Function)
// these all functions exists in Window i.e., Window.String=Sttring()

console.log(str.__proto__)//String
console.log(str.__proto__.__proto__)//Object
console.log(str.__proto__.__proto__.__proto__)//null

console.log(obj.__proto__)//Object
console.log(obj.__proto__.__proto__)//null

console.log('=======proto chain======')
console.log(str.__proto__.__proto__==obj.__proto__) //true
console.log(num.__proto__.__proto__==obj.__proto__) //true
console.log(bool.__proto__.__proto__==obj.__proto__)//true
console.log(arr.__proto__.__proto__==obj.__proto__) //true
console.log(fun.__proto__.__proto__==obj.__proto__) //true

//Everything indirectly inheruts from ths same thing that obj is inherited from
//i.e., in javascript everything is essentially a object

console.log('=======prototypes======')
console.log(obj.__proto__==Object.prototype)//true
console.log(str.__proto__==String.prototype)//true
console.log(num.__proto__==Number.prototype)//true
console.log(bool.__proto__==Boolean.prototype)//true
console.log(arr.__proto__==Array.prototype)//true
console.log(fun.__proto__==Function.prototype)//true

console.log(typeof Object.prototype)//Object
//HTMLBodyElement.prototype==document.body.__proto__  --->true

//String.prototype inherits from Object.prototype
console.log(obj.__proto__==String.prototype.__proto__)//true
console.log(String.prototype.__proto__==Object.prototype)//true


let x=Object.create(Boolean.prototype)
console.log(typeof x)//object
console.log(typeof bool)//boolen
console.log(typeof Object.create(Boolean.prototype))//object
console.log(x.__proto__==bool.__proto__)//true
//two items can have same proto but typeof may not be same

//__proto__ is a hidden pointer it points to that object from with the current object is inheritant or points to the blueprint from which it was created
//prototype is predefined these are the bluprints from which we create things

console.log(x.prototype)//undefined
console.log(x.__proto__)//boolean

console.log(str.charAt(4))//s
console.log(typeof str.charAt)//function
console.log(typeof str.charAt())//string

let str2='djabsbhb'
console.log(str.charAt==str2.charAt)//true as function of charAt is same

str.charAt=function(){ return 'x'}//it is not possible to rdefine the charAt in this way, so it doesn't make any difference

console.log(str2.charAt(0))
console.log(str.charAt(0))

console.log(str.charAt)
console.log(str.__proto__.charAt)
console.log(str.__proto__.__proto__.charAt)//undefined
console.log(String.prototype.charAt)

String.prototype.charAt=function(){return 'x'}// in thos way we can change the function of charAt
console.log(str.charAt(3))//x

//String.protype contains all default string funcctions like charAt, indexOf, substring, slice etc..


Array.prototype.joinOriginal=Array.prototype.join
Array.prototype.join=function(){
    console.log('join called on',this)
    return this.joinOriginal(...arguments)
}

/*
Array.prototype{
    ----
    joinOriginal:function(){},
    join:function(){our fun},
    ---
}
*/

let l=[123,345,567]
console.log(l.join(';'))

window.x=10
console.log(window.x)//10
delete window.x
console.log(window.x)//undefined


