// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const ans = Math.floor(Math.random() * (maxNum - minNum + 1))+minNum ;

console.log(ans);

let attemps = 0;
let guess ;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum} `)
    gues = Number(guess);
    if(isNaN(guess)){
        window.alert("Plea")
    }
    running == false
}
