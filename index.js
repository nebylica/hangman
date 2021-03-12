let word = document.getElementById('word')


let cities = [
    "amsterdam",
    "london",
    "vilnius",
    "paris",
    "singapore",
    "dubai"
];

let city = cities[Math.floor(Math.random() * cities.length)]

let answerArray = [];


for (let i = 0; i < city.length; i++) {
    answerArray[i] = "_";
    word.innerText = answerArray.join(' ')
}
