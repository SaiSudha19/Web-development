console.log(1=='1')//true
console.log(1==='1')//false
/* abstract equality comparision(==): check the value is same or not
strict equality comparision(===):check the value and data type are equal or not */


//peculiar cases
console.log(0=='')//true
console.log(Number(''))//0 reason for above line
console.log('false'==false)//false
console.log(Number('false'))//NaN reason for above line
console.log(''==false)//true, both typecasst to 0
console.log('\n'==0)//true
console.log('\t'==0)//true
console.log('\n'=='\t')//false

//this doesn't hold good for abstract equality
//a=b,b=c...implies that ...a=c 

console.log([1,2]==[1,2])//false
//in premitive case valuse in data and in non-premitive cases like array and object the value is not data it is referance to the definition

