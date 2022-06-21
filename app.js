const { Router, urlencoded } = require("express");

const createError = require("http-errors");
const methodOverride = require("method-override"); // Para poder usar los métodos PUT y DELETE

const express = require('express');
const app = express();
const path = require('path');

const session = require('express-session');
const userLogMidVista = require("./src/middleware/user-logMidVista");

const cookies = require('cookie-parser');
//const logger=require('morgan');
const PORT = process.env.PORT || 3000;

const productRouter = require("./src/routers/product-router.js");
const userRouter = require("./src/routers/users-router.js");
const mainRouter = require("./src/routers/main-router.js");
const cookieParser = require("cookie-parser");

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(cookies());

app.use(userLogMidVista);

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.resolve(__dirname, "./public")))
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));


//app.use(logger('dev'));
app.use(methodOverride("_method")); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

app.use("/product",productRouter);
app.use("/user",userRouter);
app.use("/",mainRouter);





app.listen(PORT, () => console.log('Servidor corriendo en el puerto ' + PORT))

