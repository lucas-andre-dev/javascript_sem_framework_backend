const htpp = require("http");
const { getUsuario } = require("../controller/usuarioController");
const server = htpp.createServer((req,res)=>{
/* localhost:4000/usuario */
    if(req.url ==="/usuario" && req.method==="GET"){
        let response = getUsuario();
        res.end(JSON.stringify(response));
        console.log("Requisição!");
    }
    
});

console.log("Servidor na porta 4000");

server.listen(4000);

