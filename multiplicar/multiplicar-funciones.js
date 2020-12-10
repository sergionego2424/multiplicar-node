const numero = (valor) => {
	if(!Number(valor)){
		return false;
	}
	return true;
}


module.exports = {
	numero
}