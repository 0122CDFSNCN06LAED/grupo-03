const { Router, urlencoded } = require("express");
const cors = require("cors");
const createError = require("http-errors");
const methodOverride = require("method-override"); // Para poder usar los métodos PUT y DELETE

const express = require('express');
const app = express();
const path = require('path');

const session = require('express-session');
const userLogMidVista = require("./src/middleware/user-logMidVista");

const cookies = require('cookie-parser');
//const logger=require('morgan');
const PORT = process.env.PORT || 4000;

const productRouter = require("./src/routers/product-router.js");
const userRouter = require("./src/routers/users-router.js");
const mainRouter = require("./src/routers/main-router.js");
const cookieParser = require("cookie-parser");
const apiUsersRouter = require("./src/routers/api/api-users-router");
const cartRouter = require("./src/routers/cart-router");
const apiProductsRouter = require("./src/routers/api/api-products-router")
const apiCategoryRouter = require("./src/routers/api/api-category-router")
const apiEstadisticasRouter = require("./src/routers/api/api-estadisticas-router")

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

app.use(cors());
//app.use(logger('dev'));
app.use(methodOverride("_method")); // Para poder pisar el method="POST" en el formulario por PUT y DELETE
app.use("/api/users", apiUsersRouter);
app.use("/api/products",apiProductsRouter)
app.use("/api/categories",apiCategoryRouter)
app.use("/api/estadisticas",apiEstadisticasRouter)
app.use("/product",productRouter);
app.use("/user",userRouter);
app.use("/carrito",cartRouter)
app.use("/",mainRouter);

app.use((req, res, next)=>{
	res.status(404).render('not-found')
})





app.listen(PORT, () => console.log('Servidor corriendo en el puerto ' + PORT))

