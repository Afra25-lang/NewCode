const buttun1 = document.querySelector("#theme");
const body1= document.querySelector('body')
// const div1= document.getElementById("div1")
// const button= document.getElementById("click")
// const button1 = document.getElementById("div2")
console.log(buttun1)
buttun1.onclick =()=>{
    console.log("test")
    body1.classList.toggle('dark')
}

// button.onclick =function(){
//     if(div1.style.visibility=="hidden"){
//         div1.style.visibility="visible";
//         div1.classList.add("div1")
//         div2.classList.add("div2")
//         console.log(button)

//     }else {
//         div1.style.visibility="hidden"
//         div1.classList.remove("div1")
//     }
   

// }