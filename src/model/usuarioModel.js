class Usuario{
    constructor(nome,cpf,senha){
        this.nome = nome;
        this.cpf = cpf;
        this.senha = senha;
    }
    getNome(){
        return this.nome;
    }
    getCpf(){
        return this.cpf;

    }
    getSenha(){
        return this.senha;
    }
    setNome(nome){
        this.nome = nome;
    }
    setCpf(cpf){
        this.cpf = cpf;
    }
    setSenha(senha){
        this.senha = senha;
    }
}
module.exports = Usuario;