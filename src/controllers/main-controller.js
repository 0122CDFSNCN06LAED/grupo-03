const { Router } = require("express");
const { append } = require("express/lib/response");
const mainRouter = require("../routers/main-router");
const { get } = require("../routers/main-router");


module.exports = {
    home: function (req, res) {    
        res.render("home");
    },
    login: function (req, res) {    
        res.render("login");
    },
    register: function (req, res) {   
        res.render("register");
    },
};