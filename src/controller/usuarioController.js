const {findAll} = require("../repository/usuarioRepository")

function getUsuario(){
    return findAll("tb_usuario");
}
module.exports = { getUsuario };