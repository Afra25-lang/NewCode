const div1 = document.getElementById("mydiv");
const btn = document.querySelector("#btn");
const btn4 = document.querySelector("#btn")
btn.onclick=function(){
    div1.innerHTML = "content changed";
    div1.style.color = 'red'
    div1.style.backgroundColor = 'black'
    div1.style.fontSize =  '30px'
    div1.style.maxWidth = '300px'
    div1.style.border = '3px solid white'
     div1.style.height = '300px'
     div1.style.padding = '30px'
    

};
const list = document.querySelectorAll(".myclass");
const classbtn = document.getElementById("classbtn")

// console.log(classbtn)
// classbtn.onclick=function(){

//     for(item of list){
//         console.log(item)
//         item.textContent = "content changed";
//     }
// }
classbtn.onclick=function(){
    list.forEach(function(item){
        item.textContent ="content change";
        item.style.backgroundColor = 'blue'
        item.style.color = 'white'
        item.style.border = '1px solid black'
        item.style.padding = '10px'
        item.style.height = '50px'
        item.style.Width = '100px'
        item.style.margin = '30px'
    });
}

count.onclick=function(){
    
}

const heading1 = document.querySelector("h1")
console.log(heading1)
heading1.style.color = 'red'


const counterdiv = document.querySelector("#counter")
count=0
const countbtn=document.querySelector("#count");
countbtn.onclick=counter

function counter(){
    count++
    counterdiv.textContent=count;
}

const image = document.querySelector("#image")
const butt = document.querySelector("#button");
console.log(image)

butt.onclick= function(){
    image.style.backgroundImage = "moddel.jpg"


}




