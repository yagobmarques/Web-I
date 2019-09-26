var Lista = [];

function idadeAtual(nascimento) {
  return 2018-nascimento.slice(0,4);
}

function nomeCompleto(primeiroNome, segundoNome) {
    return primeiroNome + " "+segundoNome;
}

function dataNascimento(nascimento) {
  dados = nascimento.split("-");
  return dados[2]+ "/"+dados[1]+"/"+dados[0];
}

function imc(peso, altura) {
  return peso/(altura*altura);    
}

function cadastrar(){
    var pessoinha = {primeiroNome: "Nome",  ultimoNome: "Ultimo nome", nascimento: new Date(),altura: 0.0,peso: 0.0,sexo: "Indefinido"};
    pessoinha.primeiroNome = document.getElementById("nome").value;
    pessoinha.ultimoNome =document.getElementById("ultimoNome").value;
    pessoinha.nascimento = document.getElementById("date").value;
    pessoinha.altura = document.getElementById("altura").value;
    pessoinha.peso  = document.getElementById("peso").value;
    pessoinha.sexo = document.getElementById("sexo").value;
    Lista.push(pessoinha);
}

function mostrar(){
  for (i = 0 ; i < Lista.length; i++){
        nome = "<td>" + nomeCompleto(Lista[i].primeiroNome,Lista[i].ultimoNome) + "</td>";
        idade = "<td>" + idadeAtual(Lista[i].nascimento) + "</td>";
        sexo = "<td>" + Lista[i].sexo + "</td>";
        nascimento = "<td>" + dataNascimento(Lista[i].nascimento) + "</td>";
        imc1 = "<td>" + imc(Lista[i].peso, Lista[i].altura) + "</td>";
        var t = document.getElementById("tabela1");
        var r = document.createElement("TR");               
        r.innerHTML = nome + idade + sexo + nascimento + imc1;
        //document.querySelector("table").appendChild("<tr>" + nome + idade + sexo + nascimento + imc + "/tr>"); 
        t.appendChild(r);
  }
}
