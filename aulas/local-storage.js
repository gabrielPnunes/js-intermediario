onload = function () {
    let h = localStorage.getItem("h")
    let text = document.getElementById("h");
    text.innerHTML = h;
}

function armazenar(element) {
    let valor = element.value;
    console.log(valor)

    let text = document.getElementById("h");
    text.innerHTML = valor;

    localStorage.setItem("h", valor)
    console.log(h)
}

let p = { produto: "açucar", kgs: 3 }
localStorage.setItem("item", p)

let pr = localStorage.getItem("p")
console.log(p)