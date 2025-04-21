const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

const key = fs.readFileSync('key.pem');
const cert = fs.readFileSync('cert.pem');

app.get('/', (req, res) => {
  res.send('¡Hola Mundo! (HTTPS)');
});

https.createServer({
  key: key,
  cert: cert
}, app).listen(3000, () => {
  console.log('Servidor HTTPS escuchando en el puerto 3000');
});