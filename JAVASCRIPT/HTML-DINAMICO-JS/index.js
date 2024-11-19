// Instanciar objetos com o DOM
const divForms = document.getElementById('forms');

//const input = divForms.querySelector('input');

const inputs = divForms.querySelectorAll('input');

const btn = divForms.querySelector('button');

// Visualizar os elementos instanciados no console
console.log(inputs);

// Manipular o body direto pelo document:
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';

// Manipular eventos

const operacoes = (a,b) =>{
    return `
    <h2>Resultado das operações:</h2>
    <p>Soma: ${(a+b)}</p>
    <p>Subtracao: ${(a - b)}</p>
    <p>Multiplicação: ${(a*b)}</p>
    <p>Divisão: ${(a/b).toFixed(2)}</p>
    `
}

btn.addEventListener('click', () => {
    //valorDigitado = input.value

    if(divForms.getElementsByTagName('h3')[0]){
        divForms.removeChild(divForms.getElementsByTagName('h3')[0])
    }

    const a = parseInt(inputs[0].value);
    const b = parseInt(inputs[1].value);

    const newTag = document.createElement('h3');
    newTag.innerHTML = `${operacoes(a, b)}`;
    divForms.appendChild(newTag);

}

)

const toogleTheme = document.getElementById(toogleTheme);
if(document.body.style.backgroundColor){
document.body.style.backgroundColor = 'black';
document.body.style.color = 'white';
}