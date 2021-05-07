function tomarValor(valor1) {
	document.getElementById('entrada').value += valor1;
}

function limpiarValor(valor2) {
	document.getElementById('entrada').value = valor2;
}

function calcularResultado() {
	var result = eval(document.getElementById('entrada').value);
	document.getElementById('entrada').value = result;
}