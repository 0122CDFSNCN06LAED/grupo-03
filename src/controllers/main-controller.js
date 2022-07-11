


module.exports = {
    home: function (req, res) {    
        res.render("home");
    },
  
    carrito: function (req, res) {   
        res.render("carrito");
    },
    
    productDetail: function (req, res) {   
        res.render("productDetail");
    },
};