window.onload= function(){
    let newtask=document.getElementById('newtask')
    let addtask=document.getElementById('addtask')
    let todolist=document.getElementById('todolist')

    addtask.onclick=function(){
        let li=document.createElement('li')
        li.innerText=newtask.value
        let xBtn=document.createElement('button')
        xBtn.innerText='X'
        xBtn.onclick=function(event){
                console.log(event.target.parentElemnt)
        }
        li.appendChild(xBtn)
        todolist.appendChild(li)
        // todolist.innerHTML+='<li>${newtask.value}</li>'
    }
}