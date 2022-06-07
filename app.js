const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'))
//makes it into an array - can test out by console log
const questionCounterText = document.getElementById('questionCounter')
const scoreText = document.getElementById('score')
const progressText = document.getElementById('progressText')
const progressBarFull = document.getElementById('progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = []

fetch("questions.json")
.then( response =>  response.json())
.then( loadedQuestions => {
    questions = loadedQuestions
    startGame()
})
.catch( err => {
    console.log(err)
})


fetch("questions.json")
.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
    }
    return response.json();
})
.then(data => {
    // ...your code using `data` here...
})
.catch(error => {
    // ...show/handle error...
});

//CONSTANTS 
const CORRECT_BONUS = 10
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions] //need full copy to spread questions into new array
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        //go to the end page 
        return window.location.assign('end.html')
    }
    questionCounter++
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`
    //update the progress bar
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question
    choices.forEach( choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    //takes availableQuestions array and get rid of the question we just used so it doesn't repeat
    availableQuestions.splice(questionIndex, 1) 
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        //want a correct class & incorrect class
        // let classToApply = 'incorrect'
        // if (selectedAnswer == currentQuestion.answer) {
        //     classToApply = 'correct'
        //     console.log(classToApply)
        // }
        const classToApply = 
            selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
            if(classToApply === 'correct') {
                incrementScore(CORRECT_BONUS)
            }
            //grabbing the whole container of the choice
        selectedChoice.parentElement.classList.add(classToApply)
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
            
        }, 700);
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

