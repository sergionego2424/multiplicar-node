const fs = require('fs');

const crearArchivo = (base , limite = 10) => {
	return new Promise((resolve , reject) => {
		let data = '';
		if(!Number(base)){
			reject(`No es un numero el parametron ${base}`);
			return;
		}
		for(let i = 0 ; i < limite ; i ++){
			data += `${base} x ${i} = ${base * i} `;
		}
		fs.writeFile(`./tablas/tabla-del-${base}-hasta${limite}.txt` , data , (error) => {
			if(error) {
				reject(`El archivo tabla-del-${base}-hasta-${limite}.txt no se ha podido crear.`);
				return;
			}	
			resolve(`Se ha creado un archivo con nombre tabla-del-${base}-hasta-${limite}.txt`);
		})
	})
}

module.exports = {
	crearArchivo,
}