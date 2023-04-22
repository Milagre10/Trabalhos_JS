// Define o objeto estudante
var estudante = {
    nome: "Martins Almeida",
    idade: 20,
    favCor: "Amarela"
};

// a. Lista as propriedades do objeto
console.log("Propriedades do objeto estudante:");
for (propriedade in estudante) {
    console.log(propriedade);
}

// b. Exclui a propriedade favCor e imprime o objeto antes e depois da exclusão
console.log("Objeto estudante antes da exclusão da propriedade favCor:", estudante);
delete estudante.favCor;
console.log("Objeto estudante depois da exclusão da propriedade favCor:", estudante);

// c. Obtém o comprimento do objeto
var comprimento = Object.keys(estudante).length;
console.log("O objeto estudante possui", comprimento, "propriedades.");