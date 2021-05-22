//Base de dados do câmbio

var cambioDolarReal = 5.677
var cambioEuroReal = 6.534
var cambioPesoReal = 0.060

//Calculadora de conversão

document.querySelector('#button-converter').onclick = function converter() {

  var dolar = Number(document.querySelector("#input-dolar").value)
  var euro = Number(document.querySelector("#input-euro").value)
  var peso = Number(document.querySelector("#input-pesos").value)

  if (dolar != 0) {
    var valorEmReal = dolar*cambioDolarReal
    const divResultado = document.querySelector(".moeda-output")
    divResultado.insertAdjacentHTML("afterbegin", `<p class="result">${dolar.toLocaleString('pt-BR', {style:'currency', currency:"USD", currencyDisplay:"name"})}<br>=<br>${valorEmReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', currencyDisplay:"name"})}</p>`)
    const inputField = document.querySelector("#input-dolar")
    inputField.value = ""
  }

  else if (euro != 0) {
    var valorEmReal = euro*cambioEuroReal
    const divResultado = document.querySelector(".moeda-output")
    divResultado.insertAdjacentHTML("afterbegin", `<p class="result">${euro.toLocaleString('pt-BR', {style: 'currency', currency: 'EUR', currencyDisplay: "name"})} <br>=<br> ${valorEmReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', currencyDisplay:"name"})}</p>`)
    const inputField = document.querySelector("#input-euro")
    inputField.value = ""
  }

  else if (peso != 0) {
    var valorEmReal = peso*cambioPesoReal
    const divResultado = document.querySelector(".moeda-output")
    divResultado.insertAdjacentHTML("afterbegin", `<p class="result">${peso.toLocaleString('pt-BR', {style:'currency', currency: 'ARS', currencyDisplay:"name"})} <br>=<br> ${valorEmReal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', currencyDisplay:"name"})}</p>`)
    const inputField = document.querySelector("#input-pesos")
    inputField.value = ""
  }

  else {
    const divResultado = document.querySelector(".moeda-output")
    divResultado.insertAdjacentHTML("afterbegin", `<p class="error">Ocorreu um erro<br>Tente novamente!</p>`)
  }
}

document.querySelector('#button-clear').onclick = function clear() {
  let previous = document.querySelector(".moeda-output") 
  while (previous.firstChild){
    previous.removeChild(previous.firstChild)
  }
  
}