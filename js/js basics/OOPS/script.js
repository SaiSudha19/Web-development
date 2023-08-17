//Object Oriented Programmming in JavaScript

//allows to create objects without defining the class

//only way to creating javascript (JSON)-JavaScript Object Notation
var bird ={
    x:100,
    y:20,
    color:"blue",
    eggs:["one","two","three"],

    fly:function(){
        console.log("bird is flying",this.x,this.y)// this refers to the current object
    } 
}; // ; not mandatory
console.log(bird)

console.log(bird.fly())

bird.x=120
console.log(bird)

console.log(bird.eggs)

//for loop
for(let i=0;i<bird.eggs.length;i++){
    console.log(bird.eggs[i])
}

//for each loo
bird.eggs.forEach(function(val,idx){
    console.log(idx,val)
});



//one way of crating objects
var apple={
    taste:"sweet",
    color:"red"
}

//another way of creating objects
function fruit(taste,color){
    this.color=color
    this.taste=taste
}

//new keyword
let mango=new fruit("sweet","yellow")
let orange=new fruit("sour","orange")

console.log(apple)
console.log(orange)
console.log(apple.taste)
console.log(orange.taste)

//class keyword (ECMAScript i.e.,javascript 2015)
//class declaration(not hoisted)
class fruitClass{
    constructor(taste,color){
        this.color=color
        this.taste=taste
    }
};
let kiwi=new fruitClass("sour","green")
console.log(kiwi)

//class expression(not hoisted)
let fruitClass2=class{
    constructor(taste,color){
        this.color=color
        this.taste=taste
    }
}
let kiwi2=new fruitClass2("sour","green")
console.log(kiwi2)