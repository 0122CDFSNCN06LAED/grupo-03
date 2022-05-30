const { validationResult } = require('express-validator');
const { json } = require('express/lib/response');
const fs = require("fs");
const path = require("path");

const usersFilePath = path.join(__dirname, "../data/user-data.json");
const userData = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

module.exports={
    create:(req, res) => {
		return res.render('register');
	},
    processRegister: (req, res) => {
        res.send(req.body)
		const resultValidation = validationResult(req);
		
		if (resultValidation.errors.length > 0) {
			return res.render('register', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}

        const lastIndex = userData.length - 1;
        const lastUser = userData[lastIndex];
        const biggestId = lastUser ? lastUser.id : 0;
        const newId = biggestId + 1;

        const user = {
            //...req.body,           
            id: newId,
            nombre:req.body.nombre,
            email:req.body.email,
            telefono:req.body.telefono,
            password:req.body.password,
        };

          userData.push(user);

          const jsonTxt = JSON.stringify(userData, null, 2);
          fs.writeFileSync(usersFilePath, jsonTxt, "utf-8");
      
          res.redirect("/");  
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