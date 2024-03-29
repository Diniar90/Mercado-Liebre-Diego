const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath) );

const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log('Servidor corriendo en puerto: '+port);
});

app.get('/', (req, res) => {
    let htmlpath = path.resolve(__dirname, './views/index.html');
    res.sendFile(htmlpath);
});

app.get('/register', (req, res) => {
    let htmlpath2 = path.resolve(__dirname, './views/register.html');
    res.sendFile(htmlpath2);
});

app.get('/login', (req, res) => {
    let htmlpath3 = path.resolve(__dirname, './views/login.html');
    res.sendFile(htmlpath3);
});

