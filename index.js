let word = document.getElementById('word')
let letter = document.getElementById('letter')
let guessBtn = document.getElementById('guessBtn')
let lives = document.getElementById('lives')
let wonLose = document.getElementById('wonLose')
let one = document.getElementById('one')
let two = document.getElementById('two')
let three = document.getElementById('three')
let four = document.getElementById('four')
let five = document.getElementById('five')
let six = document.getElementById('six')
let seven = document.getElementById('seven')
let eight = document.getElementById('eight')
let nine = document.getElementById('nine')
let ten = document.getElementById('ten')



let cities = [
    "amsterdam",
    "london",
    "vilnius",
    "paris",
    "singapore",
    "dubai"
];
let livesCounter = 10

let city = cities[Math.floor(Math.random() * cities.length)]
console.log(city)

let answerArray = [];


for (let i = 0; i < city.length; i++) {
    answerArray[i] = "_";
    word.innerText = answerArray.join(' ')
}

guessBtn.addEventListener('click', checkLetter)

function checkLetter() {

    for (let i = 0; i < city.length; i++) {
        if (city[i] === letter.value) {
            answerArray[i] = letter.value;
            word.innerText = answerArray.join(' ')
        }
    }

    if(!city.includes(letter.value)) {
        livesCounter -=1
        lives.innerText =`Lives Left : ${livesCounter}`
    }

    gameChecker()
    hangman()
}

function gameChecker() {
    if (livesCounter === 0) {
        guessBtn.removeEventListener('click', checkLetter)
        wonLose.innerText = 'Lose'
        wonLose.style.color = 'red'
    }
    if(!String(answerArray).includes('_')) {
        guessBtn.removeEventListener('click', checkLetter)
        wonLose.innerText = 'Win'
        wonLose.style.color = 'green'
    }
}

function hangman() {
    livesCounter === 9 ? one.style.display = 'block' : null
    livesCounter === 8 ? two.style.display = 'block' : null
    livesCounter === 7 ? three.style.display = 'block' : null
    livesCounter === 6 ? four.style.display = 'block' : null
    livesCounter === 5 ? five.style.display = 'block' : null
    livesCounter === 4 ? six.style.display = 'block' : null
    livesCounter === 3 ? seven.style.display = 'block' : null
    livesCounter === 2 ? eight.style.display = 'block' : null
    livesCounter === 1 ? nine.style.display = 'block' : null
    livesCounter === 0 ? ten.style.display = 'block' : null
}