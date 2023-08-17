/*Classes are primarily syntactical sugar(it is syntax that is designed to make things easier to read or to express and it can be removed from the language without any effect)
 over existing prototypr based inheritance*/

 class person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    isAdult(){
        //return this.age>=18
        if (this.age>=18)
        {console.log('is adult')}
        else
         console.log('not an adult')
    } 
 }

 let p1=new person('john deo',22)
 let p2=new person('leo',11)


 console.log(p1)
 console.log(typeof person)//function, there is no new data type called class
console.log(p1.__proto__==person.prototype)//true
console.log(p1.__proto__.__proto__==Object.prototype)//true

console.log(p1.isAdult())//true
console.log(p2.isAdult())//fale

class student extends person{
    constructor(name,age,grade){
        super(name,age)
        this.grade=grade
    }
}

let s1=new student('harry',13,5)
let s2=new student('gowtham',18,7)

console.log(s1)
console.log(s2)
console.log(s1.isAdult())
console.log(s1.__proto__==student.prototype)//true
console.log(s1.__proto__.__proto__==person.prototype)//true
console.log(s1.__proto__.__proto__.__proto__==Object.prototype)//true

//inhertance chain
//Object.prototype->person.prototype->student.prototype

//no inheritance between the classes( actually they arer fuctions)
//Object-x ->pgrson-x ->student