function getRandom() {
    return Math.round(Math.random() * 9)+2
}

function changeText(newMessage) {
    htmlMsg.textContent = newMessage
}

function reSum(sum) {
    totalSum.textContent = `Sum: ${sum} `
}

function checkGame(tempSum) {
    if(tempSum < 21) {
        message = "Do you want to draw a new card ?"
        changeText(message)
    }else if(tempSum === 21) {
        message = "Blackjack sheessshhh"
        changeText(message)
        win = true
    } else if (tempSum > 21) {
        message = "Prit Prit....Out 😝"
        changeText(message)
        isAlive = false
    }
}

function newCard(){
    let newRandom = getRandom()
    // sum += newRandom
    cardsArr.push(newRandom)
    getArrSum()
    reSum(arrSum)
    checkGame(arrSum)
    cards.textContent += `+ (${newRandom}) `
    console.log("ini cardsArr: " + cardsArr)
}

function gameStart() {
    firstCard = getRandom(), secondCard = getRandom()
    cardsArr[0] = firstCard, cardsArr[1] = secondCard
    // sum = firstCard + secondCard
    getArrSum()
    checkGame(arrSum)
    cards.textContent = `Cards : ${firstCard} and ${secondCard} `
    reSum(arrSum)
}

function getArrSum(){
    arrSum = 0
cardsArr.forEach(element => {
    arrSum += element
});
console.log("ini ArrSum : " + arrSum)

}

let arrSum = 0
let firstCard = 0, secondCard = 0
let cardsArr = [firstCard, secondCard]
console.log(cardsArr)
// let sum = firstCard + secondCard
let totalSum = document.getElementById("sum")
let cards = document.getElementById("cards")
let htmlMsg = document.getElementById("message-el")

let startBtn = document.getElementById("start")
startBtn.addEventListener("click", function(){
    startBtn.remove()
    gameStart()
})

let newBtn = document.getElementById("new-card")
newBtn.addEventListener("click", function(){
    newCard()
})