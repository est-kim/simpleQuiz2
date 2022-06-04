const username = document.getElementById('username')
const saveScoreBtn = document.getElementById('saveScoreBtn')
const finalScore = document.getElementById('finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')
//saves as a string from an empty array or gets empty array
const highScores = JSON.parse(localStorage.getItem('highScores')) || []
const MAX_HIGH_SCORES = 5

finalScore.innerText= mostRecentScore

username.addEventListener('keyup', () => {
    //if it's falsy/nothing in there, set the button to disabled
    //if there is something in there, enable
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: Math.floor(Math.random()*100),
        name: username.value
    }
    highScores.push(score)
    //if b score is higher than a score, put b before a
    highScores.sort( (a, b) => b.score - a.score)
    //at index 5, start cutting off
    highScores.splice(5)
    //saves to local storage so even if refreshed, previous scores are saved
    localStorage.setItem('highScores', JSON.stringify(highScores))

    window.location.assign('index.html')

}