const generatePerson = () =>{
 const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let firstName = ""


for(let i = 0; i < 5 ; i++){
    if (i == 0) 
        firstName = (alfabeto[Math.floor(Math.random()*alfabeto.length)].toUpperCase());

    else
        firstName += (alfabeto[Math.floor(Math.random()*alfabeto.length)].toLowerCase())
        

    }



let lastName = ""


for(let i = 0; i < 5 ; i++){
    if (i == 0) 
        lastName = (alfabeto[Math.floor(Math.random()*alfabeto.length)].toUpperCase());

    else lastName += (alfabeto[Math.floor(Math.random()*alfabeto.length)].toLowerCase());

    }

    
    return {nome: firstName, sobrenome: lastName}
}

//Destructuring
//vetor
const vetor = ["Teste de A", "Teste de B"]


//console.log(vetor)
//console.log(vetor[0])
//console.log(vetor[1])

//sintaxe
const [valorA, valorB] = ["Teste de A", "Teste de B"]

//console.log(valorA)
//console.log(valorB)

//objetos

const pessoa = generatePerson();
//console.log(`A pessoa gerada de nome ${pessoa.nome} e sobrenome ${pessoa.sobrenome}`);

const {nome, sobrenome} = generatePerson();

const Pessoa = {
    nome: nome,
    sobrenome: sobrenome

}

//console.log(`A pessoa gerada de nome ${nome} e sobrenome ${sobrenome}`);

// Spread operator
// Sintaxe: ...

// Arrays

const lazeres = ['Video Game', 'Cantar', 'Academia']

const novosLazeres = ['Ler gibis', 'Desenhar']

const mergedLazers = [...lazeres, ...novosLazeres]

console.log(mergedLazers)

//objetos 

const credenciais = {
    login: 'asdfasdf',
    senha: 123123
}

const user = {...Pessoa, ...credenciais}
console.log(user)

// Parâmetros de Funções

//const exemplo = [1,2,3,4,5,6,7,8,9,10]
function maiorValor (...params) {
    let maior =  0;
    for(const element of params) {
        if (element >= maior) {
            maior = element
            
        }
    }
    return maior
}
console.log(1,2,3,4,5,6,7,8,9,10)

function getPessoa(...params){
    const {nome, sobrenome} = params
    return `A pessoa ${nome} ${sobrenome}`
}

console.log(getPessoa(user))







