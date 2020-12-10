window.onload = () => {
	const socket = new WebSocket('ws://192.168.1.91:8080');

	const prendido = document.getElementById('prendido');
	const apagado = document.getElementById('apagado');

	const estado = document.getElementById('estado');

	prendido.addEventListener('click', () => {
		socket.send('prendido');

	});

	apagado.addEventListener('click', () => {
		socket.send('apagado');
	});
	
	socket.addEventListener('message',(data) => {
		estado.innerHTML = data.data;
	})

}