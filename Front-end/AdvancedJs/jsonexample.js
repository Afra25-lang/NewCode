const obj= {
    name:"johne",
    age: 23,
    city:"ponnani"
};
const jsonstr=JSON.stringify(obj);
console.log(jsonstr)

const jsonstring ='{"name":"anu","age":20}'
const obj1=JSON.parse(jsonstring);
console.log(obj1)
console.log(typeof(obj1))

