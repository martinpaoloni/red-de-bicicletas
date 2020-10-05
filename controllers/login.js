var Usuario = require('../models/usuario');

module.exports = {
    login: function(req, res, next){
        Usuario.findOne({nombre: req.body.nombre}, (err, usuario) => {
            if (!err && usuario && usuario.validPassword(req.body.password)) {
                res.redirect('/');
                return;
            }
            return res.status(401).send();
        });
    }
    
};