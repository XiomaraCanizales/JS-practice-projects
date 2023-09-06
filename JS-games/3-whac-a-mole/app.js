// dom
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

const btn = document.getElementById('button')

// variables
let timerId = null
let result = 0
let hitPosition
let currentTime = 0
let countDownTimerId

btn.addEventListener('click', () => {
    currentTime = 10
    moveMole()
    countDownTimerId = setInterval(countDown, 1000)
})

// random square
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

// move mole 
function moveMole() {
    timerId = setInterval(randomSquare, 1000)
}

// count touches
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

// timer counter
function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Time is up. Your final score is: ' + result)
    }
}