const res1 = document.getElementById("inp1")
const res2 = document.getElementById("inp2")

const btn2 = document.getElementById('btn2')
console.log(btn2)

const table1 = document.getElementById("table1")

btn2.onclick=()=>{
    row=document.createElement('tr')
    nameCell=document.createElement('td')
    numCell = document.createElement('td')
    delCell = document.createElement('td')
    editCell = document.createElement('td')



    nameCell.innerHTML= res1.value
    numCell.innerHTML = res2.value

    const delbtn=document.createElement('button')
    delbtn.innerHTML="Delete"
    delbtn.onclick= delete1
    delCell.appendChild(delbtn)

    const editbtn=document.createElement('button')
    editbtn.innerHTML="edit"
    editbtn.onclick= edit1
    editCell.appendChild(editbtn)







    row.appendChild(nameCell)
    row.appendChild(numCell)
    row.appendChild(delCell)
    row.appendChild(editCell)
    console.log(row)
    console.log(table1)
    table1.appendChild(row)
   




    res1.value=""
    res2.value=" "
}

function delete1(e){
    console.log(e.target)
    e.target.parentElement.parentElement.remove()
}



function edit1(e){
    console.log(e.target)
    items=e.target.parentElement.parentElement.children
    res1.value=items[0].innerHTML
    res2.value=items[1].innerHTML
}


btn3.onclick=()=>{
    items[0].innerHTML=res1.value
    items[1].innerHTML=res2.value
    

}



















