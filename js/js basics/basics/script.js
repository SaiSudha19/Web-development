let a=10;
console.log(a)

let b=[1,2,3,4,5]
console.log(b)

console.log("hello world")

//javascript
//variables, arrays, functions, loops, classses,objects

c=20 //global variable
var d=30 //variables having function scope
let e=50 //variable having block scope

function fun(){
    let a=5
    if(a==5){
        let b=10
        let m=7
        var j=40
        k=100
        console.log("inside",b)
        console.log("inside",m)
        console.log("inside",j)
    }
    console.log("outside",b)
    //console.log("inside",m)// reference eror m is not present
    console.log("inside",j)
}
//console.log("inside",j)// reference eror j is not present
fun()
console.log("global",k)// as k is present in the function we should call the function as mentioned above line

square_root(10)// due to hosting the function will be on the top 
//sqrt_n(10)// error 
//aswe reperesented as var it won't go to top hosting is not applicable for these

//function declaration
function square_root(n){
    console.log("in first sqrt fn")
    console.log(Math.sqrt(n))
    //return Math.sqrt(n)
    return "hello"
}


//Function hosting(function declaration are hosting functions,function expressions are not hosting functions)

//function expression
var sqrt_n=function(){
    console.log("in second sqrt fn")
    return
}

square_root(10)
sqrt_n(10)


//arrays
let arr=["apple","mango","gauva"]
console.log(arr)
console.log(arr.length)
console.log(arr["length"])

for(let i=0;i<5;i++){
    console.log(arr[i])
}

arr.push("banana") //insert at back
console.log(arr)

arr.pop() // emove from back
console.log(arr)

console.log(arr.indexOf("mango"))//linear search i.e., to find index

arr.shift() //removes the first element
console.log(arr)

arr.unshift("kiwi") //adds the element at the front of the array
console.log(arr)

//conditional statement
if(arr[0]=="apple"){
    console.log("apple")
}
else{
    console.log("no it is ",arr[0])
}




