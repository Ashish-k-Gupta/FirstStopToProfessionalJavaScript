const allQuestions = [
    { question: "JavaScript was invented in 1995?", answer: "true" },
    { question: "Strings in JS are editable values", answer: "false" },
    { question: "1+1 === 2", answer: "true" },
    { question: "\'1\'+\'1\' === \'2\'", answer: "false" },
    { question: "typeof [\'J\'\,\'S\'] === \'array\'", answer: "false" }
]

let screen = document.querySelector('.screen');
let currentQuestion = 0;
let answerByUser = '';
let totalScore = 0;
let score = document.querySelector('.score');
let nextQuestionButton = document.querySelector('.next')
nextQuestionButton.addEventListener('click', () => nextQuestion())

let trueButton = document.querySelector('.true')
trueButton.addEventListener('click', () => isCorrect('true'))

let falseButton = document.querySelector('.false')
falseButton.addEventListener('click', () => isCorrect('false'))


function init() {
    screen.textContent = allQuestions[currentQuestion].question
}

function nextQuestion() {
    if (currentQuestion < allQuestions.length) {
        currentQuestion++;
        screen.textContent = allQuestions[currentQuestion].question;
    } else {
        screen.textContent = "Game Over!"
    }
}

function isCorrect(answerByUser) {
    if (answerByUser == allQuestions[currentQuestion].answer) {
        totalScore++;
        score.textContent = totalScore;
        setTimeout(nextQuestion(), 2000);
    } else {
        nextQuestion()
    }
}

init()