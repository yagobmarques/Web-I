var Pessoa ={
    primeiroNome: "Nome",
    ultimoNome: "Ultimo nome",
    nascimento: new Date(),
    altura: 0.0,
    peso: 0.0,
    sexo: "Indefinido",
    // Pessoa(primeiroNome, ultimoNome, nascimento, altura, peso, sexo){
    //     this.primeiroNome = primeiroNome;
    //     this.ultimoNome = ultimoNome;
    //     this.nascimento = nascimento;
    //     this.altura = altura;
    //     this.peso = peso;
    //     this.sexo = sexo;
    // },
     nomeCompleto() {
        return this.primeiroNome + " "+ this.ultimoNome;
    },
    
     idadeAtual() {
        return 2018-this.nascimento.getFullYear();
    },
    
     dataNascimento() {
        return this.nascimento.getFullYear()+"-"+this.nascimento.getMonth()+"-"+this.nascimento.getDay();
    },
     imc() {
         return this.peso/(this.altura*this.altura);    
    },
};
function Pessoa(){
        this.primeiroNome = primeiroNome;
        this.ultimoNome = ultimoNome;
        this.nascimento = nascimento;
        this.altura = altura;
        this.peso = peso;
        this.sexo = sexo;
}
var Lista = [];
function cadastrar(){
    var pessoinha = {primeiroNome: "Nome",  ultimoNome: "Ultimo nome", nascimento: new Date(),altura: 0.0,peso: 0.0,sexo: "Indefinido"};
    pessoinha.primeiroNome = document.getElementById("nome").value;
    pessoinha.ultimoNome =document.getElementById("ultimoNome").value;
    pessoinha.nascimento = document.getElementById("date").value;
    pessoinha.altura = document.getElementById("altura").value;
    pessoinha.peso  = document.getElementById("peso").value;
    pessoinha.sexo = document.getElementById("sexo").value;
    //var Lista = [];
    Lista.push(pessoinha);
    alert(Lista.length);
    for (let index = 0; index < Lista.length; index++) {
        console.log(Lista[index].primeiroNome);
    }
}
