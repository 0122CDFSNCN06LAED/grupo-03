const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let imagen = path.join(__dirname, "../../public/img/imgUsers")
    cb(null, imagen)
  },
  filename: (req, file, cb) => {
    let fieldName = Date.now() + file.originalname;
    cb(null, fieldName);
  },
});

const uploadFile = multer({
  storage,
});

module.exports = uploadFile;