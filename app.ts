function add(n1:number|string , n2:number|string){
    if (typeof n1 == "number"&& typeof n2 =="number"){
        return n1+n2;
    }
    return n1.toString()+n2.toString();
}

const number1 = 3
const number2 = 2 

console.log(add(number1,number2))


const person = {
    name :'ahmed',
    age:20 
}

console.log()