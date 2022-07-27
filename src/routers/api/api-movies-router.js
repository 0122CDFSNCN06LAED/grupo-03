const express = require("express");
const apiMoviesRouter = express.Router();

apiMoviesRouter.get("/", apiMoviesController.list);
