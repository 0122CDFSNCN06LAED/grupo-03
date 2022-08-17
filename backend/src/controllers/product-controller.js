const { use } = require('express/lib/router');
const db = require("../database/models");
const { Console } = require('console');
const fs = require("fs");
const { validationResult } = require('express-validator');

module.exports = {
    create: (req, res) => {
        res.render('product-new');
    },
    newProduct: async (req, res) => {
        const resultValidation = validationResult(req);
        if (!resultValidation.isEmpty()) {
            return res.render('product-new', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }

        const product = {
            //...req.body,
            name: req.body.name,
            price: req.body.price,
            weight: req.body.weight,
            description: req.body.description,
            category_id: req.body.category,
            stock: req.body.stock,
            image: req.file ? req.file.filename : "1656790940073img-banner-02.jpg",

        };

        await db.Product.create(product)
        res.redirect("/");
    },
    // Elige un registro para borrar
    edit: async (req, res) => {
        const editId = req.params.id;
        const resuEdit = await db.Product.findByPk(editId)
        res.render("product-edit", {
            resuEdit,
        })
    },
    //Borra el registro seleccionado 
    remove: async (req, res) => {
        const delId = req.params.id;
        const resuDelete = await db.Product.destroy({ where: { id: delId }, force: true })
        console.log(delId, "PASE POR AQUI")
        res.redirect("/");
    },
    modificar: async (req, res) => {
        const modiId = req.params.id;
        const resuModificar = await db.Product.findByPk(modiId)
        res.render("product-update", {
            resuModificar,
        })
    },
    //Modifica un registro
    update: async (req, res) => {
        const resultValidation = validationResult(req);
        if (!resultValidation.isEmpty()) {
            return res.render('product-update', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
    
    const updId = req.params.id;
    await db.Product.update({
        name: req.body.name,
        price: req.body.price,
        weight: req.body.weight,
        description: req.body.description,
        category_id: req.body.category,
        stock: req.body.stock,
        image: req.file ? req.file.filename : "1656790940073img-banner-02.jpg",
    },
        { where: { id: updId } }
    ),
    res.redirect("/")
},
    index: async (req, res) => {
        const resuList = await db.Product.findAll({ include: "category" })
        res.render("product-list", {
            resuList
        });
    },
        detail: async (req, res) => {
            const detId = req.params.id;
            const resuDetail = await db.Product.findByPk(detId, { include: "category" })
            const auth = req.session.userLogueado;
            if (auth) {
                if (auth.categoria === 1) {
                    res.render("product-detalle", {
                        resuDetail
                    })
                } else {
                    res.render("product-detalleUsu", {
                        resuDetail
                    })
                }
            }

        },

            //Discrimina administrador de usuario
            home: (req, res) => {
                const auth = req.session.userLogueado;
                if (auth) {
                    if (auth.categoria === 1) {
                        res.render("product-home")
                    } else {
                        res.redirect("/product/index")
                    }
                }
            }
}