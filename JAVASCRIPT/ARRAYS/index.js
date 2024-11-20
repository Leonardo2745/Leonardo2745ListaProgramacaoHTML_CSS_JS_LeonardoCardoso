const textArea = document.getElementById('nomesIn');
const qtdGrupos = document.getElementById('qtdGrupos');
const btnGerar = document.getElementById('btnGerar');
const divResultado = document.getElementById('resultado');

const valorInicial = () => { 
const nomes = ["Cauã", "Dayane", "Leo Stronda", "Japoneso", "Renato", "Jhony Due", "Igor igo igo", "Guinaldo", "Gordão", "Carlão"];
textArea.value = nomes.join(', \n');
qtdGrupos.value = 2;
}

window.onload = () => {
    valorInicial();
}

btnGerar.addEventListener('click', () => {

    const grupoNomes = (id, grupo) => {
        const liUlNomes = () =>{
            let list = ``
            grupo.forEach(nome => {
                list += `<li>${nome}</li>`
            })
            return list;
        }
    
        return `<div id='gp-${id}' class="grupoNomes">
                    <h2>Grupo ${(id+1)}</h2>
                    <hr>
                    <ul>
                        ${liUlNomes()}
                    </ul>
                </div>
            `
    }




    const nomes = textArea.value.split(', \n').map(nome => nome.trim()).filter(nome => nome);
    let grupo = [];

    const grupos = Array.from({lenght: qtdGrupos.value}, () =>[]);
    const nomesSorteados = nomes.sort(() => Math.random() - 0.5)

    nomesSorteados.forEach((nome, index) => {
        grupos[index % qtdGrupos.value].push(nome);
    });



    let saidaFinal = ``;

    grupos.forEach((grupo,index) =>{
        saidaFinal += grupoNomes(index, grupo);
    });

    divResultado.innerHTML = saidaFinal;

});