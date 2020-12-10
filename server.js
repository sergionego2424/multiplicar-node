const express = require('express');
const app = express();

const WebSocket = require('ws');
const wss = new WebSocket.Server({ port : 8080 });

const five = require('johnny-five');
const board = new five.Board();

app.use('/' , express.static('public'));
app.listen(3000, () => console.log('Inicializado el servidor'));

board.on('ready' , () => {
	console.log('cargada')

	const lampara = new five.Pin(13 , 1);
	lampara.high();

	let estado = 'apagado';

	wss.on('connection', (ws , req) => {
		console.log('conectado');
		ws.on('message', (data) => {

			if(data === 'prendido'){
				lampara.low();
			}else{
				lampara.high();
			}
			estado = data;
			ws.send(estado);
			console.log(data);
		})

		setInterval(() => {
			ws.send(estado);
		},100)

	})



})
