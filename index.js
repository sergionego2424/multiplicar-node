const { tablas_node_accion : accion } = require('./multiplicar/tablas-node-accion');
const { argv } = require('./config/yargs');

accion(argv);