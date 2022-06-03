const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'))
//makes it into an array - can test out by console log
const questionCounterText = document.getElementById('questionCounter')
const scoreText = document.getElementById('score')
const progressText = document.getElementById('progressText')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'In which country do red onions originate?',
        choice1: 'China',
        choice2: 'South Africa',
        choice3: 'Italy',
        choice4: 'France',
        answer: 3
    },
    {
        question: 'What is the most popular soup flavor sold in the UK?',
        choice1: 'Tomato',
        choice2: 'Split Pea and Barley',
        choice3: 'Potato and Leek',
        choice4: 'Chicken and Mushroom',
        answer: 1
    },
    {
        question: 'What type of pastry are profiteroles made out of?',
        choice1: 'Phyllo Pastry',
        choice2: 'Choux Pastry',
        choice3: 'Croissant Dough',
        choice4: 'Flaky Pastry',
        answer: 2
    },
    {
        question: 'Grenadine is obtained from which fruit?',
        choice1: 'Maraschino Cherry',
        choice2: 'Meyer Lemon',
        choice3: 'Black Cherry',
        choice4: 'Pomegranate',
        answer: 4
    },
    {
        question: 'How many kernels will you find on an average ear of corn?',
        choice1: '200',
        choice2: '400',
        choice3: '600',
        choice4: '800',
        answer: 4
    },
    {
        question: 'How many segments are in most oranges?',
        choice1: '6',
        choice2: '8',
        choice3: '10',
        choice4: '12',
        answer: 3
    },
    {
        question: 'Which is the most stolen food in the world?',
        choice1: 'Beef ribs',
        choice2: 'Bread',
        choice3: 'Cheese',
        choice4: 'Rice',
        answer: 3
    },
    {
        question: 'What is the most widely eaten meat in the world?',
        choice1: 'Pork',
        choice2: 'Beef',
        choice3: 'Chicken',
        choice4: 'Fish',
        answer: 1
    },
    {
        question: 'In which country was ice cream invented?',
        choice1: 'Mexico',
        choice2: 'China',
        choice3: 'Italy',
        choice4: 'Germany',
        answer: 2
    },
    {
        question: 'What was the first food eaten in space?',
        choice1: 'Chocolate Bar',
        choice2: 'Peanuts',
        choice3: 'Beef Jerky',
        choice4: 'Applesauce',
        answer: 4
    },
]

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
        //go to the end page 
        return window.location.assign('/end.html')
    }
    questionCounter++
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`
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

startGame()