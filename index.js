// const inputVal = document.querySelector("input")
// const inputButton = document.getElementsByClassName("btn")[0]


// function displayVal(){
//     alert(inputVal.value)
// }

// inputButton.addEventListener("click",function (e){
// e.preventDefault()
// alert(inputVal.value)
// })




// Get your guess number from the input value 
const inputVal = document.querySelector("input")

// Get your button element 
const inputButton = document.getElementsByClassName("btn")[0]

// Generate guess
const actualguess = 10

// Check if guess is the same with user guess 
function checkGuess(userGuess, actualGuess){
// function body where implementation happens 

// if guess is the same, user wins
if (userGuess.length > 0) {
    if (Number(userGuess) === actualguess){
        alert("correct guess, your head dey there");
}


// Else if guess is not the same, user loses 
else if (userGuess !== actualguess) {
alert("Try get sense na, Guess agagin");
}
return

}
alert("Input is empty")
}

inputButton.addEventListener("click", function (e) {
     e.preventDefault()
    // input.value equals userGuess during function definition AND
    // actualGuess equals actualGuess during function 
    checkGuess(inputVal.value, actualguess);
}
);
























// function Add(a, b){
//  return a + b
   
// }

// console.log(Add(10,60))
// console.log(Add(16,30))

