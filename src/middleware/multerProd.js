const path = require('path');
const multerProd = require('multer');

const storage = multerProd.diskStorage({
  destination: (req, file, cb) => {
    let imagen = path.join(__dirname, "../../public/img/prodImg")
    cb(null, imagen)
  },
  filename: (req, file, cb) => {
    let fieldName = Date.now() + file.originalname;
    cb(null, fieldName);
  },
});

const uploadFile = multerProd({
  storage,
});

module.exports = uploadFile;;