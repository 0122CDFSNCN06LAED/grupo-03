

const productos = [
    {
        id: 0001,
        linea: "CBD",
        name: "CBD",
        description: "Auténtico CBD Oil",
        price: 575.00,
    },
    {
        id: 0002,
        linea: "Cremas",
        name: "5Kind",
        description: "Crema Extrafuerte de Cáñamo",
        price: 575.00,
    },
    {
        id: 0003,
        linea: "Aceites",
        name: "Hemp-Oil",
        description: "Aceite de Semilla de Cáñamo..",
        price: 575.00,
    },
    {
        id: 0003,
        linea: "Aceites",
        name: "Hemp-Oil",
        description: "Cbd,Aceite de cáñamo orgánico..",
        price: 575.00,
    },
]






module.exports = {
    create: (req, res) => {
        res.render('products-new');
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
            ...req.body,
            imagen: req.file ? req.file.filename : "1656790940073img-banner-02.jpg",
        };

        await db.User.create(user)
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
        if (resultValidation.errors.length > 0) {
            return res.render('product-update', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        const updateId = req.params.id;
        await db.User.update({
            ...req.body,
            imagen: req.file ? req.file.filename : "1656790940073img-banner-02.jpg",
        },
            { where: { id: updateId } }
        ),
            res.redirect("/");
    },
    index: async (req, res) => {
        const resuList = await db.Products.findAll()
        res.render("products-list", {
            resuList
        });
    },
    mostrar: async (req, res) => {
        const detId = req.params.id;
        const resuDetail = await db.Product.findByPk(detId);
        res.render("product-detail", {
            resuDetail
        })
    },
    remove: async (req, res) => {
        const delId = req.params.id;
        const resuDelete = await db.User.destroy({ where: { id: delId }, force: true })
        res.redirect("/");
    },

}