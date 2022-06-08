const { validationResult } = require('express-validator');
//const { json } = require('express/lib/response');
const fs = require("fs");
const path = require("path");
const bcrypt = require('bcryptjs');
const { use } = require('express/lib/router');
const db = require("../database/models");
const { Console } = require('console');



const usersFilePath = path.join(__dirname, "../data/user-data.json");
const userData = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

// Logearse
module.exports={
    login: function (req, res) {    
        return res.render('login');
    },

    //Registro de nuevos usuario
    register:(req, res) => {
		return res.render('register');
	},
    processRegister: (req, res) => {
		const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
    
        let passEncriptada = bcrypt.hashSync('password', 10);
        
        const lastIndex = userData.length - 1;
        const lastUser = userData[lastIndex];
        const biggestId = lastUser ? lastUser.id : 0;
        const newId = (biggestId + 1);
        
        const user = {
            //...req.body,           
            id: newId,
            nombre:req.body.nombre,
            email:req.body.email,
            telefono:req.body.telefono,
            password:passEncriptada,
            imagen: req.file ? req.file.filename : "logo-mercado-liebre",
        };
        userData.push(user);
    
        const jsonTxt = JSON.stringify(userData, null, 2);
        fs.writeFileSync(usersFilePath, jsonTxt, "utf-8");
          
        res.redirect("/");  
	},

    // Listar usuarios
    /*index: (req,res)=>{  
        res.render("users-list", {
            userData,
        })
    },*/
    index: (req,res) => {  
        db.User.findAll()
        .then((users) => {
            res.render("users-list", {
                users:users
            });
        });
    },

    // Detalle de un usurio
    detail: (req,res)=>{        
        const id = req.params.id;
        const user = userData.find((p) => id == p.id);
          
        res.render("users-detail", {
            user,
        })
    },
   
   // Elige un registro
    edit: (req,res)=>{
        const id = req.params.id;
        const user = userData.find((p) => id == p.id);
    
        res.render("users-edit", {
          user,
        })
    },  
       // Actualiza el registro seleccionado
    modificar: (req,res) =>{
        const id = req.params.id;
        const user = userData.find((p) => id == p.id);
    
        res.render("users-update", {
          user,
        })
    },
    update: (req, res) => {
        const id = req.params.id;
    
        const resultValidation = validationResult(req);

        const passEncriptada = bcrypt.hashSync('password', 10);

        let user = userData.find((p) => parseInt(id) == p.id);
    
        Object.assign(user, {        
            nombre:req.body.nombre,
            email:req.body.email,
            telefono:req.body.telefono,
            password:passEncriptada,
            imagen: req.file ? req.file.filename : "logo-mercado-liebre",
          });
     
        
        if (resultValidation.errors.length > 0) {
            return res.render("users-update", {
                user,
            errors: resultValidation.mapped(),
            oldData: req.body
            });
        }
            const jsonTxt = JSON.stringify(userData, null, 2);
            fs.writeFileSync(usersFilePath, jsonTxt, "utf-8");

        res.redirect("/");
    },

      //Borra el registro seleccionado 
    remove: (req,res)=>{
        const id = req.params.id;
        const dataIndex = userData.findIndex((p) => id == p.id);        
        userData.splice(dataIndex,1);    

        const jsonTxt = JSON.stringify(userData, null, 2);
        fs.writeFileSync(usersFilePath, jsonTxt, "utf-8");

        res.redirect("/"); 
    }

   
}

