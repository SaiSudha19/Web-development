window.onload=function(){
    let num=this.document.getElementById('num')
    let list=this.document.getElementById('list')
    let print=this.document.getElementById('print')

    print.onclick=function(){
        let start=new Date().getTime()

        let N=parseInt(num.value)
        //(2st way)let listHTML=' '
        for(let i=1;i<=N;i++){
            //(1st way)list.innerHTML+='<li>'+i+'</li>'
           // (2st way)listHTML+='<li>'+i+'</li>'
           let item= document.createElement('li')
           item.innerText=i
           list.appendChild(item)
            //to avoid the inner.HTML inside the nested loop we use this
        }
        //(2st way)list.innerHTML=listHTML
        //never append innerHTML inside the for loop  to reduce time
        console.log(new Date().getTime() - start)
    }
}
//new Date()
//new Date().getTime()//epoch time or unix time- no.of sec that have passsed since 00:00:00 on 1 jan 1970
