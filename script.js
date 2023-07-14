let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calculo(){
    console.log("fazendo o churras")


    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let tCarne = carnePessoa(duracao) * adultos + (carnePessoa(duracao) / 2 * criancas);
    let tCerva = cervasPessoa(duracao) * adultos + (cervasPessoa(duracao) / 2 * criancas);
    let tRefri =  refriPessoa(duracao) * adultos +  (refriPessoa(duracao) / 2 * criancas);

    
    resultado.innerHTML = `<p>${tCarne / 1000} kg de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(tCerva / 310)} latas de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(tRefri / 2000)} Garrafas de Refrigerente</p>`;
}

function carnePessoa(duracao){
    if (duracao >= 6){
        return 650;
    }
    else{
        return 400;
    }
}

function cervasPessoa(duracao){
    if (duracao >= 6){
        return 2000;
    }
    else{
        return 1200;
    }
}

function refriPessoa(duracao){
    if (duracao >= 6){
        return 1500;
    }
    else{
        return 1000;
    }
}