const { Router } = require("express");
const { append } = require("express/lib/response");
const userRouter = require("../routers/user-router");
const { get } = require("../routers/user-router");

const users = [
    {
        id:0000,
        nombre:"",
        email:"",
        telefono:"",
        contraseña:"",       
    },
    {
        id:0000,
        nombre:"",
        email:"",
        telefono:"",
        contraseña:"",  
    }
]
    






module.exports={
    create:(req,res)=>{
        res.send('');
    },
    remove:(req,res)=>{
        res.send('');
    },
    update:(req,res)=>{
        res.send('');
    },
    index:(req,res)=>{
        res.send('');
    },
    mostrar:(req,res)=>{
        res.send('');
    },
    
}