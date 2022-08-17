const db = require("./../../database/models/index");

async function list(req,res) {
    const movies = await db.Movie.findAll()
    return movies;
}