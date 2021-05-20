//Base de dados do câmbio

var CambioDolarReal = 5.677
var CambioEuroReal = 6.534
var CambioPesoReal = 0.060

//Calculadora de conversão

var moeda = prompt("Escolha uma das moedas abaixo:" + "\n" + "• Dolar" + "\n" + "• Euro" + "\n" + "• Peso Argentino")

if (moeda == "Dolar" || moeda == "dolar" || moeda == "dólar"){
var valorDolarInput = parseFloat(prompt("Informe o valor em dólares"))
var valorEmReal = valorDolarInput * CambioDolarReal
document.write("<h2>" + "U$" + valorDolarInput.toFixed(2) + " = " + "R$" + valorEmReal.toFixed(2) + "</h2>")
}

else if (moeda == "Euro" || moeda == "euro"){
var valorEuroInput = parseFloat(prompt("Informe o valor em euros"))
var valorEmReal = valorEuroInput * CambioEuroReal
document.write("<h2>" + "₤" + valorEuroInput.toFixed(2) + " = " + "R$" + valorEmReal.toFixed(2) + "</h2>")
}            

else if (moeda == "Peso Argentino" || moeda == "peso argentino" || moeda == "Peso argentino" || moeda == "Peso" || moeda == "peso"){
var valorPesoInput = parseFloat(prompt("Informe o valor em pesos argentinos"))
var valorEmReal = valorPesoInput * CambioPesoReal
document.write("<h2>" + "$" + valorPesoInput.toFixed(2) + " = " + "R$" + valorEmReal.toFixed(2) + "</h2>")
}

else {
  document.write("<h3>" + "Um dos valores foi inserido incorretamente <br> Tente novamente" + "</h3>")
}
//FIM da calculadora de conversão

//Modelo
/*alert("Resultado: "+ "\n"+"Temperatura digitada (C°): "+ valorCelsius +"°"+ "\n"+ "Celsius para Kelvin: "+ RKelvin + "°" +"\n"+ "Celsius para Fahrenheit: "+ RFah + "°") */


// Revisão
// variáveis var int - float - string (texto entre aspas)
// funções alert - parseInt - parseFloat - prompt