let btnEnviar = document.getElementById("btnEnviar").elements;

btnEnviar['btnEnviar'].onclick = function (){
    let nome = btnEnviar['nome'].value;
    let dataNascimento = btnEnviar['dataNascimento'].value;
    let sexo = btnEnviar['sexo'].value;
    let cpf = btnEnviar['cpf'].value;
    let rg = btnEnviar['rg'].value;
    let endereco = btnEnviar['endereco'].value;
    document.getElementById("resultado").innerHTML = "Nome: " + nome + "<br /> e sua data de nascimento" + dataNascimento;
}