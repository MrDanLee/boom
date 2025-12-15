// Capturar input, resultado, la cuenta atrás y el botón de reestablecer
// Número aleatorio Math.random, Math.floor
// Cuenta atras setIntervarl() -> 5, 4, 3, 2, 1, 0
// Cuando pasen los segundo estipulados tendrá que hacer lo que sea -> {darnos el número aleatorio} 
// Coger el dato que el usuario nos indique en el input
// tenemos que valorar cual es el resultado sacando el dato del usuario con el numero aleatorio
// diferenciaremos mensaje dependiento si el numero es igual o distinto 

// - pending -> estado incial de la promesa
// - fullfiled -> ya está resulta 
// - rejected -> Ha habido un error

/* 

const userInput = document.getElementById('userInput'),
  countdown = document.getElementById('countdown'),
  result = document.getElementById('result'),
  restart = document.getElementById('restart')

let tiempo = 5
let userNumber = 0

const randomNumber = () => Math.floor(Math.random() * 3) + 1

userInput.addEventListener("change", () => {
  userNumber = userInput.value
  console.log(userNumber)
})  

function startGame() {
  count()
  const mysteryNumber = new Promise(resolve => {
    setTimeout(() => {
      resolve(randomNumber())
    }, 6000)
  })
  return mysteryNumber
}

startGame()
  .then(number => {
    let mensaje = ""
    if (number == userNumber) {
      mensaje = `
      <h2 class="green">¡Has salvado el mundo!</h2>
      <p class="green">El número que has elegido es el ${userNumber} y el aleatorio es el ${number}</p>
    `
    } else {
      mensaje = `
      <h2 class="red">La bomba ha estallado</h2>
      <p class="red">El número que has elegido es el ${userNumber} y el aleatorio es el ${number}</p>
    `
    }
    result.innerHTML = mensaje
  })

function count() {
  const intervalo = setInterval(() => {
    if (tiempo === 0) {
      clearInterval(intervalo)
    }
    countdown.innerHTML = `<p class="red">Cuenta atrás: ${tiempo} segundos</p>`
    console.log(tiempo)
    tiempo--
  }, 1000)
}

restart.addEventListener("click", () => {
  location.reload()
})
*/


















// ----------------------------------------------------- 

// -----------------------------------------------------





// Enganchar elementos en el DOM
// Al introducir un número, empieza una cuenta atrás
// Generar asincronía 
// Generar numero random de la computadora y comparar con el del usuario
// Si el número coincide, victoria, si no, derrota
// Se puede reiniciar el conteo en cualquier momento pulsando el boton

// const input = document.getElementById('userInput')
// const countdown = document.getElementById('countdown')
// const result = document.getElementById('result')
// const restart = document.getElementById('restart')
// let countdownCounter = 5;

// const getRandomElement = (max, min) => {
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }

// const obtenerResultado = () => {
//   const numeroComputadora = getRandomElement(3, 1)
//   if (numeroComputadora == input.value) {
//     result.innerHTML = `
//     <p>Enhorabuena, has salvado el mundo</p>
//     <p>Tu número ${input.value} es el mismo que el número ${numeroComputadora}</p>
//     `
//   } else {
//     result.innerHTML = `
//       <p>Vaya, parece que no lo has conseguido</p>
//       <p>Tu número ${input.value} es diferente al número ${numeroComputadora}</p>
//     `
//   }
// }

// const keyEvent = document.addEventListener('keypress', (event) => {
//   event.preventDefault()
//   if (event.key === 'Enter') {
//     obtenerResultado()
//   }
// })

// const clickEvent = document.addEventListener('dblclick', () => {
//   obtenerResultado()
// })

// const ejecutarIntervalo = () => {
//   setInterval(() => {
//     if (countdownCounter > 0) {
//       countdownCounter--
//       countdown.textContent = countdownCounter
//     }
//   }, 1000)
// }

// const promisedResult = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(obtenerResultado())
//   }, 5000)
// })

// promisedResult
//   .then(() => {

//   })