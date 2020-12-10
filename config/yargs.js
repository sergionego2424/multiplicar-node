const opciones = {
	base : {
		demand : true,
		alias : 'b'
	},
	limite : {
		alias : 'l',
		default : 10
	}
}
const argv = require('yargs')
					.command('listar' , 
							'Imprime por pantalla las tablas' ,
							opciones
							)
					.command('crear' , 
							'Crea un nuevo archivo con una tabla de multiplicar' ,
							opciones
							)
					.help()
					.argv;

module.exports = {
	argv
}