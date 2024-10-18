//Importar módulo express para crear el servidor web
const express = require('express');

//Rutas (?)
const path = require('path');

//Crear una instancia de la aplicación express
const app = express();

//Confirmando express para subir archivos estáticos desde la carpeta public, los archivos estáticos como html css o js llegarán al usuario final tal cual
app.use(express.static(path.join(__dirname,'public')));

//GET
//Se establece una ruta GET en '/' (la raíz directamente) y visualizar el mapa
app.get('/', (req, res) => {
    //Responde con ??
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

//Definir el puerto en el que el servidor va a escuchar
const PORT = process.env.PORT || 3000;

//Iniciar en el puerto especificado
app.listen(PORT, () => {
    //Mostrar mensaje en consola
    console.log(`Ejecutando en http://localhost: ${PORT}`);
});