
let count = 0;

let randomNumber = Math.floor(Math.random() *10)+1;

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
    document.querySelector("input").value = "";
}