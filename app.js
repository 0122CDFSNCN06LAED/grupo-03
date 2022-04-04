const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000;

//app.use(express.static(path.resolve(__dirname, "./public")))
app.use(express.static("public"));

app.get('/', function (req, res) {
    let htmlPath = path.resolve(__dirname, './src/views/home.html');
    res.sendFile(htmlPath);
})

app.get('/login', function (req, res) {
    let htmlPath = path.resolve(__dirname, './src/views/login.html');
    res.sendFile(htmlPath);
})



app.listen(PORT, () => console.log('Servidor corriendo en el puerto ' + PORT))