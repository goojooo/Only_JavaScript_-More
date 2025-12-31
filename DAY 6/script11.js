// NUMBER GUESSING GAME

const minNum = 1;
const maxNum = 100;
const ans = Math.floor(Math.random() * (maxNum - minNum + 1))+minNum ;

// console.log(ans);

let attemps = 0;
let guess ;
let running = true;

while(running){

    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum} `)
    gues = Number(guess);
    if(isNaN(guess)){
        window.alert("Please enter valid number...")
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("Please enter valid number...")
    } else{
        attemps++;
        if(guess < ans){
            window.alert("TOO LOW - Try again...")
        } else if(guess > ans) {
            window.alert("TOO HIGH - Try again...")

        } else{
            window.alert(`CORRECT! answer is ${ans}, It took you ${attemps} attemps...`)

            running == false
        }
    }
}
