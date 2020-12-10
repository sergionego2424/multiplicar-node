const { crearArchivo } = require('../multiplicar/multiplicar');
const { listarTabla }  = require('../multiplicar/listar-tabla');

module.exports.tablas_node_accion = (argv) => {
	switch(argv._[0]){
		case 'listar':
			listarTabla(argv.base, argv.limite);
		break;
		case 'crear' : 
			crearArchivo(argv.base , argv.limite)
							.then(archivo => console.log(archivo))
							.catch(error => console.log(error));
		break;
	}
}
