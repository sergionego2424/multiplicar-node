const { numero : comprobarNumero } = require('./multiplicar-funciones');	

const fs = require('fs');
const colors = require('colors');

const listarTabla = (base , limite = 10) => {
	if(!comprobarNumero(base)){
		console.log(`No es un numero ${base}`);
		return;
	}
	if(!base){
		console.log('No se ingresado un numero base');
	}else{
		for(let i = 0 ; i <= limite ;  i++){
			console.log( `${base} x ${i} = ${base * i} `);
		}
	}
}

module.exports = {
	listarTabla
}