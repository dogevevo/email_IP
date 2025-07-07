// server.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para leer datos del formulario
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta principal: sirve el formulario
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Ruta POST: recibe el envío del formulario
app.post('/submit', (req, res) => {
  const ip =
    req.headers['x-forwarded-for']?.split(',').shift() || // en caso de proxy
    req.socket?.remoteAddress;

  console.log('IP del remitente:', ip);
  console.log('Datos recibidos:', req.body);

  res.send(`Gracias. Tu IP es: ${ip}`);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
