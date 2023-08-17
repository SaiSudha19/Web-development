//let functions in capital letters are used as class and small letters are not used as class
function Person(name,age){
    this.name=name
    this.age=age
}

function Student(){

}

let p1=new Person('rahul',22)

console.log(new Person('raju',20))
console.log(Person('raju',20))//undefined

console.log(Person)
console.log(new Person())
console.log(Person())//undefined

Student.prototype=Object.create(Person.prototype)//can't chane the prototype like this
console.log(Student.prototype=Object.create(Person.prototype))
console.log(Student.prototype.__proto__==Object.prototype)//false