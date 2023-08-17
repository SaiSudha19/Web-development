//higher order function is a using function in a function as arguments
function greet(name){
    console.log('hello',name)
}//global
function createGreeter(greeting){
    function greet(name){
        console.log(greeting,name())//treat name as a function
        //console.log(greeting,name) treat name as a string
    }
    //return greet('X')
    return greet
} 
//as there is a function in createGreeter function so createGreeter function is a higher order function

function getName(){
    return document.getElementById('namebox').value
}

let g1= createGreeter('good morning')
let g2= createGreeter('good evening')

console.log(typeof g1)
// console.log(g1)
// console.log(g1())
console.log(g1('raju'))
console.log(g2('raju'))
console.log(greet('raju'))
