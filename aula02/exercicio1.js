const cpf = "123.123.123-12"
var nome = "João"

function exibirSobreNome() {
    let sobreNome = "Victor"

    return sobreNome
}

console.log(nome)
console.log(exibirSobreNome())
console.log(cpf)
console.log(`O nome é: ${nome}. O sobrenome é: ${exibirSobreNome()}. O cpf é: ${cpf}`)