/* CLOUSER:-when ever a function is borned or created whatever scopes were avilable at it's birth place 
 are caputred by the function and they remained till the function exists in the memory*/
function outer(arg1){
    // arguments key word is not captured in the clouser
    let var1=10
    let x=10
    console.log(arguments[0])
    function inner(arg2){
        let var2=20
        let x=20
        console.log(arg1,var1,arg2,var2,x)
        console.log(arguments[0])
        //arguments are used inside the function not outside the function
    }
    return inner
}
let x=outer('param1');
//typeof x='function'
//x==inner

//scope of arg1 and var1 are from lines 2 to 7

x('param2')