//Base de dados do câmbio

var CambioDolarReal = 5.677
var CambioEuroReal = 6.534
var CambioPesoReal = 0.060

//Calculadora de conversão

document.getElementById('button-converter').onclick = function converter() {
    var moeda = document.getElementById("input-dolar").value
    console.log(moeda)
}


/*if (moeda == "Dolar" || moeda == "dolar" || moeda == "dólar"){
var valorDolarInput = parseFloat(prompt("Informe o valor em dólares"))
var valorEmReal = valorDolarInput * CambioDolarReal
document.write("<h2 class='result'>" + "U$" + valorDolarInput.toFixed(2) + " = " + "R$" + valorEmReal.toFixed(2) + "</h2>")
}

else if (moeda == "Euro" || moeda == "euro"){
var valorEuroInput = parseFloat(prompt("Informe o valor em euros"))
var valorEmReal = valorEuroInput * CambioEuroReal
document.write("<h2 class='result'>" + "₤" + valorEuroInput.toFixed(2) + " = " + "R$" + valorEmReal.toFixed(2) + "</h2>")
}            

else if (moeda == "Peso Argentino" || moeda == "peso argentino" || moeda == "Peso argentino" || moeda == "Peso" || moeda == "peso"){
var valorPesoInput = parseFloat(prompt("Informe o valor em pesos argentinos"))
var valorEmReal = valorPesoInput * CambioPesoReal
document.write("<h2 class='result'>" + "$" + valorPesoInput.toFixed(2) + " = " + "R$" + valorEmReal.toFixed(2) + "</h2>")
}

else {
  document.write("<h3 class='error'>" + "Um dos valores foi inserido incorretamente <br> Tente novamente" + "</h3>")
}*/

//FIM da calculadora de conversão

//Modelo
/*alert("Resultado: "+ "\n"+"Temperatura digitada (C°): "+ valorCelsius +"°"+ "\n"+ "Celsius para Kelvin: "+ RKelvin + "°" +"\n"+ "Celsius para Fahrenheit: "+ RFah + "°") */


// Revisão
// variáveis var int - float - string (texto entre aspas)
// funções alert - parseInt - parseFloat - prompt