const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')
const body = document.querySelector('body')
console.log(btnStart);
btnStart.addEventListener('click', startChangColor)
btnStop.addEventListener('click', stopChangColor)
let i = 0
function startChangColor(e) {
  e.target.disabled = true
  i = setInterval(() => {
  body.style.backgroundColor = getRandomHexColor()
  console.log(i);
 },1000)
    
}

function stopChangColor(e) {
  btnStart.disabled = false
  clearInterval(i)
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }