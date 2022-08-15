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

// Loguearse
module.exports = {
    login: function (req, res) {
        return res.render('login');
    },
    processLogin: async function (req, res) {
        const resuLogin = await db.User.findOne({
            where: { email: req.body.email }
        })

        if (resuLogin) {
            let passwordOK = bcrypt.compareSync(req.body.password, resuLogin.password);
            if (passwordOK) {
                delete resuLogin.password;
                req.session.userLogueado = resuLogin;

                if (req.body.recordar) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 30) })
                }
                return res.redirect('/');
            }
            return res.render('login', {
                errors: {
                    password: {
                        msg: "La contraseña es erronea"
                    }
                },
            });
        }
        return res.render('login', {
            errors: {
                email: {
                    msg: "Este e-mail no esta registrado"
                }
            },
        });


    },
    //Registro de nuevos usuario
    register: (req, res) => {
        return res.render('register');
    },
    processRegister: async (req, res) => {
        const resultValidation = validationResult(req);
        if (!resultValidation.isEmpty()) {
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        const resuRegister = await db.User.findOne({
            where: { email: req.body.email }
        });
        if (resuRegister) {
            return res.render('register', {
                errors: {
                    email: {
                        msg: "Este e-mail ya esta registrado"
                    }
                },
                oldData: req.body
            });

        }

        let passEncriptada = bcrypt.hashSync(req.body.password, 10);

        //const lastIndex = userData.length - 1;
        //const lastUser = userData[lastIndex];
        //const biggestId = lastUser ? lastUser.id : 0;
        //const newId = (biggestId + 1);

        const user = {
            //...req.body,           
            //id: newId,
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            password: passEncriptada,
            imagen: req.file ? req.file.filename : "1656790940073img-banner-02.jpg",
            categoria: 2,
        };
        //userData.push(user); 
        //const jsonTxt = JSON.stringify(userData, null, 2)
        //fs.writeFileSync(usersFilePath, jsonTxt, "utf-8");

        const newUser = await db.User.create(user)
        await db.Order.create({ user_id: newUser.id})

        res.redirect("/user/login");
    },

    // Listar usuarios
    index: async (req, res) => {
        const resuList = await db.User.findAll()
        res.render("users-list", {
            resuList
        });
    },

    // Detalle de un usuario para Adminitradores
    detail: async (req, res) => {
        const detId = req.params.id;
        const resuDetail = await db.User.findByPk(detId);
        res.render("users-detail", {
            resuDetail
        })
    },

    // Elige un registro para borrar
    edit: async (req, res) => {
        const editId = req.params.id;
        const resuEdit = await db.User.findByPk(editId)
        res.render("users-edit", {
            resuEdit,
        })
    },
    //Borra el registro seleccionado 
    remove: async (req, res) => {
        const delId = req.params.id;
        const user = await db.User.findByPk(delId, {
            include: {
                model: db.Order,
                include: {
                    model: db.OrderDetail,
                    include: {
                        model: db.Product
                    }
                }
            }
        })

        if(user.Order){
            user.Order.OrderDetails.forEach(async(orderdetail) => {
                await db.OrderDetail.destroy({
                    where: {
                        id: orderdetail.id
                    }
                })
            })
            await db.Order.destroy({
                where:{
                    id:user.Order.id
                }
            })
        }
        
        const resuDelete = await db.User.destroy({ where: { id: delId }, force: true })
        res.redirect("/user/logout");
    },

    // Elige un registro para modificar
    modificar: async (req, res) => {
        const modiId = req.params.id;
        const resuModificar = await db.User.findByPk(modiId)
        res.render("users-update", {
            resuModificar,
        })
    },
    //Modifica un registro
    update: async (req, res) => {
        const resultValidation = validationResult(req);
        if (resultValidation.errors.length > 0) {
            return res.render('users-update', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        const updateId = req.params.id;
        let passEncriptada = bcrypt.hashSync(req.body.password, 10);
        await db.User.update({
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            password: passEncriptada,
            imagen: req.file ? req.file.filename : "1656790940073img-banner-02.jpg",
        },
            { where: { id: updateId } }
        ),
            res.redirect("/");
    },

    //Elimina la session y las cookies
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    },

    //Discrimina administrador de usuario
    home: (req, res) => {
        const auth = req.session.userLogueado;
        if (auth) {
            if (auth.categoria === 1) {
                res.redirect("/user/listar/")
            } else {
                res.redirect("/user/detalle/" + auth.id)
            }
        }
    }
}

