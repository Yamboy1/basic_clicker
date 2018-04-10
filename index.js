const elemButton = document.querySelector('.button')
const elemCounter = document.querySelector('.counter')

let counter = 0

elemButton.onclick = () => {
  counter += 1
  elemCounter.innerText = counter
}
