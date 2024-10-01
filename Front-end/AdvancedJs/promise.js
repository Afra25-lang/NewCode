// function student(score){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(score>=50){
//                 resolve("pass");
            
//             }else{
//                 reject("fail");
//             }
//         } ,3000);

//     }
// );
// }
// async function studentResult(score){
//     try{
//         console.log("evaluating score...");
    
//     const result = await student(score);
//     console.log(`student result : ${result}`)
//     }
//     catch(error){
//         console.log(`student result: ${error}`)
//     }
    
// }
// studentResult(20);

// const data={id:1,name:"afra"}


function fetchData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({ Id:1,name:"john Doe"});
        } ,2000)
    }
);
}
 async function getUserData(){
    try{
        console.log("data fetched...");

        const data= await fetchData();
        console.log(`data fetched: ${id,name}`)
    
    }
    catch(error){
        console.log(`error fetching data: ${error}` )
    }
 }
 getUserData();