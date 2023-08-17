//this is uded in inside the class
//in most cases, the value of this is determined by how a function is called
//a property of an execution context(global,function or eval) that, in non-strict mode, is always a reference to an object and in strict mode can be any value

function checkthis(){
    console.log(this)
}
console.log(checkthis()) 

let obj={
    a:10,//"a":10
    b:'asdsa',//right side can be any value left side can be a string
    c:true,
    d:function() {
        console.log(this.a)
    },
    e:{
        l:234,
        m:'haj',
        n:function(){
            console.log(this)
        },
    },
    10:235,
    true:'abxcd',
}
//acess the keys
console.log(obj.a)// or obj['a]
console.log(obj['10'])
console.log(obj['true'])