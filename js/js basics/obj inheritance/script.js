let obj1={
    a:10,
    b:20,
    c:30
}

let obj2=Object.create(obj1)
obj2.p='adg'
obj2.q='pioiu'
obj2.r='wer'

console.log(obj2)
console.log(obj2.a)

console.log(obj1==obj2)//false
console.log(obj2.__proto__)
console.log(obj2.__proto__==obj1)//true

let obj3=Object.create(obj2)

/*while reading
obj2.a -> it will try to find a in obj2
       -> if not found,
       ->it will try to find it in obj2.__proto__
       ->if not found
       ->it will try to find it in obj2.__proto__.__proto__
       ->...and so on...
       ->till ._proto__ becomes null
*/

console.log(obj2.__proto__)
console.log(obj2.__proto__.__proto__)
console.log(obj2.__proto__.__proto__.__proto__)

console.log(obj3.__proto__==obj2)//true
console.log(obj3.__proto__.__proto__==obj1)//true

obj1.a++
console.log(obj1.a)
console.log(obj2.a)

obj2.a++
console.log(obj1.a)
console.log(obj2.a)
console.log(obj3.a)

//this is not class based heritance thihs is proto based heritance