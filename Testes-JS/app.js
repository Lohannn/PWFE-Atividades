'use strict'


const calcular = document.getElementById('calcular')

function media() {
    const formulario = document.getElementById('formulario')
    const valor1 = Number(document.getElementById('nota1').value)
    const valor2 = Number(document.getElementById('nota2').value)
    const valor3 = Number(document.getElementById('nota3').value)
    const valor4 = Number(document.getElementById('nota4').value)
    const nota1real = document.getElementById('nota1')
    const nota2real = document.getElementById('nota2')
    const nota3real = document.getElementById('nota3')
    const nota4real = document.getElementById('nota4')
    const resultado = document.getElementById('resultado')
    const situacao = document.getElementById('situacao')

    const resultadoMedia = (valor1 + valor2 + valor3 + valor4) / 4
    resultado.setAttribute('value', resultadoMedia)

    if (resultadoMedia >= 5) {
        formulario.classList.remove('cor-de-negacao')
        formulario.classList.remove('cor-de-reprovado')
        formulario.classList.add('cor-de-aprovado')
        situacao.setAttribute('value', 'APROVADO')
    } else if (resultadoMedia < 5 && resultadoMedia > 0) {
        formulario.classList.remove('cor-de-negacao')
        formulario.classList.add('cor-de-reprovado')
        formulario.classList.remove('cor-de-aprovado')
        situacao.setAttribute('value', 'REPROVADO')
    } else {
        formulario.classList.add('cor-de-negacao')
        formulario.classList.remove('cor-de-reprovado')
        formulario.classList.remove('cor-de-aprovado')
        situacao.setAttribute('value', 'EXPULSO')
    }

    if (valor1 >= 5) {
        nota1real.classList.remove('cor-nota-vermelha')
        nota1real.classList.add('cor-nota-verde')
    } else {
        nota1real.classList.add('cor-nota-vermelha')
        nota1real.classList.remove('cor-nota-verde')
    }

    if (valor2 >= 5) {
        nota2real.classList.remove('cor-nota-vermelha')
        nota2real.classList.add('cor-nota-verde')
    } else {
        nota2real.classList.add('cor-nota-vermelha')
        nota2real.classList.remove('cor-nota-verde')
    }

    if (valor3 >= 5) {
        nota3real.classList.remove('cor-nota-vermelha')
        nota3real.classList.add('cor-nota-verde')
    } else {
        nota3real.classList.add('cor-nota-vermelha')
        nota3real.classList.remove('cor-nota-verde')
    }

    if (valor4 >= 5) {
        nota4real.classList.remove('cor-nota-vermelha')
        nota4real.classList.add('cor-nota-verde')
    } else {
        nota4real.classList.add('cor-nota-vermelha')
        nota4real.classList.remove('cor-nota-verde')
    }

}

calcular.addEventListener('click', media)