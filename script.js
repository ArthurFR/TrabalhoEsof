var functions = require('./functions.js');
var convertTo10 = functions.convertTo10;
var convertFrom10 = functions.convertFrom10;
var verifyNumber = functions.verifyNumber;


window.Convert = function(){
	//var numero = document.number.value;
	var number = document.getElementById('number').value;
	var baseIn = document.getElementById('baseIn').value;
	var baseOut = document.getElementById('baseOut').value;
	var array = Array.from(number);
	var result;

	if(verifyNumber(array,baseIn) != 1){
		document.getElementById('result').innerHTML = "<p class='bg-warning' style='padding: 20px;'>Número Inválido</p>";
		return false;
	}
	if(baseIn == baseOut){
		document.getElementById('result').innerHTML = "<h5>Resultado: </h5> " + number;
		return true;
	}

	result = convertTo10(number,baseIn);

	if(baseOut == 10){
		document.getElementById('result').innerHTML = "<h5>Resultado: </h5> " + result;
	}else{
		document.getElementById('result').innerHTML = "<h5>Resultado: </h5> " + convertFrom10(result,baseOut);
	}
	return true;

}
