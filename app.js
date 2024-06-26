/*console.log("hello");

class Customer{
    name;
    age;
    address;
    constructor(name, age, address){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    setName(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

    
}

let Customer01 = new Customer("Dan", 24, "123 Main St");
console.log(Customer01.getName());*/
let count = 0;

let randomNumber = Math.floor(Math.random() *10)+1;
console.log(randomNumber);

function guess(){
    count++;
    if(count == 4){
        alert("Game over!🤯");
        return;
    }
    let guess = document.querySelector("input").value;
    if(guess == randomNumber){
        alert("Correct!🤩");
    }
    else if(guess > randomNumber){
        alert("Too high!😏");
    }
    else{
        alert("Too low!🤭");
    }
}
function restart(){
    count = 0;
    randomNumber = Math.floor(Math.random() *10)+1;
    console.log(randomNumber);
    document.querySelector("input").value = "";
}