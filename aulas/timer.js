function mudarCor(){
    let h = document.getElementsByTagName("h1")[0];
    h.style.color = "blueviolet";
}
function mudarTexto(){
    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML = "Novo Título";

    setTimeout(mudarCor, 1000);
}


var numero = 0;
var interval;
function atualizarTexto(){
    let h1 = document.getElementsByTagName("h1")[1];
    h1.innerHTML += " " + numero;
    numero++;
}
function iniciar(){
   interval = setInterval(atualizarTexto, 1500);
}
function parar(){
    clearInterval(interval);
}