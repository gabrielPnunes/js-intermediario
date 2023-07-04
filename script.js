//propriedades
var meuCarro = {
    modelo: "civic 1998",
    Cor: "Cinza",
    espec: ["gasolina", "4 cilidros", "torque 14kg", "127cv"]
}
console.log(meuCarro)


//metodos
var calcMedia = function () {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno1 = {
    nome: "Paulo",
    notas: [7, 8],
    media: calcMedia
}
console.log(aluno1.nome)
console.log(aluno1.media())

var aluno2 = {
    nome: "Silvio",
    notas: [5, 4],
    media: calcMedia
}
console.log(aluno2.nome)
console.log(aluno2.media())


//construtores 
function criaraluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

var turma = [
    criaraluno("Paulo", 7, 8),
    criaraluno("Silvio", 5, 4),
    criaraluno("Marcia", 6, 9),

]
var aluno = turma [0]