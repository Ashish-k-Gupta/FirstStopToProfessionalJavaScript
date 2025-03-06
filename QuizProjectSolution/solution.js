const statement = document.getElementById('statement');
const optionButtons = document.querySelector('#options').children;
const explanation = document.getElementsByClassName('explanation')[0];
const nextQuestion = document.querySelector('#nextQuestionButton')
const scoreOutOf = document.querySelector('#scoreOutOf')
const totalScore = document.querySelector('#totalScore')
let currentQuestion = 0;

const fact = [
    {
        statement: "Arrays are just like objects?",
        answer: "true",
        explanation: 'Arrays are a kind of object with special properties'
    },
    {
        statement: "JavaScript was invented in 1995?",
        answer: true,
        explanation: 'Arrays are a kind of object with special properties'
    },
    {
        statement: "Strings in JS are editable values",
        answer: false,
        explanation: 'Arrays are a kind of object with special properties'
    },
    {
        statement: "1+1 === 2",
        answer: true,
        explanation: 'Arrays are a kind of object with special properties'
    },
    {
        statement: "\'1\'+\'1\' === \'2\'",
        answer: false,
        explanation: 'Arrays are a kind of object with special properties'
    },
    {
        statement: "typeof [\'J\'\,\'S\'] === \'array\'",
        answer: false,
        explanation: 'Arrays are a kind of object with special properties'
    }
]
nextQuestion.disabled = true;
statement.textContent = fact[currentQuestion].statement
explanation.textContent = fact[currentQuestion].explanation


const isCorrect = (userInputString) => {
   return userInputString === fact[currentQuestion].answer.toString()
}


const disableButton = (button) => button.setAttribute('disabled', true);
const enableButton = (button) => button.removeAttribute("disabled")
nextQuestion.addEventListener('click', () => moveToNextQuestion())


for (let buttons of optionButtons){
    buttons.addEventListener('click', (event) => {
    explanation.textContent = fact[currentQuestion].explanation
    for (let inactiveButton of optionButtons){
        disableButton(inactiveButton);
    }

    if(isCorrect(event.target.value)){
        console.log(isCorrect(event.target.value))
        buttons.classList.add('correct')
        totalScore.textContent = Number(totalScore.textContent) + 1; 
    }else{
        console.log(isCorrect(event.target.textContent))
        buttons.classList.add('incorrect')
    }
    scoreOutOf.textContent=  Number(scoreOutOf.textContent)+1;
    enableButton(nextQuestion)
})

}


function moveToNextQuestion(){
    if(currentQuestion < fact.length-1){
    currentQuestion++;
    statement.textContent = fact[currentQuestion].statement
    explanation.textContent = fact[currentQuestion].explanation
    console.log(currentQuestion)
    for(let activeButton of optionButtons){
        enableButton(activeButton)
        activeButton.classList.remove('correct', 'incorrect')
    }
}
else
{
        console.log(currentQuestion)
        statement.textContent = ("No More Question! Game Over!").toUpperCase()
        explanation.textContent = ""
        nextQuestion.disabled = true;

    }

}

