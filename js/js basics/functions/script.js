console.log(beta())
//hoisting: all the function definitions will be moved on the top

function alpha(){
    return "A"
}//hoisted function

function beta(){
    return "B"
}
//console.log(gamma()) ---->ReferenceError- if a variable is defined with let rather than the function then we can't use it before it has been created
let gamma= function(){
    return "C"
}//not hoisted function


function area(height,width){
    console.log('height= ',height,'width= ',width)
    if(!width)//width not provided//if(typeof width=='undefined')
    {
        return Math.PI*height*height
    }//polymorphism
    return height*width
}
console.log('area 3,4',area(3,4))
console.log('area 4',area(4))//NaN- Not a Number

function hello() {
    //let arguments='asbdf'
    console.log('hello world'+arguments[0]+arguments[1])
    //console.log('hello world',arguments)

}// all the parameters of the function are avilable in array called arguments
hello(1,2)
hello('Rahul', 'Vamsi')

