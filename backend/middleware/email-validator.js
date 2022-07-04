const validator = require('validator');

module.exports = (req, res, next) => {
    const{email} = req.body;

    if(validator.isEmail(email)){
        console.log("l'email saisi est valide ");
        next();
    } else {
        return res.status(400).json({error : "L'email n'est pas valide."})
    }
    }