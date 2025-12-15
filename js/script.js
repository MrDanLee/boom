// Capturar elementos del DOM
// Número aleatorio 
// Cuenta atrás setInterval() -> 5, 4, 3, 2, 1, 0
// Cuando pasen los segundos estipulados tendrá que hacer lo que sea -> {darnos el número aleatorio}
// Coger el dato que el usario nos indique en el input
// Tenemos que valorar cual es el resultado sacando el dato delusuario con el numero aleatorio 
// Diferenciaremos mensaje dependiendo si el numero es igual o distinto 

const userInput = document.getElementById('userInput'),
      countdown = document.getElementById('countdown'),
      result = document.getElementById('result'),
      restart = document.getElementById('restart')

let tiempo = 5
let userNumber = 0

const randomNumber = () =>  Math.floor(Math.random() * 3) + 1

// ----------------------------------
 
userInput.addEventListener("change", ()=> {
  userNumber = userInput.value
})

function startGame() {
  count()
  const mysteryNumber = new Promise (resolve => {
    setTimeout(() => {
      resolve(randomNumber())
    }, 6000);
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
  }, 1000);
}

restart.addEventListener("click", () => {
  location.reload()
})