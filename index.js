let word = document.getElementById('word')
let letter = document.getElementById('letter')
let guessBtn = document.getElementById('guessBtn')
let lives = document.getElementById('lives')




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

}