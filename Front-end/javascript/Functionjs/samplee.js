const para = document.getElementById('image');
const button = document.querySelector('#btn');

const button3 = document.getElementById('theme');
const body2= document.querySelector('body')













btn.onclick= function(){
    para.innerHTML="Lorem ipsum dolor sit amet consectetur,<br> adipisicing elit. Tenetur, eligendi numquam. Amet quod inventore quasi, temporibus, perferendis optio, mollitia facilis aspernatur officia libero eaque nemo facere ea";
    para.style.fontSize ='20px'
    para.style.padding = '50px'

   
    
}


count.onclick=function(){

}

const counting = document.querySelector('#counter')
count= 0;
const countbtn = document.querySelector('#count')
countbtn.onclick=counter

function counter(){
    count++
    counting.textContent=count;
    console.log(count)
}


counting.style.fontSize = '30px'
countbtn.style.width = '130px'
countbtn.style.height = '50px'
countbtn.style.background = 'black'
countbtn.style.color= 'white'
 

button3.onclick =()=>{
    console.log("test")
    body2.classList.toggle('dark');
}





