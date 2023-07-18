const calcular = document.getElementById('calcular')

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2)

        resultado.textContent = valorIMC;

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = "Você está abaixo do peso ideal."
        }

        else if (valorIMC < 25) {
            classificacao = "Você está com o peso ideal."
        }
        else if (valorIMC < 30) {
            classificacao = "Você está em sobrepeso."
        }
        else if (valorIMC < 35) {
            classificacao = "Você está com obesidade grau I."
        }
        else if (valorIMC < 40) {
            classificacao = "Você está com obesidade grau II."
        }
        else {
            classificacao = "com obesidade grau III, procure ajuda médica imediatamente!"
        }

        resultado.textContent = `Olá ${nome}, seu IMC é de ${valorIMC} e ${classificacao}`

    } else {
        resultado.textContent = "Existem campos que não foram preenchidos!"
    }
}

calcular.addEventListener('click', imc)