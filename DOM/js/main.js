'use strict'

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML + '<div class="item"></div>'
// }

//STRING
//""
//''
//``

const adicionar = document.getElementById('adicionar')

const adicionarCard = (nome, nota) => {

    const container = document.getElementById('container')
    const novaDiv = document.createElement('aluno')

    if(nota >= 5){
        novaDiv.classList.add('nota-azul')
        novaDiv.classList.remove('nota-vermelha')
    } else {
        novaDiv.classList.remove('nota-azul')
        novaDiv.classList.add('nota-vermelha')
    }

    novaDiv.classList.add('aluno')
    novaDiv.innerHTML = `<h2 class="aluno_nome">${nome}</h2>
                          <span class="aluno_nota" id="aluno_nota">${nota}</span>`

    container.appendChild(novaDiv)
}

const handleClick = () => {
    const aluno = {
        nome: document.getElementById('nome_aluno').value,
        nota: Number(document.getElementById('nota_aluno').value.replace(',','.')).toFixed(1)
    }

    if(aluno.nome == '' || aluno.nota === ''){
        alert('Preencha todos os dados!')
    } else if(isNaN(aluno.nota)){
        alert('A nota precisa ser um número!')
    } else if(aluno.nota < 0 || aluno.nota > 10){
        alert('A nota precisa ser entre 0 e 10 apenas!')
    } else {
        adicionarCard(aluno.nome, aluno.nota)
    }
}

adicionar.addEventListener('click', handleClick)