let userInput = document.querySelector('#value');

let button = document.querySelector('#button');

let score = document.querySelector('.score');

let highScore = document.querySelector('.highScore');





button.addEventListener('click', () => {


    if (score.textContent > 0   ) {
        
        
        var myNumber =       5       // Math.round(Math.random() * 20);
     
        console.log(myNumber)
        console.log(userInput.value)
        console.log(score.textContent)

        
        if (userInput.value == myNumber) {
            alert("You Win Guess Number is : " + myNumber)

            score.textContent = +score.textContent + 1

            if (highScore.textContent < score.textContent) {
                highScore.textContent = score.textContent
            }

        } else {
            alert("You loose  correct number is : " + myNumber)

                (score.textContent = +score.textContent - 1)

        }


    } else {
        alert("Sorry You Loose the Game  Play Again So Click Again Button ")
    }
});