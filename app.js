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


