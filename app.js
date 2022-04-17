const express = require('express');
const app = express();
const path = require('path')
const PORT = process.env.PORT || 3000;

const productRouter = require("./src/routers/product-router.js");
const userRouter = require("./src/routers/users-router.js");
const mainRouter = require("./src/routers/main-router.js");

//app.use(express.static(path.resolve(__dirname, "./public")))
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

app.use("/product",productRouter);
app.use("/user",userRouter);
app.use("/",mainRouter);





app.listen(PORT, () => console.log('Servidor corriendo en el puerto ' + PORT))

