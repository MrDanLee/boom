// Enganchar elementos en el DOM
// Al introducir un número, empieza una cuenta atrás
// Generar asincronía 
// Generar numero random de la computadora y comparar con el del usuario
// Si el número coincide, victoria, si no, derrota
// Se puede reiniciar el conteo en cualquier momento pulsando el boton

const input = document.getElementById('userInput')
const countdown = document.getElementById('countdown')
const result = document.getElementById('result')
const restart = document.getElementById('restart')
let countdownCounter = 5;

const getRandomElement = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const obtenerResultado = () => {
  const numeroComputadora = getRandomElement(3, 1)
  if (numeroComputadora == input.value) {
    result.innerHTML = `
    <p>Enhorabuena, has salvado el mundo</p>
    <p>Tu número ${input.value} es el mismo que el número ${numeroComputadora}</p>
    `
  } else {
    result.innerHTML = `
      <p>Vaya, parece que no lo has conseguido</p>
      <p>Tu número ${input.value} es diferente al número ${numeroComputadora}</p>
    `
  }
}

const keyEvent = document.addEventListener('keypress', (event) => {
  event.preventDefault()
  if (event.key === 'Enter') {
    obtenerResultado()
  }
})

const clickEvent = document.addEventListener('dblclick', () => {
  obtenerResultado()
})

const ejecutarIntervalo = () => {
  setInterval(() => {
    if (countdownCounter > 0) {
      countdownCounter--
      countdown.textContent = countdownCounter
    }
  }, 1000)
}

const promisedResult = new Promise((resolve) => {
  setTimeout(() => {
    resolve(obtenerResultado())
  }, 5000)
}) 

promisedResult
.then(() => {

})