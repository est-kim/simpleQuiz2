const quizContainer = document.getElementById('quiz')
const resultsContainer = document.getElementById('results')
const  submitButton = document.getElementById('submit')

function buildQuiz() {
    const output = [] // empty variable to store the HTML output

    //for each question... 
    myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [] //empty variable to store possible list of answers

        //for each available answer... 
        for(letter in currentQuestion.answers) {
            //add an HTML radio button
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            )
        }
        output.push(
            `<div class = "question"> ${currentQuestion.question} </div>
            <div class ="answers"> ${answers.join('')} </div>`
        )

    })
    quizContainer.innerHTML = output.join('')
}

function showResults(){

}

buildQuiz();

submitButton.addEventListener('click', showResults)

const myQuestions = [
    {
      question: "In which country do red onions originate?",
      answers: {
        a: "China",
        b: "South Africa",
        c: "Italy",
        d: "France"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the most popular soup flavor sold in the UK?",
      answers: {
        a: "Tomato",
        b: "Split pea and barley",
        c: "Potato and Leek",
        d: "Chicken and Mushroom"
      },
      correctAnswer: "a"
    },
    {
      question: "What type of pastry are profiteroles made out of?",
      answers: {
        a: "Phyllo Pastry",
        b: "Choux Pastry",
        c: "Croissant Dough",
        d: "Flaky Pastry"
      },
      correctAnswer: "b"
    },
    {
      question: "Grenadine is obtained from which fruit?",
      answers: {
        a: "Maraschino Cherry",
        b: "Meyer Lemon",
        c: "Black Cherry",
        d: "Pomegranate"
      },
      correctAnswer: "d"
    },
    {
      question: "How many kernels will you find on an average ear of corn?",
      answers: {
        a: "200",
        b: "400",
        c: "600",
        d: "800"
      },
      correctAnswer: "d"
    },
    {
      question: "How many segments are in most oranges?",
      answers: {
        a: "6",
        b: "8",
        c: "10",
        d: "12"
      },
      correctAnswer: "c"
    },
    {
      question: "Which is the most stolen food in the world?",
      answers: {
        a: "Beef ribs",
        b: "Bread",
        c: "Cheese",
        d: "Rice"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the most wifely eaten meat in the world?",
      answers: {
        a: "Pork",
        b: "Beef",
        c: "Chicken",
        d: "Fish"
      },
      correctAnswer: "a"
    },
    {
      question: "In which country was ice cream invented?",
      answers: {
        a: "Mexico",
        b: "China",
        c: "Italy",
        d: "Germany"
      },
      correctAnswer: "b"
    },
    {
      question: "What was the first food eaten in space?",
      answers: {
        a: "Chocolate Bar",
        b: "Peanuts",
        c: "Beef Jerky",
        d: "Applesauce"
      },
      correctAnswer: "d"
    }
  ];

